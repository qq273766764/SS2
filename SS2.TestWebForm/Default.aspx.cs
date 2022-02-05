using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SS2.TestWebForm
{
    public partial class WebForm1 : System.Web.UI.Page, SS2.SSONet.INoLogin_SS2
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //var users = SS2.OC.OrgCache.Employees;
            //var xml = SS2.CfgHelper.Cfg.Find("Main", "Server").GetValueOrXml();
            //Response.Write("Xml:"+xml);

            //InitControlsRes.CopyPages();
            var sso = new SSONet.LoginServer();
            sso.SetLoginName("sa");
            var result = string.Join(",", sso.GetAuthorizationKeys());
            Response.Write("AuthorizationKeys:" + result);
            
        }
    }
}