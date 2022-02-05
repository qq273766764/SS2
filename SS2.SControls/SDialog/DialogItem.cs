using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;

namespace SS2.SDialog
{
    public class DialogItem
    {
        /// <summary>
        /// 选择框标识
        /// </summary>
        public string DialogKey { get; set; }

        /// <summary>
        /// 连接字符串ID
        /// </summary>
        [JsonIgnore]
        public string ConnID { get; set; }

        /// <summary>
        /// 连接字符串
        /// </summary>
        [JsonIgnore]
        public string ConnStr
        {
            get
            {
                if (!string.IsNullOrEmpty(_ConnStr))
                {
                    return _ConnStr;
                }
                else if (ConfigurationManager.ConnectionStrings[ConnID] != null)
                {
                    return ConfigurationManager.ConnectionStrings[ConnID].ConnectionString;
                }
                else
                {
                    //return SSO.Utilities.CfgHelper.GetConnectionString(ConnID, true);
                    return null;
                }
            }
            set
            {
                _ConnStr = value;
            }
        }
        string _ConnStr;

        /// <summary>
        /// 选择框标题
        /// </summary>
        public string Title { get; set; } = "选择";

        /// <summary>
        /// 查询SQL
        /// </summary>
        [JsonIgnore]
        public string Sql { get; set; }

        /// <summary>
        /// 过滤查询SQL
        /// </summary>
        [JsonIgnore]
        public Func<string[], string> SqlGetter { get; set; }

        /// <summary>
        /// 直接查询DataTable
        /// </summary>
        [JsonIgnore]
        public Func<Dictionary<string, string>, DataTable> DataSourceGetter { get; set; }

        /// <summary>
        /// 数据排序
        /// </summary>
        [JsonIgnore]
        public string OrderString { get; set; }

        /// <summary>
        /// 是否多选
        /// </summary>
        [JsonIgnore]
        public bool IsMutiSelect { get; set; }

        /// <summary>
        /// 是否显示选择框（用于多选）
        /// </summary>
        public bool IsShowSelectedBox
        {
            get
            {
                return _IsShowSelectedBox && IsMutiSelect;
            }
            set { _IsShowSelectedBox = value; }
        }
        bool _IsShowSelectedBox;
        /// <summary>
        /// 数据主键
        /// </summary>
        public string KeyFieldName { get; set; }

        public string TextFieldName
        {
            get { if (_TextFieldName == null) _TextFieldName = KeyFieldName; return _TextFieldName; }
            set { _TextFieldName = value; }
        }
        string _TextFieldName;
        /// <summary>
        /// 显示选择树
        /// </summary>
        public DialogTree ShowTree { get; set; }

        /// <summary>
        /// 列表字段
        /// </summary>
        public DialogField[] Fields { get; set; }

        [JsonIgnore]
        internal DialogField[] FieldsDefined;

        /// <summary>
        /// 搜索框
        /// </summary>
        public DialogSearch[] Searchs { get; set; }

        /// <summary>
        /// 接收Request参数
        /// </summary>
        public DialogPara[] Paras { get; set; }

        /// <summary>
        /// 禁用开始加载时显示列表
        /// </summary>
        //public bool DisableFirstLoad { get; set; }
        public void Validate() {
            if (string.IsNullOrEmpty(DialogKey)) throw new Exception("DialogKey 必填");
            if (Fields == null || Fields.Length == 0) throw new Exception("Fields 未定义");
        }
    }
}