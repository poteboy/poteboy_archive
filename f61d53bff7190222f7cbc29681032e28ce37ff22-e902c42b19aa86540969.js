(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[575],{7606:function(e,t,n){"use strict";n.d(t,{G:function(){return v}});var r=n(4694),o=n(5697),i=n.n(o),a=n(7294);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function d(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=m(t.slice(0,r)),i=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[o]=i,e}),{})}var y=!1;try{y=!0}catch(T){}function b(e){return r.parse.icon?r.parse.icon(e):null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}function v(e){var t=e.forwardedRef,n=f(e,["forwardedRef"]),o=n.icon,i=n.mask,a=n.symbol,c=n.className,l=n.title,m=n.titleId,d=b(o),T=h("classes",[].concat(p(function(e){var t,n=e.spin,r=e.pulse,o=e.fixedWidth,i=e.inverse,a=e.border,c=e.listItem,l=e.flip,s=e.size,f=e.rotation,p=e.pull,m=(u(t={"fa-spin":n,"fa-pulse":r,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":c,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(s),null!=s),u(t,"fa-rotate-".concat(f),null!=f&&0!==f),u(t,"fa-pull-".concat(p),null!=p),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map((function(e){return m[e]?e:null})).filter((function(e){return e}))}(n)),p(c.split(" ")))),O=h("transform","string"==typeof n.transform?r.parse.transform(n.transform):n.transform),E=h("mask",b(i)),w=(0,r.icon)(d,s({},T,{},O,{},E,{symbol:a,title:l,titleId:m}));if(!w)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var A=w.abstract,C={ref:t};return Object.keys(n).forEach((function(e){v.defaultProps.hasOwnProperty(e)||(C[e]=n[e])})),g(A[0],C)}v.displayName="FontAwesomeIcon",v.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=d(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[m(t)]=r}return e}),{attrs:{}}),a=r.style,c=void 0===a?{}:a,u=f(r,["style"]);return i.attrs.style=s({},i.attrs.style,{},c),t.apply(void 0,[n.tag,s({},i.attrs,{},u)].concat(p(o)))}.bind(null,a.createElement)},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},7145:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),o=n(5444),i=n(7212),a=function(){var e=(0,o.useStaticQuery)("3159585216").site.siteMetadata.title;return r.createElement("footer",null,r.createElement("div",{className:i.footer},r.createElement("p",null,"© 2021 ",e),r.createElement("p",null,r.createElement(o.Link,{to:"/privacy-policy",className:i.link},"privacy policy"))))},c=n(8530),u=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],i=(0,r.useState)(!0),a=i[0],u=i[1];function l(){var e=window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop;return!(e>=20&&!a)&&(e>=20&&a?(u(!1),!1):void u(!0))}return(0,r.useEffect)((function(){return document.addEventListener("scroll",l),function(){return document.removeEventListener("scroll",l)}})),r.createElement("header",{className:c.header},r.createElement("nav",{className:c.pc},r.createElement("ul",{className:c.navList},r.createElement("li",null,r.createElement(o.Link,{className:c.navItem,activeClassName:c.activeNavItem,to:"/"},"HOME")),r.createElement("li",null,r.createElement(o.Link,{className:c.navItem,activeClassName:c.activeNavItem,to:"/about"},"ABOUT")),r.createElement("li",null,r.createElement(o.Link,{className:c.navItem,activeClassName:c.activeNavItem,to:"/tech"},"TECH")),r.createElement("li",null,r.createElement(o.Link,{className:c.navItem,activeClassName:c.activeNavItem,to:"/poem"},"POEM")))),r.createElement("nav",{className:c.sp,style:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(-100%)"}},r.createElement("ul",null,r.createElement("li",null,r.createElement(o.Link,{className:c.spNav,onClick:function(){n(!1)},to:"/"},"HOME")),r.createElement("li",null,r.createElement(o.Link,{className:c.spNav,onClick:function(){n(!1)},to:"/about"},"ABOUT")),r.createElement("li",null,r.createElement(o.Link,{className:c.spNav,onClick:function(){n(!1)},to:"/tech"},"TECH")),r.createElement("li",null,r.createElement(o.Link,{className:c.spNav,onClick:function(){n(!1)},to:"/poem"},"POEM")),r.createElement("li",{className:c.close},r.createElement("span",{onClick:function(){n(!1)}},"CLOSE")))),r.createElement("div",{className:c.ham,onClick:function(){n(!0)}},r.createElement("span",null)))},l=function(e){return r.createElement("div",{id:"wrapper"},r.createElement(u,null),e.children,r.createElement(a,null))}},4675:function(e,t,n){"use strict";n.d(t,{Z:function(){return he}});var r,o,i,a,c=n(7294),u=n(5697),l=n.n(u),s=n(4839),f=n.n(s),p=n(2993),m=n.n(p),d=n(6494),y=n.n(d),b="bodyAttributes",h="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),O="cssText",E="href",w="http-equiv",A="innerHTML",C="itemprop",S="name",j="property",k="rel",N="src",P="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",L="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",D=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),H=[g.NOSCRIPT,g.SCRIPT,g.STYLE],B="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=X(e,g.TITLE),n=X(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,I);return t||r||void 0},Q=function(e){return X(e,_)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===k&&"canonical"===e[n].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==A&&c!==O&&c!==C||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){J(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:n.g.requestAnimationFrame||J,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,o),ce(f,p);var m={baseTag:le(g.BASE,n),linkTags:le(g.LINK,i),metaTags:le(g.META,a),noscriptTags:le(g.NOSCRIPT,c),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,s)},d={},y={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(y[e]=m[e].oldTags)})),t&&t(),u(e,d,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===O)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,o=fe(n,r),[c.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case h:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===A||n===O){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===O)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(h,o,r),link:pe(g.LINK,i,r),meta:pe(g.META,a,r),noscript:pe(g.NOSCRIPT,c,r),script:pe(g.SCRIPT,u,r),style:pe(g.STYLE,l,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},de=f()((function(e){return{baseTag:G([E,P],e),bodyAttributes:Z(b,e),defer:X(e,L),encode:X(e,M),htmlAttributes:Z(h,e),linkTags:$(g.LINK,[k,E],e),metaTags:$(g.META,[S,T,w,j,C],e),noscriptTags:$(g.NOSCRIPT,[A],e),onChangeClientState:Q(e),scriptTags:$(g.SCRIPT,[N,A],e),styleTags:$(g.STYLE,[O],e),title:V(e),titleAttributes:Z(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),me)((function(){return null})),ye=(o=de,a=i=function(e){function t(){return q(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case g.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case g.BODY:return U({},o,{bodyAttributes:U({},i)});case g.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(z(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var be=n(5444),he=function(e){var t=e.title,n=e.description,r=(0,be.useStaticQuery)("3000541721").site.siteMetadata,o={title:t||r.title,description:n||r.description};return c.createElement(c.Fragment,null,c.createElement(ye,null,c.createElement("meta",{charSet:"utf-8"}),c.createElement("title",null,o.title),c.createElement("meta",{property:"og:title",content:o.title}),c.createElement("meta",{property:"og:description",content:o.description}),c.createElement("meta",{name:"google-site-verification",content:"ThCy6ZbcWv-YFbvd_QEWvYQfBtArkhVqnutTomqPaUs"}),c.createElement("meta",{name:"twitter:card",content:"summary"}),c.createElement("meta",{name:"twitter:image",content:"https://poteboy.com/static/6bdbf18104cab1d4ec7d3d23f03949a9/poteicon.png"})))}},7212:function(e,t,n){"use strict";n.r(t),n.d(t,{footer:function(){return r},link:function(){return o}});const r="footer-module--footer--1jE_x",o="footer-module--link--36SmG"},8530:function(e,t,n){"use strict";n.r(t),n.d(t,{sp:function(){return r},navList:function(){return o},navItem:function(){return i},activeNavItem:function(){return a},pc:function(){return c},ham:function(){return u},toggle:function(){return l},spNav:function(){return s}});const r="header-module--sp--2_6A7",o="header-module--nav-list--jjsDb",i="header-module--nav-item--1FVcX",a="header-module--active-nav-item--3xr97",c="header-module--pc---bW7P",u="header-module--ham--159Tf",l="header-module--toggle--3LID9",s="header-module--sp-nav--b-qkp"}}]);
//# sourceMappingURL=f61d53bff7190222f7cbc29681032e28ce37ff22-e902c42b19aa86540969.js.map