using Aspose.Cells;
using SS2.SReport.Enums;
using SS2.SReport.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;

namespace SS2.SReport
{

    public class ReportHelper
    {
        public DataTable FormatTableValue(gr_Report report, DataTable table)
        {
            DataTable newTable = new DataTable();
            foreach (DataColumn col in table.Columns)
            {
                newTable.Columns.Add(new DataColumn(col.ColumnName));
            }
            if (table.Rows.Count > 0)
            {
                foreach (DataRow row in table.Rows)
                {
                    var newRow = newTable.NewRow();
                    foreach (DataColumn col in table.Columns)
                    {
                        var axis = report.YAxis.FirstOrDefault(i => i.Field == col.ColumnName);
                        if (axis != null && !string.IsNullOrEmpty(axis.FormatString))
                        {
                            newRow[axis.Field] = FormatCell(row, axis.Field, axis.DataType, axis.FormatString);
                        }
                        else
                        {
                            newRow[col.ColumnName] = EncodeHtml(axis, row[col.ColumnName]);
                        }
                    }
                    newTable.Rows.Add(newRow);
                }
            }
            return newTable;
        }

        public string FormatCell(DataRow row, string fielName, string dataType, string format)
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

        public object EncodeHtml(gr_Axis axis, object value)
        {
            if (axis != null && axis.EncodeHtml && value != null)
            {
                return HttpUtility.HtmlEncode(value.ToString());
            }
            return value;
        }

        public DataTable BindListDatas(gr_Report report, string search, int pageindex, int pagesize, out int TotalCount, string order = "")
        {
            var rp = new ReportViewHelper();
            var sql = rp.CreateDetialSql(report, search, pageindex, pagesize, order);
            var cntSql = rp.CreateDetailCountSql(report, search);
            var dbhelper = new DBHelper(report.DataSource.Connection.GetConnectString());
            TotalCount = Convert.ToInt32(dbhelper.GetDataTable(cntSql).Rows[0][0]);
            return dbhelper.GetDataTable(sql);
        }
        public DataTable BindListStatic(gr_Report report, string search)
        {
            var rp = new ReportViewHelper();
            var sql = rp.CreateDetialStaticSql(report, search);
            var dbhelper = new DBHelper(report.DataSource.Connection.GetConnectString());
            return dbhelper.GetDataTable(sql);
        }

        public string GetWhereString(HttpRequestBase req, List<gr_Search> searchs)
        {
            if (searchs.Count <= 0) { return string.Empty; }
            List<string> wheres = new List<string>();
            foreach (var search in searchs)
            {
                string controlID = search.ControlID;
                string value = string.Empty;
                //搜索类型
                SearchInputType st = search.InputType;
                switch (st)
                {
                    case SearchInputType.日期段:
                        var req_start = req.Params[controlID + "START"];
                        var req_end = req.Params[controlID + "END"];
                        DateTime start;
                        DateTime end;
                        if (!string.IsNullOrEmpty(req_start) || !string.IsNullOrEmpty(req_end))
                        {
                            value = req_start + "|" + req_end;
                        }
                        if (DateTime.TryParse(req_start, out start) && DateTime.TryParse(req_end, out end))
                        {
                            wheres.Add(string.Format(search.WhereFormat, start, end));
                        }
                        break;
                    case SearchInputType.URL参数:
                        value = req.QueryString[search.Text];
                        if (string.IsNullOrEmpty(value)) { value = req.Params[search.ControlID]; }
                        if (!string.IsNullOrEmpty(value))
                        {
                            wheres.Add(string.Format(search.WhereFormat, value));
                        }
                        break;
                    default:
                        value = req.Params[controlID];
                        if (!string.IsNullOrEmpty(value))
                        {
                            wheres.Add(string.Format(search.WhereFormat, value));
                        }
                        break;
                }
                if (!search.AllowEmpty && string.IsNullOrEmpty(value))
                {
                    wheres.Add("1=0");
                    continue;
                }
            }
            if (wheres.Count > 0)
            {
                return string.Join(" AND ", wheres);
            }
            return string.Empty;
        }

