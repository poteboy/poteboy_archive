(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[878],{7185:function(e,n,t){"use strict";var i=t(7294),a=t(5444),o=t(7190),r=t(8014),d=t(9),l=t(7606);n.Z=function(e){var n=e.children,t=e.path,o=(0,i.useState)("undefined"!=typeof window?window.innerWidth:1195),r=(o[0],o[1]),m=(0,i.useState)("undefined"!=typeof window&&window.innerWidth>window.innerHeight?"landscape":"portrait"),p=(m[0],m[1]);(0,i.useEffect)((function(){var e=function(){r(window.innerWidth),window.innerHeight>window.innerWidth?p("portrait"):p("landscape")};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}));var s=d.ZP.div.withConfig({displayName:"home__Table",componentId:"sc-19lijvd-0"})(["color:snow;display:flex;flex-direction:row;margin-left:",";@media (max-width:1194px){flex-direction:column;margin-left:0px;}"],(function(e){return"home"===e.path?"0px":"80px"})),u=d.ZP.div.withConfig({displayName:"home__Left",componentId:"sc-19lijvd-1"})(["width:",";display:flex;flex-direction:column;@media (max-width:1194px){width:100%;flex-direction:column;transform:","}"],"home"===t?"100%":"40%",(function(e){return"home"===e.path?"translateY(15vh)":0})),h=d.ZP.div.withConfig({displayName:"home__IconBox",componentId:"sc-19lijvd-2"})(["margin:5em auto 0 auto;transform:translateX(0.5em);padding:5vh 5vh 0 5vh;@media (max-width:1194px){margin:0 auto 0 auto;padding:0;}"]),f=d.ZP.img.withConfig({displayName:"home__IconImage",componentId:"sc-19lijvd-3"})(["text-align:center;border-radius:80px;width:140px;height:140px;margin:auto;@media (max-width:600px){width:90px;height:90px;}"]),x=d.ZP.div.withConfig({displayName:"home__Name",componentId:"sc-19lijvd-4"})(["margin:auto;padding:3vh;font-family:'Quicksand';font-size:40px;background:transparent;backdrop-filter:blur(5px);@media (max-width:1194px){margin:0 auto 0 auto;padding:0;padding-top:1vh;font-size:25px;}"]),w=d.ZP.div.withConfig({displayName:"home__Links",componentId:"sc-19lijvd-5"})(["z-index:100;margin:1em auto auto auto;width:30vh;background:transparent;backdrop-filter:blur(5px);@media (max-width:1194px){margin:0 auto 3vh auto;}"]),g=d.ZP.div.withConfig({displayName:"home__LinkBox",componentId:"sc-19lijvd-6"})(["display:flex;flex-direction:column;@media (max-width:1194px){flex-direction:row;align-items:center;justify-content:center;}"]),v=d.ZP.a.withConfig({displayName:"home__SNS",componentId:"sc-19lijvd-7"})(["text-decoration:none;color:snow;margin:0.5vh;@media (max-width:1194px){transform:scale(0.7);}"]),b=((0,d.F4)(["0%,100%{border-color:#2dcece;}25%{border-color:#ce93d8;}50%{border-color:#ffcc80;}75%{border-color:#80deea;}"]),(0,d.F4)(["0%,100%{color:#2dcece;}25%{color:#ce93d8;}50%{color:#ffcc80;}75%{color:#80deea;}"])),y=d.ZP.div.withConfig({displayName:"home__SnsIcon",componentId:"sc-19lijvd-8"})(["display:flex;padding:1vh;border:solid 1px;border-radius:15px;&:hover{background-color:snow;animation:"," 3s ease-in-out infinite;z-index:1000;transform:scale(1.03);cursor:pointer;border-color:snow;box-shadow:3px 5px 5px 0px #2dcece;}@media (max-width:1194px){border:none;box-shadow:none;}"],b),_=d.ZP.span.withConfig({displayName:"home__SnsName",componentId:"sc-19lijvd-9"})(["font-family:'Quicksand';text-align:center;margin:auto;@media (max-width:1194px){display:none;}"]),E=(0,a.useStaticQuery)("2463962953");return i.createElement(s,{path:t},i.createElement(u,{path:t},i.createElement(h,null,i.createElement(f,{src:E.file.publicURL,alt:"keita furuse aka poteboy's icon"})),i.createElement(x,null,"Keita Furuse"),i.createElement(w,null,i.createElement(g,null,c.map((function(e){return i.createElement(v,{href:e.link,title:e.name,target:"_blank",rel:"noopener"},i.createElement(y,null,i.createElement(l.G,{icon:e.iconName,size:"2x"}),i.createElement(_,null,e.name)))}))))),n)};var c=[{link:"https://github.com/poteboy",name:"GitHub",iconName:o.zhw},{link:"https://www.linkedin.com/in/keitafuruse/",name:"LinkedIn",iconName:o.D9H},{link:"https://twitter.com/_poteboy_",name:"Twitter",iconName:o.mdU},{link:"https://www.pixiv.net/users/59139347",name:"Pixiv",iconName:r.q2v}]},6825:function(e,n,t){"use strict";t.d(n,{iA:function(){return o},VY:function(){return r}});var i=t(7294),a=t(9),o=a.ZP.div.withConfig({displayName:"profile__Table",componentId:"sc-srrcnt-0"})(["transform:translateY(15vh);background:#8484843d;backdrop-filter:blur(2px);border-radius:20px;box-shadow:3px 5px 20px 9px #2e2f2f;@media (max-width:1194px){transform:translateY(-5vh) scale(0.9);}"]),r=a.ZP.div.withConfig({displayName:"profile__Content",componentId:"sc-srrcnt-1"})(["font-family:phenomena-regular;padding:3vh;max-width:80vh;@media (max-width:1194px){max-width:none;}"]),d=a.ZP.p.withConfig({displayName:"profile__AboutMe",componentId:"sc-srrcnt-2"})(["font-family:'Quicksand';padding:2vh;text-align:center;"]),l=a.ZP.div.withConfig({displayName:"profile__Bio",componentId:"sc-srrcnt-3"})(["text-align:left;padding:2vh;font-family:'Quicksand';line-height:2;@media (max-width:1194px){line-height:3;}"]);n.ZP=function(){return i.createElement(o,null,i.createElement(r,null,i.createElement(d,null,"ABOUT ME"),i.createElement(l,null,"都内在住のプログラマー。",i.createElement("br",null),"2021年4月に新卒で医療系スタートアップに入社し、 React (Next.js), React Native, Angular, Ruby on Railsなどを用いたアプリケーション開発に携わる。",i.createElement("br",null),"TypeScripを用いたWebフロントエンド開発を中心に、大学在学中から長期インターン生として実務アプリケーション開発に携わる。",i.createElement("br",null),"また、卒業論文では「機械学習を用いたパワーリフティングスコアの回帰予測」をテーマに取り組む。",i.createElement("br",null),"最近の趣味はiOS開発とお絵かき。TOEIC920点(2017年)。ベンチプレス150kg(2019年)。")))}},697:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var i=t(7294),a=t(2755),o=t(7185),r=t(4675),d=t(6825),l=function(){return i.createElement(d.iA,null,i.createElement(d.VY,null))},c=function(){return i.createElement(a.Z,null,i.createElement(r.Z,null),i.createElement(o.Z,{path:"art"},i.createElement(l,null)))}}}]);
//# sourceMappingURL=component---src-pages-art-tsx-32a4be2d2759a6a58c47.js.map