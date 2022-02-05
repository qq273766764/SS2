using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.OC
{
    public class OrgApi
    {
        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="loginName"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public Model.Employee Login(string loginName, string password)
        {
            return new OrgDB().Login(loginName, password);
        }

        #region 节点操作
        /// <summary>
        /// 根据路径查找节点
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public Model.IOCNode FindNodeByPath(string path, bool Recurve = false)
        {
            if (Recurve)
            {
                return OrgCache.Nodes.FirstOrDefault(i => i.IDPath.StartsWith(path) || i.NamePath.StartsWith(path));
            }
            else
            {
                return OrgCache.Nodes.FirstOrDefault(i => i.IDPath == path || i.NamePath == path);
            }
        }
        /// <summary>
        /// 根据ID查找
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Model.IOCNode FindNodeByID(string id)
        {
            return OrgCache.Nodes.FirstOrDefault(i => i.ID == id);
        }
        /// <summary>
        /// 根据登录名查找用户
        /// </summary>
        /// <param name="idOrLoginName"></param>
        /// <returns></returns>
        public Model.Employee FindEmployee(string idOrLoginName)
        {
            return OrgCache.Employees.FirstOrDefault(i => i.ID == idOrLoginName || i.LoginName == idOrLoginName);
        }
        /// <summary>
        /// 递归查找下级人员
        /// </summary>
        /// <param name="ParentId"></param>
        /// <param name="Recurve">循环</param>
        /// <param name="AddtionNode">兼职岗位</param>
        /// <returns></returns>
        public List<Model.Employee> FindEmployeesByNodeId(string ParentId, bool Recurve = false, bool AddtionNode = true)
        {
            if (Recurve)
            {
                if (AddtionNode)
                {
                    return OrgCache.Employees.Where(i => i.GetParentIDsWithAddtionJobs().Contains(ParentId)).ToList();
                }
                else
                {
                    return OrgCache.Employees.Where(i => i.GetParentIDs().Contains(ParentId)).ToList();
                }
            }
            else
            {
                if (AddtionNode)
                {
                    return OrgCache.Employees.Where(i => i.ParentID == ParentId || i.Jobs.Contains(ParentId)).ToList();
                }
                else
                {
                    return OrgCache.Employees.Where(i => i.ParentID == ParentId).ToList();
                }
            }
        }
        /// <summary>
        /// 递归查找下级人员
        /// </summary>
        /// <param name="path">路径</param>
        /// <param name="Recurve">是否递归向下查找</param>
        /// <returns></returns>
        public List<Model.Employee> FindEmployeesByPath(string path, bool Recurve = false)
        {
            if (Recurve)
            {
                return OrgCache.Employees.Where(i => i.IDPath.StartsWith(path) || i.NamePath.StartsWith(path)).ToList();
            }
            else
            {
                return OrgCache.Employees.Where(i => i.IDPath == path || i.NamePath == path).ToList();
            }
        }

        /// <summary>
        /// 查找兼职岗位
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public List<Model.IOCNode> FindAddtionNodesByEmployeeID(string id)
        {
            var emp = FindEmployee(id);
            if (emp != null)
            {
                if (!string.IsNullOrEmpty(emp.Jobs))
                {
                    var jobs = emp.Jobs.Split(',');
                    return OrgCache.Nodes.Where(i => jobs.Contains(i.ID)).ToList();
                }
            }
            return null;
        }
        #endregion

        #region 权限操作
        /// <summary>
        /// 根据登录名获取权限
        /// </summary>
        /// <param name="idOrLoginName"></param>
        /// <returns></returns>
        public string[] LoadAuthorization(string idOrLoginName)
        {
            var user = FindEmployee(idOrLoginName);
            return LoadAuthorization(user);
        }
        /// <summary>
        /// 根据用户获取权限
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public string[] LoadAuthorization(Model.Employee user)
        {

            var authors = LoadAuthorizationSettings(user);
            if (authors.Count() > 0)
            {
                return authors.SelectMany(i => i.GetAuthorizationIDs()).Distinct().ToArray();
            }
            return new string[] { };
        }

        /// <summary>
        /// 加载用户的权限设置集合
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public List<Model.Authorization> LoadAuthorizationSettings(Model.Employee user)
        {
            if (user == null) { return new List<Model.Authorization>(); }

            var isAdmin = IsAdministrator(user);
            var ids = user.GetParentIDs();
            ids.Add(user.ID);
            ids.Add(user.LoginName);
            var authors = isAdmin ? OrgCache.Authorizations : OrgCache.Authorizations.Where(i => i.Check(ids.Distinct()));
            return authors.ToList();
        }

        /// <summary>
        /// 判断是否超级管理员
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public bool IsAdministrator(Model.Employee user)
        {
            var admins = new List<string>();
            admins.Add("sa");
            var cfg = CfgHelper.Cfg.Find("OC", "Administrators")?.Value;
            if (!string.IsNullOrEmpty(cfg))
            {
                admins.AddRange(cfg.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries));
            }
            var isAdmin = admins.Contains(user.ID) || admins.Contains(user.LoginName);
            return isAdmin;
        }
        #endregion
    }
}
