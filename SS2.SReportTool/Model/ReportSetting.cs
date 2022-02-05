using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool.Model
{
    public class ReportSetting
    {
        /// <summary>
        /// 报表ID
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// 报表类型
        /// </summary>
        public EnumTypes.REPORT_TYPE ReportType { get; set; }
        /// <summary>
        /// 报表标题
        /// </summary>
        public string Title { get; set; }
        /// <summary>
        /// 报表脚本路径
        /// </summary>
        public string ScriptFilePath { get; set; }
        /// <summary>
        /// 报表样式路径
        /// </summary>
        public string StyleFilePath { get; set; }
        /// <summary>
        /// 报表数据源
        /// </summary>
        public ReportDataSource DataSource { get; set; }
        /// <summary>
        /// X轴配置
        /// </summary>
        public List<ReportColumn> XCols { get; set; }
        /// <summary>
        /// Y轴配置
        /// </summary>
        public List<ReportColumn> YCols { get; set; }
        /// <summary>
        /// 统计配置
        /// </summary>
        public List<ReportStaticColumn> Static { get; set; }
        /// <summary>
        /// 检索配置
        /// </summary>
        public List<ReportSearch> Searchs { get; set; }
        /// <summary>
        /// 附件按钮
        /// </summary>
        public List<ReportButton> Buttons { get; set; }
        /// <summary>
        /// UI配置
        /// </summary>
        public IUIOption UIOptions { get; set; }
        /// <summary>
        /// 报表导入设置
        /// </summary>
        public ImportProvider ImportSetting { get; set; }
        /// <summary>
        /// 导出文件扩展
        /// </summary>
        public Action<DataTable, ReportSetting> ExportExtend { get; set; }

    }
}
