/*! For license information please see 09e16f0c.6fad524b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(205)),i=n(209),c={title:"Install Pinot On Containers",sidebar_label:"hidden",hide_pagination:!0},s={id:"administration/installation/containers",title:"Install Pinot On Containers",description:"import Jump from '@site/src/components/Jump';",source:"@site/docs/administration/installation/containers.md",permalink:"/docs/administration/installation/containers",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration/installation/containers.md",sidebar_label:"hidden"},u=[],l={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{to:"/docs/setup/installation/containers/docker/",mdxType:"Jump"},"Docker"),Object(o.b)("p",null,"Pinot on contianers"))}p.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return n?a.a.createElement(d,c({ref:t},u,{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},206:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},207:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(37),c=n(208),s=n(11),u=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,l=n||s,p=Object(c.a)(l),f=Object(a.useRef)(!1),m=u.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!m&&p&&window.docusaurus.prefetch(l),function(){m&&t&&t.disconnect()}}),[l,m,p]),l&&p?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var n,r;m&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:l})):o.a.createElement("a",Object(r.a)({},e,{href:l}))}},208:function(e,t,n){"use strict";function r(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return r}))},209:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(207),i=n(206),c=n.n(i);n(128);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.icon,s=e.size,u=e.target,l=e.to,p=c()("jump-to","jump-to--"+s,n),f=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(i||"chevron-right")+" arrow"}))));return u?a.a.createElement("a",{href:l,target:u,className:p},f):a.a.createElement(o.a,{to:l,className:p},f)}}}]);