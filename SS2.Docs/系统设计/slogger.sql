create table SS2_LOGS(
	[ID] bigint identity(1,1) primary key,
	[LogDate] datetime not null,
	[UserID] nvarchar(200),
	[UserName] nvarchar(200),
	[Level] nvarchar(200),
	[Logger] nvarchar(500),
	[Message] nvarchar(max),
	[Exception] nvarchar(max)
)