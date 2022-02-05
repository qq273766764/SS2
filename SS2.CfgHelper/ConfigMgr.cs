using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace SS2.CfgHelper
{
    /// <summary>
    /// 配置文件加载
    /// </summary>
    public class ConfigMgr
    {
        /// <summary>
        /// 根据文件名查找配置
        /// </summary>
        /// <param name="fileName"></param>
        /// <returns></returns>
        public static ConfigGroup LoadByFileName(string fileName,out string cfgPath)
        {
            var dllPath = Environment.CurrentDirectory;
            if (!string.IsNullOrEmpty(AppDomain.CurrentDomain.RelativeSearchPath))
            {
                dllPath = AppDomain.CurrentDomain.RelativeSearchPath;
            }
            while (true)
            {
                cfgPath = dllPath + (dllPath.EndsWith("\\") ? "" : "\\") + fileName;
                if (File.Exists(cfgPath)) { return LoadByFilePath(cfgPath); }

                var pDir = Directory.GetParent(dllPath);
                if (pDir == null) { throw new FileNotFoundException(fileName); }
                dllPath = pDir.ToString();
            }
        }

        /// <summary>
        /// 加载对应路径的配置文件
        /// </summary>
        /// <param name="fileName"></param>
        /// <returns></returns>
        public static ConfigGroup LoadByFilePath(string filePath)
        {
            var xml = File.ReadAllText(filePath);
            return LoadFromXml(xml);
        }

        /// <summary>
        /// 保存配置
        /// </summary>
        /// <param name="filePath"></param>
        /// <param name="cfg"></param>
        public static string SaveFile(string filePath, ConfigGroup cfg)
        {
            using (StringWriter sw = new StringWriter())
            {
                XmlSerializerNamespaces ns = new XmlSerializerNamespaces();//创建XML命名空间
                ns.Add("", "");
                XmlSerializer xz = new XmlSerializer(cfg.GetType());
                xz.Serialize(sw, cfg, ns);
                var xml = sw.ToString();
                return xml;
            }
        }

        /// <summary>
        /// 从文本中加载配置
        /// </summary>
        /// <param name="xml"></param>
        /// <returns></returns>
        public static ConfigGroup LoadFromXml(string xml)
        {
            using (var str = new StringReader(xml))
            {
                var xmlSerializer = new XmlSerializer(typeof(ConfigGroup));
                var result = (ConfigGroup)xmlSerializer.Deserialize(str);
                return result;
            }
        }
    }
}
