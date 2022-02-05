<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="page_gridlist.aspx.cs" Inherits="SS2.__SSControls.page_gridlist" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title><%=ListModel.Title %></title>
    <style type="text/css">
        html, body, form {
            padding: 0px;
            margin: 0px;
            width: 100%;
            height: 100%;
            background-color: #efefef;
            overflow: hidden;
        }
    </style>
    <link href="nnf.main.css" rel="stylesheet" />
    <link href="easyui/themes/bootstrap/easyui.css" rel="stylesheet" />
    <link href="easyui/themes/icon.css" rel="stylesheet" />
    <link href="easyui/themes/color.css" rel="stylesheet" />
    <script src="nnf.main.js"></script>
</head>
<body class="easyui-layout" style="border: none;">
    <div data-options="region:'center',split:true,fit:true" style="border: none; overflow: hidden;">
        <form id="form1" runat="server">
            <script type="text/javascript">
                $.ajaxSetup({
                    cache: false //关闭AJAX相应的缓存
                });
                function openEdit(id) {
                    var url = 'page_gridlist_edit.aspx?key=<%=ListModel.Key%>';
                    if (id) {
                        url += '&id=' + id;
                    }
                    var options = {
                        maximizable: true,
                        resizable: true,
                        minimizable: true,
                        href: url,
                        width: '<%=ListModel.EditFormLayOut.Width%>',
                        height: '<%=ListModel.EditFormLayOut.Height%>',
                        title: '<%=ListModel.EditFormLayOut.Title%>'
                    };
                    window.nnfDialogShow(options, function (dd) { reloadGrid(); });
                }
                function add() {
                    openEdit('new');
                }
                function del() {
                    var row = $('#grid_ds').datagrid('getSelected');
                    if (row) {
                        $.messager.confirm('删除', '确定要删除选择的数据吗？', function (r) {
                            if (r) {
                                $.post('ds.ashx', { act: 'del', key:'<%=ListModel.Key%>', id: row.<%=ListModel.KeyFieldName%> }, function (data, status) {
                                    if (status != 'success') {
                                        $.messager.alert("提示", "连接服务失败，请稍后重试！", "error");
                                    }
                                    if (data != 'OK') {
                                        $.messager.alert("提示", "删除失败，请检查后重试！", "error");
                                    } else {
                                        reloadGrid();
                                    }
                                });
                            }
                        });
                    }
                }
                function gridEdit() {
                    var row = $('#grid_ds').datagrid('getSelected');
                    if (row) {
                        openEdit(row.<%=ListModel.KeyFieldName%>);
                    }
                }
                function gridSearch() {
                    $('#dlg').dialog('open');
                }
                function reloadGrid() {
                    $('#grid_ds').datagrid('reload', false);
                }
                function btnOKClick() {
                    <%foreach (var ss in ListModel.Search)%>
                    <%{%>
                    <%if (ss.Editor.EditorType == SS2.SGridList.GridEditorTypes.Hidden)%>
                        <%{%>
                    $('#grid_ds').datagrid('options').queryParams.<%=ss.ID %> = $("#<%=ss.ID %>").val();
                    <%}%>
                    <%else if (ss.Editor.EditorType == SS2.SGridList.GridEditorTypes.EasyUI)%>
                        <%{%>
                    $('#grid_ds').datagrid('options').queryParams.<%=ss.ID %> = $("#<%=ss.ID %>").<%=ss.Editor.EasyFunName%>("getValue");
                    <%}%>
                    <%}%>
                    $('#dlg').dialog('close');
                    $('#grid_ds').datagrid('reload');
                }
            </script>
            <div class="easyui-layout" data-options="fit:true" style="padding: 0px; margin: 0px;">
                <div data-options="region:'center',split:true" style="background-color: gray; border-width: 1px;">
                    <table class="easyui-datagrid" id="grid_ds" style="width: 100%; height: 100%"
                        data-options="
            title:'<%=ListModel.Title %>',
            iconCls:'icon-tip',
            singleSelect:true,
            url:'ds.ashx?act=ds&key=<%=ListModel.Key %>',
            collapsible:true,
            fit:true,
            pagination:true, 
            rownumbers:true,
            pageSize:20,
            toolbar:'#toolbar',
            striped:true,
            onLoadError:function(){alert('数据加载失败，请稍后重试！');},
            border:false">
                        <thead>
                            <tr>
                                <th data-options="field:'<%=ListModel.KeyFieldName %>',checkbox:true"></th>
                                <%foreach (var col in ListModel.Columns)
                                    {
                                        if (!col.ShowColumn) continue;
                                %>
                                <th data-options="field:'<%=col.FieldName %>',sortable:<%=col.Sortable?"true":"false"%>,resizable:true" style="width: <%=col.Width%>"><%=col.Title %></th>
                                <%} %>
                            </tr>
                        </thead>
                    </table>
                    <div id="toolbar">
                        <table style="width: 100%; padding: 0px; margin: 0px;">
                            <tr>
                                <% if (ListModel.EditMode.ToString().Contains("ADD"))
                                    { %>
                                <td width="60px">
                                    <a href="javascript:void(0)" class="easyui-linkbutton" id="add" iconcls="icon-add"
                                        plain="true" onclick="add();">新建</a>
                                </td>
                                <%} %>
                                <% if (ListModel.EditMode.ToString().Contains("DELETE"))
                                    { %>
                                <td width="60px">
                                    <a href="javascript:void(0)" class="easyui-linkbutton" id="del" iconcls="icon-clear"
                                        plain="true" onclick="del()">删除</a>
                                </td>
                                <%} %>
                                <% if (ListModel.EditMode.ToString().Contains("EDIT"))
                                    { %>
                                <td width="60px">
                                    <a href="javascript:void(0)" class="easyui-linkbutton" id="update" iconcls="icon-edit"
                                        plain="true" onclick="gridEdit()">修改</a>
                                </td>
                                <%}%>
                                <td width="60px">
                                    <a href="javascript:void(0)" class="easyui-linkbutton" id="view" iconcls="icon-tip"
                                        plain="true" onclick="gridEdit()">查看</a>
                                </td>
                                <td>&nbsp;
                                </td>
                                <td width="100px">
                                    <a href="javascript:void(0)" class="easyui-linkbutton" id="search" iconcls="icon-search"
                                        plain="true" onclick="gridSearch()">高级检索</a>
                                </td>
                                <td width="60px">
                                    <a href="javascript:void(0)" class="easyui-linkbutton" id="refresh" iconcls="icon-reload"
                                        plain="true" onclick="reloadGrid()">刷新</a>
                                </td>
                                <td width="60px">
                                    <a target="_blank" href="export.ashx?key=<%=ListModel.Key %>" class="easyui-linkbutton" id="export" iconcls="icon-sum"
                                        plain="true">导出</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="dlg" class="easyui-dialog" title="高级检索" style="width: 700px; height: 400px;"
                        data-options=" iconCls: 'icon-search',closed:true, buttons: [
                        { text:' 检 索 ',iconCls:'icon-search', handler:function(){ btnOKClick();} },
                        { text:' 取 消 ',iconCls:'icon-cancel', handler:function(){ $('#dlg').dialog('close'); } }]">
                        <div nnflayout="1" style="padding: 10px;">
                            <%foreach (var ss in ListModel.Search.Where(i => i.Position == SS2.SGridList.GridSearchPosition.Panel))
                                { %>
                            <%if (ss.Editor.EditorType == SS2.SGridList.GridEditorTypes.Hidden)
                                { %>
                            <input type="hidden" id="<%=ss.ID %>" localform="<%=ss.ID %>" />
                            <%}
                                else if (ss.Editor.EditorType == SS2.SGridList.GridEditorTypes.EasyUI)
                                {%>
                            <input class="<%=ss.Editor.CssClass %>" nnf-size="1" nnfedititem="<%=ss.Title %>" id="<%=ss.ID %>" localform="<%=ss.ID %>" data-options="<%=ss.Editor.EasyOptions %>" />
                            <%}
                                } %>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</body>
</html>

