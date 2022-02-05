using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SLogger
{
    public class LoggerMessageException : Exception
    {
        public LoggerMessageException(string message) : base(message)
        {
        }

        public override string ToString()
        {
            return base.Message;
        }
    }
}
