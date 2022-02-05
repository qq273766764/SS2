using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SS2.SGridList
{
    public class GridLayOut
    {
        public GridLayOutPanel[] Panels { get; set; }

        public string Title { get { return _Title; } set { _Title = value; } }
        string _Title = "编辑";

        public string Width { get { return _Width; } set { _Width = value; } }
        string _Width = "90%";

        public string Height { get { return _Heigh; } set { _Heigh = value; } }
        string _Heigh = "90%";

        public Action<DataRow> OnLoad { get; set; }

        public Action<DataRow> OnSave { get; set; }
        public Action<GridList,string> OnDelete { get; set; }
    }
}