(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{610:function(e,t,n){var content=n(671);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(11).default)("755f1638",content,!0,{sourceMap:!1})},670:function(e,t,n){"use strict";n(610)},671:function(e,t,n){var r=n(10)(!1);r.push([e.i,".component__file-cards{margin-top:20px;width:100%}.component__file-cards .file-card{cursor:pointer;padding:10px;border-radius:10px;border:1px solid #f2f2f2;margin-bottom:15px;box-shadow:0 0 10px #f2f2f2;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%}.component__file-cards .file-card .icon{width:50px;height:50px;border-radius:10px;background-color:#f2f2f2;color:#44a1a4;font-size:20px;margin-right:15px;display:flex;flex-direction:row;justify-content:center;align-items:center}.component__file-cards .file-card .name{width:calc(100% - 85px)}.component__file-cards .file-card .name .name-inner{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%}.component__file-cards .file-card .name span{color:#818c99;font-size:80%}.component__file-cards .file-card .chevron{text-align:center;width:20px;color:#818c99}",""]),e.exports=r},818:function(e,t,n){"use strict";n.r(t);n(7),n(13),n(15),n(16),n(17);var r=n(6),o=n(8);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={props:{server:{type:String,default:null},items:{type:Array,default:function(){return[{url:null,mimetype:null,type:null,name:null}]}}},computed:l(l({},Object(o.d)("common",["fileTypes"])),Object(o.d)("layout",["backendServer"])),methods:{openFile:function(e,t){window.open((this.server||this.backendServer)+"/"+e,"_blank")}}},d=(n(670),n(4)),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component__file-cards"},e._l(e.items,(function(t,r){return n("div",{key:r,staticClass:"file-card",on:{click:function(n){return e.openFile(t.url,t.mimetype)}}},[n("div",{staticClass:"icon"},[n("i",{class:e.fileTypes[t.type]||e.fileTypes.OTHER})]),e._v(" "),n("div",{staticClass:"name"},[n("div",{staticClass:"name-inner"},[e._v("\n        "+e._s(e.__locale(t.name||"open-file"))+"\n      ")]),e._v(" "),n("span",[e._v(e._s(e.__locale("click-to-download"))+" "+e._s(t.type))])]),e._v(" "),e._m(0,!0)])})),0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"chevron"},[t("i",{staticClass:"fal fa-chevron-right"})])}],!1,null,null,null);t.default=component.exports}}]);