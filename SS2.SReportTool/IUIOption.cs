using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.SReportTool
{
    /// <summary>
    /// UI界面配置项
    /// </summary>
    public interface IUIOption
    {
        List<Model.UIOptionItem> GetOptions();
    }
}
