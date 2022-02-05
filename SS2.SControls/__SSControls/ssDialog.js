var ssDialog = {
    opt: {
        height: '360px',
        cls: 'modal-lg'
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

        var html = '';
        html += '<div class="modal fade" id="' + cid + '" tabindex="-1" role="dialog">';
        html += '<div class="modal-dialog ' + this.opt.cls + '" role="document">';
        html += '<div class="modal-content">';
        html += '<div class="modal-header" style="padding: 0px 15px;"><h5>' + title + '</h5></div>';
        html += '<div class="modal-body" style="padding: 0px; background-color: #efefef"><iframe name="' + cid + '_frame" id="' + cid + '_form" src="' + url + '" style="border:none; width:100%; height:' + this.opt.height + '; padding:0px;"></iframe></div>';
        html += '<div class="modal-footer"><button type="button" class="btn btn-default" onclick="ssDialog.onCancelClick()" data-dismiss="modal">取消</button><button type="button" onclick="ssDialog.onOKClick()" class="btn btn-primary">确定</button></div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';

        $("body").append(html);
        this.queue.push({ key: key, cid: cid, callback: callback, sels: sels });
        setTimeout(function () {
            $("#" + cid).modal({ backdrop: "static", show: true });
        }, 0);
    },
    onCancelClick: function () {
        var dlg = this.queue.pop();
        if (dlg) {
            $("#" + dlg.cid + " button").attr("disabled", "disabled");
            $("#" + dlg.cid).modal("hide");
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
            $("#" + dlg.cid).modal("hide");
            setTimeout(function () { $("#" + dlg.cid).remove(); }, 500);
        }
    }
};