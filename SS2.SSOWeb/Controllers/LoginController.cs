using SS2.SSONet;
using SS2.SSOWeb.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SS2.SSOWeb.Controllers
{
    public class LoginController : Controller
    {
        /// <summary>
        /// 打开登录地址
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            //判断是否登录，没有登录就显示登录页面
            var sso = new SSONet.LoginServer();
            if (!string.IsNullOrEmpty(sso.LoginName))
            {
                return ToBackUrl(sso.LoginName);
            }
            return View();
        }

        [HttpPost]
        public ActionResult Index(LoginModel model)
        {
            var sso = new SSONet.LoginServer();
            if (string.IsNullOrEmpty(model.LoginName))
            {
                return Content("请填写用户名");
            }
            if (!sso.Login(model.LoginName, model.Password))
            {
                return Content("用户名或密码错误");
            }

            //登录跳转
            return ToBackUrl(sso.LoginName);
        }

        ActionResult ToBackUrl(string LoginName)
        {
            var back = Request.Params[SSONet.ConstParas.back];
            var token = SSONet.LoginToken.Add(LoginName);
            if (string.IsNullOrEmpty(back))
            {
                return Content("back is null");
                //return Redirect("/");
            }
            else
            {
                return Redirect($"{back}{(back.Contains("?") ? "&" : "?")}{SSONet.ConstParas.token}={token}&{SSONet.ConstParas.servertype}={SSONet.ConstParas.ss2_sso}");
            }
        }

        public JsonResult Validate()
        {
            try
            {
                var token = Request.Params[SSONet.ConstParas.token];
                if (string.IsNullOrEmpty(token)) return Json(new { success = false, msg = "token is null" });
                var loginName = SSONet.LoginToken.Get(token);
                if (string.IsNullOrEmpty(loginName))
                {
                    return Json(new SSONet.LoginResult { success = false, msg = "invalid token" }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new SSONet.LoginResult { success = true, msg = loginName }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception exp)
            {
                return Json(new SSONet.LoginResult { success = false, msg = exp.Message }, JsonRequestBehavior.AllowGet);
            }
        }


        /// <summary>
        /// 验证登录，验证是否登录，如果未登录挑战到登录页面
        /// </summary>
        /// <param name="ln"></param>
        /// <returns></returns>
        public ActionResult LoginScript(string ln)
        {
            var sso = new LoginServer();
            if (!string.IsNullOrEmpty(sso.LoginName) && sso.LoginName == ln)
            {
                return JavaScript("");
            }
            return JavaScript($"window.top.loaction='/Login/Index';");
        }
    }
}