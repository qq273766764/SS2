using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace SS2.SFile
{
    public class FileApi
    {
        /// <summary>
        /// 按照日期自动创建存储文件夹
        /// </summary>
        void CreateFolder(string path)
        {
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
        }

        /// <summary>
        /// 验证文件类型
        /// </summary>
        /// <param name="filename"></param>
        /// <returns></returns>
        bool CheckFileType(string filename)
        {
            var ftypes = Configuration.FileTypes.Split(new string[] { ",", "，" }, StringSplitOptions.RemoveEmptyEntries);
            if (ftypes.Contains(".*")) { return true; }
            return ftypes.Contains(Path.GetExtension(filename).ToLower());
        }

        /// <summary>
        /// 保存文件
        /// </summary>
        /// <param name="path">目录</param>
        /// <param name="file">上传文件</param>
        /// <param name="dataId">数据ID</param>
        /// <param name="ctrId">控件ID</param>
        /// <param name="createID">创建人</param>
        /// <param name="createName">创建人</param>
        /// <returns></returns>
        public Model.FS_FILE SaveHttpPostFile(string path, HttpPostedFileBase file, string dataId, string ctrId, string createID, string createName)
        {
            if (string.IsNullOrEmpty(file.FileName) || file.ContentLength == 0) return null;

            string fileSavePath = Configuration.FileSavePath;
            if (fileSavePath.StartsWith("~")) { fileSavePath = HttpContext.Current.Server.MapPath(fileSavePath); }

            //添加日期文件夹
            fileSavePath = (fileSavePath + DateTime.Now.ToString("'/'yyyy'/'MM'/'dd")).Replace("//", "/");

            var originalName = file.FileName;

            //目录创建
            CreateFolder(fileSavePath);

            var newFileName = Guid.NewGuid().ToString() + Path.GetExtension(originalName);

            //格式验证
            if (!CheckFileType(originalName))
            {
                throw new Exception("文件类型不允许上传");
            }

            //验证文件大小

            var savepath = fileSavePath + "/" + newFileName;
            file.SaveAs(savepath);

            //添加数据
            var dir = FindDir(path, createID, createName, true);
            var fs = new FileDB().CreateFile(dir.ID, file.FileName, file.InputStream.Length, Configuration.ServerName, savepath, dataId, ctrId, createID, createName);

            return fs;
        }

        public Model.FS_FILE SaveHttpPostFile(string path, HttpPostedFile file, string dataId, string ctrId, string createID, string createName)
        {
            var filebase = new HttpPostedFileWrapper(file) as HttpPostedFileBase;
            return SaveHttpPostFile(path, filebase, dataId, ctrId, createID, createName);
        }

        /// <summary>
        /// 查找目录
        /// </summary>
        /// <param name="path"></param>
        /// <param name="dirName"></param>
        /// <param name="createrID"></param>
        /// <param name="createrName"></param>
        /// <returns></returns>
        public Model.FS_DIR FindDir(string path, string createrID, string createrName, bool createIfNotExist)
        {
            var db = new FileDB();
            var dir = db.FindDir(path);
            if (dir == null) { dir = db.FindDirByPath(path); }
            if (dir == null && createIfNotExist) dir = db.CreateDir(PathHelper.GetParentPath(path), PathHelper.GetLastDirName(path), createrID, createrName);
            return dir;
        }
        /// <summary>
        /// 查找目录
        /// </summary>
        /// <param name="dirID"></param>
        /// <returns></returns>
        public Model.FS_DIR FindDir(string dirID)
        {
            var db = new FileDB();
            return db.FindDir(dirID);
        }

        /// <summary>
        /// 查找文件信息
        /// </summary>
        /// <param name="fid"></param>
        /// <returns></returns>
        public Model.FS_FILE FindFileByID(string fid)
        {
            return new FileDB().GetFileByID(fid);
        }

        /// <summary>
        /// 删除目录
        /// </summary>
        /// <param name="idOrPath"></param>
        /// <returns></returns>
        public Model.FS_DIR DeleteDir(string idOrPath)
        {
            return new FileDB().DeleteDir(idOrPath);
        }

        /// <summary>
        /// 删除目录
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Model.FS_DIR DeleteDirWithSub(string id)
        {
            return new FileDB().DeleteDirWithSub(id);
        }
        /// <summary>
        /// 删除文件
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public List<Model.FS_FILE> DeleteFile(string[] ids)
        {
            return new FileDB().DeleteFile(ids);
        }

        /// <summary>
        /// 查找子目录
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public List<Model.FS_DIR> FindSubDir(string path)
        {
            return new FileDB().FindSubDir(path);
        }

        /// <summary>
        /// 获取文件列表
        /// </summary>
        /// <param name="dataID"></param>
        /// <param name="ctrID"></param>
        /// <param name="pageIdx"></param>
        /// <param name="pageSize"></param>
        /// <param name="total"></param>
        /// <returns></returns>
        public List<Model.FS_FILE> FindFileListByDataID(string dataID, string ctrID, int pageIdx, int pageSize, out int total)
        {
            return new FileDB().SearchFileByDataID(dataID, ctrID, pageIdx, pageSize, out total);
        }

        /// <summary>
        /// 获取文件列表
        /// </summary>
        /// <param name="path"></param>
        /// <param name="key"></param>
        /// <param name="pageIdx"></param>
        /// <param name="pageSize"></param>
        /// <param name="total"></param>
        /// <param name="recursion"></param>
        /// <returns></returns>
        public List<Model.FS_FILE> FindFileList(string path, string key, int pageIdx, int pageSize, out int total, bool recursion = false)
        {
            return new FileDB().SearchFile(path, key, pageIdx, pageSize, out total, recursion);
        }

        /// <summary>
        /// 获取文件列表
        /// </summary>
        /// <param name="dirID"></param>
        /// <param name="key"></param>
        /// <param name="pageIdx"></param>
        /// <param name="pageSize"></param>
        /// <param name="total"></param>
        /// <param name="recursion"></param>
        /// <returns></returns>
        public List<Model.FS_FILE> FindFileListByDirID(string dirID, string key, int pageIdx, int pageSize, out int total, bool recursion = false)
        {
            return new FileDB().SearchFileByDirID(dirID, key, pageIdx, pageSize, out total, recursion);
        }
    }
}