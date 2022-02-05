using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm.Core
{
    internal class IncidentCore
    {
        /// <summary>
        /// 创建实例
        /// </summary>
        /// <param name="process">流程信息</param>
        /// <param name="summary">流程备注</param>
        /// <returns></returns>
        public Model.INCIDENT CreateIncident(Model.PROCESS process, Model.STEPUSER user, string summary, string dataID)
        {
            Model.INCIDENT inc = new Model.INCIDENT()
            {
                INCIDENTNO = process.GetNewIncident(),
                DATAID = dataID,
                PROCESSID = process.PROCESSID,
                PROCESSNAME = process.PROCESSNAME,
                SUMMARY = summary,
                STARTTIME = DateTime.Now,
                ENDTIME = DateTime.MaxValue,
                STATUSTIME = DateTime.Now,
                STATUS = INCIDENT_STATUS.操作中,
                INITIATORID = user.LOGINNAME,
                INITIATORNAME = user.USERNAME
            };
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                //流程实例创建前
                EventBeforeIncidentCreate(process, inc);

                ctx.INCIDENT.InsertOnSubmit(inc);
                ctx.SubmitChanges();

                //执行事件
                EventIncidentCreated(process, inc);
                if (Configuration.Options.CallEventWhenIncidentOperating) { EventIncidentStatusChanged(process.PROCESSID, inc); }
                return inc;
            }

        }

        /// <summary>
        /// 删除流程
        /// </summary>
        /// <param name="processId"></param>
        /// <param name="incidentNo"></param>
        /// <returns></returns>
        public Model.INCIDENT DeleteIncidentData(Model.PROCESS process, int incidentNo)
        {
            var processId = process.PROCESSID;
            //删除流程及对应任务
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                var inc = ctx.INCIDENT.FirstOrDefault(i => i.PROCESSID == processId && i.INCIDENTNO == incidentNo);
                if (inc != null)
                {
                    inc.STATUS = INCIDENT_STATUS.删除;
                    ctx.ExecuteCommand("DELETE [TASK] WHERE PROCESSID={0} AND INCIDENTNO={1}", processId, incidentNo);
                    ctx.ExecuteCommand("DELETE [INCIDENT] WHERE PROCESSID={0} AND INCIDENTNO={1}", processId, incidentNo);
                    EventIncidentDeleted(process, inc);
                }
                return inc;
            }
        }

        /// <summary>
        /// 检查流程激活状态
        /// </summary>
        /// <param name="processId">流程ID</param>
        /// <param name="incidentNo">实例号</param>
        /// <returns></returns>
        public Model.INCIDENT ResetIncidentInfo(string processId, int incidentNo, bool forceEvent = false)
        {
            bool callEvent = false;
            Model.INCIDENT inc;
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                //查找Incident 和 Task
                inc = ctx.INCIDENT.Where(i => i.PROCESSID == processId && i.INCIDENTNO == incidentNo).FirstOrDefault();

                if (inc == null) { throw new Exception("未找到流程实例，PROCESSID:" + processId + ",INCIDENTNO:" + incidentNo); }
                var tasks = ctx.TASK.Where(i => i.PROCESSID == processId && i.INCIDENTNO == incidentNo).ToList();
                var activeTasks = tasks.Where(i => i.STATUS == TASK_STATUS.激活).ToList();
                inc.SetActiveTasksJson(activeTasks);

                ///判断逻辑
                /// 步骤有错误
                ///     停滞
                /// 步骤有激活
                ///     审批中
                /// 其他
                ///     完成

                if (tasks.Exists(i => i.STATUS == TASK_STATUS.错误))
                {
                    inc.STATUS = INCIDENT_STATUS.停滞;
                    inc.ENDTIME = DateTime.Now;
                }
                else if (activeTasks.Count > 0)
                {
                    ///仍有激活的实例
                    if (new int[] { INCIDENT_STATUS.完成, INCIDENT_STATUS.终止, INCIDENT_STATUS.停滞 }.Contains(inc.STATUS))
                    {
                        inc.STATUS = INCIDENT_STATUS.审批中;
                        callEvent = true;
                    }
                    if (inc.STATUS == INCIDENT_STATUS.操作中 || inc.STATUS == INCIDENT_STATUS.撤回)
                    {
                        inc.STATUS = INCIDENT_STATUS.审批中;
                        callEvent = forceEvent || Configuration.Options.CallEventWhenIncidentOperating;
                    }
                    inc.ENDTIME = DateTime.MaxValue;
                }
                else
                {
                    ///检查流程完成
                    if (inc.STATUS == INCIDENT_STATUS.审批中 || inc.STATUS == INCIDENT_STATUS.操作中 || inc.STATUS == INCIDENT_STATUS.撤回)
                    {
                        inc.STATUS = INCIDENT_STATUS.完成;
                        inc.ENDTIME = DateTime.Now;
                        callEvent = true;
                    }
                }
                ctx.SubmitChanges();
            }

            //更新Task信息
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                ctx.CommandTimeout = 30 * 5;

                if (Configuration.Options.UpdateSummary2Task)
                {
                    ctx.ExecuteCommand(
                        "UPDATE TASK SET ISTATUS={2},IENDTIME={3},IACTIVETASKOBJECTS={4},SUMMARY={5},IACTIVESTEPLABELS={6},IACTIVEUSERNAMES={7} WHERE PROCESSID={0} AND INCIDENTNO={1}",
                        processId,
                        incidentNo,
                        inc.STATUS,
                        inc.ENDTIME,
                        inc.ACTIVETASKOBJECTS,
                        inc.SUMMARY,
                        inc.ACTIVESTEPLABELS,
                        inc.ACTIVEUSERNAMES);
                }
                else
                {
                    ctx.ExecuteCommand(
                        "UPDATE TASK SET ISTATUS={2},IENDTIME={3},IACTIVETASKOBJECTS={4} WHERE PROCESSID={0} AND INCIDENTNO={1}",
                        processId,
                        incidentNo,
                        inc.STATUS,
                        inc.ENDTIME,
                        inc.ACTIVETASKOBJECTS);
                }
            }

            //执行事件
            if (callEvent) { EventIncidentStatusChanged(processId, inc); }

            return inc;
        }

        /// <summary>
        /// 设置实例状态
        /// </summary>
        /// <param name="processId">流程ID</param>
        /// <param name="incidentNo">实例号</param>
        /// <param name="incStatus">流程状态，枚举 INCIDENT_STATUS</param>
        /// <returns>设置完成后的实例</returns>
        public Model.INCIDENT SetIncidentStatus(string processId, int incidentNo, int incStatus)
        {
            bool callEvent = false;
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                var inc = ctx.INCIDENT.FirstOrDefault(i => i.PROCESSID == processId && i.INCIDENTNO == incidentNo);
                if (inc == null)
                {
                    throw new Exception("实例不存在，ProcessID:" + processId + ",IncidentNO:" + incidentNo);
                }
                callEvent = inc.STATUS != incStatus;
                inc.STATUS = incStatus;
                inc.STATUSTIME = DateTime.Now;
                switch (incStatus)
                {
                    case INCIDENT_STATUS.停滞:
                    case INCIDENT_STATUS.完成:
                    case INCIDENT_STATUS.终止:
                    case INCIDENT_STATUS.删除:
                        inc.ENDTIME = DateTime.Now;
                        break;
                    case INCIDENT_STATUS.审批中:
                    case INCIDENT_STATUS.撤回:
                        inc.ENDTIME = DateTime.MaxValue;
                        break;
                    case INCIDENT_STATUS.操作中:
                        callEvent = Configuration.Options.CallEventWhenIncidentOperating;
                        break;
                    default:
                        throw new Exception("实例状态值错误，请参考 INCIDENT_STATUS");
                }
                ctx.SubmitChanges();

                //执行事件
                if (callEvent) { EventIncidentStatusChanged(processId, inc); }

                return inc;
            }
        }

        /// <summary>
        /// 设置流程在等待中
        /// </summary>
        /// <param name="processId"></param>
        /// <param name="incidentNo"></param>
        /// <returns></returns>
        public Model.INCIDENT Waitting(string processId, int incidentNo)
        {
            return SetIncidentStatus(processId, incidentNo, INCIDENT_STATUS.操作中);
        }

        /// <summary>
        /// 流程实例结束事件
        /// </summary>
        /// <param name="p">流程信息</param>
        /// <param name="inc">实例信息</param>
        public void EventIncidentStatusChanged(string processID, Model.INCIDENT inc)
        {
            try
            {
                var p = Configuration.Processes.FirstOrDefault(i => i.PROCESSID == processID);
                if (p == null) { throw new Exception("查找流程信息出错，ProcessID:" + processID); }
                if (p.OnIncidentStatusChanged == null) return;
                Configuration.Logger(new Model.LOG(inc.INCIDENTNO, inc.PROCESSNAME, LOG_LEVEL.EVENT, "启动实例状态变更事件,STATUS:" + inc.STATUS));
                p.OnIncidentStatusChanged?.Invoke(inc);
            }
            catch (Exception exp)
            {
                Configuration.Logger(new Model.LOG(inc.INCIDENTNO, inc.PROCESSNAME, LOG_LEVEL.EVENT, "实例状态变更事件执行出错", exp.ToString()));
            }
        }

        /// <summary>
        /// 流程创建事件
        /// </summary>
        /// <param name="process"></param>
        /// <param name="inc"></param>
        public void EventIncidentCreated(Model.PROCESS process, Model.INCIDENT inc)
        {
            try
            {
                if (process.OnIncidentCreated == null) { return; }
                Configuration.Logger(new Model.LOG(inc.INCIDENTNO, inc.PROCESSNAME, LOG_LEVEL.EVENT, "启动实例创建事件,STATUS:" + inc.STATUS));
                process.OnIncidentCreated?.Invoke(inc);
            }
            catch (Exception exp)
            {
                Configuration.Logger(new Model.LOG(inc.INCIDENTNO, inc.PROCESSNAME, LOG_LEVEL.ERROR, "实例创建事件执行出错", exp.ToString()));
            }
        }

        /// <summary>
        /// 流程创建事件
        /// </summary>
        /// <param name="process"></param>
        /// <param name="inc"></param>
        public void EventBeforeIncidentCreate(Model.PROCESS process, Model.INCIDENT inc)
        {
            try
            {
                if (process.OnBeforeIncidentCreate == null) { return; }
                Configuration.Logger(new Model.LOG(inc.INCIDENTNO, inc.PROCESSNAME, LOG_LEVEL.EVENT, "启动实例创建事件前,STATUS:" + inc.STATUS));
                process.OnBeforeIncidentCreate?.Invoke(inc);
            }
            catch (Exception exp)
            {
                Configuration.Logger(new Model.LOG(inc.INCIDENTNO, inc.PROCESSNAME, LOG_LEVEL.ERROR, "实例创建事件执行出错", exp.ToString()));
            }
        }
        /// <summary>
        /// 流程删除事件
        /// </summary>
        /// <param name="process"></param>
        /// <param name="inc"></param>
        public void EventIncidentDeleted(Model.PROCESS process, Model.INCIDENT inc)
        {
            try
            {
                if (process.OnIncidentDataDeleted == null) { return; }
                Configuration.Logger(new Model.LOG(inc.INCIDENTNO, inc.PROCESSNAME, LOG_LEVEL.EVENT, "启动实例删除事件,STATUS:" + inc.STATUS));
                process.OnIncidentStatusChanged?.Invoke(inc);
                process.OnIncidentDataDeleted?.Invoke(inc);
            }
            catch (Exception exp)
            {
                Configuration.Logger(new Model.LOG(inc.INCIDENTNO, inc.PROCESSNAME, LOG_LEVEL.ERROR, "实例删除事件执行出错", exp.ToString()));
            }
        }

        /// <summary>
        /// 获取所有流程最大实例号
        /// </summary>
        /// <returns></returns>
        public Dictionary<string, int> GetMaxIncidentNo()
        {
            var result = new Dictionary<string, int>();
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                var incNos = ctx
                    .INCIDENT
                    .GroupBy(i => i.PROCESSID)
                    .Select(i => new { PROCESSID = i.Key, MAXINCIDENTNO = i.Max(inc => inc.INCIDENTNO) }).ToList();
                if (incNos.Count() > 0)
                {
                    incNos.ForEach(i => { result.Add(i.PROCESSID, i.MAXINCIDENTNO); });
                }
            }
            return result;
        }

        /// <summary>
        /// 获取流程实例号
        /// </summary>
        /// <param name="pid"></param>
        /// <returns></returns>
        public static int CreateIncidentNO(string pid)
        {
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                var result = ctx.ExecuteQuery<Model.INC_NO>("EXEC [dbo].[pCreateIncNO] {0}", pid).ToList();
                if (result.Any())
                {
                    return result.FirstOrDefault().No;
                }
            }
            return 0;
        }
    }
}
