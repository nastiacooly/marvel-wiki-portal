(this["webpackJsonpmarvel-wiki-portal"]=this["webpackJsonpmarvel-wiki-portal"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(13),s=c.n(n),i=c(4),o=c(2),l=c(3),j=c(5),m=c.n(j),d=c(7),u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a.useState)(e),c=Object(l.a)(t,2),r=c[0],n=c[1],s=Object(a.useState)(!1),i=Object(l.a)(s,2),o=i[0],j=i[1],u=Object(a.useState)(""),b=Object(l.a)(u,2),h=b[0],p=b[1],O=Object(a.useState)(!1),f=Object(l.a)(O,2),x=f[0],g=f[1],v=Object(a.useCallback)(function(){var e=Object(d.a)(m.a.mark((function e(t){var c,a,r,s,i,o=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{"Content-type":"application/json"},n(!1),j(!1),g(!0),e.prev=6,e.next=9,fetch(t,{method:c,body:a,headers:r});case 9:if((s=e.sent).ok){e.next=12;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 12:return e.next=14,s.json();case 14:return i=e.sent,n(!0),j(!1),g(!1),e.abrupt("return",i);case 21:throw e.prev=21,e.t0=e.catch(6),n(!0),j(!0),g(!1),p("Something went wrong. Please try again later."),e.t0;case 28:case"end":return e.stop()}}),e,null,[[6,21]])})));return function(t){return e.apply(this,arguments)}}(),[]),_=Object(a.useCallback)((function(){j(!1),p("")}),[]);return{loaded:r,error:o,errorMessage:h,newItemsLoading:x,request:v,clearError:_}},b="0cccfebfa143cbee173b3ff218a5afc4",h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=u(e),c=t.loaded,a=t.error,r=t.errorMessage,n=t.request,s=t.clearError,i="https://gateway.marvel.com:443/v1/public",o="apikey=",l=210,j=9,h=4,p={allCharacters:"".concat(i,"/characters?"),singleCharacter:"".concat(i,"/characters/"),allComics:"".concat(i,"/comics?"),singleComics:"".concat(i,"/comics/")},O=function(){var e=Object(d.a)(m.a.mark((function e(){var t,c,a=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:l,e.next=3,n(p.allCharacters+"limit=".concat(j,"&offset=").concat(t,"&").concat(o).concat(b));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(_));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(m.a.mark((function e(t){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.toString().length<7)){e.next=2;break}throw new Error("Invalid id of a character");case 2:return e.next=4,n(p.singleCharacter+t+"?"+o+b);case 4:return c=e.sent,a=c.data.results[0],e.abrupt("return",_(a));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(m.a.mark((function e(){var t,c,a=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,n(p.allComics+"limit=".concat(h,"&offset=").concat(t,"&").concat(o).concat(b));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(N));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(m.a.mark((function e(t){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(p.singleComics+t+"?"+o+b);case 2:return c=e.sent,a=c.data.results[0],e.abrupt("return",N(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.toString().length<7)){e.next=2;break}throw new Error("Invalid id of a character");case 2:return e.next=4,n(p.singleCharacter+t+"/comics?"+o+b);case 4:return c=e.sent,e.abrupt("return",c.data.results.map(N));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t="\n            Please visit Homepage or Wiki for detailed description of ".concat(e.name,"\n            "),c=e.description||t;return c.length>=235&&(c=c.slice(0,235)+"..."),{id:e.id,name:e.name,description:c,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url}},N=function(e){var t=e.prices[0].price?"".concat(e.prices[0].price,"$"):"Price Not Available",c=e.pageCount?"".concat(e.pageCount," pages"):"Unknown number of pages";return{id:e.id,title:e.title,description:e.description||"No description available",price:t,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,pages:c,language:e.textObjects.language||"en-US"}};return{_baseCharactersLimit:j,_baseCharactersOffset:l,_baseComicsLimit:h,loaded:c,error:a,errorMessage:r,clearError:s,getAllCharacters:O,getCharacter:f,getAllComics:x,getSingleComics:g,getCharacterComics:v}},p=c(0),O=function(){return Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(p.jsx)("circle",{cx:"50",cy:"50",r:"32",strokeWidth:"8",stroke:"#9f0013",strokeDasharray:"50.26548245743669 50.26548245743669",fill:"none",strokeLinecap:"round",children:Object(p.jsx)("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 50;360 50 50"})}),Object(p.jsx)("circle",{cx:"50",cy:"50",r:"23",strokeWidth:"8",stroke:"#232222",strokeDasharray:"36.12831551628262 36.12831551628262",strokeDashoffset:"36.12831551628262",fill:"none",strokeLinecap:"round",children:Object(p.jsx)("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 50;-360 50 50"})})]})},f=(c(24),function(e){var t,c=e.message;switch(e.flex){case"column":t="error-view error-view_columned";break;case"row":t="error-view error-view_rowed";break;default:t="error-view"}return Object(p.jsxs)("div",{className:t,children:[Object(p.jsx)(x,{}),Object(p.jsx)("p",{className:"error-view__message",children:c})]})}),x=function(){return Object(p.jsx)("svg",{viewBox:"0 0 100 100",y:"0",x:"0",xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{height:"150px",width:"150px",background:"none"},width:"150px",height:"150px",children:Object(p.jsx)("g",{className:"ldl-scale",style:{transformOrigin:"50% 50%",transform:"scale(0.8, 0.8)"},children:Object(p.jsxs)("g",{className:"ldl-ani",children:[Object(p.jsx)("g",{className:"ldl-layer",children:Object(p.jsx)("g",{className:"ldl-ani",style:{transformOrigin:"50px 50px",transform:"scale(0.91)"},children:Object(p.jsx)("path",{fill:"#e15b64",d:"M14.653 85.487c-3.138-1.806-4.167-6.008-2.198-9.12 8.401-13.282 18.34-25.329 29.177-36.099 10.916-10.864 22.708-20.49 34.913-29.273 2.772-1.995 6.57-1.344 8.557 1.485 1.928 2.744 1.471 6.578-1.06 8.732-11.111 9.456-21.591 19.558-30.95 30.517C43.876 62.5 35.786 74.12 29.248 86.488c-1.653 3.126-5.423 4.276-8.429 2.547l-6.166-3.548z",style:{fill:"rgb(159, 0, 19)"},children:Object(p.jsx)("animateTransform",{attributeName:"transform",type:"scale",dur:"2s",repeatCount:"indefinite",keyTimes:"0; 0.5; 1",values:"0.8 0.8; 1 1; 0.8 0.8"})})})}),Object(p.jsx)("g",{className:"ldl-layer",children:Object(p.jsx)("g",{className:"ldl-ani",style:{transformOrigin:"50px 50px",transform:"scale(0.91)"},children:Object(p.jsx)("path",{fill:"#e15b64",d:"M78.739 82.438c-3.067 1.804-7.041.872-8.916-2.152-6.367-10.267-14.543-19.718-23.698-28.397-9.306-8.827-19.587-16.906-30.29-24.594a6.594 6.594 0 0 1-1.682-8.948l1.23-1.895a6.609 6.609 0 0 1 9.03-2.012c11.571 7.19 22.962 14.943 33.735 23.864 10.673 8.851 20.777 18.958 29.162 30.721 2.256 3.165 1.337 7.584-2.014 9.555l-6.557 3.858z",style:{fill:"rgb(159, 0, 19)"},children:Object(p.jsx)("animateTransform",{attributeName:"transform",type:"scale",dur:"2s",begin:"0.5s",repeatCount:"indefinite",keyTimes:"0; 0.5; 1",values:"1 1; 0.8 0.8; 1 1"})})})})]})})})};f.defaultProps={message:"Something went wrong"};var g=f,v=(c(12),c(25),function(e){var t=e.character,c=t.name,a=t.thumbnail,r=t.description,n=t.homepage,s=t.wiki,i="random-character__image";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i+=" random-character__image_contain"),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:i,children:Object(p.jsx)("img",{src:a,alt:"random character"})}),Object(p.jsxs)("div",{className:"random-character__details",children:[Object(p.jsx)("h3",{className:"random-character__name",children:c}),Object(p.jsx)("p",{className:"random-character__descr",children:r}),Object(p.jsxs)("div",{className:"random-character__links",children:[Object(p.jsx)("a",{href:n,className:"app-button app-button_main",children:"Homepage"}),Object(p.jsx)("a",{href:s,className:"app-button",children:"Wiki"})]})]})]})}),_=function(){var e=h(),t=e.loaded,c=e.error,r=e.errorMessage,n=e.getCharacter,s=e.clearError,i=Object(a.useState)({}),o=Object(l.a)(i,2),j=o[0],m=o[1];Object(a.useEffect)((function(){u()}),[]);var d=function(e){m(e)},u=function(){s();var e=1011e3,t=Math.floor(e+400*Math.random());n(t).then(d)},b=c?Object(p.jsx)(g,{message:r,flex:"row"}):t?Object(p.jsx)(v,{character:j}):Object(p.jsx)(O,{});return Object(p.jsxs)("section",{className:"random-section",children:[Object(p.jsx)("div",{className:"random-character",children:b}),Object(p.jsxs)("div",{className:"random-choose",children:[Object(p.jsxs)("p",{className:"random-choose__text",children:["Random character for today!",Object(p.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"random-choose__text random-choose__text_margined",children:"Or choose another one"}),Object(p.jsx)("button",{className:"app-button app-button_main app-button_on-dark-bg",onClick:u,children:"Try It"})]})]})]})},N=c(9),k=(c(26),function(e){var t=e.id,c=e.image,a=e.name,r=e.onCharacterCardSelected,n="character-card__image";"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(n+=" character-card__image_contain");var s=e.active?"character-card character-card_active":"character-card";return Object(p.jsxs)("li",{className:s,tabIndex:"0",onClick:function(){return r(t)},onKeyPress:function(e){" "!==e.key&&"Enter"!==e.key||r(t)},children:[Object(p.jsx)("div",{className:n,children:Object(p.jsx)("img",{src:c,alt:"Comics Character Portrait"})}),Object(p.jsx)("div",{className:"character-card__details",children:Object(p.jsx)("h3",{className:"character-card__name",children:a})})]})}),w=(c(27),function(e){var t=e.onCharacterCardSelected,c=e.activeCharacterCard,r=h(),n=r._baseCharactersOffset,s=r._baseCharactersLimit,i=r.loaded,o=r.error,j=r.errorMessage,m=r.newItemsLoading,d=r.clearError,u=r.getAllCharacters,b=Object(a.useState)([]),f=Object(l.a)(b,2),x=f[0],v=f[1],_=Object(a.useState)(!1),w=Object(l.a)(_,2),C=w[0],y=w[1],S=Object(a.useState)(n),M=Object(l.a)(S,2),E=M[0],I=M[1];Object(a.useEffect)((function(){P()}),[]);var L=function(e){var t=!1;e.length<s&&(t=!0),v((function(t){return[].concat(Object(N.a)(t),Object(N.a)(e))})),y(t),I((function(e){return e+s}))},P=function(e){d(),u(e).then(L)},A=function(){var e=function(e){return e?e.map((function(e){var a=e.id,r=e.name,n=e.thumbnail,s=a===c;return Object(p.jsx)(k,{id:a,name:r,image:n,onCharacterCardSelected:t,active:s},a)})):null}(x);return o?Object(p.jsx)(g,{message:j,flex:"column"}):i?e:Object(p.jsxs)(p.Fragment,{children:[" ",e," ",Object(p.jsx)(O,{})," "]})}();return Object(p.jsxs)("div",{className:"characters-section",children:[Object(p.jsx)("ul",{className:"characters-section__list",children:A}),Object(p.jsx)("button",{className:"app-button app-button_main app-button_wide",disabled:m,style:{display:C?"none":"block"},onClick:function(){return P(E)},children:"Load More"})]})}),C=(c(28),function(){return Object(p.jsxs)("div",{className:"character__skeleton",children:[Object(p.jsx)("p",{className:"character__select",children:"Please select a character to see information"}),Object(p.jsxs)("div",{className:"skeleton",children:[Object(p.jsxs)("div",{className:"pulse skeleton__header",children:[Object(p.jsx)("div",{className:"pulse skeleton__circle"}),Object(p.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(p.jsx)("div",{className:"pulse skeleton__block"}),Object(p.jsx)("div",{className:"pulse skeleton__block"}),Object(p.jsx)("div",{className:"pulse skeleton__block"})]})]})}),y=(c(29),function(e){var t=e.character;if(!t)return Object(p.jsx)(C,{});var c=t.name,a=t.thumbnail,r=t.description,n=t.homepage,s=t.wiki,i="character-info__image";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i+=" character-info__image_contain"),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"character-info__header",children:[Object(p.jsx)("div",{className:i,children:Object(p.jsx)("img",{src:a,alt:"Character Portrait"})}),Object(p.jsxs)("div",{className:"character-info__main",children:[Object(p.jsx)("h3",{className:"character-info__name",children:c}),Object(p.jsxs)("div",{className:"character-info__links",children:[Object(p.jsx)("a",{href:n,className:"app-button app-button_main app-button_mb10",children:"Homepage"}),Object(p.jsx)("a",{href:s,className:"app-button",children:"Wiki"})]})]})]}),Object(p.jsx)("article",{className:"character-info__bio",children:r})]})}),S=function(e){var t=e.id,c=e.title,a=e.image;return Object(p.jsx)("li",{className:"character-info__single-comics",children:Object(p.jsxs)(i.b,{to:"/marvel-wiki-portal/comics/".concat(t),className:"character-info__single-comics_on-hover",children:[Object(p.jsx)("h6",{children:c}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:a,alt:"Cover of ".concat(c," comics")})})]})})},M=function(e){var t=e.characterId,c=h(!0),r=c.loaded,n=c.error,s=c.errorMessage,i=c.getCharacter,o=c.getCharacterComics,j=c.clearError,m=Object(a.useState)(null),d=Object(l.a)(m,2),u=d[0],b=d[1],f=Object(a.useState)([]),x=Object(l.a)(f,2),v=x[0],_=x[1];Object(a.useEffect)((function(){w(t)}),[t]);var N=function(e){b(e)},k=function(e){_(e)},w=function(e){e&&(j(),b(null),_([]),i(e).then(N).then((function(){return o(e)})).then(k))},C=n?Object(p.jsx)(g,{message:s,flex:"row"}):r?Object(p.jsx)(y,{character:u}):Object(p.jsx)(O,{}),M=v.map((function(e){var t=e.id,c=e.title,a=e.thumbnail;return Object(p.jsx)(S,{id:t,title:c,image:a},t)})),E=M.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h5",{children:"Comics:"})," ",M]}):null;return Object(p.jsxs)("div",{className:"character-info",children:[C,Object(p.jsx)("ul",{className:"character-info__comics",children:E})]})},E=c(14),I=c(15),L=c(17),P=c(16),A=function(e){Object(L.a)(c,e);var t=Object(P.a)(c);function c(){var e;Object(E.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(I.a)(c,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(p.jsx)(g,{message:"Something went wrong. Please try again later"}):this.props.children}}]),c}(a.Component),F=A,T=c.p+"static/media/bottom_bg.4d6f9671.png",D=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(F,{children:Object(p.jsx)(_,{})}),Object(p.jsxs)("div",{className:"characters-container",children:[Object(p.jsx)(F,{children:Object(p.jsx)(w,{activeCharacterCard:c,onCharacterCardSelected:function(e){r(e)}})}),Object(p.jsx)(F,{children:Object(p.jsx)(M,{characterId:c})})]}),Object(p.jsx)("div",{className:"bg-decoration",children:Object(p.jsx)("img",{src:T,alt:"Vision Character in Attacking Pose",className:"bg-decoration__image"})})]})},W=(c(30),c.p+"static/media/Avengers.c29e0ef0.png"),B=c.p+"static/media/Avengers_logo.9b944f71.png",H=function(){return Object(p.jsxs)("div",{className:"banner",children:[Object(p.jsx)("div",{className:"banner__image",children:Object(p.jsx)("img",{src:W,alt:"Avengers"})}),Object(p.jsxs)("div",{className:"banner__text",children:[Object(p.jsx)("p",{children:"New comics every week!"}),Object(p.jsx)("p",{children:"Stay tuned!"})]}),Object(p.jsx)("div",{className:"banner__image",children:Object(p.jsx)("img",{src:B,alt:"Avengers Logo"})})]})},R=(c(31),function(e){var t=e.id,c=e.title,a=e.price,r=e.image,n="comics-card__image";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(n+=" comics-card__image_fill"),Object(p.jsx)("li",{className:"comics-card",tabIndex:"0",id:t,children:Object(p.jsxs)(i.b,{to:"/marvel-wiki-portal/comics/".concat(t),children:[Object(p.jsx)("div",{className:n,children:Object(p.jsx)("img",{src:r,alt:"Cover of ".concat(c," comics")})}),Object(p.jsxs)("div",{className:"comics-card__details",children:[Object(p.jsx)("h3",{className:"comics-card__title",children:c}),Object(p.jsx)("span",{className:"comics-card__price",children:a})]})]})})}),q=(c(32),function(){var e=h(),t=e._baseComicsLimit,c=e.loaded,r=e.error,n=e.errorMessage,s=e.newItemsLoading,i=e.clearError,o=e.getAllComics,j=Object(a.useState)([]),m=Object(l.a)(j,2),d=m[0],u=m[1],b=Object(a.useState)(!1),f=Object(l.a)(b,2),x=f[0],v=f[1],_=Object(a.useState)(0),k=Object(l.a)(_,2),w=k[0],C=k[1];Object(a.useEffect)((function(){S()}),[]);var y=function(e){var c=!1;e.length<t&&(c=!0),u((function(t){return[].concat(Object(N.a)(t),Object(N.a)(e))})),v(c),C((function(e){return e+t}))},S=function(e){i(),o(e).then(y)},M=function(){var e=function(e){return e?e.map((function(e,t){var c=e.id,a=e.title,r=e.price,n=e.thumbnail;return Object(p.jsx)(R,{id:c,title:a,image:n,price:r},t)})):null}(d);return r?Object(p.jsx)(g,{message:n,flex:"column"}):c?e:Object(p.jsxs)(p.Fragment,{children:[" ",e," ",Object(p.jsx)(O,{})," "]})}();return Object(p.jsxs)("div",{className:"comics-section",children:[Object(p.jsx)("ul",{className:"comics-section__list",children:M}),Object(p.jsx)("button",{className:"app-button app-button_main app-button_wide",disabled:s,style:{display:x?"none":"block"},onClick:function(){return S(w)},children:"Load More"})]})}),z=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(H,{}),Object(p.jsx)(F,{children:Object(p.jsx)(q,{})})]})},J=(c(33),function(e){var t=e.comics;if(!t)return null;var c=t.title,a=t.thumbnail,r=t.pages,n=t.price,s=t.description,o=t.language,l="comics-info__image";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(l+=" comics-info__image_fill"),Object(p.jsxs)("div",{className:"comics-info",children:[Object(p.jsx)("div",{className:l,children:Object(p.jsx)("img",{src:a,alt:"Cover of ".concat(c," comics")})}),Object(p.jsxs)("div",{className:"comics-info__main",children:[Object(p.jsx)("h3",{className:"comics-info__title",children:c}),Object(p.jsx)("article",{className:"comics-info__description",children:s}),Object(p.jsx)("div",{className:"comics-info__pages",children:r}),Object(p.jsxs)("div",{className:"comics-info__lang",children:["Language: ",o]}),Object(p.jsx)("span",{className:"comics-info__price",children:n})]}),Object(p.jsx)("div",{className:"comics-info__links",children:Object(p.jsx)(i.b,{to:"/marvel-wiki-portal/comics",className:"comics-info__link",children:"Back to all"})})]})}),U=function(e){var t=e.comicsId,c=h(),r=c.loaded,n=c.error,s=c.errorMessage,i=c.getSingleComics,o=c.clearError,j=Object(a.useState)(null),m=Object(l.a)(j,2),d=m[0],u=m[1];Object(a.useEffect)((function(){f(t)}),[t]);var b=function(e){u(e)},f=function(e){o(),i(e).then(b)},x=n?Object(p.jsx)(g,{message:s}):r?Object(p.jsx)(J,{comics:d}):Object(p.jsx)(O,{});return Object(p.jsx)(p.Fragment,{children:x})},G=function(){var e=Object(o.g)().comicsId;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(H,{}),Object(p.jsx)(F,{children:Object(p.jsx)(U,{comicsId:e})})]})},K=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(g,{message:"404 Page Not Found"}),Object(p.jsx)(i.b,{to:"/",className:"app-button app-button_main app-button_wide",children:"Back to Main Page"})]})},V=(c(34),function(){return Object(p.jsxs)("header",{className:"app-header",children:[Object(p.jsx)("h1",{className:"app-name",children:Object(p.jsxs)(i.b,{to:"/marvel-wiki-portal",children:[Object(p.jsx)("span",{className:"app-name__main-title",children:"Marvel"})," Wiki Portal"]})}),Object(p.jsx)("nav",{className:"app-menu",children:Object(p.jsxs)("ul",{className:"app-menu__list",children:[Object(p.jsx)("li",{className:"app-menu__item",children:Object(p.jsx)(i.c,{end:!0,to:"/marvel-wiki-portal",children:"Characters"})}),"/",Object(p.jsx)("li",{className:"app-menu__item",children:Object(p.jsx)(i.c,{to:"/marvel-wiki-portal/comics",children:"Comics"})})]})})]})}),Y=(c(35),function(){return Object(p.jsx)(i.a,{children:Object(p.jsxs)("div",{className:"app-container",children:[Object(p.jsx)(V,{}),Object(p.jsx)("main",{children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/marvel-wiki-portal",element:Object(p.jsx)(D,{})}),Object(p.jsx)(o.a,{path:"/marvel-wiki-portal/comics",element:Object(p.jsx)(z,{})}),Object(p.jsx)(o.a,{path:"/marvel-wiki-portal/comics/:comicsId",element:Object(p.jsx)(G,{})}),Object(p.jsx)(o.a,{path:"/marvel-wiki-portal/*",element:Object(p.jsx)(K,{})})]})}),Object(p.jsx)("footer",{children:"Data provided by Marvel. \xa9 2014 Marvel"})]})})});c(36);s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(Y,{})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.084ed0f2.chunk.js.map