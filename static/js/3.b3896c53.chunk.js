(this["webpackJsonpmarvel-wiki-portal"]=this["webpackJsonpmarvel-wiki-portal"]||[]).push([[3],{21:function(t,e,r){"use strict";r(22);var n=r(1),a=function(t){var e,r=t.message;switch(t.flex){case"column":e="error-view error-view_columned";break;case"row":e="error-view error-view_rowed";break;default:e="error-view"}return Object(n.jsxs)("div",{className:e,children:[Object(n.jsx)(o,{}),Object(n.jsx)("p",{className:"error-view__message",children:r})]})},o=function(){return Object(n.jsx)("svg",{viewBox:"0 0 100 100",y:"0",x:"0",xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{height:"150px",width:"150px",background:"none"},width:"150px",height:"150px",children:Object(n.jsx)("g",{className:"ldl-scale",style:{transformOrigin:"50% 50%",transform:"scale(0.8, 0.8)"},children:Object(n.jsxs)("g",{className:"ldl-ani",children:[Object(n.jsx)("g",{className:"ldl-layer",children:Object(n.jsx)("g",{className:"ldl-ani",style:{transformOrigin:"50px 50px",transform:"scale(0.91)"},children:Object(n.jsx)("path",{fill:"#e15b64",d:"M14.653 85.487c-3.138-1.806-4.167-6.008-2.198-9.12 8.401-13.282 18.34-25.329 29.177-36.099 10.916-10.864 22.708-20.49 34.913-29.273 2.772-1.995 6.57-1.344 8.557 1.485 1.928 2.744 1.471 6.578-1.06 8.732-11.111 9.456-21.591 19.558-30.95 30.517C43.876 62.5 35.786 74.12 29.248 86.488c-1.653 3.126-5.423 4.276-8.429 2.547l-6.166-3.548z",style:{fill:"rgb(159, 0, 19)"},children:Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",dur:"2s",repeatCount:"indefinite",keyTimes:"0; 0.5; 1",values:"0.8 0.8; 1 1; 0.8 0.8"})})})}),Object(n.jsx)("g",{className:"ldl-layer",children:Object(n.jsx)("g",{className:"ldl-ani",style:{transformOrigin:"50px 50px",transform:"scale(0.91)"},children:Object(n.jsx)("path",{fill:"#e15b64",d:"M78.739 82.438c-3.067 1.804-7.041.872-8.916-2.152-6.367-10.267-14.543-19.718-23.698-28.397-9.306-8.827-19.587-16.906-30.29-24.594a6.594 6.594 0 0 1-1.682-8.948l1.23-1.895a6.609 6.609 0 0 1 9.03-2.012c11.571 7.19 22.962 14.943 33.735 23.864 10.673 8.851 20.777 18.958 29.162 30.721 2.256 3.165 1.337 7.584-2.014 9.555l-6.557 3.858z",style:{fill:"rgb(159, 0, 19)"},children:Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",dur:"2s",begin:"0.5s",repeatCount:"indefinite",keyTimes:"0; 0.5; 1",values:"1 1; 0.8 0.8; 1 1"})})})})]})})})};a.defaultProps={message:"Something went wrong"},e.a=a},22:function(t,e,r){},23:function(t,e,r){t.exports=r(32)},24:function(t,e,r){"use strict";function n(t,e,r,n,a,o,c){try{var i=t[o](c),s=i.value}catch(u){return void r(u)}i.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var c=t.apply(e,r);function i(t){n(c,a,o,i,s,"next",t)}function s(t){n(c,a,o,i,s,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return a}))},25:function(t,e,r){"use strict";var n=r(21),a=r(9),o=r(1);e.a=function(t,e,r,c){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return t?Object(o.jsx)(n.a,{message:e,flex:s}):r?c:i?Object(o.jsxs)(o.Fragment,{children:[c," ",Object(o.jsx)(a.a,{})]}):Object(o.jsx)(a.a,{})}},26:function(t,e,r){"use strict";var n=r(23),a=r.n(n),o=r(24),c=r(4),i=r(0),s=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(i.useState)(t),r=Object(c.a)(e,2),n=r[0],s=r[1],u=Object(i.useState)(!1),l=Object(c.a)(u,2),f=l[0],h=l[1],p=Object(i.useState)(""),d=Object(c.a)(p,2),m=d[0],v=d[1],g=Object(i.useState)(!1),b=Object(c.a)(g,2),y=b[0],j=b[1],w=Object(i.useCallback)(function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n,o,c,i,u=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",n=u.length>2&&void 0!==u[2]?u[2]:null,o=u.length>3&&void 0!==u[3]?u[3]:{"Content-type":"application/json"},s(!1),h(!1),j(!0),t.prev=6,t.next=9,fetch(e,{method:r,body:n,headers:o});case 9:if((c=t.sent).ok){t.next=12;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(c.status));case 12:return t.next=14,c.json();case 14:return i=t.sent,s(!0),h(!1),j(!1),t.abrupt("return",i);case 21:throw t.prev=21,t.t0=t.catch(6),s(!0),h(!0),j(!1),v("Something went wrong. Please try again later."),t.t0;case 28:case"end":return t.stop()}}),t,null,[[6,21]])})));return function(e){return t.apply(this,arguments)}}(),[]),x=Object(i.useCallback)((function(){h(!1),v("")}),[]);return{loaded:n,error:f,errorMessage:m,newItemsLoading:y,request:w,clearError:x}},u="0cccfebfa143cbee173b3ff218a5afc4";e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=s(t),r=e.loaded,n=e.error,c=e.errorMessage,i=e.request,l=e.clearError,f="https://gateway.marvel.com:443/v1/public",h="apikey=",p=210,d=9,m=4,v={allCharacters:"".concat(f,"/characters?"),singleCharacter:"".concat(f,"/characters/"),allComics:"".concat(f,"/comics?"),singleComics:"".concat(f,"/comics/")},g=function(){var t=Object(o.a)(a.a.mark((function t(){var e,r,n=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:p,t.next=3,i(v.allCharacters+"limit=".concat(d,"&offset=").concat(e,"&").concat(h).concat(u));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(x));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.toString().length<7)){t.next=2;break}throw new Error("Invalid id of a character");case 2:return t.next=4,i(v.singleCharacter+e+"?"+h+u);case 4:return r=t.sent,n=r.data.results[0],t.abrupt("return",x(n));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(a.a.mark((function t(){var e,r,n=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:0,t.next=3,i(v.allComics+"limit=".concat(m,"&offset=").concat(e,"&").concat(h).concat(u));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(O));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(v.singleComics+e+"?"+h+u);case 2:return r=t.sent,n=r.data.results[0],t.abrupt("return",O(n));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.toString().length<7)){t.next=2;break}throw new Error("Invalid id of a character");case 2:return t.next=4,i(v.singleCharacter+e+"/comics?"+h+u);case 4:return r=t.sent,t.abrupt("return",r.data.results.map(O));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(t){var e="\n            Please visit Homepage or Wiki for detailed description of ".concat(t.name,"\n            "),r=t.description||e;return r.length>=235&&(r=r.slice(0,235)+"..."),{id:t.id,name:t.name,description:r,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url}},O=function(t){var e=t.prices[0].price?"".concat(t.prices[0].price,"$"):"Price Not Available",r=t.pageCount?"".concat(t.pageCount," pages"):"Unknown number of pages";return{id:t.id,title:t.title,description:t.description||"No description available",price:e,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,pages:r,language:t.textObjects.language||"en-US"}};return{_baseCharactersLimit:d,_baseCharactersOffset:p,_baseComicsLimit:m,loaded:r,error:n,errorMessage:c,clearError:l,getAllCharacters:g,getCharacter:b,getAllComics:y,getSingleComics:j,getCharacterComics:w}}},27:function(t,e,r){"use strict";var n=r(28),a=r(29),o=r(31),c=r(30),i=r(0),s=r(21),u=r(1),l=function(t){Object(o.a)(r,t);var e=Object(c.a)(r);function r(){var t;Object(n.a)(this,r);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={error:!1},t}return Object(a.a)(r,[{key:"componentDidCatch",value:function(t,e){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(s.a,{message:"Something went wrong. Please try again later"}):this.props.children}}]),r}(i.Component);e.a=l},28:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},29:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return a}))},30:function(t,e,r){"use strict";function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=n(t);if(e){var c=n(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return o(this,r)}}r.d(e,"a",(function(){return c}))},31:function(t,e,r){"use strict";function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",(function(){return a}))},32:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),c=new L(n||[]);return o._invoke=function(t,e,r){var n=f;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=k(c,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,c),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",m={};function v(){}function g(){}function b(){}var y={};s(y,o,(function(){return this}));var j=Object.getPrototypeOf,w=j&&j(j(C([])));w&&w!==r&&n.call(w,o)&&(y=w);var x=b.prototype=v.prototype=Object.create(y);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(a,o,c,i){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,i)}))}i(s.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=b,s(x,"constructor",b),s(b,"constructor",g),g.displayName=s(b,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(_.prototype),s(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new _(u(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(x),s(x,i,"Generator"),s(x,o,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return i.type="throw",i.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},33:function(t,e,r){},34:function(t,e,r){"use strict";r(33);var n=r.p+"static/media/Avengers.c29e0ef0.png",a=r.p+"static/media/Avengers_logo.9b944f71.png",o=r(1);e.a=function(){return Object(o.jsxs)("div",{className:"banner",children:[Object(o.jsx)("div",{className:"banner__image",children:Object(o.jsx)("img",{src:n,alt:"Avengers"})}),Object(o.jsxs)("div",{className:"banner__text",children:[Object(o.jsx)("p",{children:"New comics every week!"}),Object(o.jsx)("p",{children:"Stay tuned!"})]}),Object(o.jsx)("div",{className:"banner__image",children:Object(o.jsx)("img",{src:a,alt:"Avengers Logo"})})]})}},43:function(t,e,r){},47:function(t,e,r){"use strict";r.r(e);var n=r(2),a=r(34),o=r(4),c=r(0),i=r(5),s=r(26),u=r(25),l=(r(43),r(1)),f=function(t){var e=t.comics;if(!e)return null;var r=e.title,n=e.thumbnail,a=e.pages,o=e.price,c=e.description,s=e.language,u="comics-info__image";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(u+=" comics-info__image_fill"),Object(l.jsxs)("div",{className:"comics-info",children:[Object(l.jsx)("div",{className:u,children:Object(l.jsx)("img",{src:n,alt:"Cover of ".concat(r," comics")})}),Object(l.jsxs)("div",{className:"comics-info__main",children:[Object(l.jsx)("h3",{className:"comics-info__title",children:r}),Object(l.jsx)("article",{className:"comics-info__description",children:c}),Object(l.jsx)("div",{className:"comics-info__pages",children:a}),Object(l.jsxs)("div",{className:"comics-info__lang",children:["Language: ",s]}),Object(l.jsx)("span",{className:"comics-info__price",children:o})]}),Object(l.jsx)("div",{className:"comics-info__links",children:Object(l.jsx)(i.b,{to:"/marvel-wiki-portal/comics",className:"comics-info__link",children:"Back to all"})})]})},h=function(t){var e=t.comicsId,r=Object(s.a)(),n=r.loaded,a=r.error,i=r.errorMessage,h=r.getSingleComics,p=r.clearError,d=Object(c.useState)(null),m=Object(o.a)(d,2),v=m[0],g=m[1];Object(c.useEffect)((function(){y(e)}),[e]);var b=function(t){g(t)},y=function(t){p(),h(t).then(b)},j=Object(l.jsx)(f,{comics:v}),w=Object(u.a)(a,i,n,j);return Object(l.jsx)(l.Fragment,{children:w})},p=r(27);e.default=function(){var t=Object(n.g)().comicsId;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a.a,{}),Object(l.jsx)(p.a,{children:Object(l.jsx)(h,{comicsId:t})})]})}}}]);
//# sourceMappingURL=3.b3896c53.chunk.js.map