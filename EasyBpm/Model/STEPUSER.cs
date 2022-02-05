using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm.Model
{
    public class STEPUSER
    {
        public STEPUSER(string LOGINNAME, string USERNAME)
        {
            this.LOGINNAME = LOGINNAME;
            this.USERNAME = USERNAME;
        }

        /// <summary>
        /// 登录名
        /// </summary>
        public string LOGINNAME { get; set; }
        /// <summary>
        /// 用户名
        /// </summary>
        public string USERNAME { get; set; }

        public override bool Equals(object obj)
        {
            if (obj != null)
            {
                var u = obj as STEPUSER;
                if (u != null)
                {
                    return u.LOGINNAME == LOGINNAME && u.USERNAME == USERNAME;
                }
            }
            return base.Equals(obj);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override string ToString()
        {
            return string.Format("{{LOGINANME:{0},USERNAME:{1}}}", LOGINNAME,USERNAME);
        }
    }
}
