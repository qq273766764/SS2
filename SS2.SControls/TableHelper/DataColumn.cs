using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.TableHelper
{
    public class DataColumn
    {
        public string ColumnName { get; set; }

        public DataColumnType ColumnType { get; set; }

        public string DefalutValue { get; set; }
        public string DataBaseType
        {
            get
            {
                if (_DataBaseType == null)
                {
                    _DataBaseType = DataColumnType2DB.GetDBType(ColumnType);
                }
                return _DataBaseType;
            }
            set
            {
                _DataBaseType = value;
                ColumnType = DataColumnType2DB.GetColType(value);
            }
        }
        string _DataBaseType;
    }
}