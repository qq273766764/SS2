using SS2.SReport;
using SS2.SReport.BootStrap;
using SS2.SReport.Model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace SS2.TestMVC.Controllers
{
    public class ReportSettings
    {
        public ReportSetting GetListSettings(int id, string userID = "")
        {
            var result = new List<ReportSetting>();

            #region 1消息中心

            result.Add(CreateReport(1, "消息中心",
                $"SELECT * FROM SS2_BaseData",
                new List<gr_Axis>() {
                    new gr_Axis(){ Field="Type", Title="类型", CellStyle="issue-info",OrderString="DESC"},
                    new gr_Axis(){ Field="Name", Title="名称",CellStyle="issue-info",OrderString="DESC"},
                    new gr_Axis(){ Field="Value", Title="值",CellStyle="issue-info"},
                    new gr_Axis(){ Field="Value1", Title="值1",CellStyle="issue-info"}
                },
                new List<gr_Search>() {
                    new gr_Search(){ ID=1, Text="名称", Width=3, WhereFormat="Name like '%{0}%'" },
                    new gr_Search(){ ID=2, Text="类型",Width=3, WhereFormat="Type='{0}'" }
                },
                new BSTableOption()
                {
                    queryParams = "queryParas"
                }));
            #endregion


            return result.FirstOrDefault(i => i.ID == id);
        }

        ReportSetting CreateReport(int ID, string Title, string sql, List<gr_Axis> Fields, List<gr_Search> searchs, BSTableOption tableConfig)
        {
            var conn = CfgHelper.Cfg.Find("OC", "ConnectString").Value;
            var ds = new gr_DataSource()
            {
                Connection = new gr_Connection() { ConnStr = conn },
                Name = "DS" + ID,
                Sql = sql
            };
            var rType = ReportTypesManager.ReportTypes.FirstOrDefault(i => i.Text ==SReport.Enums.ReportType.明细列表.ToString());
            var rpt = new ReportSetting()
            {
                Title = Title,
                ID = ID,
                Type = rType,
                DataSource = ds,
                YAxis = Fields,
                Static = new List<gr_Static>(),
                Searchs = searchs,
                BootStrapOptions = tableConfig
            };
            return rpt;
        }
    }
}