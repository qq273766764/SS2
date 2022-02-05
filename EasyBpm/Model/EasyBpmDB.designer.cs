﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace EasyBpm.Model
{
	using System.Data.Linq;
	using System.Data.Linq.Mapping;
	using System.Data;
	using System.Collections.Generic;
	using System.Reflection;
	using System.Linq;
	using System.Linq.Expressions;
	using System.ComponentModel;
	using System;
	
	
	[global::System.Data.Linq.Mapping.DatabaseAttribute(Name="EasyBpm")]
	public partial class EasyBpmDBDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region 可扩展性方法定义
    partial void OnCreated();
    partial void InsertINCIDENT(INCIDENT instance);
    partial void UpdateINCIDENT(INCIDENT instance);
    partial void DeleteINCIDENT(INCIDENT instance);
    partial void InsertTASKQUEUE(TASKQUEUE instance);
    partial void UpdateTASKQUEUE(TASKQUEUE instance);
    partial void DeleteTASKQUEUE(TASKQUEUE instance);
    partial void InsertTASK(TASK instance);
    partial void UpdateTASK(TASK instance);
    partial void DeleteTASK(TASK instance);
    #endregion
		
		public EasyBpmDBDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public EasyBpmDBDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public EasyBpmDBDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public EasyBpmDBDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public System.Data.Linq.Table<INCIDENT> INCIDENT
		{
			get
			{
				return this.GetTable<INCIDENT>();
			}
		}
		
		public System.Data.Linq.Table<TASKQUEUE> TASKQUEUE
		{
			get
			{
				return this.GetTable<TASKQUEUE>();
			}
		}
		
		public System.Data.Linq.Table<TASK> TASK
		{
			get
			{
				return this.GetTable<TASK>();
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.INCIDENT")]
	public partial class INCIDENT : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private int _ID;
		
		private string _DATAID;
		
		private int _INCIDENTNO;
		
		private string _PROCESSID;
		
		private string _PROCESSNAME;
		
		private string _SUMMARY;
		
		private System.DateTime _STARTTIME;
		
		private System.DateTime _ENDTIME;
		
		private System.DateTime _STATUSTIME;
		
		private int _STATUS;
		
		private string _INITIATORID;
		
		private string _INITIATORNAME;
		
		private string _ACTIVEUSERNAMES;
		
		private string _ACTIVESTEPLABELS;
		
		private string _ACTIVETASKOBJECTS;
		
    #region 可扩展性方法定义
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void OnIDChanging(int value);
    partial void OnIDChanged();
    partial void OnDATAIDChanging(string value);
    partial void OnDATAIDChanged();
    partial void OnINCIDENTNOChanging(int value);
    partial void OnINCIDENTNOChanged();
    partial void OnPROCESSIDChanging(string value);
    partial void OnPROCESSIDChanged();
    partial void OnPROCESSNAMEChanging(string value);
    partial void OnPROCESSNAMEChanged();
    partial void OnSUMMARYChanging(string value);
    partial void OnSUMMARYChanged();
    partial void OnSTARTTIMEChanging(System.DateTime value);
    partial void OnSTARTTIMEChanged();
    partial void OnENDTIMEChanging(System.DateTime value);
    partial void OnENDTIMEChanged();
    partial void OnSTATUSTIMEChanging(System.DateTime value);
    partial void OnSTATUSTIMEChanged();
    partial void OnSTATUSChanging(int value);
    partial void OnSTATUSChanged();
    partial void OnINITIATORIDChanging(string value);
    partial void OnINITIATORIDChanged();
    partial void OnINITIATORNAMEChanging(string value);
    partial void OnINITIATORNAMEChanged();
    partial void OnACTIVEUSERNAMESChanging(string value);
    partial void OnACTIVEUSERNAMESChanged();
    partial void OnACTIVESTEPLABELSChanging(string value);
    partial void OnACTIVESTEPLABELSChanged();
    partial void OnACTIVETASKOBJECTSChanging(string value);
    partial void OnACTIVETASKOBJECTSChanged();
    #endregion
		
		public INCIDENT()
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ID", AutoSync=AutoSync.OnInsert, DbType="Int NOT NULL IDENTITY", IsPrimaryKey=true, IsDbGenerated=true)]
		public int ID
		{
			get
			{
				return this._ID;
			}
			set
			{
				if ((this._ID != value))
				{
					this.OnIDChanging(value);
					this.SendPropertyChanging();
					this._ID = value;
					this.SendPropertyChanged("ID");
					this.OnIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DATAID", DbType="NVarChar(200)")]
		public string DATAID
		{
			get
			{
				return this._DATAID;
			}
			set
			{
				if ((this._DATAID != value))
				{
					this.OnDATAIDChanging(value);
					this.SendPropertyChanging();
					this._DATAID = value;
					this.SendPropertyChanged("DATAID");
					this.OnDATAIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_INCIDENTNO", DbType="Int NOT NULL")]
		public int INCIDENTNO
		{
			get
			{
				return this._INCIDENTNO;
			}
			set
			{
				if ((this._INCIDENTNO != value))
				{
					this.OnINCIDENTNOChanging(value);
					this.SendPropertyChanging();
					this._INCIDENTNO = value;
					this.SendPropertyChanged("INCIDENTNO");
					this.OnINCIDENTNOChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_PROCESSID", DbType="NVarChar(500)")]
		public string PROCESSID
		{
			get
			{
				return this._PROCESSID;
			}
			set
			{
				if ((this._PROCESSID != value))
				{
					this.OnPROCESSIDChanging(value);
					this.SendPropertyChanging();
					this._PROCESSID = value;
					this.SendPropertyChanged("PROCESSID");
					this.OnPROCESSIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_PROCESSNAME", DbType="NVarChar(2000)")]
		public string PROCESSNAME
		{
			get
			{
				return this._PROCESSNAME;
			}
			set
			{
				if ((this._PROCESSNAME != value))
				{
					this.OnPROCESSNAMEChanging(value);
					this.SendPropertyChanging();
					this._PROCESSNAME = value;
					this.SendPropertyChanged("PROCESSNAME");
					this.OnPROCESSNAMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_SUMMARY", DbType="NVarChar(MAX)")]
		public string SUMMARY
		{
			get
			{
				return this._SUMMARY;
			}
			set
			{
				if ((this._SUMMARY != value))
				{
					this.OnSUMMARYChanging(value);
					this.SendPropertyChanging();
					this._SUMMARY = value;
					this.SendPropertyChanged("SUMMARY");
					this.OnSUMMARYChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_STARTTIME", DbType="DateTime NOT NULL")]
		public System.DateTime STARTTIME
		{
			get
			{
				return this._STARTTIME;
			}
			set
			{
				if ((this._STARTTIME != value))
				{
					this.OnSTARTTIMEChanging(value);
					this.SendPropertyChanging();
					this._STARTTIME = value;
					this.SendPropertyChanged("STARTTIME");
					this.OnSTARTTIMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ENDTIME", DbType="DateTime NOT NULL")]
		public System.DateTime ENDTIME
		{
			get
			{
				return this._ENDTIME;
			}
			set
			{
				if ((this._ENDTIME != value))
				{
					this.OnENDTIMEChanging(value);
					this.SendPropertyChanging();
					this._ENDTIME = value;
					this.SendPropertyChanged("ENDTIME");
					this.OnENDTIMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_STATUSTIME", DbType="DateTime NOT NULL")]
		public System.DateTime STATUSTIME
		{
			get
			{
				return this._STATUSTIME;
			}
			set
			{
				if ((this._STATUSTIME != value))
				{
					this.OnSTATUSTIMEChanging(value);
					this.SendPropertyChanging();
					this._STATUSTIME = value;
					this.SendPropertyChanged("STATUSTIME");
					this.OnSTATUSTIMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_STATUS", DbType="Int NOT NULL")]
		public int STATUS
		{
			get
			{
				return this._STATUS;
			}
			set
			{
				if ((this._STATUS != value))
				{
					this.OnSTATUSChanging(value);
					this.SendPropertyChanging();
					this._STATUS = value;
					this.SendPropertyChanged("STATUS");
					this.OnSTATUSChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_INITIATORID", DbType="NVarChar(500)")]
		public string INITIATORID
		{
			get
			{
				return this._INITIATORID;
			}
			set
			{
				if ((this._INITIATORID != value))
				{
					this.OnINITIATORIDChanging(value);
					this.SendPropertyChanging();
					this._INITIATORID = value;
					this.SendPropertyChanged("INITIATORID");
					this.OnINITIATORIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_INITIATORNAME", DbType="NVarChar(500)")]
		public string INITIATORNAME
		{
			get
			{
				return this._INITIATORNAME;
			}
			set
			{
				if ((this._INITIATORNAME != value))
				{
					this.OnINITIATORNAMEChanging(value);
					this.SendPropertyChanging();
					this._INITIATORNAME = value;
					this.SendPropertyChanged("INITIATORNAME");
					this.OnINITIATORNAMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ACTIVEUSERNAMES", DbType="NVarChar(2000)")]
		public string ACTIVEUSERNAMES
		{
			get
			{
				return this._ACTIVEUSERNAMES;
			}
			set
			{
				if ((this._ACTIVEUSERNAMES != value))
				{
					this.OnACTIVEUSERNAMESChanging(value);
					this.SendPropertyChanging();
					this._ACTIVEUSERNAMES = value;
					this.SendPropertyChanged("ACTIVEUSERNAMES");
					this.OnACTIVEUSERNAMESChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ACTIVESTEPLABELS", DbType="NVarChar(2000)")]
		public string ACTIVESTEPLABELS
		{
			get
			{
				return this._ACTIVESTEPLABELS;
			}
			set
			{
				if ((this._ACTIVESTEPLABELS != value))
				{
					this.OnACTIVESTEPLABELSChanging(value);
					this.SendPropertyChanging();
					this._ACTIVESTEPLABELS = value;
					this.SendPropertyChanged("ACTIVESTEPLABELS");
					this.OnACTIVESTEPLABELSChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ACTIVETASKOBJECTS", DbType="NVarChar(MAX)")]
		public string ACTIVETASKOBJECTS
		{
			get
			{
				return this._ACTIVETASKOBJECTS;
			}
			set
			{
				if ((this._ACTIVETASKOBJECTS != value))
				{
					this.OnACTIVETASKOBJECTSChanging(value);
					this.SendPropertyChanging();
					this._ACTIVETASKOBJECTS = value;
					this.SendPropertyChanged("ACTIVETASKOBJECTS");
					this.OnACTIVETASKOBJECTSChanged();
				}
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.TASKQUEUE")]
	public partial class TASKQUEUE : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private string _TASKID;
		
		private string _USERNAME;
		
		private string _USERID;
		
		private int _OPNION;
		
		private string _SUMMARY;
		
		private string _DATAID;
		
		private System.Nullable<System.DateTime> _QUEUETIME;
		
		private int _RETRIES;
		
    #region 可扩展性方法定义
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void OnTASKIDChanging(string value);
    partial void OnTASKIDChanged();
    partial void OnUSERNAMEChanging(string value);
    partial void OnUSERNAMEChanged();
    partial void OnUSERIDChanging(string value);
    partial void OnUSERIDChanged();
    partial void OnOPNIONChanging(int value);
    partial void OnOPNIONChanged();
    partial void OnSUMMARYChanging(string value);
    partial void OnSUMMARYChanged();
    partial void OnDATAIDChanging(string value);
    partial void OnDATAIDChanged();
    partial void OnQUEUETIMEChanging(System.Nullable<System.DateTime> value);
    partial void OnQUEUETIMEChanged();
    partial void OnRETRIESChanging(int value);
    partial void OnRETRIESChanged();
    #endregion
		
		public TASKQUEUE()
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TASKID", DbType="NVarChar(50) NOT NULL", CanBeNull=false, IsPrimaryKey=true)]
		public string TASKID
		{
			get
			{
				return this._TASKID;
			}
			set
			{
				if ((this._TASKID != value))
				{
					this.OnTASKIDChanging(value);
					this.SendPropertyChanging();
					this._TASKID = value;
					this.SendPropertyChanged("TASKID");
					this.OnTASKIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_USERNAME", DbType="NVarChar(500)")]
		public string USERNAME
		{
			get
			{
				return this._USERNAME;
			}
			set
			{
				if ((this._USERNAME != value))
				{
					this.OnUSERNAMEChanging(value);
					this.SendPropertyChanging();
					this._USERNAME = value;
					this.SendPropertyChanged("USERNAME");
					this.OnUSERNAMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_USERID", DbType="NVarChar(500)")]
		public string USERID
		{
			get
			{
				return this._USERID;
			}
			set
			{
				if ((this._USERID != value))
				{
					this.OnUSERIDChanging(value);
					this.SendPropertyChanging();
					this._USERID = value;
					this.SendPropertyChanged("USERID");
					this.OnUSERIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OPNION", DbType="Int NOT NULL")]
		public int OPNION
		{
			get
			{
				return this._OPNION;
			}
			set
			{
				if ((this._OPNION != value))
				{
					this.OnOPNIONChanging(value);
					this.SendPropertyChanging();
					this._OPNION = value;
					this.SendPropertyChanged("OPNION");
					this.OnOPNIONChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_SUMMARY", DbType="NVarChar(MAX)")]
		public string SUMMARY
		{
			get
			{
				return this._SUMMARY;
			}
			set
			{
				if ((this._SUMMARY != value))
				{
					this.OnSUMMARYChanging(value);
					this.SendPropertyChanging();
					this._SUMMARY = value;
					this.SendPropertyChanged("SUMMARY");
					this.OnSUMMARYChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DATAID", DbType="NVarChar(500)")]
		public string DATAID
		{
			get
			{
				return this._DATAID;
			}
			set
			{
				if ((this._DATAID != value))
				{
					this.OnDATAIDChanging(value);
					this.SendPropertyChanging();
					this._DATAID = value;
					this.SendPropertyChanged("DATAID");
					this.OnDATAIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_QUEUETIME", DbType="DateTime")]
		public System.Nullable<System.DateTime> QUEUETIME
		{
			get
			{
				return this._QUEUETIME;
			}
			set
			{
				if ((this._QUEUETIME != value))
				{
					this.OnQUEUETIMEChanging(value);
					this.SendPropertyChanging();
					this._QUEUETIME = value;
					this.SendPropertyChanged("QUEUETIME");
					this.OnQUEUETIMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_RETRIES", DbType="Int NOT NULL")]
		public int RETRIES
		{
			get
			{
				return this._RETRIES;
			}
			set
			{
				if ((this._RETRIES != value))
				{
					this.OnRETRIESChanging(value);
					this.SendPropertyChanging();
					this._RETRIES = value;
					this.SendPropertyChanged("RETRIES");
					this.OnRETRIESChanged();
				}
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.TASK")]
	public partial class TASK : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private string _TASKID;
		
		private string _PROCESSNAME;
		
		private string _PROCESSID;
		
		private int _INCIDENTNO;
		
		private string _TASKUSERID;
		
		private string _TASKUSERNAME;
		
		private string _ASSIGNTOUSERID;
		
		private string _ASSIGNTOUSERNAME;
		
		private System.DateTime _STARTTIME;
		
		private System.DateTime _ENDTIME;
		
		private System.DateTime _COMPLETEDTIMEOUT;
		
		private int _STATUS;
		
		private int _ISTATUS;
		
		private string _IDATAID;
		
		private System.DateTime _ISTARTTIME;
		
		private System.DateTime _IENDTIME;
		
		private string _SUMMARY;
		
		private string _IACTIVEUSERNAMES;
		
		private string _IACTIVESTEPLABELS;
		
		private string _IACTIVETASKOBJECTS;
		
		private string _STEPID;
		
		private string _STEPLABEL;
		
		private string _PREVTASKID;
		
		private int _OPNION;
		
		private string _COMMENT;
		
		private string _INITIATORID;
		
		private string _INITIATORNAME;
		
    #region 可扩展性方法定义
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void OnTASKIDChanging(string value);
    partial void OnTASKIDChanged();
    partial void OnPROCESSNAMEChanging(string value);
    partial void OnPROCESSNAMEChanged();
    partial void OnPROCESSIDChanging(string value);
    partial void OnPROCESSIDChanged();
    partial void OnINCIDENTNOChanging(int value);
    partial void OnINCIDENTNOChanged();
    partial void OnTASKUSERIDChanging(string value);
    partial void OnTASKUSERIDChanged();
    partial void OnTASKUSERNAMEChanging(string value);
    partial void OnTASKUSERNAMEChanged();
    partial void OnASSIGNTOUSERIDChanging(string value);
    partial void OnASSIGNTOUSERIDChanged();
    partial void OnASSIGNTOUSERNAMEChanging(string value);
    partial void OnASSIGNTOUSERNAMEChanged();
    partial void OnSTARTTIMEChanging(System.DateTime value);
    partial void OnSTARTTIMEChanged();
    partial void OnENDTIMEChanging(System.DateTime value);
    partial void OnENDTIMEChanged();
    partial void OnCOMPLETEDTIMEOUTChanging(System.DateTime value);
    partial void OnCOMPLETEDTIMEOUTChanged();
    partial void OnSTATUSChanging(int value);
    partial void OnSTATUSChanged();
    partial void OnISTATUSChanging(int value);
    partial void OnISTATUSChanged();
    partial void OnIDATAIDChanging(string value);
    partial void OnIDATAIDChanged();
    partial void OnISTARTTIMEChanging(System.DateTime value);
    partial void OnISTARTTIMEChanged();
    partial void OnIENDTIMEChanging(System.DateTime value);
    partial void OnIENDTIMEChanged();
    partial void OnSUMMARYChanging(string value);
    partial void OnSUMMARYChanged();
    partial void OnIACTIVEUSERNAMESChanging(string value);
    partial void OnIACTIVEUSERNAMESChanged();
    partial void OnIACTIVESTEPLABELSChanging(string value);
    partial void OnIACTIVESTEPLABELSChanged();
    partial void OnIACTIVETASKOBJECTSChanging(string value);
    partial void OnIACTIVETASKOBJECTSChanged();
    partial void OnSTEPIDChanging(string value);
    partial void OnSTEPIDChanged();
    partial void OnSTEPLABELChanging(string value);
    partial void OnSTEPLABELChanged();
    partial void OnPREVTASKIDChanging(string value);
    partial void OnPREVTASKIDChanged();
    partial void OnOPNIONChanging(int value);
    partial void OnOPNIONChanged();
    partial void OnCOMMENTChanging(string value);
    partial void OnCOMMENTChanged();
    partial void OnINITIATORIDChanging(string value);
    partial void OnINITIATORIDChanged();
    partial void OnINITIATORNAMEChanging(string value);
    partial void OnINITIATORNAMEChanged();
    #endregion
		
		public TASK()
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TASKID", DbType="NVarChar(50) NOT NULL", CanBeNull=false, IsPrimaryKey=true)]
		public string TASKID
		{
			get
			{
				return this._TASKID;
			}
			set
			{
				if ((this._TASKID != value))
				{
					this.OnTASKIDChanging(value);
					this.SendPropertyChanging();
					this._TASKID = value;
					this.SendPropertyChanged("TASKID");
					this.OnTASKIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_PROCESSNAME", DbType="NVarChar(2000)")]
		public string PROCESSNAME
		{
			get
			{
				return this._PROCESSNAME;
			}
			set
			{
				if ((this._PROCESSNAME != value))
				{
					this.OnPROCESSNAMEChanging(value);
					this.SendPropertyChanging();
					this._PROCESSNAME = value;
					this.SendPropertyChanged("PROCESSNAME");
					this.OnPROCESSNAMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_PROCESSID", DbType="NVarChar(500)")]
		public string PROCESSID
		{
			get
			{
				return this._PROCESSID;
			}
			set
			{
				if ((this._PROCESSID != value))
				{
					this.OnPROCESSIDChanging(value);
					this.SendPropertyChanging();
					this._PROCESSID = value;
					this.SendPropertyChanged("PROCESSID");
					this.OnPROCESSIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_INCIDENTNO", DbType="Int NOT NULL")]
		public int INCIDENTNO
		{
			get
			{
				return this._INCIDENTNO;
			}
			set
			{
				if ((this._INCIDENTNO != value))
				{
					this.OnINCIDENTNOChanging(value);
					this.SendPropertyChanging();
					this._INCIDENTNO = value;
					this.SendPropertyChanged("INCIDENTNO");
					this.OnINCIDENTNOChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TASKUSERID", DbType="NVarChar(500)")]
		public string TASKUSERID
		{
			get
			{
				return this._TASKUSERID;
			}
			set
			{
				if ((this._TASKUSERID != value))
				{
					this.OnTASKUSERIDChanging(value);
					this.SendPropertyChanging();
					this._TASKUSERID = value;
					this.SendPropertyChanged("TASKUSERID");
					this.OnTASKUSERIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TASKUSERNAME", DbType="NVarChar(500)")]
		public string TASKUSERNAME
		{
			get
			{
				return this._TASKUSERNAME;
			}
			set
			{
				if ((this._TASKUSERNAME != value))
				{
					this.OnTASKUSERNAMEChanging(value);
					this.SendPropertyChanging();
					this._TASKUSERNAME = value;
					this.SendPropertyChanged("TASKUSERNAME");
					this.OnTASKUSERNAMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ASSIGNTOUSERID", DbType="NVarChar(500)")]
		public string ASSIGNTOUSERID
		{
			get
			{
				return this._ASSIGNTOUSERID;
			}
			set
			{
				if ((this._ASSIGNTOUSERID != value))
				{
					this.OnASSIGNTOUSERIDChanging(value);
					this.SendPropertyChanging();
					this._ASSIGNTOUSERID = value;
					this.SendPropertyChanged("ASSIGNTOUSERID");
					this.OnASSIGNTOUSERIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ASSIGNTOUSERNAME", DbType="NVarChar(500)")]
		public string ASSIGNTOUSERNAME
		{
			get
			{
				return this._ASSIGNTOUSERNAME;
			}
			set
			{
				if ((this._ASSIGNTOUSERNAME != value))
				{
					this.OnASSIGNTOUSERNAMEChanging(value);
					this.SendPropertyChanging();
					this._ASSIGNTOUSERNAME = value;
					this.SendPropertyChanged("ASSIGNTOUSERNAME");
					this.OnASSIGNTOUSERNAMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_STARTTIME", DbType="DateTime NOT NULL")]
		public System.DateTime STARTTIME
		{
			get
			{
				return this._STARTTIME;
			}
			set
			{
				if ((this._STARTTIME != value))
				{
					this.OnSTARTTIMEChanging(value);
					this.SendPropertyChanging();
					this._STARTTIME = value;
					this.SendPropertyChanged("STARTTIME");
					this.OnSTARTTIMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ENDTIME", DbType="DateTime NOT NULL")]
		public System.DateTime ENDTIME
		{
			get
			{
				return this._ENDTIME;
			}
			set
			{
				if ((this._ENDTIME != value))
				{
					this.OnENDTIMEChanging(value);
					this.SendPropertyChanging();
					this._ENDTIME = value;
					this.SendPropertyChanged("ENDTIME");
					this.OnENDTIMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_COMPLETEDTIMEOUT", DbType="DateTime NOT NULL")]
		public System.DateTime COMPLETEDTIMEOUT
		{
			get
			{
				return this._COMPLETEDTIMEOUT;
			}
			set
			{
				if ((this._COMPLETEDTIMEOUT != value))
				{
					this.OnCOMPLETEDTIMEOUTChanging(value);
					this.SendPropertyChanging();
					this._COMPLETEDTIMEOUT = value;
					this.SendPropertyChanged("COMPLETEDTIMEOUT");
					this.OnCOMPLETEDTIMEOUTChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_STATUS", DbType="Int NOT NULL")]
		public int STATUS
		{
			get
			{
				return this._STATUS;
			}
			set
			{
				if ((this._STATUS != value))
				{
					this.OnSTATUSChanging(value);
					this.SendPropertyChanging();
					this._STATUS = value;
					this.SendPropertyChanged("STATUS");
					this.OnSTATUSChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ISTATUS", DbType="Int NOT NULL")]
		public int ISTATUS
		{
			get
			{
				return this._ISTATUS;
			}
			set
			{
				if ((this._ISTATUS != value))
				{
					this.OnISTATUSChanging(value);
					this.SendPropertyChanging();
					this._ISTATUS = value;
					this.SendPropertyChanged("ISTATUS");
					this.OnISTATUSChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_IDATAID", DbType="NVarChar(500)")]
		public string IDATAID
		{
			get
			{
				return this._IDATAID;
			}
			set
			{
				if ((this._IDATAID != value))
				{
					this.OnIDATAIDChanging(value);
					this.SendPropertyChanging();
					this._IDATAID = value;
					this.SendPropertyChanged("IDATAID");
					this.OnIDATAIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ISTARTTIME", DbType="DateTime NOT NULL")]
		public System.DateTime ISTARTTIME
		{
			get
			{
				return this._ISTARTTIME;
			}
			set
			{
				if ((this._ISTARTTIME != value))
				{
					this.OnISTARTTIMEChanging(value);
					this.SendPropertyChanging();
					this._ISTARTTIME = value;
					this.SendPropertyChanged("ISTARTTIME");
					this.OnISTARTTIMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_IENDTIME", DbType="DateTime NOT NULL")]
		public System.DateTime IENDTIME
		{
			get
			{
				return this._IENDTIME;
			}
			set
			{
				if ((this._IENDTIME != value))
				{
					this.OnIENDTIMEChanging(value);
					this.SendPropertyChanging();
					this._IENDTIME = value;
					this.SendPropertyChanged("IENDTIME");
					this.OnIENDTIMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_SUMMARY", DbType="NVarChar(MAX)")]
		public string SUMMARY
		{
			get
			{
				return this._SUMMARY;
			}
			set
			{
				if ((this._SUMMARY != value))
				{
					this.OnSUMMARYChanging(value);
					this.SendPropertyChanging();
					this._SUMMARY = value;
					this.SendPropertyChanged("SUMMARY");
					this.OnSUMMARYChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_IACTIVEUSERNAMES", DbType="NVarChar(2000)")]
		public string IACTIVEUSERNAMES
		{
			get
			{
				return this._IACTIVEUSERNAMES;
			}
			set
			{
				if ((this._IACTIVEUSERNAMES != value))
				{
					this.OnIACTIVEUSERNAMESChanging(value);
					this.SendPropertyChanging();
					this._IACTIVEUSERNAMES = value;
					this.SendPropertyChanged("IACTIVEUSERNAMES");
					this.OnIACTIVEUSERNAMESChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_IACTIVESTEPLABELS", DbType="NVarChar(2000)")]
		public string IACTIVESTEPLABELS
		{
			get
			{
				return this._IACTIVESTEPLABELS;
			}
			set
			{
				if ((this._IACTIVESTEPLABELS != value))
				{
					this.OnIACTIVESTEPLABELSChanging(value);
					this.SendPropertyChanging();
					this._IACTIVESTEPLABELS = value;
					this.SendPropertyChanged("IACTIVESTEPLABELS");
					this.OnIACTIVESTEPLABELSChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_IACTIVETASKOBJECTS", DbType="NVarChar(MAX)")]
		public string IACTIVETASKOBJECTS
		{
			get
			{
				return this._IACTIVETASKOBJECTS;
			}
			set
			{
				if ((this._IACTIVETASKOBJECTS != value))
				{
					this.OnIACTIVETASKOBJECTSChanging(value);
					this.SendPropertyChanging();
					this._IACTIVETASKOBJECTS = value;
					this.SendPropertyChanged("IACTIVETASKOBJECTS");
					this.OnIACTIVETASKOBJECTSChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_STEPID", DbType="NVarChar(500)")]
		public string STEPID
		{
			get
			{
				return this._STEPID;
			}
			set
			{
				if ((this._STEPID != value))
				{
					this.OnSTEPIDChanging(value);
					this.SendPropertyChanging();
					this._STEPID = value;
					this.SendPropertyChanged("STEPID");
					this.OnSTEPIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_STEPLABEL", DbType="NVarChar(2000)")]
		public string STEPLABEL
		{
			get
			{
				return this._STEPLABEL;
			}
			set
			{
				if ((this._STEPLABEL != value))
				{
					this.OnSTEPLABELChanging(value);
					this.SendPropertyChanging();
					this._STEPLABEL = value;
					this.SendPropertyChanged("STEPLABEL");
					this.OnSTEPLABELChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_PREVTASKID", DbType="NVarChar(50)")]
		public string PREVTASKID
		{
			get
			{
				return this._PREVTASKID;
			}
			set
			{
				if ((this._PREVTASKID != value))
				{
					this.OnPREVTASKIDChanging(value);
					this.SendPropertyChanging();
					this._PREVTASKID = value;
					this.SendPropertyChanged("PREVTASKID");
					this.OnPREVTASKIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OPNION", DbType="Int NOT NULL")]
		public int OPNION
		{
			get
			{
				return this._OPNION;
			}
			set
			{
				if ((this._OPNION != value))
				{
					this.OnOPNIONChanging(value);
					this.SendPropertyChanging();
					this._OPNION = value;
					this.SendPropertyChanged("OPNION");
					this.OnOPNIONChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_COMMENT", DbType="NVarChar(MAX)")]
		public string COMMENT
		{
			get
			{
				return this._COMMENT;
			}
			set
			{
				if ((this._COMMENT != value))
				{
					this.OnCOMMENTChanging(value);
					this.SendPropertyChanging();
					this._COMMENT = value;
					this.SendPropertyChanged("COMMENT");
					this.OnCOMMENTChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_INITIATORID", DbType="NVarChar(500)")]
		public string INITIATORID
		{
			get
			{
				return this._INITIATORID;
			}
			set
			{
				if ((this._INITIATORID != value))
				{
					this.OnINITIATORIDChanging(value);
					this.SendPropertyChanging();
					this._INITIATORID = value;
					this.SendPropertyChanged("INITIATORID");
					this.OnINITIATORIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_INITIATORNAME", DbType="NVarChar(500)")]
		public string INITIATORNAME
		{
			get
			{
				return this._INITIATORNAME;
			}
			set
			{
				if ((this._INITIATORNAME != value))
				{
					this.OnINITIATORNAMEChanging(value);
					this.SendPropertyChanging();
					this._INITIATORNAME = value;
					this.SendPropertyChanged("INITIATORNAME");
					this.OnINITIATORNAMEChanged();
				}
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
	}
}
#pragma warning restore 1591
