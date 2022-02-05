using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using System.Text;
using EasyBpm.Model;

namespace EasyBpm.Map
{
    /// <summary>
    /// 流程图配置程序
    /// </summary>
    public class FlowMap
    {
        public string MapFilePath { get; set; }

        /// <summary>
        /// 步骤信息
        /// </summary>
        public List<mStep> Steps { get; set; } = new List<mStep>();
        /// <summary>
        /// 直线信息
        /// </summary>
        public List<mLine> Lines { set; get; } = new List<mLine>();
        /// <summary>
        /// 文本标签
        /// </summary>
        public List<mText> Labels { get; set; } = new List<mText>();
        /// <summary>
        /// 每个单元格像素点（默认16）
        /// </summary>
        public int CellPix
        {
            get
            {
                if (DefaultStyles != null && DefaultStyles.CellPix > 0)
                {
                    return DefaultStyles.CellPix;
                }
                return _CellPix;
            }
            set { _CellPix = value; }
        }
        int _CellPix = 32;
        /// <summary>
        /// 设置默认样式
        /// </summary>
        public FlowMapStyle DefaultStyles { get; set; } = new FlowMapStyle();
    }

    #region Model
    /// <summary>
    /// 步骤信息
    /// </summary>
    public class mStep : MapItem
    {
        public mStep(string StepID, mPos pos, int width = 4, int height = 1)
        {
            this.StepID = StepID;
            this.Position = pos;
            this.Width = width;
            this.Height = height;
        }
        public string StepID { get; set; }
        /// <summary>
        /// 位置
        /// </summary>
        public mPos Position { get; set; }

        /// <summary>
        /// 宽度
        /// </summary>
        public int Width { get; set; }
        /// <summary>
        /// 高度
        /// </summary>
        public int Height { get; set; }
        /// <summary>
        /// 样式
        /// </summary>
        public mStyle Style { get { return _Style == null ? _defStyle : _Style; } set { _Style = value; } }
        internal mStyle _Style;
        internal mStyle _defStyle = new mStyle() { BackColor = Color.White, LineColor = Color.Black, LineWidth = 1 };
        /// <summary>
        /// 图标路径
        /// </summary>
        public string IconPath { get; set; }

        /// <summary>
        /// 接入节点位置
        /// </summary>
        public mPointPosition InPointPos { get; set; } = mPointPosition.Top;
        /// <summary>
        /// 接出节点位置
        /// </summary>
        public mPointPosition OutPointPos { get; set; } = mPointPosition.Bottom;
        /// <summary>
        /// 获取连接线接入点坐标
        /// </summary>
        /// <param name="cellPix"></param>
        /// <returns></returns>
        public Point GetInPoint(int cellPix)
        {
            return GetPoint(InPointPos, cellPix);
        }

        /// <summary>
        /// 获取连接线接出点坐标
        /// </summary>
        /// <param name="cellPix"></param>
        /// <returns></returns>
        public Point GetOutPoint(int cellPix)
        {
            return GetPoint(OutPointPos, cellPix);
        }

        Point GetPoint(mPointPosition pos, int cellPix)
        {
            int x = Position.X * cellPix;
            int y = Position.Y * cellPix;
            switch (pos)
            {
                case mPointPosition.Top:
                    x += Width * cellPix / 2;
                    break;
                case mPointPosition.Left:
                    y += Height * cellPix / 2;
                    break;
                case mPointPosition.Right:
                    x += Width * cellPix;
                    y += Height * cellPix / 2;
                    break;
                case mPointPosition.Bottom:
                    x += Width * cellPix / 2;
                    y += Height * cellPix;
                    break;
            }
            return new Point(x, y);
        }
        /// <summary>
        /// 绘制图形
        /// </summary>
        /// <param name="g"></param>
        /// <param name="p"></param>
        public void Draw(Graphics g, PROCESS p)
        {
            var map = p.FLOWMAP;
            var cellPix = map.CellPix;

            var style = Style;
            if (map.DefaultStyles.StepStyle != null && _Style == null)
            {
                style = map.DefaultStyles.StepStyle;
            }

            //查找对应步骤信息
            var step = p.STEPS.FirstOrDefault(i => i.STEPID == StepID);
            if (step == null) { return; }

            //画出边框及背景
            var border = new Rectangle(Position.GetPoint(cellPix), new Size(cellPix * Width, cellPix * Height));
            g.FillRectangle(new SolidBrush(style.BackColor), border);

            var bPen = new Pen(style.LineColor, style.LineWidth);
            if (style.LineStyle != null) { bPen.DashStyle = style.LineStyle.Value; }
            g.DrawRectangle(bPen, border);

            //填写文字
            var sf = new StringFormat();
            sf.Alignment = StringAlignment.Center;
            sf.LineAlignment = StringAlignment.Center;
            g.DrawString(step.STEPLABEL, style.TextFont, new SolidBrush(style.TextColor), border, sf);
        }
    }

    /// <summary>
    /// 坐标
    /// </summary>
    public class mPos
    {
        public mPos(int x, int y)
        {
            this.X = x;
            this.Y = y;
        }

        public int X { get; set; }

        public int Y { get; set; }

        public Point GetPoint(int Cellpx)
        {
            return new Point(X * Cellpx, Y * Cellpx);
        }

