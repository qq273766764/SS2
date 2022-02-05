using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SCache
{
    [ServiceContract]
    public interface IWebServer
    {
        #region String
        [OperationContract]
        void SetString(string key, string value, DateTime ExpirationTime, string hash);

        [OperationContract]
        string GetString(string key, string hash);

        #endregion

        #region DataTable
        [OperationContract]
        void SetDataTable(string key, DataTable value, DateTime ExpirationTime, string hash);

        [OperationContract]
        DataTable GetDataTable(string key, string hash);

        #endregion

        //#region HashTable
        //[OperationContract]
        //void SetHashTable(string key, Hashtable value, DateTime ExpirationTime, string hash);

        //[OperationContract]
        //Hashtable GetHashTable(string key, string hash);

        //#endregion

        #region Increment

        [OperationContract]
        void SetIncrement(string key, DateTime ExpirationTime, string hash);

        [OperationContract]
        int GetIncrement(string key, string hash);

        #endregion
    }
}
