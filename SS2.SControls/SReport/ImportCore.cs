using Aspose.Cells;
using SS2.SReport.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;

namespace SS2.SReport
{
    public class ImportCore
    {
        ReportSetting RSetting { get; set; }
        string tmpFilePath { get; set; }

        DataTable ReadFileData(out List<ImportError> errors)
        {
            errors = new List<ImportError>();
            using (var fs = new FileStream(tmpFilePath, FileMode.Open))
            {
                var wb = new Workbook(fs);
                var cells = wb.Worksheets[0].Cells;
                var excelDatas = cells.ExportDataTableAsString(0, 0, cells.Rows.Count, 100, true);
                if (excelDatas.Rows.Count == 0)
                {
                    throw new Exception("Excel文件中未找到数据！");
                }
                if (RSetting.ImportSetting != null && RSetting.ImportSetting.ReadData != null)
                {
                    errors = RSetting.ImportSetting.ReadData(excelDatas);
                }
                return excelDatas;
            }

        }

        void SaveToDB(DataTable dt)
        {
            var tablename = RSetting.ImportSetting.TableName;
            if (string.IsNullOrEmpty(tablename))
            {
                throw new Exception("未设置导入的数据表名称[ImportSetting.TableName]");
            }
            var conn = RSetting.DataSource.Connection.ConnStr;

            var dataHelper = new TableHelper.DataHelper(conn);
            var columns = new List<TableHelper.DataColumn>();

            //匹配可导入的列
            foreach (var col in RSetting.YAxis)
            {
                foreach (DataColumn dbCol in dt.Columns)
                {
                    bool existColumn = false;
                    if (col.Field == dbCol.ColumnName)
                    {
                        existColumn = true;
                    }
                    else if (dbCol.ColumnName.Contains("[" + col.Field + "]"))
                    {
                        existColumn = true;
                        if (!dt.Columns.Contains(col.Field))
                        {
                            dbCol.ColumnName = col.Field;
                        }
                    }
                    if (existColumn)
                    {
                        if (!columns.Any(i => i.ColumnName == col.Field))
                        {
                            columns.Add(col.GetDataColumn());
                        }
                    }
                }
            }
            if (columns.Count > 0)
            {
                foreach (DataRow row in dt.Rows)
                {
                    dataHelper.InsertData(tablename, columns.ToArray(), row);
                }
            }
            else
            {
                throw new Exception("未找到匹配的列");
            }
        }

        public bool ImportReport(ReportSetting rpt, string filepath, out List<ImportError> errors)
        {
            tmpFilePath = filepath;
            RSetting = rpt;
            if (RSetting.ImportSetting != null && RSetting.ImportSetting.CustomImport != null)
            {
                using (var fs = new FileStream(tmpFilePath, FileMode.Open))
                {
                    errors = RSetting.ImportSetting.CustomImport(fs);
                }
            }
            else
            {
                var dt = ReadFileData(out errors);
                try
                {
                    SaveToDB(dt);
                    RSetting.ImportSetting.AfterSaveDB?.Invoke(dt, true, null);
                }
                catch (Exception exp)
                {
                    RSetting.ImportSetting.AfterSaveDB?.Invoke(dt, false, exp);
                    throw;
                }
            }
            return errors.Count == 0;
        }
    }
}