using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SGridList
{
    public class GridDataSource
    {
        public string ConnectionString
        {
            get
            {
                if (string.IsNullOrEmpty(_ConnectionString))
                {
                    return Configuration.ConnectString;
                }
                return _ConnectionString;
            }
            set { _ConnectionString = value; }
        }
        string _ConnectionString;

        public string QuerySQL
        {
            get
            {
                if (string.IsNullOrEmpty(_QuerySQL))
                {
                    _QuerySQL = string.Format("select * from " + TableName);
                }
                if (QuerySQLMethod != null)
                {
                    _QuerySQL = QuerySQLMethod();
                }
                return _QuerySQL;
            }
            set
            {
                _QuerySQL = value;
            }
        }
        string _QuerySQL { get; set; }

        public Func<string> QuerySQLMethod { get; set; }

        public string TableName { get; set; }
    }
}