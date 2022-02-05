using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.OC.Model
{
    /// <summary>
    /// 员工
    /// </summary>
    public class Employee : OCNodeBase, IOCNode
    {
        public override NodeType NType { get; set; } = NodeType.Employee;

        #region 人员信息

        public string LoginName { get; set; }

        public string PictureUrl { get; set; }

        public string UserName { get; set; }

        public string Gender { get; set; }

        public string PWD { get; set; }

        public string WX { get; set; }

        public string Email { get; set; }

        public string Tel { get; set; }

        public string Remark { get; set; }

        /// <summary>
        /// 兼职
        /// </summary>
        public string Jobs { get; set; }

        public string DataJson { get; set; }

        public List<IOCNode> ParentNodes { get; internal set; } = new List<IOCNode>();
        public string DepartmentID
        {
            get
            {
                return ParentNodes.LastOrDefault(i => i.NType == NodeType.Department)?.ID;
            }
        }
        public string DepartmentName
        {
            get
            {
                return ParentNodes.LastOrDefault(i => i.NType == NodeType.Department)?.Name;
            }
        }
        public string CompanyID
        {
            get
            {
                return ParentNodes.LastOrDefault(i => i.NType == NodeType.Company)?.ID;
            }
        }
        public string CompanyName
        {
            get
            {
                return ParentNodes.LastOrDefault(i => i.NType == NodeType.Company)?.Name;
            }
        }
        public string PositionID
        {
            get
            {
                return ParentNodes.LastOrDefault(i => i.NType == NodeType.Position)?.ID;
            }
        }
        public string PositionName
        {
            get
            {
                return ParentNodes.LastOrDefault(i => i.NType == NodeType.Position)?.Name;
            }
        }

        #endregion

        /// <summary>
        /// 获取上级ID包含兼职
        /// </summary>
        /// <returns></returns>
        public List<string> GetParentIDsWithAddtionJobs()
        {
            var splitchars = new char[] { '/', '\\' };
            var pids = base.GetParentIDs();
            if (!string.IsNullOrEmpty(Jobs))
            {
                var addtionJobs = OrgCache.Nodes.Where(i => Jobs.Split(',').Contains(i.ID)).SelectMany(i => i.IDPath.Split(splitchars)).Distinct();
                pids.AddRange(addtionJobs);
            }
            return pids;
        }
    }
}
