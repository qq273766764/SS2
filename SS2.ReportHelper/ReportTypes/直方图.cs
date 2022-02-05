using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.ReportHelper.ReportTypes
{
    public class 直方图 : IReportType
    {

        public virtual string Key
        {
            get { return "column"; }
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
                return "图表";
            }
        }

        public virtual string IconClass
        {
            get
            {
                return "newicon-stats";
            }
        }

        public string PageUrl
        {
            get
            {
                return "Charts.aspx";
            }
        }

        public List<ReportSettingItem> Settings
        {
            get
            {
                return new List<ReportSettingItem>();
            }
        }

        public virtual string Text
        {
            get
            {
                return "直方图";
            }
        }

        public bool ValidateColCount(int cntYcols, int cntXcols, int cntStatic, out string Error)
        {
            Error = string.Empty;
            if (cntYcols > 1)
            {
                Error = "只需要选择一个Y轴或不选";
                return false;
            }
            if (cntXcols != 1 || cntStatic != 1)
            {
                Error = "只需要选择一个X轴和一个统计字段";
                return false;
            }
            return true;
        }
    }

}
