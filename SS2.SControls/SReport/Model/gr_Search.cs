using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SS2.SReport.Model
{
    public partial class gr_Search
    {
        public int ID;

        //public int ReportID;

        public string Text;

        public string Tips;

        public int Index;

        /// <summary>
        /// 1~12
        /// </summary>
        public int Width;


        public Enums.SearchInputType InputType;

        //public int SourceID;

        public string SourceString;

        public string DefaultValue;

        public bool AllowEmpty=true;

        public string WhereFormat;

        public string ControlID
        {
            get
            {
                return "GR_Search_" + ID;
            }
        }
    }
}
