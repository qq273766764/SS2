using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.UnitTest
{
    class Program
    {
        static void Main(string[] args)
        {
            //new TestOCImport().Test();
            TestAuthorization();
            //TestLogger();

            //estConfig();
            //TestOC();

            //new TestReport().TestGetData();

            Console.WriteLine("执行完成");
            Console.ReadKey();
        }

        static void TestOC()
        {
            var user = new OC.OrgApi().FindEmployee("3382");
            var c = user.PositionName;
            Console.WriteLine("deptName" + user.DepartmentName);
        }

        /// <summary>
        /// 测试配置文件读取
        /// </summary>
        static void TestConfig()
        {
            //测试配置文件查找
            //var cfg = CfgHelper.ConfigMgr.LoadByFileName("cfg.config");

            var cfg = CfgHelper.Cfg.Groups;
            cfg = CfgHelper.Cfg.Groups;
            cfg = CfgHelper.Cfg.Groups;


            ///测试配置文件写入及读取
            //var cfg = new CfgHelper.ConfigGroup();
            //cfg.Settings.Add(new CfgHelper.ConfigSetting() { Key = "dd", Text = "dfds", InnerXML = "xfdsfdsml" });
            //cfg.Settings.Add(new CfgHelper.ConfigSetting() { Key = "dd2", Text = "dfddds", InnerXML = "xmfdsfdsl" });

            //var subGroup = new CfgHelper.ConfigGroup() { Key = "youuuu" };
            //subGroup.Settings.Add(new CfgHelper.ConfigSetting() { Key = "fdd", InnerXML = "fdsfssdfds" });
            //cfg.Groups.Add(subGroup);

            //var xml = CfgHelper.ConfigMgr.SaveFile("", cfg);

            //var cfg2 = CfgHelper.ConfigMgr.LoadFromXml(xml);

            //Console.WriteLine(xml);
        }

        /// <summary>
        /// 测试权限
        /// </summary>
        static void TestAuthorization()
        {
            string[] Query(string[] ids)
            {
                var authors = OC.OrgCache.Authorizations.Where(i => i.Check(ids));
                if (authors.Count() > 0)
                {
                    return authors.SelectMany(i => i.GetAuthorizationIDs()).Distinct().ToArray();
                }
                return new string[0];
            }

            //增加权限
            //var db = new OC.OrgDB().AddAuthorization(new OC.Model.Authorization()
            //{
            //    Name = "测试权限",
            //    OrgNames = "1,2,3",
            //    OrgIDs = "U001,U002,U003",
            //    AuthorIDs = "1,2,3",
            //    ExcludeOrgIDs = "U002",
            //    ExcludeOrgNames = "U002",
            //});

            //获取权限
            var u = OC.OrgCache.Employees.FirstOrDefault(i => i.LoginName == "0112");

            var settings = new OC.OrgApi().LoadAuthorizationSettings(u);

            var aut001 = Query(u.GetParentIDs().ToArray());
            Console.WriteLine("U001:" + string.Join(",", aut001));

            var u_sa= OC.OrgCache.Employees.FirstOrDefault(i => i.LoginName == "sa");
            var autsa = new OC.OrgApi().LoadAuthorizationSettings(u_sa);


            var aut002 = Query(new string[] { "U002" });
            Console.WriteLine("U002:" + string.Join(",", aut002));

            var aut003 = Query(new string[] { "U003" });
            Console.WriteLine("U003:" + string.Join(",", aut003));

            //db.ExcludeOrgIDs = null;
            //db.ExcludeOrgNames = null;
            //new OC.OrgDB().UpdateAuthorization(db);
            OC.OrgCache.ClearAuthorization();

            aut002 = Query(new string[] { "sa" });
            Console.WriteLine("sa:" + string.Join(",", aut002));

        }

        /// <summary>
        /// 测试日志记录
        /// </summary>
        static void TestLogger()
        {
            SLogger.Configutarion.InitLoggerDB(CfgHelper.Cfg.Find("OC", "ConnectString").Value, "SS2_LOGS");

            SLogger.LoggerDB.Info("测试日志功能", "msg", "exp", "uid", "uname");

            //SLogger.Configutarion.Flush();
        }
    }
}
