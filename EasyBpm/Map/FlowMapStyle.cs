using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EasyBpm.Map
{
    public class FlowMapStyle
    {
        public int CellPix { get; set; }
        public mStyle StepStyle { get; set; }

        public mStyle LineStyle { get; set; } = new mStyle() { LineStyle = System.Drawing.Drawing2D.DashStyle.Solid };

        public mStyle LabelStyle { get; set; }

    }
}
