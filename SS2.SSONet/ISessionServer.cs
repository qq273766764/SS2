using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SSONet
{
    public interface ISessionServer
    {
        void Set(string key, string value);

        string Get(string key);
    }
}
