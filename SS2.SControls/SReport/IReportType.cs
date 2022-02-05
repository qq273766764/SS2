using SS2.SReport.ReportTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReport
{
    public interface IReportType
    {
        string Key { get; }
        string Group { get; }
        string Text { get; }
        string IconClass { get; }
        string PageUrl { get; }
        bool EnableSearch { get; }
        bool EnableStatic { get; }
        bool EnableXcolumn { get; }
        bool Enabled { get; }
        bool ValidateColCount(int cntYcols, int cntXcols, int cntStatic, out string Error);
        List<ReportSettingItem> Settings { get; }
    }
}
