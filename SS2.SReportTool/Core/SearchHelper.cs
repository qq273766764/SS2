using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool.Core
{
    /// <summary>
    /// 根据检索配置及参数集合生成查询SQL语句
    /// </summary>
    public class SearchHelper
    {
        /// <summary>
        /// 多参数分隔符
        /// </summary>
        public const char SPLIT_CHAR = '|';

        /// <summary>
        /// 查找参数值
        /// </summary>
        /// <param name="report"></param>
        /// <param name="Paras"></param>
        /// <returns></returns>
        public Dictionary<int, string> FindSearchValue(Model.ReportSetting report, NameValueCollection Paras)
        {
            var result = new Dictionary<int, string>();
            if (report.Searchs != null && report.Searchs.Count > 0)
            {
                foreach (var search in report.Searchs)
                {
                    var value = Paras[search.RequestKey];
                    {
                        if (!string.IsNullOrEmpty(value) && ReportSqlValidator.ValidateParaValue(value))
                        {
                            result.Add(search.ID, value);
                        }
                    }
                }
            }
            return result;
        }

        /// <summary>
        /// 生成where检索集合
        /// </summary>
        /// <param name="report"></param>
        /// <param name="values"></param>
        /// <returns></returns>
        public List<string> CreateSearchSql(Model.ReportSetting report, Dictionary<int, string> values)
        {
            var result = new List<string>();
            if (report.Searchs != null && report.Searchs.Count > 0)
            {
                foreach (var search in report.Searchs)
                {
                    var hasSql = false;
                    if (values.ContainsKey(search.ID))
                    {
                        var v = values[search.ID];
                        var sql = FormatWhere(search, v);
                        if (!string.IsNullOrEmpty(sql))
                        {
                            result.Add(sql);
                            hasSql = true;
                        }
                    }

                    //判断必填搜索项
                    if (!search.AllowEmpty && !hasSql)
                    {
                        result.Add("1=0");
                    }
                }
            }
            return result;
        }

        /// <summary>
        /// 格式是Sql检索
        /// </summary>
        /// <param name="search"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        string FormatWhere(Model.ReportSearch search, string value)
        {
            switch (search.InputType)
            {
                case EnumTypes.SEARCH_INPUT_TYPE.日期段:
                    var vals = value.Split(SPLIT_CHAR);
                    if (vals.Length == 2)
                    {
                        if (DateTime.TryParse(vals[0], out DateTime d1) && DateTime.TryParse(vals[1], out DateTime d2))
                        {
                            return string.Format(search.WhereFormat, d1, d2);
                        }
                        return null;
                    }
                    else
                    {
                        return null;
                    }
                case EnumTypes.SEARCH_INPUT_TYPE.双文本:
                    vals = value.Split(SPLIT_CHAR);
                    if (vals.Length == 2)
                    {
                        return string.Format(search.WhereFormat, vals[0], vals[1]);
                    }
                    else
                    {
                        return null;
                    }
                case EnumTypes.SEARCH_INPUT_TYPE.数字段:
                    vals = value.Split(SPLIT_CHAR);
                    if (vals.Length == 2)
                    {
                        if (decimal.TryParse(vals[0], out decimal dec1) && decimal.TryParse(vals[1], out decimal dec2))
                        {
                            return string.Format(search.WhereFormat, dec1, dec2);
                        }
                        return null;
                    }
                    else
                    {
                        return null;
                    }
                default:
                    return string.Format(search.WhereFormat, value);
            }
        }
    }
}