        public Point GetPoint(int cellPix, mPointPosition pos) {
            int x = X * cellPix;
            int y = Y * cellPix;
            switch (pos)
            {
                case mPointPosition.Top:
                    x += cellPix / 2;
                    break;
                case mPointPosition.Left:
                    y += cellPix / 2;
                    break;
                case mPointPosition.Right:
                    x += cellPix;
                    y += cellPix / 2;
                    break;
                case mPointPosition.Bottom:
                    x += cellPix / 2;
                    y += cellPix;
                    break;
            }
            return new Point(x, y);
        }
    }

    /// <summary>
    /// 划线
    /// </summary>
    public class mLine : MapItem
    {
        public mLine() { }
        public mLine(string fromStepId, string toStepId)
        {
            this.FromStepId = fromStepId;
            this.ToStepId = toStepId;
            EndCap = LineCap.ArrowAnchor;
        }
        public mLine(mPos from,mPos to) {
            this.From = from;
            this.To = to;
        }
        public mPos From { get; set; } = new mPos(0, 0);

        public mPos To { get; set; } = new mPos(0, 0);

        public string FromStepId { get; set; }

        public string ToStepId { get; set; }

        public mStyle Style { get { return _Style == null ? _defStyle : _Style; } set { _Style = value; } }

        public LineCap EndCap { get; set; } = LineCap.NoAnchor;

        internal mStyle _Style;
        internal mStyle _defStyle = new mStyle() { LineStyle = DashStyle.Solid, LineWidth = 1, LineColor = Color.Black, BackColor = Color.White };

        public void Draw(Graphics g, PROCESS p)
        {
            var map = p.FLOWMAP;
            var cellPix = map.CellPix;

            var style = Style;
            if (map.DefaultStyles.LineStyle != null && _Style == null)
            {
                style = map.DefaultStyles.LineStyle;
            }
            var pen = new Pen(style.LineColor, style.LineWidth);
            pen.DashStyle = style.LineStyle.Value;
            pen.EndCap = EndCap;

            Point from = From.GetPoint(cellPix,mPointPosition.Top);
            Point to = To.GetPoint(cellPix,mPointPosition.Bottom);
            
            if (!string.IsNullOrEmpty(FromStepId))
            {
                var step = p.FLOWMAP.Steps.FirstOrDefault(i => i.StepID == FromStepId);
                if (step != null)
                {
                    from = step.GetOutPoint(cellPix);
                }
            }
            if (!string.IsNullOrEmpty(ToStepId))
            {
                var step = p.FLOWMAP.Steps.FirstOrDefault(i => i.StepID == ToStepId);
                if (step != null)
                {
                    to = step.GetInPoint(cellPix);
                }
            }

            g.DrawLine(pen, from, to);
        }

        public Point GetInPoint(int cellPix)
        {
            return From.GetPoint(cellPix);
        }

        public Point GetOutPoint(int cellPix)
        {
            return To.GetPoint(cellPix);
        }
    }

    /// <summary>
    /// 样式
    /// </summary>
    public class mStyle
    {
        /// <summary>
        /// 线型或边框类型
        /// </summary>
        public DashStyle? LineStyle { get; set; }
        /// <summary>
        /// 线宽度
        /// </summary>
        public int LineWidth { get; set; } = 1;
        /// <summary>
        /// 线颜色
        /// </summary>
        public Color LineColor { get; set; } = Color.Black;
        /// <summary>
        /// 文本颜色
        /// </summary>
        public Color TextColor { get; set; } = Color.Black;

        /// <summary>
        /// 背景色
        /// </summary>
        public Color BackColor { get; set; } = Color.Transparent;
        /// <summary>
        /// 字体
        /// </summary>
        public Font TextFont { get; set; } = new Font("宋体", 12);
    }

    /// <summary>
    /// 提示文本
    /// </summary>
    public class mText : MapItem
    {
        public mText(string text, int x, int y)
        {
            this.Text = text;
            this.Position = new mPos(x, y);
        }

        public mStyle Style { get { return _Style == null ? _defStyle : _Style; } set { _Style = value; } }
        internal mStyle _Style { get; set; }
        internal mStyle _defStyle { get; set; } = new mStyle();

        public string Text { get; set; }

        public mPos Position { get; set; }

        public void Draw(Graphics g, PROCESS p)
        {
            var map = p.FLOWMAP;
            var cellPix = map.CellPix;

            var style = Style;
            if (map.DefaultStyles.LabelStyle != null && _Style == null)
            {
                style = map.DefaultStyles.LabelStyle;
            }
            var b = new SolidBrush(style.TextColor);
            g.DrawString(Text, style.TextFont, b, Position.GetPoint(cellPix));
        }

        public Point GetInPoint(int cellPix)
        {
            return Position.GetPoint(cellPix);
        }

        public Point GetOutPoint(int cellPix)
        {
            return Position.GetPoint(cellPix);
        }
    }

    /// <summary>
    /// 线条连接点
    /// </summary>
    public enum mPointPosition
    {
        Left, Top, Right, Bottom
    }

    interface MapItem
    {
        void Draw(Graphics g, Model.PROCESS p);

        Point GetInPoint(int cellPix);

        Point GetOutPoint(int cellPix);
    };
    #endregion
}
