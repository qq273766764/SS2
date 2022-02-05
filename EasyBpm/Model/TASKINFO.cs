using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm.Model
{
    public class TASKINFO
    {
        public TASK TASK { get; set; }

        public INCIDENT INCIDENT { get; set; }

        public PROCESS PROCESS { get; set; }

        public STEP STEP { get; set; }
    }
}
