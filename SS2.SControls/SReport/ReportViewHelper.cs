using SS2.SReport.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Web;

namespace SS2.SReport
{
    public class ReportViewHelper
    {
        readonly string EmptySQL = "SELECT 1 WHERE 1=0";
        readonly string SearchKey = "$SEARCH$";

        static List<gr_Report> ReportDataSources
        {
            get
            {
                //if (_ReportDataSources != null)
                //    return _ReportDataSources;
                if (funGetReportDataSources != null)
                {
                    return funGetReportDataSources();
                }
                else
                {
                    return _ReportDataSources;
                }
            }
            set
            {
                _ReportDataSources = value;
            }
        }
        static List<gr_Report> _ReportDataSources;
        static Func<List<gr_Report>> funGetReportDataSources;

        public static void RegisterReports(List<gr_Report> sources)
        {
            ReportDataSources = sources;
        }

        public static void RegisterReports(Func<List<gr_Report>> sources)
        {
            funGetReportDataSources = sources;
        }

        public DataSet GetStaticDSAll(gr_Report report, string search = null)
        {
            StringBuilder sql = new StringBuilder();
            sql.AppendLine(report.Static.Count > 0 && (report.XAxis.Count > 0 || report.YAxis.Count > 0) ? CreateStaticSql(report, search, true, true) : EmptySQL);
            sql.AppendLine(report.XAxis.Count > 0 ? CreateXAxisSql(report, search) : EmptySQL);
            sql.AppendLine(report.YAxis.Count > 0 ? CreateYAxisSql(report, search) : EmptySQL);
            sql.AppendLine(report.Static.Count > 0 && report.XAxis.Count > 0 ? CreateStaticSql(report, search, true, false) : EmptySQL);
            sql.AppendLine(report.Static.Count > 0 && report.YAxis.Count > 0 ? CreateStaticSql(report, search, false, true) : EmptySQL);
            sql.AppendLine(report.Static.Count > 0 ? CreateStaticSql(report, search, false, false) : EmptySQL);
            return new DBHelper(report.DataSource.Connection.GetConnectString()).GetDataSet(sql.ToString());
        }

        public DataSet GetStaticDSWithXY(gr_Report report, string search = null)
        {
            StringBuilder sql = new StringBuilder();
            sql.AppendLine(report.Static.Count > 0 && (report.XAxis.Count > 0 || report.YAxis.Count > 0) ? CreateStaticSql(report, search, true, true) : EmptySQL);
            sql.AppendLine(report.XAxis.Count > 0 ? CreateXAxisSql(report, search) : EmptySQL);
            sql.AppendLine(report.YAxis.Count > 0 ? CreateYAxisSql(report, search) : EmptySQL);
            return new DBHelper(report.DataSource.Connection.GetConnectString()).GetDataSet(sql.ToString());
        }

        public DataSet GetStaitcDS(gr_Report report, string search = null)
        {
            StringBuilder sql = new StringBuilder();
            sql.AppendLine(report.Static.Count > 0 && (report.XAxis.Count > 0 || report.YAxis.Count > 0) ? CreateStaticSql(report, search, true, true) : EmptySQL);
            return new DBHelper(report.DataSource.Connection.GetConnectString()).GetDataSet(sql.ToString());
        }

        public gr_Report GetReport(int rid)
        {
            if (ReportDataSources == null)
            {
                ReportDataSources = new List<gr_Report>();
            }
            return ReportDataSources.FirstOrDefault(i => i.ID == rid);
        }

