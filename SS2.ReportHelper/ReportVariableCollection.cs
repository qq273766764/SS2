using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.ReportHelper
{

    /// <summary>
    /// 系统变量集合
    /// </summary>
    public class ReportVariableCollection
    {
        static string REQTAG = "REQUEST";
        List<ReportVariable> _vars;
        void AddUserInfo()
        {
            //var ssohelper = new SSO.Helper();
            //var assids = ssohelper.Values["associatedids"].ToString().Split(',').Select(i => "'" + i + "'");

            ////用户信息
            //_vars.Add(new Variable() { Group = "用户信息", Text = "当前用户LoginName", Value = ssohelper.LoginName, Key = "{USER.LOGINNAME}" });
            //_vars.Add(new Variable() { Group = "用户信息", Text = "当前用户ID", Value = ssohelper.UserID, Key = "{USER.USERID}" });
            //_vars.Add(new Variable() { Group = "用户信息", Text = "当前用户Name", Value = ssohelper.Name, Key = "{USER.NAME}" });
            //_vars.Add(new Variable() { Group = "用户信息", Text = "当前用户关联IDs", Value = string.Join(",", assids), Key = "{USER.ASSIDS}" });
            //foreach (System.Collections.DictionaryEntry v in ssohelper.Values)
            //{
            //    string[] notshow = new string[] { "policy", "policy_old", "associatedids" };
            //    if (notshow.Contains(v.Key.ToString())) continue;
            //    _vars.Add(new Variable() { Group = "用户信息", Text = v.Key.ToString().ToUpper(), Value = v.Value.ToString(), Key = "{USER." + v.Key.ToString().ToUpper() + "}" });
            //}
        }
        void AddDataPower()
        {
            //try
            //{
            //    //数据权限
            //    var w2DbHelper = new Codes.DBHelper(SSO.Utilities.CfgHelper.GetConnectionString("w2",true));
            //    var ds = w2DbHelper.GetDataTable("SELECT [Name] ,[ClassName] FROM [CINDERELLAW2].[dbo].[HROCOrg2OrgPolicy]");
            //    foreach (System.Data.DataRow row in ds.Rows)
            //    {
            //        _vars.Add(new Variable() { Group = "数据权限", Text = row["Name"] as string, Value = "0", Key = "{DATAPOWER." + (row["ClassName"] as string) + "}" });
            //    }
            //}
            //catch
            //{
            //    //_vars.Add(new Variable() { Group = "数据权限", Text = "LOAD ERROR", Key="ERROR", Value="" });
            //}
        }
        void AddSystemInfo()
        {
            //系统参数
            _vars.Add(new ReportVariable() { Group = "系统参数", Text = "测试", Value = "1", Key = "{SYSTEM.TEST}" });
        }
        void AddUrlPara()
        {
            _vars.Add(new ReportVariable() { Group = "URL参数", Text = "URL参数", Key = "{" + REQTAG + ".***}", Value = "" });
        }
        public List<ReportVariable> Variables
        {
            get
            {
                if (_vars == null)
                {
                    _vars = new List<ReportVariable>();
                    AddUserInfo();
                    AddDataPower();
                    AddSystemInfo();
                    AddUrlPara();
                }
                return _vars;
            }
        }
        public static string ResumeValue(ReportVariable vv)
        {
            switch (vv.Group)
            {
                //case "数据权限":
                //    try
                //    {
                //        string key = vv.Key.Substring(11, vv.Key.Length - 12);
                //        int[] ids = HR.Interface.Module.ModulePolicies.LoadFromSSO().GetGrantedDepartmentIds(key, null);
                //        return string.Join(",", ids);
                //    }
                //    catch
                //    {
                //        return "";
                //    }
                default:
                    return vv.Value;
            }
        }
        public static string ResumeURLPata(string s)
        {
            //var ctx = HttpContent.Current;
            //if (ctx != null)
            //{
            //    foreach (string qskey in ctx.Request.QueryString.Keys)
            //    {
            //        s = s.Replace("{" + REQTAG + "." + qskey + "}", ctx.Request.QueryString[qskey]);
            //    }
            //}
            return s;
        }
    }
}
