using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SS2.SSONet.SessionServer
{
    public class HttpSessionServer : ISessionServer
    {
        public string Get(string key)
        {
            if (HttpContext.Current.Session != null)
                return HttpContext.Current.Session[key] as string;
            else return null;
        }

        public void Set(string key, string value)
        {
            if (HttpContext.Current.Session != null)
                HttpContext.Current.Session[key] = value;
        }
    }
}
