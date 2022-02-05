using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SFile
{
    public class Configuration
    {
        static string _ConnectString;
        static string _FileSavePath;
        static string _filetypes;
        static string _serverName;

        public static string ConnectString
        {
            get
            {
                if (!string.IsNullOrEmpty(_ConnectString))
                {
                    return _ConnectString;
                }
                var cfg = CfgHelper.Cfg.Find("FS", "ConnectString");
                if (cfg != null) { return cfg.GetValueOrXml(); }
                throw new Exception("数据库连接为空，请设置 SS2.SFile.ConnectString");
            }
            set
            {
                _ConnectString = value;
            }
        }
        public static string FileSavePath
        {
            get
            {
                if (!string.IsNullOrEmpty(_FileSavePath))
                {
                    return _FileSavePath;
                }
                var cfg = CfgHelper.Cfg.Find("FS", "FileSavePath");
                if (cfg != null) { return cfg.GetValueOrXml(); }
                throw new Exception("文件存储路径为空，请设置 SS2.SFile.FileSavePath");
            }
            set
            {
                _FileSavePath = value;
            }
        }
        public static string FileTypes
        {
            get
            {
                if (!string.IsNullOrEmpty(_filetypes))
                {
                    return _filetypes;
                }
                var cfg = CfgHelper.Cfg.Find("FS", "FileTypes");
                if (cfg != null)
                {
                    return cfg.GetValueOrXml();
                }
                else
                {
                    return ".*";
                }
            }
            set
            {
                _filetypes = value;
            }
        }
        public static string ServerName
        {
            get
            {
                if (!string.IsNullOrEmpty(_serverName))
                {
                    return _serverName;
                }
                var cfg = CfgHelper.Cfg.Find("FS", "ServerName");
                if (cfg != null)
                {
                    return cfg.GetValueOrXml();
                }
                else
                {
                    return "";
                }
            }
            set
            {
                _serverName = value;
            }
        }
    }
}
