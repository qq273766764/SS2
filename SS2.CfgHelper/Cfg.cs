using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Text;
using System.Threading.Tasks;

namespace SS2.CfgHelper
{
    public static class Cfg
    {
        static int cacheSecend = 10 * 60;
        static ConfigGroup LoadGroup()
        {
            var fn = FileName;
            var key = "SS2.CfgHelper." + fn;
            var cfg = MemoryCache.Default.Get(key);
            if (cfg == null)
            {
                cfg = ConfigMgr.LoadByFileName(fn, out string cfgPath);
                var policy = new CacheItemPolicy() { AbsoluteExpiration = DateTime.Now.AddSeconds(cacheSecend) };
                policy.ChangeMonitors.Add(new HostFileChangeMonitor(new List<string>() { cfgPath }));
                MemoryCache.Default.Set(key, cfg, policy);
            }
            return cfg as ConfigGroup;
        }
        public static List<ConfigGroup> Groups
        {
            get
            {
                return LoadGroup().Groups;
            }
        }
        public static List<ConfigSetting> Settings
        {
            get
            {
                return LoadGroup().Settings;
            }
        }
        public static string FileName { get; set; } = "ss2.config";
        public static ConfigSetting Find(string GroupKey, string GroupKey2, string GroupKey3, string SettingKey)
        {
            ConfigGroup g = FindGroup(GroupKey, GroupKey2, GroupKey3);
            if (g == null)
            {
                return Settings.FirstOrDefault(i => i.Key == SettingKey);
            }
            return g.Settings.FirstOrDefault(i => i.Key == SettingKey);
        }
        public static ConfigSetting Find(string GroupKey, string GroupKey2, string SettingKey)
        {
            return Find(GroupKey, GroupKey2, null, SettingKey);
        }
        public static ConfigSetting Find(string GroupKey, string SettingKey)
        {
            return Find(GroupKey, null, null, SettingKey);
        }
        public static ConfigSetting Find(string SettingKey)
        {
            return Find(null, null, null, SettingKey);
        }

        public static string FindValueOrXml(string GroupKey, string GroupKey2, string GroupKey3, string SettingKey)
        {
            return Find(GroupKey, GroupKey2, GroupKey3, SettingKey)?.GetValueOrXml();
        }
        public static string FindValueOrXml(string GroupKey, string GroupKey2, string SettingKey)
        {
            return Find(GroupKey, GroupKey2, SettingKey)?.GetValueOrXml();
        }
        public static string FindValueOrXml(string GroupKey, string SettingKey)
        {
            return Find(GroupKey, SettingKey)?.GetValueOrXml();
        }
        public static string FindValueOrXml(string SettingKey)
        {
            return Find(SettingKey)?.GetValueOrXml();
        }

        public static ConfigGroup FindGroup(string GroupKey, string GroupKey2 = null, string GroupKey3 = null)
        {
            ConfigGroup g = null;
            if (!string.IsNullOrEmpty(GroupKey))
            {
                g = Groups.FirstOrDefault(i => i.Key == GroupKey);
                if (g == null) { return null; }

                if (!string.IsNullOrEmpty(GroupKey2))
                {
                    g = g.Groups.FirstOrDefault(i => i.Key == GroupKey2);
                    if (g == null) { return null; }

                    if (!string.IsNullOrEmpty(GroupKey3))
                    {
                        g = g.Groups.FirstOrDefault(i => i.Key == GroupKey3);
                        if (g == null) { return null; }
                    }
                }
            }
            return g;
        }

    }
}
