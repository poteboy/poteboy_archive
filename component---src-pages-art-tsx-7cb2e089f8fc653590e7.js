(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[878],{1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var i=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=i.createContext&&i.createContext(r),o=function(){return(o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function c(e){return e&&e.map((function(e,t){return i.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return i.createElement(d,o({attr:o({},e.attr)},t),c(e.child))}}function d(e){var t=function(t){var n,r=e.attr,a=e.size,c=e.title,s=l(e,["attr","size","title"]),d=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&i.createElement("title",null,c),e.children)};return void 0!==a?i.createElement(a.Consumer,null,(function(e){return t(e)})):t(r)}},4913:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var i=n(7294),r=n(5444),a=n(7190),o=n(8014),l=n(9),c=n(4617),s=n(604),d=l.ZP.div.withConfig({displayName:"ContentContainer",componentId:"sc-8zrm13-0"})(["width:100%;max-width:600px;padding:16px;margin:0 auto;@media (max-width:","px){width:auto;}"],c.d.device.tablet),p=n(6843),u=n(2651),m=l.ZP.div.withConfig({displayName:"ProjectCard__Wrapper",componentId:"sc-1f0ru5i-0"})(["display:flex;flex-direction:column;align-items:center;box-shadow:18px 18px 23px #c9ccd4,-18px -18px 23px #ffffff;border-radius:20px;padding:15px;width:200px;gap:10px;margin:0 15px;transition:transform 0.1s linear;:hover{transform:translateY(-10px);}"]),f=l.ZP.div.withConfig({displayName:"ProjectCard__Card",componentId:"sc-1f0ru5i-1"})(["display:flex;justify-content:center;align-items:center;"]),x=(0,l.ZP)(u.Z).withConfig({displayName:"ProjectCard__AppImg",componentId:"sc-1f0ru5i-2"})(["object-fit:contain;max-width:95%;max-height:90%;border-radius:20px;"]),g=l.ZP.div.withConfig({displayName:"ProjectCard__Title",componentId:"sc-1f0ru5i-3"})(["font-family:demilight;text-align:center;font-weight:bold;font-size:large;padding:0px 0 10px 0;"]),h=(l.ZP.div.withConfig({displayName:"ProjectCard__Description",componentId:"sc-1f0ru5i-4"})(["padding:5px 0;color:gray;font-size:smaller;word-break:break-all;width:180px;"]),l.ZP.div.withConfig({displayName:"ProjectCard__Tags",componentId:"sc-1f0ru5i-5"})(["width:90%;justify-content:flex-start;display:flex;flex-direction:row;flex-wrap:wrap;font-family:phenomena-regular;letter-spacing:2px;"])),w=l.ZP.div.withConfig({displayName:"ProjectCard__Tag",componentId:"sc-1f0ru5i-6"})(["background:#fd73a4;box-shadow:0 0 5px #fd73a4;color:white;padding:3px 10px;border-radius:5px;font-size:x-small;align-self:flex-start;margin-right:10px;"]),y=l.ZP.a.withConfig({displayName:"ProjectCard__ExternalLink",componentId:"sc-1f0ru5i-7"})(["text-decoration:none;"]),v=function(e){var t=e.project;return i.createElement(y,{href:t.url,target:"__blank"},i.createElement(m,null,i.createElement(f,null,i.createElement(x,{filename:t.fileName})),i.createElement(h,null,t.tags.map((function(e,t){return i.createElement(w,{key:t},e)}))),i.createElement(g,null,t.name)))},b=l.ZP.div.withConfig({displayName:"IllustrationCard__Wrapper",componentId:"sc-eqcrvs-0"})(["display:flex;flex-direction:column;align-items:center;margin:0 15px;box-shadow:18px 18px 23px #c9ccd4,-18px -18px 23px #ffffff;border-radius:20px;padding:15px;width:200px;transition:transform 0.1s linear;@media (max-width:","px){margin:15px 0;}:hover{transform:translateY(-10px);}"],c.d.device.tablet),E=l.ZP.div.withConfig({displayName:"IllustrationCard__Card",componentId:"sc-eqcrvs-1"})(["display:flex;justify-content:center;align-items:center;"]),_=(0,l.ZP)(u.Z).withConfig({displayName:"IllustrationCard__AppImg",componentId:"sc-eqcrvs-2"})(["object-fit:cover;height:180px;width:180px;border-radius:20px;border:solid 5px white;"]),j=l.ZP.a.withConfig({displayName:"IllustrationCard__ExternalLink",componentId:"sc-eqcrvs-3"})(["text-decoration:none;"]),C=function(e){var t=e.illustration;return i.createElement(j,{href:t.url,target:"__blank"},i.createElement(b,null,i.createElement(E,null,i.createElement(_,{filename:t.fileName}))))},N=n(7247),P=function(e){var t=e.children,n=e.path,a=(0,r.useStaticQuery)("2463962953");return i.createElement(d,null,i.createElement(I,null,i.createElement(Z,{path:n},i.createElement(k,null,i.createElement(z,{src:a.file.publicURL,alt:"keita furuse aka poteboy's icon"})),i.createElement(A,null,i.createElement(L,null,"Keita Furuse"),i.createElement(S,null,"Front-End / iOS Developer"))),i.createElement(s.L,{size:40}),i.createElement(q,null,i.createElement(R,null,"PROJECTS"),i.createElement(D,null,"SEE ALL",i.createElement(N.oqk,{style:{paddingLeft:10}}))),i.createElement(T,null,p.projects.map((function(e){return i.createElement(v,{project:e,key:e.slug})}))),i.createElement(s.L,{size:30}),i.createElement(q,null,i.createElement(R,null,"ILLUSTRATIONS"),i.createElement(D,null,"SEE ALL",i.createElement(N.oqk,{style:{paddingLeft:10}}))),i.createElement(T,null,p.illustrations.map((function(e){return i.createElement(C,{illustration:e,key:e.slug})}))),i.createElement(s.L,{size:50}),t))},I=l.ZP.div.withConfig({displayName:"home__Wrapper",componentId:"sc-19lijvd-0"})(["margin:0 auto;"]),Z=l.ZP.div.withConfig({displayName:"home__Table",componentId:"sc-19lijvd-1"})(["width:100%;display:flex;flex-direction:row;justify-content:flex-start;gap:20px;@media (max-width:","px){width:auto;flex-direction:column;}"],c.d.device.tablet),k=l.ZP.div.withConfig({displayName:"home__IconBox",componentId:"sc-19lijvd-2"})(["padding:5vh;border-radius:20px;@media (max-width:1194px){margin:0 auto 0 auto;padding:0;}"]),O=(0,l.F4)(["0%{transform:scale(1,1,1);text-shadow:0px 0px 100px;}11%{transform:scale(1.03,1.03);}22%{transform:scale(1,1);}33%{transform:scale(1.05,1.05);}44%{transform:scale(1,1);text-shadow:0px 0px 100px;}100%{transform:scale(1,1);text-shadow:0px 0px 100px;}"]),z=l.ZP.img.withConfig({displayName:"home__IconImage",componentId:"sc-19lijvd-3"})(["text-align:center;border-radius:80px;width:140px;height:140px;margin:auto;animation:1.24s infinite ",";@media (max-width:","px){width:90px;height:90px;}"],O,c.d.device.tablet),A=l.ZP.div.withConfig({displayName:"home__Profile",componentId:"sc-19lijvd-4"})(["display:flex;flex-direction:column;justify-content:center;height:50%;align-self:center;margin:0 auto;"]),L=l.ZP.div.withConfig({displayName:"home__Myname",componentId:"sc-19lijvd-5"})(["font-weight:600;text-align:center;align-items:center;padding:10px 20px;color:gray;font-size:40px;font-family:phenomena-bold;"]),S=l.ZP.div.withConfig({displayName:"home__AboutMe",componentId:"sc-19lijvd-6"})(["padding:10px 20px;color:white;font-size:x-large;font-family:phenomena-regular;background:linear-gradient(to right,#acb6e5,#86fde8);box-shadow:0 0 5px #acb6e5;border-radius:20px;"]),T=l.ZP.div.withConfig({displayName:"home__Projects",componentId:"sc-19lijvd-7"})(["display:flex;flex-direction:row;align-self:flex-start;@media (max-width:","px){flex-direction:column;align-items:center;}"],c.d.device.tablet),q=l.ZP.div.withConfig({displayName:"home__Header",componentId:"sc-19lijvd-8"})(["display:flex;flex-direction:row;justify-content:space-between;"]),R=l.ZP.h3.withConfig({displayName:"home__Title",componentId:"sc-19lijvd-9"})(["text-align:left;align-self:flex-start;font-family:phenomena-bold;letter-spacing:1.5px;padding:15px;"]),D=l.ZP.div.withConfig({displayName:"home__SeeAll",componentId:"sc-19lijvd-10"})(["font-family:phenomena-bold;align-self:center;padding:10px;:hover{border-radius:20px;box-shadow:18px 18px 36px #d5d8e0,-18px -18px 36px #ffffff;cursor:pointer;}"]);a.zhw,a.D9H,a.mdU,o.q2v},6825:function(e,t,n){"use strict";n.d(t,{iA:function(){return o},VY:function(){return l}});var i=n(7294),r=n(9),a=r.ZP.div.withConfig({displayName:"profile__Wrapper",componentId:"sc-srrcnt-0"})(["display:flex;flex-direction:column;width:100%;"]),o=r.ZP.div.withConfig({displayName:"profile__Table",componentId:"sc-srrcnt-1"})(["align-self:flex-end;width:70%;background:white;border-radius:15px;border:solid 2px #d5d8e0;@media (max-width:1194px){width:100%;}"]),l=r.ZP.div.withConfig({displayName:"profile__Content",componentId:"sc-srrcnt-2"})(["font-family:phenomena-regular;padding:3vh;margin:0 50px;display:flex;flex-direction:column;align-items:center;@media (max-width:1194px){max-width:none;margin:auto;}"]),c=r.ZP.p.withConfig({displayName:"profile__AboutMe",componentId:"sc-srrcnt-3"})(["padding:10px 20px;color:white;font-size:x-large;font-family:phenomena-regular;background:linear-gradient(to right,#acb6e5,#86fde8);box-shadow:0 0 5px #acb6e5;border-radius:20px;width:200px;text-align:center;"]),s=r.ZP.p.withConfig({displayName:"profile__Bio",componentId:"sc-srrcnt-4"})(["text-align:left;padding:2vh;font-family:'Quicksand';line-height:2.5;letter-spacing:1.5px;font-weight:300;@media (max-width:1194px){line-height:3;}"]);t.ZP=function(){return i.createElement(a,null,i.createElement(o,null,i.createElement(l,null,i.createElement(c,null,"ABOUT ME"),i.createElement(s,null,"都内在住のプログラマー。",i.createElement("br",null),"2021年4月に新卒で医療系スタートアップに入社し、 React (Next.js), React Native, Angular, Ruby on Railsなどを用いたアプリケーション開発に携わる。",i.createElement("br",null),"TypeScripを用いたWebフロントエンド開発を中心に、大学在学中から長期インターン生として実務アプリケーション開発に携わる。",i.createElement("br",null),"また、卒業論文では「機械学習を用いたパワーリフティングスコアの回帰予測」をテーマに取り組む。",i.createElement("br",null),"最近の趣味はiOS開発とお絵かき。TOEIC920点(2017年)。ベンチプレス150kg(2019年)。"))))}},6403:function(){},5332:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var i=[{slug:"curon-boy",name:"ある日",createdAt:new Date,fileName:"art/just-a-boy.jpg",description:"",url:"https://www.pixiv.net/artworks/90836146"},{slug:"end-of-summer",name:"夏の終わり",createdAt:new Date,fileName:"art/end-of-summer.jpg",description:"",url:"https://www.pixiv.net/artworks/92371319"}]},6843:function(e,t,n){"use strict";n.d(t,{projects:function(){return c.q},illustrations:function(){return s.K}});var i=n(3716);n.o(i,"illustrations")&&n.d(t,{illustrations:function(){return i.illustrations}}),n.o(i,"projects")&&n.d(t,{projects:function(){return i.projects}});var r=n(6403);n.o(r,"illustrations")&&n.d(t,{illustrations:function(){return r.illustrations}}),n.o(r,"projects")&&n.d(t,{projects:function(){return r.projects}});var a=n(6510);n.o(a,"illustrations")&&n.d(t,{illustrations:function(){return a.illustrations}}),n.o(a,"projects")&&n.d(t,{projects:function(){return a.projects}});var o=n(7587);n.o(o,"illustrations")&&n.d(t,{illustrations:function(){return o.illustrations}}),n.o(o,"projects")&&n.d(t,{projects:function(){return o.projects}});var l=n(944);n.o(l,"illustrations")&&n.d(t,{illustrations:function(){return l.illustrations}}),n.o(l,"projects")&&n.d(t,{projects:function(){return l.projects}});n(6293);var c=n(9370),s=n(5332)},3716:function(){},7587:function(){},6293:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var i={home:"home",about:"about",art:"art",blog:"blog",post:"post"}},6510:function(){},9370:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var i=[{slug:"muscleNote",name:"Muscle Note",createdAt:new Date,fileName:"app/bigsur.png",description:"シンプルな筋トレ記録ノートアプリ。React Nativeで作ったiOSアプリ処女作",tags:["iOS"],url:"https://apps.apple.com/jp/app/muscle-note/id1585741817"}]},944:function(){},697:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var i=n(7294),r=n(7210),a=n(4913),o=n(4675),l=n(6825),c=function(){return i.createElement(l.iA,null,i.createElement(l.VY,null))},s=function(){return i.createElement(r.Z,null,i.createElement(o.Z,null),i.createElement(a.Z,{path:"art"},i.createElement(c,null)))}}}]);
//# sourceMappingURL=component---src-pages-art-tsx-7cb2e089f8fc653590e7.js.map