using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SDialog
{

    public class DialogPara
    {
        /// <summary>
        /// Request关键字（参数值可用‘|’分隔）
        /// </summary>
        public virtual string ParaKey { get; set; }
        /// <summary>
        /// 搜索条件，接受‘|’分隔的多个值
        /// </summary>
        [JsonIgnore]
        public virtual string WhereSql { get; set; }
        /// <summary>
        /// 查询语句方法
        /// </summary>
        [JsonIgnore]
        public Func<string, string> FuncWhereSql { get; set; }
        /// <summary>
        /// 过滤List还是树
        /// </summary>
        public virtual FilterType FilterType
        {
            get { return _FilterType; }
            set { _FilterType = value; }
        }
        FilterType _FilterType = FilterType.List;

        /// <summary>
        /// 获取查询语句
        /// </summary>
        /// <param name="paras"></param>
        /// <returns></returns>
        public string GetWhereSql(Dictionary<string, string> paras)
        {
            if (FuncWhereSql != null)
            {
                return "(" + FuncWhereSql(paras[ParaKey]) + ")";
            }
            else
            {
                if (string.IsNullOrEmpty(WhereSql))
                {
                    throw new Exception($"对话框 {this.ParaKey} 未定义 wheresql 属性");
                }
                return "(" + string.Format(WhereSql, paras[ParaKey].Split(Configuration.splitChar)) + ")";
            }
        }
    }

}