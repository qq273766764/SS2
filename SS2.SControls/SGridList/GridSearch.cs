using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SGridList
{
    public class GridSearch
    {
        public string ID
        {
            get
            {
                if (string.IsNullOrEmpty(_ID))
                {
                    _ID = "S" + MD5Helper.GetMD5String(Title + WhereSql);
                }
                return _ID;
            }
            set
            {
                _ID = value;
            }
        }
        string _ID;

        public string Title { get; set; }

        public string WhereSql { get; set; }

        public GridEditor Editor { get; set; }

        public GridSearchPosition Position { get { return _Position; } set { _Position = value; } }

        GridSearchPosition _Position = GridSearchPosition.Panel;
    }

    public enum GridSearchPosition
    {
        Toolbar, Panel
    }
}