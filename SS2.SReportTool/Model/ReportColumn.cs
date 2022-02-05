using SS2.SReportTool.EnumTypes;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool.Model
{
    public class ReportColumn
    {
        /// <summary>
        /// 标题
        /// </summary>
        public string Title;
        /// <summary>
        /// 字段名
        /// </summary>
        public string Field;
        /// <summary>
        /// 数据类型
        /// </summary>
        public COLUMN_DATATYPE DataType;
        /// <summary>
        /// 列类型
        /// </summary>
        public COLUMN_TYPE ColType;
        /// <summary>
        /// 值是否需要EncodeHtml
        /// </summary>
        public bool EncodeHtml;
        /// <summary>
        /// 序号
        /// </summary>
        public int Index;
        /// <summary>
        /// 是否可以排序
        /// </summary>
        public bool Sortable;
        /// <summary>
        /// 排序 ASC DESC
        /// </summary>
        public string OrderString;
        /// <summary>
        /// 格式化字符串
        /// </summary>
        public string FormatString;
        /// <summary>
        /// 格式化方法
        /// </summary>
        public Func<DataRow, string> FuncFormatString { get; set; }
        /// <summary>
        /// 标题样式
        /// </summary>
        public string HeaderStyle;
        /// <summary>
        /// 单元格样式
        /// </summary>
        public string CellStyle;
        /// <summary>
        /// 列宽度
        /// </summary>
        public string Width;
        /// <summary>
        /// 合并行
        /// </summary>
        public int RowSpan = 1;
        /// <summary>
        /// 合并列
        /// </summary>
        public int ColSpan = 1;
        /// <summary>
        /// UI配置
        /// </summary>
        public List<UIOptionItem> UIOption = new List<UIOptionItem>();
    }
}
