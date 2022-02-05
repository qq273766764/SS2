using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace SS2.SGridList
{
    public class Configuration
    {
        static string _ConnectString;
        public static string ConnectString
        {
            get
            {
                if (!string.IsNullOrEmpty(_ConnectString))
                {
                    return _ConnectString;
                }
                var cfg = CfgHelper.Cfg.Find("SGrid", "ConnectString");
                if (cfg != null) { return cfg.GetValueOrXml(); }
                throw new Exception("数据库连接为空，请设置 SS2.SFile.ConnectString");
            }
            set
            {
                _ConnectString = value;
            }
        }
        public static void RegisterSettings(IEnumerable<GridList> settings)
        {
            GridDSHelper.RegisterSettings(settings);
        }
    }
}