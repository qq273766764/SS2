using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace SS2.TableHelper
{
    public class DataHelper
    {
        public DataHelper(string ConnectString)
        {
            this.ConnectString = ConnectString;
        }

        /// <summary>
        /// 连接字符串
        /// </summary>
        public string ConnectString { get; set; }

        /// <summary>
        /// 加载数据
        /// </summary>
        /// <param name="tableName"></param>
        /// <param name="ID"></param>
        /// <returns></returns>
        public DataRow LoadData(string tableName, DataColumn[] columns, int ID)
        {
            //查询数据
            using (var conn = new SqlConnection(ConnectString))
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = string.Format("SELECT * FROM {0} WHERE ID={1}", tableName, ID);
                var adp = new SqlDataAdapter(cmd);
                var ds = new DataSet();
                if (ID > 0)
                {
                    conn.Open();
                    adp.Fill(ds);
                    conn.Close();
                }
                DataRow row = null;
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        return ds.Tables[0].Rows[0];
                    }
                    else
                    {
                        row = ds.Tables[0].NewRow();
                    }
                }
                return LoadDefalutRow(row, columns);
            }
        }
        /// <summary>
        /// 加载数据
        /// </summary>
        /// <param name="tableName"></param>
        /// <param name="ID"></param>
        /// <returns></returns>
        public DataRow LoadData(string tableName, DataColumn[] columns, string GUID)
        {
            //查询数据
            using (var conn = new SqlConnection(ConnectString))
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = string.Format("SELECT * FROM {0} WHERE SYS_GUID='{1}'", tableName, GUID);
                var adp = new SqlDataAdapter(cmd);
                var ds = new DataSet();
                {
                    conn.Open();
                    adp.Fill(ds);
                    conn.Close();
                }
                DataRow row = null;
                if (ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        return ds.Tables[0].Rows[0];
                    }
                    else
                    {
                        row = ds.Tables[0].NewRow();
                    }
                }
                return LoadDefalutRow(row, columns);
            }
        }
        /// <summary>
        /// 更新数据
        /// </summary>
        /// <param name="tableName"></param>
        /// <param name="ID"></param>
        /// <param name="row"></param>
        public int UpdateData(string tableName, int ID, DataColumn[] columns, DataRow row)
        {
            List<string> updFields = new List<string>();
            List<SqlParameter> updPars = new List<SqlParameter>();
            updPars.Add(new SqlParameter("@ID", ID));
            foreach (var col in columns)
            {
                if (row[col.ColumnName] == null || row[col.ColumnName].ToString().ToUpper() == "NULL" || string.IsNullOrEmpty(row[col.ColumnName].ToString()))
                {
                    updFields.Add(string.Format("[{0}]=NULL", col.ColumnName));
                }
                else
                {
                    updFields.Add(string.Format("[{0}]=@{0}", col.ColumnName));
                    updPars.Add(new SqlParameter(string.Format("@{0}", col.ColumnName), row[col.ColumnName]));
                }
            }
            using (var conn = new SqlConnection(ConnectString))
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = string.Format(@"UPDATE {0} SET {1} WHERE ID=@ID", tableName, string.Join(",", updFields));
                cmd.Parameters.AddRange(updPars.ToArray());
                conn.Open();
                var result = cmd.ExecuteNonQuery();
                conn.Close();
                return result;
            }
        }
        /// <summary>
        /// 添加数据
        /// </summary>
        /// <param name="tableName"></param>
        /// <param name="columns"></param>
        /// <param name="row"></param>
        /// <returns></returns>
        public int InsertData(string tableName, DataColumn[] columns, DataRow row)
        {
            List<SqlParameter> updPars = new List<SqlParameter>();
            List<DataColumn> cols = new List<DataColumn>();

            foreach (var col in columns)
            {
                if (col.ColumnType == DataColumnType.日期时间)
                {
                    if (string.IsNullOrEmpty(row[col.ColumnName].ToString()))
                    {
                        continue;
                    }
                }
                updPars.Add(new SqlParameter("@" + col.ColumnName, row[col.ColumnName]));
                cols.Add(col);
            }
            string insSql = string.Format("INSERT INTO [{0}] ({1}) VALUES ( {2} )",
                tableName,
                string.Join(",", cols.Select(i => i.ColumnName)),
                string.Join(",", cols.Select(i => "@" + i.ColumnName)));
            Debug.WriteLine(insSql);
            using (var conn = new SqlConnection(ConnectString))
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = insSql;
                cmd.Parameters.AddRange(updPars.ToArray());
                conn.Open();
                var result = cmd.ExecuteNonQuery();
                conn.Close();
                return result;
            }
        }

        /// <summary>
        /// 加载表格数据
        /// </summary>
        /// <returns></returns>
        public DataTable LoadTableData(string sql)
        {
            //查询数据
            using (var conn = new SqlConnection(ConnectString))
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = sql;
                var adp = new SqlDataAdapter(cmd);
                var ds = new DataSet();
                conn.Open();
                adp.Fill(ds);
                conn.Close();
                if (ds.Tables.Count > 0)
                {
                    return ds.Tables[0];
                }
                return null;
            }
        }

        /// <summary>
        /// 根据默认值创建数据
        /// </summary>
        /// <param name="row"></param>
        /// <param name="columns"></param>
        /// <returns></returns>
        public DataRow LoadDefalutRow(DataRow row, DataColumn[] columns)
        {
            if (row == null)
            {
                var tt = new DataTable();
                tt.Columns.Add("ID", typeof(Int32));
                foreach (var col in columns)
                {
                    switch (col.ColumnType)
                    {
                        case DataColumnType.日期时间:
                            tt.Columns.Add(col.ColumnName, typeof(System.DateTime));
                            break;
                        case DataColumnType.是否:
                            tt.Columns.Add(col.ColumnName, typeof(System.Boolean));
                            break;
                        case DataColumnType.数字:
                            tt.Columns.Add(col.ColumnName, typeof(System.Int32));
                            break;
                        case DataColumnType.金额:
                        case DataColumnType.金额四位小数:
                            tt.Columns.Add(col.ColumnName, typeof(System.Decimal));
                            break;
                        default:
                            tt.Columns.Add(col.ColumnName);
                            break;
                    }
                }
                row = tt.NewRow();
                row["ID"] = 0;
            }

            foreach (var col in columns)
            {
                if (!string.IsNullOrEmpty(col.DefalutValue))
                {
                    switch (col.ColumnType)
                    {
                        case DataColumnType.日期时间:
                            DateTime valDate;
                            if (DateTime.TryParse(col.DefalutValue, out valDate))
                            {
                                row[col.ColumnName] = valDate;
                            }
                            break;
                        case DataColumnType.是否:
                            bool valBool;
                            if (bool.TryParse(col.DefalutValue, out valBool))
                            {
                                row[col.ColumnName] = valBool;
                            }
                            break;
                        case DataColumnType.数字:
                            int valInt;
                            if (int.TryParse(col.DefalutValue, out valInt))
                            {
                                row[col.ColumnName] = valInt;
                            }
                            break;
                        case DataColumnType.金额:
                        case DataColumnType.金额四位小数:
                            decimal valAmt;
                            if (decimal.TryParse(col.DefalutValue, out valAmt))
                            {
                                row[col.ColumnName] = valAmt;
                            }
                            break;
                        default:
                            row[col.ColumnName] = col.DefalutValue;
                            break;
                    }
                }
            }
            return row;
        }
    }
}