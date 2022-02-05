using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SS2.SGridList
{
    public class GridEditor
    {
        public GridEditorTypes EditorType { get; set; }
        
        public string CssClass { get; set; }

        public string EasyOptions { get; set; }

        public string EasyFunName
        {
            get
            {
                if (string.IsNullOrEmpty(_EasyFunName))
                {
                    var tmp = CssClass.Split('-');
                    if (tmp.Length >= 2)
                    {
                        _EasyFunName = CssClass.Split('-')[1];
                    }
                }
                return _EasyFunName;
            }
            set { _EasyFunName = value; }
        }
        string _EasyFunName;
    }

    public static class GridEditorEasyUI
    {
        public static GridEditor TextBox = new GridEditor() { CssClass = "easyui-textbox", EditorType = GridEditorTypes.EasyUI };
        public static GridEditor TextBox_Require = new GridEditor() { CssClass = "easyui-textbox", EditorType = GridEditorTypes.EasyUI, EasyOptions = "required:true" };
        public static GridEditor Hidden = new GridEditor() { EditorType = GridEditorTypes.Hidden };
        public static GridEditor DateBox = new GridEditor() { CssClass = "easyui-datebox", EditorType = GridEditorTypes.EasyUI };
        public static GridEditor DateBox_Require = new GridEditor() { CssClass = "easyui-datebox", EditorType = GridEditorTypes.EasyUI, EasyOptions = "required:true" };
        public static GridEditor Label = new GridEditor() { CssClass = "easyui-textbox", EditorType = GridEditorTypes.EasyUI, EasyOptions = "disabled:true" };
        public static GridEditor Money = new GridEditor() { CssClass = "easyui-numberbox", EditorType = GridEditorTypes.EasyUI, EasyOptions = "precision:2" };
        public static GridEditor Money_Requir = new GridEditor() { CssClass = "easyui-numberbox", EditorType = GridEditorTypes.EasyUI, EasyOptions = "precision:2,required:true" };
        public static GridEditor Int = new GridEditor() { CssClass = "easyui-numberbox", EditorType = GridEditorTypes.EasyUI };
        public static GridEditor Int_Require = new GridEditor() { CssClass = "easyui-numberbox", EditorType = GridEditorTypes.EasyUI, EasyOptions = "required:true" };


        public static GridEditor GetDropdownList2(string[] ds, string Cid)
        {
            return new GridEditor()
            {
                CssClass = "easyui-combobox",
                EditorType = GridEditorTypes.EasyUI,
                EasyOptions = "valueField: 'v',textField: 'v',data:[" + string.Join(",", ds.Select(i => "{v:'" + i + "'}")) + "],onChange:function(value){ if(value=='工程类'){  $('#" + Cid + "').combobox({valueField: 'val',textField: 'val',data:[{val:'工程类项目'},{val:'销售类项目'},{val:'设计类项目'},{val:'软件类项目'}] }); }else if(value=='合作类'){$('#" + Cid + "').combobox({valueField: 'val',textField: 'val',data:[{val:'公司合作类项目'},{val:'事业部合作类项目'}] });}else if(value=='研发类'){$('#" + Cid + "').combobox({valueField: 'val',textField: 'val',data:[{val:'公司级研发项目'},{val:'事业部合同研发项目'},{val:'研发内部项目'},{val:'国家省市级科研项目'}] });} } "
            };
        }
        public static GridEditor GetDropdownList(string[] ds)
        {
            return new GridEditor()
            {
                CssClass = "easyui-combobox",
                EditorType = GridEditorTypes.EasyUI,
                EasyOptions = "valueField: 'v',textField: 'v',data:[" + string.Join(",", ds.Select(i => "{v:'" + i + "'}")) + "]"
            };
        }
        public static GridEditor GetDialog(string dKey, string Cid, string urlPara, string VCtrID = "")
        {
            var dig = SDialog.Configuration.GetDialog(dKey);
            string pageurl = (HttpContext.Current.Request.ApplicationPath == "/" ? "" : HttpContext.Current.Request.ApplicationPath) + "/__SSControls/page_dialog.aspx";
            if (!string.IsNullOrEmpty(urlPara)) { urlPara = "&" + urlPara; }
            var opts = "{" + string.Format("href:'{0}?dlg={1}{2}', width:'600px', height:'400px', title:'{3}'", pageurl, dKey, urlPara, dig.Title) + "}";
            string kf = string.IsNullOrEmpty(dig.KeyFieldName) ? "'未设置KeyFieldName'" : "row." + dig.KeyFieldName;
            string vf = string.IsNullOrEmpty(dig.TextFieldName) ? "'未设置TextFieldName'" : "row." + dig.TextFieldName;
            var func = @"
function (rows, o) { 
    if (rows.length > 0) { 
        var row = rows[0];" +
        "var values = " + kf + ";" + "var texts = " + vf + ";" +
        "for (var i = 1; i < rows.length; i++) { row = rows[i]; " +
                "values += ','+" + kf + ";" +
                "texts += ',' +" + vf + ";" +
        "}" +
        (string.IsNullOrEmpty(VCtrID) ? "" : "$('#" + VCtrID + "').val(values); ") +
        "$('#" + Cid + "').textbox('setValue',texts);" +
    //click +
    "}" +
    "}";
            string script = "window.nnfDialogShow(" + opts + "," + func + ");";

            var edt = new GridEditor()
            {
                CssClass = "easyui-textbox",
                EditorType = GridEditorTypes.EasyUI,
                EasyOptions = "editable:false,buttonText:'选择',onClickButton:function(){" + script + "}"
            };

            return edt;
        }
    }

    public enum GridEditorTypes
    {
        Hidden,
        EasyUI,
    }
}