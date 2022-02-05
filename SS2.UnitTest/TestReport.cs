using SS2.SReportTool.EnumTypes;
using SS2.SReportTool.Model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.UnitTest
{
    class TestReport
    {
        public List<ReportSetting> InitSetting()
        {
            string connstr = "Server=218.244.151.67;Database=Quotation;User ID=JUNye;Password=JUNye0608@@JUNyeqwe123;";

            var result = new List<ReportSetting>();

            //列表
            result.Add(new ReportSetting()
            {
                ID = 1,
                Title = "测试报表",
                DataSource = new ReportDataSource()
                {
                    ConnectionString = connstr,
                    DataSourceSql = "select * from [Quotation].[dbo].[WMProject]",
                    DataAdapter = new SReportTool.DataBaseAdapter.MSSqlServerDataBaseAdapter(),
                },
                ReportType = REPORT_TYPE.LIST,
                XCols = new List<ReportColumn>() {
                    new ReportColumn(){ Field="PrjId",Title="PrjId" },
                    new ReportColumn(){ Field="CName",Title="CName" }
                },
                YCols = new List<ReportColumn>() { },
                Static = new List<ReportStaticColumn>() {
                    new ReportStaticColumn(){  Field="TradId", StaticType= STATIC_METHOD.SUM }
                },
                Searchs = new List<ReportSearch>() {
                    new ReportSearch(){ ID=1, RequestKey="cname", Text="名称", WhereFormat="CName Like '%{0}%'", InputType= SEARCH_INPUT_TYPE.文本 }
                },
            });

            //分组统计
            result.Add(new ReportSetting()
            {
                ID = 2,
                Title = "测试报表",
                DataSource = new ReportDataSource()
                {
                    ConnectionString = connstr,
                    DataSourceSql = "select PrjId,Crtor,convert(nvarchar(20),CrtTime,101) CrtTime from [Quotation].[dbo].[WMProject]",
                    DataAdapter = new SReportTool.DataBaseAdapter.MSSqlServerDataBaseAdapter(),
                },
                ReportType = REPORT_TYPE.STATIC,
                XCols = new List<ReportColumn>() {
                    new ReportColumn(){ Field="Crtor",Title="Crtor" },
                    new ReportColumn(){ Field="CrtTime",Title="CrtTime" }
                },
                YCols = new List<ReportColumn>() { },
                Static = new List<ReportStaticColumn>() {
                    new ReportStaticColumn(){  Field="PrjId", StaticType= STATIC_METHOD.COUNT }
                },
                Searchs = new List<ReportSearch>() {
                    new ReportSearch(){ ID=1, RequestKey="Crtor", Text="名称", WhereFormat="Crtor Like '%{0}%'", InputType= SEARCH_INPUT_TYPE.文本 }
                },
            });

            return result;
        }

        public void TestGetData()
        {
            //var viewPara = new ViewDataPara() { Report = InitSetting()[0] };
            //viewPara.OrderFields.Add("CName", "ASC");
            ////viewPara.SearchValues.Add(1, "南");

            //var result = new SReportTool.ReportHelper().QueryReportData(viewPara);

            //Console.WriteLine("已检索到数据量：" + result.ListTotalCount);

            var viewPara = new ViewDataPara() { Report = InitSetting()[1] };
            var result = new SReportTool.ReportHelper().QueryReportData(viewPara);
            Console.WriteLine("已检索到数据量：" + result.StaticData.Rows.Count);

            var cols = new SReportTool.ReportDesignHelper().FindDataSourceColumns(viewPara.Report.DataSource);
            Console.WriteLine("================================");
            foreach (DataColumn col in cols)
            {
                Console.WriteLine($"{col.ColumnName},{col.DataType.Name}");
            }
        }
    }
}
