using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SS2.__SSControls
{
    public partial class page_gridlist_edit : Page
    {
        public SGridList.GridList ListModel
        {
            get
            {
                if (_ListModel == null)
                {
                    _ListModel = new SGridList.GridDSHelper().GetList(Request["key"]);
                }
                return _ListModel;
            }
        }
        public SGridList.GridList _ListModel;

        public string Req_ID { get { return Request["id"]; } }

        public string EditModelJson { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            EditModelJson = "[]";
            if (string.IsNullOrEmpty(Req_ID) || ListModel == null)
            {
                Response.Write("请传入主键");
                Response.End();
            }
            var data = new SGridList.GridDSHelper().GetEditData(ListModel, Req_ID == "new" ? "" : Req_ID);
            EditModelJson = JsonConvert.SerializeObject(data);
        }
    }
}