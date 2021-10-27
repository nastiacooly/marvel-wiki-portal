(this.webpackJsonpmarvel_wiki=this.webpackJsonpmarvel_wiki||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(1),c=t.n(r),n=t(10),s=t.n(n),i=t(2),o=t(3),l=t(5),h=t(4),d=(t(15),t(0)),m=function(){return Object(d.jsxs)("header",{className:"app-header",children:[Object(d.jsxs)("h1",{className:"app-name",children:[Object(d.jsx)("span",{className:"app-name__main-title",children:"Marvel"})," Wiki Portal"]}),Object(d.jsx)("nav",{className:"app-menu",children:Object(d.jsxs)("ul",{className:"app-menu__list",children:[Object(d.jsx)("li",{className:"app-menu__item app-menu__item_chosen",children:Object(d.jsx)("a",{href:"marvel.com",children:"Characters"})}),"/",Object(d.jsx)("li",{className:"app-menu__item",children:Object(d.jsx)("a",{href:"marvel.com",children:"Comics"})})]})})]})},u=t(6),j=t.n(u),b=t(7),p="0cccfebfa143cbee173b3ff218a5afc4",f=function e(){var a=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public",this._apiKeyBase="apikey=",this._baseCharactersOffset=210,this._baseCharactersLimit=9,this._apiUrls={allCharacters:"".concat(this._apiBase,"/characters?"),singleCharacter:"".concat(this._apiBase,"/characters/")},this.getResource=function(){var e=Object(b.a)(j.a.mark((function e(a){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(a,", status: ").concat(t.status));case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(b.a)(j.a.mark((function e(){var t,r,c=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:a._baseCharactersOffset,e.next=3,a.getResource(a._apiUrls.allCharacters+"limit=".concat(a._baseCharactersLimit,"&offset=").concat(t,"&").concat(a._apiKeyBase).concat(p));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(a._transformCharacterData));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(b.a)(j.a.mark((function e(t){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.toString().length<7)){e.next=2;break}throw new Error("Invalid id of a character");case 2:return e.next=4,a.getResource(a._apiUrls.singleCharacter+t+"?"+a._apiKeyBase+p);case 4:return r=e.sent,c=r.data.results[0],e.abrupt("return",a._transformCharacterData(c));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this._transformCharacterData=function(e){var a="\n            Please visit Homepage or Wiki for detailed description of ".concat(e.name,"\n            "),t=e.description||a;return t.length>=235&&(t=t.slice(0,235)+"..."),{id:e.id,name:e.name,description:t,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}},O=function(){return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(d.jsx)("circle",{cx:"50",cy:"50",r:"32",strokeWidth:"8",stroke:"#9f0013",strokeDasharray:"50.26548245743669 50.26548245743669",fill:"none",strokeLinecap:"round",children:Object(d.jsx)("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 50;360 50 50"})}),Object(d.jsx)("circle",{cx:"50",cy:"50",r:"23",strokeWidth:"8",stroke:"#232222",strokeDasharray:"36.12831551628262 36.12831551628262",strokeDashoffset:"36.12831551628262",fill:"none",strokeLinecap:"round",children:Object(d.jsx)("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 50;-360 50 50"})})]})},x=(t(18),function(e){var a,t=e.message;switch(e.flex){case"column":a="error-view error-view_columned";break;case"row":a="error-view error-view_rowed";break;default:a="error-view"}return Object(d.jsxs)("div",{className:a,children:[Object(d.jsx)(v,{}),Object(d.jsx)("p",{className:"error-view__message",children:t})]})}),v=function(){return Object(d.jsx)("svg",{viewBox:"0 0 100 100",y:"0",x:"0",xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{height:"150px",width:"150px",background:"none"},width:"150px",height:"150px",children:Object(d.jsx)("g",{className:"ldl-scale",style:{transformOrigin:"50% 50%",transform:"scale(0.8, 0.8)"},children:Object(d.jsxs)("g",{className:"ldl-ani",children:[Object(d.jsx)("g",{className:"ldl-layer",children:Object(d.jsx)("g",{className:"ldl-ani",style:{transformOrigin:"50px 50px",transform:"scale(0.91)"},children:Object(d.jsx)("path",{fill:"#e15b64",d:"M14.653 85.487c-3.138-1.806-4.167-6.008-2.198-9.12 8.401-13.282 18.34-25.329 29.177-36.099 10.916-10.864 22.708-20.49 34.913-29.273 2.772-1.995 6.57-1.344 8.557 1.485 1.928 2.744 1.471 6.578-1.06 8.732-11.111 9.456-21.591 19.558-30.95 30.517C43.876 62.5 35.786 74.12 29.248 86.488c-1.653 3.126-5.423 4.276-8.429 2.547l-6.166-3.548z",style:{fill:"rgb(159, 0, 19)"},children:Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",dur:"2s",repeatCount:"indefinite",keyTimes:"0; 0.5; 1",values:"0.8 0.8; 1 1; 0.8 0.8"})})})}),Object(d.jsx)("g",{className:"ldl-layer",children:Object(d.jsx)("g",{className:"ldl-ani",style:{transformOrigin:"50px 50px",transform:"scale(0.91)"},children:Object(d.jsx)("path",{fill:"#e15b64",d:"M78.739 82.438c-3.067 1.804-7.041.872-8.916-2.152-6.367-10.267-14.543-19.718-23.698-28.397-9.306-8.827-19.587-16.906-30.29-24.594a6.594 6.594 0 0 1-1.682-8.948l1.23-1.895a6.609 6.609 0 0 1 9.03-2.012c11.571 7.19 22.962 14.943 33.735 23.864 10.673 8.851 20.777 18.958 29.162 30.721 2.256 3.165 1.337 7.584-2.014 9.555l-6.557 3.858z",style:{fill:"rgb(159, 0, 19)"},children:Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",dur:"2s",begin:"0.5s",repeatCount:"indefinite",keyTimes:"0; 0.5; 1",values:"1 1; 0.8 0.8; 1 1"})})})})]})})})};x.defaultProps={message:"Something went wrong"};var g=x,_=(t(19),t(20),function(e){Object(l.a)(t,e);var a=Object(h.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).onCharacterLoading=function(){r.setState({loaded:!1,error:!1})},r.onCharacterLoaded=function(e){r.setState({character:e,loaded:!0,error:!1})},r.onError=function(){r.setState({loaded:!0,error:!0,errorMessage:"Something went wrong. Please try again."})},r.marvelService=new f,r.getRandomCharacter=function(){r.onCharacterLoading();var e=1011e3,a=Math.floor(e+400*Math.random());r.marvelService.getCharacter(a).then(r.onCharacterLoaded).catch(r.onError)},r.getContent=function(){var e=r.state,a=e.character,t=e.loaded,c=e.error,n=e.errorMessage;return c?Object(d.jsx)(g,{message:n,flex:"row"}):t?Object(d.jsx)(C,{character:a}):Object(d.jsx)(O,{})},r.state={character:{},loaded:!1,error:!1,errorMessage:""},r}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getRandomCharacter()}},{key:"render",value:function(){var e=this.getContent();return Object(d.jsxs)("section",{className:"random-section",children:[Object(d.jsx)("div",{className:"random-character",children:e}),Object(d.jsxs)("div",{className:"random-choose",children:[Object(d.jsxs)("p",{className:"random-choose__text",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"random-choose__text random-choose__text_margined",children:"Or choose another one"}),Object(d.jsx)("button",{className:"app-button app-button_main app-button_on-dark-bg",onClick:this.getRandomCharacter,children:"Try It"})]})]})]})}}]),t}(r.Component)),C=function(e){var a=e.character,t=a.name,c=a.thumbnail,n=a.description,s=a.homepage,i=a.wiki,o="random-character__image";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(o+=" random-character__image_contain"),Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)("div",{className:o,children:Object(d.jsx)("img",{src:c,alt:"random character"})}),Object(d.jsxs)("div",{className:"random-character__details",children:[Object(d.jsx)("h3",{className:"random-character__name",children:t}),Object(d.jsx)("p",{className:"random-character__descr",children:n}),Object(d.jsxs)("div",{className:"random-character__links",children:[Object(d.jsx)("a",{href:s,className:"app-button app-button_main",children:"Homepage"}),Object(d.jsx)("a",{href:i,className:"app-button",children:"Wiki"})]})]})]})},k=_,N=t(9),w=(t(21),function(e){Object(l.a)(t,e);var a=Object(h.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,a=e.id,t=e.image,r=e.name,c=e.onCharacterCardSelected,n=e.active,s="character-card__image";"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===this.props.image&&(s+=" character-card__image_contain");var i=n?"character-card character-card_active":"character-card";return Object(d.jsxs)("li",{className:i,tabIndex:"0",onClick:function(){return c(a)},onKeyPress:function(e){" "!==e.key&&"Enter"!==e.key||c(a)},children:[Object(d.jsx)("div",{className:s,children:Object(d.jsx)("img",{src:t,alt:"Comics Character Portrait"})}),Object(d.jsx)("div",{className:"character-card__details",children:Object(d.jsx)("h3",{className:"character-card__name",children:r})})]})}}]),t}(r.Component)),y=w,S=(t(22),function(e){Object(l.a)(t,e);var a=Object(h.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).marvelService=new f,r.onLoadCharacters=function(e){r.onCharactersLoading(),r.marvelService.getAllCharacters(e).then(r.onCharactersLoaded).catch(r.onError)},r.onCharactersLoaded=function(e){r.setState((function(a){var t=r.marvelService._baseCharactersLimit,c=!1;return e.length<t&&(c=!0),{characters:[].concat(Object(N.a)(a.characters),Object(N.a)(e)),loaded:!0,newItemsLoading:!1,charactersEnded:c,error:!1,offset:a.offset+t}}))},r.onCharactersLoading=function(){r.setState({loaded:!1,error:!1,newItemsLoading:!0})},r.onError=function(){r.setState({loaded:!0,error:!0,newItemsLoading:!1,errorMessage:"Something went wrong. Please try updating the page."})},r.renderCharacterCards=function(e){if(!e)return null;var a=r.props,t=a.onCharacterCardSelected,c=a.activeCharacterCard;return e.map((function(e){var a=e.id,r=e.name,n=e.thumbnail,s=a===c;return Object(d.jsx)(y,{id:a,name:r,image:n,onCharacterCardSelected:t,active:s},a)}))},r.getContent=function(){var e=r.state,a=e.characters,t=e.error,c=e.loaded,n=e.errorMessage,s=r.renderCharacterCards(a);return t?Object(d.jsx)(g,{message:n,flex:"column"}):c?s:Object(d.jsxs)(d.Fragment,{children:[" ",s," ",Object(d.jsx)(O,{})," "]})},r.state={characters:[],loaded:!1,newItemsLoading:!1,charactersEnded:!1,error:!1,errorMessage:"",offset:r.marvelService._baseCharactersOffset},r}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.onLoadCharacters()}},{key:"render",value:function(){var e=this,a=this.state,t=a.offset,r=a.newItemsLoading,c=a.charactersEnded,n=this.getContent();return Object(d.jsxs)("div",{className:"characters-section",children:[Object(d.jsx)("ul",{className:"characters-section__list",children:n}),Object(d.jsx)("button",{className:"app-button app-button_main app-button_wide",disabled:r,style:{display:c?"none":"block"},onClick:function(){return e.onLoadCharacters(t)},children:"Load More"})]})}}]),t}(r.Component)),L=(t(23),function(){return Object(d.jsxs)("div",{className:"character__skeleton",children:[Object(d.jsx)("p",{className:"character__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),M=(t(24),function(e){Object(l.a)(t,e);var a=Object(h.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).marvelService=new f,r.onCharacterLoading=function(){r.setState({loaded:!1,error:!1,character:null})},r.onCharacterLoaded=function(e){r.setState({character:e,loaded:!0,error:!1})},r.onError=function(){r.setState({loaded:!0,error:!0,errorMessage:"Something went wrong. Please try again."})},r.getCharacterDetails=function(e){e&&(r.onCharacterLoading(),r.marvelService.getCharacter(e).then(r.onCharacterLoaded).catch(r.onError))},r.getContent=function(){var e=r.state,a=e.character,t=e.loaded,c=e.error,n=e.errorMessage;return c?Object(d.jsx)(g,{message:n,flex:"row"}):t?a?Object(d.jsx)(D,{character:a}):Object(d.jsx)(L,{}):Object(d.jsx)(O,{})},r.state={character:null,loaded:!0,error:!1,errorMessage:""},r}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getCharacterDetails(this.props.characterId)}},{key:"componentDidUpdate",value:function(e){this.props.characterId!==e.characterId&&this.getCharacterDetails(this.props.characterId)}},{key:"render",value:function(){var e,a=this.state.character,t=this.getContent(),r=null===a||void 0===a||null===(e=a.comics)||void 0===e?void 0:e.map((function(e,a){return Object(d.jsx)(I,{name:e.name},a)})),c=r&&r.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h5",{children:"Comics:"})," ",r]}):null;return Object(d.jsxs)("div",{className:"character-info",children:[t,Object(d.jsx)("ul",{className:"character-info__comics",children:c})]})}}]),t}(r.Component)),D=function(e){var a=e.character,t=a.name,c=a.thumbnail,n=a.description,s=a.homepage,i=a.wiki,o="character-info__image";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(o+=" character-info__image_contain"),Object(d.jsxs)(r.Fragment,{children:[Object(d.jsxs)("div",{className:"character-info__header",children:[Object(d.jsx)("div",{className:o,children:Object(d.jsx)("img",{src:c,alt:"Character Portrait"})}),Object(d.jsxs)("div",{className:"character-info__main",children:[Object(d.jsx)("h3",{className:"character-info__name",children:t}),Object(d.jsxs)("div",{className:"character-info__links",children:[Object(d.jsx)("a",{href:s,className:"app-button app-button_main app-button_mb10",children:"Homepage"}),Object(d.jsx)("a",{href:i,className:"app-button",children:"Wiki"})]})]})]}),Object(d.jsx)("article",{className:"character-info__bio",children:n})]})},I=function(e){return Object(d.jsx)("li",{className:"character-info__single-comics",children:e.name})},E=M,P=function(e){Object(l.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={error:!1},e}return Object(o.a)(t,[{key:"componentDidCatch",value:function(e,a){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(d.jsx)(g,{}):this.props.children}}]),t}(r.Component),B=P,R=t.p+"static/media/bottom_bg.4d6f9671.png",T=(t(25),function(e){Object(l.a)(t,e);var a=Object(h.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).onCharacterCardSelected=function(e){r.setState({activeCharacterCard:e})},r.state={activeCharacterCard:null},r}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state.activeCharacterCard;return Object(d.jsxs)("div",{className:"app-container",children:[Object(d.jsx)(m,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(B,{children:Object(d.jsx)(k,{})}),Object(d.jsxs)("div",{className:"characters-container",children:[Object(d.jsx)(B,{children:Object(d.jsx)(S,{activeCharacterCard:e,onCharacterCardSelected:this.onCharacterCardSelected})}),Object(d.jsx)(B,{children:Object(d.jsx)(E,{characterId:e})})]})]}),Object(d.jsx)("footer",{className:"app-footer",children:Object(d.jsx)("img",{src:R,alt:"Vision Character in Attacking Pose",className:"app-footer__image"})})]})}}]),t}(r.Component));t(26);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.a043858f.chunk.js.map