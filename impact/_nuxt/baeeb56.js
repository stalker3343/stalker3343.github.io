(window.webpackJsonp=window.webpackJsonp||[]).push([[218,27,29,30,181],{1327:function(t,e,r){"use strict";r.r(e);r(7),r(13),r(15),r(16),r(17);var n=r(6),o=r(3),l=(r(14),r(8));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("asset/GET_CLOSED_ASSETS");case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.d)("asset",["assetsClosed"]))},f=r(4),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page__asset-closed"},[r("div",{staticClass:"container"},[r("app-title",{attrs:{title:t.__locale("closed-assets-title"),"title-tag":"div"}}),t._v(" "),r("div",{staticClass:"hint"},[t._v(t._s(t.__locale("closed-assets-subtitle")))]),t._v(" "),r("asset-cards",{attrs:{items:t.assetsClosed,"show-parameters":""}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:r(558).default,AssetCards:r(814).default})},1496:function(t,e,r){"use strict";r.r(e);var n=r(1327).default,o=r(4),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},557:function(t,e,r){var content=r(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,r){"use strict";r.r(e);r(7),r(13),r(15),r(16),r(17);var n=r(6),o=r(8);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},d=(r(559),r(4)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component__title"},[r("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?r("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[r("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),r("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),r("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,r){"use strict";r(557)},560:function(t,e,r){var n=r(10)(!1);n.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=n},586:function(t,e,r){var content=r(621);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("364a506b",content,!0,{sourceMap:!1})},602:function(t,e,r){var content=r(665);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("ece71e78",content,!0,{sourceMap:!1})},620:function(t,e,r){"use strict";r(586)},621:function(t,e,r){var n=r(10)(!1);n.push([t.i,".asset-card[data-v-3a8cd5f6]{overflow:hidden;background-color:#fff;border-radius:10px;box-shadow:0 5px 20px rgba(0,0,0,.1);display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;cursor:pointer}.asset-card .asset-image[data-v-3a8cd5f6]{width:100%;height:200px;background-position:50%;background-size:cover;background-repeat:no-repeat;margin-bottom:15px}@media (max-width:1100px){.asset-card .asset-image[data-v-3a8cd5f6]{height:150px}}@media (max-width:575px){.asset-card .asset-image[data-v-3a8cd5f6]{background-position:top}}.asset-card .asset-footer[data-v-3a8cd5f6]{padding:12px 16px}.asset-card .asset-footer .asset-content[data-v-3a8cd5f6]{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.asset-card .asset-footer .asset-content .asset-logo[data-v-3a8cd5f6]{width:40px;height:40px;display:block;border-radius:50%;overflow:hidden;margin-right:12px;background-position:50%;background-size:cover;background-repeat:no-repeat}.asset-card .asset-footer .asset-content .asset-title[data-v-3a8cd5f6]{width:calc(100% - 52px);font-weight:700;font-size:15px;line-height:18px;margin-bottom:8px}.asset-card .asset-footer .asset-parameters[data-v-3a8cd5f6]{margin-top:20px;display:grid;grid-gap:20px;gap:20px;grid-template-columns:1fr 1fr}.asset-card .asset-footer .asset-parameters .parameter .parameter-value[data-v-3a8cd5f6]{white-space:nowrap;font-size:14px;line-height:18px;margin-bottom:2px}.asset-card .asset-footer .asset-parameters .parameter .parameter-label[data-v-3a8cd5f6]{white-space:nowrap;color:#818c99;font-size:10px;line-height:16px}",""]),t.exports=n},657:function(t,e,r){"use strict";r.r(e);r(7),r(13),r(15),r(16),r(17);var n=r(6),o=r(8);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:{item:{type:Object,required:!0},showParameters:{type:Boolean,default:function(){return!1}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("localization",["language"]))},d=(r(620),r(4)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"asset-card",attrs:{tag:"div",to:"/"+t.language+"/asset/"+t.item.slug}},[r("div",{staticClass:"asset-image",style:"background-image: url('"+t.gBackendServer+"/preview_600_"+t.item.image+"')"}),t._v(" "),r("div",{staticClass:"asset-footer"},[r("div",{staticClass:"asset-content"},[r("div",{staticClass:"asset-logo",style:"background-image: url('"+t.gBackendServer+"/"+t.item.logo+"')"}),t._v(" "),r("div",{staticClass:"asset-title"},[t._v("\n        "+t._s(t.item.title)+"\n      ")])]),t._v(" "),t.item.parameters&&t.item.parameters.length>=1?r("div",{staticClass:"asset-parameters"},t._l(t.item.parameters.slice(0,2),(function(param,e){return r("div",{key:e,staticClass:"parameter"},[r("div",{staticClass:"parameter-value"},[t._v("\n          "+t._s(t._f("filterNum")(param.value))+"\n          "),t._v(" "),r("span",{domProps:{innerHTML:t._s(t.__getUnit(param.unit))}})]),t._v(" "),r("div",{staticClass:"parameter-label"},[t._v("\n          "+t._s(t.__locale(param.label))+"\n        ")])])})),0):r("div",{staticClass:"asset-parameters"},[r("div",{staticClass:"parameter"},[r("div",{staticClass:"parameter-value"},[t._v("\n          "+t._s(t._f("filterNum")(t.item.stockPrice))+"\n          "),t._v(" "),r("span",{domProps:{innerHTML:t._s(t.__getUnit(t.item.stockCurrency))}})]),t._v(" "),r("div",{staticClass:"parameter-label"},[t._v("\n          "+t._s(t.__locale("asset-price"))+"\n        ")])]),t._v(" "),"PRIVATE"===t.item.type?r("div",{staticClass:"parameter"},[r("div",{staticClass:"parameter-value"},[t._v(t._s(t.item.stockPercentage)+"%")]),t._v(" "),r("div",{staticClass:"parameter-label"},[t._v("\n          "+t._s(t.__locale("ic-share"))+"\n        ")])]):t._e()])])])}),[],!1,null,"3a8cd5f6",null);e.default=component.exports},664:function(t,e,r){"use strict";r(602)},665:function(t,e,r){var n=r(10)(!1);n.push([t.i,".component__asset-cards{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:20px;gap:20px}@media (max-width:1100px){.component__asset-cards{grid-template-columns:1fr 1fr}}@media (max-width:575px){.component__asset-cards{grid-template-columns:1fr}}",""]),t.exports=n},814:function(t,e,r){"use strict";r.r(e);r(7),r(13),r(15),r(16),r(17);var n=r(6),o=r(8);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:{showParameters:{type:Boolean,default:function(){return!1}},items:{type:Array,default:function(){return[]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("localization",["language"]))},d=(r(664),r(4)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component__asset-cards"},t._l(t.items,(function(e,n){return r("asset-card",{key:n,attrs:{item:e,"show-parameters":t.showParameters}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AssetCard:r(657).default})}}]);