using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool.Model
{
    /// <summary>
    /// 界面UI配置项
    /// </summary>
    public class UIOptionItem
    {
        public UIOptionItem() { }
        public UIOptionItem(string name, string value)
        {
            Name = name;
            Value = value;
        }

        public string Name { get; set; }

        public string Value { get; set; }

        public bool ValueBool
        {
            get
            {
                if (string.IsNullOrEmpty(Value)) return false;
                return Value == "1" || Value.ToLower() == "true";
            }
        }

        public int ValueInt
        {
            get
            {
                int.TryParse(Value, out int i);
                return i;
            }
        }
        public decimal ValueDecimal
        {
            get
            {
                decimal.TryParse(Value, out decimal i);
                return i;
            }
        }

        public string Remark { get; set; }
    }
}
