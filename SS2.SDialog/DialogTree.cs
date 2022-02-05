using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SS2.SDialog
{

    public class DialogTree : DialogSearch
    {
        /// <summary>
        /// 连接字符串ID，默认与Dialog.ConnID
        /// </summary>
        [JsonIgnore] public string ConnID { get; set; }

        /// <summary>
        /// 数据源SQL
        /// </summary>
        [JsonIgnore] public string Sql { get; set; }

        /// <summary>
        /// 主键
        /// </summary>
        public string KeyFieldName { get; set; }
        /// <summary>
        /// 父主键
        /// </summary>
        public string ParentFieldName { get; set; }
        /// <summary>
        /// 显示文本字段
        /// </summary>
        public string TextFieldName { get; set; }

        /// <summary>
        /// 过滤字段
        /// </summary>
        public string ValueFieldName { get { return string.IsNullOrEmpty(_ValueFieldName) ? KeyFieldName : _ValueFieldName; } set { _ValueFieldName = value; } }
        string _ValueFieldName;
        /// <summary>
        /// 起始父主键
        /// </summary>
        public string ParentKeyValues { get; set; }

        /// <summary>
        /// 展开结点
        /// </summary>
        public bool ExpendNode { get; set; }

        /// <summary>
        /// 数宽度
        /// </summary>
        public string Width { get { return _Wdith; } set { _Wdith = value; } }
        string _Wdith = "200px";

        /// <summary>
        /// 直接查询DataTable
        /// </summary>
        [JsonIgnore] public Func<Dictionary<string, string>, DataTable> DataSourceGetter { get; set; }

    }

}