        public MemoryStream OutFileToStream(ReportSetting report, string[] ExportCols, DataTable Datas, bool HideTitle)
        {
            //License
            //License l = new License();
            //l.SetLicense(HttpContext.Current.Server.MapPath("~/Content/Aspose/License.lic"));

            Workbook workbook = new Workbook(); //工作簿 
            Worksheet sheet = workbook.Worksheets[0]; //工作表 
            Cells cells = sheet.Cells;//单元格 

            //为标题设置样式     
            Style styleTitle = workbook.CreateStyle();//新增样式 
            styleTitle.HorizontalAlignment = TextAlignmentType.Center;//文字居中 
            styleTitle.Font.Name = "楷体";//文字字体 
            styleTitle.Font.Size = 14;//文字大小 
            styleTitle.Font.IsBold = true;//粗体 

            //样式2 
            Aspose.Cells.Style style2 = workbook.CreateStyle();//新增样式 
            style2.HorizontalAlignment = TextAlignmentType.Center;//文字居中 
            style2.Font.Name = "宋体";//文字字体 
            style2.Font.Size = 10;//文字大小 
            style2.Font.IsBold = true;//粗体
            style2.Borders[BorderType.LeftBorder].LineStyle = CellBorderType.Thin;
            style2.Borders[BorderType.RightBorder].LineStyle = CellBorderType.Thin;
            style2.Borders[BorderType.TopBorder].LineStyle = CellBorderType.Thin;
            style2.Borders[BorderType.BottomBorder].LineStyle = CellBorderType.Thin;

            //样式3 
            Aspose.Cells.Style style3 = workbook.CreateStyle();//新增样式 
            //style3.HorizontalAlignment = TextAlignmentType.Center;//文字居中 
            style3.Font.Name = "宋体";//文字字体 
            style3.Font.Size = 10;//文字大小 
            style3.IsTextWrapped = true;
            style3.Borders[BorderType.LeftBorder].LineStyle = CellBorderType.Thin;
            style3.Borders[BorderType.RightBorder].LineStyle = CellBorderType.Thin;
            style3.Borders[BorderType.TopBorder].LineStyle = CellBorderType.Thin;
            style3.Borders[BorderType.BottomBorder].LineStyle = CellBorderType.Thin;

            //修正Colnum
            var rYAxis = report.YAxis;
            if (ExportCols.Length > 0)
            {
                rYAxis = report.YAxis
                    .Where(c => ExportCols.Contains(c.Title) || c.Title.StartsWith("E~"))
                    .ToList();
                rYAxis.ForEach(c =>
                {
                    if (c.Title.StartsWith("E~"))
                        c.Title = c.Title.Substring(2);
                });
            }
            int Colnum = rYAxis.Count;
            int Rownum = Datas.Rows.Count;//表格行数 
            int StartRow = 0;
            if (!HideTitle)
            {
                //生成行1 标题行    
                cells.Merge(0, 0, 1, Colnum);//合并单元格 
                cells[0, 0].PutValue(report.Title);//填写内容 
                cells[0, 0].SetStyle(styleTitle);
                cells.SetRowHeight(0, 38);
                StartRow++;
            }

            //生成行2 列名行 
            for (int i = 0; i < Colnum; i++)
            {
                if (rYAxis[i].Title != rYAxis[i].Field && HideTitle)
                {
                    cells[StartRow, i].PutValue(string.Format("{0}[{1}]", rYAxis[i].Title, rYAxis[i].Field));
                }
                else
                {
                    cells[StartRow, i].PutValue(string.Format("{0}", rYAxis[i].Title));
                }
                cells[StartRow, i].SetStyle(style2);
                cells.SetColumnWidth(i, 28);
            }
            StartRow++;

            if (HideTitle)
            {
                //隐藏标题  认为导入模板下载  最多导出一行数据
                Rownum = Rownum > 0 ? 1 : 0;
            }
            //生成数据行
            for (int i = 0; i < Rownum; i++)
            {
                for (int k = 0; k < Colnum; k++)
                {
                    var ya = rYAxis[k];
                    var row = Datas.Rows[i];
                    var value = row[ya.Field];
                    var cell = cells[StartRow + i, k];

                    //日期显示
                    if (ya.DataType == typeof(DateTime).Name || Datas.Columns[ya.Field].DataType == typeof(DateTime) || ya.FormatString == "{0:yyyy-MM-dd}")
                    {
                        value = FormatCell(Datas.Rows[i], ya.Field, ya.DataType, ya.FormatString ?? "{0:yyyy-MM-dd HH:mm:ss}");
                    }

                    cell.PutValue(value);
                    cell.SetStyle(style3);
                }
            }

            MemoryStream ms = workbook.SaveToStream();
            return ms;
        }
    }
}