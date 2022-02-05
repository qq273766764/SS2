using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS2.CfgHelper
{
    public enum ConfigType
    {
        Default,
        //Html5属性
        Bool,//CheckBox
        Date,
        Email,
        File,
        Image,
        Number,
        Password,
        Select, //Radio
        Range,
        Text,
        Url,
        //扩展输入
        MultText,
        Html,
        Flash,
        Video,
        //默认
    }
}
