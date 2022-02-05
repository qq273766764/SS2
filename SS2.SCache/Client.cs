using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SCache
{
    public class Client
    {
        string ServerUrl
        {
            get
            {
                var cfg = CfgHelper.Cfg.Find("SCache", "ServerUrl");
                if (cfg == null)
                {
                    return null;
                }
                return cfg.GetValueOrXml();
            }
        }

        public void SetString(string key, string value, DateTime ExpirationTime)
        {
            var hash = HashHelper.Hash(key, ExpirationTime);
            if (string.IsNullOrEmpty(ServerUrl))
            {
                new MemoryServer().SetString(key, value, ExpirationTime, hash);
                return;
            }
            else
            {
                new ClientCache().Set(key, value);
                var binding = new BasicHttpBinding();
                var endpoint = new EndpointAddress(ServerUrl);
                using (var server = new WCFService.WebServerClient(binding, endpoint))
                {
                    server.SetString(key, value, ExpirationTime, hash);
                }
            }
        }

        public string GetString(string key)
        {
            var hash = HashHelper.Hash(key);
            if (string.IsNullOrEmpty(ServerUrl))
            {
                return new MemoryServer().GetString(key, hash);
            }
            else
            {
                var c = new ClientCache();
                if (c.HasKey(key)) { return c.Get(key) as string; }
                var binding = new BasicHttpBinding();
                var endpoint = new EndpointAddress(ServerUrl);
                using (var server = new WCFService.WebServerClient(binding, endpoint))
                {
                    server.Endpoint.Address = new EndpointAddress(ServerUrl);
                    var value= server.GetString(key, hash);
                    c.Set(key, value);
                    return value;
                }
            }
        }

        public void SetDataTable(string key, DataTable value, DateTime ExpirationTime)
        {
            var hash = HashHelper.Hash(key, ExpirationTime);
            if (string.IsNullOrEmpty(ServerUrl))
            {
                new MemoryServer().SetDataTable(key, value, ExpirationTime, hash);
                return;
            }
            else
            {
                new ClientCache().Set(key, value);
                var binding = new BasicHttpBinding();
                var endpoint = new EndpointAddress(ServerUrl);
                using (var server = new WCFService.WebServerClient(binding, endpoint))
                {
                    server.SetDataTable(key, value, ExpirationTime, hash);
                }
            }
        }

        public DataTable GetDataTable(string key)
        {
            var hash = HashHelper.Hash(key);
            if (string.IsNullOrEmpty(ServerUrl))
            {
                return new MemoryServer().GetDataTable(key, hash);
            }
            else
            {
                var c = new ClientCache();
                if (c.HasKey(key)) { return c.Get(key) as DataTable; }

                var binding = new BasicHttpBinding();
                var endpoint = new EndpointAddress(ServerUrl);
                using (var server = new WCFService.WebServerClient(binding, endpoint))
                {
                    server.Endpoint.Address = new EndpointAddress(ServerUrl);
                    var value= server.GetDataTable(key, hash);
                    c.Set(key, value);
                    return value;
                }
            }
        }

        public void SetIncrement(string key, DateTime ExpirationTime)
        {
            var hash = HashHelper.Hash(key, ExpirationTime);
            if (string.IsNullOrEmpty(ServerUrl))
            {
                new MemoryServer().SetIncrement(key, ExpirationTime, hash);
                return;
            }
            else
            {
                var binding = new BasicHttpBinding();
                var endpoint = new EndpointAddress(ServerUrl);
                using (var server = new WCFService.WebServerClient(binding, endpoint))
                {
                    server.SetIncrement(key, ExpirationTime, hash);
                }
            }
        }

        public int GetIncrement(string key)
        {
            var hash = HashHelper.Hash(key);
            if (string.IsNullOrEmpty(ServerUrl))
            {
                return new MemoryServer().GetIncrement(key, hash);
            }
            else
            {
                var binding = new BasicHttpBinding();
                var endpoint = new EndpointAddress(ServerUrl);
                using (var server = new WCFService.WebServerClient(binding, endpoint))
                {
                    server.Endpoint.Address = new EndpointAddress(ServerUrl);
                    return server.GetIncrement(key, hash);
                }
            }
        }
    }
}
