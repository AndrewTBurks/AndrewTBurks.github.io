(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(199),o=a(200);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(196),a(9).default.enqueue,r.a.createContext({})},196:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},197:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Burks"}}}}},198:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),i=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},199:function(e,t,a){"use strict";var n=a(197),r=a(0),i=a.n(r),o=a(90),l=a(195),s=(a(205),a(203),a(202)),c=a(204),u=[{title:"Home",link:"/"},{title:"Projects",link:"/projects"},{title:"Publications",link:"/publications"},{title:"Blog",link:"/blog"}];var m=function(){var e=Object(r.useContext)(o.a),t=e.theme,a=e.setTheme;return i.a.createElement("button",{className:"menu",style:{marginLeft:"auto"}},i.a.createElement(s.b.Provider,{value:{className:"menuIcon",size:"2em"}},i.a.createElement(c.b,null)),i.a.createElement("div",{className:"menu-options"},u.map(function(e){var t=e.title,a=e.link;return i.a.createElement("div",{className:"menu-opt",key:a},i.a.createElement(l.a,{style:{margin:"-5px"},to:a},t))}),i.a.createElement("div",{className:"menu-opt"},new Array(2).fill(0).map(function(e,n){return i.a.createElement("span",{className:"scheme"+(n+1),key:n},i.a.createElement("span",{style:{border:"2px solid var(--sec)",background:"var(--prim)",color:"var(--text)",padding:"5px",margin:"5px",fontWeight:t===n+1?"bold":"normal"},onClick:function(){return a(n+1)}},"Aa"))}))))},d=(a(206),function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"var(--prim)",borderBottom:"4px solid var(--sec-d)",marginBottom:"1.45rem"}},i.a.createElement("div",{className:"header-wrapper",style:{margin:"0 auto",maxWidth:960,display:"flex",flexDirection:"row",alignItems:"stretch"}},i.a.createElement("h1",{style:{margin:"1.45rem 1.0875rem"}},i.a.createElement(l.a,{to:"/",style:{color:"inherit",textDecoration:"none"}},t)),i.a.createElement(m,null)))});d.defaultProps={siteTitle:""};var p=d;a(207),a(208),t.a=function(e){var t=e.children,a=e.scheme,l=Object(r.useContext)(o.a).theme,s=n.data;return i.a.createElement("div",{className:"scheme"+(l||a||1)},i.a.createElement(p,{siteTitle:s.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},200:function(e,t,a){"use strict";var n=a(201),r=a(0),i=a.n(r),o=a(214),l=a.n(o);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,s=n.data.site,c=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Burks",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@AndrewTBurks"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-f5bf1ac573038af1671c.js.map