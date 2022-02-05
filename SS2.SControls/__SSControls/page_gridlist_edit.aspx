<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="page_gridlist_edit.aspx.cs" Inherits="SS2.__SSControls.page_gridlist_edit" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <link href="nnf.main.css" rel="stylesheet" />
    <link href="easyui/themes/bootstrap/easyui.css" rel="stylesheet" />
    <link href="easyui/themes/icon.css" rel="stylesheet" />
    <link href="easyui/themes/color.css" rel="stylesheet" />
    <script src="nnf.main.js"></script>
   <%-- <style>
        .HuanHang {
            WORD-BREAK: break-all;
        }
    </style>--%>
</head>
<body>
    <form id="form1" runat="server">
        <script type="text/javascript">
            var panels="<%=string.Join(",",ListModel.EditFormLayOut.Panels.Select(i=>"#"+i.ID)) %>,#P_HIDDEN";
            var dt=<%=EditModelJson%>;
            $(function () {
                if(dt.Table.length>0){
                    row=dt.Table[0];
                    $(panels).localform("load", row);
                    <% if (!ListModel.EditMode.ToString().Contains("EDIT"))
            { %>
                    $(panels).localform("disable");
                    <%}%>
                }
            });
            function getValue(){
                if($(panels).localform("validate")){
                    var data= $(panels).localform("save");
                    var value="["+JSON.stringify(data)+"]";
                    $.post("ds.ashx",{key:'<%=ListModel.Key%>',v:value,act:"save",id:'<%=Req_ID%>'},function(dd){
                        if(dd=="OK"){
                            //alert("修改成功");
                        }else{
                            alert("修改失败");
                        }
                    });
                    return "OK";
                }
            }
        </script>
        <div style="padding: 10px; max-width: 800px; margin-left: auto; margin-right: auto;">
            <%foreach (var pp in ListModel.EditFormLayOut.Panels)
                { %>
            <div id="<%=pp.ID%>" class="easyui-panel" title="<%=pp.Title %>" data-options="collapsible:true">
               <%-- <%foreach (var ee in pp.Fields)
                    {
                        var col2 = ListModel.Columns.Where(i => i.Title == ee).FirstOrDefault();
                %>
                <div style="width: 30%; float: left; margin: 3px;" class="HuanHang">
                    <label><b><%=col2.Title %>:</b></label>
                    <label id="<%=col2.FieldName %>"  localform="<%=col2.FieldName %>"></label>

                </div>
                <%
                    } %>--%>
                <div nnflayout="<%=pp.FormColumnCount %>" style="padding: 5px;">
                    <%foreach (var ee in pp.Fields)
                        {
                            var col = ListModel.Columns.Where(i => i.Title == ee).FirstOrDefault();
                            if (col == null)
                            {
                                if (string.IsNullOrEmpty(ee))
                                {
                    %>
                    <div nnfedititem="SP" nnf-size="1">
                    </div>
                    <%
                        }
                        else
                        {
                    %>
                    <div>
                        <%=ee %>
                    </div>
                    <%
                            }
                        }
                        else if (col.Editor.EditorType == SS2.SGridList.GridEditorTypes.Hidden)
                        {
                    %>
                    <input type="hidden" id="<%=col.FieldName %>" localform="<%=col.FieldName %>" />
                    <%
                        }
                        else
                        {
                    %>
                    <input id="<%=col.FieldName %>" nnfedititem="<%=col.Title %>" localform="<%=col.FieldName %>" class="<%=col.Editor.CssClass %>" data-options="<%=col.Editor.EasyOptions %>" />
                    <%
                        }
                    %>
                    <%} %>
                </div>
            </div>
            &nbsp;
            <%} %>
            <div id="P_HIDDEN">
                <!-- 非模板中的控件均显示 hidden -->
                <%var otherCol = ListModel.Columns
                                                                        .Where(i => !(ListModel.EditFormLayOut.Panels.SelectMany(p => p.Fields)
                                                                        .Contains(i.Title)));%>
                <%foreach (var col in otherCol)
                    { %>
                <input type="hidden" localform="<%=col.FieldName %>" />
                <%}%>
            </div>
        </div>
    </form>
</body>
</html>

