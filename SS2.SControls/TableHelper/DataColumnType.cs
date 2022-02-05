using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.TableHelper
{
    public enum DataColumnType
    {
        文本,
        长文本,
        最长文本,
        最长文本MAX,
        富文本,
        金额,
        金额四位小数,
        数字,
        日期时间,
        是否,
        其他,
    }

    public class DataColumnType2DB
    {
        static Dictionary<DataColumnType, string> Col2DB
        {
            get
            {
                if (_Col2DB == null)
                {
                    _Col2DB = new Dictionary<DataColumnType, string>();
                    _Col2DB.Add(DataColumnType.文本, "NVARCHAR(500)");
                    _Col2DB.Add(DataColumnType.长文本, "NVARCHAR(2000)");
                    _Col2DB.Add(DataColumnType.最长文本, "NVARCHAR(4000)");
                    _Col2DB.Add(DataColumnType.最长文本MAX, "NVARCHAR(MAX)");
                    _Col2DB.Add(DataColumnType.富文本, "NTEXT");
                    _Col2DB.Add(DataColumnType.数字, "INT");
                    _Col2DB.Add(DataColumnType.金额, "DECIMAL(18,2)");
                    _Col2DB.Add(DataColumnType.金额四位小数, "DECIMAL(18,4)");
                    _Col2DB.Add(DataColumnType.日期时间, "DATETIME");
                    _Col2DB.Add(DataColumnType.是否, "BIT");
                    _Col2DB.Add(DataColumnType.其他, "NVARCHAR(1000)");
                }
                return _Col2DB;
            }
        }
        static Dictionary<DataColumnType, string> _Col2DB;
        public static string GetDBType(DataColumnType ColumnType)
        {
            if (!Col2DB.ContainsKey(ColumnType))
            {
                return Col2DB[DataColumnType.其他];
            }
            return Col2DB[ColumnType];
        }

        public static DataColumnType GetColType(string DBType)
        {
            var t = Col2DB.Where(i => i.Value == DBType.ToUpper());
            if (t.Count() == 0)
            {
                return DataColumnType.其他;
            }
            return t.FirstOrDefault().Key;
        }

        public static string FormatDBType(string type, int length, int xprec, int xscale)
        {
            switch (type.ToUpper())
            {
                case "NVARCHAR":
                    type = string.Format("{0}({1})", type, length / 2);
                    break;
                case "DECIMAL":
                    type = string.Format("{0}({1},{2})", type, xprec, xscale);
                    break;
            }
            return type.ToUpper();
        }
    }
}