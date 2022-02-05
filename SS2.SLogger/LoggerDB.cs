using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SLogger
{
    public class LoggerDB
    {
        public static void Info(string logger, string msg, string exp = "", string userID = "", string userName = "")
        {
            log4net.GlobalContext.Properties["UserID"] = userID;
            log4net.GlobalContext.Properties["UserName"] = userName;
            var log = log4net.LogManager.GetLogger(logger);
            if (string.IsNullOrEmpty(exp))
            {
                log.Info(msg);
            }
            else
            {
                log.Info(msg, new LoggerMessageException(exp));
            }
            Configutarion.FlushOverTime();
        }
        public static void Error(string logger, string msg, string exp, string userID = "", string userName = "")
        {
            log4net.GlobalContext.Properties["UserID"] = userID;
            log4net.GlobalContext.Properties["UserName"] = userName;
            var log = log4net.LogManager.GetLogger(logger);
            log.Error(msg, new LoggerMessageException(exp));
            Configutarion.FlushOverTime();
        }
        public static void Error(string logger, string msg, Exception exp, string userID = "", string userName = "")
        {
            log4net.GlobalContext.Properties["UserID"] = userID;
            log4net.GlobalContext.Properties["UserName"] = userName;
            var log = log4net.LogManager.GetLogger(logger);
            log.Error(msg, exp);
            Configutarion.FlushOverTime();
        }
        public static void Debug(string logger, string msg, string exp = "", string userID = "", string userName = "")
        {
            log4net.GlobalContext.Properties["UserID"] = userID;
            log4net.GlobalContext.Properties["UserName"] = userName;
            var log = log4net.LogManager.GetLogger(logger);
            log.Debug(msg, new LoggerMessageException(exp));
            Configutarion.FlushOverTime();
        }
        public static void Debug(string logger, string msg, Exception exp, string userID = "", string userName = "")
        {
            log4net.GlobalContext.Properties["UserID"] = userID;
            log4net.GlobalContext.Properties["UserName"] = userName;
            var log = log4net.LogManager.GetLogger(logger);
            log.Debug(msg, exp);
            Configutarion.FlushOverTime();
        }
        public static void Warn(string logger, string msg, string exp = "", string userID = "", string userName = "")
        {
            log4net.GlobalContext.Properties["UserID"] = userID;
            log4net.GlobalContext.Properties["UserName"] = userName;
            var log = log4net.LogManager.GetLogger(logger);
            log.Warn(msg, new LoggerMessageException(exp));
            Configutarion.FlushOverTime();
        }
        public static void Warn(string logger, string msg, Exception exp, string userID = "", string userName = "")
        {
            log4net.GlobalContext.Properties["UserID"] = userID;
            log4net.GlobalContext.Properties["UserName"] = userName;
            var log = log4net.LogManager.GetLogger(logger);
            log.Warn(msg, exp);
            Configutarion.FlushOverTime();
        }

        public static void Flush() {
            Configutarion.Flush();
        }
    }
}
