using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool
{
    /// <summary>
    /// 数据库操作接口
    /// </summary>
    public interface IDataBaseAdapter
    {
        #region 报表配置
        /// <summary>
        /// 查询所有数据库
        /// </summary>
        /// <param name="connStr"></param>
        /// <returns></returns>
        DataTable FindDataBases(string connStr);

        /// <summary>
        /// 查询所有数据表
        /// </summary>
        /// <param name="connStr"></param>
        /// <returns></returns>
        DataTable FindTables(string connStr);

        /// <summary>
        /// 查询所有视图
        /// </summary>
        /// <param name="connStr"></param>
        /// <returns></returns>
        DataTable FindViews(string connStr);
        /// <summary>
        /// 查找数据源列
        /// </summary>
        /// <param name="connStr"></param>
        /// <returns></returns>
        DataColumnCollection FindDataSourceColumns(Model.ReportDataSource ds);
        #endregion

        #region 报表数据源
        /// <summary>
        /// 查询报表数据
        /// </summary>
        /// <param name="Para"></param>
        /// <returns></returns>
        Model.ViewDataResult QueryReportData(Model.ViewDataPara Para);
        /// <summary>
        /// 查询Sql
        /// </summary>
        /// <param name="connStr"></param>
        /// <param name="sql"></param>
        /// <returns></returns>
        DataTable QueryData(string connStr, string sql);
        /// <summary>
        /// 写入数据
        /// </summary>
        /// <param name="report"></param>
        /// <param name="cols"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        int InsertReportData(Model.ReportSetting report,List<Model.ReportColumn> cols,DataTable data);
        #endregion

    }
}
