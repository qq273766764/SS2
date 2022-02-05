using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using SS2.SReportTool.Model;

namespace SS2.SReportTool.ViewAdapter
{
    public class BSTableViewAdapter : IViewAdapter
    {
        /// <summary>
        /// 创建初始化脚本
        /// </summary>
        /// <param name="reportSetting"></param>
        /// <param name="loadurl"></param>
        /// <returns></returns>
        public StringBuilder CreateScript(ReportSetting reportSetting, string loadurl)
        {
            var ctrId = "R_" + reportSetting.ID;
            var ui = reportSetting.UIOptions as BSTableUIOptions;


            List<string> cols = new List<string>();
            if (ui.ShowRadioOrCheck.Value == "1")
            {
                cols.Add("{radio:true,width:'45px'}");
            }
            else if (ui.ShowRadioOrCheck.Value == "2")
            {
                cols.Add("{checkbox:true,width:'45px'}");
            }
            foreach (var col in reportSetting.XCols)
            {
                if (col.ColType == EnumTypes.COLUMN_TYPE.Hide) continue;
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
                if (col.Sortable || ui.Sortabled.ValueBool)
                {
                    opts.Add("sortable", "true");
                }
                cols.Add("{" + string.Join(",", opts.Select(i => $"{i.Key}:'{i.Value}'")) + "}");
            }

            StringBuilder js = new StringBuilder();
            js.Append("$(function(){");
            js.Append("$('#Report').bootstrapTable({");

            js.Append("url: '" + loadurl + "',");        //请求后台的URL（*）
            js.Append("method: 'get',");                      //请求方式（*）
            if (!string.IsNullOrEmpty(ui.toolabr.Value)) js.Append("toolbar: '" + ui.toolabr.Value + "',");                //工具按钮用哪个容器
            js.Append("striped: false,");                      //是否显示行间隔色
            js.Append("cache: false,");                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            if (ui.Pagination.ValueBool) js.Append("pagination: true,");                   //是否显示分页（*）
            js.Append("sortable: true,");                     //是否启用排序
            js.Append("sortOrder: 'asc',");                   //排序方式
            if (!string.IsNullOrEmpty(ui.queryParams.Value)) js.Append("queryParams: " + ui.queryParams.Value + ",");              //传递参数（*）
            js.Append("sidePagination: 'server', ");          //分页方式：client客户端分页，server服务端分页（*）
            if (ui.SilentSort.ValueBool) { js.Append("silentSort:true,"); }
            js.Append("pageNumber: 1,");                     //初始化加载第一页，默认第一页
            js.Append("pageSize: " + ui.PageSize + ",");        //每页的记录行数（*）
            js.Append("pageList: " + ui.pageList + ",");        //可供选择的每页的行数（*）
                                                                //search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
                                                                //strictSearch: true,
            js.Append("showColumns: " + (ui.ShowColumns.ValueBool ? "true" : "false") + ",");                  //是否显示所有的列
            js.Append("showHeader:" + (ui.showHeader.ValueBool ? "true" : "false") + ",");                 //显示标题行
            js.Append("showRefresh: " + (ui.ShowRefresh.ValueBool ? "true" : "false") + ",");                  //是否显示刷新按钮
            js.Append("minimumCountColumns: 2,");             //最少允许的列数
            js.Append("clickToSelect: true,");                //是否启用点击选中行
            //js.Append("height: 450,");                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            //js.Append("onLoadError:function(status,res){ console.log(status);console.log(res);},");
            if (!string.IsNullOrEmpty(ui.onLoadSuccess.Value)) { js.Append("onLoadSuccess:" + ui.onLoadSuccess.Value + ","); }
            if (!string.IsNullOrEmpty(ui.onLoadError.Value)) { js.Append("onLoadError:" + ui.onLoadError.Value + ","); }
            else { js.Append("onLoadError:function(status,res){ console.log(status);console.log(res);},"); }
            js.Append("showToggle: " + (ui.showToggle.ValueBool ? "true" : "false") + ",");//是否显示详细视图和列表视图的切换按钮

            js.Append("columns:[" + string.Join(",", cols) + "]");

            js.Append("});");
            js.Append("});");


            throw new NotImplementedException();
        }

