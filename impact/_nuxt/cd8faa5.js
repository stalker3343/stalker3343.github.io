(window.webpackJsonp=window.webpackJsonp||[]).push([[153,147],{1112:function(t,n,o){"use strict";o(917)},1113:function(t,n,o){var e=o(10)(!1);e.push([t.i,".smart-download{background:#262f50}.smart-download__wrapper{padding:80px 0;display:flex;align-items:center;justify-content:space-between}@media (max-width:1600px){.smart-download__wrapper{flex-direction:column;padding:60px 0}}.smart-download__title{max-width:600px;font-size:32px;color:#fff;font-weight:400;line-height:40px}@media (max-width:1600px){.smart-download__title{text-align:center}}@media (max-width:480px){.smart-download__title{font-size:26px;line-height:35px}}.smart-download__button{width:440px}@media (max-width:1600px){.smart-download__button{margin-top:30px}}@media (max-width:480px){.smart-download__button{width:280px}}",""]),t.exports=e},1237:function(t,n,o){"use strict";o.r(n);var e={name:"SmartDownload",components:{SmartButton:o(569).default},methods:{onSubscribe:function(){window.open("/files/invest-projects.pdf","_blank")},openForm:function(){this.gDialog.title="Скачать список проектов",this.gDialog.component="FormSubscribe",this.gDialogShown=!0}}},r=(o(1112),o(4)),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",{staticClass:"smart-download"},[o("div",{staticClass:"container-smart"},[o("div",{staticClass:"smart-download__wrapper"},[o("h2",{staticClass:"smart-download__title"},[t._v("\n        Скачать список открытых проектов для привлечения инвестиций\n      ")]),t._v(" "),o("smart-button",{staticClass:"smart-download__button",attrs:{title:"Скачать список проектов"},on:{click:function(n){return t.openForm()}}})],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{SmartButton:o(569).default})},569:function(t,n,o){"use strict";o.r(n);var e={name:"SmartButton",props:{title:{type:String,default:function(){return""}},img:{type:String,default:function(){return""}}}},r=(o(596),o(4)),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("button",{staticClass:"smart-button",on:{click:function(n){return t.$emit("click")}}},[o("p",{staticClass:"smart-button__title"},[t._v(t._s(t.title))]),t._v(" "),t.img.length?o("img",{staticClass:"smart-button__image",attrs:{src:t.img,alt:""}}):t._e()])}),[],!1,null,null,null);n.default=component.exports},576:function(t,n,o){var content=o(597);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("5790b339",content,!0,{sourceMap:!1})},596:function(t,n,o){"use strict";o(576)},597:function(t,n,o){var e=o(10)(!1);e.push([t.i,".smart-button{background-color:#44a1a4;outline:none;border:none;display:flex;align-items:center;justify-content:center;padding:15px 40px;height:53px;cursor:pointer;transition:all .15s ease-in-out}@media (max-width:575px){.smart-button{padding:12px 20px;font-size:14px}}.smart-button:hover{opacity:.8}.smart-button:active{opacity:.5}.smart-button__title{margin:0;font-size:16px;font-weight:600;color:#fff}.smart-button__image{margin-left:15px;width:25px}",""]),t.exports=e},917:function(t,n,o){var content=o(1113);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("e6eb438e",content,!0,{sourceMap:!1})}}]);