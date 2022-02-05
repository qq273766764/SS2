using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool.EnumTypes
{
    /// <summary>
    /// 列类型
    /// </summary>
    public enum COLUMN_TYPE
    {
        /// <summary>
        /// 列表列
        /// </summary>
        ListColumn,
        /// <summary>
        /// 分组统计X
        /// </summary>
        GroupX,
        /// <summary>
        /// 分组统计Y
        /// </summary>
        GroupY,
        /// <summary>
        /// 列分组
        /// </summary>
        ViewGroup,
        /// <summary>
        /// 导入数据
        /// </summary>
        Hide
    }

    /// <summary>
    /// 检索框类型
    /// </summary>
    public enum SEARCH_INPUT_TYPE
    {
        文本,
        SQL查询,
        日期,
        日期段,
        //时间,
        //时间段,
        双文本,
        数字段,
        自定义,//下拉框
        URL参数
    }

    /// <summary>
    /// 编辑模式
    /// </summary>
    public enum EDIT_MODE
    {
        EDIT, VIEW
    }

    /// <summary>
    /// 报表列数据类型
    /// </summary>
    public enum COLUMN_DATATYPE
    {
        文本,
        长文本,
        最长文本,
        最长文本MAX,
        富文本,
        金额,
        金额四位小数,
        数字,
        日期时间,
        是否,
        其他,
    }

    /// <summary>
    /// 报表类型
    /// </summary>
    public enum REPORT_TYPE
    {
        LIST,
        STATIC,
        CHART
    }

    /// <summary>
    /// 统计类型
    /// </summary>
    public enum STATIC_METHOD
    {
        /// <summary>
        /// 合计
        /// </summary>
        SUM,
        /// <summary>
        /// 计数
        /// </summary>
        COUNT,
        /// <summary>
        /// 平均数
        /// </summary>
        AVG,
        /// <summary>
        /// 最大值
        /// </summary>
        MAX,
        /// <summary>
        /// 最小值
        /// </summary>
        MIN,
        /// <summary>
        /// 标准偏差
        /// </summary>
        STDEV,
        /// <summary>
        /// 总体标准偏差
        /// </summary>
        STDEVP,
        /// <summary>
        /// 方差
        /// </summary>
        VAR,
        /// <summary>
        /// 总体方差
        /// </summary>
        VARP
    }
}
