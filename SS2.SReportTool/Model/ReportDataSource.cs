using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool.Model
{
    public class ReportDataSource
    {
        public string DataSourceSql { get; set; }

        public string ConnectionString { get; set; }

        public Func<ViewDataPara, ViewDataResult> DataSourceGetter { get; set; }

        public IDataBaseAdapter DataAdapter { get; set; }
    }
}
