using SS2.SReport.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;

namespace SS2.SReport.BootStrap
{
    public class SearchHtmlHelper : SearchHelperBase
    {
        string GetControl(StateBag viewState, gr_Connection connstr, gr_Search search)
        {
            //搜索类型
            Enums.SearchInputType st = search.InputType;
            //if (st == Cwj.ReportHelper.Enums.SearchInputType.URL参数) { return string.Empty; }

            //控件ID
            string controlID = search.ControlID;
            StringBuilder ss = new StringBuilder();

            //控件值
            string value = search.DefaultValue;
            if (viewState != null && viewState[controlID] != null) { value = viewState[controlID].ToString(); }
            if (value == null) { value = HttpContext.Current.Request.Params[controlID]; }

            #region 控件内容
            switch (st)
            {
                case Enums.SearchInputType.文本:
                    ss.AppendFormat("<input class='input-sm form-control' id='{0}' name='{0}' value='{1}' type='text'/>", controlID, value);
                    break;
                case Enums.SearchInputType.日期:
                    ss.Append("<div class='input-group date'>");
                    ss.Append("<span class='input-group-addon'><i class='fa fa-calendar'></i></span>");
                    ss.AppendFormat("<input type='text' id='{0}' name='{0}' class='input-sm form-control' value='{1}'/>", controlID, value);
                    ss.Append("</div>");
                    ss.Append("<script type='text/javascript'>");
                    ss.Append("$(function(){");
                    ss.Append("$('#" + controlID + "').datepicker({" + "todayBtn: 'linked',keyboardNavigation: false,forceParse: false,calendarWeeks: true, autoclose: true" + "}); ");
                    ss.Append("});");
                    ss.Append("</script>");
                    break;
                case Enums.SearchInputType.日期段:
                    var value1 = "";
                    var value2 = "";
                    if (!string.IsNullOrEmpty(value))
                    {
                        value1 = value.Split('|').First();
                        value2 = value.Split('|').Last();
                    }
                    ss.AppendFormat("<div class='input-daterange input-group' id='{0}'>", controlID);
                    ss.AppendFormat("<input type = 'text' class='input-sm form-control' id='{0}START' name='{0}START' value='{1}' />", controlID, value1);
                    ss.Append("<span class='input-group-addon'>&gt;</span>");
                    ss.AppendFormat("<input type = 'text' class='input-sm form-control' id='{0}END' name='{0}END' value='{1}' />", controlID, value2);
                    ss.Append("</div>");
                    ss.Append("<script type='text/javascript'>");
                    ss.Append("$(function(){");
                    ss.Append("$('#" + controlID + "').datepicker({" + "keyboardNavigation: false, forceParse: false, autoclose: true" + "}); ");
                    ss.Append("});");
                    ss.Append("</script>");
                    break;
                case Enums.SearchInputType.SQL查询:
                    ss.AppendFormat("<select class='selectpicker input-sm form-control m-b' id='{0}' name='{0}' data-live-search='true'>", controlID);
                    if (search.AllowEmpty) { ss.Append("<option></option>"); }
                    try
                    {
                        if (string.IsNullOrEmpty(search.SourceString))
                        {
                            throw new Exception("请配置SQL源");
                        }
                        var ds = new DBHelper(connstr.GetConnectString()).GetDataTable(search.SourceString);
                        foreach (DataRow row in ds.Rows)
                        {
                            string txt = row[0].ToString();
                            string val = txt;
                            if (ds.Columns.Count > 1) { val = row[1].ToString(); }
                            ss.AppendFormat("<option value='{0}' {2}>{1}</option>", val, txt, val == value ? "selected='selected'" : "");
                        }
                    }
                    catch (Exception exp)
                    {
                        ss.AppendFormat("<option>ERROR:{0}</option>", exp.Message);
                    }
                    ss.Append("</select>");
                    break;
                case Enums.SearchInputType.自定义:
                    ss.AppendFormat("<select class='input-sm form-control' id='{0}' name='{0}' data-live-search='true'>", controlID);
                    if (search.AllowEmpty) { ss.Append("<option></option>"); }
                    foreach (var item in search.SourceString.Split(','))
                    {
                        var txt = item.Split(':').Last();
                        var val = item.Split(':').First();
                        ss.AppendFormat("<option value='{0}' {2}>{1}</option>", val, txt, val == value ? "selected='selected'" : "");
                    }
                    ss.Append("</select>");
                    break;
                case Enums.SearchInputType.URL参数:
                    ss.AppendFormat("<input type='hidden' id='{0}' name='{0}' value='{1}'>", controlID, value);
                    break;
                default:
                    ss.AppendFormat("<input class='input-sm form-control' id='{0}' name='{0}' type='text'>", controlID);
                    break;
            }
            #endregion

            return ss.ToString();
        }

        public override string GetSearchHtml(StateBag viewState, gr_Connection connstr, List<gr_Search> searchs)
        {
            //
            if (searchs.Count <= 0) { return string.Empty; }
            //
            var searchs1 = searchs.Where(i => i.InputType != Enums.SearchInputType.URL参数)
                .OrderBy(i => i.Index).ToList();
            //智能宽度
            //生成可显示搜索项
            StringBuilder ss = new StringBuilder();
            foreach (var search in searchs1)
            {
                ss.Append("<div class=\"col-sm-" + search.Width + " form-group\">");
                ss.Append("<label for=\"" + search.ControlID + "\">" + search.Text + "</label>");
                ss.Append(GetControl(viewState, connstr, search));
                ss.Append("</div>");
            }
            //生成不可显示搜索项
            var searchs2 = searchs.Where(i => i.InputType == Enums.SearchInputType.URL参数).ToList();
            foreach (var s in searchs2)
            {
                ss.Append(GetControl(viewState, connstr, s));
            }
            return ss.ToString();
        }

    }
}