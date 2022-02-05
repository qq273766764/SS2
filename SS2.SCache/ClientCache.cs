using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SCache
{
    class ClientCache
    {
        int clientCacheTime = 10;

        public bool HasKey(string key)
        {
            return MemoryCache.Default.Contains(key);
        }

        public void Set(string key,object value) {
            if (value == null)
            {
                MemoryCache.Default.Remove(key);
            }
            else
            {
                MemoryCache.Default.Set(key, value, DateTime.Now.AddSeconds(clientCacheTime));
            }
        }

        public object Get(string key) {
            return MemoryCache.Default.Get(key);
        }
    }
}
