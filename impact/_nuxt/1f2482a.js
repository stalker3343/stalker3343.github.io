(window.webpackJsonp=window.webpackJsonp||[]).push([[188,27,58],{1166:function(t,e,r){"use strict";r(952)},1167:function(t,e,r){var n=r(10)(!1);n.push([t.i,".club-projects{padding-bottom:178px}.club-projects__label{font-size:18px;color:#818c99;margin-bottom:60px;display:block}",""]),t.exports=n},1346:function(t,e,r){"use strict";r.r(e);r(7),r(13),r(15),r(16),r(17);var n=r(3),o=r(6),l=(r(14),r(8));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _={name:"ClubProjects",components:{ProjectList:r(995).default},data:function(){return{eventId:this.$route.params.eventId}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.d)("club",["event","projects"])),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("club/GET_EVENT",{eventId:t.eventId});case 2:case"end":return e.stop()}}),e)})))()},created:function(){var t=0;0===t&&(this.onGetProjects(),t++);var e=setInterval(this.onGetProjects,5e3);this.$on("hook:beforeDestroy",(function(){return clearInterval(e)}))},methods:{onGetProjects:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("club/GET_PROJECTS",{eventId:t.eventId});case 2:case"end":return e.stop()}}),e)})))()}}},d=(r(1166),r(4)),component=Object(d.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"club-projects"},[r("div",{staticClass:"container"},[r("app-title",{attrs:{title:t.event.name}}),t._v(" "),r("span",{staticClass:"club-projects__label"},[t._v("Проекты мероприятия")]),t._v(" "),r("project-list",{attrs:{items:t.projects}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:r(558).default})},557:function(t,e,r){var content=r(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,r){"use strict";r.r(e);r(7),r(13),r(15),r(16),r(17);var n=r(6),o=r(8);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},_=(r(559),r(4)),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component__title"},[r("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?r("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[r("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),r("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),r("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,r){"use strict";r(557)},560:function(t,e,r){var n=r(10)(!1);n.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=n},651:function(t,e,r){var content=r(951);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("d065462a",content,!0,{sourceMap:!1})},950:function(t,e,r){"use strict";r(651)},951:function(t,e,r){var n=r(10)(!1);n.push([t.i,".project-list{display:grid;grid-template-columns:1fr;grid-gap:40px}.project-list__wrapper{display:grid;grid-template-columns:130px 1fr;box-shadow:0 20px 64px rgba(18,21,22,.1);border-radius:20px;cursor:pointer}@media (max-width:650px){.project-list__wrapper{grid-template-columns:1fr}}.project-list__banner{position:relative;overflow:hidden;width:100%;height:100%;border-radius:20px 0 0 20px}@media (max-width:650px){.project-list__banner{height:100px;border-radius:20px 20px 0 0}}.project-list__image{transition:all .5s ease-in-out;position:absolute;height:100%;width:100%;background-size:cover;background-repeat:no-repeat;background-position:50%}.project-list__content{padding:23px 25px;background:#fff;border-radius:0 20px 20px 0}@media (max-width:650px){.project-list__content{border-radius:0 0 20px 20px}}.project-list__information{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:20px}@media (max-width:992px){.project-list__information{grid-template-columns:1fr;text-align:center}}.project-list__block{text-align:right}@media (max-width:992px){.project-list__block{text-align:center}}.project-list__title{font-size:24px;font-weight:700;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;word-wrap:break-word}.project-list__spheres{display:flex;align-items:center;flex-wrap:wrap;margin-top:4px}@media (max-width:992px){.project-list__spheres{justify-content:center}}.project-list__description{font-size:18px;font-weight:500;margin-right:5px}.project-list__description:last-child{margin-right:0}@media (max-width:575px){.project-list__description{font-size:16px}}.project-list__label{font-size:20px;font-weight:300;color:#6f6f6f}@media (max-width:575px){.project-list__label{font-size:16px}}.project-list__vote{display:flex;align-items:center;justify-content:flex-end;margin-top:5px}@media (max-width:992px){.project-list__vote{justify-content:center}}.project-list__vote-text{font-weight:700;font-size:24px;color:#000;margin:0 4px 0 0}.project-list__vote-text:last-child{margin-right:0}.project-list__vote-text_primary{color:#44a1a4}@media (max-width:575px){.project-list__vote-text{font-size:16px}}.project-list__progress{margin-top:15px}.project-list__progress .app-progress__wrapper{background:#c4c4c4;height:10px}.project-list__progress .app-progress__inner{border-radius:50px}",""]),t.exports=n},952:function(t,e,r){var content=r(1167);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("c84e6d60",content,!0,{sourceMap:!1})},995:function(t,e,r){"use strict";r.r(e);var n={name:"ProjectList",props:{items:{type:Array,required:!0}}},o=(r(950),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"project-list"},t._l(t.items,(function(e){return r("li",{key:e.id},[r("div",{staticClass:"project-list__wrapper"},[r("div",{staticClass:"project-list__banner"},[r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.image,expression:"item.image",arg:"background-image"}],staticClass:"project-list__image"})]),t._v(" "),r("div",{staticClass:"project-list__content"},[r("div",{staticClass:"project-list__information"},[r("div",[r("h3",{staticClass:"project-list__title"},[t._v(t._s(e.name))]),t._v(" "),r("ul",{staticClass:"project-list__spheres"},t._l(e.spheres,(function(e){return r("li",{key:e.id,staticClass:"project-list__description"},[t._v("\n                "+t._s(e.name)+"\n              ")])})),0)]),t._v(" "),r("div",{staticClass:"project-list__block"},[r("span",{staticClass:"project-list__label"},[t._v("Собрано заявок")]),t._v(" "),r("div",{staticClass:"project-list__vote"},[r("p",{staticClass:"project-list__vote-text project-list__vote-text_primary"},[t._v("\n                "+t._s(t._f("newFilterNum")(e.voteAmounts,{decimal:!1}))+"\n                "+t._s(e.currency.symbol)+"\n              ")]),t._v(" "),r("p",{staticClass:"project-list__vote-text"},[t._v("\n                / "+t._s(t._f("newFilterNum")(e.totalInvestment,{decimal:!1}))+"\n                "+t._s(e.currency.symbol)+"\n              ")])])])]),t._v(" "),r("app-progress",{staticClass:"project-list__progress",attrs:{progress:parseInt(e.voteAmounts)/parseInt(e.totalInvestment)*100}})],1)])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);