using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SS2.SReport.Model
{
    public partial class gr_Axis
    {
        //public int ID;

        //public int ReportID;

        public string Title;

        public string Field;

        public string DataType;

        public bool Sortable;

        /// <summary>
        /// X,Y
        /// </summary>
        public string AxisType;

        public string FormatString;

        public bool EncodeHtml;

        public int Index;

        public string OrderString;

        public string HeaderStyle;

        public string CellStyle;

        public string Width;

        public TableHelper.DataColumn GetDataColumn()
        {
            return new TableHelper.DataColumn()
            {
                ColumnName = Field,
                DataBaseType = DataType
            };
        }
    }
}
