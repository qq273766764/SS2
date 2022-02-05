using Newtonsoft.Json;
using SS2.SReport;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace SS2.TestMVC.Controllers
{
    public class BootStrapTableController : Controller
    {

        string SKEY_ORDER = "BootStrapTableController.SKEY_ORDER";
        string SKEY_SEARCH = "BootStrapTableController.SKEY_SEARCH";

        #region 报表配置及数据加载
        /// <summary>
        /// 生成加载脚本
        /// </summary>
        /// <returns></returns>
        public JavaScriptResult Index(int rid)
        {
            var rpt = new ReportSettings().GetListSettings(rid);

            var loadurl = Url.Action("Load", "BootStrapTable", new { rid });

            List<string> cols = new List<string>();
            if (rpt.BootStrapOptions.ShowRadioOrCheck == 1)
            {
                cols.Add("{radio:true,width:'45px'}");
            }
            else if (rpt.BootStrapOptions.ShowRadioOrCheck == 2)
            {
                cols.Add("{checkbox:true,width:'45px'}");
            }
            foreach (var col in rpt.YAxis)
            {
                if (col.AxisType == "H") continue;
                Dictionary<string, string> opts = new Dictionary<string, string>();
                opts.Add("field", col.Field);
                opts.Add("title", col.Title);
                if (!string.IsNullOrEmpty(col.Width))
                {
                    opts.Add("width", col.Width);
                }
                if (!string.IsNullOrEmpty(col.CellStyle))
                {
                    opts.Add("class", col.CellStyle);
                }
                opts.Add("sortable", "true");
                cols.Add("{" + string.Join(",", opts.Select(i => $"{i.Key}:'{i.Value}'")) + "}");
            }

            StringBuilder js = new StringBuilder();
            js.Append("$(function(){");
            js.Append("$('#Report').bootstrapTable({");

            js.Append("url: '" + loadurl + "',");        //请求后台的URL（*）
            js.Append("method: 'get',");                      //请求方式（*）
            if (!string.IsNullOrEmpty(rpt.BootStrapOptions.toolabr)) js.Append("toolbar: '" + rpt.BootStrapOptions.toolabr + "',");                //工具按钮用哪个容器
            js.Append("striped: false,");                      //是否显示行间隔色
            js.Append("cache: false,");                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            js.Append("pagination: true,");                   //是否显示分页（*）
            js.Append("sortable: true,");                     //是否启用排序
            js.Append("sortOrder: 'asc',");                   //排序方式
            if (!string.IsNullOrEmpty(rpt.BootStrapOptions.queryParams)) js.Append("queryParams: " + rpt.BootStrapOptions.queryParams + ",");              //传递参数（*）
            js.Append("sidePagination: 'server', ");          //分页方式：client客户端分页，server服务端分页（*）
            js.Append("pageNumber: 1,");                     //初始化加载第一页，默认第一页
            js.Append("pageSize: 50,");                      //每页的记录行数（*）
            js.Append("pageList: [50, 100, 200],");        //可供选择的每页的行数（*）
                                                           //search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
                                                           //strictSearch: true,
            js.Append("showColumns: " + (rpt.BootStrapOptions.ShowColumns ? "true" : "false") + ",");                  //是否显示所有的列
            js.Append("showHeader:" + (rpt.BootStrapOptions.showHeader ? "true" : "false") + ",");                 //显示标题行
            js.Append("showRefresh: " + (rpt.BootStrapOptions.ShowRefresh ? "true" : "false") + ",");                  //是否显示刷新按钮
            js.Append("minimumCountColumns: 2,");             //最少允许的列数
            js.Append("clickToSelect: true,");                //是否启用点击选中行
            //js.Append("height: 450,");                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            //js.Append("onLoadError:function(status,res){ console.log(status);console.log(res);},");
            if (!string.IsNullOrEmpty(rpt.BootStrapOptions.onLoadSuccess)) { js.Append("onLoadSuccess:" + rpt.BootStrapOptions.onLoadSuccess + ","); }
            if (!string.IsNullOrEmpty(rpt.BootStrapOptions.onLoadError)) { js.Append("onLoadError:" + rpt.BootStrapOptions.onLoadError + ","); }
            else { js.Append("onLoadError:function(status,res){ console.log(status);console.log(res);},"); }
            js.Append("showToggle: " + (rpt.BootStrapOptions.showToggle ? "true" : "false") + ",");//是否显示详细视图和列表视图的切换按钮

            js.Append("columns:[" + string.Join(",", cols) + "]");

            js.Append("});");
            js.Append("});");

            return JavaScript(js.ToString());
        }
        /// <summary>
        /// 加载数据
        /// </summary>
        /// <returns></returns>
        public string Load(int rid)
        {
            var rpt = new ReportSettings().GetListSettings(rid);
            var count = 0;
            DataTable Datas = null;
            try
            {
                var rHelper = new ReportHelper();
                if (!string.IsNullOrEmpty(Request["sort"]) && !string.IsNullOrEmpty(Request["order"]))
                {
                    Session[SKEY_ORDER] = string.Format("{0} {1}", Request["sort"], Request["order"]);
                }
                else
                {
                    Session[SKEY_ORDER] = "";
                }
                Session[SKEY_SEARCH] = rHelper.GetWhereString(Request, rpt.Searchs);

                var search = Session[SKEY_SEARCH] as string;
                var sortstr = Session[SKEY_ORDER] as string;

                var pageindex = Convert.ToInt32(Request["offset"]);
                var pagesize = Convert.ToInt32(Request["limit"]);
                if (pagesize == 0) { pagesize = 1000; }
                pageindex = pageindex / pagesize + 1;

                if (rpt.FuncQueryData == null)
                {
                    Datas = rHelper.BindListDatas(rpt, search, pageindex, pagesize, out count, sortstr);
                }
                else
                {
                    Datas = rpt.FuncQueryData(search, pageindex, pagesize, sortstr);
                    count = Datas.Rows.Count;
                }

                //rpt.ExportExtend?.Invoke(Datas, rpt);

                Datas = rHelper.FormatTableValue(rpt, Datas);

                var json = JsonConvert.SerializeObject(new { total = count, rows = Datas });
                return json;
            }
            catch (Exception exp)
            {
                //CodeHelper.Logger.Error("列表管理中心", $"{rpt.Title}加载错误", exp, gs_User.ID, gs_User.LoginName);
                throw;
            }
        }

        /// <summary>
        /// 导出Excel
        /// </summary>
        /// <param name="rid"></param>
        /// <returns></returns>
        public void Export(int rid)
        {
            string[] ExportCols;
            var report = new ReportSettings().GetListSettings(rid);
            var rHelper = new ReportHelper();
            var cols = Request["cols"];
            var HideTitle = Request["htitle"] == "1";
            if (!string.IsNullOrEmpty(cols))
            {
                ExportCols = cols.Split(',')
                     .Where(c => !string.IsNullOrEmpty(c))
                     .ToArray();
            }
            else
            {
                ExportCols = new string[] { };
            }

            #region 绑定报表
            if (report == null)
            {
                Response.Write("NO REPORT");
                Response.End();
            }

            if (report.Type.Text != SReport.Enums.ReportType.明细列表.ToString())
            {
                Response.Write("REPORT_TYPE IS NOT LIST");
                Response.End();
            }
            int Count = 0;
            DataTable Datas;
            if (report.FuncQueryData == null)
            {
                Datas = rHelper.BindListDatas(report, Session[SKEY_SEARCH] as string, 1, 50000, out Count, Session[SKEY_ORDER] as string);
            }
            else
            {
                Datas = report.FuncQueryData(Session[SKEY_SEARCH] as string, 1, 50000, Session[SKEY_ORDER] as string);
                Count = Datas.Rows.Count;
            }
            #endregion

            report.ExportExtend?.Invoke(Datas, report);

            #region 生成文件
            Response.Charset = "UTF-8";
            Response.ContentEncoding = System.Text.Encoding.UTF8;
            Response.AppendHeader("Content-Disposition",
                "attachment;filename=" + HttpUtility.UrlEncode(report.Title + DateTime.Now.ToString("yyyyMMdd") + ".xls",
                System.Text.Encoding.UTF8).ToString());
            Response.ContentType = "application/ms-excel";
            var ms = rHelper.OutFileToStream(report, ExportCols, Datas, HideTitle);
            Response.OutputStream.Write(ms.ToArray(), 0, Convert.ToInt32(ms.Length));
            Response.End();
            //return Content("");

            //var ms = rHelper.OutFileToStream(report, ExportCols, Datas, HideTitle);
            //return File(
            //    ms, 
            //    "application/ms-excel",
            //    HttpUtility.UrlEncode(report.Title + DateTime.Now.ToString("yyyyMMdd") + ".xls",Encoding.UTF8));

            #endregion
        }

        #endregion
    }
}