using SS2.SReportTool.EnumTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool.Model
{
    public class ReportStaticColumn : ReportColumn
    {
        string _StaticMethod;
        string _StaticKey;

        public string StaticKey
        {
            get
            {
                if (!string.IsNullOrEmpty(_StaticKey)) {
                    return _StaticKey;
                }
                if (!string.IsNullOrEmpty(_StaticMethod)) {
                    return StaticMethod.Replace("(", "_").Replace(")","_").Replace(" ", "");
                }
                return Field + "_" + StaticType;
            }
            set {
                _StaticKey = value;
            }
        }

        public STATIC_METHOD StaticType;

        /// <summary>
        /// 统计公式
        /// </summary>
        public string StaticMethod
        {
            get
            {
                if (!string.IsNullOrEmpty(_StaticMethod))
                {
                    return _StaticMethod;
                }
                return string.Format("{0}({1})", StaticType.ToString(), Field);
            }
            set { _StaticMethod = value; }
        }
    }
}
