using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.OC.Model
{
    public class Authorization
    {
        /// <summary>
        /// 权限ID
        /// </summary>
        public string ID { get; set; }
        /// <summary>
        /// 权限名称
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 授权组织
        /// </summary>
        public string OrgIDs { get; set; }
        /// <summary>
        /// 授权组织
        /// </summary>
        public string OrgNames { get; set; }
        /// <summary>
        /// 排除组织
        /// </summary>
        public string ExcludeOrgIDs { get; set; }
        /// <summary>
        /// 排除组织
        /// </summary>
        public string ExcludeOrgNames { get; set; }
        /// <summary>
        /// 权限集合
        /// </summary>
        public string AuthorIDs { get; set; }
        /// <summary>
        /// 判断是否符合本权限
        /// </summary>
        /// <param name="orgid"></param>
        /// <returns></returns>
        public bool Check(IEnumerable<string> orgid)
        {
            if (orgid.Count() == 0) { return false; }
            if (string.IsNullOrEmpty(OrgIDs)) { return false; }
            if (orgid.Any(i => OrgIDs.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries).Contains(i)))
            {
                if (string.IsNullOrEmpty(ExcludeOrgIDs))
                {
                    return true;
                }
                else
                {
                    if (orgid.Any(i => ExcludeOrgIDs.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries).Contains(i)))
                    {
                        return false;
                    }
                    else
                    {
                        return true;
                    }
                }
            }
            return false;
        }
        /// <summary>
        /// 获取权限集合
        /// </summary>
        /// <returns></returns>
        public string[] GetAuthorizationIDs()
        {
            if (string.IsNullOrEmpty(AuthorIDs)) return new string[] { };
            return AuthorIDs.Split(',');
        }

        public Authorization FromDB(DB.OC_AUTHORIZATION db)
        {
            this.ID = db.ID;
            this.Name = db.Name;
            this.OrgIDs = db.OrgIDs;
            this.OrgNames = db.OrgNames;
            this.ExcludeOrgIDs = db.ExcludeOrgIDs;
            this.ExcludeOrgNames = db.ExcludeOrgNames;
            this.AuthorIDs = db.AuthorIDs;

            return this;
        }

    }

    public class AuthorizeItem
    {
        public string GroupName { get; set; }

        public string AuthorizeName { get; set; }

        public string AuthorizeKey { get; set; }
    }
}
