using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Hosting;

namespace SS2
{
    public class InitControlsRes
    {
        public static void CopyPages()
        {
            var enableFiles = ConfigurationManager.AppSettings["SS2.SControls.ExportFile"];
            if (string.IsNullOrEmpty(enableFiles) || (enableFiles != "1" && enableFiles.ToLower() != "true"))
            {
                return;
            }

            foreach (string res in typeof(InitControlsRes).Assembly.GetManifestResourceNames())
            {
                Match mre = Regex.Match(res, "^SS2.__SSControls\\.(.+)$", RegexOptions.IgnoreCase);
                if (mre.Success) ExportFile("~/__SSControls/" + mre.Groups[1].Value, res, true);
            }
        }

        static string ExportFile(string path, string resName, bool? overwrite)
        {
            if (path.StartsWith("~/"))
            {
                path = HostingEnvironment.MapPath(path);
            }
            string directoryName = Path.GetDirectoryName(path);
            if (!Directory.Exists(directoryName))
            {
                Directory.CreateDirectory(directoryName);
            }
            if (File.Exists(path))
            {
                if (overwrite.HasValue && !overwrite.Value)
                {
                    return path;
                }
                if (!overwrite.HasValue)
                {
                    DateTime lastWriteTime = new FileInfo(typeof(InitControlsRes).Assembly.Location).LastWriteTime;
                    DateTime lastWriteTime2 = new FileInfo(path).LastWriteTime;
                    if (lastWriteTime2 > lastWriteTime)
                    {
                        return path;
                    }
                }
            }
            Assembly assembly = typeof(InitControlsRes).Assembly;
            using (Stream stream = assembly.GetManifestResourceStream(resName))
            {
                if (stream == null)
                {
                    throw new Exception($"无法从程序集 [{assembly.FullName}] 读取资源：{resName}");
                }
                byte[] array = new byte[4096];
                using (FileStream fileStream = new FileStream(path, FileMode.Create))
                {
                    int num = 0;
                    while ((num = stream.Read(array, 0, array.Length)) > 0)
                    {
                        fileStream.Write(array, 0, num);
                    }
                }
            }

            //解压文件
            if (path.ToLower().EndsWith(".zip"))
            {
                ZipHelper.Decompression(path, Path.GetDirectoryName(path), true);
            }
            return path;
        }
    }
}