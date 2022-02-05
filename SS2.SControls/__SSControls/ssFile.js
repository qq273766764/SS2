var ssFile = {
    opt: {
        height: '400px',
        cls: 'modal-lg'
    },
    queue: [],
    /**
     * 打开选择框
     * @param {string} title 窗口标题
     * @param {string} dataid 业务数据ID
     * @param {string} ctrid 附件类别ID
     * @param {function} callback 回调函数
     * @param {string} sels 已选择数据
     */
    show: function (dataid, ctrid, callback) {
        if (!dataid) { alert('dataid 不能为空'); return; }
        if (!ctrid) { alert('ctrid 不能为空'); return; }
        if (!callback) { alert('callback 不能为空'); return; }

        var title = "文件管理器";
        var time = new Date().getTime();
        var cid = "ssfile_" + "_" + time;
        var url = "/__SSControls/page_upload.aspx?dataid=" + dataid + "&ctrid=" + ctrid + "&ts=" + time;

        var html = '';
        html += '<div class="modal fade" id="' + cid + '" tabindex="-1" role="dialog">';
        html += '<div class="modal-dialog ' + this.opt.cls + '" role="document">';
        html += '<div class="modal-content">';
        html += '<div class="modal-header" style="padding: 0px 15px;"><h5>' + title + '</h5></div>';
        html += '<div class="modal-body" style="padding: 0px; background-color: #efefef"><iframe name="' + cid + '_frame" id="' + cid + '_form" src="' + url + '" style="border:none; width:100%; height:' + this.opt.height + '; padding:0px;"></iframe></div>';
        html += '<div class="modal-footer"><button type="button" onclick="ssFile.onOKClick()" class="btn btn-primary btn-sm" style="width:80px;">确  定</button></div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';

        $("body").append(html);
        this.queue.push({ dataid: dataid, ctrid: ctrid, cid: cid, callback: callback });
        setTimeout(function () {
            $("#" + cid).modal({ backdrop: "static", show: true });
        }, 0);
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