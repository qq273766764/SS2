using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SS2.SSONet
{
    public class LoginServer
    {
        OC.Model.Employee _user;
        string[] _AuthorizationKeys;
        string _sloginName;
        string _loginSessionKey = "SS2.SSONet.LoginHelper.LoginName";
        string _CookieKey
        {
            get
            {
                return OC.StringHelper.GetMd5_16(_loginSessionKey + DateTime.Now.ToString("yyyyMMddHH"));
            }
        }

        string GetLoginNameByCookie()
        {
            var v = HttpContext.Current.Request.Cookies.Get(_CookieKey)?.Value;
            if (v != null)
            {
                var loginName = v.Split('|').First();
                var code = OC.StringHelper.GetMd5_16(_loginSessionKey + loginName + DateTime.Now.ToString("yyyyMMddHH"));
                if (v.Split('|').Last() == code)
                {
                    return loginName;
                }
            }
            return null;
        }

        string GetLoginNameBySession()
        {
            if (string.IsNullOrEmpty(_sloginName)) {
                _sloginName=SessionServer.Get(_loginSessionKey);
            }
            return _sloginName;
        }

        ISessionServer SessionServer = new SessionServer.HttpSessionServer();

        public void SetLoginName(string value)
        {
            //Session
            //HttpContext.Current.Session[_loginSessionKey] = value;
            

            //Cookie
            var code = OC.StringHelper.GetMd5_16(_loginSessionKey + value + DateTime.Now.ToString("yyyyMMddHH"));
            var v = value + "|" + code;
            if (string.IsNullOrEmpty(value))
            {
                //HttpContext.Current.Session.Clear();
                SessionServer.Set(_loginSessionKey, null);
            }
            else {
                SessionServer.Set(_loginSessionKey, value);
            }
            

            HttpContext.Current.Response.Cookies.Set(new HttpCookie(_CookieKey, v)
            {
                Expires = (v == null ? DateTime.Now.AddYears(-1) : DateTime.Now.AddHours(10))
            });
        }

        public string LoginName
        {
            get
            {
                var loginNameS = GetLoginNameBySession();
                var loginNameC = GetLoginNameByCookie();

                //没有Session只有Cookie
                if (string.IsNullOrEmpty(loginNameS) && !string.IsNullOrEmpty(loginNameC))
                {
                    SessionServer.Set(_loginSessionKey, loginNameC);
                    //if (HttpContext.Current.Session != null)
                    //{
                    //    HttpContext.Current.Session[_loginSessionKey] = loginNameC;
                    //}
                    return loginNameC;
                }
                //有Session并且与Cookie相等
                else if (!string.IsNullOrEmpty(loginNameS) && loginNameC == loginNameS)
                {
                    return loginNameS;
                }
                //有Session没有Cookie
                else if (!string.IsNullOrEmpty(loginNameS) && string.IsNullOrEmpty(loginNameC))
                {
                    return loginNameS;
                }
                else
                {
                    SessionServer.Set(_loginSessionKey, null);
                    //if (HttpContext.Current.Session != null)
                    //{
                    //    HttpContext.Current.Session[_loginSessionKey] = null;
                    //}
                    return null;
                }
            }
        }

        public string UserName
        {
            get
            {
                return GetLoginUser()?.UserName;
            }
        }

        public bool Login(string loginName, string pwd)
        {
            _user = new OC.OrgApi().Login(loginName, pwd);
            if (_user == null)
            {
                SetLoginName(null);
                return false;
            }
            else
            {
                SetLoginName(_user.LoginName);
                return true;
            }
        }

        public void LogOut()
        {
            SetLoginName(null);
        }

        public OC.Model.Employee GetLoginUser()
        {
            if (_user != null)
            {
                if (LoginName == _user.LoginName)
                {
                    return _user;
                }
            }
            if (!string.IsNullOrEmpty(LoginName))
            {
                _user = OC.OrgCache.Employees.FirstOrDefault(i => i.LoginName == LoginName);
                return _user;
            }
            return null;
        }

        /// <summary>
        /// 获取授权的Key集合
        /// </summary>
        /// <returns></returns>
        public string[] GetAuthorizationKeys()
        {
            if (_AuthorizationKeys == null)
            {
                _AuthorizationKeys = new OC.OrgApi().LoadAuthorization(LoginName);
            }
            return _AuthorizationKeys;
        }

        /// <summary>
        /// 判断是否拥有权限
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public bool CheckAuthorizationKey(string key)
        {
            return GetAuthorizationKeys().Contains(key);
        }
    }
}
