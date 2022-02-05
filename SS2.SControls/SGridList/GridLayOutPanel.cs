using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SGridList
{
    public class GridLayOutPanel
    {
        public int FormColumnCount { get { return _FormColumnCount; } set { _FormColumnCount = value; } }
        int _FormColumnCount = 4;
        public string Title { get; set; }

        public string[] Fields { get; set; }

        public string ID
        {
            get
            {
                if (string.IsNullOrEmpty(_ID))
                {
                    _ID = "P" + MD5Helper.GetMD5String(Title);
                }
                return _ID;
            }
            set
            {
                _ID = value;
            }
        }
        string _ID;
    }
}