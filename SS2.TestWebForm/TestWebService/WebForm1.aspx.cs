using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SS2.TestWebForm.TestWebService
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            using (var svc = new ServiceReference1.WebService1SoapClient())
            {
                svc.SaveObj(1);
                Response.Write("读取数据" + svc.GetObj() + "<br/>");

                svc.SaveObj("1");
                Response.Write("读取数据" + svc.GetObj() + "<br/>");

                svc.SaveList(new ServiceReference1.ArrayOfString() { "1", "2" });
                Response.Write("读取数据" + svc.GetList() + "<br/>");



                var a = new aa();
                svc.SaveObj(a);
                Response.Write("读取数据" + svc.GetObj() + "<br/>");
                svc.SaveObj(new List<aa> {
                    new aa()
                });
                Response.Write("读取数据" + svc.GetObj() + "<br/>");
            }
        }
    }
    [DataContract]
    public class aa
    {
        [DataMember]
        public string Name { get; set; } = "John";

        [DataMember]
        public int Age { get; set; } = 12;
    }
}