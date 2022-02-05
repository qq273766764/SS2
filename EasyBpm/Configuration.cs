using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyBpm
{
    /// <summary>
    /// 流程初始化配置
    /// 作者：JohnChen
    /// 时间：2018/09
    /// </summary>
    public static class Configuration
    {
        #region internal
        static List<Model.PROCESS> InitProcessConfig(List<Model.PROCESS> ps)
        {
            //检查ProcessID是否重复
            var reptPNames = ps
                 .GroupBy(i => i.PROCESSID)
                 .Select(i => new { PROCESSID = i.Key, COUNT = i.Count() })
                 .Where(i => i.COUNT > 1).Select(i => i.PROCESSID);
            if (reptPNames.Count() > 0)
            {
                throw new Exception("流程ID重复：" + string.Join(",", reptPNames));
            }

            //查询流程的最大实例号
            var maxIncNOs = new Core.IncidentCore().GetMaxIncidentNo();

            int pIdx = 0;
            foreach (var p in ps)
            {
                pIdx++;

                #region 检查参数是否为空
                if (string.IsNullOrEmpty(p.PROCESSID)) { throw new Exception("第" + pIdx + "条流程数据中PROCESSID不能为空"); }
                if (string.IsNullOrEmpty(p.PROCESSNAME)) { p.PROCESSNAME = p.PROCESSID; }
                if (p.STEPS == null || p.STEPS.Count == 0) { throw new Exception("流程[" + p.PROCESSID + "]的步骤信息不能为空"); }
                #endregion

                #region 检查步骤ID是否重复
                var allStepID = p.STEPS.Select(i => i.STEPID);
                var reptSNames = allStepID
                    .GroupBy(i => i)
                    .Select(i => new { STEPID = i.Key, COUNT = i.Count() })
                    .Where(i => i.COUNT > 1).Select(i => i.STEPID);
                if (reptSNames.Count() > 0)
                {
                    throw new Exception("流程[" + p.PROCESSID + "]的步骤ID重复：" + string.Join(",", reptSNames));
                }
                #endregion

                #region  检查步骤ID是否设置正确
                p.STEPS.ForEach(i =>
                {
                    if (i.NEXTSTEPIDS != null)
                    {
                        var errIDs = i.NEXTSTEPIDS.Except(allStepID);
                        if (errIDs.Count() > 0)
                        {
                            throw new Exception("流程[" + p.PROCESSID + "]的步骤[" + i.STEPLABEL + "]的后续步骤ID("+string.Join(",", errIDs)+")设置错误,找不到对应的步骤");
                        }
                    }
                });
                #endregion

                //设置最大实例号
                if (maxIncNOs.ContainsKey(p.PROCESSID)) { p._MaxINCIDENT = maxIncNOs[p.PROCESSID]; }

                #region 步骤信息校验
                p.STEPS.FirstOrDefault()._ISBEGINSTEP = true;
                for (var idx = 0; idx < p.STEPS.Count; idx++)
                {
                    var s = p.STEPS[idx];
                    if (string.IsNullOrEmpty(s.STEPID)) { throw new Exception("流程[" + p.PROCESSID + "]步骤信息中的STEPID不能为空"); }
                    if (string.IsNullOrEmpty(s.STEPLABEL)) { s.STEPLABEL = s.STEPID; }

                    //检查步骤处理人是否配置
                    if (s.STEPUSERS == null && s.FuncStepUsers == null && !s._ISBEGINSTEP)
                    {
                        throw new Exception("流程[" + p.PROCESSID + "]中步骤[" + s.STEPID + "]的STEPUSERS和FuncStepUsers至少要配置一个");
                    }

                    s._PROCESSID = p.PROCESSID;
                    s._PROCESSNAME = p.PROCESSNAME;
                    if (string.IsNullOrEmpty(s.FORMURL)) { s.FORMURL = p.FORMURL; }

                    //默认赋值后一个步骤ID
                    if (Options.AutoSetDefaultNextStep && s.NEXTSTEPIDS == null)
                    {
                        if (idx < p.STEPS.Count - 1)
                        {
                            s.NEXTSTEPIDS = new string[] { p.STEPS[idx + 1].STEPID };
                        }
                    }
                }
                #endregion
            }
            return ps;
        }
        /// <summary>
        /// 流程配置数据
        /// </summary>
        internal static List<Model.PROCESS> Processes
        {
            get
            {
                if (Options == null || Options.ProcessList == null)
                {
                    throw new Exception("流程集合为空，请调用 EasyBpm.Configuration.Init() 方法初始化流程引擎");
                }
                return Options.ProcessList;
            }
        }
        /// <summary>
        /// 获取连接字符串
        /// </summary>
        internal static string ConnectionString
        {
            get
            {
                if (Options == null || string.IsNullOrEmpty(Options.DBConnectString))
                {
                    throw new Exception("数据库连接字符串为空，请调用 EasyBpm.Configuration.Init() 方法初始化流程引擎");
                }
                return Options.DBConnectString;
            }
        }
        /// <summary>
        /// 日志记录方法
        /// </summary>
        internal static Action<Model.LOG> Logger
        {
            get
            {
                if (Options == null || Options.Logger == null)
                {
                    return (Model.LOG log) =>
                    {
                        System.Diagnostics.Debug.WriteLine(log.ToString());
                    };
                }
                return Options.Logger;
            }
        }
        /// <summary>
        /// 配置信息
        /// </summary>
        public static Options Options { get; private set; }
        #endregion

        /// <summary>
        /// 初始化引擎
        /// </summary>
        /// <param name="options">选项集合</param>
        public static void Config(Options options)
        {
            Options = options;
            Options.ProcessList = InitProcessConfig(Options.ProcessList);
            if (Options.EnableTaskQueue) { new TaskThread().Start();}
            Logger(new Model.LOG(0, "", LOG_LEVEL.INFO, "初始化引擎配置"));
        }
    }

    /// <summary>
    /// 配置信息集合
    /// </summary>
    public class Options
    {
        /// <summary>
        /// 流程集合
        /// </summary>
        public List<Model.PROCESS> ProcessList { get; set; } = new List<Model.PROCESS>();
        /// <summary>
        /// 数据库连接字符串
        /// </summary>
        public string DBConnectString { get; set; }
        /// <summary>
        /// 日志记录方法
        /// </summary>
        public Action<Model.LOG> Logger { get; set; }

        /// <summary>
        /// 当步骤的后续步骤配置为空时，是否默认设置为后续步骤（如果是直线流程，可启用）
        /// </summary>
        public bool AutoSetDefaultNextStep { get; set; }

        /// <summary>
        /// 激活任务时是否允许激活重复的任务
        /// </summary>
        public bool EnableActiveSameTask { get; set; }

        /// <summary>
        /// 实例[操作中]状态变更时是否触发事件
        /// </summary>
        public bool CallEventWhenIncidentOperating { get; set; }

        /// <summary>
        /// 更新任务的实例信息时更新Summary及ActiveLables信息
        /// </summary>
        public bool UpdateSummary2Task { get; set; } = true;

        /// <summary>
        /// 流程操作中状态超时时间（秒），默认60
        /// </summary>
        public int TaskOperatingTimeOut { get; set; } = 60;

        /// <summary>
        /// 启用提交队列
        /// </summary>
        public bool EnableTaskQueue { get; set; } = false;

        /// <summary>
        /// 单次最多激活任务数量
        /// </summary>
        public int MaxActivetTasksCount { get; set; } = 100;

        /// <summary>
        /// 是否允许激活结束的流程
        /// </summary>
        public bool AllowActiveEndTask { get; set; } = true;
    }
}
