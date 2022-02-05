CREATE TABLE INCIDENT(
	[ID] INT IDENTITY(1,1) PRIMARY KEY,	--ID主键
	[DATAID]	NVARCHAR(500),			--业务数据ID
	[INCIDENTNO] INT NOT NULL,			--流程实例号
	[PROCESSID] NVARCHAR(200),			--流程ID
	[PROCESSNAME] NVARCHAR(2000),		--流程名称
	[SUMMARY] NVARCHAR(MAX),			--流程备注
	[STARTTIME] DATETIME NOT NULL,		--开始时间
	[ENDTIME] DATETIME NOT NULL,		--结束时间，默认 9999/12/31
	[STATUSTIME] DATETIME NOT NULL,		--流程状态变更时间
	[STATUS] INT NOT NULL,				--流程状态，具体参考 EasyBpm.INCIDENT_STATUS
	[INITIATORID] NVARCHAR(500),		--发起人登录名
	[INITIATORNAME] NVARCHAR(500),		--发起人姓名
	[ACTIVEUSERNAMES] NVARCHAR(2000),	--当前激活的操作人
	[ACTIVESTEPLABELS] NVARCHAR(2000),	--当前激活的步骤名称
	[ACTIVETASKOBJECTS] NVARCHAR(MAX),	--当前激活的任务列表Json
	[PREDICTTASKS] NVARCHAR(MAX)		--步骤预测（用于判断后续可能经过的步骤）Task Json
)
GO
ALTER TABLE INCIDENT ADD CONSTRAINT unique_PID_INC	unique(PROCESSID,INCIDENTNO);
GO
CREATE TABLE TASK(
	[TASKID] NVARCHAR(50) PRIMARY KEY,	--TASKID，开始步骤TASKID以"0B"结尾
	[PROCESSNAME] NVARCHAR(2000),		--流程名称
	[PROCESSID] NVARCHAR(500),			--流程ID
	[INCIDENTNO] INT NOT NULL,			--流程实例号
	[TASKUSERID] NVARCHAR(500),			--步骤处理人登录名
	[TASKUSERNAME] NVARCHAR(500),		--步骤处理人姓名
	[ASSIGNTOUSERID] NVARCHAR(500),		--步骤实际处理人
	[ASSIGNTOUSERNAME] NVARCHAR(500),	--步骤实际处理人姓名
	[STARTTIME] DATETIME NOT NULL,		--开始时间
	[ENDTIME] DATETIME NOT NULL,		--结束时间
	[COMPLETEDTIMEOUT] DATETIME NOT NULL,	--超时时间
	[STATUS] INT NOT NULL,				--步骤状态，参考 TASK_STATUS
	/*关联流程属性*/
	[ISTATUS] INT NOT NULL,				--关联流程状态
	[IDATAID]	NVARCHAR(500),			--业务数据ID
	[ISTARTTIME] DATETIME NOT NULL,		--关联流程开始时间
	[IENDTIME] DATETIME NOT NULL,		--关联流程结束时间
	[SUMMARY] NVARCHAR(MAX),			--流程备注
	[IACTIVEUSERNAMES] NVARCHAR(2000),	--关联流程激活步骤处理人
	[IACTIVESTEPLABELS] NVARCHAR(2000),	--关联流程激活步骤信息
	[IACTIVETASKOBJECTS] NVARCHAR(MAX),	--关联流程激活步骤对象Json
	[INITIATORID] NVARCHAR(500),		--发起人登录名
	[INITIATORNAME] NVARCHAR(500),		--发起人姓名
	/*流转属性*/
	[STEPID] NVARCHAR(500),				--关联步骤ID
	[STEPLABEL] NVARCHAR(2000),			--关联步骤名称
	[PREVTASKID] NVARCHAR(50),			--前一个任务ID
	[OPNION] INT NOT NULL,				--审批意见，参考TASK_OPTIONS
	[COMMENT] NVARCHAR(MAX)				--审批意见备注
)
CREATE TABLE TASKQUEUE(
	[TASKID] NVARCHAR(50) PRIMARY KEY,	--TASKID
	[USERNAME] NVARCHAR(500),		--步骤处理人姓名
	[USERID] NVARCHAR(500),			--步骤实际处理人
	[OPNION] INT NOT NULL,				--审批意见，参考TASK_OPTIONS
	[SUMMARY] NVARCHAR(MAX),			--流程备注
	[DATAID] NVARCHAR(500),			--业务数据ID
	/*队列时间及重试次数*/
	[QUEUETIME] DATETIME,			--加入队列时间
	[RETRIES] INT NOT NULL,			--重试次数
)
--序列号生成
CREATE TABLE INC_NO(
	[ID] int identity(1,1) primary key,
	[Prefix] nvarchar(200) not null,
	[NO] bigint not null
)
GO
/*数据库更新*/
ALTER TABLE TASK ADD [INITIATORID] NVARCHAR(500)
ALTER TABLE TASK ADD [INITIATORNAME] NVARCHAR(500)

GO
/*创建实例号*/
Create proc [dbo].[pCreateIncNO]
	@prefix nvarchar(500)
as
BEGIN TRAN CreateNO    --开始事务
    BEGIN TRY
        declare @Number int
        select @Number=max(No) from [dbo].[INC_NO] where Prefix=@prefix
        if(@Number is null)
        begin
        	insert into [dbo].[INC_NO] 
        	values (@prefix,1)
        	set @Number=1
        end
        else
        begin
        	set @Number=@Number+1
        	update [dbo].[INC_NO] set No=@Number where Prefix=@prefix
        end
        select @Number as No
        COMMIT TRAN;
    END TRY
BEGIN CATCH
    ROLLBACK TRAN;
END CATCH