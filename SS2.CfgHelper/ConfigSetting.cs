using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace SS2.CfgHelper
{
    [Serializable]
    public class ConfigSetting
    {
        [XmlAttribute]
        public string Key { get; set; }

        [XmlAttribute]
        public string Value { get; set; }

        [XmlAttribute]
        public string Text { get; set; }

        [XmlAttribute]
        public ConfigType Type { get; set; } = ConfigType.Default;

        [XmlText]
        public string InnerXML { get; set; }
        
        
        public string GetValueOrXml() {
            if (string.IsNullOrEmpty(Value)) {
                return InnerXML;
            }
            return Value;
        }
    }
}
