using Ionic.Zip;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;

namespace SS2
{

    /// <summary>
    /// Zip操作基于 DotNetZip 的封装
    /// </summary>
    public static class ZipHelper
    {
        /// <summary>
        /// 得到指定的输入流的ZIP压缩流对象【原有流对象不会改变】
        /// </summary>
        /// <param name="sourceStream"></param>
        /// <returns></returns>
        public static Stream ZipCompress(Stream sourceStream, string entryName = "zip")
        {
            MemoryStream compressedStream = new MemoryStream();
            if (sourceStream != null)
            {
                long sourceOldPosition = 0;
                try
                {
                    sourceOldPosition = sourceStream.Position;
                    sourceStream.Position = 0;
                    using (ZipFile zip = new ZipFile())
                    {
                        zip.AddEntry(entryName, sourceStream);
                        zip.Save(compressedStream);
                        compressedStream.Position = 0;
                    }
                }
                catch
                {
                }
                finally
                {
                    try
                    {
                        sourceStream.Position = sourceOldPosition;
                    }
                    catch
                    {
                    }
                }
            }
            return compressedStream;
        }

        /// <summary>
        /// 得到指定的字节数组的ZIP解压流对象
        /// 当前方法仅适用于只有一个压缩文件的压缩包，即方法内只取压缩包中的第一个压缩文件
        /// </summary>
        /// <param name="sourceStream"></param>
        /// <returns></returns>
        public static Stream ZipDecompress(byte[] data)
        {
            Stream decompressedStream = new MemoryStream();
            if (data != null)
            {
                try
                {
                    MemoryStream dataStream = new MemoryStream(data);
                    using (ZipFile zip = ZipFile.Read(dataStream))
                    {
                        if (zip.Entries.Count > 0)
                        {
                            zip.Entries.First().Extract(decompressedStream);
                            // Extract方法中会操作ms，后续使用时必须先将Stream位置归零，否则会导致后续读取不到任何数据
                            // 返回该Stream对象之前进行一次位置归零动作
                            decompressedStream.Position = 0;
                        }
                    }
                }
                catch
                {
                }
            }
            return decompressedStream;
        }
        /// <summary>
        /// 压缩ZIP文件
        /// 支持多文件和多目录，或是多文件和多目录一起压缩
        /// </summary>
        /// <param name="list">待压缩的文件或目录集合</param>
        /// <param name="strZipName">压缩后的文件名</param>
        /// <param name="IsDirStruct">是否按目录结构压缩</param>
        /// <returns>成功：true/失败：false</returns>
        public static bool CompressMulti(List<string> list, string strZipName, bool IsDirStruct)
        {
            try
            {
                using (ZipFile zip = new ZipFile(Encoding.Default))//设置编码，解决压缩文件时中文乱码
                {
                    foreach (string path in list)
                    {
                        string fileName = Path.GetFileName(path);//取目录名称
                                                                 //如果是目录
                        if (Directory.Exists(path))
                        {
                            if (IsDirStruct)//按目录结构压缩
                            {
                                zip.AddDirectory(path, fileName);
                            }
                            else//目录下的文件都压缩到Zip的根目录
                            {
                                zip.AddDirectory(path);
                            }
                        }
                        if (File.Exists(path))//如果是文件
                        {
                            zip.AddFile(path);
                        }
                    }
                    zip.Save(strZipName);//压缩
                    return true;
                }
            }
            catch (Exception)
            {
                return false;
            }
        }
        /// <summary>
        /// 解压ZIP文件
        /// </summary>
        /// <param name="strZipPath">待解压的ZIP文件</param>
        /// <param name="strUnZipPath">解压的目录</param>
        /// <param name="overWrite">是否覆盖</param>
        /// <returns>成功：true/失败：false</returns>
        public static bool Decompression(string strZipPath, string strUnZipPath, bool overWrite)
        {
            try
            {
                ReadOptions options = new ReadOptions();
                options.Encoding = Encoding.Default;//设置编码，解决解压文件时中文乱码
                using (ZipFile zip = ZipFile.Read(strZipPath, options))
                {
                    foreach (ZipEntry entry in zip)
                    {
                        if (string.IsNullOrEmpty(strUnZipPath))
                        {
                            strUnZipPath = strZipPath.Split('.').First();
                        }
                        if (overWrite)
                        {
                            entry.Extract(strUnZipPath, ExtractExistingFileAction.OverwriteSilently);//解压文件，如果已存在就覆盖
                        }
                        else
                        {
                            entry.Extract(strUnZipPath, ExtractExistingFileAction.DoNotOverwrite);//解压文件，如果已存在不覆盖
                        }
                    }
                    return true;
                }
            }
            catch (Exception)
            {
                return false;
            }
        }

    }
}