using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool
{
    /// <summary>
    /// 报表设计辅助
    /// 1、获取远程连接数据表集合
    /// 2、获取字段集合
    /// </summary>
    public class ReportDesignHelper
    {
        /// <summary>
        /// 查询所有数据库
        /// </summary>
        /// <param name="ds"></param>
        /// <returns></returns>
        public DataTable FindDataBases(Model.ReportDataSource ds)
        {
            return ds.DataAdapter.FindDataBases(ds.ConnectionString);
        }

        /// <summary>
        /// 查询所有数据表
        /// </summary>
        /// <param name="ds"></param>
        /// <returns></returns>
        public DataTable FindTables(Model.ReportDataSource ds)
        {
            return ds.DataAdapter.FindTables(ds.ConnectionString);
        }

        /// <summary>
        /// 查询所有视图
        /// </summary>
        /// <param name="ds"></param>
        /// <returns></returns>
        public DataTable FindViews(Model.ReportDataSource ds)
        {
            return ds.DataAdapter.FindViews(ds.ConnectionString);
        }

        /// <summary>
        /// 查找数据源结构
        /// </summary>
        /// <param name="ds"></param>
        /// <returns></returns>
        public DataColumnCollection FindDataSourceColumns(Model.ReportDataSource ds)
        {
            return ds.DataAdapter.FindDataSourceColumns(ds);
        }
    }
}
