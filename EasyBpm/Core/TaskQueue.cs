using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EasyBpm.Core
{
    /// <summary>
    /// 任务队列操作
    /// </summary>
    internal class TaskQueue
    {
        /// <summary>
        /// 最大重试次数
        /// </summary>
        int MAX_TRYIES = 5;

        /// <summary>
        /// 添加任务队列
        /// </summary>
        /// <param name="taskID"></param>
        /// <param name="user"></param>
        /// <param name="TASK_OPNION"></param>
        /// <param name="Comment"></param>
        public void Add(string taskID, Model.STEPUSER user, int TASK_OPNION, string Comment)
        {
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                ctx.TASKQUEUE.InsertOnSubmit(new Model.TASKQUEUE()
                {
                    TASKID = taskID,
                    USERID = user.LOGINNAME,
                    USERNAME = user.USERNAME,
                    OPNION = TASK_OPNION,
                    SUMMARY = Comment,
                    QUEUETIME = DateTime.Now,
                    RETRIES = 0,
                    DATAID = string.Empty
                });
                ctx.SubmitChanges();
            }
        }

        /// <summary>
        /// 删除队列
        /// </summary>
        /// <param name="taskIDs"></param>
        public void Delete(string[] taskIDs)
        {
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                ctx.ExecuteCommand("DELETE TASKQUEUE WHERE TASKID IN (" + string.Join(",", taskIDs.Select(i => "'" + i + "'")) + ")");
            }
        }

        /// <summary>
        /// 添加重试次数
        /// </summary>
        /// <param name="taskIDs"></param>
        public void AddTries(string[] taskIDs)
        {
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                ctx.ExecuteCommand("UPDATE TASKQUEUE SET RETRIES=RETRIES+1 WHERE TASKID IN (" + string.Join(",", taskIDs.Select(i => "'" + i + "'")) + ")");
            }
        }

        /// <summary>
        /// 提交队列任务
        /// </summary>
        public List<Model.TASKQUEUE> Load()
        {
            using (var ctx = new Model.EasyBpmDBDataContext())
            {
                return ctx.TASKQUEUE.Where(i => i.RETRIES <= MAX_TRYIES).ToList();
            }
        }
    }
}
