using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Serialization;

namespace SS2.CfgHelper
{
    [Serializable]
    public class ConfigGroup
    {
        [XmlAttribute]
        public string Key { get; set; }
        
        [XmlAttribute]
        public string Text { get; set; }

        [XmlElement("Group")]
        public List<ConfigGroup> Groups { get; set; } = new List<ConfigGroup>();

        [XmlElement("Setting")]
        public List<ConfigSetting> Settings { get; set; } = new List<ConfigSetting>();

        public ConfigGroup FindGroup(string key)
        {
            return Groups.FirstOrDefault(i => i.Key == key);
        }

        public ConfigSetting FindSetting(string key)
        {
            return Settings.FirstOrDefault(i => i.Key == key);
        }
    }
}
