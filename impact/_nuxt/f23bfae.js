(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{652:function(e,t,r){var content=r(961);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("0f851033",content,!0,{sourceMap:!1})},960:function(e,t,r){"use strict";r(652)},961:function(e,t,r){var o=r(10)(!1);o.push([e.i,'.component__crew-profile{display:grid;grid-template-columns:1fr 3fr;grid-template-rows:1fr;grid-gap:0 30px;gap:0 30px;grid-template-areas:"person description"}@media (max-width:1100px){.component__crew-profile{grid-template-columns:1fr 2fr}}@media (max-width:790px){.component__crew-profile{grid-template-columns:1fr 1.5fr}}@media (max-width:575px){.component__crew-profile{display:block}}.component__crew-profile .crew-person{grid-area:person}@media (max-width:575px){.component__crew-profile .crew-person{margin-bottom:30px}}.component__crew-profile .crew-person .person{text-align:right}.component__crew-profile .crew-person .person .person-image{width:100%;height:350px;background-position:top;background-size:cover;background-repeat:no-repeat;border-radius:10px}@media (max-width:575px){.component__crew-profile .crew-person .person .person-image{height:600px}}.component__crew-profile .crew-person .person .person-content{margin-top:20px}.component__crew-profile .crew-person .person .person-content .person-name{font-size:22px;font-weight:700;margin-bottom:10px}.component__crew-profile .crew-person .person .person-content .person-title{color:#44a1a4}.component__crew-profile .crew-person .person .person-content .person-social{margin-top:15px;color:#44a1a4;display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.component__crew-profile .crew-person .person .person-content .person-social a{margin-left:20px;display:block;font-size:20px}.component__crew-profile .crew-description{grid-area:description}.component__crew-profile .crew-description .description-item{padding:20px;border-radius:10px;margin-bottom:30px;background-color:#f1f7f7}.component__crew-profile .crew-description .description-item .description-title{margin-bottom:20px;font-weight:600;font-size:18px}.component__crew-profile .crew-description .description-item .description-values{padding-left:40px;list-style:disc}',""]),e.exports=o},996:function(e,t,r){"use strict";r.r(t);var o={props:{data:{type:Object,default:function(){return{}}}}},n=(r(960),r(4)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"component__crew-profile"},[r("div",{staticClass:"crew-person"},[r("div",{staticClass:"person"},[r("div",{staticClass:"person-image",style:"background-image: url('"+e.gBackendServer+"/"+e.data.background+"')"}),e._v(" "),r("div",{staticClass:"person-content"},[r("div",{staticClass:"person-name"},[e._v("\n          "+e._s(e.data.name)+"\n        ")]),e._v(" "),r("div",{staticClass:"person-title"},[e._v("\n          "+e._s(e.data.title)+"\n        ")]),e._v(" "),r("div",{staticClass:"person-social"},[e.data.facebook?r("a",{attrs:{target:"_blank",href:e.data.facebook}},[r("i",{staticClass:"fab fa-facebook"})]):e._e(),e._v(" "),e.data.instagram?r("a",{attrs:{target:"_blank",href:e.data.instagram}},[r("i",{staticClass:"fab fa-instagram"})]):e._e(),e._v(" "),e.data.vk?r("a",{attrs:{target:"_blank",href:e.data.vk}},[r("i",{staticClass:"fab fa-vk"})]):e._e()])])])]),e._v(" "),r("div",{staticClass:"crew-description"},e._l(e.data.descriptions,(function(t,o){return r("div",{key:o,staticClass:"description-item"},[r("div",{staticClass:"description-title"},[e._v("\n        "+e._s(t.title)+"\n      ")]),e._v(" "),r("ul",{staticClass:"description-values"},e._l(t.values,(function(t,o){return r("li",{key:o,staticClass:"description-value",domProps:{innerHTML:e._s(t)}})})),0)])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);