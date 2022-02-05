/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssanimations-csstransforms-setclasses !*/
!function (e, n, t) { function r(e, n) { return typeof e === n } function s() { var e, n, t, s, o, i, a; for (var l in C) if (C.hasOwnProperty(l)) { if (e = [], n = C[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase()); for (s = r(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), g.push((s ? "" : "no-") + a.join("-")) } } function o(e) { var n = _.className, t = Modernizr._config.classPrefix || ""; if (S && (n = n.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)"); n = n.replace(r, "$1" + t + "js$2") } Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), S ? _.className.baseVal = n : _.className = n) } function i() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) } function a(e, n) { return !!~("" + e).indexOf(n) } function l(e) { return e.replace(/([a-z])-([a-z])/g, function (e, n, t) { return n + t.toUpperCase() }).replace(/^-/, "") } function f(e, n) { return function () { return e.apply(n, arguments) } } function u(e, n, t) { var s; for (var o in e) if (e[o] in n) return t === !1 ? e[o] : (s = n[e[o]], r(s, "function") ? f(s, t || n) : s); return !1 } function d(e) { return e.replace(/([A-Z])/g, function (e, n) { return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") } function c() { var e = n.body; return e || (e = i(S ? "svg" : "body"), e.fake = !0), e } function p(e, t, r, s) { var o, a, l, f, u = "modernizr", d = i("div"), p = c(); if (parseInt(r, 10)) for (; r--;) l = i("div"), l.id = s ? s[r] : u + (r + 1), d.appendChild(l); return o = i("style"), o.type = "text/css", o.id = "s" + u, (p.fake ? p : d).appendChild(o), p.appendChild(d), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(n.createTextNode(e)), d.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = _.style.overflow, _.style.overflow = "hidden", _.appendChild(p)), a = t(d, e), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = f, _.offsetHeight) : d.parentNode.removeChild(d), !!a } function m(n, r) { var s = n.length; if ("CSS" in e && "supports" in e.CSS) { for (; s--;) if (e.CSS.supports(d(n[s]), r)) return !0; return !1 } if ("CSSSupportsRule" in e) { for (var o = []; s--;) o.push("(" + d(n[s]) + ":" + r + ")"); return o = o.join(" or "), p("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) { return "absolute" == getComputedStyle(e, null).position }) } return t } function h(e, n, s, o) { function f() { d && (delete P.style, delete P.modElem) } if (o = r(o, "undefined") ? !1 : o, !r(s, "undefined")) { var u = m(e, s); if (!r(u, "undefined")) return u } for (var d, c, p, h, v, y = ["modernizr", "tspan"]; !P.style;) d = !0, P.modElem = i(y.shift()), P.style = P.modElem.style; for (p = e.length, c = 0; p > c; c++) if (h = e[c], v = P.style[h], a(h, "-") && (h = l(h)), P.style[h] !== t) { if (o || r(s, "undefined")) return f(), "pfx" == n ? h : !0; try { P.style[h] = s } catch (g) { } if (P.style[h] != v) return f(), "pfx" == n ? h : !0 } return f(), !1 } function v(e, n, t, s, o) { var i = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + b.join(i + " ") + i).split(" "); return r(n, "string") || r(n, "undefined") ? h(a, n, s, o) : (a = (e + " " + E.join(i + " ") + i).split(" "), u(a, n, t)) } function y(e, n, r) { return v(e, t, t, n, r) } var g = [], C = [], w = { _version: "3.3.1", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, n) { var t = this; setTimeout(function () { n(t[e]) }, 0) }, addTest: function (e, n, t) { C.push({ name: e, fn: n, options: t }) }, addAsyncTest: function (e) { C.push({ name: null, fn: e }) } }, Modernizr = function () { }; Modernizr.prototype = w, Modernizr = new Modernizr; var _ = n.documentElement, S = "svg" === _.nodeName.toLowerCase(), x = "Moz O ms Webkit", b = w._config.usePrefixes ? x.split(" ") : []; w._cssomPrefixes = b; var E = w._config.usePrefixes ? x.toLowerCase().split(" ") : []; w._domPrefixes = E; var N = { elem: i("modernizr") }; Modernizr._q.push(function () { delete N.elem }); var P = { style: N.elem.style }; Modernizr._q.unshift(function () { delete P.style }), w.testAllProps = v, w.testAllProps = y, Modernizr.addTest("csstransforms", function () { return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0) }), Modernizr.addTest("cssanimations", y("animationName", "a", !0)), s(), o(g), delete w.addTest, delete w.addAsyncTest; for (var z = 0; z < Modernizr._q.length; z++) Modernizr._q[z](); e.Modernizr = Modernizr }(window, document);

if (Modernizr.csstransforms && Modernizr.cssanimations) {
    document.write("<div id='nnfspinnerctn' class='nnfloadingmask'><div class='nnfspinner'><div class='nnfspinnerrect1'></div><div class='nnfspinnerrect2'></div><div class='nnfspinnerrect3'></div><div class='nnfspinnerrect4'></div><div class='nnfspinnerrect5'></div></div></div>");
} else {
    document.write('<div id="NNFLoadingMask" class="nnfloadingmask">页面加载中，请考虑升级最新浏览器以提升体验。</div>');
}

window.nnfRuntime = { EasyUIRendered: false };

function ReadyCALL(name, func) {
    var rc = window._ReadyCalls || {};
    if (rc[name] === true) {
        func();
        return;
    }
    var calls = rc[name] || [];
    if (typeof func == "function") {
        calls.push(func);
        rc[name] = calls;
        window._ReadyCalls = rc;
        return;
    }
    rc[name] = true;
    window._ReadyCalls = rc;
    for (var i = 0; i < calls.length; i++) {
        calls[i]();
    }
}

(function () {
    //组织URL参数
    window.urlQuery = {};
    var rQuery = /[\?&]([^=&]+)=([^&]*)/ig;
    while (true) {
        var mQuery = rQuery.exec(location.search);
        if (!mQuery) break;
        try {
            urlQuery[mQuery[1].toLowerCase()] = decodeURIComponent(mQuery[2]);
        } catch (e) { }
    }

    //终端适配
    window.nnfPhone = {
        w2m: 1,
        scanQR: false,
        scanQReady: function (func, value) {
            if (typeof value != "undefined") this.scanQR = value;
            ReadyCALL("scanQR", func);
        },

        camera: false,
        cameraReady: function (func, value) {
            if (typeof value != "undefined") this.camera = value;
            ReadyCALL("camera", func);
        },

        viewImage: false,
        viewImageReady: function (func, value) {
            if (typeof value != "undefined") this.viewImage = value;
            ReadyCALL("viewImage", func);
        },

        previewFile: false,
        previewFileReady: function (func, value) {
            if (typeof value != "undefined") this.previewFile = value;
            ReadyCALL("previewFile", func);
        },

        canDownload: null,
        canDownloadReady: function (func, value) {
            if (typeof value != "undefined") this.canDownload = value;
            ReadyCALL("canDownload", func);
        },

        canHtmlUpload: true,
        canHtmlUploadReady: function (func, value) {
            if (typeof value != "undefined") this.canHtmlUpload = value;
            ReadyCALL("canHtmlUpload", func);
        }
    };

    if (urlQuery["by"] != "w2mobile") {
        //PC端访问
        nnfPhone.viewImageReady(null, false);
        nnfPhone.previewFileReady(null, true);
        nnfPhone.canDownloadReady(null, true);
        nnfPhone.canHtmlUploadReady(null, true);
    }
})();

function nnfirst(arr, finder, action) {
    var found = null;
    $j.each(arr || [], function (i, n) {
        if (finder(n)) {
            found = n;
            if (action) {
                action(found);
            }
            return false;
        }
    });
    return found;
}

function nnchangecolumnwidth(jgrid, field, valuegetter, commit) {
    var columns = jgrid.datagrid("options").columns;
    nnfirst(columns[0], function (n) { return n.field == field; }, function (n) {
        n.width = valuegetter();
    });
    if (commit) {
        jgrid.datagrid({ columns: columns });
    }
}

function nnfDeepGet(obj, path) {
    var idx = path.indexOf(".");
    if (idx > 0) {
        obj = obj[path.substr(0, idx)];
        if (!obj) {
            return undefined;
        }
        return nnfDeepGet(obj, path.substr(idx + 1));
    }
    return obj[path];
}

function nnfDeepSet(obj, path, val) {
    var idx = path.indexOf(".");
    if (idx > 0) {
        var name = path.substr(0, idx);
        var newobj = obj[name];
        if (!newobj) {
            obj[name] = newobj = {};
        }
        return nnfDeepSet(newobj, path.substr(idx + 1), val);
    }
    return obj[path] = val;
}


//微信JsSDK支持
function wxReady(func) { ReadyCALL("wxReady", func); }

/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

function hijackMethod(obj, name, func) {
    var old = obj[name];
    obj[name] = function (a, b, c, d, e, f, g) {
        if (func(old, a, b, c, d, e, f, g) === false) return;
        if (old) old(a, b, c, d, e, f, g);
    };
}

//环境检测
(function () {
    window.nnfwwidth = $(window).width();
    window.nnfwheight = $(window).height();
    var mww = window.urlQuery["wwidth"];
    if (mww) window.nnfwwidth = parseInt(mww);
    window.isNSMode = window.nnfwwidth < 500;

    if (!isNSMode && location.href.indexOf("w2mobile") > 0) {
        //使用PC访问W2MOBILE时
        window.nnfwwidth = 360;
        window.isNSMode = true;
    }
})();

$(function () {
    //自动调整ajax的地址，改进子应用部署时的兼容性
    (function () {
        var root = "";
        $("script").each(function () {
            var src = this.getAttribute("src");
            if (src && (src.indexOf("nnf.beforei.js") > 0 || src.indexOf("nnf.main.js") > 0)) {
                root = src.replace(/NNF\/js\/nnf\..*/ig, "");
                return false;
            }
        });

        var _ajax = $.ajaxorg = $.ajaxsrc = $.ajax;
        $.ajax = function (url, options) {
            if (typeof url === "object") {
                options = url;
                url = null;
            }
            options = options || {};
            url = url || options.url;

            if (url) {
                if (url.indexOf("//") == 0) {
                    url = url.substr(1);
                } else if (url.indexOf("/") == 0) {
                    url = "~" + url;
                }

                if (url.indexOf("~/") == 0) {
                    url = url.replace("~/", root);
                }
            }

            options.url = url;
            window.nnfAjaxs = window.nnfAjaxs || { seed: 0 };
            var nnfAjaxKey = "ajax" + (++nnfAjaxs.seed);
            var showProg = $(".messager-progress:visible").length == 0;
            if (showProg) {
                var loadingMsg = options.loading || ((options.data || {}).loading) || "正在执行...";
                var delay = options.loadingDelay || ((options.data || {}).loadingDelay) || 2000;
                nnfAjaxs[nnfAjaxKey] = setTimeout(function () {
                    $.messager.progress({ title: "处理中", msg: loadingMsg, text: "" });
                    if (window.urlQuery["tabif"] && parent && typeof parent.getFormRect != "undefined") {
                        var rect = parent.getFormRect(window.urlQuery["tabif"]);
                        var top = rect.getTop(140);
                        $(".messager-window:visible,.window-shadow:visible").css("top", top);
                    }
                }, delay);
            }
            var clsProg = function () {
                if (!showProg) return;
                clearInterval(nnfAjaxs[nnfAjaxKey]);
                $.messager.progress("close");
            };
            hijackMethod(options, "success", clsProg);
            hijackMethod(options, "error", function (funcError, xhr, textStatus, errorThrown) {
                clsProg();
                if (options.noError || (options.data || {}).noError) return;
                var error = "执行失败[%C]";
                var status = xhr.status;
                var line3 = "";
                if (status === 0) {
                    if (xhr.statusText == "timeout") error = "执行超时";
                } else if (status === 200) {
                    if (textStatus == "parsererror") {
                        error = "解析结果失败";
                        line3 = $.trim((xhr.responseText || "").replace(/[\r\n]/ig, '')).substr(0, 397) + '...';
                    }
                }
                alert("%E，请检查网络！\n>> %U <<".replace("%E", error).replace("%C", status).replace("%U", options.url) + (line3 ? ("\n" + line3) : ""));

                if (!funcError) {
                    funcError = (options.data || {}).error;
                    if (typeof (funcError) == 'function') funcError(xhr, textStatus, errorThrown);
                }
            });
            _ajax(options);
        };
    })();

    //植入代码方便调试
    if (typeof beforei == "function") beforei();

    //延迟渲染模块
    lazyEasy();

    //表单调试模式切换到移动端时，设置页面的最大宽度
    if (window.urlQuery["wwidth"]) $(".a4").width(window.nnfwwidth - 20);

    //移动端样式微调
    if (window.isNSMode) {
        //$(".easyui-dialog").css("width", window.nnfdialogwidth = window.nnfwwidth - 20);
        $(".a4").addClass("a4nano");
        $(document.body).addClass("nanomode");
    }

    //初始化布局
    applyNNFLayout();

    //初始化nnfEditItem
    applyNNFEditItem();

    //初始化nnf-options控件
    $(".nnf-options").btnopt({}, false);

    //datagrid自动填满宽度1
    $("th[fillwidth]").each(function () {
        var field = this.getAttribute("field");
        if (!field) {
            var dato = this.getAttribute("data-options");
            if (dato) field = eval("({" + dato + "})").field;
        }
        if (!field) return;
        var table = $(this).closest("table");
        window.nnfGridFill = window.nnfGridFill || [];
        window.nnfGridFill.push({ field: field, tableid: table.attr("id") });
        table.attr("fillfield", field);
    });


});





//功能拓展：引入W2角色选择器
function initW2Selector() {
    document.write("<script type='text/javascript' src='selector_sapi.axd'></script>");
}

//初始化编辑项
function applyNNFEditItem(jRoot) {
    jRoot = jRoot || $(document);
    jRoot.find("[nnfedititem]").each(function () {
        var f = $(this);
        //        $("<div class='nnfEditItem'></div>")
        //            .attr("style", f.attr("nnf-style"))
        //            .append($("<span></span>").text(f.attr("nnfedititem")))
        //            .append($("<div class='nnfedititemcontrol'></div>").append(f.clone().removeAttr("nnfedititem")))
        //            .insertBefore(f);
        var item = $("<div class='nnfEditItem' style='" + f.attr("nnf-style") + "'><span>" + f.attr("nnfedititem") + "</span><div class='nnfedititemcontrol'></div></div>");
        item.find("div.nnfedititemcontrol").append(f.clone().removeAttr("nnfedititem"));
        item.insertBefore(f);

        f.remove();
    });

    jRoot.find(".nnfEditItem > span").each(function () {
        var label = $(this);
        var txt = label.text();
        if (txt && txt.indexOf("*") == (txt.length - 1)) {
            label.text(txt.substr(0, txt.length - 1)).append("<span class='required'>*</span>");
        }
    });
}

//初始化布局
function applyNNFLayout(jRoot) {
    jRoot = jRoot || $(document);
    var wwidth = window.nnfwwidth;

    var jqnnflayout = jRoot.find("div[nnflayout]");
    if (jqnnflayout.length == 0) {
        return;
    }
    jqnnflayout.each(function () {
        var layout = $(this);
        var cols = Math.max(1, Math.min(parseInt(layout.attr("nnflayout")), 12));

        if (wwidth >= 320 && wwidth < 430) {
            cols = 2;
        } else if (wwidth < 320) {
            cols = 1;
        }

        var colwidthfloat = (100.0 / cols);
        var colwidth = Math.floor(colwidthfloat);
        var table = $("<table class='nnflayout'></table>").attr({ border: "0", cellpadding: "0", cellspacing: "0", id: layout.attr("id"), style: layout.attr("style") });
        {
            var trhead = $("<tr></tr>").appendTo(table);
            var totalwidth = 0;
            for (var i = 0; i < cols; i++) {
                var width = Math.min((colwidth < colwidthfloat) ? colwidth + 1 : colwidth, 100 - totalwidth);
                totalwidth += width;
                trhead.append($("<th></th>").css({ width: width + "%" }));
            }
        }
        var tr = null;
        var leftcols = cols;
        var others = [];

        layout.children().each(function () {
            var item = $(this).clone();
            if (!item.is("[nnfedititem],.nnfEditItem")) {
                others.push(item);
                return;
            }

            var size = Math.min(cols, Math.max(0, parseInt(item.attr("nnf-size")) || 1));
            if (window.isNSMode) {
                var nsize = parseInt(item.attr("nnf-size2"));
                if (nsize != 0 && !nsize) nsize = size;
                size = Math.min(cols, Math.max(0, nsize));
            }
            if (size == 0) return;

            var align = item.attr("nnf-align") || "left";
            var valign = item.attr("nnf-valign") || "top";

            if (item.attr("nnfedititem") == "SP") {
                item = $("<div class='nnfspacer'></div>").text(item.text());//占位符
            }

            if (!tr) {
                tr = $("<tr class='nnflayoutrow'></tr>").appendTo(table);
                leftcols = cols;
            }

            if (leftcols >= size) {
                $("<td class='nnflayoutcell'></td>").attr({ colspan: size, align: align, valign: valign }).append(item).appendTo(tr);
                leftcols -= size;
            } else {
                $("<td class='nnflayoutcell'></td>").attr({ colspan: leftcols }).appendTo(tr);//EmptyCell
                tr = $("<tr class='nnflayoutrow'></tr>").appendTo(table);
                leftcols = cols;
                $("<td class='nnflayoutcell'></td>").attr({ colspan: size, align: align, valign: valign }).append(item).appendTo(tr);
                leftcols -= size;
            }
            if (leftcols == 0) tr = null;

        });
        if (leftcols > 0) {
            $("<td class='nnflayoutcell'></td>").attr({ colspan: leftcols }).appendTo(tr);//EmptyCell
        }

        if (others.length > 0) {
            var hid = $("<div></div>").hide();
            $.each(others, function (i, n) { hid.append(n); });
            table.find("td:first").append(hid);
        }

        table.insertBefore(layout);
        layout.remove();
    });
    applyNNFLayout(jRoot);
}

//功能拓展：计算两个datebox的天数
function nnf2datebox(jDate1, jDate2, jTextBox) {
    var setValue = function (value) {
        if ($(jTextBox).hasClass("textbox-f")) {
            $(jTextBox).textbox("setValue", value);
        } else {
            $(jTextBox).text(value || "");
        }
    };
    $(jDate1 + "," + jDate2).datebox({
        onChange: function (newvalue, old) {
            var d1 = $(this).datebox("getValue");
            if (d1) d1 = new Date(Date.parse(d1.replace("-", "/")));
            var d2 = $($(this).is(jDate1) ? jDate2 : jDate1).datebox("getValue");
            if (d2) d2 = new Date(Date.parse(d2.replace("-", "/")));
            if (!d1 || !d2) {
                setValue(null);
                $(jTextBox).textbox("setValue", null).text("");
            } else {
                var day = Math.abs(d1 - d2) / 86400000;
                setValue(day + 1);
                $(jTextBox).textbox("setValue", day + 1).text(day + 1);
            }
        }
    });
}

//功能拓展：计算若干个numberbox的总和
function nnfsumbox(jArrNumbox, jValue) {
    var jid = jArrNumbox.join(",");
    $(jid).numberbox({
        onChange: function () {
            var total = 0;
            $(jid).each(function () {
                if ($(this).is(jValue)) return; //排除显示汇总的框子
                var val = $(this).numberbox("getValue");
                val = parseFloat(val);
                if (val) total += val;
            });

            jValue = $(jValue);
            if (jValue.hasClass("textbox-f")) {
                jValue.textbox("setValue", total);
            } else {
                jValue.text(total || "");
            }
        }
    });
}

//功能拓展：延迟渲染
function lazyEasy() {
    $("div[nnflazy]").each(function () {
        var div = $(this);
        div.find("[class*=easyui]").each(function () {
            var mEasy = /easyui-[^\s]+/ig.exec(this.className)[0];
            var clsName = this.className.replace(mEasy, "");
            this.className = clsName;
            this.setAttribute("easyclass-lazy", mEasy);
        });
        div.find("div[nnflayout]").each(function () {
            $(this).attr("nnflayout-lazy", this.getAttribute("nnflayout")).removeAttr("nnflayout");
        });
        div.find("[nnfedititem]").each(function () {
            $(this).attr("nnfedititem-lazy", this.getAttribute("nnfedititem")).removeAttr("nnfedititem");
        });
    });
}

//功能拓展：postJSON
jQuery.postJson = jQuery.postJSON = function (url, data, callback, type) {
    jQuery.ajax({
        url: url,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: (typeof data == "string") ? data : JSON.stringify(data),
        dataType: type || "text",
        success: function (obj) {
            if (typeof callback != "undefined") callback(obj);
        }
    });
};

jQuery.fn.nnflazy = function (onload) {
    this.data("nnf-onlazyload", onload);
    return this;
};

(function ($) {
    var KEY_PANEL_LAYOUT = "div.panel:visible,div.accordion:visible,div.tabs-container:visible,div.layout:visible,.easyui-fluid:visible";
    var find = $.prototype.find;
    var fix_PANEL_LAYOUT = function (parent, rt) {
        for (var i = 0; i < parent.childNodes.length; i++) {
            var child = parent.childNodes[i];
            if (child.tagName != 'DIV') continue;
            if ($(child).is(KEY_PANEL_LAYOUT)) {
                rt.push(child);
                continue;
            }
            fix_PANEL_LAYOUT(child, rt);
        }
    };

    $(function () {
        $.extend(window.nnfRuntime, { hasA4: $(".a4").length > 0 });

    });

    $.prototype.find = function (a) {
        var rt = $();
        if (window.nnfRuntime.hasA4) {
            if (a == KEY_PANEL_LAYOUT) {
                if (!window.nnfRuntime.EasyUIRendered) {
                    return rt;
                }
            }
        }

        rt = find.apply(this, [a]);
        return rt;
    }
})(jQuery);

/**
 * jQuery EasyUI 1.5.1
 * 
 * Copyright (c) 2009-2016 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function($){
$.easyui={indexOfArray:function(a,o,id){
for(var i=0,_1=a.length;i<_1;i++){
if(id==undefined){
if(a[i]==o){
return i;
}
}else{
if(a[i][o]==id){
return i;
}
}
}
return -1;
},removeArrayItem:function(a,o,id){
if(typeof o=="string"){
for(var i=0,_2=a.length;i<_2;i++){
if(a[i][o]==id){
a.splice(i,1);
return;
}
}
}else{
var _3=this.indexOfArray(a,o);
if(_3!=-1){
a.splice(_3,1);
}
}
},addArrayItem:function(a,o,r){
var _4=this.indexOfArray(a,o,r?r[o]:undefined);
if(_4==-1){
a.push(r?r:o);
}else{
a[_4]=r?r:o;
}
},getArrayItem:function(a,o,id){
var _5=this.indexOfArray(a,o,id);
return _5==-1?null:a[_5];
},forEach:function(_6,_7,_8){
var _9=[];
for(var i=0;i<_6.length;i++){
_9.push(_6[i]);
}
while(_9.length){
var _a=_9.shift();
if(_8(_a)==false){
return;
}
if(_7&&_a.children){
for(var i=_a.children.length-1;i>=0;i--){
_9.unshift(_a.children[i]);
}
}
}
}};
$.parser={auto:true,onComplete:function(_b){
},plugins:["draggable","droppable","resizable","pagination","tooltip","linkbutton","menu","menubutton","splitbutton","switchbutton","progressbar","tree","textbox","passwordbox","filebox","combo","combobox","combotree","combogrid","combotreegrid","tagbox","numberbox","validatebox","searchbox","spinner","numberspinner","timespinner","datetimespinner","calendar","datebox","datetimebox","slider","layout","panel","datagrid","propertygrid","treegrid","datalist","tabs","accordion","window","dialog","form"],parse:function(_c){
var aa=[];
for(var i=0;i<$.parser.plugins.length;i++){
var _d=$.parser.plugins[i];
var r=$(".easyui-"+_d,_c);
if(r.length){
if(r[_d]){
r.each(function(){
$(this)[_d]($.data(this,"options")||{});
});
}else{
aa.push({name:_d,jq:r});
}
}
}
if(aa.length&&window.easyloader){
var _e=[];
for(var i=0;i<aa.length;i++){
_e.push(aa[i].name);
}
easyloader.load(_e,function(){
for(var i=0;i<aa.length;i++){
var _f=aa[i].name;
var jq=aa[i].jq;
jq.each(function(){
$(this)[_f]($.data(this,"options")||{});
});
}
$.parser.onComplete.call($.parser,_c);
});
}else{
$.parser.onComplete.call($.parser,_c);
}
},parseValue:function(_10,_11,_12,_13){
_13=_13||0;
var v=$.trim(String(_11||""));
var _14=v.substr(v.length-1,1);
if(_14=="%"){
v=parseInt(v.substr(0,v.length-1));
if(_10.toLowerCase().indexOf("width")>=0){
v=Math.floor((_12.width()-_13)*v/100);
}else{
v=Math.floor((_12.height()-_13)*v/100);
}
}else{
v=parseInt(v)||undefined;
}
return v;
},parseOptions:function(_15,_16){
var t=$(_15);
var _17={};
var s=$.trim(t.attr("data-options"));
if(s){
if(s.substring(0,1)!="{"){
s="{"+s+"}";
}
_17=(new Function("return "+s))();
}
$.map(["width","height","left","top","minWidth","maxWidth","minHeight","maxHeight"],function(p){
var pv=$.trim(_15.style[p]||"");
if(pv){
if(pv.indexOf("%")==-1){
pv=parseInt(pv);
if(isNaN(pv)){
pv=undefined;
}
}
_17[p]=pv;
}
});
if(_16){
var _18={};
for(var i=0;i<_16.length;i++){
var pp=_16[i];
if(typeof pp=="string"){
_18[pp]=t.attr(pp);
}else{
for(var _19 in pp){
var _1a=pp[_19];
if(_1a=="boolean"){
_18[_19]=t.attr(_19)?(t.attr(_19)=="true"):undefined;
}else{
if(_1a=="number"){
_18[_19]=t.attr(_19)=="0"?0:parseFloat(t.attr(_19))||undefined;
}
}
}
}
}
$.extend(_17,_18);
}
return _17;
}};
$(function(){
var d=$("<div style=\"position:absolute;top:-1000px;width:100px;height:100px;padding:5px\"></div>").appendTo("body");
$._boxModel=d.outerWidth()!=100;
d.remove();
d=$("<div style=\"position:fixed\"></div>").appendTo("body");
$._positionFixed=(d.css("position")=="fixed");
d.remove();
if(!window.easyloader&&$.parser.auto){
$.parser.parse();
}
});
$.fn._outerWidth=function(_1b){
if(_1b==undefined){
if(this[0]==window){
return this.width()||document.body.clientWidth;
}
return this.outerWidth()||0;
}
return this._size("width",_1b);
};
$.fn._outerHeight=function(_1c){
if(_1c==undefined){
if(this[0]==window){
return this.height()||document.body.clientHeight;
}
return this.outerHeight()||0;
}
return this._size("height",_1c);
};
$.fn._scrollLeft=function(_1d){
if(_1d==undefined){
return this.scrollLeft();
}else{
return this.each(function(){
$(this).scrollLeft(_1d);
});
}
};
$.fn._propAttr=$.fn.prop||$.fn.attr;
$.fn._size=function(_1e,_1f){
if(typeof _1e=="string"){
if(_1e=="clear"){
return this.each(function(){
$(this).css({width:"",minWidth:"",maxWidth:"",height:"",minHeight:"",maxHeight:""});
});
}else{
if(_1e=="fit"){
return this.each(function(){
_20(this,this.tagName=="BODY"?$("body"):$(this).parent(),true);
});
}else{
if(_1e=="unfit"){
return this.each(function(){
_20(this,$(this).parent(),false);
});
}else{
if(_1f==undefined){
return _21(this[0],_1e);
}else{
return this.each(function(){
_21(this,_1e,_1f);
});
}
}
}
}
}else{
return this.each(function(){
_1f=_1f||$(this).parent();
$.extend(_1e,_20(this,_1f,_1e.fit)||{});
var r1=_22(this,"width",_1f,_1e);
var r2=_22(this,"height",_1f,_1e);
if(r1||r2){
$(this).addClass("easyui-fluid");
}else{
$(this).removeClass("easyui-fluid");
}
});
}
function _20(_23,_24,fit){
if(!_24.length){
return false;
}
var t=$(_23)[0];
var p=_24[0];
var _25=p.fcount||0;
if(fit){
if(!t.fitted){
t.fitted=true;
p.fcount=_25+1;
$(p).addClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").addClass("panel-fit");
}
}
return {width:($(p).width()||1),height:($(p).height()||1)};
}else{
if(t.fitted){
t.fitted=false;
p.fcount=_25-1;
if(p.fcount==0){
$(p).removeClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").removeClass("panel-fit");
}
}
}
return false;
}
};
function _22(_26,_27,_28,_29){
var t=$(_26);
var p=_27;
var p1=p.substr(0,1).toUpperCase()+p.substr(1);
var min=$.parser.parseValue("min"+p1,_29["min"+p1],_28);
var max=$.parser.parseValue("max"+p1,_29["max"+p1],_28);
var val=$.parser.parseValue(p,_29[p],_28);
var _2a=(String(_29[p]||"").indexOf("%")>=0?true:false);
if(!isNaN(val)){
var v=Math.min(Math.max(val,min||0),max||99999);
if(!_2a){
_29[p]=v;
}
t._size("min"+p1,"");
t._size("max"+p1,"");
t._size(p,v);
}else{
t._size(p,"");
t._size("min"+p1,min);
t._size("max"+p1,max);
}
return _2a||_29.fit;
};
function _21(_2b,_2c,_2d){
var t=$(_2b);
if(_2d==undefined){
_2d=parseInt(_2b.style[_2c]);
if(isNaN(_2d)){
return undefined;
}
if($._boxModel){
_2d+=_2e();
}
return _2d;
}else{
if(_2d===""){
t.css(_2c,"");
}else{
if($._boxModel){
_2d-=_2e();
if(_2d<0){
_2d=0;
}
}
t.css(_2c,_2d+"px");
}
}
function _2e(){
if(_2c.toLowerCase().indexOf("width")>=0){
return t.outerWidth()-t.width();
}else{
return t.outerHeight()-t.height();
}
};
};
};
})(jQuery);
(function($){
var _2f=null;
var _30=null;
var _31=false;
function _32(e){
if(e.touches.length!=1){
return;
}
if(!_31){
_31=true;
dblClickTimer=setTimeout(function(){
_31=false;
},500);
}else{
clearTimeout(dblClickTimer);
_31=false;
_33(e,"dblclick");
}
_2f=setTimeout(function(){
_33(e,"contextmenu",3);
},1000);
_33(e,"mousedown");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _34(e){
if(e.touches.length!=1){
return;
}
if(_2f){
clearTimeout(_2f);
}
_33(e,"mousemove");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _35(e){
if(_2f){
clearTimeout(_2f);
}
_33(e,"mouseup");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _33(e,_36,_37){
var _38=new $.Event(_36);
_38.pageX=e.changedTouches[0].pageX;
_38.pageY=e.changedTouches[0].pageY;
_38.which=_37||1;
$(e.target).trigger(_38);
};
if(document.addEventListener){
document.addEventListener("touchstart",_32,true);
document.addEventListener("touchmove",_34,true);
document.addEventListener("touchend",_35,true);
}
})(jQuery);
(function($){
function _39(e){
var _3a=$.data(e.data.target,"draggable");
var _3b=_3a.options;
var _3c=_3a.proxy;
var _3d=e.data;
var _3e=_3d.startLeft+e.pageX-_3d.startX;
var top=_3d.startTop+e.pageY-_3d.startY;
if(_3c){
if(_3c.parent()[0]==document.body){
if(_3b.deltaX!=null&&_3b.deltaX!=undefined){
_3e=e.pageX+_3b.deltaX;
}else{
_3e=e.pageX-e.data.offsetWidth;
}
if(_3b.deltaY!=null&&_3b.deltaY!=undefined){
top=e.pageY+_3b.deltaY;
}else{
top=e.pageY-e.data.offsetHeight;
}
}else{
if(_3b.deltaX!=null&&_3b.deltaX!=undefined){
_3e+=e.data.offsetWidth+_3b.deltaX;
}
if(_3b.deltaY!=null&&_3b.deltaY!=undefined){
top+=e.data.offsetHeight+_3b.deltaY;
}
}
}
if(e.data.parent!=document.body){
_3e+=$(e.data.parent).scrollLeft();
top+=$(e.data.parent).scrollTop();
}
if(_3b.axis=="h"){
_3d.left=_3e;
}else{
if(_3b.axis=="v"){
_3d.top=top;
}else{
_3d.left=_3e;
_3d.top=top;
}
}
};
function _3f(e){
var _40=$.data(e.data.target,"draggable");
var _41=_40.options;
var _42=_40.proxy;
if(!_42){
_42=$(e.data.target);
}
_42.css({left:e.data.left,top:e.data.top});
$("body").css("cursor",_41.cursor);
};
function _43(e){
if(!$.fn.draggable.isDragging){
return false;
}
var _44=$.data(e.data.target,"draggable");
var _45=_44.options;
var _46=$(".droppable:visible").filter(function(){
return e.data.target!=this;
}).filter(function(){
var _47=$.data(this,"droppable").options.accept;
if(_47){
return $(_47).filter(function(){
return this==e.data.target;
}).length>0;
}else{
return true;
}
});
_44.droppables=_46;
var _48=_44.proxy;
if(!_48){
if(_45.proxy){
if(_45.proxy=="clone"){
_48=$(e.data.target).clone().insertAfter(e.data.target);
}else{
_48=_45.proxy.call(e.data.target,e.data.target);
}
_44.proxy=_48;
}else{
_48=$(e.data.target);
}
}
_48.css("position","absolute");
_39(e);
_3f(e);
_45.onStartDrag.call(e.data.target,e);
return false;
};
function _49(e){
if(!$.fn.draggable.isDragging){
return false;
}
var _4a=$.data(e.data.target,"draggable");
_39(e);
if(_4a.options.onDrag.call(e.data.target,e)!=false){
_3f(e);
}
var _4b=e.data.target;
_4a.droppables.each(function(){
var _4c=$(this);
if(_4c.droppable("options").disabled){
return;
}
var p2=_4c.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_4c.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_4c.outerHeight()){
if(!this.entered){
$(this).trigger("_dragenter",[_4b]);
this.entered=true;
}
$(this).trigger("_dragover",[_4b]);
}else{
if(this.entered){
$(this).trigger("_dragleave",[_4b]);
this.entered=false;
}
}
});
return false;
};
function _4d(e){
if(!$.fn.draggable.isDragging){
_4e();
return false;
}
_49(e);
var _4f=$.data(e.data.target,"draggable");
var _50=_4f.proxy;
var _51=_4f.options;
if(_51.revert){
if(_52()==true){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}else{
if(_50){
var _53,top;
if(_50.parent()[0]==document.body){
_53=e.data.startX-e.data.offsetWidth;
top=e.data.startY-e.data.offsetHeight;
}else{
_53=e.data.startLeft;
top=e.data.startTop;
}
_50.animate({left:_53,top:top},function(){
_54();
});
}else{
$(e.data.target).animate({left:e.data.startLeft,top:e.data.startTop},function(){
$(e.data.target).css("position",e.data.startPosition);
});
}
}
}else{
$(e.data.target).css({position:"absolute",left:e.data.left,top:e.data.top});
_52();
}
_51.onStopDrag.call(e.data.target,e);
_4e();
function _54(){
if(_50){
_50.remove();
}
_4f.proxy=null;
};
function _52(){
var _55=false;
_4f.droppables.each(function(){
var _56=$(this);
if(_56.droppable("options").disabled){
return;
}
var p2=_56.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_56.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_56.outerHeight()){
if(_51.revert){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}
$(this).trigger("_drop",[e.data.target]);
_54();
_55=true;
this.entered=false;
return false;
}
});
if(!_55&&!_51.revert){
_54();
}
return _55;
};
return false;
};
function _4e(){
if($.fn.draggable.timer){
clearTimeout($.fn.draggable.timer);
$.fn.draggable.timer=undefined;
}
$(document).unbind(".draggable");
$.fn.draggable.isDragging=false;
setTimeout(function(){
$("body").css("cursor","");
},100);
};
$.fn.draggable=function(_57,_58){
if(typeof _57=="string"){
return $.fn.draggable.methods[_57](this,_58);
}
return this.each(function(){
var _59;
var _5a=$.data(this,"draggable");
if(_5a){
_5a.handle.unbind(".draggable");
_59=$.extend(_5a.options,_57);
}else{
_59=$.extend({},$.fn.draggable.defaults,$.fn.draggable.parseOptions(this),_57||{});
}
var _5b=_59.handle?(typeof _59.handle=="string"?$(_59.handle,this):_59.handle):$(this);
$.data(this,"draggable",{options:_59,handle:_5b});
if(_59.disabled){
$(this).css("cursor","");
return;
}
_5b.unbind(".draggable").bind("mousemove.draggable",{target:this},function(e){
if($.fn.draggable.isDragging){
return;
}
var _5c=$.data(e.data.target,"draggable").options;
if(_5d(e)){
$(this).css("cursor",_5c.cursor);
}else{
$(this).css("cursor","");
}
}).bind("mouseleave.draggable",{target:this},function(e){
$(this).css("cursor","");
}).bind("mousedown.draggable",{target:this},function(e){
if(_5d(e)==false){
return;
}
$(this).css("cursor","");
var _5e=$(e.data.target).position();
var _5f=$(e.data.target).offset();
var _60={startPosition:$(e.data.target).css("position"),startLeft:_5e.left,startTop:_5e.top,left:_5e.left,top:_5e.top,startX:e.pageX,startY:e.pageY,width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),offsetWidth:(e.pageX-_5f.left),offsetHeight:(e.pageY-_5f.top),target:e.data.target,parent:$(e.data.target).parent()[0]};
$.extend(e.data,_60);
var _61=$.data(e.data.target,"draggable").options;
if(_61.onBeforeDrag.call(e.data.target,e)==false){
return;
}
$(document).bind("mousedown.draggable",e.data,_43);
$(document).bind("mousemove.draggable",e.data,_49);
$(document).bind("mouseup.draggable",e.data,_4d);
$.fn.draggable.timer=setTimeout(function(){
$.fn.draggable.isDragging=true;
_43(e);
},_61.delay);
return false;
});
function _5d(e){
var _62=$.data(e.data.target,"draggable");
var _63=_62.handle;
var _64=$(_63).offset();
var _65=$(_63).outerWidth();
var _66=$(_63).outerHeight();
var t=e.pageY-_64.top;
var r=_64.left+_65-e.pageX;
var b=_64.top+_66-e.pageY;
var l=e.pageX-_64.left;
return Math.min(t,r,b,l)>_62.options.edge;
};
});
};
$.fn.draggable.methods={options:function(jq){
return $.data(jq[0],"draggable").options;
},proxy:function(jq){
return $.data(jq[0],"draggable").proxy;
},enable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:true});
});
}};
$.fn.draggable.parseOptions=function(_67){
var t=$(_67);
return $.extend({},$.parser.parseOptions(_67,["cursor","handle","axis",{"revert":"boolean","deltaX":"number","deltaY":"number","edge":"number","delay":"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.draggable.defaults={proxy:null,revert:false,cursor:"move",deltaX:null,deltaY:null,handle:null,disabled:false,edge:0,axis:null,delay:100,onBeforeDrag:function(e){
},onStartDrag:function(e){
},onDrag:function(e){
},onStopDrag:function(e){
}};
$.fn.draggable.isDragging=false;
})(jQuery);
(function($){
function _68(_69){
$(_69).addClass("droppable");
$(_69).bind("_dragenter",function(e,_6a){
$.data(_69,"droppable").options.onDragEnter.apply(_69,[e,_6a]);
});
$(_69).bind("_dragleave",function(e,_6b){
$.data(_69,"droppable").options.onDragLeave.apply(_69,[e,_6b]);
});
$(_69).bind("_dragover",function(e,_6c){
$.data(_69,"droppable").options.onDragOver.apply(_69,[e,_6c]);
});
$(_69).bind("_drop",function(e,_6d){
$.data(_69,"droppable").options.onDrop.apply(_69,[e,_6d]);
});
};
$.fn.droppable=function(_6e,_6f){
if(typeof _6e=="string"){
return $.fn.droppable.methods[_6e](this,_6f);
}
_6e=_6e||{};
return this.each(function(){
var _70=$.data(this,"droppable");
if(_70){
$.extend(_70.options,_6e);
}else{
_68(this);
$.data(this,"droppable",{options:$.extend({},$.fn.droppable.defaults,$.fn.droppable.parseOptions(this),_6e)});
}
});
};
$.fn.droppable.methods={options:function(jq){
return $.data(jq[0],"droppable").options;
},enable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:true});
});
}};
$.fn.droppable.parseOptions=function(_71){
var t=$(_71);
return $.extend({},$.parser.parseOptions(_71,["accept"]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.droppable.defaults={accept:null,disabled:false,onDragEnter:function(e,_72){
},onDragOver:function(e,_73){
},onDragLeave:function(e,_74){
},onDrop:function(e,_75){
}};
})(jQuery);
(function($){
$.fn.resizable=function(_76,_77){
if(typeof _76=="string"){
return $.fn.resizable.methods[_76](this,_77);
}
function _78(e){
var _79=e.data;
var _7a=$.data(_79.target,"resizable").options;
if(_79.dir.indexOf("e")!=-1){
var _7b=_79.startWidth+e.pageX-_79.startX;
_7b=Math.min(Math.max(_7b,_7a.minWidth),_7a.maxWidth);
_79.width=_7b;
}
if(_79.dir.indexOf("s")!=-1){
var _7c=_79.startHeight+e.pageY-_79.startY;
_7c=Math.min(Math.max(_7c,_7a.minHeight),_7a.maxHeight);
_79.height=_7c;
}
if(_79.dir.indexOf("w")!=-1){
var _7b=_79.startWidth-e.pageX+_79.startX;
_7b=Math.min(Math.max(_7b,_7a.minWidth),_7a.maxWidth);
_79.width=_7b;
_79.left=_79.startLeft+_79.startWidth-_79.width;
}
if(_79.dir.indexOf("n")!=-1){
var _7c=_79.startHeight-e.pageY+_79.startY;
_7c=Math.min(Math.max(_7c,_7a.minHeight),_7a.maxHeight);
_79.height=_7c;
_79.top=_79.startTop+_79.startHeight-_79.height;
}
};
function _7d(e){
var _7e=e.data;
var t=$(_7e.target);
t.css({left:_7e.left,top:_7e.top});
if(t.outerWidth()!=_7e.width){
t._outerWidth(_7e.width);
}
if(t.outerHeight()!=_7e.height){
t._outerHeight(_7e.height);
}
};
function _7f(e){
$.fn.resizable.isResizing=true;
$.data(e.data.target,"resizable").options.onStartResize.call(e.data.target,e);
return false;
};
function _80(e){
_78(e);
if($.data(e.data.target,"resizable").options.onResize.call(e.data.target,e)!=false){
_7d(e);
}
return false;
};
function _81(e){
$.fn.resizable.isResizing=false;
_78(e,true);
_7d(e);
$.data(e.data.target,"resizable").options.onStopResize.call(e.data.target,e);
$(document).unbind(".resizable");
$("body").css("cursor","");
return false;
};
return this.each(function(){
var _82=null;
var _83=$.data(this,"resizable");
if(_83){
$(this).unbind(".resizable");
_82=$.extend(_83.options,_76||{});
}else{
_82=$.extend({},$.fn.resizable.defaults,$.fn.resizable.parseOptions(this),_76||{});
$.data(this,"resizable",{options:_82});
}
if(_82.disabled==true){
return;
}
$(this).bind("mousemove.resizable",{target:this},function(e){
if($.fn.resizable.isResizing){
return;
}
var dir=_84(e);
if(dir==""){
$(e.data.target).css("cursor","");
}else{
$(e.data.target).css("cursor",dir+"-resize");
}
}).bind("mouseleave.resizable",{target:this},function(e){
$(e.data.target).css("cursor","");
}).bind("mousedown.resizable",{target:this},function(e){
var dir=_84(e);
if(dir==""){
return;
}
function _85(css){
var val=parseInt($(e.data.target).css(css));
if(isNaN(val)){
return 0;
}else{
return val;
}
};
var _86={target:e.data.target,dir:dir,startLeft:_85("left"),startTop:_85("top"),left:_85("left"),top:_85("top"),startX:e.pageX,startY:e.pageY,startWidth:$(e.data.target).outerWidth(),startHeight:$(e.data.target).outerHeight(),width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),deltaWidth:$(e.data.target).outerWidth()-$(e.data.target).width(),deltaHeight:$(e.data.target).outerHeight()-$(e.data.target).height()};
$(document).bind("mousedown.resizable",_86,_7f);
$(document).bind("mousemove.resizable",_86,_80);
$(document).bind("mouseup.resizable",_86,_81);
$("body").css("cursor",dir+"-resize");
});
function _84(e){
var tt=$(e.data.target);
var dir="";
var _87=tt.offset();
var _88=tt.outerWidth();
var _89=tt.outerHeight();
var _8a=_82.edge;
if(e.pageY>_87.top&&e.pageY<_87.top+_8a){
dir+="n";
}else{
if(e.pageY<_87.top+_89&&e.pageY>_87.top+_89-_8a){
dir+="s";
}
}
if(e.pageX>_87.left&&e.pageX<_87.left+_8a){
dir+="w";
}else{
if(e.pageX<_87.left+_88&&e.pageX>_87.left+_88-_8a){
dir+="e";
}
}
var _8b=_82.handles.split(",");
for(var i=0;i<_8b.length;i++){
var _8c=_8b[i].replace(/(^\s*)|(\s*$)/g,"");
if(_8c=="all"||_8c==dir){
return dir;
}
}
return "";
};
});
};
$.fn.resizable.methods={options:function(jq){
return $.data(jq[0],"resizable").options;
},enable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:true});
});
}};
$.fn.resizable.parseOptions=function(_8d){
var t=$(_8d);
return $.extend({},$.parser.parseOptions(_8d,["handles",{minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number",edge:"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.resizable.defaults={disabled:false,handles:"n, e, s, w, ne, se, sw, nw, all",minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000,edge:5,onStartResize:function(e){
},onResize:function(e){
},onStopResize:function(e){
}};
$.fn.resizable.isResizing=false;
})(jQuery);
(function($){
function _8e(_8f,_90){
var _91=$.data(_8f,"linkbutton").options;
if(_90){
$.extend(_91,_90);
}
if(_91.width||_91.height||_91.fit){
var btn=$(_8f);
var _92=btn.parent();
var _93=btn.is(":visible");
if(!_93){
var _94=$("<div style=\"display:none\"></div>").insertBefore(_8f);
var _95={position:btn.css("position"),display:btn.css("display"),left:btn.css("left")};
btn.appendTo("body");
btn.css({position:"absolute",display:"inline-block",left:-20000});
}
btn._size(_91,_92);
var _96=btn.find(".l-btn-left");
_96.css("margin-top",0);
_96.css("margin-top",parseInt((btn.height()-_96.height())/2)+"px");
if(!_93){
btn.insertAfter(_94);
btn.css(_95);
_94.remove();
}
}
};
function _97(_98){
var _99=$.data(_98,"linkbutton").options;
var t=$(_98).empty();
t.addClass("l-btn").removeClass("l-btn-plain l-btn-selected l-btn-plain-selected l-btn-outline");
t.removeClass("l-btn-small l-btn-medium l-btn-large").addClass("l-btn-"+_99.size);
if(_99.plain){
t.addClass("l-btn-plain");
}
if(_99.outline){
t.addClass("l-btn-outline");
}
if(_99.selected){
t.addClass(_99.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");
}
t.attr("group",_99.group||"");
t.attr("id",_99.id||"");
var _9a=$("<span class=\"l-btn-left\"></span>").appendTo(t);
if(_99.text){
$("<span class=\"l-btn-text\"></span>").html(_99.text).appendTo(_9a);
}else{
$("<span class=\"l-btn-text l-btn-empty\">&nbsp;</span>").appendTo(_9a);
}
if(_99.iconCls){
$("<span class=\"l-btn-icon\">&nbsp;</span>").addClass(_99.iconCls).appendTo(_9a);
_9a.addClass("l-btn-icon-"+_99.iconAlign);
}
t.unbind(".linkbutton").bind("focus.linkbutton",function(){
if(!_99.disabled){
$(this).addClass("l-btn-focus");
}
}).bind("blur.linkbutton",function(){
$(this).removeClass("l-btn-focus");
}).bind("click.linkbutton",function(){
if(!_99.disabled){
if(_99.toggle){
if(_99.selected){
$(this).linkbutton("unselect");
}else{
$(this).linkbutton("select");
}
}
_99.onClick.call(this);
}
});
_9b(_98,_99.selected);
_9c(_98,_99.disabled);
};
function _9b(_9d,_9e){
var _9f=$.data(_9d,"linkbutton").options;
if(_9e){
if(_9f.group){
$("a.l-btn[group=\""+_9f.group+"\"]").each(function(){
var o=$(this).linkbutton("options");
if(o.toggle){
$(this).removeClass("l-btn-selected l-btn-plain-selected");
o.selected=false;
}
});
}
$(_9d).addClass(_9f.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");
_9f.selected=true;
}else{
if(!_9f.group){
$(_9d).removeClass("l-btn-selected l-btn-plain-selected");
_9f.selected=false;
}
}
};
function _9c(_a0,_a1){
var _a2=$.data(_a0,"linkbutton");
var _a3=_a2.options;
$(_a0).removeClass("l-btn-disabled l-btn-plain-disabled");
if(_a1){
_a3.disabled=true;
var _a4=$(_a0).attr("href");
if(_a4){
_a2.href=_a4;
$(_a0).attr("href","javascript:;");
}
if(_a0.onclick){
_a2.onclick=_a0.onclick;
_a0.onclick=null;
}
_a3.plain?$(_a0).addClass("l-btn-disabled l-btn-plain-disabled"):$(_a0).addClass("l-btn-disabled");
}else{
_a3.disabled=false;
if(_a2.href){
$(_a0).attr("href",_a2.href);
}
if(_a2.onclick){
_a0.onclick=_a2.onclick;
}
}
};
$.fn.linkbutton=function(_a5,_a6){
if(typeof _a5=="string"){
return $.fn.linkbutton.methods[_a5](this,_a6);
}
_a5=_a5||{};
return this.each(function(){
var _a7=$.data(this,"linkbutton");
if(_a7){
$.extend(_a7.options,_a5);
}else{
$.data(this,"linkbutton",{options:$.extend({},$.fn.linkbutton.defaults,$.fn.linkbutton.parseOptions(this),_a5)});
$(this).removeAttr("disabled");
$(this).bind("_resize",function(e,_a8){
if($(this).hasClass("easyui-fluid")||_a8){
_8e(this);
}
return false;
});
}
_97(this);
_8e(this);
});
};
$.fn.linkbutton.methods={options:function(jq){
return $.data(jq[0],"linkbutton").options;
},resize:function(jq,_a9){
return jq.each(function(){
_8e(this,_a9);
});
},enable:function(jq){
return jq.each(function(){
_9c(this,false);
});
},disable:function(jq){
return jq.each(function(){
_9c(this,true);
});
},select:function(jq){
return jq.each(function(){
_9b(this,true);
});
},unselect:function(jq){
return jq.each(function(){
_9b(this,false);
});
}};
$.fn.linkbutton.parseOptions=function(_aa){
var t=$(_aa);
return $.extend({},$.parser.parseOptions(_aa,["id","iconCls","iconAlign","group","size","text",{plain:"boolean",toggle:"boolean",selected:"boolean",outline:"boolean"}]),{disabled:(t.attr("disabled")?true:undefined),text:($.trim(t.html())||undefined),iconCls:(t.attr("icon")||t.attr("iconCls"))});
};
$.fn.linkbutton.defaults={id:null,disabled:false,toggle:false,selected:false,outline:false,group:null,plain:false,text:"",iconCls:null,iconAlign:"left",size:"small",onClick:function(){
}};
})(jQuery);
(function($){
function _ab(_ac){
var _ad=$.data(_ac,"pagination");
var _ae=_ad.options;
var bb=_ad.bb={};
var _af=$(_ac).addClass("pagination").html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr></tr></table>");
var tr=_af.find("tr");
var aa=$.extend([],_ae.layout);
if(!_ae.showPageList){
_b0(aa,"list");
}
if(!_ae.showRefresh){
_b0(aa,"refresh");
}
if(aa[0]=="sep"){
aa.shift();
}
if(aa[aa.length-1]=="sep"){
aa.pop();
}
for(var _b1=0;_b1<aa.length;_b1++){
var _b2=aa[_b1];
if(_b2=="list"){
var ps=$("<select class=\"pagination-page-list\"></select>");
ps.bind("change",function(){
_ae.pageSize=parseInt($(this).val());
_ae.onChangePageSize.call(_ac,_ae.pageSize);
_b8(_ac,_ae.pageNumber);
});
for(var i=0;i<_ae.pageList.length;i++){
$("<option></option>").text(_ae.pageList[i]).appendTo(ps);
}
$("<td></td>").append(ps).appendTo(tr);
}else{
if(_b2=="sep"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
if(_b2=="first"){
bb.first=_b3("first");
}else{
if(_b2=="prev"){
bb.prev=_b3("prev");
}else{
if(_b2=="next"){
bb.next=_b3("next");
}else{
if(_b2=="last"){
bb.last=_b3("last");
}else{
if(_b2=="manual"){
$("<span style=\"padding-left:6px;\"></span>").html(_ae.beforePageText).appendTo(tr).wrap("<td></td>");
bb.num=$("<input class=\"pagination-num\" type=\"text\" value=\"1\" size=\"2\">").appendTo(tr).wrap("<td></td>");
bb.num.unbind(".pagination").bind("keydown.pagination",function(e){
if(e.keyCode==13){
var _b4=parseInt($(this).val())||1;
_b8(_ac,_b4);
return false;
}
});
bb.after=$("<span style=\"padding-right:6px;\"></span>").appendTo(tr).wrap("<td></td>");
}else{
if(_b2=="refresh"){
bb.refresh=_b3("refresh");
}else{
if(_b2=="links"){
$("<td class=\"pagination-links\"></td>").appendTo(tr);
}
}
}
}
}
}
}
}
}
}
if(_ae.buttons){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
if($.isArray(_ae.buttons)){
for(var i=0;i<_ae.buttons.length;i++){
var btn=_ae.buttons[i];
if(btn=="-"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var a=$("<a href=\"javascript:;\"></a>").appendTo(td);
a[0].onclick=eval(btn.handler||function(){
});
a.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
var td=$("<td></td>").appendTo(tr);
$(_ae.buttons).appendTo(td).show();
}
}
$("<div class=\"pagination-info\"></div>").appendTo(_af);
$("<div style=\"clear:both;\"></div>").appendTo(_af);
function _b3(_b5){
var btn=_ae.nav[_b5];
var a=$("<a href=\"javascript:;\"></a>").appendTo(tr);
a.wrap("<td></td>");
a.linkbutton({iconCls:btn.iconCls,plain:true}).unbind(".pagination").bind("click.pagination",function(){
btn.handler.call(_ac);
});
return a;
};
function _b0(aa,_b6){
var _b7=$.inArray(_b6,aa);
if(_b7>=0){
aa.splice(_b7,1);
}
return aa;
};
};
function _b8(_b9,_ba){
var _bb=$.data(_b9,"pagination").options;
_bc(_b9,{pageNumber:_ba});
_bb.onSelectPage.call(_b9,_bb.pageNumber,_bb.pageSize);
};
function _bc(_bd,_be){
var _bf=$.data(_bd,"pagination");
var _c0=_bf.options;
var bb=_bf.bb;
$.extend(_c0,_be||{});
var ps=$(_bd).find("select.pagination-page-list");
if(ps.length){
ps.val(_c0.pageSize+"");
_c0.pageSize=parseInt(ps.val());
}
var _c1=Math.ceil(_c0.total/_c0.pageSize)||1;
if(_c0.pageNumber<1){
_c0.pageNumber=1;
}
if(_c0.pageNumber>_c1){
_c0.pageNumber=_c1;
}
if(_c0.total==0){
_c0.pageNumber=0;
_c1=0;
}
if(bb.num){
bb.num.val(_c0.pageNumber);
}
if(bb.after){
bb.after.html(_c0.afterPageText.replace(/{pages}/,_c1));
}
var td=$(_bd).find("td.pagination-links");
if(td.length){
td.empty();
var _c2=_c0.pageNumber-Math.floor(_c0.links/2);
if(_c2<1){
_c2=1;
}
var _c3=_c2+_c0.links-1;
if(_c3>_c1){
_c3=_c1;
}
_c2=_c3-_c0.links+1;
if(_c2<1){
_c2=1;
}
for(var i=_c2;i<=_c3;i++){
var a=$("<a class=\"pagination-link\" href=\"javascript:;\"></a>").appendTo(td);
a.linkbutton({plain:true,text:i});
if(i==_c0.pageNumber){
a.linkbutton("select");
}else{
a.unbind(".pagination").bind("click.pagination",{pageNumber:i},function(e){
_b8(_bd,e.data.pageNumber);
});
}
}
}
var _c4=_c0.displayMsg;
_c4=_c4.replace(/{from}/,_c0.total==0?0:_c0.pageSize*(_c0.pageNumber-1)+1);
_c4=_c4.replace(/{to}/,Math.min(_c0.pageSize*(_c0.pageNumber),_c0.total));
_c4=_c4.replace(/{total}/,_c0.total);
$(_bd).find("div.pagination-info").html(_c4);
if(bb.first){
bb.first.linkbutton({disabled:((!_c0.total)||_c0.pageNumber==1)});
}
if(bb.prev){
bb.prev.linkbutton({disabled:((!_c0.total)||_c0.pageNumber==1)});
}
if(bb.next){
bb.next.linkbutton({disabled:(_c0.pageNumber==_c1)});
}
if(bb.last){
bb.last.linkbutton({disabled:(_c0.pageNumber==_c1)});
}
_c5(_bd,_c0.loading);
};
function _c5(_c6,_c7){
var _c8=$.data(_c6,"pagination");
var _c9=_c8.options;
_c9.loading=_c7;
if(_c9.showRefresh&&_c8.bb.refresh){
_c8.bb.refresh.linkbutton({iconCls:(_c9.loading?"pagination-loading":"pagination-load")});
}
};
$.fn.pagination=function(_ca,_cb){
if(typeof _ca=="string"){
return $.fn.pagination.methods[_ca](this,_cb);
}
_ca=_ca||{};
return this.each(function(){
var _cc;
var _cd=$.data(this,"pagination");
if(_cd){
_cc=$.extend(_cd.options,_ca);
}else{
_cc=$.extend({},$.fn.pagination.defaults,$.fn.pagination.parseOptions(this),_ca);
$.data(this,"pagination",{options:_cc});
}
_ab(this);
_bc(this);
});
};
$.fn.pagination.methods={options:function(jq){
return $.data(jq[0],"pagination").options;
},loading:function(jq){
return jq.each(function(){
_c5(this,true);
});
},loaded:function(jq){
return jq.each(function(){
_c5(this,false);
});
},refresh:function(jq,_ce){
return jq.each(function(){
_bc(this,_ce);
});
},select:function(jq,_cf){
return jq.each(function(){
_b8(this,_cf);
});
}};
$.fn.pagination.parseOptions=function(_d0){
var t=$(_d0);
return $.extend({},$.parser.parseOptions(_d0,[{total:"number",pageSize:"number",pageNumber:"number",links:"number"},{loading:"boolean",showPageList:"boolean",showRefresh:"boolean"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined)});
};
$.fn.pagination.defaults={total:1,pageSize:10,pageNumber:1,pageList:[10,20,30,50],loading:false,buttons:null,showPageList:true,showRefresh:true,links:10,layout:["list","sep","first","prev","sep","manual","sep","next","last","sep","refresh"],onSelectPage:function(_d1,_d2){
},onBeforeRefresh:function(_d3,_d4){
},onRefresh:function(_d5,_d6){
},onChangePageSize:function(_d7){
},beforePageText:"Page",afterPageText:"of {pages}",displayMsg:"Displaying {from} to {to} of {total} items",nav:{first:{iconCls:"pagination-first",handler:function(){
var _d8=$(this).pagination("options");
if(_d8.pageNumber>1){
$(this).pagination("select",1);
}
}},prev:{iconCls:"pagination-prev",handler:function(){
var _d9=$(this).pagination("options");
if(_d9.pageNumber>1){
$(this).pagination("select",_d9.pageNumber-1);
}
}},next:{iconCls:"pagination-next",handler:function(){
var _da=$(this).pagination("options");
var _db=Math.ceil(_da.total/_da.pageSize);
if(_da.pageNumber<_db){
$(this).pagination("select",_da.pageNumber+1);
}
}},last:{iconCls:"pagination-last",handler:function(){
var _dc=$(this).pagination("options");
var _dd=Math.ceil(_dc.total/_dc.pageSize);
if(_dc.pageNumber<_dd){
$(this).pagination("select",_dd);
}
}},refresh:{iconCls:"pagination-refresh",handler:function(){
var _de=$(this).pagination("options");
if(_de.onBeforeRefresh.call(this,_de.pageNumber,_de.pageSize)!=false){
$(this).pagination("select",_de.pageNumber);
_de.onRefresh.call(this,_de.pageNumber,_de.pageSize);
}
}}}};
})(jQuery);
(function($){
function _df(_e0){
var _e1=$(_e0);
_e1.addClass("tree");
return _e1;
};
function _e2(_e3){
var _e4=$.data(_e3,"tree").options;
$(_e3).unbind().bind("mouseover",function(e){
var tt=$(e.target);
var _e5=tt.closest("div.tree-node");
if(!_e5.length){
return;
}
_e5.addClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.addClass("tree-expanded-hover");
}else{
tt.addClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("mouseout",function(e){
var tt=$(e.target);
var _e6=tt.closest("div.tree-node");
if(!_e6.length){
return;
}
_e6.removeClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.removeClass("tree-expanded-hover");
}else{
tt.removeClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("click",function(e){
var tt=$(e.target);
var _e7=tt.closest("div.tree-node");
if(!_e7.length){
return;
}
if(tt.hasClass("tree-hit")){
_145(_e3,_e7[0]);
return false;
}else{
if(tt.hasClass("tree-checkbox")){
_10c(_e3,_e7[0]);
return false;
}else{
_188(_e3,_e7[0]);
_e4.onClick.call(_e3,_ea(_e3,_e7[0]));
}
}
e.stopPropagation();
}).bind("dblclick",function(e){
var _e8=$(e.target).closest("div.tree-node");
if(!_e8.length){
return;
}
_188(_e3,_e8[0]);
_e4.onDblClick.call(_e3,_ea(_e3,_e8[0]));
e.stopPropagation();
}).bind("contextmenu",function(e){
var _e9=$(e.target).closest("div.tree-node");
if(!_e9.length){
return;
}
_e4.onContextMenu.call(_e3,e,_ea(_e3,_e9[0]));
e.stopPropagation();
});
};
function _eb(_ec){
var _ed=$.data(_ec,"tree").options;
_ed.dnd=false;
var _ee=$(_ec).find("div.tree-node");
_ee.draggable("disable");
_ee.css("cursor","pointer");
};
function _ef(_f0){
var _f1=$.data(_f0,"tree");
var _f2=_f1.options;
var _f3=_f1.tree;
_f1.disabledNodes=[];
_f2.dnd=true;
_f3.find("div.tree-node").draggable({disabled:false,revert:true,cursor:"pointer",proxy:function(_f4){
var p=$("<div class=\"tree-node-proxy\"></div>").appendTo("body");
p.html("<span class=\"tree-dnd-icon tree-dnd-no\">&nbsp;</span>"+$(_f4).find(".tree-title").html());
p.hide();
return p;
},deltaX:15,deltaY:15,onBeforeDrag:function(e){
if(_f2.onBeforeDrag.call(_f0,_ea(_f0,this))==false){
return false;
}
if($(e.target).hasClass("tree-hit")||$(e.target).hasClass("tree-checkbox")){
return false;
}
if(e.which!=1){
return false;
}
var _f5=$(this).find("span.tree-indent");
if(_f5.length){
e.data.offsetWidth-=_f5.length*_f5.width();
}
},onStartDrag:function(e){
$(this).next("ul").find("div.tree-node").each(function(){
$(this).droppable("disable");
_f1.disabledNodes.push(this);
});
$(this).draggable("proxy").css({left:-10000,top:-10000});
_f2.onStartDrag.call(_f0,_ea(_f0,this));
var _f6=_ea(_f0,this);
if(_f6.id==undefined){
_f6.id="easyui_tree_node_id_temp";
_12c(_f0,_f6);
}
_f1.draggingNodeId=_f6.id;
},onDrag:function(e){
var x1=e.pageX,y1=e.pageY,x2=e.data.startX,y2=e.data.startY;
var d=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
if(d>3){
$(this).draggable("proxy").show();
}
this.pageY=e.pageY;
},onStopDrag:function(){
for(var i=0;i<_f1.disabledNodes.length;i++){
$(_f1.disabledNodes[i]).droppable("enable");
}
_f1.disabledNodes=[];
var _f7=_182(_f0,_f1.draggingNodeId);
if(_f7&&_f7.id=="easyui_tree_node_id_temp"){
_f7.id="";
_12c(_f0,_f7);
}
_f2.onStopDrag.call(_f0,_f7);
}}).droppable({accept:"div.tree-node",onDragEnter:function(e,_f8){
if(_f2.onDragEnter.call(_f0,this,_f9(_f8))==false){
_fa(_f8,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_f1.disabledNodes.push(this);
}
},onDragOver:function(e,_fb){
if($(this).droppable("options").disabled){
return;
}
var _fc=_fb.pageY;
var top=$(this).offset().top;
var _fd=top+$(this).outerHeight();
_fa(_fb,true);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
if(_fc>top+(_fd-top)/2){
if(_fd-_fc<5){
$(this).addClass("tree-node-bottom");
}else{
$(this).addClass("tree-node-append");
}
}else{
if(_fc-top<5){
$(this).addClass("tree-node-top");
}else{
$(this).addClass("tree-node-append");
}
}
if(_f2.onDragOver.call(_f0,this,_f9(_fb))==false){
_fa(_fb,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_f1.disabledNodes.push(this);
}
},onDragLeave:function(e,_fe){
_fa(_fe,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
_f2.onDragLeave.call(_f0,this,_f9(_fe));
},onDrop:function(e,_ff){
var dest=this;
var _100,_101;
if($(this).hasClass("tree-node-append")){
_100=_102;
_101="append";
}else{
_100=_103;
_101=$(this).hasClass("tree-node-top")?"top":"bottom";
}
if(_f2.onBeforeDrop.call(_f0,dest,_f9(_ff),_101)==false){
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
return;
}
_100(_ff,dest,_101);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
}});
function _f9(_104,pop){
return $(_104).closest("ul.tree").tree(pop?"pop":"getData",_104);
};
function _fa(_105,_106){
var icon=$(_105).draggable("proxy").find("span.tree-dnd-icon");
icon.removeClass("tree-dnd-yes tree-dnd-no").addClass(_106?"tree-dnd-yes":"tree-dnd-no");
};
function _102(_107,dest){
if(_ea(_f0,dest).state=="closed"){
_13d(_f0,dest,function(){
_108();
});
}else{
_108();
}
function _108(){
var node=_f9(_107,true);
$(_f0).tree("append",{parent:dest,data:[node]});
_f2.onDrop.call(_f0,dest,node,"append");
};
};
function _103(_109,dest,_10a){
var _10b={};
if(_10a=="top"){
_10b.before=dest;
}else{
_10b.after=dest;
}
var node=_f9(_109,true);
_10b.data=node;
$(_f0).tree("insert",_10b);
_f2.onDrop.call(_f0,dest,node,_10a);
};
};
function _10c(_10d,_10e,_10f,_110){
var _111=$.data(_10d,"tree");
var opts=_111.options;
if(!opts.checkbox){
return;
}
var _112=_ea(_10d,_10e);
if(!_112.checkState){
return;
}
var ck=$(_10e).find(".tree-checkbox");
if(_10f==undefined){
if(ck.hasClass("tree-checkbox1")){
_10f=false;
}else{
if(ck.hasClass("tree-checkbox0")){
_10f=true;
}else{
if(_112._checked==undefined){
_112._checked=$(_10e).find(".tree-checkbox").hasClass("tree-checkbox1");
}
_10f=!_112._checked;
}
}
}
_112._checked=_10f;
if(_10f){
if(ck.hasClass("tree-checkbox1")){
return;
}
}else{
if(ck.hasClass("tree-checkbox0")){
return;
}
}
if(!_110){
if(opts.onBeforeCheck.call(_10d,_112,_10f)==false){
return;
}
}
if(opts.cascadeCheck){
_113(_10d,_112,_10f);
_114(_10d,_112);
}else{
_115(_10d,_112,_10f?"1":"0");
}
if(!_110){
opts.onCheck.call(_10d,_112,_10f);
}
};
function _113(_116,_117,_118){
var opts=$.data(_116,"tree").options;
var flag=_118?1:0;
_115(_116,_117,flag);
if(opts.deepCheck){
$.easyui.forEach(_117.children||[],true,function(n){
_115(_116,n,flag);
});
}else{
var _119=[];
if(_117.children&&_117.children.length){
_119.push(_117);
}
$.easyui.forEach(_117.children||[],true,function(n){
if(!n.hidden){
_115(_116,n,flag);
if(n.children&&n.children.length){
_119.push(n);
}
}
});
for(var i=_119.length-1;i>=0;i--){
var node=_119[i];
_115(_116,node,_11a(node));
}
}
};
function _115(_11b,_11c,flag){
var opts=$.data(_11b,"tree").options;
if(!_11c.checkState||flag==undefined){
return;
}
if(_11c.hidden&&!opts.deepCheck){
return;
}
var ck=$("#"+_11c.domId).find(".tree-checkbox");
_11c.checkState=["unchecked","checked","indeterminate"][flag];
_11c.checked=(_11c.checkState=="checked");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
ck.addClass("tree-checkbox"+flag);
};
function _114(_11d,_11e){
var pd=_11f(_11d,$("#"+_11e.domId)[0]);
if(pd){
_115(_11d,pd,_11a(pd));
_114(_11d,pd);
}
};
function _11a(row){
var c0=0;
var c1=0;
var len=0;
$.easyui.forEach(row.children||[],false,function(r){
if(r.checkState){
len++;
if(r.checkState=="checked"){
c1++;
}else{
if(r.checkState=="unchecked"){
c0++;
}
}
}
});
if(len==0){
return undefined;
}
var flag=0;
if(c0==len){
flag=0;
}else{
if(c1==len){
flag=1;
}else{
flag=2;
}
}
return flag;
};
function _120(_121,_122){
var opts=$.data(_121,"tree").options;
if(!opts.checkbox){
return;
}
var node=$(_122);
var ck=node.find(".tree-checkbox");
var _123=_ea(_121,_122);
if(opts.view.hasCheckbox(_121,_123)){
if(!ck.length){
_123.checkState=_123.checkState||"unchecked";
$("<span class=\"tree-checkbox\"></span>").insertBefore(node.find(".tree-title"));
}
if(_123.checkState=="checked"){
_10c(_121,_122,true,true);
}else{
if(_123.checkState=="unchecked"){
_10c(_121,_122,false,true);
}else{
var flag=_11a(_123);
if(flag===0){
_10c(_121,_122,false,true);
}else{
if(flag===1){
_10c(_121,_122,true,true);
}
}
}
}
}else{
ck.remove();
_123.checkState=undefined;
_123.checked=undefined;
_114(_121,_123);
}
};
function _124(_125,ul,data,_126,_127){
var _128=$.data(_125,"tree");
var opts=_128.options;
var _129=$(ul).prevAll("div.tree-node:first");
data=opts.loadFilter.call(_125,data,_129[0]);
var _12a=_12b(_125,"domId",_129.attr("id"));
if(!_126){
_12a?_12a.children=data:_128.data=data;
$(ul).empty();
}else{
if(_12a){
_12a.children?_12a.children=_12a.children.concat(data):_12a.children=data;
}else{
_128.data=_128.data.concat(data);
}
}
opts.view.render.call(opts.view,_125,ul,data);
if(opts.dnd){
_ef(_125);
}
if(_12a){
_12c(_125,_12a);
}
for(var i=0;i<_128.tmpIds.length;i++){
_10c(_125,$("#"+_128.tmpIds[i])[0],true,true);
}
_128.tmpIds=[];
setTimeout(function(){
_12d(_125,_125);
},0);
if(!_127){
opts.onLoadSuccess.call(_125,_12a,data);
}
};
function _12d(_12e,ul,_12f){
var opts=$.data(_12e,"tree").options;
if(opts.lines){
$(_12e).addClass("tree-lines");
}else{
$(_12e).removeClass("tree-lines");
return;
}
if(!_12f){
_12f=true;
$(_12e).find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
$(_12e).find("div.tree-node").removeClass("tree-node-last tree-root-first tree-root-one");
var _130=$(_12e).tree("getRoots");
if(_130.length>1){
$(_130[0].target).addClass("tree-root-first");
}else{
if(_130.length==1){
$(_130[0].target).addClass("tree-root-one");
}
}
}
$(ul).children("li").each(function(){
var node=$(this).children("div.tree-node");
var ul=node.next("ul");
if(ul.length){
if($(this).next().length){
_131(node);
}
_12d(_12e,ul,_12f);
}else{
_132(node);
}
});
var _133=$(ul).children("li:last").children("div.tree-node").addClass("tree-node-last");
_133.children("span.tree-join").removeClass("tree-join").addClass("tree-joinbottom");
function _132(node,_134){
var icon=node.find("span.tree-icon");
icon.prev("span.tree-indent").addClass("tree-join");
};
function _131(node){
var _135=node.find("span.tree-indent, span.tree-hit").length;
node.next().find("div.tree-node").each(function(){
$(this).children("span:eq("+(_135-1)+")").addClass("tree-line");
});
};
};
function _136(_137,ul,_138,_139){
var opts=$.data(_137,"tree").options;
_138=$.extend({},opts.queryParams,_138||{});
var _13a=null;
if(_137!=ul){
var node=$(ul).prev();
_13a=_ea(_137,node[0]);
}
if(opts.onBeforeLoad.call(_137,_13a,_138)==false){
return;
}
var _13b=$(ul).prev().children("span.tree-folder");
_13b.addClass("tree-loading");
var _13c=opts.loader.call(_137,_138,function(data){
_13b.removeClass("tree-loading");
_124(_137,ul,data);
if(_139){
_139();
}
},function(){
_13b.removeClass("tree-loading");
opts.onLoadError.apply(_137,arguments);
if(_139){
_139();
}
});
if(_13c==false){
_13b.removeClass("tree-loading");
}
};
function _13d(_13e,_13f,_140){
var opts=$.data(_13e,"tree").options;
var hit=$(_13f).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
var node=_ea(_13e,_13f);
if(opts.onBeforeExpand.call(_13e,node)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var ul=$(_13f).next();
if(ul.length){
if(opts.animate){
ul.slideDown("normal",function(){
node.state="open";
opts.onExpand.call(_13e,node);
if(_140){
_140();
}
});
}else{
ul.css("display","block");
node.state="open";
opts.onExpand.call(_13e,node);
if(_140){
_140();
}
}
}else{
var _141=$("<ul style=\"display:none\"></ul>").insertAfter(_13f);
_136(_13e,_141[0],{id:node.id},function(){
if(_141.is(":empty")){
_141.remove();
}
if(opts.animate){
_141.slideDown("normal",function(){
node.state="open";
opts.onExpand.call(_13e,node);
if(_140){
_140();
}
});
}else{
_141.css("display","block");
node.state="open";
opts.onExpand.call(_13e,node);
if(_140){
_140();
}
}
});
}
};
function _142(_143,_144){
var opts=$.data(_143,"tree").options;
var hit=$(_144).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
var node=_ea(_143,_144);
if(opts.onBeforeCollapse.call(_143,node)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
var ul=$(_144).next();
if(opts.animate){
ul.slideUp("normal",function(){
node.state="closed";
opts.onCollapse.call(_143,node);
});
}else{
ul.css("display","none");
node.state="closed";
opts.onCollapse.call(_143,node);
}
};
function _145(_146,_147){
var hit=$(_147).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
_142(_146,_147);
}else{
_13d(_146,_147);
}
};
function _148(_149,_14a){
var _14b=_14c(_149,_14a);
if(_14a){
_14b.unshift(_ea(_149,_14a));
}
for(var i=0;i<_14b.length;i++){
_13d(_149,_14b[i].target);
}
};
function _14d(_14e,_14f){
var _150=[];
var p=_11f(_14e,_14f);
while(p){
_150.unshift(p);
p=_11f(_14e,p.target);
}
for(var i=0;i<_150.length;i++){
_13d(_14e,_150[i].target);
}
};
function _151(_152,_153){
var c=$(_152).parent();
while(c[0].tagName!="BODY"&&c.css("overflow-y")!="auto"){
c=c.parent();
}
var n=$(_153);
var ntop=n.offset().top;
if(c[0].tagName!="BODY"){
var ctop=c.offset().top;
if(ntop<ctop){
c.scrollTop(c.scrollTop()+ntop-ctop);
}else{
if(ntop+n.outerHeight()>ctop+c.outerHeight()-18){
c.scrollTop(c.scrollTop()+ntop+n.outerHeight()-ctop-c.outerHeight()+18);
}
}
}else{
c.scrollTop(ntop);
}
};
function _154(_155,_156){
var _157=_14c(_155,_156);
if(_156){
_157.unshift(_ea(_155,_156));
}
for(var i=0;i<_157.length;i++){
_142(_155,_157[i].target);
}
};
function _158(_159,_15a){
var node=$(_15a.parent);
var data=_15a.data;
if(!data){
return;
}
data=$.isArray(data)?data:[data];
if(!data.length){
return;
}
var ul;
if(node.length==0){
ul=$(_159);
}else{
if(_15b(_159,node[0])){
var _15c=node.find("span.tree-icon");
_15c.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_15c);
if(hit.prev().length){
hit.prev().remove();
}
}
ul=node.next();
if(!ul.length){
ul=$("<ul></ul>").insertAfter(node);
}
}
_124(_159,ul[0],data,true,true);
};
function _15d(_15e,_15f){
var ref=_15f.before||_15f.after;
var _160=_11f(_15e,ref);
var data=_15f.data;
if(!data){
return;
}
data=$.isArray(data)?data:[data];
if(!data.length){
return;
}
_158(_15e,{parent:(_160?_160.target:null),data:data});
var _161=_160?_160.children:$(_15e).tree("getRoots");
for(var i=0;i<_161.length;i++){
if(_161[i].domId==$(ref).attr("id")){
for(var j=data.length-1;j>=0;j--){
_161.splice((_15f.before?i:(i+1)),0,data[j]);
}
_161.splice(_161.length-data.length,data.length);
break;
}
}
var li=$();
for(var i=0;i<data.length;i++){
li=li.add($("#"+data[i].domId).parent());
}
if(_15f.before){
li.insertBefore($(ref).parent());
}else{
li.insertAfter($(ref).parent());
}
};
function _162(_163,_164){
var _165=del(_164);
$(_164).parent().remove();
if(_165){
if(!_165.children||!_165.children.length){
var node=$(_165.target);
node.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
node.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(node);
node.next().remove();
}
_12c(_163,_165);
}
_12d(_163,_163);
function del(_166){
var id=$(_166).attr("id");
var _167=_11f(_163,_166);
var cc=_167?_167.children:$.data(_163,"tree").data;
for(var i=0;i<cc.length;i++){
if(cc[i].domId==id){
cc.splice(i,1);
break;
}
}
return _167;
};
};
function _12c(_168,_169){
var opts=$.data(_168,"tree").options;
var node=$(_169.target);
var data=_ea(_168,_169.target);
if(data.iconCls){
node.find(".tree-icon").removeClass(data.iconCls);
}
$.extend(data,_169);
node.find(".tree-title").html(opts.formatter.call(_168,data));
if(data.iconCls){
node.find(".tree-icon").addClass(data.iconCls);
}
_120(_168,_169.target);
};
function _16a(_16b,_16c){
if(_16c){
var p=_11f(_16b,_16c);
while(p){
_16c=p.target;
p=_11f(_16b,_16c);
}
return _ea(_16b,_16c);
}else{
var _16d=_16e(_16b);
return _16d.length?_16d[0]:null;
}
};
function _16e(_16f){
var _170=$.data(_16f,"tree").data;
for(var i=0;i<_170.length;i++){
_171(_170[i]);
}
return _170;
};
function _14c(_172,_173){
var _174=[];
var n=_ea(_172,_173);
var data=n?(n.children||[]):$.data(_172,"tree").data;
$.easyui.forEach(data,true,function(node){
_174.push(_171(node));
});
return _174;
};
function _11f(_175,_176){
var p=$(_176).closest("ul").prevAll("div.tree-node:first");
return _ea(_175,p[0]);
};
function _177(_178,_179){
_179=_179||"checked";
if(!$.isArray(_179)){
_179=[_179];
}
var _17a=[];
$.easyui.forEach($.data(_178,"tree").data,true,function(n){
if(n.checkState&&$.easyui.indexOfArray(_179,n.checkState)!=-1){
_17a.push(_171(n));
}
});
return _17a;
};
function _17b(_17c){
var node=$(_17c).find("div.tree-node-selected");
return node.length?_ea(_17c,node[0]):null;
};
function _17d(_17e,_17f){
var data=_ea(_17e,_17f);
if(data&&data.children){
$.easyui.forEach(data.children,true,function(node){
_171(node);
});
}
return data;
};
function _ea(_180,_181){
return _12b(_180,"domId",$(_181).attr("id"));
};
function _182(_183,id){
return _12b(_183,"id",id);
};
function _12b(_184,_185,_186){
var data=$.data(_184,"tree").data;
var _187=null;
$.easyui.forEach(data,true,function(node){
if(node[_185]==_186){
_187=_171(node);
return false;
}
});
return _187;
};
function _171(node){
node.target=$("#"+node.domId)[0];
return node;
};
function _188(_189,_18a){
var opts=$.data(_189,"tree").options;
var node=_ea(_189,_18a);
if(opts.onBeforeSelect.call(_189,node)==false){
return;
}
$(_189).find("div.tree-node-selected").removeClass("tree-node-selected");
$(_18a).addClass("tree-node-selected");
opts.onSelect.call(_189,node);
};
function _15b(_18b,_18c){
return $(_18c).children("span.tree-hit").length==0;
};
function _18d(_18e,_18f){
var opts=$.data(_18e,"tree").options;
var node=_ea(_18e,_18f);
if(opts.onBeforeEdit.call(_18e,node)==false){
return;
}
$(_18f).css("position","relative");
var nt=$(_18f).find(".tree-title");
var _190=nt.outerWidth();
nt.empty();
var _191=$("<input class=\"tree-editor\">").appendTo(nt);
_191.val(node.text).focus();
_191.width(_190+20);
_191._outerHeight(18);
_191.bind("click",function(e){
return false;
}).bind("mousedown",function(e){
e.stopPropagation();
}).bind("mousemove",function(e){
e.stopPropagation();
}).bind("keydown",function(e){
if(e.keyCode==13){
_192(_18e,_18f);
return false;
}else{
if(e.keyCode==27){
_196(_18e,_18f);
return false;
}
}
}).bind("blur",function(e){
e.stopPropagation();
_192(_18e,_18f);
});
};
function _192(_193,_194){
var opts=$.data(_193,"tree").options;
$(_194).css("position","");
var _195=$(_194).find("input.tree-editor");
var val=_195.val();
_195.remove();
var node=_ea(_193,_194);
node.text=val;
_12c(_193,node);
opts.onAfterEdit.call(_193,node);
};
function _196(_197,_198){
var opts=$.data(_197,"tree").options;
$(_198).css("position","");
$(_198).find("input.tree-editor").remove();
var node=_ea(_197,_198);
_12c(_197,node);
opts.onCancelEdit.call(_197,node);
};
function _199(_19a,q){
var _19b=$.data(_19a,"tree");
var opts=_19b.options;
var ids={};
$.easyui.forEach(_19b.data,true,function(node){
if(opts.filter.call(_19a,q,node)){
$("#"+node.domId).removeClass("tree-node-hidden");
ids[node.domId]=1;
node.hidden=false;
}else{
$("#"+node.domId).addClass("tree-node-hidden");
node.hidden=true;
}
});
for(var id in ids){
_19c(id);
}
function _19c(_19d){
var p=$(_19a).tree("getParent",$("#"+_19d)[0]);
while(p){
$(p.target).removeClass("tree-node-hidden");
p.hidden=false;
p=$(_19a).tree("getParent",p.target);
}
};
};
$.fn.tree=function(_19e,_19f){
if(typeof _19e=="string"){
return $.fn.tree.methods[_19e](this,_19f);
}
var _19e=_19e||{};
return this.each(function(){
var _1a0=$.data(this,"tree");
var opts;
if(_1a0){
opts=$.extend(_1a0.options,_19e);
_1a0.options=opts;
}else{
opts=$.extend({},$.fn.tree.defaults,$.fn.tree.parseOptions(this),_19e);
$.data(this,"tree",{options:opts,tree:_df(this),data:[],tmpIds:[]});
var data=$.fn.tree.parseData(this);
if(data.length){
_124(this,this,data);
}
}
_e2(this);
if(opts.data){
_124(this,this,$.extend(true,[],opts.data));
}
_136(this,this);
});
};
$.fn.tree.methods={options:function(jq){
return $.data(jq[0],"tree").options;
},loadData:function(jq,data){
return jq.each(function(){
_124(this,this,data);
});
},getNode:function(jq,_1a1){
return _ea(jq[0],_1a1);
},getData:function(jq,_1a2){
return _17d(jq[0],_1a2);
},reload:function(jq,_1a3){
return jq.each(function(){
if(_1a3){
var node=$(_1a3);
var hit=node.children("span.tree-hit");
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
node.next().remove();
_13d(this,_1a3);
}else{
$(this).empty();
_136(this,this);
}
});
},getRoot:function(jq,_1a4){
return _16a(jq[0],_1a4);
},getRoots:function(jq){
return _16e(jq[0]);
},getParent:function(jq,_1a5){
return _11f(jq[0],_1a5);
},getChildren:function(jq,_1a6){
return _14c(jq[0],_1a6);
},getChecked:function(jq,_1a7){
return _177(jq[0],_1a7);
},getSelected:function(jq){
return _17b(jq[0]);
},isLeaf:function(jq,_1a8){
return _15b(jq[0],_1a8);
},find:function(jq,id){
return _182(jq[0],id);
},select:function(jq,_1a9){
return jq.each(function(){
_188(this,_1a9);
});
},check:function(jq,_1aa){
return jq.each(function(){
_10c(this,_1aa,true);
});
},uncheck:function(jq,_1ab){
return jq.each(function(){
_10c(this,_1ab,false);
});
},collapse:function(jq,_1ac){
return jq.each(function(){
_142(this,_1ac);
});
},expand:function(jq,_1ad){
return jq.each(function(){
_13d(this,_1ad);
});
},collapseAll:function(jq,_1ae){
return jq.each(function(){
_154(this,_1ae);
});
},expandAll:function(jq,_1af){
return jq.each(function(){
_148(this,_1af);
});
},expandTo:function(jq,_1b0){
return jq.each(function(){
_14d(this,_1b0);
});
},scrollTo:function(jq,_1b1){
return jq.each(function(){
_151(this,_1b1);
});
},toggle:function(jq,_1b2){
return jq.each(function(){
_145(this,_1b2);
});
},append:function(jq,_1b3){
return jq.each(function(){
_158(this,_1b3);
});
},insert:function(jq,_1b4){
return jq.each(function(){
_15d(this,_1b4);
});
},remove:function(jq,_1b5){
return jq.each(function(){
_162(this,_1b5);
});
},pop:function(jq,_1b6){
var node=jq.tree("getData",_1b6);
jq.tree("remove",_1b6);
return node;
},update:function(jq,_1b7){
return jq.each(function(){
_12c(this,$.extend({},_1b7,{checkState:_1b7.checked?"checked":(_1b7.checked===false?"unchecked":undefined)}));
});
},enableDnd:function(jq){
return jq.each(function(){
_ef(this);
});
},disableDnd:function(jq){
return jq.each(function(){
_eb(this);
});
},beginEdit:function(jq,_1b8){
return jq.each(function(){
_18d(this,_1b8);
});
},endEdit:function(jq,_1b9){
return jq.each(function(){
_192(this,_1b9);
});
},cancelEdit:function(jq,_1ba){
return jq.each(function(){
_196(this,_1ba);
});
},doFilter:function(jq,q){
return jq.each(function(){
_199(this,q);
});
}};
$.fn.tree.parseOptions=function(_1bb){
var t=$(_1bb);
return $.extend({},$.parser.parseOptions(_1bb,["url","method",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean",lines:"boolean",dnd:"boolean"}]));
};
$.fn.tree.parseData=function(_1bc){
var data=[];
_1bd(data,$(_1bc));
return data;
function _1bd(aa,tree){
tree.children("li").each(function(){
var node=$(this);
var item=$.extend({},$.parser.parseOptions(this,["id","iconCls","state"]),{checked:(node.attr("checked")?true:undefined)});
item.text=node.children("span").html();
if(!item.text){
item.text=node.html();
}
var _1be=node.children("ul");
if(_1be.length){
item.children=[];
_1bd(item.children,_1be);
}
aa.push(item);
});
};
};
var _1bf=1;
var _1c0={render:function(_1c1,ul,data){
var _1c2=$.data(_1c1,"tree");
var opts=_1c2.options;
var _1c3=$(ul).prev(".tree-node");
var _1c4=_1c3.length?$(_1c1).tree("getNode",_1c3[0]):null;
var _1c5=_1c3.find("span.tree-indent, span.tree-hit").length;
var cc=_1c6.call(this,_1c5,data);
$(ul).append(cc.join(""));
function _1c6(_1c7,_1c8){
var cc=[];
for(var i=0;i<_1c8.length;i++){
var item=_1c8[i];
if(item.state!="open"&&item.state!="closed"){
item.state="open";
}
item.domId="_easyui_tree_"+_1bf++;
cc.push("<li>");
cc.push("<div id=\""+item.domId+"\" class=\"tree-node\">");
for(var j=0;j<_1c7;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(item.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
if(item.children&&item.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(item.iconCls?item.iconCls:"")+"\"></span>");
}
}
if(this.hasCheckbox(_1c1,item)){
var flag=0;
if(_1c4&&_1c4.checkState=="checked"&&opts.cascadeCheck){
flag=1;
item.checked=true;
}else{
if(item.checked){
$.easyui.addArrayItem(_1c2.tmpIds,item.domId);
}
}
item.checkState=flag?"checked":"unchecked";
cc.push("<span class=\"tree-checkbox tree-checkbox"+flag+"\"></span>");
}else{
item.checkState=undefined;
item.checked=undefined;
}
cc.push("<span class=\"tree-title\">"+opts.formatter.call(_1c1,item)+"</span>");
cc.push("</div>");
if(item.children&&item.children.length){
var tmp=_1c6.call(this,_1c7+1,item.children);
cc.push("<ul style=\"display:"+(item.state=="closed"?"none":"block")+"\">");
cc=cc.concat(tmp);
cc.push("</ul>");
}
cc.push("</li>");
}
return cc;
};
},hasCheckbox:function(_1c9,item){
var _1ca=$.data(_1c9,"tree");
var opts=_1ca.options;
if(opts.checkbox){
if($.isFunction(opts.checkbox)){
if(opts.checkbox.call(_1c9,item)){
return true;
}else{
return false;
}
}else{
if(opts.onlyLeafCheck){
if(item.state=="open"&&!(item.children&&item.children.length)){
return true;
}
}else{
return true;
}
}
}
return false;
}};
$.fn.tree.defaults={url:null,method:"post",animate:false,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,dnd:false,data:null,queryParams:{},formatter:function(node){
return node.text;
},filter:function(q,node){
var qq=[];
$.map($.isArray(q)?q:[q],function(q){
q=$.trim(q);
if(q){
qq.push(q);
}
});
for(var i=0;i<qq.length;i++){
var _1cb=node.text.toLowerCase().indexOf(qq[i].toLowerCase());
if(_1cb>=0){
return true;
}
}
return !qq.length;
},loader:function(_1cc,_1cd,_1ce){
var opts=$(this).tree("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_1cc,dataType:"json",success:function(data){
_1cd(data);
},error:function(){
_1ce.apply(this,arguments);
}});
},loadFilter:function(data,_1cf){
return data;
},view:_1c0,onBeforeLoad:function(node,_1d0){
},onLoadSuccess:function(node,data){
},onLoadError:function(){
},onClick:function(node){
},onDblClick:function(node){
},onBeforeExpand:function(node){
},onExpand:function(node){
},onBeforeCollapse:function(node){
},onCollapse:function(node){
},onBeforeCheck:function(node,_1d1){
},onCheck:function(node,_1d2){
},onBeforeSelect:function(node){
},onSelect:function(node){
},onContextMenu:function(e,node){
},onBeforeDrag:function(node){
},onStartDrag:function(node){
},onStopDrag:function(node){
},onDragEnter:function(_1d3,_1d4){
},onDragOver:function(_1d5,_1d6){
},onDragLeave:function(_1d7,_1d8){
},onBeforeDrop:function(_1d9,_1da,_1db){
},onDrop:function(_1dc,_1dd,_1de){
},onBeforeEdit:function(node){
},onAfterEdit:function(node){
},onCancelEdit:function(node){
}};
})(jQuery);
(function($){
function init(_1df){
$(_1df).addClass("progressbar");
$(_1df).html("<div class=\"progressbar-text\"></div><div class=\"progressbar-value\"><div class=\"progressbar-text\"></div></div>");
$(_1df).bind("_resize",function(e,_1e0){
if($(this).hasClass("easyui-fluid")||_1e0){
_1e1(_1df);
}
return false;
});
return $(_1df);
};
function _1e1(_1e2,_1e3){
var opts=$.data(_1e2,"progressbar").options;
var bar=$.data(_1e2,"progressbar").bar;
if(_1e3){
opts.width=_1e3;
}
bar._size(opts);
bar.find("div.progressbar-text").css("width",bar.width());
bar.find("div.progressbar-text,div.progressbar-value").css({height:bar.height()+"px",lineHeight:bar.height()+"px"});
};
$.fn.progressbar=function(_1e4,_1e5){
if(typeof _1e4=="string"){
var _1e6=$.fn.progressbar.methods[_1e4];
if(_1e6){
return _1e6(this,_1e5);
}
}
_1e4=_1e4||{};
return this.each(function(){
var _1e7=$.data(this,"progressbar");
if(_1e7){
$.extend(_1e7.options,_1e4);
}else{
_1e7=$.data(this,"progressbar",{options:$.extend({},$.fn.progressbar.defaults,$.fn.progressbar.parseOptions(this),_1e4),bar:init(this)});
}
$(this).progressbar("setValue",_1e7.options.value);
_1e1(this);
});
};
$.fn.progressbar.methods={options:function(jq){
return $.data(jq[0],"progressbar").options;
},resize:function(jq,_1e8){
return jq.each(function(){
_1e1(this,_1e8);
});
},getValue:function(jq){
return $.data(jq[0],"progressbar").options.value;
},setValue:function(jq,_1e9){
if(_1e9<0){
_1e9=0;
}
if(_1e9>100){
_1e9=100;
}
return jq.each(function(){
var opts=$.data(this,"progressbar").options;
var text=opts.text.replace(/{value}/,_1e9);
var _1ea=opts.value;
opts.value=_1e9;
$(this).find("div.progressbar-value").width(_1e9+"%");
$(this).find("div.progressbar-text").html(text);
if(_1ea!=_1e9){
opts.onChange.call(this,_1e9,_1ea);
}
});
}};
$.fn.progressbar.parseOptions=function(_1eb){
return $.extend({},$.parser.parseOptions(_1eb,["width","height","text",{value:"number"}]));
};
$.fn.progressbar.defaults={width:"auto",height:22,value:0,text:"{value}%",onChange:function(_1ec,_1ed){
}};
})(jQuery);
(function($){
function init(_1ee){
$(_1ee).addClass("tooltip-f");
};
function _1ef(_1f0){
var opts=$.data(_1f0,"tooltip").options;
$(_1f0).unbind(".tooltip").bind(opts.showEvent+".tooltip",function(e){
$(_1f0).tooltip("show",e);
}).bind(opts.hideEvent+".tooltip",function(e){
$(_1f0).tooltip("hide",e);
}).bind("mousemove.tooltip",function(e){
if(opts.trackMouse){
opts.trackMouseX=e.pageX;
opts.trackMouseY=e.pageY;
$(_1f0).tooltip("reposition");
}
});
};
function _1f1(_1f2){
var _1f3=$.data(_1f2,"tooltip");
if(_1f3.showTimer){
clearTimeout(_1f3.showTimer);
_1f3.showTimer=null;
}
if(_1f3.hideTimer){
clearTimeout(_1f3.hideTimer);
_1f3.hideTimer=null;
}
};
function _1f4(_1f5){
var _1f6=$.data(_1f5,"tooltip");
if(!_1f6||!_1f6.tip){
return;
}
var opts=_1f6.options;
var tip=_1f6.tip;
var pos={left:-100000,top:-100000};
if($(_1f5).is(":visible")){
pos=_1f7(opts.position);
if(opts.position=="top"&&pos.top<0){
pos=_1f7("bottom");
}else{
if((opts.position=="bottom")&&(pos.top+tip._outerHeight()>$(window)._outerHeight()+$(document).scrollTop())){
pos=_1f7("top");
}
}
if(pos.left<0){
if(opts.position=="left"){
pos=_1f7("right");
}else{
$(_1f5).tooltip("arrow").css("left",tip._outerWidth()/2+pos.left);
pos.left=0;
}
}else{
if(pos.left+tip._outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
if(opts.position=="right"){
pos=_1f7("left");
}else{
var left=pos.left;
pos.left=$(window)._outerWidth()+$(document)._scrollLeft()-tip._outerWidth();
$(_1f5).tooltip("arrow").css("left",tip._outerWidth()/2-(pos.left-left));
}
}
}
}
tip.css({left:pos.left,top:pos.top,zIndex:(opts.zIndex!=undefined?opts.zIndex:($.fn.window?$.fn.window.defaults.zIndex++:""))});
opts.onPosition.call(_1f5,pos.left,pos.top);
function _1f7(_1f8){
opts.position=_1f8||"bottom";
tip.removeClass("tooltip-top tooltip-bottom tooltip-left tooltip-right").addClass("tooltip-"+opts.position);
var left,top;
var _1f9=$.isFunction(opts.deltaX)?opts.deltaX.call(_1f5,opts.position):opts.deltaX;
var _1fa=$.isFunction(opts.deltaY)?opts.deltaY.call(_1f5,opts.position):opts.deltaY;
if(opts.trackMouse){
t=$();
left=opts.trackMouseX+_1f9;
top=opts.trackMouseY+_1fa;
}else{
var t=$(_1f5);
left=t.offset().left+_1f9;
top=t.offset().top+_1fa;
}
switch(opts.position){
case "right":
left+=t._outerWidth()+12+(opts.trackMouse?12:0);
top-=(tip._outerHeight()-t._outerHeight())/2;
break;
case "left":
left-=tip._outerWidth()+12+(opts.trackMouse?12:0);
top-=(tip._outerHeight()-t._outerHeight())/2;
break;
case "top":
left-=(tip._outerWidth()-t._outerWidth())/2;
top-=tip._outerHeight()+12+(opts.trackMouse?12:0);
break;
case "bottom":
left-=(tip._outerWidth()-t._outerWidth())/2;
top+=t._outerHeight()+12+(opts.trackMouse?12:0);
break;
}
return {left:left,top:top};
};
};
function _1fb(_1fc,e){
var _1fd=$.data(_1fc,"tooltip");
var opts=_1fd.options;
var tip=_1fd.tip;
if(!tip){
tip=$("<div tabindex=\"-1\" class=\"tooltip\">"+"<div class=\"tooltip-content\"></div>"+"<div class=\"tooltip-arrow-outer\"></div>"+"<div class=\"tooltip-arrow\"></div>"+"</div>").appendTo("body");
_1fd.tip=tip;
_1fe(_1fc);
}
_1f1(_1fc);
_1fd.showTimer=setTimeout(function(){
$(_1fc).tooltip("reposition");
tip.show();
opts.onShow.call(_1fc,e);
var _1ff=tip.children(".tooltip-arrow-outer");
var _200=tip.children(".tooltip-arrow");
var bc="border-"+opts.position+"-color";
_1ff.add(_200).css({borderTopColor:"",borderBottomColor:"",borderLeftColor:"",borderRightColor:""});
_1ff.css(bc,tip.css(bc));
_200.css(bc,tip.css("backgroundColor"));
},opts.showDelay);
};
function _201(_202,e){
var _203=$.data(_202,"tooltip");
if(_203&&_203.tip){
_1f1(_202);
_203.hideTimer=setTimeout(function(){
_203.tip.hide();
_203.options.onHide.call(_202,e);
},_203.options.hideDelay);
}
};
function _1fe(_204,_205){
var _206=$.data(_204,"tooltip");
var opts=_206.options;
if(_205){
opts.content=_205;
}
if(!_206.tip){
return;
}
var cc=typeof opts.content=="function"?opts.content.call(_204):opts.content;
_206.tip.children(".tooltip-content").html(cc);
opts.onUpdate.call(_204,cc);
};
function _207(_208){
var _209=$.data(_208,"tooltip");
if(_209){
_1f1(_208);
var opts=_209.options;
if(_209.tip){
_209.tip.remove();
}
if(opts._title){
$(_208).attr("title",opts._title);
}
$.removeData(_208,"tooltip");
$(_208).unbind(".tooltip").removeClass("tooltip-f");
opts.onDestroy.call(_208);
}
};
$.fn.tooltip=function(_20a,_20b){
if(typeof _20a=="string"){
return $.fn.tooltip.methods[_20a](this,_20b);
}
_20a=_20a||{};
return this.each(function(){
var _20c=$.data(this,"tooltip");
if(_20c){
$.extend(_20c.options,_20a);
}else{
$.data(this,"tooltip",{options:$.extend({},$.fn.tooltip.defaults,$.fn.tooltip.parseOptions(this),_20a)});
init(this);
}
_1ef(this);
_1fe(this);
});
};
$.fn.tooltip.methods={options:function(jq){
return $.data(jq[0],"tooltip").options;
},tip:function(jq){
return $.data(jq[0],"tooltip").tip;
},arrow:function(jq){
return jq.tooltip("tip").children(".tooltip-arrow-outer,.tooltip-arrow");
},show:function(jq,e){
return jq.each(function(){
_1fb(this,e);
});
},hide:function(jq,e){
return jq.each(function(){
_201(this,e);
});
},update:function(jq,_20d){
return jq.each(function(){
_1fe(this,_20d);
});
},reposition:function(jq){
return jq.each(function(){
_1f4(this);
});
},destroy:function(jq){
return jq.each(function(){
_207(this);
});
}};
$.fn.tooltip.parseOptions=function(_20e){
var t=$(_20e);
var opts=$.extend({},$.parser.parseOptions(_20e,["position","showEvent","hideEvent","content",{trackMouse:"boolean",deltaX:"number",deltaY:"number",showDelay:"number",hideDelay:"number"}]),{_title:t.attr("title")});
t.attr("title","");
if(!opts.content){
opts.content=opts._title;
}
return opts;
};
$.fn.tooltip.defaults={position:"bottom",content:null,trackMouse:false,deltaX:0,deltaY:0,showEvent:"mouseenter",hideEvent:"mouseleave",showDelay:200,hideDelay:100,onShow:function(e){
},onHide:function(e){
},onUpdate:function(_20f){
},onPosition:function(left,top){
},onDestroy:function(){
}};
})(jQuery);
(function($){
$.fn._remove=function(){
return this.each(function(){
$(this).remove();
try{
this.outerHTML="";
}
catch(err){
}
});
};
function _210(node){
node._remove();
};
function _211(_212,_213){
var _214=$.data(_212,"panel");
var opts=_214.options;
var _215=_214.panel;
var _216=_215.children(".panel-header");
var _217=_215.children(".panel-body");
var _218=_215.children(".panel-footer");
if(_213){
$.extend(opts,{width:_213.width,height:_213.height,minWidth:_213.minWidth,maxWidth:_213.maxWidth,minHeight:_213.minHeight,maxHeight:_213.maxHeight,left:_213.left,top:_213.top});
}
_215._size(opts);
_216.add(_217)._outerWidth(_215.width());
if(!isNaN(parseInt(opts.height))){
_217._outerHeight(_215.height()-_216._outerHeight()-_218._outerHeight());
}else{
_217.css("height","");
var min=$.parser.parseValue("minHeight",opts.minHeight,_215.parent());
var max=$.parser.parseValue("maxHeight",opts.maxHeight,_215.parent());
var _219=_216._outerHeight()+_218._outerHeight()+_215._outerHeight()-_215.height();
_217._size("minHeight",min?(min-_219):"");
_217._size("maxHeight",max?(max-_219):"");
}
_215.css({height:"",minHeight:"",maxHeight:"",left:opts.left,top:opts.top});
opts.onResize.apply(_212,[opts.width,opts.height]);
$(_212).panel("doLayout");
};
function _21a(_21b,_21c){
var _21d=$.data(_21b,"panel");
var opts=_21d.options;
var _21e=_21d.panel;
if(_21c){
if(_21c.left!=null){
opts.left=_21c.left;
}
if(_21c.top!=null){
opts.top=_21c.top;
}
}
_21e.css({left:opts.left,top:opts.top});
_21e.find(".tooltip-f").each(function(){
$(this).tooltip("reposition");
});
opts.onMove.apply(_21b,[opts.left,opts.top]);
};
function _21f(_220){
$(_220).addClass("panel-body")._size("clear");
var _221=$("<div class=\"panel\"></div>").insertBefore(_220);
_221[0].appendChild(_220);
_221.bind("_resize",function(e,_222){
if($(this).hasClass("easyui-fluid")||_222){
_211(_220);
}
return false;
});
return _221;
};
function _223(_224){
var _225=$.data(_224,"panel");
var opts=_225.options;
var _226=_225.panel;
_226.css(opts.style);
_226.addClass(opts.cls);
_227();
_228();
var _229=$(_224).panel("header");
var body=$(_224).panel("body");
var _22a=$(_224).siblings(".panel-footer");
if(opts.border){
_229.removeClass("panel-header-noborder");
body.removeClass("panel-body-noborder");
_22a.removeClass("panel-footer-noborder");
}else{
_229.addClass("panel-header-noborder");
body.addClass("panel-body-noborder");
_22a.addClass("panel-footer-noborder");
}
_229.addClass(opts.headerCls);
body.addClass(opts.bodyCls);
$(_224).attr("id",opts.id||"");
if(opts.content){
$(_224).panel("clear");
$(_224).html(opts.content);
$.parser.parse($(_224));
}
function _227(){
if(opts.noheader||(!opts.title&&!opts.header)){
_210(_226.children(".panel-header"));
_226.children(".panel-body").addClass("panel-body-noheader");
}else{
if(opts.header){
$(opts.header).addClass("panel-header").prependTo(_226);
}else{
var _22b=_226.children(".panel-header");
if(!_22b.length){
_22b=$("<div class=\"panel-header\"></div>").prependTo(_226);
}
if(!$.isArray(opts.tools)){
_22b.find("div.panel-tool .panel-tool-a").appendTo(opts.tools);
}
_22b.empty();
var _22c=$("<div class=\"panel-title\"></div>").html(opts.title).appendTo(_22b);
if(opts.iconCls){
_22c.addClass("panel-with-icon");
$("<div class=\"panel-icon\"></div>").addClass(opts.iconCls).appendTo(_22b);
}
var tool=$("<div class=\"panel-tool\"></div>").appendTo(_22b);
tool.bind("click",function(e){
e.stopPropagation();
});
if(opts.tools){
if($.isArray(opts.tools)){
$.map(opts.tools,function(t){
_22d(tool,t.iconCls,eval(t.handler));
});
}else{
$(opts.tools).children().each(function(){
$(this).addClass($(this).attr("iconCls")).addClass("panel-tool-a").appendTo(tool);
});
}
}
if(opts.collapsible){
_22d(tool,"panel-tool-collapse",function(){
if(opts.collapsed==true){
_24c(_224,true);
}else{
_23e(_224,true);
}
});
}
if(opts.minimizable){
_22d(tool,"panel-tool-min",function(){
_252(_224);
});
}
if(opts.maximizable){
_22d(tool,"panel-tool-max",function(){
if(opts.maximized==true){
_255(_224);
}else{
_23d(_224);
}
});
}
if(opts.closable){
_22d(tool,"panel-tool-close",function(){
_23f(_224);
});
}
}
_226.children("div.panel-body").removeClass("panel-body-noheader");
}
};
function _22d(c,icon,_22e){
var a=$("<a href=\"javascript:;\"></a>").addClass(icon).appendTo(c);
a.bind("click",_22e);
};
function _228(){
if(opts.footer){
$(opts.footer).addClass("panel-footer").appendTo(_226);
$(_224).addClass("panel-body-nobottom");
}else{
_226.children(".panel-footer").remove();
$(_224).removeClass("panel-body-nobottom");
}
};
};
function _22f(_230,_231){
var _232=$.data(_230,"panel");
var opts=_232.options;
if(_233){
opts.queryParams=_231;
}
if(!opts.href){
return;
}
if(!_232.isLoaded||!opts.cache){
var _233=$.extend({},opts.queryParams);
if(opts.onBeforeLoad.call(_230,_233)==false){
return;
}
_232.isLoaded=false;
if(opts.loadingMessage){
$(_230).panel("clear");
$(_230).html($("<div class=\"panel-loading\"></div>").html(opts.loadingMessage));
}
opts.loader.call(_230,_233,function(data){
var _234=opts.extractor.call(_230,data);
$(_230).panel("clear");
$(_230).html(_234);
$.parser.parse($(_230));
opts.onLoad.apply(_230,arguments);
_232.isLoaded=true;
},function(){
opts.onLoadError.apply(_230,arguments);
});
}
};
function _235(_236){
var t=$(_236);
t.find(".combo-f").each(function(){
$(this).combo("destroy");
});
t.find(".m-btn").each(function(){
$(this).menubutton("destroy");
});
t.find(".s-btn").each(function(){
$(this).splitbutton("destroy");
});
t.find(".tooltip-f").each(function(){
$(this).tooltip("destroy");
});
t.children("div").each(function(){
$(this)._size("unfit");
});
t.empty();
};
function _237(_238){
$(_238).panel("doLayout",true);
};
function _239(_23a,_23b){
var opts=$.data(_23a,"panel").options;
var _23c=$.data(_23a,"panel").panel;
if(_23b!=true){
if(opts.onBeforeOpen.call(_23a)==false){
return;
}
}
_23c.stop(true,true);
if($.isFunction(opts.openAnimation)){
opts.openAnimation.call(_23a,cb);
}else{
switch(opts.openAnimation){
case "slide":
_23c.slideDown(opts.openDuration,cb);
break;
case "fade":
_23c.fadeIn(opts.openDuration,cb);
break;
case "show":
_23c.show(opts.openDuration,cb);
break;
default:
_23c.show();
cb();
}
}
function cb(){
opts.closed=false;
opts.minimized=false;
var tool=_23c.children(".panel-header").find("a.panel-tool-restore");
if(tool.length){
opts.maximized=true;
}
opts.onOpen.call(_23a);
if(opts.maximized==true){
opts.maximized=false;
_23d(_23a);
}
if(opts.collapsed==true){
opts.collapsed=false;
_23e(_23a);
}
if(!opts.collapsed){
_22f(_23a);
_237(_23a);
}
};
};
function _23f(_240,_241){
var _242=$.data(_240,"panel");
var opts=_242.options;
var _243=_242.panel;
if(_241!=true){
if(opts.onBeforeClose.call(_240)==false){
return;
}
}
_243.find(".tooltip-f").each(function(){
$(this).tooltip("hide");
});
_243.stop(true,true);
_243._size("unfit");
if($.isFunction(opts.closeAnimation)){
opts.closeAnimation.call(_240,cb);
}else{
switch(opts.closeAnimation){
case "slide":
_243.slideUp(opts.closeDuration,cb);
break;
case "fade":
_243.fadeOut(opts.closeDuration,cb);
break;
case "hide":
_243.hide(opts.closeDuration,cb);
break;
default:
_243.hide();
cb();
}
}
function cb(){
opts.closed=true;
opts.onClose.call(_240);
};
};
function _244(_245,_246){
var _247=$.data(_245,"panel");
var opts=_247.options;
var _248=_247.panel;
if(_246!=true){
if(opts.onBeforeDestroy.call(_245)==false){
return;
}
}
$(_245).panel("clear").panel("clear","footer");
_210(_248);
opts.onDestroy.call(_245);
};
function _23e(_249,_24a){
var opts=$.data(_249,"panel").options;
var _24b=$.data(_249,"panel").panel;
var body=_24b.children(".panel-body");
var tool=_24b.children(".panel-header").find("a.panel-tool-collapse");
if(opts.collapsed==true){
return;
}
body.stop(true,true);
if(opts.onBeforeCollapse.call(_249)==false){
return;
}
tool.addClass("panel-tool-expand");
if(_24a==true){
body.slideUp("normal",function(){
opts.collapsed=true;
opts.onCollapse.call(_249);
});
}else{
body.hide();
opts.collapsed=true;
opts.onCollapse.call(_249);
}
};
function _24c(_24d,_24e){
var opts=$.data(_24d,"panel").options;
var _24f=$.data(_24d,"panel").panel;
var body=_24f.children(".panel-body");
var tool=_24f.children(".panel-header").find("a.panel-tool-collapse");
if(opts.collapsed==false){
return;
}
body.stop(true,true);
if(opts.onBeforeExpand.call(_24d)==false){
return;
}
tool.removeClass("panel-tool-expand");
if(_24e==true){
body.slideDown("normal",function(){
opts.collapsed=false;
opts.onExpand.call(_24d);
_22f(_24d);
_237(_24d);
});
}else{
body.show();
opts.collapsed=false;
opts.onExpand.call(_24d);
_22f(_24d);
_237(_24d);
}
};
function _23d(_250){
var opts=$.data(_250,"panel").options;
var _251=$.data(_250,"panel").panel;
var tool=_251.children(".panel-header").find("a.panel-tool-max");
if(opts.maximized==true){
return;
}
tool.addClass("panel-tool-restore");
if(!$.data(_250,"panel").original){
$.data(_250,"panel").original={width:opts.width,height:opts.height,left:opts.left,top:opts.top,fit:opts.fit};
}
opts.left=0;
opts.top=0;
opts.fit=true;
_211(_250);
opts.minimized=false;
opts.maximized=true;
opts.onMaximize.call(_250);
};
function _252(_253){
var opts=$.data(_253,"panel").options;
var _254=$.data(_253,"panel").panel;
_254._size("unfit");
_254.hide();
opts.minimized=true;
opts.maximized=false;
opts.onMinimize.call(_253);
};
function _255(_256){
var opts=$.data(_256,"panel").options;
var _257=$.data(_256,"panel").panel;
var tool=_257.children(".panel-header").find("a.panel-tool-max");
if(opts.maximized==false){
return;
}
_257.show();
tool.removeClass("panel-tool-restore");
$.extend(opts,$.data(_256,"panel").original);
_211(_256);
opts.minimized=false;
opts.maximized=false;
$.data(_256,"panel").original=null;
opts.onRestore.call(_256);
};
function _258(_259,_25a){
$.data(_259,"panel").options.title=_25a;
$(_259).panel("header").find("div.panel-title").html(_25a);
};
var _25b=null;
$(window).unbind(".panel").bind("resize.panel",function(){
if(_25b){
clearTimeout(_25b);
}
_25b=setTimeout(function(){
var _25c=$("body.layout");
if(_25c.length){
_25c.layout("resize");
$("body").children(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
}else{
$("body").panel("doLayout");
}
_25b=null;
},100);
});
$.fn.panel=function(_25d,_25e){
if(typeof _25d=="string"){
return $.fn.panel.methods[_25d](this,_25e);
}
_25d=_25d||{};
return this.each(function(){
var _25f=$.data(this,"panel");
var opts;
if(_25f){
opts=$.extend(_25f.options,_25d);
_25f.isLoaded=false;
}else{
opts=$.extend({},$.fn.panel.defaults,$.fn.panel.parseOptions(this),_25d);
$(this).attr("title","");
_25f=$.data(this,"panel",{options:opts,panel:_21f(this),isLoaded:false});
}
_223(this);
$(this).show();
if(opts.doSize==true){
_25f.panel.css("display","block");
_211(this);
}
if(opts.closed==true||opts.minimized==true){
_25f.panel.hide();
}else{
_239(this);
}
});
};
$.fn.panel.methods={options:function(jq){
return $.data(jq[0],"panel").options;
},panel:function(jq){
return $.data(jq[0],"panel").panel;
},header:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-header");
},footer:function(jq){
return jq.panel("panel").children(".panel-footer");
},body:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-body");
},setTitle:function(jq,_260){
return jq.each(function(){
_258(this,_260);
});
},open:function(jq,_261){
return jq.each(function(){
_239(this,_261);
});
},close:function(jq,_262){
return jq.each(function(){
_23f(this,_262);
});
},destroy:function(jq,_263){
return jq.each(function(){
_244(this,_263);
});
},clear:function(jq,type){
return jq.each(function(){
_235(type=="footer"?$(this).panel("footer"):this);
});
},refresh:function(jq,href){
return jq.each(function(){
var _264=$.data(this,"panel");
_264.isLoaded=false;
if(href){
if(typeof href=="string"){
_264.options.href=href;
}else{
_264.options.queryParams=href;
}
}
_22f(this);
});
},resize:function(jq,_265){
return jq.each(function(){
_211(this,_265);
});
},doLayout:function(jq,all){
return jq.each(function(){
_266(this,"body");
_266($(this).siblings(".panel-footer")[0],"footer");
function _266(_267,type){
if(!_267){
return;
}
var _268=_267==$("body")[0];
var s=$(_267).find("div.panel:visible,div.accordion:visible,div.tabs-container:visible,div.layout:visible,.easyui-fluid:visible").filter(function(_269,el){
var p=$(el).parents(".panel-"+type+":first");
return _268?p.length==0:p[0]==_267;
});
s.each(function(){
$(this).triggerHandler("_resize",[all||false]);
});
};
});
},move:function(jq,_26a){
return jq.each(function(){
_21a(this,_26a);
});
},maximize:function(jq){
return jq.each(function(){
_23d(this);
});
},minimize:function(jq){
return jq.each(function(){
_252(this);
});
},restore:function(jq){
return jq.each(function(){
_255(this);
});
},collapse:function(jq,_26b){
return jq.each(function(){
_23e(this,_26b);
});
},expand:function(jq,_26c){
return jq.each(function(){
_24c(this,_26c);
});
}};
$.fn.panel.parseOptions=function(_26d){
var t=$(_26d);
var hh=t.children(".panel-header,header");
var ff=t.children(".panel-footer,footer");
return $.extend({},$.parser.parseOptions(_26d,["id","width","height","left","top","title","iconCls","cls","headerCls","bodyCls","tools","href","method","header","footer",{cache:"boolean",fit:"boolean",border:"boolean",noheader:"boolean"},{collapsible:"boolean",minimizable:"boolean",maximizable:"boolean"},{closable:"boolean",collapsed:"boolean",minimized:"boolean",maximized:"boolean",closed:"boolean"},"openAnimation","closeAnimation",{openDuration:"number",closeDuration:"number"},]),{loadingMessage:(t.attr("loadingMessage")!=undefined?t.attr("loadingMessage"):undefined),header:(hh.length?hh.removeClass("panel-header"):undefined),footer:(ff.length?ff.removeClass("panel-footer"):undefined)});
};
$.fn.panel.defaults={id:null,title:null,iconCls:null,width:"auto",height:"auto",left:null,top:null,cls:null,headerCls:null,bodyCls:null,style:{},href:null,cache:true,fit:false,border:true,doSize:true,noheader:false,content:null,collapsible:false,minimizable:false,maximizable:false,closable:false,collapsed:false,minimized:false,maximized:false,closed:false,openAnimation:false,openDuration:400,closeAnimation:false,closeDuration:400,tools:null,footer:null,header:null,queryParams:{},method:"get",href:null,loadingMessage:"Loading...",loader:function(_26e,_26f,_270){
var opts=$(this).panel("options");
if(!opts.href){
return false;
}
$.ajax({type:opts.method,url:opts.href,cache:false,data:_26e,dataType:"html",success:function(data){
_26f(data);
},error:function(){
_270.apply(this,arguments);
}});
},extractor:function(data){
var _271=/<body[^>]*>((.|[\n\r])*)<\/body>/im;
var _272=_271.exec(data);
if(_272){
return _272[1];
}else{
return data;
}
},onBeforeLoad:function(_273){
},onLoad:function(){
},onLoadError:function(){
},onBeforeOpen:function(){
},onOpen:function(){
},onBeforeClose:function(){
},onClose:function(){
},onBeforeDestroy:function(){
},onDestroy:function(){
},onResize:function(_274,_275){
},onMove:function(left,top){
},onMaximize:function(){
},onRestore:function(){
},onMinimize:function(){
},onBeforeCollapse:function(){
},onBeforeExpand:function(){
},onCollapse:function(){
},onExpand:function(){
}};
})(jQuery);
(function($){
function _276(_277,_278){
var _279=$.data(_277,"window");
if(_278){
if(_278.left!=null){
_279.options.left=_278.left;
}
if(_278.top!=null){
_279.options.top=_278.top;
}
}
$(_277).panel("move",_279.options);
if(_279.shadow){
_279.shadow.css({left:_279.options.left,top:_279.options.top});
}
};
function _27a(_27b,_27c){
var opts=$.data(_27b,"window").options;
var pp=$(_27b).window("panel");
var _27d=pp._outerWidth();
if(opts.inline){
var _27e=pp.parent();
opts.left=Math.ceil((_27e.width()-_27d)/2+_27e.scrollLeft());
}else{
opts.left=Math.ceil(($(window)._outerWidth()-_27d)/2+$(document).scrollLeft());
}
if(_27c){
_276(_27b);
}
};
function _27f(_280,_281){
var opts=$.data(_280,"window").options;
var pp=$(_280).window("panel");
var _282=pp._outerHeight();
if(opts.inline){
var _283=pp.parent();
opts.top=Math.ceil((_283.height()-_282)/2+_283.scrollTop());
}else{
opts.top=Math.ceil(($(window)._outerHeight()-_282)/2+$(document).scrollTop());
}
if(_281){
_276(_280);
}
};
function _284(_285){
var _286=$.data(_285,"window");
var opts=_286.options;
var win=$(_285).panel($.extend({},_286.options,{border:false,doSize:true,closed:true,cls:"window "+(!opts.border?"window-thinborder window-noborder ":(opts.border=="thin"?"window-thinborder ":""))+(opts.cls||""),headerCls:"window-header "+(opts.headerCls||""),bodyCls:"window-body "+(opts.noheader?"window-body-noheader ":" ")+(opts.bodyCls||""),onBeforeDestroy:function(){
if(opts.onBeforeDestroy.call(_285)==false){
return false;
}
if(_286.shadow){
_286.shadow.remove();
}
if(_286.mask){
_286.mask.remove();
}
},onClose:function(){
if(_286.shadow){
_286.shadow.hide();
}
if(_286.mask){
_286.mask.hide();
}
opts.onClose.call(_285);
},onOpen:function(){
if(_286.mask){
_286.mask.css($.extend({display:"block",zIndex:$.fn.window.defaults.zIndex++},$.fn.window.getMaskSize(_285)));
}
if(_286.shadow){
_286.shadow.css({display:"block",zIndex:$.fn.window.defaults.zIndex++,left:opts.left,top:opts.top,width:_286.window._outerWidth(),height:_286.window._outerHeight()});
}
_286.window.css("z-index",$.fn.window.defaults.zIndex++);
opts.onOpen.call(_285);
},onResize:function(_287,_288){
var _289=$(this).panel("options");
$.extend(opts,{width:_289.width,height:_289.height,left:_289.left,top:_289.top});
if(_286.shadow){
_286.shadow.css({left:opts.left,top:opts.top,width:_286.window._outerWidth(),height:_286.window._outerHeight()});
}
opts.onResize.call(_285,_287,_288);
},onMinimize:function(){
if(_286.shadow){
_286.shadow.hide();
}
if(_286.mask){
_286.mask.hide();
}
_286.options.onMinimize.call(_285);
},onBeforeCollapse:function(){
if(opts.onBeforeCollapse.call(_285)==false){
return false;
}
if(_286.shadow){
_286.shadow.hide();
}
},onExpand:function(){
if(_286.shadow){
_286.shadow.show();
}
opts.onExpand.call(_285);
}}));
_286.window=win.panel("panel");
if(_286.mask){
_286.mask.remove();
}
if(opts.modal){
_286.mask=$("<div class=\"window-mask\" style=\"display:none\"></div>").insertAfter(_286.window);
}
if(_286.shadow){
_286.shadow.remove();
}
if(opts.shadow){
_286.shadow=$("<div class=\"window-shadow\" style=\"display:none\"></div>").insertAfter(_286.window);
}
var _28a=opts.closed;
if(opts.left==null){
_27a(_285);
}
if(opts.top==null){
_27f(_285);
}
_276(_285);
if(!_28a){
win.window("open");
}
};
function _28b(left,top,_28c,_28d){
var _28e=this;
var _28f=$.data(_28e,"window");
var opts=_28f.options;
if(!opts.constrain){
return {};
}
if($.isFunction(opts.constrain)){
return opts.constrain.call(_28e,left,top,_28c,_28d);
}
var win=$(_28e).window("window");
var _290=opts.inline?win.parent():$(window);
if(left<0){
left=0;
}
if(top<_290.scrollTop()){
top=_290.scrollTop();
}
if(left+_28c>_290.width()){
if(_28c==win.outerWidth()){
left=_290.width()-_28c;
}else{
_28c=_290.width()-left;
}
}
if(top-_290.scrollTop()+_28d>_290.height()){
if(_28d==win.outerHeight()){
top=_290.height()-_28d+_290.scrollTop();
}else{
_28d=_290.height()-top+_290.scrollTop();
}
}
return {left:left,top:top,width:_28c,height:_28d};
};
function _291(_292){
var _293=$.data(_292,"window");
_293.window.draggable({handle:">div.panel-header>div.panel-title",disabled:_293.options.draggable==false,onBeforeDrag:function(e){
if(_293.mask){
_293.mask.css("z-index",$.fn.window.defaults.zIndex++);
}
if(_293.shadow){
_293.shadow.css("z-index",$.fn.window.defaults.zIndex++);
}
_293.window.css("z-index",$.fn.window.defaults.zIndex++);
},onStartDrag:function(e){
_294(e);
},onDrag:function(e){
_295(e);
return false;
},onStopDrag:function(e){
_296(e,"move");
}});
_293.window.resizable({disabled:_293.options.resizable==false,onStartResize:function(e){
_294(e);
},onResize:function(e){
_295(e);
return false;
},onStopResize:function(e){
_296(e,"resize");
}});
function _294(e){
if(_293.pmask){
_293.pmask.remove();
}
_293.pmask=$("<div class=\"window-proxy-mask\"></div>").insertAfter(_293.window);
_293.pmask.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top,width:_293.window._outerWidth(),height:_293.window._outerHeight()});
if(_293.proxy){
_293.proxy.remove();
}
_293.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_293.window);
_293.proxy.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top});
_293.proxy._outerWidth(e.data.width)._outerHeight(e.data.height);
_293.proxy.hide();
setTimeout(function(){
if(_293.pmask){
_293.pmask.show();
}
if(_293.proxy){
_293.proxy.show();
}
},500);
};
function _295(e){
$.extend(e.data,_28b.call(_292,e.data.left,e.data.top,e.data.width,e.data.height));
_293.pmask.show();
_293.proxy.css({display:"block",left:e.data.left,top:e.data.top});
_293.proxy._outerWidth(e.data.width);
_293.proxy._outerHeight(e.data.height);
};
function _296(e,_297){
$.extend(e.data,_28b.call(_292,e.data.left,e.data.top,e.data.width+0.1,e.data.height+0.1));
$(_292).window(_297,e.data);
_293.pmask.remove();
_293.pmask=null;
_293.proxy.remove();
_293.proxy=null;
};
};
$(function(){
if(!$._positionFixed){
$(window).resize(function(){
$("body>div.window-mask:visible").css({width:"",height:""});
setTimeout(function(){
$("body>div.window-mask:visible").css($.fn.window.getMaskSize());
},50);
});
}
});
$.fn.window=function(_298,_299){
if(typeof _298=="string"){
var _29a=$.fn.window.methods[_298];
if(_29a){
return _29a(this,_299);
}else{
return this.panel(_298,_299);
}
}
_298=_298||{};
return this.each(function(){
var _29b=$.data(this,"window");
if(_29b){
$.extend(_29b.options,_298);
}else{
_29b=$.data(this,"window",{options:$.extend({},$.fn.window.defaults,$.fn.window.parseOptions(this),_298)});
if(!_29b.options.inline){
document.body.appendChild(this);
}
}
_284(this);
_291(this);
});
};
$.fn.window.methods={options:function(jq){
var _29c=jq.panel("options");
var _29d=$.data(jq[0],"window").options;
return $.extend(_29d,{closed:_29c.closed,collapsed:_29c.collapsed,minimized:_29c.minimized,maximized:_29c.maximized});
},window:function(jq){
return $.data(jq[0],"window").window;
},move:function(jq,_29e){
return jq.each(function(){
_276(this,_29e);
});
},hcenter:function(jq){
return jq.each(function(){
_27a(this,true);
});
},vcenter:function(jq){
return jq.each(function(){
_27f(this,true);
});
},center:function(jq){
return jq.each(function(){
_27a(this);
_27f(this);
_276(this);
});
}};
$.fn.window.getMaskSize=function(_29f){
var _2a0=$(_29f).data("window");
if(_2a0&&_2a0.options.inline){
return {};
}else{
if($._positionFixed){
return {position:"fixed"};
}else{
return {width:$(document).width(),height:$(document).height()};
}
}
};
$.fn.window.parseOptions=function(_2a1){
return $.extend({},$.fn.panel.parseOptions(_2a1),$.parser.parseOptions(_2a1,[{draggable:"boolean",resizable:"boolean",shadow:"boolean",modal:"boolean",inline:"boolean"}]));
};
$.fn.window.defaults=$.extend({},$.fn.panel.defaults,{zIndex:9000,draggable:true,resizable:true,shadow:true,modal:false,border:true,inline:false,title:"New Window",collapsible:true,minimizable:true,maximizable:true,closable:true,closed:false,constrain:false});
})(jQuery);
(function($){
function _2a2(_2a3){
var opts=$.data(_2a3,"dialog").options;
opts.inited=false;
$(_2a3).window($.extend({},opts,{onResize:function(w,h){
if(opts.inited){
_2a8(this);
opts.onResize.call(this,w,h);
}
}}));
var win=$(_2a3).window("window");
if(opts.toolbar){
if($.isArray(opts.toolbar)){
$(_2a3).siblings("div.dialog-toolbar").remove();
var _2a4=$("<div class=\"dialog-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").appendTo(win);
var tr=_2a4.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"dialog-tool-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:;\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(opts.toolbar).addClass("dialog-toolbar").appendTo(win);
$(opts.toolbar).show();
}
}else{
$(_2a3).siblings("div.dialog-toolbar").remove();
}
if(opts.buttons){
if($.isArray(opts.buttons)){
$(_2a3).siblings("div.dialog-button").remove();
var _2a5=$("<div class=\"dialog-button\"></div>").appendTo(win);
for(var i=0;i<opts.buttons.length;i++){
var p=opts.buttons[i];
var _2a6=$("<a href=\"javascript:;\"></a>").appendTo(_2a5);
if(p.handler){
_2a6[0].onclick=p.handler;
}
_2a6.linkbutton(p);
}
}else{
$(opts.buttons).addClass("dialog-button").appendTo(win);
$(opts.buttons).show();
}
}else{
$(_2a3).siblings("div.dialog-button").remove();
}
opts.inited=true;
var _2a7=opts.closed;
win.show();
$(_2a3).window("resize");
if(_2a7){
win.hide();
}
};
function _2a8(_2a9,_2aa){
var t=$(_2a9);
var opts=t.dialog("options");
var _2ab=opts.noheader;
var tb=t.siblings(".dialog-toolbar");
var bb=t.siblings(".dialog-button");
tb.insertBefore(_2a9).css({borderTopWidth:(_2ab?1:0),top:(_2ab?tb.length:0)});
bb.insertAfter(_2a9);
tb.add(bb)._outerWidth(t._outerWidth()).find(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
var _2ac=tb._outerHeight()+bb._outerHeight();
if(!isNaN(parseInt(opts.height))){
t._outerHeight(t._outerHeight()-_2ac);
}else{
var _2ad=t._size("min-height");
if(_2ad){
t._size("min-height",_2ad-_2ac);
}
var _2ae=t._size("max-height");
if(_2ae){
t._size("max-height",_2ae-_2ac);
}
}
var _2af=$.data(_2a9,"window").shadow;
if(_2af){
var cc=t.panel("panel");
_2af.css({width:cc._outerWidth(),height:cc._outerHeight()});
}
};
$.fn.dialog=function(_2b0,_2b1){
if(typeof _2b0=="string"){
var _2b2=$.fn.dialog.methods[_2b0];
if(_2b2){
return _2b2(this,_2b1);
}else{
return this.window(_2b0,_2b1);
}
}
_2b0=_2b0||{};
return this.each(function(){
var _2b3=$.data(this,"dialog");
if(_2b3){
$.extend(_2b3.options,_2b0);
}else{
$.data(this,"dialog",{options:$.extend({},$.fn.dialog.defaults,$.fn.dialog.parseOptions(this),_2b0)});
}
_2a2(this);
});
};
$.fn.dialog.methods={options:function(jq){
var _2b4=$.data(jq[0],"dialog").options;
var _2b5=jq.panel("options");
$.extend(_2b4,{width:_2b5.width,height:_2b5.height,left:_2b5.left,top:_2b5.top,closed:_2b5.closed,collapsed:_2b5.collapsed,minimized:_2b5.minimized,maximized:_2b5.maximized});
return _2b4;
},dialog:function(jq){
return jq.window("window");
}};
$.fn.dialog.parseOptions=function(_2b6){
var t=$(_2b6);
return $.extend({},$.fn.window.parseOptions(_2b6),$.parser.parseOptions(_2b6,["toolbar","buttons"]),{toolbar:(t.children(".dialog-toolbar").length?t.children(".dialog-toolbar").removeClass("dialog-toolbar"):undefined),buttons:(t.children(".dialog-button").length?t.children(".dialog-button").removeClass("dialog-button"):undefined)});
};
$.fn.dialog.defaults=$.extend({},$.fn.window.defaults,{title:"New Dialog",collapsible:false,minimizable:false,maximizable:false,resizable:false,toolbar:null,buttons:null});
})(jQuery);
(function($){
function _2b7(){
$(document).unbind(".messager").bind("keydown.messager",function(e){
if(e.keyCode==27){
$("body").children("div.messager-window").children("div.messager-body").each(function(){
$(this).dialog("close");
});
}else{
if(e.keyCode==9){
var win=$("body").children("div.messager-window");
if(!win.length){
return;
}
var _2b8=win.find(".messager-input,.messager-button .l-btn");
for(var i=0;i<_2b8.length;i++){
if($(_2b8[i]).is(":focus")){
$(_2b8[i>=_2b8.length-1?0:i+1]).focus();
return false;
}
}
}else{
if(e.keyCode==13){
var _2b9=$(e.target).closest("input.messager-input");
if(_2b9.length){
var dlg=_2b9.closest(".messager-body");
_2ba(dlg,_2b9.val());
}
}
}
}
});
};
function _2bb(){
$(document).unbind(".messager");
};
function _2bc(_2bd){
var opts=$.extend({},$.messager.defaults,{modal:false,shadow:false,draggable:false,resizable:false,closed:true,style:{left:"",top:"",right:0,zIndex:$.fn.window.defaults.zIndex++,bottom:-document.body.scrollTop-document.documentElement.scrollTop},title:"",width:250,height:100,minHeight:0,showType:"slide",showSpeed:600,content:_2bd.msg,timeout:4000},_2bd);
var dlg=$("<div class=\"messager-body\"></div>").appendTo("body");
dlg.dialog($.extend({},opts,{noheader:(opts.title?false:true),openAnimation:(opts.showType),closeAnimation:(opts.showType=="show"?"hide":opts.showType),openDuration:opts.showSpeed,closeDuration:opts.showSpeed,onOpen:function(){
dlg.dialog("dialog").hover(function(){
if(opts.timer){
clearTimeout(opts.timer);
}
},function(){
_2be();
});
_2be();
function _2be(){
if(opts.timeout>0){
opts.timer=setTimeout(function(){
if(dlg.length&&dlg.data("dialog")){
dlg.dialog("close");
}
},opts.timeout);
}
};
if(_2bd.onOpen){
_2bd.onOpen.call(this);
}else{
opts.onOpen.call(this);
}
},onClose:function(){
if(opts.timer){
clearTimeout(opts.timer);
}
if(_2bd.onClose){
_2bd.onClose.call(this);
}else{
opts.onClose.call(this);
}
dlg.dialog("destroy");
}}));
dlg.dialog("dialog").css(opts.style);
dlg.dialog("open");
return dlg;
};
function _2bf(_2c0){
_2b7();
var dlg=$("<div class=\"messager-body\"></div>").appendTo("body");
dlg.dialog($.extend({},_2c0,{noheader:(_2c0.title?false:true),onClose:function(){
_2bb();
if(_2c0.onClose){
_2c0.onClose.call(this);
}
setTimeout(function(){
dlg.dialog("destroy");
},100);
}}));
var win=dlg.dialog("dialog").addClass("messager-window");
win.find(".dialog-button").addClass("messager-button").find("a:first").focus();
return dlg;
};
function _2ba(dlg,_2c1){
dlg.dialog("close");
dlg.dialog("options").fn(_2c1);
};
$.messager={show:function(_2c2){
return _2bc(_2c2);
},alert:function(_2c3,msg,icon,fn){
var opts=typeof _2c3=="object"?_2c3:{title:_2c3,msg:msg,icon:icon,fn:fn};
var cls=opts.icon?"messager-icon messager-"+opts.icon:"";
opts=$.extend({},$.messager.defaults,{content:"<div class=\""+cls+"\"></div>"+"<div>"+opts.msg+"</div>"+"<div style=\"clear:both;\"/>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2ba(dlg);
}}];
}
var dlg=_2bf(opts);
return dlg;
},confirm:function(_2c4,msg,fn){
var opts=typeof _2c4=="object"?_2c4:{title:_2c4,msg:msg,fn:fn};
opts=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+opts.msg+"</div>"+"<div style=\"clear:both;\"/>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2ba(dlg,true);
}},{text:opts.cancel,onClick:function(){
_2ba(dlg,false);
}}];
}
var dlg=_2bf(opts);
return dlg;
},prompt:function(_2c5,msg,fn){
var opts=typeof _2c5=="object"?_2c5:{title:_2c5,msg:msg,fn:fn};
opts=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+opts.msg+"</div>"+"<br/>"+"<div style=\"clear:both;\"/>"+"<div><input class=\"messager-input\" type=\"text\"/></div>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2ba(dlg,dlg.find(".messager-input").val());
}},{text:opts.cancel,onClick:function(){
_2ba(dlg);
}}];
}
var dlg=_2bf(opts);
dlg.find(".messager-input").focus();
return dlg;
},progress:function(_2c6){
var _2c7={bar:function(){
return $("body>div.messager-window").find("div.messager-p-bar");
},close:function(){
var dlg=$("body>div.messager-window>div.messager-body:has(div.messager-progress)");
if(dlg.length){
dlg.dialog("close");
}
}};
if(typeof _2c6=="string"){
var _2c8=_2c7[_2c6];
return _2c8();
}
_2c6=_2c6||{};
var opts=$.extend({},{title:"",minHeight:0,content:undefined,msg:"",text:undefined,interval:300},_2c6);
var dlg=_2bf($.extend({},$.messager.defaults,{content:"<div class=\"messager-progress\"><div class=\"messager-p-msg\">"+opts.msg+"</div><div class=\"messager-p-bar\"></div></div>",closable:false,doSize:false},opts,{onClose:function(){
if(this.timer){
clearInterval(this.timer);
}
if(_2c6.onClose){
_2c6.onClose.call(this);
}else{
$.messager.defaults.onClose.call(this);
}
}}));
var bar=dlg.find("div.messager-p-bar");
bar.progressbar({text:opts.text});
dlg.dialog("resize");
if(opts.interval){
dlg[0].timer=setInterval(function(){
var v=bar.progressbar("getValue");
v+=10;
if(v>100){
v=0;
}
bar.progressbar("setValue",v);
},opts.interval);
}
return dlg;
}};
$.messager.defaults=$.extend({},$.fn.dialog.defaults,{ok:"Ok",cancel:"Cancel",width:300,height:"auto",minHeight:150,modal:true,collapsible:false,minimizable:false,maximizable:false,resizable:false,fn:function(){
}});
})(jQuery);
(function($){
function _2c9(_2ca,_2cb){
var _2cc=$.data(_2ca,"accordion");
var opts=_2cc.options;
var _2cd=_2cc.panels;
var cc=$(_2ca);
if(_2cb){
$.extend(opts,{width:_2cb.width,height:_2cb.height});
}
cc._size(opts);
var _2ce=0;
var _2cf="auto";
var _2d0=cc.find(">.panel>.accordion-header");
if(_2d0.length){
_2ce=$(_2d0[0]).css("height","")._outerHeight();
}
if(!isNaN(parseInt(opts.height))){
_2cf=cc.height()-_2ce*_2d0.length;
}
_2d1(true,_2cf-_2d1(false)+1);
function _2d1(_2d2,_2d3){
var _2d4=0;
for(var i=0;i<_2cd.length;i++){
var p=_2cd[i];
var h=p.panel("header")._outerHeight(_2ce);
if(p.panel("options").collapsible==_2d2){
var _2d5=isNaN(_2d3)?undefined:(_2d3+_2ce*h.length);
p.panel("resize",{width:cc.width(),height:(_2d2?_2d5:undefined)});
_2d4+=p.panel("panel").outerHeight()-_2ce*h.length;
}
}
return _2d4;
};
};
function _2d6(_2d7,_2d8,_2d9,all){
var _2da=$.data(_2d7,"accordion").panels;
var pp=[];
for(var i=0;i<_2da.length;i++){
var p=_2da[i];
if(_2d8){
if(p.panel("options")[_2d8]==_2d9){
pp.push(p);
}
}else{
if(p[0]==$(_2d9)[0]){
return i;
}
}
}
if(_2d8){
return all?pp:(pp.length?pp[0]:null);
}else{
return -1;
}
};
function _2db(_2dc){
return _2d6(_2dc,"collapsed",false,true);
};
function _2dd(_2de){
var pp=_2db(_2de);
return pp.length?pp[0]:null;
};
function _2df(_2e0,_2e1){
return _2d6(_2e0,null,_2e1);
};
function _2e2(_2e3,_2e4){
var _2e5=$.data(_2e3,"accordion").panels;
if(typeof _2e4=="number"){
if(_2e4<0||_2e4>=_2e5.length){
return null;
}else{
return _2e5[_2e4];
}
}
return _2d6(_2e3,"title",_2e4);
};
function _2e6(_2e7){
var opts=$.data(_2e7,"accordion").options;
var cc=$(_2e7);
if(opts.border){
cc.removeClass("accordion-noborder");
}else{
cc.addClass("accordion-noborder");
}
};
function init(_2e8){
var _2e9=$.data(_2e8,"accordion");
var cc=$(_2e8);
cc.addClass("accordion");
_2e9.panels=[];
cc.children("div").each(function(){
var opts=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
var pp=$(this);
_2e9.panels.push(pp);
_2eb(_2e8,pp,opts);
});
cc.bind("_resize",function(e,_2ea){
if($(this).hasClass("easyui-fluid")||_2ea){
_2c9(_2e8);
}
return false;
});
};
function _2eb(_2ec,pp,_2ed){
var opts=$.data(_2ec,"accordion").options;
pp.panel($.extend({},{collapsible:true,minimizable:false,maximizable:false,closable:false,doSize:false,collapsed:true,headerCls:"accordion-header",bodyCls:"accordion-body"},_2ed,{onBeforeExpand:function(){
if(_2ed.onBeforeExpand){
if(_2ed.onBeforeExpand.call(this)==false){
return false;
}
}
if(!opts.multiple){
var all=$.grep(_2db(_2ec),function(p){
return p.panel("options").collapsible;
});
for(var i=0;i<all.length;i++){
_2f5(_2ec,_2df(_2ec,all[i]));
}
}
var _2ee=$(this).panel("header");
_2ee.addClass("accordion-header-selected");
_2ee.find(".accordion-collapse").removeClass("accordion-expand");
},onExpand:function(){
if(_2ed.onExpand){
_2ed.onExpand.call(this);
}
opts.onSelect.call(_2ec,$(this).panel("options").title,_2df(_2ec,this));
},onBeforeCollapse:function(){
if(_2ed.onBeforeCollapse){
if(_2ed.onBeforeCollapse.call(this)==false){
return false;
}
}
var _2ef=$(this).panel("header");
_2ef.removeClass("accordion-header-selected");
_2ef.find(".accordion-collapse").addClass("accordion-expand");
},onCollapse:function(){
if(_2ed.onCollapse){
_2ed.onCollapse.call(this);
}
opts.onUnselect.call(_2ec,$(this).panel("options").title,_2df(_2ec,this));
}}));
var _2f0=pp.panel("header");
var tool=_2f0.children("div.panel-tool");
tool.children("a.panel-tool-collapse").hide();
var t=$("<a href=\"javascript:;\"></a>").addClass("accordion-collapse accordion-expand").appendTo(tool);
t.bind("click",function(){
_2f1(pp);
return false;
});
pp.panel("options").collapsible?t.show():t.hide();
_2f0.click(function(){
_2f1(pp);
return false;
});
function _2f1(p){
var _2f2=p.panel("options");
if(_2f2.collapsible){
var _2f3=_2df(_2ec,p);
if(_2f2.collapsed){
_2f4(_2ec,_2f3);
}else{
_2f5(_2ec,_2f3);
}
}
};
};
function _2f4(_2f6,_2f7){
var p=_2e2(_2f6,_2f7);
if(!p){
return;
}
_2f8(_2f6);
var opts=$.data(_2f6,"accordion").options;
p.panel("expand",opts.animate);
};
function _2f5(_2f9,_2fa){
var p=_2e2(_2f9,_2fa);
if(!p){
return;
}
_2f8(_2f9);
var opts=$.data(_2f9,"accordion").options;
p.panel("collapse",opts.animate);
};
function _2fb(_2fc){
var opts=$.data(_2fc,"accordion").options;
var p=_2d6(_2fc,"selected",true);
if(p){
_2fd(_2df(_2fc,p));
}else{
_2fd(opts.selected);
}
function _2fd(_2fe){
var _2ff=opts.animate;
opts.animate=false;
_2f4(_2fc,_2fe);
opts.animate=_2ff;
};
};
function _2f8(_300){
var _301=$.data(_300,"accordion").panels;
for(var i=0;i<_301.length;i++){
_301[i].stop(true,true);
}
};
function add(_302,_303){
var _304=$.data(_302,"accordion");
var opts=_304.options;
var _305=_304.panels;
if(_303.selected==undefined){
_303.selected=true;
}
_2f8(_302);
var pp=$("<div></div>").appendTo(_302);
_305.push(pp);
_2eb(_302,pp,_303);
_2c9(_302);
opts.onAdd.call(_302,_303.title,_305.length-1);
if(_303.selected){
_2f4(_302,_305.length-1);
}
};
function _306(_307,_308){
var _309=$.data(_307,"accordion");
var opts=_309.options;
var _30a=_309.panels;
_2f8(_307);
var _30b=_2e2(_307,_308);
var _30c=_30b.panel("options").title;
var _30d=_2df(_307,_30b);
if(!_30b){
return;
}
if(opts.onBeforeRemove.call(_307,_30c,_30d)==false){
return;
}
_30a.splice(_30d,1);
_30b.panel("destroy");
if(_30a.length){
_2c9(_307);
var curr=_2dd(_307);
if(!curr){
_2f4(_307,0);
}
}
opts.onRemove.call(_307,_30c,_30d);
};
$.fn.accordion=function(_30e,_30f){
if(typeof _30e=="string"){
return $.fn.accordion.methods[_30e](this,_30f);
}
_30e=_30e||{};
return this.each(function(){
var _310=$.data(this,"accordion");
if(_310){
$.extend(_310.options,_30e);
}else{
$.data(this,"accordion",{options:$.extend({},$.fn.accordion.defaults,$.fn.accordion.parseOptions(this),_30e),accordion:$(this).addClass("accordion"),panels:[]});
init(this);
}
_2e6(this);
_2c9(this);
_2fb(this);
});
};
$.fn.accordion.methods={options:function(jq){
return $.data(jq[0],"accordion").options;
},panels:function(jq){
return $.data(jq[0],"accordion").panels;
},resize:function(jq,_311){
return jq.each(function(){
_2c9(this,_311);
});
},getSelections:function(jq){
return _2db(jq[0]);
},getSelected:function(jq){
return _2dd(jq[0]);
},getPanel:function(jq,_312){
return _2e2(jq[0],_312);
},getPanelIndex:function(jq,_313){
return _2df(jq[0],_313);
},select:function(jq,_314){
return jq.each(function(){
_2f4(this,_314);
});
},unselect:function(jq,_315){
return jq.each(function(){
_2f5(this,_315);
});
},add:function(jq,_316){
return jq.each(function(){
add(this,_316);
});
},remove:function(jq,_317){
return jq.each(function(){
_306(this,_317);
});
}};
$.fn.accordion.parseOptions=function(_318){
var t=$(_318);
return $.extend({},$.parser.parseOptions(_318,["width","height",{fit:"boolean",border:"boolean",animate:"boolean",multiple:"boolean",selected:"number"}]));
};
$.fn.accordion.defaults={width:"auto",height:"auto",fit:false,border:true,animate:true,multiple:false,selected:0,onSelect:function(_319,_31a){
},onUnselect:function(_31b,_31c){
},onAdd:function(_31d,_31e){
},onBeforeRemove:function(_31f,_320){
},onRemove:function(_321,_322){
}};
})(jQuery);
(function($){
function _323(c){
var w=0;
$(c).children().each(function(){
w+=$(this).outerWidth(true);
});
return w;
};
function _324(_325){
var opts=$.data(_325,"tabs").options;
if(opts.tabPosition=="left"||opts.tabPosition=="right"||!opts.showHeader){
return;
}
var _326=$(_325).children("div.tabs-header");
var tool=_326.children("div.tabs-tool:not(.tabs-tool-hidden)");
var _327=_326.children("div.tabs-scroller-left");
var _328=_326.children("div.tabs-scroller-right");
var wrap=_326.children("div.tabs-wrap");
var _329=_326.outerHeight();
if(opts.plain){
_329-=_329-_326.height();
}
tool._outerHeight(_329);
var _32a=_323(_326.find("ul.tabs"));
var _32b=_326.width()-tool._outerWidth();
if(_32a>_32b){
_327.add(_328).show()._outerHeight(_329);
if(opts.toolPosition=="left"){
tool.css({left:_327.outerWidth(),right:""});
wrap.css({marginLeft:_327.outerWidth()+tool._outerWidth(),marginRight:_328._outerWidth(),width:_32b-_327.outerWidth()-_328.outerWidth()});
}else{
tool.css({left:"",right:_328.outerWidth()});
wrap.css({marginLeft:_327.outerWidth(),marginRight:_328.outerWidth()+tool._outerWidth(),width:_32b-_327.outerWidth()-_328.outerWidth()});
}
}else{
_327.add(_328).hide();
if(opts.toolPosition=="left"){
tool.css({left:0,right:""});
wrap.css({marginLeft:tool._outerWidth(),marginRight:0,width:_32b});
}else{
tool.css({left:"",right:0});
wrap.css({marginLeft:0,marginRight:tool._outerWidth(),width:_32b});
}
}
};
function _32c(_32d){
var opts=$.data(_32d,"tabs").options;
var _32e=$(_32d).children("div.tabs-header");
if(opts.tools){
if(typeof opts.tools=="string"){
$(opts.tools).addClass("tabs-tool").appendTo(_32e);
$(opts.tools).show();
}else{
_32e.children("div.tabs-tool").remove();
var _32f=$("<div class=\"tabs-tool\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"height:100%\"><tr></tr></table></div>").appendTo(_32e);
var tr=_32f.find("tr");
for(var i=0;i<opts.tools.length;i++){
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:;\"></a>").appendTo(td);
tool[0].onclick=eval(opts.tools[i].handler||function(){
});
tool.linkbutton($.extend({},opts.tools[i],{plain:true}));
}
}
}else{
_32e.children("div.tabs-tool").remove();
}
};
function _330(_331,_332){
var _333=$.data(_331,"tabs");
var opts=_333.options;
var cc=$(_331);
if(!opts.doSize){
return;
}
if(_332){
$.extend(opts,{width:_332.width,height:_332.height});
}
cc._size(opts);
var _334=cc.children("div.tabs-header");
var _335=cc.children("div.tabs-panels");
var wrap=_334.find("div.tabs-wrap");
var ul=wrap.find(".tabs");
ul.children("li").removeClass("tabs-first tabs-last");
ul.children("li:first").addClass("tabs-first");
ul.children("li:last").addClass("tabs-last");
if(opts.tabPosition=="left"||opts.tabPosition=="right"){
_334._outerWidth(opts.showHeader?opts.headerWidth:0);
_335._outerWidth(cc.width()-_334.outerWidth());
_334.add(_335)._size("height",isNaN(parseInt(opts.height))?"":cc.height());
wrap._outerWidth(_334.width());
ul._outerWidth(wrap.width()).css("height","");
}else{
_334.children("div.tabs-scroller-left,div.tabs-scroller-right,div.tabs-tool:not(.tabs-tool-hidden)").css("display",opts.showHeader?"block":"none");
_334._outerWidth(cc.width()).css("height","");
if(opts.showHeader){
_334.css("background-color","");
wrap.css("height","");
}else{
_334.css("background-color","transparent");
_334._outerHeight(0);
wrap._outerHeight(0);
}
ul._outerHeight(opts.tabHeight).css("width","");
ul._outerHeight(ul.outerHeight()-ul.height()-1+opts.tabHeight).css("width","");
_335._size("height",isNaN(parseInt(opts.height))?"":(cc.height()-_334.outerHeight()));
_335._size("width",cc.width());
}
if(_333.tabs.length){
var d1=ul.outerWidth(true)-ul.width();
var li=ul.children("li:first");
var d2=li.outerWidth(true)-li.width();
var _336=_334.width()-_334.children(".tabs-tool:not(.tabs-tool-hidden)")._outerWidth();
var _337=Math.floor((_336-d1-d2*_333.tabs.length)/_333.tabs.length);
$.map(_333.tabs,function(p){
_338(p,(opts.justified&&$.inArray(opts.tabPosition,["top","bottom"])>=0)?_337:undefined);
});
if(opts.justified&&$.inArray(opts.tabPosition,["top","bottom"])>=0){
var _339=_336-d1-_323(ul);
_338(_333.tabs[_333.tabs.length-1],_337+_339);
}
}
_324(_331);
function _338(p,_33a){
var _33b=p.panel("options");
var p_t=_33b.tab.find("a.tabs-inner");
var _33a=_33a?_33a:(parseInt(_33b.tabWidth||opts.tabWidth||undefined));
if(_33a){
p_t._outerWidth(_33a);
}else{
p_t.css("width","");
}
p_t._outerHeight(opts.tabHeight);
p_t.css("lineHeight",p_t.height()+"px");
p_t.find(".easyui-fluid:visible").triggerHandler("_resize");
};
};
function _33c(_33d){
var opts=$.data(_33d,"tabs").options;
var tab=_33e(_33d);
if(tab){
var _33f=$(_33d).children("div.tabs-panels");
var _340=opts.width=="auto"?"auto":_33f.width();
var _341=opts.height=="auto"?"auto":_33f.height();
tab.panel("resize",{width:_340,height:_341});
}
};
function _342(_343){
var tabs=$.data(_343,"tabs").tabs;
var cc=$(_343).addClass("tabs-container");
var _344=$("<div class=\"tabs-panels\"></div>").insertBefore(cc);
cc.children("div").each(function(){
_344[0].appendChild(this);
});
cc[0].appendChild(_344[0]);
$("<div class=\"tabs-header\">"+"<div class=\"tabs-scroller-left\"></div>"+"<div class=\"tabs-scroller-right\"></div>"+"<div class=\"tabs-wrap\">"+"<ul class=\"tabs\"></ul>"+"</div>"+"</div>").prependTo(_343);
cc.children("div.tabs-panels").children("div").each(function(i){
var opts=$.extend({},$.parser.parseOptions(this),{disabled:($(this).attr("disabled")?true:undefined),selected:($(this).attr("selected")?true:undefined)});
_351(_343,opts,$(this));
});
cc.children("div.tabs-header").find(".tabs-scroller-left, .tabs-scroller-right").hover(function(){
$(this).addClass("tabs-scroller-over");
},function(){
$(this).removeClass("tabs-scroller-over");
});
cc.bind("_resize",function(e,_345){
if($(this).hasClass("easyui-fluid")||_345){
_330(_343);
_33c(_343);
}
return false;
});
};
function _346(_347){
var _348=$.data(_347,"tabs");
var opts=_348.options;
$(_347).children("div.tabs-header").unbind().bind("click",function(e){
if($(e.target).hasClass("tabs-scroller-left")){
$(_347).tabs("scrollBy",-opts.scrollIncrement);
}else{
if($(e.target).hasClass("tabs-scroller-right")){
$(_347).tabs("scrollBy",opts.scrollIncrement);
}else{
var li=$(e.target).closest("li");
if(li.hasClass("tabs-disabled")){
return false;
}
var a=$(e.target).closest("a.tabs-close");
if(a.length){
_36a(_347,_349(li));
}else{
if(li.length){
var _34a=_349(li);
var _34b=_348.tabs[_34a].panel("options");
if(_34b.collapsible){
_34b.closed?_361(_347,_34a):_37e(_347,_34a);
}else{
_361(_347,_34a);
}
}
}
return false;
}
}
}).bind("contextmenu",function(e){
var li=$(e.target).closest("li");
if(li.hasClass("tabs-disabled")){
return;
}
if(li.length){
opts.onContextMenu.call(_347,e,li.find("span.tabs-title").html(),_349(li));
}
});
function _349(li){
var _34c=0;
li.parent().children("li").each(function(i){
if(li[0]==this){
_34c=i;
return false;
}
});
return _34c;
};
};
function _34d(_34e){
var opts=$.data(_34e,"tabs").options;
var _34f=$(_34e).children("div.tabs-header");
var _350=$(_34e).children("div.tabs-panels");
_34f.removeClass("tabs-header-top tabs-header-bottom tabs-header-left tabs-header-right");
_350.removeClass("tabs-panels-top tabs-panels-bottom tabs-panels-left tabs-panels-right");
if(opts.tabPosition=="top"){
_34f.insertBefore(_350);
}else{
if(opts.tabPosition=="bottom"){
_34f.insertAfter(_350);
_34f.addClass("tabs-header-bottom");
_350.addClass("tabs-panels-top");
}else{
if(opts.tabPosition=="left"){
_34f.addClass("tabs-header-left");
_350.addClass("tabs-panels-right");
}else{
if(opts.tabPosition=="right"){
_34f.addClass("tabs-header-right");
_350.addClass("tabs-panels-left");
}
}
}
}
if(opts.plain==true){
_34f.addClass("tabs-header-plain");
}else{
_34f.removeClass("tabs-header-plain");
}
_34f.removeClass("tabs-header-narrow").addClass(opts.narrow?"tabs-header-narrow":"");
var tabs=_34f.find(".tabs");
tabs.removeClass("tabs-pill").addClass(opts.pill?"tabs-pill":"");
tabs.removeClass("tabs-narrow").addClass(opts.narrow?"tabs-narrow":"");
tabs.removeClass("tabs-justified").addClass(opts.justified?"tabs-justified":"");
if(opts.border==true){
_34f.removeClass("tabs-header-noborder");
_350.removeClass("tabs-panels-noborder");
}else{
_34f.addClass("tabs-header-noborder");
_350.addClass("tabs-panels-noborder");
}
opts.doSize=true;
};
function _351(_352,_353,pp){
_353=_353||{};
var _354=$.data(_352,"tabs");
var tabs=_354.tabs;
if(_353.index==undefined||_353.index>tabs.length){
_353.index=tabs.length;
}
if(_353.index<0){
_353.index=0;
}
var ul=$(_352).children("div.tabs-header").find("ul.tabs");
var _355=$(_352).children("div.tabs-panels");
var tab=$("<li>"+"<a href=\"javascript:;\" class=\"tabs-inner\">"+"<span class=\"tabs-title\"></span>"+"<span class=\"tabs-icon\"></span>"+"</a>"+"</li>");
if(!pp){
pp=$("<div></div>");
}
if(_353.index>=tabs.length){
tab.appendTo(ul);
pp.appendTo(_355);
tabs.push(pp);
}else{
tab.insertBefore(ul.children("li:eq("+_353.index+")"));
pp.insertBefore(_355.children("div.panel:eq("+_353.index+")"));
tabs.splice(_353.index,0,pp);
}
pp.panel($.extend({},_353,{tab:tab,border:false,noheader:true,closed:true,doSize:false,iconCls:(_353.icon?_353.icon:undefined),onLoad:function(){
if(_353.onLoad){
_353.onLoad.call(this,arguments);
}
_354.options.onLoad.call(_352,$(this));
},onBeforeOpen:function(){
if(_353.onBeforeOpen){
if(_353.onBeforeOpen.call(this)==false){
return false;
}
}
var p=$(_352).tabs("getSelected");
if(p){
if(p[0]!=this){
$(_352).tabs("unselect",_35c(_352,p));
p=$(_352).tabs("getSelected");
if(p){
return false;
}
}else{
_33c(_352);
return false;
}
}
var _356=$(this).panel("options");
_356.tab.addClass("tabs-selected");
var wrap=$(_352).find(">div.tabs-header>div.tabs-wrap");
var left=_356.tab.position().left;
var _357=left+_356.tab.outerWidth();
if(left<0||_357>wrap.width()){
var _358=left-(wrap.width()-_356.tab.width())/2;
$(_352).tabs("scrollBy",_358);
}else{
$(_352).tabs("scrollBy",0);
}
var _359=$(this).panel("panel");
_359.css("display","block");
_33c(_352);
_359.css("display","none");
},onOpen:function(){
if(_353.onOpen){
_353.onOpen.call(this);
}
var _35a=$(this).panel("options");
_354.selectHis.push(_35a.title);
_354.options.onSelect.call(_352,_35a.title,_35c(_352,this));
},onBeforeClose:function(){
if(_353.onBeforeClose){
if(_353.onBeforeClose.call(this)==false){
return false;
}
}
$(this).panel("options").tab.removeClass("tabs-selected");
},onClose:function(){
if(_353.onClose){
_353.onClose.call(this);
}
var _35b=$(this).panel("options");
_354.options.onUnselect.call(_352,_35b.title,_35c(_352,this));
}}));
$(_352).tabs("update",{tab:pp,options:pp.panel("options"),type:"header"});
};
function _35d(_35e,_35f){
var _360=$.data(_35e,"tabs");
var opts=_360.options;
if(_35f.selected==undefined){
_35f.selected=true;
}
_351(_35e,_35f);
opts.onAdd.call(_35e,_35f.title,_35f.index);
if(_35f.selected){
_361(_35e,_35f.index);
}
};
function _362(_363,_364){
_364.type=_364.type||"all";
var _365=$.data(_363,"tabs").selectHis;
var pp=_364.tab;
var opts=pp.panel("options");
var _366=opts.title;
$.extend(opts,_364.options,{iconCls:(_364.options.icon?_364.options.icon:undefined)});
if(_364.type=="all"||_364.type=="body"){
pp.panel();
}
if(_364.type=="all"||_364.type=="header"){
var tab=opts.tab;
if(opts.header){
tab.find(".tabs-inner").html($(opts.header));
}else{
var _367=tab.find("span.tabs-title");
var _368=tab.find("span.tabs-icon");
_367.html(opts.title);
_368.attr("class","tabs-icon");
tab.find("a.tabs-close").remove();
if(opts.closable){
_367.addClass("tabs-closable");
$("<a href=\"javascript:;\" class=\"tabs-close\"></a>").appendTo(tab);
}else{
_367.removeClass("tabs-closable");
}
if(opts.iconCls){
_367.addClass("tabs-with-icon");
_368.addClass(opts.iconCls);
}else{
_367.removeClass("tabs-with-icon");
}
if(opts.tools){
var _369=tab.find("span.tabs-p-tool");
if(!_369.length){
var _369=$("<span class=\"tabs-p-tool\"></span>").insertAfter(tab.find("a.tabs-inner"));
}
if($.isArray(opts.tools)){
_369.empty();
for(var i=0;i<opts.tools.length;i++){
var t=$("<a href=\"javascript:;\"></a>").appendTo(_369);
t.addClass(opts.tools[i].iconCls);
if(opts.tools[i].handler){
t.bind("click",{handler:opts.tools[i].handler},function(e){
if($(this).parents("li").hasClass("tabs-disabled")){
return;
}
e.data.handler.call(this);
});
}
}
}else{
$(opts.tools).children().appendTo(_369);
}
var pr=_369.children().length*12;
if(opts.closable){
pr+=8;
_369.css("right","");
}else{
pr-=3;
_369.css("right","5px");
}
_367.css("padding-right",pr+"px");
}else{
tab.find("span.tabs-p-tool").remove();
_367.css("padding-right","");
}
}
if(_366!=opts.title){
for(var i=0;i<_365.length;i++){
if(_365[i]==_366){
_365[i]=opts.title;
}
}
}
}
if(opts.disabled){
opts.tab.addClass("tabs-disabled");
}else{
opts.tab.removeClass("tabs-disabled");
}
_330(_363);
$.data(_363,"tabs").options.onUpdate.call(_363,opts.title,_35c(_363,pp));
};
function _36a(_36b,_36c){
var opts=$.data(_36b,"tabs").options;
var tabs=$.data(_36b,"tabs").tabs;
var _36d=$.data(_36b,"tabs").selectHis;
if(!_36e(_36b,_36c)){
return;
}
var tab=_36f(_36b,_36c);
var _370=tab.panel("options").title;
var _371=_35c(_36b,tab);
if(opts.onBeforeClose.call(_36b,_370,_371)==false){
return;
}
var tab=_36f(_36b,_36c,true);
tab.panel("options").tab.remove();
tab.panel("destroy");
opts.onClose.call(_36b,_370,_371);
_330(_36b);
for(var i=0;i<_36d.length;i++){
if(_36d[i]==_370){
_36d.splice(i,1);
i--;
}
}
var _372=_36d.pop();
if(_372){
_361(_36b,_372);
}else{
if(tabs.length){
_361(_36b,0);
}
}
};
function _36f(_373,_374,_375){
var tabs=$.data(_373,"tabs").tabs;
var tab=null;
if(typeof _374=="number"){
if(_374>=0&&_374<tabs.length){
tab=tabs[_374];
if(_375){
tabs.splice(_374,1);
}
}
}else{
var tmp=$("<span></span>");
for(var i=0;i<tabs.length;i++){
var p=tabs[i];
tmp.html(p.panel("options").title);
if(tmp.text()==_374){
tab=p;
if(_375){
tabs.splice(i,1);
}
break;
}
}
tmp.remove();
}
return tab;
};
function _35c(_376,tab){
var tabs=$.data(_376,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
if(tabs[i][0]==$(tab)[0]){
return i;
}
}
return -1;
};
function _33e(_377){
var tabs=$.data(_377,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
var tab=tabs[i];
if(tab.panel("options").tab.hasClass("tabs-selected")){
return tab;
}
}
return null;
};
function _378(_379){
var _37a=$.data(_379,"tabs");
var tabs=_37a.tabs;
for(var i=0;i<tabs.length;i++){
var opts=tabs[i].panel("options");
if(opts.selected&&!opts.disabled){
_361(_379,i);
return;
}
}
_361(_379,_37a.options.selected);
};
function _361(_37b,_37c){
var p=_36f(_37b,_37c);
if(p&&!p.is(":visible")){
_37d(_37b);
if(!p.panel("options").disabled){
p.panel("open");
}
}
};
function _37e(_37f,_380){
var p=_36f(_37f,_380);
if(p&&p.is(":visible")){
_37d(_37f);
p.panel("close");
}
};
function _37d(_381){
$(_381).children("div.tabs-panels").each(function(){
$(this).stop(true,true);
});
};
function _36e(_382,_383){
return _36f(_382,_383)!=null;
};
function _384(_385,_386){
var opts=$.data(_385,"tabs").options;
opts.showHeader=_386;
$(_385).tabs("resize");
};
function _387(_388,_389){
var tool=$(_388).find(">.tabs-header>.tabs-tool");
if(_389){
tool.removeClass("tabs-tool-hidden").show();
}else{
tool.addClass("tabs-tool-hidden").hide();
}
$(_388).tabs("resize").tabs("scrollBy",0);
};
$.fn.tabs=function(_38a,_38b){
if(typeof _38a=="string"){
return $.fn.tabs.methods[_38a](this,_38b);
}
_38a=_38a||{};
return this.each(function(){
var _38c=$.data(this,"tabs");
if(_38c){
$.extend(_38c.options,_38a);
}else{
$.data(this,"tabs",{options:$.extend({},$.fn.tabs.defaults,$.fn.tabs.parseOptions(this),_38a),tabs:[],selectHis:[]});
_342(this);
}
_32c(this);
_34d(this);
_330(this);
_346(this);
_378(this);
});
};
$.fn.tabs.methods={options:function(jq){
var cc=jq[0];
var opts=$.data(cc,"tabs").options;
var s=_33e(cc);
opts.selected=s?_35c(cc,s):-1;
return opts;
},tabs:function(jq){
return $.data(jq[0],"tabs").tabs;
},resize:function(jq,_38d){
return jq.each(function(){
_330(this,_38d);
_33c(this);
});
},add:function(jq,_38e){
return jq.each(function(){
_35d(this,_38e);
});
},close:function(jq,_38f){
return jq.each(function(){
_36a(this,_38f);
});
},getTab:function(jq,_390){
return _36f(jq[0],_390);
},getTabIndex:function(jq,tab){
return _35c(jq[0],tab);
},getSelected:function(jq){
return _33e(jq[0]);
},select:function(jq,_391){
return jq.each(function(){
_361(this,_391);
});
},unselect:function(jq,_392){
return jq.each(function(){
_37e(this,_392);
});
},exists:function(jq,_393){
return _36e(jq[0],_393);
},update:function(jq,_394){
return jq.each(function(){
_362(this,_394);
});
},enableTab:function(jq,_395){
return jq.each(function(){
var opts=$(this).tabs("getTab",_395).panel("options");
opts.tab.removeClass("tabs-disabled");
opts.disabled=false;
});
},disableTab:function(jq,_396){
return jq.each(function(){
var opts=$(this).tabs("getTab",_396).panel("options");
opts.tab.addClass("tabs-disabled");
opts.disabled=true;
});
},showHeader:function(jq){
return jq.each(function(){
_384(this,true);
});
},hideHeader:function(jq){
return jq.each(function(){
_384(this,false);
});
},showTool:function(jq){
return jq.each(function(){
_387(this,true);
});
},hideTool:function(jq){
return jq.each(function(){
_387(this,false);
});
},scrollBy:function(jq,_397){
return jq.each(function(){
var opts=$(this).tabs("options");
var wrap=$(this).find(">div.tabs-header>div.tabs-wrap");
var pos=Math.min(wrap._scrollLeft()+_397,_398());
wrap.animate({scrollLeft:pos},opts.scrollDuration);
function _398(){
var w=0;
var ul=wrap.children("ul");
ul.children("li").each(function(){
w+=$(this).outerWidth(true);
});
return w-wrap.width()+(ul.outerWidth()-ul.width());
};
});
}};
$.fn.tabs.parseOptions=function(_399){
return $.extend({},$.parser.parseOptions(_399,["tools","toolPosition","tabPosition",{fit:"boolean",border:"boolean",plain:"boolean"},{headerWidth:"number",tabWidth:"number",tabHeight:"number",selected:"number"},{showHeader:"boolean",justified:"boolean",narrow:"boolean",pill:"boolean"}]));
};
$.fn.tabs.defaults={width:"auto",height:"auto",headerWidth:150,tabWidth:"auto",tabHeight:27,selected:0,showHeader:true,plain:false,fit:false,border:true,justified:false,narrow:false,pill:false,tools:null,toolPosition:"right",tabPosition:"top",scrollIncrement:100,scrollDuration:400,onLoad:function(_39a){
},onSelect:function(_39b,_39c){
},onUnselect:function(_39d,_39e){
},onBeforeClose:function(_39f,_3a0){
},onClose:function(_3a1,_3a2){
},onAdd:function(_3a3,_3a4){
},onUpdate:function(_3a5,_3a6){
},onContextMenu:function(e,_3a7,_3a8){
}};
})(jQuery);
(function($){
var _3a9=false;
function _3aa(_3ab,_3ac){
var _3ad=$.data(_3ab,"layout");
var opts=_3ad.options;
var _3ae=_3ad.panels;
var cc=$(_3ab);
if(_3ac){
$.extend(opts,{width:_3ac.width,height:_3ac.height});
}
if(_3ab.tagName.toLowerCase()=="body"){
cc._size("fit");
}else{
cc._size(opts);
}
var cpos={top:0,left:0,width:cc.width(),height:cc.height()};
_3af(_3b0(_3ae.expandNorth)?_3ae.expandNorth:_3ae.north,"n");
_3af(_3b0(_3ae.expandSouth)?_3ae.expandSouth:_3ae.south,"s");
_3b1(_3b0(_3ae.expandEast)?_3ae.expandEast:_3ae.east,"e");
_3b1(_3b0(_3ae.expandWest)?_3ae.expandWest:_3ae.west,"w");
_3ae.center.panel("resize",cpos);
function _3af(pp,type){
if(!pp.length||!_3b0(pp)){
return;
}
var opts=pp.panel("options");
pp.panel("resize",{width:cc.width(),height:opts.height});
var _3b2=pp.panel("panel").outerHeight();
pp.panel("move",{left:0,top:(type=="n"?0:cc.height()-_3b2)});
cpos.height-=_3b2;
if(type=="n"){
cpos.top+=_3b2;
if(!opts.split&&opts.border){
cpos.top--;
}
}
if(!opts.split&&opts.border){
cpos.height++;
}
};
function _3b1(pp,type){
if(!pp.length||!_3b0(pp)){
return;
}
var opts=pp.panel("options");
pp.panel("resize",{width:opts.width,height:cpos.height});
var _3b3=pp.panel("panel").outerWidth();
pp.panel("move",{left:(type=="e"?cc.width()-_3b3:0),top:cpos.top});
cpos.width-=_3b3;
if(type=="w"){
cpos.left+=_3b3;
if(!opts.split&&opts.border){
cpos.left--;
}
}
if(!opts.split&&opts.border){
cpos.width++;
}
};
};
function init(_3b4){
var cc=$(_3b4);
cc.addClass("layout");
function _3b5(el){
var _3b6=$.fn.layout.parsePanelOptions(el);
if("north,south,east,west,center".indexOf(_3b6.region)>=0){
_3b9(_3b4,_3b6,el);
}
};
var opts=cc.layout("options");
var _3b7=opts.onAdd;
opts.onAdd=function(){
};
cc.find(">div,>form>div").each(function(){
_3b5(this);
});
opts.onAdd=_3b7;
cc.append("<div class=\"layout-split-proxy-h\"></div><div class=\"layout-split-proxy-v\"></div>");
cc.bind("_resize",function(e,_3b8){
if($(this).hasClass("easyui-fluid")||_3b8){
_3aa(_3b4);
}
return false;
});
};
function _3b9(_3ba,_3bb,el){
_3bb.region=_3bb.region||"center";
var _3bc=$.data(_3ba,"layout").panels;
var cc=$(_3ba);
var dir=_3bb.region;
if(_3bc[dir].length){
return;
}
var pp=$(el);
if(!pp.length){
pp=$("<div></div>").appendTo(cc);
}
var _3bd=$.extend({},$.fn.layout.paneldefaults,{width:(pp.length?parseInt(pp[0].style.width)||pp.outerWidth():"auto"),height:(pp.length?parseInt(pp[0].style.height)||pp.outerHeight():"auto"),doSize:false,collapsible:true,onOpen:function(){
var tool=$(this).panel("header").children("div.panel-tool");
tool.children("a.panel-tool-collapse").hide();
var _3be={north:"up",south:"down",east:"right",west:"left"};
if(!_3be[dir]){
return;
}
var _3bf="layout-button-"+_3be[dir];
var t=tool.children("a."+_3bf);
if(!t.length){
t=$("<a href=\"javascript:;\"></a>").addClass(_3bf).appendTo(tool);
t.bind("click",{dir:dir},function(e){
_3cb(_3ba,e.data.dir);
return false;
});
}
$(this).panel("options").collapsible?t.show():t.hide();
}},_3bb,{cls:((_3bb.cls||"")+" layout-panel layout-panel-"+dir),bodyCls:((_3bb.bodyCls||"")+" layout-body")});
pp.panel(_3bd);
_3bc[dir]=pp;
var _3c0={north:"s",south:"n",east:"w",west:"e"};
var _3c1=pp.panel("panel");
if(pp.panel("options").split){
_3c1.addClass("layout-split-"+dir);
}
_3c1.resizable($.extend({},{handles:(_3c0[dir]||""),disabled:(!pp.panel("options").split),onStartResize:function(e){
_3a9=true;
if(dir=="north"||dir=="south"){
var _3c2=$(">div.layout-split-proxy-v",_3ba);
}else{
var _3c2=$(">div.layout-split-proxy-h",_3ba);
}
var top=0,left=0,_3c3=0,_3c4=0;
var pos={display:"block"};
if(dir=="north"){
pos.top=parseInt(_3c1.css("top"))+_3c1.outerHeight()-_3c2.height();
pos.left=parseInt(_3c1.css("left"));
pos.width=_3c1.outerWidth();
pos.height=_3c2.height();
}else{
if(dir=="south"){
pos.top=parseInt(_3c1.css("top"));
pos.left=parseInt(_3c1.css("left"));
pos.width=_3c1.outerWidth();
pos.height=_3c2.height();
}else{
if(dir=="east"){
pos.top=parseInt(_3c1.css("top"))||0;
pos.left=parseInt(_3c1.css("left"))||0;
pos.width=_3c2.width();
pos.height=_3c1.outerHeight();
}else{
if(dir=="west"){
pos.top=parseInt(_3c1.css("top"))||0;
pos.left=_3c1.outerWidth()-_3c2.width();
pos.width=_3c2.width();
pos.height=_3c1.outerHeight();
}
}
}
}
_3c2.css(pos);
$("<div class=\"layout-mask\"></div>").css({left:0,top:0,width:cc.width(),height:cc.height()}).appendTo(cc);
},onResize:function(e){
if(dir=="north"||dir=="south"){
var _3c5=$(">div.layout-split-proxy-v",_3ba);
_3c5.css("top",e.pageY-$(_3ba).offset().top-_3c5.height()/2);
}else{
var _3c5=$(">div.layout-split-proxy-h",_3ba);
_3c5.css("left",e.pageX-$(_3ba).offset().left-_3c5.width()/2);
}
return false;
},onStopResize:function(e){
cc.children("div.layout-split-proxy-v,div.layout-split-proxy-h").hide();
pp.panel("resize",e.data);
_3aa(_3ba);
_3a9=false;
cc.find(">div.layout-mask").remove();
}},_3bb));
cc.layout("options").onAdd.call(_3ba,dir);
};
function _3c6(_3c7,_3c8){
var _3c9=$.data(_3c7,"layout").panels;
if(_3c9[_3c8].length){
_3c9[_3c8].panel("destroy");
_3c9[_3c8]=$();
var _3ca="expand"+_3c8.substring(0,1).toUpperCase()+_3c8.substring(1);
if(_3c9[_3ca]){
_3c9[_3ca].panel("destroy");
_3c9[_3ca]=undefined;
}
$(_3c7).layout("options").onRemove.call(_3c7,_3c8);
}
};
function _3cb(_3cc,_3cd,_3ce){
if(_3ce==undefined){
_3ce="normal";
}
var _3cf=$.data(_3cc,"layout").panels;
var p=_3cf[_3cd];
var _3d0=p.panel("options");
if(_3d0.onBeforeCollapse.call(p)==false){
return;
}
var _3d1="expand"+_3cd.substring(0,1).toUpperCase()+_3cd.substring(1);
if(!_3cf[_3d1]){
_3cf[_3d1]=_3d2(_3cd);
var ep=_3cf[_3d1].panel("panel");
if(!_3d0.expandMode){
ep.css("cursor","default");
}else{
ep.bind("click",function(){
if(_3d0.expandMode=="dock"){
_3dd(_3cc,_3cd);
}else{
p.panel("expand",false).panel("open");
var _3d3=_3d4();
p.panel("resize",_3d3.collapse);
p.panel("panel").animate(_3d3.expand,function(){
$(this).unbind(".layout").bind("mouseleave.layout",{region:_3cd},function(e){
if(_3a9==true){
return;
}
if($("body>div.combo-p>div.combo-panel:visible").length){
return;
}
_3cb(_3cc,e.data.region);
});
$(_3cc).layout("options").onExpand.call(_3cc,_3cd);
});
}
return false;
});
}
}
var _3d5=_3d4();
if(!_3b0(_3cf[_3d1])){
_3cf.center.panel("resize",_3d5.resizeC);
}
p.panel("panel").animate(_3d5.collapse,_3ce,function(){
p.panel("collapse",false).panel("close");
_3cf[_3d1].panel("open").panel("resize",_3d5.expandP);
$(this).unbind(".layout");
$(_3cc).layout("options").onCollapse.call(_3cc,_3cd);
});
function _3d2(dir){
var _3d6={"east":"left","west":"right","north":"down","south":"up"};
var isns=(_3d0.region=="north"||_3d0.region=="south");
var icon="layout-button-"+_3d6[dir];
var p=$("<div></div>").appendTo(_3cc);
p.panel($.extend({},$.fn.layout.paneldefaults,{cls:("layout-expand layout-expand-"+dir),title:"&nbsp;",iconCls:(_3d0.hideCollapsedContent?null:_3d0.iconCls),closed:true,minWidth:0,minHeight:0,doSize:false,region:_3d0.region,collapsedSize:_3d0.collapsedSize,noheader:(!isns&&_3d0.hideExpandTool),tools:((isns&&_3d0.hideExpandTool)?null:[{iconCls:icon,handler:function(){
_3dd(_3cc,_3cd);
return false;
}}])}));
if(!_3d0.hideCollapsedContent){
var _3d7=typeof _3d0.collapsedContent=="function"?_3d0.collapsedContent.call(p[0],_3d0.title):_3d0.collapsedContent;
isns?p.panel("setTitle",_3d7):p.html(_3d7);
}
p.panel("panel").hover(function(){
$(this).addClass("layout-expand-over");
},function(){
$(this).removeClass("layout-expand-over");
});
return p;
};
function _3d4(){
var cc=$(_3cc);
var _3d8=_3cf.center.panel("options");
var _3d9=_3d0.collapsedSize;
if(_3cd=="east"){
var _3da=p.panel("panel")._outerWidth();
var _3db=_3d8.width+_3da-_3d9;
if(_3d0.split||!_3d0.border){
_3db++;
}
return {resizeC:{width:_3db},expand:{left:cc.width()-_3da},expandP:{top:_3d8.top,left:cc.width()-_3d9,width:_3d9,height:_3d8.height},collapse:{left:cc.width(),top:_3d8.top,height:_3d8.height}};
}else{
if(_3cd=="west"){
var _3da=p.panel("panel")._outerWidth();
var _3db=_3d8.width+_3da-_3d9;
if(_3d0.split||!_3d0.border){
_3db++;
}
return {resizeC:{width:_3db,left:_3d9-1},expand:{left:0},expandP:{left:0,top:_3d8.top,width:_3d9,height:_3d8.height},collapse:{left:-_3da,top:_3d8.top,height:_3d8.height}};
}else{
if(_3cd=="north"){
var _3dc=p.panel("panel")._outerHeight();
var hh=_3d8.height;
if(!_3b0(_3cf.expandNorth)){
hh+=_3dc-_3d9+((_3d0.split||!_3d0.border)?1:0);
}
_3cf.east.add(_3cf.west).add(_3cf.expandEast).add(_3cf.expandWest).panel("resize",{top:_3d9-1,height:hh});
return {resizeC:{top:_3d9-1,height:hh},expand:{top:0},expandP:{top:0,left:0,width:cc.width(),height:_3d9},collapse:{top:-_3dc,width:cc.width()}};
}else{
if(_3cd=="south"){
var _3dc=p.panel("panel")._outerHeight();
var hh=_3d8.height;
if(!_3b0(_3cf.expandSouth)){
hh+=_3dc-_3d9+((_3d0.split||!_3d0.border)?1:0);
}
_3cf.east.add(_3cf.west).add(_3cf.expandEast).add(_3cf.expandWest).panel("resize",{height:hh});
return {resizeC:{height:hh},expand:{top:cc.height()-_3dc},expandP:{top:cc.height()-_3d9,left:0,width:cc.width(),height:_3d9},collapse:{top:cc.height(),width:cc.width()}};
}
}
}
}
};
};
function _3dd(_3de,_3df){
var _3e0=$.data(_3de,"layout").panels;
var p=_3e0[_3df];
var _3e1=p.panel("options");
if(_3e1.onBeforeExpand.call(p)==false){
return;
}
var _3e2="expand"+_3df.substring(0,1).toUpperCase()+_3df.substring(1);
if(_3e0[_3e2]){
_3e0[_3e2].panel("close");
p.panel("panel").stop(true,true);
p.panel("expand",false).panel("open");
var _3e3=_3e4();
p.panel("resize",_3e3.collapse);
p.panel("panel").animate(_3e3.expand,function(){
_3aa(_3de);
$(_3de).layout("options").onExpand.call(_3de,_3df);
});
}
function _3e4(){
var cc=$(_3de);
var _3e5=_3e0.center.panel("options");
if(_3df=="east"&&_3e0.expandEast){
return {collapse:{left:cc.width(),top:_3e5.top,height:_3e5.height},expand:{left:cc.width()-p.panel("panel")._outerWidth()}};
}else{
if(_3df=="west"&&_3e0.expandWest){
return {collapse:{left:-p.panel("panel")._outerWidth(),top:_3e5.top,height:_3e5.height},expand:{left:0}};
}else{
if(_3df=="north"&&_3e0.expandNorth){
return {collapse:{top:-p.panel("panel")._outerHeight(),width:cc.width()},expand:{top:0}};
}else{
if(_3df=="south"&&_3e0.expandSouth){
return {collapse:{top:cc.height(),width:cc.width()},expand:{top:cc.height()-p.panel("panel")._outerHeight()}};
}
}
}
}
};
};
function _3b0(pp){
if(!pp){
return false;
}
if(pp.length){
return pp.panel("panel").is(":visible");
}else{
return false;
}
};
function _3e6(_3e7){
var _3e8=$.data(_3e7,"layout");
var opts=_3e8.options;
var _3e9=_3e8.panels;
var _3ea=opts.onCollapse;
opts.onCollapse=function(){
};
_3eb("east");
_3eb("west");
_3eb("north");
_3eb("south");
opts.onCollapse=_3ea;
function _3eb(_3ec){
var p=_3e9[_3ec];
if(p.length&&p.panel("options").collapsed){
_3cb(_3e7,_3ec,0);
}
};
};
function _3ed(_3ee,_3ef,_3f0){
var p=$(_3ee).layout("panel",_3ef);
p.panel("options").split=_3f0;
var cls="layout-split-"+_3ef;
var _3f1=p.panel("panel").removeClass(cls);
if(_3f0){
_3f1.addClass(cls);
}
_3f1.resizable({disabled:(!_3f0)});
_3aa(_3ee);
};
$.fn.layout=function(_3f2,_3f3){
if(typeof _3f2=="string"){
return $.fn.layout.methods[_3f2](this,_3f3);
}
_3f2=_3f2||{};
return this.each(function(){
var _3f4=$.data(this,"layout");
if(_3f4){
$.extend(_3f4.options,_3f2);
}else{
var opts=$.extend({},$.fn.layout.defaults,$.fn.layout.parseOptions(this),_3f2);
$.data(this,"layout",{options:opts,panels:{center:$(),north:$(),south:$(),east:$(),west:$()}});
init(this);
}
_3aa(this);
_3e6(this);
});
};
$.fn.layout.methods={options:function(jq){
return $.data(jq[0],"layout").options;
},resize:function(jq,_3f5){
return jq.each(function(){
_3aa(this,_3f5);
});
},panel:function(jq,_3f6){
return $.data(jq[0],"layout").panels[_3f6];
},collapse:function(jq,_3f7){
return jq.each(function(){
_3cb(this,_3f7);
});
},expand:function(jq,_3f8){
return jq.each(function(){
_3dd(this,_3f8);
});
},add:function(jq,_3f9){
return jq.each(function(){
_3b9(this,_3f9);
_3aa(this);
if($(this).layout("panel",_3f9.region).panel("options").collapsed){
_3cb(this,_3f9.region,0);
}
});
},remove:function(jq,_3fa){
return jq.each(function(){
_3c6(this,_3fa);
_3aa(this);
});
},split:function(jq,_3fb){
return jq.each(function(){
_3ed(this,_3fb,true);
});
},unsplit:function(jq,_3fc){
return jq.each(function(){
_3ed(this,_3fc,false);
});
}};
$.fn.layout.parseOptions=function(_3fd){
return $.extend({},$.parser.parseOptions(_3fd,[{fit:"boolean"}]));
};
$.fn.layout.defaults={fit:false,onExpand:function(_3fe){
},onCollapse:function(_3ff){
},onAdd:function(_400){
},onRemove:function(_401){
}};
$.fn.layout.parsePanelOptions=function(_402){
var t=$(_402);
return $.extend({},$.fn.panel.parseOptions(_402),$.parser.parseOptions(_402,["region",{split:"boolean",collpasedSize:"number",minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number"}]));
};
$.fn.layout.paneldefaults=$.extend({},$.fn.panel.defaults,{region:null,split:false,collapsedSize:28,expandMode:"float",hideExpandTool:false,hideCollapsedContent:true,collapsedContent:function(_403){
var p=$(this);
var opts=p.panel("options");
if(opts.region=="north"||opts.region=="south"){
return _403;
}
var size=opts.collapsedSize-2;
var left=(size-16)/2;
left=size-left;
var cc=[];
if(opts.iconCls){
cc.push("<div class=\"panel-icon "+opts.iconCls+"\"></div>");
}
cc.push("<div class=\"panel-title layout-expand-title");
cc.push(opts.iconCls?" layout-expand-with-icon":"");
cc.push("\" style=\"left:"+left+"px\">");
cc.push(_403);
cc.push("</div>");
return cc.join("");
},minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000});
})(jQuery);
(function($){
$(function(){
$(document).unbind(".menu").bind("mousedown.menu",function(e){
var m=$(e.target).closest("div.menu,div.combo-p");
if(m.length){
return;
}
$("body>div.menu-top:visible").not(".menu-inline").menu("hide");
_404($("body>div.menu:visible").not(".menu-inline"));
});
});
function init(_405){
var opts=$.data(_405,"menu").options;
$(_405).addClass("menu-top");
opts.inline?$(_405).addClass("menu-inline"):$(_405).appendTo("body");
$(_405).bind("_resize",function(e,_406){
if($(this).hasClass("easyui-fluid")||_406){
$(_405).menu("resize",_405);
}
return false;
});
var _407=_408($(_405));
for(var i=0;i<_407.length;i++){
_40b(_405,_407[i]);
}
function _408(menu){
var _409=[];
menu.addClass("menu");
_409.push(menu);
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
var _40a=$(this).children("div");
if(_40a.length){
_40a.appendTo("body");
this.submenu=_40a;
var mm=_408(_40a);
_409=_409.concat(mm);
}
});
}
return _409;
};
};
function _40b(_40c,div){
var menu=$(div).addClass("menu");
if(!menu.data("menu")){
menu.data("menu",{options:$.parser.parseOptions(menu[0],["width","height"])});
}
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
_40d(_40c,this);
});
$("<div class=\"menu-line\"></div>").prependTo(menu);
}
_40e(_40c,menu);
if(!menu.hasClass("menu-inline")){
menu.hide();
}
_40f(_40c,menu);
};
function _40d(_410,div,_411){
var item=$(div);
var _412=$.extend({},$.parser.parseOptions(item[0],["id","name","iconCls","href",{separator:"boolean"}]),{disabled:(item.attr("disabled")?true:undefined),text:$.trim(item.html()),onclick:item[0].onclick},_411||{});
_412.onclick=_412.onclick||_412.handler||null;
item.data("menuitem",{options:_412});
if(_412.separator){
item.addClass("menu-sep");
}
if(!item.hasClass("menu-sep")){
item.addClass("menu-item");
item.empty().append($("<div class=\"menu-text\"></div>").html(_412.text));
if(_412.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_412.iconCls).appendTo(item);
}
if(_412.id){
item.attr("id",_412.id);
}
if(_412.onclick){
if(typeof _412.onclick=="string"){
item.attr("onclick",_412.onclick);
}else{
item[0].onclick=eval(_412.onclick);
}
}
if(_412.disabled){
_413(_410,item[0],true);
}
if(item[0].submenu){
$("<div class=\"menu-rightarrow\"></div>").appendTo(item);
}
}
};
function _40e(_414,menu){
var opts=$.data(_414,"menu").options;
var _415=menu.attr("style")||"";
var _416=menu.is(":visible");
menu.css({display:"block",left:-10000,height:"auto",overflow:"hidden"});
menu.find(".menu-item").each(function(){
$(this)._outerHeight(opts.itemHeight);
$(this).find(".menu-text").css({height:(opts.itemHeight-2)+"px",lineHeight:(opts.itemHeight-2)+"px"});
});
menu.removeClass("menu-noline").addClass(opts.noline?"menu-noline":"");
var _417=menu.data("menu").options;
var _418=_417.width;
var _419=_417.height;
if(isNaN(parseInt(_418))){
_418=0;
menu.find("div.menu-text").each(function(){
if(_418<$(this).outerWidth()){
_418=$(this).outerWidth();
}
});
_418=_418?_418+40:"";
}
var _41a=menu.outerHeight();
if(isNaN(parseInt(_419))){
_419=_41a;
if(menu.hasClass("menu-top")&&opts.alignTo){
var at=$(opts.alignTo);
var h1=at.offset().top-$(document).scrollTop();
var h2=$(window)._outerHeight()+$(document).scrollTop()-at.offset().top-at._outerHeight();
_419=Math.min(_419,Math.max(h1,h2));
}else{
if(_419>$(window)._outerHeight()){
_419=$(window).height();
}
}
}
menu.attr("style",_415);
menu.show();
menu._size($.extend({},_417,{width:_418,height:_419,minWidth:_417.minWidth||opts.minWidth,maxWidth:_417.maxWidth||opts.maxWidth}));
menu.find(".easyui-fluid").triggerHandler("_resize",[true]);
menu.css("overflow",menu.outerHeight()<_41a?"auto":"hidden");
menu.children("div.menu-line")._outerHeight(_41a-2);
if(!_416){
menu.hide();
}
};
function _40f(_41b,menu){
var _41c=$.data(_41b,"menu");
var opts=_41c.options;
menu.unbind(".menu");
for(var _41d in opts.events){
menu.bind(_41d+".menu",{target:_41b},opts.events[_41d]);
}
};
function _41e(e){
var _41f=e.data.target;
var _420=$.data(_41f,"menu");
if(_420.timer){
clearTimeout(_420.timer);
_420.timer=null;
}
};
function _421(e){
var _422=e.data.target;
var _423=$.data(_422,"menu");
if(_423.options.hideOnUnhover){
_423.timer=setTimeout(function(){
_424(_422,$(_422).hasClass("menu-inline"));
},_423.options.duration);
}
};
function _425(e){
var _426=e.data.target;
var item=$(e.target).closest(".menu-item");
if(item.length){
item.siblings().each(function(){
if(this.submenu){
_404(this.submenu);
}
$(this).removeClass("menu-active");
});
item.addClass("menu-active");
if(item.hasClass("menu-item-disabled")){
item.addClass("menu-active-disabled");
return;
}
var _427=item[0].submenu;
if(_427){
$(_426).menu("show",{menu:_427,parent:item});
}
}
};
function _428(e){
var item=$(e.target).closest(".menu-item");
if(item.length){
item.removeClass("menu-active menu-active-disabled");
var _429=item[0].submenu;
if(_429){
if(e.pageX>=parseInt(_429.css("left"))){
item.addClass("menu-active");
}else{
_404(_429);
}
}else{
item.removeClass("menu-active");
}
}
};
function _42a(e){
var _42b=e.data.target;
var item=$(e.target).closest(".menu-item");
if(item.length){
var opts=$(_42b).data("menu").options;
var _42c=item.data("menuitem").options;
if(_42c.disabled){
return;
}
if(!item[0].submenu){
_424(_42b,opts.inline);
if(_42c.href){
location.href=_42c.href;
}
}
item.trigger("mouseenter");
opts.onClick.call(_42b,$(_42b).menu("getItem",item[0]));
}
};
function _424(_42d,_42e){
var _42f=$.data(_42d,"menu");
if(_42f){
if($(_42d).is(":visible")){
_404($(_42d));
if(_42e){
$(_42d).show();
}else{
_42f.options.onHide.call(_42d);
}
}
}
return false;
};
function _430(_431,_432){
_432=_432||{};
var left,top;
var opts=$.data(_431,"menu").options;
var menu=$(_432.menu||_431);
$(_431).menu("resize",menu[0]);
if(menu.hasClass("menu-top")){
$.extend(opts,_432);
left=opts.left;
top=opts.top;
if(opts.alignTo){
var at=$(opts.alignTo);
left=at.offset().left;
top=at.offset().top+at._outerHeight();
if(opts.align=="right"){
left+=at.outerWidth()-menu.outerWidth();
}
}
if(left+menu.outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-menu.outerWidth()-5;
}
if(left<0){
left=0;
}
top=_433(top,opts.alignTo);
}else{
var _434=_432.parent;
left=_434.offset().left+_434.outerWidth()-2;
if(left+menu.outerWidth()+5>$(window)._outerWidth()+$(document).scrollLeft()){
left=_434.offset().left-menu.outerWidth()+2;
}
top=_433(_434.offset().top-3);
}
function _433(top,_435){
if(top+menu.outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
if(_435){
top=$(_435).offset().top-menu._outerHeight();
}else{
top=$(window)._outerHeight()+$(document).scrollTop()-menu.outerHeight();
}
}
if(top<0){
top=0;
}
return top;
};
menu.css(opts.position.call(_431,menu[0],left,top));
menu.show(0,function(){
if(!menu[0].shadow){
menu[0].shadow=$("<div class=\"menu-shadow\"></div>").insertAfter(menu);
}
menu[0].shadow.css({display:(menu.hasClass("menu-inline")?"none":"block"),zIndex:$.fn.menu.defaults.zIndex++,left:menu.css("left"),top:menu.css("top"),width:menu.outerWidth(),height:menu.outerHeight()});
menu.css("z-index",$.fn.menu.defaults.zIndex++);
if(menu.hasClass("menu-top")){
opts.onShow.call(_431);
}
});
};
function _404(menu){
if(menu&&menu.length){
_436(menu);
menu.find("div.menu-item").each(function(){
if(this.submenu){
_404(this.submenu);
}
$(this).removeClass("menu-active");
});
}
function _436(m){
m.stop(true,true);
if(m[0].shadow){
m[0].shadow.hide();
}
m.hide();
};
};
function _437(_438,text){
var _439=null;
var tmp=$("<div></div>");
function find(menu){
menu.children("div.menu-item").each(function(){
var item=$(_438).menu("getItem",this);
var s=tmp.empty().html(item.text).text();
if(text==$.trim(s)){
_439=item;
}else{
if(this.submenu&&!_439){
find(this.submenu);
}
}
});
};
find($(_438));
tmp.remove();
return _439;
};
function _413(_43a,_43b,_43c){
var t=$(_43b);
if(t.hasClass("menu-item")){
var opts=t.data("menuitem").options;
opts.disabled=_43c;
if(_43c){
t.addClass("menu-item-disabled");
t[0].onclick=null;
}else{
t.removeClass("menu-item-disabled");
t[0].onclick=opts.onclick;
}
}
};
function _43d(_43e,_43f){
var opts=$.data(_43e,"menu").options;
var menu=$(_43e);
if(_43f.parent){
if(!_43f.parent.submenu){
var _440=$("<div></div>").appendTo("body");
_43f.parent.submenu=_440;
$("<div class=\"menu-rightarrow\"></div>").appendTo(_43f.parent);
_40b(_43e,_440);
}
menu=_43f.parent.submenu;
}
var div=$("<div></div>").appendTo(menu);
_40d(_43e,div,_43f);
};
function _441(_442,_443){
function _444(el){
if(el.submenu){
el.submenu.children("div.menu-item").each(function(){
_444(this);
});
var _445=el.submenu[0].shadow;
if(_445){
_445.remove();
}
el.submenu.remove();
}
$(el).remove();
};
_444(_443);
};
function _446(_447,_448,_449){
var menu=$(_448).parent();
if(_449){
$(_448).show();
}else{
$(_448).hide();
}
_40e(_447,menu);
};
function _44a(_44b){
$(_44b).children("div.menu-item").each(function(){
_441(_44b,this);
});
if(_44b.shadow){
_44b.shadow.remove();
}
$(_44b).remove();
};
$.fn.menu=function(_44c,_44d){
if(typeof _44c=="string"){
return $.fn.menu.methods[_44c](this,_44d);
}
_44c=_44c||{};
return this.each(function(){
var _44e=$.data(this,"menu");
if(_44e){
$.extend(_44e.options,_44c);
}else{
_44e=$.data(this,"menu",{options:$.extend({},$.fn.menu.defaults,$.fn.menu.parseOptions(this),_44c)});
init(this);
}
$(this).css({left:_44e.options.left,top:_44e.options.top});
});
};
$.fn.menu.methods={options:function(jq){
return $.data(jq[0],"menu").options;
},show:function(jq,pos){
return jq.each(function(){
_430(this,pos);
});
},hide:function(jq){
return jq.each(function(){
_424(this);
});
},destroy:function(jq){
return jq.each(function(){
_44a(this);
});
},setText:function(jq,_44f){
return jq.each(function(){
var item=$(_44f.target).data("menuitem").options;
item.text=_44f.text;
$(_44f.target).children("div.menu-text").html(_44f.text);
});
},setIcon:function(jq,_450){
return jq.each(function(){
var item=$(_450.target).data("menuitem").options;
item.iconCls=_450.iconCls;
$(_450.target).children("div.menu-icon").remove();
if(_450.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_450.iconCls).appendTo(_450.target);
}
});
},getItem:function(jq,_451){
var item=$(_451).data("menuitem").options;
return $.extend({},item,{target:$(_451)[0]});
},findItem:function(jq,text){
return _437(jq[0],text);
},appendItem:function(jq,_452){
return jq.each(function(){
_43d(this,_452);
});
},removeItem:function(jq,_453){
return jq.each(function(){
_441(this,_453);
});
},enableItem:function(jq,_454){
return jq.each(function(){
_413(this,_454,false);
});
},disableItem:function(jq,_455){
return jq.each(function(){
_413(this,_455,true);
});
},showItem:function(jq,_456){
return jq.each(function(){
_446(this,_456,true);
});
},hideItem:function(jq,_457){
return jq.each(function(){
_446(this,_457,false);
});
},resize:function(jq,_458){
return jq.each(function(){
_40e(this,_458?$(_458):$(this));
});
}};
$.fn.menu.parseOptions=function(_459){
return $.extend({},$.parser.parseOptions(_459,[{minWidth:"number",itemHeight:"number",duration:"number",hideOnUnhover:"boolean"},{fit:"boolean",inline:"boolean",noline:"boolean"}]));
};
$.fn.menu.defaults={zIndex:110000,left:0,top:0,alignTo:null,align:"left",minWidth:120,itemHeight:22,duration:100,hideOnUnhover:true,inline:false,fit:false,noline:false,events:{mouseenter:_41e,mouseleave:_421,mouseover:_425,mouseout:_428,click:_42a},position:function(_45a,left,top){
return {left:left,top:top};
},onShow:function(){
},onHide:function(){
},onClick:function(item){
}};
})(jQuery);
(function($){
function init(_45b){
var opts=$.data(_45b,"menubutton").options;
var btn=$(_45b);
btn.linkbutton(opts);
if(opts.hasDownArrow){
btn.removeClass(opts.cls.btn1+" "+opts.cls.btn2).addClass("m-btn");
btn.removeClass("m-btn-small m-btn-medium m-btn-large").addClass("m-btn-"+opts.size);
var _45c=btn.find(".l-btn-left");
$("<span></span>").addClass(opts.cls.arrow).appendTo(_45c);
$("<span></span>").addClass("m-btn-line").appendTo(_45c);
}
$(_45b).menubutton("resize");
if(opts.menu){
$(opts.menu).menu({duration:opts.duration});
var _45d=$(opts.menu).menu("options");
var _45e=_45d.onShow;
var _45f=_45d.onHide;
$.extend(_45d,{onShow:function(){
var _460=$(this).menu("options");
var btn=$(_460.alignTo);
var opts=btn.menubutton("options");
btn.addClass((opts.plain==true)?opts.cls.btn2:opts.cls.btn1);
_45e.call(this);
},onHide:function(){
var _461=$(this).menu("options");
var btn=$(_461.alignTo);
var opts=btn.menubutton("options");
btn.removeClass((opts.plain==true)?opts.cls.btn2:opts.cls.btn1);
_45f.call(this);
}});
}
};
function _462(_463){
var opts=$.data(_463,"menubutton").options;
var btn=$(_463);
var t=btn.find("."+opts.cls.trigger);
if(!t.length){
t=btn;
}
t.unbind(".menubutton");
var _464=null;
t.bind("click.menubutton",function(){
if(!_465()){
_466(_463);
return false;
}
}).bind("mouseenter.menubutton",function(){
if(!_465()){
_464=setTimeout(function(){
_466(_463);
},opts.duration);
return false;
}
}).bind("mouseleave.menubutton",function(){
if(_464){
clearTimeout(_464);
}
$(opts.menu).triggerHandler("mouseleave");
});
function _465(){
return $(_463).linkbutton("options").disabled;
};
};
function _466(_467){
var opts=$(_467).menubutton("options");
if(opts.disabled||!opts.menu){
return;
}
$("body>div.menu-top").menu("hide");
var btn=$(_467);
var mm=$(opts.menu);
if(mm.length){
mm.menu("options").alignTo=btn;
mm.menu("show",{alignTo:btn,align:opts.menuAlign});
}
btn.blur();
};
$.fn.menubutton=function(_468,_469){
if(typeof _468=="string"){
var _46a=$.fn.menubutton.methods[_468];
if(_46a){
return _46a(this,_469);
}else{
return this.linkbutton(_468,_469);
}
}
_468=_468||{};
return this.each(function(){
var _46b=$.data(this,"menubutton");
if(_46b){
$.extend(_46b.options,_468);
}else{
$.data(this,"menubutton",{options:$.extend({},$.fn.menubutton.defaults,$.fn.menubutton.parseOptions(this),_468)});
$(this).removeAttr("disabled");
}
init(this);
_462(this);
});
};
$.fn.menubutton.methods={options:function(jq){
var _46c=jq.linkbutton("options");
return $.extend($.data(jq[0],"menubutton").options,{toggle:_46c.toggle,selected:_46c.selected,disabled:_46c.disabled});
},destroy:function(jq){
return jq.each(function(){
var opts=$(this).menubutton("options");
if(opts.menu){
$(opts.menu).menu("destroy");
}
$(this).remove();
});
}};
$.fn.menubutton.parseOptions=function(_46d){
var t=$(_46d);
return $.extend({},$.fn.linkbutton.parseOptions(_46d),$.parser.parseOptions(_46d,["menu",{plain:"boolean",hasDownArrow:"boolean",duration:"number"}]));
};
$.fn.menubutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,hasDownArrow:true,menu:null,menuAlign:"left",duration:100,cls:{btn1:"m-btn-active",btn2:"m-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn"}});
})(jQuery);
(function($){
function init(_46e){
var opts=$.data(_46e,"splitbutton").options;
$(_46e).menubutton(opts);
$(_46e).addClass("s-btn");
};
$.fn.splitbutton=function(_46f,_470){
if(typeof _46f=="string"){
var _471=$.fn.splitbutton.methods[_46f];
if(_471){
return _471(this,_470);
}else{
return this.menubutton(_46f,_470);
}
}
_46f=_46f||{};
return this.each(function(){
var _472=$.data(this,"splitbutton");
if(_472){
$.extend(_472.options,_46f);
}else{
$.data(this,"splitbutton",{options:$.extend({},$.fn.splitbutton.defaults,$.fn.splitbutton.parseOptions(this),_46f)});
$(this).removeAttr("disabled");
}
init(this);
});
};
$.fn.splitbutton.methods={options:function(jq){
var _473=jq.menubutton("options");
var _474=$.data(jq[0],"splitbutton").options;
$.extend(_474,{disabled:_473.disabled,toggle:_473.toggle,selected:_473.selected});
return _474;
}};
$.fn.splitbutton.parseOptions=function(_475){
var t=$(_475);
return $.extend({},$.fn.linkbutton.parseOptions(_475),$.parser.parseOptions(_475,["menu",{plain:"boolean",duration:"number"}]));
};
$.fn.splitbutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,menu:null,duration:100,cls:{btn1:"m-btn-active s-btn-active",btn2:"m-btn-plain-active s-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn-line"}});
})(jQuery);
(function($){
function init(_476){
var _477=$("<span class=\"switchbutton\">"+"<span class=\"switchbutton-inner\">"+"<span class=\"switchbutton-on\"></span>"+"<span class=\"switchbutton-handle\"></span>"+"<span class=\"switchbutton-off\"></span>"+"<input class=\"switchbutton-value\" type=\"checkbox\">"+"</span>"+"</span>").insertAfter(_476);
var t=$(_476);
t.addClass("switchbutton-f").hide();
var name=t.attr("name");
if(name){
t.removeAttr("name").attr("switchbuttonName",name);
_477.find(".switchbutton-value").attr("name",name);
}
_477.bind("_resize",function(e,_478){
if($(this).hasClass("easyui-fluid")||_478){
_479(_476);
}
return false;
});
return _477;
};
function _479(_47a,_47b){
var _47c=$.data(_47a,"switchbutton");
var opts=_47c.options;
var _47d=_47c.switchbutton;
if(_47b){
$.extend(opts,_47b);
}
var _47e=_47d.is(":visible");
if(!_47e){
_47d.appendTo("body");
}
_47d._size(opts);
var w=_47d.width();
var h=_47d.height();
var w=_47d.outerWidth();
var h=_47d.outerHeight();
var _47f=parseInt(opts.handleWidth)||_47d.height();
var _480=w*2-_47f;
_47d.find(".switchbutton-inner").css({width:_480+"px",height:h+"px",lineHeight:h+"px"});
_47d.find(".switchbutton-handle")._outerWidth(_47f)._outerHeight(h).css({marginLeft:-_47f/2+"px"});
_47d.find(".switchbutton-on").css({width:(w-_47f/2)+"px",textIndent:(opts.reversed?"":"-")+_47f/2+"px"});
_47d.find(".switchbutton-off").css({width:(w-_47f/2)+"px",textIndent:(opts.reversed?"-":"")+_47f/2+"px"});
opts.marginWidth=w-_47f;
_481(_47a,opts.checked,false);
if(!_47e){
_47d.insertAfter(_47a);
}
};
function _482(_483){
var _484=$.data(_483,"switchbutton");
var opts=_484.options;
var _485=_484.switchbutton;
var _486=_485.find(".switchbutton-inner");
var on=_486.find(".switchbutton-on").html(opts.onText);
var off=_486.find(".switchbutton-off").html(opts.offText);
var _487=_486.find(".switchbutton-handle").html(opts.handleText);
if(opts.reversed){
off.prependTo(_486);
on.insertAfter(_487);
}else{
on.prependTo(_486);
off.insertAfter(_487);
}
_485.find(".switchbutton-value")._propAttr("checked",opts.checked);
_485.removeClass("switchbutton-disabled").addClass(opts.disabled?"switchbutton-disabled":"");
_485.removeClass("switchbutton-reversed").addClass(opts.reversed?"switchbutton-reversed":"");
_481(_483,opts.checked);
_488(_483,opts.readonly);
$(_483).switchbutton("setValue",opts.value);
};
function _481(_489,_48a,_48b){
var _48c=$.data(_489,"switchbutton");
var opts=_48c.options;
opts.checked=_48a;
var _48d=_48c.switchbutton.find(".switchbutton-inner");
var _48e=_48d.find(".switchbutton-on");
var _48f=opts.reversed?(opts.checked?opts.marginWidth:0):(opts.checked?0:opts.marginWidth);
var dir=_48e.css("float").toLowerCase();
var css={};
css["margin-"+dir]=-_48f+"px";
_48b?_48d.animate(css,200):_48d.css(css);
var _490=_48d.find(".switchbutton-value");
var ck=_490.is(":checked");
$(_489).add(_490)._propAttr("checked",opts.checked);
if(ck!=opts.checked){
opts.onChange.call(_489,opts.checked);
}
};
function _491(_492,_493){
var _494=$.data(_492,"switchbutton");
var opts=_494.options;
var _495=_494.switchbutton;
var _496=_495.find(".switchbutton-value");
if(_493){
opts.disabled=true;
$(_492).add(_496).attr("disabled","disabled");
_495.addClass("switchbutton-disabled");
}else{
opts.disabled=false;
$(_492).add(_496).removeAttr("disabled");
_495.removeClass("switchbutton-disabled");
}
};
function _488(_497,mode){
var _498=$.data(_497,"switchbutton");
var opts=_498.options;
opts.readonly=mode==undefined?true:mode;
_498.switchbutton.removeClass("switchbutton-readonly").addClass(opts.readonly?"switchbutton-readonly":"");
};
function _499(_49a){
var _49b=$.data(_49a,"switchbutton");
var opts=_49b.options;
_49b.switchbutton.unbind(".switchbutton").bind("click.switchbutton",function(){
if(!opts.disabled&&!opts.readonly){
_481(_49a,opts.checked?false:true,true);
}
});
};
$.fn.switchbutton=function(_49c,_49d){
if(typeof _49c=="string"){
return $.fn.switchbutton.methods[_49c](this,_49d);
}
_49c=_49c||{};
return this.each(function(){
var _49e=$.data(this,"switchbutton");
if(_49e){
$.extend(_49e.options,_49c);
}else{
_49e=$.data(this,"switchbutton",{options:$.extend({},$.fn.switchbutton.defaults,$.fn.switchbutton.parseOptions(this),_49c),switchbutton:init(this)});
}
_49e.options.originalChecked=_49e.options.checked;
_482(this);
_479(this);
_499(this);
});
};
$.fn.switchbutton.methods={options:function(jq){
var _49f=jq.data("switchbutton");
return $.extend(_49f.options,{value:_49f.switchbutton.find(".switchbutton-value").val()});
},resize:function(jq,_4a0){
return jq.each(function(){
_479(this,_4a0);
});
},enable:function(jq){
return jq.each(function(){
_491(this,false);
});
},disable:function(jq){
return jq.each(function(){
_491(this,true);
});
},readonly:function(jq,mode){
return jq.each(function(){
_488(this,mode);
});
},check:function(jq){
return jq.each(function(){
_481(this,true);
});
},uncheck:function(jq){
return jq.each(function(){
_481(this,false);
});
},clear:function(jq){
return jq.each(function(){
_481(this,false);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).switchbutton("options");
_481(this,opts.originalChecked);
});
},setValue:function(jq,_4a1){
return jq.each(function(){
$(this).val(_4a1);
$.data(this,"switchbutton").switchbutton.find(".switchbutton-value").val(_4a1);
});
}};
$.fn.switchbutton.parseOptions=function(_4a2){
var t=$(_4a2);
return $.extend({},$.parser.parseOptions(_4a2,["onText","offText","handleText",{handleWidth:"number",reversed:"boolean"}]),{value:(t.val()||undefined),checked:(t.attr("checked")?true:undefined),disabled:(t.attr("disabled")?true:undefined),readonly:(t.attr("readonly")?true:undefined)});
};
$.fn.switchbutton.defaults={handleWidth:"auto",width:60,height:26,checked:false,disabled:false,readonly:false,reversed:false,onText:"ON",offText:"OFF",handleText:"",value:"on",onChange:function(_4a3){
}};
})(jQuery);
(function($){
function init(_4a4){
$(_4a4).addClass("validatebox-text");
};
function _4a5(_4a6){
var _4a7=$.data(_4a6,"validatebox");
_4a7.validating=false;
if(_4a7.timer){
clearTimeout(_4a7.timer);
}
$(_4a6).tooltip("destroy");
$(_4a6).unbind();
$(_4a6).remove();
};
function _4a8(_4a9){
var opts=$.data(_4a9,"validatebox").options;
$(_4a9).unbind(".validatebox");
if(opts.novalidate||opts.disabled){
return;
}
for(var _4aa in opts.events){
$(_4a9).bind(_4aa+".validatebox",{target:_4a9},opts.events[_4aa]);
}
};
function _4ab(e){
var _4ac=e.data.target;
var _4ad=$.data(_4ac,"validatebox");
var opts=_4ad.options;
if($(_4ac).attr("readonly")){
return;
}
_4ad.validating=true;
_4ad.value=opts.val(_4ac);
(function(){
if(!$(_4ac).is(":visible")){
_4ad.validating=false;
}
if(_4ad.validating){
var _4ae=opts.val(_4ac);
if(_4ad.value!=_4ae){
_4ad.value=_4ae;
if(_4ad.timer){
clearTimeout(_4ad.timer);
}
_4ad.timer=setTimeout(function(){
$(_4ac).validatebox("validate");
},opts.delay);
}else{
if(_4ad.message){
opts.err(_4ac,_4ad.message);
}
}
setTimeout(arguments.callee,opts.interval);
}
})();
};
function _4af(e){
var _4b0=e.data.target;
var _4b1=$.data(_4b0,"validatebox");
var opts=_4b1.options;
_4b1.validating=false;
if(_4b1.timer){
clearTimeout(_4b1.timer);
_4b1.timer=undefined;
}
if(opts.validateOnBlur){
$(_4b0).validatebox("validate");
}
opts.err(_4b0,_4b1.message,"hide");
};
function _4b2(e){
var _4b3=e.data.target;
var _4b4=$.data(_4b3,"validatebox");
_4b4.options.err(_4b3,_4b4.message,"show");
};
function _4b5(e){
var _4b6=e.data.target;
var _4b7=$.data(_4b6,"validatebox");
if(!_4b7.validating){
_4b7.options.err(_4b6,_4b7.message,"hide");
}
};
function _4b8(_4b9,_4ba,_4bb){
var _4bc=$.data(_4b9,"validatebox");
var opts=_4bc.options;
var t=$(_4b9);
if(_4bb=="hide"||!_4ba){
t.tooltip("hide");
}else{
if((t.is(":focus")&&_4bc.validating)||_4bb=="show"){
t.tooltip($.extend({},opts.tipOptions,{content:_4ba,position:opts.tipPosition,deltaX:opts.deltaX,deltaY:opts.deltaY})).tooltip("show");
}
}
};
function _4bd(_4be){
var _4bf=$.data(_4be,"validatebox");
var opts=_4bf.options;
var box=$(_4be);
opts.onBeforeValidate.call(_4be);
var _4c0=_4c1();
_4c0?box.removeClass("validatebox-invalid"):box.addClass("validatebox-invalid");
opts.err(_4be,_4bf.message);
opts.onValidate.call(_4be,_4c0);
return _4c0;
function _4c2(msg){
_4bf.message=msg;
};
function _4c3(_4c4,_4c5){
var _4c6=opts.val(_4be);
var _4c7=/([a-zA-Z_]+)(.*)/.exec(_4c4);
var rule=opts.rules[_4c7[1]];
if(rule&&_4c6){
var _4c8=_4c5||opts.validParams||eval(_4c7[2]);
if(!rule["validator"].call(_4be,_4c6,_4c8)){
var _4c9=rule["message"];
if(_4c8){
for(var i=0;i<_4c8.length;i++){
_4c9=_4c9.replace(new RegExp("\\{"+i+"\\}","g"),_4c8[i]);
}
}
_4c2(opts.invalidMessage||_4c9);
return false;
}
}
return true;
};
function _4c1(){
_4c2("");
if(!opts._validateOnCreate){
setTimeout(function(){
opts._validateOnCreate=true;
},0);
return true;
}
if(opts.novalidate||opts.disabled){
return true;
}
if(opts.required){
if(opts.val(_4be)==""){
_4c2(opts.missingMessage);
return false;
}
}
if(opts.validType){
if($.isArray(opts.validType)){
for(var i=0;i<opts.validType.length;i++){
if(!_4c3(opts.validType[i])){
return false;
}
}
}else{
if(typeof opts.validType=="string"){
if(!_4c3(opts.validType)){
return false;
}
}else{
for(var _4ca in opts.validType){
var _4cb=opts.validType[_4ca];
if(!_4c3(_4ca,_4cb)){
return false;
}
}
}
}
}
return true;
};
};
function _4cc(_4cd,_4ce){
var opts=$.data(_4cd,"validatebox").options;
if(_4ce!=undefined){
opts.disabled=_4ce;
}
if(opts.disabled){
$(_4cd).addClass("validatebox-disabled").attr("disabled","disabled");
}else{
$(_4cd).removeClass("validatebox-disabled").removeAttr("disabled");
}
};
function _4cf(_4d0,mode){
var opts=$.data(_4d0,"validatebox").options;
opts.readonly=mode==undefined?true:mode;
if(opts.readonly||!opts.editable){
$(_4d0).triggerHandler("blur.validatebox");
$(_4d0).addClass("validatebox-readonly").attr("readonly","readonly");
}else{
$(_4d0).removeClass("validatebox-readonly").removeAttr("readonly");
}
};
$.fn.validatebox=function(_4d1,_4d2){
if(typeof _4d1=="string"){
return $.fn.validatebox.methods[_4d1](this,_4d2);
}
_4d1=_4d1||{};
return this.each(function(){
var _4d3=$.data(this,"validatebox");
if(_4d3){
$.extend(_4d3.options,_4d1);
}else{
init(this);
_4d3=$.data(this,"validatebox",{options:$.extend({},$.fn.validatebox.defaults,$.fn.validatebox.parseOptions(this),_4d1)});
}
_4d3.options._validateOnCreate=_4d3.options.validateOnCreate;
_4cc(this,_4d3.options.disabled);
_4cf(this,_4d3.options.readonly);
_4a8(this);
_4bd(this);
});
};
$.fn.validatebox.methods={options:function(jq){
return $.data(jq[0],"validatebox").options;
},destroy:function(jq){
return jq.each(function(){
_4a5(this);
});
},validate:function(jq){
return jq.each(function(){
_4bd(this);
});
},isValid:function(jq){
return _4bd(jq[0]);
},enableValidation:function(jq){
return jq.each(function(){
$(this).validatebox("options").novalidate=false;
_4a8(this);
_4bd(this);
});
},disableValidation:function(jq){
return jq.each(function(){
$(this).validatebox("options").novalidate=true;
_4a8(this);
_4bd(this);
});
},resetValidation:function(jq){
return jq.each(function(){
var opts=$(this).validatebox("options");
opts._validateOnCreate=opts.validateOnCreate;
_4bd(this);
});
},enable:function(jq){
return jq.each(function(){
_4cc(this,false);
_4a8(this);
_4bd(this);
});
},disable:function(jq){
return jq.each(function(){
_4cc(this,true);
_4a8(this);
_4bd(this);
});
},readonly:function(jq,mode){
return jq.each(function(){
_4cf(this,mode);
_4a8(this);
_4bd(this);
});
}};
$.fn.validatebox.parseOptions=function(_4d4){
var t=$(_4d4);
return $.extend({},$.parser.parseOptions(_4d4,["validType","missingMessage","invalidMessage","tipPosition",{delay:"number",interval:"number",deltaX:"number"},{editable:"boolean",validateOnCreate:"boolean",validateOnBlur:"boolean"}]),{required:(t.attr("required")?true:undefined),disabled:(t.attr("disabled")?true:undefined),readonly:(t.attr("readonly")?true:undefined),novalidate:(t.attr("novalidate")!=undefined?true:undefined)});
};
$.fn.validatebox.defaults={required:false,validType:null,validParams:null,delay:200,interval:200,missingMessage:"This field is required.",invalidMessage:null,tipPosition:"right",deltaX:0,deltaY:0,novalidate:false,editable:true,disabled:false,readonly:false,validateOnCreate:true,validateOnBlur:false,events:{focus:_4ab,blur:_4af,mouseenter:_4b2,mouseleave:_4b5,click:function(e){
var t=$(e.data.target);
if(t.attr("type")=="checkbox"||t.attr("type")=="radio"){
t.focus().validatebox("validate");
}
}},val:function(_4d5){
return $(_4d5).val();
},err:function(_4d6,_4d7,_4d8){
_4b8(_4d6,_4d7,_4d8);
},tipOptions:{showEvent:"none",hideEvent:"none",showDelay:0,hideDelay:0,zIndex:"",onShow:function(){
$(this).tooltip("tip").css({color:"#000",borderColor:"#CC9933",backgroundColor:"#FFFFCC"});
},onHide:function(){
$(this).tooltip("destroy");
}},rules:{email:{validator:function(_4d9){
return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(_4d9);
},message:"Please enter a valid email address."},url:{validator:function(_4da){
return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(_4da);
},message:"Please enter a valid URL."},length:{validator:function(_4db,_4dc){
var len=$.trim(_4db).length;
return len>=_4dc[0]&&len<=_4dc[1];
},message:"Please enter a value between {0} and {1}."},remote:{validator:function(_4dd,_4de){
var data={};
data[_4de[1]]=_4dd;
var _4df=$.ajax({url:_4de[0],dataType:"json",data:data,async:false,cache:false,type:"post"}).responseText;
return _4df=="true";
},message:"Please fix this field."}},onBeforeValidate:function(){
},onValidate:function(_4e0){
}};
})(jQuery);
(function($){
var _4e1=0;
function init(_4e2){
$(_4e2).addClass("textbox-f").hide();
var span=$("<span class=\"textbox\">"+"<input class=\"textbox-text\" autocomplete=\"off\">"+"<input type=\"hidden\" class=\"textbox-value\">"+"</span>").insertAfter(_4e2);
var name=$(_4e2).attr("name");
if(name){
span.find("input.textbox-value").attr("name",name);
$(_4e2).removeAttr("name").attr("textboxName",name);
}
return span;
};
function _4e3(_4e4){
var _4e5=$.data(_4e4,"textbox");
var opts=_4e5.options;
var tb=_4e5.textbox;
var _4e6="_easyui_textbox_input"+(++_4e1);
tb.addClass(opts.cls);
tb.find(".textbox-text").remove();
if(opts.multiline){
$("<textarea id=\""+_4e6+"\" class=\"textbox-text\" autocomplete=\"off\"></textarea>").prependTo(tb);
}else{
$("<input id=\""+_4e6+"\" type=\""+opts.type+"\" class=\"textbox-text\" autocomplete=\"off\">").prependTo(tb);
}
$("#"+_4e6).attr("tabindex",$(_4e4).attr("tabindex")||"").css("text-align",_4e4.style.textAlign||"");
tb.find(".textbox-addon").remove();
var bb=opts.icons?$.extend(true,[],opts.icons):[];
if(opts.iconCls){
bb.push({iconCls:opts.iconCls,disabled:true});
}
if(bb.length){
var bc=$("<span class=\"textbox-addon\"></span>").prependTo(tb);
bc.addClass("textbox-addon-"+opts.iconAlign);
for(var i=0;i<bb.length;i++){
bc.append("<a href=\"javascript:;\" class=\"textbox-icon "+bb[i].iconCls+"\" icon-index=\""+i+"\" tabindex=\"-1\"></a>");
}
}
tb.find(".textbox-button").remove();
if(opts.buttonText||opts.buttonIcon){
var btn=$("<a href=\"javascript:;\" class=\"textbox-button\"></a>").prependTo(tb);
btn.addClass("textbox-button-"+opts.buttonAlign).linkbutton({text:opts.buttonText,iconCls:opts.buttonIcon,onClick:function(){
var t=$(this).parent().prev();
t.textbox("options").onClickButton.call(t[0]);
}});
}
if(opts.label){
if(typeof opts.label=="object"){
_4e5.label=$(opts.label);
_4e5.label.attr("for",_4e6);
}else{
$(_4e5.label).remove();
_4e5.label=$("<label class=\"textbox-label\"></label>").html(opts.label);
_4e5.label.css("textAlign",opts.labelAlign).attr("for",_4e6);
if(opts.labelPosition=="after"){
_4e5.label.insertAfter(tb);
}else{
_4e5.label.insertBefore(_4e4);
}
_4e5.label.removeClass("textbox-label-left textbox-label-right textbox-label-top");
_4e5.label.addClass("textbox-label-"+opts.labelPosition);
}
}else{
$(_4e5.label).remove();
}
_4e7(_4e4);
_4e8(_4e4,opts.disabled);
_4e9(_4e4,opts.readonly);
};
function _4ea(_4eb){
var tb=$.data(_4eb,"textbox").textbox;
tb.find(".textbox-text").validatebox("destroy");
tb.remove();
$(_4eb).remove();
};
function _4ec(_4ed,_4ee){
var _4ef=$.data(_4ed,"textbox");
var opts=_4ef.options;
var tb=_4ef.textbox;
var _4f0=tb.parent();
if(_4ee){
if(typeof _4ee=="object"){
$.extend(opts,_4ee);
}else{
opts.width=_4ee;
}
}
if(isNaN(parseInt(opts.width))){
var c=$(_4ed).clone();
c.css("visibility","hidden");
c.insertAfter(_4ed);
opts.width=c.outerWidth();
c.remove();
}
var _4f1=tb.is(":visible");
if(!_4f1){
tb.appendTo("body");
}
var _4f2=tb.find(".textbox-text");
var btn=tb.find(".textbox-button");
var _4f3=tb.find(".textbox-addon");
var _4f4=_4f3.find(".textbox-icon");
if(opts.height=="auto"){
_4f2.css({margin:"",paddingTop:"",paddingBottom:"",height:"",lineHeight:""});
}
tb._size(opts,_4f0);
if(opts.label&&opts.labelPosition){
if(opts.labelPosition=="top"){
_4ef.label._size({width:opts.labelWidth=="auto"?tb.outerWidth():opts.labelWidth},tb);
if(opts.height!="auto"){
tb._size("height",tb.outerHeight()-_4ef.label.outerHeight());
}
}else{
_4ef.label._size({width:opts.labelWidth,height:tb.outerHeight()},tb);
if(!opts.multiline){
_4ef.label.css("lineHeight",_4ef.label.height()+"px");
}
tb._size("width",tb.outerWidth()-_4ef.label.outerWidth());
}
}
if(opts.buttonAlign=="left"||opts.buttonAlign=="right"){
btn.linkbutton("resize",{height:tb.height()});
}else{
btn.linkbutton("resize",{width:"100%"});
}
var _4f5=tb.width()-_4f4.length*opts.iconWidth-_4f6("left")-_4f6("right");
var _4f7=opts.height=="auto"?_4f2.outerHeight():(tb.height()-_4f6("top")-_4f6("bottom"));
_4f3.css(opts.iconAlign,_4f6(opts.iconAlign)+"px");
_4f3.css("top",_4f6("top")+"px");
_4f4.css({width:opts.iconWidth+"px",height:_4f7+"px"});
_4f2.css({paddingLeft:(_4ed.style.paddingLeft||""),paddingRight:(_4ed.style.paddingRight||""),marginLeft:_4f8("left"),marginRight:_4f8("right"),marginTop:_4f6("top"),marginBottom:_4f6("bottom")});
if(opts.multiline){
_4f2.css({paddingTop:(_4ed.style.paddingTop||""),paddingBottom:(_4ed.style.paddingBottom||"")});
_4f2._outerHeight(_4f7);
}else{
_4f2.css({paddingTop:0,paddingBottom:0,height:_4f7+"px",lineHeight:_4f7+"px"});
}
_4f2._outerWidth(_4f5);
opts.onResizing.call(_4ed,opts.width,opts.height);
if(!_4f1){
tb.insertAfter(_4ed);
}
opts.onResize.call(_4ed,opts.width,opts.height);
function _4f8(_4f9){
return (opts.iconAlign==_4f9?_4f3._outerWidth():0)+_4f6(_4f9);
};
function _4f6(_4fa){
var w=0;
btn.filter(".textbox-button-"+_4fa).each(function(){
if(_4fa=="left"||_4fa=="right"){
w+=$(this).outerWidth();
}else{
w+=$(this).outerHeight();
}
});
return w;
};
};
function _4e7(_4fb){
var opts=$(_4fb).textbox("options");
var _4fc=$(_4fb).textbox("textbox");
_4fc.validatebox($.extend({},opts,{deltaX:function(_4fd){
return $(_4fb).textbox("getTipX",_4fd);
},deltaY:function(_4fe){
return $(_4fb).textbox("getTipY",_4fe);
},onBeforeValidate:function(){
opts.onBeforeValidate.call(_4fb);
var box=$(this);
if(!box.is(":focus")){
if(box.val()!==opts.value){
opts.oldInputValue=box.val();
box.val(opts.value);
}
}
},onValidate:function(_4ff){
var box=$(this);
if(opts.oldInputValue!=undefined){
box.val(opts.oldInputValue);
opts.oldInputValue=undefined;
}
var tb=box.parent();
if(_4ff){
tb.removeClass("textbox-invalid");
}else{
tb.addClass("textbox-invalid");
}
opts.onValidate.call(_4fb,_4ff);
}}));
};
function _500(_501){
var _502=$.data(_501,"textbox");
var opts=_502.options;
var tb=_502.textbox;
var _503=tb.find(".textbox-text");
_503.attr("placeholder",opts.prompt);
_503.unbind(".textbox");
$(_502.label).unbind(".textbox");
if(!opts.disabled&&!opts.readonly){
if(_502.label){
$(_502.label).bind("click.textbox",function(e){
if(!opts.hasFocusMe){
_503.focus();
$(_501).textbox("setSelectionRange",{start:0,end:_503.val().length});
}
});
}
_503.bind("blur.textbox",function(e){
if(!tb.hasClass("textbox-focused")){
return;
}
opts.value=$(this).val();
if(opts.value==""){
$(this).val(opts.prompt).addClass("textbox-prompt");
}else{
$(this).removeClass("textbox-prompt");
}
tb.removeClass("textbox-focused");
}).bind("focus.textbox",function(e){
opts.hasFocusMe=true;
if(tb.hasClass("textbox-focused")){
return;
}
if($(this).val()!=opts.value){
$(this).val(opts.value);
}
$(this).removeClass("textbox-prompt");
tb.addClass("textbox-focused");
});
for(var _504 in opts.inputEvents){
_503.bind(_504+".textbox",{target:_501},opts.inputEvents[_504]);
}
}
var _505=tb.find(".textbox-addon");
_505.unbind().bind("click",{target:_501},function(e){
var icon=$(e.target).closest("a.textbox-icon:not(.textbox-icon-disabled)");
if(icon.length){
var _506=parseInt(icon.attr("icon-index"));
var conf=opts.icons[_506];
if(conf&&conf.handler){
conf.handler.call(icon[0],e);
}
opts.onClickIcon.call(_501,_506);
}
});
_505.find(".textbox-icon").each(function(_507){
var conf=opts.icons[_507];
var icon=$(this);
if(!conf||conf.disabled||opts.disabled||opts.readonly){
icon.addClass("textbox-icon-disabled");
}else{
icon.removeClass("textbox-icon-disabled");
}
});
var btn=tb.find(".textbox-button");
btn.linkbutton((opts.disabled||opts.readonly)?"disable":"enable");
tb.unbind(".textbox").bind("_resize.textbox",function(e,_508){
if($(this).hasClass("easyui-fluid")||_508){
_4ec(_501);
}
return false;
});
};
function _4e8(_509,_50a){
var _50b=$.data(_509,"textbox");
var opts=_50b.options;
var tb=_50b.textbox;
var _50c=tb.find(".textbox-text");
var ss=$(_509).add(tb.find(".textbox-value"));
opts.disabled=_50a;
if(opts.disabled){
_50c.blur();
_50c.validatebox("disable");
tb.addClass("textbox-disabled");
ss.attr("disabled","disabled");
$(_50b.label).addClass("textbox-label-disabled");
}else{
_50c.validatebox("enable");
tb.removeClass("textbox-disabled");
ss.removeAttr("disabled");
$(_50b.label).removeClass("textbox-label-disabled");
}
};
function _4e9(_50d,mode){
var _50e=$.data(_50d,"textbox");
var opts=_50e.options;
var tb=_50e.textbox;
var _50f=tb.find(".textbox-text");
opts.readonly=mode==undefined?true:mode;
if(opts.readonly){
_50f.triggerHandler("blur.textbox");
}
_50f.validatebox("readonly",opts.readonly);
tb.removeClass("textbox-readonly").addClass(opts.readonly?"textbox-readonly":"");
};
$.fn.textbox=function(_510,_511){
if(typeof _510=="string"){
var _512=$.fn.textbox.methods[_510];
if(_512){
return _512(this,_511);
}else{
return this.each(function(){
var _513=$(this).textbox("textbox");
_513.validatebox(_510,_511);
});
}
}
_510=_510||{};
return this.each(function(){
var _514=$.data(this,"textbox");
if(_514){
$.extend(_514.options,_510);
if(_510.value!=undefined){
_514.options.originalValue=_510.value;
}
}else{
_514=$.data(this,"textbox",{options:$.extend({},$.fn.textbox.defaults,$.fn.textbox.parseOptions(this),_510),textbox:init(this)});
_514.options.originalValue=_514.options.value;
}
_4e3(this);
_500(this);
if(_514.options.doSize){
_4ec(this);
}
var _515=_514.options.value;
_514.options.value="";
$(this).textbox("initValue",_515);
});
};
$.fn.textbox.methods={options:function(jq){
return $.data(jq[0],"textbox").options;
},cloneFrom:function(jq,from){
return jq.each(function(){
var t=$(this);
if(t.data("textbox")){
return;
}
if(!$(from).data("textbox")){
$(from).textbox();
}
var opts=$.extend(true,{},$(from).textbox("options"));
var name=t.attr("name")||"";
t.addClass("textbox-f").hide();
t.removeAttr("name").attr("textboxName",name);
var span=$(from).next().clone().insertAfter(t);
var _516="_easyui_textbox_input"+(++_4e1);
span.find(".textbox-value").attr("name",name);
span.find(".textbox-text").attr("id",_516);
var _517=$($(from).textbox("label")).clone();
if(_517.length){
_517.attr("for",_516);
if(opts.labelPosition=="after"){
_517.insertAfter(t.next());
}else{
_517.insertBefore(t);
}
}
$.data(this,"textbox",{options:opts,textbox:span,label:(_517.length?_517:undefined)});
var _518=$(from).textbox("button");
if(_518.length){
t.textbox("button").linkbutton($.extend(true,{},_518.linkbutton("options")));
}
_500(this);
_4e7(this);
});
},textbox:function(jq){
return $.data(jq[0],"textbox").textbox.find(".textbox-text");
},button:function(jq){
return $.data(jq[0],"textbox").textbox.find(".textbox-button");
},label:function(jq){
return $.data(jq[0],"textbox").label;
},destroy:function(jq){
return jq.each(function(){
_4ea(this);
});
},resize:function(jq,_519){
return jq.each(function(){
_4ec(this,_519);
});
},disable:function(jq){
return jq.each(function(){
_4e8(this,true);
_500(this);
});
},enable:function(jq){
return jq.each(function(){
_4e8(this,false);
_500(this);
});
},readonly:function(jq,mode){
return jq.each(function(){
_4e9(this,mode);
_500(this);
});
},isValid:function(jq){
return jq.textbox("textbox").validatebox("isValid");
},clear:function(jq){
return jq.each(function(){
$(this).textbox("setValue","");
});
},setText:function(jq,_51a){
return jq.each(function(){
var opts=$(this).textbox("options");
var _51b=$(this).textbox("textbox");
_51a=_51a==undefined?"":String(_51a);
if($(this).textbox("getText")!=_51a){
_51b.val(_51a);
}
opts.value=_51a;
if(!_51b.is(":focus")){
if(_51a){
_51b.removeClass("textbox-prompt");
}else{
_51b.val(opts.prompt).addClass("textbox-prompt");
}
}
$(this).textbox("validate");
});
},initValue:function(jq,_51c){
return jq.each(function(){
var _51d=$.data(this,"textbox");
$(this).textbox("setText",_51c);
_51d.textbox.find(".textbox-value").val(_51c);
$(this).val(_51c);
});
},setValue:function(jq,_51e){
return jq.each(function(){
var opts=$.data(this,"textbox").options;
var _51f=$(this).textbox("getValue");
$(this).textbox("initValue",_51e);
if(_51f!=_51e){
opts.onChange.call(this,_51e,_51f);
$(this).closest("form").trigger("_change",[this]);
}
});
},getText:function(jq){
var _520=jq.textbox("textbox");
if(_520.is(":focus")){
return _520.val();
}else{
return jq.textbox("options").value;
}
},getValue:function(jq){
return jq.data("textbox").textbox.find(".textbox-value").val();
},reset:function(jq){
return jq.each(function(){
var opts=$(this).textbox("options");
$(this).textbox("setValue",opts.originalValue);
});
},getIcon:function(jq,_521){
return jq.data("textbox").textbox.find(".textbox-icon:eq("+_521+")");
},getTipX:function(jq,_522){
var _523=jq.data("textbox");
var opts=_523.options;
var tb=_523.textbox;
var _524=tb.find(".textbox-text");
var _522=_522||opts.tipPosition;
var p1=tb.offset();
var p2=_524.offset();
var w1=tb.outerWidth();
var w2=_524.outerWidth();
if(_522=="right"){
return w1-w2-p2.left+p1.left;
}else{
if(_522=="left"){
return p1.left-p2.left;
}else{
return (w1-w2-p2.left+p1.left)/2-(p2.left-p1.left)/2;
}
}
},getTipY:function(jq,_525){
var _526=jq.data("textbox");
var opts=_526.options;
var tb=_526.textbox;
var _527=tb.find(".textbox-text");
var _525=_525||opts.tipPosition;
var p1=tb.offset();
var p2=_527.offset();
var h1=tb.outerHeight();
var h2=_527.outerHeight();
if(_525=="left"||_525=="right"){
return (h1-h2-p2.top+p1.top)/2-(p2.top-p1.top)/2;
}else{
if(_525=="bottom"){
return (h1-h2-p2.top+p1.top);
}else{
return (p1.top-p2.top);
}
}
},getSelectionStart:function(jq){
return jq.textbox("getSelectionRange").start;
},getSelectionRange:function(jq){
var _528=jq.textbox("textbox")[0];
var _529=0;
var end=0;
if(typeof _528.selectionStart=="number"){
_529=_528.selectionStart;
end=_528.selectionEnd;
}else{
if(_528.createTextRange){
var s=document.selection.createRange();
var _52a=_528.createTextRange();
_52a.setEndPoint("EndToStart",s);
_529=_52a.text.length;
end=_529+s.text.length;
}
}
return {start:_529,end:end};
},setSelectionRange:function(jq,_52b){
return jq.each(function(){
var _52c=$(this).textbox("textbox")[0];
var _52d=_52b.start;
var end=_52b.end;
if(_52c.setSelectionRange){
_52c.setSelectionRange(_52d,end);
}else{
if(_52c.createTextRange){
var _52e=_52c.createTextRange();
_52e.collapse();
_52e.moveEnd("character",end);
_52e.moveStart("character",_52d);
_52e.select();
}
}
});
}};
$.fn.textbox.parseOptions=function(_52f){
var t=$(_52f);
return $.extend({},$.fn.validatebox.parseOptions(_52f),$.parser.parseOptions(_52f,["prompt","iconCls","iconAlign","buttonText","buttonIcon","buttonAlign","label","labelPosition","labelAlign",{multiline:"boolean",iconWidth:"number",labelWidth:"number"}]),{value:(t.val()||undefined),type:(t.attr("type")?t.attr("type"):undefined)});
};
$.fn.textbox.defaults=$.extend({},$.fn.validatebox.defaults,{doSize:true,width:"auto",height:"auto",cls:null,prompt:"",value:"",type:"text",multiline:false,icons:[],iconCls:null,iconAlign:"right",iconWidth:18,buttonText:"",buttonIcon:null,buttonAlign:"right",label:null,labelWidth:"auto",labelPosition:"before",labelAlign:"left",inputEvents:{blur:function(e){
var t=$(e.data.target);
var opts=t.textbox("options");
if(t.textbox("getValue")!=opts.value){
t.textbox("setValue",opts.value);
}
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.textbox("setValue",t.textbox("getText"));
}
}},onChange:function(_530,_531){
},onResizing:function(_532,_533){
},onResize:function(_534,_535){
},onClickButton:function(){
},onClickIcon:function(_536){
}});
})(jQuery);
(function($){
function _537(_538){
var _539=$.data(_538,"passwordbox");
var opts=_539.options;
var _53a=$.extend(true,[],opts.icons);
if(opts.showEye){
_53a.push({iconCls:"passwordbox-open",handler:function(e){
opts.revealed=!opts.revealed;
_53b(_538);
}});
}
$(_538).addClass("passwordbox-f").textbox($.extend({},opts,{icons:_53a}));
_53b(_538);
};
function _53c(_53d,_53e,all){
var t=$(_53d);
var opts=t.passwordbox("options");
if(opts.revealed){
t.textbox("setValue",_53e);
return;
}
var _53f=unescape(opts.passwordChar);
var cc=_53e.split("");
var vv=t.passwordbox("getValue").split("");
for(var i=0;i<cc.length;i++){
var c=cc[i];
if(c!=vv[i]){
if(c!=_53f){
vv.splice(i,0,c);
}
}
}
var pos=t.passwordbox("getSelectionStart");
if(cc.length<vv.length){
vv.splice(pos,vv.length-cc.length,"");
}
for(var i=0;i<cc.length;i++){
if(all||i!=pos-1){
cc[i]=_53f;
}
}
t.textbox("setValue",vv.join(""));
t.textbox("setText",cc.join(""));
t.textbox("setSelectionRange",{start:pos,end:pos});
};
function _53b(_540,_541){
var t=$(_540);
var opts=t.passwordbox("options");
var icon=t.next().find(".passwordbox-open");
var _542=unescape(opts.passwordChar);
_541=_541==undefined?t.textbox("getValue"):_541;
t.textbox("setValue",_541);
t.textbox("setText",opts.revealed?_541:_541.replace(/./ig,_542));
opts.revealed?icon.addClass("passwordbox-close"):icon.removeClass("passwordbox-close");
};
function _543(e){
var _544=e.data.target;
var t=$(e.data.target);
var _545=t.data("passwordbox");
var opts=t.data("passwordbox").options;
_545.checking=true;
_545.value=t.passwordbox("getText");
(function(){
if(_545.checking){
var _546=t.passwordbox("getText");
if(_545.value!=_546){
_545.value=_546;
if(_545.lastTimer){
clearTimeout(_545.lastTimer);
_545.lastTimer=undefined;
}
_53c(_544,_546);
_545.lastTimer=setTimeout(function(){
_53c(_544,t.passwordbox("getText"),true);
_545.lastTimer=undefined;
},opts.lastDelay);
}
setTimeout(arguments.callee,opts.checkInterval);
}
})();
};
function _547(e){
var _548=e.data.target;
var _549=$(_548).data("passwordbox");
_549.checking=false;
if(_549.lastTimer){
clearTimeout(_549.lastTimer);
_549.lastTimer=undefined;
}
_53b(_548);
};
$.fn.passwordbox=function(_54a,_54b){
if(typeof _54a=="string"){
var _54c=$.fn.passwordbox.methods[_54a];
if(_54c){
return _54c(this,_54b);
}else{
return this.textbox(_54a,_54b);
}
}
_54a=_54a||{};
return this.each(function(){
var _54d=$.data(this,"passwordbox");
if(_54d){
$.extend(_54d.options,_54a);
}else{
_54d=$.data(this,"passwordbox",{options:$.extend({},$.fn.passwordbox.defaults,$.fn.passwordbox.parseOptions(this),_54a)});
}
_537(this);
});
};
$.fn.passwordbox.methods={options:function(jq){
return $.data(jq[0],"passwordbox").options;
},setValue:function(jq,_54e){
return jq.each(function(){
_53b(this,_54e);
});
},clear:function(jq){
return jq.each(function(){
_53b(this,"");
});
},reset:function(jq){
return jq.each(function(){
$(this).textbox("reset");
_53b(this);
});
},showPassword:function(jq){
return jq.each(function(){
var opts=$(this).passwordbox("options");
opts.revealed=true;
_53b(this);
});
},hidePassword:function(jq){
return jq.each(function(){
var opts=$(this).passwordbox("options");
opts.revealed=false;
_53b(this);
});
}};
$.fn.passwordbox.parseOptions=function(_54f){
return $.extend({},$.fn.textbox.parseOptions(_54f),$.parser.parseOptions(_54f,["passwordChar",{checkInterval:"number",lastDelay:"number",revealed:"boolean",showEye:"boolean"}]));
};
$.fn.passwordbox.defaults=$.extend({},$.fn.textbox.defaults,{passwordChar:"%u25CF",checkInterval:200,lastDelay:500,revealed:false,showEye:true,inputEvents:{focus:_543,blur:_547},val:function(_550){
return $(_550).parent().prev().passwordbox("getValue");
}});
})(jQuery);
(function($){
var _551=0;
function _552(_553){
var _554=$.data(_553,"filebox");
var opts=_554.options;
opts.fileboxId="filebox_file_id_"+(++_551);
$(_553).addClass("filebox-f").textbox(opts);
$(_553).textbox("textbox").attr("readonly","readonly");
_554.filebox=$(_553).next().addClass("filebox");
var file=_555(_553);
var btn=$(_553).filebox("button");
if(btn.length){
$("<label class=\"filebox-label\" for=\""+opts.fileboxId+"\"></label>").appendTo(btn);
if(btn.linkbutton("options").disabled){
file.attr("disabled","disabled");
}else{
file.removeAttr("disabled");
}
}
};
function _555(_556){
var _557=$.data(_556,"filebox");
var opts=_557.options;
_557.filebox.find(".textbox-value").remove();
opts.oldValue="";
var file=$("<input type=\"file\" class=\"textbox-value\">").appendTo(_557.filebox);
file.attr("id",opts.fileboxId).attr("name",$(_556).attr("textboxName")||"");
file.attr("accept",opts.accept);
if(opts.multiple){
file.attr("multiple","multiple");
}
file.change(function(){
var _558=this.value;
if(this.files){
_558=$.map(this.files,function(file){
return file.name;
}).join(opts.separator);
}
$(_556).filebox("setText",_558);
opts.onChange.call(_556,_558,opts.oldValue);
opts.oldValue=_558;
});
return file;
};
$.fn.filebox=function(_559,_55a){
if(typeof _559=="string"){
var _55b=$.fn.filebox.methods[_559];
if(_55b){
return _55b(this,_55a);
}else{
return this.textbox(_559,_55a);
}
}
_559=_559||{};
return this.each(function(){
var _55c=$.data(this,"filebox");
if(_55c){
$.extend(_55c.options,_559);
}else{
$.data(this,"filebox",{options:$.extend({},$.fn.filebox.defaults,$.fn.filebox.parseOptions(this),_559)});
}
_552(this);
});
};
$.fn.filebox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"filebox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("clear");
_555(this);
});
},reset:function(jq){
return jq.each(function(){
$(this).filebox("clear");
});
},setValue:function(jq){
return jq;
},setValues:function(jq){
return jq;
}};
$.fn.filebox.parseOptions=function(_55d){
var t=$(_55d);
return $.extend({},$.fn.textbox.parseOptions(_55d),$.parser.parseOptions(_55d,["accept","separator"]),{multiple:(t.attr("multiple")?true:undefined)});
};
$.fn.filebox.defaults=$.extend({},$.fn.textbox.defaults,{buttonIcon:null,buttonText:"Choose File",buttonAlign:"right",inputEvents:{},accept:"",separator:",",multiple:false});
})(jQuery);
(function($){
function _55e(_55f){
var _560=$.data(_55f,"searchbox");
var opts=_560.options;
var _561=$.extend(true,[],opts.icons);
_561.push({iconCls:"searchbox-button",handler:function(e){
var t=$(e.data.target);
var opts=t.searchbox("options");
opts.searcher.call(e.data.target,t.searchbox("getValue"),t.searchbox("getName"));
}});
_562();
var _563=_564();
$(_55f).addClass("searchbox-f").textbox($.extend({},opts,{icons:_561,buttonText:(_563?_563.text:"")}));
$(_55f).attr("searchboxName",$(_55f).attr("textboxName"));
_560.searchbox=$(_55f).next();
_560.searchbox.addClass("searchbox");
_565(_563);
function _562(){
if(opts.menu){
_560.menu=$(opts.menu).menu();
var _566=_560.menu.menu("options");
var _567=_566.onClick;
_566.onClick=function(item){
_565(item);
_567.call(this,item);
};
}else{
if(_560.menu){
_560.menu.menu("destroy");
}
_560.menu=null;
}
};
function _564(){
if(_560.menu){
var item=_560.menu.children("div.menu-item:first");
_560.menu.children("div.menu-item").each(function(){
var _568=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
if(_568.selected){
item=$(this);
return false;
}
});
return _560.menu.menu("getItem",item[0]);
}else{
return null;
}
};
function _565(item){
if(!item){
return;
}
$(_55f).textbox("button").menubutton({text:item.text,iconCls:(item.iconCls||null),menu:_560.menu,menuAlign:opts.buttonAlign,plain:false});
_560.searchbox.find("input.textbox-value").attr("name",item.name||item.text);
$(_55f).searchbox("resize");
};
};
$.fn.searchbox=function(_569,_56a){
if(typeof _569=="string"){
var _56b=$.fn.searchbox.methods[_569];
if(_56b){
return _56b(this,_56a);
}else{
return this.textbox(_569,_56a);
}
}
_569=_569||{};
return this.each(function(){
var _56c=$.data(this,"searchbox");
if(_56c){
$.extend(_56c.options,_569);
}else{
$.data(this,"searchbox",{options:$.extend({},$.fn.searchbox.defaults,$.fn.searchbox.parseOptions(this),_569)});
}
_55e(this);
});
};
$.fn.searchbox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"searchbox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},menu:function(jq){
return $.data(jq[0],"searchbox").menu;
},getName:function(jq){
return $.data(jq[0],"searchbox").searchbox.find("input.textbox-value").attr("name");
},selectName:function(jq,name){
return jq.each(function(){
var menu=$.data(this,"searchbox").menu;
if(menu){
menu.children("div.menu-item").each(function(){
var item=menu.menu("getItem",this);
if(item.name==name){
$(this).triggerHandler("click");
return false;
}
});
}
});
},destroy:function(jq){
return jq.each(function(){
var menu=$(this).searchbox("menu");
if(menu){
menu.menu("destroy");
}
$(this).textbox("destroy");
});
}};
$.fn.searchbox.parseOptions=function(_56d){
var t=$(_56d);
return $.extend({},$.fn.textbox.parseOptions(_56d),$.parser.parseOptions(_56d,["menu"]),{searcher:(t.attr("searcher")?eval(t.attr("searcher")):undefined)});
};
$.fn.searchbox.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:$.extend({},$.fn.textbox.defaults.inputEvents,{keydown:function(e){
if(e.keyCode==13){
e.preventDefault();
var t=$(e.data.target);
var opts=t.searchbox("options");
t.searchbox("setValue",$(this).val());
opts.searcher.call(e.data.target,t.searchbox("getValue"),t.searchbox("getName"));
return false;
}
}}),buttonAlign:"left",menu:null,searcher:function(_56e,name){
}});
})(jQuery);
(function($){
function _56f(_570,_571){
var opts=$.data(_570,"form").options;
$.extend(opts,_571||{});
var _572=$.extend({},opts.queryParams);
if(opts.onSubmit.call(_570,_572)==false){
return;
}
var _573=$(_570).find(".textbox-text:focus");
_573.triggerHandler("blur");
_573.focus();
var _574=null;
if(opts.dirty){
var ff=[];
$.map(opts.dirtyFields,function(f){
if($(f).hasClass("textbox-f")){
$(f).next().find(".textbox-value").each(function(){
ff.push(this);
});
}else{
ff.push(f);
}
});
_574=$(_570).find("input[name]:enabled,textarea[name]:enabled,select[name]:enabled").filter(function(){
return $.inArray(this,ff)==-1;
});
_574.attr("disabled","disabled");
}
if(opts.ajax){
if(opts.iframe){
_575(_570,_572);
}else{
if(window.FormData!==undefined){
_576(_570,_572);
}else{
_575(_570,_572);
}
}
}else{
$(_570).submit();
}
if(opts.dirty){
_574.removeAttr("disabled");
}
};
function _575(_577,_578){
var opts=$.data(_577,"form").options;
var _579="easyui_frame_"+(new Date().getTime());
var _57a=$("<iframe id="+_579+" name="+_579+"></iframe>").appendTo("body");
_57a.attr("src",window.ActiveXObject?"javascript:false":"about:blank");
_57a.css({position:"absolute",top:-1000,left:-1000});
_57a.bind("load",cb);
_57b(_578);
function _57b(_57c){
var form=$(_577);
if(opts.url){
form.attr("action",opts.url);
}
var t=form.attr("target"),a=form.attr("action");
form.attr("target",_579);
var _57d=$();
try{
for(var n in _57c){
var _57e=$("<input type=\"hidden\" name=\""+n+"\">").val(_57c[n]).appendTo(form);
_57d=_57d.add(_57e);
}
_57f();
form[0].submit();
}
finally{
form.attr("action",a);
t?form.attr("target",t):form.removeAttr("target");
_57d.remove();
}
};
function _57f(){
var f=$("#"+_579);
if(!f.length){
return;
}
try{
var s=f.contents()[0].readyState;
if(s&&s.toLowerCase()=="uninitialized"){
setTimeout(_57f,100);
}
}
catch(e){
cb();
}
};
var _580=10;
function cb(){
var f=$("#"+_579);
if(!f.length){
return;
}
f.unbind();
var data="";
try{
var body=f.contents().find("body");
data=body.html();
if(data==""){
if(--_580){
setTimeout(cb,100);
return;
}
}
var ta=body.find(">textarea");
if(ta.length){
data=ta.val();
}else{
var pre=body.find(">pre");
if(pre.length){
data=pre.html();
}
}
}
catch(e){
}
opts.success.call(_577,data);
setTimeout(function(){
f.unbind();
f.remove();
},100);
};
};
function _576(_581,_582){
var opts=$.data(_581,"form").options;
var _583=new FormData($(_581)[0]);
for(var name in _582){
_583.append(name,_582[name]);
}
$.ajax({url:opts.url,type:"post",xhr:function(){
var xhr=$.ajaxSettings.xhr();
if(xhr.upload){
xhr.upload.addEventListener("progress",function(e){
if(e.lengthComputable){
var _584=e.total;
var _585=e.loaded||e.position;
var _586=Math.ceil(_585*100/_584);
opts.onProgress.call(_581,_586);
}
},false);
}
return xhr;
},data:_583,dataType:"html",cache:false,contentType:false,processData:false,complete:function(res){
opts.success.call(_581,res.responseText);
}});
};
function load(_587,data){
var opts=$.data(_587,"form").options;
if(typeof data=="string"){
var _588={};
if(opts.onBeforeLoad.call(_587,_588)==false){
return;
}
$.ajax({url:data,data:_588,dataType:"json",success:function(data){
_589(data);
},error:function(){
opts.onLoadError.apply(_587,arguments);
}});
}else{
_589(data);
}
function _589(data){
var form=$(_587);
for(var name in data){
var val=data[name];
if(!_58a(name,val)){
if(!_58b(name,val)){
form.find("input[name=\""+name+"\"]").val(val);
form.find("textarea[name=\""+name+"\"]").val(val);
form.find("select[name=\""+name+"\"]").val(val);
}
}
}
opts.onLoadSuccess.call(_587,data);
form.form("validate");
};
function _58a(name,val){
var cc=$(_587).find("[switchbuttonName=\""+name+"\"]");
if(cc.length){
cc.switchbutton("uncheck");
cc.each(function(){
if(_58c($(this).switchbutton("options").value,val)){
$(this).switchbutton("check");
}
});
return true;
}
cc=$(_587).find("input[name=\""+name+"\"][type=radio], input[name=\""+name+"\"][type=checkbox]");
if(cc.length){
cc._propAttr("checked",false);
cc.each(function(){
if(_58c($(this).val(),val)){
$(this)._propAttr("checked",true);
}
});
return true;
}
return false;
};
function _58c(v,val){
if(v==String(val)||$.inArray(v,$.isArray(val)?val:[val])>=0){
return true;
}else{
return false;
}
};
function _58b(name,val){
var _58d=$(_587).find("[textboxName=\""+name+"\"],[sliderName=\""+name+"\"]");
if(_58d.length){
for(var i=0;i<opts.fieldTypes.length;i++){
var type=opts.fieldTypes[i];
var _58e=_58d.data(type);
if(_58e){
if(_58e.options.multiple||_58e.options.range){
_58d[type]("setValues",val);
}else{
_58d[type]("setValue",val);
}
return true;
}
}
}
return false;
};
};
function _58f(_590){
$("input,select,textarea",_590).each(function(){
if($(this).hasClass("textbox-value")){
return;
}
var t=this.type,tag=this.tagName.toLowerCase();
if(t=="text"||t=="hidden"||t=="password"||tag=="textarea"){
this.value="";
}else{
if(t=="file"){
var file=$(this);
if(!file.hasClass("textbox-value")){
var _591=file.clone().val("");
_591.insertAfter(file);
if(file.data("validatebox")){
file.validatebox("destroy");
_591.validatebox();
}else{
file.remove();
}
}
}else{
if(t=="checkbox"||t=="radio"){
this.checked=false;
}else{
if(tag=="select"){
this.selectedIndex=-1;
}
}
}
}
});
var tmp=$();
var form=$(_590);
var opts=$.data(_590,"form").options;
for(var i=0;i<opts.fieldTypes.length;i++){
var type=opts.fieldTypes[i];
var _592=form.find("."+type+"-f").not(tmp);
if(_592.length&&_592[type]){
_592[type]("clear");
tmp=tmp.add(_592);
}
}
form.form("validate");
};
function _593(_594){
_594.reset();
var form=$(_594);
var opts=$.data(_594,"form").options;
for(var i=opts.fieldTypes.length-1;i>=0;i--){
var type=opts.fieldTypes[i];
var _595=form.find("."+type+"-f");
if(_595.length&&_595[type]){
_595[type]("reset");
}
}
form.form("validate");
};
function _596(_597){
var _598=$.data(_597,"form").options;
$(_597).unbind(".form");
if(_598.ajax){
$(_597).bind("submit.form",function(){
setTimeout(function(){
_56f(_597,_598);
},0);
return false;
});
}
$(_597).bind("_change.form",function(e,t){
if($.inArray(t,_598.dirtyFields)==-1){
_598.dirtyFields.push(t);
}
_598.onChange.call(this,t);
}).bind("change.form",function(e){
var t=e.target;
if(!$(t).hasClass("textbox-text")){
if($.inArray(t,_598.dirtyFields)==-1){
_598.dirtyFields.push(t);
}
_598.onChange.call(this,t);
}
});
_599(_597,_598.novalidate);
};
function _59a(_59b,_59c){
_59c=_59c||{};
var _59d=$.data(_59b,"form");
if(_59d){
$.extend(_59d.options,_59c);
}else{
$.data(_59b,"form",{options:$.extend({},$.fn.form.defaults,$.fn.form.parseOptions(_59b),_59c)});
}
};
function _59e(_59f){
if($.fn.validatebox){
var t=$(_59f);
t.find(".validatebox-text:not(:disabled)").validatebox("validate");
var _5a0=t.find(".validatebox-invalid");
_5a0.filter(":not(:disabled):first").focus();
return _5a0.length==0;
}
return true;
};
function _599(_5a1,_5a2){
var opts=$.data(_5a1,"form").options;
opts.novalidate=_5a2;
$(_5a1).find(".validatebox-text:not(:disabled)").validatebox(_5a2?"disableValidation":"enableValidation");
};
$.fn.form=function(_5a3,_5a4){
if(typeof _5a3=="string"){
this.each(function(){
_59a(this);
});
return $.fn.form.methods[_5a3](this,_5a4);
}
return this.each(function(){
_59a(this,_5a3);
_596(this);
});
};
$.fn.form.methods={options:function(jq){
return $.data(jq[0],"form").options;
},submit:function(jq,_5a5){
return jq.each(function(){
_56f(this,_5a5);
});
},load:function(jq,data){
return jq.each(function(){
load(this,data);
});
},clear:function(jq){
return jq.each(function(){
_58f(this);
});
},reset:function(jq){
return jq.each(function(){
_593(this);
});
},validate:function(jq){
return _59e(jq[0]);
},disableValidation:function(jq){
return jq.each(function(){
_599(this,true);
});
},enableValidation:function(jq){
return jq.each(function(){
_599(this,false);
});
},resetValidation:function(jq){
return jq.each(function(){
$(this).find(".validatebox-text:not(:disabled)").validatebox("resetValidation");
});
},resetDirty:function(jq){
return jq.each(function(){
$(this).form("options").dirtyFields=[];
});
}};
$.fn.form.parseOptions=function(_5a6){
var t=$(_5a6);
return $.extend({},$.parser.parseOptions(_5a6,[{ajax:"boolean",dirty:"boolean"}]),{url:(t.attr("action")?t.attr("action"):undefined)});
};
$.fn.form.defaults={fieldTypes:["combobox","combotree","combogrid","combotreegrid","datetimebox","datebox","combo","datetimespinner","timespinner","numberspinner","spinner","slider","searchbox","numberbox","passwordbox","filebox","textbox","switchbutton"],novalidate:false,ajax:true,iframe:true,dirty:false,dirtyFields:[],url:null,queryParams:{},onSubmit:function(_5a7){
return $(this).form("validate");
},onProgress:function(_5a8){
},success:function(data){
},onBeforeLoad:function(_5a9){
},onLoadSuccess:function(data){
},onLoadError:function(){
},onChange:function(_5aa){
}};
})(jQuery);
(function($){
function _5ab(_5ac){
var _5ad=$.data(_5ac,"numberbox");
var opts=_5ad.options;
$(_5ac).addClass("numberbox-f").textbox(opts);
$(_5ac).textbox("textbox").css({imeMode:"disabled"});
$(_5ac).attr("numberboxName",$(_5ac).attr("textboxName"));
_5ad.numberbox=$(_5ac).next();
_5ad.numberbox.addClass("numberbox");
var _5ae=opts.parser.call(_5ac,opts.value);
var _5af=opts.formatter.call(_5ac,_5ae);
$(_5ac).numberbox("initValue",_5ae).numberbox("setText",_5af);
};
function _5b0(_5b1,_5b2){
var _5b3=$.data(_5b1,"numberbox");
var opts=_5b3.options;
opts.value=parseFloat(_5b2);
var _5b2=opts.parser.call(_5b1,_5b2);
var text=opts.formatter.call(_5b1,_5b2);
opts.value=_5b2;
$(_5b1).textbox("setText",text).textbox("setValue",_5b2);
text=opts.formatter.call(_5b1,$(_5b1).textbox("getValue"));
$(_5b1).textbox("setText",text);
};
$.fn.numberbox=function(_5b4,_5b5){
if(typeof _5b4=="string"){
var _5b6=$.fn.numberbox.methods[_5b4];
if(_5b6){
return _5b6(this,_5b5);
}else{
return this.textbox(_5b4,_5b5);
}
}
_5b4=_5b4||{};
return this.each(function(){
var _5b7=$.data(this,"numberbox");
if(_5b7){
$.extend(_5b7.options,_5b4);
}else{
_5b7=$.data(this,"numberbox",{options:$.extend({},$.fn.numberbox.defaults,$.fn.numberbox.parseOptions(this),_5b4)});
}
_5ab(this);
});
};
$.fn.numberbox.methods={options:function(jq){
var opts=jq.data("textbox")?jq.textbox("options"):{};
return $.extend($.data(jq[0],"numberbox").options,{width:opts.width,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},fix:function(jq){
return jq.each(function(){
var opts=$(this).numberbox("options");
opts.value=null;
var _5b8=opts.parser.call(this,$(this).numberbox("getText"));
$(this).numberbox("setValue",_5b8);
});
},setValue:function(jq,_5b9){
return jq.each(function(){
_5b0(this,_5b9);
});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("clear");
$(this).numberbox("options").value="";
});
},reset:function(jq){
return jq.each(function(){
$(this).textbox("reset");
$(this).numberbox("setValue",$(this).numberbox("getValue"));
});
}};
$.fn.numberbox.parseOptions=function(_5ba){
var t=$(_5ba);
return $.extend({},$.fn.textbox.parseOptions(_5ba),$.parser.parseOptions(_5ba,["decimalSeparator","groupSeparator","suffix",{min:"number",max:"number",precision:"number"}]),{prefix:(t.attr("prefix")?t.attr("prefix"):undefined)});
};
$.fn.numberbox.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:{keypress:function(e){
var _5bb=e.data.target;
var opts=$(_5bb).numberbox("options");
return opts.filter.call(_5bb,e);
},blur:function(e){
$(e.data.target).numberbox("fix");
},keydown:function(e){
if(e.keyCode==13){
$(e.data.target).numberbox("fix");
}
}},min:null,max:null,precision:0,decimalSeparator:".",groupSeparator:"",prefix:"",suffix:"",filter:function(e){
var opts=$(this).numberbox("options");
var s=$(this).numberbox("getText");
if(e.metaKey||e.ctrlKey){
return true;
}
if($.inArray(String(e.which),["46","8","13","0"])>=0){
return true;
}
var tmp=$("<span></span>");
tmp.html(String.fromCharCode(e.which));
var c=tmp.text();
tmp.remove();
if(!c){
return true;
}
if(c=="-"||c==opts.decimalSeparator){
return (s.indexOf(c)==-1)?true:false;
}else{
if(c==opts.groupSeparator){
return true;
}else{
if("0123456789".indexOf(c)>=0){
return true;
}else{
return false;
}
}
}
},formatter:function(_5bc){
if(!_5bc){
return _5bc;
}
_5bc=_5bc+"";
var opts=$(this).numberbox("options");
var s1=_5bc,s2="";
var dpos=_5bc.indexOf(".");
if(dpos>=0){
s1=_5bc.substring(0,dpos);
s2=_5bc.substring(dpos+1,_5bc.length);
}
if(opts.groupSeparator){
var p=/(\d+)(\d{3})/;
while(p.test(s1)){
s1=s1.replace(p,"$1"+opts.groupSeparator+"$2");
}
}
if(s2){
return opts.prefix+s1+opts.decimalSeparator+s2+opts.suffix;
}else{
return opts.prefix+s1+opts.suffix;
}
},parser:function(s){
s=s+"";
var opts=$(this).numberbox("options");
if(opts.prefix){
s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.prefix),"g"),""));
}
if(opts.suffix){
s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.suffix),"g"),""));
}
if(parseFloat(s)!=opts.value){
if(opts.groupSeparator){
s=$.trim(s.replace(new RegExp("\\"+opts.groupSeparator,"g"),""));
}
if(opts.decimalSeparator){
s=$.trim(s.replace(new RegExp("\\"+opts.decimalSeparator,"g"),"."));
}
s=s.replace(/\s/g,"");
}
var val=parseFloat(s).toFixed(opts.precision);
if(isNaN(val)){
val="";
}else{
if(typeof (opts.min)=="number"&&val<opts.min){
val=opts.min.toFixed(opts.precision);
}else{
if(typeof (opts.max)=="number"&&val>opts.max){
val=opts.max.toFixed(opts.precision);
}
}
}
return val;
}});
})(jQuery);
(function($){
function _5bd(_5be,_5bf){
var opts=$.data(_5be,"calendar").options;
var t=$(_5be);
if(_5bf){
$.extend(opts,{width:_5bf.width,height:_5bf.height});
}
t._size(opts,t.parent());
t.find(".calendar-body")._outerHeight(t.height()-t.find(".calendar-header")._outerHeight());
if(t.find(".calendar-menu").is(":visible")){
_5c0(_5be);
}
};
function init(_5c1){
$(_5c1).addClass("calendar").html("<div class=\"calendar-header\">"+"<div class=\"calendar-nav calendar-prevmonth\"></div>"+"<div class=\"calendar-nav calendar-nextmonth\"></div>"+"<div class=\"calendar-nav calendar-prevyear\"></div>"+"<div class=\"calendar-nav calendar-nextyear\"></div>"+"<div class=\"calendar-title\">"+"<span class=\"calendar-text\"></span>"+"</div>"+"</div>"+"<div class=\"calendar-body\">"+"<div class=\"calendar-menu\">"+"<div class=\"calendar-menu-year-inner\">"+"<span class=\"calendar-nav calendar-menu-prev\"></span>"+"<span><input class=\"calendar-menu-year\" type=\"text\"></input></span>"+"<span class=\"calendar-nav calendar-menu-next\"></span>"+"</div>"+"<div class=\"calendar-menu-month-inner\">"+"</div>"+"</div>"+"</div>");
$(_5c1).bind("_resize",function(e,_5c2){
if($(this).hasClass("easyui-fluid")||_5c2){
_5bd(_5c1);
}
return false;
});
};
function _5c3(_5c4){
var opts=$.data(_5c4,"calendar").options;
var menu=$(_5c4).find(".calendar-menu");
menu.find(".calendar-menu-year").unbind(".calendar").bind("keypress.calendar",function(e){
if(e.keyCode==13){
_5c5(true);
}
});
$(_5c4).unbind(".calendar").bind("mouseover.calendar",function(e){
var t=_5c6(e.target);
if(t.hasClass("calendar-nav")||t.hasClass("calendar-text")||(t.hasClass("calendar-day")&&!t.hasClass("calendar-disabled"))){
t.addClass("calendar-nav-hover");
}
}).bind("mouseout.calendar",function(e){
var t=_5c6(e.target);
if(t.hasClass("calendar-nav")||t.hasClass("calendar-text")||(t.hasClass("calendar-day")&&!t.hasClass("calendar-disabled"))){
t.removeClass("calendar-nav-hover");
}
}).bind("click.calendar",function(e){
var t=_5c6(e.target);
if(t.hasClass("calendar-menu-next")||t.hasClass("calendar-nextyear")){
_5c7(1);
}else{
if(t.hasClass("calendar-menu-prev")||t.hasClass("calendar-prevyear")){
_5c7(-1);
}else{
if(t.hasClass("calendar-menu-month")){
menu.find(".calendar-selected").removeClass("calendar-selected");
t.addClass("calendar-selected");
_5c5(true);
}else{
if(t.hasClass("calendar-prevmonth")){
_5c8(-1);
}else{
if(t.hasClass("calendar-nextmonth")){
_5c8(1);
}else{
if(t.hasClass("calendar-text")){
if(menu.is(":visible")){
menu.hide();
}else{
_5c0(_5c4);
}
}else{
if(t.hasClass("calendar-day")){
if(t.hasClass("calendar-disabled")){
return;
}
var _5c9=opts.current;
t.closest("div.calendar-body").find(".calendar-selected").removeClass("calendar-selected");
t.addClass("calendar-selected");
var _5ca=t.attr("abbr").split(",");
var y=parseInt(_5ca[0]);
var m=parseInt(_5ca[1]);
var d=parseInt(_5ca[2]);
opts.current=new Date(y,m-1,d);
opts.onSelect.call(_5c4,opts.current);
if(!_5c9||_5c9.getTime()!=opts.current.getTime()){
opts.onChange.call(_5c4,opts.current,_5c9);
}
if(opts.year!=y||opts.month!=m){
opts.year=y;
opts.month=m;
show(_5c4);
}
}
}
}
}
}
}
}
});
function _5c6(t){
var day=$(t).closest(".calendar-day");
if(day.length){
return day;
}else{
return $(t);
}
};
function _5c5(_5cb){
var menu=$(_5c4).find(".calendar-menu");
var year=menu.find(".calendar-menu-year").val();
var _5cc=menu.find(".calendar-selected").attr("abbr");
if(!isNaN(year)){
opts.year=parseInt(year);
opts.month=parseInt(_5cc);
show(_5c4);
}
if(_5cb){
menu.hide();
}
};
function _5c7(_5cd){
opts.year+=_5cd;
show(_5c4);
menu.find(".calendar-menu-year").val(opts.year);
};
function _5c8(_5ce){
opts.month+=_5ce;
if(opts.month>12){
opts.year++;
opts.month=1;
}else{
if(opts.month<1){
opts.year--;
opts.month=12;
}
}
show(_5c4);
menu.find("td.calendar-selected").removeClass("calendar-selected");
menu.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
};
};
function _5c0(_5cf){
var opts=$.data(_5cf,"calendar").options;
$(_5cf).find(".calendar-menu").show();
if($(_5cf).find(".calendar-menu-month-inner").is(":empty")){
$(_5cf).find(".calendar-menu-month-inner").empty();
var t=$("<table class=\"calendar-mtable\"></table>").appendTo($(_5cf).find(".calendar-menu-month-inner"));
var idx=0;
for(var i=0;i<3;i++){
var tr=$("<tr></tr>").appendTo(t);
for(var j=0;j<4;j++){
$("<td class=\"calendar-nav calendar-menu-month\"></td>").html(opts.months[idx++]).attr("abbr",idx).appendTo(tr);
}
}
}
var body=$(_5cf).find(".calendar-body");
var sele=$(_5cf).find(".calendar-menu");
var _5d0=sele.find(".calendar-menu-year-inner");
var _5d1=sele.find(".calendar-menu-month-inner");
_5d0.find("input").val(opts.year).focus();
_5d1.find("td.calendar-selected").removeClass("calendar-selected");
_5d1.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
sele._outerWidth(body._outerWidth());
sele._outerHeight(body._outerHeight());
_5d1._outerHeight(sele.height()-_5d0._outerHeight());
};
function _5d2(_5d3,year,_5d4){
var opts=$.data(_5d3,"calendar").options;
var _5d5=[];
var _5d6=new Date(year,_5d4,0).getDate();
for(var i=1;i<=_5d6;i++){
_5d5.push([year,_5d4,i]);
}
var _5d7=[],week=[];
var _5d8=-1;
while(_5d5.length>0){
var date=_5d5.shift();
week.push(date);
var day=new Date(date[0],date[1]-1,date[2]).getDay();
if(_5d8==day){
day=0;
}else{
if(day==(opts.firstDay==0?7:opts.firstDay)-1){
_5d7.push(week);
week=[];
}
}
_5d8=day;
}
if(week.length){
_5d7.push(week);
}
var _5d9=_5d7[0];
if(_5d9.length<7){
while(_5d9.length<7){
var _5da=_5d9[0];
var date=new Date(_5da[0],_5da[1]-1,_5da[2]-1);
_5d9.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
}else{
var _5da=_5d9[0];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_5da[0],_5da[1]-1,_5da[2]-i);
week.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_5d7.unshift(week);
}
var _5db=_5d7[_5d7.length-1];
while(_5db.length<7){
var _5dc=_5db[_5db.length-1];
var date=new Date(_5dc[0],_5dc[1]-1,_5dc[2]+1);
_5db.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
if(_5d7.length<6){
var _5dc=_5db[_5db.length-1];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_5dc[0],_5dc[1]-1,_5dc[2]+i);
week.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_5d7.push(week);
}
return _5d7;
};
function show(_5dd){
var opts=$.data(_5dd,"calendar").options;
if(opts.current&&!opts.validator.call(_5dd,opts.current)){
opts.current=null;
}
var now=new Date();
var _5de=now.getFullYear()+","+(now.getMonth()+1)+","+now.getDate();
var _5df=opts.current?(opts.current.getFullYear()+","+(opts.current.getMonth()+1)+","+opts.current.getDate()):"";
var _5e0=6-opts.firstDay;
var _5e1=_5e0+1;
if(_5e0>=7){
_5e0-=7;
}
if(_5e1>=7){
_5e1-=7;
}
$(_5dd).find(".calendar-title span").html(opts.months[opts.month-1]+" "+opts.year);
var body=$(_5dd).find("div.calendar-body");
body.children("table").remove();
var data=["<table class=\"calendar-dtable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];
data.push("<thead><tr>");
if(opts.showWeek){
data.push("<th class=\"calendar-week\">"+opts.weekNumberHeader+"</th>");
}
for(var i=opts.firstDay;i<opts.weeks.length;i++){
data.push("<th>"+opts.weeks[i]+"</th>");
}
for(var i=0;i<opts.firstDay;i++){
data.push("<th>"+opts.weeks[i]+"</th>");
}
data.push("</tr></thead>");
data.push("<tbody>");
var _5e2=_5d2(_5dd,opts.year,opts.month);
for(var i=0;i<_5e2.length;i++){
var week=_5e2[i];
var cls="";
if(i==0){
cls="calendar-first";
}else{
if(i==_5e2.length-1){
cls="calendar-last";
}
}
data.push("<tr class=\""+cls+"\">");
if(opts.showWeek){
var _5e3=opts.getWeekNumber(new Date(week[0][0],parseInt(week[0][1])-1,week[0][2]));
data.push("<td class=\"calendar-week\">"+_5e3+"</td>");
}
for(var j=0;j<week.length;j++){
var day=week[j];
var s=day[0]+","+day[1]+","+day[2];
var _5e4=new Date(day[0],parseInt(day[1])-1,day[2]);
var d=opts.formatter.call(_5dd,_5e4);
var css=opts.styler.call(_5dd,_5e4);
var _5e5="";
var _5e6="";
if(typeof css=="string"){
_5e6=css;
}else{
if(css){
_5e5=css["class"]||"";
_5e6=css["style"]||"";
}
}
var cls="calendar-day";
if(!(opts.year==day[0]&&opts.month==day[1])){
cls+=" calendar-other-month";
}
if(s==_5de){
cls+=" calendar-today";
}
if(s==_5df){
cls+=" calendar-selected";
}
if(j==_5e0){
cls+=" calendar-saturday";
}else{
if(j==_5e1){
cls+=" calendar-sunday";
}
}
if(j==0){
cls+=" calendar-first";
}else{
if(j==week.length-1){
cls+=" calendar-last";
}
}
cls+=" "+_5e5;
if(!opts.validator.call(_5dd,_5e4)){
cls+=" calendar-disabled";
}
data.push("<td class=\""+cls+"\" abbr=\""+s+"\" style=\""+_5e6+"\">"+d+"</td>");
}
data.push("</tr>");
}
data.push("</tbody>");
data.push("</table>");
body.append(data.join(""));
body.children("table.calendar-dtable").prependTo(body);
opts.onNavigate.call(_5dd,opts.year,opts.month);
};
$.fn.calendar=function(_5e7,_5e8){
if(typeof _5e7=="string"){
return $.fn.calendar.methods[_5e7](this,_5e8);
}
_5e7=_5e7||{};
return this.each(function(){
var _5e9=$.data(this,"calendar");
if(_5e9){
$.extend(_5e9.options,_5e7);
}else{
_5e9=$.data(this,"calendar",{options:$.extend({},$.fn.calendar.defaults,$.fn.calendar.parseOptions(this),_5e7)});
init(this);
}
if(_5e9.options.border==false){
$(this).addClass("calendar-noborder");
}
_5bd(this);
_5c3(this);
show(this);
$(this).find("div.calendar-menu").hide();
});
};
$.fn.calendar.methods={options:function(jq){
return $.data(jq[0],"calendar").options;
},resize:function(jq,_5ea){
return jq.each(function(){
_5bd(this,_5ea);
});
},moveTo:function(jq,date){
return jq.each(function(){
if(!date){
var now=new Date();
$(this).calendar({year:now.getFullYear(),month:now.getMonth()+1,current:date});
return;
}
var opts=$(this).calendar("options");
if(opts.validator.call(this,date)){
var _5eb=opts.current;
$(this).calendar({year:date.getFullYear(),month:date.getMonth()+1,current:date});
if(!_5eb||_5eb.getTime()!=date.getTime()){
opts.onChange.call(this,opts.current,_5eb);
}
}
});
}};
$.fn.calendar.parseOptions=function(_5ec){
var t=$(_5ec);
return $.extend({},$.parser.parseOptions(_5ec,["weekNumberHeader",{firstDay:"number",fit:"boolean",border:"boolean",showWeek:"boolean"}]));
};
$.fn.calendar.defaults={width:180,height:180,fit:false,border:true,showWeek:false,firstDay:0,weeks:["S","M","T","W","T","F","S"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:new Date().getFullYear(),month:new Date().getMonth()+1,current:(function(){
var d=new Date();
return new Date(d.getFullYear(),d.getMonth(),d.getDate());
})(),weekNumberHeader:"",getWeekNumber:function(date){
var _5ed=new Date(date.getTime());
_5ed.setDate(_5ed.getDate()+4-(_5ed.getDay()||7));
var time=_5ed.getTime();
_5ed.setMonth(0);
_5ed.setDate(1);
return Math.floor(Math.round((time-_5ed)/86400000)/7)+1;
},formatter:function(date){
return date.getDate();
},styler:function(date){
return "";
},validator:function(date){
return true;
},onSelect:function(date){
},onChange:function(_5ee,_5ef){
},onNavigate:function(year,_5f0){
}};
})(jQuery);
(function($){
function _5f1(_5f2){
var _5f3=$.data(_5f2,"spinner");
var opts=_5f3.options;
var _5f4=$.extend(true,[],opts.icons);
if(opts.spinAlign=="left"||opts.spinAlign=="right"){
opts.spinArrow=true;
opts.iconAlign=opts.spinAlign;
var _5f5={iconCls:"spinner-arrow",handler:function(e){
var spin=$(e.target).closest(".spinner-arrow-up,.spinner-arrow-down");
_5ff(e.data.target,spin.hasClass("spinner-arrow-down"));
}};
if(opts.spinAlign=="left"){
_5f4.unshift(_5f5);
}else{
_5f4.push(_5f5);
}
}else{
opts.spinArrow=false;
if(opts.spinAlign=="vertical"){
if(opts.buttonAlign!="top"){
opts.buttonAlign="bottom";
}
opts.clsLeft="textbox-button-bottom";
opts.clsRight="textbox-button-top";
}else{
opts.clsLeft="textbox-button-left";
opts.clsRight="textbox-button-right";
}
}
$(_5f2).addClass("spinner-f").textbox($.extend({},opts,{icons:_5f4,doSize:false,onResize:function(_5f6,_5f7){
if(!opts.spinArrow){
var span=$(this).next();
var btn=span.find(".textbox-button:not(.spinner-button)");
if(btn.length){
var _5f8=btn.outerWidth();
var _5f9=btn.outerHeight();
var _5fa=span.find(".spinner-button."+opts.clsLeft);
var _5fb=span.find(".spinner-button."+opts.clsRight);
if(opts.buttonAlign=="right"){
_5fb.css("marginRight",_5f8+"px");
}else{
if(opts.buttonAlign=="left"){
_5fa.css("marginLeft",_5f8+"px");
}else{
if(opts.buttonAlign=="top"){
_5fb.css("marginTop",_5f9+"px");
}else{
_5fa.css("marginBottom",_5f9+"px");
}
}
}
}
}
opts.onResize.call(this,_5f6,_5f7);
}}));
$(_5f2).attr("spinnerName",$(_5f2).attr("textboxName"));
_5f3.spinner=$(_5f2).next();
_5f3.spinner.addClass("spinner");
if(opts.spinArrow){
var _5fc=_5f3.spinner.find(".spinner-arrow");
_5fc.append("<a href=\"javascript:;\" class=\"spinner-arrow-up\" tabindex=\"-1\"></a>");
_5fc.append("<a href=\"javascript:;\" class=\"spinner-arrow-down\" tabindex=\"-1\"></a>");
}else{
var _5fd=$("<a href=\"javascript:;\" class=\"textbox-button spinner-button\"></a>").addClass(opts.clsLeft).appendTo(_5f3.spinner);
var _5fe=$("<a href=\"javascript:;\" class=\"textbox-button spinner-button\"></a>").addClass(opts.clsRight).appendTo(_5f3.spinner);
_5fd.linkbutton({iconCls:opts.reversed?"spinner-button-up":"spinner-button-down",onClick:function(){
_5ff(_5f2,!opts.reversed);
}});
_5fe.linkbutton({iconCls:opts.reversed?"spinner-button-down":"spinner-button-up",onClick:function(){
_5ff(_5f2,opts.reversed);
}});
if(opts.disabled){
$(_5f2).spinner("disable");
}
if(opts.readonly){
$(_5f2).spinner("readonly");
}
}
$(_5f2).spinner("resize");
};
function _5ff(_600,down){
var opts=$(_600).spinner("options");
opts.spin.call(_600,down);
opts[down?"onSpinDown":"onSpinUp"].call(_600);
$(_600).spinner("validate");
};
$.fn.spinner=function(_601,_602){
if(typeof _601=="string"){
var _603=$.fn.spinner.methods[_601];
if(_603){
return _603(this,_602);
}else{
return this.textbox(_601,_602);
}
}
_601=_601||{};
return this.each(function(){
var _604=$.data(this,"spinner");
if(_604){
$.extend(_604.options,_601);
}else{
_604=$.data(this,"spinner",{options:$.extend({},$.fn.spinner.defaults,$.fn.spinner.parseOptions(this),_601)});
}
_5f1(this);
});
};
$.fn.spinner.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"spinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.spinner.parseOptions=function(_605){
return $.extend({},$.fn.textbox.parseOptions(_605),$.parser.parseOptions(_605,["min","max","spinAlign",{increment:"number",reversed:"boolean"}]));
};
$.fn.spinner.defaults=$.extend({},$.fn.textbox.defaults,{min:null,max:null,increment:1,spinAlign:"right",reversed:false,spin:function(down){
},onSpinUp:function(){
},onSpinDown:function(){
}});
})(jQuery);
(function($){
function _606(_607){
$(_607).addClass("numberspinner-f");
var opts=$.data(_607,"numberspinner").options;
$(_607).numberbox($.extend({},opts,{doSize:false})).spinner(opts);
$(_607).numberbox("setValue",opts.value);
};
function _608(_609,down){
var opts=$.data(_609,"numberspinner").options;
var v=parseFloat($(_609).numberbox("getValue")||opts.value)||0;
if(down){
v-=opts.increment;
}else{
v+=opts.increment;
}
$(_609).numberbox("setValue",v);
};
$.fn.numberspinner=function(_60a,_60b){
if(typeof _60a=="string"){
var _60c=$.fn.numberspinner.methods[_60a];
if(_60c){
return _60c(this,_60b);
}else{
return this.numberbox(_60a,_60b);
}
}
_60a=_60a||{};
return this.each(function(){
var _60d=$.data(this,"numberspinner");
if(_60d){
$.extend(_60d.options,_60a);
}else{
$.data(this,"numberspinner",{options:$.extend({},$.fn.numberspinner.defaults,$.fn.numberspinner.parseOptions(this),_60a)});
}
_606(this);
});
};
$.fn.numberspinner.methods={options:function(jq){
var opts=jq.numberbox("options");
return $.extend($.data(jq[0],"numberspinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.numberspinner.parseOptions=function(_60e){
return $.extend({},$.fn.spinner.parseOptions(_60e),$.fn.numberbox.parseOptions(_60e),{});
};
$.fn.numberspinner.defaults=$.extend({},$.fn.spinner.defaults,$.fn.numberbox.defaults,{spin:function(down){
_608(this,down);
}});
})(jQuery);
(function($){
function _60f(_610){
var opts=$.data(_610,"timespinner").options;
$(_610).addClass("timespinner-f").spinner(opts);
var _611=opts.formatter.call(_610,opts.parser.call(_610,opts.value));
$(_610).timespinner("initValue",_611);
};
function _612(e){
var _613=e.data.target;
var opts=$.data(_613,"timespinner").options;
var _614=$(_613).timespinner("getSelectionStart");
for(var i=0;i<opts.selections.length;i++){
var _615=opts.selections[i];
if(_614>=_615[0]&&_614<=_615[1]){
_616(_613,i);
return;
}
}
};
function _616(_617,_618){
var opts=$.data(_617,"timespinner").options;
if(_618!=undefined){
opts.highlight=_618;
}
var _619=opts.selections[opts.highlight];
if(_619){
var tb=$(_617).timespinner("textbox");
$(_617).timespinner("setSelectionRange",{start:_619[0],end:_619[1]});
tb.focus();
}
};
function _61a(_61b,_61c){
var opts=$.data(_61b,"timespinner").options;
var _61c=opts.parser.call(_61b,_61c);
var text=opts.formatter.call(_61b,_61c);
$(_61b).spinner("setValue",text);
};
function _61d(_61e,down){
var opts=$.data(_61e,"timespinner").options;
var s=$(_61e).timespinner("getValue");
var _61f=opts.selections[opts.highlight];
var s1=s.substring(0,_61f[0]);
var s2=s.substring(_61f[0],_61f[1]);
var s3=s.substring(_61f[1]);
var v=s1+((parseInt(s2,10)||0)+opts.increment*(down?-1:1))+s3;
$(_61e).timespinner("setValue",v);
_616(_61e);
};
$.fn.timespinner=function(_620,_621){
if(typeof _620=="string"){
var _622=$.fn.timespinner.methods[_620];
if(_622){
return _622(this,_621);
}else{
return this.spinner(_620,_621);
}
}
_620=_620||{};
return this.each(function(){
var _623=$.data(this,"timespinner");
if(_623){
$.extend(_623.options,_620);
}else{
$.data(this,"timespinner",{options:$.extend({},$.fn.timespinner.defaults,$.fn.timespinner.parseOptions(this),_620)});
}
_60f(this);
});
};
$.fn.timespinner.methods={options:function(jq){
var opts=jq.data("spinner")?jq.spinner("options"):{};
return $.extend($.data(jq[0],"timespinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},setValue:function(jq,_624){
return jq.each(function(){
_61a(this,_624);
});
},getHours:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[0],10);
},getMinutes:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[1],10);
},getSeconds:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[2],10)||0;
}};
$.fn.timespinner.parseOptions=function(_625){
return $.extend({},$.fn.spinner.parseOptions(_625),$.parser.parseOptions(_625,["separator",{showSeconds:"boolean",highlight:"number"}]));
};
$.fn.timespinner.defaults=$.extend({},$.fn.spinner.defaults,{inputEvents:$.extend({},$.fn.spinner.defaults.inputEvents,{click:function(e){
_612.call(this,e);
},blur:function(e){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
}
}}),formatter:function(date){
if(!date){
return "";
}
var opts=$(this).timespinner("options");
var tt=[_626(date.getHours()),_626(date.getMinutes())];
if(opts.showSeconds){
tt.push(_626(date.getSeconds()));
}
return tt.join(opts.separator);
function _626(_627){
return (_627<10?"0":"")+_627;
};
},parser:function(s){
var opts=$(this).timespinner("options");
var date=_628(s);
if(date){
var min=_628(opts.min);
var max=_628(opts.max);
if(min&&min>date){
date=min;
}
if(max&&max<date){
date=max;
}
}
return date;
function _628(s){
if(!s){
return null;
}
var tt=s.split(opts.separator);
return new Date(1900,0,0,parseInt(tt[0],10)||0,parseInt(tt[1],10)||0,parseInt(tt[2],10)||0);
};
},selections:[[0,2],[3,5],[6,8]],separator:":",showSeconds:false,highlight:0,spin:function(down){
_61d(this,down);
}});
})(jQuery);
(function($){
function _629(_62a){
var opts=$.data(_62a,"datetimespinner").options;
$(_62a).addClass("datetimespinner-f").timespinner(opts);
};
$.fn.datetimespinner=function(_62b,_62c){
if(typeof _62b=="string"){
var _62d=$.fn.datetimespinner.methods[_62b];
if(_62d){
return _62d(this,_62c);
}else{
return this.timespinner(_62b,_62c);
}
}
_62b=_62b||{};
return this.each(function(){
var _62e=$.data(this,"datetimespinner");
if(_62e){
$.extend(_62e.options,_62b);
}else{
$.data(this,"datetimespinner",{options:$.extend({},$.fn.datetimespinner.defaults,$.fn.datetimespinner.parseOptions(this),_62b)});
}
_629(this);
});
};
$.fn.datetimespinner.methods={options:function(jq){
var opts=jq.timespinner("options");
return $.extend($.data(jq[0],"datetimespinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.datetimespinner.parseOptions=function(_62f){
return $.extend({},$.fn.timespinner.parseOptions(_62f),$.parser.parseOptions(_62f,[]));
};
$.fn.datetimespinner.defaults=$.extend({},$.fn.timespinner.defaults,{formatter:function(date){
if(!date){
return "";
}
return $.fn.datebox.defaults.formatter.call(this,date)+" "+$.fn.timespinner.defaults.formatter.call(this,date);
},parser:function(s){
s=$.trim(s);
if(!s){
return null;
}
var dt=s.split(" ");
var _630=$.fn.datebox.defaults.parser.call(this,dt[0]);
if(dt.length<2){
return _630;
}
var _631=$.fn.timespinner.defaults.parser.call(this,dt[1]);
return new Date(_630.getFullYear(),_630.getMonth(),_630.getDate(),_631.getHours(),_631.getMinutes(),_631.getSeconds());
},selections:[[0,2],[3,5],[6,10],[11,13],[14,16],[17,19]]});
})(jQuery);
(function($){
var _632=0;
function _633(a,o){
return $.easyui.indexOfArray(a,o);
};
function _634(a,o,id){
$.easyui.removeArrayItem(a,o,id);
};
function _635(a,o,r){
$.easyui.addArrayItem(a,o,r);
};
function _636(_637,aa){
return $.data(_637,"treegrid")?aa.slice(1):aa;
};
function _638(_639){
var _63a=$.data(_639,"datagrid");
var opts=_63a.options;
var _63b=_63a.panel;
var dc=_63a.dc;
var ss=null;
if(opts.sharedStyleSheet){
ss=typeof opts.sharedStyleSheet=="boolean"?"head":opts.sharedStyleSheet;
}else{
ss=_63b.closest("div.datagrid-view");
if(!ss.length){
ss=dc.view;
}
}
var cc=$(ss);
var _63c=$.data(cc[0],"ss");
if(!_63c){
_63c=$.data(cc[0],"ss",{cache:{},dirty:[]});
}
return {add:function(_63d){
var ss=["<style type=\"text/css\" easyui=\"true\">"];
for(var i=0;i<_63d.length;i++){
_63c.cache[_63d[i][0]]={width:_63d[i][1]};
}
var _63e=0;
for(var s in _63c.cache){
var item=_63c.cache[s];
item.index=_63e++;
ss.push(s+"{width:"+item.width+"}");
}
ss.push("</style>");
$(ss.join("\n")).appendTo(cc);
cc.children("style[easyui]:not(:last)").remove();
},getRule:function(_63f){
var _640=cc.children("style[easyui]:last")[0];
var _641=_640.styleSheet?_640.styleSheet:(_640.sheet||document.styleSheets[document.styleSheets.length-1]);
var _642=_641.cssRules||_641.rules;
return _642[_63f];
},set:function(_643,_644){
var item=_63c.cache[_643];
if(item){
item.width=_644;
var rule=this.getRule(item.index);
if(rule){
rule.style["width"]=_644;
}
}
},remove:function(_645){
var tmp=[];
for(var s in _63c.cache){
if(s.indexOf(_645)==-1){
tmp.push([s,_63c.cache[s].width]);
}
}
_63c.cache={};
this.add(tmp);
},dirty:function(_646){
if(_646){
_63c.dirty.push(_646);
}
},clean:function(){
for(var i=0;i<_63c.dirty.length;i++){
this.remove(_63c.dirty[i]);
}
_63c.dirty=[];
}};
};
function _647(_648,_649){
var _64a=$.data(_648,"datagrid");
var opts=_64a.options;
var _64b=_64a.panel;
if(_649){
$.extend(opts,_649);
}
if(opts.fit==true){
var p=_64b.panel("panel").parent();
opts.width=p.width();
opts.height=p.height();
}
_64b.panel("resize",opts);
};
function _64c(_64d){
var _64e=$.data(_64d,"datagrid");
var opts=_64e.options;
var dc=_64e.dc;
var wrap=_64e.panel;
var _64f=wrap.width();
var _650=wrap.height();
var view=dc.view;
var _651=dc.view1;
var _652=dc.view2;
var _653=_651.children("div.datagrid-header");
var _654=_652.children("div.datagrid-header");
var _655=_653.find("table");
var _656=_654.find("table");
view.width(_64f);
var _657=_653.children("div.datagrid-header-inner").show();
_651.width(_657.find("table").width());
if(!opts.showHeader){
_657.hide();
}
_652.width(_64f-_651._outerWidth());
_651.children()._outerWidth(_651.width());
_652.children()._outerWidth(_652.width());
var all=_653.add(_654).add(_655).add(_656);
all.css("height","");
var hh=Math.max(_655.height(),_656.height());
all._outerHeight(hh);
view.children(".datagrid-empty").css("top",hh+"px");
dc.body1.add(dc.body2).children("table.datagrid-btable-frozen").css({position:"absolute",top:dc.header2._outerHeight()});
var _658=dc.body2.children("table.datagrid-btable-frozen")._outerHeight();
var _659=_658+_654._outerHeight()+_652.children(".datagrid-footer")._outerHeight();
wrap.children(":not(.datagrid-view,.datagrid-mask,.datagrid-mask-msg)").each(function(){
_659+=$(this)._outerHeight();
});
var _65a=wrap.outerHeight()-wrap.height();
var _65b=wrap._size("minHeight")||"";
var _65c=wrap._size("maxHeight")||"";
_651.add(_652).children("div.datagrid-body").css({marginTop:_658,height:(isNaN(parseInt(opts.height))?"":(_650-_659)),minHeight:(_65b?_65b-_65a-_659:""),maxHeight:(_65c?_65c-_65a-_659:"")});
view.height(_652.height());
};
function _65d(_65e,_65f,_660){
var rows=$.data(_65e,"datagrid").data.rows;
var opts=$.data(_65e,"datagrid").options;
var dc=$.data(_65e,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight||_660)){
if(_65f!=undefined){
var tr1=opts.finder.getTr(_65e,_65f,"body",1);
var tr2=opts.finder.getTr(_65e,_65f,"body",2);
_661(tr1,tr2);
}else{
var tr1=opts.finder.getTr(_65e,0,"allbody",1);
var tr2=opts.finder.getTr(_65e,0,"allbody",2);
_661(tr1,tr2);
if(opts.showFooter){
var tr1=opts.finder.getTr(_65e,0,"allfooter",1);
var tr2=opts.finder.getTr(_65e,0,"allfooter",2);
_661(tr1,tr2);
}
}
}
_64c(_65e);
if(opts.height=="auto"){
var _662=dc.body1.parent();
var _663=dc.body2;
var _664=_665(_663);
var _666=_664.height;
if(_664.width>_663.width()){
_666+=18;
}
_666-=parseInt(_663.css("marginTop"))||0;
_662.height(_666);
_663.height(_666);
dc.view.height(dc.view2.height());
}
dc.body2.triggerHandler("scroll");
function _661(trs1,trs2){
for(var i=0;i<trs2.length;i++){
var tr1=$(trs1[i]);
var tr2=$(trs2[i]);
tr1.css("height","");
tr2.css("height","");
var _667=Math.max(tr1.height(),tr2.height());
tr1.css("height",_667);
tr2.css("height",_667);
}
};
function _665(cc){
var _668=0;
var _669=0;
$(cc).children().each(function(){
var c=$(this);
if(c.is(":visible")){
_669+=c._outerHeight();
if(_668<c._outerWidth()){
_668=c._outerWidth();
}
}
});
return {width:_668,height:_669};
};
};
function _66a(_66b,_66c){
var _66d=$.data(_66b,"datagrid");
var opts=_66d.options;
var dc=_66d.dc;
if(!dc.body2.children("table.datagrid-btable-frozen").length){
dc.body1.add(dc.body2).prepend("<table class=\"datagrid-btable datagrid-btable-frozen\" cellspacing=\"0\" cellpadding=\"0\"></table>");
}
_66e(true);
_66e(false);
_64c(_66b);
function _66e(_66f){
var _670=_66f?1:2;
var tr=opts.finder.getTr(_66b,_66c,"body",_670);
(_66f?dc.body1:dc.body2).children("table.datagrid-btable-frozen").append(tr);
};
};
function _671(_672,_673){
function _674(){
var _675=[];
var _676=[];
$(_672).children("thead").each(function(){
var opt=$.parser.parseOptions(this,[{frozen:"boolean"}]);
$(this).find("tr").each(function(){
var cols=[];
$(this).find("th").each(function(){
var th=$(this);
var col=$.extend({},$.parser.parseOptions(this,["id","field","align","halign","order","width",{sortable:"boolean",checkbox:"boolean",resizable:"boolean",fixed:"boolean"},{rowspan:"number",colspan:"number"}]),{title:(th.html()||undefined),hidden:(th.attr("hidden")?true:undefined),formatter:(th.attr("formatter")?eval(th.attr("formatter")):undefined),styler:(th.attr("styler")?eval(th.attr("styler")):undefined),sorter:(th.attr("sorter")?eval(th.attr("sorter")):undefined)});
if(col.width&&String(col.width).indexOf("%")==-1){
col.width=parseInt(col.width);
}
if(th.attr("editor")){
var s=$.trim(th.attr("editor"));
if(s.substr(0,1)=="{"){
col.editor=eval("("+s+")");
}else{
col.editor=s;
}
}
cols.push(col);
});
opt.frozen?_675.push(cols):_676.push(cols);
});
});
return [_675,_676];
};
var _677=$("<div class=\"datagrid-wrap\">"+"<div class=\"datagrid-view\">"+"<div class=\"datagrid-view1\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\">"+"<div class=\"datagrid-body-inner\"></div>"+"</div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"<div class=\"datagrid-view2\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\"></div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"</div>"+"</div>").insertAfter(_672);
_677.panel({doSize:false,cls:"datagrid"});
$(_672).addClass("datagrid-f").hide().appendTo(_677.children("div.datagrid-view"));
var cc=_674();
var view=_677.children("div.datagrid-view");
var _678=view.children("div.datagrid-view1");
var _679=view.children("div.datagrid-view2");
return {panel:_677,frozenColumns:cc[0],columns:cc[1],dc:{view:view,view1:_678,view2:_679,header1:_678.children("div.datagrid-header").children("div.datagrid-header-inner"),header2:_679.children("div.datagrid-header").children("div.datagrid-header-inner"),body1:_678.children("div.datagrid-body").children("div.datagrid-body-inner"),body2:_679.children("div.datagrid-body"),footer1:_678.children("div.datagrid-footer").children("div.datagrid-footer-inner"),footer2:_679.children("div.datagrid-footer").children("div.datagrid-footer-inner")}};
};
function _67a(_67b){
var _67c=$.data(_67b,"datagrid");
var opts=_67c.options;
var dc=_67c.dc;
var _67d=_67c.panel;
_67c.ss=$(_67b).datagrid("createStyleSheet");
_67d.panel($.extend({},opts,{id:null,doSize:false,onResize:function(_67e,_67f){
if($.data(_67b,"datagrid")){
_64c(_67b);
$(_67b).datagrid("fitColumns");
opts.onResize.call(_67d,_67e,_67f);
}
},onExpand:function(){
if($.data(_67b,"datagrid")){
$(_67b).datagrid("fixRowHeight").datagrid("fitColumns");
opts.onExpand.call(_67d);
}
}}));
_67c.rowIdPrefix="datagrid-row-r"+(++_632);
_67c.cellClassPrefix="datagrid-cell-c"+_632;
_680(dc.header1,opts.frozenColumns,true);
_680(dc.header2,opts.columns,false);
_681();
dc.header1.add(dc.header2).css("display",opts.showHeader?"block":"none");
dc.footer1.add(dc.footer2).css("display",opts.showFooter?"block":"none");
if(opts.toolbar){
if($.isArray(opts.toolbar)){
$("div.datagrid-toolbar",_67d).remove();
var tb=$("<div class=\"datagrid-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").prependTo(_67d);
var tr=tb.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"datagrid-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:;\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(opts.toolbar).addClass("datagrid-toolbar").prependTo(_67d);
$(opts.toolbar).show();
}
}else{
$("div.datagrid-toolbar",_67d).remove();
}
$("div.datagrid-pager",_67d).remove();
if(opts.pagination){
var _682=$("<div class=\"datagrid-pager\"></div>");
if(opts.pagePosition=="bottom"){
_682.appendTo(_67d);
}else{
if(opts.pagePosition=="top"){
_682.addClass("datagrid-pager-top").prependTo(_67d);
}else{
var ptop=$("<div class=\"datagrid-pager datagrid-pager-top\"></div>").prependTo(_67d);
_682.appendTo(_67d);
_682=_682.add(ptop);
}
}
_682.pagination({total:0,pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_683,_684){
opts.pageNumber=_683||1;
opts.pageSize=_684;
_682.pagination("refresh",{pageNumber:_683,pageSize:_684});
_6cc(_67b);
}});
opts.pageSize=_682.pagination("options").pageSize;
}
function _680(_685,_686,_687){
if(!_686){
return;
}
$(_685).show();
$(_685).empty();
var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-99999px\"></div>").appendTo("body");
tmp._outerWidth(99);
var _688=100-parseInt(tmp[0].style.width);
tmp.remove();
var _689=[];
var _68a=[];
var _68b=[];
if(opts.sortName){
_689=opts.sortName.split(",");
_68a=opts.sortOrder.split(",");
}
var t=$("<table class=\"datagrid-htable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tbody></tbody></table>").appendTo(_685);
for(var i=0;i<_686.length;i++){
var tr=$("<tr class=\"datagrid-header-row\"></tr>").appendTo($("tbody",t));
var cols=_686[i];
for(var j=0;j<cols.length;j++){
var col=cols[j];
var attr="";
if(col.rowspan){
attr+="rowspan=\""+col.rowspan+"\" ";
}
if(col.colspan){
attr+="colspan=\""+col.colspan+"\" ";
if(!col.id){
col.id=["datagrid-td-group"+_632,i,j].join("-");
}
}
if(col.id){
attr+="id=\""+col.id+"\"";
}
var td=$("<td "+attr+"></td>").appendTo(tr);
if(col.checkbox){
td.attr("field",col.field);
$("<div class=\"datagrid-header-check\"></div>").html("<input type=\"checkbox\"/>").appendTo(td);
}else{
if(col.field){
td.attr("field",col.field);
td.append("<div class=\"datagrid-cell\"><span></span><span class=\"datagrid-sort-icon\"></span></div>");
td.find("span:first").html(col.title);
var cell=td.find("div.datagrid-cell");
var pos=_633(_689,col.field);
if(pos>=0){
cell.addClass("datagrid-sort-"+_68a[pos]);
}
if(col.sortable){
cell.addClass("datagrid-sort");
}
if(col.resizable==false){
cell.attr("resizable","false");
}
if(col.width){
var _68c=$.parser.parseValue("width",col.width,dc.view,opts.scrollbarSize+(opts.rownumbers?opts.rownumberWidth:0));
col.deltaWidth=_688;
col.boxWidth=_68c-_688;
}else{
col.auto=true;
}
cell.css("text-align",(col.halign||col.align||""));
col.cellClass=_67c.cellClassPrefix+"-"+col.field.replace(/[\.|\s]/g,"-");
cell.addClass(col.cellClass);
}else{
$("<div class=\"datagrid-cell-group\"></div>").html(col.title).appendTo(td);
}
}
if(col.hidden){
td.hide();
_68b.push(col.field);
}
}
}
if(_687&&opts.rownumbers){
var td=$("<td rowspan=\""+opts.frozenColumns.length+"\"><div class=\"datagrid-header-rownumber\"></div></td>");
if($("tr",t).length==0){
td.wrap("<tr class=\"datagrid-header-row\"></tr>").parent().appendTo($("tbody",t));
}else{
td.prependTo($("tr:first",t));
}
}
for(var i=0;i<_68b.length;i++){
_6ce(_67b,_68b[i],-1);
}
};
function _681(){
var _68d=[[".datagrid-header-rownumber",(opts.rownumberWidth-1)+"px"],[".datagrid-cell-rownumber",(opts.rownumberWidth-1)+"px"]];
var _68e=_68f(_67b,true).concat(_68f(_67b));
for(var i=0;i<_68e.length;i++){
var col=_690(_67b,_68e[i]);
if(col&&!col.checkbox){
_68d.push(["."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto"]);
}
}
_67c.ss.add(_68d);
_67c.ss.dirty(_67c.cellSelectorPrefix);
_67c.cellSelectorPrefix="."+_67c.cellClassPrefix;
};
};
function _691(_692){
var _693=$.data(_692,"datagrid");
var _694=_693.panel;
var opts=_693.options;
var dc=_693.dc;
var _695=dc.header1.add(dc.header2);
_695.unbind(".datagrid");
for(var _696 in opts.headerEvents){
_695.bind(_696+".datagrid",opts.headerEvents[_696]);
}
var _697=_695.find("div.datagrid-cell");
var _698=opts.resizeHandle=="right"?"e":(opts.resizeHandle=="left"?"w":"e,w");
_697.each(function(){
$(this).resizable({handles:_698,disabled:($(this).attr("resizable")?$(this).attr("resizable")=="false":false),minWidth:25,onStartResize:function(e){
_693.resizing=true;
_695.css("cursor",$("body").css("cursor"));
if(!_693.proxy){
_693.proxy=$("<div class=\"datagrid-resize-proxy\"></div>").appendTo(dc.view);
}
_693.proxy.css({left:e.pageX-$(_694).offset().left-1,display:"none"});
setTimeout(function(){
if(_693.proxy){
_693.proxy.show();
}
},500);
},onResize:function(e){
_693.proxy.css({left:e.pageX-$(_694).offset().left-1,display:"block"});
return false;
},onStopResize:function(e){
_695.css("cursor","");
$(this).css("height","");
var _699=$(this).parent().attr("field");
var col=_690(_692,_699);
col.width=$(this)._outerWidth();
col.boxWidth=col.width-col.deltaWidth;
col.auto=undefined;
$(this).css("width","");
$(_692).datagrid("fixColumnSize",_699);
_693.proxy.remove();
_693.proxy=null;
if($(this).parents("div:first.datagrid-header").parent().hasClass("datagrid-view1")){
_64c(_692);
}
$(_692).datagrid("fitColumns");
opts.onResizeColumn.call(_692,_699,col.width);
setTimeout(function(){
_693.resizing=false;
},0);
}});
});
var bb=dc.body1.add(dc.body2);
bb.unbind();
for(var _696 in opts.rowEvents){
bb.bind(_696,opts.rowEvents[_696]);
}
dc.body1.bind("mousewheel DOMMouseScroll",function(e){
e.preventDefault();
var e1=e.originalEvent||window.event;
var _69a=e1.wheelDelta||e1.detail*(-1);
if("deltaY" in e1){
_69a=e1.deltaY*-1;
}
var dg=$(e.target).closest("div.datagrid-view").children(".datagrid-f");
var dc=dg.data("datagrid").dc;
dc.body2.scrollTop(dc.body2.scrollTop()-_69a);
});
dc.body2.bind("scroll",function(){
var b1=dc.view1.children("div.datagrid-body");
b1.scrollTop($(this).scrollTop());
var c1=dc.body1.children(":first");
var c2=dc.body2.children(":first");
if(c1.length&&c2.length){
var top1=c1.offset().top;
var top2=c2.offset().top;
if(top1!=top2){
b1.scrollTop(b1.scrollTop()+top1-top2);
}
}
dc.view2.children("div.datagrid-header,div.datagrid-footer")._scrollLeft($(this)._scrollLeft());
dc.body2.children("table.datagrid-btable-frozen").css("left",-$(this)._scrollLeft());
});
};
function _69b(_69c){
return function(e){
var td=$(e.target).closest("td[field]");
if(td.length){
var _69d=_69e(td);
if(!$(_69d).data("datagrid").resizing&&_69c){
td.addClass("datagrid-header-over");
}else{
td.removeClass("datagrid-header-over");
}
}
};
};
function _69f(e){
var _6a0=_69e(e.target);
var opts=$(_6a0).datagrid("options");
var ck=$(e.target).closest("input[type=checkbox]");
if(ck.length){
if(opts.singleSelect&&opts.selectOnCheck){
return false;
}
if(ck.is(":checked")){
_6a1(_6a0);
}else{
_6a2(_6a0);
}
e.stopPropagation();
}else{
var cell=$(e.target).closest(".datagrid-cell");
if(cell.length){
var p1=cell.offset().left+5;
var p2=cell.offset().left+cell._outerWidth()-5;
if(e.pageX<p2&&e.pageX>p1){
_6a3(_6a0,cell.parent().attr("field"));
}
}
}
};
function _6a4(e){
var _6a5=_69e(e.target);
var opts=$(_6a5).datagrid("options");
var cell=$(e.target).closest(".datagrid-cell");
if(cell.length){
var p1=cell.offset().left+5;
var p2=cell.offset().left+cell._outerWidth()-5;
var cond=opts.resizeHandle=="right"?(e.pageX>p2):(opts.resizeHandle=="left"?(e.pageX<p1):(e.pageX<p1||e.pageX>p2));
if(cond){
var _6a6=cell.parent().attr("field");
var col=_690(_6a5,_6a6);
if(col.resizable==false){
return;
}
$(_6a5).datagrid("autoSizeColumn",_6a6);
col.auto=false;
}
}
};
function _6a7(e){
var _6a8=_69e(e.target);
var opts=$(_6a8).datagrid("options");
var td=$(e.target).closest("td[field]");
opts.onHeaderContextMenu.call(_6a8,e,td.attr("field"));
};
function _6a9(_6aa){
return function(e){
var tr=_6ab(e.target);
if(!tr){
return;
}
var _6ac=_69e(tr);
if($.data(_6ac,"datagrid").resizing){
return;
}
var _6ad=_6ae(tr);
if(_6aa){
_6af(_6ac,_6ad);
}else{
var opts=$.data(_6ac,"datagrid").options;
opts.finder.getTr(_6ac,_6ad).removeClass("datagrid-row-over");
}
};
};
function _6b0(e){
var tr=_6ab(e.target);
if(!tr){
return;
}
var _6b1=_69e(tr);
var opts=$.data(_6b1,"datagrid").options;
var _6b2=_6ae(tr);
var tt=$(e.target);
if(tt.parent().hasClass("datagrid-cell-check")){
if(opts.singleSelect&&opts.selectOnCheck){
tt._propAttr("checked",!tt.is(":checked"));
_6b3(_6b1,_6b2);
}else{
if(tt.is(":checked")){
tt._propAttr("checked",false);
_6b3(_6b1,_6b2);
}else{
tt._propAttr("checked",true);
_6b4(_6b1,_6b2);
}
}
}else{
var row=opts.finder.getRow(_6b1,_6b2);
var td=tt.closest("td[field]",tr);
if(td.length){
var _6b5=td.attr("field");
opts.onClickCell.call(_6b1,_6b2,_6b5,row[_6b5]);
}
if(opts.singleSelect==true){
_6b6(_6b1,_6b2);
}else{
if(opts.ctrlSelect){
if(e.ctrlKey){
if(tr.hasClass("datagrid-row-selected")){
_6b7(_6b1,_6b2);
}else{
_6b6(_6b1,_6b2);
}
}else{
if(e.shiftKey){
$(_6b1).datagrid("clearSelections");
var _6b8=Math.min(opts.lastSelectedIndex||0,_6b2);
var _6b9=Math.max(opts.lastSelectedIndex||0,_6b2);
for(var i=_6b8;i<=_6b9;i++){
_6b6(_6b1,i);
}
}else{
$(_6b1).datagrid("clearSelections");
_6b6(_6b1,_6b2);
opts.lastSelectedIndex=_6b2;
}
}
}else{
if(tr.hasClass("datagrid-row-selected")){
_6b7(_6b1,_6b2);
}else{
_6b6(_6b1,_6b2);
}
}
}
opts.onClickRow.apply(_6b1,_636(_6b1,[_6b2,row]));
}
};
function _6ba(e){
var tr=_6ab(e.target);
if(!tr){
return;
}
var _6bb=_69e(tr);
var opts=$.data(_6bb,"datagrid").options;
var _6bc=_6ae(tr);
var row=opts.finder.getRow(_6bb,_6bc);
var td=$(e.target).closest("td[field]",tr);
if(td.length){
var _6bd=td.attr("field");
opts.onDblClickCell.call(_6bb,_6bc,_6bd,row[_6bd]);
}
opts.onDblClickRow.apply(_6bb,_636(_6bb,[_6bc,row]));
};
function _6be(e){
var tr=_6ab(e.target);
if(tr){
var _6bf=_69e(tr);
var opts=$.data(_6bf,"datagrid").options;
var _6c0=_6ae(tr);
var row=opts.finder.getRow(_6bf,_6c0);
opts.onRowContextMenu.call(_6bf,e,_6c0,row);
}else{
var body=_6ab(e.target,".datagrid-body");
if(body){
var _6bf=_69e(body);
var opts=$.data(_6bf,"datagrid").options;
opts.onRowContextMenu.call(_6bf,e,-1,null);
}
}
};
function _69e(t){
return $(t).closest("div.datagrid-view").children(".datagrid-f")[0];
};
function _6ab(t,_6c1){
var tr=$(t).closest(_6c1||"tr.datagrid-row");
if(tr.length&&tr.parent().length){
return tr;
}else{
return undefined;
}
};
function _6ae(tr){
if(tr.attr("datagrid-row-index")){
return parseInt(tr.attr("datagrid-row-index"));
}else{
return tr.attr("node-id");
}
};
function _6a3(_6c2,_6c3){
var _6c4=$.data(_6c2,"datagrid");
var opts=_6c4.options;
_6c3=_6c3||{};
var _6c5={sortName:opts.sortName,sortOrder:opts.sortOrder};
if(typeof _6c3=="object"){
$.extend(_6c5,_6c3);
}
var _6c6=[];
var _6c7=[];
if(_6c5.sortName){
_6c6=_6c5.sortName.split(",");
_6c7=_6c5.sortOrder.split(",");
}
if(typeof _6c3=="string"){
var _6c8=_6c3;
var col=_690(_6c2,_6c8);
if(!col.sortable||_6c4.resizing){
return;
}
var _6c9=col.order||"asc";
var pos=_633(_6c6,_6c8);
if(pos>=0){
var _6ca=_6c7[pos]=="asc"?"desc":"asc";
if(opts.multiSort&&_6ca==_6c9){
_6c6.splice(pos,1);
_6c7.splice(pos,1);
}else{
_6c7[pos]=_6ca;
}
}else{
if(opts.multiSort){
_6c6.push(_6c8);
_6c7.push(_6c9);
}else{
_6c6=[_6c8];
_6c7=[_6c9];
}
}
_6c5.sortName=_6c6.join(",");
_6c5.sortOrder=_6c7.join(",");
}
if(opts.onBeforeSortColumn.call(_6c2,_6c5.sortName,_6c5.sortOrder)==false){
return;
}
$.extend(opts,_6c5);
var dc=_6c4.dc;
var _6cb=dc.header1.add(dc.header2);
_6cb.find("div.datagrid-cell").removeClass("datagrid-sort-asc datagrid-sort-desc");
for(var i=0;i<_6c6.length;i++){
var col=_690(_6c2,_6c6[i]);
_6cb.find("div."+col.cellClass).addClass("datagrid-sort-"+_6c7[i]);
}
if(opts.remoteSort){
_6cc(_6c2);
}else{
_6cd(_6c2,$(_6c2).datagrid("getData"));
}
opts.onSortColumn.call(_6c2,opts.sortName,opts.sortOrder);
};
function _6ce(_6cf,_6d0,_6d1){
_6d2(true);
_6d2(false);
function _6d2(_6d3){
var aa=_6d4(_6cf,_6d3);
if(aa.length){
var _6d5=aa[aa.length-1];
var _6d6=_633(_6d5,_6d0);
if(_6d6>=0){
for(var _6d7=0;_6d7<aa.length-1;_6d7++){
var td=$("#"+aa[_6d7][_6d6]);
var _6d8=parseInt(td.attr("colspan")||1)+(_6d1||0);
td.attr("colspan",_6d8);
if(_6d8){
td.show();
}else{
td.hide();
}
}
}
}
};
};
function _6d9(_6da){
var _6db=$.data(_6da,"datagrid");
var opts=_6db.options;
var dc=_6db.dc;
var _6dc=dc.view2.children("div.datagrid-header");
dc.body2.css("overflow-x","");
_6dd();
_6de();
_6df();
_6dd(true);
if(_6dc.width()>=_6dc.find("table").width()){
dc.body2.css("overflow-x","hidden");
}
function _6df(){
if(!opts.fitColumns){
return;
}
if(!_6db.leftWidth){
_6db.leftWidth=0;
}
var _6e0=0;
var cc=[];
var _6e1=_68f(_6da,false);
for(var i=0;i<_6e1.length;i++){
var col=_690(_6da,_6e1[i]);
if(_6e2(col)){
_6e0+=col.width;
cc.push({field:col.field,col:col,addingWidth:0});
}
}
if(!_6e0){
return;
}
cc[cc.length-1].addingWidth-=_6db.leftWidth;
var _6e3=_6dc.children("div.datagrid-header-inner").show();
var _6e4=_6dc.width()-_6dc.find("table").width()-opts.scrollbarSize+_6db.leftWidth;
var rate=_6e4/_6e0;
if(!opts.showHeader){
_6e3.hide();
}
for(var i=0;i<cc.length;i++){
var c=cc[i];
var _6e5=parseInt(c.col.width*rate);
c.addingWidth+=_6e5;
_6e4-=_6e5;
}
cc[cc.length-1].addingWidth+=_6e4;
for(var i=0;i<cc.length;i++){
var c=cc[i];
if(c.col.boxWidth+c.addingWidth>0){
c.col.boxWidth+=c.addingWidth;
c.col.width+=c.addingWidth;
}
}
_6db.leftWidth=_6e4;
$(_6da).datagrid("fixColumnSize");
};
function _6de(){
var _6e6=false;
var _6e7=_68f(_6da,true).concat(_68f(_6da,false));
$.map(_6e7,function(_6e8){
var col=_690(_6da,_6e8);
if(String(col.width||"").indexOf("%")>=0){
var _6e9=$.parser.parseValue("width",col.width,dc.view,opts.scrollbarSize+(opts.rownumbers?opts.rownumberWidth:0))-col.deltaWidth;
if(_6e9>0){
col.boxWidth=_6e9;
_6e6=true;
}
}
});
if(_6e6){
$(_6da).datagrid("fixColumnSize");
}
};
function _6dd(fit){
var _6ea=dc.header1.add(dc.header2).find(".datagrid-cell-group");
if(_6ea.length){
_6ea.each(function(){
$(this)._outerWidth(fit?$(this).parent().width():10);
});
if(fit){
_64c(_6da);
}
}
};
function _6e2(col){
if(String(col.width||"").indexOf("%")>=0){
return false;
}
if(!col.hidden&&!col.checkbox&&!col.auto&&!col.fixed){
return true;
}
};
};
function _6eb(_6ec,_6ed){
var _6ee=$.data(_6ec,"datagrid");
var opts=_6ee.options;
var dc=_6ee.dc;
var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-9999px\"></div>").appendTo("body");
if(_6ed){
_647(_6ed);
$(_6ec).datagrid("fitColumns");
}else{
var _6ef=false;
var _6f0=_68f(_6ec,true).concat(_68f(_6ec,false));
for(var i=0;i<_6f0.length;i++){
var _6ed=_6f0[i];
var col=_690(_6ec,_6ed);
if(col.auto){
_647(_6ed);
_6ef=true;
}
}
if(_6ef){
$(_6ec).datagrid("fitColumns");
}
}
tmp.remove();
function _647(_6f1){
var _6f2=dc.view.find("div.datagrid-header td[field=\""+_6f1+"\"] div.datagrid-cell");
_6f2.css("width","");
var col=$(_6ec).datagrid("getColumnOption",_6f1);
col.width=undefined;
col.boxWidth=undefined;
col.auto=true;
$(_6ec).datagrid("fixColumnSize",_6f1);
var _6f3=Math.max(_6f4("header"),_6f4("allbody"),_6f4("allfooter"))+1;
_6f2._outerWidth(_6f3-1);
col.width=_6f3;
col.boxWidth=parseInt(_6f2[0].style.width);
col.deltaWidth=_6f3-col.boxWidth;
_6f2.css("width","");
$(_6ec).datagrid("fixColumnSize",_6f1);
opts.onResizeColumn.call(_6ec,_6f1,col.width);
function _6f4(type){
var _6f5=0;
if(type=="header"){
_6f5=_6f6(_6f2);
}else{
opts.finder.getTr(_6ec,0,type).find("td[field=\""+_6f1+"\"] div.datagrid-cell").each(function(){
var w=_6f6($(this));
if(_6f5<w){
_6f5=w;
}
});
}
return _6f5;
function _6f6(cell){
return cell.is(":visible")?cell._outerWidth():tmp.html(cell.html())._outerWidth();
};
};
};
};
function _6f7(_6f8,_6f9){
var _6fa=$.data(_6f8,"datagrid");
var opts=_6fa.options;
var dc=_6fa.dc;
var _6fb=dc.view.find("table.datagrid-btable,table.datagrid-ftable");
_6fb.css("table-layout","fixed");
if(_6f9){
fix(_6f9);
}else{
var ff=_68f(_6f8,true).concat(_68f(_6f8,false));
for(var i=0;i<ff.length;i++){
fix(ff[i]);
}
}
_6fb.css("table-layout","");
_6fc(_6f8);
_65d(_6f8);
_6fd(_6f8);
function fix(_6fe){
var col=_690(_6f8,_6fe);
if(col.cellClass){
_6fa.ss.set("."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto");
}
};
};
function _6fc(_6ff,tds){
var dc=$.data(_6ff,"datagrid").dc;
tds=tds||dc.view.find("td.datagrid-td-merged");
tds.each(function(){
var td=$(this);
var _700=td.attr("colspan")||1;
if(_700>1){
var col=_690(_6ff,td.attr("field"));
var _701=col.boxWidth+col.deltaWidth-1;
for(var i=1;i<_700;i++){
td=td.next();
col=_690(_6ff,td.attr("field"));
_701+=col.boxWidth+col.deltaWidth;
}
$(this).children("div.datagrid-cell")._outerWidth(_701);
}
});
};
function _6fd(_702){
var dc=$.data(_702,"datagrid").dc;
dc.view.find("div.datagrid-editable").each(function(){
var cell=$(this);
var _703=cell.parent().attr("field");
var col=$(_702).datagrid("getColumnOption",_703);
cell._outerWidth(col.boxWidth+col.deltaWidth-1);
var ed=$.data(this,"datagrid.editor");
if(ed.actions.resize){
ed.actions.resize(ed.target,cell.width());
}
});
};
function _690(_704,_705){
function find(_706){
if(_706){
for(var i=0;i<_706.length;i++){
var cc=_706[i];
for(var j=0;j<cc.length;j++){
var c=cc[j];
if(c.field==_705){
return c;
}
}
}
}
return null;
};
var opts=$.data(_704,"datagrid").options;
var col=find(opts.columns);
if(!col){
col=find(opts.frozenColumns);
}
return col;
};
function _6d4(_707,_708){
var opts=$.data(_707,"datagrid").options;
var _709=_708?opts.frozenColumns:opts.columns;
var aa=[];
var _70a=_70b();
for(var i=0;i<_709.length;i++){
aa[i]=new Array(_70a);
}
for(var _70c=0;_70c<_709.length;_70c++){
$.map(_709[_70c],function(col){
var _70d=_70e(aa[_70c]);
if(_70d>=0){
var _70f=col.field||col.id||"";
for(var c=0;c<(col.colspan||1);c++){
for(var r=0;r<(col.rowspan||1);r++){
aa[_70c+r][_70d]=_70f;
}
_70d++;
}
}
});
}
return aa;
function _70b(){
var _710=0;
$.map(_709[0]||[],function(col){
_710+=col.colspan||1;
});
return _710;
};
function _70e(a){
for(var i=0;i<a.length;i++){
if(a[i]==undefined){
return i;
}
}
return -1;
};
};
function _68f(_711,_712){
var aa=_6d4(_711,_712);
return aa.length?aa[aa.length-1]:aa;
};
function _6cd(_713,data){
var _714=$.data(_713,"datagrid");
var opts=_714.options;
var dc=_714.dc;
data=opts.loadFilter.call(_713,data);
if($.isArray(data)){
data={total:data.length,rows:data};
}
data.total=parseInt(data.total);
_714.data=data;
if(data.footer){
_714.footer=data.footer;
}
if(!opts.remoteSort&&opts.sortName){
var _715=opts.sortName.split(",");
var _716=opts.sortOrder.split(",");
data.rows.sort(function(r1,r2){
var r=0;
for(var i=0;i<_715.length;i++){
var sn=_715[i];
var so=_716[i];
var col=_690(_713,sn);
var _717=col.sorter||function(a,b){
return a==b?0:(a>b?1:-1);
};
r=_717(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_713,data.rows);
}
opts.view.render.call(opts.view,_713,dc.body2,false);
opts.view.render.call(opts.view,_713,dc.body1,true);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_713,dc.footer2,false);
opts.view.renderFooter.call(opts.view,_713,dc.footer1,true);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_713);
}
_714.ss.clean();
var _718=$(_713).datagrid("getPager");
if(_718.length){
var _719=_718.pagination("options");
if(_719.total!=data.total){
_718.pagination("refresh",{total:data.total});
if(opts.pageNumber!=_719.pageNumber&&_719.pageNumber>0){
opts.pageNumber=_719.pageNumber;
_6cc(_713);
}
}
}
_65d(_713);
dc.body2.triggerHandler("scroll");
$(_713).datagrid("setSelectionState");
$(_713).datagrid("autoSizeColumn");
opts.onLoadSuccess.call(_713,data);
};
function _71a(_71b){
var _71c=$.data(_71b,"datagrid");
var opts=_71c.options;
var dc=_71c.dc;
dc.header1.add(dc.header2).find("input[type=checkbox]")._propAttr("checked",false);
if(opts.idField){
var _71d=$.data(_71b,"treegrid")?true:false;
var _71e=opts.onSelect;
var _71f=opts.onCheck;
opts.onSelect=opts.onCheck=function(){
};
var rows=opts.finder.getRows(_71b);
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _720=_71d?row[opts.idField]:i;
if(_721(_71c.selectedRows,row)){
_6b6(_71b,_720,true);
}
if(_721(_71c.checkedRows,row)){
_6b3(_71b,_720,true);
}
}
opts.onSelect=_71e;
opts.onCheck=_71f;
}
function _721(a,r){
for(var i=0;i<a.length;i++){
if(a[i][opts.idField]==r[opts.idField]){
a[i]=r;
return true;
}
}
return false;
};
};
function _722(_723,row){
var _724=$.data(_723,"datagrid");
var opts=_724.options;
var rows=_724.data.rows;
if(typeof row=="object"){
return _633(rows,row);
}else{
for(var i=0;i<rows.length;i++){
if(rows[i][opts.idField]==row){
return i;
}
}
return -1;
}
};
function _725(_726){
var _727=$.data(_726,"datagrid");
var opts=_727.options;
var data=_727.data;
if(opts.idField){
return _727.selectedRows;
}else{
var rows=[];
opts.finder.getTr(_726,"","selected",2).each(function(){
rows.push(opts.finder.getRow(_726,$(this)));
});
return rows;
}
};
function _728(_729){
var _72a=$.data(_729,"datagrid");
var opts=_72a.options;
if(opts.idField){
return _72a.checkedRows;
}else{
var rows=[];
opts.finder.getTr(_729,"","checked",2).each(function(){
rows.push(opts.finder.getRow(_729,$(this)));
});
return rows;
}
};
function _72b(_72c,_72d){
var _72e=$.data(_72c,"datagrid");
var dc=_72e.dc;
var opts=_72e.options;
var tr=opts.finder.getTr(_72c,_72d);
if(tr.length){
if(tr.closest("table").hasClass("datagrid-btable-frozen")){
return;
}
var _72f=dc.view2.children("div.datagrid-header")._outerHeight();
var _730=dc.body2;
var _731=_730.outerHeight(true)-_730.outerHeight();
var top=tr.position().top-_72f-_731;
if(top<0){
_730.scrollTop(_730.scrollTop()+top);
}else{
if(top+tr._outerHeight()>_730.height()-18){
_730.scrollTop(_730.scrollTop()+top+tr._outerHeight()-_730.height()+18);
}
}
}
};
function _6af(_732,_733){
var _734=$.data(_732,"datagrid");
var opts=_734.options;
opts.finder.getTr(_732,_734.highlightIndex).removeClass("datagrid-row-over");
opts.finder.getTr(_732,_733).addClass("datagrid-row-over");
_734.highlightIndex=_733;
};
function _6b6(_735,_736,_737){
var _738=$.data(_735,"datagrid");
var opts=_738.options;
var row=opts.finder.getRow(_735,_736);
if(opts.onBeforeSelect.apply(_735,_636(_735,[_736,row]))==false){
return;
}
if(opts.singleSelect){
_739(_735,true);
_738.selectedRows=[];
}
if(!_737&&opts.checkOnSelect){
_6b3(_735,_736,true);
}
if(opts.idField){
_635(_738.selectedRows,opts.idField,row);
}
opts.finder.getTr(_735,_736).addClass("datagrid-row-selected");
opts.onSelect.apply(_735,_636(_735,[_736,row]));
_72b(_735,_736);
};
function _6b7(_73a,_73b,_73c){
var _73d=$.data(_73a,"datagrid");
var dc=_73d.dc;
var opts=_73d.options;
var row=opts.finder.getRow(_73a,_73b);
if(opts.onBeforeUnselect.apply(_73a,_636(_73a,[_73b,row]))==false){
return;
}
if(!_73c&&opts.checkOnSelect){
_6b4(_73a,_73b,true);
}
opts.finder.getTr(_73a,_73b).removeClass("datagrid-row-selected");
if(opts.idField){
_634(_73d.selectedRows,opts.idField,row[opts.idField]);
}
opts.onUnselect.apply(_73a,_636(_73a,[_73b,row]));
};
function _73e(_73f,_740){
var _741=$.data(_73f,"datagrid");
var opts=_741.options;
var rows=opts.finder.getRows(_73f);
var _742=$.data(_73f,"datagrid").selectedRows;
if(!_740&&opts.checkOnSelect){
_6a1(_73f,true);
}
opts.finder.getTr(_73f,"","allbody").addClass("datagrid-row-selected");
if(opts.idField){
for(var _743=0;_743<rows.length;_743++){
_635(_742,opts.idField,rows[_743]);
}
}
opts.onSelectAll.call(_73f,rows);
};
function _739(_744,_745){
var _746=$.data(_744,"datagrid");
var opts=_746.options;
var rows=opts.finder.getRows(_744);
var _747=$.data(_744,"datagrid").selectedRows;
if(!_745&&opts.checkOnSelect){
_6a2(_744,true);
}
opts.finder.getTr(_744,"","selected").removeClass("datagrid-row-selected");
if(opts.idField){
for(var _748=0;_748<rows.length;_748++){
_634(_747,opts.idField,rows[_748][opts.idField]);
}
}
opts.onUnselectAll.call(_744,rows);
};
function _6b3(_749,_74a,_74b){
var _74c=$.data(_749,"datagrid");
var opts=_74c.options;
var row=opts.finder.getRow(_749,_74a);
if(opts.onBeforeCheck.apply(_749,_636(_749,[_74a,row]))==false){
return;
}
if(opts.singleSelect&&opts.selectOnCheck){
_6a2(_749,true);
_74c.checkedRows=[];
}
if(!_74b&&opts.selectOnCheck){
_6b6(_749,_74a,true);
}
var tr=opts.finder.getTr(_749,_74a).addClass("datagrid-row-checked");
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
tr=opts.finder.getTr(_749,"","checked",2);
if(tr.length==opts.finder.getRows(_749).length){
var dc=_74c.dc;
dc.header1.add(dc.header2).find("input[type=checkbox]")._propAttr("checked",true);
}
if(opts.idField){
_635(_74c.checkedRows,opts.idField,row);
}
opts.onCheck.apply(_749,_636(_749,[_74a,row]));
};
function _6b4(_74d,_74e,_74f){
var _750=$.data(_74d,"datagrid");
var opts=_750.options;
var row=opts.finder.getRow(_74d,_74e);
if(opts.onBeforeUncheck.apply(_74d,_636(_74d,[_74e,row]))==false){
return;
}
if(!_74f&&opts.selectOnCheck){
_6b7(_74d,_74e,true);
}
var tr=opts.finder.getTr(_74d,_74e).removeClass("datagrid-row-checked");
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",false);
var dc=_750.dc;
var _751=dc.header1.add(dc.header2);
_751.find("input[type=checkbox]")._propAttr("checked",false);
if(opts.idField){
_634(_750.checkedRows,opts.idField,row[opts.idField]);
}
opts.onUncheck.apply(_74d,_636(_74d,[_74e,row]));
};
function _6a1(_752,_753){
var _754=$.data(_752,"datagrid");
var opts=_754.options;
var rows=opts.finder.getRows(_752);
if(!_753&&opts.selectOnCheck){
_73e(_752,true);
}
var dc=_754.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_752,"","allbody").addClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",true);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_635(_754.checkedRows,opts.idField,rows[i]);
}
}
opts.onCheckAll.call(_752,rows);
};
function _6a2(_755,_756){
var _757=$.data(_755,"datagrid");
var opts=_757.options;
var rows=opts.finder.getRows(_755);
if(!_756&&opts.selectOnCheck){
_739(_755,true);
}
var dc=_757.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_755,"","checked").removeClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",false);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_634(_757.checkedRows,opts.idField,rows[i][opts.idField]);
}
}
opts.onUncheckAll.call(_755,rows);
};
function _758(_759,_75a){
var opts=$.data(_759,"datagrid").options;
var tr=opts.finder.getTr(_759,_75a);
var row=opts.finder.getRow(_759,_75a);
if(tr.hasClass("datagrid-row-editing")){
return;
}
if(opts.onBeforeEdit.apply(_759,_636(_759,[_75a,row]))==false){
return;
}
tr.addClass("datagrid-row-editing");
_75b(_759,_75a);
_6fd(_759);
tr.find("div.datagrid-editable").each(function(){
var _75c=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
ed.actions.setValue(ed.target,row[_75c]);
});
_75d(_759,_75a);
opts.onBeginEdit.apply(_759,_636(_759,[_75a,row]));
};
function _75e(_75f,_760,_761){
var _762=$.data(_75f,"datagrid");
var opts=_762.options;
var _763=_762.updatedRows;
var _764=_762.insertedRows;
var tr=opts.finder.getTr(_75f,_760);
var row=opts.finder.getRow(_75f,_760);
if(!tr.hasClass("datagrid-row-editing")){
return;
}
if(!_761){
if(!_75d(_75f,_760)){
return;
}
var _765=false;
var _766={};
tr.find("div.datagrid-editable").each(function(){
var _767=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
var t=$(ed.target);
var _768=t.data("textbox")?t.textbox("textbox"):t;
if(_768.is(":focus")){
_768.triggerHandler("blur");
}
var _769=ed.actions.getValue(ed.target);
if(row[_767]!==_769){
row[_767]=_769;
_765=true;
_766[_767]=_769;
}
});
if(_765){
if(_633(_764,row)==-1){
if(_633(_763,row)==-1){
_763.push(row);
}
}
}
opts.onEndEdit.apply(_75f,_636(_75f,[_760,row,_766]));
}
tr.removeClass("datagrid-row-editing");
_76a(_75f,_760);
$(_75f).datagrid("refreshRow",_760);
if(!_761){
opts.onAfterEdit.apply(_75f,_636(_75f,[_760,row,_766]));
}else{
opts.onCancelEdit.apply(_75f,_636(_75f,[_760,row]));
}
};
function _76b(_76c,_76d){
var opts=$.data(_76c,"datagrid").options;
var tr=opts.finder.getTr(_76c,_76d);
var _76e=[];
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
_76e.push(ed);
}
});
return _76e;
};
function _76f(_770,_771){
var _772=_76b(_770,_771.index!=undefined?_771.index:_771.id);
for(var i=0;i<_772.length;i++){
if(_772[i].field==_771.field){
return _772[i];
}
}
return null;
};
function _75b(_773,_774){
var opts=$.data(_773,"datagrid").options;
var tr=opts.finder.getTr(_773,_774);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-cell");
var _775=$(this).attr("field");
var col=_690(_773,_775);
if(col&&col.editor){
var _776,_777;
if(typeof col.editor=="string"){
_776=col.editor;
}else{
_776=col.editor.type;
_777=col.editor.options;
}
var _778=opts.editors[_776];
if(_778){
var _779=cell.html();
var _77a=cell._outerWidth();
cell.addClass("datagrid-editable");
cell._outerWidth(_77a);
cell.html("<table border=\"0\" cellspacing=\"0\" cellpadding=\"1\"><tr><td></td></tr></table>");
cell.children("table").bind("click dblclick contextmenu",function(e){
e.stopPropagation();
});
$.data(cell[0],"datagrid.editor",{actions:_778,target:_778.init(cell.find("td"),$.extend({height:opts.editorHeight},_777)),field:_775,type:_776,oldHtml:_779});
}
}
});
_65d(_773,_774,true);
};
function _76a(_77b,_77c){
var opts=$.data(_77b,"datagrid").options;
var tr=opts.finder.getTr(_77b,_77c);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
if(ed.actions.destroy){
ed.actions.destroy(ed.target);
}
cell.html(ed.oldHtml);
$.removeData(cell[0],"datagrid.editor");
cell.removeClass("datagrid-editable");
cell.css("width","");
}
});
};
function _75d(_77d,_77e){
var tr=$.data(_77d,"datagrid").options.finder.getTr(_77d,_77e);
if(!tr.hasClass("datagrid-row-editing")){
return true;
}
var vbox=tr.find(".validatebox-text");
vbox.validatebox("validate");
vbox.trigger("mouseleave");
var _77f=tr.find(".validatebox-invalid");
return _77f.length==0;
};
function _780(_781,_782){
var _783=$.data(_781,"datagrid").insertedRows;
var _784=$.data(_781,"datagrid").deletedRows;
var _785=$.data(_781,"datagrid").updatedRows;
if(!_782){
var rows=[];
rows=rows.concat(_783);
rows=rows.concat(_784);
rows=rows.concat(_785);
return rows;
}else{
if(_782=="inserted"){
return _783;
}else{
if(_782=="deleted"){
return _784;
}else{
if(_782=="updated"){
return _785;
}
}
}
}
return [];
};
function _786(_787,_788){
var _789=$.data(_787,"datagrid");
var opts=_789.options;
var data=_789.data;
var _78a=_789.insertedRows;
var _78b=_789.deletedRows;
$(_787).datagrid("cancelEdit",_788);
var row=opts.finder.getRow(_787,_788);
if(_633(_78a,row)>=0){
_634(_78a,row);
}else{
_78b.push(row);
}
_634(_789.selectedRows,opts.idField,row[opts.idField]);
_634(_789.checkedRows,opts.idField,row[opts.idField]);
opts.view.deleteRow.call(opts.view,_787,_788);
if(opts.height=="auto"){
_65d(_787);
}
$(_787).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _78c(_78d,_78e){
var data=$.data(_78d,"datagrid").data;
var view=$.data(_78d,"datagrid").options.view;
var _78f=$.data(_78d,"datagrid").insertedRows;
view.insertRow.call(view,_78d,_78e.index,_78e.row);
_78f.push(_78e.row);
$(_78d).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _790(_791,row){
var data=$.data(_791,"datagrid").data;
var view=$.data(_791,"datagrid").options.view;
var _792=$.data(_791,"datagrid").insertedRows;
view.insertRow.call(view,_791,null,row);
_792.push(row);
$(_791).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _793(_794,_795){
var _796=$.data(_794,"datagrid");
var opts=_796.options;
var row=opts.finder.getRow(_794,_795.index);
var _797=false;
_795.row=_795.row||{};
for(var _798 in _795.row){
if(row[_798]!==_795.row[_798]){
_797=true;
break;
}
}
if(_797){
if(_633(_796.insertedRows,row)==-1){
if(_633(_796.updatedRows,row)==-1){
_796.updatedRows.push(row);
}
}
opts.view.updateRow.call(opts.view,_794,_795.index,_795.row);
}
};
function _799(_79a){
var _79b=$.data(_79a,"datagrid");
var data=_79b.data;
var rows=data.rows;
var _79c=[];
for(var i=0;i<rows.length;i++){
_79c.push($.extend({},rows[i]));
}
_79b.originalRows=_79c;
_79b.updatedRows=[];
_79b.insertedRows=[];
_79b.deletedRows=[];
};
function _79d(_79e){
var data=$.data(_79e,"datagrid").data;
var ok=true;
for(var i=0,len=data.rows.length;i<len;i++){
if(_75d(_79e,i)){
$(_79e).datagrid("endEdit",i);
}else{
ok=false;
}
}
if(ok){
_799(_79e);
}
};
function _79f(_7a0){
var _7a1=$.data(_7a0,"datagrid");
var opts=_7a1.options;
var _7a2=_7a1.originalRows;
var _7a3=_7a1.insertedRows;
var _7a4=_7a1.deletedRows;
var _7a5=_7a1.selectedRows;
var _7a6=_7a1.checkedRows;
var data=_7a1.data;
function _7a7(a){
var ids=[];
for(var i=0;i<a.length;i++){
ids.push(a[i][opts.idField]);
}
return ids;
};
function _7a8(ids,_7a9){
for(var i=0;i<ids.length;i++){
var _7aa=_722(_7a0,ids[i]);
if(_7aa>=0){
(_7a9=="s"?_6b6:_6b3)(_7a0,_7aa,true);
}
}
};
for(var i=0;i<data.rows.length;i++){
$(_7a0).datagrid("cancelEdit",i);
}
var _7ab=_7a7(_7a5);
var _7ac=_7a7(_7a6);
_7a5.splice(0,_7a5.length);
_7a6.splice(0,_7a6.length);
data.total+=_7a4.length-_7a3.length;
data.rows=_7a2;
_6cd(_7a0,data);
_7a8(_7ab,"s");
_7a8(_7ac,"c");
_799(_7a0);
};
function _6cc(_7ad,_7ae,cb){
var opts=$.data(_7ad,"datagrid").options;
if(_7ae){
opts.queryParams=_7ae;
}
var _7af=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_7af,{page:opts.pageNumber||1,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_7af,{sort:opts.sortName,order:opts.sortOrder});
}
if(opts.onBeforeLoad.call(_7ad,_7af)==false){
return;
}
$(_7ad).datagrid("loading");
var _7b0=opts.loader.call(_7ad,_7af,function(data){
$(_7ad).datagrid("loaded");
$(_7ad).datagrid("loadData",data);
if(cb){
cb();
}
},function(){
$(_7ad).datagrid("loaded");
opts.onLoadError.apply(_7ad,arguments);
});
if(_7b0==false){
$(_7ad).datagrid("loaded");
}
};
function _7b1(_7b2,_7b3){
var opts=$.data(_7b2,"datagrid").options;
_7b3.type=_7b3.type||"body";
_7b3.rowspan=_7b3.rowspan||1;
_7b3.colspan=_7b3.colspan||1;
if(_7b3.rowspan==1&&_7b3.colspan==1){
return;
}
var tr=opts.finder.getTr(_7b2,(_7b3.index!=undefined?_7b3.index:_7b3.id),_7b3.type);
if(!tr.length){
return;
}
var td=tr.find("td[field=\""+_7b3.field+"\"]");
td.attr("rowspan",_7b3.rowspan).attr("colspan",_7b3.colspan);
td.addClass("datagrid-td-merged");
_7b4(td.next(),_7b3.colspan-1);
for(var i=1;i<_7b3.rowspan;i++){
tr=tr.next();
if(!tr.length){
break;
}
_7b4(tr.find("td[field=\""+_7b3.field+"\"]"),_7b3.colspan);
}
_6fc(_7b2,td);
function _7b4(td,_7b5){
for(var i=0;i<_7b5;i++){
td.hide();
td=td.next();
}
};
};
$.fn.datagrid=function(_7b6,_7b7){
if(typeof _7b6=="string"){
return $.fn.datagrid.methods[_7b6](this,_7b7);
}
_7b6=_7b6||{};
return this.each(function(){
var _7b8=$.data(this,"datagrid");
var opts;
if(_7b8){
opts=$.extend(_7b8.options,_7b6);
_7b8.options=opts;
}else{
opts=$.extend({},$.extend({},$.fn.datagrid.defaults,{queryParams:{}}),$.fn.datagrid.parseOptions(this),_7b6);
$(this).css("width","").css("height","");
var _7b9=_671(this,opts.rownumbers);
if(!opts.columns){
opts.columns=_7b9.columns;
}
if(!opts.frozenColumns){
opts.frozenColumns=_7b9.frozenColumns;
}
opts.columns=$.extend(true,[],opts.columns);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.view=$.extend({},opts.view);
$.data(this,"datagrid",{options:opts,panel:_7b9.panel,dc:_7b9.dc,ss:null,selectedRows:[],checkedRows:[],data:{total:0,rows:[]},originalRows:[],updatedRows:[],insertedRows:[],deletedRows:[]});
}
_67a(this);
_691(this);
_647(this);
if(opts.data){
$(this).datagrid("loadData",opts.data);
}else{
var data=$.fn.datagrid.parseData(this);
if(data.total>0){
$(this).datagrid("loadData",data);
}else{
opts.view.setEmptyMsg(this);
$(this).datagrid("autoSizeColumn");
}
}
_6cc(this);
});
};
function _7ba(_7bb){
var _7bc={};
$.map(_7bb,function(name){
_7bc[name]=_7bd(name);
});
return _7bc;
function _7bd(name){
function isA(_7be){
return $.data($(_7be)[0],name)!=undefined;
};
return {init:function(_7bf,_7c0){
var _7c1=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_7bf);
if(_7c1[name]&&name!="text"){
return _7c1[name](_7c0);
}else{
return _7c1;
}
},destroy:function(_7c2){
if(isA(_7c2,name)){
$(_7c2)[name]("destroy");
}
},getValue:function(_7c3){
if(isA(_7c3,name)){
var opts=$(_7c3)[name]("options");
if(opts.multiple){
return $(_7c3)[name]("getValues").join(opts.separator);
}else{
return $(_7c3)[name]("getValue");
}
}else{
return $(_7c3).val();
}
},setValue:function(_7c4,_7c5){
if(isA(_7c4,name)){
var opts=$(_7c4)[name]("options");
if(opts.multiple){
if(_7c5){
$(_7c4)[name]("setValues",_7c5.split(opts.separator));
}else{
$(_7c4)[name]("clear");
}
}else{
$(_7c4)[name]("setValue",_7c5);
}
}else{
$(_7c4).val(_7c5);
}
},resize:function(_7c6,_7c7){
if(isA(_7c6,name)){
$(_7c6)[name]("resize",_7c7);
}else{
$(_7c6)._size({width:_7c7,height:$.fn.datagrid.defaults.editorHeight});
}
}};
};
};
var _7c8=$.extend({},_7ba(["text","textbox","passwordbox","filebox","numberbox","numberspinner","combobox","combotree","combogrid","combotreegrid","datebox","datetimebox","timespinner","datetimespinner"]),{textarea:{init:function(_7c9,_7ca){
var _7cb=$("<textarea class=\"datagrid-editable-input\"></textarea>").appendTo(_7c9);
_7cb.css("vertical-align","middle")._outerHeight(_7ca.height);
return _7cb;
},getValue:function(_7cc){
return $(_7cc).val();
},setValue:function(_7cd,_7ce){
$(_7cd).val(_7ce);
},resize:function(_7cf,_7d0){
$(_7cf)._outerWidth(_7d0);
}},checkbox:{init:function(_7d1,_7d2){
var _7d3=$("<input type=\"checkbox\">").appendTo(_7d1);
_7d3.val(_7d2.on);
_7d3.attr("offval",_7d2.off);
return _7d3;
},getValue:function(_7d4){
if($(_7d4).is(":checked")){
return $(_7d4).val();
}else{
return $(_7d4).attr("offval");
}
},setValue:function(_7d5,_7d6){
var _7d7=false;
if($(_7d5).val()==_7d6){
_7d7=true;
}
$(_7d5)._propAttr("checked",_7d7);
}},validatebox:{init:function(_7d8,_7d9){
var _7da=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_7d8);
_7da.validatebox(_7d9);
return _7da;
},destroy:function(_7db){
$(_7db).validatebox("destroy");
},getValue:function(_7dc){
return $(_7dc).val();
},setValue:function(_7dd,_7de){
$(_7dd).val(_7de);
},resize:function(_7df,_7e0){
$(_7df)._outerWidth(_7e0)._outerHeight($.fn.datagrid.defaults.editorHeight);
}}});
$.fn.datagrid.methods={options:function(jq){
var _7e1=$.data(jq[0],"datagrid").options;
var _7e2=$.data(jq[0],"datagrid").panel.panel("options");
var opts=$.extend(_7e1,{width:_7e2.width,height:_7e2.height,closed:_7e2.closed,collapsed:_7e2.collapsed,minimized:_7e2.minimized,maximized:_7e2.maximized});
return opts;
},setSelectionState:function(jq){
return jq.each(function(){
_71a(this);
});
},createStyleSheet:function(jq){
return _638(jq[0]);
},getPanel:function(jq){
return $.data(jq[0],"datagrid").panel;
},getPager:function(jq){
return $.data(jq[0],"datagrid").panel.children("div.datagrid-pager");
},getColumnFields:function(jq,_7e3){
return _68f(jq[0],_7e3);
},getColumnOption:function(jq,_7e4){
return _690(jq[0],_7e4);
},resize:function(jq,_7e5){
return jq.each(function(){
_647(this,_7e5);
});
},load:function(jq,_7e6){
return jq.each(function(){
var opts=$(this).datagrid("options");
if(typeof _7e6=="string"){
opts.url=_7e6;
_7e6=null;
}
opts.pageNumber=1;
var _7e7=$(this).datagrid("getPager");
_7e7.pagination("refresh",{pageNumber:1});
_6cc(this,_7e6);
});
},reload:function(jq,_7e8){
return jq.each(function(){
var opts=$(this).datagrid("options");
if(typeof _7e8=="string"){
opts.url=_7e8;
_7e8=null;
}
_6cc(this,_7e8);
});
},reloadFooter:function(jq,_7e9){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
var dc=$.data(this,"datagrid").dc;
if(_7e9){
$.data(this,"datagrid").footer=_7e9;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).datagrid("fixRowHeight");
}
});
},loading:function(jq){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
$(this).datagrid("getPager").pagination("loading");
if(opts.loadMsg){
var _7ea=$(this).datagrid("getPanel");
if(!_7ea.children("div.datagrid-mask").length){
$("<div class=\"datagrid-mask\" style=\"display:block\"></div>").appendTo(_7ea);
var msg=$("<div class=\"datagrid-mask-msg\" style=\"display:block;left:50%\"></div>").html(opts.loadMsg).appendTo(_7ea);
msg._outerHeight(40);
msg.css({marginLeft:(-msg.outerWidth()/2),lineHeight:(msg.height()+"px")});
}
}
});
},loaded:function(jq){
return jq.each(function(){
$(this).datagrid("getPager").pagination("loaded");
var _7eb=$(this).datagrid("getPanel");
_7eb.children("div.datagrid-mask-msg").remove();
_7eb.children("div.datagrid-mask").remove();
});
},fitColumns:function(jq){
return jq.each(function(){
_6d9(this);
});
},fixColumnSize:function(jq,_7ec){
return jq.each(function(){
_6f7(this,_7ec);
});
},fixRowHeight:function(jq,_7ed){
return jq.each(function(){
_65d(this,_7ed);
});
},freezeRow:function(jq,_7ee){
return jq.each(function(){
_66a(this,_7ee);
});
},autoSizeColumn:function(jq,_7ef){
return jq.each(function(){
_6eb(this,_7ef);
});
},loadData:function(jq,data){
return jq.each(function(){
_6cd(this,data);
_799(this);
});
},getData:function(jq){
return $.data(jq[0],"datagrid").data;
},getRows:function(jq){
return $.data(jq[0],"datagrid").data.rows;
},getFooterRows:function(jq){
return $.data(jq[0],"datagrid").footer;
},getRowIndex:function(jq,id){
return _722(jq[0],id);
},getChecked:function(jq){
return _728(jq[0]);
},getSelected:function(jq){
var rows=_725(jq[0]);
return rows.length>0?rows[0]:null;
},getSelections:function(jq){
return _725(jq[0]);
},clearSelections:function(jq){
return jq.each(function(){
var _7f0=$.data(this,"datagrid");
var _7f1=_7f0.selectedRows;
var _7f2=_7f0.checkedRows;
_7f1.splice(0,_7f1.length);
_739(this);
if(_7f0.options.checkOnSelect){
_7f2.splice(0,_7f2.length);
}
});
},clearChecked:function(jq){
return jq.each(function(){
var _7f3=$.data(this,"datagrid");
var _7f4=_7f3.selectedRows;
var _7f5=_7f3.checkedRows;
_7f5.splice(0,_7f5.length);
_6a2(this);
if(_7f3.options.selectOnCheck){
_7f4.splice(0,_7f4.length);
}
});
},scrollTo:function(jq,_7f6){
return jq.each(function(){
_72b(this,_7f6);
});
},highlightRow:function(jq,_7f7){
return jq.each(function(){
_6af(this,_7f7);
_72b(this,_7f7);
});
},selectAll:function(jq){
return jq.each(function(){
_73e(this);
});
},unselectAll:function(jq){
return jq.each(function(){
_739(this);
});
},selectRow:function(jq,_7f8){
return jq.each(function(){
_6b6(this,_7f8);
});
},selectRecord:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
if(opts.idField){
var _7f9=_722(this,id);
if(_7f9>=0){
$(this).datagrid("selectRow",_7f9);
}
}
});
},unselectRow:function(jq,_7fa){
return jq.each(function(){
_6b7(this,_7fa);
});
},checkRow:function(jq,_7fb){
return jq.each(function(){
_6b3(this,_7fb);
});
},uncheckRow:function(jq,_7fc){
return jq.each(function(){
_6b4(this,_7fc);
});
},checkAll:function(jq){
return jq.each(function(){
_6a1(this);
});
},uncheckAll:function(jq){
return jq.each(function(){
_6a2(this);
});
},beginEdit:function(jq,_7fd){
return jq.each(function(){
_758(this,_7fd);
});
},endEdit:function(jq,_7fe){
return jq.each(function(){
_75e(this,_7fe,false);
});
},cancelEdit:function(jq,_7ff){
return jq.each(function(){
_75e(this,_7ff,true);
});
},getEditors:function(jq,_800){
return _76b(jq[0],_800);
},getEditor:function(jq,_801){
return _76f(jq[0],_801);
},refreshRow:function(jq,_802){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
opts.view.refreshRow.call(opts.view,this,_802);
});
},validateRow:function(jq,_803){
return _75d(jq[0],_803);
},updateRow:function(jq,_804){
return jq.each(function(){
_793(this,_804);
});
},appendRow:function(jq,row){
return jq.each(function(){
_790(this,row);
});
},insertRow:function(jq,_805){
return jq.each(function(){
_78c(this,_805);
});
},deleteRow:function(jq,_806){
return jq.each(function(){
_786(this,_806);
});
},getChanges:function(jq,_807){
return _780(jq[0],_807);
},acceptChanges:function(jq){
return jq.each(function(){
_79d(this);
});
},rejectChanges:function(jq){
return jq.each(function(){
_79f(this);
});
},mergeCells:function(jq,_808){
return jq.each(function(){
_7b1(this,_808);
});
},showColumn:function(jq,_809){
return jq.each(function(){
var col=$(this).datagrid("getColumnOption",_809);
if(col.hidden){
col.hidden=false;
$(this).datagrid("getPanel").find("td[field=\""+_809+"\"]").show();
_6ce(this,_809,1);
$(this).datagrid("fitColumns");
}
});
},hideColumn:function(jq,_80a){
return jq.each(function(){
var col=$(this).datagrid("getColumnOption",_80a);
if(!col.hidden){
col.hidden=true;
$(this).datagrid("getPanel").find("td[field=\""+_80a+"\"]").hide();
_6ce(this,_80a,-1);
$(this).datagrid("fitColumns");
}
});
},sort:function(jq,_80b){
return jq.each(function(){
_6a3(this,_80b);
});
},gotoPage:function(jq,_80c){
return jq.each(function(){
var _80d=this;
var page,cb;
if(typeof _80c=="object"){
page=_80c.page;
cb=_80c.callback;
}else{
page=_80c;
}
$(_80d).datagrid("options").pageNumber=page;
$(_80d).datagrid("getPager").pagination("refresh",{pageNumber:page});
_6cc(_80d,null,function(){
if(cb){
cb.call(_80d,page);
}
});
});
}};
$.fn.datagrid.parseOptions=function(_80e){
var t=$(_80e);
return $.extend({},$.fn.panel.parseOptions(_80e),$.parser.parseOptions(_80e,["url","toolbar","idField","sortName","sortOrder","pagePosition","resizeHandle",{sharedStyleSheet:"boolean",fitColumns:"boolean",autoRowHeight:"boolean",striped:"boolean",nowrap:"boolean"},{rownumbers:"boolean",singleSelect:"boolean",ctrlSelect:"boolean",checkOnSelect:"boolean",selectOnCheck:"boolean"},{pagination:"boolean",pageSize:"number",pageNumber:"number"},{multiSort:"boolean",remoteSort:"boolean",showHeader:"boolean",showFooter:"boolean"},{scrollbarSize:"number"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined),loadMsg:(t.attr("loadMsg")!=undefined?t.attr("loadMsg"):undefined),rowStyler:(t.attr("rowStyler")?eval(t.attr("rowStyler")):undefined)});
};
$.fn.datagrid.parseData=function(_80f){
var t=$(_80f);
var data={total:0,rows:[]};
var _810=t.datagrid("getColumnFields",true).concat(t.datagrid("getColumnFields",false));
t.find("tbody tr").each(function(){
data.total++;
var row={};
$.extend(row,$.parser.parseOptions(this,["iconCls","state"]));
for(var i=0;i<_810.length;i++){
row[_810[i]]=$(this).find("td:eq("+i+")").html();
}
data.rows.push(row);
});
return data;
};
var _811={render:function(_812,_813,_814){
var rows=$(_812).datagrid("getRows");
$(_813).html(this.renderTable(_812,0,rows,_814));
},renderFooter:function(_815,_816,_817){
var opts=$.data(_815,"datagrid").options;
var rows=$.data(_815,"datagrid").footer||[];
var _818=$(_815).datagrid("getColumnFields",_817);
var _819=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
_819.push("<tr class=\"datagrid-row\" datagrid-row-index=\""+i+"\">");
_819.push(this.renderRow.call(this,_815,_818,_817,i,rows[i]));
_819.push("</tr>");
}
_819.push("</tbody></table>");
$(_816).html(_819.join(""));
},renderTable:function(_81a,_81b,rows,_81c){
var _81d=$.data(_81a,"datagrid");
var opts=_81d.options;
if(_81c){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return "";
}
}
var _81e=$(_81a).datagrid("getColumnFields",_81c);
var _81f=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var css=opts.rowStyler?opts.rowStyler.call(_81a,_81b,row):"";
var cs=this.getStyleValue(css);
var cls="class=\"datagrid-row "+(_81b%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c+"\"";
var _820=cs.s?"style=\""+cs.s+"\"":"";
var _821=_81d.rowIdPrefix+"-"+(_81c?1:2)+"-"+_81b;
_81f.push("<tr id=\""+_821+"\" datagrid-row-index=\""+_81b+"\" "+cls+" "+_820+">");
_81f.push(this.renderRow.call(this,_81a,_81e,_81c,_81b,row));
_81f.push("</tr>");
_81b++;
}
_81f.push("</tbody></table>");
return _81f.join("");
},renderRow:function(_822,_823,_824,_825,_826){
var opts=$.data(_822,"datagrid").options;
var cc=[];
if(_824&&opts.rownumbers){
var _827=_825+1;
if(opts.pagination){
_827+=(opts.pageNumber-1)*opts.pageSize;
}
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">"+_827+"</div></td>");
}
for(var i=0;i<_823.length;i++){
var _828=_823[i];
var col=$(_822).datagrid("getColumnOption",_828);
if(col){
var _829=_826[_828];
var css=col.styler?(col.styler(_829,_826,_825)||""):"";
var cs=this.getStyleValue(css);
var cls=cs.c?"class=\""+cs.c+"\"":"";
var _82a=col.hidden?"style=\"display:none;"+cs.s+"\"":(cs.s?"style=\""+cs.s+"\"":"");
cc.push("<td field=\""+_828+"\" "+cls+" "+_82a+">");
var _82a="";
if(!col.checkbox){
if(col.align){
_82a+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_82a+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_82a+="height:auto;";
}
}
}
cc.push("<div style=\""+_82a+"\" ");
cc.push(col.checkbox?"class=\"datagrid-cell-check\"":"class=\"datagrid-cell "+col.cellClass+"\"");
cc.push(">");
if(col.checkbox){
cc.push("<input type=\"checkbox\" "+(_826.checked?"checked=\"checked\"":""));
cc.push(" name=\""+_828+"\" value=\""+(_829!=undefined?_829:"")+"\">");
}else{
if(col.formatter){
cc.push(col.formatter(_829,_826,_825));
}else{
cc.push(_829);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},getStyleValue:function(css){
var _82b="";
var _82c="";
if(typeof css=="string"){
_82c=css;
}else{
if(css){
_82b=css["class"]||"";
_82c=css["style"]||"";
}
}
return {c:_82b,s:_82c};
},refreshRow:function(_82d,_82e){
this.updateRow.call(this,_82d,_82e,{});
},updateRow:function(_82f,_830,row){
var opts=$.data(_82f,"datagrid").options;
var _831=opts.finder.getRow(_82f,_830);
$.extend(_831,row);
var cs=_832.call(this,_830);
var _833=cs.s;
var cls="datagrid-row "+(_830%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c;
function _832(_834){
var css=opts.rowStyler?opts.rowStyler.call(_82f,_834,_831):"";
return this.getStyleValue(css);
};
function _835(_836){
var tr=opts.finder.getTr(_82f,_830,"body",(_836?1:2));
if(!tr.length){
return;
}
var _837=$(_82f).datagrid("getColumnFields",_836);
var _838=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow.call(this,_82f,_837,_836,_830,_831));
var _839=(tr.hasClass("datagrid-row-checked")?" datagrid-row-checked":"")+(tr.hasClass("datagrid-row-selected")?" datagrid-row-selected":"");
tr.attr("style",_833).attr("class",cls+_839);
if(_838){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
};
_835.call(this,true);
_835.call(this,false);
$(_82f).datagrid("fixRowHeight",_830);
},insertRow:function(_83a,_83b,row){
var _83c=$.data(_83a,"datagrid");
var opts=_83c.options;
var dc=_83c.dc;
var data=_83c.data;
if(_83b==undefined||_83b==null){
_83b=data.rows.length;
}
if(_83b>data.rows.length){
_83b=data.rows.length;
}
function _83d(_83e){
var _83f=_83e?1:2;
for(var i=data.rows.length-1;i>=_83b;i--){
var tr=opts.finder.getTr(_83a,i,"body",_83f);
tr.attr("datagrid-row-index",i+1);
tr.attr("id",_83c.rowIdPrefix+"-"+_83f+"-"+(i+1));
if(_83e&&opts.rownumbers){
var _840=i+2;
if(opts.pagination){
_840+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_840);
}
if(opts.striped){
tr.removeClass("datagrid-row-alt").addClass((i+1)%2?"datagrid-row-alt":"");
}
}
};
function _841(_842){
var _843=_842?1:2;
var _844=$(_83a).datagrid("getColumnFields",_842);
var _845=_83c.rowIdPrefix+"-"+_843+"-"+_83b;
var tr="<tr id=\""+_845+"\" class=\"datagrid-row\" datagrid-row-index=\""+_83b+"\"></tr>";
if(_83b>=data.rows.length){
if(data.rows.length){
opts.finder.getTr(_83a,"","last",_843).after(tr);
}else{
var cc=_842?dc.body1:dc.body2;
cc.html("<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"+tr+"</tbody></table>");
}
}else{
opts.finder.getTr(_83a,_83b+1,"body",_843).before(tr);
}
};
_83d.call(this,true);
_83d.call(this,false);
_841.call(this,true);
_841.call(this,false);
data.total+=1;
data.rows.splice(_83b,0,row);
this.setEmptyMsg(_83a);
this.refreshRow.call(this,_83a,_83b);
},deleteRow:function(_846,_847){
var _848=$.data(_846,"datagrid");
var opts=_848.options;
var data=_848.data;
function _849(_84a){
var _84b=_84a?1:2;
for(var i=_847+1;i<data.rows.length;i++){
var tr=opts.finder.getTr(_846,i,"body",_84b);
tr.attr("datagrid-row-index",i-1);
tr.attr("id",_848.rowIdPrefix+"-"+_84b+"-"+(i-1));
if(_84a&&opts.rownumbers){
var _84c=i;
if(opts.pagination){
_84c+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_84c);
}
if(opts.striped){
tr.removeClass("datagrid-row-alt").addClass((i-1)%2?"datagrid-row-alt":"");
}
}
};
opts.finder.getTr(_846,_847).remove();
_849.call(this,true);
_849.call(this,false);
data.total-=1;
data.rows.splice(_847,1);
this.setEmptyMsg(_846);
},onBeforeRender:function(_84d,rows){
},onAfterRender:function(_84e){
var _84f=$.data(_84e,"datagrid");
var opts=_84f.options;
if(opts.showFooter){
var _850=$(_84e).datagrid("getPanel").find("div.datagrid-footer");
_850.find("div.datagrid-cell-rownumber,div.datagrid-cell-check").css("visibility","hidden");
}
this.setEmptyMsg(_84e);
},setEmptyMsg:function(_851){
var _852=$.data(_851,"datagrid");
var opts=_852.options;
var _853=opts.finder.getRows(_851).length==0;
if(_853){
this.renderEmptyRow(_851);
}
if(opts.emptyMsg){
_852.dc.view.children(".datagrid-empty").remove();
if(_853){
var h=_852.dc.header2.parent().outerHeight();
var d=$("<div class=\"datagrid-empty\"></div>").appendTo(_852.dc.view);
d.html(opts.emptyMsg).css("top",h+"px");
}
}
},renderEmptyRow:function(_854){
var cols=$.map($(_854).datagrid("getColumnFields"),function(_855){
return $(_854).datagrid("getColumnOption",_855);
});
$.map(cols,function(col){
col.formatter1=col.formatter;
col.styler1=col.styler;
col.formatter=col.styler=undefined;
});
var _856=$.data(_854,"datagrid").dc.body2;
_856.html(this.renderTable(_854,0,[{}],false));
_856.find("tbody *").css({height:1,borderColor:"transparent",background:"transparent"});
var tr=_856.find(".datagrid-row");
tr.removeClass("datagrid-row").removeAttr("datagrid-row-index");
tr.find(".datagrid-cell,.datagrid-cell-check").empty();
$.map(cols,function(col){
col.formatter=col.formatter1;
col.styler=col.styler1;
col.formatter1=col.styler1=undefined;
});
}};
$.fn.datagrid.defaults=$.extend({},$.fn.panel.defaults,{sharedStyleSheet:false,frozenColumns:undefined,columns:undefined,fitColumns:false,resizeHandle:"right",autoRowHeight:true,toolbar:null,striped:false,method:"post",nowrap:true,idField:null,url:null,data:null,loadMsg:"Processing, please wait ...",emptyMsg:"",rownumbers:false,singleSelect:false,ctrlSelect:false,selectOnCheck:true,checkOnSelect:true,pagination:false,pagePosition:"bottom",pageNumber:1,pageSize:10,pageList:[10,20,30,40,50],queryParams:{},sortName:null,sortOrder:"asc",multiSort:false,remoteSort:true,showHeader:true,showFooter:false,scrollbarSize:18,rownumberWidth:30,editorHeight:24,headerEvents:{mouseover:_69b(true),mouseout:_69b(false),click:_69f,dblclick:_6a4,contextmenu:_6a7},rowEvents:{mouseover:_6a9(true),mouseout:_6a9(false),click:_6b0,dblclick:_6ba,contextmenu:_6be},rowStyler:function(_857,_858){
},loader:function(_859,_85a,_85b){
var opts=$(this).datagrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_859,dataType:"json",success:function(data){
_85a(data);
},error:function(){
_85b.apply(this,arguments);
}});
},loadFilter:function(data){
return data;
},editors:_7c8,finder:{getTr:function(_85c,_85d,type,_85e){
type=type||"body";
_85e=_85e||0;
var _85f=$.data(_85c,"datagrid");
var dc=_85f.dc;
var opts=_85f.options;
if(_85e==0){
var tr1=opts.finder.getTr(_85c,_85d,type,1);
var tr2=opts.finder.getTr(_85c,_85d,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+_85f.rowIdPrefix+"-"+_85e+"-"+_85d);
if(!tr.length){
tr=(_85e==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index="+_85d+"]");
}
return tr;
}else{
if(type=="footer"){
return (_85e==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index="+_85d+"]");
}else{
if(type=="selected"){
return (_85e==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-selected");
}else{
if(type=="highlight"){
return (_85e==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-over");
}else{
if(type=="checked"){
return (_85e==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-checked");
}else{
if(type=="editing"){
return (_85e==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-editing");
}else{
if(type=="last"){
return (_85e==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]:last");
}else{
if(type=="allbody"){
return (_85e==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]");
}else{
if(type=="allfooter"){
return (_85e==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index]");
}
}
}
}
}
}
}
}
}
}
},getRow:function(_860,p){
var _861=(typeof p=="object")?p.attr("datagrid-row-index"):p;
return $.data(_860,"datagrid").data.rows[parseInt(_861)];
},getRows:function(_862){
return $(_862).datagrid("getRows");
}},view:_811,onBeforeLoad:function(_863){
},onLoadSuccess:function(){
},onLoadError:function(){
},onClickRow:function(_864,_865){
},onDblClickRow:function(_866,_867){
},onClickCell:function(_868,_869,_86a){
},onDblClickCell:function(_86b,_86c,_86d){
},onBeforeSortColumn:function(sort,_86e){
},onSortColumn:function(sort,_86f){
},onResizeColumn:function(_870,_871){
},onBeforeSelect:function(_872,_873){
},onSelect:function(_874,_875){
},onBeforeUnselect:function(_876,_877){
},onUnselect:function(_878,_879){
},onSelectAll:function(rows){
},onUnselectAll:function(rows){
},onBeforeCheck:function(_87a,_87b){
},onCheck:function(_87c,_87d){
},onBeforeUncheck:function(_87e,_87f){
},onUncheck:function(_880,_881){
},onCheckAll:function(rows){
},onUncheckAll:function(rows){
},onBeforeEdit:function(_882,_883){
},onBeginEdit:function(_884,_885){
},onEndEdit:function(_886,_887,_888){
},onAfterEdit:function(_889,_88a,_88b){
},onCancelEdit:function(_88c,_88d){
},onHeaderContextMenu:function(e,_88e){
},onRowContextMenu:function(e,_88f,_890){
}});
})(jQuery);
(function($){
var _891;
$(document).unbind(".propertygrid").bind("mousedown.propertygrid",function(e){
var p=$(e.target).closest("div.datagrid-view,div.combo-panel");
if(p.length){
return;
}
_892(_891);
_891=undefined;
});
function _893(_894){
var _895=$.data(_894,"propertygrid");
var opts=$.data(_894,"propertygrid").options;
$(_894).datagrid($.extend({},opts,{cls:"propertygrid",view:(opts.showGroup?opts.groupView:opts.view),onBeforeEdit:function(_896,row){
if(opts.onBeforeEdit.call(_894,_896,row)==false){
return false;
}
var dg=$(this);
var row=dg.datagrid("getRows")[_896];
var col=dg.datagrid("getColumnOption","value");
col.editor=row.editor;
},onClickCell:function(_897,_898,_899){
if(_891!=this){
_892(_891);
_891=this;
}
if(opts.editIndex!=_897){
_892(_891);
$(this).datagrid("beginEdit",_897);
var ed=$(this).datagrid("getEditor",{index:_897,field:_898});
if(!ed){
ed=$(this).datagrid("getEditor",{index:_897,field:"value"});
}
if(ed){
var t=$(ed.target);
var _89a=t.data("textbox")?t.textbox("textbox"):t;
_89a.focus();
opts.editIndex=_897;
}
}
opts.onClickCell.call(_894,_897,_898,_899);
},loadFilter:function(data){
_892(this);
return opts.loadFilter.call(this,data);
}}));
};
function _892(_89b){
var t=$(_89b);
if(!t.length){
return;
}
var opts=$.data(_89b,"propertygrid").options;
opts.finder.getTr(_89b,null,"editing").each(function(){
var _89c=parseInt($(this).attr("datagrid-row-index"));
if(t.datagrid("validateRow",_89c)){
t.datagrid("endEdit",_89c);
}else{
t.datagrid("cancelEdit",_89c);
}
});
opts.editIndex=undefined;
};
$.fn.propertygrid=function(_89d,_89e){
if(typeof _89d=="string"){
var _89f=$.fn.propertygrid.methods[_89d];
if(_89f){
return _89f(this,_89e);
}else{
return this.datagrid(_89d,_89e);
}
}
_89d=_89d||{};
return this.each(function(){
var _8a0=$.data(this,"propertygrid");
if(_8a0){
$.extend(_8a0.options,_89d);
}else{
var opts=$.extend({},$.fn.propertygrid.defaults,$.fn.propertygrid.parseOptions(this),_89d);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.columns=$.extend(true,[],opts.columns);
$.data(this,"propertygrid",{options:opts});
}
_893(this);
});
};
$.fn.propertygrid.methods={options:function(jq){
return $.data(jq[0],"propertygrid").options;
}};
$.fn.propertygrid.parseOptions=function(_8a1){
return $.extend({},$.fn.datagrid.parseOptions(_8a1),$.parser.parseOptions(_8a1,[{showGroup:"boolean"}]));
};
var _8a2=$.extend({},$.fn.datagrid.defaults.view,{render:function(_8a3,_8a4,_8a5){
var _8a6=[];
var _8a7=this.groups;
for(var i=0;i<_8a7.length;i++){
_8a6.push(this.renderGroup.call(this,_8a3,i,_8a7[i],_8a5));
}
$(_8a4).html(_8a6.join(""));
},renderGroup:function(_8a8,_8a9,_8aa,_8ab){
var _8ac=$.data(_8a8,"datagrid");
var opts=_8ac.options;
var _8ad=$(_8a8).datagrid("getColumnFields",_8ab);
var _8ae=[];
_8ae.push("<div class=\"datagrid-group\" group-index="+_8a9+">");
if((_8ab&&(opts.rownumbers||opts.frozenColumns.length))||(!_8ab&&!(opts.rownumbers||opts.frozenColumns.length))){
_8ae.push("<span class=\"datagrid-group-expander\">");
_8ae.push("<span class=\"datagrid-row-expander datagrid-row-collapse\">&nbsp;</span>");
_8ae.push("</span>");
}
if(!_8ab){
_8ae.push("<span class=\"datagrid-group-title\">");
_8ae.push(opts.groupFormatter.call(_8a8,_8aa.value,_8aa.rows));
_8ae.push("</span>");
}
_8ae.push("</div>");
_8ae.push("<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>");
var _8af=_8aa.startIndex;
for(var j=0;j<_8aa.rows.length;j++){
var css=opts.rowStyler?opts.rowStyler.call(_8a8,_8af,_8aa.rows[j]):"";
var _8b0="";
var _8b1="";
if(typeof css=="string"){
_8b1=css;
}else{
if(css){
_8b0=css["class"]||"";
_8b1=css["style"]||"";
}
}
var cls="class=\"datagrid-row "+(_8af%2&&opts.striped?"datagrid-row-alt ":" ")+_8b0+"\"";
var _8b2=_8b1?"style=\""+_8b1+"\"":"";
var _8b3=_8ac.rowIdPrefix+"-"+(_8ab?1:2)+"-"+_8af;
_8ae.push("<tr id=\""+_8b3+"\" datagrid-row-index=\""+_8af+"\" "+cls+" "+_8b2+">");
_8ae.push(this.renderRow.call(this,_8a8,_8ad,_8ab,_8af,_8aa.rows[j]));
_8ae.push("</tr>");
_8af++;
}
_8ae.push("</tbody></table>");
return _8ae.join("");
},bindEvents:function(_8b4){
var _8b5=$.data(_8b4,"datagrid");
var dc=_8b5.dc;
var body=dc.body1.add(dc.body2);
var _8b6=($.data(body[0],"events")||$._data(body[0],"events")).click[0].handler;
body.unbind("click").bind("click",function(e){
var tt=$(e.target);
var _8b7=tt.closest("span.datagrid-row-expander");
if(_8b7.length){
var _8b8=_8b7.closest("div.datagrid-group").attr("group-index");
if(_8b7.hasClass("datagrid-row-collapse")){
$(_8b4).datagrid("collapseGroup",_8b8);
}else{
$(_8b4).datagrid("expandGroup",_8b8);
}
}else{
_8b6(e);
}
e.stopPropagation();
});
},onBeforeRender:function(_8b9,rows){
var _8ba=$.data(_8b9,"datagrid");
var opts=_8ba.options;
_8bb();
var _8bc=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _8bd=_8be(row[opts.groupField]);
if(!_8bd){
_8bd={value:row[opts.groupField],rows:[row]};
_8bc.push(_8bd);
}else{
_8bd.rows.push(row);
}
}
var _8bf=0;
var _8c0=[];
for(var i=0;i<_8bc.length;i++){
var _8bd=_8bc[i];
_8bd.startIndex=_8bf;
_8bf+=_8bd.rows.length;
_8c0=_8c0.concat(_8bd.rows);
}
_8ba.data.rows=_8c0;
this.groups=_8bc;
var that=this;
setTimeout(function(){
that.bindEvents(_8b9);
},0);
function _8be(_8c1){
for(var i=0;i<_8bc.length;i++){
var _8c2=_8bc[i];
if(_8c2.value==_8c1){
return _8c2;
}
}
return null;
};
function _8bb(){
if(!$("#datagrid-group-style").length){
$("head").append("<style id=\"datagrid-group-style\">"+".datagrid-group{height:"+opts.groupHeight+"px;overflow:hidden;font-weight:bold;border-bottom:1px solid #ccc;}"+".datagrid-group-title,.datagrid-group-expander{display:inline-block;vertical-align:bottom;height:100%;line-height:"+opts.groupHeight+"px;padding:0 4px;}"+".datagrid-group-expander{width:"+opts.expanderWidth+"px;text-align:center;padding:0}"+".datagrid-row-expander{margin:"+Math.floor((opts.groupHeight-16)/2)+"px 0;display:inline-block;width:16px;height:16px;cursor:pointer}"+"</style>");
}
};
}});
$.extend($.fn.datagrid.methods,{groups:function(jq){
return jq.datagrid("options").view.groups;
},expandGroup:function(jq,_8c3){
return jq.each(function(){
var view=$.data(this,"datagrid").dc.view;
var _8c4=view.find(_8c3!=undefined?"div.datagrid-group[group-index=\""+_8c3+"\"]":"div.datagrid-group");
var _8c5=_8c4.find("span.datagrid-row-expander");
if(_8c5.hasClass("datagrid-row-expand")){
_8c5.removeClass("datagrid-row-expand").addClass("datagrid-row-collapse");
_8c4.next("table").show();
}
$(this).datagrid("fixRowHeight");
});
},collapseGroup:function(jq,_8c6){
return jq.each(function(){
var view=$.data(this,"datagrid").dc.view;
var _8c7=view.find(_8c6!=undefined?"div.datagrid-group[group-index=\""+_8c6+"\"]":"div.datagrid-group");
var _8c8=_8c7.find("span.datagrid-row-expander");
if(_8c8.hasClass("datagrid-row-collapse")){
_8c8.removeClass("datagrid-row-collapse").addClass("datagrid-row-expand");
_8c7.next("table").hide();
}
$(this).datagrid("fixRowHeight");
});
}});
$.extend(_8a2,{refreshGroupTitle:function(_8c9,_8ca){
var _8cb=$.data(_8c9,"datagrid");
var opts=_8cb.options;
var dc=_8cb.dc;
var _8cc=this.groups[_8ca];
var span=dc.body2.children("div.datagrid-group[group-index="+_8ca+"]").find("span.datagrid-group-title");
span.html(opts.groupFormatter.call(_8c9,_8cc.value,_8cc.rows));
},insertRow:function(_8cd,_8ce,row){
var _8cf=$.data(_8cd,"datagrid");
var opts=_8cf.options;
var dc=_8cf.dc;
var _8d0=null;
var _8d1;
if(!_8cf.data.rows.length){
$(_8cd).datagrid("loadData",[row]);
return;
}
for(var i=0;i<this.groups.length;i++){
if(this.groups[i].value==row[opts.groupField]){
_8d0=this.groups[i];
_8d1=i;
break;
}
}
if(_8d0){
if(_8ce==undefined||_8ce==null){
_8ce=_8cf.data.rows.length;
}
if(_8ce<_8d0.startIndex){
_8ce=_8d0.startIndex;
}else{
if(_8ce>_8d0.startIndex+_8d0.rows.length){
_8ce=_8d0.startIndex+_8d0.rows.length;
}
}
$.fn.datagrid.defaults.view.insertRow.call(this,_8cd,_8ce,row);
if(_8ce>=_8d0.startIndex+_8d0.rows.length){
_8d2(_8ce,true);
_8d2(_8ce,false);
}
_8d0.rows.splice(_8ce-_8d0.startIndex,0,row);
}else{
_8d0={value:row[opts.groupField],rows:[row],startIndex:_8cf.data.rows.length};
_8d1=this.groups.length;
dc.body1.append(this.renderGroup.call(this,_8cd,_8d1,_8d0,true));
dc.body2.append(this.renderGroup.call(this,_8cd,_8d1,_8d0,false));
this.groups.push(_8d0);
_8cf.data.rows.push(row);
}
this.refreshGroupTitle(_8cd,_8d1);
function _8d2(_8d3,_8d4){
var _8d5=_8d4?1:2;
var _8d6=opts.finder.getTr(_8cd,_8d3-1,"body",_8d5);
var tr=opts.finder.getTr(_8cd,_8d3,"body",_8d5);
tr.insertAfter(_8d6);
};
},updateRow:function(_8d7,_8d8,row){
var opts=$.data(_8d7,"datagrid").options;
$.fn.datagrid.defaults.view.updateRow.call(this,_8d7,_8d8,row);
var tb=opts.finder.getTr(_8d7,_8d8,"body",2).closest("table.datagrid-btable");
var _8d9=parseInt(tb.prev().attr("group-index"));
this.refreshGroupTitle(_8d7,_8d9);
},deleteRow:function(_8da,_8db){
var _8dc=$.data(_8da,"datagrid");
var opts=_8dc.options;
var dc=_8dc.dc;
var body=dc.body1.add(dc.body2);
var tb=opts.finder.getTr(_8da,_8db,"body",2).closest("table.datagrid-btable");
var _8dd=parseInt(tb.prev().attr("group-index"));
$.fn.datagrid.defaults.view.deleteRow.call(this,_8da,_8db);
var _8de=this.groups[_8dd];
if(_8de.rows.length>1){
_8de.rows.splice(_8db-_8de.startIndex,1);
this.refreshGroupTitle(_8da,_8dd);
}else{
body.children("div.datagrid-group[group-index="+_8dd+"]").remove();
for(var i=_8dd+1;i<this.groups.length;i++){
body.children("div.datagrid-group[group-index="+i+"]").attr("group-index",i-1);
}
this.groups.splice(_8dd,1);
}
var _8db=0;
for(var i=0;i<this.groups.length;i++){
var _8de=this.groups[i];
_8de.startIndex=_8db;
_8db+=_8de.rows.length;
}
}});
$.fn.propertygrid.defaults=$.extend({},$.fn.datagrid.defaults,{groupHeight:21,expanderWidth:16,singleSelect:true,remoteSort:false,fitColumns:true,loadMsg:"",frozenColumns:[[{field:"f",width:16,resizable:false}]],columns:[[{field:"name",title:"Name",width:100,sortable:true},{field:"value",title:"Value",width:100,resizable:false}]],showGroup:false,groupView:_8a2,groupField:"group",groupFormatter:function(_8df,rows){
return _8df;
}});
})(jQuery);
(function($){
function _8e0(_8e1){
var _8e2=$.data(_8e1,"treegrid");
var opts=_8e2.options;
$(_8e1).datagrid($.extend({},opts,{url:null,data:null,loader:function(){
return false;
},onBeforeLoad:function(){
return false;
},onLoadSuccess:function(){
},onResizeColumn:function(_8e3,_8e4){
_8f1(_8e1);
opts.onResizeColumn.call(_8e1,_8e3,_8e4);
},onBeforeSortColumn:function(sort,_8e5){
if(opts.onBeforeSortColumn.call(_8e1,sort,_8e5)==false){
return false;
}
},onSortColumn:function(sort,_8e6){
opts.sortName=sort;
opts.sortOrder=_8e6;
if(opts.remoteSort){
_8f0(_8e1);
}else{
var data=$(_8e1).treegrid("getData");
_91f(_8e1,null,data);
}
opts.onSortColumn.call(_8e1,sort,_8e6);
},onClickCell:function(_8e7,_8e8){
opts.onClickCell.call(_8e1,_8e8,find(_8e1,_8e7));
},onDblClickCell:function(_8e9,_8ea){
opts.onDblClickCell.call(_8e1,_8ea,find(_8e1,_8e9));
},onRowContextMenu:function(e,_8eb){
opts.onContextMenu.call(_8e1,e,find(_8e1,_8eb));
}}));
var _8ec=$.data(_8e1,"datagrid").options;
opts.columns=_8ec.columns;
opts.frozenColumns=_8ec.frozenColumns;
_8e2.dc=$.data(_8e1,"datagrid").dc;
if(opts.pagination){
var _8ed=$(_8e1).datagrid("getPager");
_8ed.pagination({pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_8ee,_8ef){
opts.pageNumber=_8ee;
opts.pageSize=_8ef;
_8f0(_8e1);
}});
opts.pageSize=_8ed.pagination("options").pageSize;
}
};
function _8f1(_8f2,_8f3){
var opts=$.data(_8f2,"datagrid").options;
var dc=$.data(_8f2,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight)){
if(_8f3!=undefined){
var _8f4=_8f5(_8f2,_8f3);
for(var i=0;i<_8f4.length;i++){
_8f6(_8f4[i][opts.idField]);
}
}
}
$(_8f2).datagrid("fixRowHeight",_8f3);
function _8f6(_8f7){
var tr1=opts.finder.getTr(_8f2,_8f7,"body",1);
var tr2=opts.finder.getTr(_8f2,_8f7,"body",2);
tr1.css("height","");
tr2.css("height","");
var _8f8=Math.max(tr1.height(),tr2.height());
tr1.css("height",_8f8);
tr2.css("height",_8f8);
};
};
function _8f9(_8fa){
var dc=$.data(_8fa,"datagrid").dc;
var opts=$.data(_8fa,"treegrid").options;
if(!opts.rownumbers){
return;
}
dc.body1.find("div.datagrid-cell-rownumber").each(function(i){
$(this).html(i+1);
});
};
function _8fb(_8fc){
return function(e){
$.fn.datagrid.defaults.rowEvents[_8fc?"mouseover":"mouseout"](e);
var tt=$(e.target);
var fn=_8fc?"addClass":"removeClass";
if(tt.hasClass("tree-hit")){
tt.hasClass("tree-expanded")?tt[fn]("tree-expanded-hover"):tt[fn]("tree-collapsed-hover");
}
};
};
function _8fd(e){
var tt=$(e.target);
var tr=tt.closest("tr.datagrid-row");
if(!tr.length||!tr.parent().length){
return;
}
var _8fe=tr.attr("node-id");
var _8ff=_900(tr);
if(tt.hasClass("tree-hit")){
_901(_8ff,_8fe);
}else{
if(tt.hasClass("tree-checkbox")){
_902(_8ff,_8fe);
}else{
var opts=$(_8ff).datagrid("options");
if(!tt.parent().hasClass("datagrid-cell-check")&&!opts.singleSelect&&e.shiftKey){
var rows=$(_8ff).treegrid("getChildren");
var idx1=$.easyui.indexOfArray(rows,opts.idField,opts.lastSelectedIndex);
var idx2=$.easyui.indexOfArray(rows,opts.idField,_8fe);
var from=Math.min(Math.max(idx1,0),idx2);
var to=Math.max(idx1,idx2);
var row=rows[idx2];
var td=tt.closest("td[field]",tr);
if(td.length){
var _903=td.attr("field");
opts.onClickCell.call(_8ff,_8fe,_903,row[_903]);
}
$(_8ff).treegrid("clearSelections");
for(var i=from;i<=to;i++){
$(_8ff).treegrid("selectRow",rows[i][opts.idField]);
}
opts.onClickRow.call(_8ff,row);
}else{
$.fn.datagrid.defaults.rowEvents.click(e);
}
}
}
};
function _900(t){
return $(t).closest("div.datagrid-view").children(".datagrid-f")[0];
};
function _902(_904,_905,_906,_907){
var _908=$.data(_904,"treegrid");
var _909=_908.checkedRows;
var opts=_908.options;
if(!opts.checkbox){
return;
}
var row=find(_904,_905);
if(!row.checkState){
return;
}
var tr=opts.finder.getTr(_904,_905);
var ck=tr.find(".tree-checkbox");
if(_906==undefined){
if(ck.hasClass("tree-checkbox1")){
_906=false;
}else{
if(ck.hasClass("tree-checkbox0")){
_906=true;
}else{
if(row._checked==undefined){
row._checked=ck.hasClass("tree-checkbox1");
}
_906=!row._checked;
}
}
}
row._checked=_906;
if(_906){
if(ck.hasClass("tree-checkbox1")){
return;
}
}else{
if(ck.hasClass("tree-checkbox0")){
return;
}
}
if(!_907){
if(opts.onBeforeCheckNode.call(_904,row,_906)==false){
return;
}
}
if(opts.cascadeCheck){
_90a(_904,row,_906);
_90b(_904,row);
}else{
_90c(_904,row,_906?"1":"0");
}
if(!_907){
opts.onCheckNode.call(_904,row,_906);
}
};
function _90c(_90d,row,flag){
var _90e=$.data(_90d,"treegrid");
var _90f=_90e.checkedRows;
var opts=_90e.options;
if(!row.checkState||flag==undefined){
return;
}
var tr=opts.finder.getTr(_90d,row[opts.idField]);
var ck=tr.find(".tree-checkbox");
if(!ck.length){
return;
}
row.checkState=["unchecked","checked","indeterminate"][flag];
row.checked=(row.checkState=="checked");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
ck.addClass("tree-checkbox"+flag);
if(flag==0){
$.easyui.removeArrayItem(_90f,opts.idField,row[opts.idField]);
}else{
$.easyui.addArrayItem(_90f,opts.idField,row);
}
};
function _90a(_910,row,_911){
var flag=_911?1:0;
_90c(_910,row,flag);
$.easyui.forEach(row.children||[],true,function(r){
_90c(_910,r,flag);
});
};
function _90b(_912,row){
var opts=$.data(_912,"treegrid").options;
var prow=_913(_912,row[opts.idField]);
if(prow){
_90c(_912,prow,_914(prow));
_90b(_912,prow);
}
};
function _914(row){
var len=0;
var c0=0;
var c1=0;
$.easyui.forEach(row.children||[],false,function(r){
if(r.checkState){
len++;
if(r.checkState=="checked"){
c1++;
}else{
if(r.checkState=="unchecked"){
c0++;
}
}
}
});
if(len==0){
return undefined;
}
var flag=0;
if(c0==len){
flag=0;
}else{
if(c1==len){
flag=1;
}else{
flag=2;
}
}
return flag;
};
function _915(_916,_917){
var opts=$.data(_916,"treegrid").options;
if(!opts.checkbox){
return;
}
var row=find(_916,_917);
var tr=opts.finder.getTr(_916,_917);
var ck=tr.find(".tree-checkbox");
if(opts.view.hasCheckbox(_916,row)){
if(!ck.length){
row.checkState=row.checkState||"unchecked";
$("<span class=\"tree-checkbox\"></span>").insertBefore(tr.find(".tree-title"));
}
if(row.checkState=="checked"){
_902(_916,_917,true,true);
}else{
if(row.checkState=="unchecked"){
_902(_916,_917,false,true);
}else{
var flag=_914(row);
if(flag===0){
_902(_916,_917,false,true);
}else{
if(flag===1){
_902(_916,_917,true,true);
}
}
}
}
}else{
ck.remove();
row.checkState=undefined;
row.checked=undefined;
_90b(_916,row);
}
};
function _918(_919,_91a){
var opts=$.data(_919,"treegrid").options;
var tr1=opts.finder.getTr(_919,_91a,"body",1);
var tr2=opts.finder.getTr(_919,_91a,"body",2);
var _91b=$(_919).datagrid("getColumnFields",true).length+(opts.rownumbers?1:0);
var _91c=$(_919).datagrid("getColumnFields",false).length;
_91d(tr1,_91b);
_91d(tr2,_91c);
function _91d(tr,_91e){
$("<tr class=\"treegrid-tr-tree\">"+"<td style=\"border:0px\" colspan=\""+_91e+"\">"+"<div></div>"+"</td>"+"</tr>").insertAfter(tr);
};
};
function _91f(_920,_921,data,_922,_923){
var _924=$.data(_920,"treegrid");
var opts=_924.options;
var dc=_924.dc;
data=opts.loadFilter.call(_920,data,_921);
var node=find(_920,_921);
if(node){
var _925=opts.finder.getTr(_920,_921,"body",1);
var _926=opts.finder.getTr(_920,_921,"body",2);
var cc1=_925.next("tr.treegrid-tr-tree").children("td").children("div");
var cc2=_926.next("tr.treegrid-tr-tree").children("td").children("div");
if(!_922){
node.children=[];
}
}else{
var cc1=dc.body1;
var cc2=dc.body2;
if(!_922){
_924.data=[];
}
}
if(!_922){
cc1.empty();
cc2.empty();
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_920,_921,data);
}
opts.view.render.call(opts.view,_920,cc1,true);
opts.view.render.call(opts.view,_920,cc2,false);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_920,dc.footer1,true);
opts.view.renderFooter.call(opts.view,_920,dc.footer2,false);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_920);
}
if(!_921&&opts.pagination){
var _927=$.data(_920,"treegrid").total;
var _928=$(_920).datagrid("getPager");
if(_928.pagination("options").total!=_927){
_928.pagination({total:_927});
}
}
_8f1(_920);
_8f9(_920);
$(_920).treegrid("showLines");
$(_920).treegrid("setSelectionState");
$(_920).treegrid("autoSizeColumn");
if(!_923){
opts.onLoadSuccess.call(_920,node,data);
}
};
function _8f0(_929,_92a,_92b,_92c,_92d){
var opts=$.data(_929,"treegrid").options;
var body=$(_929).datagrid("getPanel").find("div.datagrid-body");
if(_92a==undefined&&opts.queryParams){
opts.queryParams.id=undefined;
}
if(_92b){
opts.queryParams=_92b;
}
var _92e=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_92e,{page:opts.pageNumber,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_92e,{sort:opts.sortName,order:opts.sortOrder});
}
var row=find(_929,_92a);
if(opts.onBeforeLoad.call(_929,row,_92e)==false){
return;
}
var _92f=body.find("tr[node-id=\""+_92a+"\"] span.tree-folder");
_92f.addClass("tree-loading");
$(_929).treegrid("loading");
var _930=opts.loader.call(_929,_92e,function(data){
_92f.removeClass("tree-loading");
$(_929).treegrid("loaded");
_91f(_929,_92a,data,_92c);
if(_92d){
_92d();
}
},function(){
_92f.removeClass("tree-loading");
$(_929).treegrid("loaded");
opts.onLoadError.apply(_929,arguments);
if(_92d){
_92d();
}
});
if(_930==false){
_92f.removeClass("tree-loading");
$(_929).treegrid("loaded");
}
};
function _931(_932){
var _933=_934(_932);
return _933.length?_933[0]:null;
};
function _934(_935){
return $.data(_935,"treegrid").data;
};
function _913(_936,_937){
var row=find(_936,_937);
if(row._parentId){
return find(_936,row._parentId);
}else{
return null;
}
};
function _8f5(_938,_939){
var data=$.data(_938,"treegrid").data;
if(_939){
var _93a=find(_938,_939);
data=_93a?(_93a.children||[]):[];
}
var _93b=[];
$.easyui.forEach(data,true,function(node){
_93b.push(node);
});
return _93b;
};
function _93c(_93d,_93e){
var opts=$.data(_93d,"treegrid").options;
var tr=opts.finder.getTr(_93d,_93e);
var node=tr.children("td[field=\""+opts.treeField+"\"]");
return node.find("span.tree-indent,span.tree-hit").length;
};
function find(_93f,_940){
var _941=$.data(_93f,"treegrid");
var opts=_941.options;
var _942=null;
$.easyui.forEach(_941.data,true,function(node){
if(node[opts.idField]==_940){
_942=node;
return false;
}
});
return _942;
};
function _943(_944,_945){
var opts=$.data(_944,"treegrid").options;
var row=find(_944,_945);
var tr=opts.finder.getTr(_944,_945);
var hit=tr.find("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
if(opts.onBeforeCollapse.call(_944,row)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
row.state="closed";
tr=tr.next("tr.treegrid-tr-tree");
var cc=tr.children("td").children("div");
if(opts.animate){
cc.slideUp("normal",function(){
$(_944).treegrid("autoSizeColumn");
_8f1(_944,_945);
opts.onCollapse.call(_944,row);
});
}else{
cc.hide();
$(_944).treegrid("autoSizeColumn");
_8f1(_944,_945);
opts.onCollapse.call(_944,row);
}
};
function _946(_947,_948){
var opts=$.data(_947,"treegrid").options;
var tr=opts.finder.getTr(_947,_948);
var hit=tr.find("span.tree-hit");
var row=find(_947,_948);
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
if(opts.onBeforeExpand.call(_947,row)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var _949=tr.next("tr.treegrid-tr-tree");
if(_949.length){
var cc=_949.children("td").children("div");
_94a(cc);
}else{
_918(_947,row[opts.idField]);
var _949=tr.next("tr.treegrid-tr-tree");
var cc=_949.children("td").children("div");
cc.hide();
var _94b=$.extend({},opts.queryParams||{});
_94b.id=row[opts.idField];
_8f0(_947,row[opts.idField],_94b,true,function(){
if(cc.is(":empty")){
_949.remove();
}else{
_94a(cc);
}
});
}
function _94a(cc){
row.state="open";
if(opts.animate){
cc.slideDown("normal",function(){
$(_947).treegrid("autoSizeColumn");
_8f1(_947,_948);
opts.onExpand.call(_947,row);
});
}else{
cc.show();
$(_947).treegrid("autoSizeColumn");
_8f1(_947,_948);
opts.onExpand.call(_947,row);
}
};
};
function _901(_94c,_94d){
var opts=$.data(_94c,"treegrid").options;
var tr=opts.finder.getTr(_94c,_94d);
var hit=tr.find("span.tree-hit");
if(hit.hasClass("tree-expanded")){
_943(_94c,_94d);
}else{
_946(_94c,_94d);
}
};
function _94e(_94f,_950){
var opts=$.data(_94f,"treegrid").options;
var _951=_8f5(_94f,_950);
if(_950){
_951.unshift(find(_94f,_950));
}
for(var i=0;i<_951.length;i++){
_943(_94f,_951[i][opts.idField]);
}
};
function _952(_953,_954){
var opts=$.data(_953,"treegrid").options;
var _955=_8f5(_953,_954);
if(_954){
_955.unshift(find(_953,_954));
}
for(var i=0;i<_955.length;i++){
_946(_953,_955[i][opts.idField]);
}
};
function _956(_957,_958){
var opts=$.data(_957,"treegrid").options;
var ids=[];
var p=_913(_957,_958);
while(p){
var id=p[opts.idField];
ids.unshift(id);
p=_913(_957,id);
}
for(var i=0;i<ids.length;i++){
_946(_957,ids[i]);
}
};
function _959(_95a,_95b){
var _95c=$.data(_95a,"treegrid");
var opts=_95c.options;
if(_95b.parent){
var tr=opts.finder.getTr(_95a,_95b.parent);
if(tr.next("tr.treegrid-tr-tree").length==0){
_918(_95a,_95b.parent);
}
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
var _95d=cell.children("span.tree-icon");
if(_95d.hasClass("tree-file")){
_95d.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_95d);
if(hit.prev().length){
hit.prev().remove();
}
}
}
_91f(_95a,_95b.parent,_95b.data,_95c.data.length>0,true);
};
function _95e(_95f,_960){
var ref=_960.before||_960.after;
var opts=$.data(_95f,"treegrid").options;
var _961=_913(_95f,ref);
_959(_95f,{parent:(_961?_961[opts.idField]:null),data:[_960.data]});
var _962=_961?_961.children:$(_95f).treegrid("getRoots");
for(var i=0;i<_962.length;i++){
if(_962[i][opts.idField]==ref){
var _963=_962[_962.length-1];
_962.splice(_960.before?i:(i+1),0,_963);
_962.splice(_962.length-1,1);
break;
}
}
_964(true);
_964(false);
_8f9(_95f);
$(_95f).treegrid("showLines");
function _964(_965){
var _966=_965?1:2;
var tr=opts.finder.getTr(_95f,_960.data[opts.idField],"body",_966);
var _967=tr.closest("table.datagrid-btable");
tr=tr.parent().children();
var dest=opts.finder.getTr(_95f,ref,"body",_966);
if(_960.before){
tr.insertBefore(dest);
}else{
var sub=dest.next("tr.treegrid-tr-tree");
tr.insertAfter(sub.length?sub:dest);
}
_967.remove();
};
};
function _968(_969,_96a){
var _96b=$.data(_969,"treegrid");
var opts=_96b.options;
var prow=_913(_969,_96a);
$(_969).datagrid("deleteRow",_96a);
$.easyui.removeArrayItem(_96b.checkedRows,opts.idField,_96a);
_8f9(_969);
if(prow){
_915(_969,prow[opts.idField]);
}
_96b.total-=1;
$(_969).datagrid("getPager").pagination("refresh",{total:_96b.total});
$(_969).treegrid("showLines");
};
function _96c(_96d){
var t=$(_96d);
var opts=t.treegrid("options");
if(opts.lines){
t.treegrid("getPanel").addClass("tree-lines");
}else{
t.treegrid("getPanel").removeClass("tree-lines");
return;
}
t.treegrid("getPanel").find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
t.treegrid("getPanel").find("div.datagrid-cell").removeClass("tree-node-last tree-root-first tree-root-one");
var _96e=t.treegrid("getRoots");
if(_96e.length>1){
_96f(_96e[0]).addClass("tree-root-first");
}else{
if(_96e.length==1){
_96f(_96e[0]).addClass("tree-root-one");
}
}
_970(_96e);
_971(_96e);
function _970(_972){
$.map(_972,function(node){
if(node.children&&node.children.length){
_970(node.children);
}else{
var cell=_96f(node);
cell.find(".tree-icon").prev().addClass("tree-join");
}
});
if(_972.length){
var cell=_96f(_972[_972.length-1]);
cell.addClass("tree-node-last");
cell.find(".tree-join").removeClass("tree-join").addClass("tree-joinbottom");
}
};
function _971(_973){
$.map(_973,function(node){
if(node.children&&node.children.length){
_971(node.children);
}
});
for(var i=0;i<_973.length-1;i++){
var node=_973[i];
var _974=t.treegrid("getLevel",node[opts.idField]);
var tr=opts.finder.getTr(_96d,node[opts.idField]);
var cc=tr.next().find("tr.datagrid-row td[field=\""+opts.treeField+"\"] div.datagrid-cell");
cc.find("span:eq("+(_974-1)+")").addClass("tree-line");
}
};
function _96f(node){
var tr=opts.finder.getTr(_96d,node[opts.idField]);
var cell=tr.find("td[field=\""+opts.treeField+"\"] div.datagrid-cell");
return cell;
};
};
$.fn.treegrid=function(_975,_976){
if(typeof _975=="string"){
var _977=$.fn.treegrid.methods[_975];
if(_977){
return _977(this,_976);
}else{
return this.datagrid(_975,_976);
}
}
_975=_975||{};
return this.each(function(){
var _978=$.data(this,"treegrid");
if(_978){
$.extend(_978.options,_975);
}else{
_978=$.data(this,"treegrid",{options:$.extend({},$.fn.treegrid.defaults,$.fn.treegrid.parseOptions(this),_975),data:[],checkedRows:[],tmpIds:[]});
}
_8e0(this);
if(_978.options.data){
$(this).treegrid("loadData",_978.options.data);
}
_8f0(this);
});
};
$.fn.treegrid.methods={options:function(jq){
return $.data(jq[0],"treegrid").options;
},resize:function(jq,_979){
return jq.each(function(){
$(this).datagrid("resize",_979);
});
},fixRowHeight:function(jq,_97a){
return jq.each(function(){
_8f1(this,_97a);
});
},loadData:function(jq,data){
return jq.each(function(){
_91f(this,data.parent,data);
});
},load:function(jq,_97b){
return jq.each(function(){
$(this).treegrid("options").pageNumber=1;
$(this).treegrid("getPager").pagination({pageNumber:1});
$(this).treegrid("reload",_97b);
});
},reload:function(jq,id){
return jq.each(function(){
var opts=$(this).treegrid("options");
var _97c={};
if(typeof id=="object"){
_97c=id;
}else{
_97c=$.extend({},opts.queryParams);
_97c.id=id;
}
if(_97c.id){
var node=$(this).treegrid("find",_97c.id);
if(node.children){
node.children.splice(0,node.children.length);
}
opts.queryParams=_97c;
var tr=opts.finder.getTr(this,_97c.id);
tr.next("tr.treegrid-tr-tree").remove();
tr.find("span.tree-hit").removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
_946(this,_97c.id);
}else{
_8f0(this,null,_97c);
}
});
},reloadFooter:function(jq,_97d){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
var dc=$.data(this,"datagrid").dc;
if(_97d){
$.data(this,"treegrid").footer=_97d;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).treegrid("fixRowHeight");
}
});
},getData:function(jq){
return $.data(jq[0],"treegrid").data;
},getFooterRows:function(jq){
return $.data(jq[0],"treegrid").footer;
},getRoot:function(jq){
return _931(jq[0]);
},getRoots:function(jq){
return _934(jq[0]);
},getParent:function(jq,id){
return _913(jq[0],id);
},getChildren:function(jq,id){
return _8f5(jq[0],id);
},getLevel:function(jq,id){
return _93c(jq[0],id);
},find:function(jq,id){
return find(jq[0],id);
},isLeaf:function(jq,id){
var opts=$.data(jq[0],"treegrid").options;
var tr=opts.finder.getTr(jq[0],id);
var hit=tr.find("span.tree-hit");
return hit.length==0;
},select:function(jq,id){
return jq.each(function(){
$(this).datagrid("selectRow",id);
});
},unselect:function(jq,id){
return jq.each(function(){
$(this).datagrid("unselectRow",id);
});
},collapse:function(jq,id){
return jq.each(function(){
_943(this,id);
});
},expand:function(jq,id){
return jq.each(function(){
_946(this,id);
});
},toggle:function(jq,id){
return jq.each(function(){
_901(this,id);
});
},collapseAll:function(jq,id){
return jq.each(function(){
_94e(this,id);
});
},expandAll:function(jq,id){
return jq.each(function(){
_952(this,id);
});
},expandTo:function(jq,id){
return jq.each(function(){
_956(this,id);
});
},append:function(jq,_97e){
return jq.each(function(){
_959(this,_97e);
});
},insert:function(jq,_97f){
return jq.each(function(){
_95e(this,_97f);
});
},remove:function(jq,id){
return jq.each(function(){
_968(this,id);
});
},pop:function(jq,id){
var row=jq.treegrid("find",id);
jq.treegrid("remove",id);
return row;
},refresh:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
opts.view.refreshRow.call(opts.view,this,id);
});
},update:function(jq,_980){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
var row=_980.row;
opts.view.updateRow.call(opts.view,this,_980.id,row);
if(row.checked!=undefined){
row=find(this,_980.id);
$.extend(row,{checkState:row.checked?"checked":(row.checked===false?"unchecked":undefined)});
_915(this,_980.id);
}
});
},beginEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("beginEdit",id);
$(this).treegrid("fixRowHeight",id);
});
},endEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("endEdit",id);
});
},cancelEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("cancelEdit",id);
});
},showLines:function(jq){
return jq.each(function(){
_96c(this);
});
},setSelectionState:function(jq){
return jq.each(function(){
$(this).datagrid("setSelectionState");
var _981=$(this).data("treegrid");
for(var i=0;i<_981.tmpIds.length;i++){
_902(this,_981.tmpIds[i],true,true);
}
_981.tmpIds=[];
});
},getCheckedNodes:function(jq,_982){
_982=_982||"checked";
var rows=[];
$.easyui.forEach(jq.data("treegrid").checkedRows,false,function(row){
if(row.checkState==_982){
rows.push(row);
}
});
return rows;
},checkNode:function(jq,id){
return jq.each(function(){
_902(this,id,true);
});
},uncheckNode:function(jq,id){
return jq.each(function(){
_902(this,id,false);
});
},clearChecked:function(jq){
return jq.each(function(){
var _983=this;
var opts=$(_983).treegrid("options");
$(_983).datagrid("clearChecked");
$.map($(_983).treegrid("getCheckedNodes"),function(row){
_902(_983,row[opts.idField],false,true);
});
});
}};
$.fn.treegrid.parseOptions=function(_984){
return $.extend({},$.fn.datagrid.parseOptions(_984),$.parser.parseOptions(_984,["treeField",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean"}]));
};
var _985=$.extend({},$.fn.datagrid.defaults.view,{render:function(_986,_987,_988){
var opts=$.data(_986,"treegrid").options;
var _989=$(_986).datagrid("getColumnFields",_988);
var _98a=$.data(_986,"datagrid").rowIdPrefix;
if(_988){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return;
}
}
var view=this;
if(this.treeNodes&&this.treeNodes.length){
var _98b=_98c.call(this,_988,this.treeLevel,this.treeNodes);
$(_987).append(_98b.join(""));
}
function _98c(_98d,_98e,_98f){
var _990=$(_986).treegrid("getParent",_98f[0][opts.idField]);
var _991=(_990?_990.children.length:$(_986).treegrid("getRoots").length)-_98f.length;
var _992=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<_98f.length;i++){
var row=_98f[i];
if(row.state!="open"&&row.state!="closed"){
row.state="open";
}
var css=opts.rowStyler?opts.rowStyler.call(_986,row):"";
var cs=this.getStyleValue(css);
var cls="class=\"datagrid-row "+(_991++%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c+"\"";
var _993=cs.s?"style=\""+cs.s+"\"":"";
var _994=_98a+"-"+(_98d?1:2)+"-"+row[opts.idField];
_992.push("<tr id=\""+_994+"\" node-id=\""+row[opts.idField]+"\" "+cls+" "+_993+">");
_992=_992.concat(view.renderRow.call(view,_986,_989,_98d,_98e,row));
_992.push("</tr>");
if(row.children&&row.children.length){
var tt=_98c.call(this,_98d,_98e+1,row.children);
var v=row.state=="closed"?"none":"block";
_992.push("<tr class=\"treegrid-tr-tree\"><td style=\"border:0px\" colspan="+(_989.length+(opts.rownumbers?1:0))+"><div style=\"display:"+v+"\">");
_992=_992.concat(tt);
_992.push("</div></td></tr>");
}
}
_992.push("</tbody></table>");
return _992;
};
},renderFooter:function(_995,_996,_997){
var opts=$.data(_995,"treegrid").options;
var rows=$.data(_995,"treegrid").footer||[];
var _998=$(_995).datagrid("getColumnFields",_997);
var _999=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
row[opts.idField]=row[opts.idField]||("foot-row-id"+i);
_999.push("<tr class=\"datagrid-row\" node-id=\""+row[opts.idField]+"\">");
_999.push(this.renderRow.call(this,_995,_998,_997,0,row));
_999.push("</tr>");
}
_999.push("</tbody></table>");
$(_996).html(_999.join(""));
},renderRow:function(_99a,_99b,_99c,_99d,row){
var _99e=$.data(_99a,"treegrid");
var opts=_99e.options;
var cc=[];
if(_99c&&opts.rownumbers){
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">0</div></td>");
}
for(var i=0;i<_99b.length;i++){
var _99f=_99b[i];
var col=$(_99a).datagrid("getColumnOption",_99f);
if(col){
var css=col.styler?(col.styler(row[_99f],row)||""):"";
var cs=this.getStyleValue(css);
var cls=cs.c?"class=\""+cs.c+"\"":"";
var _9a0=col.hidden?"style=\"display:none;"+cs.s+"\"":(cs.s?"style=\""+cs.s+"\"":"");
cc.push("<td field=\""+_99f+"\" "+cls+" "+_9a0+">");
var _9a0="";
if(!col.checkbox){
if(col.align){
_9a0+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_9a0+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_9a0+="height:auto;";
}
}
}
cc.push("<div style=\""+_9a0+"\" ");
if(col.checkbox){
cc.push("class=\"datagrid-cell-check ");
}else{
cc.push("class=\"datagrid-cell "+col.cellClass);
}
cc.push("\">");
if(col.checkbox){
if(row.checked){
cc.push("<input type=\"checkbox\" checked=\"checked\"");
}else{
cc.push("<input type=\"checkbox\"");
}
cc.push(" name=\""+_99f+"\" value=\""+(row[_99f]!=undefined?row[_99f]:"")+"\">");
}else{
var val=null;
if(col.formatter){
val=col.formatter(row[_99f],row);
}else{
val=row[_99f];
}
if(_99f==opts.treeField){
for(var j=0;j<_99d;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(row.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
if(row.children&&row.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(row.iconCls?row.iconCls:"")+"\"></span>");
}
}
if(this.hasCheckbox(_99a,row)){
var flag=0;
var crow=$.easyui.getArrayItem(_99e.checkedRows,opts.idField,row[opts.idField]);
if(crow){
flag=crow.checkState=="checked"?1:2;
row.checkState=crow.checkState;
row.checked=crow.checked;
$.easyui.addArrayItem(_99e.checkedRows,opts.idField,row);
}else{
var prow=$.easyui.getArrayItem(_99e.checkedRows,opts.idField,row._parentId);
if(prow&&prow.checkState=="checked"&&opts.cascadeCheck){
flag=1;
row.checked=true;
$.easyui.addArrayItem(_99e.checkedRows,opts.idField,row);
}else{
if(row.checked){
$.easyui.addArrayItem(_99e.tmpIds,row[opts.idField]);
}
}
row.checkState=flag?"checked":"unchecked";
}
cc.push("<span class=\"tree-checkbox tree-checkbox"+flag+"\"></span>");
}else{
row.checkState=undefined;
row.checked=undefined;
}
cc.push("<span class=\"tree-title\">"+val+"</span>");
}else{
cc.push(val);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},hasCheckbox:function(_9a1,row){
var opts=$.data(_9a1,"treegrid").options;
if(opts.checkbox){
if($.isFunction(opts.checkbox)){
if(opts.checkbox.call(_9a1,row)){
return true;
}else{
return false;
}
}else{
if(opts.onlyLeafCheck){
if(row.state=="open"&&!(row.children&&row.children.length)){
return true;
}
}else{
return true;
}
}
}
return false;
},refreshRow:function(_9a2,id){
this.updateRow.call(this,_9a2,id,{});
},updateRow:function(_9a3,id,row){
var opts=$.data(_9a3,"treegrid").options;
var _9a4=$(_9a3).treegrid("find",id);
$.extend(_9a4,row);
var _9a5=$(_9a3).treegrid("getLevel",id)-1;
var _9a6=opts.rowStyler?opts.rowStyler.call(_9a3,_9a4):"";
var _9a7=$.data(_9a3,"datagrid").rowIdPrefix;
var _9a8=_9a4[opts.idField];
function _9a9(_9aa){
var _9ab=$(_9a3).treegrid("getColumnFields",_9aa);
var tr=opts.finder.getTr(_9a3,id,"body",(_9aa?1:2));
var _9ac=tr.find("div.datagrid-cell-rownumber").html();
var _9ad=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow(_9a3,_9ab,_9aa,_9a5,_9a4));
tr.attr("style",_9a6||"");
tr.find("div.datagrid-cell-rownumber").html(_9ac);
if(_9ad){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
if(_9a8!=id){
tr.attr("id",_9a7+"-"+(_9aa?1:2)+"-"+_9a8);
tr.attr("node-id",_9a8);
}
};
_9a9.call(this,true);
_9a9.call(this,false);
$(_9a3).treegrid("fixRowHeight",id);
},deleteRow:function(_9ae,id){
var opts=$.data(_9ae,"treegrid").options;
var tr=opts.finder.getTr(_9ae,id);
tr.next("tr.treegrid-tr-tree").remove();
tr.remove();
var _9af=del(id);
if(_9af){
if(_9af.children.length==0){
tr=opts.finder.getTr(_9ae,_9af[opts.idField]);
tr.next("tr.treegrid-tr-tree").remove();
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
cell.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
cell.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(cell);
}
}
this.setEmptyMsg(_9ae);
function del(id){
var cc;
var _9b0=$(_9ae).treegrid("getParent",id);
if(_9b0){
cc=_9b0.children;
}else{
cc=$(_9ae).treegrid("getData");
}
for(var i=0;i<cc.length;i++){
if(cc[i][opts.idField]==id){
cc.splice(i,1);
break;
}
}
return _9b0;
};
},onBeforeRender:function(_9b1,_9b2,data){
if($.isArray(_9b2)){
data={total:_9b2.length,rows:_9b2};
_9b2=null;
}
if(!data){
return false;
}
var _9b3=$.data(_9b1,"treegrid");
var opts=_9b3.options;
if(data.length==undefined){
if(data.footer){
_9b3.footer=data.footer;
}
if(data.total){
_9b3.total=data.total;
}
data=this.transfer(_9b1,_9b2,data.rows);
}else{
function _9b4(_9b5,_9b6){
for(var i=0;i<_9b5.length;i++){
var row=_9b5[i];
row._parentId=_9b6;
if(row.children&&row.children.length){
_9b4(row.children,row[opts.idField]);
}
}
};
_9b4(data,_9b2);
}
var node=find(_9b1,_9b2);
if(node){
if(node.children){
node.children=node.children.concat(data);
}else{
node.children=data;
}
}else{
_9b3.data=_9b3.data.concat(data);
}
this.sort(_9b1,data);
this.treeNodes=data;
this.treeLevel=$(_9b1).treegrid("getLevel",_9b2);
},sort:function(_9b7,data){
var opts=$.data(_9b7,"treegrid").options;
if(!opts.remoteSort&&opts.sortName){
var _9b8=opts.sortName.split(",");
var _9b9=opts.sortOrder.split(",");
_9ba(data);
}
function _9ba(rows){
rows.sort(function(r1,r2){
var r=0;
for(var i=0;i<_9b8.length;i++){
var sn=_9b8[i];
var so=_9b9[i];
var col=$(_9b7).treegrid("getColumnOption",sn);
var _9bb=col.sorter||function(a,b){
return a==b?0:(a>b?1:-1);
};
r=_9bb(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
for(var i=0;i<rows.length;i++){
var _9bc=rows[i].children;
if(_9bc&&_9bc.length){
_9ba(_9bc);
}
}
};
},transfer:function(_9bd,_9be,data){
var opts=$.data(_9bd,"treegrid").options;
var rows=$.extend([],data);
var _9bf=_9c0(_9be,rows);
var toDo=$.extend([],_9bf);
while(toDo.length){
var node=toDo.shift();
var _9c1=_9c0(node[opts.idField],rows);
if(_9c1.length){
if(node.children){
node.children=node.children.concat(_9c1);
}else{
node.children=_9c1;
}
toDo=toDo.concat(_9c1);
}
}
return _9bf;
function _9c0(_9c2,rows){
var rr=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
if(row._parentId==_9c2){
rr.push(row);
rows.splice(i,1);
i--;
}
}
return rr;
};
}});
$.fn.treegrid.defaults=$.extend({},$.fn.datagrid.defaults,{treeField:null,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,animate:false,singleSelect:true,view:_985,rowEvents:$.extend({},$.fn.datagrid.defaults.rowEvents,{mouseover:_8fb(true),mouseout:_8fb(false),click:_8fd}),loader:function(_9c3,_9c4,_9c5){
var opts=$(this).treegrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_9c3,dataType:"json",success:function(data){
_9c4(data);
},error:function(){
_9c5.apply(this,arguments);
}});
},loadFilter:function(data,_9c6){
return data;
},finder:{getTr:function(_9c7,id,type,_9c8){
type=type||"body";
_9c8=_9c8||0;
var dc=$.data(_9c7,"datagrid").dc;
if(_9c8==0){
var opts=$.data(_9c7,"treegrid").options;
var tr1=opts.finder.getTr(_9c7,id,type,1);
var tr2=opts.finder.getTr(_9c7,id,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+$.data(_9c7,"datagrid").rowIdPrefix+"-"+_9c8+"-"+id);
if(!tr.length){
tr=(_9c8==1?dc.body1:dc.body2).find("tr[node-id=\""+id+"\"]");
}
return tr;
}else{
if(type=="footer"){
return (_9c8==1?dc.footer1:dc.footer2).find("tr[node-id=\""+id+"\"]");
}else{
if(type=="selected"){
return (_9c8==1?dc.body1:dc.body2).find("tr.datagrid-row-selected");
}else{
if(type=="highlight"){
return (_9c8==1?dc.body1:dc.body2).find("tr.datagrid-row-over");
}else{
if(type=="checked"){
return (_9c8==1?dc.body1:dc.body2).find("tr.datagrid-row-checked");
}else{
if(type=="last"){
return (_9c8==1?dc.body1:dc.body2).find("tr:last[node-id]");
}else{
if(type=="allbody"){
return (_9c8==1?dc.body1:dc.body2).find("tr[node-id]");
}else{
if(type=="allfooter"){
return (_9c8==1?dc.footer1:dc.footer2).find("tr[node-id]");
}
}
}
}
}
}
}
}
}
},getRow:function(_9c9,p){
var id=(typeof p=="object")?p.attr("node-id"):p;
return $(_9c9).treegrid("find",id);
},getRows:function(_9ca){
return $(_9ca).treegrid("getChildren");
}},onBeforeLoad:function(row,_9cb){
},onLoadSuccess:function(row,data){
},onLoadError:function(){
},onBeforeCollapse:function(row){
},onCollapse:function(row){
},onBeforeExpand:function(row){
},onExpand:function(row){
},onClickRow:function(row){
},onDblClickRow:function(row){
},onClickCell:function(_9cc,row){
},onDblClickCell:function(_9cd,row){
},onContextMenu:function(e,row){
},onBeforeEdit:function(row){
},onAfterEdit:function(row,_9ce){
},onCancelEdit:function(row){
},onBeforeCheckNode:function(row,_9cf){
},onCheckNode:function(row,_9d0){
}});
})(jQuery);
(function($){
function _9d1(_9d2){
var opts=$.data(_9d2,"datalist").options;
$(_9d2).datagrid($.extend({},opts,{cls:"datalist"+(opts.lines?" datalist-lines":""),frozenColumns:(opts.frozenColumns&&opts.frozenColumns.length)?opts.frozenColumns:(opts.checkbox?[[{field:"_ck",checkbox:true}]]:undefined),columns:(opts.columns&&opts.columns.length)?opts.columns:[[{field:opts.textField,width:"100%",formatter:function(_9d3,row,_9d4){
return opts.textFormatter?opts.textFormatter(_9d3,row,_9d4):_9d3;
}}]]}));
};
var _9d5=$.extend({},$.fn.datagrid.defaults.view,{render:function(_9d6,_9d7,_9d8){
var _9d9=$.data(_9d6,"datagrid");
var opts=_9d9.options;
if(opts.groupField){
var g=this.groupRows(_9d6,_9d9.data.rows);
this.groups=g.groups;
_9d9.data.rows=g.rows;
var _9da=[];
for(var i=0;i<g.groups.length;i++){
_9da.push(this.renderGroup.call(this,_9d6,i,g.groups[i],_9d8));
}
$(_9d7).html(_9da.join(""));
}else{
$(_9d7).html(this.renderTable(_9d6,0,_9d9.data.rows,_9d8));
}
},renderGroup:function(_9db,_9dc,_9dd,_9de){
var _9df=$.data(_9db,"datagrid");
var opts=_9df.options;
var _9e0=$(_9db).datagrid("getColumnFields",_9de);
var _9e1=[];
_9e1.push("<div class=\"datagrid-group\" group-index="+_9dc+">");
if(!_9de){
_9e1.push("<span class=\"datagrid-group-title\">");
_9e1.push(opts.groupFormatter.call(_9db,_9dd.value,_9dd.rows));
_9e1.push("</span>");
}
_9e1.push("</div>");
_9e1.push(this.renderTable(_9db,_9dd.startIndex,_9dd.rows,_9de));
return _9e1.join("");
},groupRows:function(_9e2,rows){
var _9e3=$.data(_9e2,"datagrid");
var opts=_9e3.options;
var _9e4=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _9e5=_9e6(row[opts.groupField]);
if(!_9e5){
_9e5={value:row[opts.groupField],rows:[row]};
_9e4.push(_9e5);
}else{
_9e5.rows.push(row);
}
}
var _9e7=0;
var rows=[];
for(var i=0;i<_9e4.length;i++){
var _9e5=_9e4[i];
_9e5.startIndex=_9e7;
_9e7+=_9e5.rows.length;
rows=rows.concat(_9e5.rows);
}
return {groups:_9e4,rows:rows};
function _9e6(_9e8){
for(var i=0;i<_9e4.length;i++){
var _9e9=_9e4[i];
if(_9e9.value==_9e8){
return _9e9;
}
}
return null;
};
}});
$.fn.datalist=function(_9ea,_9eb){
if(typeof _9ea=="string"){
var _9ec=$.fn.datalist.methods[_9ea];
if(_9ec){
return _9ec(this,_9eb);
}else{
return this.datagrid(_9ea,_9eb);
}
}
_9ea=_9ea||{};
return this.each(function(){
var _9ed=$.data(this,"datalist");
if(_9ed){
$.extend(_9ed.options,_9ea);
}else{
var opts=$.extend({},$.fn.datalist.defaults,$.fn.datalist.parseOptions(this),_9ea);
opts.columns=$.extend(true,[],opts.columns);
_9ed=$.data(this,"datalist",{options:opts});
}
_9d1(this);
if(!_9ed.options.data){
var data=$.fn.datalist.parseData(this);
if(data.total){
$(this).datalist("loadData",data);
}
}
});
};
$.fn.datalist.methods={options:function(jq){
return $.data(jq[0],"datalist").options;
}};
$.fn.datalist.parseOptions=function(_9ee){
return $.extend({},$.fn.datagrid.parseOptions(_9ee),$.parser.parseOptions(_9ee,["valueField","textField","groupField",{checkbox:"boolean",lines:"boolean"}]));
};
$.fn.datalist.parseData=function(_9ef){
var opts=$.data(_9ef,"datalist").options;
var data={total:0,rows:[]};
$(_9ef).children().each(function(){
var _9f0=$.parser.parseOptions(this,["value","group"]);
var row={};
var html=$(this).html();
row[opts.valueField]=_9f0.value!=undefined?_9f0.value:html;
row[opts.textField]=html;
if(opts.groupField){
row[opts.groupField]=_9f0.group;
}
data.total++;
data.rows.push(row);
});
return data;
};
$.fn.datalist.defaults=$.extend({},$.fn.datagrid.defaults,{fitColumns:true,singleSelect:true,showHeader:false,checkbox:false,lines:false,valueField:"value",textField:"text",groupField:"",view:_9d5,textFormatter:function(_9f1,row){
return _9f1;
},groupFormatter:function(_9f2,rows){
return _9f2;
}});
})(jQuery);
(function($){
$(function(){
$(document).unbind(".combo").bind("mousedown.combo mousewheel.combo",function(e){
var p=$(e.target).closest("span.combo,div.combo-p,div.menu");
if(p.length){
_9f3(p);
return;
}
$("body>div.combo-p>div.combo-panel:visible").panel("close");
});
});
function _9f4(_9f5){
var _9f6=$.data(_9f5,"combo");
var opts=_9f6.options;
if(!_9f6.panel){
_9f6.panel=$("<div class=\"combo-panel\"></div>").appendTo("body");
_9f6.panel.panel({minWidth:opts.panelMinWidth,maxWidth:opts.panelMaxWidth,minHeight:opts.panelMinHeight,maxHeight:opts.panelMaxHeight,doSize:false,closed:true,cls:"combo-p",style:{position:"absolute",zIndex:10},onOpen:function(){
var _9f7=$(this).panel("options").comboTarget;
var _9f8=$.data(_9f7,"combo");
if(_9f8){
_9f8.options.onShowPanel.call(_9f7);
}
},onBeforeClose:function(){
_9f3($(this).parent());
},onClose:function(){
var _9f9=$(this).panel("options").comboTarget;
var _9fa=$(_9f9).data("combo");
if(_9fa){
_9fa.options.onHidePanel.call(_9f9);
}
}});
}
var _9fb=$.extend(true,[],opts.icons);
if(opts.hasDownArrow){
_9fb.push({iconCls:"combo-arrow",handler:function(e){
_9ff(e.data.target);
}});
}
$(_9f5).addClass("combo-f").textbox($.extend({},opts,{icons:_9fb,onChange:function(){
}}));
$(_9f5).attr("comboName",$(_9f5).attr("textboxName"));
_9f6.combo=$(_9f5).next();
_9f6.combo.addClass("combo");
};
function _9fc(_9fd){
var _9fe=$.data(_9fd,"combo");
var opts=_9fe.options;
var p=_9fe.panel;
if(p.is(":visible")){
p.panel("close");
}
if(!opts.cloned){
p.panel("destroy");
}
$(_9fd).textbox("destroy");
};
function _9ff(_a00){
var _a01=$.data(_a00,"combo").panel;
if(_a01.is(":visible")){
var _a02=_a01.combo("combo");
_a03(_a02);
if(_a02!=_a00){
$(_a00).combo("showPanel");
}
}else{
var p=$(_a00).closest("div.combo-p").children(".combo-panel");
$("div.combo-panel:visible").not(_a01).not(p).panel("close");
$(_a00).combo("showPanel");
}
$(_a00).combo("textbox").focus();
};
function _9f3(_a04){
$(_a04).find(".combo-f").each(function(){
var p=$(this).combo("panel");
if(p.is(":visible")){
p.panel("close");
}
});
};
function _a05(e){
var _a06=e.data.target;
var _a07=$.data(_a06,"combo");
var opts=_a07.options;
if(!opts.editable){
_9ff(_a06);
}else{
var p=$(_a06).closest("div.combo-p").children(".combo-panel");
$("div.combo-panel:visible").not(p).each(function(){
var _a08=$(this).combo("combo");
if(_a08!=_a06){
_a03(_a08);
}
});
}
};
function _a09(e){
var _a0a=e.data.target;
var t=$(_a0a);
var _a0b=t.data("combo");
var opts=t.combo("options");
_a0b.panel.panel("options").comboTarget=_a0a;
switch(e.keyCode){
case 38:
opts.keyHandler.up.call(_a0a,e);
break;
case 40:
opts.keyHandler.down.call(_a0a,e);
break;
case 37:
opts.keyHandler.left.call(_a0a,e);
break;
case 39:
opts.keyHandler.right.call(_a0a,e);
break;
case 13:
e.preventDefault();
opts.keyHandler.enter.call(_a0a,e);
return false;
case 9:
case 27:
_a03(_a0a);
break;
default:
if(opts.editable){
if(_a0b.timer){
clearTimeout(_a0b.timer);
}
_a0b.timer=setTimeout(function(){
var q=t.combo("getText");
if(_a0b.previousText!=q){
_a0b.previousText=q;
t.combo("showPanel");
opts.keyHandler.query.call(_a0a,q,e);
t.combo("validate");
}
},opts.delay);
}
}
};
function _a0c(_a0d){
var _a0e=$.data(_a0d,"combo");
var _a0f=_a0e.combo;
var _a10=_a0e.panel;
var opts=$(_a0d).combo("options");
var _a11=_a10.panel("options");
_a11.comboTarget=_a0d;
if(_a11.closed){
_a10.panel("panel").show().css({zIndex:($.fn.menu?$.fn.menu.defaults.zIndex++:($.fn.window?$.fn.window.defaults.zIndex++:99)),left:-999999});
_a10.panel("resize",{width:(opts.panelWidth?opts.panelWidth:_a0f._outerWidth()),height:opts.panelHeight});
_a10.panel("panel").hide();
_a10.panel("open");
}
(function(){
if(_a11.comboTarget==_a0d&&_a10.is(":visible")){
_a10.panel("move",{left:_a12(),top:_a13()});
setTimeout(arguments.callee,200);
}
})();
function _a12(){
var left=_a0f.offset().left;
if(opts.panelAlign=="right"){
left+=_a0f._outerWidth()-_a10._outerWidth();
}
if(left+_a10._outerWidth()>$(window)._outerWidth()+$(document).scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-_a10._outerWidth();
}
if(left<0){
left=0;
}
return left;
};
function _a13(){
var top=_a0f.offset().top+_a0f._outerHeight();
if(top+_a10._outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
top=_a0f.offset().top-_a10._outerHeight();
}
if(top<$(document).scrollTop()){
top=_a0f.offset().top+_a0f._outerHeight();
}
return top;
};
};
function _a03(_a14){
var _a15=$.data(_a14,"combo").panel;
_a15.panel("close");
};
function _a16(_a17,text){
var _a18=$.data(_a17,"combo");
var _a19=$(_a17).textbox("getText");
if(_a19!=text){
$(_a17).textbox("setText",text);
}
_a18.previousText=text;
};
function _a1a(_a1b){
var _a1c=$.data(_a1b,"combo");
var opts=_a1c.options;
var _a1d=_a1c.combo;
var _a1e=[];
_a1d.find(".textbox-value").each(function(){
_a1e.push($(this).val());
});
if(opts.multivalue){
return _a1e;
}else{
return _a1e.length?_a1e[0].split(opts.separator):_a1e;
}
};
function _a1f(_a20,_a21){
var _a22=$.data(_a20,"combo");
var opts=_a22.options;
var _a23=_a22.combo;
if(!$.isArray(_a21)){
_a21=_a21.split(opts.separator);
}
var _a24=_a1a(_a20);
_a23.find(".textbox-value").remove();
if(_a21.length){
if(opts.multivalue){
for(var i=0;i<_a21.length;i++){
_a25(_a21[i]);
}
}else{
_a25(_a21.join(opts.separator));
}
}
function _a25(_a26){
var name=$(_a20).attr("textboxName")||"";
var _a27=$("<input type=\"hidden\" class=\"textbox-value\">").appendTo(_a23);
_a27.attr("name",name);
if(opts.disabled){
_a27.attr("disabled","disabled");
}
_a27.val(_a26);
};
var _a28=(function(){
if(_a24.length!=_a21.length){
return true;
}
for(var i=0;i<_a21.length;i++){
if(_a21[i]!=_a24[i]){
return true;
}
}
return false;
})();
if(_a28){
$(_a20).val(_a21.join(opts.separator));
if(opts.multiple){
opts.onChange.call(_a20,_a21,_a24);
}else{
opts.onChange.call(_a20,_a21[0],_a24[0]);
}
$(_a20).closest("form").trigger("_change",[_a20]);
}
};
function _a29(_a2a){
var _a2b=_a1a(_a2a);
return _a2b[0];
};
function _a2c(_a2d,_a2e){
_a1f(_a2d,[_a2e]);
};
function _a2f(_a30){
var opts=$.data(_a30,"combo").options;
var _a31=opts.onChange;
opts.onChange=function(){
};
if(opts.multiple){
_a1f(_a30,opts.value?opts.value:[]);
}else{
_a2c(_a30,opts.value);
}
opts.onChange=_a31;
};
$.fn.combo=function(_a32,_a33){
if(typeof _a32=="string"){
var _a34=$.fn.combo.methods[_a32];
if(_a34){
return _a34(this,_a33);
}else{
return this.textbox(_a32,_a33);
}
}
_a32=_a32||{};
return this.each(function(){
var _a35=$.data(this,"combo");
if(_a35){
$.extend(_a35.options,_a32);
if(_a32.value!=undefined){
_a35.options.originalValue=_a32.value;
}
}else{
_a35=$.data(this,"combo",{options:$.extend({},$.fn.combo.defaults,$.fn.combo.parseOptions(this),_a32),previousText:""});
_a35.options.originalValue=_a35.options.value;
}
_9f4(this);
_a2f(this);
});
};
$.fn.combo.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"combo").options,{width:opts.width,height:opts.height,disabled:opts.disabled,readonly:opts.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).textbox("cloneFrom",from);
$.data(this,"combo",{options:$.extend(true,{cloned:true},$(from).combo("options")),combo:$(this).next(),panel:$(from).combo("panel")});
$(this).addClass("combo-f").attr("comboName",$(this).attr("textboxName"));
});
},combo:function(jq){
return jq.closest(".combo-panel").panel("options").comboTarget;
},panel:function(jq){
return $.data(jq[0],"combo").panel;
},destroy:function(jq){
return jq.each(function(){
_9fc(this);
});
},showPanel:function(jq){
return jq.each(function(){
_a0c(this);
});
},hidePanel:function(jq){
return jq.each(function(){
_a03(this);
});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("setText","");
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",[]);
}else{
$(this).combo("setValue","");
}
});
},reset:function(jq){
return jq.each(function(){
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",opts.originalValue);
}else{
$(this).combo("setValue",opts.originalValue);
}
});
},setText:function(jq,text){
return jq.each(function(){
_a16(this,text);
});
},getValues:function(jq){
return _a1a(jq[0]);
},setValues:function(jq,_a36){
return jq.each(function(){
_a1f(this,_a36);
});
},getValue:function(jq){
return _a29(jq[0]);
},setValue:function(jq,_a37){
return jq.each(function(){
_a2c(this,_a37);
});
}};
$.fn.combo.parseOptions=function(_a38){
var t=$(_a38);
return $.extend({},$.fn.textbox.parseOptions(_a38),$.parser.parseOptions(_a38,["separator","panelAlign",{panelWidth:"number",hasDownArrow:"boolean",delay:"number",reversed:"boolean",multivalue:"boolean",selectOnNavigation:"boolean"},{panelMinWidth:"number",panelMaxWidth:"number",panelMinHeight:"number",panelMaxHeight:"number"}]),{panelHeight:(t.attr("panelHeight")=="auto"?"auto":parseInt(t.attr("panelHeight"))||undefined),multiple:(t.attr("multiple")?true:undefined)});
};
$.fn.combo.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:{click:_a05,keydown:_a09,paste:_a09,drop:_a09},panelWidth:null,panelHeight:200,panelMinWidth:null,panelMaxWidth:null,panelMinHeight:null,panelMaxHeight:null,panelAlign:"left",reversed:false,multiple:false,multivalue:true,selectOnNavigation:true,separator:",",hasDownArrow:true,delay:200,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
},query:function(q,e){
}},onShowPanel:function(){
},onHidePanel:function(){
},onChange:function(_a39,_a3a){
}});
})(jQuery);
(function($){
function _a3b(_a3c,_a3d){
var _a3e=$.data(_a3c,"combobox");
return $.easyui.indexOfArray(_a3e.data,_a3e.options.valueField,_a3d);
};
function _a3f(_a40,_a41){
var opts=$.data(_a40,"combobox").options;
var _a42=$(_a40).combo("panel");
var item=opts.finder.getEl(_a40,_a41);
if(item.length){
if(item.position().top<=0){
var h=_a42.scrollTop()+item.position().top;
_a42.scrollTop(h);
}else{
if(item.position().top+item.outerHeight()>_a42.height()){
var h=_a42.scrollTop()+item.position().top+item.outerHeight()-_a42.height();
_a42.scrollTop(h);
}
}
}
_a42.triggerHandler("scroll");
};
function nav(_a43,dir){
var opts=$.data(_a43,"combobox").options;
var _a44=$(_a43).combobox("panel");
var item=_a44.children("div.combobox-item-hover");
if(!item.length){
item=_a44.children("div.combobox-item-selected");
}
item.removeClass("combobox-item-hover");
var _a45="div.combobox-item:visible:not(.combobox-item-disabled):first";
var _a46="div.combobox-item:visible:not(.combobox-item-disabled):last";
if(!item.length){
item=_a44.children(dir=="next"?_a45:_a46);
}else{
if(dir=="next"){
item=item.nextAll(_a45);
if(!item.length){
item=_a44.children(_a45);
}
}else{
item=item.prevAll(_a45);
if(!item.length){
item=_a44.children(_a46);
}
}
}
if(item.length){
item.addClass("combobox-item-hover");
var row=opts.finder.getRow(_a43,item);
if(row){
$(_a43).combobox("scrollTo",row[opts.valueField]);
if(opts.selectOnNavigation){
_a47(_a43,row[opts.valueField]);
}
}
}
};
function _a47(_a48,_a49,_a4a){
var opts=$.data(_a48,"combobox").options;
var _a4b=$(_a48).combo("getValues");
if($.inArray(_a49+"",_a4b)==-1){
if(opts.multiple){
_a4b.push(_a49);
}else{
_a4b=[_a49];
}
_a4c(_a48,_a4b,_a4a);
}
};
function _a4d(_a4e,_a4f){
var opts=$.data(_a4e,"combobox").options;
var _a50=$(_a4e).combo("getValues");
var _a51=$.inArray(_a4f+"",_a50);
if(_a51>=0){
_a50.splice(_a51,1);
_a4c(_a4e,_a50);
}
};
function _a4c(_a52,_a53,_a54){
var opts=$.data(_a52,"combobox").options;
var _a55=$(_a52).combo("panel");
if(!$.isArray(_a53)){
_a53=_a53.split(opts.separator);
}
if(!opts.multiple){
_a53=_a53.length?[_a53[0]]:[""];
}
var _a56=$(_a52).combo("getValues");
if(_a55.is(":visible")){
_a55.find(".combobox-item-selected").each(function(){
var row=opts.finder.getRow(_a52,$(this));
if(row){
if($.easyui.indexOfArray(_a56,row[opts.valueField])==-1){
$(this).removeClass("combobox-item-selected");
}
}
});
}
$.map(_a56,function(v){
if($.easyui.indexOfArray(_a53,v)==-1){
var el=opts.finder.getEl(_a52,v);
if(el.hasClass("combobox-item-selected")){
el.removeClass("combobox-item-selected");
opts.onUnselect.call(_a52,opts.finder.getRow(_a52,v));
}
}
});
var _a57=null;
var vv=[],ss=[];
for(var i=0;i<_a53.length;i++){
var v=_a53[i];
var s=v;
var row=opts.finder.getRow(_a52,v);
if(row){
s=row[opts.textField];
_a57=row;
var el=opts.finder.getEl(_a52,v);
if(!el.hasClass("combobox-item-selected")){
el.addClass("combobox-item-selected");
opts.onSelect.call(_a52,row);
}
}
vv.push(v);
ss.push(s);
}
if(!_a54){
$(_a52).combo("setText",ss.join(opts.separator));
}
if(opts.showItemIcon){
var tb=$(_a52).combobox("textbox");
tb.removeClass("textbox-bgicon "+opts.textboxIconCls);
if(_a57&&_a57.iconCls){
tb.addClass("textbox-bgicon "+_a57.iconCls);
opts.textboxIconCls=_a57.iconCls;
}
}
$(_a52).combo("setValues",vv);
_a55.triggerHandler("scroll");
};
function _a58(_a59,data,_a5a){
var _a5b=$.data(_a59,"combobox");
var opts=_a5b.options;
_a5b.data=opts.loadFilter.call(_a59,data);
opts.view.render.call(opts.view,_a59,$(_a59).combo("panel"),_a5b.data);
var vv=$(_a59).combobox("getValues");
$.easyui.forEach(_a5b.data,false,function(row){
if(row["selected"]){
$.easyui.addArrayItem(vv,row[opts.valueField]+"");
}
});
if(opts.multiple){
_a4c(_a59,vv,_a5a);
}else{
_a4c(_a59,vv.length?[vv[vv.length-1]]:[],_a5a);
}
opts.onLoadSuccess.call(_a59,data);
};
function _a5c(_a5d,url,_a5e,_a5f){
var opts=$.data(_a5d,"combobox").options;
if(url){
opts.url=url;
}
_a5e=$.extend({},opts.queryParams,_a5e||{});
if(opts.onBeforeLoad.call(_a5d,_a5e)==false){
return;
}
opts.loader.call(_a5d,_a5e,function(data){
_a58(_a5d,data,_a5f);
},function(){
opts.onLoadError.apply(this,arguments);
});
};
function _a60(_a61,q){
var _a62=$.data(_a61,"combobox");
var opts=_a62.options;
var _a63=$();
var qq=opts.multiple?q.split(opts.separator):[q];
if(opts.mode=="remote"){
_a64(qq);
_a5c(_a61,null,{q:q},true);
}else{
var _a65=$(_a61).combo("panel");
_a65.find(".combobox-item-hover").removeClass("combobox-item-hover");
_a65.find(".combobox-item,.combobox-group").hide();
var data=_a62.data;
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
var _a66=q;
var _a67=undefined;
_a63=$();
for(var i=0;i<data.length;i++){
var row=data[i];
if(opts.filter.call(_a61,q,row)){
var v=row[opts.valueField];
var s=row[opts.textField];
var g=row[opts.groupField];
var item=opts.finder.getEl(_a61,v).show();
if(s.toLowerCase()==q.toLowerCase()){
_a66=v;
if(opts.reversed){
_a63=item;
}else{
_a47(_a61,v,true);
}
}
if(opts.groupField&&_a67!=g){
opts.finder.getGroupEl(_a61,g).show();
_a67=g;
}
}
}
vv.push(_a66);
});
_a64(vv);
}
function _a64(vv){
if(opts.reversed){
_a63.addClass("combobox-item-hover");
}else{
_a4c(_a61,opts.multiple?(q?vv:[]):vv,true);
}
};
};
function _a68(_a69){
var t=$(_a69);
var opts=t.combobox("options");
var _a6a=t.combobox("panel");
var item=_a6a.children("div.combobox-item-hover");
if(item.length){
item.removeClass("combobox-item-hover");
var row=opts.finder.getRow(_a69,item);
var _a6b=row[opts.valueField];
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
t.combobox("unselect",_a6b);
}else{
t.combobox("select",_a6b);
}
}else{
t.combobox("select",_a6b);
}
}
var vv=[];
$.map(t.combobox("getValues"),function(v){
if(_a3b(_a69,v)>=0){
vv.push(v);
}
});
t.combobox("setValues",vv);
if(!opts.multiple){
t.combobox("hidePanel");
}
};
function _a6c(_a6d){
var _a6e=$.data(_a6d,"combobox");
var opts=_a6e.options;
$(_a6d).addClass("combobox-f");
$(_a6d).combo($.extend({},opts,{onShowPanel:function(){
$(this).combo("panel").find("div.combobox-item:hidden,div.combobox-group:hidden").show();
_a4c(this,$(this).combobox("getValues"),true);
$(this).combobox("scrollTo",$(this).combobox("getValue"));
opts.onShowPanel.call(this);
}}));
var p=$(_a6d).combo("panel");
p.unbind(".combobox");
for(var _a6f in opts.panelEvents){
p.bind(_a6f+".combobox",{target:_a6d},opts.panelEvents[_a6f]);
}
};
function _a70(e){
$(this).children("div.combobox-item-hover").removeClass("combobox-item-hover");
var item=$(e.target).closest("div.combobox-item");
if(!item.hasClass("combobox-item-disabled")){
item.addClass("combobox-item-hover");
}
e.stopPropagation();
};
function _a71(e){
$(e.target).closest("div.combobox-item").removeClass("combobox-item-hover");
e.stopPropagation();
};
function _a72(e){
var _a73=$(this).panel("options").comboTarget;
if(!_a73){
return;
}
var opts=$(_a73).combobox("options");
var item=$(e.target).closest("div.combobox-item");
if(!item.length||item.hasClass("combobox-item-disabled")){
return;
}
var row=opts.finder.getRow(_a73,item);
if(!row){
return;
}
if(opts.blurTimer){
clearTimeout(opts.blurTimer);
opts.blurTimer=null;
}
opts.onClick.call(_a73,row);
var _a74=row[opts.valueField];
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
_a4d(_a73,_a74);
}else{
_a47(_a73,_a74);
}
}else{
$(_a73).combobox("setValue",_a74).combobox("hidePanel");
}
e.stopPropagation();
};
function _a75(e){
var _a76=$(this).panel("options").comboTarget;
if(!_a76){
return;
}
var opts=$(_a76).combobox("options");
if(opts.groupPosition=="sticky"){
var _a77=$(this).children(".combobox-stick");
if(!_a77.length){
_a77=$("<div class=\"combobox-stick\"></div>").appendTo(this);
}
_a77.hide();
var _a78=$(_a76).data("combobox");
$(this).children(".combobox-group:visible").each(function(){
var g=$(this);
var _a79=opts.finder.getGroup(_a76,g);
var _a7a=_a78.data[_a79.startIndex+_a79.count-1];
var last=opts.finder.getEl(_a76,_a7a[opts.valueField]);
if(g.position().top<0&&last.position().top>0){
_a77.show().html(g.html());
return false;
}
});
}
};
$.fn.combobox=function(_a7b,_a7c){
if(typeof _a7b=="string"){
var _a7d=$.fn.combobox.methods[_a7b];
if(_a7d){
return _a7d(this,_a7c);
}else{
return this.combo(_a7b,_a7c);
}
}
_a7b=_a7b||{};
return this.each(function(){
var _a7e=$.data(this,"combobox");
if(_a7e){
$.extend(_a7e.options,_a7b);
}else{
_a7e=$.data(this,"combobox",{options:$.extend({},$.fn.combobox.defaults,$.fn.combobox.parseOptions(this),_a7b),data:[]});
}
_a6c(this);
if(_a7e.options.data){
_a58(this,_a7e.options.data);
}else{
var data=$.fn.combobox.parseData(this);
if(data.length){
_a58(this,data);
}
}
_a5c(this);
});
};
$.fn.combobox.methods={options:function(jq){
var _a7f=jq.combo("options");
return $.extend($.data(jq[0],"combobox").options,{width:_a7f.width,height:_a7f.height,originalValue:_a7f.originalValue,disabled:_a7f.disabled,readonly:_a7f.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"combobox",$(from).data("combobox"));
$(this).addClass("combobox-f").attr("comboboxName",$(this).attr("textboxName"));
});
},getData:function(jq){
return $.data(jq[0],"combobox").data;
},setValues:function(jq,_a80){
return jq.each(function(){
_a4c(this,_a80);
});
},setValue:function(jq,_a81){
return jq.each(function(){
_a4c(this,$.isArray(_a81)?_a81:[_a81]);
});
},clear:function(jq){
return jq.each(function(){
_a4c(this,[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combobox("options");
if(opts.multiple){
$(this).combobox("setValues",opts.originalValue);
}else{
$(this).combobox("setValue",opts.originalValue);
}
});
},loadData:function(jq,data){
return jq.each(function(){
_a58(this,data);
});
},reload:function(jq,url){
return jq.each(function(){
if(typeof url=="string"){
_a5c(this,url);
}else{
if(url){
var opts=$(this).combobox("options");
opts.queryParams=url;
}
_a5c(this);
}
});
},select:function(jq,_a82){
return jq.each(function(){
_a47(this,_a82);
});
},unselect:function(jq,_a83){
return jq.each(function(){
_a4d(this,_a83);
});
},scrollTo:function(jq,_a84){
return jq.each(function(){
_a3f(this,_a84);
});
}};
$.fn.combobox.parseOptions=function(_a85){
var t=$(_a85);
return $.extend({},$.fn.combo.parseOptions(_a85),$.parser.parseOptions(_a85,["valueField","textField","groupField","groupPosition","mode","method","url",{showItemIcon:"boolean",limitToList:"boolean"}]));
};
$.fn.combobox.parseData=function(_a86){
var data=[];
var opts=$(_a86).combobox("options");
$(_a86).children().each(function(){
if(this.tagName.toLowerCase()=="optgroup"){
var _a87=$(this).attr("label");
$(this).children().each(function(){
_a88(this,_a87);
});
}else{
_a88(this);
}
});
return data;
function _a88(el,_a89){
var t=$(el);
var row={};
row[opts.valueField]=t.attr("value")!=undefined?t.attr("value"):t.text();
row[opts.textField]=t.text();
row["selected"]=t.is(":selected");
row["disabled"]=t.is(":disabled");
if(_a89){
opts.groupField=opts.groupField||"group";
row[opts.groupField]=_a89;
}
data.push(row);
};
};
var _a8a=0;
var _a8b={render:function(_a8c,_a8d,data){
var _a8e=$.data(_a8c,"combobox");
var opts=_a8e.options;
_a8a++;
_a8e.itemIdPrefix="_easyui_combobox_i"+_a8a;
_a8e.groupIdPrefix="_easyui_combobox_g"+_a8a;
_a8e.groups=[];
var dd=[];
var _a8f=undefined;
for(var i=0;i<data.length;i++){
var row=data[i];
var v=row[opts.valueField]+"";
var s=row[opts.textField];
var g=row[opts.groupField];
if(g){
if(_a8f!=g){
_a8f=g;
_a8e.groups.push({value:g,startIndex:i,count:1});
dd.push("<div id=\""+(_a8e.groupIdPrefix+"_"+(_a8e.groups.length-1))+"\" class=\"combobox-group\">");
dd.push(opts.groupFormatter?opts.groupFormatter.call(_a8c,g):g);
dd.push("</div>");
}else{
_a8e.groups[_a8e.groups.length-1].count++;
}
}else{
_a8f=undefined;
}
var cls="combobox-item"+(row.disabled?" combobox-item-disabled":"")+(g?" combobox-gitem":"");
dd.push("<div id=\""+(_a8e.itemIdPrefix+"_"+i)+"\" class=\""+cls+"\">");
if(opts.showItemIcon&&row.iconCls){
dd.push("<span class=\"combobox-icon "+row.iconCls+"\"></span>");
}
dd.push(opts.formatter?opts.formatter.call(_a8c,row):s);
dd.push("</div>");
}
$(_a8d).html(dd.join(""));
}};
$.fn.combobox.defaults=$.extend({},$.fn.combo.defaults,{valueField:"value",textField:"text",groupPosition:"static",groupField:null,groupFormatter:function(_a90){
return _a90;
},mode:"local",method:"post",url:null,data:null,queryParams:{},showItemIcon:false,limitToList:false,view:_a8b,keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_a68(this);
},query:function(q,e){
_a60(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _a91=e.data.target;
var opts=$(_a91).combobox("options");
if(opts.reversed||opts.limitToList){
if(opts.blurTimer){
clearTimeout(opts.blurTimer);
}
opts.blurTimer=setTimeout(function(){
var _a92=$(_a91).parent().length;
if(_a92){
if(opts.reversed){
$(_a91).combobox("setValues",$(_a91).combobox("getValues"));
}else{
if(opts.limitToList){
_a68(_a91);
}
}
opts.blurTimer=null;
}
},50);
}
}}),panelEvents:{mouseover:_a70,mouseout:_a71,click:_a72,scroll:_a75},filter:function(q,row){
var opts=$(this).combobox("options");
return row[opts.textField].toLowerCase().indexOf(q.toLowerCase())>=0;
},formatter:function(row){
var opts=$(this).combobox("options");
return row[opts.textField];
},loader:function(_a93,_a94,_a95){
var opts=$(this).combobox("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_a93,dataType:"json",success:function(data){
_a94(data);
},error:function(){
_a95.apply(this,arguments);
}});
},loadFilter:function(data){
return data;
},finder:{getEl:function(_a96,_a97){
var _a98=_a3b(_a96,_a97);
var id=$.data(_a96,"combobox").itemIdPrefix+"_"+_a98;
return $("#"+id);
},getGroupEl:function(_a99,_a9a){
var _a9b=$.data(_a99,"combobox");
var _a9c=$.easyui.indexOfArray(_a9b.groups,"value",_a9a);
var id=_a9b.groupIdPrefix+"_"+_a9c;
return $("#"+id);
},getGroup:function(_a9d,p){
var _a9e=$.data(_a9d,"combobox");
var _a9f=p.attr("id").substr(_a9e.groupIdPrefix.length+1);
return _a9e.groups[parseInt(_a9f)];
},getRow:function(_aa0,p){
var _aa1=$.data(_aa0,"combobox");
var _aa2=(p instanceof $)?p.attr("id").substr(_aa1.itemIdPrefix.length+1):_a3b(_aa0,p);
return _aa1.data[parseInt(_aa2)];
}},onBeforeLoad:function(_aa3){
},onLoadSuccess:function(data){
},onLoadError:function(){
},onSelect:function(_aa4){
},onUnselect:function(_aa5){
},onClick:function(_aa6){
}});
})(jQuery);
(function($){
function _aa7(_aa8){
var _aa9=$.data(_aa8,"combotree");
var opts=_aa9.options;
var tree=_aa9.tree;
$(_aa8).addClass("combotree-f");
$(_aa8).combo($.extend({},opts,{onShowPanel:function(){
if(opts.editable){
tree.tree("doFilter","");
}
opts.onShowPanel.call(this);
}}));
var _aaa=$(_aa8).combo("panel");
if(!tree){
tree=$("<ul></ul>").appendTo(_aaa);
_aa9.tree=tree;
}
tree.tree($.extend({},opts,{checkbox:opts.multiple,onLoadSuccess:function(node,data){
var _aab=$(_aa8).combotree("getValues");
if(opts.multiple){
$.map(tree.tree("getChecked"),function(node){
$.easyui.addArrayItem(_aab,node.id);
});
}
_ab0(_aa8,_aab,_aa9.remainText);
opts.onLoadSuccess.call(this,node,data);
},onClick:function(node){
if(opts.multiple){
$(this).tree(node.checked?"uncheck":"check",node.target);
}else{
$(_aa8).combo("hidePanel");
}
_aa9.remainText=false;
_aad(_aa8);
opts.onClick.call(this,node);
},onCheck:function(node,_aac){
_aa9.remainText=false;
_aad(_aa8);
opts.onCheck.call(this,node,_aac);
}}));
};
function _aad(_aae){
var _aaf=$.data(_aae,"combotree");
var opts=_aaf.options;
var tree=_aaf.tree;
var vv=[];
if(opts.multiple){
vv=$.map(tree.tree("getChecked"),function(node){
return node.id;
});
}else{
var node=tree.tree("getSelected");
if(node){
vv.push(node.id);
}
}
vv=vv.concat(opts.unselectedValues);
_ab0(_aae,vv,_aaf.remainText);
};
function _ab0(_ab1,_ab2,_ab3){
var _ab4=$.data(_ab1,"combotree");
var opts=_ab4.options;
var tree=_ab4.tree;
var _ab5=tree.tree("options");
var _ab6=_ab5.onBeforeCheck;
var _ab7=_ab5.onCheck;
var _ab8=_ab5.onSelect;
_ab5.onBeforeCheck=_ab5.onCheck=_ab5.onSelect=function(){
};
if(!$.isArray(_ab2)){
_ab2=_ab2.split(opts.separator);
}
if(!opts.multiple){
_ab2=_ab2.length?[_ab2[0]]:[""];
}
var vv=$.map(_ab2,function(_ab9){
return String(_ab9);
});
tree.find("div.tree-node-selected").removeClass("tree-node-selected");
$.map(tree.tree("getChecked"),function(node){
if($.inArray(String(node.id),vv)==-1){
tree.tree("uncheck",node.target);
}
});
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var node=tree.tree("find",v);
if(node){
tree.tree("check",node.target).tree("select",node.target);
ss.push(node.text);
}else{
ss.push(_aba(v,opts.mappingRows)||v);
opts.unselectedValues.push(v);
}
});
if(opts.multiple){
$.map(tree.tree("getChecked"),function(node){
var id=String(node.id);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(node.text);
}
});
}
_ab5.onBeforeCheck=_ab6;
_ab5.onCheck=_ab7;
_ab5.onSelect=_ab8;
if(!_ab3){
var s=ss.join(opts.separator);
if($(_ab1).combo("getText")!=s){
$(_ab1).combo("setText",s);
}
}
$(_ab1).combo("setValues",vv);
function _aba(_abb,a){
var item=$.easyui.getArrayItem(a,"id",_abb);
return item?item.text:undefined;
};
};
function _abc(_abd,q){
var _abe=$.data(_abd,"combotree");
var opts=_abe.options;
var tree=_abe.tree;
_abe.remainText=true;
tree.tree("doFilter",opts.multiple?q.split(opts.separator):q);
};
function _abf(_ac0){
var _ac1=$.data(_ac0,"combotree");
_ac1.remainText=false;
$(_ac0).combotree("setValues",$(_ac0).combotree("getValues"));
$(_ac0).combotree("hidePanel");
};
$.fn.combotree=function(_ac2,_ac3){
if(typeof _ac2=="string"){
var _ac4=$.fn.combotree.methods[_ac2];
if(_ac4){
return _ac4(this,_ac3);
}else{
return this.combo(_ac2,_ac3);
}
}
_ac2=_ac2||{};
return this.each(function(){
var _ac5=$.data(this,"combotree");
if(_ac5){
$.extend(_ac5.options,_ac2);
}else{
$.data(this,"combotree",{options:$.extend({},$.fn.combotree.defaults,$.fn.combotree.parseOptions(this),_ac2)});
}
_aa7(this);
});
};
$.fn.combotree.methods={options:function(jq){
var _ac6=jq.combo("options");
return $.extend($.data(jq[0],"combotree").options,{width:_ac6.width,height:_ac6.height,originalValue:_ac6.originalValue,disabled:_ac6.disabled,readonly:_ac6.readonly});
},clone:function(jq,_ac7){
var t=jq.combo("clone",_ac7);
t.data("combotree",{options:$.extend(true,{},jq.combotree("options")),tree:jq.combotree("tree")});
return t;
},tree:function(jq){
return $.data(jq[0],"combotree").tree;
},loadData:function(jq,data){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
opts.data=data;
var tree=$.data(this,"combotree").tree;
tree.tree("loadData",data);
});
},reload:function(jq,url){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
var tree=$.data(this,"combotree").tree;
if(url){
opts.url=url;
}
tree.tree({url:opts.url});
});
},setValues:function(jq,_ac8){
return jq.each(function(){
var opts=$(this).combotree("options");
if($.isArray(_ac8)){
_ac8=$.map(_ac8,function(_ac9){
if(_ac9&&typeof _ac9=="object"){
$.easyui.addArrayItem(opts.mappingRows,"id",_ac9);
return _ac9.id;
}else{
return _ac9;
}
});
}
_ab0(this,_ac8);
});
},setValue:function(jq,_aca){
return jq.each(function(){
$(this).combotree("setValues",$.isArray(_aca)?_aca:[_aca]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combotree("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combotree("options");
if(opts.multiple){
$(this).combotree("setValues",opts.originalValue);
}else{
$(this).combotree("setValue",opts.originalValue);
}
});
}};
$.fn.combotree.parseOptions=function(_acb){
return $.extend({},$.fn.combo.parseOptions(_acb),$.fn.tree.parseOptions(_acb));
};
$.fn.combotree.defaults=$.extend({},$.fn.combo.defaults,$.fn.tree.defaults,{editable:false,unselectedValues:[],mappingRows:[],keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_abf(this);
},query:function(q,e){
_abc(this,q);
}}});
})(jQuery);
(function($){
function _acc(_acd){
var _ace=$.data(_acd,"combogrid");
var opts=_ace.options;
var grid=_ace.grid;
$(_acd).addClass("combogrid-f").combo($.extend({},opts,{onShowPanel:function(){
_ae3(this,$(this).combogrid("getValues"),true);
var p=$(this).combogrid("panel");
var _acf=p.outerHeight()-p.height();
var _ad0=p._size("minHeight");
var _ad1=p._size("maxHeight");
var dg=$(this).combogrid("grid");
dg.datagrid("resize",{width:"100%",height:(isNaN(parseInt(opts.panelHeight))?"auto":"100%"),minHeight:(_ad0?_ad0-_acf:""),maxHeight:(_ad1?_ad1-_acf:"")});
var row=dg.datagrid("getSelected");
if(row){
dg.datagrid("scrollTo",dg.datagrid("getRowIndex",row));
}
opts.onShowPanel.call(this);
}}));
var _ad2=$(_acd).combo("panel");
if(!grid){
grid=$("<table></table>").appendTo(_ad2);
_ace.grid=grid;
}
grid.datagrid($.extend({},opts,{border:false,singleSelect:(!opts.multiple),onLoadSuccess:_ad3,onClickRow:_ad4,onSelect:_ad5("onSelect"),onUnselect:_ad5("onUnselect"),onSelectAll:_ad5("onSelectAll"),onUnselectAll:_ad5("onUnselectAll")}));
function _ad6(dg){
return $(dg).closest(".combo-panel").panel("options").comboTarget||_acd;
};
function _ad3(data){
var _ad7=_ad6(this);
var _ad8=$(_ad7).data("combogrid");
var opts=_ad8.options;
var _ad9=$(_ad7).combo("getValues");
_ae3(_ad7,_ad9,_ad8.remainText);
opts.onLoadSuccess.call(this,data);
};
function _ad4(_ada,row){
var _adb=_ad6(this);
var _adc=$(_adb).data("combogrid");
var opts=_adc.options;
_adc.remainText=false;
_add.call(this);
if(!opts.multiple){
$(_adb).combo("hidePanel");
}
opts.onClickRow.call(this,_ada,row);
};
function _ad5(_ade){
return function(_adf,row){
var _ae0=_ad6(this);
var opts=$(_ae0).combogrid("options");
if(_ade=="onUnselectAll"){
if(opts.multiple){
_add.call(this);
}
}else{
_add.call(this);
}
opts[_ade].call(this,_adf,row);
};
};
function _add(){
var dg=$(this);
var _ae1=_ad6(dg);
var _ae2=$(_ae1).data("combogrid");
var opts=_ae2.options;
var vv=$.map(dg.datagrid("getSelections"),function(row){
return row[opts.idField];
});
vv=vv.concat(opts.unselectedValues);
_ae3(_ae1,vv,_ae2.remainText);
};
};
function nav(_ae4,dir){
var _ae5=$.data(_ae4,"combogrid");
var opts=_ae5.options;
var grid=_ae5.grid;
var _ae6=grid.datagrid("getRows").length;
if(!_ae6){
return;
}
var tr=opts.finder.getTr(grid[0],null,"highlight");
if(!tr.length){
tr=opts.finder.getTr(grid[0],null,"selected");
}
var _ae7;
if(!tr.length){
_ae7=(dir=="next"?0:_ae6-1);
}else{
var _ae7=parseInt(tr.attr("datagrid-row-index"));
_ae7+=(dir=="next"?1:-1);
if(_ae7<0){
_ae7=_ae6-1;
}
if(_ae7>=_ae6){
_ae7=0;
}
}
grid.datagrid("highlightRow",_ae7);
if(opts.selectOnNavigation){
_ae5.remainText=false;
grid.datagrid("selectRow",_ae7);
}
};
function _ae3(_ae8,_ae9,_aea){
var _aeb=$.data(_ae8,"combogrid");
var opts=_aeb.options;
var grid=_aeb.grid;
var _aec=$(_ae8).combo("getValues");
var _aed=$(_ae8).combo("options");
var _aee=_aed.onChange;
_aed.onChange=function(){
};
var _aef=grid.datagrid("options");
var _af0=_aef.onSelect;
var _af1=_aef.onUnselectAll;
_aef.onSelect=_aef.onUnselectAll=function(){
};
if(!$.isArray(_ae9)){
_ae9=_ae9.split(opts.separator);
}
if(!opts.multiple){
_ae9=_ae9.length?[_ae9[0]]:[""];
}
var vv=$.map(_ae9,function(_af2){
return String(_af2);
});
vv=$.grep(vv,function(v,_af3){
return _af3===$.inArray(v,vv);
});
var _af4=$.grep(grid.datagrid("getSelections"),function(row,_af5){
return $.inArray(String(row[opts.idField]),vv)>=0;
});
grid.datagrid("clearSelections");
grid.data("datagrid").selectedRows=_af4;
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var _af6=grid.datagrid("getRowIndex",v);
if(_af6>=0){
grid.datagrid("selectRow",_af6);
}else{
opts.unselectedValues.push(v);
}
ss.push(_af7(v,grid.datagrid("getRows"))||_af7(v,_af4)||_af7(v,opts.mappingRows)||v);
});
$(_ae8).combo("setValues",_aec);
_aed.onChange=_aee;
_aef.onSelect=_af0;
_aef.onUnselectAll=_af1;
if(!_aea){
var s=ss.join(opts.separator);
if($(_ae8).combo("getText")!=s){
$(_ae8).combo("setText",s);
}
}
$(_ae8).combo("setValues",_ae9);
function _af7(_af8,a){
var item=$.easyui.getArrayItem(a,opts.idField,_af8);
return item?item[opts.textField]:undefined;
};
};
function _af9(_afa,q){
var _afb=$.data(_afa,"combogrid");
var opts=_afb.options;
var grid=_afb.grid;
_afb.remainText=true;
var qq=opts.multiple?q.split(opts.separator):[q];
qq=$.grep(qq,function(q){
return $.trim(q)!="";
});
if(opts.mode=="remote"){
_afc(qq);
grid.datagrid("load",$.extend({},opts.queryParams,{q:q}));
}else{
grid.datagrid("highlightRow",-1);
var rows=grid.datagrid("getRows");
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
var _afd=q;
_afe(opts.mappingRows,q);
_afe(grid.datagrid("getSelections"),q);
var _aff=_afe(rows,q);
if(_aff>=0){
if(opts.reversed){
grid.datagrid("highlightRow",_aff);
}
}else{
$.map(rows,function(row,i){
if(opts.filter.call(_afa,q,row)){
grid.datagrid("highlightRow",i);
}
});
}
});
_afc(vv);
}
function _afe(rows,q){
for(var i=0;i<rows.length;i++){
var row=rows[i];
if((row[opts.textField]||"").toLowerCase()==q.toLowerCase()){
vv.push(row[opts.idField]);
return i;
}
}
return -1;
};
function _afc(vv){
if(!opts.reversed){
_ae3(_afa,vv,true);
}
};
};
function _b00(_b01){
var _b02=$.data(_b01,"combogrid");
var opts=_b02.options;
var grid=_b02.grid;
var tr=opts.finder.getTr(grid[0],null,"highlight");
_b02.remainText=false;
if(tr.length){
var _b03=parseInt(tr.attr("datagrid-row-index"));
if(opts.multiple){
if(tr.hasClass("datagrid-row-selected")){
grid.datagrid("unselectRow",_b03);
}else{
grid.datagrid("selectRow",_b03);
}
}else{
grid.datagrid("selectRow",_b03);
}
}
var vv=[];
$.map(grid.datagrid("getSelections"),function(row){
vv.push(row[opts.idField]);
});
$.map(opts.unselectedValues,function(v){
if($.easyui.indexOfArray(opts.mappingRows,opts.idField,v)>=0){
$.easyui.addArrayItem(vv,v);
}
});
$(_b01).combogrid("setValues",vv);
if(!opts.multiple){
$(_b01).combogrid("hidePanel");
}
};
$.fn.combogrid=function(_b04,_b05){
if(typeof _b04=="string"){
var _b06=$.fn.combogrid.methods[_b04];
if(_b06){
return _b06(this,_b05);
}else{
return this.combo(_b04,_b05);
}
}
_b04=_b04||{};
return this.each(function(){
var _b07=$.data(this,"combogrid");
if(_b07){
$.extend(_b07.options,_b04);
}else{
_b07=$.data(this,"combogrid",{options:$.extend({},$.fn.combogrid.defaults,$.fn.combogrid.parseOptions(this),_b04)});
}
_acc(this);
});
};
$.fn.combogrid.methods={options:function(jq){
var _b08=jq.combo("options");
return $.extend($.data(jq[0],"combogrid").options,{width:_b08.width,height:_b08.height,originalValue:_b08.originalValue,disabled:_b08.disabled,readonly:_b08.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"combogrid",{options:$.extend(true,{cloned:true},$(from).combogrid("options")),combo:$(this).next(),panel:$(from).combo("panel"),grid:$(from).combogrid("grid")});
});
},grid:function(jq){
return $.data(jq[0],"combogrid").grid;
},setValues:function(jq,_b09){
return jq.each(function(){
var opts=$(this).combogrid("options");
if($.isArray(_b09)){
_b09=$.map(_b09,function(_b0a){
if(_b0a&&typeof _b0a=="object"){
$.easyui.addArrayItem(opts.mappingRows,opts.idField,_b0a);
return _b0a[opts.idField];
}else{
return _b0a;
}
});
}
_ae3(this,_b09);
});
},setValue:function(jq,_b0b){
return jq.each(function(){
$(this).combogrid("setValues",$.isArray(_b0b)?_b0b:[_b0b]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combogrid("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combogrid("options");
if(opts.multiple){
$(this).combogrid("setValues",opts.originalValue);
}else{
$(this).combogrid("setValue",opts.originalValue);
}
});
}};
$.fn.combogrid.parseOptions=function(_b0c){
var t=$(_b0c);
return $.extend({},$.fn.combo.parseOptions(_b0c),$.fn.datagrid.parseOptions(_b0c),$.parser.parseOptions(_b0c,["idField","textField","mode"]));
};
$.fn.combogrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.datagrid.defaults,{loadMsg:null,idField:null,textField:null,unselectedValues:[],mappingRows:[],mode:"local",keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_b00(this);
},query:function(q,e){
_af9(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _b0d=e.data.target;
var opts=$(_b0d).combogrid("options");
if(opts.reversed){
$(_b0d).combogrid("setValues",$(_b0d).combogrid("getValues"));
}
}}),filter:function(q,row){
var opts=$(this).combogrid("options");
return (row[opts.textField]||"").toLowerCase().indexOf(q.toLowerCase())>=0;
}});
})(jQuery);
(function($){
function _b0e(_b0f){
var _b10=$.data(_b0f,"combotreegrid");
var opts=_b10.options;
$(_b0f).addClass("combotreegrid-f").combo($.extend({},opts,{onShowPanel:function(){
var p=$(this).combotreegrid("panel");
var _b11=p.outerHeight()-p.height();
var _b12=p._size("minHeight");
var _b13=p._size("maxHeight");
var dg=$(this).combotreegrid("grid");
dg.treegrid("resize",{width:"100%",height:(isNaN(parseInt(opts.panelHeight))?"auto":"100%"),minHeight:(_b12?_b12-_b11:""),maxHeight:(_b13?_b13-_b11:"")});
var row=dg.treegrid("getSelected");
if(row){
dg.treegrid("scrollTo",row[opts.idField]);
}
opts.onShowPanel.call(this);
}}));
if(!_b10.grid){
var _b14=$(_b0f).combo("panel");
_b10.grid=$("<table></table>").appendTo(_b14);
}
_b10.grid.treegrid($.extend({},opts,{border:false,checkbox:opts.multiple,onLoadSuccess:function(row,data){
var _b15=$(_b0f).combotreegrid("getValues");
if(opts.multiple){
$.map($(this).treegrid("getCheckedNodes"),function(row){
$.easyui.addArrayItem(_b15,row[opts.idField]);
});
}
_b1a(_b0f,_b15);
opts.onLoadSuccess.call(this,row,data);
_b10.remainText=false;
},onClickRow:function(row){
if(opts.multiple){
$(this).treegrid(row.checked?"uncheckNode":"checkNode",row[opts.idField]);
$(this).treegrid("unselect",row[opts.idField]);
}else{
$(_b0f).combo("hidePanel");
}
_b17(_b0f);
opts.onClickRow.call(this,row);
},onCheckNode:function(row,_b16){
_b17(_b0f);
opts.onCheckNode.call(this,row,_b16);
}}));
};
function _b17(_b18){
var _b19=$.data(_b18,"combotreegrid");
var opts=_b19.options;
var grid=_b19.grid;
var vv=[];
if(opts.multiple){
vv=$.map(grid.treegrid("getCheckedNodes"),function(row){
return row[opts.idField];
});
}else{
var row=grid.treegrid("getSelected");
if(row){
vv.push(row[opts.idField]);
}
}
vv=vv.concat(opts.unselectedValues);
_b1a(_b18,vv);
};
function _b1a(_b1b,_b1c){
var _b1d=$.data(_b1b,"combotreegrid");
var opts=_b1d.options;
var grid=_b1d.grid;
if(!$.isArray(_b1c)){
_b1c=_b1c.split(opts.separator);
}
if(!opts.multiple){
_b1c=_b1c.length?[_b1c[0]]:[""];
}
var vv=$.map(_b1c,function(_b1e){
return String(_b1e);
});
vv=$.grep(vv,function(v,_b1f){
return _b1f===$.inArray(v,vv);
});
var _b20=grid.treegrid("getSelected");
if(_b20){
grid.treegrid("unselect",_b20[opts.idField]);
}
$.map(grid.treegrid("getCheckedNodes"),function(row){
if($.inArray(String(row[opts.idField]),vv)==-1){
grid.treegrid("uncheckNode",row[opts.idField]);
}
});
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var row=grid.treegrid("find",v);
if(row){
if(opts.multiple){
grid.treegrid("checkNode",v);
}else{
grid.treegrid("select",v);
}
ss.push(row[opts.treeField]);
}else{
ss.push(_b21(v,opts.mappingRows)||v);
opts.unselectedValues.push(v);
}
});
if(opts.multiple){
$.map(grid.treegrid("getCheckedNodes"),function(row){
var id=String(row[opts.idField]);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(row[opts.treeField]);
}
});
}
if(!_b1d.remainText){
var s=ss.join(opts.separator);
if($(_b1b).combo("getText")!=s){
$(_b1b).combo("setText",s);
}
}
$(_b1b).combo("setValues",vv);
function _b21(_b22,a){
var item=$.easyui.getArrayItem(a,opts.idField,_b22);
return item?item[opts.treeField]:undefined;
};
};
function _b23(_b24,q){
var _b25=$.data(_b24,"combotreegrid");
var opts=_b25.options;
var grid=_b25.grid;
_b25.remainText=true;
grid.treegrid("clearSelections").treegrid("clearChecked").treegrid("highlightRow",-1);
if(opts.mode=="remote"){
$(_b24).combotreegrid("clear");
grid.treegrid("load",$.extend({},opts.queryParams,{q:q}));
}else{
if(q){
var data=grid.treegrid("getData");
var vv=[];
var qq=opts.multiple?q.split(opts.separator):[q];
$.map(qq,function(q){
q=$.trim(q);
if(q){
var v=undefined;
$.easyui.forEach(data,true,function(row){
if(q.toLowerCase()==String(row[opts.treeField]).toLowerCase()){
v=row[opts.idField];
return false;
}else{
if(opts.filter.call(_b24,q,row)){
grid.treegrid("expandTo",row[opts.idField]);
grid.treegrid("highlightRow",row[opts.idField]);
return false;
}
}
});
if(v==undefined){
$.easyui.forEach(opts.mappingRows,false,function(row){
if(q.toLowerCase()==String(row[opts.treeField])){
v=row[opts.idField];
return false;
}
});
}
if(v!=undefined){
vv.push(v);
}
}
});
_b1a(_b24,vv);
_b25.remainText=false;
}
}
};
function _b26(_b27){
_b17(_b27);
};
$.fn.combotreegrid=function(_b28,_b29){
if(typeof _b28=="string"){
var _b2a=$.fn.combotreegrid.methods[_b28];
if(_b2a){
return _b2a(this,_b29);
}else{
return this.combo(_b28,_b29);
}
}
_b28=_b28||{};
return this.each(function(){
var _b2b=$.data(this,"combotreegrid");
if(_b2b){
$.extend(_b2b.options,_b28);
}else{
_b2b=$.data(this,"combotreegrid",{options:$.extend({},$.fn.combotreegrid.defaults,$.fn.combotreegrid.parseOptions(this),_b28)});
}
_b0e(this);
});
};
$.fn.combotreegrid.methods={options:function(jq){
var _b2c=jq.combo("options");
return $.extend($.data(jq[0],"combotreegrid").options,{width:_b2c.width,height:_b2c.height,originalValue:_b2c.originalValue,disabled:_b2c.disabled,readonly:_b2c.readonly});
},grid:function(jq){
return $.data(jq[0],"combotreegrid").grid;
},setValues:function(jq,_b2d){
return jq.each(function(){
var opts=$(this).combotreegrid("options");
if($.isArray(_b2d)){
_b2d=$.map(_b2d,function(_b2e){
if(_b2e&&typeof _b2e=="object"){
$.easyui.addArrayItem(opts.mappingRows,opts.idField,_b2e);
return _b2e[opts.idField];
}else{
return _b2e;
}
});
}
_b1a(this,_b2d);
});
},setValue:function(jq,_b2f){
return jq.each(function(){
$(this).combotreegrid("setValues",$.isArray(_b2f)?_b2f:[_b2f]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combotreegrid("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combotreegrid("options");
if(opts.multiple){
$(this).combotreegrid("setValues",opts.originalValue);
}else{
$(this).combotreegrid("setValue",opts.originalValue);
}
});
}};
$.fn.combotreegrid.parseOptions=function(_b30){
var t=$(_b30);
return $.extend({},$.fn.combo.parseOptions(_b30),$.fn.treegrid.parseOptions(_b30),$.parser.parseOptions(_b30,["mode",{limitToGrid:"boolean"}]));
};
$.fn.combotreegrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.treegrid.defaults,{editable:false,singleSelect:true,limitToGrid:false,unselectedValues:[],mappingRows:[],mode:"local",keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_b26(this);
},query:function(q,e){
_b23(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _b31=e.data.target;
var opts=$(_b31).combotreegrid("options");
if(opts.limitToGrid){
_b26(_b31);
}
}}),filter:function(q,row){
var opts=$(this).combotreegrid("options");
return (row[opts.treeField]||"").toLowerCase().indexOf(q.toLowerCase())>=0;
}});
})(jQuery);
(function($){
function _b32(_b33){
var _b34=$.data(_b33,"tagbox");
var opts=_b34.options;
$(_b33).addClass("tagbox-f").combobox($.extend({},opts,{cls:"tagbox",reversed:true,onChange:function(_b35,_b36){
_b37();
$(this).combobox("hidePanel");
opts.onChange.call(_b33,_b35,_b36);
},onResizing:function(_b38,_b39){
var _b3a=$(this).combobox("textbox");
var tb=$(this).data("textbox").textbox;
tb.css({height:"",paddingLeft:_b3a.css("marginLeft"),paddingRight:_b3a.css("marginRight")});
_b3a.css("margin",0);
tb._size({width:opts.width},$(this).parent());
_b4d(_b33);
_b3f(this);
opts.onResizing.call(_b33,_b38,_b39);
},onLoadSuccess:function(data){
_b37();
opts.onLoadSuccess.call(_b33,data);
}}));
_b37();
_b4d(_b33);
function _b37(){
$(_b33).next().find(".tagbox-label").remove();
var _b3b=$(_b33).tagbox("textbox");
var ss=[];
$.map($(_b33).tagbox("getValues"),function(_b3c,_b3d){
var row=opts.finder.getRow(_b33,_b3c);
var text=opts.tagFormatter.call(_b33,_b3c,row);
var cs={};
var css=opts.tagStyler.call(_b33,_b3c,row)||"";
if(typeof css=="string"){
cs={s:css};
}else{
cs={c:css["class"]||"",s:css["style"]||""};
}
var _b3e=$("<span class=\"tagbox-label\"></span>").insertBefore(_b3b).html(text);
_b3e.attr("tagbox-index",_b3d);
_b3e.attr("style",cs.s).addClass(cs.c);
$("<a href=\"javascript:;\" class=\"tagbox-remove\"></a>").appendTo(_b3e);
});
_b3f(_b33);
$(_b33).combobox("setText","");
};
};
function _b3f(_b40,_b41){
var span=$(_b40).next();
var _b42=_b41?$(_b41):span.find(".tagbox-label");
if(_b42.length){
var _b43=$(_b40).tagbox("textbox");
var _b44=$(_b42[0]);
var _b45=_b44.outerHeight(true)-_b44.outerHeight();
var _b46=_b43.outerHeight()-_b45*2;
_b42.css({height:_b46+"px",lineHeight:_b46+"px"});
var _b47=span.find(".textbox-addon").css("height","100%");
_b47.find(".textbox-icon").css("height","100%");
span.find(".textbox-button").linkbutton("resize",{height:"100%"});
}
};
function _b48(_b49){
var span=$(_b49).next();
span.unbind(".tagbox").bind("click.tagbox",function(e){
var opts=$(_b49).tagbox("options");
if(opts.disabled||opts.readonly){
return;
}
if($(e.target).hasClass("tagbox-remove")){
var _b4a=parseInt($(e.target).parent().attr("tagbox-index"));
var _b4b=$(_b49).tagbox("getValues");
if(opts.onBeforeRemoveTag.call(_b49,_b4b[_b4a])==false){
return;
}
opts.onRemoveTag.call(_b49,_b4b[_b4a]);
_b4b.splice(_b4a,1);
$(_b49).tagbox("setValues",_b4b);
}else{
var _b4c=$(e.target).closest(".tagbox-label");
if(_b4c.length){
var _b4a=parseInt(_b4c.attr("tagbox-index"));
var _b4b=$(_b49).tagbox("getValues");
opts.onClickTag.call(_b49,_b4b[_b4a]);
}
}
$(this).find(".textbox-text").focus();
}).bind("keyup.tagbox",function(e){
_b4d(_b49);
}).bind("mouseover.tagbox",function(e){
if($(e.target).closest(".textbox-button,.textbox-addon,.tagbox-label").length){
$(this).triggerHandler("mouseleave");
}else{
$(this).find(".textbox-text").triggerHandler("mouseenter");
}
}).bind("mouseleave.tagbox",function(e){
$(this).find(".textbox-text").triggerHandler("mouseleave");
});
};
function _b4d(_b4e){
var opts=$(_b4e).tagbox("options");
var _b4f=$(_b4e).tagbox("textbox");
var span=$(_b4e).next();
var tmp=$("<span></span>").appendTo("body");
tmp.attr("style",_b4f.attr("style"));
tmp.css({position:"absolute",top:-9999,left:-9999,width:"auto",fontFamily:_b4f.css("fontFamily"),fontSize:_b4f.css("fontSize"),fontWeight:_b4f.css("fontWeight"),whiteSpace:"nowrap"});
var _b50=_b51(_b4f.val());
var _b52=_b51(opts.prompt||"");
tmp.remove();
var _b53=Math.min(Math.max(_b50,_b52)+20,span.width());
_b4f._outerWidth(_b53);
span.find(".textbox-button").linkbutton("resize",{height:"100%"});
function _b51(val){
var s=val.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");
tmp.html(s);
return tmp.outerWidth();
};
};
function _b54(_b55){
var t=$(_b55);
var opts=t.tagbox("options");
if(!$(_b55).tagbox("isValid")){
return;
}
if(opts.limitToList){
var _b56=t.tagbox("panel");
var item=_b56.children("div.combobox-item-hover");
if(item.length){
item.removeClass("combobox-item-hover");
var row=opts.finder.getRow(_b55,item);
var _b57=row[opts.valueField];
$(_b55).tagbox(item.hasClass("combobox-item-selected")?"unselect":"select",_b57);
}
$(_b55).tagbox("hidePanel");
}else{
var v=$.trim($(_b55).tagbox("getText"));
if(v!==""){
var _b58=$(_b55).tagbox("getValues");
_b58.push(v);
$(_b55).tagbox("setValues",_b58);
}
}
};
function _b59(_b5a,_b5b){
$(_b5a).combobox("setText","");
_b4d(_b5a);
$(_b5a).combobox("setValues",_b5b);
$(_b5a).combobox("setText","");
};
$.fn.tagbox=function(_b5c,_b5d){
if(typeof _b5c=="string"){
var _b5e=$.fn.tagbox.methods[_b5c];
if(_b5e){
return _b5e(this,_b5d);
}else{
return this.combobox(_b5c,_b5d);
}
}
_b5c=_b5c||{};
return this.each(function(){
var _b5f=$.data(this,"tagbox");
if(_b5f){
$.extend(_b5f.options,_b5c);
}else{
$.data(this,"tagbox",{options:$.extend({},$.fn.tagbox.defaults,$.fn.tagbox.parseOptions(this),_b5c)});
}
_b32(this);
_b48(this);
});
};
$.fn.tagbox.methods={options:function(jq){
var _b60=jq.combobox("options");
return $.extend($.data(jq[0],"tagbox").options,{width:_b60.width,height:_b60.height,originalValue:_b60.originalValue,disabled:_b60.disabled,readonly:_b60.readonly});
},setValues:function(jq,_b61){
return jq.each(function(){
_b59(this,_b61);
});
}};
$.fn.tagbox.parseOptions=function(_b62){
return $.extend({},$.fn.combobox.parseOptions(_b62),$.parser.parseOptions(_b62,[]));
};
$.fn.tagbox.defaults=$.extend({},$.fn.combobox.defaults,{hasDownArrow:false,multiple:true,reversed:true,selectOnNavigation:false,tipOptions:$.extend({},$.fn.textbox.defaults.tipOptions,{showDelay:200}),inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _b63=e.data.target;
var opts=$(_b63).tagbox("options");
if(opts.limitToList){
_b54(_b63);
}
}}),keyHandler:$.extend({},$.fn.combobox.defaults.keyHandler,{enter:function(e){
_b54(this);
},query:function(q,e){
var opts=$(this).tagbox("options");
if(opts.limitToList){
$.fn.combobox.defaults.keyHandler.query.call(this,q,e);
}else{
$(this).combobox("hidePanel");
}
}}),tagFormatter:function(_b64,row){
var opts=$(this).tagbox("options");
return row?row[opts.textField]:_b64;
},tagStyler:function(_b65,row){
return "";
},onClickTag:function(_b66){
},onBeforeRemoveTag:function(_b67){
},onRemoveTag:function(_b68){
}});
})(jQuery);
(function($){
function _b69(_b6a){
var _b6b=$.data(_b6a,"datebox");
var opts=_b6b.options;
$(_b6a).addClass("datebox-f").combo($.extend({},opts,{onShowPanel:function(){
_b6c(this);
_b6d(this);
_b6e(this);
_b7c(this,$(this).datebox("getText"),true);
opts.onShowPanel.call(this);
}}));
if(!_b6b.calendar){
var _b6f=$(_b6a).combo("panel").css("overflow","hidden");
_b6f.panel("options").onBeforeDestroy=function(){
var c=$(this).find(".calendar-shared");
if(c.length){
c.insertBefore(c[0].pholder);
}
};
var cc=$("<div class=\"datebox-calendar-inner\"></div>").prependTo(_b6f);
if(opts.sharedCalendar){
var c=$(opts.sharedCalendar);
if(!c[0].pholder){
c[0].pholder=$("<div class=\"calendar-pholder\" style=\"display:none\"></div>").insertAfter(c);
}
c.addClass("calendar-shared").appendTo(cc);
if(!c.hasClass("calendar")){
c.calendar();
}
_b6b.calendar=c;
}else{
_b6b.calendar=$("<div></div>").appendTo(cc).calendar();
}
$.extend(_b6b.calendar.calendar("options"),{fit:true,border:false,onSelect:function(date){
var _b70=this.target;
var opts=$(_b70).datebox("options");
_b7c(_b70,opts.formatter.call(_b70,date));
$(_b70).combo("hidePanel");
opts.onSelect.call(_b70,date);
}});
}
$(_b6a).combo("textbox").parent().addClass("datebox");
$(_b6a).datebox("initValue",opts.value);
function _b6c(_b71){
var opts=$(_b71).datebox("options");
var _b72=$(_b71).combo("panel");
_b72.unbind(".datebox").bind("click.datebox",function(e){
if($(e.target).hasClass("datebox-button-a")){
var _b73=parseInt($(e.target).attr("datebox-button-index"));
opts.buttons[_b73].handler.call(e.target,_b71);
}
});
};
function _b6d(_b74){
var _b75=$(_b74).combo("panel");
if(_b75.children("div.datebox-button").length){
return;
}
var _b76=$("<div class=\"datebox-button\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"width:100%\"><tr></tr></table></div>").appendTo(_b75);
var tr=_b76.find("tr");
for(var i=0;i<opts.buttons.length;i++){
var td=$("<td></td>").appendTo(tr);
var btn=opts.buttons[i];
var t=$("<a class=\"datebox-button-a\" href=\"javascript:;\"></a>").html($.isFunction(btn.text)?btn.text(_b74):btn.text).appendTo(td);
t.attr("datebox-button-index",i);
}
tr.find("td").css("width",(100/opts.buttons.length)+"%");
};
function _b6e(_b77){
var _b78=$(_b77).combo("panel");
var cc=_b78.children("div.datebox-calendar-inner");
_b78.children()._outerWidth(_b78.width());
_b6b.calendar.appendTo(cc);
_b6b.calendar[0].target=_b77;
if(opts.panelHeight!="auto"){
var _b79=_b78.height();
_b78.children().not(cc).each(function(){
_b79-=$(this).outerHeight();
});
cc._outerHeight(_b79);
}
_b6b.calendar.calendar("resize");
};
};
function _b7a(_b7b,q){
_b7c(_b7b,q,true);
};
function _b7d(_b7e){
var _b7f=$.data(_b7e,"datebox");
var opts=_b7f.options;
var _b80=_b7f.calendar.calendar("options").current;
if(_b80){
_b7c(_b7e,opts.formatter.call(_b7e,_b80));
$(_b7e).combo("hidePanel");
}
};
function _b7c(_b81,_b82,_b83){
var _b84=$.data(_b81,"datebox");
var opts=_b84.options;
var _b85=_b84.calendar;
_b85.calendar("moveTo",opts.parser.call(_b81,_b82));
if(_b83){
$(_b81).combo("setValue",_b82);
}else{
if(_b82){
_b82=opts.formatter.call(_b81,_b85.calendar("options").current);
}
$(_b81).combo("setText",_b82).combo("setValue",_b82);
}
};
$.fn.datebox=function(_b86,_b87){
if(typeof _b86=="string"){
var _b88=$.fn.datebox.methods[_b86];
if(_b88){
return _b88(this,_b87);
}else{
return this.combo(_b86,_b87);
}
}
_b86=_b86||{};
return this.each(function(){
var _b89=$.data(this,"datebox");
if(_b89){
$.extend(_b89.options,_b86);
}else{
$.data(this,"datebox",{options:$.extend({},$.fn.datebox.defaults,$.fn.datebox.parseOptions(this),_b86)});
}
_b69(this);
});
};
$.fn.datebox.methods={options:function(jq){
var _b8a=jq.combo("options");
return $.extend($.data(jq[0],"datebox").options,{width:_b8a.width,height:_b8a.height,originalValue:_b8a.originalValue,disabled:_b8a.disabled,readonly:_b8a.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"datebox",{options:$.extend(true,{},$(from).datebox("options")),calendar:$(from).datebox("calendar")});
$(this).addClass("datebox-f");
});
},calendar:function(jq){
return $.data(jq[0],"datebox").calendar;
},initValue:function(jq,_b8b){
return jq.each(function(){
var opts=$(this).datebox("options");
var _b8c=opts.value;
if(_b8c){
_b8c=opts.formatter.call(this,opts.parser.call(this,_b8c));
}
$(this).combo("initValue",_b8c).combo("setText",_b8c);
});
},setValue:function(jq,_b8d){
return jq.each(function(){
_b7c(this,_b8d);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datebox("options");
$(this).datebox("setValue",opts.originalValue);
});
}};
$.fn.datebox.parseOptions=function(_b8e){
return $.extend({},$.fn.combo.parseOptions(_b8e),$.parser.parseOptions(_b8e,["sharedCalendar"]));
};
$.fn.datebox.defaults=$.extend({},$.fn.combo.defaults,{panelWidth:180,panelHeight:"auto",sharedCalendar:null,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_b7d(this);
},query:function(q,e){
_b7a(this,q);
}},currentText:"Today",closeText:"Close",okText:"Ok",buttons:[{text:function(_b8f){
return $(_b8f).datebox("options").currentText;
},handler:function(_b90){
var now=new Date();
$(_b90).datebox("calendar").calendar({year:now.getFullYear(),month:now.getMonth()+1,current:new Date(now.getFullYear(),now.getMonth(),now.getDate())});
_b7d(_b90);
}},{text:function(_b91){
return $(_b91).datebox("options").closeText;
},handler:function(_b92){
$(this).closest("div.combo-panel").panel("close");
}}],formatter:function(date){
var y=date.getFullYear();
var m=date.getMonth()+1;
var d=date.getDate();
return (m<10?("0"+m):m)+"/"+(d<10?("0"+d):d)+"/"+y;
},parser:function(s){
if(!s){
return new Date();
}
var ss=s.split("/");
var m=parseInt(ss[0],10);
var d=parseInt(ss[1],10);
var y=parseInt(ss[2],10);
if(!isNaN(y)&&!isNaN(m)&&!isNaN(d)){
return new Date(y,m-1,d);
}else{
return new Date();
}
},onSelect:function(date){
}});
})(jQuery);
(function($){
function _b93(_b94){
var _b95=$.data(_b94,"datetimebox");
var opts=_b95.options;
$(_b94).datebox($.extend({},opts,{onShowPanel:function(){
var _b96=$(this).datetimebox("getValue");
_b9c(this,_b96,true);
opts.onShowPanel.call(this);
},formatter:$.fn.datebox.defaults.formatter,parser:$.fn.datebox.defaults.parser}));
$(_b94).removeClass("datebox-f").addClass("datetimebox-f");
$(_b94).datebox("calendar").calendar({onSelect:function(date){
opts.onSelect.call(this.target,date);
}});
if(!_b95.spinner){
var _b97=$(_b94).datebox("panel");
var p=$("<div style=\"padding:2px\"><input></div>").insertAfter(_b97.children("div.datebox-calendar-inner"));
_b95.spinner=p.children("input");
}
_b95.spinner.timespinner({width:opts.spinnerWidth,showSeconds:opts.showSeconds,separator:opts.timeSeparator});
$(_b94).datetimebox("initValue",opts.value);
};
function _b98(_b99){
var c=$(_b99).datetimebox("calendar");
var t=$(_b99).datetimebox("spinner");
var date=c.calendar("options").current;
return new Date(date.getFullYear(),date.getMonth(),date.getDate(),t.timespinner("getHours"),t.timespinner("getMinutes"),t.timespinner("getSeconds"));
};
function _b9a(_b9b,q){
_b9c(_b9b,q,true);
};
function _b9d(_b9e){
var opts=$.data(_b9e,"datetimebox").options;
var date=_b98(_b9e);
_b9c(_b9e,opts.formatter.call(_b9e,date));
$(_b9e).combo("hidePanel");
};
function _b9c(_b9f,_ba0,_ba1){
var opts=$.data(_b9f,"datetimebox").options;
$(_b9f).combo("setValue",_ba0);
if(!_ba1){
if(_ba0){
var date=opts.parser.call(_b9f,_ba0);
$(_b9f).combo("setText",opts.formatter.call(_b9f,date));
$(_b9f).combo("setValue",opts.formatter.call(_b9f,date));
}else{
$(_b9f).combo("setText",_ba0);
}
}
var date=opts.parser.call(_b9f,_ba0);
$(_b9f).datetimebox("calendar").calendar("moveTo",date);
$(_b9f).datetimebox("spinner").timespinner("setValue",_ba2(date));
function _ba2(date){
function _ba3(_ba4){
return (_ba4<10?"0":"")+_ba4;
};
var tt=[_ba3(date.getHours()),_ba3(date.getMinutes())];
if(opts.showSeconds){
tt.push(_ba3(date.getSeconds()));
}
return tt.join($(_b9f).datetimebox("spinner").timespinner("options").separator);
};
};
$.fn.datetimebox=function(_ba5,_ba6){
if(typeof _ba5=="string"){
var _ba7=$.fn.datetimebox.methods[_ba5];
if(_ba7){
return _ba7(this,_ba6);
}else{
return this.datebox(_ba5,_ba6);
}
}
_ba5=_ba5||{};
return this.each(function(){
var _ba8=$.data(this,"datetimebox");
if(_ba8){
$.extend(_ba8.options,_ba5);
}else{
$.data(this,"datetimebox",{options:$.extend({},$.fn.datetimebox.defaults,$.fn.datetimebox.parseOptions(this),_ba5)});
}
_b93(this);
});
};
$.fn.datetimebox.methods={options:function(jq){
var _ba9=jq.datebox("options");
return $.extend($.data(jq[0],"datetimebox").options,{originalValue:_ba9.originalValue,disabled:_ba9.disabled,readonly:_ba9.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).datebox("cloneFrom",from);
$.data(this,"datetimebox",{options:$.extend(true,{},$(from).datetimebox("options")),spinner:$(from).datetimebox("spinner")});
$(this).removeClass("datebox-f").addClass("datetimebox-f");
});
},spinner:function(jq){
return $.data(jq[0],"datetimebox").spinner;
},initValue:function(jq,_baa){
return jq.each(function(){
var opts=$(this).datetimebox("options");
var _bab=opts.value;
if(_bab){
_bab=opts.formatter.call(this,opts.parser.call(this,_bab));
}
$(this).combo("initValue",_bab).combo("setText",_bab);
});
},setValue:function(jq,_bac){
return jq.each(function(){
_b9c(this,_bac);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datetimebox("options");
$(this).datetimebox("setValue",opts.originalValue);
});
}};
$.fn.datetimebox.parseOptions=function(_bad){
var t=$(_bad);
return $.extend({},$.fn.datebox.parseOptions(_bad),$.parser.parseOptions(_bad,["timeSeparator","spinnerWidth",{showSeconds:"boolean"}]));
};
$.fn.datetimebox.defaults=$.extend({},$.fn.datebox.defaults,{spinnerWidth:"100%",showSeconds:true,timeSeparator:":",keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_b9d(this);
},query:function(q,e){
_b9a(this,q);
}},buttons:[{text:function(_bae){
return $(_bae).datetimebox("options").currentText;
},handler:function(_baf){
var opts=$(_baf).datetimebox("options");
_b9c(_baf,opts.formatter.call(_baf,new Date()));
$(_baf).datetimebox("hidePanel");
}},{text:function(_bb0){
return $(_bb0).datetimebox("options").okText;
},handler:function(_bb1){
_b9d(_bb1);
}},{text:function(_bb2){
return $(_bb2).datetimebox("options").closeText;
},handler:function(_bb3){
$(_bb3).datetimebox("hidePanel");
}}],formatter:function(date){
var h=date.getHours();
var M=date.getMinutes();
var s=date.getSeconds();
function _bb4(_bb5){
return (_bb5<10?"0":"")+_bb5;
};
var _bb6=$(this).datetimebox("spinner").timespinner("options").separator;
var r=$.fn.datebox.defaults.formatter(date)+" "+_bb4(h)+_bb6+_bb4(M);
if($(this).datetimebox("options").showSeconds){
r+=_bb6+_bb4(s);
}
return r;
},parser:function(s){
if($.trim(s)==""){
return new Date();
}
var dt=s.split(" ");
var d=$.fn.datebox.defaults.parser(dt[0]);
if(dt.length<2){
return d;
}
var _bb7=$(this).datetimebox("spinner").timespinner("options").separator;
var tt=dt[1].split(_bb7);
var hour=parseInt(tt[0],10)||0;
var _bb8=parseInt(tt[1],10)||0;
var _bb9=parseInt(tt[2],10)||0;
return new Date(d.getFullYear(),d.getMonth(),d.getDate(),hour,_bb8,_bb9);
}});
})(jQuery);
(function($){
function init(_bba){
var _bbb=$("<div class=\"slider\">"+"<div class=\"slider-inner\">"+"<a href=\"javascript:;\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>"+"</div>"+"<div class=\"slider-rule\"></div>"+"<div class=\"slider-rulelabel\"></div>"+"<div style=\"clear:both\"></div>"+"<input type=\"hidden\" class=\"slider-value\">"+"</div>").insertAfter(_bba);
var t=$(_bba);
t.addClass("slider-f").hide();
var name=t.attr("name");
if(name){
_bbb.find("input.slider-value").attr("name",name);
t.removeAttr("name").attr("sliderName",name);
}
_bbb.bind("_resize",function(e,_bbc){
if($(this).hasClass("easyui-fluid")||_bbc){
_bbd(_bba);
}
return false;
});
return _bbb;
};
function _bbd(_bbe,_bbf){
var _bc0=$.data(_bbe,"slider");
var opts=_bc0.options;
var _bc1=_bc0.slider;
if(_bbf){
if(_bbf.width){
opts.width=_bbf.width;
}
if(_bbf.height){
opts.height=_bbf.height;
}
}
_bc1._size(opts);
if(opts.mode=="h"){
_bc1.css("height","");
_bc1.children("div").css("height","");
}else{
_bc1.css("width","");
_bc1.children("div").css("width","");
_bc1.children("div.slider-rule,div.slider-rulelabel,div.slider-inner")._outerHeight(_bc1._outerHeight());
}
_bc2(_bbe);
};
function _bc3(_bc4){
var _bc5=$.data(_bc4,"slider");
var opts=_bc5.options;
var _bc6=_bc5.slider;
var aa=opts.mode=="h"?opts.rule:opts.rule.slice(0).reverse();
if(opts.reversed){
aa=aa.slice(0).reverse();
}
_bc7(aa);
function _bc7(aa){
var rule=_bc6.find("div.slider-rule");
var _bc8=_bc6.find("div.slider-rulelabel");
rule.empty();
_bc8.empty();
for(var i=0;i<aa.length;i++){
var _bc9=i*100/(aa.length-1)+"%";
var span=$("<span></span>").appendTo(rule);
span.css((opts.mode=="h"?"left":"top"),_bc9);
if(aa[i]!="|"){
span=$("<span></span>").appendTo(_bc8);
span.html(aa[i]);
if(opts.mode=="h"){
span.css({left:_bc9,marginLeft:-Math.round(span.outerWidth()/2)});
}else{
span.css({top:_bc9,marginTop:-Math.round(span.outerHeight()/2)});
}
}
}
};
};
function _bca(_bcb){
var _bcc=$.data(_bcb,"slider");
var opts=_bcc.options;
var _bcd=_bcc.slider;
_bcd.removeClass("slider-h slider-v slider-disabled");
_bcd.addClass(opts.mode=="h"?"slider-h":"slider-v");
_bcd.addClass(opts.disabled?"slider-disabled":"");
var _bce=_bcd.find(".slider-inner");
_bce.html("<a href=\"javascript:;\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>");
if(opts.range){
_bce.append("<a href=\"javascript:;\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>");
}
_bcd.find("a.slider-handle").draggable({axis:opts.mode,cursor:"pointer",disabled:opts.disabled,onDrag:function(e){
var left=e.data.left;
var _bcf=_bcd.width();
if(opts.mode!="h"){
left=e.data.top;
_bcf=_bcd.height();
}
if(left<0||left>_bcf){
return false;
}else{
_bd0(left,this);
return false;
}
},onStartDrag:function(){
_bcc.isDragging=true;
opts.onSlideStart.call(_bcb,opts.value);
},onStopDrag:function(e){
_bd0(opts.mode=="h"?e.data.left:e.data.top,this);
opts.onSlideEnd.call(_bcb,opts.value);
opts.onComplete.call(_bcb,opts.value);
_bcc.isDragging=false;
}});
_bcd.find("div.slider-inner").unbind(".slider").bind("mousedown.slider",function(e){
if(_bcc.isDragging||opts.disabled){
return;
}
var pos=$(this).offset();
_bd0(opts.mode=="h"?(e.pageX-pos.left):(e.pageY-pos.top));
opts.onComplete.call(_bcb,opts.value);
});
function _bd0(pos,_bd1){
var _bd2=_bd3(_bcb,pos);
var s=Math.abs(_bd2%opts.step);
if(s<opts.step/2){
_bd2-=s;
}else{
_bd2=_bd2-s+opts.step;
}
if(opts.range){
var v1=opts.value[0];
var v2=opts.value[1];
var m=parseFloat((v1+v2)/2);
if(_bd1){
var _bd4=$(_bd1).nextAll(".slider-handle").length>0;
if(_bd2<=v2&&_bd4){
v1=_bd2;
}else{
if(_bd2>=v1&&(!_bd4)){
v2=_bd2;
}
}
}else{
if(_bd2<v1){
v1=_bd2;
}else{
if(_bd2>v2){
v2=_bd2;
}else{
_bd2<m?v1=_bd2:v2=_bd2;
}
}
}
$(_bcb).slider("setValues",[v1,v2]);
}else{
$(_bcb).slider("setValue",_bd2);
}
};
};
function _bd5(_bd6,_bd7){
var _bd8=$.data(_bd6,"slider");
var opts=_bd8.options;
var _bd9=_bd8.slider;
var _bda=$.isArray(opts.value)?opts.value:[opts.value];
var _bdb=[];
if(!$.isArray(_bd7)){
_bd7=$.map(String(_bd7).split(opts.separator),function(v){
return parseFloat(v);
});
}
_bd9.find(".slider-value").remove();
var name=$(_bd6).attr("sliderName")||"";
for(var i=0;i<_bd7.length;i++){
var _bdc=_bd7[i];
if(_bdc<opts.min){
_bdc=opts.min;
}
if(_bdc>opts.max){
_bdc=opts.max;
}
var _bdd=$("<input type=\"hidden\" class=\"slider-value\">").appendTo(_bd9);
_bdd.attr("name",name);
_bdd.val(_bdc);
_bdb.push(_bdc);
var _bde=_bd9.find(".slider-handle:eq("+i+")");
var tip=_bde.next();
var pos=_bdf(_bd6,_bdc);
if(opts.showTip){
tip.show();
tip.html(opts.tipFormatter.call(_bd6,_bdc));
}else{
tip.hide();
}
if(opts.mode=="h"){
var _be0="left:"+pos+"px;";
_bde.attr("style",_be0);
tip.attr("style",_be0+"margin-left:"+(-Math.round(tip.outerWidth()/2))+"px");
}else{
var _be0="top:"+pos+"px;";
_bde.attr("style",_be0);
tip.attr("style",_be0+"margin-left:"+(-Math.round(tip.outerWidth()))+"px");
}
}
opts.value=opts.range?_bdb:_bdb[0];
$(_bd6).val(opts.range?_bdb.join(opts.separator):_bdb[0]);
if(_bda.join(",")!=_bdb.join(",")){
opts.onChange.call(_bd6,opts.value,(opts.range?_bda:_bda[0]));
}
};
function _bc2(_be1){
var opts=$.data(_be1,"slider").options;
var fn=opts.onChange;
opts.onChange=function(){
};
_bd5(_be1,opts.value);
opts.onChange=fn;
};
function _bdf(_be2,_be3){
var _be4=$.data(_be2,"slider");
var opts=_be4.options;
var _be5=_be4.slider;
var size=opts.mode=="h"?_be5.width():_be5.height();
var pos=opts.converter.toPosition.call(_be2,_be3,size);
if(opts.mode=="v"){
pos=_be5.height()-pos;
}
if(opts.reversed){
pos=size-pos;
}
return pos.toFixed(0);
};
function _bd3(_be6,pos){
var _be7=$.data(_be6,"slider");
var opts=_be7.options;
var _be8=_be7.slider;
var size=opts.mode=="h"?_be8.width():_be8.height();
var pos=opts.mode=="h"?(opts.reversed?(size-pos):pos):(opts.reversed?pos:(size-pos));
var _be9=opts.converter.toValue.call(_be6,pos,size);
return _be9.toFixed(0);
};
$.fn.slider=function(_bea,_beb){
if(typeof _bea=="string"){
return $.fn.slider.methods[_bea](this,_beb);
}
_bea=_bea||{};
return this.each(function(){
var _bec=$.data(this,"slider");
if(_bec){
$.extend(_bec.options,_bea);
}else{
_bec=$.data(this,"slider",{options:$.extend({},$.fn.slider.defaults,$.fn.slider.parseOptions(this),_bea),slider:init(this)});
$(this).removeAttr("disabled");
}
var opts=_bec.options;
opts.min=parseFloat(opts.min);
opts.max=parseFloat(opts.max);
if(opts.range){
if(!$.isArray(opts.value)){
opts.value=$.map(String(opts.value).split(opts.separator),function(v){
return parseFloat(v);
});
}
if(opts.value.length<2){
opts.value.push(opts.max);
}
}else{
opts.value=parseFloat(opts.value);
}
opts.step=parseFloat(opts.step);
opts.originalValue=opts.value;
_bca(this);
_bc3(this);
_bbd(this);
});
};
$.fn.slider.methods={options:function(jq){
return $.data(jq[0],"slider").options;
},destroy:function(jq){
return jq.each(function(){
$.data(this,"slider").slider.remove();
$(this).remove();
});
},resize:function(jq,_bed){
return jq.each(function(){
_bbd(this,_bed);
});
},getValue:function(jq){
return jq.slider("options").value;
},getValues:function(jq){
return jq.slider("options").value;
},setValue:function(jq,_bee){
return jq.each(function(){
_bd5(this,[_bee]);
});
},setValues:function(jq,_bef){
return jq.each(function(){
_bd5(this,_bef);
});
},clear:function(jq){
return jq.each(function(){
var opts=$(this).slider("options");
_bd5(this,opts.range?[opts.min,opts.max]:[opts.min]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).slider("options");
$(this).slider(opts.range?"setValues":"setValue",opts.originalValue);
});
},enable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=false;
_bca(this);
});
},disable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=true;
_bca(this);
});
}};
$.fn.slider.parseOptions=function(_bf0){
var t=$(_bf0);
return $.extend({},$.parser.parseOptions(_bf0,["width","height","mode",{reversed:"boolean",showTip:"boolean",range:"boolean",min:"number",max:"number",step:"number"}]),{value:(t.val()||undefined),disabled:(t.attr("disabled")?true:undefined),rule:(t.attr("rule")?eval(t.attr("rule")):undefined)});
};
$.fn.slider.defaults={width:"auto",height:"auto",mode:"h",reversed:false,showTip:false,disabled:false,range:false,value:0,separator:",",min:0,max:100,step:1,rule:[],tipFormatter:function(_bf1){
return _bf1;
},converter:{toPosition:function(_bf2,size){
var opts=$(this).slider("options");
return (_bf2-opts.min)/(opts.max-opts.min)*size;
},toValue:function(pos,size){
var opts=$(this).slider("options");
return opts.min+(opts.max-opts.min)*(pos/size);
}},onChange:function(_bf3,_bf4){
},onSlideStart:function(_bf5){
},onSlideEnd:function(_bf6){
},onComplete:function(_bf7){
}};
})(jQuery);


if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = '第';
	$.fn.pagination.defaults.afterPageText = '共{pages}页';
	$.fn.pagination.defaults.displayMsg = '显示{from}到{to},共{total}记录';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = '正在处理，请稍待。。。';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = '确定';
	$.messager.defaults.cancel = '取消';
}
$.map(['validatebox','textbox','passwordbox','filebox','searchbox',
		'combo','combobox','combogrid','combotree',
		'datebox','datetimebox','numberbox',
		'spinner','numberspinner','timespinner','datetimespinner'], function(plugin){
	if ($.fn[plugin]){
		$.fn[plugin].defaults.missingMessage = '该输入项为必输项';
	}
});
if ($.fn.validatebox){
	$.fn.validatebox.defaults.rules.email.message = '请输入有效的电子邮件地址';
	$.fn.validatebox.defaults.rules.url.message = '请输入有效的URL地址';
	$.fn.validatebox.defaults.rules.length.message = '输入内容长度必须介于{0}和{1}之间';
	$.fn.validatebox.defaults.rules.remote.message = '请修正该字段';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['日','一','二','三','四','五','六'];
	$.fn.calendar.defaults.months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = '今天';
	$.fn.datebox.defaults.closeText = '关闭';
	$.fn.datebox.defaults.okText = '确定';
	$.fn.datebox.defaults.formatter = function(date){
		var y = date.getFullYear();
		var m = date.getMonth()+1;
		var d = date.getDate();
		return y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
	};
	$.fn.datebox.defaults.parser = function(s){
		if (!s) return new Date();
		var ss = s.split('-');
		var y = parseInt(ss[0],10);
		var m = parseInt(ss[1],10);
		var d = parseInt(ss[2],10);
		if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
			return new Date(y,m-1,d);
		} else {
			return new Date();
		}
	};
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText
	});
}
if ($.fn.datetimespinner){
	$.fn.datetimespinner.defaults.selections = [[0,4],[5,7],[8,10],[11,13],[14,16],[17,19]]
}

//环境检测
(function () {
    window.nnfIsMobile = (typeof $.mobile != "undefined") || window.isNSMode;
})();

//通用组件样式设置，默认设置覆盖
(function () {
    $.map(["validatebox", "textbox", "filebox", "searchbox", "combo", "combobox", "combogrid", "combotree", "datebox", "datetimebox", "numberbox", "spinner", "numberspinner", "timespinner", "datetimespinner"], function (name) {
        if ($.fn[name]) $.extend($.fn[name].defaults, { height: 26, iconWidth: 22, width: "100%", tipPosition: "bottom" });
    });

    //下拉类控件默认不给手动输入内容
    $.map(["combo", "combobox", "combogrid", "combotree", "datebox", "datetimebox"], function (name) {
        if ($.fn[name]) $.extend($.fn[name].defaults, { editable: false });
    });

    //时间控件默认不显示秒
    $.extend($.fn["datetimebox"].defaults, { showSeconds: false });

    $.extend($.fn.validatebox.defaults.rules, {
        maxLength: {
            validator: function (value, param) { return value.length >= param[0]; },
            message: '内容长度不能超过 {0}'
        }
    });
})();

//延迟渲染easyui
(function () {
    var pmo = $.fn.panel.methods.open;
    $.fn.panel.methods.open = function (a, b, c) {
        if (a.is("[nnflazy]")) {
            a.find("[easyclass-lazy]").each(function () {
                $(this).addClass(this.getAttribute("easyclass-lazy"));
            });
            a.find("div[nnflayout-lazy]").each(function () {
                $(this).attr("nnflayout", this.getAttribute("nnflayout-lazy"));
            });
            a.find("[nnfedititem-lazy]").each(function () {
                $(this).attr("nnfedititem", this.getAttribute("nnfedititem-lazy"));
            });
            applyNNFLayout(a);
            applyNNFEditItem(a);
            $.parser.parse(a);
            a.removeAttr("nnflazy");
            var oll = a.data("nnf-onlazyload") || function () { };
            oll.apply(a);
        }
        return pmo(a, b, c);
    };
})();

//datagrid显示没数据提示，自动填充宽度修正
(function () {
    var refreshView = function (target) {
        var opts = $(target).datagrid('options');
        var vc = $(target).datagrid('getPanel').find('div.datagrid-body:last');
        vc.children('div.datagrid-empty').remove();
        vc.css("position", "relative");
        if (!$(target).datagrid('getRows').length) {
            $('<div class="datagrid-empty"></div>').html(opts.emptyMsg || '没有记录').appendTo(vc);
        }

        fillDataGridColumn(target.id, target.getAttribute("fillfield"));
    };

    var oar = $.fn.datagrid.defaults.view.onAfterRender;
    var irow = $.fn.datagrid.defaults.view.insertRow;
    var drow = $.fn.datagrid.defaults.view.deleteRow;

    $.extend($.fn.datagrid.defaults.view, {
        onAfterRender: function (target) {
            oar.call(this, target);
            refreshView(target);
            if (typeof this.onAfterRenderNNF != "undefined") this.onAfterRenderNNF(target);
        },
        insertRow: function (target, index, row) {
            irow.call(this, target, index, row);
            refreshView(target);
            if (typeof this.insertRowNNF != "undefined") this.insertRowNNF(target, index, row);
        },
        deleteRow: function (target, index) {
            drow.call(this, target, index);
            refreshView(target);
            if (typeof this.deleteRowNNF != "undefined") this.deleteRowNNF(target, index);
        }
    });
})();

//treegrid自动宽度修正
(function () {
    var refreshView = function (target) {
        var opts = $(target).treegrid('options');
        var vc = $(target).treegrid('getPanel').children('div.datagrid-view');
        vc.children('div.datagrid-empty').remove();
        if (!$(target).treegrid('getRoot')) {
            var d = $('<div class="datagrid-empty"></div>').html(opts.emptyMsg || '没有记录').appendTo(vc);
            if (nnfIsMobile) {
                d.addClass("datagrid-empty-noheader");
            }
        }

        fillDataGridColumn(target.id, target.getAttribute("fillfield"));
    };

    var oar = $.fn.treegrid.defaults.view.onAfterRender;

    $.extend($.fn.treegrid.defaults.view, {
        onAfterRender: function (target) {
            oar.call(this, target);
            refreshView(target);
            if (typeof this.onAfterRenderNNF != "undefined") this.onAfterRenderNNF(target);
        }
    });
})();

//日期选择框兼容性改进
(function () {
    var dbSetValue = $.fn.datebox.methods.setValue;
    $.fn.datebox.methods.setValue = function (jq, value) {
        if (value && typeof value == "object" && typeof value["getTime"] == "function") {
            return dbSetValue(jq, $(document).datebox.defaults.formatter(value));
        }
        return dbSetValue(jq, value);
    };

    $.fn.datebox.defaults.formatter = function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        return y + '/' + (m < 10 ? ('0' + m) : m) + '/' + (d < 10 ? ('0' + d) : d);
    };

    var dbparser = $.fn.datebox.defaults.parser;
    $.fn.datebox.defaults.parser = function (s) {
        if (!s) return new Date();
        if (typeof (s.getTime) == "function") return s;
        var ss = s.split(/[\-\/]/);
        var y = parseInt(ss[0], 10);
        var m = parseInt(ss[1], 10);
        var d = parseInt(ss[2], 10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
            return new Date(y, m - 1, d);
        }
        if (typeof window.dateparser != "undefined") return dbparser.apply(this, [window.dateparser(s)]);
        return dbparser.apply(this, [s]);
    };

    var dtbparser = $.fn.datetimebox.defaults.parser;
    $.fn.datetimebox.defaults.parser = function (s) {
        if (!s) return new Date();
        if (typeof (s.getTime) == "function") return s;
        var m = /^(\d+)年(\d+)月(\d+)日\s*(\d+)时(\d+)分$/ig.exec(s);
        if (m) return dtbparser.apply(this, [m[1] + "/" + m[2] + "/" + m[3] + " " + m[4] + ":" + m[5]]);
        if (typeof window.datetimeparser != "undefined") return dtbparser.apply(this, [window.datetimeparser(s)]);
        return dtbparser.apply(this, [s]);
    };

})();

//延迟校验框的校验时间
(function () {
    var delay = 500;
    var vdementer = $.fn.validatebox.defaults.events.mouseenter;
    var vdemleave = $.fn.validatebox.defaults.events.mouseleave;

    $.fn.validatebox.defaults.events.mouseenter = function (a) {
        this.nnftimer = setTimeout(function () { vdementer(a); }, delay);
    };
    $.fn.validatebox.defaults.events.mouseleave = function (a) {
        if (this.nnftimer) {
            clearTimeout(this.nnftimer);
            this.nnftimer = null;
        }
        vdemleave(a);
    };
})();

//不可编辑的文本框不显示必填提示，防止下拉框被提示框挡住
(function () {
    var ttshow = $.fn.tooltip.methods.show;
    $.fn.tooltip.methods.show = function (jq, e) {
        var opt = jq.validatebox("options") || {};
        if (opt.required) {
            if (jq.parent().hasClass("combo")) {
                return;
            }
        }
        ttshow.apply(this, [jq, e]);
    };
})();

//滑块文本改进
(function () {
    $.extend($.fn.switchbutton.defaults, { onText: "是", offText: "否" });
})();

(function () {
    var scrollTops = [];
    //对话框逻辑优化
    $.extend($.fn["dialog"].defaults, {
        onBeforeOpen: function (a, b, c, d) {
            var option = $(this).dialog("options");
            if (option.noMobile && !$(this).is(".nomobile")) {
                var win = $(this).closest(".window");
                if (!win.is(".nomobile")) win.addClass("nomobile");
            }
            if (nnfIsMobile && !option.noMobile) {
                if (!option.maximized && !option.max) {
                    $(this).dialog({ maximized: true, closed: false, max: true });
                    return false;
                }
                //            if (option.width != nnfwwidth || option.height != nnfwheight) {
                //                $(this).dialog({ width: nnfwwidth, height: nnfwheight, closed: false });
                //                return;
                //            }
            }
            //BPMClient模式优化
            if (window.urlQuery["tabif"] && parent && typeof parent.getFormRect != "undefined") {
                var rect = parent.getFormRect(window.urlQuery["tabif"]);
                var top = rect.getTop(option.height);
                if (option.top != top) {
                    $(this).dialog({ top: top, closed: false });
                    return false;
                }
            }
            if (typeof option.onBeforeOpenNNF != "undefined") option.onBeforeOpenNNF.apply(this, [a, b, c, d]);
        },
        onOpen: function (a, b, c, d) {
            var opts = $(this).dialog("options");
            if (opts.maximized) scrollTops.push(document.body.scrollTop);
            if (typeof opts.onOpenNNF != "undefined") opts.onOpenNNF.apply(this, [a, b, c, d]);
        },
        onClose: function (a, b, c, d) {
            var opts = $(this).dialog("options");
            if (opts.maximized) document.body.scrollTop = scrollTops.pop();
            if (typeof opts.onCloseNNF != "undefined") opts.onCloseNNF.apply(this, [a, b, c, d]);
        }
    });
})();

//移动端，对话框逻辑优化
//if (nnfIsMobile) {
//    var dialogmcenter = $.fn["window"].methods.center;
//    $.extend($.fn["dialog"].defaults, { draggable: false });
//    $.extend($.fn["dialog"].methods, {
//        center: function (a) {
//            var option = a.dialog("options");
//            if (option.noMobile) return dialogmcenter(a);
//            return a;
//        }
//    });
//}

//BPMClient模式优化
if (window.urlQuery["tabif"] && parent && typeof parent.getFormRect != "undefined") {
    $.extend($.fn["dialog"].methods, { center: function (a) { return a; } });
}

//datagrid自动填满宽度2
function fillDataGridColumn(tableid, field) {
    if (!tableid) {
        $.each(window.nnfGridFill || [], function (i, f) { fillDataGridColumn(f.tableid, f.field); });
        return;
    }
    if (!field) return;

    var jView = $("#" + tableid).prev();

    var mClass = /datagrid-cell-c[^\s\-]+-/ig.exec(jView.find(".datagrid-cell:first").attr("class"));
    if (!mClass) return;
    var clsName = "." + mClass[0] + field;

    var ctn = jView.find(".datagrid-header").height() > 10 ? ".datagrid-header" : ".datagrid-body";
    var me = jView.find(ctn + " " + clsName);
    if (!me.length) return;
    var mwidth = me.width();
    var width1 = jView.find(ctn)[0].clientWidth;
    var width2 = me.closest("table.datagrid-htable").width();
    var offset = width1 - width2 + 0;
    if (offset != 0) {
        var targetwidth = mwidth + offset;
        $("<style type='text/css'>td[field=" + field + "] .datagrid-cell{width:" + targetwidth + "px!important;}</style>").appendTo("head");
    }
}

//(function () {
//    var _size = $.fn._size;
//    $.fn._size = function (a, b) {
//        //console.log(a + "~" + b);
//        return _size.apply(this, [a, b]);
//    };
//})();


$(function () { fillDataGridColumn(); });
$(function () {
    window.nnfRuntime.EasyUIRendered = true;
    $("#nnfspinnerctn").remove();
});



if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear() + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate()) + 'T' +
                    f(this.getUTCHours()) + ':' +
                    f(this.getUTCMinutes()) + ':' +
                    f(this.getUTCSeconds()) + 'Z'
                : null;
        };

        String.prototype.toJSON =
            Number.prototype.toJSON =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

        // If the string contains no control characters, no quote characters, and no
        // backslash characters, then we can safely slap some quotes around it.
        // Otherwise we must also replace the offending characters with safe escape
        // sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

        // Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

        // If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

        // If we were called with a replacer function, then call the replacer to
        // obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

        // What happens next depends on the value's type.

        switch (typeof value) {
            case 'string':
                return quote(value);

            case 'number':

                // JSON numbers must be finite. Encode non-finite numbers as null.

                return isFinite(value) ? String(value) : 'null';

            case 'boolean':
            case 'null':

                // If the value is a boolean or null, convert it to a string. Note:
                // typeof null does not produce 'null'. The case is included here in
                // the remote chance that this gets fixed someday.

                return String(value);

                // If the type is 'object', we might be dealing with an object or an array or
                // null.

            case 'object':

                // Due to a specification blunder in ECMAScript, typeof null is 'object',
                // so watch out for that case.

                if (!value) {
                    return 'null';
                }

                // Make an array to hold the partial results of stringifying this object value.

                gap += indent;
                partial = [];

                // Is the value an array?

                if (Object.prototype.toString.apply(value) === '[object Array]') {

                    // The value is an array. Stringify every element. Use null as a placeholder
                    // for non-JSON values.

                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || 'null';
                    }

                    // Join all of the elements together, separated with commas, and wrap them in
                    // brackets.

                    v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                    gap = mind;
                    return v;
                }

                // If the replacer is an array, use it to select the members to be stringified.

                if (rep && typeof rep === 'object') {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === 'string') {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                } else {

                    // Otherwise, iterate through all of the keys in the object.

                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                }

                // Join all of the member texts together, separated with commas,
                // and wrap them in braces.

                v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
                gap = mind;
                return v;
        }
    }

    // If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

            // The stringify method takes a value and an optional replacer, and an optional
            // space parameter, and returns a JSON text. The replacer can be a function
            // that can replace values, or an array of strings that will select the keys.
            // A default replacer method can be provided. Use of the space parameter can
            // produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

            // If the space parameter is a number, make an indent string containing that
            // many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

                // If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

            // If there is a replacer, it must be a function or an array.
            // Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

            // Make a fake root object containing our value under the key of ''.
            // Return the result of stringifying the value.

            return str('', { '': value });
        };
    }


    // If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

            // The parse method takes a text and an optional reviver function, and returns
            // a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

                // The walk method is used to recursively walk the resulting structure so
                // that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


            // Parsing happens in four stages. In the first stage, we replace certain
            // Unicode characters with escape sequences. JavaScript handles many characters
            // incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

            // In the second stage, we run the text against regular expressions that look
            // for non-JSON patterns. We are especially concerned with '()' and 'new'
            // because they can cause invocation, and '=' because it can cause mutation.
            // But just to be safe, we want to reject all unexpected forms.

            // We split the second stage into 4 regexp operations in order to work around
            // crippling inefficiencies in IE's and Safari's regexp engines. First we
            // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
            // replace all simple value tokens with ']' characters. Third, we delete all
            // open brackets that follow a colon or comma or that begin the text. Finally,
            // we look to see that the remaining characters are only whitespace or ']' or
            // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                // In the third stage we use the eval function to compile the text into a
                // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
                // in JavaScript: it can begin a block or an object literal. We wrap the text
                // in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

                // In the optional fourth stage, we recursively walk the new structure, passing
                // each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({ '': j }, '')
                    : j;
            }

            // If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
} ());
function nnfeasygrid(cfg) {
    var idGrid = this.id = cfg.idGrid;
    var title = cfg.title;
    var idDialog = idGrid + "-dialog";
    var idForm = idDialog + " .nnfegform";
    var idToolbar = idGrid + "-toolbar";

    if (!cfg.allowEdit) $(idToolbar).remove();
    var editingRow = null;

    var findLocalForm = function () {
        var result = $(idForm).find("[islocalform]");
        if (result.length == 0) {
            result = $(idForm);
        }
        return result;
    };

    var options = {
        inited: false,
        initCheck: function () {
            if (!this.inited) {
                alert("必须通过 initGrid 方法对明细表格进行初始化");
                throw "";
            }
        },
        isDatasDefined: function () { return this._datas !== false; },
        loadForm: function (row) { },
        clearForm: function () { },
        validateForm: function () { return true; },
        deleteRow: function (row) {
            this.initCheck();
            if (this.isDatasDefined()) {
                var rows = this._datas;
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i] == row) {
                        rows.splice(i, 1);
                        break;
                    }
                }
                return;
            }
            alert("必须实现deleteRow(row)方法");
            throw "";
        },
        reBind: function () {
            this.initCheck();
            if (this.isDatasDefined()) {
                this.datagrid("loadData", this._datas);
                //this.datagrid({ data: this._datas, showFooter: this._showFooter() });
                if (typeof this._getFooters == "function") {
                    var footer = this._getFooters();
                    if (footer) this.datagrid("reloadFooter", footer);
                }
                return;
            }
            alert("必须实现reBind()方法");
            throw "";
        },
        saveForm: function (oldRow) {
            this.initCheck();
            if (this.isDatasDefined()) {
                if (!oldRow) {
                    oldRow = {};
                    this._datas.push(oldRow);
                }
                var formData = findLocalForm().localform("save");
                $.extend(oldRow, formData);
                return;
            }
            alert("必须实现saveForm(oldRow)方法");
            throw "";
        },
        //0:不可编辑, 1:可以编辑, 2:可以编辑但不许新增、删除
        _editMode: 1,
        _datas: false,
        _custButtons: false,
        _getFooters: false,
        _changed: function () { },
        _beforeAdding: function () { return true; },
        _beforeEditing: function (row) { return true; },
        _beforeDeleting: function (rows) { return confirm("确定要删除这 " + rows.length + " 条数据吗？"); },
        _beforeSaving: function () { return true; },
        _showFooter: function () {
            return (this._getFooters !== false) && (this._datas.length > 0);
        }
    };

    this.initGrid = function (option) {
        if (option === null || typeof option == "undefined") alert("initGrid参数不能为空");
        if (typeof option["length"] != "undefined") option = { _datas: option };
        if (typeof option["_datas"] == "undefined") alert("initGrid参数中的_datas无效");
        options.inited = true;
        $.extend(options, option);
        var defaultGridOption = {};
        if (nnfIsMobile && !nnfcfg.DisableCustomNNFEasyGridViewInMobile) {
            defaultGridOption.showHeader = false;
            defaultGridOption.view = nnfGridMobileView;
        }
        options.options = $.extend(defaultGridOption, options.options || {});

        if (options.isDatasDefined()) {
            if (!options._datas || typeof options._datas.length == "undefined") {
                alert("明细表“" + title + "”初始化错误，要求_datas是数组类型");
                throw "";
            }
        }
        if (options._editMode == 0) {
            $(idToolbar).remove();
        } else if (options._editMode == 1) {
            $(idToolbar).show();
            $(idToolbar).find(".tbadd,.tbedit,.tbdelete").show();
            $(idDialog + "-buttons").find(".tbappend").show();
        } else {
            $(idToolbar).show();
            $(idToolbar).find(".tbadd,.tbdelete").hide();
            $(idDialog + "-buttons").find(".tbappend").hide();
        }
        if (options._custButtons !== false) {

        }

        options.datagrid = function (a, b, c, d) {
            $(idGrid).datagrid(a, b, c, d);
        };

        var initData = {
            nowrap: false,
            onDblClickRow: function (idx, row) {
                if (window.isNSMode) return;
                if (row && cfg.allowEdit && (options._editMode !== 0)) {
                    if (!options._beforeEditing(row)) return;
                    $(idDialog).dialog('open').dialog('setTitle', '修改 - ' + title).dialog("center");
                    findLocalForm().localform('load', row);
                    options.loadForm(row);
                    editingRow = row;
                }
            }
        };
        if (options.isDatasDefined()) {
            if (typeof options._datas != "object") {
                alert("_datas初始化不正确，只能使用数组");
                throw "";
            }
            initData.data = options._datas;
            initData.showFooter = options._showFooter();
        }
        $.extend(initData, options.options || {});
        $(idGrid).datagrid(initData);

        if (typeof options._getFooters == "function") {
            var footer = options._getFooters();
            if (footer) $(idGrid).datagrid("reloadFooter", footer);
        }

    };

    this.addButton = function (text, onClick, iconCls) {
        var id = "_easygridAddedButton" + setTimeout(function () { }, 10);
        window[id] = onClick;
        $(idToolbar).append('<a id="' + id + '" href="javascript:void(0)" class="easyui-linkbutton" data-options="onClick: ' + id + '" iconcls="' + iconCls + '" plain="true">' + text + '</a>');
        $.parser.parse(idToolbar);
        return id;
    };

    var doSave = function (isAppend) {
        if (!findLocalForm().localform("validate") || !options.validateForm()) { return; }
        if (!options._beforeSaving()) return;
        if (options.saveForm(editingRow) !== false) {
            editingRow = null;
            options.reBind();
            options._changed();
            if (isAppend) {
                findLocalForm().localform('clear', 'gridappend');
                options.clearForm();
                return;
            }
            $(idDialog).dialog('close');
        }
    };

    $(idToolbar).on("click", "a", function () {
        var aa = $(this);
        if (aa.is(".tbadd")) {
            if (!options._beforeAdding()) return false;
            $(idDialog).dialog('open').dialog('setTitle', '添加 - ' + title).dialog("center");
            findLocalForm().localform('clear', 'gridadd');
            options.clearForm();
            editingRow = null;
        } else if (aa.is(".tbedit")) {
            var exists = $(idGrid).datagrid('getSelected');
            if (exists) {
                if (!options._beforeEditing(exists)) return false;
                $(idDialog).dialog('open').dialog('setTitle', '修改 - ' + title).dialog("center");
                findLocalForm().localform('load', exists);
                options.loadForm(exists);
                editingRow = exists;
            }
        } else if (aa.is(".tbdelete")) {
            var rows = $(idGrid).datagrid('getChecked');
            if (rows.length === 0) rows = $(idGrid).datagrid('getSelections');
            if (rows.length > 0 && options._beforeDeleting(rows)) {
                $.each(rows, function (i, n) { options.deleteRow(n); });
                options.reBind();
                options._changed();
            }

        }
        return false;
    });

    $(idDialog + "-buttons").on("click", "a", function () {
        var aa = $(this);
        if (aa.is(".tbcancel")) {
            $(idDialog).dialog('close');
        } else if (aa.is(".tbok")) {
            doSave(false);
        } else if (aa.is(".tbappend")) {
            doSave(true);
        }
        return false;
    });

    return this;
}

var nnfGridMobileView = $.extend({}, $.fn.datagrid.defaults.view, {
    renderRow: function (target, fields, frozen, rowIndex, rowData) {
        var cc = [];
        var opts = $(target).datagrid("options");
        //showHeader,rownumbers

        if (frozen && opts.rownumbers) {
            cc.push('<td><div class="datagrid-cell-rownumber">' + (rowIndex + 1) + '</div></td>');
            return cc.join('');
        }

        cc.push('<td colspan=' + fields.length + '><div style="padding:5px;">');
        if (opts.mobileView) {
            cc.push(opts.mobileView(opts, fields, rowData, rowIndex));
        } else {
            $.each(opts.columns[0], function (i, n) {
                var field = n.field;
                var title = n.title;
                var formater = n.formatter || function (a) { return a; };
                if (field && title) {
                    var text = formater(rowData[field], rowData, rowIndex);
                    if ("合计,总计,汇总,总和".indexOf(text) >= 0) {
                        cc.push('<span class="nnfmgridtitle">' + text + '&nbsp;</span>');
                        cc.push('<br/>');
                    } else {
                        if (text) {
                            cc.push('<span class="nnfmgridtitle">' + title + ':</span>');
                            cc.push('<span class="nnfmgridvalue">' + text + '</span>');
                            if (i != (opts.columns[0].length - 1)) cc.push('<br/>');
                        }
                    }
                }
            });
        }

        cc.push('</div></td>');
        return cc.join('');
    }
});

(function ($) {
    $.fn.localform = function (options, a, b, c, d, e) {
        if (this.length == 0) return true;
        if (this.length > 1) {
            if (options == "validate") {
                var isFailed = false;
                this.each(function () {
                    if (!$(this).localform(options, a, b, c, d, e)) {
                        isFailed = true;
                        return false;
                    }
                });
                return !isFailed;
            }
            if (options == "save") {
                a = a || {};
                this.each(function () { $(this).localform(options, a, b, c, d, e); });
                return a;
            }
            this.each(function () {
                $(this).localform(options, a, b, c, d, e);
            });
            return this;
        }

        if (typeof options == "string") {
            return $.fn.localform.methods[options](this, a, b, c, d, e);
        };
        options = options || {};
        options = $.extend({}, $.fn.localform.defaults, options);
        return this.data("localform", options).attr("islocalform", "1");
    };

    $.fn.localform.defaults = {
        custLoad: function (data) { },
        custClear: false,
        custValidate: function () { },
        custSave: function (data) { },
        custDiable: function () { },
        loadFormatters: {},
        saveFormatters: {}
    };

    $.fn.localform.methods = {
        load: function (jq, data, noCheck) {
            var opt = jq.data("localform") || $.fn.localform.defaults;
            data = data || {};
            _nnflocalform_load2(jq, data, opt.loadFormatters, noCheck);
            jq.find("div.nnf-options").btnopt("load", data);
            opt.custLoad(data);
        },

        clear: function (jq, a, b, c, d, e) {
            var opt = jq.data("localform") || $.fn.localform.defaults;
            if (opt.custClear != false) {
                opt.custClear(function () { jq.form("clear"); jq.find("div.nnf-options").btnopt("clear"); }, a, b, c, d, e);
            } else {
                jq.form("clear");
                jq.find("div.nnf-options").btnopt("clear");
            }
        },

        validate: function (jq) {
            var opt = jq.data("localform") || $.fn.localform.defaults;
            if (!jq.find("div.nnf-options").btnopt("validate")) return false;
            if (!jq.form("validate")) return false;
            if (opt.custValidate() === false) return false;
            return true;
        },

        save: function (jq, data) {
            data = data || {};
            jq.find('.textbox-text:focus').blur();
            var opt = jq.data("localform") || $.fn.localform.defaults;
            _nnflocalform_save(jq, data, opt.saveFormatters);
            jq.find("div.nnf-options").btnopt("save", data);
            opt.custSave(data);
            return data;
        },

        disable: function (jq) {
            var opt = jq.data("localform") || $.fn.localform.defaults;
            jq.find("[class*=easyui]").each(function () {
                var f = $(this);

                var eu = ['textbox', 'combo', 'combobox', 'combotree', 'combogrid', 'numberbox', 'datebox', 'datetimebox', 'datetimespinner', 'calendar', 'spinner', 'numberspinner', 'timespinner', 'slider', 'filebox', 'linkbutton', 'menubutton', 'splitbutton', 'switchbutton'];
                for (var i = 0; i < eu.length; i++) {
                    var txt = eu[i];
                    if (f.hasClass("easyui-" + txt)) {
                        f[txt]("disable");
                        return;
                    }
                }

            });
            if ((window.nnfcfg || {}).MakeTextareaReadonlyWhenDisabled) {
                jq.find(".easyui-textbox").each(function () {
                    var f = $(this);
                    if (f.textbox("options").multiline) {
                        f.textbox("readonly", true);
                        f.textbox("enable");
                        f.data("MakeTextareaReadonlyWhenDisabled", 1);
                    }
                });
            }
        },

        enable: function (jq) {
            var opt = jq.data("localform") || $.fn.localform.defaults;
            jq.find("[class*=easyui]").each(function () {
                var f = $(this);

                var eu = ['textbox', 'combo', 'combobox', 'combotree', 'combogrid', 'numberbox', 'datebox', 'datetimebox', 'datetimespinner', 'calendar', 'spinner', 'numberspinner', 'timespinner', 'slider', 'filebox', 'linkbutton', 'menubutton', 'splitbutton', 'switchbutton'];
                for (var i = 0; i < eu.length; i++) {
                    var txt = eu[i];
                    if (f.hasClass("easyui-" + txt)) {
                        f[txt]("enable");
                        if (txt == "textbox" && f.data("MakeTextareaReadonlyWhenDisabled")) f.textbox("readonly", false);
                        return;
                    }
                }

            });
        }
    };

    function _nnflocalform_save(jq, data, formatters) {
        var processedRadioCheck = {};
        jq.find("[localform]").each(function () {
            var f = $(this);

            var name = f.attr("localform");
            if (!name) {
                alert("无法进行保存，页面中包含localform=\"\"的控件。");
                throw "localformerror";
            }
            //复合名称
            var names = name.split(/\s*,\s*/ig);
            if (names.length > 1) name = names[0];

            var tagName = this.tagName.toLowerCase();
            var type = (this.type || "").toLowerCase();

            var fmt = formatters[name] || function (a) {
                return a;
            };

            if ("label, span".indexOf(tagName) >= 0) {
                data[name] = fmt(f.text());
                return;
            }

            if (tagName == "input" && (type == "check" || type == "radio")) {
                if (processedRadioCheck[name] == true) return;
                processedRadioCheck[name] = true;
                var jqs = jq.find("[localform=" + name + "]");

                if (type == "check") {
                    if (jqs.length > 1) {
                        //复选模式
                        var results = [];
                        jqs.each(function () {
                            var chk = $(this);
                            if (chk.prop("checked")) results.push(chk.val());
                        });
                        data[name] = fmt(results);
                    } else {
                        //是非模式
                        data[name] = fmt(f.prop("checked") ? 1 : 0);
                    }
                } else if (type == "radio") {
                    //单选模式
                    data[name] = fmt(jqs.filter(":checked").val());
                }
                return;
            }

            var done = false;

            $.each(['textbox', 'numberbox', 'slider'], function (i, n) {
                if (f.hasClass("easyui-" + n)) {
                    data[name] = fmt(f[n]('getValue'));
                    done = true;
                    return false;
                }
            });
            if (done) return;

            if (f.hasClass("easyui-switchbutton")) {
                data[name] = fmt(f.prop("checked") ? 1 : 0);
                return;
            }


            $.each(['datetimebox', 'datebox'], function (i, n) {
                if (f.hasClass(n + "-f")) {
                    data[name] = fmt(f[n]('getValue'));
                    done = true;
                    return false;
                }
            });
            if (done) return;


            $.each(['combobox', 'combotree', 'combogrid', 'combo'], function (i, n) {
                if (f.hasClass(n + "-f")) {
                    if (f[n]('options').multiple) {
                        data[name] = fmt(f[n]('getValues'));
                    } else {
                        data[name] = fmt(f[n]('getValue'));
                    }
                    if (names.length == 2) data[names[1]] = f[n]('getText');
                    done = true;
                    return false;
                }
            });
            if (done) return;


            if ("input,textarea,select".indexOf(tagName) >= 0) {
                data[name] = fmt(f.val());
                return;
            }

            alert("unknow localform item: " + name);
        });
    }

    function _nnflocalform_load2(jq, data, formatters, nocheck) {
        var processedRadioCheck = {};
        var unknowLocalForm = [];

        jq.find("[localform]").each(function () {
            var f = $(this);
            var name = f.attr("localform");
            var tagName = this.tagName.toLowerCase();
            var type = (this.type || "").toLowerCase();

            var fmt = formatters[name] || function (a) {
                return a;
            };
            if (!name) return;

            //复合名称
            var names = name.split(/\s*,\s*/ig);
            if (names.length > 1) name = names[0];

            var done = false;

            $.each(names, function (i, n) {
                if (typeof data[n] == "undefined") {
                    unknowLocalForm.push(n);
                    done = true;
                    return false;
                }
            });
            if (done) return;

            var val = fmt(data[name]);

            if ("label, span".indexOf(tagName) >= 0) {
                f.text(val);
                return;
            }

            if (tagName == "input" && (type == "check" || type == "radio")) {
                if (processedRadioCheck[name] == true) return;
                processedRadioCheck[name] = true;
                var jqs = jq.find("[localform=" + name + "]");
                if (type == "check") {
                    if (jqs.length > 1) {
                        //复选模式
                        jqs.each(function () {
                            var chk = $(this);
                            chk.prop('checked', chk.val() == String(val) || $.inArray(chk.val(), $.isArray(val) ? val : [val]) >= 0);
                        });
                    } else {
                        //是非模式
                        f.prop('checked', val == 1 || val == "1" || val == "true");
                    }
                } else if (type == "radio") {
                    //单选模式
                    jqs.each(function () {
                        var chk = $(this);
                        chk.prop('checked', chk.val() == String(val) || $.inArray(chk.val(), $.isArray(val) ? val : [val]) >= 0);
                    });
                }
                return;
            }

            $.each(['textbox', 'numberbox', 'slider'], function (i, n) {
                if (f.hasClass("easyui-" + n)) {
                    f[n]('setValue', val);
                    done = true;
                    return false;
                }
            });
            if (done) return;

            if (f.hasClass("easyui-switchbutton")) {
                var isChecked = val == 1 || val == "1" || val == "true";
                f.switchbutton(isChecked ? "check" : "uncheck");
                return;
            }

            $.each(['datetimebox', 'datebox'], function (i, n) {
                if (f.hasClass(n + "-f")) {
                    f[n]('setValue', val);
                    done = true;
                    return false;
                }
            });
            if (done) return;

            $.each(['combobox', 'combotree', 'combogrid', 'combo'], function (i, n) {
                if (f.hasClass(n + "-f")) {
                    if (f[n]('options').multiple) {
                        f[n]('setValues', val);
                    } else {
                        f[n]('setValue', val);
                    }
                    if (names.length == 2) {
                        var text = data[names[1]];
                        if (text) f[n]('setText', text);
                    }
                    done = true;
                    return false;
                }
            });
            if (done) return;

            if ("input,textarea,select".indexOf(tagName) >= 0) {
                f.val(val);
                return;
            }

            alert("unknow localform item: " + name);

        });
        if (unknowLocalForm.length > 0 && !nocheck) {
            alert("警告，这些localform名称在实体中不存在：\n" + unknowLocalForm.join(", "));
        }
    }

})(jQuery);
(function ($) {
    $.fn.btnopt = function (options, a, b, c, d) {
        if (this.length == 0) return true;
        if (this.length > 1) {
            if (options == "validate") {
                var isFailed = false;
                this.each(function () {
                    if (!$(this).btnopt(options, a, b, c, d)) {
                        isFailed = true;
                        return false;
                    }
                });
                return !isFailed;
            }
            this.each(function () {
                $(this).btnopt(options, a, b, c, d);
            });
            return this;
        }
        if (typeof options == "string") {
            return $.fn.btnopt.methods[options](this, a, b, c, d);
        };
        var me = this;
        if (me[0].tagName != "DIV") {
            var div = $('<div class="nnf-options"></div>').attr({ "data-options": me.attr("data-options") })
                .insertBefore(me);
            if (me[0].id) div.attr("id", me[0].id);
            me.remove();
            me = div;
        }

        var fromDOM = {};
        var dataopt = me.attr("data-options");
        if (dataopt) {
            fromDOM = eval("({" + dataopt + "})");
        }
        options = $.extend({}, fromDOM, options || {});
        options = $.extend({}, $.fn.btnopt.defaults, options);
        me.empty();

        var optNames = options.getoptions();
        window.nnfoptindex = window.nnfoptindex || [];
        nnfoptindex.push(this);
        var group = options.radio ? ("'nnfoptbtn" + nnfoptindex.length + "'") : null;
        $.each(optNames, function (i, n) {
            $('<a class="easyui-linkbutton" data-options="plain:true,toggle:true,group:' + group + ',onClick:nnfOptionsClick" style="min-width:40px;"></a>')
                .attr({ btnidx: i, btnvalue: n.Value })
                .text(n.Text).appendTo(me);
        });
        if (a != false) $.parser.parse(me);
        me.data("btnoptions", options);
    };
    $.fn.btnopt.defaults = {
        required: false,
        radio: false,
        localform: "aaaa",
        options: "选项A,选项B",
        getlocalforms: function () {
            return $.map(this.localform.split(/[,;]/ig), function (n) {
                var n2 = n.split(':');
                return { v: n2[0], t: n2.length > 1 ? n2[1] : '' };
            });
        },
        getoptions: function () {
            var result = [];
            if (typeof (this.options) == "string") {
                $.each(this.options.split(/[,;]/ig), function (i, n) {
                    var n2 = n.split(":");
                    result.push({ Value: (n2.length == 2) ? n2[0] : n, Text: (n2.length == 2) ? n2[1] : n });
                });
            } else {
                $.each(this.options, function (i, n) {
                    if (typeof n == "string") {
                        var n2 = n.split(":");
                        result.push({ Value: (n2.length == 2) ? n2[0] : n, Text: (n2.length == 2) ? n2[1] : n });
                    } else {
                        result.push({ Value: n.Value, Text: n.Text });
                    }
                });
            }
            return result;
        }
    };
    $.fn.btnopt.methods = {
        load: function (jq, data) {
            var options = jq.data("btnoptions");
            var localforms = options.getlocalforms();
            if (localforms.length == 1) {
                var value = data[localforms[0].v];
                if (typeof value == "undefined") {
                    alert("localform值不存在：" + localforms[0].v);
                    throw "";
                }
                var values = ((value == null) ? "" : value.toString()).split(/,/ig);
                jq.find("[btnidx]").each(function () {
                    var btnValue = $(this).attr("btnvalue");
                    if (btnValue && $.inArray(btnValue, values) >= 0) $(this).linkbutton("select");
                });
            } else {
                $.each(localforms, function (i, n) {
                    var value = data[n.v];
                    if (typeof value == "undefined") {
                        alert("localform值不存在：" + n.v);
                        throw "";
                    }
                    var btn = jq.find("[btnidx=" + i + "]");
                    var isChecked = ",true,1,是,真,".indexOf("," + (value || "0").toString() + ",") >= 0;
                    btn.linkbutton(isChecked ? "select" : "unselect");
                });
            }
        },
        save: function (jq, data) {
            var options = jq.data("btnoptions");
            var localforms = options.getlocalforms();
            if (localforms.length == 1) {
                var values = [];
                var texts = [];
                jq.find("[btnidx]").each(function () {
                    if ($(this).linkbutton("options").selected) {
                        values.push($(this).attr("btnvalue"));
                        texts.push($(this).text());
                    }
                });
                data[localforms[0].v] = values.join(",");
                if (localforms[0].t) data[localforms[0].t] = texts.join(", ");
            } else {
                $.each(localforms, function (i, n) {
                    var btn = jq.find("[btnidx=" + i + "]");
                    data[n.v] = btn.linkbutton("options").selected ? "1" : "0";
                });
            }
        },
        clear: function (jq) {
            jq.find("[btnidx]").each(function () {
                $(this).linkbutton("unselect");
            });
        },
        validate: function (jq) {
            var options = jq.data("btnoptions");
            if (!options.required) return true;
            var isGood = false;
            jq.find("[btnidx]").each(function () {
                if ($(this).linkbutton("options").selected) {
                    isGood = true;
                    return false;
                }
            });
            if (!isGood) {
                var name = jq.closest(".nnfEditItem").find("span:first").text();
                alert("校验失败，未设置“" + name + "”");
            }
            return isGood;
        }
    };
})(jQuery);

function nnfOptionsClick() {
    var ctrl = $(this).closest("div.nnf-options");
    var options = ctrl.data("btnoptions");
    if (options.changed) {
        var result = {};
        ctrl.btnopt("save", result);
        options.changed(result);
    }

    //alert(who);
}
function nnfDialogShow(options, callback) {
    options = options || {};
    options.href = options.href || options.src || options.url;

    if (!options.noParent) {
        options.noParent = true;
        var isRelativePath = !/^(http|\/)/ig.test(options.href);
        var initRelative = /^(.*\/)[^\/]*/ig.exec(location.href)[1].toLowerCase();
        var wins = [];
        var win = window;
        while (true) {
            try {
                if (isRelativePath && /^(.*\/)[^\/]*/ig.exec(win.location.href)[1].toLowerCase() != initRelative) break;
                win.document.getElementById("aaa");
                if (win.document.body.tagName != "BODY") break;
            } catch (e) { break; }
            if (!win.nnfDialogShow) break;
            wins.push(win);
            if (!win.parent || win == win.parent) break;
            win = win.parent;
        }
        win = wins[wins.length - 1];
        win.nnfDialogShow.apply(win, [options, callback]);
        return;
    }

    var id = "nnfselectordialog" + new Date().getTime();

    var closedialog = function () {
        jdialog.dialog("close");
        window["_" + id] = null;
    };

    window["_" + id] = {
        getInitValue: function () { return options.data; },
        closeDialog: function (data) {
            if (typeof data != "undefined") {
                if (typeof callback == "function") {
                    if (callback(data) === false) return;
                } //else alert(data);
            }
            closedialog();
        }
    };

    var jdialog = $("<div id='" + id + "' class='nnfselectordialog' style='overflow:hidden;'><iframe frameborder='0' width='100%' height='100%' src='about:blank'></iframe></div>").appendTo(document.body);
    var dialog = {
        height: 380, width: 650, title: '对话框', modal: true, draggable: false,
        buttons: [
            {
                text: '确定', width: 70, iconCls: 'icon-ok',
                handler: function () {
                    var getter = window["_" + id].getValue;
                    if (typeof getter == "function") {
                        var value = getter();
                        if (value === false) return;
                        if (typeof callback == "function") {
                            if (callback(value) === false) return;
                        } //else alert(value);
                        closedialog();
                    } else {
                        alert("选择器页面未加载成功");
                    }
                }
            },
            { text: '取消', width: 70, handler: function () { closedialog(); } }
        ],
        onOpenNNF: function () {
            jdialog.find("iframe").attr("src", options.href + ((options.href.indexOf('?') >= 0) ? "&" : "?") + "dialogid=_" + id);
        },
        onCloseNNF: function () { setTimeout(function () { $("#" + id).dialog("destroy"); }, 500); }
    };

    if (options.buttons && options.buttons.length > 0) {
        for (var i = 0; i < options.buttons.length; i++) {
            if (options.buttons[i] == "a") options.buttons[i] = dialog.buttons[0];
            else if (options.buttons[i] == "b") options.buttons[i] = dialog.buttons[1];
            else {
                options.buttons[i].width = 70;
                hijackMethod(options.buttons[i], "handler", function (old, a, b, c) {
                    if (old) old(window["_" + id].win, a, b, c);
                    return false;
                });
            }
        }
    }
    $.extend(dialog, options);

    {
        var wHeight = $(window).height();
        if (dialog.height > wHeight) dialog.height = wHeight;
    }

    $.extend(dialog, { href: null, width: nnfIsMobile ? null : dialog.width });
    jdialog.dialog(dialog);
}

$(function () {
    var mDialogId = window.urlQuery && window.urlQuery["dialogid"];
    if (!mDialogId) return;
    var obj = parent[mDialogId];
    if (typeof initSelector == "function") {
        initSelector(obj.getInitValue());
    } else if (typeof initDialog == "function") {
        initDialog(obj.getInitValue());
    }
    //window.closeDialog = obj.closeDialog;
    obj.win = window;
    obj.getValue = function () {
        if (typeof getValue != "function") {
            alert("页面上需要定义方法getValue");
            throw "";
        }
        return getValue();
    };
});