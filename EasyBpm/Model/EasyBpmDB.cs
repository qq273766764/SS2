using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm.Model
{
    public partial class EasyBpmDBDataContext
    {
        public EasyBpmDBDataContext() : this(Configuration.ConnectionString)
        {

        }
    }
}
