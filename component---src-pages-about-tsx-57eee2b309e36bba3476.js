(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[49],{6007:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/07f2e110c79d3e9b8cb34ad0ec3f1ff6/1221a/youngerme.jpg","srcSet":"/static/07f2e110c79d3e9b8cb34ad0ec3f1ff6/21c52/youngerme.jpg 450w,\\n/static/07f2e110c79d3e9b8cb34ad0ec3f1ff6/fc2d4/youngerme.jpg 900w,\\n/static/07f2e110c79d3e9b8cb34ad0ec3f1ff6/1221a/youngerme.jpg 1800w","sizes":"(min-width: 1800px) 1800px, 100vw"},"sources":[{"srcSet":"/static/07f2e110c79d3e9b8cb34ad0ec3f1ff6/901f1/youngerme.webp 450w,\\n/static/07f2e110c79d3e9b8cb34ad0ec3f1ff6/4ffff/youngerme.webp 900w,\\n/static/07f2e110c79d3e9b8cb34ad0ec3f1ff6/66516/youngerme.webp 1800w","type":"image/webp","sizes":"(min-width: 1800px) 1800px, 100vw"}]},"width":1800,"height":1200}')},2010:function(e,t,n){"use strict";var a;!function(c){if("function"!=typeof r){var r=function(e){return e};r.nonNative=!0}var l=r("plaintext"),u=r("html"),o=r("comment"),i=/<(\w*)>/g,s=/<\/?([^\s\/>]+)/;function m(e,t,n){return d(e=e||"",f(t=t||[],n=n||""))}function f(e,t){return{allowable_tags:e=function(e){var t,n=new Set;if("string"==typeof e)for(;t=i.exec(e);)n.add(t[1]);else r.nonNative||"function"!=typeof e[r.iterator]?"function"==typeof e.forEach&&e.forEach(n.add,n):n=new Set(e);return n}(e),tag_replacement:t,state:l,tag_buffer:"",depth:0,in_quote_char:""}}function d(e,t){for(var n=t.allowable_tags,a=t.tag_replacement,c=t.state,r=t.tag_buffer,i=t.depth,s=t.in_quote_char,m="",f=0,d=e.length;f<d;f++){var g=e[f];if(c===l)switch(g){case"<":c=u,r+=g;break;default:m+=g}else if(c===u)switch(g){case"<":if(s)break;i++;break;case">":if(s)break;if(i){i--;break}s="",c=l,r+=">",n.has(b(r))?m+=r:m+=a,r="";break;case'"':case"'":s=g===s?"":s||g,r+=g;break;case"-":"<!-"===r&&(c=o),r+=g;break;case" ":case"\n":if("<"===r){c=l,m+="< ",r="";break}r+=g;break;default:r+=g}else if(c===o)switch(g){case">":"--"==r.slice(-2)&&(c=l),r="";break;default:r+=g}}return t.state=c,t.tag_buffer=r,t.depth=i,t.in_quote_char=s,m}function b(e){var t=s.exec(e);return t?t[1].toLowerCase():null}m.init_streaming_mode=function(e,t){var n=f(e=e||[],t=t||"");return function(e){return d(e||"",n)}},void 0===(a=function(){return m}.call(t,n,t,e))||(e.exports=a)}()},6270:function(e,t,n){"use strict";var a=n(7294),c=n(7145),r=n(5444),l=n(7606),u=n(7190),o=n(9268);t.Z=function(e){var t=(0,r.useStaticQuery)("2463962953");return a.createElement(c.Z,null,a.createElement("div",{className:o.main},e.children,a.createElement("aside",null,a.createElement("div",{className:o.iconTable},a.createElement("div",{className:o.itsMe},a.createElement(r.Link,{to:"/"},a.createElement("img",{src:t.file.publicURL,alt:"keita furuse aka poteboy's icon",className:o.icon}))),a.createElement("div",{className:o.myName},"Keita Furuse"),a.createElement("div",{className:o.sns},a.createElement("div",{className:o.icons},a.createElement("a",{href:"https://github.com/poteboy",title:"GitHub",target:"_blank",rel:"noopener"},a.createElement(l.G,{icon:u.zhw,size:"2x"}))),a.createElement("div",{className:o.icons},a.createElement("a",{href:"https://www.linkedin.com/in/keitafuruse/",title:"LinkedIn",target:"_blank",rel:"noopener"},a.createElement(l.G,{icon:u.D9H,size:"2x"}))),a.createElement("div",{className:o.icons},a.createElement("a",{href:"https://twitter.com/_poteboy_",title:"Twitter",target:"_blank",rel:"noopener"},a.createElement(l.G,{icon:u.mdU,size:"2x"}))))))))}},9568:function(e,t,n){"use strict";n.d(t,{i:function(){return c}});var a=n(2010);function c(e,t){var n=(t||"")+a(e).replace(/\r?\n/g,"").trim();return n.length<=120?n:n.slice(0,120)+"..."}},1908:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var a=n(7294),c=n(6270),r=n(4675),l=n(2778),u=n(9568),o=n(6098),i=function(){return a.createElement(c.Z,null,a.createElement(r.Z,{title:"ぽてログ ABOUT",description:(0,u.i)("TypeScriptが好きな新卒のソフトウェアディベロッパーです。仕事ではReactやAngular、Ruby on Rails周りをぽちぽち書いてます。大学の卒論ではPythonを使って機械学習したりしてました。")}),a.createElement("div",{className:o.table},a.createElement("section",{className:o.content},a.createElement("div",{className:o.youngMe},a.createElement(l.S,{src:"../assets/images/youngerme.jpg",alt:"young keita furuse aka poteboy",imgClassName:"img-me",__imageData:n(6007)})),a.createElement("div",{style:o.profile},a.createElement("h3",null,"Profile"),a.createElement("p",null,"MedTech系スタートアップでソフトウェア開発者をやっています。",a.createElement("br",null),"2021年新卒入社で、業務では",a.createElement("code",{className:"language-text"},"Angular"),"、",a.createElement("code",{className:"language-text"},"Ruby on Rails"),"などを用いたアプリケーションの開発を担当しています。",a.createElement("br",null),"大学時代からインターンとして実務開発業務に携わり、Webフロントエンド開発とREST APIサーバー開発の経験を積みました。",a.createElement("br",null),"また、大学の卒業論文では",a.createElement("code",{className:"language-text"},"Python"),"を使って機械学習したりしました。",a.createElement("br",null),"フロントエンド開発と",a.createElement("code",{className:"language-text"},"TypeScript"),"が好物です。技術とサービス、両方に対して真摯な開発者になりたいと思って日々勉強しています。")),a.createElement("div",{style:o.profile},a.createElement("h3",null,"SKILLS"),a.createElement("p",null,"言語は",a.createElement("code",{className:"language-text"},"Python"),", ",a.createElement("code",{className:"language-text"},"TypeScript"),", ",a.createElement("code",{className:"language-text"},"JavaScript"),", ",a.createElement("code",{className:"language-text"},"Ruby"),", ",a.createElement("code",{className:"language-text"},"Go"),"辺りが書けます。",a.createElement("br",null),"フレームワークは",a.createElement("code",{className:"language-text"},"Angular"),", ",a.createElement("code",{className:"language-text"},"Gatsbyjs"),", ",a.createElement("code",{className:"language-text"},"Nextjs"),", ",a.createElement("code",{className:"language-text"},"Ruby on Rails"),"周りを触っています。",a.createElement("br",null),"他には、大学1年生の頃にTOEICで920点、2年生の頃にTOEFL iBTで96点、3年生の頃にベンチプレスで150kg(非公式ルール)を持ち上げたので、英語と筋トレもﾁｮｯﾄだけできます。",a.createElement("br",null),"最近お絵かきも始めたので、もっとうまく描けるようになりたいです。")),a.createElement("div",{style:o.profile},a.createElement("h3",null,"About"),a.createElement("p",null,"このサイトでは自分の勉強も兼ねてプログラミングやIT技術に関して情報発信をしています。",a.createElement("br",null),"基本的にはWeb開発の話題が多めですが、アルゴリズムからWebデザインまで幅広くカバーしていきたいです。",a.createElement("br",null),"アイコンは会社のデザイナーさんに作って頂いたもので、とても気に入っているので社内外問わず愛用しています。金髪でクロムハーツを好んでつけていることからこのデザインになりました。",a.createElement("br",null),"このサイトは私個人が完全に趣味で運営しており、ここでの発言は所属組織の見解を代表するものではありません。",a.createElement("br",null),"なお、このサイトのソースコードは",a.createElement("a",{href:"https://github.com/poteboy/poteboy",target:"_blank",rel:"noopener"},"GitHub上のリンク"),"からご覧になる事ができます。")),a.createElement("div",{style:o.contact},a.createElement("h3",null,"Contact"),a.createElement("p",null,"・",a.createElement("a",{href:"mailto:keitatkins4@gmail.com"},"Email"))),a.createElement("br",null))))}},6098:function(e,t,n){"use strict";n.r(t),n.d(t,{table:function(){return a},fadeIn:function(){return c},content:function(){return r},youngMe:function(){return l},bio:function(){return u}});const a="about-module--table--2fw3a",c="about-module--fadeIn--2snS_",r="about-module--content--34UM3",l="about-module--young-me--33Sak",u="about-module--bio--1UQEO"},9268:function(e,t,n){"use strict";n.r(t),n.d(t,{main:function(){return a},iconTable:function(){return c},icon:function(){return r},purupuru:function(){return l},myName:function(){return u},sns:function(){return o},icons:function(){return i},content:function(){return s},list:function(){return m},fadeIn:function(){return f},link:function(){return d},post:function(){return b},sub:function(){return g},topic:function(){return E},desc:function(){return p},itsMe:function(){return y}});const a="blog-index-module--main--3lrH2",c="blog-index-module--icon-table--1U8Pp",r="blog-index-module--icon--2GcFg",l="blog-index-module--purupuru--3HMPX",u="blog-index-module--my-name--Tr7_u",o="blog-index-module--sns---gvuU",i="blog-index-module--icons--1qFwR",s="blog-index-module--content--3vQy5",m="blog-index-module--list--2PoFf",f="blog-index-module--fadeIn--2XgkX",d="blog-index-module--link--2vO7h",b="blog-index-module--post--3VWdc",g="blog-index-module--sub--15iUZ",E="blog-index-module--topic--2qEya",p="blog-index-module--desc--1TUqQ",y="blog-index-module--its-me--5838H"}}]);
//# sourceMappingURL=component---src-pages-about-tsx-57eee2b309e36bba3476.js.map