using SS2.SReportTool.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool
{
    /// <summary>
    /// 统一开放控制接口
    /// </summary>
    public class ReportHelper
    {
        /// <summary>
        /// 查询报表数据集合
        /// </summary>
        /// <param name="Para"></param>
        /// <returns></returns>
        public ViewDataResult QueryReportData(ViewDataPara Para)
        {
            var rpt = Para.Report;
            var adp = rpt.DataSource.DataAdapter;
            return adp.QueryReportData(Para);
        }

        /// <summary>
        /// 导出报表文件
        /// </summary>
        /// <param name="rpt"></param>
        /// <param name="filepath"></param>
        /// <param name="errors"></param>
        /// <returns></returns>
        public bool ImportReport(ReportSetting rpt, string filepath, out List<ImportError> errors)
        {
            return new Core.ImportCore().ImportReport(rpt, filepath, out errors);
        }
    }
}
