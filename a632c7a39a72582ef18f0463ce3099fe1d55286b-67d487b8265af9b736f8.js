(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[544],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!a(e[u],i[u]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!a(u.value[1],i.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!a(e[l[u]],i[l[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},3160:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ee}});var r,o,a,i,c=n(7294),u=n(5444),l=(n(7212),function(){var e=(0,u.useStaticQuery)("440568431").site.siteMetadata.author;return c.createElement("footer",null,c.createElement("p",null,"© 2021 ",e,"."))}),s=n(8530),f=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1];return c.createElement("header",{className:s.header},c.createElement("nav",{className:s.pc},c.createElement("ul",{className:s.navList},c.createElement("li",null,c.createElement(u.Link,{className:s.navItem,activeClassName:s.activeNavItem,to:"/"},"HOME")),c.createElement("li",null,c.createElement(u.Link,{className:s.navItem,activeClassName:s.activeNavItem,to:"/about"},"ABOUT")),c.createElement("li",null,c.createElement(u.Link,{className:s.navItem,activeClassName:s.activeNavItem,to:"/tech"},"TECH")),c.createElement("li",null,c.createElement(u.Link,{className:s.navItem,activeClassName:s.activeNavItem,to:"/poem"},"POEM")))),c.createElement("nav",{className:s.sp,style:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(-100%)"}},c.createElement("ul",null,c.createElement("li",null,c.createElement(u.Link,{className:s.spNav,onClick:function(){n(!1)},to:"/"},"HOME")),c.createElement("li",null,c.createElement(u.Link,{className:s.spNav,onClick:function(){n(!1)},to:"/about"},"ABOUT")),c.createElement("li",null,c.createElement(u.Link,{className:s.spNav,onClick:function(){n(!1)},to:"/tech"},"TECH")),c.createElement("li",null,c.createElement(u.Link,{className:s.spNav,onClick:function(){n(!1)},to:"/peom"},"POEM")),c.createElement("li",{className:s.close},c.createElement("span",{onClick:function(){n(!1)}},"CLOSE")))),c.createElement("div",{className:s.ham,onClick:function(){n(!0)}},c.createElement("span",null)))},p=n(5697),d=n.n(p),m=n(4839),h=n.n(m),y=n(2993),v=n.n(y),b=n(6494),T=n.n(b),g="bodyAttributes",E="htmlAttributes",w="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(C).map((function(e){return C[e]})),"charset"),A="cssText",S="href",k="http-equiv",N="innerHTML",j="itemprop",L="name",I="property",P="rel",x="src",M="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",H="defer",B="encodeSpecialCharacters",D="onChangeClientState",q="titleTemplate",Y=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),F=[C.NOSCRIPT,C.SCRIPT,C.STYLE],U="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},$=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=ne(e,C.TITLE),n=ne(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ne(e,R);return t||r||void 0},G=function(e){return ne(e,D)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},ee=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},te=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ce("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||n===P&&"canonical"===e[n].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==N&&c!==A&&c!==j||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=T()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ne=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},re=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){re(e)}),0)}),oe=function(e){return clearTimeout(e)},ae="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||re:n.g.requestAnimationFrame||re,ie="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||oe:n.g.cancelAnimationFrame||oe,ce=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ue=null,le=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;pe(C.BODY,r),pe(C.HTML,o),fe(f,p);var d={baseTag:de(C.BASE,n),linkTags:de(C.LINK,a),metaTags:de(C.META,i),noscriptTags:de(C.NOSCRIPT,c),scriptTags:de(C.SCRIPT,l),styleTags:de(C.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},se=function(e){return Array.isArray(e)?e.join(""):e},fe=function(e,t){void 0!==e&&document.title!==e&&(document.title=se(e)),pe(C.TITLE,t)},pe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(U):n.getAttribute(U)!==i.join(",")&&n.setAttribute(U,i.join(","))}},de=function(e,t){var n=document.head||document.querySelector(C.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===N)n.innerHTML=t.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},me=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)},ye=function(e,t,n){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,o=he(n,r),[c.createElement(C.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=me(n),a=se(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+X(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case E:return{toComponent:function(){return he(t)},toString:function(){return me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=_[e]||e;if(n===N||n===A){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===N||e===A)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+X(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},ve=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:ye(C.BASE,t,r),bodyAttributes:ye(g,n,r),htmlAttributes:ye(E,o,r),link:ye(C.LINK,a,r),meta:ye(C.META,i,r),noscript:ye(C.NOSCRIPT,c,r),script:ye(C.SCRIPT,u,r),style:ye(C.STYLE,l,r),title:ye(C.TITLE,{title:f,titleAttributes:p},r)}},be=h()((function(e){return{baseTag:ee([S,M],e),bodyAttributes:J(g,e),defer:ne(e,H),encode:ne(e,B),htmlAttributes:J(E,e),linkTags:te(C.LINK,[P,S],e),metaTags:te(C.META,[L,O,k,I,j],e),noscriptTags:te(C.NOSCRIPT,[N],e),onChangeClientState:G(e),scriptTags:te(C.SCRIPT,[x,N],e),styleTags:te(C.STYLE,[A],e),title:Z(e),titleAttributes:J(w,e)}}),(function(e){ue&&ie(ue),e.defer?ue=ae((function(){le(e,(function(){ue=null}))})):(le(e),ue=null)}),ve)((function(){return null})),Te=(o=be,i=a=function(e){function t(){return K(this,t),$(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!v()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case C.TITLE:return W({},o,((t={})[r.type]=i,t.titleAttributes=W({},a),t));case C.BODY:return W({},o,{bodyAttributes:W({},a)});case C.HTML:return W({},o,{htmlAttributes:W({},a)})}return W({},o,((n={})[r.type]=W({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Y[n]||n]=e[n],t}),t)}(Q(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Q(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},V(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:d().object,bodyAttributes:d().object,children:d().oneOfType([d().arrayOf(d().node),d().node]),defaultTitle:d().string,defer:d().bool,encodeSpecialCharacters:d().bool,htmlAttributes:d().object,link:d().arrayOf(d().object),meta:d().arrayOf(d().object),noscript:d().arrayOf(d().object),onChangeClientState:d().func,script:d().arrayOf(d().object),style:d().arrayOf(d().object),title:d().string,titleAttributes:d().object,titleTemplate:d().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=ve({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);Te.renderStatic=Te.rewind;var ge=function(){var e=(0,u.useStaticQuery)("3159585216").site.siteMetadata.title;return c.createElement(c.Fragment,null,c.createElement(Te,null,c.createElement("meta",{charSet:"utf-8"}),c.createElement("title",null,e)))},Ee=function(e){return c.createElement("div",{id:"wrapper"},c.createElement(ge,null),c.createElement(f,null),e.children,c.createElement(l,null))}},7212:function(e,t,n){"use strict";n.r(t)},8530:function(e,t,n){"use strict";n.r(t),n.d(t,{sp:function(){return r},navList:function(){return o},navItem:function(){return a},activeNavItem:function(){return i},pc:function(){return c},ham:function(){return u},toggle:function(){return l},spNav:function(){return s}});const r="header-module--sp--2_6A7",o="header-module--nav-list--jjsDb",a="header-module--nav-item--1FVcX",i="header-module--active-nav-item--3xr97",c="header-module--pc---bW7P",u="header-module--ham--159Tf",l="header-module--toggle--3LID9",s="header-module--sp-nav--b-qkp"}}]);
//# sourceMappingURL=a632c7a39a72582ef18f0463ce3099fe1d55286b-67d487b8265af9b736f8.js.map