using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SS2.TestWebForm
{
    public partial class TestCache : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write("设置缓存String<br/>");
            new SS2.SCache.Client().SetString("MKey", "这是一句话", DateTime.Now.AddDays(1));
            Response.Write("获取缓存:"+ new SS2.SCache.Client().GetString("MKey")+"<br/>");
            Thread.Sleep(3);
            Response.Write("获取缓存:" + new SS2.SCache.Client().GetString("MKey") + "<br/>");


            Response.Write("设置自增<br/>");
            new SS2.SCache.Client().SetIncrement("MKey23213", DateTime.Now.AddDays(1));
            new SS2.SCache.Client().SetIncrement("MKey23213", DateTime.Now.AddDays(1));
            Response.Write("获取自增"+ new SS2.SCache.Client().GetIncrement("MKey23213")+"<br/>");

            Response.Write("获取组织架构<br/>");
            var user = SS2.OC.OrgCache.Authorizations.FirstOrDefault();
            Response.Write("用户名：" + user.Name+"<br/>");

            var cacheKey = "SS2.OC.OCCache.nodes.Authorization";
            new SCache.Client().SetIncrement(cacheKey, DateTime.Now.AddYears(1));
            user = SS2.OC.OrgCache.Authorizations.FirstOrDefault();
            Response.Write("用户名：" + user.Name + "<br/>");
        }
    }
}