using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm
{
    /// <summary>
    /// 流程任务处理接口
    /// </summary>
    public class TaskApi
    {
        #region 任务属性

        private List<Model.TASK> _CurrentTASKs;

        /// <summary>
        /// 当前操作的步骤
        /// </summary>
        public Model.TASK CurrentTASK { get; set; }

        /// <summary>
        /// 当前任务列表
        /// </summary>
        public List<Model.TASK> CurrentTASKs
        {
            get
            {
                if (_CurrentTASKs == null)
                {
                    if (CurrentTASK != null)
                    {
                        return new List<Model.TASK>() { CurrentTASK };
                    }
                    else
                    {
                        return new List<Model.TASK>();
                    }
                }
                return _CurrentTASKs;
            }
            set
            {
                _CurrentTASKs = value;
            }
        }

        /// <summary>
        /// 提交后创建的后续步骤
        /// </summary>
        public List<Model.TASK> NextTASKs { get; set; } = new List<Model.TASK>();

        /// <summary>
        /// 当前实例信息
        /// </summary>
        public Model.INCIDENT CurrentIncident { get; set; }

        #endregion

        #region 任务操作
        /// <summary>
        /// 终止特定步骤
        /// </summary>
        /// <param name="taskID">任务ID</param>
        /// <param name="error">返回错误信息</param>
        /// <returns>是否操作成功</returns>
        public bool AbortTask(string taskID, out string error)
        {
            error = "";
            var INCIDENT = 0;
            var PROCESS = "";
            try
            {
                var tsk = new Core.TaskCore().SetActiveTaskStatus(taskID, TASK_STATUS.终止);
                if (tsk != null)
                {
                    new Core.IncidentCore().ResetIncidentInfo(tsk.PROCESSID, tsk.INCIDENTNO);
                    INCIDENT = tsk.INCIDENTNO;
                    PROCESS = tsk.PROCESSNAME;
                    CurrentTASK = tsk;
                    Configuration.Logger(new Model.LOG(INCIDENT, PROCESS, LOG_LEVEL.INFO, "终止步骤成功，TaskID:" + taskID));
                    return true;
                }
                else
                {
                    error = "Task信息未找到，TaskID:" + taskID;
                    Configuration.Logger(new Model.LOG(INCIDENT, PROCESS, LOG_LEVEL.ERROR, error));
                    return false;
                }
            }
            catch (Exception exp)
            {
                Configuration.Logger(new Model.LOG(INCIDENT, PROCESS, LOG_LEVEL.ERROR, "[激活步骤错误]" + exp.Message, exp.ToString()));
                error = exp.Message;
                return false;
            }
        }
        /// <summary>
        /// 激活特定步骤
        /// </summary>
        /// <param name="taskID">任务ID</param>
        /// <param name="error">返回错误信息</param>
        /// <returns>是否操作成功</returns>
        public bool ActiveTask(string taskID, out string error)
        {
            return AssignTask(taskID, null, out error);
        }
        /// <summary>
        /// 指派流程处理人
        /// </summary>
        /// <param name="taskID">任务ID</param>
        /// <param name="user">用户</param>
        /// <param name="error">返回错误信息</param>
        /// <returns>是否操作成功</returns>
        public bool AssignTask(string taskID, Model.STEPUSER user, out string error)
        {
            error = "";
            string PROCESS = "";
            int INCIDENT = 0;
            string act = user == null ? "激活" : "指派";
            try
            {
                var tsk = new Core.TaskCore().ActiveTask(taskID, user);
                new Core.IncidentCore().ResetIncidentInfo(tsk.PROCESSID, tsk.INCIDENTNO);
                PROCESS = tsk.PROCESSNAME;
                INCIDENT = tsk.INCIDENTNO;
                CurrentTASK = tsk;
                Configuration.Logger(new Model.LOG(INCIDENT, PROCESS, LOG_LEVEL.INFO, act + "流程成功，TaskID:" + taskID + ",USER:" + (user == null ? "" : user.ToString())));
                return true;
            }
            catch (Exception exp)
            {
                Configuration.Logger(new Model.LOG(INCIDENT, PROCESS, LOG_LEVEL.ERROR, act + "流程出错" + exp.Message, exp.ToString()));
                error = exp.Message;
                return false;
            }
        }
        /// <summary>
        /// 停滞流程
        /// </summary>
        /// <param name="taskID"></param>
        /// <param name="error"></param>
        /// <returns></returns>
        public bool StalledTask(string taskID, out string error) {
            error = "";
            string PROCESS = "";
            int INCIDENT = 0;
            string act = "停滞";
            try
            {
                var tsk = new Core.TaskCore().SetActiveTaskStatus(taskID, TASK_STATUS.错误);
                new Core.IncidentCore().ResetIncidentInfo(tsk.PROCESSID, tsk.INCIDENTNO);
                PROCESS = tsk.PROCESSNAME;
                INCIDENT = tsk.INCIDENTNO;
                CurrentTASK = tsk;
                Configuration.Logger(new Model.LOG(INCIDENT, PROCESS, LOG_LEVEL.INFO, act + "流程成功，TaskID:" + taskID));
                return true;
            }
            catch (Exception exp)
            {
                Configuration.Logger(new Model.LOG(INCIDENT, PROCESS, LOG_LEVEL.ERROR, act + "流程出错" + exp.Message, exp.ToString()));
                error = exp.Message;
                return false;
            }
        }
        /// <summary>
        /// 加载TaskInfo
        /// </summary>
        /// <param name="taskID">任务ID</param>
        /// <returns>任务对象</returns>
        public Model.TASKINFO LoadTask(string taskID, out string error)
        {
            error = "";
            var INCIDENT = 0;
            var PROCESS = "";
            try
            {
                var tsk = new Core.TaskCore().LoadTask(taskID);
                CurrentTASK = tsk.TASK;
                CurrentIncident = tsk.INCIDENT;
                INCIDENT = tsk.TASK.INCIDENTNO;
                PROCESS = tsk.INCIDENT.PROCESSNAME;
                Configuration.Logger(new Model.LOG(INCIDENT, PROCESS, LOG_LEVEL.INFO, "加载TaskInfo成功，TaskID:" + taskID));
                return tsk;
            }
            catch (Exception exp)
            {
                Configuration.Logger(new Model.LOG(INCIDENT, PROCESS, LOG_LEVEL.ERROR, "加载TaskInfo错误," + taskID + "," + exp.Message, exp.ToString()));
                error = exp.Message;
                return null;

            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="processId"></param>
        /// <param name="incident"></param>
        /// <param name="stepId"></param>
        /// <param name="error"></param>
        /// <returns></returns>
        public List<Model.TASK> LoadTasks(string processId, int incident, string stepId, out string error)
        {
            error = "";
            try
            {
                var tmp = new Core.TaskCore().LoadTasks(processId, incident, stepId);
                CurrentTASKs = tmp;
                Configuration.Logger(new Model.LOG(incident, processId, LOG_LEVEL.INFO, "加载TaskInfo成功，" + processId + "," + incident));
                return tmp;
            }
            catch (Exception exp)
            {
                Configuration.Logger(new Model.LOG(incident, processId, LOG_LEVEL.ERROR, "查询激活的步骤错误," + processId + "," + incident + "," + exp.Message, exp.ToString()));
                error = exp.Message;
                return new List<Model.TASK>();
            }
        }
        /// <summary>
        /// 加载TaskInfo
        /// </summary>
        /// <param name="processId">流程ID</param>
        /// <param name="incident">实例号</param>
        /// <param name="error">错误信息</param>
        /// <returns>任务对象</returns>
        public Model.TASKINFO LoadFirstTask(string processId, int incident, out string error)
        {
            error = "";
            try
            {
                var tsk = new Core.TaskCore().LoadBeginTask(processId, incident);
                CurrentTASK = tsk.TASK;
                CurrentIncident = tsk.INCIDENT;
                Configuration.Logger(new Model.LOG(incident, processId, LOG_LEVEL.INFO, "加载TaskInfo成功，" + processId + "," + incident));
                return tsk;
            }
            catch (Exception exp)
            {
                Configuration.Logger(new Model.LOG(incident, processId, LOG_LEVEL.ERROR, "加载TaskInfo错误" + exp.Message, exp.ToString()));
                error = exp.Message;
                return null;
            }
        }
        public Model.TASK LoadLastCompleteTask(string processId, int incident, out string error) {
            error = "";
            try
            {
                var tsk = new Core.TaskCore().LoadEndTask(processId, incident);
                CurrentTASK = tsk;
                CurrentIncident = null;
                Configuration.Logger(new Model.LOG(incident, processId, LOG_LEVEL.INFO, "加载TaskInfo成功，" + processId + "," + incident));
                return tsk;
            }
            catch (Exception exp)
            {
                Configuration.Logger(new Model.LOG(incident, processId, LOG_LEVEL.ERROR, "加载TaskInfo错误" + exp.Message, exp.ToString()));
                error = exp.Message;
                return null;
            }
        }
        /// <summary>
        /// 查找正在激活的步骤
        /// </summary>
        /// <param name="processId">流程ID</param>
        /// <param name="incident">实例号</param>
        /// <param name="stepId">步骤ID</param>
        /// <param name="error">错误信息</param>
        /// <returns>任务对象集合</returns>
        public List<Model.TASK> LoadActiveTasks(string processId, int incident, string stepId, out string error)
        {
            error = "";
            try
            {
                var tmp = new Core.TaskCore().LoadActiveTask(processId, incident, stepId);
                CurrentTASKs = tmp;
                Configuration.Logger(new Model.LOG(incident, processId, LOG_LEVEL.INFO, "加载TaskInfo成功，" + processId + "," + incident));
                return tmp;
            }
            catch (Exception exp)
            {
                Configuration.Logger(new Model.LOG(incident, processId, LOG_LEVEL.ERROR, "查询激活的步骤错误," + processId + "," + incident + "," + exp.Message, exp.ToString()));
                error = exp.Message;
                return new List<Model.TASK>();
            }
        }
        /// <summary>
        /// 查找正在激活的步骤
        /// </summary>
        /// <param name="processId">流程ID</param>
        /// <param name="incident">实例号</param>
        /// <param name="error">错误信息</param>
        /// <returns>任务对象集合</returns>
        public List<Model.TASK> LoadActiveTasks(string processId, int incident, out string error)
        {
            return LoadActiveTasks(processId, incident, string.Empty, out error);
        }
        /// <summary>
        /// 提交流程
        /// </summary>
        /// <param name="ProcessID">任务ID或创建流程</param>
        /// <param name="User">提交流程用户</param>
        /// <param name="TASK_OPNION">提交意见</param>
        /// <param name="SummaryOrComment">意见说明</param>
        /// <param name="DataID">业务数据ID</param>
        /// <param name="error">返回错误</param>
        /// <returns>是否操作成功</returns>
        public bool SendTask(string ProcessID, Model.STEPUSER user, int TASK_OPNION, string Summary, string DataID, out string error)
        {
            error = "";
            string PROCESS = "";
            int INCIDENT = 0;
            string TASKID = "";
            bool isInit = false;
            try
            {
                var process = Configuration.Processes.FirstOrDefault(i => i.PROCESSID == ProcessID);
                if (process != null)
                {
                    isInit = true;
                    //创建初始化步骤
                    var inc = new Core.IncidentCore().CreateIncident(process, user, Summary, DataID);
                    INCIDENT = inc.INCIDENTNO;
                    var tsk = new Core.TaskCore().CreateBeginTask(process, inc);
                    PROCESS = tsk.PROCESSNAME;
                    TASKID = tsk.TASKID;
                    //提交第一个步骤
                    return SendTask(tsk.TASKID, user, TASK_OPNION, Summary, out error);
                }
                else
                {
                    //加载Task信息
                    var tskCore = new Core.TaskCore();
                    var tsk = tskCore.LoadTask(ProcessID);
                    PROCESS = tsk.TASK.PROCESSNAME;
                    INCIDENT = tsk.INCIDENT.INCIDENTNO;
                    TASKID = tsk.TASK.TASKID;

                    //task信息赋值
                    tsk.TASK.OPNION = TASK_OPNION;
                    tsk.TASK.COMMENT = Summary;
                    tsk.TASK.ASSIGNTOUSERID = user.LOGINNAME;
                    tsk.TASK.ASSIGNTOUSERNAME = user.USERNAME;

                    //检查流程状态
                    if (tsk.TASK.STATUS != TASK_STATUS.激活)
                    {
                        throw new Exception("步骤非激活状态，不能提交");
                    }

                    //设置实例操作状态
                    if (tsk.INCIDENT.STATUS != INCIDENT_STATUS.操作中)
                    {
                        new Core.IncidentCore().Waitting(tsk.INCIDENT.PROCESSID, tsk.INCIDENT.INCIDENTNO);
                    }
                    else
                    {
                        ///当不是发起步骤的时候，如果实例状态是操作中，则判断时间是否超过60秒，如果没有超过不允许该实例进行提交操作。
                        if (!tsk.TASK.ISINITIATE)
                        {
                            if ((DateTime.Now - tsk.INCIDENT.STATUSTIME).TotalSeconds < Configuration.Options.TaskOperatingTimeOut)
                            {
                                throw new Exception("流程正在操作中，请稍后再提交");
                            }
                        }
                    }

                    //提交现有流程
                    NextTASKs = tskCore.CreateNextTasks(tsk);
                    tskCore.CompleteTask(tsk, user, TASK_OPNION, Summary);
                    new Core.IncidentCore().ResetIncidentInfo(tsk.INCIDENT.PROCESSID, tsk.INCIDENT.INCIDENTNO, tsk.TASK.ISINITIATE);
                    CurrentTASK = tsk.TASK;
                    CurrentIncident = tsk.INCIDENT;
                }
                Configuration.Logger(new Model.LOG(INCIDENT, PROCESS, LOG_LEVEL.INFO, "任务提交成功,TASKID:" + TASKID));
                return true;
            }
            catch (Exception exp)
            {
                if (isInit && INCIDENT > 0) { new IncidentApi().DeleteIncident(ProcessID, INCIDENT, out string err2, true); }
                Configuration.Logger(new Model.LOG(INCIDENT, PROCESS, LOG_LEVEL.ERROR, "任务提交成功错误" + exp.Message, exp.ToString()));
                error = exp.Message;
                return false;
            }
        }
        /// <summary>
        /// 提交流程
        /// </summary>
        /// <param name="taskID">任务ID或创建流程</param>
        /// <param name="User">提交流程用户</param>
        /// <param name="TASK_OPNION">提交意见</param>
        /// <param name="Comment">意见说明</param>
        /// <param name="error">返回错误</param>
        /// <returns>是否操作成功</returns>
        public bool SendTask(string taskID, Model.STEPUSER user, int TASK_OPNION, string Comment, out string error)
        {
            return SendTask(taskID, user, TASK_OPNION, Comment, "", out error);
        }

        /// <summary>
        /// 提交流程到队列
        /// </summary>
        /// <param name="taskID">任务ID或创建流程</param>
        /// <param name="User">提交流程用户</param>
        /// <param name="TASK_OPNION">提交意见</param>
        /// <param name="Comment">意见说明</param>
        /// <param name="error">返回错误</param>
        /// <returns>是否操作成功</returns>
        public bool SendTaskAnsync(string taskID, Model.STEPUSER user, int TASK_OPNION, string Comment, out string error)
        {
            error = string.Empty;
            try
            {
                new Core.TaskQueue().Add(taskID, user, TASK_OPNION, Comment);
                return true;
            }
            catch (Exception exp)
            {
                error = exp.Message;
                return false;
            }
        }
        #endregion

        #region 步骤操作
        /// <summary>
        /// 终止正在激活的步骤
        /// </summary>
        /// <param name="processId">流程ID</param>
        /// <param name="incidentNO">实例号</param>
        /// <param name="stepID">步骤ID</param>
        /// <param name="error">错误信息</param>
        /// <returns>任务对象集合</returns>
        public bool AbortStep(string processId, int incidentNO, string stepID, out string error)
        {
            error = "";
            try
            {
                CurrentTASKs = new Core.TaskCore().SetActiveTaskStatus(processId, incidentNO, stepID, "", TASK_STATUS.终止);
                new Core.IncidentCore().ResetIncidentInfo(processId, incidentNO);
                Configuration.Logger(new Model.LOG(incidentNO, processId, LOG_LEVEL.INFO, "终止步骤成功，stepID:" + stepID));
                return true;
            }
            catch (Exception exp)
            {
                error = exp.Message;
                Configuration.Logger(new Model.LOG(incidentNO, processId, LOG_LEVEL.ERROR, "终止步骤失败," + error, exp.ToString()));
                return false;
            }
        }

        /// <summary>
        ///  跳过正在激活的特定步骤
        /// </summary>
        /// <param name="processId">流程ID</param>
        /// <param name="incidentNO">实例号</param>
        /// <param name="stepID">步骤ID</param>
        /// <param name="error">错误信息</param>
        /// <returns></returns>
        public bool SkipStep(string processId, int incidentNo, string stepID, out string error)
        {
            error = "";
            try
            {
                CurrentTASKs = new Core.TaskCore().SetActiveTaskStatus(processId, incidentNo, stepID, "", TASK_STATUS.跳过);
                new Core.IncidentCore().ResetIncidentInfo(processId, incidentNo);
                Configuration.Logger(new Model.LOG(incidentNo, processId, LOG_LEVEL.INFO, "跳过步骤成功，stepID:" + stepID));
                return true;
            }
            catch (Exception exp)
            {
                error = exp.Message;
                Configuration.Logger(new Model.LOG(incidentNo, processId, LOG_LEVEL.ERROR, "跳过步骤失败," + error, exp.ToString()));
                return false;
            }
        }
        #endregion
    }
}
