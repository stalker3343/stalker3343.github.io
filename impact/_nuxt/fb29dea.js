(window.webpackJsonp=window.webpackJsonp||[]).push([[2,49,70],{1001:function(e,t,r){"use strict";r(832)},1002:function(e,t,r){var n=r(10)(!1);n.push([e.i,".component__application-checkbox .checkbox-item{background-color:#fff;cursor:pointer;padding:17px 15px;margin-bottom:16px;display:block;width:100%;border-radius:8px;border:2px solid #f2f2f2;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.component__application-checkbox .checkbox-item:hover{background-color:#f1f7f7}.component__application-checkbox .checkbox-item.active{border-color:#44a1a4}.component__application-checkbox .checkbox-item.active span{color:#44a1a4}.component__application-checkbox .checkbox-item span{font-weight:500;font-size:15px;line-height:17px;margin-right:26px}.component__application-checkbox .checkbox-item input{display:none}.component__application-checkbox .checkbox-item .checkbox-item__icon{line-height:1;height:20px}.component__application-checkbox .checkbox-item .checkbox-item__icon i{width:20px;height:20px;font-size:20px}.component__application-checkbox .checkbox-item .checkbox-item__icon i.icon-circle{color:#818c99}.component__application-checkbox .checkbox-item .checkbox-item__icon i.icon-check-fill{color:#44a1a4}.component__application-checkbox .el-textarea{margin-top:12px;width:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}.component__application-checkbox .el-textarea textarea{padding:14px;line-height:20px;width:100%;border-radius:8px;background-color:#fff}.component__application-checkbox .el-textarea .el-input__count{font-size:14px;color:#818c99}",""]),e.exports=n},1250:function(e,t,r){var content=r(1377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("d996aff8",content,!0,{sourceMap:!1})},1285:function(e,t,r){"use strict";r.r(t);r(13),r(15),r(16),r(17);var n=r(3),o=r(6),c=(r(14),r(58),r(7),r(39),r(35),r(8)),l=r(154);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{Swiper:l.Swiper,SwiperSlide:l.SwiperSlide},props:{value:{type:Number,default:1}},data:function(){return{swiperOptions:{speed:500,loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:20,noSwiping:!0,autoHeight:!0},completeSteps:this.value}},computed:w(w({},Object(c.d)("localization",["language"])),{},{swiper:function(){return this.$refs.swiper.$swiper}}),watch:{completeSteps:function(e){this.$emit("input",e)},value:function(e){this.completeSteps=e}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("application/GET_APPLICATIONS");case 2:setTimeout((function(){e.swiper.update();var t=e.$route.query.key;t&&(e.swiper.slideTo(t,500),e.completeSteps=parseInt(t)+1)}),100);case 3:case"end":return t.stop()}}),t)})))()},methods:{changeCheckbox:function(e,t){this.gUserApplication[e]=t},back:function(){this.completeSteps>1&&(this.swiper.slidePrev(500),this.completeSteps--)},nextSlide:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,o,c,l,d,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r=Object.keys(e.gUserApplication),0!==e.gUserApplication[r[e.completeSteps-1]].length){t.next=7;break}return e.__alert(e.__locale("message-title"),e.__locale("choose-even-one"),!1,!1,(function(){})),t.abrupt("return",!1);case 7:if(!e.gUserApplication[r[e.completeSteps-1]].includes("other")||e.gUserApplicationOther[r[e.completeSteps-1]]){t.next=12;break}return setTimeout((function(){try{e.$refs.checkbox.validate()}catch(e){console.log(e)}}),100),t.abrupt("return",!1);case 12:if(e.completeSteps!==e.gApplications.length){t.next=20;break}for(o=[],c=Object.keys(e.gUserApplication),l=0,d=c;l<d.length;l++)w=d[l],o.push({applicationId:w,value:e.gUserApplication[w],other:e.gUserApplicationOther[w]});return e.$yandexMetrika.reachGoal("https://impact-capital.com/idea/"),t.next=19,e.$store.dispatch("application/SUBMIT_USER_APPLICATION",o).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=3;break}return t.next=3,e.$store.dispatch("auth/GET_ACCOUNT").then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.success,r.account,t.next=3,e.$store.dispatch("application/GET_USER_APPLICATIONS");case 3:e.$route.query.key?e.$router.push({path:"/"+e.language+"/user"}):e.gIdeaActiveComponent="IdeaList";case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 19:return t.abrupt("return",!1);case 20:e.swiper.slideNext(500),e.completeSteps++,t.next=27;break;case 24:t.prev=24,t.t0=t.catch(0),console.log(t.t0);case 27:case"end":return t.stop()}}),t,null,[[0,24]])})))()}}},A=(r(1376),r(4)),component=Object(A.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"component__idea-application"},[r("boxer",{attrs:{title:e.__locale("answer-few-questions"),subtitle:e.__locale("get-investing-offers")}},[r("swiper",{ref:"swiper",attrs:{options:e.swiperOptions,init:"",pagination:!1}},e._l(e.gApplications,(function(t,n){return r("swiper-slide",{key:n,staticClass:"slider-item swiper-no-swiping"},[r("div",{staticClass:"slider-item__title"},[e._v("\n          "+e._s(t.title)+"\n        ")]),e._v(" "),r("div",{staticClass:"tips"},[e._v("\n          "+e._s(e.__locale("choose-one-or-many-answers-below"))+"\n        ")]),e._v(" "),r("idea-checkbox",{ref:"checkbox",refInFor:!0,attrs:{checkbox:t},on:{"change-checkbox":function(r){return e.changeCheckbox(t.id,r)}},model:{value:e.gUserApplication[t.id],callback:function(r){e.$set(e.gUserApplication,t.id,r)},expression:"gUserApplication[item.id]"}})],1)})),1),e._v(" "),r("div",{staticClass:"idea-application__buttons"},[1!==e.completeSteps?r("app-button",{attrs:{color:"white",large:""},on:{click:function(t){return e.back()}}},[e._v("\n        Назад\n      ")]):e._e(),e._v(" "),r("app-button",{attrs:{fill:"",large:""},on:{click:function(t){return e.nextSlide()}}},[e._v("\n        "+e._s(e.completeSteps===e.gApplications.length?e.__locale("complete-to-end"):e.__locale("next"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{IdeaCheckbox:r(1286).default,Boxer:r(566).default})},1286:function(e,t,r){"use strict";r.r(t);r(39),r(35);var n=r(9),o={components:{ElInput:n.Input,ElForm:n.Form,ElFormItem:n.FormItem},props:{checkbox:{type:Object,default:function(){return{}}},value:{type:Array,default:function(){return[]}}},data:function(){var e=this;return{otherValue:null,localValue:this.value,rules:{other:[{required:!0,validator:function(t,r,n){e.gUserApplicationOther[e.checkbox.id]?n():n(new Error(e.__locale("enter-your-variant")))}}]}}},watch:{localValue:function(e,t){var r=this;e.includes("other")&&!t.includes("other")&&setTimeout((function(){r.$refs.textarea.focus()}),300),this.$emit("change-checkbox",e)},value:function(e){this.localValue=e}},methods:{validate:function(){return this.$refs.form.validate((function(e){return e}))}}},c=(r(1001),r(4)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"component__application-checkbox"},[e._l(e.checkbox.values,(function(t,n){return r("label",{key:n,staticClass:"checkbox-item",class:[e.localValue.includes(t)?"active":""]},[r("span",[e._v(e._s(t))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],attrs:{type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.localValue)?e._i(e.localValue,t)>-1:e.localValue},on:{change:function(r){var n=e.localValue,o=r.target,c=!!o.checked;if(Array.isArray(n)){var l=t,d=e._i(n,l);o.checked?d<0&&(e.localValue=n.concat([l])):d>-1&&(e.localValue=n.slice(0,d).concat(n.slice(d+1)))}else e.localValue=c}}}),e._v(" "),r("div",{staticClass:"checkbox-item__icon"},[e.localValue.includes(t)?r("i",{staticClass:"icon-check-fill"}):r("i",{staticClass:"icon-circle"})])])})),e._v(" "),e.checkbox.other?r("label",{staticClass:"checkbox-item",class:[e.localValue.includes("other")?"active":""],attrs:{for:"other-checkbox"}},[r("span",[e._v(e._s(e.__locale("other")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],attrs:{id:"other-checkbox",type:"checkbox",value:"other"},domProps:{checked:Array.isArray(e.localValue)?e._i(e.localValue,"other")>-1:e.localValue},on:{change:function(t){var r=e.localValue,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c="other",l=e._i(r,c);n.checked?l<0&&(e.localValue=r.concat([c])):l>-1&&(e.localValue=r.slice(0,l).concat(r.slice(l+1)))}else e.localValue=o}}}),e._v(" "),r("div",{staticClass:"checkbox-item__icon"},[e.localValue.includes("other")?r("i",{staticClass:"icon-check-fill"}):r("i",{staticClass:"icon-circle"})])]):e._e(),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.gUserApplicationOther,rules:e.rules}},[r("el-form-item",{attrs:{prop:"other"}},[r("el-input",{directives:[{name:"show",rawName:"v-show",value:e.localValue.includes("other"),expression:"localValue.includes('other')"}],ref:"textarea",attrs:{id:"other-textarea",autosize:{minRows:2,maxRows:5},maxlength:"250","show-word-limit":"",type:"textarea",placeholder:e.__locale("application-other-placeholder")},model:{value:e.gUserApplicationOther[e.checkbox.id],callback:function(t){e.$set(e.gUserApplicationOther,e.checkbox.id,t)},expression:"gUserApplicationOther[checkbox.id]"}})],1)],1)],2)}),[],!1,null,null,null);t.default=component.exports},1376:function(e,t,r){"use strict";r(1250)},1377:function(e,t,r){var n=r(10)(!1);n.push([e.i,'@font-face{font-family:"swiper-icons";src:url("data:application/font-woff;charset=utf-8;base64, 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") format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;width:calc(var(--swiper-navigation-size)/44*27);height:44px;height:var(--swiper-navigation-size);margin-top:-22px;margin-top:calc(var(--swiper-navigation-size)*-1/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-theme-color);color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-feature-settings:normal,;font-variant:normal;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:"next"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s linear infinite;animation:swiper-preloader-spin 1s linear infinite;box-sizing:border-box;border-left:4px solid var(--swiper-theme-color);border-bottom:4px solid var(--swiper-theme-color);border-right:4px solid var(--swiper-theme-color);border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container{width:100%}.component__idea-application{padding-bottom:100px}.component__idea-application .navbar{z-index:9;background-color:#fff;border-bottom:1px solid #f2f2f2;margin-bottom:10px;padding:10px 20px;position:fixed;top:0;width:100%;left:0;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.component__idea-application .navbar .header-back{overflow:hidden;height:30px;width:30px;border-radius:100px;color:#44a1a4;display:flex;flex-direction:row;justify-content:center;align-items:center}.component__idea-application .navbar .header-back i{font-size:18px}.component__idea-application .navbar .header-back i.fa-times{font-size:20px}.component__idea-application .slider-item .slider-item__title{font-weight:700;font-size:25px;line-height:26px;margin-bottom:8px}.component__idea-application .slider-item .tips{margin-bottom:24px}.component__idea-application .idea-application__buttons{display:flex;flex-direction:row;justify-content:center;align-items:center}.component__idea-application .app-button.white{background-color:transparent;border-color:transparent}',""]),e.exports=n},562:function(e,t,r){var content=r(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("60879304",content,!0,{sourceMap:!1})},564:function(e,t,r){"use strict";r(562)},565:function(e,t,r){var n=r(10)(!1);n.push([e.i,".component__boxer{padding:60px 100px;background:#fff;background:linear-gradient(180deg,#fff,#fff 20%,#f6f9ff 0,#f6f9ff 80%,#fff 0,#fff)}@media (max-width:790px){.component__boxer{padding:0 30px}}@media (max-width:575px){.component__boxer{background:#f6f9ff;padding:0 20px;margin-bottom:0}}.component__boxer .subscribe-form__wrapper{background-image:url(./images/subscribe-background.svg);background-size:cover;background-repeat:repeat;box-shadow:0 16px 40px rgba(28,74,115,.23);border-radius:20px;padding:100px 40px;background-color:#fff}@media (max-width:790px){.component__boxer .subscribe-form__wrapper{padding:60px 40px}}@media (max-width:575px){.component__boxer .subscribe-form__wrapper{padding:70px 0;background-image:none;box-shadow:none;background-color:transparent;background-color:initial}}.component__boxer .subscribe-form__wrapper .subscribe-form{max-width:600px;width:100%;left:0;right:0;margin:auto;display:flex;flex-direction:column;justify-content:center;align-items:center}.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-title{font-weight:800;font-size:32px;line-height:42px;margin-bottom:12px;text-align:center}@media (max-width:1280px){.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-title{font-size:28px}}@media (max-width:575px){.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-title{font-size:26px;line-height:34px}}.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-text{font-weight:400;font-size:16px;line-height:26px;opacity:.8;text-align:center;margin-bottom:40px}@media (max-width:575px){.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-text{font-size:16px;line-height:26px}}.component__boxer .subscribe-form__wrapper .subscribe-form .form-wrapper{max-width:450px;width:100%}.component__boxer .subscribe-form__wrapper .subscribe-form .app-input{width:100%}@media (max-width:575px){.component__boxer .subscribe-form__wrapper .subscribe-form .app-input,.component__boxer .subscribe-form__wrapper .subscribe-form .app-input input{background-color:#fff}}",""]),e.exports=n},566:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:null},subtitle:{type:String,default:null}},data:function(){return{}}},o=(r(564),r(4)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"component__boxer"},[r("client-only",[r("div",{staticClass:"subscribe-form__wrapper"},[r("div",{staticClass:"subscribe-form"},[r("div",{staticClass:"subscribe-title"},[e._v("\n          "+e._s(e.title)+"\n        ")]),e._v(" "),e.subtitle?r("div",{staticClass:"subscribe-text"},[e._v("\n          "+e._s(e.subtitle)+"\n        ")]):e._e(),e._v(" "),e._t("default")],2)])])],1)}),[],!1,null,null,null);t.default=component.exports},832:function(e,t,r){var content=r(1002);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("6f0a1f6e",content,!0,{sourceMap:!1})}}]);