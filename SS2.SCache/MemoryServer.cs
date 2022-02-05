using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.Caching;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SCache
{
    public class MemoryServer : IWebServer
    {
        string Perfix = "SS2.SCache.CacheKey8934JUHD.";
        void Set(string key, object value, DateTime ExpirationTime, string hash)
        {
            if (hash != HashHelper.Hash(key, ExpirationTime)) { throw new Exception("验证错误"); }
            key = Perfix + key;
            if (value == null)
            {
                MemoryCache.Default.Remove(key);
                return;
            }
            var policy = new CacheItemPolicy
            {
                AbsoluteExpiration = ExpirationTime
            };
            MemoryCache.Default.Set(new CacheItem(key, value), policy);
        }

        object Get(string key, string hash)
        {
            if (hash != HashHelper.Hash(key)) { throw new Exception("验证错误"); }
            key = Perfix + key;
            return MemoryCache.Default.Get(key);
        }

        public void SetString(string key, string value, DateTime ExpirationTime, string hash)
        {
            Set(key, value, ExpirationTime, hash);
        }

        public string GetString(string key, string hash)
        {
            return Get(key, hash) as string;
        }

        public void SetDataTable(string key, DataTable value, DateTime ExpirationTime, string hash)
        {
            Set(key, value, ExpirationTime, hash);
        }

        public DataTable GetDataTable(string key, string hash)
        {
            return Get(key, hash) as DataTable;
        }
        public void SetIncrement(string key, DateTime ExpirationTime, string hash)
        {
            var number = Get(key, HashHelper.Hash(key)) as int?;
            if (number == null)
            {
                Set(key, 1, ExpirationTime, hash);
            }
            else
            {
                Set(key, ++number, ExpirationTime, hash);
            }
        }

        public int GetIncrement(string key, string hash)
        {
            return (Get(key, hash) as int?) ?? 0;
        }
    }
}
