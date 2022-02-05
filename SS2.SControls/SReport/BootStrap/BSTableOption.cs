using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SReport.BootStrap
{

    public class BSTableOption
    {
        /// <summary>
        /// 1 Radio,2 Check
        /// </summary>
        public int ShowRadioOrCheck { get; set; }

        public int Height { get; set; }

        public bool showHeader { get; set; } = true;

        public string toolabr { get; set; }

        public bool ShowColumns { get; set; }

        public bool ShowRefresh { get; set; }

        public string queryParams { get; set; }

        public string onLoadSuccess { get; set; }

        public string onLoadError { get; set; }

        public bool showToggle { get; set; }
    }

}