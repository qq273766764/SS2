using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace SS2.SFile
{
    internal class FileDB
    {
        /// <summary>
        /// 创建目录
        /// </summary>
        /// <param name="path"></param>
        /// <param name="dirName"></param>
        /// <returns></returns>
        public Model.FS_DIR CreateDir(string path, string dirName, string createID, string createName)
        {
            if (string.IsNullOrEmpty(dirName)) { throw new Exception("目录名称不能为空"); }
            var allPath = PathHelper.CombinePath(path, dirName);
            if (FindDirByPath(allPath) != null) { throw new Exception("目录已存在:"+allPath); }
            var id = "D" + IDHelper.GetMd5_16(allPath);
            var parendDir = FindDirByPath(path);
            var dir = new Model.FS_DIR()
            {
                ID = id,
                DirType = 0,
                CreateTime = DateTime.Now,
                CreateUserID = createID,
                CreateUserName = createName,
                IDPath = PathHelper.CombinePath(parendDir?.IDPath, id),
                IsHide = false,
                Icon = null,
                Name = dirName,
                NamePath = PathHelper.CombinePath(parendDir?.NamePath, dirName),
                ParentID = parendDir?.ID,
                TotalFileCount = 0,
                TotalFileSize = 0,
                TotalFileSizeText = PathHelper.GetSizeText(0)
            };
            using (var ctx = new Model.FSDataContext())
            {
                ctx.FS_DIR.InsertOnSubmit(dir);
                ctx.SubmitChanges();
            }
            return dir;
        }

        /// <summary>
        /// 创建文件对象
        /// </summary>
        /// <param name="path">文件系统目录</param>
        /// <param name="fileName">文件名</param>
        /// <param name="fileSize">文件大小</param>
        /// <param name="server">存储服务器</param>
        /// <param name="savePath">存储路径</param>
        /// <param name="dataID">数据ID</param>
        /// <param name="ctrID">控件ID</param>
        /// <param name="createID">创建用户</param>
        /// <param name="createName">创建用户</param>
        /// <returns></returns>
        public Model.FS_FILE CreateFile(string path, string fileName, long fileSize, string server, string savePath, string dataID, string ctrID, string createID, string createName)
        {
            path = PathHelper.FormatPath(path);
            var parentDir = FindDirByPath(path);
            var allPath = PathHelper.CombinePath(parentDir.NamePath, fileName);
            var file = new Model.FS_FILE()
            {
                ID = "F" + IDHelper.GetMd5_16(server + ":" + savePath),
                CreateTime = DateTime.Now,
                CreateUserID = createID,
                CreateUserName = createName,
                DataID = dataID,
                CtrID = ctrID,
                DirID = parentDir?.ID,
                DirPath = allPath,
                FileName = fileName,
                FileSize = fileSize,
                FileServer = server,
                FilePath = savePath,
                DelTime = DateTime.MaxValue,
                IsDel = false,
                FileSizeText = PathHelper.GetSizeText(fileSize),
                FileExt = Path.GetExtension(fileName)
            };
            using (var ctx = new Model.FSDataContext())
            {
                ctx.FS_FILE.InsertOnSubmit(file);
                ctx.SubmitChanges();
            }
            return file;
        }
        /// <summary>
        /// 删除目录
        /// </summary>
        /// <param name="dirId"></param>
        /// <returns></returns>
        public Model.FS_DIR DeleteDir(string idOrPath)
        {
            using (var ctx = new Model.FSDataContext())
            {
                var dir = ctx.FS_DIR.FirstOrDefault(i => i.ID == idOrPath || i.NamePath == idOrPath || i.IDPath == idOrPath);
                if (dir != null)
                {
                    if (ctx.FS_DIR.Any(i => i.IDPath.StartsWith(dir.IDPath) && i.ID != dir.ID))
                    {
                        throw new Exception("该目录下面含有子目录，不能直接删除");
                    }
                    if (ctx.FS_FILE.Any(i => i.DirPath.StartsWith(dir.NamePath) && i.IsDel == false))
                    {
                        throw new Exception("该目录下面含有文件，不能直接删除");
                    }
                    ctx.FS_DIR.DeleteOnSubmit(dir);
                    ctx.SubmitChanges();
                }
                return dir;
            }
        }
        /// <summary>
        /// 删除目录及子目录
        /// </summary>
        /// <param name="id"></param>
        /// <param name="delSubDir"></param>
        /// <param name="delSubFile"></param>
        /// <returns></returns>
        public Model.FS_DIR DeleteDirWithSub(string id)
        {
            using (var ctx = new Model.FSDataContext())
            {
                var dir = ctx.FS_DIR.FirstOrDefault(i => i.ID == id);
                if (dir != null)
                {
                    var subDirs = ctx.FS_DIR.Where(i => i.IDPath.StartsWith(dir.IDPath) && i.ID != dir.ID);
                    //var subFiles = ctx.FS_FILE.Where(i => i.DirPath.StartsWith(dir.NamePath));
                    //ctx.FS_FILE.DeleteAllOnSubmit(subFiles);
                    ctx.FS_DIR.DeleteAllOnSubmit(subDirs);
                    ctx.FS_DIR.DeleteOnSubmit(dir);
                    ctx.SubmitChanges();
                }
                return dir;
            }
        }
        /// <summary>
        /// 查找下级目录
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public List<Model.FS_DIR> FindSubDir(string path)
        {
            using (var ctx = new Model.FSDataContext())
            {
                return ctx.FS_DIR.Where(i => i.IDPath.StartsWith(path) || i.Name.StartsWith(path)).ToList();
            }
        }
        /// <summary>
        /// 删除文件
        /// </summary>
        /// <returns></returns>
        public List<Model.FS_FILE> DeleteFile(string[] ids)
        {
            using (var ctx = new Model.FSDataContext())
            {
                var files = ctx.FS_FILE.Where(i => ids.Contains(i.ID)).ToList();
                foreach (var file in files)
                {
                    file.IsDel = true;
                    file.DelTime = DateTime.Now;
                }
                ctx.SubmitChanges();
                return files;
            }
        }

        public Model.FS_FILE GetFileByID(string id)
        {
            using (var ctx = new Model.FSDataContext())
            {
                var dir = ctx.FS_FILE.FirstOrDefault(i => i.ID == id);
                return dir;
            }
        }

        public List<Model.FS_FILE> SearchFile(string path, string key, int pageIdx, int pageSize, out int total, bool recursion = false)
        {
            using (var ctx = new Model.FSDataContext())
            {
                var dir = FindDirByPath(path);

                var files = ctx.FS_FILE.Where(i => i.IsDel == false);
                if (recursion)
                {
                    files = files.Where(i => i.DirPath.StartsWith(dir.NamePath));
                }
                else
                {
                    files = files.Where(i => i.DirPath == dir.NamePath);
                }
                if (!string.IsNullOrEmpty(key))
                {
                    files = files.Where(i => i.FileName.Contains(key));
                }
                total = files.Count();
                return files.OrderByDescending(i => i.CreateTime).Skip((pageIdx - 1) * pageSize).Take(pageSize).ToList();
            }
        }

        public List<Model.FS_FILE> SearchFileByDirID(string dirID, string key, int pageIdx, int pageSize, out int total, bool recursion = false)
        {
            using (var ctx = new Model.FSDataContext())
            {
                var files = ctx.FS_FILE.Where(i => i.IsDel == false);
                if (recursion)
                {
                    var dir = FindDir(dirID);
                    files = files.Where(i => i.DirPath.StartsWith(dir.NamePath));
                }
                else
                {
                    files = files.Where(i => i.DirID == dirID);
                }
                if (!string.IsNullOrEmpty(key))
                {
                    files = files.Where(i => i.FileName.Contains(key));
                }
                total = files.Count();
                return files.OrderByDescending(i => i.CreateTime).Skip((pageIdx - 1) * pageSize).Take(pageSize).ToList();
            }
        }

        public List<Model.FS_FILE> SearchFileByDataID(string dataID, string ctrID, int pageIdx, int pageSize, out int total)
        {
            using (var ctx = new Model.FSDataContext())
            {
                var files = ctx.FS_FILE.AsQueryable();
                files = files.Where(i => i.DataID == dataID && i.CtrID == ctrID && i.IsDel == false);
                total = files.Count();
                return files.OrderByDescending(i => i.CreateTime).Skip((pageIdx - 1) * pageSize).Take(pageSize).ToList();
            }
        }

        /// <summary>
        /// 查找目录
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public Model.FS_DIR FindDirByPath(string path)
        {
            var dir = FindDir(path);
            if (dir != null) { return dir; }
            path = PathHelper.FormatPath(path);
            using (var ctx = new Model.FSDataContext())
            {
                return ctx.FS_DIR.FirstOrDefault(i => i.NamePath == path || i.IDPath == path);
            }
        }

        public Model.FS_DIR FindDir(string id)
        {
            using (var ctx = new Model.FSDataContext())
            {
                return ctx.FS_DIR.FirstOrDefault(i => i.ID == id || i.NamePath == id || i.IDPath == id);
            }
        }
    }

    public class IDHelper
    {
        /// <summary>
        /// 对字符串进行MD5加密
        /// </summary>
        /// <param name="src"></param>
        /// <returns></returns>
        public static string GetMd5_16(string src)
        {
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            string t2 = BitConverter.ToString(md5.ComputeHash(UTF8Encoding.Default.GetBytes(src ?? "")), 4, 8);
            t2 = t2.Replace("-", "");
            return t2;
        }

    }
}