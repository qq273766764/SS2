using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm
{
    interface IProcessData
    {
        /// <summary>
        /// 实例号
        /// </summary>
        int INCIDENTNO { get; set; }
        /// <summary>
        /// 数据创建时间
        /// </summary>
        DateTime CREATETIME { get; set; }
        /// <summary>
        /// 数据更新时间
        /// </summary>
        DateTime UPDATETIME { get; set; }
        /// <summary>
        /// 流程ID
        /// </summary>
        string PROCESSID { get; set; }
        /// <summary>
        /// 创建用户ID
        /// </summary>
        string CREATEUSERID { get; set; }
        /// <summary>
        /// 创建用户名
        /// </summary>
        string CREATEUSERNAME { get; set; }
        /// <summary>
        /// 最新更新用户id
        /// </summary>
        string UPDATEUSERID { get; set; }
        /// <summary>
        /// 最新更新用户名
        /// </summary>
        string UPDATEUSERNAME { get; set; }
        /// <summary>
        /// 组织架构ID
        /// </summary>
        string OUID { get; set; }
        /// <summary>
        /// 组织架构信息
        /// </summary>
        string OUNAME { get; set; }
        /// <summary>
        /// 流程标题
        /// </summary>
        string SUMMARY { get; set; }
    }
}
