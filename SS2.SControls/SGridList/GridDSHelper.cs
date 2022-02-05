using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;

namespace SS2.SGridList
{
    public class GridDSHelper
    {
        internal static List<GridList> Settings;

        public static void RegisterSettings(IEnumerable<GridList> settings)
        {
            Settings = settings.ToList();
        }
        public DataTable GetListData(GridList list, string search, int pageindex, int pagesize, string order, out int count)
        {
            using (var conn = new SqlConnection(list.DataSource.ConnectionString))
            {
                var cmdList = conn.CreateCommand();
                StringBuilder sb = new StringBuilder();
                sb.AppendLine(CreateCountSql(list, search));
                sb.AppendLine(CreateListSql(list, search, pageindex, pagesize, order));
                cmdList.CommandText = sb.ToString();
                var adapterList = new SqlDataAdapter(cmdList);
                var dtList = new DataSet();
                adapterList.Fill(dtList);
                count = Convert.ToInt32(dtList.Tables[0].Rows[0][0]);
                return dtList.Tables[1];
            }
        }
        public GridList GetList(string key)
        {
            return Settings.FirstOrDefault(i => i.Key == key);
        }
        public bool DelListData(GridList list, string id)
        {
            list.EditFormLayOut.OnDelete?.Invoke(list, id);
            using (var conn = new SqlConnection(list.DataSource.ConnectionString))
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = string.Format("DELETE {0} WHERE {1}='{2}'", list.DataSource.TableName, list.KeyFieldName, id);
                conn.Open();
                var result = cmd.ExecuteNonQuery() > 0;
                return result;
            }
        }
        public DataRow GetEditData(GridList list, string id)
        {
            using (var conn = new SqlConnection(list.DataSource.ConnectionString))
            {
                var cmd = conn.CreateCommand();
                var dt = new DataTable();
                cmd.CommandText = string.Format("SELECT * FROM ({0}) AS a WHERE a.{1}='{2}'", list.DataSource.QuerySQL, list.KeyFieldName, id);
                var adapter = new SqlDataAdapter(cmd);
                adapter.Fill(dt);
                DataRow row;
                if (dt.Rows.Count > 0)
                {
                    row = dt.Rows[0];
                }
                else
                {
                    row = dt.NewRow();
                }
                list.EditFormLayOut.OnLoad?.Invoke(row);
                return row;
            }
        }
        public bool UpdateListData(GridList list, string id, DataRow newValue)
        {
            list.EditFormLayOut.OnSave?.Invoke(newValue);

            List<string> update = new List<string>();

            foreach (var col in list.Columns.Where(i => i.EnableUpdate))
            {
                if (newValue[col.FieldName] == null)
                {
                    update.Add(string.Format("[{0}]=null", col.FieldName));
                }
                else
                {
                    update.Add(string.Format("[{0}]='{1}'", col.FieldName, newValue[col.FieldName]));
                }
            }

            string sql = "";
            sql = string.Format("UPDATE {0} SET {1} WHERE {2}='{3}'",
                list.DataSource.TableName,
                string.Join(",", update),
                list.KeyFieldName, id);
            using (var conn = new SqlConnection(list.DataSource.ConnectionString))
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = sql;
                conn.Open();
                return cmd.ExecuteNonQuery() > 0;
            }
        }
        public bool AddNewData(GridList list, DataRow newValue)
        {
            list.EditFormLayOut.OnSave?.Invoke(newValue);
            List<string> values = new List<string>();
            List<string> fields = new List<string>();

            foreach (var col in list.Columns.Where(i => i.EnableUpdate))
            {
                if (newValue[col.FieldName] != null)
                {
                    fields.Add(string.Format("[{0}]", col.FieldName));
                    values.Add(string.Format("'{0}'", newValue[col.FieldName]));
                }
            }

            string sql = string.Format("INSERT INTO {0} ({1}) VALUES ({2})",
                list.DataSource.TableName,
                string.Join(",", fields),
                string.Join(",", values));

            using (var conn = new SqlConnection(list.DataSource.ConnectionString))
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = sql;
                conn.Open();
                return cmd.ExecuteNonQuery() > 0;
            }
        }
        string CreateListSql(GridList list, string search, int pageindex = 0, int pagesize = 0, string order = "")
        {
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT ");
            if (pagesize > 0)
            {
                string pageOrder = string.IsNullOrEmpty(order) ? ("[" + list.KeyFieldName + "]") : order;
                sql.Append(" ROW_NUMBER() OVER (ORDER BY " + pageOrder + ") AS __RowNumber, ");
            }
            //sql.Append(string.Join(",", rpt.YAxis.Select(i => string.Format("[{0}]", i.Field))));
            sql.Append(" * ");
            sql.Append(AddWhere(list.DataSource.QuerySQL, "", search));

            if (pagesize == 0) { sql.AppendFormat(" ORDER BY {0}", list.KeyFieldName); }

            if (pagesize > 0)
            {
                if (string.IsNullOrEmpty(order)) { order = string.Format("[{0}]", list.KeyFieldName); }
                order = string.Format(" ORDER BY {0}", order);

                return string.Format("SELECT * FROM ({0}) as RRR WHERE RRR.__RowNumber>={1} and RRR.__RowNumber<={2} " + order,
                    sql.ToString(), (pageindex - 1) * pagesize + 1, pageindex * pagesize);
            }
            else
            {
                return sql.ToString();
            }
        }
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
                whereEnd += "(" + filter + ")";
            }
            sql = string.Format(" FROM {0} AS T ", sql);
            if (!string.IsNullOrEmpty(whereEnd)) { sql = sql + whereEnd; }
            return sql;
        }
        string CreateCountSql(GridList list, string search)
        {
            StringBuilder sql = new StringBuilder();
            sql.Append("SELECT COUNT(*) as CNT ");
            sql.Append(AddWhere(list.DataSource.QuerySQL, "", search));
            return sql.ToString();
        }
    }
}