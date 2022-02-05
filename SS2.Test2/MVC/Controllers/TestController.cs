using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SS2.Test2.MVC.Controllers {
    public class TestController : Controller {
        public JsonResult Hello(FormCollection form) {
            var name = form["name"] ?? "无名氏";

            return Json(new { Result = "你好，" + name }, JsonRequestBehavior.AllowGet);
        }
    }
}