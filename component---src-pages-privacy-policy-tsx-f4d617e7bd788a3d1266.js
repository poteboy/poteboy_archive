(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[806],{9670:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(7294),o=n(9128),l=n(5444),i=n(4694),a=n(5697),c=n.n(a);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=b(t.slice(0,r)),l=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=l:e[o]=l,e}),{})}var g=!1;try{g=!0}catch(j){}function h(e){return i.parse.icon?i.parse.icon(e):null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}function O(e){var t=e.forwardedRef,n=p(e,["forwardedRef"]),r=n.icon,o=n.mask,l=n.symbol,a=n.className,c=n.title,s=n.titleId,f=h(r),b=v("classes",[].concat(d(function(e){var t,n=e.spin,r=e.pulse,o=e.fixedWidth,l=e.inverse,i=e.border,a=e.listItem,c=e.flip,s=e.size,f=e.rotation,m=e.pull,p=(u(t={"fa-spin":n,"fa-pulse":r,"fa-fw":o,"fa-inverse":l,"fa-border":i,"fa-li":a,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(s),null!=s),u(t,"fa-rotate-".concat(f),null!=f&&0!==f),u(t,"fa-pull-".concat(m),null!=m),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(n)),d(a.split(" ")))),y=v("transform","string"==typeof n.transform?i.parse.transform(n.transform):n.transform),x=v("mask",h(o)),E=(0,i.icon)(f,m({},b,{},y,{},x,{symbol:l,title:c,titleId:s}));if(!E)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var k=E.abstract,j={ref:t};return Object.keys(n).forEach((function(e){O.defaultProps.hasOwnProperty(e)||(j[e]=n[e])})),w(k[0],j)}O.displayName="FontAwesomeIcon",O.propTypes={border:c().bool,className:c().string,mask:c().oneOfType([c().object,c().array,c().string]),fixedWidth:c().bool,inverse:c().bool,flip:c().oneOf(["horizontal","vertical","both"]),icon:c().oneOfType([c().object,c().array,c().string]),listItem:c().bool,pull:c().oneOf(["right","left"]),pulse:c().bool,rotation:c().oneOf([0,90,180,270]),size:c().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c().bool,symbol:c().oneOfType([c().bool,c().string]),title:c().string,transform:c().oneOfType([c().string,c().object]),swapOpacity:c().bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),l=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=y(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[b(t)]=r}return e}),{attrs:{}}),i=r.style,a=void 0===i?{}:i,c=p(r,["style"]);return l.attrs.style=m({},l.attrs.style,{},a),t.apply(void 0,[n.tag,m({},l.attrs,{},c)].concat(d(o)))}.bind(null,r.createElement),x=n(7190),E=n(9268),k=function(e){var t=(0,l.useStaticQuery)("2463962953");return r.createElement(o.Z,null,r.createElement("div",{className:E.main},e.children,r.createElement("aside",null,r.createElement("div",{className:E.iconTable},r.createElement("div",{className:E.itsMe},r.createElement(l.Link,{to:"/"},r.createElement("img",{src:t.file.publicURL,alt:"keita furuse aka poteboy's icon",className:E.icon}))),r.createElement("div",{className:E.myName},"Keita Furuse"),r.createElement("div",{className:E.sns},r.createElement("div",{className:E.icons},r.createElement("a",{href:"https://github.com/poteboy",title:"GitHub",target:"_blank",rel:"noopener"},r.createElement(O,{icon:x.zhw,size:"2x"}))),r.createElement("div",{className:E.icons},r.createElement("a",{href:"https://www.linkedin.com/in/keitafuruse/",title:"LinkedIn",target:"_blank",rel:"noopener"},r.createElement(O,{icon:x.D9H,size:"2x"}))),r.createElement("div",{className:E.icons},r.createElement("a",{href:"https://twitter.com/_poteboy_",title:"Twitter",target:"_blank",rel:"noopener"},r.createElement(O,{icon:x.mdU,size:"2x"}))))))))}},6703:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7294),o=n(9670),l=n(4675),i=function(){return(0,r.useEffect)((function(){window&&(window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({}))})),r.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-7302857299919167","data-ad-slot":"7012316433","data-ad-format":"auto","data-full-width-responsive":"true"})},a=n(5533),c=function(){return r.createElement(o.Z,null,r.createElement(l.Z,{title:"プライバシーポリシー",description:"ぽてログのプライバシーポリシー"}),r.createElement("div",{className:a.all},r.createElement("div",{className:a.content},r.createElement("div",{className:a.post},r.createElement("h1",{style:{textAlign:"center"}},"プライバシーポリシー"),r.createElement("h2",null,"広告の配信について"),r.createElement("p",null,"当サイトはGoogle及びGoogleのパートナー（第三者配信事業者）の提供する広告を設置しております。その広告配信にはCookieを使用し、当サイトやその他のサイトへの過去のアクセス情報に基づいて広告を配信します。"),r.createElement("p",null,"Google が広告 Cookie を使用することにより、当サイトや他のサイトにアクセスした際の情報に基づいて、Google やそのパートナーが適切な広告を表示しています。"),r.createElement("p",null,"お客様はGoogleアカウントの",r.createElement("a",{href:"https://adssettings.google.com/u/0/authenticated",target:"_blank",rel:"noopener"},"広告設定ページ"),"で、パーソナライズ広告を無効にできます。また aboutads.info のページにアクセスして頂き、パーソナライズ広告掲載に使用される第三者配信事業者のCookieを無効にできます。"),r.createElement("p",null,"その他、Googleの広告におけるCookieの取り扱い詳細については、Googleのポリシーと",r.createElement("a",{href:"https://policies.google.com/technologies/ads",target:"_blank",rel:"noopener"},"規約ページ"),"をご覧ください。"),r.createElement(i,null)))))}},9268:function(e,t,n){"use strict";n.r(t),n.d(t,{main:function(){return r},iconTable:function(){return o},icon:function(){return l},purupuru:function(){return i},myName:function(){return a},sns:function(){return c},icons:function(){return s},list:function(){return u},fadeIn:function(){return f},link:function(){return m},post:function(){return p},sub:function(){return d},topic:function(){return b},desc:function(){return y},content:function(){return g},itsMe:function(){return h}});const r="blog-index-module--main--3lrH2",o="blog-index-module--icon-table--1U8Pp",l="blog-index-module--icon--2GcFg",i="blog-index-module--purupuru--3HMPX",a="blog-index-module--my-name--Tr7_u",c="blog-index-module--sns---gvuU",s="blog-index-module--icons--1qFwR",u="blog-index-module--list--2PoFf",f="blog-index-module--fadeIn--2XgkX",m="blog-index-module--link--2vO7h",p="blog-index-module--post--3VWdc",d="blog-index-module--sub--15iUZ",b="blog-index-module--topic--2qEya",y="blog-index-module--desc--1TUqQ",g="blog-index-module--content--3vQy5",h="blog-index-module--its-me--5838H"},5533:function(e,t,n){"use strict";n.r(t),n.d(t,{all:function(){return r},content:function(){return o},post:function(){return l},data:function(){return i},sns:function(){return a}});const r="post-module--all--1rzvc",o="post-module--content--2Zv9e",l="post-module--post--1evZm",i="post-module--data--1hIf9",a="post-module--sns--1TEd3"}}]);
//# sourceMappingURL=component---src-pages-privacy-policy-tsx-f4d617e7bd788a3d1266.js.map