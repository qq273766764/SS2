using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.OC.Model
{
    public class DataItem
    {
        /// <summary>
        /// 主键
        /// </summary>
        //public string ID { get; set; }
        /// <summary>
        /// 公司名称
        /// </summary>
        public string CompanyName { get; set; }
        /// <summary>
        /// 部门1
        /// </summary>
        public string DepNameLevel1 { get; set; }
        /// <summary>
        /// 部门2
        /// </summary>
        public string DepNameLevel2 { get; set; }
        /// <summary>
        /// 部门3
        /// </summary>
        public string DepNameLevel3 { get; set; }
        /// <summary>
        /// 部门4
        /// </summary>
        public string DepNameLevel4 { get; set; }
        /// <summary>
        /// 部门5
        /// </summary>
        public string DepNameLevel5 { get; set; }
        /// <summary>
        /// 职位
        /// </summary>
        public string PosName { get; set; }
        /// <summary>
        /// 登录名
        /// </summary>
        public string LoginName { get; set; }
        /// <summary>
        /// 用户名
        /// </summary>
        public string UserName { get; set; }
        /// <summary>
        /// 用户名
        /// </summary>
        public string Gender { get; set; }
        /// <summary>
        /// 邮箱
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// 电话
        /// </summary>
        public string Tel { get; set; }
        /// <summary>
        /// 兼职职位路径
        /// </summary>
        public string AddtionJobPaths { get; set; }
        /// <summary>
        /// 人员是否删除
        /// </summary>
        public string Disabled { get; set; }
        
        /// <summary>
        /// 初始化密码
        /// </summary>
        public string Pwd { get; set; }
    }
}
