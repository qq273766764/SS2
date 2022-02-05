using log4net.Appender;
using log4net.Config;
using log4net.Layout;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SLogger
{
    public class Configutarion
    {
        /// <summary>
        /// 备份标记
        /// </summary>
        static bool HasBacked = false;
        /// <summary>
        /// 日志时间
        /// </summary>
        static DateTime LogTime;

        /// <summary>
        /// 表名
        /// </summary>
        public static string LoggerTableName { get; set; } = "SS2_LOGS";

        /// <summary>
        /// 链接字符串
        /// </summary>
        public static string ConnectionString { get; set; }

        /// <summary>
        /// 初始化
        /// </summary>
        /// <param name="connstr"></param>
        /// <param name="tableName"></param>
        public static void InitLoggerDB(string connstr, string tableName = null,int bufferSize=10)
        {
            

            LogTime = DateTime.Now;
            if (!string.IsNullOrEmpty(tableName)) LoggerTableName = tableName;
            ConnectionString = connstr;
            BackupLogDB();
            
            ///初始化日志记录信息
            var hier = (log4net.Repository.Hierarchy.Hierarchy)log4net.LogManager.GetRepository();
            if (hier != null)
            {
                hier.ResetConfiguration();

                #region AdoNetAppender
                var appender = new AdoNetAppender();
                appender.Name = "dbAppender";
                appender.BufferSize = bufferSize;
                appender.ConnectionString = ConnectionString;
                appender.ConnectionType = "System.Data.SqlClient.SqlConnection, System.Data, Version=1.0.5000.0, Culture=neutral, PublicKeyToken=b77a5c561934e089";
                appender.CommandText = "INSERT INTO " + LoggerTableName + "(LogDate,UserID,UserName, Level, Logger, Message, Exception)VALUES(@logdate,@UserID,@UserName, @loglevel, @logger, @message, @exception)";
                appender.AddParameter(new AdoNetAppenderParameter()
                {
                    ParameterName = "@logdate",
                    DbType = System.Data.DbType.DateTime,
                    Layout = new RawTimeStampLayout()
                });
                appender.AddParameter(new AdoNetAppenderParameter()
                {
                    ParameterName = "@UserID",
                    DbType = System.Data.DbType.String,
                    Size = 200,
                    Layout = (IRawLayout)new RawLayoutConverter().ConvertFrom(new PatternLayout("%property{UserID}"))
                });
                appender.AddParameter(new AdoNetAppenderParameter()
                {
                    ParameterName = "@UserName",
                    DbType = System.Data.DbType.String,
                    Size = 200,
                    Layout = (IRawLayout)new RawLayoutConverter().ConvertFrom(new PatternLayout("%property{UserName}"))
                });

                appender.AddParameter(new AdoNetAppenderParameter()
                {
                    ParameterName = "@loglevel",
                    DbType = System.Data.DbType.String,
                    Size = 200,
                    Layout = (IRawLayout)new RawLayoutConverter().ConvertFrom(new PatternLayout("%level"))
                });
                appender.AddParameter(new AdoNetAppenderParameter()
                {
                    ParameterName = "@logger",
                    DbType = System.Data.DbType.String,
                    Size = 500,
                    Layout = (IRawLayout)new RawLayoutConverter().ConvertFrom(new PatternLayout("%logger"))
                });
                appender.AddParameter(new AdoNetAppenderParameter()
                {
                    ParameterName = "@message",
                    DbType = System.Data.DbType.String,
                    Size = 4000,
                    Layout = (IRawLayout)new RawLayoutConverter().ConvertFrom(new PatternLayout("%m"))
                });
                appender.AddParameter(new AdoNetAppenderParameter()
                {
                    ParameterName = "@exception",
                    DbType = System.Data.DbType.String,
                    Size = 4000,
                    Layout = (IRawLayout)new RawLayoutConverter().ConvertFrom(new ExceptionLayout())
                });
                #endregion

                appender.ActivateOptions();
                BasicConfigurator.Configure(appender);
            }
        }

        //备份日志
        static void BackupLogDB()
        {
            ///每月28号，将前一月的数据备份到备份表
            ///备份表名：日志表名_年月

            if (DateTime.Now.Day != 28 || HasBacked)
            {
                return;
            }
            HasBacked = true;

            //将一月前的日志移动到备份表
            string sqlcopy = string.Format(@"select * into [dbo].[{0}_{1:yyyyMM}] FROM [dbo].[{0}] where LogDate<'{2:yyyy-MM}-01'",
                LoggerTableName,
                DateTime.Now.AddMonths(-1),
                DateTime.Now);
            string sqldelete = string.Format(@"DELETE [dbo].[{0}] where LogDate<'{1:yyyy-MM}-01'",
                LoggerTableName,
                DateTime.Now);

            try
            {
                using (var ctx = new System.Data.Linq.DataContext(ConnectionString))
                {
                    ctx.ExecuteCommand(sqlcopy);
                    ctx.ExecuteCommand(sqldelete);
                }
            }
            catch(Exception exp)
            {

            }
        }

        public static bool Flush()
        {
            return log4net.LogManager.Flush(0);
        }

        public static bool FlushOverTime()
        {
            if ((DateTime.Now - LogTime).TotalMinutes > 1)
            {
                LogTime = DateTime.Now;
                return Flush();
            }
            return false;
        }

    }
}