        public string CreateStaticSql(gr_Report rpt, string search, bool GroupX = true, bool GroupY = true)
        {
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT ");
            List<string> selectFields = new List<string>();
            List<string> groupFields = new List<string>();
            if (GroupY && rpt.YAxis.Count > 0) { selectFields.AddRange(rpt.YAxis.Select(i => string.Format("[{0}]", i.Field))); }
            if (GroupX && rpt.XAxis.Count > 0) { selectFields.AddRange(rpt.XAxis.Select(i => string.Format("[{0}]", i.Field))); }
            if (rpt.Static.Count > 0) { selectFields.AddRange(rpt.Static.Select(i => string.Format("{0}([{1}]) AS [{1}]", i.Method, i.Field))); }
            if (GroupX && rpt.Static.Count > 0) { groupFields.AddRange(rpt.XAxis.Select(i => string.Format("[{0}]", i.Field))); }
            if (GroupY && rpt.Static.Count > 0) { groupFields.AddRange(rpt.YAxis.Select(i => string.Format("[{0}]", i.Field))); }

            sql.Append(string.Join(",", selectFields));
            sql.Append(AddWhere(rpt.DataSource.Sql, rpt.FilterString, search));

            if (rpt.Static.Count > 0 && groupFields.Count > 0) { sql.AppendFormat(" GROUP BY {0}", string.Join(",", groupFields)); }
            if (groupFields.Count > 0) { sql.AppendFormat(" ORDER BY {0}", string.Join(",", groupFields)); }

            return ValidateSql(sql);
        }

        public string CreateXAxisSql(gr_Report rpt, string search)
        {
            if (rpt.XAxis.Count == 0) { return string.Empty; }
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT DISTINCT ");
            sql.Append(string.Join(",", rpt.XAxis.Select(i => string.Format("[{0}]", i.Field))));
            sql.Append(AddWhere(rpt.DataSource.Sql, rpt.FilterString, search));
            sql.AppendFormat(" ORDER BY {0}", string.Join(",", rpt.XAxis.Select(i => string.Format("[{0}]", i.Field))));
            return ValidateSql(sql);
        }

        public string CreateYAxisSql(gr_Report rpt, string search)
        {
            if (rpt.YAxis.Count == 0) { return string.Empty; }
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT DISTINCT ");
            sql.Append(string.Join(",", rpt.YAxis.Select(i => string.Format("[{0}]", i.Field))));
            sql.Append(AddWhere(rpt.DataSource.Sql, rpt.FilterString, search));
            sql.AppendFormat(" ORDER BY {0}", string.Join(",", rpt.YAxis.Select(i => string.Format("[{0}]", i.Field))));
            return ValidateSql(sql);
        }

        public string CreateDetialSql(gr_Report rpt, string search, int pageindex = 0, int pagesize = 0, string order = "")
        {
            ReportSqlValidator.ValidateSqlPara(order);

            if (rpt.YAxis.Count == 0) { return string.Empty; }
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT ");
            if (pagesize > 0)
            {
                #region 排序功能
                if (string.IsNullOrEmpty(order))
                {
                    order = string.Join(",", rpt.YAxis.Where(i => !string.IsNullOrEmpty(i.OrderString)).Select(i => "[" + i.Field + "] " + i.OrderString));
                    if (string.IsNullOrEmpty(order))
                    {
                        order = string.Format("[{0}]", rpt.YAxis.First().Field);
                    }
                }
                #endregion

                sql.Append(" ROW_NUMBER() OVER (ORDER BY " + order + ") AS __RowNumber, ");
            }
            sql.Append(" * ");
            sql.Append(AddWhere(rpt.DataSource.Sql, rpt.FilterString, search));

            if (pagesize == 0) { sql.AppendFormat(" ORDER BY {0}", string.Join(",", rpt.YAxis.Select(i => string.Format("[{0}]", i.Field)))); }

            if (pagesize > 0)
            {
                return string.Format("SELECT * FROM ({0}) as RRR WHERE RRR.__RowNumber>={1} and RRR.__RowNumber<={2} ",
                    ValidateSql(sql), (pageindex - 1) * pagesize + 1, pageindex * pagesize);
            }
            else
            {
                return ValidateSql(sql);
            }
        }

