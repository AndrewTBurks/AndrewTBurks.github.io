(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{222:function(e,a,t){"use strict";t.r(a);t(21);var n=t(267),r=t(0),i=t.n(r),o=(t(140),t(225)),l=t(224),c=(t(11),t(12),t(7),t(18),t(39),t(218),t(223));t(244);var s=function(e){var a=e.award,t=e.teamBefore,n=e.teamAfter,r=e.name,o=e.journal;return function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t])}(e,["award","teamBefore","teamAfter","name","journal"]),i.a.createElement("div",{className:"pub-entry",style:{color:"var(--text)"}},a&&i.a.createElement("div",{className:"pub-award"},i.a.createElement(c.a,{color:"var(--accent)"})," ",a)||null,i.a.createElement("div",{className:"pub-title"},r),i.a.createElement("div",{className:"pub-authors"},i.a.createElement(c.r,{color:"var(--link)"})," ",t," ",i.a.createElement("div",{className:"me"},"A. Burks"),n),i.a.createElement("div",{className:"pub-venue"},i.a.createElement(c.o,{color:"var(--link)"})," ",o))};t.d(a,"pageQuery",function(){return m});var m="190645606";a.default=function(e){var a=n.data,t=a.dataJson,r=a.file,c=t.conference,m=t.journal,u=t.poster,d=r.publicURL;return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:"Publications",imageurl:d,description:"Papers I have written and pubished"}),i.a.createElement("div",{className:"panel",style:{maxWidth:"100%",marginBottom:"1.45rem",padding:20}},i.a.createElement("h3",null,"Conference Papers"),c.map(function(e,a){return i.a.createElement(s,Object.assign({key:a},e))}),i.a.createElement("hr",null),i.a.createElement("h3",null,"Journal Articles"),m.map(function(e,a){return i.a.createElement(s,Object.assign({key:a},e))}),i.a.createElement("hr",null),i.a.createElement("h3",null,"Short Papers, Posters & Abstracts"),u.map(function(e,a){return i.a.createElement(s,Object.assign({key:a},e))})))}},224:function(e,a,t){"use strict";var n=t(227),r=t(0),i=t.n(r),o=t(233),l=t.n(o);function c(e){var a=e.description,t=e.lang,r=e.meta,o=e.title,c=e.imageurl,s=n.data.site,m=a||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{name:"image",content:c},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"og:image",content:c},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m},{name:"twitter:image",content:c}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},a.a=c},225:function(e,a,t){"use strict";t(11),t(12),t(7),t(18);var n=t(226),r=t(0),i=t.n(r),o=t(101),l=(t(38),t(16),t(140)),c=t(235),s=t(230),m=t(223);t(208);function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(t,!0).forEach(function(a){p(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var f=function(e){var a=e.siteTitle,t=(e.location,Object(r.useContext)(o.a)),n=t.theme,u=t.setTheme,p=4===n,f=Object(r.useReducer)(function(e,a){var t=a.action;return"show"!==t&&"hide"===t},!1),E=f[0],g=f[1];Object(r.useEffect)(function(){var e=function(){window.scrollY<100?g({action:"show"}):window.scrollY>100&&g({action:"hide"})};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]);var h=Object(c.b)({opacity:E?0:1});return i.a.createElement(c.a.header,{onMouseOver:function(){return g({action:"show"})}},i.a.createElement("div",{className:"header-wrapper"},i.a.createElement(c.a.div,{className:"hiding",style:d({},h)},i.a.createElement("div",{style:{}},i.a.createElement("h2",{style:{margin:"1.45rem 1.0875rem",display:"flex"}},i.a.createElement(l.Link,{to:"/",style:{color:"inherit",textDecoration:"none",background:"var(--background)",padding:18,marginLeft:10,borderRadius:100}},a),i.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginRight:"1.25rem",textAlign:"right",marginLeft:"auto",background:"var(--background)",borderRadius:20,padding:10}},i.a.createElement(m.l,{style:{marginRight:4},color:"var(--link)"}),i.a.createElement("label",{class:"switch"},i.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.target.checked?4:3)}}),i.a.createElement("span",{class:"slider round"},i.a.createElement(s.a.span,{class:"dot",animate:{x:p?16:0}})))))))))};f.defaultProps={siteTitle:""};var E=f;t(209),t(210);a.a=function(e){var a=e.children,t=(e.scheme,function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t])}(e,["children","scheme"]),Object(r.useContext)(o.a).theme),l=n.data;return i.a.createElement("div",{className:"scheme"+t},i.a.createElement(E,{siteTitle:l.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"100px auto 0",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,a),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},226:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Burks"}}}}},227:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Burks",description:"the personal site of Andrew Burks - data vis, hci, collaboration",author:"@AndrewTBurks"}}}}},267:function(e){e.exports={data:{file:{publicURL:"/static/21eaf0cb86a3fb7d17bb4cf2f6f2fe96/Profile.jpg"},dataJson:{conference:[{award:"Honorable Mention - Application Software, Suppport, and Outcomes",teamBefore:"",teamAfter:", L. Renambot, A. Johnson",name:"VisSnippets: A Web-based System for Impromptu Collaborative Data Exploration on Large Displays",journal:"In Practice and Experience in Advanced Research Computing (PEARC ’20). 2020."},{award:"",teamBefore:"N. Kirshenbaum, D. Kobayashi, J. Leigh, L. Renambot, ",teamAfter:", K. Bharadwaj, L. Long, M. Brown, J. Haga and C. North",name:"The Smart Amplified Group Environment",journal:"4th Workshop on Immersive Analytics: Envisioning Future Productivity for Immersive Analytics, CHI 2020"},{award:"",teamBefore:"J. Leigh, L. Renambot, A. Johnson, M. Brown, J. Haga, R. Pelayo, J. Burns, F. Cristobal, J. McLean, D. Kobayashi, N. Kirshenbaum, ",teamAfter:", K. Bharadwaj, A. Nishimoto, A. Gonzalez, T. Wooton, M. Belcaid and L. Long",name:"Usage Patterns of Wideband Display Environments In e-Science Research, Development and Training",journal:"IEEE International Conference on e-Science. 2019."},{award:"Certificate of Merit - IEEE SciVis Contest 2016",teamBefore:"T. Luciani, ",teamAfter:", C. Sugiyama, J. Komperda, G.E. Marai",name:"Details-First, Show Context, Overview Last: Supporting Exploration of Viscous Fingers in Large-Scale Ensemble Simulations",journal:"IEEE Transactions on Visualization and Computer Graphics (Proc. SciVis'18), 25(1), January 2019."},{award:"",teamBefore:"A. G. Forbes, ",teamAfter:", K. Lee, X. Li, P. Boutillier, J. Krivine, and W. Fontana",name:"Dynamic Influence Networks for Rule-Based Models",journal:"IEEE Transactions on Visualization and Computer Graphics (Proc. VAST'17), 24(1), January 2018."}],journal:[{award:"",journal:"IEEE Transactions on Visualization and Computer Graphics, vol. 14, pp. 1-11, March 2018.",name:"Precision Risk Analysis of Cancer Therapy with Interactive Nomograms and Survival Plots",teamAfter:", et al.",teamBefore:"G. E. Marai, C. Ma, "}],poster:[{award:"Honorable Mention - Clarity in Visual Communication",journal:"IEEE Visual Analytics Science and Technology (VAST) Challenge 2017 Proceedings, pp. 1-2, 2017.",name:"MC2 - Mining Factory Pollution Data through a Spatial-Nonspatial Flow Approach",teamAfter:", M. Thomas, T. Luciani, G.E. Marai",teamBefore:"J. Castor, J. Borowicz, "},{award:"Honorable Mention - Good Interactive Image Explorer",journal:"IEEE Visual Analytics Science and Technology (VAST) Challenge 2017 Proceedings, pp. 1-2, 2017.",name:"MC3 - A Web-Based Interactive Image Explorer for Temporal Analysis of Satellite Images",teamAfter:", T. Luciani, G.E. Marai",teamBefore:"V. Mahida, B. Kupiec, "},{award:"",journal:" IEEE Visual Analytics Science and Technology (VAST) Challenge 2017 Proceedings, pp. 1-2, 2017.",name:"MC1 - A Bespoke Analysis Tool for Spatio-temporal Park Traffic Data",teamAfter:", C. Ma, G.E. Marai",teamBefore:"D. Kirilov, I. Lindmae, "},{award:"",journal:"ISMB/ECCB 2017, pp. 1-2, BioVis’17",name:"Visualizing ensemble time-evolving probability landscapes of stochastic networks",teamAfter:", T. Luciani, A. Terebus, J. Liang, and G. E. Marai",teamBefore:"C. Ma, "},{award:"Honorable Mention",journal:"IEEE VGTC VPG International Data-Visualization Contest, Baltimore, MD, USA, October 2016.",name:"Multi-scale Voronoi-based ACT Assessment",teamAfter:", M. M. Thomas, K. Bharadwaj, S. Singh, P. Hanula, L. Di and G. E. Marai.",teamBefore:"T. Luciani, J. Trelles, C. Ma, "},{award:"",journal:"In Proceedings of the IEEE VIS 2016 Workshop on Temporal & Sequential Event Analysis, Baltimore, MD, USA, October 2016.",name:"Spatial Analysis of Employee Safety Using Organizable Event Quiltmaps",teamAfter:", J. Trelles, and G. E. Marai",teamBefore:"D. McNamara, J. Tapia, C. Ma, T. Luciani, "}]}}}}}]);
//# sourceMappingURL=component---src-pages-publications-js-8faec01c8eeb1a058c95.js.map