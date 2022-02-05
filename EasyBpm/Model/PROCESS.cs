using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm.Model
{
    public class PROCESS
    {
        public PROCESS(string processId = null, string processName = null, string desc = null)
        {
            if (processId != null) this.PROCESSID = processId;
            if (processName != null) this.PROCESSNAME = processName;
            if (desc != null) this.DESCRIPTION = desc;
        }

        #region 基本属性
        /// <summary>
        /// 流程ID
        /// </summary>
        public string PROCESSID { get; set; }
        /// <summary>
        /// 流程名称
        /// </summary>
        public string PROCESSNAME { get; set; }
        /// <summary>
        /// 表单地址
        /// </summary>
        public string FORMURL { get; set; }
        /// <summary>
        /// 流程描述
        /// </summary>
        public string DESCRIPTION { get; set; }
        /// <summary>
        /// 流程步骤
        /// </summary>
        public List<STEP> STEPS { get; set; }

        internal int _MaxINCIDENT { get; set; }

        /// <summary>
        /// 获取新的流程实例号
        /// </summary>
        /// <returns></returns>
        internal int GetNewIncident()
        {
            var inc = Core.IncidentCore.CreateIncidentNO(PROCESSID);
            if (inc > 0)
            {
                _MaxINCIDENT = inc;
            }
            else
            {
                _MaxINCIDENT++;
            }
            return _MaxINCIDENT;
        }
        #endregion

        #region 流程事件

        /// <summary>
        /// 实例创建事件
        /// </summary>
        public Action<INCIDENT> OnIncidentCreated { get; set; }
        /// <summary>
        /// 实例创建前
        /// </summary>
        public Action<INCIDENT> OnBeforeIncidentCreate { get; set; }
        /// <summary>
        /// 实例删除事件
        /// </summary>
        public Action<INCIDENT> OnIncidentDataDeleted { get; set; }
        /// <summary>
        /// 流程状态变更
        /// </summary>
        public Action<INCIDENT> OnIncidentStatusChanged { get; set; }
        /// <summary>
        /// 步骤状态变更事件
        /// </summary>
        public Action<TASK> OnTaskStatusChanged { get; set; }
        /// <summary>
        /// 流程任务创建
        /// </summary>
        public Action<TASK> OnBeforeTaskSave { get; set; }

        #endregion

        #region 流程图
        /// <summary>
        /// 流程图
        /// </summary>
        public Map.FlowMap FLOWMAP { get; set; }
        public object OnIncidentDeleted { get; internal set; }
        #endregion
    }
}
