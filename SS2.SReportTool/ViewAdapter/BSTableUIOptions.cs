using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SS2.SReportTool.Model;

namespace SS2.SReportTool.ViewAdapter
{
    public class BSTableUIOptions : IUIOption
    {
        public List<UIOptionItem> GetOptions()
        {
            var opts = new List<UIOptionItem>();
            var t = this.GetType();
            foreach (var p in t.GetProperties())
            {
                if (p.PropertyType == typeof(UIOptionItem))
                {
                    var val = p.GetValue(this) as UIOptionItem;
                    if (val != null)
                    {
                        val.Name = p.Name;
                        opts.Add(val);
                    }
                }
            }
            return opts;
        }

        /// <summary>
        /// 1 Radio,2 Check
        /// </summary>
        public UIOptionItem ShowRadioOrCheck { get; set; } = new UIOptionItem();

        public UIOptionItem Height { get; set; } = new UIOptionItem();

        public UIOptionItem showHeader { get; set; } = new UIOptionItem() { Value = "true" };

        public UIOptionItem toolabr { get; set; } = new UIOptionItem();

        public UIOptionItem ShowColumns { get; set; } = new UIOptionItem();

        public UIOptionItem ShowRefresh { get; set; } = new UIOptionItem();

        public UIOptionItem queryParams { get; set; } = new UIOptionItem();

        public UIOptionItem onLoadSuccess { get; set; } = new UIOptionItem();

        public UIOptionItem onLoadError { get; set; } = new UIOptionItem();

        public UIOptionItem showToggle { get; set; } = new UIOptionItem();

        public UIOptionItem PageSize { get; set; } = new UIOptionItem() { Value = "50" };

        public UIOptionItem pageList { get; set; } = new UIOptionItem() { Value = "[50, 100, 200]" };

        public UIOptionItem Sortabled { get; set; } = new UIOptionItem() { Value = "true" };

        public UIOptionItem SilentSort { get; set; } = new UIOptionItem();

        public UIOptionItem Pagination { get; set; } = new UIOptionItem() { Value = "true" };
    }
}
