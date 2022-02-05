using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SS2.__SSControls
{
    public partial class page_upload : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var dataid = Request["dataid"];
            var ctrid = Request["ctrid"];
            var path = Request["path"];
            if (!string.IsNullOrEmpty(path)) { path = HttpUtility.UrlEncode(path); }

            var exts = "gif,png,jpg,jpeg,bmp,rar,7z,zip,doc,docx,xls,xlsx,ppt,pptx,pdf,txt,xlsm";
            long fileSingleSizeLimit = 300 * 1024 * 1024;
            long fileSizeLimit = 100 * fileSingleSizeLimit;

            if (string.IsNullOrEmpty(dataid)) { dataid = ""; }
            if (string.IsNullOrEmpty(ctrid)) { ctrid = ""; }
            if (string.IsNullOrEmpty(path)) { path = "TMP"; }

            var pathText = path;
            var dir = new SFile.FileApi().FindDir(path, string.Empty, string.Empty, false);
            if (dir != null) { pathText = dir.NamePath; }
            pathText = SFile.PathHelper.FormatPath(pathText);
            var options = new
            {
                dataid,
                ctrid,
                path,
                pathText,
                exts,
                fileSingleSizeLimit,
                fileSizeLimit
            };

            ScriptManager.RegisterClientScriptBlock(this,
                this.GetType(),
                "options", "var uploadOptions=" + Newtonsoft.Json.JsonConvert.SerializeObject(options),
                true);
        }
    }
}