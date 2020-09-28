(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{219:function(e,t,a){"use strict";a.r(t);a(21);var i=a(264),r=a(0),n=a.n(r),s=a(140),c=a(225),d=a(223),o=a(229),l=a.n(o),u=(a(216),function(e){var t=e.date,a=e.path,i=e.title,r=e.featuredImage,c=e.timeToRead;return n.a.createElement("div",{className:"blog-entry"},n.a.createElement(s.Link,{to:a},n.a.createElement("h3",{className:"accent-font"},i)),n.a.createElement("h4",{style:{fontWeight:400}},n.a.createElement(d.c,null)," ",c," ",1===c?"minute":"minutes"),n.a.createElement("h4",{style:{fontWeight:300}},t),r&&n.a.createElement(l.a,{style:{borderRadius:10,overflow:"hidden"},fluid:r.childImageSharp.fluid})||null)}),f=a(224);t.default=function(){var e=i.data;return n.a.createElement(c.a,null,n.a.createElement(f.a,{title:"Blog",description:"Small writeups of projects, ideas, or anything else"}),n.a.createElement("div",{style:{maxWidth:"100%",marginBottom:"1.45rem"}},e.allMdx.edges.map(function(e){return n.a.createElement(u,Object.assign({},e.node.frontmatter,{timeToRead:e.node.timeToRead,key:e.node.id}))})))}},224:function(e,t,a){"use strict";var i=a(227),r=a(0),n=a.n(r),s=a(233),c=a.n(s);function d(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,d=e.imageurl,o=i.data.site,l=t||o.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{name:"image",content:d},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"og:image",content:d},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l},{name:"twitter:image",content:d}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},t.a=d},225:function(e,t,a){"use strict";a(11),a(12),a(7),a(18);var i=a(226),r=a(0),n=a.n(r),s=a(101),c=(a(38),a(16),a(140)),d=a(235),o=a(230),l=a(223);a(208);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach(function(t){A(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var g=function(e){var t=e.siteTitle,a=(e.location,Object(r.useContext)(s.a)),i=a.theme,u=a.setTheme,A=4===i,g=Object(r.useReducer)(function(e,t){var a=t.action;return"show"!==a&&"hide"===a},!1),p=g[0],m=g[1];Object(r.useEffect)(function(){var e=function(){window.scrollY<100?m({action:"show"}):window.scrollY>100&&m({action:"hide"})};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]);var h=Object(d.b)({opacity:p?0:1});return n.a.createElement(d.a.header,{onMouseOver:function(){return m({action:"show"})}},n.a.createElement("div",{className:"header-wrapper"},n.a.createElement(d.a.div,{className:"hiding",style:f({},h)},n.a.createElement("div",{style:{}},n.a.createElement("h2",{style:{margin:"1.45rem 1.0875rem",display:"flex"}},n.a.createElement(c.Link,{to:"/",style:{color:"inherit",textDecoration:"none",background:"var(--background)",padding:18,marginLeft:10,borderRadius:100}},t),n.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginRight:"1.25rem",textAlign:"right",marginLeft:"auto",background:"var(--background)",borderRadius:20,padding:10}},n.a.createElement(l.l,{style:{marginRight:4},color:"var(--link)"}),n.a.createElement("label",{class:"switch"},n.a.createElement("input",{type:"checkbox",onChange:function(e){return u(e.target.checked?4:3)}}),n.a.createElement("span",{class:"slider round"},n.a.createElement(o.a.span,{class:"dot",animate:{x:A?16:0}})))))))))};g.defaultProps={siteTitle:""};var p=g;a(209),a(210);t.a=function(e){var t=e.children,a=(e.scheme,function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a])}(e,["children","scheme"]),Object(r.useContext)(s.a).theme),c=i.data;return n.a.createElement("div",{className:"scheme"+a},n.a.createElement(p,{siteTitle:c.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"100px auto 0",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},226:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Burks"}}}}},227:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Burks",description:"the personal site of Andrew Burks - data vis, hci, collaboration",author:"@AndrewTBurks"}}}}},228:function(e,t,a){var i=a(1),r=a(10),n=a(41),s=/"/g,c=function(e,t,a,i){var r=String(n(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},229:function(e,t,a){"use strict";a(11),a(12),a(7),a(100),a(145),a(232),a(231);var i=a(20);t.__esModule=!0,t.default=void 0;var r,n=i(a(75)),s=i(a(74)),c=i(a(147)),d=i(a(148)),o=i(a(0)),l=i(a(56)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some(function(e){return void 0!==e.media})}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex(function(e){return void 0===e.media});if(-1!==a)return e[a]}return e[0]},p=Object.create({}),m=function(e){var t=u(e),a=A(t);return p[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,w=b&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},i&&o.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),o.default.createElement("source",{media:r,srcSet:a,sizes:n}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),[].concat(t,a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,i=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:i})})}function R(e){return e.map(function(e){var t=e.src,a=e.media,i=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:i})})}function j(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)}).join("")+"<img "+o+s+c+a+i+t+n+r+d+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=o.default.forwardRef(function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,c=o.default.createElement(B,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?o.default.createElement("picture",null,r(i),c):c}),B=o.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,l=e.onError,u=e.loading,f=e.draggable,A=e.ariaHidden,g=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":A,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:l,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});B.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&w&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,c=void 0===s?{}:s,l=e.placeholderStyle,f=void 0===l?{}:l,A=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,w=e.Tag,y=e.itemProp,v=e.loading,j=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,d.default)({opacity:I?1:0,transition:C?"opacity "+b+"ms":"none"},c),k="boolean"==typeof h?"lightgray":h,Q={transitionDelay:b+"ms"},D=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&Q,c,f),z={title:t,alt:this.state.isVisible?"":a,style:D,className:A,itemProp:y};if(p){var L=p,N=g(p);return o.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:N.maxWidth?N.maxWidth+"px":null,maxHeight:N.maxHeight?N.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},o.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),k&&o.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&Q)}),N.base64&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:z,imageVariants:L,generateSources:R}),N.tracedSVG&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:z,imageVariants:L,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,E(L),o.default.createElement(B,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:j})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:a,title:t,loading:v},N,{imageVariants:L}))}}))}if(m){var M=m,V=g(m),P=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},n);return"inherit"===n.display&&delete P.display,o.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},k&&o.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:k,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},C&&Q)}),V.base64&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:z,imageVariants:M,generateSources:R}),V.tracedSVG&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:z,imageVariants:M,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,E(M),o.default.createElement(B,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:j})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:a,title:t,loading:v},V,{imageVariants:M}))}}))}return null},t}(o.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),k=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});C.propTypes={resolutions:T,sizes:k,fixed:l.default.oneOfType([T,l.default.arrayOf(T)]),fluid:l.default.oneOfType([k,l.default.arrayOf(k)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var Q=C;t.default=Q},231:function(e,t,a){"use strict";a(228)("fixed",function(e){return function(){return e(this,"tt","","")}})},264:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"e2c1c713-4878-5ef5-862b-df71b94c6a13",excerpt:"Made With    +   +  youtube: https://youtu.be/x49WGPyRNkc Glossary Overview The Data + Analysis Using The Application Current Limitations Source & Installation Analysis Details Overview Background  |  New Platforms  |  Primary Concepts  |  Top…",timeToRead:9,frontmatter:{date:"April 25, 2020",path:"/blog/vr-final-project",title:"Mixed-Platform Visual Data Exploration using VisSnippets",featuredImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABpklEQVQoz21S207CQBDlMxRqEcVCabc3UYRyaSuIXBtF1BijwZgYffYb/O3jTAuyIA+TmZ2dPXN25mQOzEsoRgT2sikGecH5KI3NCHItezlevcvIyVwlJJPArUvsaiift+8yq2Te6uKkOkTB7iXnvXIIhRgqzMyQHnJj8idGCGEEyC5z/wBVswuvNUN79IbOYIFacAvV6UIVWyz4q+RVfrOMdwKa7Rj25BHh4AkPozl64Q2q8RzOYAalkjJdA6dAitRgA5ALVKsH3R/jdfGF6e0C1YsYJbcLzeklX1QFsd1YRrQG22bIVmpMMH7/xMf3D/rxG4bhdTJDnlVJ76BANQycJyuI3crY+PKR10+2avgzmuEz3LMr5ESIQ/caXmOOmtuHRYtjJeSpSU5imUoqldefbLiQ46we0IY72NOpkUUMT8ewm/coEmDkx+jXpzC8AY2AGvL2l0ArrWZ2aYk3qzkB7PMA3nmEstXCIRV7jSnuRi+4H87g+D6ORSopVWa4BlonCyKA4TZhunUIt4ai3UnyuQrpTg+xL+isCeh6BZrgZiko1/wCIOVdht0ZhlYAAAAASUVORK5CYII=",aspectRatio:1.7699115044247788,src:"/static/a44761613ce22cdcc7145d0b7091a4f6/ee604/Select3DSpatializedStates.png",srcSet:"/static/a44761613ce22cdcc7145d0b7091a4f6/69585/Select3DSpatializedStates.png 200w,\n/static/a44761613ce22cdcc7145d0b7091a4f6/497c6/Select3DSpatializedStates.png 400w,\n/static/a44761613ce22cdcc7145d0b7091a4f6/ee604/Select3DSpatializedStates.png 800w,\n/static/a44761613ce22cdcc7145d0b7091a4f6/f3583/Select3DSpatializedStates.png 1200w,\n/static/a44761613ce22cdcc7145d0b7091a4f6/5707d/Select3DSpatializedStates.png 1600w,\n/static/a44761613ce22cdcc7145d0b7091a4f6/eeb1b/Select3DSpatializedStates.png 1920w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},{node:{id:"d29ac1e8-61fc-54d2-8483-31d3fc137c5b",excerpt:"Description This project aims to couple the idea of  Space to Think  with Virtual Reality and Immersive Analytics. The goal of the probject is to provide a user with an immersive, 3-dimensional analytical workspace. The first layer of the project is…",timeToRead:1,frontmatter:{date:"February 27, 2020",path:"/blog/vr-project-proposal",title:"CS528 Project 2 Proposal",featuredImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe7Odlg//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECAxARIf/aAAgBAQABBQJs3iwUeH//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAVEAEBAAAAAAAAAAAAAAAAAAAQMf/aAAgBAQAGPwJr/8QAGRABAQEBAQEAAAAAAAAAAAAAAREAIRBB/9oACAEBAAE/IYeBpg8SMU3v3AG//9oADAMBAAIAAwAAABBwz//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/EIf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAaEAEBAQEBAQEAAAAAAAAAAAABEQAhMUFR/9oACAEBAAE/EAkir8Nb5yMRxB3ulednMAXY9P7hED1u/9k=",aspectRatio:1.5625,src:"/static/d74a91207cd2fab5dc7dfac67af25332/14b42/sketch.jpg",srcSet:"/static/d74a91207cd2fab5dc7dfac67af25332/f836f/sketch.jpg 200w,\n/static/d74a91207cd2fab5dc7dfac67af25332/2244e/sketch.jpg 400w,\n/static/d74a91207cd2fab5dc7dfac67af25332/14b42/sketch.jpg 800w,\n/static/d74a91207cd2fab5dc7dfac67af25332/47498/sketch.jpg 1200w,\n/static/d74a91207cd2fab5dc7dfac67af25332/0e329/sketch.jpg 1600w,\n/static/d74a91207cd2fab5dc7dfac67af25332/69755/sketch.jpg 2048w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},{node:{id:"49bf835c-985c-5200-b65b-4ddcf3111b9c",excerpt:"Made With   youtube: https://youtu.be/NPOKBQc9Rlc Glossary The Application The Data Source & Installation CAVE2 vs. Vive vs. Reality The Application Interaction  |  Animation  |  Travelling  |  Top  My general philosophy when creating this virtual…",timeToRead:7,frontmatter:{date:"February 16, 2020",path:"/blog/vr-first-project",title:"CS528 Project 1",featuredImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACZUlEQVQoz1WSaVfTUBCGI6LFUGha2mxdsjX7njRdKQgoejgoH4SCXQD//494nabqOX54z9y5N/O8MzeX0ec8usMGxIiDGNYgUZSTOtiT92AY5j/x7TqCkQ43V+BkCvxCw+RLiOLShT/Uyj2mWzTRHTTQTgkacgSs46RfRZWv4Eg4wH7lbQnb23sD3ZfhDdSy0M56OzDJK1S4tB/PTDANtQpe49DNmlALAb1QgFFI0HIBHTIxsw4+sBWw1QqCIXWXUTEBnXSnoNCpU52gGqKJAWb/3R6q1UPwvTqa3RrcVEN6bpZu/aRNIxpQbRmqJcGIZNiJgmxmIyoMRHSWjE3kc5vMCDgmoK51YJo0gmVAUbqIEg9p4SEbBUhyB268BVgIMwMedRaR4XDq0rmFdGggH9sYzX1MLn3KaeSzqxkmZyOcng8xPy+QD0P62EEyMKDpAqanMa6/TqmwTwXKTgOdjFV4noSYYjFwMJ17mF24YJKBhmnag5d2KIrUQRuG1SNJ+Hw9wa/XDe7vb6lTCR5dwU5yKcNs/VGTzE/g0ZUwbizC8QXceC0sXQm5J0O3RIynEV5fllivFtisnzCZh7CCFnwC+mTqxXIpN5Iol0vD7ZpR+yJM7hjRUQUWewBDqsHP2nh8vMPz5omAD2VcLO4Q0B/XLQGKJsGJxFJbSKl4J4Y7roFjWfACh57Ko++3cHU9xsvzT6xW91ivFxQfyvzm9gJc4wiCXCOYBIsms+mZWeE2kgGJYdlD1Ooc/KiNj5cDfPv+Ccvlj3+g1epvfMBm84huT4TSb5Qgm4BOQE8pkGDS2g1l/AaHhkgfBn7lPgAAAABJRU5ErkJggg==",aspectRatio:1.7699115044247788,src:"/static/588dea5a4febec3933efae9a0c0c1584/ee604/grillandbenches.png",srcSet:"/static/588dea5a4febec3933efae9a0c0c1584/69585/grillandbenches.png 200w,\n/static/588dea5a4febec3933efae9a0c0c1584/497c6/grillandbenches.png 400w,\n/static/588dea5a4febec3933efae9a0c0c1584/ee604/grillandbenches.png 800w,\n/static/588dea5a4febec3933efae9a0c0c1584/f3583/grillandbenches.png 1200w,\n/static/588dea5a4febec3933efae9a0c0c1584/5707d/grillandbenches.png 1600w,\n/static/588dea5a4febec3933efae9a0c0c1584/eeb1b/grillandbenches.png 1920w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-a2a5318009a81c7c6e63.js.map