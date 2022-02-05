using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm.Model
{
    public partial class INCIDENT
    {
        #region 操作方法
        /// <summary>
        /// 解析激活步骤对象字符串
        /// </summary>
        /// <returns></returns>
        public List<TASK> GetActiveTasks()
        {
            return GetJsonActiveTasks(ACTIVETASKOBJECTS);
        }
        /// <summary>
        /// 根据Json字符串获取激活的步骤
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static List<TASK> GetJsonActiveTasks(string json) {
            if (string.IsNullOrEmpty(json)) { return new List<TASK>(); }
            return Newtonsoft.Json.JsonConvert.DeserializeObject<List<TASK>>(json);
        }
        /// <summary>
        /// 设置激活步骤对象
        /// </summary>
        /// <param name="tasks"></param>
        internal void SetActiveTasksJson(List<TASK> activeTasks)
        {
            var tasks = activeTasks.Where(i => i.STATUS == TASK_STATUS.激活);
            ACTIVEUSERNAMES = string.Join(",", tasks.Select(i => i.ASSIGNTOUSERNAME));
            ACTIVESTEPLABELS = string.Join(",",tasks.Select(i=>i.STEPLABEL));
            ACTIVETASKOBJECTS = Newtonsoft.Json.JsonConvert.SerializeObject(tasks.Select(i=>new {
                i.TASKID,
                i.TASKUSERID,
                i.TASKUSERNAME,
                i.STARTTIME,
                //i.ENDTIME,
                i.COMPLETEDTIMEOUT,
                i.STEPID,
                i.STEPLABEL,
                //i.STATUS,
                //i.OPNION
            }));
        }

        #endregion
        
    }
}
