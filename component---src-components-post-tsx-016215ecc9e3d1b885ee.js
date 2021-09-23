/*! For license information please see component---src-components-post-tsx-016215ecc9e3d1b885ee.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[639],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},2010:function(e,t,n){"use strict";var r;!function(o){if("function"!=typeof a){var a=function(e){return e};a.nonNative=!0}var i=a("plaintext"),l=a("html"),c=a("comment"),u=/<(\w*)>/g,s=/<\/?([^\s\/>]+)/;function f(e,t,n){return d(e=e||"",p(t=t||[],n=n||""))}function p(e,t){return{allowable_tags:e=function(e){var t,n=new Set;if("string"==typeof e)for(;t=u.exec(e);)n.add(t[1]);else a.nonNative||"function"!=typeof e[a.iterator]?"function"==typeof e.forEach&&e.forEach(n.add,n):n=new Set(e);return n}(e),tag_replacement:t,state:i,tag_buffer:"",depth:0,in_quote_char:""}}function d(e,t){for(var n=t.allowable_tags,r=t.tag_replacement,o=t.state,a=t.tag_buffer,u=t.depth,s=t.in_quote_char,f="",p=0,d=e.length;p<d;p++){var w=e[p];if(o===i)switch(w){case"<":o=l,a+=w;break;default:f+=w}else if(o===l)switch(w){case"<":if(s)break;u++;break;case">":if(s)break;if(u){u--;break}s="",o=i,a+=">",n.has(h(a))?f+=a:f+=r,a="";break;case'"':case"'":s=w===s?"":s||w,a+=w;break;case"-":"<!-"===a&&(o=c),a+=w;break;case" ":case"\n":if("<"===a){o=i,f+="< ",a="";break}a+=w;break;default:a+=w}else if(o===c)switch(w){case">":"--"==a.slice(-2)&&(o=i),a="";break;default:a+=w}}return t.state=o,t.tag_buffer=a,t.depth=u,t.in_quote_char=s,f}function h(e){var t=s.exec(e);return t?t[1].toLowerCase():null}f.init_streaming_mode=function(e,t){var n=p(e=e||[],t=t||"");return function(e){return d(e||"",n)}},void 0===(r=function(){return f}.call(t,n,t,e))||(e.exports=r)}()},6342:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r,o=n(7294),a=n(7210),i=n(4675),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return l(t,e),t}(Error);function u(e,t){if(!e)throw new c(t)}function s(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var f=n(5900),p=n.n(f),d=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},w=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function l(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))},v=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},y=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},b=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},g=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function C(e,t,n){var r=t.height,o=t.width,a=m(t,["height","width"]),i=h({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),l=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),n(l))}catch(e){console.error(e)}}),1e3);return l}var E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,a=void 0===o?400:o,i=n.windowPosition,l=void 0===i?"windowCenter":i,c=n.windowWidth,u=void 0===c?550:c;C(e,h({height:a,width:u},"windowCenter"===l?b(u,a):g(u,a)),r)},t.handleClick=function(e){return w(t,void 0,void 0,(function(){var t,n,r,o,a,i,l,c,u,s;return v(this,(function(f){switch(f.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,l=t.openShareDialogOnClick,c=t.opts,u=o(i,c),r?[2]:(e.preventDefault(),n?(s=n(),y(s)?[4,s]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return l&&this.openShareDialog(u),a&&a(e,u),[2]}}))}))},t}return d(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,a=e.disabledStyle,i=e.forwardedRef,l=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),u=e.style,s=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,m(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=p()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),d=h(h(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),r&&a);return o.createElement("button",h({},s,{"aria-label":s["aria-label"]||l,className:f,onClick:this.handleClick,ref:i,style:d}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),k=function(){return(k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var O=function(e,t,n,r){function a(a,i){var l=n(a),c=k({},a);return Object.keys(l).forEach((function(e){delete c[e]})),o.createElement(E,k({},r,c,{forwardedRef:i,networkName:e,networkLink:t,opts:n(a)}))}return a.displayName="ShareButton-"+e,(0,o.forwardRef)(a)};var x=O("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,l=void 0===i?[]:i;return u(e,"twitter.url"),u(Array.isArray(a),"twitter.hashtags is not an array"),u(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+s({url:e,text:n,via:r,hashtags:a.length>0?a.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),_=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function j(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,a=t.iconFillColor,i=t.round,l=t.size,c=S(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.createElement("svg",_({viewBox:"0 0 64 64",width:l,height:l},c),i?o.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):o.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),o.createElement("path",{d:e.path,fill:a}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var N=j({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var P=O("line",(function(e,t){var n=t.title;return u(e,"line.url"),"https://social-plugins.line.me/lineit/share"+s({url:e,text:n})}),(function(e){return{title:e.title}}),{windowWidth:500,windowHeight:500}),L=j({color:"#00b800",networkName:"line",path:"M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z"});var M=O("hatena",(function(e,t){var n=t.title;return u(e,"hatena.url"),"http://b.hatena.ne.jp/add?mode=confirm&url="+e+"&title="+n}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),z=j({color:"#009ad9",networkName:"hatena",path:"M 36.164062 33.554688 C 34.988281 32.234375 33.347656 31.5 31.253906 31.34375 C 33.125 30.835938 34.476562 30.09375 35.335938 29.09375 C 36.191406 28.09375 36.609375 26.78125 36.609375 25.101562 C 36.628906 23.875 36.332031 22.660156 35.75 21.578125 C 35.160156 20.558594 34.292969 19.71875 33.253906 19.160156 C 32.304688 18.640625 31.175781 18.265625 29.847656 18.042969 C 28.523438 17.824219 26.195312 17.730469 22.867188 17.730469 L 14.769531 17.730469 L 14.769531 47.269531 L 23.113281 47.269531 C 26.46875 47.269531 28.886719 47.15625 30.367188 46.929688 C 31.851562 46.695312 33.085938 46.304688 34.085938 45.773438 C 35.289062 45.148438 36.28125 44.179688 36.933594 42.992188 C 37.597656 41.796875 37.933594 40.402344 37.933594 38.816406 C 37.933594 36.621094 37.347656 34.867188 36.164062 33.554688 Z M 22.257812 24.269531 L 23.984375 24.269531 C 25.988281 24.269531 27.332031 24.496094 28.015625 24.945312 C 28.703125 25.402344 29.042969 26.183594 29.042969 27.285156 C 29.042969 28.390625 28.664062 29.105469 27.9375 29.550781 C 27.210938 29.992188 25.84375 30.199219 23.855469 30.199219 L 22.257812 30.199219 Z M 29.121094 41.210938 C 28.328125 41.691406 26.976562 41.925781 25.078125 41.925781 L 22.257812 41.925781 L 22.257812 35.488281 L 25.195312 35.488281 C 27.144531 35.488281 28.496094 35.738281 29.210938 36.230469 C 29.925781 36.726562 30.304688 37.582031 30.304688 38.832031 C 30.304688 40.078125 29.914062 40.742188 29.105469 41.222656 Z M 29.121094 41.210938 M 46.488281 39.792969 C 44.421875 39.792969 42.742188 41.46875 42.742188 43.535156 C 42.742188 45.605469 44.421875 47.28125 46.488281 47.28125 C 48.554688 47.28125 50.230469 45.605469 50.230469 43.535156 C 50.230469 41.46875 48.554688 39.792969 46.488281 39.792969 Z M 46.488281 39.792969 M 43.238281 17.730469 L 49.738281 17.730469 L 49.738281 37.429688 L 43.238281 37.429688 Z M 43.238281 17.730469 "}),A=n(5444),H=n(4062),Z=function(e){var t=(0,A.useStaticQuery)("1271460761").site.siteMetadata.siteUrl,n=(0,o.useState)(""),r=n[0],a=n[1];return(0,o.useEffect)((function(){a(window.location.pathname)})),o.createElement(o.Fragment,null,o.createElement("div",{className:H.icons},o.createElement(x,{title:e.title+" - ぽてログ",url:t+r,className:H.sns},o.createElement(N,{round:!0,size:32})),o.createElement(P,{title:e.title+" - ぽてログ",url:t+r,className:H.sns},o.createElement(L,{round:!0,size:32})),o.createElement(M,{title:e.title+" - ぽてログ",url:t+r,className:H.sns},o.createElement(z,{round:!0,size:32}))))},B=n(3626),R=function(e){var t=e.prev,n=e.next,r=(0,o.useState)(""),a=r[0],i=r[1];return(0,o.useEffect)((function(){i(window.location.pathname.slice(1,5))})),o.createElement(o.Fragment,null,o.createElement("br",null),o.createElement("div",{className:B.prevNext},o.createElement(A.Link,{className:B.prev,to:"/"+a+"/"+(null==t?void 0:t.slug),style:{display:t?"":"none"}},o.createElement("img",{src:"https://www.webcreatorbox.com/sample/images/arrow-prev.svg",alt:"previous page"}),o.createElement("p",null,null==t?void 0:t.title)),o.createElement(A.Link,{className:B.next,to:"/"+a+"/"+(null==n?void 0:n.slug),style:{display:n?"":"none"}},o.createElement("p",null,null==n?void 0:n.title),o.createElement("img",{src:"http://www.webcreatorbox.com/sample/images/arrow-next.svg",alt:"next page"}))))},W=n(7964),D=function(e){function t(e){return"ContentfulTechEdge"===e?"TECH":"ContentfulPoemEdge"===e?"POEM":void 0}return o.createElement("div",{className:"TECH"===t(e.topic)?W.tech:W.poem},o.createElement("p",null,t(e.topic)))},I=n(9568),T=n(5533),F=function(e){var t=e.pageContext.topic,n=e.data.contentfulBlog,r=n.body.childMarkdownRemark.html;return o.createElement(a.Z,{path:"blog",side:!0},o.createElement(i.Z,{title:n.title+" - ぽてログ",description:(0,I.i)(r,n.description)}),o.createElement("div",{className:T.all},o.createElement("div",{className:T.content},o.createElement("div",{className:T.post},o.createElement("h1",null,n.title),o.createElement("div",null,o.createElement("div",{className:T.data},o.createElement(D,{topic:t}),n.publishedDate,o.createElement(Z,{title:n.title})),o.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))),o.createElement("div",{className:T.sns},o.createElement(Z,{title:n.title})),o.createElement(R,{prev:e.pageContext.prev,next:e.pageContext.next}))))}},9568:function(e,t,n){"use strict";n.d(t,{i:function(){return o}});var r=n(2010);function o(e,t){var n=(t||"")+r(e).replace(/\r?\n/g,"").trim();return n.length<=120?n:n.slice(0,120)+"..."}},4062:function(e,t,n){"use strict";n.r(t),n.d(t,{icons:function(){return r},sns:function(){return o}});const r="data-next-module--icons--1oAXq",o="data-next-module--sns--uMnGt"},7964:function(e,t,n){"use strict";n.r(t),n.d(t,{tech:function(){return r},poem:function(){return o}});const r="topic-module--tech--dZBkK",o="topic-module--poem--NUuJm"},5533:function(e,t,n){"use strict";n.r(t),n.d(t,{all:function(){return r},content:function(){return o},post:function(){return a},data:function(){return i},sns:function(){return l}});const r="post-module--all--1rzvc",o="post-module--content--2Zv9e",a="post-module--post--1evZm",i="post-module--data--1hIf9",l="post-module--sns--1TEd3"},3626:function(e,t,n){"use strict";n.r(t),n.d(t,{prevNext:function(){return r},prev:function(){return o},next:function(){return a}});const r="prev-next-module--prev-next--19mtA",o="prev-next-module--prev--1B2uZ",a="prev-next-module--next--2F7ww"}}]);
//# sourceMappingURL=component---src-components-post-tsx-016215ecc9e3d1b885ee.js.map