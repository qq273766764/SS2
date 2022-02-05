using Aspose.Cells;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace SS2.__SSControls
{
    /// <summary>
    /// export 的摘要说明
    /// </summary>
    public class export : IHttpHandler, IRequiresSessionState
    {
        public static string SKEY_SEARCH = "GreenReport.Export.SEARCH";
        protected SGridList.GridList ListModel
        {
            get
            {
                if (_ListModel == null)
                {
                    _ListModel = new SGridList.GridDSHelper().GetList(HttpContext.Current.Request["key"]);
                }
                return _ListModel;
            }
        }
        protected SGridList.GridList _ListModel;
        protected DataTable Datas { get; set; }

        public void ProcessRequest(HttpContext context)
        {
            context.Response.Charset = "UTF-8";
            context.Response.ContentEncoding = System.Text.Encoding.UTF8;
            context.Response.AppendHeader("Content-Disposition",
                "attachment;filename=" + HttpUtility.UrlEncode(ListModel.Title + DateTime.Now.ToString("yyyyMMdd") + ".xls",
                System.Text.Encoding.UTF8).ToString());
            context.Response.ContentType = "application/ms-excel";

            int count = 0;
            string search = context.Session[SKEY_SEARCH + ListModel.Key] as string;
            Datas = new SGridList.GridDSHelper().GetListData(ListModel, search, 1, 5000, "", out count);

            var ms = OutFileToStream();
            context.Response.OutputStream.Write(ms.ToArray(), 0, Convert.ToInt32(ms.Length));
            context.Response.End();
        }

        MemoryStream OutFileToStream()
        {
            Workbook workbook = new Workbook(); //工作簿 
            Worksheet sheet = workbook.Worksheets[0]; //工作表 
            Cells cells = sheet.Cells;//单元格 

            #region 样式

            //为标题设置样式     
            Aspose.Cells.Style styleTitle = workbook.Styles[workbook.Styles.Add()];//新增样式 
            styleTitle.HorizontalAlignment = TextAlignmentType.Center;//文字居中 
            styleTitle.Font.Name = "楷体";//文字字体 
            styleTitle.Font.Size = 14;//文字大小 
            styleTitle.Font.IsBold = true;//粗体 

            //样式2 
            Aspose.Cells.Style style2 = workbook.Styles[workbook.Styles.Add()];//新增样式 
            style2.HorizontalAlignment = TextAlignmentType.Center;//文字居中 
            style2.Font.Name = "宋体";//文字字体 
            style2.Font.Size = 10;//文字大小 
            style2.Font.IsBold = true;//粗体
            style2.Borders[BorderType.LeftBorder].LineStyle = CellBorderType.Thin;
            style2.Borders[BorderType.RightBorder].LineStyle = CellBorderType.Thin;
            style2.Borders[BorderType.TopBorder].LineStyle = CellBorderType.Thin;
            style2.Borders[BorderType.BottomBorder].LineStyle = CellBorderType.Thin;

            //样式3 
            Aspose.Cells.Style style3 = workbook.Styles[workbook.Styles.Add()];//新增样式 
            style3.HorizontalAlignment = TextAlignmentType.Center;//文字居中 
            style3.Font.Name = "宋体";//文字字体 
            style3.Font.Size = 10;//文字大小 
            style3.Borders[BorderType.LeftBorder].LineStyle = CellBorderType.Thin;
            style3.Borders[BorderType.RightBorder].LineStyle = CellBorderType.Thin;
            style3.Borders[BorderType.TopBorder].LineStyle = CellBorderType.Thin;
            style3.Borders[BorderType.BottomBorder].LineStyle = CellBorderType.Thin;

            #endregion

            int Colnum = ListModel.Columns.Length;
            int Rownum = Datas.Rows.Count;//表格行数 

            //生成行1 标题行    
            cells.Merge(0, 0, 1, Colnum);//合并单元格 
            cells[0, 0].PutValue(ListModel.Title);//填写内容 
            cells[0, 0].SetStyle(styleTitle);
            cells.SetRowHeight(0, 38);

            //生成行2 列名行 
            for (int i = 0; i < Colnum; i++)
            {
                cells[1, i].PutValue(ListModel.Columns[i].Title);
                cells[1, i].SetStyle(style2);
                cells.SetColumnWidth(i, 28);
            }

            //生成数据行
            for (int i = 0; i < Rownum; i++)
            {
                for (int k = 0; k < Colnum; k++)
                {
                    var ya = ListModel.Columns[k];
                    string value = FormatCell(ya.FormatString, ya.FieldName, Datas.Rows[i]);
                    cells[2 + i, k].PutValue(value);
                    cells[2 + i, k].SetStyle(style3);
                }
            }

            MemoryStream ms = workbook.SaveToStream();
            return ms;
        }

        string FormatCell(string format, string field, DataRow row)
        {
            var value = row[field];
            if (value == null)
            {
                return "";
            }
            return string.Format(format, value);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}