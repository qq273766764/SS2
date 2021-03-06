using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace SS2.SReportTool.Core
{
    class ReportSqlValidator
    {
        /// <summary>
        /// 校验是否有禁用SQL语法
        /// </summary>
        /// <param name="sql"></param>
        /// <returns></returns>
        public static bool Validate(string sql)
        {
            if (string.IsNullOrEmpty(sql)) { return false; }
            List<string> ForbitArrays = new List<string> { "delete", "exec", "execute", "insert", "update", "truncate", "drop", "alter", "truncate", "restore", "backup" };
            return !ForbitArrays.Any(i => sql.ToLower().Split(' ', '(', ')').Contains(i));
        }
        /// <summary>
        /// 校验参数
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static bool ValidateParaValue(string value)
        {
            if (string.IsNullOrEmpty(value)) { return true; }
            if (value.Contains("'")) return false;
            return ValidateSql(value);
        }
        /// <summary>
        /// 校验是否为SQL语句
        /// </summary>
        /// <param name="inputString"></param>
        /// <returns></returns>
        public static bool ValidateSql(string inputString)
        {
            string SqlStr = @"and|or|exec|execute|insert|select|delete|update|alter|create|drop|count|\*|chr|char|mid|substring|master|truncate|declare|xp_cmdshell|restore|backup|net +user|net +localgroup +administrators";
            try
            {
                if ((inputString != null) && (inputString != String.Empty))
                {
                    string str_Regex = @"\b(" + SqlStr + @")\b";

                    Regex Regex = new Regex(str_Regex, RegexOptions.IgnoreCase);
                    //string s = Regex.Match(inputString).Value; 
                    if (true == Regex.IsMatch(inputString))
                        return false;

                }
            }
            catch
            {
                return false;
            }
            return true;
        }

        public static void ValidateSqlPara(string value, string error = "参数错误")
        {
            if (!ValidateParaValue(value)) { throw new Exception(error); }
        }
    }
}
