using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.OC.DB
{
    public partial class OCDataBaseDataContext
    {
        public OCDataBaseDataContext() :
                base(Configuration.ConnectString)
        {
            OnCreated();
        }
    }

    public partial class OC_EMPLOYEE
    {
        public Model.Employee ToEmployee()
        {
            return new Model.Employee()
            {
                ID = this.ID,
                DataJson = this.DataJson,
                Disabled = this.Disabled,
                IDPath = this.IDPath,
                ParentID = this.ParentID,
                PWD = string.Empty,
                CreateTime = this.CreateTime,
                Email = this.Email,
                IsMainJob = this.IsMainJob,
                Jobs = this.Jobs,
                LoginName = this.LoginName,
                Name = this.Name,
                NamePath = this.NamePath,
                NType = (Model.NodeType)this.NType,
                PictureUrl = this.PictureUrl,
                Remark = this.Remark,
                Tel = this.Tel,
                UserName = this.UserName,
                Gender=this.Gender,
                WX = this.WX,
                

                Ext001 = this.Ext001,
                Ext002 = this.Ext002,
                Ext003 = this.Ext003,
                Ext004 = this.Ext004,
                Ext005 = this.Ext005
            };
        }

        public OC_EMPLOYEE FromEmployee(Model.Employee employee)
        {
            if (!string.IsNullOrWhiteSpace(employee.PWD) && employee.PWD != this.PWD)
            {
                this.PWD = StringHelper.GetPwd(employee.PWD);
            }
            if (string.IsNullOrEmpty(employee.ID)) { employee.ID = StringHelper.CreateID(employee); }
            this.ID = employee.ID;
            this.DataJson = employee.DataJson;
            this.Disabled = employee.Disabled;
            this.IDPath = employee.IDPath;
            this.ParentID = employee.ParentID;
            this.CreateTime = employee.CreateTime;
            this.Email = employee.Email;
            this.IsMainJob = employee.IsMainJob;
            this.Jobs = employee.Jobs;
            this.LoginName = employee.LoginName;
            this.Name = employee.Name;
            this.NamePath = employee.NamePath;
            this.NType = (int)employee.NType;
            this.PictureUrl = employee.PictureUrl;
            this.Remark = employee.Remark;
            this.Tel = employee.Tel;
            this.UserName = employee.UserName;
            this.Gender = employee.Gender;
            this.WX = employee.WX;

            this.Ext001 = employee.Ext001;
            this.Ext002 = employee.Ext002;
            this.Ext003 = employee.Ext003;
            this.Ext004 = employee.Ext004;
            this.Ext005 = employee.Ext005;
            return this;
        }
    }

    public partial class OC_NODE
    {
        public Model.IOCNode ToModel()
        {
            Model.IOCNode node;
            var ntype = (Model.NodeType)this.NType;

            switch (ntype)
            {
                case Model.NodeType.Company:
                    node = new Model.Company();
                    break;
                case Model.NodeType.Department:
                    node = new Model.Department();
                    break;
                case Model.NodeType.Employee:
                    node = new Model.Employee();
                    break;
                case Model.NodeType.Group:
                    node = new Model.Group();
                    break;
                case Model.NodeType.Position:
                    node = new Model.Position();
                    break;
                default:
                    node = new Model.Group();
                    break;
            }

            node.ID = this.ID;

            node.Disabled = this.Disabled;
            node.IDPath = this.IDPath;
            node.ParentID = this.ParentID;
            node.CreateTime = this.CreateTime;
            node.IsMainJob = this.IsMainJob;
            node.Name = this.Name;
            node.NamePath = this.NamePath;
            node.NType = (Model.NodeType)this.NType;
            
            node.Ext001 = this.Ext001;
            node.Ext002 = this.Ext002;
            node.Ext003 = this.Ext003;
            node.Ext004 = this.Ext004;
            node.Ext005 = this.Ext005;

            return node;
        }

        public OC_NODE FromModel(Model.IOCNode node)
        {
            if (string.IsNullOrEmpty(node.ID)) { node.ID = StringHelper.CreateID(node); }
            this.ID = node.ID;
            this.Disabled = node.Disabled;
            this.IDPath = node.IDPath;
            this.ParentID = node.ParentID;
            this.CreateTime = node.CreateTime;
            this.IsMainJob = node.IsMainJob;
            this.Name = node.Name;
            this.NamePath = node.Name;
            this.NType = (int)node.NType;

            this.Ext001 = node.Ext001;
            this.Ext002 = node.Ext002;
            this.Ext003 = node.Ext003;
            this.Ext004 = node.Ext004;
            this.Ext005 = node.Ext005;
            return this;
        }
    }
}
