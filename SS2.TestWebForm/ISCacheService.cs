using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace SS2.TestWebForm
{
    // 注意: 使用“重构”菜单上的“重命名”命令，可以同时更改代码和配置文件中的接口名“ISCacheService”。
    [ServiceContract]
    public interface ISCacheService
    {
        [OperationContract]
        void Set(string key, object value, DateTime ExpirationTime, string hash);

        [OperationContract]
        object Get(string key, string hash);
    }
}
