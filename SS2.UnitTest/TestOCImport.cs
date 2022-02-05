using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.UnitTest
{
    class TestOCImport
    {
        public void Test()
        {
            var db = new SS2.OC.OrgDB();
            var datas = db.FindImportData(new List<OC.Model.DataItem>() {
                new OC.Model.DataItem(){ CompanyName="连云港城建", DepNameLevel1="营销部", DepNameLevel2="", PosName="主任", LoginName="zhangsan", UserName="张三" },
                new OC.Model.DataItem(){ CompanyName="连云港城建", DepNameLevel1="营销部", DepNameLevel2="", PosName="副主任", LoginName="wangwu", UserName="王五" },
                new OC.Model.DataItem(){ CompanyName="连云港城建", DepNameLevel1="营销部", DepNameLevel2="", PosName="副主任", LoginName="wangwu1", UserName="王五1" },
                new OC.Model.DataItem(){ CompanyName="连云港城建", DepNameLevel1="市场部", DepNameLevel2="", PosName="主任", LoginName="a1", UserName="阿1" },
                new OC.Model.DataItem(){ CompanyName="连云港城建", DepNameLevel1="市场部", DepNameLevel2="", PosName="副主任", LoginName="a2", UserName="阿2" },
                new OC.Model.DataItem(){ CompanyName="连云港城建", DepNameLevel1="市场部", DepNameLevel2="", PosName="副主任", LoginName="a3", UserName="阿3" },
                new OC.Model.DataItem(){ CompanyName="连云港城建", DepNameLevel1="市场部", DepNameLevel2="", PosName="副主任", LoginName="a4", UserName="阿4" },
                new OC.Model.DataItem(){ CompanyName="连云港城建", DepNameLevel1="管理中心", DepNameLevel2="", PosName="系统管理", LoginName="sa", UserName="sa" }
            });
            db.SaveImportData(datas);
        }
    }
}
