using Newtonsoft.Json;
using SS2.SDialog;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SS2.__SSControls
{
    public partial class page_dialog : Page
    {
        public string para_dlg { get { return Request["dlg"]; } }

        public string para_action { get { return Request["act"]; } }

        public string para_selectValue { get { return Request["selvalues"]; } }

        public string paras_url { get; set; }

        public bool HasTreeData { get; set; }

        public DialogItem dialog { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            dialog = Configuration.GetDialog(para_dlg);
            if (dialog == null)
            {
                Response.Write("参数错误");
                Response.End();
                return;
            }

            //if (Request.QueryString["nnf2"] == "1" && para_action != "1")
            //{
            //    Server.Transfer("Dialog2.aspx");
            //    return;
            //}

            bool IsMuti = false;
            if (bool.TryParse(Request["IsMuti"], out IsMuti))
            {
                dialog.IsMutiSelect = IsMuti;
            }

            var paras = GetParas();

            paras_url = "?" + string.Join("&", paras.Select(i => i.Key + "=" + HttpUtility.UrlEncode(i.Value)));
            paras_url += "&act=1";

            if (para_action == "1")
            {
                var json = LoadGridData(dialog, paras);
                Response.Write(json);
                Response.End();
            }
            else
            {
                if (dialog.ShowTree != null)
                {
                    LoadTreeData(paras);
                }
                LoadSelectedValue(dialog, para_selectValue, this);
            }
        }

        void LoadTreeData(Dictionary<string, string> paras)
        {
            if (dialog.ShowTree != null)
            {
                var treeNodes = DataServer.GetTreeDataSource(dialog, paras);
                HasTreeData = treeNodes.Count > 0;
                //var json = JsonConvert.SerializeObject(treeNodes);
                var json= new JavaScriptSerializer().Serialize(treeNodes);
                ClientScript.RegisterClientScriptBlock(this.GetType(), "treeData", "var treeData=" + json + ";", true);
            }
        }

        internal static string LoadSelectedValue(DialogItem dialog, string selectedKeys, Page page)
        {
            string result = "[]";
            if (!string.IsNullOrEmpty(selectedKeys))
            {
                SReport.ReportSqlValidator.ValidateSqlPara(selectedKeys);

                //判断是否直接返回DataTable
                if (dialog.DataSourceGetter != null)
                {
                    var dic = new Dictionary<string, string>();
                    dic.Add(dialog.KeyFieldName, selectedKeys);
                    var dt = dialog.DataSourceGetter(dic);
                    result = LoadGridData(dialog, dt);
                }
                else
                {
                    var values = selectedKeys.Split(',').Take(1000).ToArray();
                    var where = dialog.KeyFieldName + " in (" + string.Join(",", values.Select(i => "'" + i + "'")) + ")";
                    //查询数据
                    string sql = "select top 1000 * from(" + (dialog.SqlGetter == null ? dialog.Sql : dialog.SqlGetter(new string[] { })) + ") as tttt";
                    sql += " where " + where;
                    using (var conn = new SqlConnection(dialog.ConnStr))
                    {
                        var cmd = conn.CreateCommand();
                        cmd.CommandText = sql;
                        var adapter = new SqlDataAdapter(cmd);
                        var dt = new DataTable();
                        adapter.Fill(dt);
                        result = LoadGridData(dialog, dt);
                    }
                }
            }

            page?.ClientScript.RegisterClientScriptBlock(page.GetType(), "selectData", "var selRows=" + result + ";", true);
            return result;
        }

        string LoadGridData(DialogItem dialog, Dictionary<string, string> paras)
        {
            try
            {
                return LoadGridData(dialog, DataServer.GetDataSource(dialog, paras));
            }
            catch (Exception exp)
            {
                return exp.ToString();
            }
        }

        static DataTable FormatTableValue(DialogItem dialog, DataTable table)
        {
            DataTable newTable = new DataTable();
            foreach (DataColumn col in table.Columns)
            {
                newTable.Columns.Add(new DataColumn(col.ColumnName));
            }
            if (table.Rows.Count > 0)
            {
                foreach (DataRow row in table.Rows)
                {
                    var newRow = newTable.NewRow();
                    foreach (DataColumn col in table.Columns)
                    {
                        var axis = dialog.Fields.FirstOrDefault(i => i.Field == col.ColumnName);
                        if (axis != null && !string.IsNullOrEmpty(axis.Format))
                        {
                            newRow[axis.Field] = SReport.ReportCellFormatHelper.FormatCell(row, axis.Field, "", axis.Format);
                        }
                        else
                        {
                            newRow[col.ColumnName] = EncodeHtml(axis, row[col.ColumnName]);
                        }
                    }
                    newTable.Rows.Add(newRow);
                }
            }
            return newTable;
        }

        static object EncodeHtml(DialogField axis, object value)
        {
            if (axis != null && axis.EncodeHtml && value != null)
            {
                return HttpUtility.HtmlEncode(value.ToString());
            }
            return value;
        }

        static string LoadGridData(DialogItem dialog, DataTable griddata)
        {
            try
            {
                return JsonConvert.SerializeObject(FormatTableValue(dialog, griddata));
            }
            catch (Exception exp)
            {
                return exp.Message;
            }
        }

        Dictionary<string, string> GetParas()
        {
            var dic = new Dictionary<string, string>();
            foreach (string key in Request.QueryString.AllKeys)
            {
                dic.Add(key, Request.QueryString[key]);
            }
            foreach (string key in Request.Form.AllKeys)
            {
                dic.Add(key, Request.Form[key]);
            }
            return dic;
        }
    }
}