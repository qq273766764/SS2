using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EasyBpm
{
    public static class INCIDENT_STATUS
    {
        public const int 停滞 = 0;
        public const int 审批中 = 1;
        public const int 完成 = 2;
        public const int 撤回 = 4;
        public const int 终止 = 7;
        public const int 操作中 = 77;
        public const int 删除 = 99;
        public static string GetText(int status)
        {
            switch (status)
            {
                case 停滞:
                    return "停滞";
                case 审批中:
                    return "审批中";
                case 完成:
                    return "完成";
                case 撤回:
                    return "撤回";
                case 终止:
                    return "终止";
                case 操作中:
                    return "操作中";
                case 删除:
                    return "删除";
                default:
                    return "异常";
            }
        }
    }
    public static class TASK_STATUS
    {
        public const int 错误 = 0;
        public const int 激活 = 1;
        public const int 完成 = 2;
        public const int 退回 = 3;
        public const int 撤回 = 4;
        public const int 抄送 = 5;
        public const int 跳过 = 6;
        public const int 终止 = 7;
        public const int 超时 = 11;
        public static string GetText(int status)
        {
            switch (status)
            {
                case TASK_STATUS.激活:
                    return "激活";
                case TASK_STATUS.完成:
                    return "完成";
                case TASK_STATUS.退回:
                    return "退回";
                case TASK_STATUS.撤回:
                    return "撤回";
                case TASK_STATUS.抄送:
                    return "抄送";
                case TASK_STATUS.跳过:
                    return "跳过";
                case TASK_STATUS.终止:
                    return "终止";
                case TASK_STATUS.超时:
                    return "超时";
                default:
                    return "异常";
            }
        }
    }
    public static class TASK_OPNION
    {
        public static string GetText(int status)
        {
            switch (status)
            {
                case TASK_OPNION.无:
                    return "无";
                case TASK_OPNION.提交审批:
                    return "提交审批";
                case TASK_OPNION.同意:
                    return "同意";
                case TASK_OPNION.不同意:
                    return "不同意";
                case TASK_OPNION.退回:
                    return "退回";
                case TASK_OPNION.退回上一步:
                    return "退回上一步";
                case TASK_OPNION.退回发起人:
                    return "退回发起人";
                case TASK_OPNION.结束审批:
                    return "结束审批";
                case TASK_OPNION.重新提交:
                    return "重新提交";
                default:
                    return "异常";
            }
        }
        public const int 无 = 0;
        public const int 提交审批 = 1;
        public const int 同意 = 2;
        public const int 不同意 = 3;
        public const int 退回 = 4;
        public const int 退回上一步 = 5;
        public const int 退回发起人 = 6;
        public const int 结束审批 = 7;
        public const int 重新提交 = 8;
    }
    public enum LOG_LEVEL
    {
        ERROR,
        EVENT,
        DEBUG,
        INFO,
        WARNING
    }
}