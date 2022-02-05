using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SS2.TestWebForm
{
    public partial class TestGridList : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            SGridList.Configuration.ConnectString = CfgHelper.Cfg.Find("OC", "ConnectString").Value;
            SGridList.Configuration.RegisterSettings(new List<SGridList.GridList>()
            {
                new SGridList.GridList(){
                    Key="L001",
                    Title="测试列表001",
                    Columns=new SGridList.GridColumn[]{
                        new SGridList.GridColumn(){ FieldName="Type", Title="类别",Editor=SGridList.GridEditorEasyUI.TextBox },
                        new SGridList.GridColumn(){ FieldName="Name", Title="名称",Editor=SGridList.GridEditorEasyUI.TextBox },
                        new SGridList.GridColumn(){ FieldName="Value", Title="值",Editor=SGridList.GridEditorEasyUI.TextBox },
                        new SGridList.GridColumn(){ FieldName="Value1", Title="值1",Editor=SGridList.GridEditorEasyUI.TextBox },
                        new SGridList.GridColumn(){ FieldName="Value2", Title="值2",Editor=SGridList.GridEditorEasyUI.TextBox },
                        new SGridList.GridColumn(){ FieldName="Value3", Title="值3",Editor=SGridList.GridEditorEasyUI.TextBox },
                        new SGridList.GridColumn(){ FieldName="Value4", Title="值4",Editor=SGridList.GridEditorEasyUI.TextBox },
                        new SGridList.GridColumn(){ FieldName="Value5", Title="值5",Editor=SGridList.GridEditorEasyUI.TextBox }
                    },
                    DataSource=new SGridList.GridDataSource(){
                        TableName="SS2_BaseData",
                    },
                    KeyFieldName="ID",
                    EditFormLayOut=new SGridList.GridLayOut(){
                        Title="编辑窗口",
                        Panels =new SGridList.GridLayOutPanel[]{
                            new  SGridList.GridLayOutPanel(){ Title="基本信息", Fields=new string[]{ "类别", "名称", "值" } },
                            new SGridList.GridLayOutPanel(){ Title="附加信息", Fields=new string[]{"值1", "值2", "值3", "值4", "值5" } }
                        },
                        OnSave=(System.Data.DataRow row)=>{

                        }
                    },
                    EditMode= SGridList.GridEditorMode.ADD_EDIT_DELETE,
                    Search=new SGridList.GridSearch[]{
                        new SGridList.GridSearch(){ Title="名称",Editor=SGridList.GridEditorEasyUI.TextBox,WhereSql="[Name] like '%{0}%'"},
                    }
                }
            });
        }
    }
}