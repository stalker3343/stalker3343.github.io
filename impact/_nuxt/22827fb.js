(window.webpackJsonp=window.webpackJsonp||[]).push([[199,49],{1206:function(e,t,r){"use strict";r(978)},1207:function(e,t,r){var n=r(10)(!1);n.push([e.i,".leadmagnit-page[data-v-b1f1d836]{padding:150px 0 200px;display:flex;align-items:center;justify-content:center}@media (max-width:575px){.leadmagnit-page[data-v-b1f1d836]{padding:30px 0 50px;background:#f6f9ff}}.page-wrapper[data-v-b1f1d836]{display:flex;align-items:center;justify-content:space-between}@media (max-width:790px){.page-wrapper[data-v-b1f1d836]{flex-direction:column}}.leadmagnit__img[data-v-b1f1d836]{width:48%}.leadmagnit__img img[data-v-b1f1d836]{width:100%}@media (max-width:790px){.leadmagnit__img[data-v-b1f1d836]{display:none}}.boxer[data-v-b1f1d836]{padding:0;width:48%;background:none}.boxer[data-v-b1f1d836]  .subscribe-form__wrapper{padding:0;box-shadow:none;background:none}@media (max-width:790px){.boxer[data-v-b1f1d836]{width:100%;background:none}}@media (max-width:575px){.boxer[data-v-b1f1d836]{background:none}}",""]),e.exports=n},1364:function(e,t,r){"use strict";r.r(t);r(7),r(13),r(15),r(16),r(17);var n=r(6),o=r(12),c=r(8);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}new o.a("/api/v1.0/client/leadmagnit");var f={asyncData:function(e){e.$axios,e.params.slug;return{pageContent:{title:"leadmagnit-reglament-title",subtitle:"leadmagnit-reglament-subtitle",image:"https://thumb.tildacdn.com/tild3164-3131-4265-b362-343237656164/-/format/webp/Notebook-2-2.png",button:"leadmagnit-reglament-button",file:{}}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.d)("layout",["backendServer"])),methods:{onSubscribe:function(){window.open(this.backendServer+"/file-1614337502437.pdf","_blank")}}},l=(r(1206),r(4)),component=Object(l.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"leadmagnit-page"},[r("div",{staticClass:"container"},[r("div",{staticClass:"page-wrapper"},[r("boxer",{staticClass:"boxer",attrs:{title:e.__locale(e.pageContent.title),subtitle:e.__locale(e.pageContent.subtitle)}},[r("form-subscribe",{attrs:{"btn-text":e.pageContent.button,topic:"reglament"},on:{success:e.onSubscribe}})],1),e._v(" "),r("div",{staticClass:"leadmagnit__img"},[r("img",{attrs:{src:e.pageContent.image,alt:""}})])],1)])])}),[],!1,null,"b1f1d836",null);t.default=component.exports;installComponents(component,{FormSubscribe:r(169).default,Boxer:r(566).default})},562:function(e,t,r){var content=r(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("60879304",content,!0,{sourceMap:!1})},564:function(e,t,r){"use strict";r(562)},565:function(e,t,r){var n=r(10)(!1);n.push([e.i,".component__boxer{padding:60px 100px;background:#fff;background:linear-gradient(180deg,#fff,#fff 20%,#f6f9ff 0,#f6f9ff 80%,#fff 0,#fff)}@media (max-width:790px){.component__boxer{padding:0 30px}}@media (max-width:575px){.component__boxer{background:#f6f9ff;padding:0 20px;margin-bottom:0}}.component__boxer .subscribe-form__wrapper{background-image:url(./images/subscribe-background.svg);background-size:cover;background-repeat:repeat;box-shadow:0 16px 40px rgba(28,74,115,.23);border-radius:20px;padding:100px 40px;background-color:#fff}@media (max-width:790px){.component__boxer .subscribe-form__wrapper{padding:60px 40px}}@media (max-width:575px){.component__boxer .subscribe-form__wrapper{padding:70px 0;background-image:none;box-shadow:none;background-color:transparent;background-color:initial}}.component__boxer .subscribe-form__wrapper .subscribe-form{max-width:600px;width:100%;left:0;right:0;margin:auto;display:flex;flex-direction:column;justify-content:center;align-items:center}.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-title{font-weight:800;font-size:32px;line-height:42px;margin-bottom:12px;text-align:center}@media (max-width:1280px){.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-title{font-size:28px}}@media (max-width:575px){.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-title{font-size:26px;line-height:34px}}.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-text{font-weight:400;font-size:16px;line-height:26px;opacity:.8;text-align:center;margin-bottom:40px}@media (max-width:575px){.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-text{font-size:16px;line-height:26px}}.component__boxer .subscribe-form__wrapper .subscribe-form .form-wrapper{max-width:450px;width:100%}.component__boxer .subscribe-form__wrapper .subscribe-form .app-input{width:100%}@media (max-width:575px){.component__boxer .subscribe-form__wrapper .subscribe-form .app-input,.component__boxer .subscribe-form__wrapper .subscribe-form .app-input input{background-color:#fff}}",""]),e.exports=n},566:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:null},subtitle:{type:String,default:null}},data:function(){return{}}},o=(r(564),r(4)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"component__boxer"},[r("client-only",[r("div",{staticClass:"subscribe-form__wrapper"},[r("div",{staticClass:"subscribe-form"},[r("div",{staticClass:"subscribe-title"},[e._v("\n          "+e._s(e.title)+"\n        ")]),e._v(" "),e.subtitle?r("div",{staticClass:"subscribe-text"},[e._v("\n          "+e._s(e.subtitle)+"\n        ")]):e._e(),e._v(" "),e._t("default")],2)])])],1)}),[],!1,null,null,null);t.default=component.exports},978:function(e,t,r){var content=r(1207);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("4a5ca6bf",content,!0,{sourceMap:!1})}}]);