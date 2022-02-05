using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.ReportHelper.ReportTypes
{
    public class 交叉统计 : IReportType
    {
        public string Key
        {
            get { return "PIVOT"; }
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
                return true;
            }
        }

        public string Group
        {
            get
            {
                return "列表";
            }
        }

        public string IconClass
        {
            get
            {
                return "newicon-credit";
            }
        }

        public string PageUrl
        {
            get
            {
                return "PivotGrid.aspx";
            }
        }

        public List<ReportSettingItem> Settings
        {
            get
            {
                return new List<ReportSettingItem>();
            }
        }

        public string Text
        {
            get
            {
                return "交叉统计";
            }
        }

        public bool ValidateColCount(int cntYcols, int cntXcols, int cntStatic, out string Error)
        {
            Error = string.Empty;
            if ((cntYcols < 1 && cntXcols < 1) || cntStatic < 1)
            {
                Error = "至少有一行字段、一个列字段和一个统计字段";
                return false;
            }
            return true;
        }
    }

}
