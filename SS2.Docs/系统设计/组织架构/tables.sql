create table OC_NODE(
	[ID] nvarchar(200) primary key,
	[ParentID] nvarchar(200),
	[Name] nvarchar(200),
	[IDPath] nvarchar(2000),
	[NamePath] nvarchar(2000),
	[NType] int not null,
	[Disabled] bit not null,
	[IsMainJob] bit not null,
	[CreateTime] datetime not null
)

create table OC_EMPLOYEE(
	[ID] nvarchar(200) primary key,
	[ParentID] nvarchar(200),
	[Name] nvarchar(200),
	[IDPath] nvarchar(2000),
	[NamePath] nvarchar(2000),
	[NType] int not null,
	[Disabled] bit not null,
	[IsMainJob] bit not null,
	[CreateTime] datetime not null,

	/*人员信息*/
	[LoginName] nvarchar(200) not null,
	[PictureUrl] nvarchar(2000),
	[UserName] nvarchar(200) not null,
	[Gender] nvarchar(200),--性别
	[PWD] nvarchar(200) not null,
	[WX] nvarchar(200),
	[Email] nvarchar(200),
	[Tel] nvarchar(200),
	[Remark] nvarchar(2000),
	[Jobs] nvarchar(2000),--兼职ID
	[DataJson] nvarchar(max)
)

create table OC_AUTHORIZATION(
	[ID] nvarchar(200) primary key,
	[Name] nvarchar(2000) not null,
	[OrgIDs] nvarchar(max),
	[OrgNames] nvarchar(max),
	[ExcludeOrgIDs] nvarchar(4000),
	[ExcludeOrgNames] nvarchar(4000),
	[AuthorIDs] nvarchar(max)
)

/*组织架构新增扩展字段*/
alter table OC_NODE Add Ext001 nvarchar(500)  null;
alter table OC_NODE Add Ext002 nvarchar(500)  null;
alter table OC_NODE Add Ext003 nvarchar(500)  null;
alter table OC_NODE Add Ext004 nvarchar(500)  null;
alter table OC_NODE Add Ext005 nvarchar(500)  null;

alter table OC_EMPLOYEE Add Ext001 nvarchar(500)  null;
alter table OC_EMPLOYEE Add Ext002 nvarchar(500)  null;
alter table OC_EMPLOYEE Add Ext003 nvarchar(500)  null;
alter table OC_EMPLOYEE Add Ext004 nvarchar(500)  null;
alter table OC_EMPLOYEE Add Ext005 nvarchar(500)  null;
