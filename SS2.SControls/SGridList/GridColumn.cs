using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SGridList
{
    public class GridColumn
    {
        public string Title
        {
            get
            {
                if (string.IsNullOrEmpty(_Title))
                {
                    _Title = FieldName;
                }
                return _Title;
            }
            set
            {
                _Title = value;
            }
        }
        string _Title;

        public string Width { get { return _Width; } set { _Width = value; } }
        string _Width = "120px";

        public string FieldName { get; set; }

        public string FormatString { get { return _FormatString; } set { _FormatString = value; } }
        string _FormatString = "{0}";

        public bool ShowColumn { get { return _ShowColumn; } set { _ShowColumn = value; } }
        bool _ShowColumn = true;

        public bool Sortable { get; set; } = true;

        public bool EnableUpdate { get { return _EnableUpdate; } set { _EnableUpdate = value; } }
        bool _EnableUpdate = true;

        public GridEditor Editor { get; set; }
    }
}