using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace SS2.SDialog
{
    public class Configuration
    {
        static List<DialogItem> _Settings = new List<DialogItem>();
        static Func<string, DialogItem> _GetSettings;

        public static int LoadCountMax { get; set; } = 200;
        public static char splitChar { get; set; } = '|';

        public static void RegisterSettings(IEnumerable<DialogItem> items, bool clear = false)
        {
            if (clear) { _Settings.Clear(); }
            foreach (var dialog in items)
            {
                dialog.Validate();
                if (_Settings.Any(d => d.DialogKey == dialog.DialogKey)) throw new Exception($"重复定义了该 DialogKey：{dialog.DialogKey}");
                _Settings.Add(dialog);
                dialog.FieldsDefined = dialog.Fields;
                dialog.Fields = dialog.Fields.Where(f => !f.Hidden).ToArray();
            }
        }

        public static void RegisterSettings(Func<string, DialogItem> getSetting)
        {
            _GetSettings = getSetting;
        }

        public static DialogItem GetDialog(string key)
        {
            if (_GetSettings != null)
            {
                var setting = _GetSettings(key);
                if (setting != null) return setting;
            }
            return _Settings.FirstOrDefault(i => i.DialogKey == key);
        }
    }
}