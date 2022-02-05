using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.OC.Model
{
    public abstract class OCNodeBase
    {
        public string ID { get; set; }
        public string ParentID { get; set; }
        public string Name { get; set; }
        public string IDPath { get; set; }
        public string NamePath { get; set; }
        public virtual NodeType NType { get; set; } = NodeType.Position;
        public bool Disabled { get; set; } = false;
        public bool IsMainJob { get; set; } = false;
        public DateTime CreateTime { get; set; }

        public string GetNTypeName()
        {
            switch (NType)
            {
                case NodeType.Company:
                    return "公司";
                case NodeType.Department:
                    return "部门";
                case NodeType.Employee:
                    return "人员";
                case NodeType.Group:
                    return "工作组";
                case NodeType.Position:
                    return "职位";
                default:
                    return NType.ToString();
            }
        }

        public List<string> GetParentIDs()
        {
            var pids= IDPath.Split(new char[]{ '/', '\\'}, StringSplitOptions.RemoveEmptyEntries).ToList();
            if (pids.Count > 0) {
                pids.Remove(ID);
            }
            return pids;
        }

        #region 扩展信息
        public string Ext001 { get; set; }
        public string Ext002 { get; set; }
        public string Ext003 { get; set; }
        public string Ext004 { get; set; }
        public string Ext005 { get; set; }

        #endregion


        public void CopyFromNode(IOCNode node) {
            this.ID = node.ID;
            this.ParentID = node.ParentID;
            this.Name = node.Name;
            this.IDPath = node.IDPath;
            this.NamePath = node.NamePath;
            this.NType = node.NType;
            this.Disabled = node.Disabled;
            this.IsMainJob = node.IsMainJob;
            this.CreateTime = node.CreateTime;
            this.Ext001 = node.Ext001;
            this.Ext002 = node.Ext002;
            this.Ext003 = node.Ext003;
            this.Ext004 = node.Ext004;
            this.Ext005 = node.Ext005;

        }
    }
}
