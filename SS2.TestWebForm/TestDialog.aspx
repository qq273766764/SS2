<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TestDialog.aspx.cs" Inherits="SS2.TestWebForm.TestDialog" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>TestDialog</title>
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <script src="Scripts/jquery-1.9.1.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="__SSControls/ssDialog.js"></script>
    <script src="__SSControls/ssFile.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <button type="button" class="btn btn-primary" onclick="showDialog();">
            JS打开选择框
        </button>
        <button type="button" class="btn btn-primary" onclick="showFile();">
            JS文件上传
        </button>
        <a href="__SSControls/file.ashx?act=download&fid=F0302F9CD0E28C2B5" target="_blank" class="btn btn-primary">文件下载</a>
        <!-- /.modal -->
        <div class="modal fade" id="dialog" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header" style="padding: 0px 15px;">
                        <h5>请选择</h5>
                    </div>
                    <div class="modal-body" style="padding: 0px; background-color: #efefef">
                        <iframe id="dialog-form" style="border: none; width: 100%; height: 360px; padding: 0px;"></iframe>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary">确定</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        <p>One fine body&hellip;</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>

        <script type="text/javascript">
            function showDialog() {
                //var url = "/__SSControls/page_dialog.aspx?dlg=t1&t232=" + (new Date().getTime());
                //$("#dialog-form").attr("src", url);
                //$("#dialog").modal("show");

                ssDialog.show("您好", "t1", function (rows) {
                    console.log(rows);
                    alert(rows);
                });
                //setTimeout(function () {
                //    ssDialog.show("您好2", "t1", function (rows) {
                //        console.log(rows);
                //        alert(rows);
                //    });
                //}, 5000);
            }
            function showFile() {
                ssFile.show("1", "1", function (files) {
                    console.log(files);
                    alert(files.length);
                });
            }
        </script>
    </form>
</body>
</html>
