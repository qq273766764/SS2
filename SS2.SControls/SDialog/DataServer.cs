using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace SS2.SDialog
{
    public class DataServer
    {
        public static DataTable GetDataSource(DialogItem dlg, Dictionary<string, string> paras)
        {
            #region sql检查
            //foreach (var p in paras)
            //{
            //    if (!SReport.ReportSqlValidator.ValidateParaValue(p.Value))
            //    {
            //        throw new Exception("搜索值错误");
            //    }
            //}

            #endregion

            #region 过滤
            List<string> where = FilterWhere(dlg, paras, FilterType.List);
            //树过滤
            if (dlg.ShowTree != null)
            {
                if (paras.ContainsKey(dlg.ShowTree.ParaKey) && !string.IsNullOrEmpty(paras[dlg.ShowTree.ParaKey]))
                {
                    where.Add(dlg.ShowTree.GetWhereSql(paras));
                }
                else if (dlg.ShowTree.IsRequired)
                {
                    where.Add("0=1");
                }
            }
            #endregion

            //判断是否直接返回DataTable
            if (dlg.DataSourceGetter != null)
            {
                return dlg.DataSourceGetter(paras);
            }

            string sql = "select top " + Configuration.LoadCountMax + " * from(" + (dlg.SqlGetter == null ? dlg.Sql : dlg.SqlGetter(where.ToArray())) + ") as tttt";
            //if (where.Count > 0) { sql = sql + " where " + string.Join(" and ", "(" + where + ")"); }
            sql += " where 1=1 ";
            foreach (var w in where)
            {
                sql += "and (" + w + ")";
            }

            //添加排序
            if (!string.IsNullOrEmpty(dlg.OrderString))
            {
                sql += " ORDER BY " + dlg.OrderString;
            }

            //查询数据
            using (var conn = new SqlConnection(dlg.ConnStr))
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = sql;
                var adapter = new SqlDataAdapter(cmd);
                var dt = new DataTable();
                adapter.Fill(dt);
                var count = dt.Rows.Count;
                return dt;
            }
        }

        public static List<DialogTreeJson> GetTreeDataSource(DialogItem dlg, Dictionary<string, string> paras)
        {
            var tt = dlg.ShowTree;
            DataTable dt = new DataTable();

            if (tt.DataSourceGetter == null)
            {
                var where = FilterWhere(dlg, paras, FilterType.Tree);
                string sql = tt.Sql;
                if (where.Count > 0)
                {
                    sql = "select * from(" + tt.Sql + ") as tttt where " + string.Join(" and ", where);
                }
                //查询数据
                using (var conn = new SqlConnection(dlg.ConnStr))
                {
                    var cmd = conn.CreateCommand();
                    cmd.CommandText = sql;
                    var adapter = new SqlDataAdapter(cmd);
                    adapter.Fill(dt);
                    var count = dt.Rows.Count;
                }
            }
            else
            {
                dt = tt.DataSourceGetter(paras);
            }

            //数据转换
            if (dt.Rows.Count > 0)
            {
                //查找父键
                List<object> ParentIds = new List<object>();
                if (string.IsNullOrEmpty(tt.ParentKeyValues))
                {
                    List<object> AllIds = new List<object>();
                    foreach (DataRow row in dt.Rows) { AllIds.Add(row[tt.KeyFieldName]); }
                    foreach (DataRow row in dt.Rows)
                    {
                        var pp = row[tt.ParentFieldName];
                        if (!AllIds.Contains(pp) && pp != null && pp.GetType() != typeof(System.DBNull))
                        {
                            ParentIds.Add(row[tt.ParentFieldName]);
                        }
                    }
                }
                else
                {
                    var ks = tt.ParentKeyValues.Split(',').ToList();
                    foreach (var kk in ks) { ParentIds.Add(kk); }
                }
                //
                if (ParentIds.Count == 0) { ParentIds.Add(null); }
                //查找子元素
                return ParentIds.Distinct().SelectMany(i => GetChildrens(tt, dt, i, true)).Distinct().ToList();
            }
            else
            {
                return new List<DialogTreeJson>();
            }
        }

        static List<DialogTreeJson> GetChildrens(DialogTree dd, DataTable dt, object pid, bool expend = false)
        {
            var result = new List<DialogTreeJson>();
            var where = "1=1";
            if (pid == null)
            {
                where = dd.ParentFieldName + " is null";
            }
            else
            {
                var col = dt.Columns[dd.ParentFieldName];
                where = dd.ParentFieldName + " = " + (col.DataType == typeof(string) ? "'" + pid + "'" : pid);
            }
            var childRows = dt.Select(where);
            if (childRows.Length > 0)
            {
                foreach (var r in childRows)
                {
                    var ti = new DialogTreeJson()
                    {
                        id = r[dd.KeyFieldName].ToString(),
                        text = r[dd.TextFieldName].ToString(),
                        value = r[dd.ValueFieldName].ToString(),
                        obj = SerializeDataRow(r),
                        state = (dd.ExpendNode || expend) ? "open" : "closed"
                    };
                    var subChilds = GetChildrens(dd, dt, ti.id);
                    if (subChilds != null && subChilds.Count > 0)
                    {
                        ti.children = subChilds.ToArray();
                    }
                    else {
                        ti.state = null;//没有子节点
                    }
                    if (dd.IconClsGetter != null)
                    {
                        ti.iconCls = dd.IconClsGetter(r);
                    }
                    result.Add(ti);
                }
            }
            return result;
        }

        static string SerializeDataRow(DataRow r)
        {
            List<string> ss = new List<string>();
            foreach (DataColumn col in r.Table.Columns)
            {
                var value = JsonConvert.SerializeObject(r[col.ColumnName]);
                ss.Add(col.ColumnName + ":" + value);
            }
            return "{" + string.Join(",", ss) + "}";
        }

        static List<string> FilterWhere(DialogItem dlg, Dictionary<string, string> paras, FilterType ftype)
        {
            List<string> where = new List<string>();

            //URL参数过滤
            if (dlg.Paras != null)
            {
                foreach (var pp in dlg.Paras)
                {
                    if (paras.ContainsKey(pp.ParaKey))
                    {
                        if (!string.IsNullOrEmpty(paras[pp.ParaKey]))
                        {
                            SReport.ReportSqlValidator.ValidateSqlPara(paras[pp.ParaKey]);
                            if (pp.FilterType == ftype || pp.FilterType == FilterType.ListAndTree)
                            {
                                where.Add(pp.GetWhereSql(paras));
                            }
                        }
                    }
                }
            }
            //搜索过滤
            if (dlg.Searchs != null)
            {
                foreach (var ss in dlg.Searchs)
                {
                    if (paras.ContainsKey(ss.ParaKey))
                    {
                        if (!string.IsNullOrEmpty(paras[ss.ParaKey]))
                        {
                            SReport.ReportSqlValidator.ValidateSqlPara(paras[ss.ParaKey]);
                            if (ss.FilterType == ftype || ss.FilterType == FilterType.ListAndTree)
                            {
                                where.Add(ss.GetWhereSql(paras));
                            }
                        }
                    }
                    else if (ss.IsRequired)
                    {
                        where.Add("1=0");
                    }
                }
            }
            return where;
        }
    }
}