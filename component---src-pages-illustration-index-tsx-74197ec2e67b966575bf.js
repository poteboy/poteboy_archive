(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[505],{9670:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(7294),o=n(2755),a=n(5444),l=n(4694),i=n(5697),c=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=b(t.slice(0,r)),a=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=a:e[o]=a,e}),{})}var v=!1;try{v=!0}catch(w){}function g(e){return l.parse.icon?l.parse.icon(e):null===e?null:"object"===u(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function E(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function h(e){var t=e.forwardedRef,n=d(e,["forwardedRef"]),r=n.icon,o=n.mask,a=n.symbol,i=n.className,c=n.title,u=n.titleId,f=g(r),b=E("classes",[].concat(p(function(e){var t,n=e.spin,r=e.pulse,o=e.fixedWidth,a=e.inverse,l=e.border,i=e.listItem,c=e.flip,u=e.size,f=e.rotation,m=e.pull,d=(s(t={"fa-spin":n,"fa-pulse":r,"fa-fw":o,"fa-inverse":a,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(t,"fa-rotate-".concat(f),null!=f&&0!==f),s(t,"fa-pull-".concat(m),null!=m),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(n)),p(i.split(" ")))),y=E("transform","string"==typeof n.transform?l.parse.transform(n.transform):n.transform),x=E("mask",g(o)),N=(0,l.icon)(f,m({},b,{},y,{},x,{symbol:a,title:c,titleId:u}));if(!N)return function(){var e;!v&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var k=N.abstract,w={ref:t};return Object.keys(n).forEach((function(e){h.defaultProps.hasOwnProperty(e)||(w[e]=n[e])})),O(k[0],w)}h.displayName="FontAwesomeIcon",h.propTypes={border:c().bool,className:c().string,mask:c().oneOfType([c().object,c().array,c().string]),fixedWidth:c().bool,inverse:c().bool,flip:c().oneOf(["horizontal","vertical","both"]),icon:c().oneOfType([c().object,c().array,c().string]),listItem:c().bool,pull:c().oneOf(["right","left"]),pulse:c().bool,rotation:c().oneOf([0,90,180,270]),size:c().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c().bool,symbol:c().oneOfType([c().bool,c().string]),title:c().string,transform:c().oneOfType([c().string,c().object]),swapOpacity:c().bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var O=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),a=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=y(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[b(t)]=r}return e}),{attrs:{}}),l=r.style,i=void 0===l?{}:l,c=d(r,["style"]);return a.attrs.style=m({},a.attrs.style,{},i),t.apply(void 0,[n.tag,m({},a.attrs,{},c)].concat(p(o)))}.bind(null,r.createElement),x=n(7190),N=n(9268),k=function(e){var t=(0,a.useStaticQuery)("2463962953");return r.createElement(o.Z,null,r.createElement("div",{className:N.main},e.children,r.createElement("aside",null,r.createElement("div",{className:N.iconTable},r.createElement("div",{className:N.itsMe},r.createElement(a.Link,{to:"/"},r.createElement("img",{src:t.file.publicURL,alt:"keita furuse aka poteboy's icon",className:N.icon}))),r.createElement("div",{className:N.myName},"Keita Furuse"),r.createElement("div",{className:N.sns},r.createElement("div",{className:N.icons},r.createElement("a",{href:"https://github.com/poteboy",title:"GitHub",target:"_blank",rel:"noopener"},r.createElement(h,{icon:x.zhw,size:"2x"}))),r.createElement("div",{className:N.icons},r.createElement("a",{href:"https://www.linkedin.com/in/keitafuruse/",title:"LinkedIn",target:"_blank",rel:"noopener"},r.createElement(h,{icon:x.D9H,size:"2x"}))),r.createElement("div",{className:N.icons},r.createElement("a",{href:"https://twitter.com/_poteboy_",title:"Twitter",target:"_blank",rel:"noopener"},r.createElement(h,{icon:x.mdU,size:"2x"}))))))))}},2755:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),o=n(5444),a=n(8530),l=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],l=(0,r.useState)(!0),i=l[0],c=l[1];function u(){var e=window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop;return!(e>=20&&!i)&&(e>=20&&i?(c(!1),!1):void c(!0))}return(0,r.useEffect)((function(){return document.addEventListener("scroll",u),function(){return document.removeEventListener("scroll",u)}})),r.createElement("header",{className:a.header,style:{paddingBottom:i?"3rem":"1rem"}},r.createElement("nav",{className:a.pc},r.createElement("ul",{className:a.navList},r.createElement("li",null,r.createElement(o.Link,{className:a.navItem,activeClassName:a.activeNavItem,to:"/"},"HOME")),r.createElement("li",null,r.createElement(o.Link,{className:a.navItem,activeClassName:a.activeNavItem,to:"/#about"},"ABOUT")),r.createElement("li",null,r.createElement(o.Link,{className:a.navItem,activeClassName:a.activeNavItem,to:"/blog"},"BLOG")))),r.createElement("nav",{className:a.sp,style:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(-100%)"}},r.createElement("ul",null,r.createElement("li",null,r.createElement(o.Link,{className:a.spNav,onClick:function(){n(!1)},to:"/"},"HOME")),r.createElement("li",null,r.createElement(o.Link,{className:a.spNav,onClick:function(){n(!1)},to:"/#about"},"ABOUT")),r.createElement("li",null,r.createElement(o.Link,{className:a.spNav,onClick:function(){n(!1)},to:"/blog"},"BLOG")),r.createElement("li",{className:a.close},r.createElement("span",{onClick:function(){n(!1)}},"CLOSE")))),r.createElement("div",{className:a.ham,onClick:function(){n(!0)}},r.createElement("span",null)))},i=function(e){return r.createElement("div",{id:"wrapper"},r.createElement(l,null),e.children)}},5396:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(9670),a=n(5804);t.default=function(){return r.createElement(o.Z,null,r.createElement("div",{className:a.table}))}},5804:function(e,t,n){"use strict";n.r(t),n.d(t,{table:function(){return r}});const r="art-module--table--7-o7C"},9268:function(e,t,n){"use strict";n.r(t),n.d(t,{table:function(){return r},content:function(){return o},youngMe:function(){return a},main:function(){return l},iconTable:function(){return i},icon:function(){return c},purupuru:function(){return u},myName:function(){return s},sns:function(){return f},icons:function(){return m},list:function(){return d},fadeIn:function(){return p},link:function(){return b},post:function(){return y},sub:function(){return v},topic:function(){return g},desc:function(){return E},itsMe:function(){return h}});const r="blog-index-module--table--1f7o5",o="blog-index-module--content--3vQy5",a="blog-index-module--young-me--JUvkB",l="blog-index-module--main--3lrH2",i="blog-index-module--icon-table--1U8Pp",c="blog-index-module--icon--2GcFg",u="blog-index-module--purupuru--3HMPX",s="blog-index-module--my-name--Tr7_u",f="blog-index-module--sns---gvuU",m="blog-index-module--icons--1qFwR",d="blog-index-module--list--2PoFf",p="blog-index-module--fadeIn--2XgkX",b="blog-index-module--link--2vO7h",y="blog-index-module--post--3VWdc",v="blog-index-module--sub--15iUZ",g="blog-index-module--topic--2qEya",E="blog-index-module--desc--1TUqQ",h="blog-index-module--its-me--5838H"},8530:function(e,t,n){"use strict";n.r(t),n.d(t,{table:function(){return r},content:function(){return o},youngMe:function(){return a},sp:function(){return l},navList:function(){return i},navItem:function(){return c},activeNavItem:function(){return u},pc:function(){return s},ham:function(){return f},toggle:function(){return m},spNav:function(){return d}});const r="header-module--table--30FUG",o="header-module--content--3E3f4",a="header-module--young-me--1ExiQ",l="header-module--sp--2_6A7",i="header-module--nav-list--jjsDb",c="header-module--nav-item--1FVcX",u="header-module--active-nav-item--3xr97",s="header-module--pc---bW7P",f="header-module--ham--159Tf",m="header-module--toggle--3LID9",d="header-module--sp-nav--b-qkp"}}]);
//# sourceMappingURL=component---src-pages-illustration-index-tsx-74197ec2e67b966575bf.js.map