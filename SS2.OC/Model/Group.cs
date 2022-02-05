using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.OC.Model
{
    public class Group : OCNodeBase, IOCNode
    {
        public override NodeType NType { get; set; } = NodeType.Group;
    }
}
