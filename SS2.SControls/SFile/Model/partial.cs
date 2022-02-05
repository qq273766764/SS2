using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SFile.Model
{
    public partial class FSDataContext
    {
        public FSDataContext() : base(Configuration.ConnectString)
        {
            OnCreated();
        }
    }
}