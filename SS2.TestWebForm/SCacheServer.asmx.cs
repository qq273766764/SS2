using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using SS2.SCache;

namespace SS2.TestWebForm
{
    /// <summary>
    /// SCacheServer 的摘要说明
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // 若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消注释以下行。 
    // [System.Web.Script.Services.ScriptService]
    public class SCacheServer : System.Web.Services.WebService
    {
        //[WebMethod]
        //public object Get(string key, string hash)
        //{
        //    return new MemoryServer().Get(key, hash);
        //}

        //[WebMethod]
        //public void Set(string key, object value, DateTime ExpirationTime, string hash)
        //{
        //    new MemoryServer().Set(key, value, ExpirationTime, hash);
        //}
    }
}
