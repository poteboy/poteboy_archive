(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[639],{2010:function(e,t,n){"use strict";var r;!function(a){if("function"!=typeof c){var c=function(e){return e};c.nonNative=!0}var l=c("plaintext"),i=c("html"),u=c("comment"),o=/<(\w*)>/g,s=/<\/?([^\s\/>]+)/;function f(e,t,n){return m(e=e||"",d(t=t||[],n=n||""))}function d(e,t){return{allowable_tags:e=function(e){var t,n=new Set;if("string"==typeof e)for(;t=o.exec(e);)n.add(t[1]);else c.nonNative||"function"!=typeof e[c.iterator]?"function"==typeof e.forEach&&e.forEach(n.add,n):n=new Set(e);return n}(e),tag_replacement:t,state:l,tag_buffer:"",depth:0,in_quote_char:""}}function m(e,t){for(var n=t.allowable_tags,r=t.tag_replacement,a=t.state,c=t.tag_buffer,o=t.depth,s=t.in_quote_char,f="",d=0,m=e.length;d<m;d++){var v=e[d];if(a===l)switch(v){case"<":a=i,c+=v;break;default:f+=v}else if(a===i)switch(v){case"<":if(s)break;o++;break;case">":if(s)break;if(o){o--;break}s="",a=l,c+=">",n.has(b(c))?f+=c:f+=r,c="";break;case'"':case"'":s=v===s?"":s||v,c+=v;break;case"-":"<!-"===c&&(a=u),c+=v;break;case" ":case"\n":if("<"===c){a=l,f+="< ",c="";break}c+=v;break;default:c+=v}else if(a===u)switch(v){case">":"--"==c.slice(-2)&&(a=l),c="";break;default:c+=v}}return t.state=a,t.tag_buffer=c,t.depth=o,t.in_quote_char=s,f}function b(e){var t=s.exec(e);return t?t[1].toLowerCase():null}f.init_streaming_mode=function(e,t){var n=d(e=e||[],t=t||"");return function(e){return m(e||"",n)}},void 0===(r=function(){return f}.call(t,n,t,e))||(e.exports=r)}()},6270:function(e,t,n){"use strict";var r=n(7294),a=n(7145),c=n(5444),l=n(9268);t.Z=function(e){var t=(0,c.useStaticQuery)("2463962953");return r.createElement(a.Z,null,r.createElement("div",{className:l.main},e.children,r.createElement("aside",null,r.createElement("div",{className:l.iconTable},r.createElement("img",{src:t.file.publicURL,alt:"icon",className:l.icon}),r.createElement("div",{className:l.myName},"Keita Furuse")))))}},117:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(6270),c=n(4675),l=n(9568),i=n(5533);t.default=function(e){var t=null,n=null;return n=null===e.data.contentfulTech?(t=e.data.contentfulPoem).body.childMarkdownRemark.html:(t=e.data.contentfulTech).body.childMarkdownRemark.html,r.createElement(a.Z,null,r.createElement(c.Z,{title:t.title,description:(0,l.i)(n,t.description)}),r.createElement("div",{className:i.all},r.createElement("div",{className:i.content},r.createElement("div",{className:i.post},r.createElement("h1",null,t.title),r.createElement("div",null,t.publishedDate,r.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))))))}},9568:function(e,t,n){"use strict";n.d(t,{i:function(){return a}});var r=n(2010);function a(e,t){var n=(t||"")+r(e).replace(/\r?\n/g,"").trim();return n.length<=120?n:n.slice(0,120)+"..."}},9268:function(e,t,n){"use strict";n.r(t),n.d(t,{main:function(){return r},iconTable:function(){return a},icon:function(){return c},myName:function(){return l},content:function(){return i},list:function(){return u},fadeIn:function(){return o},link:function(){return s},post:function(){return f},desc:function(){return d}});const r="blog-index-module--main--3lrH2",a="blog-index-module--icon-table--1U8Pp",c="blog-index-module--icon--2GcFg",l="blog-index-module--my-name--Tr7_u",i="blog-index-module--content--3vQy5",u="blog-index-module--list--2PoFf",o="blog-index-module--fadeIn--2XgkX",s="blog-index-module--link--2vO7h",f="blog-index-module--post--3VWdc",d="blog-index-module--desc--1TUqQ"},5533:function(e,t,n){"use strict";n.r(t),n.d(t,{all:function(){return r},content:function(){return a},post:function(){return c}});const r="post-module--all--1rzvc",a="post-module--content--2Zv9e",c="post-module--post--1evZm"}}]);
//# sourceMappingURL=component---src-components-post-tsx-ca21ad5279e6cabc0e77.js.map