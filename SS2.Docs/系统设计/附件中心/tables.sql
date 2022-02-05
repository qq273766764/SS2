create table FS_DIR(
	[ID] nvarchar(200) primary key,
	[ParentID] nvarchar(200),
	[Name] nvarchar(200),
	[IDPath] nvarchar(200),
	[NamePath] nvarchar(200),
	[Icon] nvarchar(200),
	--[Authorization] nvarchar(2000) not null,

	[DirType] int not null,
	[TotalFileCount] int not null,
	[TotalFileSize] bigint not null,	--附件大小
	[TotalFileSizeText] nvarchar(200) not null, --附件大小文本

	[CreateUserID] nvarchar(200) not null,
	[CreateUserName] nvarchar(200) not null,
	[CreateTime] datetime not null,
	[IsHide] bit not null,
)

create table FS_FILE(
	[ID] nvarchar(200) primary key,
	[DirID] nvarchar(200),
	[DirPath] nvarchar(2000),
	[Icon] nvarchar(200),
	[FileName] nvarchar(200),
	[Tags] nvarchar(500), --文件标签

	[FileServer] nvarchar(200),--文件存储服务器
	[FilePath] nvarchar(200), --文件存储路径
	[FileExt] nvarchar(200),
	[FileSize] bigint not null,	--附件大小
	[FileSizeText] nvarchar(200) not null, --附件大小文本
	--[IDPath] nvarchar(200),

	[CreateUserID] nvarchar(200) not null,
	[CreateUserName] nvarchar(200) not null,
	[CreateTime] datetime not null,

	[IsDel] bit not null, --是否删除
	[DelTime] datetime not null,--删除时间

	[DataID] nvarchar(200),	--业务数据ID
	[CtrID] nvarchar(200),	--上传控件ID
)
