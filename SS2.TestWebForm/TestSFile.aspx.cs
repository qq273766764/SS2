using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SS2.TestWebForm
{
    public partial class TestSFile : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnSave_Click(object sender, EventArgs e)
        {
            var f = fileupload.PostedFile;
            if (f != null)
            {
                var fapi = new SFile.FileApi();
                fapi.SaveHttpPostFile("测试目录", f, "dataid", "ctrid", "cid", "cname");
            }
        }

        protected void btnCreateDir_Click(object sender, EventArgs e)
        {
            ////测试添加目录
            //var dir = new SFile.FileApi().FindDir("", "测试目录", "cid", "cname", true);
            ////添加测试文件信息
            //var savepath = SFile.Configuration.FileSavePath + "//" + Guid.NewGuid().ToString() + ".txt";
            //new SFile.FileDB().CreateFile(dir.NamePath, "111.txt", 21321,
            //    SFile.Configuration.ServerName, savepath, "dataid", "ctrid", "cid", "cname");


            ////测试添加目录
            //var fdb = new SFile.FileDB();
            //var dir2 = fdb.CreateDir("", "测试目录2", "cid", "cname");
            //fdb.DeleteDir(dir2.NamePath);
        }

        protected void btnSearch_Click(object sender, EventArgs e)
        {

        }
    }
}