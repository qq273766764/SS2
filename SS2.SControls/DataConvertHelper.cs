using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace SS2
{
    public class DataConvertHelper
    {
        public static decimal TryGetDecimal(object v)
        {
            if (v == null) return 0;
            decimal r = 0;
            decimal.TryParse(v.ToString(), out r);
            return r;
        }

        public static DateTime? TryGetDate(object v)
        {
            if (v == null) return null;
            DateTime d;
            DateTime.TryParse(v.ToString(), out d);
            return d;
        }

        public static int TryGetInt(object v)
        {
            if (v == null) return 0;
            int r = 0;
            int.TryParse(v.ToString(), out r);
            return r;
        }


        /// <summary>
        /// 将json转换为DataTable
        /// </summary>
        /// <param name="strJson">得到的json</param>
        /// <returns></returns>
        public static DataTable JsonToDataTable(string json)
        {
            var obj = JsonConvert.DeserializeObject(json) as Newtonsoft.Json.Linq.JArray;
            if (obj.Count > 0)
            {
                //创建table
                DataTable table = new DataTable();
                foreach (Newtonsoft.Json.Linq.JProperty item in obj.First.Children())
                {
                    table.Columns.Add(item.Name);
                }
                //赋值
                foreach (var rowData in obj)
                {
                    var tableRow = table.NewRow();
                    foreach (Newtonsoft.Json.Linq.JProperty item in rowData.Children())
                    {
                        tableRow[item.Name] = ((Newtonsoft.Json.Linq.JValue)item.Value).Value;
                    }
                    table.Rows.Add(tableRow);
                }
                return table;
            }
            return null;
        }
    }
}