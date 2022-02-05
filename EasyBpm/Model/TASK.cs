using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm.Model
{
    public partial class TASK
    {
        /// <summary>
        /// 获取是否有指定节点处于激活中的任务
        /// </summary>
        /// <returns></returns>
        public List<TASK> GetActiveTasks(string stepId)
        {
            var tasks = INCIDENT.GetJsonActiveTasks(IACTIVETASKOBJECTS);
            if (!string.IsNullOrEmpty(stepId) && tasks.Count > 0)
            {
                return tasks.Where(i => i.STEPID == stepId).ToList();
            }
            return tasks;
        }
        /// <summary>
        /// 解析激活步骤对象字符串
        /// </summary>
        /// <returns></returns>
        public List<TASK> GetActiveTasks()
        {
            return GetActiveTasks(null);
        }

        /// <summary>
        /// 获取步骤配置信息
        /// </summary>
        /// <returns></returns>
        public STEP GetStep()
        {
            return Configuration.Processes.First(i => i.PROCESSID == PROCESSID).STEPS.FirstOrDefault(i => i.STEPID == STEPID);

        }

        /// <summary>
        /// 是否新发起流程的开始任务
        /// </summary>
        public bool ISINITIATE
        {
            get
            {
                //当年前置步骤为空，并且激活时间与流程初始化时间相等的任务
                return string.IsNullOrEmpty(PREVTASKID) && STARTTIME == ISTARTTIME && TASKID.EndsWith("0B");
            }
        }

        public STEPUSER GetTaskUser() {
            return new STEPUSER(TASKUSERID,TASKUSERNAME);
        }


        public STEPUSER GetAssignToUser()
        {
            return new STEPUSER(ASSIGNTOUSERID, ASSIGNTOUSERNAME);
        }
    }
}
