using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm.Core
{
    internal class TaskCore
    {
        /// <summary>
        /// 激活特定步骤
        /// </summary>
        /// <param name="taskID"></param>
        /// <param name="tskStatus"></param>
        /// <returns></returns>
        public Model.TASK ActiveTask(string taskID, Model.STEPUSER user = null)
        {
            var tskInfo = LoadTask(taskID);
            Model.TASK tsk = tskInfo?.TASK;
            if (tsk == null)
            {
                throw new Exception($"获取Task失败，TASKID:{taskID}");
            }

            //判断是否允许激活已完成的流程
            if (!Configuration.Options.AllowActiveEndTask && tsk.ISTATUS == INCIDENT_STATUS.完成) {
                throw new Exception("流程已完成不允许激活任务");
            }

            //查找Task
            //检查是否有激活的任务，如果有则不重新激活相应的任务
            if (!Configuration.Options.EnableActiveSameTask)
            {
                var loginName = tsk.ASSIGNTOUSERID;
                if (user != null)
                {
                    loginName = user.LOGINNAME;
                }

                var atsk = new Model.EasyBpmDBDataContext().TASK.FirstOrDefault(i =>
                i.PROCESSID == tsk.PROCESSID &&
                i.INCIDENTNO == tsk.INCIDENTNO &&
                i.ASSIGNTOUSERID == loginName &&
                i.STEPID == tsk.STEPID &&
                i.STATUS == TASK_STATUS.激活);

                if (atsk != null)
                {
                    throw new Exception($"已有激活的任务不能重复激活，步骤：{tsk.STEPLABEL},处理人：{tsk.ASSIGNTOUSERNAME}");
                }
            }

            ///如果当前任务是激活直接设置处理人
            ///否则创建新的激活任务
            if (tsk.STATUS == TASK_STATUS.激活 ||
                tsk.STATUS == TASK_STATUS.错误 ||
                tsk.STATUS == TASK_STATUS.抄送 ||
                tsk.STATUS == TASK_STATUS.终止 ||
                tsk.STATUS == TASK_STATUS.超时)
            {
                using (var ctx = new Model.EasyBpmDBDataContext())
                {
                    var oldTsk = ctx.TASK.FirstOrDefault(i => i.TASKID == tsk.TASKID);
                    oldTsk.STATUS = TASK_STATUS.激活;
                    if (user != null)
                    {
                        oldTsk.ASSIGNTOUSERID = user.LOGINNAME;
                        oldTsk.ASSIGNTOUSERNAME = user.USERNAME;
                    }
                    ctx.SubmitChanges();
                    EventTaskStatusChanged(oldTsk);
                    return oldTsk;
                }
            }
            else
            {
                using (var ctx = new Model.EasyBpmDBDataContext())
                {
                    tsk.STATUS = TASK_STATUS.激活;
                    tsk.STARTTIME = DateTime.Now;
                    tsk.ENDTIME = DateTime.MaxValue;
                    tsk.PREVTASKID = tsk.TASKID;
                    tsk.TASKID = CreateTaskID(tskInfo.INCIDENT.ID, 0, tsk.TASKID);
                    if (user != null)
                    {
                        tsk.ASSIGNTOUSERID = user.LOGINNAME;
                        tsk.ASSIGNTOUSERNAME = user.USERNAME;
                    }
                    ctx.TASK.InsertOnSubmit(tsk);
                    ctx.SubmitChanges();
                    EventTaskStatusChanged(tsk);
                    return tsk;
                }
            }
        }
        /// <summary>
        /// 创建开始任务
        /// </summary>
        /// <param name="process">流程信息</param>
        /// <param name="inc">实例信息</param>
        /// <returns></returns>
        public Model.TASK CreateBeginTask(Model.PROCESS process, Model.INCIDENT inc)
        {
            var firstStep = process.STEPS.FirstOrDefault();
            Model.TASK tsk = new Model.TASK()
            {
                TASKID = CreateTaskID(inc.ID),
                PROCESSID = inc.PROCESSID,
                PROCESSNAME = inc.PROCESSNAME,
                INCIDENTNO = inc.INCIDENTNO,
                TASKUSERID = inc.INITIATORID,
                TASKUSERNAME = inc.INITIATORNAME,
                ASSIGNTOUSERID = inc.INITIATORID,
                ASSIGNTOUSERNAME = inc.INITIATORNAME,
                STARTTIME = inc.STARTTIME,
                ENDTIME = DateTime.MaxValue,
                COMPLETEDTIMEOUT = DateTime.MaxValue,
                STATUS = TASK_STATUS.激活,
                ISTATUS = inc.STATUS,
                ISTARTTIME = inc.STARTTIME,
                IDATAID = inc.DATAID,
                INITIATORID = inc.INITIATORID,
                INITIATORNAME = inc.INITIATORNAME,
                IENDTIME = inc.ENDTIME,
                SUMMARY = inc.SUMMARY,
                IACTIVESTEPLABELS = "",
                IACTIVEUSERNAMES = "",
                IACTIVETASKOBJECTS = "",
                STEPID = firstStep.STEPID,
                STEPLABEL = firstStep.STEPLABEL,
                OPNION = TASK_OPNION.提交审批,
                COMMENT = "",
                PREVTASKID = null
            };
            if (firstStep.FuncStepTimeOut != null)
            {
                tsk.COMPLETEDTIMEOUT = firstStep.FuncStepTimeOut(tsk);
            }
            EventBeforeTaskSave(tsk);
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                ctx.TASK.InsertOnSubmit(tsk);
                ctx.SubmitChanges();
            }
            EventTaskStatusChanged(tsk);
            return tsk;

        }
        /// <summary>
        /// 完成当前步骤
        /// </summary>
        /// <param name="tskInfo"></param>
        /// <param name="task_opnion"></param>
        /// <param name="comment"></param>
        /// <returns></returns>
        public Model.TASK CompleteTask(Model.TASKINFO tskInfo, Model.STEPUSER user, int task_opnion, string comment)
        {
            Model.TASK tsk;
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                tsk = ctx.TASK.FirstOrDefault(i => i.TASKID == tskInfo.TASK.TASKID);
                tsk.ASSIGNTOUSERID = user.LOGINNAME;
                tsk.ASSIGNTOUSERNAME = user.USERNAME;
                tsk.ENDTIME = DateTime.Now;
                tsk.STATUS = TASK_STATUS.完成;
                tsk.OPNION = task_opnion;
                tsk.COMMENT = comment;
                ctx.SubmitChanges();
            }
            EventTaskStatusChanged(tsk);
            return tsk;
        }
        /// <summary>
        /// 创建后续步骤信息
        /// </summary>
        /// <param name="tskInfo"></param>
        /// <returns></returns>
        public List<Model.TASK> CreateNextTasks(Model.TASKINFO tskInfo)
        {
            //查询后续步骤
            var nextStepIDs = tskInfo.STEP.GetNEXTSTEPIDs(tskInfo.TASK);
            if (nextStepIDs == null || nextStepIDs.Count() == 0)
            {
                //没有后续步骤，可能是流程已完成
                return new List<Model.TASK>();
            }
            var nextSteps = tskInfo.PROCESS.STEPS.Where(i => nextStepIDs.Contains(i.STEPID)).ToList();
            if (nextSteps.Count() == 0)
            {
                throw new Exception("步骤信息未找到，" + string.Join(",", nextStepIDs));
            }

            //根据后续Step创建后续Task
            var nextTasks = new List<Model.TASK>();
            foreach (var nextStep in nextSteps)
            {
                Model.STEPUSER[] users;
                int tskIdx = 0;

                #region   获取用户
                //判断是否是第一个步骤
                if (nextStep._ISBEGINSTEP)
                {
                    users = new Model.STEPUSER[] {
                        new Model.STEPUSER(tskInfo.INCIDENT.INITIATORID, tskInfo.INCIDENT.INITIATORNAME)
                    };
                }
                else
                {
                    users = nextStep.GetSTEPUSERs(tskInfo.INCIDENT);
                }
                #endregion

                //最多同时创建任务数
                if (users.Length > Configuration.Options.MaxActivetTasksCount)
                {
                    users = users.Take(Configuration.Options.MaxActivetTasksCount).ToArray();
                }

                foreach (var user in users)
                {
                    var tsk = new Model.TASK()
                    {
                        TASKID = CreateTaskID(tskInfo.INCIDENT.ID, tskIdx++, tskInfo.TASK.TASKID),
                        PROCESSID = tskInfo.INCIDENT.PROCESSID,
                        PROCESSNAME = tskInfo.INCIDENT.PROCESSNAME,
                        INCIDENTNO = tskInfo.INCIDENT.INCIDENTNO,
                        TASKUSERID = user.LOGINNAME,
                        TASKUSERNAME = user.USERNAME,
                        ASSIGNTOUSERID = user.LOGINNAME,
                        ASSIGNTOUSERNAME = user.USERNAME,
                        STARTTIME = DateTime.Now,
                        ENDTIME = DateTime.MaxValue,
                        COMPLETEDTIMEOUT = DateTime.MaxValue,
                        STATUS = TASK_STATUS.激活,
                        ISTATUS = tskInfo.INCIDENT.STATUS,
                        ISTARTTIME = tskInfo.INCIDENT.STARTTIME,
                        IENDTIME = tskInfo.INCIDENT.ENDTIME,
                        IDATAID = tskInfo.INCIDENT.DATAID,
                        INITIATORID = tskInfo.INCIDENT.INITIATORID,
                        INITIATORNAME = tskInfo.INCIDENT.INITIATORNAME,
                        SUMMARY = tskInfo.INCIDENT.SUMMARY,
                        IACTIVESTEPLABELS = "",
                        IACTIVEUSERNAMES = "",
                        IACTIVETASKOBJECTS = "",
                        STEPID = nextStep.STEPID,
                        STEPLABEL = nextStep.STEPLABEL,
                        OPNION = TASK_OPNION.同意,
                        COMMENT = null,
                        PREVTASKID = tskInfo.TASK.TASKID
                    };
                    if (nextStep.FuncStepTimeOut != null)
                    {
                        tsk.COMPLETEDTIMEOUT = nextStep.FuncStepTimeOut(tsk);
                    }
                    nextTasks.Add(tsk);
                }
            }

            //查找现有激活的步骤，如果步骤已经激活则不再重新创建
            if (!Configuration.Options.EnableActiveSameTask)
            {
                var actTasks = LoadActiveTask(tskInfo.INCIDENT.PROCESSID, tskInfo.INCIDENT.INCIDENTNO);
                foreach (var atask in actTasks)
                {
                    //如果激活的步骤包含当前步骤
                    var dumpTask = nextTasks.FirstOrDefault(i => i.STEPID == atask.STEPID && i.ASSIGNTOUSERID == atask.ASSIGNTOUSERID);
                    if (dumpTask != null)
                    {
                        nextTasks.Remove(dumpTask);
                    }
                }
            }

            EventBeforeTaskSave(nextTasks);
            //保存到数据库
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                ctx.TASK.InsertAllOnSubmit(nextTasks);
                ctx.SubmitChanges();
            }
            EventTaskStatusChanged(nextTasks);
            return nextTasks;
        }
        /// <summary>
        /// 加载Task信息
        /// </summary>
        /// <param name="taskId"></param>
        /// <returns></returns>
        public Model.TASKINFO LoadTask(string taskId)
        {
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                var task = ctx.TASK.FirstOrDefault(i => i.TASKID == taskId);
                if (task == null)
                {
                    throw new Exception("加载Task失败,TASKID:" + taskId);
                }
                var incident = ctx.INCIDENT.FirstOrDefault(i => i.PROCESSID == task.PROCESSID && i.INCIDENTNO == task.INCIDENTNO);
                var process = Configuration.Processes.FirstOrDefault(i => i.PROCESSID == task.PROCESSID);
                var step = process.STEPS.FirstOrDefault(i => i.STEPID == task.STEPID);
                return new Model.TASKINFO() { TASK = task, INCIDENT = incident, PROCESS = process, STEP = step };
            }
        }
        /// <summary>
        /// 加载Task信息
        /// </summary>
        /// <param name="processId"></param>
        /// <param name="incident"></param>
        /// <returns></returns>
        public Model.TASKINFO LoadBeginTask(string processId, int incident)
        {
            var taskid = "";
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                var task = ctx.TASK.FirstOrDefault(i => i.PROCESSID == processId && i.INCIDENTNO == incident && i.TASKID.EndsWith("0B"));
                if (task == null)
                {
                    throw new Exception("加载开始任务失败，ProcessID:" + processId + ",incident:" + incident);
                }
                taskid = task.TASKID;
            }
            return LoadTask(taskid);
        }
        /// <summary>
        /// 加载Task信息
        /// </summary>
        /// <param name="processId"></param>
        /// <param name="incident"></param>
        /// <returns></returns>
        public Model.TASK LoadEndTask(string processId, int incident, bool isComplete = true)
        {
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                var tasks = ctx.TASK.Where(i => i.PROCESSID == processId && i.INCIDENTNO == incident);
                if (isComplete) { tasks = tasks.Where(i => i.ENDTIME != null); }
                var task = tasks.OrderByDescending(i => i.STARTTIME).ThenByDescending(i => i.ENDTIME).FirstOrDefault();
                if (task == null)
                {
                    throw new Exception("加载开始任务失败，ProcessID:" + processId + ",incident:" + incident);
                }
                return task;
            }
        }

        /// <summary>
        /// 查询激活的步骤
        /// </summary>
        /// <param name="processID"></param>
        /// <param name="incidentNO"></param>
        /// <param name="stepId"></param>
        /// <param name="tskStatus"></param>
        /// <returns></returns>
        public List<Model.TASK> LoadActiveTask(string processID, int incidentNO, string stepId = "")
        {
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                var query = ctx.TASK.Where(i => i.PROCESSID == processID && i.INCIDENTNO == incidentNO && i.STATUS == TASK_STATUS.激活);
                if (!string.IsNullOrEmpty(stepId))
                {
                    query = query.Where(i => i.STEPID == stepId);
                }
                return query.ToList();
            }
        }
        /// <summary>
        /// 查找所有步骤
        /// </summary>
        /// <param name="processID"></param>
        /// <param name="incidentNO"></param>
        /// <param name="stepId"></param>
        /// <returns></returns>
        public List<Model.TASK> LoadTasks(string processID, int incidentNO, string stepId = "")
        {
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                var query = ctx.TASK.Where(i => i.PROCESSID == processID && i.INCIDENTNO == incidentNO);
                if (!string.IsNullOrEmpty(stepId))
                {
                    query = query.Where(i => i.STEPID == stepId);
                }
                return query.ToList();
            }
        }
        /// <summary>
        /// 修改实例当前激活的Task状态
        /// </summary>
        /// <param name="taskId">流程ID</param>
        /// <param name="tskStatus">步骤状态，TASK_STATUS</param>
        /// <returns></returns>
        public Model.TASK SetActiveTaskStatus(string taskId, int tskStatus)
        {
            return SetActiveTaskStatus("", 0, "", taskId, tskStatus).FirstOrDefault();
        }
        /// <summary>
        /// 修改实例当前激活的Task状态
        /// </summary>
        /// <param name="processID">流程ID</param>
        /// <param name="incidentNO">实例号</param>
        /// <param name="tskStatus">步骤状态，TASK_STATUS</param>
        /// <returns></returns>
        public List<Model.TASK> SetActiveTaskStatus(string processID, int incidentNO, int tskStatus)
        {
            return SetActiveTaskStatus(processID, incidentNO, "", "", tskStatus);
        }
        /// <summary>
        /// 修改实例当前激活的Task状态
        /// </summary>
        /// <param name="processID">流程ID</param>
        /// <param name="incidentNO">实例号</param>
        /// <param name="tskStatus">步骤状态，TASK_STATUS</param>
        /// <returns></returns>
        public List<Model.TASK> SetActiveTaskStatus(string processID, int incidentNO, string stepId, string TaskId, int tskStatus)
        {
            List<Model.TASK> tsks;
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                var query = ctx.TASK.AsQueryable();
                if (string.IsNullOrEmpty(TaskId))
                {
                    query = ctx.TASK.Where(i => i.PROCESSID == processID && i.INCIDENTNO == incidentNO && i.STATUS == TASK_STATUS.激活);
                    if (!string.IsNullOrEmpty(stepId))
                    {
                        query = query.Where(i => i.STEPID == stepId);
                    }
                }
                else
                {
                    query = ctx.TASK.Where(i => i.TASKID == TaskId);
                }
                tsks = query.ToList();
                foreach (var tsk in tsks)
                {
                    tsk.STATUS = tskStatus;
                    switch (tskStatus)
                    {
                        case TASK_STATUS.激活:
                            tsk.ENDTIME = DateTime.MaxValue;
                            break;
                        case TASK_STATUS.抄送:
                        case TASK_STATUS.退回:
                        case TASK_STATUS.跳过:
                        case TASK_STATUS.完成:
                        case TASK_STATUS.撤回:
                        case TASK_STATUS.终止:
                        case TASK_STATUS.错误:
                            tsk.ENDTIME = DateTime.Now;
                            break;
                        default:
                            throw new Exception("步骤状态 " + tskStatus + " 设置错误，请参考 TASK_STATUS");
                    }
                }
                ctx.SubmitChanges();
            }
            if (tskStatus != TASK_STATUS.激活) { EventTaskStatusChanged(tsks); }
            return tsks;
        }
        /// <summary>
        /// 步骤状态变更事件
        /// </summary>
        /// <param name="tsk"></param>
        public void EventTaskStatusChanged(Model.TASK tsk)
        {
            EventTaskStatusChanged(new List<Model.TASK> { tsk });
        }
        /// <summary>
        /// 步骤状态变更事件
        /// </summary>
        /// <param name="tsk"></param>
        public void EventBeforeTaskSave(Model.TASK tsk)
        {
            EventBeforeTaskSave(new List<Model.TASK> { tsk });
        }
        /// <summary>
        /// 步骤状态变更事件
        /// </summary>
        /// <param name="tsk"></param>
        public void EventTaskStatusChanged(List<Model.TASK> tsks)
        {
            if (tsks == null || tsks.Count == 0) { return; }
            foreach (var tsk in tsks)
            {
                var p = Configuration.Processes.FirstOrDefault(i => i.PROCESSID == tsk.PROCESSID);
                try
                {
                    if (p == null) { throw new Exception("查找流程信息出错，PROCESSID:" + tsk.PROCESSID); }
                    var step = p.STEPS.FirstOrDefault(i => i.STEPID == tsk.STEPID);
                    if (step == null) { throw new Exception("查找步骤信息出错，STEPID:" + tsk.STEPID); }
                    if (step.OnTaskStatusChanged == null && p.OnTaskStatusChanged == null)
                    {
                        continue;
                    }
                    Configuration.Logger(new Model.LOG(tsk.INCIDENTNO, tsk.PROCESSNAME, LOG_LEVEL.EVENT, "任务状态变更事件,STATUS:" + tsk.STATUS + ",TASKID:" + tsk.TASKID));
                    step.OnTaskStatusChanged?.Invoke(tsk);
                    p.OnTaskStatusChanged?.Invoke(tsk);
                }
                catch (Exception exp)
                {
                    SetTaskError(tsk);
                    Configuration.Logger(new Model.LOG(tsk.INCIDENTNO, tsk.PROCESSNAME, LOG_LEVEL.ERROR, "任务状态变更事件执行出错", exp.ToString()));
                }
            }
        }
        /// <summary>
        /// 步骤状态变更事件
        /// </summary>
        /// <param name="tsk"></param>
        public void EventBeforeTaskSave(List<Model.TASK> tsks)
        {
            if (tsks == null || tsks.Count == 0) { return; }
            foreach (var tsk in tsks)
            {
                var p = Configuration.Processes.FirstOrDefault(i => i.PROCESSID == tsk.PROCESSID);
                try
                {
                    if (p == null) { throw new Exception("查找流程信息出错，PROCESSID:" + tsk.PROCESSID); }
                    if (p == null && p.OnBeforeTaskSave == null)
                    {
                        continue;
                    }
                    Configuration.Logger(new Model.LOG(tsk.INCIDENTNO, tsk.PROCESSNAME, LOG_LEVEL.EVENT, "任务保存前,STATUS:" + tsk.STATUS + ",TASKID:" + tsk.TASKID));
                    p.OnBeforeTaskSave?.Invoke(tsk);
                }
                catch (Exception exp)
                {
                    SetTaskError(tsk);
                    Configuration.Logger(new Model.LOG(tsk.INCIDENTNO, tsk.PROCESSNAME, LOG_LEVEL.ERROR, "任务保存前", exp.ToString()));
                }
            }
        }
        /// <summary>
        /// 创建TaskId
        /// </summary>
        /// <param name="isFirstStep"></param>
        /// <returns></returns>
        string CreateTaskID(int incID, int idx = 0, string prevTaskID = null)
        {
            ///TaskID 规则
            ///7实例ID
            ///3位是审批级数
            ///2位创建序号（同一层级 排序，目前字段没有用到）
            ///6位GUID
            ///2位0B表示开始步骤或GUID
            var isBeginStep = string.IsNullOrEmpty(prevTaskID);
            var prevLevel = 0;
            //var prevIdx = 0;
            StringBuilder id = new StringBuilder();

            id.Append(incID.ToString("X7"));

            var taskLevel = "";
            if (isBeginStep)
            {
                taskLevel = "000";
            }
            else
            {
                int.TryParse(prevTaskID.Substring(7, 3), out prevLevel);
                //int.TryParse(prevTaskID.Substring(10, 2), out prevIdx);
                taskLevel = (prevLevel + 1).ToString("X3");
            }
            id.Append(taskLevel);

            //var pIdxAdd = 0;
            //if (prevIdx < 3 * 3 * 3)
            //{
            //    pIdxAdd = prevIdx * 3;
            //}
            //else
            //{
            //    pIdxAdd = prevIdx;
            //}
            //id.Append((pIdxAdd + idx).ToString("X2"));
            id.Append(idx.ToString("X2"));

            var guid = Guid.NewGuid().ToString().Replace("-", "").ToUpper().Substring(14, 8);
            if (isBeginStep)
            {
                guid = (guid.Substring(0, 6) + "0B");
            }
            else
            {
                if (guid.EndsWith("0B"))
                {
                    guid = guid.Substring(0, 6) + "B0";
                }
            }
            id.Append(guid);

            return id.ToString();
        }

        void SetTaskError(Model.TASK tsk)
        {
            //tsk.STATUS = TASK_STATUS.错误;
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                var t = ctx.TASK.FirstOrDefault(i => i.TASKID == tsk.TASKID);
                if (t != null)
                {
                    t.STATUS = TASK_STATUS.错误;
                    ctx.SubmitChanges();
                }
            }
            new IncidentCore().ResetIncidentInfo(tsk.PROCESSID, tsk.INCIDENTNO);
        }
    }
}
