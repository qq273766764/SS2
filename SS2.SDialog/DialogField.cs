using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SDialog
{

    public class DialogField
    {
        /// <summary>
        /// 标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 字段
        /// </summary>
        public string Field { get; set; }

        /// <summary>
        /// 字段格式化
        /// </summary>
        public string Format { get; set; }

        /// <summary>
        /// 宽度
        /// </summary>
        public string Width { get; set; } = "120px";

        /// <summary>
        /// 是否EncodeHtml
        /// </summary>
        public bool EncodeHtml { get; set; }

        /// <summary>
        /// 是否隐藏
        /// </summary>
        public bool Hidden { get; set; }
    }

}