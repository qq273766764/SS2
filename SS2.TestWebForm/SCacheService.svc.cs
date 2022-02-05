using SS2.SCache;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace SS2.TestWebForm
{
    // 注意: 使用“重构”菜单上的“重命名”命令，可以同时更改代码、svc 和配置文件中的类名“SCacheService”。
    // 注意: 为了启动 WCF 测试客户端以测试此服务，请在解决方案资源管理器中选择 SCacheService.svc 或 SCacheService.svc.cs，然后开始调试。
    public class SCacheService : IWebServer
    {
        public DataTable GetDataTable(string key, string hash)
        {
            return new MemoryServer().GetDataTable(key, hash);
        }

        //public Hashtable GetHashTable(string key, string hash)
        //{
        //    return new MemoryServer().GetHashTable(key, hash);
        //}

        public int GetIncrement(string key, string hash)
        {
            return new MemoryServer().GetIncrement(key, hash);
        }

        public string GetString(string key, string hash)
        {
            return new MemoryServer().GetString(key, hash);
        }
        public void SetDataTable(string key, DataTable value, DateTime ExpirationTime, string hash)
        {
            new MemoryServer().SetDataTable(key, value, ExpirationTime, hash);
        }

        //public void SetHashTable(string key, Hashtable value, DateTime ExpirationTime, string hash)
        //{
        //    new MemoryServer().SetHashTable(key, value, ExpirationTime, hash);
        //}

        public void SetIncrement(string key, DateTime ExpirationTime, string hash)
        {
            new MemoryServer().SetIncrement(key, ExpirationTime, hash);
        }

        public void SetString(string key, string value, DateTime ExpirationTime, string hash)
        {
            new MemoryServer().SetString(key, value, ExpirationTime, hash);
        }
    }
}
