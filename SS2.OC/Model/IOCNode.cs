using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.OC.Model
{
    public interface IOCNode
    {
        string ID { get; set; }

        string ParentID { get; set; }

        string Name { get; set; }

        string IDPath { get; set; }

        string NamePath { get; set; }

        bool Disabled { get; set; }

        bool IsMainJob { get; set; }

        NodeType NType { get; set; }

        DateTime CreateTime { get; set; }


        #region 扩展信息
        string Ext001 { get; set; }
        string Ext002 { get; set; }
        string Ext003 { get; set; }
        string Ext004 { get; set; }
        string Ext005 { get; set; }

        #endregion

        string GetNTypeName();

        void CopyFromNode(IOCNode node);

        List<string> GetParentIDs();
    }

    /// <summary>
    /// 元素类型
    /// </summary>
    public enum NodeType
    {
        /// <summary>
        /// 公司
        /// </summary>
        Company,
        /// <summary>
        /// 部门
        /// </summary>
        Department,
        /// <summary>
        /// 员工
        /// </summary>
        Employee,
        /// <summary>
        /// 职位
        /// </summary>
        Position,
        /// <summary>
        /// 工作组
        /// </summary>
        Group,
    }
}
