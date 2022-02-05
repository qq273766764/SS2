using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm
{
    /// <summary>
    /// 流程实例操作接口
    /// </summary>
    public class IncidentApi
    {
        /// <summary>
        /// 当前操作实例
        /// </summary>
        public Model.INCIDENT CurrentINCIDENT { get; set; }

        /// <summary>
        /// 改变实例状态
        /// </summary>
        /// <param name="processID">流程ID</param>
        /// <param name="incidentNo">实例号</param>
        /// <param name="error">返回错误信息</param>
        /// <param name="INCIDENT_STATUS_">设置实例状态</param>
        /// <returns>是否操作成功</returns>
        internal bool ChangeIncidentStatus(string processID, int incidentNo, out string error, int INCIDENT_STATUS_)
        {
            error = "";
            try
            {
                var tskStatus = TASK_STATUS.激活;
                switch (INCIDENT_STATUS_)
                {
                    case INCIDENT_STATUS.停滞:
                        tskStatus = TASK_STATUS.终止;
                        break;
                    case INCIDENT_STATUS.完成:
                        tskStatus = TASK_STATUS.跳过;
                        break;
                    case INCIDENT_STATUS.撤回:
                        tskStatus = TASK_STATUS.撤回;
                        break;
                    case INCIDENT_STATUS.终止:
                        tskStatus = TASK_STATUS.终止;
                        break;
                    case INCIDENT_STATUS.删除:
                    case INCIDENT_STATUS.审批中:
                        tskStatus = TASK_STATUS.激活;
                        break;
                }
                CurrentINCIDENT = new Core.IncidentCore().SetIncidentStatus(processID, incidentNo, INCIDENT_STATUS_);
                if (tskStatus != TASK_STATUS.激活)
                {
                    new Core.TaskCore().SetActiveTaskStatus(processID, incidentNo, tskStatus);
                }
                CurrentINCIDENT = new Core.IncidentCore().ResetIncidentInfo(processID, incidentNo);
                Configuration.Logger(new Model.LOG(incidentNo, processID, LOG_LEVEL.INFO, "设置实例状态成功,STATUS:" + INCIDENT_STATUS_ + "，" + error));
                return true;
            }
            catch (Exception exp)
            {
                error = exp.Message;
                Configuration.Logger(new Model.LOG(incidentNo, processID, LOG_LEVEL.ERROR, "设置实例状态出错,STATUS:" + INCIDENT_STATUS_ + "," + error, exp.ToString()));
            }
            return false;
        }
        /// <summary>
        /// 终止实例
        /// </summary>
        /// <param name="processID">流程ID</param>
        /// <param name="incidentNo">实例号</param>
        /// <param name="error">返回错误信息</param>
        /// <returns>是否操作成功</returns>
        public bool AbortIncident(string processID, int incidentNo, out string error)
        {
            return ChangeIncidentStatus(processID, incidentNo, out error, INCIDENT_STATUS.终止);
        }

        /// <summary>
        /// 报告流程执行错误
        /// </summary>
        /// <param name="processID"></param>
        /// <param name="incidentNo"></param>
        /// <param name="msg"></param>
        /// <param name="error"></param>
        /// <returns></returns>
        public bool ErrorIncident(string processID, int incidentNo, out string error)
        {
            return ChangeIncidentStatus(processID, incidentNo, out error, INCIDENT_STATUS.停滞);
        }
        /// <summary>
        /// 完成实例
        /// </summary>
        /// <param name="processID">流程ID</param>
        /// <param name="incidentNo">实例号</param>
        /// <param name="error">返回错误信息</param>
        /// <returns>是否操作成功</returns>
        public bool CompletedIncident(string processID, int incidentNo, out string error)
        {
            return ChangeIncidentStatus(processID, incidentNo, out error, INCIDENT_STATUS.完成);
        }
        /// <summary>
        /// 删除实例
        /// </summary>
        /// <param name="processID">流程ID</param>
        /// <param name="incidentNo">实例号</param>
        /// <param name="error">返回错误信息</param>
        /// <returns>是否操作成功</returns>
        public bool DeleteIncident(string processID, int incidentNo, out string error, bool delDB = false)
        {
            if (delDB)
            {
                error = string.Empty;
                try
                {
                    var p = Configuration.Processes.FirstOrDefault(i => i.PROCESSID == processID);
                    new Core.IncidentCore().DeleteIncidentData(p, incidentNo);
                    return true;
                }
                catch (Exception e)
                {
                    error = e.Message;
                    return false;
                }
            }
            else
            {
                return ChangeIncidentStatus(processID, incidentNo, out error, INCIDENT_STATUS.删除);
            }
        }

        /// <summary>
        /// 重新激活实例
        /// </summary>
        /// <param name="processID">流程ID</param>
        /// <param name="incidentNo">实例号</param>
        /// <param name="error">返回错误信息</param>
        /// <returns>是否操作成功</returns>
        public bool ReActiveIncident(string processID, int incidentNo, out string error)
        {
            return ChangeIncidentStatus(processID, incidentNo, out error, INCIDENT_STATUS.审批中);
        }
        /// <summary>
        /// 撤回流程
        /// </summary>
        /// <param name="processID">流程ID</param>
        /// <param name="incidentNo">实例号</param>
        /// <returns></returns>
        public bool CallBackIncident(string processID, int incidentNo, out string error)
        {
            try
            {
                var tsk = new Core.TaskCore().LoadBeginTask(processID, incidentNo);
                if (tsk == null)
                {
                    error = "加载开始Task信息失败";
                    return false;
                }
                CurrentINCIDENT = tsk.INCIDENT;

                //1、激活步骤的状态设置为撤回
                new Core.TaskCore().SetActiveTaskStatus(processID, incidentNo, TASK_STATUS.撤回);

                //2、激活第一个步骤
                return new TaskApi().ActiveTask(tsk.TASK.TASKID, out error);
            }
            catch (Exception exp)
            {
                error = exp.Message;
                Configuration.Logger(new Model.LOG(incidentNo, processID, LOG_LEVEL.ERROR, "撤回流程错误，" + error, exp.ToString()));
                return false;
            }
        }

        /// <summary>
        /// 查找流程待经过的步骤（可预先知道下面可能会经过哪些节点）
        /// </summary>
        /// <param name="processID"></param>
        /// <param name="incidentNo"></param>
        /// <param name="error"></param>
        /// <returns></returns>
        public List<Model.TASK> ResetPredictTasks(string processID, int incidentNo, out string error)
        {
            throw new NotImplementedException("功能未实现");
        }
        /// <summary>
        /// 创建流程图
        /// </summary>
        /// <param name="processID"></param>
        /// <param name="tmpPath"></param>
        /// <param name="error"></param>
        /// <returns></returns>
        public bool CreateProcessMap(string processID, string filePath, out string error, bool CreateIfNotCache = true)
        {
            error = "";
            try
            {
                var p = Configuration.Processes.FirstOrDefault(i => i.PROCESSID == processID);
                if (p.FLOWMAP == null) { throw new Exception("未配置流程[" + processID + "]的流程图信息"); }
                if (CreateIfNotCache)
                {
                    if (!string.IsNullOrEmpty(p.FLOWMAP.MapFilePath) && System.IO.File.Exists(p.FLOWMAP.MapFilePath))
                    {
                        return true;
                    }
                }
                System.IO.File.Delete(filePath);
                new Map.MapCreator().CreateMapFile(filePath, p);
                return true;
            }
            catch (Exception exp)
            {
                error = exp.Message;
                Configuration.Logger(new Model.LOG(0, processID, LOG_LEVEL.ERROR, "创建流程图出错，" + error, exp.ToString()));
                return false;
            }
        }
    }
}
