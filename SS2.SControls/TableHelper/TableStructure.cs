using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;

namespace SS2.TableHelper
{
    public class TableStructure
    {
        public TableStructure(string ConnectString)
        {
            this.ConnectString = ConnectString;
        }
        /// <summary>
        /// 连接字符串
        /// </summary>
        public string ConnectString { get; set; }
        /// <summary>
        /// 创建数据表
        /// </summary>
        /// <param name="Columns"></param>
        public void CreateTable(string TableName, IEnumerable<DataColumn> Columns)
        {
            if (Columns.Count() == 0) { return; }
            StringBuilder create = new StringBuilder();
            create.Append("CREATE TABLE [dbo].[" + TableName + "]");
            create.Append("(");
            create.Append("[ID] [int] IDENTITY(1,1) primary key,");
            create.Append(string.Join(",", Columns.Select(i => string.Format("[{0}] {1} NULL", i.ColumnName, i.DataBaseType))));
            create.Append(")");
            //查询数据
            using (var conn = new SqlConnection(ConnectString))
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = create.ToString();
                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();
            }
        }
        /// <summary>
        /// 更新表结构
        /// </summary>
        /// <param name="OldColumns"></param>
        /// <param name="NewColumns"></param>
        public void UpdateTable(string TableName, IEnumerable<DataColumn> OldColumns, IEnumerable<DataColumn> NewColumns)
        {
            var suffix = "_" + DateTime.Now.ToString("MMddHHmmss");

            List<DataColumn> addColumns = new List<DataColumn>();       //增加没有的列
            List<DataColumn> renameColumns = new List<DataColumn>();    //新加列之后，原列的名称修改改掉
            foreach (var col in NewColumns)
            {
                var oldC = OldColumns.Where(i => i.ColumnName.ToUpper() == col.ColumnName.ToUpper()).FirstOrDefault();
                if (oldC == null)
                {
                    addColumns.Add(col);
                }
                else if (NeedUpdate(oldC.ColumnType, col.ColumnType))
                {
                    if (!UpdateDataType(TableName, col))
                    {
                        renameColumns.Add(oldC);
                        addColumns.Add(col);
                    }
                }
            }
            StringBuilder sql = new StringBuilder();
            foreach (var col in renameColumns)
            {
                string newName = col.ColumnName + suffix;
                sql.AppendFormat("exec sp_rename '{0}.{1}','{2}','column';", TableName, col.ColumnName, newName);
            }
            foreach (var col in addColumns)
            {
                sql.AppendFormat("ALTER TABLE [dbo].[{0}] ADD {1} {2};", TableName, col.ColumnName, col.DataBaseType);
            }
            if (renameColumns.Count > 0 || addColumns.Count > 0)
            {
                using (var conn = new SqlConnection(ConnectString))
                {
                    var cmd = conn.CreateCommand();
                    cmd.CommandText = sql.ToString();
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
            }

        }
        /// <summary>
        /// 更新表结构
        /// </summary>
        /// <param name="TableName"></param>
        /// <param name="NewColumns"></param>
        public void UpdateTable(string TableName, IEnumerable<DataColumn> NewColumns)
        {
            var oldColunms = GetTableColunm(TableName);
            if (oldColunms.Count == 0)
            {
                CreateTable(TableName, NewColumns);
            }
            else
            {
                UpdateTable(TableName, oldColunms, NewColumns);
            }
        }

        /// <summary>
        /// 获取数据表结构
        /// </summary>
        /// <param name="TableName"></param>
        /// <returns></returns>
        public List<DataColumn> GetTableColunm(string TableName)
        {
            var cols = new List<DataColumn>();
            string sql = string.Format(@"
SELECT syscolumns.name,systypes.name as typename,syscolumns.isnullable,syscolumns.length,syscolumns.xprec,syscolumns.xscale
FROM syscolumns, systypes 
WHERE syscolumns.xusertype = systypes.xusertype 
AND syscolumns.id = object_id('{0}')", TableName);
            using (var conn = new SqlConnection(ConnectString))
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = sql.ToString();
                var adp = new SqlDataAdapter(cmd);
                var ds = new DataSet();
                conn.Open();
                adp.Fill(ds);
                conn.Close();
                if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        var colname = row["name"] as string;
                        var typename = row["typename"] as string;
                        var length = Convert.ToInt32(row["length"]);
                        var xprec = Convert.ToInt32(row["xprec"]);
                        var xscale = Convert.ToInt32(row["xscale"]);
                        cols.Add(new DataColumn() { ColumnName = colname, DataBaseType = DataColumnType2DB.FormatDBType(typename, length, xprec, xscale) });
                    }
                }
            }
            return cols;
        }

        /// <summary>
        /// 更新表字段类型
        /// </summary>
        /// <returns></returns>
        bool UpdateDataType(string TableName, DataColumn col)
        {
            try
            {
                using (var conn = new SqlConnection(ConnectString))
                {
                    StringBuilder sqlUpdate = new StringBuilder();
                    sqlUpdate.AppendFormat("ALTER TABLE [dbo].[{0}] ALTER COLUMN {1} {2};", TableName, col.ColumnName, col.DataBaseType);
                    //更新字段
                    var cmd = conn.CreateCommand();
                    cmd.CommandText = sqlUpdate.ToString();
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
                return true;
            }
            catch
            {
                return false;
            }
        }

        /// <summary>
        /// 判断字段是否需要更新
        /// </summary>
        /// <param name="oldC"></param>
        /// <param name="newC"></param>
        /// <returns></returns>
        bool NeedUpdate(DataColumnType oldC, DataColumnType newC)
        {
            if (oldC == newC) { return false; }

            Dictionary<DataColumnType, DataColumnType[]> ContainTypes = new Dictionary<DataColumnType, DataColumnType[]>();
            ContainTypes.Add(DataColumnType.文本, new DataColumnType[] { });
            ContainTypes.Add(DataColumnType.其他, new DataColumnType[] { DataColumnType.文本 });
            ContainTypes.Add(DataColumnType.长文本, new DataColumnType[] { DataColumnType.文本, DataColumnType.其他 });
            ContainTypes.Add(DataColumnType.最长文本, new DataColumnType[] { DataColumnType.文本, DataColumnType.其他, DataColumnType.最长文本 });
            ContainTypes.Add(DataColumnType.最长文本MAX, new DataColumnType[] { DataColumnType.文本, DataColumnType.其他, DataColumnType.最长文本, DataColumnType.最长文本MAX });
            ContainTypes.Add(DataColumnType.富文本, new DataColumnType[] { DataColumnType.文本, DataColumnType.其他, DataColumnType.最长文本, DataColumnType.最长文本MAX, DataColumnType.富文本 });
            ContainTypes.Add(DataColumnType.金额, new DataColumnType[] { DataColumnType.数字 });
            ContainTypes.Add(DataColumnType.金额四位小数, new DataColumnType[] { DataColumnType.金额四位小数, DataColumnType.金额, DataColumnType.数字 });
            ContainTypes.Add(DataColumnType.数字, new DataColumnType[] { });
            ContainTypes.Add(DataColumnType.日期时间, new DataColumnType[] { });
            ContainTypes.Add(DataColumnType.是否, new DataColumnType[] { });

            if (ContainTypes[oldC].Length > 0)
            {
                if (ContainTypes[oldC].Contains(newC))
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }

            return true;
        }
    }
}