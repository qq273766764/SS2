using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace SS2.SSONet
{
    public class LoginFilter : IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationContext filterContext)
        {
            //无需登录
            var ctr = filterContext.Controller as INoLogin_SS2;
            if (ctr != null) return;

            var result = LoginModule.Authorization();

            //页面授权控制
            var sso = new LoginServer();
            if (!LoginModule.AuthorizationKey(filterContext.Controller) ||
                !LoginModule.AuthorizationKey(sso, filterContext.ActionDescriptor.GetCustomAttributes(typeof(AuthorizeKey), false)))
            {
                result.success = false;
                result.msg = "Forbidden";
            }

            if (!result.success)
            {
                if (!string.IsNullOrEmpty(result.redirect))
                {
                    filterContext.Result = new RedirectResult(result.redirect);
                }
                else
                {
                    filterContext.Result = new ContentResult() { Content = result.msg };
                }
            }
            else if (!string.IsNullOrEmpty(result.redirect))
            {
                filterContext.Result = new RedirectResult(result.redirect);
            }
        }
    }

    public class LoginResult
    {
        public bool success { get; set; }

        public string msg { get; set; }

        public string redirect { get; set; }
    }
}
