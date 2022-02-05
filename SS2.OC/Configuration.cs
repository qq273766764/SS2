using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.OC
{
    public class Configuration
    {
        static string _ConnectString;
        static int _CacheSecond = 0;
        static List<Model.AuthorizeItem> _Authorizations = new List<Model.AuthorizeItem>();

        public static string ConnectString
        {
            get
            {
                if (!string.IsNullOrEmpty(_ConnectString))
                {
                    return _ConnectString;
                }
                var cfg = CfgHelper.Cfg.Find("OC", "ConnectString");
                if (cfg != null) { return cfg.GetValueOrXml(); }
                throw new Exception("SS2.OC 链接字符串未配置，您可以通过配置文件或代码进行配置");
            }
            set
            {
                _ConnectString = value;
            }
        }

        public static int CacheSecond
        {
            get
            {
                if (_CacheSecond > 0) { return _CacheSecond; }
                var cfg = CfgHelper.Cfg.Find("OC", "CacheSecond");
                if (cfg != null)
                {
                    int v = 0;
                    if (int.TryParse(cfg.GetValueOrXml(), out v))
                    {
                        return v;
                    }
                    else
                    {
                        throw new Exception("SS2.OC 缓存时间非数字类型");
                    }
                }
                else
                {
                    return 3600;//默认3600
                }
            }
            set
            {
                _CacheSecond = value;
            }
        }

        /// <summary>
        /// 添加权限配置选项
        /// </summary>
        /// <param name="authorizes"></param>
        public static void RegisterAuthorization(IEnumerable<Model.AuthorizeItem> authorizes)
        {
            _Authorizations.Clear();
            //验证
            foreach (var item in authorizes)
            {
                if (_Authorizations.Any(i => i.AuthorizeKey == item.AuthorizeKey))
                {
                    throw new Exception("重复Key:" + item.AuthorizeKey);
                }
                _Authorizations.Add(item);
            }
        }
    }
}
