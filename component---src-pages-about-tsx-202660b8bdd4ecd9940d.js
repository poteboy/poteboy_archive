(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[49],{6949:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a89898","images":{"fallback":{"src":"/static/4cfb16e4e2769e8843070b6dfacc5de7/21fc1/youngme.jpg","srcSet":"/static/4cfb16e4e2769e8843070b6dfacc5de7/b713b/youngme.jpg 211w,\\n/static/4cfb16e4e2769e8843070b6dfacc5de7/de629/youngme.jpg 421w,\\n/static/4cfb16e4e2769e8843070b6dfacc5de7/21fc1/youngme.jpg 842w","sizes":"(min-width: 842px) 842px, 100vw"},"sources":[{"srcSet":"/static/4cfb16e4e2769e8843070b6dfacc5de7/fbacc/youngme.webp 211w,\\n/static/4cfb16e4e2769e8843070b6dfacc5de7/3a307/youngme.webp 421w,\\n/static/4cfb16e4e2769e8843070b6dfacc5de7/1a7e9/youngme.webp 842w","type":"image/webp","sizes":"(min-width: 842px) 842px, 100vw"}]},"width":842,"height":663}')},2010:function(e,t,n){"use strict";var a;!function(c){if("function"!=typeof r){var r=function(e){return e};r.nonNative=!0}var i=r("plaintext"),l=r("html"),u=r("comment"),o=/<(\w*)>/g,s=/<\/?([^\s\/>]+)/;function f(e,t,n){return d(e=e||"",m(t=t||[],n=n||""))}function m(e,t){return{allowable_tags:e=function(e){var t,n=new Set;if("string"==typeof e)for(;t=o.exec(e);)n.add(t[1]);else r.nonNative||"function"!=typeof e[r.iterator]?"function"==typeof e.forEach&&e.forEach(n.add,n):n=new Set(e);return n}(e),tag_replacement:t,state:i,tag_buffer:"",depth:0,in_quote_char:""}}function d(e,t){for(var n=t.allowable_tags,a=t.tag_replacement,c=t.state,r=t.tag_buffer,o=t.depth,s=t.in_quote_char,f="",m=0,d=e.length;m<d;m++){var g=e[m];if(c===i)switch(g){case"<":c=l,r+=g;break;default:f+=g}else if(c===l)switch(g){case"<":if(s)break;o++;break;case">":if(s)break;if(o){o--;break}s="",c=i,r+=">",n.has(b(r))?f+=r:f+=a,r="";break;case'"':case"'":s=g===s?"":s||g,r+=g;break;case"-":"<!-"===r&&(c=u),r+=g;break;case" ":case"\n":if("<"===r){c=i,f+="< ",r="";break}r+=g;break;default:r+=g}else if(c===u)switch(g){case">":"--"==r.slice(-2)&&(c=i),r="";break;default:r+=g}}return t.state=c,t.tag_buffer=r,t.depth=o,t.in_quote_char=s,f}function b(e){var t=s.exec(e);return t?t[1].toLowerCase():null}f.init_streaming_mode=function(e,t){var n=m(e=e||[],t=t||"");return function(e){return d(e||"",n)}},void 0===(a=function(){return f}.call(t,n,t,e))||(e.exports=a)}()},6270:function(e,t,n){"use strict";var a=n(7294),c=n(7145),r=n(5444),i=n(7606),l=n(7190),u=n(9268);t.Z=function(e){var t=(0,r.useStaticQuery)("2463962953");return a.createElement(c.Z,null,a.createElement("div",{className:u.main},e.children,a.createElement("aside",null,a.createElement("div",{className:u.iconTable},a.createElement(r.Link,{to:"/"},a.createElement("img",{src:t.file.publicURL,alt:"icon",className:u.icon})),a.createElement("div",{className:u.myName},"Keita Furuse"),a.createElement("div",{className:u.sns},a.createElement("div",{className:u.icons},a.createElement("a",{href:"https://github.com/poteboy",title:"GitHub"},a.createElement(i.G,{icon:l.zhw,size:"2x"}))),a.createElement("div",{className:u.icons},a.createElement("a",{href:"https://www.linkedin.com/in/keitafuruse/",title:"LinkedIn"},a.createElement(i.G,{icon:l.D9H,size:"2x"}))))))))}},9568:function(e,t,n){"use strict";n.d(t,{i:function(){return c}});var a=n(2010);function c(e,t){var n=(t||"")+a(e).replace(/\r?\n/g,"").trim();return n.length<=120?n:n.slice(0,120)+"..."}},1908:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(7294),c=n(6270),r=n(4675),i=n(2778),l=n(9568),u=n(6098),o=function(){return a.createElement(c.Z,null,a.createElement(r.Z,{title:"ぽてログ ABOUT",description:(0,l.i)("TypeScriptが好きな新卒のソフトウェアディベロッパーです。仕事ではReactやAngular、Ruby on Rails周りをぽちぽち書いてます。大学の卒論ではPythonを使って機械学習したりしてました。")}),a.createElement("div",{className:u.table},a.createElement("section",{className:u.content},a.createElement("div",{className:u.youngMe},a.createElement(i.S,{src:"../assets/images/youngme.jpg",alt:"young poteboy",imgClassName:"img-me",__imageData:n(6949)})),a.createElement("div",{style:u.profile},a.createElement("h3",null,"Profile"),a.createElement("p",null,"TypeScriptが好きな新卒のソフトウェアディベロッパーです。仕事ではReactやAngular、Ruby on Rails周りをぽちぽち書いてます。大学の卒論ではPythonを使って機械学習したりしてました。",a.createElement("br",null),"プログラムを書いたり、絵を描いたり、ベンチプレスすることが好きです。最近は料理やアルゴリズムのお勉強も嗜んでます。",a.createElement("br",null),"アイコンは会社のデザイナーさんに作って頂いたもので、とても気に入っているので社内外問わず愛用しています。金髪でクロムハーツを好んでつけていることからこのデザインになりました。")),a.createElement("br",null),a.createElement("h3",null,"About"),a.createElement("p",null,"このサイトはGatsbyという静的サイトジェネレーターを使って作りました。",a.createElement("br",null),"起動には少し時間がかかりますが、一度サイトをロードし終えたらまるでネイティブアプリのように高速に使えるかと思いますので、是非色々なページを徘徊してみてください。",a.createElement("br",null),"なお、このサイトは私個人が完全に趣味で運営しており、ここでの発言は所属組織の見解を代表するものではありません。"),a.createElement("br",null),a.createElement("div",{style:u.contact},a.createElement("h3",null,"Contact"),a.createElement("p",null,"・",a.createElement("a",{href:"https://github.com/poteboy",target:"_blank"},"GitHub"))),a.createElement("br",null))))}},6098:function(e,t,n){"use strict";n.r(t),n.d(t,{table:function(){return a},content:function(){return c},fadeIn:function(){return r},youngMe:function(){return i},bio:function(){return l}});const a="about-module--table--2fw3a",c="about-module--content--34UM3",r="about-module--fadeIn--2snS_",i="about-module--young-me--33Sak",l="about-module--bio--1UQEO"},9268:function(e,t,n){"use strict";n.r(t),n.d(t,{main:function(){return a},iconTable:function(){return c},icon:function(){return r},myName:function(){return i},sns:function(){return l},icons:function(){return u},content:function(){return o},list:function(){return s},fadeIn:function(){return f},link:function(){return m},post:function(){return d},desc:function(){return b}});const a="blog-index-module--main--3lrH2",c="blog-index-module--icon-table--1U8Pp",r="blog-index-module--icon--2GcFg",i="blog-index-module--my-name--Tr7_u",l="blog-index-module--sns---gvuU",u="blog-index-module--icons--1qFwR",o="blog-index-module--content--3vQy5",s="blog-index-module--list--2PoFf",f="blog-index-module--fadeIn--2XgkX",m="blog-index-module--link--2vO7h",d="blog-index-module--post--3VWdc",b="blog-index-module--desc--1TUqQ"}}]);
//# sourceMappingURL=component---src-pages-about-tsx-202660b8bdd4ecd9940d.js.map