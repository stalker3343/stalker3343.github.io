(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{653:function(t,e,n){var content=n(964);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("6c1c6f32",content,!0,{sourceMap:!1})},963:function(t,e,n){"use strict";n(653)},964:function(t,e,n){var o=n(10)(!1);o.push([t.i,'.component__slider-pagination{position:absolute;margin:90px auto 0;left:0;right:0;bottom:100px;z-index:9}@media (max-width:1100px){.component__slider-pagination{bottom:40px}}@media (max-width:790px){.component__slider-pagination{bottom:40px}}@media (max-width:840px){.component__slider-pagination{bottom:110px}}@media (max-width:575px){.component__slider-pagination{bottom:110px}}.component__slider-pagination .timeline{width:calc(100% - 10px);position:absolute;height:2px;top:0;left:0;bottom:0;margin:auto 5px;background-color:#646464;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.component__slider-pagination .timeline .timeline-progress{-webkit-appearance:none;background-color:#fff;height:2px}.component__slider-pagination .pagination-dots{width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.component__slider-pagination .pagination-dots .pagination-dot{cursor:pointer;width:13px;height:13px;display:flex;flex-direction:row;justify-content:center;align-items:center}.component__slider-pagination .pagination-dots .pagination-dot:after{position:absolute;content:"";display:block;width:8px;height:8px;background-color:#646464;border-radius:100px;transition:all .15s ease-in-out}.component__slider-pagination .pagination-dots .pagination-dot.active:after{width:10px;height:10px;background-color:#fff}',""]),t.exports=o},997:function(t,e,n){"use strict";n.r(e);n(58);var o={props:{length:{type:Number,default:1},speed:{type:Number,default:50}},data:function(){return{progressValue:0,step:1,timer:null}},watch:{step:function(t){this.$emit("change",t)}},mounted:function(){this.startTimer()},methods:{startTimer:function(){var t=this;clearInterval(this.timer),this.timer=setInterval((function(){if(t.progressValue>=100)return clearInterval(t.timer),void setTimeout((function(){t.progressValue=0,t.step=1,t.startTimer()}),5e3);t.progressValue+=10/t.speed;var e=Math.floor(t.progressValue/(100/(t.length-1)));t.step=e<1?1:e+1}),15)},skip:function(t){var e=this;clearInterval(this.timer),this.step=t+1,this.progressValue=t*Math.floor(100/(this.length-1)),setTimeout((function(){e.startTimer()}),2e3)}}},r=(n(963),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component__slider-pagination",style:"width: "+60*t.length+"px"},[n("div",{staticClass:"timeline"},[n("div",{staticClass:"timeline-progress",style:"width: "+t.progressValue+"%"})]),t._v(" "),n("div",{staticClass:"pagination-dots"},t._l(t.length,(function(e,o){return n("div",{key:o,staticClass:"pagination-dot",class:[o+1<=t.step?"active":""],on:{click:function(e){return t.skip(o)}}})})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);