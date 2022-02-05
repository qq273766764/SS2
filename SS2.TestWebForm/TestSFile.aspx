<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TestSFile.aspx.cs" Inherits="SS2.TestWebForm.TestSFile" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:FileUpload ID="fileupload" runat="server" />
        </div>
        <div>
            <asp:Button Text="上传文件" ID="btnSave" runat="server" OnClick="btnSave_Click" />
        </div>
        <div>
            <asp:Button Text="创建目录" runat="server" ID="btnCreateDir" OnClick="btnCreateDir_Click" />
        </div>
        <div>
            <asp:Button Text="查找文件" runat="server" ID="btnSearch" OnClick="btnSearch_Click" />
        </div>
    </form>
</body>
</html>
