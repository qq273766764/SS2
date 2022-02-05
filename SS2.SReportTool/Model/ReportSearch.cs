using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool.Model
{
    public class ReportSearch
    {
        string _RequestKey;
        public bool AllowEmpty { get; set; } = true;
        public int ID { get; set; }
        public int Width { get; set; }
        public int Index { get; set; }
        public string Text { get; set; }
        public string Tips { get; set; }
        public string SourceString { get; set; }
        public string DefaultValue { get; set; }
        public string WhereFormat { get; set; }
        public string ControlID
        {
            get
            {
                return "SS_SEARCH_" + ID;
            }
        }
        public string RequestKey
        {
            get
            {
                if (string.IsNullOrEmpty(_RequestKey))
                {
                    return ControlID;
                }
                return _RequestKey;
            }
            set
            {
                _RequestKey = value;
            }
        }
        public EnumTypes.SEARCH_INPUT_TYPE InputType { get; set; }
    }
}
