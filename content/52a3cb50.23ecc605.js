/*! For license information please see 52a3cb50.23ecc605.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),c=(n(0),n(205)),l=(n(214),n(215),n(212)),o=n(209),i={title:"Azure Quickstart",sidebar_label:"Azure",description:"Run Pinot on Azure"},s={id:"administration/installation/cloud/azure",title:"Azure Quickstart",description:"Run Pinot on Azure",source:"@site/docs/administration/installation/cloud/azure.md",permalink:"/docs/administration/installation/cloud/azure",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration/installation/cloud/azure.md",sidebar_label:"Azure",sidebar:"docs",previous:{title:"GCP Quickstart",permalink:"/docs/administration/installation/cloud/gcp"},next:{title:"Install Pinot On MacOS",permalink:"/docs/administration/installation/operating-systems/macos"}},u=[{value:"Install Kubectl",id:"install-kubectl",children:[]},{value:"(Optional) Login to your Azure account",id:"optional-login-to-your-azure-account",children:[]},{value:"(Optional) Create a Resource Group",id:"optional-create-a-resource-group",children:[]},{value:"(Optional) Create a Kubernetes cluster(AKS) in Azure",id:"optional-create-a-kubernetes-clusteraks-in-azure",children:[]},{value:"Connect to an existing cluster",id:"connect-to-an-existing-cluster",children:[]},{value:"Pinot Quickstart",id:"pinot-quickstart",children:[]},{value:"Delete a Kubernetes Cluster",id:"delete-a-kubernetes-cluster",children:[]}],b={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"To set up a Kubernetes Cluster on ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://azure.microsoft.com/en-us/services/kubernetes-service/"}),"Azure Kubernetes Service (AKS)")),Object(c.b)("h2",{id:"install-kubectl"},"Install Kubectl"),Object(c.b)("p",null,"Please follow this link (",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl"}),"https://kubernetes.io/docs/tasks/tools/install-kubectl"),") to install kubectl."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"For Mac User")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew install kubernetes-cli\n")),Object(c.b)("p",null,"Please check kubectl version after installation."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl version\n")),Object(c.b)(l.a,{icon:!1,type:"info",mdxType:"Alert"},"QuickStart scripts are tested under kubectl client version v1.16.3 and server version v1.13.12"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Install Helm")),Object(c.b)("p",null,"Please follow this link (",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://helm.sh/docs/using_helm/#installing-helm"}),"https://helm.sh/docs/using_helm/#installing-helm"),") to install helm."),Object(c.b)("p",null,"For Mac User"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew install kubernetes-helm\n")),Object(c.b)("p",null,"Please check helm version after installation."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm version\n")),Object(c.b)(l.a,{icon:!1,type:"info",mdxType:"Alert"},"This QuickStart provides helm supports for helm v3.0.0 and v2.12.1. Please pick the script based on your helm version."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Install Azure CLI")),Object(c.b)("p",null,"Please follow this link to ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest"}),"install Azure CLI")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"For Mac User")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew update && brew install azure-cli\n")),Object(c.b)("h2",{id:"optional-login-to-your-azure-account"},"(Optional) Login to your Azure account"),Object(c.b)("p",null,"Below script will open default browser to sign-in to ",Object(c.b)("strong",{parentName:"p"},"your Azure Account"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"az login\n")),Object(c.b)("h2",{id:"optional-create-a-resource-group"},"(Optional) Create a Resource Group"),Object(c.b)("p",null,"Below script will create a resource group in location ",Object(c.b)("inlineCode",{parentName:"p"},"eastus"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"AKS_RESOURCE_GROUP=pinot-demo\nAKS_RESOURCE_GROUP_LOCATION=eastus\naz group create --name ${AKS_RESOURCE_GROUP} \\\n                --location ${AKS_RESOURCE_GROUP_LOCATION}\n")),Object(c.b)("h2",{id:"optional-create-a-kubernetes-clusteraks-in-azure"},"(Optional) Create a Kubernetes cluster(AKS) in Azure"),Object(c.b)("p",null,"Below script will create a ",Object(c.b)("strong",{parentName:"p"},"3 nodes")," cluster named ",Object(c.b)("strong",{parentName:"p"},"pinot-quickstart")," for demo purposes.\nPlease modify the parameters in the example command below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"AKS_RESOURCE_GROUP=pinot-demo\nAKS_CLUSTER_NAME=pinot-quickstart\naz aks create --resource-group ${AKS_RESOURCE_GROUP} \\\n              --name ${AKS_CLUSTER_NAME} \\\n              --node-count 3\n")),Object(c.b)("p",null,"Once the command is succeed, it's ready to be used."),Object(c.b)("h2",{id:"connect-to-an-existing-cluster"},"Connect to an existing cluster"),Object(c.b)("p",null,"Simply run below command to get the credential for the cluster ",Object(c.b)("strong",{parentName:"p"},"pinot-quickstart")," that you just created or your existing cluster."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"AKS_RESOURCE_GROUP=pinot-demo\nAKS_CLUSTER_NAME=pinot-quickstart\naz aks get-credentials --resource-group ${AKS_RESOURCE_GROUP} \\\n                       --name ${AKS_CLUSTER_NAME}\n")),Object(c.b)("p",null,"To verify the connection, you can run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get nodes\n")),Object(c.b)("h2",{id:"pinot-quickstart"},"Pinot Quickstart"),Object(c.b)("p",null,"Please follow this ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/administration/installation/cloud/on-premises"}),"Kubernetes QuickStart")," to deploy your Pinot Demo."),Object(c.b)(o.a,{to:"/docs/administration/installation/cloud/on-premises",mdxType:"Jump"},"Kubernetes Quickstart"),Object(c.b)("h2",{id:"delete-a-kubernetes-cluster"},"Delete a Kubernetes Cluster"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"AKS_RESOURCE_GROUP=pinot-demo\nAKS_CLUSTER_NAME=pinot-quickstart\naz aks delete --resource-group ${AKS_RESOURCE_GROUP} \\\n              --name ${AKS_CLUSTER_NAME}\n")))}p.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||c;return n?r.a.createElement(d,o({ref:t},s,{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<c;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},206:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===c)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},207:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n.n(r),l=n(37),o=n(208),i=n(11),s=n.n(i);t.a=function(e){var t,n=e.to,i=e.href,u=n||i,b=Object(o.a)(u),p=Object(r.useRef)(!1),m=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!m&&b&&window.docusaurus.prefetch(u),function(){m&&t&&t.disconnect()}}),[u,m,b]),u&&b?c.a.createElement(l.b,Object(a.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var n,a;m&&e&&b&&(n=e,a=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:u})):c.a.createElement("a",Object(a.a)({},e,{href:u}))}},208:function(e,t,n){"use strict";function a(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return a}))},209:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(207),l=n(206),o=n.n(l);n(128);t.a=function(e){var t=e.children,n=e.className,a=e.badge,l=e.icon,i=e.size,s=e.target,u=e.to,b=o()("jump-to","jump-to--"+i,n),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return s?r.a.createElement("a",{href:u,target:s,className:b},p):r.a.createElement(c.a,{to:u,className:b},p)}},210:function(e,t,n){var a=n(18);a(a.P,"Array",{fill:n(211)}),n(70)("fill")},211:function(e,t,n){"use strict";var a=n(51),r=n(71),c=n(36);e.exports=function(e){for(var t=a(this),n=c(t.length),l=arguments.length,o=r(l>1?arguments[1]:void 0,n),i=l>2?arguments[2]:void 0,s=void 0===i?n:r(i,n);s>o;)t[o++]=e;return t}},212:function(e,t,n){"use strict";n(210);var a=n(0),r=n.n(a),c=n(206),l=n.n(c);n(129);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,c=e.icon,o=e.type,i=null;switch(o){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return r.a.createElement("div",{className:l()(n,"alert","alert--"+o,{"alert--fill":a,"alert--icon":!1!==c}),role:"alert"},!1!==c&&r.a.createElement("i",{className:l()("feather","icon-"+(c||i))}),t)}},214:function(e,t,n){"use strict";n(24),n(19),n(20);var a=n(0),r=n.n(a),c=n(206),l=n.n(c),o=n(130),i=n.n(o),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,o=e.values,b=Object(a.useState)(c),p=b[0],m=b[1],d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},o.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===t,className:l()("tab-item",i.a.tabItem,{"tab-item--active":p===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return m(t)},onClick:function(){return m(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===p}))[0]))}},215:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);