using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool
{
    /// <summary>
    /// 展示页面接口
    /// </summary>
    public interface IViewAdapter
    {
        /// <summary>
        /// 搜索页面生成帮助
        /// </summary>
        /// <param name="searchs"></param>
        /// <param name="values"></param>
        /// <returns></returns>
        string CreateSearchHtml(Model.ReportSetting reportSetting, Dictionary<int, string> values);

        /// <summary>
        /// 根据报表配置生成必要的JavaScript脚本
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        StringBuilder CreateScript(Model.ReportSetting reportSetting,string loadUrl);

        /// <summary>
        /// 创建主Html
        /// </summary>
        /// <param name="reportSetting"></param>
        /// <returns></returns>
        string CreateMainHtml(Model.ReportSetting reportSetting);

        /// <summary>
        /// 生成UI数据
        /// </summary>
        /// <param name="viewResult"></param>
        /// <returns></returns>
        string CreateResultJson(Model.ViewDataResult viewResult);
    }
}
