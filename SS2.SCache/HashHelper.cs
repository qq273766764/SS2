using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SCache
{
    class HashHelper
    {
        static string Token
        {
            get
            {
                var cfg = CfgHelper.Cfg.Find("SCache", "Token");
                if (cfg == null)
                {
                    return null;
                    //throw new Exception("缺少配置SCache/Token");
                }
                return cfg.GetValueOrXml();
            }
        }
        public static string SHA256(string data)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(data);
            byte[] hash = SHA256Managed.Create().ComputeHash(bytes);

            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                builder.Append(hash[i].ToString("X2"));
            }

            return builder.ToString();
        }

        public static string Hash(string key)
        {
            return SHA256(key +"fdfdsfKID*)(80"+ Token);
        }

        public static string Hash(string key, DateTime time)
        {
            return SHA256(key + "fdfdsfKID*)(80" + Token + time.ToString());
        }
    }
}
