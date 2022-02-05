using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReport
{
    public class ReportCellFormatHelper
    {
        /// <summary>
        /// 根据配置格式化数据
        /// </summary>
        /// <param name="row"></param>
        /// <param name="fieldName"></param>
        /// <param name="dataType"></param>
        /// <param name="format"></param>
        /// <returns></returns>
        public static string FormatCell(DataRow row, string fieldName, string dataType, string format)
        {
            if (string.IsNullOrEmpty(dataType))
            {
                dataType = (row.Table.Columns[fieldName]).DataType.FullName;
            }
            //当前值
            object v = row[fieldName];
            if (v == null) { return string.Empty; }
            //没有格式化
            if (string.IsNullOrEmpty(format)) { return v.ToString().Trim(); }
            //判断是否多行格式化
            string[] flines = format.Split(new string[] { "\r\n" }, StringSplitOptions.RemoveEmptyEntries);
            if (flines.Length > 1)
            {
                if (flines.Length % 2 != 0) { throw new Exception("多行格式化行数错误！"); }
                //默认格式化
                string defFormat = string.Empty;
                for (int i = 0; i < flines.Length; i += 2)
                {
                    //比对格式化
                    string caseValue = flines[i].Trim();
                    string formatstring = flines[i + 1].Trim();
                    if (caseValue.EndsWith(":") || caseValue.EndsWith("：")) { caseValue = caseValue.Substring(0, caseValue.Length - 1); }

                    if (caseValue.ToLower() == "default")
                    {
                        defFormat = formatstring;
                    }
                    else if (EqualsSetting(caseValue, v, dataType))
                    {
                        return FormatW2Url(FormatValue(row, fieldName, formatstring));
                    }
                }
                if (!string.IsNullOrEmpty(defFormat)) { return FormatW2Url(FormatValue(row, fieldName, defFormat)); }
                return FormatW2Url(v.ToString().Trim());
            }
            else
            {
                return FormatW2Url(FormatValue(row, fieldName, format));
            }
        }

        /// <summary>
        /// 比对值是否相等
        /// </summary>
        /// <param name="caseValue"></param>
        /// <param name="cellValue"></param>
        /// <param name="dataType"></param>
        /// <returns></returns>
        static bool EqualsSetting(string caseValue, object cellValue, string dataType)
        {
            if (cellValue == null || string.IsNullOrEmpty(caseValue)) { return false; }

            //取得运算类型
            string Opration = string.Empty;
            foreach (var opt in Opts)
            {
                if (caseValue.StartsWith(opt))
                {
                    Opration = opt;
                    caseValue = caseValue.Substring(opt.Length);
                    break;
                }
            }
            //比较大小
            switch (dataType)
            {
                case "System.Boolean":
                    var c_bool = Convert.ToBoolean(caseValue);
                    switch (Opration)
                    {
                        case "!=":
                            return !c_bool.Equals(cellValue);
                        default:
                            return c_bool.Equals(cellValue);
                    }
                case "System.DateTime":
                    var c_date = Convert.ToDateTime(caseValue);
                    var v_date = Convert.ToDateTime(cellValue);
                    switch (Opration)
                    {
                        case "!=":
                            return v_date != c_date;
                        case ">=":
                            return v_date >= c_date;
                        case "<=":
                            return v_date <= c_date;
                        case ">":
                            return v_date > c_date;
                        case "<":
                            return v_date < c_date;
                        default:
                            return v_date == c_date;
                    }
                case "System.Decimal":
                    var c_dec = Convert.ToDecimal(caseValue);
                    var v_dec = Convert.ToDecimal(cellValue);
                    switch (Opration)
                    {
                        case "!=":
                            return v_dec != c_dec;
                        case ">=":
                            return v_dec >= c_dec;
                        case "<=":
                            return v_dec <= c_dec;
                        case ">":
                            return v_dec > c_dec;
                        case "<":
                            return v_dec < c_dec;
                        default:
                            return v_dec == c_dec;
                    }
                case "System.Int64":
                case "System.Int32":
                    var c_int = Convert.ToInt32(caseValue);
                    var v_int = Convert.ToInt32(cellValue);
                    switch (Opration)
                    {
                        case "!=":
                            return v_int != c_int;
                        case ">=":
                            return v_int >= c_int;
                        case "<=":
                            return v_int <= c_int;
                        case ">":
                            return v_int > c_int;
                        case "<":
                            return v_int < c_int;
                        default:
                            return v_int == c_int;
                    }
                case "System.String":
                default:
                    var c_str = cellValue as string;
                    switch (Opration)
                    {
                        case "!=":
                            return c_str != caseValue;
                        case "C=":
                            return c_str.Contains(caseValue);
                        default:
                            return c_str == caseValue;
                    }
            }
        }


        /// <summary>
        /// 格式化字符串
        /// </summary>
        /// <returns></returns>
        static string FormatValue(DataRow row, string fieldName, string format)
        {
            List<object> fvalues = new List<object>();
            int i = 0;
            if (row[fieldName] == null)
            {
                fvalues.Add("NULL");
            }
            else
            {
                fvalues.Add(row[fieldName]);
            }

            foreach (DataColumn cc in row.Table.Columns)
            {
                if (format.Contains("[" + cc.ColumnName + "]"))
                {
                    i++;
                    if (row[cc.ColumnName] == null)
                    {
                        fvalues.Add("NULL");
                    }
                    else
                    {
                        if (cc.DataType == typeof(System.String))
                        {
                            var strValue = row[cc.ColumnName] as string;
                            if (strValue != null) { strValue = strValue.Trim(); }
                            fvalues.Add(strValue);
                        }
                        else
                        {
                            fvalues.Add(row[cc.ColumnName]);
                        }
                    }

                    format = format.Replace("[" + cc.ColumnName + "]", i.ToString());
                }
            }
            switch (fvalues.Count)
            {
                case 1:
                    return string.Format(format, fvalues[0]);
                case 2:
                    return string.Format(format, fvalues[0], fvalues[1]);
                case 3:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2]);
                case 4:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3]);
                case 5:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4]);
                case 6:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5]);
                case 7:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6]);
                case 8:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7]);
                case 9:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7], fvalues[8]);
                case 10:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7], fvalues[8], fvalues[9]);
                case 11:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7], fvalues[8], fvalues[9], fvalues[10]);
                case 12:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7], fvalues[8], fvalues[9], fvalues[10], fvalues[11]);
                case 13:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7], fvalues[8], fvalues[9], fvalues[10], fvalues[11], fvalues[12]);
                case 14:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7], fvalues[8], fvalues[9], fvalues[10], fvalues[11], fvalues[12], fvalues[13]);
                case 15:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7], fvalues[8], fvalues[9], fvalues[10], fvalues[11], fvalues[12], fvalues[13], fvalues[14]);
                case 16:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7], fvalues[8], fvalues[9], fvalues[10], fvalues[11], fvalues[12], fvalues[13], fvalues[14], fvalues[15]);
                case 17:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7], fvalues[8], fvalues[9], fvalues[10], fvalues[11], fvalues[12], fvalues[13], fvalues[14], fvalues[15], fvalues[16]);
                case 18:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7], fvalues[8], fvalues[9], fvalues[10], fvalues[11], fvalues[12], fvalues[13], fvalues[14], fvalues[15], fvalues[16], fvalues[17]);
                case 19:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7], fvalues[8], fvalues[9], fvalues[10], fvalues[11], fvalues[12], fvalues[13], fvalues[14], fvalues[15], fvalues[16], fvalues[17], fvalues[18]);
                case 20:
                    return string.Format(format, fvalues[0], fvalues[1], fvalues[2], fvalues[3], fvalues[4], fvalues[5], fvalues[6], fvalues[7], fvalues[8], fvalues[9], fvalues[10], fvalues[11], fvalues[12], fvalues[13], fvalues[14], fvalues[15], fvalues[16], fvalues[17], fvalues[18], fvalues[179]);
                default:
                    throw new Exception("格式化字段太多！");
            }
        }

        /// <summary>
        /// 格式化W2 url配置
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        static string FormatW2Url(string value)
        {
            return value;
            //return SSO.Utilities.CfgHelper.ExpandUrl(value);
        }
        /// <summary>
        /// 取得运算符
        /// </summary>
        /// <returns></returns>
        public static string[] Opts
        {
            get
            {
                return new string[] { "!=", ">=", "<=", "C=", ">", "<", "=" };
            }
        }
    }
}
