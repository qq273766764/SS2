using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm.Model
{
    public class LOG
    {
        public LOG(int INCIDENT, string PROCESSNAME, LOG_LEVEL LOGLEVEL, string MESSAGE, string EXCEPTIONE = null)
        {
            this.INCIDENT = INCIDENT;
            this.PROCESSNAME = PROCESSNAME;
            this.LOGLEVEL = LOGLEVEL.ToString();
            this.MESSAGE = MESSAGE;
            this.EXCEPTIONE = EXCEPTIONE;
            this.TIME = DateTime.Now;
        }

        public int INCIDENT { get; set; }
        public string PROCESSNAME { get; set; }
        public string LOGTARGET { get; set; } = "EASYBPM";
        public string LOGLEVEL { get; set; }
        public string MESSAGE { get; set; }
        public string EXCEPTIONE { get; set; }
        public DateTime TIME { get; set; }

        public override string ToString()
        {
            return string.Format("[{1}.{6}]->T:{0:HH:mm:ss fff},{2}{3}MSG:{4}{5}", 
                TIME, 
                LOGTARGET,
                string.IsNullOrEmpty(PROCESSNAME)?"":("P:"+ PROCESSNAME+","), 
                INCIDENT>0?("I:"+INCIDENT+","):"", 
                MESSAGE, 
                string.IsNullOrEmpty(EXCEPTIONE) ? "" : (",\r\n" + EXCEPTIONE),LOGLEVEL);
        }
    }
}
