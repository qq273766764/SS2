using SS2.SGridList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SS2.__SSControls
{
    public partial class page_gridlist : System.Web.UI.Page
    {
        string key
        {
            get
            {
                return Request["key"];
            }
        }

        public GridList ListModel
        {
            get
            {
                if (_ListModel == null)
                {
                    _ListModel = new GridDSHelper().GetList(key);
                }
                return _ListModel;
            }
        }
        public GridList _ListModel;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (ListModel == null)
            {
                StringBuilder ss = new StringBuilder();
                ss.AppendLine("<h3>请选择要打开的列表<h3>");
                ss.AppendLine("<ul>");
                foreach (var s in GridDSHelper.Settings)
                {
                    ss.AppendFormat("<li><a href='?key={0}'>{1}</a></li>", s.Key, s.Title);
                }
                ss.AppendLine("</ul>");
                Context.Response.Write(ss.ToString());
                Context.Response.End();
            }
        }
    }
}