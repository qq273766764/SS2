using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SSONet
{
    public static class LoginToken
    {
        static string CreateToken(string loginName)
        {
            return Guid.NewGuid().ToString().Replace("-", "").ToUpper();
        }

        public static string Add(string loginName)
        {
            if (string.IsNullOrEmpty(loginName)) return null;
            var token = CreateToken(loginName);
            MemoryCache.Default.Set("SSO_TOKEN_" + token, loginName, new CacheItemPolicy() { AbsoluteExpiration = DateTime.Now.AddSeconds(30) });
            return token;
        }

        public static string Get(string token)
        {
            if (string.IsNullOrEmpty(token)) return null;
            var loginName = MemoryCache.Default.Get("SSO_TOKEN_" + token) as string;
            return loginName;
        }
    }
}
