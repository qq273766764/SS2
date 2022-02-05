using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SS2.SSONet.SessionServer
{
    public class SCacheSessionServer : ISessionServer
    {
        string _SessionId
        {
            get
            {
                if (HttpContext.Current != null)
                {
                    var cookie = HttpContext.Current.Request.Cookies["ASP.NET_SessionId"];
                    if (cookie != null) return cookie.Value as string;
                }
                return "";
            }
        }

        public string Get(string key)
        {
            return new SCache.Client().GetString(_SessionId + "_" + key);
        }

        public void Set(string key, string value)
        {
            new SCache.Client().SetString(_SessionId + "_" + key, value, DateTime.Now.AddHours(2));
        }
    }
}
