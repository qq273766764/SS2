using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SS2.TestMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult BSTable()
        {
            var rpt = new ReportSettings().GetListSettings(1);
            var html = new SReport.BootStrap.SearchHtmlHelper().GetSearchHtml(null,rpt.DataSource.Connection,rpt.Searchs);
            ViewBag.searchHtml = html;
            return View();
        }
    }
}