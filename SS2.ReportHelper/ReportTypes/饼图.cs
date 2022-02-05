using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.ReportHelper.ReportTypes
{
    public class 饼图 : IReportType
    {
        public string Key
        {
            get { return "pie"; }
        }
        public bool Enabled
        {
            get
            {
                return true;
            }
        }
        public bool EnableSearch
        {
            get
            {
                return true;
            }
        }

        public bool EnableStatic
        {
            get
            {
                return true;
            }
        }

        public bool EnableXcolumn
        {
            get
            {
                return false;
            }
        }

        public string Group
        {
            get
            {
                return "图表";
            }
        }

        public string IconClass
        {
            get
            {
                return "newicon-chart";
            }
        }

        public string PageUrl
        {
            get
            {
                return "Pie.aspx";
            }
        }
        
        public string Text
        {
            get
            {
                return "饼图";
            }
        }

        public List<ReportSettingItem> Settings
        {
            get
            {
                return new List<ReportSettingItem>();
            }
        }
        
        public bool ValidateColCount(int cntYcols, int cntXcols, int cntStatic, out string Error)
        {
            Error = string.Empty;
            if (cntYcols != 1 || cntStatic != 1)
            {
                Error = "需要有一行字段和一个统计字段";
                return false;
            }
            return true;
        }
    }
}
