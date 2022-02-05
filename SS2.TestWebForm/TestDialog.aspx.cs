using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SS2.TestWebForm
{
    public partial class TestDialog : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            SDialog.Configuration.RegisterSettings(new List<SDialog.DialogItem>()
            {
                new SDialog.DialogItem(){
                    DialogKey="t1",
                    Title="测试人员选择器",
                    ConnStr =CfgHelper.Cfg.Find("OC","ConnectString").Value,
                    Sql="SELECT * FROM [dbo].[OC_EMPLOYEE]",
                    KeyFieldName="ID",
                    Fields=new SDialog.DialogField[]{
                        new SDialog.DialogField(){ Field="UserName", Title="姓名", }
                    },
                    Searchs=new SDialog.DialogSearch[]{
                        new SDialog.DialogSearch(){  ParaKey="uname",Title="姓名", WhereSql="UserName like '%{0}%'" }
                    },
                }
            },true);
        }
    }
}