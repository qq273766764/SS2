using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.ReportHelper
{
    public class ReportStaticColumnManager
    {
        static List<ReportStaticColumsType> _staticTypes;

        public static List<ReportStaticColumsType> StaticTypes
        {
            get
            {
                if (_staticTypes == null)
                {
                    _staticTypes = new List<ReportStaticColumsType>();
                    _staticTypes.Add(new ReportStaticColumsType() { Text = "合计", Value = "SUM", SqlFormat = "SUM({0})" });
                    _staticTypes.Add(new ReportStaticColumsType() { Text = "计数", Value = "COUNT", SqlFormat = "COUNT({0})" });
                    _staticTypes.Add(new ReportStaticColumsType() { Text = "平均数", Value = "AVG", SqlFormat = "AVG({0})" });
                    _staticTypes.Add(new ReportStaticColumsType() { Text = "最大值", Value = "MAX", SqlFormat = "MAX({0})" });
                    _staticTypes.Add(new ReportStaticColumsType() { Text = "最小值", Value = "MIN", SqlFormat = "MIN({0})" });

                    _staticTypes.Add(new ReportStaticColumsType() { Text = "标准偏差", Value = "STDEV", SqlFormat = "STDEV({0})" });
                    _staticTypes.Add(new ReportStaticColumsType() { Text = "总体标准偏差", Value = "STDEVP", SqlFormat = "STDEVP({0})" });

                    _staticTypes.Add(new ReportStaticColumsType() { Text = "方差", Value = "VAR", SqlFormat = "VAR({0})" });
                    _staticTypes.Add(new ReportStaticColumsType() { Text = "总体方差", Value = "VARP", SqlFormat = "VARP({0})" });
                }
                return _staticTypes;
            }
        }
    }
}
