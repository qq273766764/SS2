using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace EasyBpm
{
    /// <summary>
    /// 任务队列处理线程
    /// </summary>
    internal class TaskThread
    {
        /// <summary>
        /// 发送任务间隔时间
        /// </summary>
        int SLEEP_TIME_TASK = 1000 * 10;

        /// <summary>
        /// 启动发送线程
        /// </summary>
        public void Start()
        {
            Thread bpmThread = new Thread(new ThreadStart(ThreadTask));
            bpmThread.IsBackground = true;
            bpmThread.Start();
        }

        /// <summary>
        /// 线程执行方法
        /// </summary>
        public void ThreadTask()
        {
            lock (this)
            {
                while (true)
                {
                    SendQueue();
                    Thread.Sleep(SLEEP_TIME_TASK);
                }
            }
        }

        /// <summary>
        /// 提交队列
        /// </summary>
        void SendQueue()
        {
            var api = new TaskApi();
            var qs = new Core.TaskQueue().Load();
            if (qs.Count > 0)
            {
                var taskIds_Success = new List<string>();
                var taskIds_Error = new List<string>();
                foreach (var q in qs)
                {
                    string error;
                    ///调用发送接口
                    if (api.SendTask(q.TASKID, new Model.STEPUSER(q.USERID, q.USERNAME), q.OPNION, q.SUMMARY, "", out error))
                    {
                        taskIds_Success.Add(q.TASKID);
                    }
                    else
                    {
                        taskIds_Error.Add(q.TASKID);
                    }
                }
                //修改队列记录内容

            }
        }

        /// <summary>
        /// 检查超时流程
        /// </summary>
        void CheckTimeOut()
        {

        }
    }
}
