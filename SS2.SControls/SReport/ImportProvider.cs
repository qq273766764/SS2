using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;

namespace SS2.SReport
{
    public class ImportProvider
    {
        /// <summary>
        /// Excel模板文件，为空则根据报表配置信息生成模板文件及数据
        /// </summary>
        public string TemplateFilePath { get; set; }

        /// <summary>
        /// 读取Excel文件
        /// </summary>
        public Func<DataTable, List<ImportError>> ReadData { get; set; }

        /// <summary>
        /// 保存数据后
        /// 参数
        /// arg1:导入数据
        /// arg2:是否导入成功
        /// arg3:错误信息
        /// </summary>
        public Action<DataTable, bool, Exception> AfterSaveDB { get; set; }

        /// <summary>
        /// 自定义导入方法（in :导入文件）
        /// </summary>
        public Func<FileStream, List<ImportError>> CustomImport { get; set; }

        /// <summary>
        /// 数据表名，为空则查找编辑页面配置的数据表名
        /// </summary>
        public string TableName { get; set; }
    }

    public class ImportError
    {
        public int Line { get; set; }

        public string Values { get; set; }

        public string Error { get; set; }
    }
}