using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SS2.SReport.Model
{

    public class ReportSetting : gr_Report
    {
        public string ScriptFilePath { get; set; }

        public List<ReportBtn> Buttons { get; set; } = new List<ReportBtn>();

        public string EditPageUrl { get; set; }

        public ReportAction ActionPower { get; set; } = new ReportAction();

        public ImportProvider ImportSetting { get; set; }

        public Action<DataTable, gr_Report> ExportExtend { get; set; }

        public BootStrap.BSTableOption BootStrapOptions { get; set; }

        public string ButtonsForJS
        {
            get
            {
                return JsonConvert.SerializeObject(Buttons);
            }
        }

        public Func<string, int, int, string, DataTable> FuncQueryData { get; set; }
    }

    public class ReportBtn
    {
        public string Icon { get; set; } = "glyphicon glyphicon-cog";
        public string Cls { get; set; } = "btn-default";
        public string Text { get; set; } = "按钮";
        public string Script { get; set; }
        public string JsShow { get; set; }
    }

    public class ReportAction
    {
        public bool View { get; set; } = true;
        public bool Add { get; set; } = true;
        public bool Edit { get; set; } = true;
        public bool Delete { get; set; } = true;
        public bool Import { get; set; } = true;
        public bool Export { get; set; } = true;
    }
}