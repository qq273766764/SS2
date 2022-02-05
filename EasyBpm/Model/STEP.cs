using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm.Model
{
    public class STEP
    {
        public STEP(string stepID = null, string stepLabel = null)
        {
            if (stepID != null) this.STEPID = stepID;
            if (stepLabel != null) this.STEPLABEL = stepLabel;
        }
        
        #region 基本信息
        /// <summary>
        /// 步骤ID
        /// </summary>
        public string STEPID { get; set; }
        /// <summary>
        /// 流程名称
        /// </summary>
        public string _PROCESSNAME { get; set; }
        /// <summary>
        /// 流程ID
        /// </summary>
        public string _PROCESSID { get; set; }
        /// <summary>
        /// 步骤标签
        /// </summary>
        public string STEPLABEL { get; set; }
        /// <summary>
        /// 表单地址（默认为流程的表单地址）
        /// </summary>
        public string FORMURL { get; set; }
        /// <summary>
        /// 是否是开始步骤
        /// </summary>
        public bool _ISBEGINSTEP { get; set; } = false;
        #endregion

        #region 流转规则
        /// <summary>
        /// 查找下一步骤规则，返回空则则不创建新任务
        /// </summary>
        public Func<TASK, string[]> FuncNextStepIDs { get; set; }
        /// <summary>
        /// 后续步骤ID
        /// </summary>
        public string[] NEXTSTEPIDS { get; set; }
        /// <summary>
        /// 动态本步骤处理人，默认为STEPUSERS内容
        /// </summary>
        public Func<INCIDENT, STEPUSER[]> FuncStepUsers { get; set; }
        /// <summary>
        /// 步骤处理人
        /// </summary>
        public STEPUSER[] STEPUSERS { get; set; }
        #endregion

        #region 超时及间隔

        /// <summary>
        /// 步骤审批超时时间
        /// </summary>
        public Func<Model.TASK, DateTime> FuncStepTimeOut { get; set; }

        /// <summary>
        /// 步骤超时间时间间隔
        /// </summary>
        public TimeSpan StepTimeOut { get; set; }
        
        /// <summary>
        /// 提醒间隔时间
        /// </summary>
        public TimeSpan RemindInterval { get; set; }

        /// <summary>
        /// 自动完成时间
        /// </summary>
        public TimeSpan AutoCompleted { get; set; }
        #endregion

        #region 步骤事件
        /// <summary>
        /// 步骤状态变更后事件
        /// </summary>
        public Action<TASK> OnTaskStatusChanged { get; set; }
        #endregion

        #region 获取方法
        /// <summary>
        /// 获取处理人方法
        /// </summary>
        /// <param name="inc"></param>
        /// <returns></returns>
        internal STEPUSER[] GetSTEPUSERs(INCIDENT inc = null)
        {
            if (FuncStepUsers != null)
            {
                STEPUSERS = FuncStepUsers(inc);
            }
            if (STEPUSERS == null) { return new STEPUSER[] { }; }
            return STEPUSERS.Distinct().ToArray();
        }
        internal string[] GetNEXTSTEPIDs(TASK tsk = null)
        {
            if (FuncNextStepIDs != null)
            {
                NEXTSTEPIDS = FuncNextStepIDs(tsk);
            }
            if (NEXTSTEPIDS == null) { return new string[] { }; }
            return NEXTSTEPIDS.Distinct().ToArray();
        }
        #endregion
    }
}
