using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace SS2
{
    public class XmlHelper
    {
        public static string SerializeXML(object obj)
        {
            using (StringWriter sw = new StringWriter())
            {
                XmlSerializerNamespaces ns = new XmlSerializerNamespaces();//创建XML命名空间
                ns.Add("", "");
                XmlSerializer serializer = new XmlSerializer(obj.GetType());
                serializer.Serialize(sw, obj, ns);
                sw.Close();
                return sw.ToString();
            }
        }

        public static T DeserializeXML<T>(string xml) where T : class
        {
            using (var str = new StringReader(xml))
            {
                var xmlSerializer = new XmlSerializer(typeof(T));
                var result = (T)xmlSerializer.Deserialize(str);
                return result;
            }
        }

    }
}