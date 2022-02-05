using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SS2.OC
{
    public class OrgDB
    {
        #region 人员
        public Model.Employee Login(string loginName, string pwd)
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                pwd = StringHelper.GetPwd(pwd);
                var ee = ctx.OC_EMPLOYEE.FirstOrDefault(i => i.LoginName == loginName && i.PWD == pwd);
                if (ee != null && !ee.Disabled) { return ee.ToEmployee(); }
                return null;
            }
        }

        public Model.Employee LoginByWX(string openid, string pwd)
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                var ee = ctx.OC_EMPLOYEE.FirstOrDefault(i => i.WX == openid && i.PWD == pwd);
                if (ee != null && !ee.Disabled) { return null; }
                return ee.ToEmployee();
            }
        }

        public Model.Employee AddEmployee(Model.Employee employee)
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                var db = new DB.OC_EMPLOYEE().FromEmployee(employee);
                if (ctx.OC_EMPLOYEE.Any(i => i.ID == db.ID || i.LoginName == db.LoginName))
                {
                    throw new Exception("EXIST " + employee.LoginName);
                }
                ctx.OC_EMPLOYEE.InsertOnSubmit(db);
                ctx.SubmitChanges();
                return employee;
            }
        }

        public Model.Employee UpdateEmployee(Model.Employee employee)
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                var db = ctx.OC_EMPLOYEE.FirstOrDefault(i => i.ID == employee.ID);
                if (db == null) return null;
                db.FromEmployee(employee);
                ctx.SubmitChanges();
                return employee;
            }
        }

        public Model.Employee DeleteEmployee(string id)
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                var db = ctx.OC_EMPLOYEE.FirstOrDefault(i => i.ID == id);
                if (db == null) return null;
                ctx.OC_EMPLOYEE.DeleteOnSubmit(db);
                ctx.SubmitChanges();
                return db.ToEmployee();
            }
        }

        public Model.Employee FindEmployeeByID(string id)
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                var db = ctx.OC_EMPLOYEE.FirstOrDefault(i => i.ID == id);
                return db.ToEmployee();
            }
        }

        #endregion

        #region 组织节点

        public Model.IOCNode AddNode(Model.IOCNode node)
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                var db = new DB.OC_NODE().FromModel(node);
                ctx.OC_NODE.InsertOnSubmit(db);
                ctx.SubmitChanges();
                return node;
            }
        }

        public Model.IOCNode UpdateNode(Model.IOCNode node)
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                var db = ctx.OC_NODE.FirstOrDefault(i => i.ID == node.ID);
                if (db == null) return null;
                db.FromModel(node);
                ctx.SubmitChanges();
                return node;
            }
        }

        public Model.IOCNode DeleteNode(string id)
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                var db = ctx.OC_NODE.FirstOrDefault(i => i.ID == id);
                if (db == null) return null;
                ctx.OC_NODE.DeleteOnSubmit(db);
                ctx.SubmitChanges();
                return db.ToModel();
            }
        }

        public Model.IOCNode FindNodeByID(string id)
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                var db = ctx.OC_NODE.FirstOrDefault(i => i.ID == id);
                return db.ToModel();
            }
        }

        #endregion

        #region 初始化

        public List<Model.IOCNode> InitPath()
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                var allNodes = ctx.OC_NODE.ToList();
                var allEmployees = ctx.OC_EMPLOYEE.ToList();

                var res1 = InitSubNode(ctx, null, allNodes);
                var res2 = InitEmployee(ctx, allEmployees);
                if (res1 || res2)
                {
                    ctx.SubmitChanges();
                }

                List<Model.IOCNode> oCNodes = new List<Model.IOCNode>();
                oCNodes.AddRange(allNodes.Select(i => i.ToModel()));
                oCNodes.AddRange(allEmployees.Select(i => i.ToEmployee()));
                InitEmployeeParentNode(oCNodes);
                return oCNodes;
            }
        }

        bool InitSubNode(DB.OCDataBaseDataContext ctx, DB.OC_NODE node, List<DB.OC_NODE> allNodes)
        {
            IEnumerable<DB.OC_NODE> subNodes;
            var path = "";
            var nPath = "";
            var hasUpdate = false;
            if (node == null)
            {
                subNodes = allNodes.Where(i => string.IsNullOrEmpty(i.ParentID));
            }
            else
            {
                path = node.IDPath;
                nPath = node.NamePath;
                subNodes = allNodes.Where(i => i.ParentID == node.ID);
            }
            if (subNodes.Count() == 0) return false;
            foreach (var sNode in subNodes)
            {
                var subpath = path + "/" + sNode.ID;
                var subnpath = nPath + "/" + sNode.Name;

                if (subpath != sNode.IDPath || subnpath != sNode.NamePath)
                {
                    //如果路径有更新则修改为最新路径
                    sNode.IDPath = subpath;
                    sNode.NamePath = subnpath;
                    hasUpdate = true;
                }
                if (InitSubNode(ctx, sNode, allNodes))
                {
                    hasUpdate = true;
                }
            }
            return hasUpdate;
        }

        bool InitEmployee(DB.OCDataBaseDataContext ctx, List<DB.OC_EMPLOYEE> allEmployees)
        {
            var hasUpdate = false;
            foreach (var employee in allEmployees)
            {
                //加载用户路径信息
                var node = ctx.OC_NODE.FirstOrDefault(i => i.ID == employee.ParentID);
                if (node != null)
                {
                    var empPath = node.IDPath + "/" + employee.LoginName;
                    var empNPath = node.NamePath + "/" + employee.UserName;
                    if (empPath != employee.IDPath || empNPath != employee.NamePath)
                    {
                        hasUpdate = true;
                        employee.IDPath = empPath;
                        employee.NamePath = empNPath;
                    }
                }
                else
                {
                    if (employee.IDPath != employee.LoginName)
                    {
                        hasUpdate = true;
                        employee.IDPath = employee.LoginName;
                    }
                }

                //初始化兼职工作组
            }
            return hasUpdate;
        }

        bool InitEmployeeParentNode(List<Model.IOCNode> nodes)
        {
            var employees = nodes.Where(i => i.NType == Model.NodeType.Employee).Select(i => i as Model.Employee).ToList();
            foreach (var emp in employees)
            {
                var ids = emp.GetParentIDs();
                foreach (var pid in ids)
                {
                    var node = nodes.FirstOrDefault(i => i.ID == pid);
                    if (node != null)
                    {
                        emp.ParentNodes.Add(node);
                    }
                }
            }
            return true;
        }

        #endregion

        #region 导入
        /// <summary>
        /// 导入数据
        /// </summary>
        /// <param name="datas"></param>
        public List<Model.IOCNode> FindImportData(List<Model.DataItem> datas)
        {
            /*
             * 1 验证输入
             * 2 公司 - 部门层级 - 职位 - 人员 
             */
            List<Model.IOCNode> nodes = new List<Model.IOCNode>();
            if (datas == null || datas.Count == 0) { return nodes; }
            StringBuilder errMsg = new StringBuilder();

            Model.Department AddDept(string deptName, string parentID, out string deptID)
            {
                deptID = parentID;
                if (string.IsNullOrEmpty(deptName)) return null;
                var dept = nodes.FirstOrDefault(i => i.NType == Model.NodeType.Department && i.Name == deptName && i.ParentID == parentID);
                if (dept != null)
                {
                    deptID = dept.ID;
                    return dept as Model.Department;
                }
                else
                {
                    dept = new Model.Department() { Name = deptName, ParentID = parentID };
                    StringHelper.CreateID(dept, parentID + deptName);
                    deptID = dept.ID;
                    nodes.Add(dept);
                    return dept as Model.Department;
                }
            }

            for (int idx = 0; idx < datas.Count; idx++)
            {
                var item = datas[idx];

                #region 验证输入
                //if (string.IsNullOrEmpty(item.ID)) { errMsg.AppendLine($"第 {idx + 1} 行,请填主键"); }
                if (string.IsNullOrEmpty(item.CompanyName)) { errMsg.AppendLine($"第 {idx + 1} 行,请填写公司名称"); }
                if (string.IsNullOrEmpty(item.PosName)) { errMsg.AppendLine($"第 {idx + 1} 行,请填写职务名称"); }
                if (string.IsNullOrEmpty(item.LoginName)) { errMsg.AppendLine($"第 {idx + 1} 行,请填写登录名"); }
                if (string.IsNullOrEmpty(item.UserName)) { errMsg.AppendLine($"第 {idx + 1} 行,请填写用户名"); }
                if (errMsg.Length > 0)
                {
                    throw new Exception(errMsg.ToString());
                }
                #endregion

                //公司
                var comp = nodes.FirstOrDefault(i => i.NType == Model.NodeType.Company && i.Name == item.CompanyName);
                if (comp == null)
                {
                    comp = new Model.Company() { Name = item.CompanyName };
                    StringHelper.CreateID(comp, item.CompanyName);
                    nodes.Add(comp);
                }

                string deptID = comp.ID;

                //部门
                AddDept(item.DepNameLevel1, deptID, out deptID);
                AddDept(item.DepNameLevel2, deptID, out deptID);
                AddDept(item.DepNameLevel3, deptID, out deptID);
                AddDept(item.DepNameLevel4, deptID, out deptID);
                AddDept(item.DepNameLevel5, deptID, out deptID);

                //职位
                var pos = nodes.FirstOrDefault(i => i.NType == Model.NodeType.Position && i.Name == item.PosName && i.ParentID == deptID);
                if (pos == null)
                {
                    pos = new Model.Position() { Name = item.PosName, ParentID = deptID };
                    StringHelper.CreateID(pos, deptID + item.PosName);
                    nodes.Add(pos);
                }

                //职员
                var emp = nodes.FirstOrDefault(i => i.NType == Model.NodeType.Employee && i.Name == item.LoginName && i.ParentID == pos.ID);
                if (emp == null)
                {
                    emp = new Model.Employee()
                    {
                        Name = item.LoginName,
                        LoginName = item.LoginName,
                        UserName = item.UserName,
                        Gender = item.Gender,
                        ParentID = pos == null ? deptID : pos.ID,
                        Disabled = item.Disabled == "1",
                        Email = item.Email,
                        Tel = item.Tel,
                        Jobs = item.AddtionJobPaths,
                        PWD = string.IsNullOrWhiteSpace(item.Pwd) ? "1" : item.Pwd
                    };
                    StringHelper.CreateID(emp);
                    nodes.Add(emp);
                }
            }

            return nodes;
        }

        /// <summary>
        /// 保存导入数据
        /// </summary>
        /// <param name=""></param>
        public void SaveImportData(List<Model.IOCNode> nodes)
        {
            //从公司开始向下级进行修改或编辑操作
            //公司根据名称比对，然后查找下级部门，根据名称比对
            //用户根据登录名比对
            void AddSub(DB.OCDataBaseDataContext ctx, string parentID, string pDataID)
            {
                var subNodes = string.IsNullOrEmpty(parentID) ? nodes.Where(i => string.IsNullOrEmpty(i.ParentID)) : nodes.Where(i => i.ParentID == parentID);
                if (subNodes.Count() == 0) { return; }
                foreach (var sub in subNodes)
                {
                    //用户根据登录名查找
                    if (sub.NType == Model.NodeType.Employee)
                    {
                        #region 人员
                        var emp = (sub as Model.Employee);
                        var user = ctx.OC_EMPLOYEE.FirstOrDefault(i => i.ID == sub.ID);
                        if (user != null)
                        {
                            user.UserName = emp.UserName;
                            user.Gender = emp.Gender;
                            user.Name = emp.Name;
                            user.ParentID = pDataID;
                            user.Email = emp.Email;
                            user.Tel = emp.Tel;
                            user.Jobs = emp.Jobs;
                            user.Disabled = emp.Disabled;

                            user.Ext001 = emp.Ext001;
                            user.Ext002 = emp.Ext002;
                            user.Ext003 = emp.Ext003;
                            user.Ext004 = emp.Ext004;
                            user.Ext005 = emp.Ext005;


                            if (emp.CreateTime > DateTime.MinValue) { user.CreateTime = emp.CreateTime; }
                        }
                        else
                        {
                            if (emp.CreateTime == DateTime.MinValue) { emp.CreateTime = DateTime.Now; }
                            ctx.OC_EMPLOYEE.InsertOnSubmit(new DB.OC_EMPLOYEE().FromEmployee(emp));
                        }
                        #endregion
                    }
                    else
                    {
                        #region 节点
                        var ntype = (int)sub.NType;
                        DB.OC_NODE exist=null;
                        if (!string.IsNullOrEmpty(sub.ID))
                        {
                            exist = ctx.OC_NODE.FirstOrDefault(i => i.ID == sub.ID);
                        }
                        if (exist == null)
                        {
                            if (string.IsNullOrEmpty(parentID))
                            {
                                exist = ctx.OC_NODE.FirstOrDefault(i => i.ParentID == null && i.Name == sub.Name && i.NType == ntype);
                            }
                            else
                            {
                                exist = ctx.OC_NODE.FirstOrDefault(i => i.ParentID == pDataID && i.Name == sub.Name && i.NType == ntype);
                            }
                        }
                        if (exist != null)
                        {
                            //修改节点
                            exist.Name = sub.Name;
                            exist.Ext001 = sub.Ext001;
                            exist.Ext002 = sub.Ext002;
                            exist.Ext003 = sub.Ext003;
                            exist.Ext004 = sub.Ext004;
                            exist.Ext005 = sub.Ext005;
                            exist.ParentID = pDataID;
                            //下级节点
                            AddSub(ctx, sub.ID, exist.ID);
                        }
                        else
                        {
                            sub.CreateTime = DateTime.Now;
                            if (!string.IsNullOrEmpty(pDataID)) { sub.ParentID = pDataID; }
                            ctx.OC_NODE.InsertOnSubmit(new DB.OC_NODE().FromModel(sub));
                            //下级节点
                            AddSub(ctx, sub.ID, sub.ID);
                        }

                        #endregion
                    }
                }
            }

            if (nodes == null && nodes.Count == 0) { return; }
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                AddSub(ctx, null, null);
                ctx.SubmitChanges();
            }

            //初始化
            InitPath();
        }

        /// <summary>
        /// 导出数据
        /// </summary>
        /// <returns></returns>
        public List<Model.DataItem> Export()
        {
            /*  
             *  查询所有人员
             *  将数据拼接成 导出格式
             *  
             */
            return null;
        }

        #endregion

        #region 权限

        public Model.Authorization AddAuthorization(Model.Authorization authorization)
        {
            if (string.IsNullOrEmpty(authorization.ID)) { authorization.ID = StringHelper.CreateID("A"); }
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                if (ctx.OC_AUTHORIZATION.Any(i => i.ID == authorization.ID || i.Name == authorization.Name))
                {
                    throw new Exception("EXIST " + authorization.Name);
                }
                ctx.OC_AUTHORIZATION.InsertOnSubmit(new DB.OC_AUTHORIZATION()
                {
                    ID = authorization.ID,
                    Name = authorization.Name,
                    OrgIDs = authorization.OrgIDs,
                    OrgNames = authorization.OrgNames,
                    AuthorIDs = authorization.AuthorIDs,
                    ExcludeOrgIDs = authorization.ExcludeOrgIDs,
                    ExcludeOrgNames = authorization.ExcludeOrgNames
                });
                ctx.SubmitChanges();
                return authorization;
            }
        }

        public void DeleteAuthorization(string id)
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                var db = ctx.OC_AUTHORIZATION.FirstOrDefault(i => i.ID == id);
                if (db != null)
                {
                    ctx.OC_AUTHORIZATION.DeleteOnSubmit(db);
                    ctx.SubmitChanges();
                }
            }
        }

        public List<Model.Authorization> FindAuthorization()
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                return ctx.OC_AUTHORIZATION.ToList().Select(i => new Model.Authorization().FromDB(i)).ToList();
            }
        }

        public Model.Authorization UpdateAuthorization(Model.Authorization authorization)
        {
            using (var ctx = new DB.OCDataBaseDataContext())
            {
                var db = ctx.OC_AUTHORIZATION.FirstOrDefault(i => i.ID == authorization.ID);
                if (db != null)
                {
                    db.Name = authorization.Name;
                    db.OrgIDs = authorization.OrgIDs;
                    db.OrgNames = authorization.OrgNames;
                    db.AuthorIDs = authorization.AuthorIDs;
                    db.ExcludeOrgIDs = authorization.ExcludeOrgIDs;
                    db.ExcludeOrgNames = authorization.ExcludeOrgNames;

                    ctx.SubmitChanges();
                }
                return new Model.Authorization().FromDB(db);
            }
        }

        #endregion
    }

    public class StringHelper
    {
        /// <summary>
        /// 创建组织ID
        /// </summary>
        /// <param name="node"></param>
        /// <param name="key"></param>
        /// <returns></returns>
        public static string CreateID(Model.IOCNode node, string key = null)
        {
            if (node.NType == Model.NodeType.Employee)
            {
                return CreateEmployeeID(node as Model.Employee);
            }

            if (string.IsNullOrEmpty(node.ID))
            {
                var tag = node.NType.ToString().Substring(0, 1);

                if (!string.IsNullOrEmpty(key))
                {
                    node.ID = tag + GetMd5_16(key);
                }
                else
                {
                    node.ID = tag + Guid.NewGuid().ToString().Replace("-", "").Substring(10, 16).ToUpper();
                }
            }
            return node.ID;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="Key"></param>
        /// <returns></returns>
        public static string CreateID(string preFix)
        {
            return preFix + Guid.NewGuid().ToString().Replace("-", "").Substring(10, 16).ToUpper();
        }

        /// <summary>
        /// 创建人员ID
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>
        public static string CreateEmployeeID(Model.Employee employee)
        {
            if (string.IsNullOrEmpty(employee.ID))
            {
                if (string.IsNullOrEmpty(employee.LoginName)) { throw new Exception("LoginName 不能为空"); }
                var tag = employee.NType.ToString().Substring(0, 1);
                employee.ID = tag + GetMd5_16(employee.LoginName).ToUpper();
            }
            return employee.ID;
        }

        /// <summary>
        /// 对字符串进行MD5加密
        /// </summary>
        /// <param name="src"></param>
        /// <returns></returns>
        public static string GetMd5_16(string src)
        {
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            string t2 = BitConverter.ToString(md5.ComputeHash(UTF8Encoding.Default.GetBytes(src ?? "")), 4, 8);
            t2 = t2.Replace("-", "");
            return t2;
        }

        /// <summary>
        /// 获取密码
        /// </summary>
        /// <param name="src"></param>
        /// <returns></returns>
        public static string GetPwd(string src)
        {
            return GetMd5_16("J213)b%" + src + "_*&d3rr");
        }
    }
}
