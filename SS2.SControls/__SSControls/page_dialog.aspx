<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="page_dialog.aspx.cs" Inherits="SS2.__SSControls.page_dialog" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>请选择</title>
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
    <link href="easyui/themes/bootstrap/easyui.css" rel="stylesheet" />
    <link href="easyui/themes/icon.css" rel="stylesheet" />
    <link href="easyui/themes/color.css" rel="stylesheet" />
    <link href="easyui/newicons.css" rel="stylesheet" />
    <script src="easyui/jquery.min.js"></script>
    <script src="easyui/jquery.easyui.min.js"></script>
    <script src="easyui/locale/easyui-lang-zh_CN.js"></script>
</head>
<body class="easyui-layout" style="border: none;">
    <div data-options="region:'center',split:true,fit:true" style="border: none; overflow: hidden;">
        <form id="form1" runat="server">
            <%string searchkey = dialog.Searchs != null ? dialog.Searchs.First().ParaKey : "search"; %>
            <%string treekey = dialog.ShowTree != null ? dialog.ShowTree.ParaKey : "treekey"; %>
            <div class="easyui-layout" data-options="fit:true" style="padding: 5px; margin: 5px;">
                <div data-options="region:'north',split:true" style="height: 30px; background-color: #efefef; border: none;">
                    <input type="text" id='<%=searchkey %>'
                        data-options="fit:true,buttonText:'搜索',buttonIcon:'icon-search', prompt:'列表最多显示200条,排列比较后的数据请搜索…',onClickButton:function(){ loadData();}"
                        style="border: none; width: 100%;" class="easyui-textbox" />
                </div>
                <input type="hidden" id="<%=treekey %>" />
                <%if (dialog.ShowTree != null && HasTreeData)
                    { %>
                <div data-options="region:'west',split:true" title='<%=dialog.ShowTree.Title %>' style='<%="width:"+dialog.ShowTree.Width%>'>
                    <ul class="easyui-tree" data-options="data:treeData,onClick:onTreeClick"></ul>
                </div>
                <%} %>
                <div data-options="region:'center'">
                    <table class="easyui-datagrid" id="grid0"
                        data-options="url:'<%=paras_url %>',scrollOnSelect:false,border:false,rownumbers:true,onLoadSuccess:onLoadSuccess,singleSelect:<%=dialog.IsMutiSelect?"false":"true" %>,fit:true <%=dialog.IsShowSelectedBox?",onSelect:onSelect,onUnselect:onUnselect":"" %>">
                        <thead>
                            <tr>
                                <th data-options="field:'ck',checkbox:true"></th>
                                <%foreach (var f in dialog.Fields)
                                    { %>
                                <th data-options="field:'<%=f.Field %>'" width='<%=f.Width %>' <%=string.IsNullOrEmpty(f.Width)?"fillwidth='1'":"" %>>
                                    <%=f.Title %>
                                </th>
                                <%} %>
                            </tr>
                        </thead>
                    </table>
                </div>
                <%if (dialog.IsShowSelectedBox)
                    { %>
                <div data-options="region:'east',split:true" style="width: 220px;">
                    <table class="easyui-datagrid" id="grid_selected"
                        data-options="scrollOnSelect:false,border:false,rownumbers:true,fit:true,onUnselect:onUnselect2">
                        <thead>
                            <tr>
                                <th data-options="field:'<%=dialog.TextFieldName%>',width:155">已选择数据
                                </th>
                                <th data-options="field:'<%=dialog.KeyFieldName%>'">值
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <%} %>
            </div>
            <script type="text/javascript">
                function getValue() {
                    <%if (dialog.IsShowSelectedBox)
                {%>
                    return $('#grid_selected').datagrid("getSelections");
                    <%}
                else
                {%>
                    return $('#grid0').datagrid("getSelections");
                    <%}%>
                }
                function onSelect(index, row) {
                    <%if (dialog.IsShowSelectedBox)
                {%>
                    addSelected(row);
                    <%}
                else
                {%>
                    selRows = [row];
                    <%}%>
                    $("#grid_selected").datagrid({ data: selRows });
                    $("#grid_selected").datagrid("selectAll");
                }
                function addSelected(row) {
                    var exist = false;
                    if (selRows.length > 0) {
                        for (var i = 0; i < selRows.length; i++) {
                            if (selRows[i]["<%=dialog.KeyFieldName%>"] == row["<%=dialog.KeyFieldName%>"]) {
                                exist = true;
                                break;
                            }
                        }
                    }
                    if (!exist) {
                        selRows.push(row);
                    }
                }
                function removeSelected(row) {
                    var idx = -1;
                    if (selRows.length > 0) {
                        for (var i = 0; i < selRows.length; i++) {
                            if (selRows[i]["<%=dialog.KeyFieldName%>"] == row["<%=dialog.KeyFieldName%>"]) {
                                idx = i;
                                break;
                            }
                        }
                    }
                    if (idx >= 0) {
                        selRows.splice(idx, 1);
                    }
                }
                function onUnselect(index, row) {
                    removeSelected(row);
                    $("#grid_selected").datagrid({ data: selRows });
                    $("#grid_selected").datagrid("selectAll");
                }
                function onUnselect2(index, row) {
                    selRows.splice(index, 1);
                    $("#grid_selected").datagrid({ data: selRows });
                    $("#grid_selected").datagrid("selectAll");
                }
                function formatCellTooltip(value) {
                    return value;
                }
                function onLoadSuccess(data) {
                    <%if (!dialog.IsShowSelectedBox)
                {%>
                    $.messager.progress({ title: '请等候…', msg: '正在加载数据，请稍后…' });
                    setTimeout(function () {
                        var rows = $("#grid0").datagrid("getRows");
                        var ids = [];
                        for (var i = 0; i < rows.length; i++) {
                            var value = rows[i].<%=dialog.KeyFieldName%>;
                            var selected = false;
                            for (var j = 0; j < selRows.length; j++) {
                                if (selRows[j].<%=dialog.KeyFieldName%>== value) {
                                    selected = true;
                                    break;
                                }
                            }
                            if (selected) {
                                ids.push(i);
                            }
                        }
                        for (var i = 0; i < ids.length; i++) {
                            $("#grid0").datagrid("selectRow", ids[i]);
                        }
                        $.messager.progress('close');
                    }, 600);
                    <%}%>
                }
                function loadData() {
                    $('#grid0').datagrid('options').queryParams.<%= searchkey %> = $("#<%=searchkey %>").textbox("getValue");
                    $('#grid0').datagrid('options').queryParams.<%=treekey%> = $("#<%=treekey %>").val();
                    $('#grid0').datagrid('reload');
                }
                function onTreeClick(node) {
                    $("#<%=treekey %>").val(node.value);
                    loadData();
                }
                $(function () {
                    <%if (dialog.IsShowSelectedBox && !string.IsNullOrEmpty(para_selectValue))
                {%>
                    setTimeout(function () {
                        $("#grid_selected").datagrid({ data: selRows });
                        $("#grid_selected").datagrid("selectAll");
                    }, 500);
                    <%}%>
                    window.onkeydown = function (e) {
                        if (e.keyCode == 13) {
                            loadData();
                        }
                    }
                });
            </script>
        </form>
    </div>
</body>
</html>
