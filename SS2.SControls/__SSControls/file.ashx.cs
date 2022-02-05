using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace SS2.__SSControls
{
    /// <summary>
    /// file 的摘要说明
    /// </summary>
    public class file : IHttpHandler, IRequiresSessionState
    {
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.ContentEncoding = System.Text.Encoding.UTF8;

            var act = context.Request["act"];

            switch (act)
            {
                case "list":
                    LoadList(context);
                    break;
                case "upload":
                    Upload(context);
                    break;
                case "download":
                    DownLoad(context);
                    break;
                case "delfile":
                    DeleteFile(context);
                    break;
                default:
                    context.Response.Write("文件服务正常");
                    break;
            }
        }

        public void LoadList(HttpContext context)
        {
            var dataid = context.Request["dataid"];
            var ctrid = context.Request["ctrid"];
            var pidx = context.Request["page"];
            var psize = context.Request["rows"];
            int.TryParse(pidx, out int idx);
            int.TryParse(psize, out int size);
            if (size == 0) { size = 10; }

            var files = new SFile.FileApi().FindFileListByDataID(dataid, ctrid, idx, size, out int total);

            context.Response.Write(Newtonsoft.Json.JsonConvert.SerializeObject(
                new
                {
                    total = total,
                    rows = files.Select(i => new
                    {
                        i.ID,
                        i.DirPath,
                        i.Tags,
                        i.FileName,
                        i.FileSize,
                        i.FileSizeText,
                        CreateTime = i.CreateTime.ToString("yyyy-MM-dd HH:mm"),
                        i.CreateUserName
                    })
                }));
        }

        public void Upload(HttpContext context)
        {
            var dataid = context.Request["dataid"];
            var ctrid = context.Request["ctrid"];
            var path = context.Request["path"];

            if (string.IsNullOrEmpty(path)) { path = "tmp"; }
            try
            {
                var file = context.Request.Files[0];
                if (file == null)
                {
                    context.Response.Write("{error:'file is null'}");
                    return;
                }
                var sso = new SSONet.LoginServer();
                var loginName = sso.LoginName ?? "未知用户";
                var data = new SFile.FileApi().SaveHttpPostFile(path, context.Request.Files[0], dataid, ctrid, loginName, sso.UserName ?? loginName);

                var json = new { error = "", originalName = file.FileName, name = data.FileName, id = data.ID, size = data.FileSize, type = data.FileExt };

                context.Response.Write(Newtonsoft.Json.JsonConvert.SerializeObject(json));
            }
            catch (Exception exp)
            {
                context.Response.Write("{error:'" + exp.Message + "'}");
            }
        }

        public void DeleteFile(HttpContext context)
        {
            var fid = context.Request["fid"];
            if (!string.IsNullOrEmpty(fid))
            {
                new SFile.FileApi().DeleteFile(fid.Split(','));
            }
        }

        public void DownLoad(HttpContext context)
        {
            var fid = context.Request["fid"];
            if (string.IsNullOrEmpty(fid))
            {
                context.Response.Write("NONE FILEID");
                return;
            }
            var file = new SFile.FileApi().FindFileByID(fid);
            if (file == null)
            {
                context.Response.Write("文件数据不存在");
                return;
            }
            var filepath = file.FilePath;
            if (filepath.StartsWith("~"))
            {
                filepath = context.Server.MapPath(filepath);
            }
            if (!File.Exists(filepath))
            {
                context.Response.Write("未找到文件");
                return;
            }
            string filename = HttpUtility.UrlEncode(file.FileName.Replace(' ', '_'), System.Text.Encoding.UTF8);
            context.Response.ContentType = "Application/octet-stream";
            context.Response.Charset = "utf-8";
            context.Response.AddHeader("Content-Disposition", "attachment;filename=" + filename);
            context.Response.WriteFile(filepath);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}