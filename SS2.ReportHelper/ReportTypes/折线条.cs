using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.ReportHelper.ReportTypes
{
    public class 折线条 : 直方图
    {
        public override string Key
        {
            get
            {
                return "line";
            }
        }

        public override string Text
        {
            get
            {
                return "折线条";
            }
        }

        public override string IconClass
        {
            get
            {
                return "newicon-chart_curve";
            }
        }
    }
}
