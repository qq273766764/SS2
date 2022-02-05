using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SS2.ReportHelper.Model
{
    public partial class gr_Connection
    {
        //public int ID;

        public string Provider;

        public string DataSource;

        public string InitialCatalog;

        public string UserID;

        public string Password;

        public string ConnStr;

        public string GetConnectString(bool initCate = true)
        {
            if (!string.IsNullOrEmpty(ConnStr)) { return ConnStr; }
            return string.Format("Data Source={0};Initial Catalog={1};Persist Security Info=True;User ID={2};Password={3}",
                DataSource,
                initCate ? InitialCatalog : "",
                UserID,
                Password);
        }

        //public string GetConnectStringHidePwd(bool initCate = true)
        //{
        //    if (!string.IsNullOrEmpty(ConnStr)) { return ConnStr; }
        //    return string.Format("Data Source={0};Initial Catalog={1};Persist Security Info=True;User ID={2};Password={3}",
        //        DataSource,
        //        initCate ? InitialCatalog : "",
        //        UserID,
        //        "******");
        //}
    }
}
