(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[639],{9806:function(e,t,n){"use strict";var r,o=n(7294),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var l,a,f=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},u=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),i=function(e){try{return!!e()}catch(t){return!0}},l=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!a.call({1:2},1)?function(e){var t=f(this,e);return!!t&&t.enumerable}:a},d=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},p={}.toString,E=function(e){return p.call(e).slice(8,-1)},m="".split,y=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==E(e)?m.call(e,""):Object(e)}:Object,h=function(e){return y(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},v=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e,t){if(!v(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!v(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},g={}.hasOwnProperty,T=function(e,t){return g.call(e,t)},O=u.document,N=v(O)&&v(O.createElement),_=function(e){return N?O.createElement(e):{}},I=!l&&!i((function(){return 7!=Object.defineProperty(_("div"),"a",{get:function(){return 7}}).a})),S=Object.getOwnPropertyDescriptor,D={f:l?S:function(e,t){if(e=h(e),t=b(t,!0),I)try{return S(e,t)}catch(n){}if(T(e,t))return d(!s.f.call(e,t),e[t])}},L=function(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e},A=Object.defineProperty,P={f:l?A:function(e,t,n){if(L(e),t=b(t,!0),L(n),I)try{return A(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},w=l?function(e,t,n){return P.f(e,t,d(1,n))}:function(e,t,n){return e[t]=n,e},R=function(e,t){try{w(u,e,t)}catch(n){u[e]=t}return t},M="__core-js_shared__",j=u[M]||R(M,{}),H=Function.toString;"function"!=typeof j.inspectSource&&(j.inspectSource=function(e){return H.call(e)});var k,x,G,C=j.inspectSource,Y=u.WeakMap,B="function"==typeof Y&&/native code/.test(C(Y)),K=r((function(e){(e.exports=function(e,t){return j[e]||(j[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),U=0,F=Math.random(),Q=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++U+F).toString(36)},V=K("keys"),z=function(e){return V[e]||(V[e]=Q(e))},W={},Z=u.WeakMap;if(B){var q=j.state||(j.state=new Z),X=q.get,J=q.has,$=q.set;k=function(e,t){return t.facade=e,$.call(q,e,t),t},x=function(e){return X.call(q,e)||{}},G=function(e){return J.call(q,e)}}else{var ee=z("state");W[ee]=!0,k=function(e,t){return t.facade=e,w(e,ee,t),t},x=function(e){return T(e,ee)?e[ee]:{}},G=function(e){return T(e,ee)}}var te={set:k,get:x,has:G,enforce:function(e){return G(e)?x(e):k(e,{})},getterFor:function(e){return function(t){var n;if(!v(t)||(n=x(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ne=r((function(e){var t=te.get,n=te.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var c,l=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||T(o,"name")||w(o,"name",t),(c=n(o)).source||(c.source=r.join("string"==typeof t?t:""))),e!==u?(l?!f&&e[t]&&(a=!0):delete e[t],a?e[t]=o:w(e,t,o)):a?e[t]=o:R(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||C(this)}))})),re=u,oe=function(e){return"function"==typeof e?e:void 0},ue=function(e,t){return arguments.length<2?oe(re[e])||oe(u[e]):re[e]&&re[e][t]||u[e]&&u[e][t]},ie=Math.ceil,ce=Math.floor,le=function(e){return isNaN(e=+e)?0:(e>0?ce:ie)(e)},ae=Math.min,fe=Math.max,se=Math.min,de=function(e){return function(t,n,r){var o,u,i=h(t),c=(o=i.length)>0?ae(le(o),9007199254740991):0,l=function(e,t){var n=le(e);return n<0?fe(n+t,0):se(n,t)}(r,c);if(e&&n!=n){for(;c>l;)if((u=i[l++])!=u)return!0}else for(;c>l;l++)if((e||l in i)&&i[l]===n)return e||l||0;return!e&&-1}},pe={includes:de(!0),indexOf:de(!1)},Ee=pe.indexOf,me=function(e,t){var n,r=h(e),o=0,u=[];for(n in r)!T(W,n)&&T(r,n)&&u.push(n);for(;t.length>o;)T(r,n=t[o++])&&(~Ee(u,n)||u.push(n));return u},ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],he=ye.concat("length","prototype"),ve={f:Object.getOwnPropertyNames||function(e){return me(e,he)}},be={f:Object.getOwnPropertySymbols},ge=ue("Reflect","ownKeys")||function(e){var t=ve.f(L(e)),n=be.f;return n?t.concat(n(e)):t},Te=function(e,t){for(var n=ge(t),r=P.f,o=D.f,u=0;u<n.length;u++){var i=n[u];T(e,i)||r(e,i,o(t,i))}},Oe=/#|\.prototype\./,Ne=function(e,t){var n=Ie[_e(e)];return n==De||n!=Se&&("function"==typeof t?i(t):!!t)},_e=Ne.normalize=function(e){return String(e).replace(Oe,".").toLowerCase()},Ie=Ne.data={},Se=Ne.NATIVE="N",De=Ne.POLYFILL="P",Le=Ne,Ae=D.f,Pe=function(e,t){var n,r,o,i,c,l=e.target,a=e.global,f=e.stat;if(n=a?u:f?u[l]||R(l,{}):(u[l]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=Ae(n,r))&&c.value:n[r],!Le(a?r:l+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Te(i,o)}(e.sham||o&&o.sham)&&w(i,"sham",!0),ne(n,r,i,e)}},we=Object.keys||function(e){return me(e,ye)},Re=s.f,Me=function(e){return function(t){for(var n,r=h(t),o=we(r),u=o.length,i=0,c=[];u>i;)n=o[i++],l&&!Re.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},je=(Me(!0),Me(!1));Pe({target:"Object",stat:!0},{values:function(e){return je(e)}}),re.Object.values;var He,ke,xe="process"==E(u.process),Ge=ue("navigator","userAgent")||"",Ce=u.process,Ye=Ce&&Ce.versions,Be=Ye&&Ye.v8;Be?ke=(He=Be.split("."))[0]+He[1]:Ge&&(!(He=Ge.match(/Edge\/(\d+)/))||He[1]>=74)&&(He=Ge.match(/Chrome\/(\d+)/))&&(ke=He[1]);var Ke,Ue=ke&&+ke,Fe=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(xe?38===Ue:Ue>37&&Ue<41)})),Qe=Fe&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ve=K("wks"),ze=u.Symbol,We=Qe?ze:ze&&ze.withoutSetter||Q,Ze=l?Object.defineProperties:function(e,t){L(e);for(var n,r=we(t),o=r.length,u=0;o>u;)P.f(e,n=r[u++],t[n]);return e},qe=ue("document","documentElement"),Xe=z("IE_PROTO"),Je=function(){},$e=function(e){return"<script>"+e+"<\/script>"},et=function(){try{Ke=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;et=Ke?function(e){e.write($e("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Ke):((t=_("iframe")).style.display="none",qe.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write($e("document.F=Object")),e.close(),e.F);for(var n=ye.length;n--;)delete et.prototype[ye[n]];return et()};W[Xe]=!0;var tt,nt=Object.create||function(e,t){var n;return null!==e?(Je.prototype=L(e),n=new Je,Je.prototype=null,n[Xe]=e):n=et(),void 0===t?n:Ze(n,t)},rt=(T(Ve,tt="unscopables")&&(Fe||"string"==typeof Ve[tt])||(Fe&&T(ze,tt)?Ve[tt]=ze[tt]:Ve[tt]=We("Symbol."+tt)),Ve[tt]),ot=Array.prototype;null==ot[rt]&&P.f(ot,rt,{configurable:!0,value:nt(null)});var ut,it=pe.includes;Pe({target:"Array",proto:!0},{includes:function(e){return it(this,e,arguments.length>1?arguments[1]:void 0)}}),ut="includes",ot[rt][ut]=!0;var ct,lt,at,ft=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},st=Function.call;ct="includes",ft(st,u.Array.prototype[ct],lt),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(at||(at={}));var dt,pt=at;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(dt||(dt={}));var Et,mt=dt,yt=[pt.PARAGRAPH,pt.HEADING_1,pt.HEADING_2,pt.HEADING_3,pt.HEADING_4,pt.HEADING_5,pt.HEADING_6,pt.OL_LIST,pt.UL_LIST,pt.HR,pt.QUOTE,pt.EMBEDDED_ENTRY,pt.EMBEDDED_ASSET],ht=[pt.HR,pt.EMBEDDED_ENTRY,pt.EMBEDDED_ASSET],vt=((Et={})[pt.OL_LIST]=[pt.LIST_ITEM],Et[pt.UL_LIST]=[pt.LIST_ITEM],Et[pt.LIST_ITEM]=yt.slice(),Et[pt.QUOTE]=[pt.PARAGRAPH],Et),bt={nodeType:pt.DOCUMENT,data:{},content:[{nodeType:pt.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},gt=Object.freeze({isInline:function(e){return Object.values(mt).includes(e.nodeType)},isBlock:function(e){return Object.values(pt).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=pt,t.CONTAINERS=vt,t.EMPTY_DOCUMENT=bt,t.INLINES=mt,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=yt,t.VOID_BLOCKS=ht,t.helpers=gt}(l={exports:{}},l.exports),l.exports);(a=f)&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")&&a.default;var s,d,p=f.BLOCKS,E=(f.CONTAINERS,f.EMPTY_DOCUMENT,f.INLINES),m=f.MARKS,y=(f.TOP_LEVEL_BLOCKS,f.VOID_BLOCKS,f.helpers);function h(e,t){return e.map((function(e,n){return r=v(e,t),u=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function v(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(y.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=h(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var b=((s={})[p.DOCUMENT]=function(e,t){return t},s[p.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},s[p.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},s[p.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},s[p.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},s[p.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},s[p.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},s[p.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},s[p.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},s[p.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},s[p.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},s[p.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},s[p.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},s[p.HR]=function(){return u.createElement("hr",null)},s[E.ASSET_HYPERLINK]=function(e){return T(E.ASSET_HYPERLINK,e)},s[E.ENTRY_HYPERLINK]=function(e){return T(E.ENTRY_HYPERLINK,e)},s[E.EMBEDDED_ENTRY]=function(e){return T(E.EMBEDDED_ENTRY,e)},s[E.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},s),g=((d={})[m.BOLD]=function(e){return u.createElement("b",null,e)},d[m.ITALIC]=function(e){return u.createElement("i",null,e)},d[m.UNDERLINE]=function(e){return u.createElement("u",null,e)},d[m.CODE]=function(e){return u.createElement("code",null,e)},d);function T(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?v(e,{renderNode:i({},b,t.renderNode),renderMark:i({},g,t.renderMark),renderText:t.renderText}):null}},6270:function(e,t,n){"use strict";var r=n(7294),o=n(3160),u=n(5444),i=n(9268);t.Z=function(e){var t=(0,u.useStaticQuery)("2463962953");return r.createElement(o.Z,null,r.createElement("div",{className:i.main},e.children,r.createElement("aside",null,r.createElement("div",{className:i.iconTable},r.createElement("img",{src:t.file.publicURL,alt:"icon",className:i.icon}),r.createElement("div",{className:i.myName},"Keita Furuse")))))}},117:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(6270),u=n(9806),i=n(5533);t.default=function(e){var t=null;t=null===e.data.contentfulTech?e.data.contentfulPoem:e.data.contentfulTech,console.log(t);var n=JSON.parse(t.body.raw);return r.createElement(o.Z,null,r.createElement("div",{className:i.all},r.createElement("div",{className:i.content},r.createElement("div",{className:i.post},r.createElement("h1",null,t.title),r.createElement("div",null,t.publishedDate,(0,u.h)(n))))))}},9268:function(e,t,n){"use strict";n.r(t),n.d(t,{main:function(){return r},iconTable:function(){return o},icon:function(){return u},myName:function(){return i},content:function(){return c},list:function(){return l},fadeIn:function(){return a},link:function(){return f},post:function(){return s},desc:function(){return d}});const r="blog-index-module--main--3lrH2",o="blog-index-module--icon-table--1U8Pp",u="blog-index-module--icon--2GcFg",i="blog-index-module--my-name--Tr7_u",c="blog-index-module--content--3vQy5",l="blog-index-module--list--2PoFf",a="blog-index-module--fadeIn--2XgkX",f="blog-index-module--link--2vO7h",s="blog-index-module--post--3VWdc",d="blog-index-module--desc--1TUqQ"},5533:function(e,t,n){"use strict";n.r(t),n.d(t,{all:function(){return r},content:function(){return o},post:function(){return u}});const r="post-module--all--1rzvc",o="post-module--content--2Zv9e",u="post-module--post--1evZm"}}]);
//# sourceMappingURL=component---src-components-post-tsx-26d72e3109928ed7ef59.js.map