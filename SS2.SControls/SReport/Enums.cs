using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SReport.Enums
{
    public enum SearchInputType
    {
        文本,
        SQL查询,
        日期,
        日期段,
        //时间,
        //时间段,
        自定义,//下拉框
        URL参数
    }

    public enum EDIT_MODE
    {
        EDIT, VIEW
    }
    
    public enum ReportType
    {
        明细列表,
        交叉统计,
        直方图,
        折线条,
        饼图
    }
}