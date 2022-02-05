using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SSONet
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
    public class AuthorizeKey : Attribute
    {
        public string Key { get; set; }

        public AuthorizeKey(string key)
        {
            this.Key = key;
        }
    }
}
