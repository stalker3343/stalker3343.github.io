(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1182:function(t,o,e){"use strict";e(962)},1183:function(t,o,e){var n=e(10)(!1);n.push([t.i,".component__play{z-index:9;position:absolute;top:0;bottom:0;right:0;margin:100px 20% auto auto;display:flex;flex-direction:column;justify-content:center;align-items:center}@media (max-width:1100px){.component__play{margin-right:50px}}@media (max-width:950px){.component__play{left:0;right:0;margin:auto;bottom:70px;top:auto;width:220px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.component__play .pulse{width:32px!important;height:32px!important}.component__play .pulse i{font-size:12px!important;margin-left:2px!important}.component__play span{margin-top:0!important;margin-left:11px}}@media (max-width:790px){.component__play{bottom:70px}}@media (max-width:840px){.component__play{bottom:116px}}@media (max-width:575px){.component__play{bottom:140px}}.component__play .pulse{display:block;width:64px;height:64px;border-radius:50%;background:#fff;border:2px solid #fff;cursor:pointer;box-shadow:0 0 0 hsla(0,0%,100%,.4);-webkit-animation:pulse 2s infinite;animation:pulse 2s infinite;display:flex;flex-direction:column;justify-content:center;align-items:center}.component__play .pulse i{color:#44a1a4;font-size:18px;margin-left:5px}.component__play span{white-space:nowrap;color:#fff;font-size:14px;line-height:24px;margin-top:20px;display:block}.pulse:hover{-webkit-animation:none;animation:none}",""]),t.exports=n},1354:function(t,o,e){"use strict";e.r(o);var n={props:{youtube:{type:String,default:""}},methods:{openVideo:function(){this.gDialog.title=this.__locale("video-for-investors"),this.gDialog.component="VideoPlayer";var t="ru"===this.language?"54azSddZg2Y":"ZJ2LH_yNcy8";this.youtube&&(t=this.youtube),this.gDialog.options={videoId:t},this.gDialogShown=!0}}},l=(e(1182),e(4)),component=Object(l.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"component__play",on:{click:function(o){return t.openVideo()}}},[t._m(0),t._v(" "),e("span",[t._v(t._s(t.__locale("video-for-investors")))])])}),[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"pulse"},[o("i",{staticClass:"fas fa-play"})])}],!1,null,null,null);o.default=component.exports},962:function(t,o,e){var content=e(1183);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("43f8ad8c",content,!0,{sourceMap:!1})}}]);