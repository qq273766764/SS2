using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SDialog
{

    public class DialogSearch : DialogPara
    {
        public bool IsRequired { get; set; }

        public override string ParaKey
        {
            get
            {
                if (base.ParaKey == null) {
                    return "S_" + MD5Helper.GetMD5String(Title + WhereSql); 
                }
                return base.ParaKey;
            }
        }

        /// <summary>
        /// 搜索标题
        /// </summary>
        public string Title { get; set; }
    }
}