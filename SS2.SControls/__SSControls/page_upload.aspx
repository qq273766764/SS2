<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="page_upload.aspx.cs" Inherits="SS2.__SSControls.page_upload" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>文件管理</title>
    <style type="text/css">
        html, body, form {
            padding: 0px;
            margin: 0px;
            width: 100%;
            height: 100%;
            background-color: #efefef;
            overflow: hidden;
        }
        .easyui-icon {
            width:16px;
            line-height:16px;
            display:inline-block;
        }
    </style>
    <link href="easyui/themes/bootstrap/easyui.css" rel="stylesheet" />
    <link href="easyui/themes/icon.css" rel="stylesheet" />
    <link href="easyui/newicons.css" rel="stylesheet" />
    <link href="easyui/themes/color.css" rel="stylesheet" />
    <script src="easyui/jquery.min.js"></script>
    <script src="easyui/jquery.easyui.min.js"></script>
    <script src="easyui/locale/easyui-lang-zh_CN.js"></script>

    <link href="webuploader/webuploader.css" rel="stylesheet" />
    <script src="webuploader/webuploader.min.js"></script>
</head>
<body class="easyui-layout" style="border: none;">
    <div data-options="region:'center',split:true,fit:true" style="border: none; overflow: hidden;">
        <form id="form1" runat="server">
            <div id="mainlayout" class="easyui-layout" data-options="fit:true" style="padding: 5px; margin: 5px;">
                <div data-options="region:'center',iconCls:'newicon-administrative-docs',border:true,split:true" title="文件展示">
                    <table id="tFileList" class="easyui-datagrid"
                        data-options="collapsible:true,fit:true,fitColumns:true,pagination:true,pageSize:50,border:false,toolbar:fileList_toolbar">
                        <thead>
                            <tr>
                                <th data-options="field:'ID',checkbox:true,fixed:true"></th>
                                <th data-options="field:'FileName',width:'200px',formatter:formatter_fileName">文件名</th>
                                <th data-options="field:'FileSizeText',width:'100px',fixed:true,align:'right'">大小</th>
                                <th data-options="field:'CreateTime',width:'120px',fixed:true">上传时间</th>
                                <th data-options="field:'CreateUserName',width:'100px',fixed:true">上传人</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div data-options="region:'east',split:true,hideCollapsedContent:false" title='上传列表' style="width: 300px;">
                    <table id="tUpload" class="easyui-datagrid" data-options="collapsible:true,fitColumns:true,fit:true,border:false,singleSelect:true,onLoadSuccess:tUpload_onloadSuccess,toolbar:upList_toolbar">
                        <thead>
                            <tr>
                                <th data-options="field:'fileName',width:'200px'">文件名</th>
                                <th data-options="field:'process',width:'100px',fixed:true,formatter:formatter_Process">上传</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div data-options="region:'north',split:true" style="height: 40px; background-color: #efefef; overflow: hidden; border: none;">
                    <table style="width: 100%; padding: 0px; border-collapse: collapse;">
                        <tr>
                            <td>
                                <span class="textbox textbox-readonly easyui-fluid" style="width: 100%;">
                                    <a class="textbox-button textbox-button-left l-btn l-btn-small" style="height: 28px;">
                                        <span class="l-btn-left l-btn-icon-left" style="margin-top: 0px;">
                                            <span class="l-btn-text">文档中心</span>
                                            <span class="l-btn-icon newicon-folder">&nbsp;</span>
                                        </span>
                                    </a>
                                    <span id="txt_path" class="textbox-text validatebox-text validatebox-readonly" style="width: 100%; padding-left: 85px;">项目文档 \
                                        连云港项目 \
                                    </span>
                                </span>
                            </td>
                            <td style="text-align: right; padding-right: 2px; width: 90px;">
                                <div id="picker" style="line-height: 8px; display: inline-block;">选择文件</div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </form>
    </div>
    <script type="text/javascript">
        var fileList_toolbar = [{
            text: '刷新',
            iconCls: 'newicon-refresh',
            handler: function () {
                reload_fileList();
            }
        }, '-', {
            text: '删除',
            iconCls: 'newicon-document_delete',
            handler: function () {
                delFiles();
            }
        }];
        var upList_toolbar = [{
            text: '取消上传',
            iconCls: 'newicon-delete_s',
            handler: function () {
                cancelQueueFile();
            }
        }/*, {
            text: '暂停',
            iconCls: 'newicon-up-no',
            handler: function () {
                alert('功能开发中');
            }
        }, '-', {
            text: '继续',
            iconCls: 'newicon-up',
            handler: function () {
                alert('功能开发中');
            }
        }*/];
        function getSelectionIDs(tabelid) {
            var rows = $("#" + tabelid).datagrid("getSelections");
            if (rows.length == 0) { return ""; }
            var ids = [];
            for (var i = 0; i < rows.length; i++) {
                ids.push(rows[i].ID);
            }
            return ids.join(",");
        }
        function delFiles() {
            var ids = getSelectionIDs("tFileList");
            if (!ids) { alert("请选择文件"); return; }
            if (confirm("确定要删除文件？")) {
                $.post("file.ashx", { act: 'delfile', fid: ids }, function (d, s) {
                    reload_fileList();
                });
            }
        }
        function cancelQueueFile() {
            var ids = getSelectionIDs("tUpload");
            if (!ids) { alert("请选择文件"); return; }
            var idArray = ids.split(',');
            for (var i = 0; i < idArray.length; i++) {
                uploader.removeFile(idArray[i]);

                //移除当前队列
                for (var i = 0; i < uploadQueue.length; i++) {
                    var upload = uploadQueue[i];
                    if (upload.ID == idArray[i]) {
                        uploadQueue.splice(uploadQueue.indexOf(upload), 1);
                    }
                }
            }
            reload_fileList();
            reload_upList();
        }
        function getValue() {
            return $('#tFileList').datagrid("getRows");
        }
    </script>
    <script type="text/javascript">
        var uploadQueue = [];
        var uploader;
        $(function () {
            uploader = WebUploader.create({
                auto: true,
                swf: 'webuploader/Uploader.swf',
                server: 'file.ashx?act=upload',
                pick: '#picker',
                formData: { dataId: uploadOptions.dataid, ctrId: uploadOptions.ctrid, path: uploadOptions.path },
                fileSingleSizeLimit: uploadOptions.fileSingleSizeLimit,
                fileSizeLimit: uploadOptions.fileSizeLimit,
                accept: {
                    title: 'files',
                    extensions: uploadOptions.exts,
                }
            });
            uploader.on('fileQueued', function (file) {
                console.log("fileQueued");
                console.log(file);

                uploadQueue.push({ ID: file.id, fileName: file.name, process: 0, error: "" });
                reload_upList();
            });
            uploader.on('uploadProgress', function (file, percentage) {
                var percent = parseInt(percentage * 100);
                for (var i = 0; i < uploadQueue.length; i++) {
                    var upload = uploadQueue[i];
                    if (upload.ID == file.id) {
                        upload.process = percent;
                        updateProcess(upload.ID, upload.process)
                    }
                }
            });
            uploader.on('uploadSuccess', function (file, data) {
                console.log("uploadSuccess");
                //console.log(file);
                console.log(data);

                for (var i = 0; i < uploadQueue.length; i++) {
                    var upload = uploadQueue[i];
                    if (upload.ID == file.id) {
                        if (data.error) {
                            alert(file.name + " 上传失败，" + data.error);
                            upload.error = data.error;
                        } else {
                            uploadQueue.splice(uploadQueue.indexOf(upload), 1);
                        }
                    }
                }
                reload_fileList();
                reload_upList();
            });
            uploader.on("error", function (type) {
                if (type == "F_DUPLICATE") {
                    alert("文件已上传，请勿重复操作！");
                } else if (type == "Q_TYPE_DENIED") {
                    alert("您选择文件类型不支持上传，您可以将文件压缩后上传！");
                } else if (type == "F_EXCEED_SIZE") {
                    alert("文件大小不能超过300M");
                } else {
                    alert("上传出错！请检查后重新上传！错误代码 " + type);
                }
            });
            uploader.on('uploadError', function (file) {
                updateProcessError(file.id);
                alert(file.name + " 上传出错");
            });
            uploader.on('uploadComplete', function (file) {
                //console.log("uploadComplete");
                //console.log(file);
            });
            reload_fileList(true);
            setPathText();
        })
    </script>
    <script type="text/javascript">
        function setPathText() {
            $("#txt_path").text(uploadOptions.pathText);
        }
        function reload_upList() {
            $("#tUpload").datagrid("loadData", uploadQueue);
            if (uploadQueue && uploadQueue.length > 0) {
                //setTimeout(function () {
                //    $('#mainlayout').layout('expand', 'east');
                //}, 500);
            } else {
                setTimeout(function () {
                    $('#mainlayout').layout('collapse', 'east');
                }, 2000);
            }
        }
        function reload_fileList(init) {
            if (init) {
                $("#tFileList").datagrid({ url: "file.ashx?act=list&dataid=" + uploadOptions.dataid + "&ctrid=" + uploadOptions.ctrid });
            } else {
                $("#tFileList").datagrid("reload");
            }
        }
        function formatter_fileName(value, row, index) {
           return "<a onclick='return onClick_down(\""+row.ID+"\");' ><span class='easyui-icon newicon-down'>&nbsp;</span></a> "+value;
        }
        function formatter_Process(value, row, index) {
            return '<div id="PS' + row.ID + '" style="width:100%;"></div>';
        }
        function onClick_down(id) {
            window.open("file.ashx?act=download&fid=" + id, "_blank");
            window.event? window.event.cancelBubble = true : e.stopPropagation();
            return false;
        }
        function tUpload_onloadSuccess(data) {
            //alert(data.total);
            for (var i = 0; i < data.rows.length; i++) {
                var row = data.rows[i];
                $("#PS" + row.ID).progressbar({ value: row.process });
            }
        }
        function updateProcess(id, process) {
            $('#PS' + id).progressbar('setValue', process);
        }
        function updateProcessError(id) {
            $('#PS' + id).parent().html("<span style='color:red'>上传错误,请重试</span>");
        }
    </script>
    <script type="text/javascript">
        //$(function () {
        //    uploadQueue.push({ ID: 'A1', fileName: "11.txt", process: 0, error: "" });
        //    reload_upList();
        //    setTimeout(function () {
        //        var data = uploadQueue[0];
        //        $('#PS' + data.ID).parent().html("<span style='color:red'>上传错误,请重试</span>");
        //    }, 3000);
        //    //setInterval(function () {
        //    //    var data = uploadQueue[0];
        //    //    data.process++;
        //    //    updateProcess(data.ID, data.process);
        //    //}, 200);
        //});
    </script>
</body>
</html>
