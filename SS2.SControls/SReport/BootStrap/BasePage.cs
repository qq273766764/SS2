using SS2.SReport.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SS2.SReport.BootStrap
{
    public class BasePage : System.Web.UI.Page
    {
        protected int Rid
        {
            get
            {
                int r = 0;
                if (!int.TryParse(Request["rid"], out r))
                {
                    int.TryParse(Request["rid"], out r);
                }
                return r;
            }
        }
        protected virtual gr_Report BindReportInfo(int id)
        {
            var rp = new ReportViewHelper();
            return rp.GetReport(id);
        }
        protected virtual DataTable BindListDatas(gr_Report report, string search, int pageindex, int pagesize, out int TotalCount, string order = "")
        {
            var rp = new ReportViewHelper();
            var sql = rp.CreateDetialSql(report, search, pageindex, pagesize, order);
            var cntSql = rp.CreateDetailCountSql(report, search);
            var dbhelper = new DBHelper(report.DataSource.Connection.GetConnectString());
            TotalCount = Convert.ToInt32(dbhelper.GetDataTable(cntSql).Rows[0][0]);
            return dbhelper.GetDataTable(sql);
        }
        protected DataTable BindListStatic(gr_Report report, string search)
        {
            var rp = new ReportViewHelper();
            var sql = rp.CreateDetialStaticSql(report, search);
            var dbhelper = new DBHelper(report.DataSource.Connection.GetConnectString());
            return dbhelper.GetDataTable(sql);
        }
        protected string FormatCell(DataRow row, string fielName, string dataType, string format)
        {
            try
            {
                return ReportCellFormatHelper.FormatCell(row, fielName, dataType, format);
            }
            catch (Exception exp)
            {
                return exp.Message;
            }
        }
        protected override void OnError(EventArgs e)
        {
            //wjpt.Web.BasePage
            //Codes.BasePage.LastError = Server.GetLastError();
            base.OnError(e);
        }
    }
}