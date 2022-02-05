using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool.DataBaseAdapter
{
    public class MSSqlDBHelper
    {
        public string ConnectionString { get; set; }
        private MSSqlDBHelper()
        {
            //this.ConnectionString = new Linq.grDataContext().Connection.ConnectionString;
        }
        public MSSqlDBHelper(string ConnectionString)
        {
            this.ConnectionString = ConnectionString;
        }
        public DataSet GetDataSet(string sql)
        {
            var connBuilder = new SqlConnectionStringBuilder(ConnectionString);
            connBuilder.ConnectTimeout = 2;
            using (var conn = new SqlConnection(connBuilder.ConnectionString))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = sql;
                SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                DataSet ds = new DataSet();
                conn.Open();
                adapter.Fill(ds);
                conn.Close();
                return ds;
            }
        }
        public DataTable GetDataTable(string sql)
        {
            var ds = GetDataSet(sql);

            if (ds.Tables.Count > 0)
            {
                return ds.Tables[0];
            }
            else
            {
                return null;
            }
        }
        public List<T> GetList<T>(string sql) where T : class, new()
        {
            var ds = GetDataSet(sql);
            if (ds.Tables.Count > 0)
            {
                var table = ds.Tables[0];
                return GetList<T>(table);
            }
            return new List<T>();
        }
        public List<T> GetList<T>(DataTable table) where T : class, new()
        {
            var result = new List<T>();
            var type = typeof(T);
            var prots = type.GetProperties();
            foreach (DataRow r in table.Rows)
            {
                var data = new T();
                foreach (var p in prots)
                {
                    if (table.Columns.Contains(p.Name))
                    {
                        if (r[p.Name] != DBNull.Value) { p.SetValue(data, r[p.Name], null); }
                    }
                }
                result.Add(data);
            }
            return result;
        }
        public int ExcuteSql(string sql,List<SqlParameter> paras)
        {
            var connBuilder = new SqlConnectionStringBuilder(ConnectionString);
            connBuilder.ConnectTimeout = 2;
            using (var conn = new SqlConnection(connBuilder.ConnectionString))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = sql;
                cmd.Parameters.AddRange(paras.ToArray());
                conn.Open();
                var result= cmd.ExecuteNonQuery();
                conn.Close();
                return result;
            }
        }
    }
}
