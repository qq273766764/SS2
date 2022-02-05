using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.OC.Model
{
    public class Department : OCNodeBase, IOCNode
    {
        public override NodeType NType { get; set; } = NodeType.Department;
    }
}
