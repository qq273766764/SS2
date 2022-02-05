using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReport
{
    public class ReportTypesManager
    {
        static List<IReportType> _ReportTypes;
        public static List<IReportType> ReportTypes
        {
            get
            {
                if (_ReportTypes == null)
                {
                    _ReportTypes = new List<IReportType>();
                    _ReportTypes.Add(new ReportTypes.明细列表());
                    _ReportTypes.Add(new ReportTypes.交叉统计());
                    _ReportTypes.Add(new ReportTypes.直方图());
                    _ReportTypes.Add(new ReportTypes.饼图());
                    _ReportTypes.Add(new ReportTypes.折线条());
                }
                return _ReportTypes;
            }
        }
    }
}
