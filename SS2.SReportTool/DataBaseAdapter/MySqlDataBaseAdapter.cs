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
    public class MySqlDataBaseAdapter : IDataBaseAdapter
    {
        public DataTable FindDataBases(string connStr)
        {
            throw new NotImplementedException();
        }

        public DataColumnCollection FindDataSourceColumns(ReportDataSource ds)
        {
            throw new NotImplementedException();
        }

        public DataTable FindTables(string connStr)
        {
            throw new NotImplementedException();
        }

        public DataTable FindViews(string connStr)
        {
            throw new NotImplementedException();
        }

        public int InsertReportData(ReportSetting report, List<ReportColumn> cols, DataTable data)
        {
            throw new NotImplementedException();
        }

        public DataTable QueryData(string connStr, string sql)
        {
            throw new NotImplementedException();
        }

        public ViewDataResult QueryReportData(ViewDataPara Para)
        {
            throw new NotImplementedException();
        }
    }
}
