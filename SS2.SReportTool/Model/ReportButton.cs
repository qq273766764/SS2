using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool.Model
{
    public class ReportButton
    {
        public string ID { get; set; }
        public string Icon { get; set; } = "glyphicon glyphicon-cog";
        public string Cls { get; set; } = "btn-default";
        public string Text { get; set; } = "按钮";
        public string OnClientClick { get; set; }
        /// <summary>
        /// 特殊情况可直接写Html
        /// </summary>
        public string RawHtml { get; set; }
    }
}
