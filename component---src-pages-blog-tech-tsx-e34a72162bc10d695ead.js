(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[567],{2802:function(e,t,n){"use strict";var o=n(7294),i=n(9),a=n(5444),r=n(9918),l=n(5705),d=i.ZP.ol.withConfig({displayName:"BlogList__ListTable",componentId:"sc-rolw69-0"})(["flex:1;margin:10vh 15vh 10vh 0;align-items:center;box-sizing:border-box;list-style-type:none;@media (max-width:1194px){flex-direction:column;margin:0 0;}"]),c=i.ZP.div.withConfig({displayName:"BlogList__Tabs",componentId:"sc-rolw69-1"})(["display:flex;flex-wrap:wrap;flex-direction:row;"]),m=i.ZP.div.withConfig({displayName:"BlogList__Tab",componentId:"sc-rolw69-2"})(["background:",";color:",";padding:1vh 2vh;border-radius:10px 10px 0 0;margin-right:1vh;font-size:large;transform:translateX(2vh);border:solid 0.5px;border-bottom:none;border-color:#8484843d;&:hover{color:",";border-color:",";;}"],(function(e){return e.activated?"#8484843d":"none"}),(function(e){return e.activated?"snow":"#fff7f776"}),(function(e){return e.activated?"snow":"#4cf5a676"}),(function(e){return e.activated?"snow":"#4cf5a676"})),s=i.ZP.li.withConfig({displayName:"BlogList__PostList",componentId:"sc-rolw69-3"})(["background:#8484843d;backdrop-filter:blur(2px);border-radius:1rem;box-shadow:1px 1px 1px 0 rgb(1 1 1 / 5%);margin-bottom:15px;&:hover,&:focus{border:solid 1px;border-color:#4cf5a676;box-shadow:0 5px 5px 0px rgb(0 0 0 / 10%);}"]),p=i.ZP.h3.withConfig({displayName:"BlogList__PostTitle",componentId:"sc-rolw69-4"})(["color:snow;"]),u=i.ZP.div.withConfig({displayName:"BlogList__Post",componentId:"sc-rolw69-5"})(["padding-top:1em;padding-bottom:1em;margin:0 auto;max-width:80%;"]),h=i.ZP.div.withConfig({displayName:"BlogList__SubTitle",componentId:"sc-rolw69-6"})(["display:-webkit-inline-box;"]);t.Z=function(e){var t=e.topic,n=e.edges;return o.createElement(d,null,o.createElement(c,null,o.createElement(a.Link,{to:"/blog",className:l.link},o.createElement(m,{activated:"all"===t},"ALL")),o.createElement(a.Link,{to:"/blog/tech",className:l.link},o.createElement(m,{activated:"tech"===t},"TECH")),o.createElement(a.Link,{to:"/blog/poem",className:l.link},o.createElement(m,{activated:"poem"===t},"POEM"))),n.map((function(e){return o.createElement(s,null,o.createElement(a.Link,{to:"/blog/"+e.node.slug,className:l.link},o.createElement(u,null,o.createElement(p,null,e.node.title),o.createElement(h,null,o.createElement(r.Z,{topic:e.__typename}),o.createElement("p",{style:{margin:"0"}},(t=e.node.publishedDate,new Date(t).toLocaleDateString()))),o.createElement("p",{style:{color:"rgb(204, 204, 204)"}},e.node.description))));var t})))}},7185:function(e,t,n){"use strict";var o=n(7294),i=n(5444),a=n(7190),r=n(8014),l=n(9),d=n(7606);t.Z=function(e){var t=e.children,n=e.path,a=(0,o.useState)("undefined"!=typeof window?window.innerWidth:1195),r=(a[0],a[1]),m=(0,o.useState)("undefined"!=typeof window&&window.innerWidth>window.innerHeight?"landscape":"portrait"),s=(m[0],m[1]);(0,o.useEffect)((function(){var e=function(){r(window.innerWidth),window.innerHeight>window.innerWidth?s("portrait"):s("landscape")};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}));var p=l.ZP.div.withConfig({displayName:"home__Table",componentId:"sc-19lijvd-0"})(["color:snow;display:flex;flex-direction:",";margin-left:80px;@media (max-width:1194px){flex-direction:column;margin-left:0px;}"],(function(e){return"post"===e.path?"row-reverse":"row"})),u=l.ZP.div.withConfig({displayName:"home__Left",componentId:"sc-19lijvd-1"})(["width:",";display:flex;position:sticky;top:0;flex-direction:column;@media (max-width:1194px){position:static;width:100%;flex-direction:column;transform:","}"],"home"===n?"100%":"post"===n?"28%":"35%",(function(e){return"home"===e.path?"translateY(15vh)":0})),h=l.ZP.div.withConfig({displayName:"home__IconBox",componentId:"sc-19lijvd-2"})(["margin:5em auto 0 auto;transform:translateX(0.5em);padding:5vh 5vh 0 5vh;@media (max-width:1194px){margin:0 auto 0 auto;padding:0;}"]),f=l.ZP.img.withConfig({displayName:"home__IconImage",componentId:"sc-19lijvd-3"})(["text-align:center;border-radius:80px;width:140px;height:140px;margin:auto;@media (max-width:600px){width:90px;height:90px;}"]),w=l.ZP.div.withConfig({displayName:"home__Name",componentId:"sc-19lijvd-4"})(["margin:0 auto;padding:3vh;font-family:'Quicksand';font-size:40px;background:transparent;backdrop-filter:blur(5px);@media (max-width:1194px){margin:0 auto 0 auto;padding:0;padding-top:1vh;font-size:25px;}"]),g=l.ZP.div.withConfig({displayName:"home__Links",componentId:"sc-19lijvd-5"})(["z-index:100;margin:1em auto auto auto;width:30vh;background:transparent;backdrop-filter:blur(5px);@media (max-width:1194px){margin:0 auto 3vh auto;}"]),x=l.ZP.div.withConfig({displayName:"home__LinkBox",componentId:"sc-19lijvd-6"})(["display:flex;flex-direction:column;@media (max-width:1194px){flex-direction:row;align-items:center;justify-content:center;}"]),v=l.ZP.a.withConfig({displayName:"home__SNS",componentId:"sc-19lijvd-7"})(["text-decoration:none;color:snow;margin:0.5vh;@media (max-width:1194px){transform:scale(0.7);}"]),b=((0,l.F4)(["0%,100%{border-color:#2dcece;}25%{border-color:#ce93d8;}50%{border-color:#ffcc80;}75%{border-color:#80deea;}"]),(0,l.F4)(["0%,100%{color:#2dcece;}25%{color:#ce93d8;}50%{color:#ffcc80;}75%{color:#80deea;}"])),E=l.ZP.div.withConfig({displayName:"home__SnsIcon",componentId:"sc-19lijvd-8"})(["display:flex;padding:1vh;border:solid 1px;border-radius:15px;&:hover{background-color:snow;animation:"," 3s ease-in-out infinite;z-index:1000;transform:scale(1.03);cursor:pointer;border-color:snow;box-shadow:3px 5px 5px 0px #2dcece;}@media (max-width:1194px){border:none;box-shadow:none;}"],b),_=l.ZP.span.withConfig({displayName:"home__SnsName",componentId:"sc-19lijvd-9"})(["font-family:'Quicksand';text-align:center;margin:auto;@media (max-width:1194px){display:none;}"]),y=(0,i.useStaticQuery)("2463962953");return o.createElement(p,{path:n},o.createElement(u,{path:n},o.createElement(h,null,o.createElement(f,{src:y.file.publicURL,alt:"keita furuse aka poteboy's icon"})),o.createElement(w,null,"Keita Furuse"),o.createElement(g,null,o.createElement(x,null,c.map((function(e){return o.createElement(v,{href:e.link,title:e.name,target:"_blank",rel:"noopener"},o.createElement(E,null,o.createElement(d.G,{icon:e.iconName,size:"2x"}),o.createElement(_,null,e.name)))}))))),t)};var c=[{link:"https://github.com/poteboy",name:"GitHub",iconName:a.zhw},{link:"https://www.linkedin.com/in/keitafuruse/",name:"LinkedIn",iconName:a.D9H},{link:"https://twitter.com/_poteboy_",name:"Twitter",iconName:a.mdU},{link:"https://www.pixiv.net/users/59139347",name:"Pixiv",iconName:r.q2v}]},9918:function(e,t,n){"use strict";var o=n(7294),i=n(7964);t.Z=function(e){function t(e){return"ContentfulTechEdge"===e?"TECH":"ContentfulPoemEdge"===e?"POEM":void 0}return o.createElement("div",{className:"TECH"===t(e.topic)?i.tech:i.poem},o.createElement("p",null,t(e.topic)))}},1917:function(e,t,n){"use strict";n.r(t);var o=n(7294),i=n(5444),a=n(2755),r=n(7185),l=n(4675),d=n(2802);t.default=function(){var e=(0,i.useStaticQuery)("2752182949").allContentfulTech.edges;return e=e.sort((function(e,t){return new Date(e.node.publishedDate).getTime()-new Date(t.node.publishedDate).getTime()})).reverse(),o.createElement(a.Z,{path:"blog"},o.createElement(r.Z,{path:"blog"},o.createElement(l.Z,{title:"ぽてログ BLOG",description:"新卒ソフトウェアエンジニアがプログラミングやIT技術について情報発信したり、お気持ち表明ポエムをしたりしています。"}),o.createElement(d.Z,{edges:e,topic:"tech"})))}},5705:function(e,t,n){"use strict";n.r(t),n.d(t,{link:function(){return o}});const o="BlogList-module--link--s7ufY"},7964:function(e,t,n){"use strict";n.r(t),n.d(t,{tech:function(){return o},poem:function(){return i}});const o="topic-module--tech--dZBkK",i="topic-module--poem--NUuJm"}}]);
//# sourceMappingURL=component---src-pages-blog-tech-tsx-e34a72162bc10d695ead.js.map