using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.ReportHelper.ReportTypes
{
    public class 明细列表 : IReportType
    {
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
                return "列表";
            }
        }

        public string IconClass
        {
            get
            {
                return "newicon-billing";
            }
        }

        public string PageUrl
        {
            get
            {
                return "GridList.aspx";
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
                return "明细列表";
            }
        }

        public bool ValidateColCount(int cntYcols, int cntXcols, int cntStatic, out string Error)
        {
            Error = string.Empty;
            if (cntYcols <= 0 && cntXcols <= 0)
            {
                Error = "请至少选择一列";
                return false;
            }
            return true;
        }

        public string Key
        {
            get { return "LIST"; }
        }
    }
}
