(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{650:function(e,t,n){var content=n(935);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(11).default)("64bfbeae",content,!0,{sourceMap:!1})},934:function(e,t,n){"use strict";n(650)},935:function(e,t,n){var r=n(10)(!1);r.push([e.i,".event-list{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:20px}@media (max-width:1280px){.event-list{grid-template-columns:repeat(2,1fr)}}@media (max-width:792px){.event-list{grid-template-columns:1fr}}.event-list__wrapper{border-radius:10px;overflow:hidden;cursor:pointer;border:1px solid #f2f2f2;display:block;transition:all .35s ease-in-out}.event-list__wrapper:hover{box-shadow:0 5px 40px rgba(82,90,101,.2)}.event-list__wrapper:hover .event-list__banner .event-list__image{transform:scale(1.01)}.event-list__banner{position:relative;overflow:hidden;width:100%;height:190px}.event-list__image{transition:all .5s ease-in-out;position:absolute;height:100%;width:100%;background-size:cover;background-repeat:no-repeat;background-position:50%}.event-list__content{color:#525a64;background-color:#fff;padding:16px 22px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.event-list__title{font-weight:700;font-size:20px;line-height:30px;margin-bottom:12px;height:60px;-webkit-line-clamp:2}.event-list__text,.event-list__title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.event-list__text{font-weight:400;font-size:14px;line-height:28px;margin-bottom:16px;height:190px;width:100%;-webkit-line-clamp:7}.event-list__text p{margin-bottom:0}.event-list__link{color:#44a1a4}.event-list__footer{width:100%;color:#525a64;background-color:#fff;padding:10px 22px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.event-list__footer .feed__fast-check{width:40px;height:40px;border-radius:50%;cursor:pointer;display:flex;flex-direction:row;justify-content:center;align-items:center;transition:all .5s ease-in-out}.event-list__footer .feed__fast-check:hover{color:#44a1a4;background-color:#f2f2f2}.event-list__date{font-size:14px;line-height:20px;color:#818c99}",""]),e.exports=r},994:function(e,t,n){"use strict";n.r(t);n(7),n(13),n(15),n(16),n(17);var r=n(6),o=n(8);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c={name:"EventList",props:{items:{type:Array,required:!0}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.d)("localization",["language"])),methods:{openEvent:function(e){this.$router.push({path:"/".concat(this.language,"/feed/").concat(e)})}}},d=(n(934),n(4)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"event-list"},e._l(e.items,(function(t){return n("li",{key:t.id},[n("div",{staticClass:"event-list__wrapper"},[n("nuxt-link",{attrs:{to:"/"+e.language+"/club/events/"+t.id+"/projects/"}},[n("div",{staticClass:"event-list__banner"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"https:"+t.timepadEvent.poster_image.uploadcare_url,expression:"'https:' + item.timepadEvent.poster_image.uploadcare_url",arg:"background-image"}],staticClass:"image event-list__image"})]),e._v(" "),n("div",{staticClass:"event-list__content"},[n("div",{staticClass:"event-list__title"},[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),n("div",{staticClass:"event-list__text"},[e._v("\n            "+e._s(t.descriptionShort)+"\n          ")]),e._v(" "),n("div",{staticClass:"event-list__link"},[n("div",{on:{click:function(n){return e.openFeed(t.id)}}},[n("span",[e._v(e._s(e.__locale("show-full")))]),e._v(" "),n("i",{staticClass:"fal fa-long-arrow-right"})])])])]),e._v(" "),n("div",{staticClass:"event-list__footer"},[n("div",{staticClass:"event-list__date"},[e._v("\n          "+e._s(e._f("filterDate")(t.startAt,"dd.mm.yyyy"))+"\n        ")])])],1)])})),0)}),[],!1,null,null,null);t.default=component.exports}}]);