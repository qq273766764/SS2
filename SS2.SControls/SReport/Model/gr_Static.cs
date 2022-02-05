using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SS2.SReport.Model
{
    public partial class gr_Static
    {
        //public int ID;

        //public int ReportID;

        public string Title;

        public string Field;

        public string DataType;

        /// <summary>
        /// SUM,COUNT ……
        /// </summary>
        public string Method;

        public string FormatString;

        public int Index;

        public string HeaderStyle;

        public string CellStyle;
    }
}
