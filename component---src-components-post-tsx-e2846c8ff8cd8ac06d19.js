(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[639],{2010:function(e,t,n){"use strict";var r;!function(a){if("function"!=typeof i){var i=function(e){return e};i.nonNative=!0}var c=i("plaintext"),l=i("html"),o=i("comment"),u=/<(\w*)>/g,s=/<\/?([^\s\/>]+)/;function f(e,t,n){return m(e=e||"",d(t=t||[],n=n||""))}function d(e,t){return{allowable_tags:e=function(e){var t,n=new Set;if("string"==typeof e)for(;t=u.exec(e);)n.add(t[1]);else i.nonNative||"function"!=typeof e[i.iterator]?"function"==typeof e.forEach&&e.forEach(n.add,n):n=new Set(e);return n}(e),tag_replacement:t,state:c,tag_buffer:"",depth:0,in_quote_char:""}}function m(e,t){for(var n=t.allowable_tags,r=t.tag_replacement,a=t.state,i=t.tag_buffer,u=t.depth,s=t.in_quote_char,f="",d=0,m=e.length;d<m;d++){var h=e[d];if(a===c)switch(h){case"<":a=l,i+=h;break;default:f+=h}else if(a===l)switch(h){case"<":if(s)break;u++;break;case">":if(s)break;if(u){u--;break}s="",a=c,i+=">",n.has(b(i))?f+=i:f+=r,i="";break;case'"':case"'":s=h===s?"":s||h,i+=h;break;case"-":"<!-"===i&&(a=o),i+=h;break;case" ":case"\n":if("<"===i){a=c,f+="< ",i="";break}i+=h;break;default:i+=h}else if(a===o)switch(h){case">":"--"==i.slice(-2)&&(a=c),i="";break;default:i+=h}}return t.state=a,t.tag_buffer=i,t.depth=u,t.in_quote_char=s,f}function b(e){var t=s.exec(e);return t?t[1].toLowerCase():null}f.init_streaming_mode=function(e,t){var n=d(e=e||[],t=t||"");return function(e){return m(e||"",n)}},void 0===(r=function(){return f}.call(t,n,t,e))||(e.exports=r)}()},6270:function(e,t,n){"use strict";var r=n(7294),a=n(7145),i=n(5444),c=n(7606),l=n(7190),o=n(9268);t.Z=function(e){var t=(0,i.useStaticQuery)("2463962953");return r.createElement(a.Z,null,r.createElement("div",{className:o.main},e.children,r.createElement("aside",null,r.createElement("div",{className:o.iconTable},r.createElement(i.Link,{to:"/"},r.createElement("img",{src:t.file.publicURL,alt:"icon",className:o.icon})),r.createElement("div",{className:o.myName},"Keita Furuse"),r.createElement("div",{className:o.sns},r.createElement("div",{className:o.icons},r.createElement("a",{href:"https://github.com/poteboy",title:"GitHub"},r.createElement(c.G,{icon:l.zhw,size:"2x"}))),r.createElement("div",{className:o.icons},r.createElement("a",{href:"https://www.linkedin.com/in/keitafuruse/",title:"LinkedIn"},r.createElement(c.G,{icon:l.D9H,size:"2x"}))))))))}},117:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(6270),i=n(4675),c=n(9568),l=n(5533);t.default=function(e){var t=null,n=null;return n=null===e.data.contentfulTech?(t=e.data.contentfulPoem).body.childMarkdownRemark.html:(t=e.data.contentfulTech).body.childMarkdownRemark.html,r.createElement(a.Z,null,r.createElement(i.Z,{title:t.title,description:(0,c.i)(n,t.description)}),r.createElement("div",{className:l.all},r.createElement("div",{className:l.content},r.createElement("div",{className:l.post},r.createElement("h1",null,t.title),r.createElement("div",null,t.publishedDate,r.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))))))}},9568:function(e,t,n){"use strict";n.d(t,{i:function(){return a}});var r=n(2010);function a(e,t){var n=(t||"")+r(e).replace(/\r?\n/g,"").trim();return n.length<=120?n:n.slice(0,120)+"..."}},9268:function(e,t,n){"use strict";n.r(t),n.d(t,{main:function(){return r},iconTable:function(){return a},icon:function(){return i},myName:function(){return c},sns:function(){return l},icons:function(){return o},content:function(){return u},list:function(){return s},fadeIn:function(){return f},link:function(){return d},post:function(){return m},desc:function(){return b}});const r="blog-index-module--main--3lrH2",a="blog-index-module--icon-table--1U8Pp",i="blog-index-module--icon--2GcFg",c="blog-index-module--my-name--Tr7_u",l="blog-index-module--sns---gvuU",o="blog-index-module--icons--1qFwR",u="blog-index-module--content--3vQy5",s="blog-index-module--list--2PoFf",f="blog-index-module--fadeIn--2XgkX",d="blog-index-module--link--2vO7h",m="blog-index-module--post--3VWdc",b="blog-index-module--desc--1TUqQ"},5533:function(e,t,n){"use strict";n.r(t),n.d(t,{all:function(){return r},content:function(){return a},post:function(){return i}});const r="post-module--all--1rzvc",a="post-module--content--2Zv9e",i="post-module--post--1evZm"}}]);
//# sourceMappingURL=component---src-components-post-tsx-e2846c8ff8cd8ac06d19.js.map