using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Text;

namespace EasyBpm.Map
{
    /// <summary>
    /// 图创建程序
    /// </summary>
    internal class MapCreator
    {
        public void CreateMapFile(string filePath, Model.PROCESS Process)
        {
            var map = Process.FLOWMAP;
            var cellPix = map.DefaultStyles.CellPix > 0 ? map.DefaultStyles.CellPix : map.CellPix;
            //1、确定图片宽度和高度
            //2、绘制线条
            //3、绘制步骤
            //4、绘制文本
            //---------------

            #region 1、确定尺寸(最大坐标)
            int imgWidth = 8;
            int imgHeight = 4;

            if (map.Steps.Count > 0)
            {
                imgWidth = Math.Max(imgWidth, map.Steps.Max(i => (i.Position.X + i.Width)));
                imgHeight = Math.Max(imgHeight, map.Steps.Max(i => (i.Position.Y + i.Height)));
            }
            if (map.Lines.Count > 0)
            {
                imgWidth = Math.Max(imgWidth, map.Lines.Max(i => i.From.X));
                imgHeight = Math.Max(imgHeight, map.Lines.Max(i => i.From.Y));
                imgWidth = Math.Max(imgWidth, map.Lines.Max(i => i.To.X));
                imgHeight = Math.Max(imgHeight, map.Lines.Max(i => i.To.Y));
            }
            if (map.Labels.Count > 0)
            {
                imgWidth = Math.Max(imgWidth, map.Labels.Max(i => i.Position.X));
                imgHeight = Math.Max(imgHeight, map.Labels.Max(i => i.Position.Y));
            }
            imgWidth = (imgWidth + 1) * cellPix;
            imgHeight = (imgHeight + 2) * cellPix;
            #endregion

            using (Bitmap bmp = new Bitmap(imgWidth, imgHeight))
            {
                using (Graphics g = Graphics.FromImage(bmp))
                {
                    //1、画出白色背景
                    //g.FillRectangle(new SolidBrush(Color.White), new Rectangle(0, 0, imgWidth, imgHeight));

                    //2、画出线条
                    foreach (var line in map.Lines) { line.Draw(g, Process); }

                    //3、画出标签
                    foreach (var lab in map.Labels) { lab.Draw(g, Process); }

                    //4、画出步骤
                    foreach (var s in map.Steps) { s.Draw(g, Process); }

                    //保存文件
                    var dir = Path.GetDirectoryName(filePath);
                    if (!Directory.Exists(dir))
                    {
                        Directory.CreateDirectory(dir);
                    }
                    //bmp.Save(filePath,ImageFormat.Jpeg);
                    bmp.Save(filePath);
                    map.MapFilePath = filePath;
                }
            }
        }
    }

}
