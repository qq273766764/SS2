using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool.Model
{
    /// <summary>
    /// 报表查询参数集合
    /// </summary>
    public class ViewDataPara
    {
        public ReportSetting Report { get; set; }
        public Dictionary<int, string> SearchValues { get; set; } = new Dictionary<int, string>();

        public Dictionary<string, string> OrderFields { get; set; } = new Dictionary<string, string>();

        public int PageIndex { get; set; } = 1;

        public int PageSize { get; set; } = 10;
    }

    /// <summary>
    /// 报表查询结果集合
    /// </summary>
    public class ViewDataResult
    {
        /// <summary>
        /// 列表数据
        /// </summary>
        public DataTable ListData { get; set; }

        /// <summary>
        /// 列表总数
        /// </summary>
        public long ListTotalCount { get; set; }

        /// <summary>
        /// 列表统计信息
        /// </summary>
        public DataTable ListDataStatic { get; set; }
        /// <summary>
        /// 统计数据集合
        /// </summary>
        public DataTable StaticData { get; set; }
    }
}
