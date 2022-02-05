using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SDialog
{

    public class DialogTreeJson
    {
        public string id { get; set; }

        public string text { get; set; }

        public string value { get; set; }

        public DialogTreeJson[] children { get; set; }

        public object obj { get; set; }

        public virtual string state { get; set; }

        public string iconCls { get; set; }
    }
}