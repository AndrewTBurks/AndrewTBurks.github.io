(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{221:function(e,t,a){"use strict";a.r(t);a(21);var r=a(269),i=a(0),n=a.n(i),o=a(141),s=a(226),c=a(229),l=a.n(c),d=(a(217),function(e){var t=e.date,a=e.path,r=e.title,i=e.featuredImage;return n.a.createElement("div",{className:"blog-entry"},n.a.createElement(o.Link,{to:a},n.a.createElement("h3",null,r)),n.a.createElement("h4",null,t),i&&n.a.createElement(l.a,{fluid:i.childImageSharp.fluid})||null)}),u=a(225);t.default=function(){var e=r.data;return n.a.createElement(s.a,null,n.a.createElement(u.a,{title:"Blog"}),n.a.createElement("div",{className:"panel",style:{maxWidth:"100%",marginBottom:"1.45rem",border:"1px solid black"}},e.allMdx.edges.map(function(e){return n.a.createElement(d,Object.assign({},e.node.frontmatter,{key:e.node.id}))})))}},225:function(e,t,a){"use strict";var r=a(228),i=a(0),n=a.n(i),o=a(236),s=a.n(o);function c(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,c=r.data.site,l=t||c.siteMetadata.description;return n.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},226:function(e,t,a){"use strict";a(11),a(12),a(7),a(18);var r=a(227),i=a(0),n=a.n(i),o=a(101),s=(a(38),a(16),a(144),a(145),a(231),a(141)),c=a(238),l=a(28),d=a(224),u=a(230),f=(a(208),a(100),a(140),a(72),a(54),a(233));a(209);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach(function(t){g(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}var b={closed:function(e){e.theme;return{borderBottomRightRadius:"100px",borderBottomLeftRadius:"100px"}},open:function(e){e.theme;return{borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"}},hovered:function(e){e.theme;return{}}},y={closed:{scale:.25,opacity:0},open:{scale:1,opacity:1},hovered:{}};function w(e){var t=e.angle,a=e.open,r=e.className,i=h(e,["angle","open","className"]);return n.a.createElement(f.a.div,{className:"menu-opt "+r,initial:!1,animate:{left:Math.cos(t)*(a?30:0)+50+"%",top:Math.sin(t)*(a?30:0)+50+"%"},style:p({},{transform:"translate(-50%, -50%)",position:"absolute"})},i.children)}var v=function(e){var t=e.Icon,a=e.count,r=e.className,o=e.createOption,s=e.theme,c=(h(e,["Icon","count","className","createOption","theme"]),Object(i.useState)(!1)),l=c[0],u=c[1];return n.a.createElement(f.a.button,{className:"menu "+(l?"open":""),intitial:!1,animate:l?"open":"closed",whileHover:"hovered",custom:{theme:s},variants:b,onClick:function(){return u(function(e){return!e})},onBlur:function(e){e.currentTarget.contains(e.relatedTarget)||u(!1)}},n.a.createElement(d.b.Provider,{value:{className:"menuIcon",size:"1.5em"}},n.a.createElement(t,null)),n.a.createElement(f.a.div,{className:"menu-options",initial:"closed",variants:y,onClick:function(e){e.stopPropagation()},style:{width:200,height:200}},m(Array(a).keys()).map(function(e){return n.a.createElement(w,{key:e,angle:2*e*Math.PI/a-Math.PI/2,open:l,className:r(e)},o(e))})))};function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach(function(t){O(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var j=[{Icon:u.g,title:"Home",link:"/"},{Icon:u.h,title:"Projects",link:"/projects"},{Icon:u.l,title:"Publications",link:"/publications"},{Icon:u.j,title:"LinkedIn",link:"https://www.linkedin.com/in/andrew-burks/"},{Icon:u.e,title:"GitHub",link:"https://github.com/AndrewTBurks"},{Icon:u.m,title:"Twitter",link:"https://twitter.com/AndrewTBurks"}],I=function(e){var t=e.siteTitle,a=(e.location,Object(i.useContext)(o.a)),r=a.theme,f=a.setTheme,A=Object(i.useReducer)(function(e,t){var a=t.action;return"show"!==a&&"hide"===a},!1),p=A[0],g=A[1];Object(i.useEffect)(function(){var e=function(){window.scrollY<100?g({action:"show"}):window.scrollY>100&&g({action:"hide"})};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]);var m=Object(c.b)({opacity:p?0:1});return n.a.createElement(c.a.header,{onMouseOver:function(){return g({action:"show"})}},n.a.createElement("div",{className:"header-wrapper"},n.a.createElement(c.a.div,{className:"hiding",style:S({},m)},n.a.createElement("div",{style:{}},n.a.createElement("h2",{style:{margin:"1.45rem 1.0875rem"}},n.a.createElement(s.Link,{to:"/",style:{color:"inherit",textDecoration:"none",background:"var(--background)",padding:18,marginLeft:10,borderRadius:100}},t)))),n.a.createElement("div",{style:{marginLeft:"auto"}}),n.a.createElement("button",{onClick:function(){return f(function(e){return 3===e?4:3})},style:{zIndex:10}},"Theme"),n.a.createElement("div",{style:{marginLeft:"5px"}}),n.a.createElement(v,{count:j.length,Icon:u.f,className:function(){return""},theme:r,createOption:function(e){var t=j[e],a=(t.title,t.link),r=t.Icon,i=n.a.createElement(d.b.Provider,{value:{className:"menuIcon",style:{marginTop:"3px"}}},n.a.createElement(r,null));return a.includes("http")?n.a.createElement("a",{className:"radial-button "+(l.globalHistory.location.pathname===a?"active":""),href:a,disabled:!0,target:"__blank"},i):n.a.createElement("div",{className:"radial-button "+(l.globalHistory.location.pathname===a?"active":""),onClick:function(){return Object(s.navigate)(a)}},i)}})))};I.defaultProps={siteTitle:""};var R=I;a(210),a(211);t.a=function(e){var t=e.children,a=(e.scheme,function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a])}(e,["children","scheme"]),Object(i.useContext)(o.a).theme),s=r.data;return n.a.createElement("div",{className:"scheme"+a},n.a.createElement(R,{siteTitle:s.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"80px auto 0",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},227:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Burks"}}}}},228:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Burks",description:"The personal site of Andrew Burks",author:"@AndrewTBurks"}}}}},229:function(e,t,a){"use strict";a(11),a(12),a(7),a(100),a(146),a(234),a(232);var r=a(20);t.__esModule=!0,t.default=void 0;var i,n=r(a(75)),o=r(a(74)),s=r(a(148)),c=r(a(149)),l=r(a(0)),d=r(a(56)),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some(function(e){return void 0!==e.media})}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex(function(e){return void 0===e.media});if(-1!==a)return e[a]}return e[0]},g=Object.create({}),m=function(e){var t=u(e),a=A(t);return g[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,w=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),[].concat(t,a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function O(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function j(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)}).join("")+"<img "+l+o+s+a+r+t+n+i+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=l.default.forwardRef(function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(x,(0,c.default)({ref:t,src:a},n,{ariaHidden:o}));return r.length>1?l.default.createElement("picture",null,i(r),s):s}),x=l.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":A,sizes:a,srcSet:r,src:i},p,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});x.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,E=e.loading,j=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,c.default)({opacity:I?1:0,transition:k?"opacity "+b+"ms":"none"},s),T="boolean"==typeof h?"lightgray":h,N={transitionDelay:b+"ms"},D=(0,c.default)({opacity:this.state.imgLoaded?0:1},k&&N,s,f),P={title:t,alt:this.state.isVisible?"":a,style:D,className:A,itemProp:w};if(g){var Q=g,z=p(g);return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),T&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&N)}),z.base64&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:P,imageVariants:Q,generateSources:O}),z.tracedSVG&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:P,imageVariants:Q,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,v(Q),l.default.createElement(x,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,c.default)({alt:a,title:t,loading:E},z,{imageVariants:Q}))}}))}if(m){var L=m,M=p(m),V=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete V.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},T&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:T,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},k&&N)}),M.base64&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:P,imageVariants:L,generateSources:O}),M.tracedSVG&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:P,imageVariants:L,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,v(L),l.default.createElement(x,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,c.default)({alt:a,title:t,loading:E},M,{imageVariants:L}))}}))}return null},t}(l.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});k.propTypes={resolutions:C,sizes:T,fixed:d.default.oneOfType([C,d.default.arrayOf(C)]),fluid:d.default.oneOfType([T,d.default.arrayOf(T)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var N=k;t.default=N},232:function(e,t,a){"use strict";a(235)("fixed",function(e){return function(){return e(this,"tt","","")}})},269:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"e2c1c713-4878-5ef5-862b-df71b94c6a13",excerpt:"Made With    +   +  youtube: https://youtu.be/x49WGPyRNkc Glossary Overview The Data + Analysis Using The Application Current Limitations Source & Installation Analysis Details Overview Background  |  New Platforms  |  Primary Concepts  |  Top…",frontmatter:{date:"April 25, 2020",path:"/blog/vr-final-project",title:"Mixed-Platform Visual Data Exploration using VisSnippets",featuredImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABpklEQVQoz21S207CQBDlMxRqEcVCabc3UYRyaSuIXBtF1BijwZgYffYb/O3jTAuyIA+TmZ2dPXN25mQOzEsoRgT2sikGecH5KI3NCHItezlevcvIyVwlJJPArUvsaiift+8yq2Te6uKkOkTB7iXnvXIIhRgqzMyQHnJj8idGCGEEyC5z/wBVswuvNUN79IbOYIFacAvV6UIVWyz4q+RVfrOMdwKa7Rj25BHh4AkPozl64Q2q8RzOYAalkjJdA6dAitRgA5ALVKsH3R/jdfGF6e0C1YsYJbcLzeklX1QFsd1YRrQG22bIVmpMMH7/xMf3D/rxG4bhdTJDnlVJ76BANQycJyuI3crY+PKR10+2avgzmuEz3LMr5ESIQ/caXmOOmtuHRYtjJeSpSU5imUoqldefbLiQ46we0IY72NOpkUUMT8ewm/coEmDkx+jXpzC8AY2AGvL2l0ArrWZ2aYk3qzkB7PMA3nmEstXCIRV7jSnuRi+4H87g+D6ORSopVWa4BlonCyKA4TZhunUIt4ai3UnyuQrpTg+xL+isCeh6BZrgZiko1/wCIOVdht0ZhlYAAAAASUVORK5CYII=",aspectRatio:1.7699115044247788,src:"/static/a44761613ce22cdcc7145d0b7091a4f6/ee604/Select3DSpatializedStates.png",srcSet:"/static/a44761613ce22cdcc7145d0b7091a4f6/69585/Select3DSpatializedStates.png 200w,\n/static/a44761613ce22cdcc7145d0b7091a4f6/497c6/Select3DSpatializedStates.png 400w,\n/static/a44761613ce22cdcc7145d0b7091a4f6/ee604/Select3DSpatializedStates.png 800w,\n/static/a44761613ce22cdcc7145d0b7091a4f6/f3583/Select3DSpatializedStates.png 1200w,\n/static/a44761613ce22cdcc7145d0b7091a4f6/5707d/Select3DSpatializedStates.png 1600w,\n/static/a44761613ce22cdcc7145d0b7091a4f6/eeb1b/Select3DSpatializedStates.png 1920w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},{node:{id:"d29ac1e8-61fc-54d2-8483-31d3fc137c5b",excerpt:"Description This project aims to couple the idea of  Space to Think  with Virtual Reality and Immersive Analytics. The goal of the probject is to provide a user with an immersive, 3-dimensional analytical workspace. The first layer of the project is…",frontmatter:{date:"February 27, 2020",path:"/blog/vr-project-proposal",title:"CS528 Project 2 Proposal",featuredImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe7Odlg//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECAxARIf/aAAgBAQABBQJs3iwUeH//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAVEAEBAAAAAAAAAAAAAAAAAAAQMf/aAAgBAQAGPwJr/8QAGRABAQEBAQEAAAAAAAAAAAAAAREAIRBB/9oACAEBAAE/IYeBpg8SMU3v3AG//9oADAMBAAIAAwAAABBwz//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/EIf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAaEAEBAQEBAQEAAAAAAAAAAAABEQAhMUFR/9oACAEBAAE/EAkir8Nb5yMRxB3ulednMAXY9P7hED1u/9k=",aspectRatio:1.5625,src:"/static/d74a91207cd2fab5dc7dfac67af25332/14b42/sketch.jpg",srcSet:"/static/d74a91207cd2fab5dc7dfac67af25332/f836f/sketch.jpg 200w,\n/static/d74a91207cd2fab5dc7dfac67af25332/2244e/sketch.jpg 400w,\n/static/d74a91207cd2fab5dc7dfac67af25332/14b42/sketch.jpg 800w,\n/static/d74a91207cd2fab5dc7dfac67af25332/47498/sketch.jpg 1200w,\n/static/d74a91207cd2fab5dc7dfac67af25332/0e329/sketch.jpg 1600w,\n/static/d74a91207cd2fab5dc7dfac67af25332/69755/sketch.jpg 2048w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},{node:{id:"49bf835c-985c-5200-b65b-4ddcf3111b9c",excerpt:"Made With   youtube: https://youtu.be/NPOKBQc9Rlc Glossary The Application The Data Source & Installation CAVE2 vs. Vive vs. Reality The Application Interaction  |  Animation  |  Travelling  |  Top  My general philosophy when creating this virtual…",frontmatter:{date:"February 16, 2020",path:"/blog/vr-first-project",title:"CS528 Project 1",featuredImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACZUlEQVQoz1WSaVfTUBCGI6LFUGha2mxdsjX7njRdKQgoejgoH4SCXQD//494nabqOX54z9y5N/O8MzeX0ec8usMGxIiDGNYgUZSTOtiT92AY5j/x7TqCkQ43V+BkCvxCw+RLiOLShT/Uyj2mWzTRHTTQTgkacgSs46RfRZWv4Eg4wH7lbQnb23sD3ZfhDdSy0M56OzDJK1S4tB/PTDANtQpe49DNmlALAb1QgFFI0HIBHTIxsw4+sBWw1QqCIXWXUTEBnXSnoNCpU52gGqKJAWb/3R6q1UPwvTqa3RrcVEN6bpZu/aRNIxpQbRmqJcGIZNiJgmxmIyoMRHSWjE3kc5vMCDgmoK51YJo0gmVAUbqIEg9p4SEbBUhyB268BVgIMwMedRaR4XDq0rmFdGggH9sYzX1MLn3KaeSzqxkmZyOcng8xPy+QD0P62EEyMKDpAqanMa6/TqmwTwXKTgOdjFV4noSYYjFwMJ17mF24YJKBhmnag5d2KIrUQRuG1SNJ+Hw9wa/XDe7vb6lTCR5dwU5yKcNs/VGTzE/g0ZUwbizC8QXceC0sXQm5J0O3RIynEV5fllivFtisnzCZh7CCFnwC+mTqxXIpN5Iol0vD7ZpR+yJM7hjRUQUWewBDqsHP2nh8vMPz5omAD2VcLO4Q0B/XLQGKJsGJxFJbSKl4J4Y7roFjWfACh57Ko++3cHU9xsvzT6xW91ivFxQfyvzm9gJc4wiCXCOYBIsms+mZWeE2kgGJYdlD1Ooc/KiNj5cDfPv+Ccvlj3+g1epvfMBm84huT4TSb5Qgm4BOQE8pkGDS2g1l/AaHhkgfBn7lPgAAAABJRU5ErkJggg==",aspectRatio:1.7699115044247788,src:"/static/588dea5a4febec3933efae9a0c0c1584/ee604/grillandbenches.png",srcSet:"/static/588dea5a4febec3933efae9a0c0c1584/69585/grillandbenches.png 200w,\n/static/588dea5a4febec3933efae9a0c0c1584/497c6/grillandbenches.png 400w,\n/static/588dea5a4febec3933efae9a0c0c1584/ee604/grillandbenches.png 800w,\n/static/588dea5a4febec3933efae9a0c0c1584/f3583/grillandbenches.png 1200w,\n/static/588dea5a4febec3933efae9a0c0c1584/5707d/grillandbenches.png 1600w,\n/static/588dea5a4febec3933efae9a0c0c1584/eeb1b/grillandbenches.png 1920w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-887ed0518471a72548b2.js.map