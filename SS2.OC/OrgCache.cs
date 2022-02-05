using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Text;
using System.Threading.Tasks;

namespace SS2.OC
{
    public static class OrgCache
    {
        const string CacheKey = "SS2.OC.OCCache.nodes";
        const string CacheKeyAuthorization = "SS2.OC.OCCache.nodes.Authorization";
        static int CacheVersion = 0;
        static int CacheAuthorVerison = 0;

        public static List<Model.IOCNode> Nodes
        {
            get
            {
                //获取数据版本如果版本较大就清空缓存
                var ssc = new SCache.Client();
                var version = ssc.GetIncrement(CacheKey);
                if (version > CacheVersion) {
                    MemoryCache.Default.Remove(CacheKey);
                }

                var cache = MemoryCache.Default.Get(CacheKey);
                if (cache == null)
                {
                    cache = new OrgDB().InitPath();
                    MemoryCache.Default.Set(CacheKey, cache, new CacheItemPolicy()
                    {
                        AbsoluteExpiration = DateTime.Now.AddSeconds(Configuration.CacheSecond)
                    });
                    CacheVersion = version;
                }
                return cache as List<Model.IOCNode>;
            }
        }

        public static List<Model.Authorization> Authorizations
        {
            get
            {
                //获取数据版本如果版本较大就清空缓存
                var ssc = new SCache.Client();
                var version = ssc.GetIncrement(CacheKeyAuthorization);
                if (version > CacheAuthorVerison)
                {
                    MemoryCache.Default.Remove(CacheKeyAuthorization);
                }

                var cache = MemoryCache.Default.Get(CacheKeyAuthorization);
                if (cache == null)
                {
                    cache = new OrgDB().FindAuthorization();
                    MemoryCache.Default.Set(CacheKeyAuthorization, cache, new CacheItemPolicy()
                    {
                        AbsoluteExpiration = DateTime.Now.AddSeconds(Configuration.CacheSecond)
                    });
                    CacheAuthorVerison = version;
                }
                return cache as List<Model.Authorization>;
            }
        }

        public static List<Model.Employee> Employees
        {
            get
            {
                return Nodes.Where(i => i.NType == Model.NodeType.Employee).Select(i => (Model.Employee)i).ToList();
            }
        }

        public static List<Model.Company> Companys
        {
            get
            {
                return Nodes.Where(i => i.NType == Model.NodeType.Company).Select(i => (Model.Company)i).ToList();
            }
        }

        public static List<Model.Department> Departments
        {
            get
            {
                return Nodes.Where(i => i.NType == Model.NodeType.Department).Select(i => (Model.Department)i).ToList();
            }
        }

        public static List<Model.Group> Groups
        {
            get
            {
                return Nodes.Where(i => i.NType == Model.NodeType.Group).Select(i => (Model.Group)i).ToList();
            }
        }

        public static List<Model.Position> Positions
        {
            get
            {
                return Nodes.Where(i => i.NType == Model.NodeType.Position).Select(i => (Model.Position)i).ToList();
            }
        }

        public static void Clear()
        {
            MemoryCache.Default.Remove(CacheKey);
            new SCache.Client().SetIncrement(CacheKey, DateTime.Now.AddYears(1));
            ClearAuthorization();
        }

        public static void ClearAuthorization()
        {
            MemoryCache.Default.Remove(CacheKeyAuthorization);
            new SCache.Client().SetIncrement(CacheKeyAuthorization, DateTime.Now.AddYears(1));
        }
    }
}