        public string CreateDetialStaticSql(gr_Report rpt, string search)
        {
            return CreateStaticSql(rpt, search, false, false);
        }

        public string CreateDetailCountSql(gr_Report rpt, string search)
        {
            if (rpt.YAxis.Count == 0) { return string.Empty; }
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT COUNT(*) as CNT ");
            sql.Append(AddWhere(rpt.DataSource.Sql, rpt.FilterString, search));
            return ValidateSql(sql);
        }

        //public bool CopyReport(int rid, out string error)
        //{
        //    error = string.Empty;
        //    try
        //    {
        //        var rview = GetReport(rid);
        //        var rpt = rview.Report;
        //        using (var ctx = new Linq.grDataContext())
        //        {
        //            //添加报表
        //            rpt.ID = 0;
        //            rpt.Title = rpt.Title + "(副本)";
        //            ctx.gr_Report.InsertOnSubmit(rpt);
        //            ctx.SubmitChanges();
        //            //添加列
        //            rview.XAxis.AddRange(rview.YAxis);
        //            foreach (var aa in rview.XAxis)
        //            {
        //                aa.ReportID = rpt.ID;
        //                ctx.gr_Axis.InsertOnSubmit(aa);
        //            }
        //            //添加统计
        //            foreach (var stat in rview.Static)
        //            {
        //                stat.ReportID = rpt.ID;
        //                ctx.gr_Static.InsertOnSubmit(stat);
        //            }
        //            //添加搜索
        //            foreach (var seach in rview.Searchs)
        //            {
        //                seach.ReportID = rpt.ID;
        //                ctx.gr_Search.InsertOnSubmit(seach);
        //            }
        //            ctx.SubmitChanges();
        //        }
        //    }
        //    catch (Exception exp)
        //    {
        //        error = exp.Message;
        //        return false;
        //    }
        //    return true;
        //}

        string AddWhere(string sql, string filter, string search)
        {
            var whereEnd = string.Empty;
            var isTable = false;
            sql = sql.Trim();
            //判断是否是简单查询
            var tmp = sql.ToLower();
            if (tmp.StartsWith("select * from "))
            {
                tmp = tmp.Substring(14);
                if (!tmp.Trim().Contains(" "))
                {
                    isTable = true;
                    sql = tmp;
                }
            }
            if (!isTable)
            {
                sql = "(" + sql + ")";
            }
            //数据检索
            if (!string.IsNullOrEmpty(search))
            {
                whereEnd += "WHERE " + search;
            }
            //数据源过滤
            if (!string.IsNullOrEmpty(filter))
            {
                if (!whereEnd.Trim().StartsWith("WHERE"))
                {
                    whereEnd += "WHERE";
                }
                else
                {
                    whereEnd += " AND ";
                }
                whereEnd += "(" + transSystemValue(filter) + ")";
            }
            sql = string.Format(" FROM {0} AS T ", sql);

            if (!string.IsNullOrEmpty(whereEnd))
            {
                if (sql.Contains(SearchKey))
                {
                    sql = sql.Replace(SearchKey, whereEnd.Replace("WHERE", "AND"));
                }
                else
                {
                    sql = sql + whereEnd;
                }
            }
            sql = sql.Replace(SearchKey, string.Empty);
            return ValidateSql(sql);
        }

        string transSystemValue(string filter)
        {
            if (!string.IsNullOrEmpty(filter))
            {
                foreach (var v in new ReportVariableCollection().Variables)
                {
                    filter = filter.Replace(v.Key, ReportVariableCollection.ResumeValue(v));
                }
                ReportVariableCollection.ResumeURLPata(filter);
            }
            return filter;
        }

        string ValidateSql(StringBuilder sql) {
            return ValidateSql(sql.ToString());
        }

        string ValidateSql(string sql)
        {
            if (!ReportSqlValidator.Validate(sql))
            {
                throw new Exception("查询语句错误");
            }
            return sql;
        }
    }
}