using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SFile
{
    public class PathHelper
    {
        public static string CombinePath(string path, string dirName)
        {
            if (string.IsNullOrEmpty(dirName)) { throw new Exception("目录名称不能为空"); }
            if (dirName.Contains("\\")) { throw new Exception("目录名称不能包含斜杠"); }

            var pathItems = new List<string>();
            if (!string.IsNullOrEmpty(path))
            {
                pathItems.AddRange(path.Split(new string[] { "\\" }, StringSplitOptions.RemoveEmptyEntries));
            }
            if (!string.IsNullOrEmpty(dirName))
            {
                pathItems.Add(dirName);
            }
            return FormatPath(string.Join("\\", pathItems));
        }

        public static string FormatPath(string path)
        {
            if (string.IsNullOrEmpty(path)) { return "\\"; }
            if (!path.StartsWith("\\"))
            {
                path = "\\" + path;
            }
            if (path.EndsWith("\\"))
            {
                path = path.Substring(0, path.Length - 2);
            }
            return path;
        }

        public static string GetLastDirName(string path)
        {
            if (string.IsNullOrEmpty(path)) { return null; }
            return path.Split(new char[] { '\\', '/' }, StringSplitOptions.RemoveEmptyEntries).LastOrDefault();
        }

        public static string GetParentPath(string path)
        {
            if (string.IsNullOrEmpty(path)) { return null; }
            var dirs = path.Split(new char[] { '\\', '/' }, StringSplitOptions.RemoveEmptyEntries).ToList();
            dirs.RemoveAt(dirs.Count - 1);
            if (dirs.Count == 0) { return null; }
            return FormatPath(string.Join("\\", dirs));
        }

        public static string GetSizeText(long totalsize)
        {
            var size_g = 1024 * 1024 * 1024M;
            var size_m = 1024 * 1024M;
            var size_k = 1024M;

            return (totalsize / size_k).ToString("N") + " KB";

            //var b = totalsize % size_k;
            //var k = totalsize % size_m;
            //var m = totalsize % size_g;
            //var g = totalsize / size_g;

            //StringBuilder text = new StringBuilder();
            //if (g > 0) text.Append(g + "G");
            //if (m > 0) text.Append(m + "M");
            //if (k > 0) text.Append(k + "K");
            //if (b > 0) text.Append(b + "B");
            //return text.ToString();
        }

    }
}