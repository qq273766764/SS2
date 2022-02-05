using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SS2.SReportTool.Model;

namespace SS2.SReportTool.DataBaseAdapter
{
    public class MSSqlServerDataBaseAdapter : IDataBaseAdapter
    {
        public DataTable FindDataBases(string connStr)
        {
            return new MSSqlDBHelper(connStr).GetDataTable("SELECT Name FROM Master..SysDatabases ORDER BY Name");
        }

        public DataColumnCollection FindDataSourceColumns(ReportDataSource ds)
        {
            var connStr = ds.ConnectionString;
            if (ds.DataSourceGetter != null)
            {
                var result = ds.DataSourceGetter(new ViewDataPara() { PageIndex = 0, PageSize = 0 });
                if (result.ListData != null) { return result.ListData.Columns; }
                if (result.StaticData != null) { return result.StaticData.Columns; }
            }
            else
            {
                //查询空表
                var sql = $"SELECT * FROM ({ds.DataSourceSql}) AS _RRRR_COLS WHERE 1=0";
                var result = new MSSqlDBHelper(ds.ConnectionString).GetDataTable(sql);
                return result.Columns;
            }
            return null;
        }

        public DataTable FindTables(string connStr)
        {
            return new MSSqlDBHelper(connStr).GetDataTable("select name from sys.all_objects where [type]='U'");
        }

        public DataTable FindViews(string connStr)
        {
            return new MSSqlDBHelper(connStr).GetDataTable("SELECT Name from sys.all_objects where [type]='V' and schema_id=1");
        }

        public int InsertReportData(ReportSetting report, List<ReportColumn> cols, DataTable data)
        {
            if (report.ImportSetting == null) { return 0; }
            if (data.Rows.Count == 0) { return 0; }
            var dbHelper = new MSSqlDBHelper(report.DataSource.ConnectionString);
            StringBuilder sql = new StringBuilder();
            foreach (DataRow row in data.Rows)
            {
                sql.Append($"INSERT INTO {report.ImportSetting.TableName}({string.Join(",", cols.Select(i => i.Field))} ) VALUES({string.Join(",", cols.Select(i => "@" + i.Field))})");
                List<SqlParameter> Paras = new List<SqlParameter>();
                foreach (var col in cols)
                {
                    Paras.Add(new SqlParameter("@" + col.Field, row[col.Field]));
                }
                dbHelper.ExcuteSql(sql.ToString(), Paras);
            }
            return data.Rows.Count;
        }
        
        public DataTable QueryData(string connStr, string sql)
        {
            return new MSSqlDBHelper(connStr).GetDataTable(sql);
        }

        public ViewDataResult QueryReportData(ViewDataPara Para)
        {
            var sql = CreateSql(Para).ToString();
            if (!Core.ReportSqlValidator.Validate(sql)) { throw new Exception("SQL 含有禁止操作 "); }
            var ds = new MSSqlDBHelper(Para.Report.DataSource.ConnectionString).GetDataSet(sql);
            switch (Para.Report.ReportType)
            {
                case EnumTypes.REPORT_TYPE.LIST:
                    return new ViewDataResult()
                    {
                        ListData = ds.Tables[0],
                        ListDataStatic = ds.Tables[1],
                        ListTotalCount = Convert.ToInt64(ds.Tables[1].Rows[0]["__TotalCount"])
                    };
                case EnumTypes.REPORT_TYPE.CHART:
                case EnumTypes.REPORT_TYPE.STATIC:
                    return new ViewDataResult()
                    {
                        StaticData = ds.Tables[0]
                    };
            }
            return null;
        }

        StringBuilder CreateSql(ViewDataPara Para)
        {
            #region 生成搜索语句
            var where = string.Join(" AND ", new Core.SearchHelper().CreateSearchSql(Para.Report, Para.SearchValues));
            var order = string.Join(" , ", Para.OrderFields.Select(i => i.Key + " " + i.Value));
            var fieldsX = string.Join(",", Para.Report.XCols.Select(i => i.Field));
            var fieldsY = string.Join(",", Para.Report.YCols.Select(i => i.Field));
            var fieldsS = string.Join(",", Para.Report.Static.Select(i => i.StaticMethod + " AS " + i.StaticKey));
            var fieldsXY = (string.IsNullOrEmpty(fieldsX) || string.IsNullOrEmpty(fieldsY)) ? (fieldsY + fieldsX) : string.Join(",", fieldsX, fieldsY);

            if (!string.IsNullOrEmpty(where)) { where = "WHERE " + where; }
            if (string.IsNullOrEmpty(order)) { order = Para.Report.XCols.First().Field; }
            #endregion

            StringBuilder sqls = new StringBuilder();
            switch (Para.Report.ReportType)
            {
                case EnumTypes.REPORT_TYPE.LIST: //列表：列数据、统计数据
                    if (Para.Report.XCols == null || Para.Report.XCols.Count == 0) { throw new Exception("列表需配置X轴数据"); }
                    var sql_list = $"SELECT * FROM( SELECT ROW_NUMBER() OVER (ORDER BY {order}) AS __RowNumber,{fieldsX} FROM ({Para.Report.DataSource.DataSourceSql}) AS A {where}) AS RRRRR_001 WHERE RRRRR_001.__RowNumber>={((Para.PageIndex - 1) * Para.PageSize + 1)} and RRRRR_001.__RowNumber<={Para.PageSize * Para.PageIndex}";
                    var sql_static = $"SELECT COUNT(*) __TotalCount {(string.IsNullOrEmpty(fieldsS) ? "" : ("," + fieldsS))} FROM ({Para.Report.DataSource.DataSourceSql}) AS A {where} ";
                    sqls.AppendLine(sql_list);
                    sqls.AppendLine(sql_static);
                    break;
                case EnumTypes.REPORT_TYPE.CHART:
                case EnumTypes.REPORT_TYPE.STATIC:
                    sql_static = $"SELECT {(string.Join(",", fieldsS, fieldsXY))} FROM ({Para.Report.DataSource.DataSourceSql}) AS A {where} GROUP BY {fieldsXY}";
                    sqls.Append(sql_static);
                    break;
            }
            return sqls;
        }
    }
}
