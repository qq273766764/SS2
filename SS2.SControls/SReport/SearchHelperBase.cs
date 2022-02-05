using SS2.SReport.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;

namespace SS2.SReport
{
    public class SearchHelperBase
    {
        public virtual string GetWhereString(StateBag viewState, HttpRequest req, List<gr_Search> searchs)
        {
            if (searchs.Count <= 0) { return string.Empty; }
            List<string> wheres = new List<string>();
            foreach (var search in searchs)
            {
                string controlID = search.ControlID;
                string value = string.Empty;
                //搜索类型
                Enums.SearchInputType st = search.InputType;
                switch (st)
                {
                    case Enums.SearchInputType.日期段:
                        var req_start = req.Params[controlID + "START"];
                        var req_end = req.Params[controlID + "END"] + " 23:59:59";
                        DateTime start;
                        DateTime end;
                        if (!string.IsNullOrEmpty(req_start) || !string.IsNullOrEmpty(req_end))
                        {
                            value = req_start + "|" + req_end;
                        }
                        if (DateTime.TryParse(req_start, out start) && DateTime.TryParse(req_end, out end))
                        {
                            wheres.Add(string.Format(search.WhereFormat, start, end));
                        }
                        break;
                    case Enums.SearchInputType.URL参数:
                        value = req.QueryString[search.Text];
                        if (string.IsNullOrEmpty(value)) { value = req.Params[search.ControlID]; }
                        if (!string.IsNullOrEmpty(value))
                        {
                            wheres.Add(string.Format(search.WhereFormat, value));
                        }
                        break;
                    default:
                        value = req.Params[controlID];
                        if (!string.IsNullOrEmpty(value))
                        {
                            wheres.Add(string.Format(search.WhereFormat, value));
                        }
                        break;
                }
                if (viewState != null)
                {
                    viewState[controlID] = value;
                }
            }
            if (wheres.Count > 0)
            {
                return string.Join(" AND ", wheres);
            }
            return string.Empty;
        }

        public virtual void SetUrlPara(StateBag viewState, HttpRequest req, List<gr_Search> searchs)
        {
            for (int i = 0; i < searchs.Count; i++)
            {
                var s = searchs[i];
                string value = "";
                if (s.InputType == Enums.SearchInputType.URL参数)
                {
                    value = req.QueryString[s.Text];
                }
                else
                {
                    value = req.QueryString["s" + i];
                }
                if (!string.IsNullOrEmpty(value))
                {
                    viewState[s.ControlID] = value;
                }
            }
        }

        public virtual string GetSearchHtml(StateBag viewState, gr_Connection connstr, List<gr_Search> searchs)
        {
            throw new NotImplementedException();
        }
    }
}