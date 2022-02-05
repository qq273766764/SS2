var ssDialog = {
    opt: {
        height: '360px'
    },
    queue: [],
    /**
     * 打开选择框
     * @param {string} title 窗口标题
     * @param {string} key 选框Key
     * @param {function} callback 回调函数
     * @param {string} paras 查询参数
     * @param {string} sels 已选择数据
     */
    show: function (title, key, callback, paras, sels) {
        if (!title) { alert('title 不能为空'); return; }
        if (!key) { alert('key 不能为空'); return; }
        if (!callback) { alert('callback 不能为空'); return; }
        if (!sels || sels == undefined) { sels = ""; }
        if (paras) { paras = "&" + paras; }

        var time = new Date().getTime();
        var cid = "ssdialog_" + key + "_" + time;
        var url = "/__SSControls/page_dialog.aspx?dlg=" + key + "&selvalues=" + sels + "&ts=" + time + paras;
        var html = "";
        html += '<div id="' + cid + '" class="easyui-dialog" title="' + title + '" style="width:800px;height:440px;padding:0px;overflow: hidden;">';
        html += '<iframe name="' + cid + '_frame" id="' + cid + '_form" src="' + url + '" style="border:none; width:100%; height:100%; padding:0px;"></iframe>';
        html += '</div>';

        $("body").append(html);
        this.queue.push({ key: key, cid: cid, callback: callback, sels: sels });
        setTimeout(function () {
            $("#" + cid).dialog({
                cls: 'c8',
                iconCls: 'newicon-flag',
                modal: true,
                closed: false,
                buttons: [{
                    text: '确定',
                    iconCls: 'newicon-ok',
                    handler: function () {
                        ssDialog.onOKClick();
                    }
                }, {
                    text: '取消',
                    iconCls: 'newicon-no',
                    handler: function () {
                        ssDialog.onCancelClick();
                    }
                }]
            });
        },0);
    },
    onCancelClick: function () {
        var dlg = this.queue.pop();
        if (dlg) {
            $("#" + dlg.cid + " button").attr("disabled", "disabled");
            $("#" + dlg.cid).dialog('close');
            setTimeout(function () { $("#" + dlg.cid).remove(); }, 500);
        }
    },
    onOKClick: function () {
        var dlg = this.queue.pop();
        if (dlg) {
            $("#" + dlg.cid + " button").attr("disabled", "disabled");
            var subwin = window.frames[dlg.cid + "_frame"].window;
            var vals = subwin.getValue();
            if (dlg.callback) { dlg.callback(vals); }
            $("#" + dlg.cid).dialog('close');
            setTimeout(function () { $("#" + dlg.cid).remove(); }, 500);
        }
    }
};