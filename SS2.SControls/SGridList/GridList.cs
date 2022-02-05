using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SGridList
{
    public class GridList
    {
        /// <summary>
        /// KEY
        /// </summary>
        public string Key { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 脚本文件路径
        /// </summary>
        public string JsPath { get; set; }

        /// <summary>
        /// 关键字
        /// </summary>
        public string KeyFieldName { get; set; }
        /// <summary>
        /// 编辑权限
        /// </summary>
        public GridEditorMode EditMode { get; set; }

        /// <summary>
        /// 列配置
        /// </summary>
        public GridColumn[] Columns { get; set; }

        /// <summary>
        /// 搜索配置
        /// </summary>
        public GridSearch[] Search { get; set; }

        /// <summary>
        /// 数据源配置
        /// </summary>
        public GridDataSource DataSource { get; set; }

        /// <summary>
        /// 编辑页面布局
        /// </summary>
        public GridLayOut EditFormLayOut { get; set; }
    }
}