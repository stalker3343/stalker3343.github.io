(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1208:function(e,t,o){"use strict";o(979)},1209:function(e,t,o){var d=o(10)(!1);d.push([e.i,".component__modius-header{margin-bottom:20px}@media (max-width:900px){.component__modius-header{margin-bottom:40px}}@media (max-width:500px){.component__modius-header{margin-bottom:20px}}.component__modius-header .modius-header__image-wrapper{padding:32px;width:100%;height:450px;color:#fff;background-position:top;background-size:cover;background-repeat:no-repeat;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}@media (max-width:900px){.component__modius-header .modius-header__image-wrapper{height:350px;padding:20px}}@media (max-width:500px){.component__modius-header .modius-header__image-wrapper{padding:15px;height:250px}}.component__modius-header .modius-header__image-wrapper.hide-image{height:auto;padding:0;color:#525a64;background-image:none!important}.component__modius-header .modius-header__image-wrapper.hide-image .modius-header__top{display:none}.component__modius-header .modius-header__image-wrapper .modius-header__top{font-style:normal;font-weight:600;font-size:20px;line-height:155%;width:100%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:900px){.component__modius-header .modius-header__image-wrapper .modius-header__top *{font-size:17px!important;line-height:120%!important}}.component__modius-header .modius-header__image-wrapper .modius-header__top .dot{margin:0 7px;display:block}.component__modius-header .modius-header__image-wrapper .modius-header__top .category{font-style:normal;font-weight:600;font-size:20px;line-height:155%;color:#fff}.component__modius-header .modius-header__image-wrapper .modius-header__bottom{width:100%}.component__modius-header .modius-header__image-wrapper .modius-header__bottom h1{width:80%;font-style:normal;font-weight:700;font-size:40px;line-height:135%}@media (max-width:900px){.component__modius-header .modius-header__image-wrapper .modius-header__bottom h1{width:100%;font-size:30px;line-height:100%}}@media (max-width:500px){.component__modius-header .modius-header__image-wrapper .modius-header__bottom h1{font-size:20px}}.component__modius-header .modius-header__image-wrapper .modius-header__bottom h2{margin-top:20px;width:70%;font-style:normal;font-weight:500;font-size:28px;line-height:155%;text-overflow:ellipsis;max-height:86px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (max-width:900px){.component__modius-header .modius-header__image-wrapper .modius-header__bottom h2{width:100%;font-size:20px;line-height:130%;margin-top:10px;font-size:17px;line-height:110%}}",""]),e.exports=d},1365:function(e,t,o){"use strict";o.r(t);var d={props:{urlPrefix:{type:String,default:"feed"},data:{type:Object,default:function(){return{}}},hideImage:{type:Boolean,default:function(){return!0}}}},r=(o(1208),o(4)),component=Object(r.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"component__modius-header"},[o("div",{staticClass:"container"},[o("div",{staticClass:"modius-header__image-wrapper",class:e.hideImage?"hide-image":"",style:"background-image: linear-gradient(rgb(82 90 101/70%) 0%, rgb(82 90 101/0) 20%, rgb(82 90 101/10%) 40%, rgb(82 90 101/20%) 55%, rgba(82 90 101/30%) 60%, rgba(82 90 101/64%) 100%), url("+e.gBackendServer+"/"+e.data.image+");"},[o("div",{staticClass:"modius-header__top"},[o("div",{staticClass:"date"},[e._v("\n          "+e._s(e.__renderDateToText(e.data.date))+"\n        ")]),e._v(" "),o("span",{staticClass:"dot"},[e._v("•")]),e._v(" "),o("nuxt-link",{staticClass:"category",attrs:{to:"/"+e.language+"/"+e.urlPrefix+"/"+(e.data.categories&&e.data.categories[0]&&e.gCategoriesObj?e.gCategoriesObj[e.data.categories[0]]:"news")}},[e._v("\n          "+e._s(e.__locale(e.data.categories&&e.data.categories[0]&&e.gCategoriesObj?e.gCategoriesObj[e.data.categories[0]]:"news"))+"\n        ")])],1),e._v(" "),o("div",{staticClass:"modius-header__bottom"},[o("h1",[e._v(e._s(e.data.title))])])])])])}),[],!1,null,null,null);t.default=component.exports},979:function(e,t,o){var content=o(1209);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(11).default)("5fd5b08a",content,!0,{sourceMap:!1})}}]);