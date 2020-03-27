/*! For license information please see 9caa1f24.8aa6dda6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{173:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(9),o=(t(0),t(205)),l=(t(212),{title:"GoLang",sidebar_label:"golang",description:"Pinot Client for Golang"}),i={id:"user-guide/clients/golang",title:"GoLang",description:"Pinot Client for Golang",source:"@site/docs/user-guide/clients/golang.md",permalink:"/docs/user-guide/clients/golang",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/user-guide/clients/golang.md",sidebar_label:"golang"},s=[{value:"Examples",id:"examples",children:[]},{value:"Usage",id:"usage",children:[{value:"Create a Pinot Connection",id:"create-a-pinot-connection",children:[]}]},{value:"Query Pinot",id:"query-pinot",children:[]}],c={rightToc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Applications can use this golang client library to query Apache Pinot."),Object(o.b)("p",null,"Source Code Repo: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fx19880617/pinot-client-go"}),"https://github.com/fx19880617/pinot-client-go")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"Please follow this Pinot Quickstart link to install and start Pinot batch QuickStart locally."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bin/quick-start-batch.sh\n")),Object(o.b)("p",null,"Check out Client library Github Repo"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:fx19880617/pinot-client-go.git\ncd pinot-client-go\n")),Object(o.b)("p",null,"Build and run the example application to query from Pinot Batch Quickstart"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"go build ./examples/batch-quickstart\n./batch-quickstart\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"create-a-pinot-connection"},"Create a Pinot Connection"),Object(o.b)("p",null,"Pinot client could be initialized through:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Zookeeper Path")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'pinotClient := pinot.NewFromZookeeper([]string{"localhost:2123"}, "", "QuickStartCluster")\n')),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A list of broker addresses.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'pinotClient := pinot.NewFromBrokerList([]string{"localhost:8000"})\n')),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"ClientConfig")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'pinotClient := pinot.NewWithConfig(&pinot.ClientConfig{\n    ZkConfig: &pinot.ZookeeperConfig{\n        ZookeeperPath:     zkPath,\n        PathPrefix:        strings.Join([]string{zkPathPrefix, pinotCluster}, "/"),\n        SessionTimeoutSec: defaultZkSessionTimeoutSec,\n    },\n    ExtraHTTPHeader: map[string]string{\n        "extra-header":"value",\n    },\n})\n')),Object(o.b)("h2",{id:"query-pinot"},"Query Pinot"),Object(o.b)("p",null,"Please see this ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fx19880617/pinot-client-go/blob/master/examples/batch-quickstart/main.go"}),"example")," for your reference."),Object(o.b)("p",null,"Code snippet:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'pinotClient, err := pinot.NewFromZookeeper([]string{"localhost:2123"}, "", "QuickStartCluster")\nif err != nil {\n    log.Error(err)\n}\nbrokerResp, err := pinotClient.ExecuteSQL("baseballStats", "select count(*) as cnt, sum(homeRuns) as sum_homeRuns from baseballStats group by teamID limit 10")\nif err != nil {\n    log.Error(err)\n}\nlog.Infof("Query Stats: response time - %d ms, scanned docs - %d, total docs - %d", brokerResp.TimeUsedMs, brokerResp.NumDocsScanned, brokerResp.TotalDocs)\n')),Object(o.b)("p",null,"Response Format"),Object(o.b)("p",null,"Query Response is defined as the struct of following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'type BrokerResponse struct {\n    AggregationResults          []*AggregationResult `json:"aggregationResults,omitempty"`\n    SelectionResults            *SelectionResults    `json:"SelectionResults,omitempty"`\n    ResultTable                 *ResultTable         `json:"resultTable,omitempty"`\n    Exceptions                  []Exception          `json:"exceptions"`\n    TraceInfo                   map[string]string    `json:"traceInfo,omitempty"`\n    NumServersQueried           int                  `json:"numServersQueried"`\n    NumServersResponded         int                  `json:"numServersResponded"`\n    NumSegmentsQueried          int                  `json:"numSegmentsQueried"`\n    NumSegmentsProcessed        int                  `json:"numSegmentsProcessed"`\n    NumSegmentsMatched          int                  `json:"numSegmentsMatched"`\n    NumConsumingSegmentsQueried int                  `json:"numConsumingSegmentsQueried"`\n    NumDocsScanned              int64                `json:"numDocsScanned"`\n    NumEntriesScannedInFilter   int64                `json:"numEntriesScannedInFilter"`\n    NumEntriesScannedPostFilter int64                `json:"numEntriesScannedPostFilter"`\n    NumGroupsLimitReached       bool                 `json:"numGroupsLimitReached"`\n    TotalDocs                   int64                `json:"totalDocs"`\n    TimeUsedMs                  int                  `json:"timeUsedMs"`\n    MinConsumingFreshnessTimeMs int64                `json:"minConsumingFreshnessTimeMs"`\n}\n')),Object(o.b)("p",null,"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"AggregationResults")," and ",Object(o.b)("inlineCode",{parentName:"p"},"SelectionResults")," are holders for PQL queries."),Object(o.b)("p",null,"Meanwhile ",Object(o.b)("inlineCode",{parentName:"p"},"ResultTable")," is the holder for SQL queries. ",Object(o.b)("inlineCode",{parentName:"p"},"ResultTable")," is defined as:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'// ResultTable is a ResultTable\ntype ResultTable struct {\n    DataSchema RespSchema      `json:"dataSchema"`\n    Rows       [][]interface{} `json:"rows"`\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RespSchema")," is defined as:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'// RespSchema is response schema\ntype RespSchema struct {\n    ColumnDataTypes []string `json:"columnDataTypes"`\n    ColumnNames     []string `json:"columnNames"`\n}\n')),Object(o.b)("p",null,"There are multiple functions defined for ",Object(o.b)("inlineCode",{parentName:"p"},"ResultTable"),", like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"func (r ResultTable) GetRowCount() int\nfunc (r ResultTable) GetColumnCount() int\nfunc (r ResultTable) GetColumnName(columnIndex int) string\nfunc (r ResultTable) GetColumnDataType(columnIndex int) string\nfunc (r ResultTable) Get(rowIndex int, columnIndex int) interface{}\nfunc (r ResultTable) GetString(rowIndex int, columnIndex int) string\nfunc (r ResultTable) GetInt(rowIndex int, columnIndex int) int\nfunc (r ResultTable) GetLong(rowIndex int, columnIndex int) int64\nfunc (r ResultTable) GetFloat(rowIndex int, columnIndex int) float32\nfunc (r ResultTable) GetDouble(rowIndex int, columnIndex int) float64\n")),Object(o.b)("p",null,"Sample Usage is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fx19880617/pinot-client-go/blob/master/examples/batch-quickstart/main.go#L58"}),"here")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'// Print Response Schema\nfor c := 0; c < brokerResp.ResultTable.GetColumnCount(); c++ {\n  fmt.Printf("%s(%s)\\t", brokerResp.ResultTable.GetColumnName(c), brokerResp.ResultTable.GetColumnDataType(c))\n}\nfmt.Println()\n\n// Print Row Table\nfor r := 0; r < brokerResp.ResultTable.GetRowCount(); r++ {\n  for c := 0; c < brokerResp.ResultTable.GetColumnCount(); c++ {\n    fmt.Printf("%v\\t", brokerResp.ResultTable.Get(r, c))\n  }\n  fmt.Println()\n}\n')))}u.isMDXComponent=!0},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},b=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(t),m=r,g=b["".concat(l,".").concat(m)]||b[m]||p[m]||o;return t?a.a.createElement(g,i({ref:n},c,{components:t})):a.a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},206:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var l=a.apply(null,r);l&&e.push(l)}else if("object"===o)for(var i in r)t.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},210:function(e,n,t){var r=t(18);r(r.P,"Array",{fill:t(211)}),t(70)("fill")},211:function(e,n,t){"use strict";var r=t(51),a=t(71),o=t(36);e.exports=function(e){for(var n=r(this),t=o(n.length),l=arguments.length,i=a(l>1?arguments[1]:void 0,t),s=l>2?arguments[2]:void 0,c=void 0===s?t:a(s,t);c>i;)n[i++]=e;return n}},212:function(e,n,t){"use strict";t(210);var r=t(0),a=t.n(r),o=t(206),l=t.n(o);t(129);n.a=function(e){var n=e.children,t=e.classNames,r=e.fill,o=e.icon,i=e.type,s=null;switch(i){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return a.a.createElement("div",{className:l()(t,"alert","alert--"+i,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:l()("feather","icon-"+(o||s))}),n)}}}]);