using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SS2.ReportHelper.Model
{
    public partial class gr_Report
    {
        public int ID;

        public string Group;

        public IReportType Type;

        public string Title;

        //public ReportTheme Theme;

        public string Remark;

        //public int DataSourceID;

        //public System.DateTime CreateTime;

        //public string CreateUserName;

        //public string CreateUserLoginName;

        public string FilterString;

        public bool EnableUrlFilter;

        public string PageHeader;

        public gr_DataSource DataSource { get; set; }

        //public gr_Connection Connection { get; set; }

        public List<gr_Axis> XAxis { get; set; }

        public List<gr_Axis> YAxis { get; set; }

        public List<gr_Static> Static { get; set; }

        public List<gr_Search> Searchs { get; set; }
    }
}
