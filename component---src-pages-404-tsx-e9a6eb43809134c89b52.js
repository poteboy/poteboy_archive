(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[218],{7606:function(e,t,r){"use strict";r.d(t,{G:function(){return O}});var n=r(4694),o=r(5697),a=r.n(o),i=r(7294);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=y(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var m=!1;try{m=!0}catch(h){}function d(e){return n.parse.icon?n.parse.icon(e):null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function O(e){var t=e.forwardedRef,r=f(e,["forwardedRef"]),o=r.icon,a=r.mask,i=r.symbol,l=r.className,c=r.title,y=r.titleId,b=d(o),h=v("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,a=e.inverse,i=e.border,l=e.listItem,c=e.flip,u=e.size,f=e.rotation,p=e.pull,y=(s(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":a,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(t,"fa-rotate-".concat(f),null!=f&&0!==f),s(t,"fa-pull-".concat(p),null!=p),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map((function(e){return y[e]?e:null})).filter((function(e){return e}))}(r)),p(l.split(" ")))),w=v("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),j=v("mask",d(a)),x=(0,n.icon)(b,u({},h,{},w,{},j,{symbol:i,title:c,titleId:y}));if(!x)return function(){var e;!m&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var E=x.abstract,k={ref:t};return Object.keys(r).forEach((function(e){O.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),g(E[0],k)}O.displayName="FontAwesomeIcon",O.propTypes={border:a().bool,className:a().string,mask:a().oneOfType([a().object,a().array,a().string]),fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),size:a().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=b(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[y(t)]=n}return e}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=f(n,["style"]);return a.attrs.style=u({},a.attrs.style,{},l),t.apply(void 0,[r.tag,u({},a.attrs,{},s)].concat(p(o)))}.bind(null,i.createElement)},9531:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),o=r(7606),a=r(8014),i=r(5444),l=r(4221),s=function(){return n.createElement("aside",null,n.createElement("ul",null,n.createElement("li",null,n.createElement(i.Link,{className:l.navItem,activeClassName:l.activeNavItem,to:"/"},n.createElement("div",{className:l.fav},n.createElement(o.G,{icon:a.J9Y,size:"2x"})))),n.createElement("li",null,n.createElement(i.Link,{className:l.navItem,activeClassName:l.activeNavItem,to:"/about"},n.createElement("div",{className:l.fav},n.createElement(o.G,{icon:a.ILF,size:"2x"}))))))},c=function(e){return n.createElement("div",{id:"wrapper"},n.createElement(s,null),e.children)}},938:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(9531);t.default=function(){return n.createElement(o.Z,null,"存在しないページだよ")}},4221:function(e,t,r){"use strict";r.r(t),r.d(t,{fav:function(){return n},menu:function(){return o}});const n="sidebar-module--fav--3wXrN",o="sidebar-module--menu--3oOdy"}}]);
//# sourceMappingURL=component---src-pages-404-tsx-e9a6eb43809134c89b52.js.map