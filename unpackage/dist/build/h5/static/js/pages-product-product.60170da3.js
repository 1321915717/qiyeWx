(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-product"],{"00e2":function(t,e,n){"use strict";n.r(e);var i=n("5239"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"0538c":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"bg-red submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.OnCanvas.apply(void 0,arguments)}}},[t._v("生成海报")]),t.show?n("v-uni-view",{staticClass:"images"},[n("v-uni-canvas",{style:{width:t.canvasW+"px",height:t.canvasH+"px"},attrs:{"canvas-id":t.CanvasID}}),n("v-uni-view",{staticClass:"bg-blue submit",staticStyle:{margin:"0 auto"}},[t._v("保存图片")])],1):t._e()],1)},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"0d67":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".footer[data-v-d9541982]{position:fixed;width:100%;left:0;bottom:0;box-shadow:none;border-top:1px solid #e2e2e2}",""]),t.exports=e},2122:function(t,e,n){"use strict";var i=n("ee27");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r,a=i(n("c964")),o={props:{CanvasID:{Type:String,default:"PosterCanvas"},imgSrc:{Type:String,default:""},QrSrc:{Type:String,default:""},Title:{Type:String,default:""},TitleColor:{Type:String,default:"#333333"},LineType:{Type:[String,Boolean],default:!0},PriceTxt:{Type:String,default:"99.99"},PriceColor:{Type:String,default:"#e31d1a"},OriginalTxt:{Type:String,default:"199.99"},OriginalColor:{Type:String,default:"#b8b8b8"},Width:{Type:String,default:750},CanvasBg:{Type:String,default:"#ffffff"},Referrer:{Type:String,default:"公司推荐给你"},ViewDetails:{Type:String,default:"长按或扫描识别二维码"}},data:function(){return{show:!1,canvasW:0,canvasH:0,canvasImgSrc:"",ctx:null}},methods:{OnCanvas:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i,a,o,c,s,u,l,f,p,d,h,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,r.ctx=uni.createCanvasContext(r.CanvasID,t),n=uni.upx2px(r.Width),i=uni.upx2px(30),a=uni.upx2px(150),o=0,e.next=6,r.getImageInfo({imgSrc:r.imgSrc});case 6:return c=e.sent,e.next=9,r.getImageInfo({imgSrc:r.QrSrc});case 9:s=e.sent,u=[c.width,c.height],l=[s.width,s.height],f=n-2*i,u[0]!=f&&(u[1]=Math.floor(f/u[0]*u[1]),u[0]=f),l[0]!=a&&(l[1]=Math.floor(a/l[0]*l[1]),l[0]=a),r.canvasW=n,r.canvasH=u[1]+l[1]+128,r.ctx.setFillStyle(r.CanvasBg),r.ctx.fillRect(0,0,n,r.canvasH),r.ctx.drawImage(c.path,i,i,u[0],u[1]),r.ctx.setFontSize(uni.upx2px(28)),r.ctx.setFillStyle(r.TitleColor),p=0,d=u[1]+2*i+10,h=1,v=0;case 26:if(!(v<r.Title.length)){e.next=48;break}if(o+=r.ctx.measureText(r.Title[v]).width,!(o>u[0])){e.next=44;break}if(2!=h||!r.LineType){e.next=37;break}return r.ctx.fillText(r.Title.substring(p,v-8)+"...",i,d),o=0,p=v,h++,e.abrupt("break",48);case 37:r.ctx.fillText(r.Title.substring(p,v),i,d),o=0,d+=20,p=v,h++;case 42:e.next=45;break;case 44:v==r.Title.length-1&&(r.ctx.fillText(r.Title.substring(p,v+1),i,d),o=0);case 45:v++,e.next=26;break;case 48:o=i,d+=uni.upx2px(60),1==h&&(d+=20),""!=r.PriceTxt&&(r.ctx.setFillStyle(r.PriceColor),r.ctx.setFontSize(uni.upx2px(38)),r.ctx.fillText(r.PriceTxt,o,d),o+=r.ctx.measureText(r.PriceTxt).width+uni.upx2px(10)),""!=r.PriceTxt&&""!=r.OriginalTxt&&(r.ctx.setFillStyle(r.OriginalColor),r.ctx.setFontSize(uni.upx2px(24)),r.ctx.fillText(r.OriginalTxt,o,d)),r.ctx.strokeStyle=r.OriginalColor,r.ctx.moveTo(o,d-uni.upx2px(10)),r.ctx.lineTo(o+r.ctx.measureText(r.OriginalTxt).width,d-uni.upx2px(10)),r.ctx.stroke(),d+=uni.upx2px(20),r.ctx.drawImage(s.path,u[0]-l[0]+i,d,l[0],l[1]),r.ctx.setFillStyle(r.TitleColor),r.ctx.setFontSize(uni.upx2px(30)),r.ctx.fillText(r.Referrer,i,d+l[1]/2),r.ctx.setFillStyle(r.OriginalColor),r.ctx.setFontSize(uni.upx2px(24)),r.ctx.fillText(r.ViewDetails,i,d+l[1]/2+20),setTimeout((function(){r.ctx.draw(!0,(function(t){r.getNewImage()}))}),600);case 66:case"end":return e.stop()}}),e)})))()},getImageInfo:function(t){return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.imgSrc,e.abrupt("return",new Promise((function(t,e){uni.getImageInfo({src:n,success:function(e){t(e)},fail:function(t){e(t)}})})));case 2:case"end":return e.stop()}}),e)})))()},getNewImage:function(){r=this,uni.canvasToTempFilePath({canvasId:r.CanvasID,quality:1,complete:function(t){console.log(t.tempFilePath),r.$emit("success",t)}},this)}}};e.default=o},"232b":function(t,e,n){"use strict";var i=n("6501"),r=n.n(i);r.a},"2bcc":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",[n("v-uni-canvas",{style:{width:t.canvasW+"px",height:t.canvasH+"px"},attrs:{"canvas-id":"mini_poster"}})],1),n("v-uni-view",{staticStyle:{height:"106rpx"}}),n("v-uni-view",{staticClass:"footer"},[n("v-uni-view",{staticStyle:{height:"106rpx","align-items":"center","background-color":"#333333"}},[n("v-uni-button",{staticStyle:{background:"transparent",height:"106rpx","line-height":"106rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSaveImage.apply(void 0,arguments)}}},[t._v("保存名片")])],1)],1)],1)},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"2f3b":function(t,e,n){"use strict";n.r(e);var i=n("fcac"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},5239:function(t,e,n){"use strict";var i=n("ee27");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r,a=i(n("c964")),o=i(n("adeb")),c=i(n("b0fd")),s={components:{wmPoster:o.default,poster:c.default},data:function(){return{show:!1,canvasW:0,canvasH:0,saveimage:"",canvasImgSrc:"",ctx:null,CanvasID:"11",imgSrc:"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/banner.png",QrSrc:"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/banner.png",Title:"123456",LineType:!0,PriceTxt:"99.99",PriceColor:"#e31d1a",OriginalTxt:"199.99",OriginalColor:"#b8b8b8",Width:"750",CanvasBg:"#ffffff",Referrer:"公司推荐给你",ViewDetails:"长按或扫描识别二维码",swiperList:[{id:0,type:"image",url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1113621443,347212229&fm=26&gp=0.jpg"},{id:1,type:"image",url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3017910422,1609283108&fm=11&gp=0.jpg"},{id:2,type:"image",url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2374546157,4092489678&fm=26&gp=0.jpg"},{id:3,type:"image",url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2372259811,472921085&fm=26&gp=0.jpg"}]}},methods:{success:function(){uni.saveImageToPhotosAlbum({filePath:this.saveimage,success:function(){console.log("save success")}})},OnCanvas:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i,a,o,c,s,u,l,f,p,d,h,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,r.ctx=uni.createCanvasContext(r.CanvasID,t),n=uni.upx2px(r.Width),i=uni.upx2px(30),a=uni.upx2px(150),o=0,e.next=6,r.getImageInfo({imgSrc:r.imgSrc});case 6:return c=e.sent,e.next=9,r.getImageInfo({imgSrc:r.QrSrc});case 9:s=e.sent,u=[c.width,c.height],l=[s.width,s.height],f=n-2*i,u[0]!=f&&(u[1]=Math.floor(f/u[0]*u[1]),u[0]=f),l[0]!=a&&(l[1]=Math.floor(a/l[0]*l[1]),l[0]=a),r.canvasW=n,r.canvasH=u[1]+l[1]+128,r.ctx.setFillStyle(r.CanvasBg),r.ctx.fillRect(0,0,n,r.canvasH),r.ctx.drawImage(c.path,i,i,u[0],u[1]),r.ctx.setFontSize(uni.upx2px(28)),r.ctx.setFillStyle(r.TitleColor),p=0,d=u[1]+2*i+10,h=1,v=0;case 26:if(!(v<r.Title.length)){e.next=48;break}if(o+=r.ctx.measureText(r.Title[v]).width,!(o>u[0])){e.next=44;break}if(2!=h||!r.LineType){e.next=37;break}return r.ctx.fillText(r.Title.substring(p,v-8)+"...",i,d),o=0,p=v,h++,e.abrupt("break",48);case 37:r.ctx.fillText(r.Title.substring(p,v),i,d),o=0,d+=20,p=v,h++;case 42:e.next=45;break;case 44:v==r.Title.length-1&&(r.ctx.fillText(r.Title.substring(p,v+1),i,d),o=0);case 45:v++,e.next=26;break;case 48:o=i,d+=uni.upx2px(60),1==h&&(d+=20),""!=r.PriceTxt&&(r.ctx.setFillStyle(r.PriceColor),r.ctx.setFontSize(uni.upx2px(38)),r.ctx.fillText(r.PriceTxt,o,d),o+=r.ctx.measureText(r.PriceTxt).width+uni.upx2px(10)),""!=r.PriceTxt&&""!=r.OriginalTxt&&(r.ctx.setFillStyle(r.OriginalColor),r.ctx.setFontSize(uni.upx2px(24)),r.ctx.fillText(r.OriginalTxt,o,d)),r.ctx.strokeStyle=r.OriginalColor,r.ctx.moveTo(o,d-uni.upx2px(10)),r.ctx.lineTo(o+r.ctx.measureText(r.OriginalTxt).width,d-uni.upx2px(10)),r.ctx.stroke(),d+=uni.upx2px(20),r.ctx.drawImage(s.path,u[0]-l[0]+i,d,l[0],l[1]),r.ctx.setFillStyle(r.TitleColor),r.ctx.setFontSize(uni.upx2px(30)),r.ctx.fillText(r.Referrer,i,d+l[1]/2),r.ctx.setFillStyle(r.OriginalColor),r.ctx.setFontSize(uni.upx2px(24)),r.ctx.fillText(r.ViewDetails,i,d+l[1]/2+20),setTimeout((function(){r.ctx.draw(!0,(function(t){r.getNewImage()}))}),600);case 66:case"end":return e.stop()}}),e)})))()},getImageInfo:function(t){return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.imgSrc,e.abrupt("return",new Promise((function(t,e){uni.getImageInfo({src:n,success:function(e){t(e)},fail:function(t){e(t)}})})));case 2:case"end":return e.stop()}}),e)})))()},getNewImage:function(){var t=this;uni.canvasToTempFilePath({canvasId:t.CanvasID,quality:1,complete:function(e){t.show=!0,console.log(e.tempFilePath),t.saveimage=e.tempFilePath}},this)}}};e.default=s},5325:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".submit[data-v-324afe9c]{width:%?500?%;padding:%?30?%;text-align:center}.images[data-v-324afe9c]{width:%?750?%}.shadow[data-v-324afe9c]{width:100%;height:100%;position:absolute;left:0;top:0;z-index:10000000000;background-color:#000;opacity:.6}",""]),t.exports=e},"5b1c":function(t,e,n){"use strict";var i=n("cbe0"),r=n.n(i);r.a},6478:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".xiangqing[data-v-9d9e7d1a]{width:%?750?%;text-align:center;color:#8799a3}.product-title[data-v-9d9e7d1a]{min-height:%?70?%;width:%?750?%;padding:%?20?% %?10?%;line-height:100%;font-weight:700;font-size:%?30?%;color:#333}.product-bar[data-v-9d9e7d1a]{position:fixed;bottom:0;width:%?750?%}.images[data-v-9d9e7d1a]{position:absolute;top:10%;left:0;z-index:100000\n}.image-box[data-v-9d9e7d1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.submit[data-v-9d9e7d1a]{width:%?375?%;padding:%?30?%;text-align:center}.shadow[data-v-9d9e7d1a]{width:100%;height:100%;position:absolute;left:0;top:0;z-index:9999;background-color:#000;opacity:.6}",""]),t.exports=e},6501:function(t,e,n){var i=n("5325");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("69823fe2",i,!0,{sourceMap:!1,shadowMode:!1})},8403:function(t,e,n){"use strict";var i=n("c3d7"),r=n.n(i);r.a},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=y;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={},x={};x[o]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==i&&r.call(m,o)&&(x=m);var w=F.prototype=T.prototype=Object.create(x);S.prototype=w.constructor=F,F.constructor=S,F[s]=S.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,F):(t.__proto__=F,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},C(I.prototype),I.prototype[c]=function(){return this},l.AsyncIterator=I,l.async=function(t,e,n,i){var r=new I(y(t,e,n,i));return l.isGeneratorFunction(e)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},C(w),w[s]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},l.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return c.type="throw",c.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;L(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:O(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),v}}}function y(t,e,n,i){var r=e&&e.prototype instanceof T?e:T,a=Object.create(r.prototype),o=new E(i||[]);return a._invoke=k(t,n,o),a}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function T(){}function S(){}function F(){}function C(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function I(t){function e(n,i,a,o){var c=b(t[n],t,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,o)}))}o(c.arg)}var n;function i(t,i){function r(){return new Promise((function(n,r){e(t,i,n,r)}))}return n=n?n.then(r,r):r()}this._invoke=i}function k(t,e,n){var i=f;return function(r,a){if(i===d)throw new Error("Generator is already running");if(i===h){if("throw"===r)throw a;return R()}n.method=r,n.arg=a;while(1){var o=n.delegate;if(o){var c=_(o,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var s=b(t,e,n);if("normal"===s.type){if(i=n.done?h:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=h,n.method="throw",n.arg=s.arg)}}}function _(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=b(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,v;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},adeb:function(t,e,n){"use strict";n.r(e);var i=n("0538c"),r=n("fe75");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("232b");var o,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"324afe9c",null,!1,i["a"],o);e["default"]=s.exports},afb3:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-swiper",{staticClass:"screen-swiper square-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.swiperList,(function(e,i){return n("v-uni-swiper-item",{key:i},["image"==e.type?n("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?n("v-uni-video",{attrs:{src:e.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)})),1),n("v-uni-view",{staticClass:"bg-white  product-title"},[t._v("产品名称:双H阀门、空滤器综合试验台")]),n("v-uni-view",{staticClass:"xiangqing",staticStyle:{"margin-bottom":"10rpx"}},[t._v("-----详情-----")]),n("v-uni-view",{staticClass:"bg-white",staticStyle:{padding:"10rpx 0"}},[n("v-uni-image",{attrs:{src:"https://ppt-download.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A/%E5%9B%BE%E7%89%871.png",mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"images"},[n("v-uni-canvas",{style:{width:t.canvasW+"px",height:t.canvasH+"px"},attrs:{"canvas-id":"11"}}),t.show?n("v-uni-view",{staticClass:"image-box"},[n("v-uni-view",{staticClass:"bg-red submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.success.apply(void 0,arguments)}}},[t._v("保存图片")]),n("v-uni-view",{staticClass:"bg-blue submit"},[t._v("取消")])],1):t._e()],1),n("v-uni-view",{staticClass:"cu-bar bg-white tabbar border shop product-bar"},[n("v-uni-button",{staticClass:"action",attrs:{"open-type":"contact"}},[n("v-uni-view",{staticClass:"cuIcon-service text-green"}),t._v("客服")],1),n("v-uni-button",{staticClass:"action",attrs:{"open-type":"contact"}},[n("v-uni-view",{staticClass:"cuIcon-share text-green"}),t._v("分享好友")],1),n("v-uni-view",{staticClass:"bg-red submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.OnCanvas.apply(void 0,arguments)}}},[t._v("生成海报")])],1),t.show?n("v-uni-view",{staticClass:"shadow"}):t._e()],1)},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},b0fd:function(t,e,n){"use strict";n.r(e);var i=n("2bcc"),r=n("2f3b");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("5b1c");var o,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"d9541982",null,!1,i["a"],o);e["default"]=s.exports},c3d7:function(t,e,n){var i=n("6478");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("8e84c85e",i,!0,{sourceMap:!1,shadowMode:!1})},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));n("d3b7"),n("e6cf");function i(t,e,n,i,r,a,o){try{var c=t[a](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function c(t){i(o,r,a,c,s,"next",t)}function s(t){i(o,r,a,c,s,"throw",t)}c(void 0)}))}}},cb29:function(t,e,n){var i=n("23e7"),r=n("81d5"),a=n("44d2");i({target:"Array",proto:!0},{fill:r}),a("fill")},cbe0:function(t,e,n){var i=n("0d67");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("1503ff7f",i,!0,{sourceMap:!1,shadowMode:!1})},ef9c:function(t,e,n){"use strict";n.r(e);var i=n("afb3"),r=n("00e2");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("8403");var o,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"9d9e7d1a",null,!1,i["a"],o);e["default"]=s.exports},fcac:function(t,e,n){"use strict";var i=n("ee27");n("cb29"),n("4160"),n("a15b"),n("d3b7"),n("ac1f"),n("1276"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("c964")),a={data:function(){return{mpWxQr:"https://as.datianshi.com/media/mp/2/wx/qr.PNG",canvasW:0,canvasH:0,invest_areas:[{id:1,name:"儿童教育"},{id:1,name:"少儿编程"},{id:1,name:"生物智能"},{id:1,name:"万物相连"},{id:1,name:"大数据"}],nickname:"热豆Wakary",avatar:"https://as.datianshi.com/media/9/tmp_f9fdf9ee13548fa97fb1e7c8d0be7e30ee02ed1b533d39e7.jpg",company:"热豆科技",phone:"17610998099",email:"redoume@163.com",location:"北京",finished:!1}},computed:{showInvestAreas:function(){if(this.invest_areas){var t=[];return this.invest_areas.forEach((function(e){t.push(e.name)})),t.join(" ")}return"未设置"}},onLoad:function(){this.canvasW=uni.getSystemInfoSync().windowWidth,this.canvasH=this.calculateCanvasHeight(),this.toDrawCanvas()},methods:{toSaveImage:function(){if(this.finished){uni.canvasToTempFilePath({canvasId:"mini_poster",success:function(t){uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({title:"保存成功"})},fail:function(){uni.showToast({icon:"none",title:"保存名片码失败"})}})},fail:function(){uni.showToast({icon:"none",title:"保存名片码失败"})}})}else uni.showToast({title:"正在生成图片，稍后再试",icon:"none"})},toDrawCanvas:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n,i,r,a,o,c,s,u,l,f,p,d,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=uni.upx2px(34),i=uni.upx2px(380),r=t.canvasW-2*n,a=uni.createCanvasContext("mini_poster",t),a.setFillStyle("#F3F4F5"),a.fillRect(0,0,t.canvasW,t.canvasH),o=uni.upx2px(12),t.drawRoundRect(a,n,n,r,i,o,2),t.drawCard(a,n,n,r,i),c=uni.upx2px(128),e.next=12,t.downloadImage(t.avatar);case 12:if(s=e.sent,s.tempFilePath&&(u=t.canvasW-n-uni.upx2px(40)-c,l=n+uni.upx2px(40),t.drawRoundRectAvatar(a,u,l,c,c,o,s.tempFilePath)),t.drawHelloInfo(a,n,n+i+n,r),!t.mpWxQr){e.next=23;break}return e.next=18,t.downloadImage(t.mpWxQr);case 18:f=e.sent,p=uni.upx2px(34),d=uni.upx2px(180),h=t.calculateCanvasHeight(),f.tempFilePath&&a.drawImage(f.tempFilePath,t.canvasW-p-d,h-p-d,d,d);case 23:a.draw(),t.finished=!0;case 25:case"end":return e.stop()}}),e)})))()},drawCard:function(t,e,n,i,a){var o=this;return(0,r.default)(regeneratorRuntime.mark((function r(){var a,c,s,u,l,f,p,d,h;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=n+uni.upx2px(45),c=e+uni.upx2px(52),t.setTextBaseline("top"),s=uni.upx2px(30),t.fillStyle="#F5A623",t.setFontSize(s),t.fillText(o.company,c,a),a+=30,u=uni.upx2px(50),t.setFillStyle("#333333"),t.setFontSize(u),t.fillText(o.nickname,c,a),a+=42,l=uni.upx2px(30),f=c+l+6,t.drawImage("../../static/wakary-poster/position.png",c,a,l,l),t.setFillStyle("#333333"),t.setFontSize(s),t.fillText(o.location,f,a),a+=28,t.drawImage("../../static/wakary-poster/Mouse-Pointer.png",c,a,l,l),t.setFillStyle("#333333"),t.setFontSize(s),p=uni.upx2px(34),d=uni.upx2px(40),h=i-f+p-d,o.drawTextInOneLine(t,o.showInvestAreas,f,a,h),a+=28,t.drawImage("../../static/phone.png",c,a,l,l),t.setFillStyle("#333333"),t.setFontSize(s),t.fillText(o.phone?o.phone:"",f,a);case 32:case"end":return r.stop()}}),r)})))()},drawHelloInfo:function(t,e,n,i){var a=this;return(0,r.default)(regeneratorRuntime.mark((function r(){var o,c,s,u,l,f,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:o=n+12,c=e,t.setTextBaseline("top"),s=uni.upx2px(30),t.setFillStyle("#333333"),t.setFontSize(s),t.fillText("您好，",c,o),u="我是来自 "+a.company+" 的投资人"+a.nickname,l=a.drawTextInLines(t,u,c,o,i,26),o+=26*l+26,t.fillText("这是我的名片，请惠存。",c,o),o+=26,t.fillText("谢谢",c,o),o+=26,o+=40,t.setFillStyle("#F37231"),t.fillRect(c,o,20,3),o+=7,t.setFillStyle("#333333"),f=uni.upx2px(28),t.setFontSize(f),t.fillText("长按识别二维码",c,o),o+=20,p="在大天使中查看我的更多信息",t.fillText(p,c,o);case 25:case"end":return r.stop()}}),r)})))()},calculateCanvasHeight:function(){var t=uni.createCanvasContext("test_poster"),e=uni.upx2px(34),n="我是来自 "+this.company+" 的投资人"+this.nickname,i=this.drawTextInLines(t,n,e,0,this.canvasW-2*e,26),r=uni.upx2px(380),a=2*e+r+e+12+78+26*i;return a+90},_drawRoundRect:function(t,e,n,i,r,a){t.beginPath(),t.arc(e+a,n+a,a,Math.PI,1.5*Math.PI),t.arc(e+i-a,n+a,a,1.5*Math.PI,2*Math.PI),t.arc(e+i-a,n+r-a,a,0,.5*Math.PI),t.arc(e+a,n+r-a,a,.5*Math.PI,Math.PI),t.closePath(),t.fillStyle="#FFFFFF",t.fill()},drawRoundRect:function(t,e,n,i,r,a,o){t.save(),this._drawRoundRect(t,e,n,i,r,a),t.clip(),t.fillStyle=this.company?"#F37231":"#333333";var c=uni.upx2px(12);t.fillRect(e,n,c,r),t.restore()},drawRoundRectAvatar:function(t,e,n,i,r,a,o){t.save(),this._drawRoundRect(t,e,n,i,r,a),t.clip(),t.drawImage(o,e,n,i,r),t.restore()},drawTextInLines:function(t,e,n,i,r,a){for(var o=e.split(""),c="",s=[],u=0;u<o.length;u++)t.measureText(c).width<r||(s.push(c),c=""),c+=o[u];for(var l in s.push(c),s)t.fillText(s[l],n,i+(1*l+1)*a);return s.length},drawTextInOneLine:function(t,e,n,i,r){for(var a=e.split(""),o="",c=0;c<a.length;c++){if(!(t.measureText(o+"...").width<=r)){o=o.substring(0,o.length-1),o+="...";break}o+=a[c]}t.fillText(o,n,i)},downloadImage:function(t){return new Promise((function(e,n){uni.downloadFile({url:t,success:function(t){return e(t)},fail:function(t){return n(t)}})}))}}};e.default=a},fe75:function(t,e,n){"use strict";n.r(e);var i=n("2122"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a}}]);