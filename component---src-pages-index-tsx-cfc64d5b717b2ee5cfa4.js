(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(d,o({attr:o({},e.attr)},t),c(e.child))}}function d(e){var t=function(t){var n,i=e.attr,a=e.size,c=e.title,s=l(e,["attr","size","title"]),d=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(i)}},4913:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(7294),i=n(5444),a=n(7190),o=n(8014),l=n(9),c=n(4617),s=n(604),d=l.ZP.div.withConfig({displayName:"ContentContainer",componentId:"sc-8zrm13-0"})(["width:100%;max-width:600px;padding:16px;margin:0 auto;@media (max-width:","px){width:auto;}"],c.d.device.tablet),p=n(6843),u=n(2651),m=l.ZP.div.withConfig({displayName:"ProjectCard__Wrapper",componentId:"sc-1f0ru5i-0"})(["display:flex;flex-direction:column;align-items:center;box-shadow:18px 18px 23px #c9ccd4,-18px -18px 23px #ffffff;border-radius:20px;padding:15px;width:200px;gap:10px;margin:0 15px;transition:transform 0.1s linear;:hover{transform:translateY(-10px);}"]),f=l.ZP.div.withConfig({displayName:"ProjectCard__Card",componentId:"sc-1f0ru5i-1"})(["display:flex;justify-content:center;align-items:center;"]),x=(0,l.ZP)(u.Z).withConfig({displayName:"ProjectCard__AppImg",componentId:"sc-1f0ru5i-2"})(["object-fit:contain;max-width:95%;max-height:90%;border-radius:20px;"]),h=l.ZP.div.withConfig({displayName:"ProjectCard__Title",componentId:"sc-1f0ru5i-3"})(["font-family:demilight;text-align:center;font-weight:bold;font-size:large;padding:0px 0 10px 0;"]),g=(l.ZP.div.withConfig({displayName:"ProjectCard__Description",componentId:"sc-1f0ru5i-4"})(["padding:5px 0;color:gray;font-size:smaller;word-break:break-all;width:180px;"]),l.ZP.div.withConfig({displayName:"ProjectCard__Tags",componentId:"sc-1f0ru5i-5"})(["width:90%;justify-content:flex-start;display:flex;flex-direction:row;flex-wrap:wrap;font-family:phenomena-regular;letter-spacing:2px;"])),w=l.ZP.div.withConfig({displayName:"ProjectCard__Tag",componentId:"sc-1f0ru5i-6"})(["background:#fd73a4;box-shadow:0 0 5px #fd73a4;color:white;padding:3px 10px;border-radius:5px;font-size:x-small;align-self:flex-start;margin-right:10px;"]),v=l.ZP.a.withConfig({displayName:"ProjectCard__ExternalLink",componentId:"sc-1f0ru5i-7"})(["text-decoration:none;"]),y=function(e){var t=e.project;return r.createElement(v,{href:t.url,target:"__blank"},r.createElement(m,null,r.createElement(f,null,r.createElement(x,{filename:t.fileName})),r.createElement(g,null,t.tags.map((function(e,t){return r.createElement(w,{key:t},e)}))),r.createElement(h,null,t.name)))},b=l.ZP.div.withConfig({displayName:"IllustrationCard__Wrapper",componentId:"sc-eqcrvs-0"})(["display:flex;flex-direction:column;align-items:center;margin:0 15px;box-shadow:18px 18px 23px #c9ccd4,-18px -18px 23px #ffffff;border-radius:20px;padding:15px;width:200px;transition:transform 0.1s linear;@media (max-width:","px){margin:15px 0;}:hover{transform:translateY(-10px);}"],c.d.device.tablet),j=l.ZP.div.withConfig({displayName:"IllustrationCard__Card",componentId:"sc-eqcrvs-1"})(["display:flex;justify-content:center;align-items:center;"]),E=(0,l.ZP)(u.Z).withConfig({displayName:"IllustrationCard__AppImg",componentId:"sc-eqcrvs-2"})(["object-fit:cover;height:180px;width:180px;border-radius:20px;border:solid 5px white;"]),_=l.ZP.a.withConfig({displayName:"IllustrationCard__ExternalLink",componentId:"sc-eqcrvs-3"})(["text-decoration:none;"]),C=function(e){var t=e.illustration;return r.createElement(_,{href:t.url,target:"__blank"},r.createElement(b,null,r.createElement(j,null,r.createElement(E,{filename:t.fileName}))))},N=n(7247),P=function(e){var t=e.children,n=e.path,a=(0,i.useStaticQuery)("2463962953");return r.createElement(d,null,r.createElement(I,null,r.createElement(Z,{path:n},r.createElement(k,null,r.createElement(z,{src:a.file.publicURL,alt:"keita furuse aka poteboy's icon"})),r.createElement(L,null,r.createElement(S,null,"Keita Furuse"),r.createElement(A,null,"Front-End / iOS Developer"))),r.createElement(s.L,{size:40}),r.createElement(T,null,r.createElement(D,null,"PROJECTS"),r.createElement(R,null,"SEE ALL",r.createElement(N.oqk,{style:{paddingLeft:10}}))),r.createElement(q,null,p.projects.map((function(e){return r.createElement(y,{project:e,key:e.slug})}))),r.createElement(s.L,{size:30}),r.createElement(T,null,r.createElement(D,null,"ILLUSTRATIONS"),r.createElement(R,null,"SEE ALL",r.createElement(N.oqk,{style:{paddingLeft:10}}))),r.createElement(q,null,p.illustrations.map((function(e){return r.createElement(C,{illustration:e,key:e.slug})}))),r.createElement(s.L,{size:50}),t))},I=l.ZP.div.withConfig({displayName:"home__Wrapper",componentId:"sc-19lijvd-0"})(["margin:0 auto;"]),Z=l.ZP.div.withConfig({displayName:"home__Table",componentId:"sc-19lijvd-1"})(["width:100%;display:flex;flex-direction:row;justify-content:flex-start;gap:20px;@media (max-width:","px){width:auto;flex-direction:column;}"],c.d.device.tablet),k=l.ZP.div.withConfig({displayName:"home__IconBox",componentId:"sc-19lijvd-2"})(["padding:5vh;border-radius:20px;@media (max-width:1194px){margin:0 auto 0 auto;padding:0;}"]),O=(0,l.F4)(["0%{transform:scale(1,1,1);text-shadow:0px 0px 100px;}11%{transform:scale(1.03,1.03);}22%{transform:scale(1,1);}33%{transform:scale(1.05,1.05);}44%{transform:scale(1,1);text-shadow:0px 0px 100px;}100%{transform:scale(1,1);text-shadow:0px 0px 100px;}"]),z=l.ZP.img.withConfig({displayName:"home__IconImage",componentId:"sc-19lijvd-3"})(["text-align:center;border-radius:80px;width:140px;height:140px;margin:auto;animation:1.24s infinite ",";@media (max-width:","px){width:90px;height:90px;}"],O,c.d.device.tablet),L=l.ZP.div.withConfig({displayName:"home__Profile",componentId:"sc-19lijvd-4"})(["display:flex;flex-direction:column;justify-content:center;height:50%;align-self:center;margin:0 auto;"]),S=l.ZP.div.withConfig({displayName:"home__Myname",componentId:"sc-19lijvd-5"})(["font-weight:600;text-align:center;align-items:center;padding:10px 20px;color:gray;font-size:40px;font-family:phenomena-bold;"]),A=l.ZP.div.withConfig({displayName:"home__AboutMe",componentId:"sc-19lijvd-6"})(["padding:10px 20px;color:white;font-size:x-large;font-family:phenomena-regular;background:linear-gradient(to right,#acb6e5,#86fde8);box-shadow:0 0 5px #acb6e5;border-radius:20px;"]),q=l.ZP.div.withConfig({displayName:"home__Projects",componentId:"sc-19lijvd-7"})(["display:flex;flex-direction:row;align-self:flex-start;@media (max-width:","px){flex-direction:column;align-items:center;}"],c.d.device.tablet),T=l.ZP.div.withConfig({displayName:"home__Header",componentId:"sc-19lijvd-8"})(["display:flex;flex-direction:row;justify-content:space-between;"]),D=l.ZP.h3.withConfig({displayName:"home__Title",componentId:"sc-19lijvd-9"})(["text-align:left;align-self:flex-start;font-family:phenomena-bold;letter-spacing:1.5px;padding:15px;"]),R=l.ZP.div.withConfig({displayName:"home__SeeAll",componentId:"sc-19lijvd-10"})(["font-family:phenomena-bold;align-self:center;padding:10px;:hover{border-radius:20px;box-shadow:18px 18px 36px #d5d8e0,-18px -18px 36px #ffffff;cursor:pointer;}"]);a.zhw,a.D9H,a.mdU,o.q2v},6403:function(){},5332:function(e,t,n){"use strict";n.d(t,{K:function(){return r}});var r=[{slug:"curon-boy",name:"ある日",createdAt:new Date,fileName:"art/just-a-boy.jpg",description:"",url:"https://www.pixiv.net/artworks/90836146"},{slug:"end-of-summer",name:"夏の終わり",createdAt:new Date,fileName:"art/end-of-summer.jpg",description:"",url:"https://www.pixiv.net/artworks/92371319"}]},6843:function(e,t,n){"use strict";n.d(t,{projects:function(){return c.q},illustrations:function(){return s.K}});var r=n(3716);n.o(r,"illustrations")&&n.d(t,{illustrations:function(){return r.illustrations}}),n.o(r,"projects")&&n.d(t,{projects:function(){return r.projects}});var i=n(6403);n.o(i,"illustrations")&&n.d(t,{illustrations:function(){return i.illustrations}}),n.o(i,"projects")&&n.d(t,{projects:function(){return i.projects}});var a=n(6510);n.o(a,"illustrations")&&n.d(t,{illustrations:function(){return a.illustrations}}),n.o(a,"projects")&&n.d(t,{projects:function(){return a.projects}});var o=n(7587);n.o(o,"illustrations")&&n.d(t,{illustrations:function(){return o.illustrations}}),n.o(o,"projects")&&n.d(t,{projects:function(){return o.projects}});var l=n(944);n.o(l,"illustrations")&&n.d(t,{illustrations:function(){return l.illustrations}}),n.o(l,"projects")&&n.d(t,{projects:function(){return l.projects}});n(6293);var c=n(9370),s=n(5332)},3716:function(){},7587:function(){},6293:function(e,t,n){"use strict";n.d(t,{E:function(){return r}});var r={home:"home",about:"about",art:"art",blog:"blog",post:"post"}},6510:function(){},9370:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var r=[{slug:"muscleNote",name:"Muscle Note",createdAt:new Date,fileName:"app/bigsur.png",description:"シンプルな筋トレ記録ノートアプリ。React Nativeで作ったiOSアプリ処女作",tags:["iOS"],url:"https://apps.apple.com/jp/app/muscle-note/id1585741817"}]},944:function(){},6738:function(e,t,n){"use strict";n.r(t);var r=n(7294),i=n(7210),a=n(4913),o=n(4675),l=n(6293),c=n(604);t.default=function(){return r.createElement(i.Z,{path:l.E.home,side:!1},r.createElement(o.Z,null),r.createElement(c.L,{size:30}),r.createElement(a.Z,{path:"home"},null),r.createElement(c.L,{size:30}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-cfc64d5b717b2ee5cfa4.js.map