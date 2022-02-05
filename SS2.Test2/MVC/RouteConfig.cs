using System.Web.Mvc;
using System.Web.Routing;

namespace System {
    public class RouteConfig {
        internal static void RegisterRoutes() {
            RegisterRoutes(RouteTable.Routes);
        }

        private static void RegisterRoutes(RouteCollection routes) {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute("default", "api/{controller}/{action}");
        }
    }
}