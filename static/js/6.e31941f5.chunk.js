(this["webpackJsonpmarvel-wiki-portal"]=this["webpackJsonpmarvel-wiki-portal"]||[]).push([[6],{21:function(e,t,r){"use strict";r(22);var a=r(1),n=function(e){var t,r=e.message;switch(e.flex){case"column":t="error-view error-view_columned";break;case"row":t="error-view error-view_rowed";break;default:t="error-view"}return Object(a.jsxs)("div",{className:t,children:[Object(a.jsx)(c,{}),Object(a.jsx)("p",{className:"error-view__message",children:r})]})},c=function(){return Object(a.jsx)("svg",{viewBox:"0 0 100 100",y:"0",x:"0",xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{height:"150px",width:"150px",background:"none"},width:"150px",height:"150px",children:Object(a.jsx)("g",{className:"ldl-scale",style:{transformOrigin:"50% 50%",transform:"scale(0.8, 0.8)"},children:Object(a.jsxs)("g",{className:"ldl-ani",children:[Object(a.jsx)("g",{className:"ldl-layer",children:Object(a.jsx)("g",{className:"ldl-ani",style:{transformOrigin:"50px 50px",transform:"scale(0.91)"},children:Object(a.jsx)("path",{fill:"#e15b64",d:"M14.653 85.487c-3.138-1.806-4.167-6.008-2.198-9.12 8.401-13.282 18.34-25.329 29.177-36.099 10.916-10.864 22.708-20.49 34.913-29.273 2.772-1.995 6.57-1.344 8.557 1.485 1.928 2.744 1.471 6.578-1.06 8.732-11.111 9.456-21.591 19.558-30.95 30.517C43.876 62.5 35.786 74.12 29.248 86.488c-1.653 3.126-5.423 4.276-8.429 2.547l-6.166-3.548z",style:{fill:"rgb(159, 0, 19)"},children:Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",dur:"2s",repeatCount:"indefinite",keyTimes:"0; 0.5; 1",values:"0.8 0.8; 1 1; 0.8 0.8"})})})}),Object(a.jsx)("g",{className:"ldl-layer",children:Object(a.jsx)("g",{className:"ldl-ani",style:{transformOrigin:"50px 50px",transform:"scale(0.91)"},children:Object(a.jsx)("path",{fill:"#e15b64",d:"M78.739 82.438c-3.067 1.804-7.041.872-8.916-2.152-6.367-10.267-14.543-19.718-23.698-28.397-9.306-8.827-19.587-16.906-30.29-24.594a6.594 6.594 0 0 1-1.682-8.948l1.23-1.895a6.609 6.609 0 0 1 9.03-2.012c11.571 7.19 22.962 14.943 33.735 23.864 10.673 8.851 20.777 18.958 29.162 30.721 2.256 3.165 1.337 7.584-2.014 9.555l-6.557 3.858z",style:{fill:"rgb(159, 0, 19)"},children:Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",dur:"2s",begin:"0.5s",repeatCount:"indefinite",keyTimes:"0; 0.5; 1",values:"1 1; 0.8 0.8; 1 1"})})})})]})})})};n.defaultProps={message:"Something went wrong"},t.a=n},22:function(e,t,r){},25:function(e,t,r){"use strict";var a=r(21),n=r(9),c=r(1);t.a=function(e,t,r,s){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return e?Object(c.jsx)(a.a,{message:t,flex:o}):r?s:i?Object(c.jsxs)(c.Fragment,{children:[s," ",Object(c.jsx)(n.a,{})]}):Object(c.jsx)(n.a,{})}},26:function(e,t,r){"use strict";var a=r(23),n=r.n(a),c=r(24),s=r(4),i=r(0),o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(i.useState)(e),r=Object(s.a)(t,2),a=r[0],o=r[1],l=Object(i.useState)(!1),u=Object(s.a)(l,2),b=u[0],d=u[1],m=Object(i.useState)(""),p=Object(s.a)(m,2),j=p[0],h=p[1],f=Object(i.useState)(!1),g=Object(s.a)(f,2),v=g[0],O=g[1],x=Object(i.useCallback)(function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a,c,s,i,l=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{"Content-type":"application/json"},o(!1),d(!1),O(!0),e.prev=6,e.next=9,fetch(t,{method:r,body:a,headers:c});case 9:if((s=e.sent).ok){e.next=12;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 12:return e.next=14,s.json();case 14:return i=e.sent,o(!0),d(!1),O(!1),e.abrupt("return",i);case 21:throw e.prev=21,e.t0=e.catch(6),o(!0),d(!0),O(!1),h("Something went wrong. Please try again later."),e.t0;case 28:case"end":return e.stop()}}),e,null,[[6,21]])})));return function(t){return e.apply(this,arguments)}}(),[]),w=Object(i.useCallback)((function(){d(!1),h("")}),[]);return{loaded:a,error:b,errorMessage:j,newItemsLoading:v,request:x,clearError:w}},l="0cccfebfa143cbee173b3ff218a5afc4";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=o(e),r=t.loaded,a=t.error,s=t.errorMessage,i=t.request,u=t.clearError,b="https://gateway.marvel.com:443/v1/public",d="apikey=",m=210,p=9,j=4,h={allCharacters:"".concat(b,"/characters?"),singleCharacter:"".concat(b,"/characters/"),allComics:"".concat(b,"/comics?"),singleComics:"".concat(b,"/comics/")},f=function(){var e=Object(c.a)(n.a.mark((function e(){var t,r,a=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:m,e.next=3,i(h.allCharacters+"limit=".concat(p,"&offset=").concat(t,"&").concat(d).concat(l));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(w));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.toString().length<7)){e.next=2;break}throw new Error("Invalid id of a character");case 2:return e.next=4,i(h.singleCharacter+t+"?"+d+l);case 4:return r=e.sent,a=r.data.results[0],e.abrupt("return",w(a));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(n.a.mark((function e(){var t,r,a=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,i(h.allComics+"limit=".concat(j,"&offset=").concat(t,"&").concat(d).concat(l));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(y));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(h.singleComics+t+"?"+d+l);case 2:return r=e.sent,a=r.data.results[0],e.abrupt("return",y(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.toString().length<7)){e.next=2;break}throw new Error("Invalid id of a character");case 2:return e.next=4,i(h.singleCharacter+t+"/comics?"+d+l);case 4:return r=e.sent,e.abrupt("return",r.data.results.map(y));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t="\n            Please visit Homepage or Wiki for detailed description of ".concat(e.name,"\n            "),r=e.description||t;return r.length>=235&&(r=r.slice(0,235)+"..."),{id:e.id,name:e.name,description:r,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url}},y=function(e){var t=e.prices[0].price?"".concat(e.prices[0].price,"$"):"Price Not Available",r=e.pageCount?"".concat(e.pageCount," pages"):"Unknown number of pages";return{id:e.id,title:e.title,description:e.description||"No description available",price:t,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,pages:r,language:e.textObjects.language||"en-US"}};return{_baseCharactersLimit:p,_baseCharactersOffset:m,_baseComicsLimit:j,loaded:r,error:a,errorMessage:s,clearError:u,getAllCharacters:f,getCharacter:g,getAllComics:v,getSingleComics:O,getCharacterComics:x}}},27:function(e,t,r){"use strict";var a=r(28),n=r(29),c=r(31),s=r(30),i=r(0),o=r(21),l=r(1),u=function(e){Object(c.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={error:!1},e}return Object(n.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(o.a,{message:"Something went wrong. Please try again later"}):this.props.children}}]),r}(i.Component);t.a=u},33:function(e,t,r){},34:function(e,t,r){"use strict";r(33);var a=r.p+"static/media/Avengers.c29e0ef0.png",n=r.p+"static/media/Avengers_logo.9b944f71.png",c=r(1);t.a=function(){return Object(c.jsxs)("div",{className:"banner",children:[Object(c.jsx)("div",{className:"banner__image",children:Object(c.jsx)("img",{src:a,alt:"Avengers"})}),Object(c.jsxs)("div",{className:"banner__text",children:[Object(c.jsx)("p",{children:"New comics every week!"}),Object(c.jsx)("p",{children:"Stay tuned!"})]}),Object(c.jsx)("div",{className:"banner__image",children:Object(c.jsx)("img",{src:n,alt:"Avengers Logo"})})]})}},41:function(e,t,r){},42:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var a=r(34),n=r(35),c=r(4),s=r(0),i=r(26),o=r(25),l=r(5),u=(r(41),r(1)),b=function(e){var t=e.id,r=e.title,a=e.price,n=e.image,c="comics-card__image";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(c+=" comics-card__image_fill"),Object(u.jsx)("li",{className:"comics-card",tabIndex:"0",id:t,children:Object(u.jsxs)(l.b,{to:"/marvel-wiki-portal/comics/".concat(t),children:[Object(u.jsx)("div",{className:c,children:Object(u.jsx)("img",{src:n,alt:"Cover of ".concat(r," comics")})}),Object(u.jsxs)("div",{className:"comics-card__details",children:[Object(u.jsx)("h3",{className:"comics-card__title",children:r}),Object(u.jsx)("span",{className:"comics-card__price",children:a})]})]})})},d=(r(42),function(){var e=Object(i.a)(),t=e._baseComicsLimit,r=e.loaded,a=e.error,l=e.errorMessage,d=e.newItemsLoading,m=e.clearError,p=e.getAllComics,j=Object(s.useState)([]),h=Object(c.a)(j,2),f=h[0],g=h[1],v=Object(s.useState)(!1),O=Object(c.a)(v,2),x=O[0],w=O[1],y=Object(s.useState)(0),C=Object(c.a)(y,2),_=C[0],k=C[1];Object(s.useEffect)((function(){S()}),[]);var N=function(e){var r=!1;e.length<t&&(r=!0),g((function(t){return[].concat(Object(n.a)(t),Object(n.a)(e))})),w(r),k((function(e){return e+t}))},S=function(e){m(),p(e).then(N)},A=function(e){return e?e.map((function(e,t){var r=e.id,a=e.title,n=e.price,c=e.thumbnail;return Object(u.jsx)(b,{id:r,title:a,image:c,price:n},t)})):null}(f),E=Object(o.a)(a,l,r,A,!0,"column");return Object(u.jsxs)("div",{className:"comics-section",children:[Object(u.jsx)("ul",{className:"comics-section__list",children:E}),Object(u.jsx)("button",{className:"app-button app-button_main app-button_wide",disabled:d,style:{display:x?"none":"block"},onClick:function(){return S(_)},children:"Load More"})]})}),m=r(27);t.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(a.a,{}),Object(u.jsx)(m.a,{children:Object(u.jsx)(d,{})})]})}}}]);
//# sourceMappingURL=6.e31941f5.chunk.js.map