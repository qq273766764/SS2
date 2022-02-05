using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;

namespace SS2.SSONet
{
    public class LoginModule : IHttpModule
    {
        public void Dispose()
        {
        }

        public void Init(HttpApplication context)
        {
            //context.BeginRequest += Context_BeginRequest;
            context.PreRequestHandlerExecute += Context_PreRequestHandlerExecute;
        }

        private void Context_PreRequestHandlerExecute(object sender, EventArgs e)
        {
            var ctx = HttpContext.Current;
            var ext = Path.GetExtension(ctx.Request.CurrentExecutionFilePath);
            if (string.IsNullOrEmpty(ext)) { return; }
            if (ext.ToLower() != ".aspx") { return; }
            var noLogin = (sender as HttpApplication).Context.Handler as INoLogin_SS2;
            if (noLogin != null) { return; }

            var result = Authorization();

            //页面授权控制
            if (!AuthorizationKey((sender as HttpApplication).Context.Handler))
            {
                result.success = false;
                result.msg = "Forbidden";
            }

            if (!result.success)
            {
                if (!string.IsNullOrEmpty(result.redirect))
                {
                    ctx.Response.Redirect(result.redirect);
                }
                else
                {
                    ctx.Response.Write(result.msg);
                    ctx.Response.End();
                }
            }
            else if (!string.IsNullOrEmpty(result.redirect))
            {
                ctx.Response.Redirect(result.redirect);
            }
        }

        public static LoginResult Authorization()
        {
            var sso = new LoginServer();
            if (string.IsNullOrEmpty(sso.LoginName))
            {
                var token = HttpContext.Current.Request.Params[ConstParas.token];
                var servertype = HttpContext.Current.Request.Params[ConstParas.servertype];
                var ssoServer = CfgHelper.Cfg.Find("SSO", "Server")?.Value;
                var ssoValidate = CfgHelper.Cfg.Find("SSO", "Validate")?.Value?? ssoServer;
                if (!string.IsNullOrEmpty(token) && servertype == ConstParas.ss2_sso)
                {
                    //根据token 获取用户名
                    var serverUrl = ssoValidate + ConstParas.URL_Login_Validate;
                    var req = (HttpWebRequest)WebRequest.Create($"{serverUrl}?{ConstParas.token}={token}");
                    req.Method = "GET";
                    var response = (HttpWebResponse)req.GetResponse();
                    string responseString = new StreamReader(response.GetResponseStream(), Encoding.UTF8).ReadToEnd();
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<LoginResult>(responseString);
                    if (result.success)
                    {
                        new LoginServer().SetLoginName(result.msg);
                        var refresh = HttpContext.Current.Request.Url.ToString();
                        var para = $"{ConstParas.token}={token}&{ConstParas.servertype}={ConstParas.ss2_sso}";
                        if (refresh.Contains("?" + para))
                        {
                            refresh = refresh.Replace("?" + para, null);
                        }
                        else
                        {
                            refresh = refresh.Replace("&" + para, null);
                        }
                        return new LoginResult() { success = true, redirect = refresh };
                    }
                    else
                    {
                        return result;
                    }
                }
                else
                {
                    //跳转到登录页面
                    var url = HttpContext.Current.Request.Url.ToString();
                    var redirectUrl = $"{ssoServer}{ConstParas.URL_Login_Index}?{ConstParas.back}={HttpUtility.UrlEncode(url)}";
                    return new LoginResult() { redirect = redirectUrl };
                }
            }
            return new LoginResult() { success = true };
        }

        public static bool AuthorizationKey(object page)
        {
            var sso = new LoginServer();
            if (string.IsNullOrEmpty(sso.LoginName)) { return true; }
            var pagetype = page.GetType();
            var attrs = pagetype.GetCustomAttributes(typeof(AuthorizeKey));
            return AuthorizationKey(sso, attrs);
        }

        public static bool AuthorizationKey(LoginServer sso, IEnumerable<object> attributes)
        {
            if (attributes.Any())
            {
                var pass = false;
                foreach (var attr in attributes)
                {
                    if (sso.CheckAuthorizationKey((attr as AuthorizeKey).Key))
                    {
                        return true;
                    }
                }
                return pass;
            }
            else
            {
                return true;
            }
        }
    }
}