        /// <summary>
        /// 创建搜索控件Html
        /// </summary>
        /// <param name="reportSetting"></param>
        /// <param name="values"></param>
        /// <returns></returns>
        public string CreateSearchHtml(ReportSetting reportSetting, Dictionary<int, string> values)
        {
            if (reportSetting.Searchs == null || reportSetting.Searchs.Count == 0) { return string.Empty; }
            StringBuilder html = new StringBuilder();

            foreach (var search in reportSetting.Searchs.OrderBy(i => i.Index))
            {
                if (search.InputType == EnumTypes.SEARCH_INPUT_TYPE.URL参数)
                {
                    CreateHtmlControl(html, search, reportSetting, values);
                }
                else
                {
                    html.Append("<div class=\"col-sm-" + search.Width + " form-group\">");
                    html.Append("<label for=\"" + search.ControlID + "\">" + search.Text + "</label>");
                    CreateHtmlControl(html, search, reportSetting, values);
                    html.Append("</div>");
                }
            }

            return html.ToString();
        }
        /// <summary>
        /// 创建主控件Html
        /// </summary>
        /// <param name="reportSetting"></param>
        /// <returns></returns>
        public string CreateMainHtml(ReportSetting reportSetting)
        {
            return $"<table id=\"R_{reportSetting.ID}\" class=\"table table-striped table-bordered table-hover dataTables-example\"></table>";
        }
        /// <summary>
        /// 生成结果Json
        /// </summary>
        /// <param name="viewResult"></param>
        /// <returns></returns>
        public string CreateResultJson(ViewDataResult viewResult)
        {
            if (viewResult.ListData != null)
            {
                var json = JsonConvert.SerializeObject(new { total = viewResult.ListTotalCount, rows = viewResult.ListData });
                return json;
            }
            return null;
        }
        /// <summary>
        /// 创建搜索控件
        /// </summary>
        /// <param name="html"></param>
        /// <param name="search"></param>
        /// <param name="report"></param>
        /// <param name="values"></param>
        void CreateHtmlControl(StringBuilder html, ReportSearch search, ReportSetting report, Dictionary<int, string> values)
        {
            var ctrId = search.ControlID;
            var value = search.DefaultValue;
            var split = Core.SearchHelper.SPLIT_CHAR;
            if (values.ContainsKey(search.ID)) { value = values[search.ID]; }

            switch (search.InputType)
            {
                case EnumTypes.SEARCH_INPUT_TYPE.文本:
                    html.AppendFormat("<input class='input-sm form-control' id='{0}' name='{0}' value='{1}' type='text'>", ctrId, value);
                    break;
                case EnumTypes.SEARCH_INPUT_TYPE.日期:
                    html.Append("<div class='input-group date'>");
                    html.Append("<span class='input-group-addon'><i class='fa fa-calendar'></i></span>");
                    html.AppendFormat("<input type='text' id='{0}' name='{0}' class='input-sm form-control' value='{1}'>", ctrId, value);
                    html.Append("</div>");
                    html.Append("<script type='text/javascript'>");
                    html.Append("$(function(){");
                    html.Append("$('#" + ctrId + "').datepicker({" + "todayBtn: 'linked',keyboardNavigation: false,forceParse: false,calendarWeeks: true, autoclose: true" + "}); ");
                    html.Append("});");
                    html.Append("</script>");
                    break;
                case EnumTypes.SEARCH_INPUT_TYPE.日期段:
                    html.AppendFormat("<div class='input-daterange input-group' id='{0}'>", ctrId);
                    html.AppendFormat("<input type = 'text' class='input-sm form-control' id='{0}START' name='{0}START' value='{1}' />", ctrId, value.Split(split).First());
                    html.Append("<span class='input-group-addon'>&gt;</span>");
                    html.AppendFormat("<input type = 'text' class='input-sm form-control' id='{0}END' name='{0}END' value='{1}' />", ctrId, value.Split(split).Last());
                    html.Append("</div>");
                    html.Append("<script type='text/javascript'>");
                    html.Append("$(function(){");
                    html.Append("$('#" + ctrId + "').datepicker({" + "keyboardNavigation: false, forceParse: false, autoclose: true" + "}); ");
                    html.Append("});");
                    html.Append("</script>");
                    break;
                case EnumTypes.SEARCH_INPUT_TYPE.双文本:
                    html.AppendFormat("<div class='input-group' id='{0}'>", ctrId);
                    html.AppendFormat("<input type = 'text' class='input-sm form-control' id='{0}START' name='{0}START' value='{1}' />", ctrId, value.Split(split).First());
                    html.Append("<span class='input-group-addon'> ~ </span>");
                    html.AppendFormat("<input type = 'text' class='input-sm form-control' id='{0}END' name='{0}END' value='{1}' />", ctrId, value.Split(split).Last());
                    html.Append("</div>");
                    break;
                case EnumTypes.SEARCH_INPUT_TYPE.数字段:
                    html.AppendFormat("<div class='input-group' id='{0}'>", ctrId);
                    html.AppendFormat("<input type = 'number' class='input-sm form-control' id='{0}START' name='{0}START' value='{1}' />", ctrId, value.Split(split).First());
                    html.Append("<span class='input-group-addon'>&gt;</span>");
                    html.AppendFormat("<input type = 'number' class='input-sm form-control' id='{0}END' name='{0}END' value='{1}' />", ctrId, value.Split(split).Last());
                    html.Append("</div>");
                    break;
                case EnumTypes.SEARCH_INPUT_TYPE.SQL查询:
                    html.AppendFormat("<select class='selectpicker input-sm form-control m-b' id='{0}' name='{0}' data-live-search='true'>", ctrId);
                    if (search.AllowEmpty) { html.Append("<option></option>"); }
                    try
                    {
                        if (string.IsNullOrEmpty(search.SourceString)) { throw new Exception("请配置SQL源"); }
                        var ds = report.DataSource.DataAdapter.QueryData(report.DataSource.ConnectionString, search.SourceString);
                        foreach (DataRow row in ds.Rows)
                        {
                            string txt = row[0].ToString();
                            string val = txt;
                            if (ds.Columns.Count > 1) { val = row[1].ToString(); }
                            html.AppendFormat("<option value='{0}' {2}>{1}</option>", val, txt, val == value ? "selected='selected'" : "");
                        }
                    }
                    catch (Exception exp)
                    {
                        html.AppendFormat("<option>ERROR:{0}</option>", exp.Message);
                    }
                    html.Append("</select>");
                    break;
                case EnumTypes.SEARCH_INPUT_TYPE.自定义:
                    html.AppendFormat("<select class='selectpicker input-sm form-control m-b' id='{0}' name='{0}' data-live-search='true'>", ctrId);
                    if (search.AllowEmpty) { html.Append("<option></option>"); }
                    foreach (var item in search.SourceString.Split(','))
                    {
                        var txt = item.Split(':').Last();
                        var val = item.Split(':').First();
                        html.AppendFormat("<option value='{0}' {2}>{1}</option>", val, txt, val == value ? "selected='selected'" : "");
                    }
                    html.Append("</select>");
                    break;
                case EnumTypes.SEARCH_INPUT_TYPE.URL参数:
                    html.AppendFormat("<input type='hidden' id='{0}' name='{0}' value='{1}'>", ctrId, value);
                    break;
                default:
                    html.AppendFormat("<input class='input-sm form-control' id='{0}' name='{0}' type='text'>", ctrId);
                    break;
            }
        }
    }
}
