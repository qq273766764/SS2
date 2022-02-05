using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace SS2.__SSControls
{    /// <summary>
     /// ds 的摘要说明
     /// </summary>
    public class ds : IHttpHandler, IRequiresSessionState
    {
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";

            string key = context.Request["key"];
            string act = context.Request["act"];

            if (string.IsNullOrEmpty(key)) { context.Response.Write("NO KEY"); return; }
            var list = new SGridList.GridDSHelper().GetList(key);

            try
            {
                //获取数据
                if (act == "ds")
                {
                    int req_page = 1;
                    int req_rows = 50;
                    if (!Int32.TryParse(context.Request["page"], out req_page)) { req_page = 1; };
                    if (!Int32.TryParse(context.Request["rows"], out req_rows)) { req_rows = 50; };
                    var order = "";
                    var sort = context.Request["sort"];
                    if (!string.IsNullOrEmpty(sort)) {
                        order = sort+" "+context.Request["order"];
                    }

                    int count = 0;
                    var search = GetSearch(context, list);
                    HttpContext.Current.Session[export.SKEY_SEARCH + list.Key] = search;
                    var ds = new SGridList.GridDSHelper().GetListData(list, search, req_page, req_rows, order, out count);
                    context.Response.Write(FormatEasyUIData(count, ds));
                }
                //删除数据
                else if (act == "del")
                {
                    string id = context.Request["id"];
                    if (string.IsNullOrEmpty(id)) return;
                    if (new SGridList.GridDSHelper().DelListData(list, id))
                    {
                        context.Response.Write("OK");
                    }
                }
                //保存数据
                else if (act == "save")
                {
                    var value = context.Request["v"];
                    var id = context.Request["id"];
                    var obj = DataConvertHelper.JsonToDataTable(value);
                    if (id == "new")
                    {
                        if (new SGridList.GridDSHelper().AddNewData(list, obj.Rows[0]))
                        {
                            context.Response.Write("OK");
                            return;
                        }
                    }
                    else
                    {

                        if (new SGridList.GridDSHelper().UpdateListData(list, id, obj.Rows[0]))
                        {
                            context.Response.Write("OK");
                            return;
                        }
                    }
                    context.Response.Write("ERROR");
                }
            }
            catch (Exception exp)
            {
                throw new Exception(exp.Message);
            }
        }

        string FormatEasyUIData(int total, DataTable t)
        {
            string rowString = JsonConvert.SerializeObject(t);
            return "{\"total\":" + total + ",\"rows\":" + rowString + "}";
        }

        string GetSearch(HttpContext context, SGridList.GridList list)
        {
            List<string> ss = new List<string>();
            foreach (var s in list.Search)
            {
                if (!string.IsNullOrEmpty(s.WhereSql))
                {
                    string k = s.ID;
                    string v = context.Request.QueryString[k];
                    if (string.IsNullOrEmpty(v)) {
                        v = context.Request.Form[k];
                    }
                    if (!string.IsNullOrEmpty(v))
                    {
                        ss.Add(string.Format(s.WhereSql, v));
                    }
                }
            }
            if (ss.Count > 0)
            {
                return string.Join(" and ", ss);
            }
            return "";
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}