(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[112],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var n=a("mn0l"),r=a("iojd"),c=a("ahKI"),l=a.n(c),o=a("vumQ"),i=a("cRq1");a("Qf6j"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,c=e.showCopy,s=void 0===c||c,m=Object(i["useCopy"])(),d=Object(r["a"])(m,2),u=d[0],h=d[1];return l.a.createElement("div",{className:"__dumi-default-code-block"},l.a.createElement(o["a"],Object(n["a"])({},o["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,n=e.style,r=e.tokens,c=e.getLineProps,o=e.getTokenProps;return l.a.createElement("pre",{className:a,style:n},s&&l.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":h,onClick:()=>u(t)}),r.map(((e,t)=>l.a.createElement("div",c({line:e,key:t}),e.map(((e,t)=>l.a.createElement("span",o({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("mn0l"),a("ahKI"),a("2Pr/")},MHCT:function(e,t,a){"use strict";var n=a("ahKI"),r=a.n(n),c=a("bIC1"),l=a.n(c);a("Z1dS");function o(e,t){return u(e)||d(e,t)||s(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,c=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(n=a.next()).done);l=!0)if(c.push(n.value),t&&c.length===t)break}catch(i){o=!0,r=i}finally{try{l||null==a["return"]||a["return"]()}finally{if(o)throw r}}return c}}function u(e){if(Array.isArray(e))return e}var h=function(e){var t=e.children,a=Object(n["useRef"])(),c=Object(n["useState"])(!1),i=o(c,2),s=i[0],m=i[1],d=Object(n["useState"])(!1),u=o(d,2),h=u[0],v=u[1];return Object(n["useEffect"])((function(){var e=a.current,t=l()((function(){m(e.scrollLeft>0),v(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":s||void 0,"data-right-folded":h||void 0},r.a.createElement("table",null,t)))};t["a"]=h},N0lm:function(e,t,a){"use strict";var n=a("mn0l"),r=a("ahKI"),c=a.n(r);a("tCeM");t["a"]=e=>c.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},Z1dS:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return _}));var n=a("ahKI"),r=a.n(n),c=a("iojd"),l=a("/7QA"),o=a("9kvl"),i=a("cRq1"),s=a("1KG/"),m=a.n(s),d="https://codesandbox.io/api/v1/sandboxes/define";function u(e){return m.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function h(e){var t=Boolean(e.sources._.tsx),a=t?".tsx":".jsx",n={},r={},l=Object.values(e.dependencies).filter((e=>e.css)),o="app".concat(a),i="index".concat(a);Object.entries(e.dependencies).forEach((e=>{var t=Object(c["a"])(e,2),a=t[0],n=t[1].version;r[a]=n})),r["react-dom"]||(r["react-dom"]=r.react||"latest"),n["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},n["index.html"]={content:'<div id="root"></div>'},n[i]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(l.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var s=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(c["a"])(e,2),a=t[0],r=t[1],l=r.tsx,i=r.jsx,m=r.content,d={content:l||i||m};n["_"===a?o:a]=d,s=s||d.content.includes("from 'demos'"),d.content=d.content.replace("from 'demos'","from './demos-util'")})),s&&(r["lorem-ipsum"]="^2.0.8",n["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),n["package.json"]={content:JSON.stringify({name:e.title,main:i,dependencies:r,devDependencies:t?{typescript:"^3"}:{}},null,2)},u({files:n})}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,a=Object(n["useState"])(),r=Object(c["a"])(a,2),l=r[0],o=r[1];return Object(n["useEffect"])((()=>{if(e){var a=document.createElement("form"),n=h(e);function r(e,t){var n=document.createElement("input");a.appendChild(n),n.name=e,n.value=t}return a.method="POST",a.target="_blank",a.style.display="none",a.action=t,r("parameters",n),r("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),a.setAttribute("data-demo",e.title||""),document.body.appendChild(a),o((()=>()=>a.submit())),()=>a.remove()}}),[e]),l}var p=a("Bjia");a("YWOM");function f(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var E=e=>{var t,a=Object(n["useRef"])(null),s=Object(n["useContext"])(i["context"]),m=s.locale,d=Object(i["useLocaleProps"])(m,e),u=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(d.identifier),h=1===Object.keys(d.sources).length,E=v(null!==(t=d.hideActions)&&void 0!==t&&t.includes("CSB")?null:d),b=Object(i["useMotions"])(d.motions||[],a.current),g=Object(c["a"])(b,2),A=g[0],y=g[1],j=Object(i["useCopy"])(),w=Object(c["a"])(j,2),_=w[0],x=w[1],O=Object(n["useState"])("_"),k=Object(c["a"])(O,2),N=k[0],S=k[1],C=Object(n["useState"])(f(N,d.sources[N])),L=Object(c["a"])(C,2),I=L[0],M=L[1],Z=d.sources[N][I]||d.sources[N].content,T=Object(i["useTSPlaygroundUrl"])(m,Z),V=Object(i["usePrefersColor"])(),P=Object(c["a"])(V,1);P[0];function R(e){S(e),M(f(e,d.sources[e]))}return r.a.createElement("div",{style:d.style,className:[d.className,"__dumi-default-previewer",u?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:d.identifier,"data-debug":d.debug||void 0},r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":d.title},d.title&&r.a.createElement(i["AnchorLink"],{to:"#".concat(d.identifier)},d.title),d.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},d.debug&&r.a.createElement("span",{className:"debug-badge"},"Debug Only"),E&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:E}),d.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:y,onClick:()=>A()}),r.a.createElement("div",{className:"spacer"}),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:()=>_(Z)}),"tsx"===I&&r.a.createElement(i["Link"],{target:"_blank",to:T},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&r.a.createElement(l["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:N,onChange:R},Object.keys(d.sources).map((e=>r.a.createElement(l["Tabs"].Tab,{title:"_"===e?"index.".concat(f(e,d.sources[e])):e,key:e})))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(p["a"],{code:Z,lang:I,showCopy:!1}))))},b=E,g=(a("oeoJ"),a("NEWu")),A=(a("q9vG"),e=>{var t=e.url,a=Object(n["useState"])(Math.random()),o=Object(c["a"])(a,2),s=o[0],m=o[1],d=Object(i["usePrefersColor"])(),u=Object(c["a"])(d,1),h=u[0],v=Object(n["useContext"])(i["context"]),p=v.config.mode;return Object(n["useEffect"])((()=>{m(Math.random())}),[h]),r.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":p},r.a.createElement("iframe",{title:"dumi-previewer",src:t,key:s}),r.a.createElement("div",{className:"adm-doc-device-action"},r.a.createElement("a",{onClick:()=>m(Math.random())},y),r.a.createElement(l["Popover"],{content:r.a.createElement(g["a"],{value:t,size:96}),trigger:"click"},r.a.createElement("a",null,j)),r.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},w)))}),y=r.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),j=r.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),w=r.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),_="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(i["useDemoUrl"])(e.identifier);return r.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},r.a.createElement("div",{className:"adm-doc-previewer-source"},r.a.createElement(b,e)),r.a.createElement("div",{className:"adm-doc-previewer-device"},r.a.createElement(A,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var n=a("ahKI"),r=a.n(n),c=a("eqKt"),l=a.n(c),o=e=>r.a.createElement("a",{className:l.a.card,href:e.link,target:"_blank"},e.image&&r.a.createElement("img",{src:e.image,alt:e.title}),r.a.createElement("div",{className:l.a.content},r.a.createElement("div",{className:l.a.title},e.title),r.a.createElement("div",{className:l.a.description},e.description)));t["a"]=o},mVOg:function(e,t,a){"use strict";var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("cRq1"),o=a("/7QA");t["a"]=()=>{var e=Object(r["useContext"])(l["context"]),t=e.locale,a=Object(r["useState"])(!1),i=Object(n["a"])(a,2),s=i[0],m=i[1];return c.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{verticalAlign:"-0.125em"}},c.a.createElement(o["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:s,mode:"dark"},c.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){},wedc:function(e,t,a){"use strict";a.r(t);var n=a("ahKI"),r=a.n(n),c=a("cRq1"),l=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),o=(a("gKi5"),a("Bjia"),a("0m3q"),a("MHCT")),i=r.a.memo((e=>{var t=e.demos,a=t["safe-area-demo1"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"safearea-\u5b89\u5168\u533a"},r.a.createElement(c["AnchorLink"],{to:"#safearea-\u5b89\u5168\u533a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"SafeArea \u5b89\u5168\u533a"),r.a.createElement("p",null,"\u5728\u5168\u9762\u5c4f\u4e0b\u63d0\u4f9b\u81ea\u9002\u5e94\u7684\u8fb9\u8ddd\u8c03\u6574\u3002"),r.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},r.a.createElement(c["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),r.a.createElement("p",null,"\u5f53\u7f51\u9875\u88ab\u5168\u5c4f\u5c55\u793a\u65f6\uff0c\u53ef\u501f\u52a9\u5b89\u5168\u533a\u5b9e\u73b0\u81ea\u52a8\u9002\u914d\u3002"),r.a.createElement("h2",{id:"\u8bf4\u660e"},r.a.createElement(c["AnchorLink"],{to:"#\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u8bf4\u660e"),r.a.createElement("p",null,"SafeArea \u7ec4\u4ef6\u662f\u7528\u6765\u5728\u5168\u9762\u5c4f\u4e0b\u63d0\u4f9b\u81ea\u9002\u5e94\u7684\u8fb9\u8ddd\u8c03\u6574\uff0c\u5b83\u7684\u5e95\u5c42\u5b9e\u73b0\u5176\u5b9e\u662f ",r.a.createElement("code",null,"env(safe-area-inset-xxx)"),"\u3002"),r.a.createElement("p",null,"\u5f53\u4f60\u7684\u7f51\u9875\u662f\u88ab\u5168\u5c4f\u5c55\u793a\u65f6\uff0c\u53ef\u4ee5\u501f\u52a9\u5b83\u6765\u5b9e\u73b0\u81ea\u52a8\u7684\u9002\u914d\uff0c\u4e0b\u56fe\u4e2d\u84dd\u8272\u7684\u90e8\u5206\u662f\u9876\u90e8 SafeArea \u6240\u5360\u636e\u7684\u533a\u57df\uff0c\u800c\u6a59\u8272\u7684\u90e8\u5206\u662f\u5e95\u90e8 SafeArea \u6240\u5360\u636e\u7684\u533a\u57df\u3002"),r.a.createElement("img",{alt:"safe-area-top",src:"https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*ATR3R5FOt9gAAAAAAAAAAAAAARQnAQ",width:"500px"}),r.a.createElement("img",{alt:"safe-area-bottom",src:"https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*M9vOS5mUT_AAAAAAAAAAAAAAARQnAQ",width:"500px"}),r.a.createElement("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0b\u65b9\u7684 demo \u5728\u684c\u9762\u7aef\u6d4f\u89c8\u5668\u4e0b\u662f\u770b\u4e0d\u5230\u6548\u679c\u7684\uff1a"),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement(c["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),r.a.createElement(l["default"],t["safe-area-demo1"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"safearea"},r.a.createElement(c["AnchorLink"],{to:"#safearea","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"SafeArea"),r.a.createElement("h3",{id:"\u5c5e\u6027"},r.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),r.a.createElement(o["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u5c5e\u6027"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"position"),r.a.createElement("td",null,"\u5b89\u5168\u533a\u7684\u4f4d\u7f6e"),r.a.createElement("td",null,r.a.createElement("code",null,"'top' | 'bottom'")),r.a.createElement("td",null,"-")))),r.a.createElement("h3",{id:"css-\u53d8\u91cf"},r.a.createElement(c["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),r.a.createElement(o["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u5c5e\u6027"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),r.a.createElement("th",null,"\u5168\u5c40\u53d8\u91cf"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"--multiple"),r.a.createElement("td",null,"\u663e\u793a\u7684\u500d\u6570"),r.a.createElement("td",null,r.a.createElement("code",null,"1")),r.a.createElement("td",null,r.a.createElement("code",null,"--adm-safe-area-multiple"))))),r.a.createElement("h2",{id:"faq"},r.a.createElement(c["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"FAQ"),r.a.createElement("h3",{id:"\u5728-rem-\u5e03\u5c40\u4e0bsafearea-\u9ad8\u5ea6\u5f88\u5c0f\u600e\u4e48\u529e"},r.a.createElement(c["AnchorLink"],{to:"#\u5728-rem-\u5e03\u5c40\u4e0bsafearea-\u9ad8\u5ea6\u5f88\u5c0f\u600e\u4e48\u529e","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5728 rem \u5e03\u5c40\u4e0b\uff0cSafeArea \u9ad8\u5ea6\u5f88\u5c0f\u600e\u4e48\u529e\uff1f"),r.a.createElement("p",null,"\u4e00\u4e9b rem \u65b9\u6848\u4f1a\u901a\u8fc7 viewport meta \u8bbe\u7f6e\u7f51\u9875\u7684\u6574\u4f53\u7f29\u653e\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cSafeArea \u4e5f\u4f1a\u88ab\u5bf9\u5e94\u7684\u7f29\u653e\uff0c\u4ece\u800c\u5f88\u53ef\u80fd\u9ad8\u5ea6\u5f02\u5e38\u3002\u8fd9\u65f6\u4f60\u53ef\u4ee5\u901a\u8fc7\u5168\u5c40\u7684 ",r.a.createElement("code",null,"--adm-safe-area-multiple")," CSS \u53d8\u91cf\u6765\u8c03\u6574 SafeArea \u7684\u663e\u793a\u500d\u6570\uff0c\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u9879\u76ee\u6846\u67b6\u5c06\u9875\u9762\u6574\u4f53\u7f29\u653e\u4e3a\u4e86 0.5 \u500d\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u8bbe\u7f6e ",r.a.createElement("code",null,"--adm-safe-area-multiple: 2")," \u6765\u505a\u5bf9\u5e94\u7684\u8865\u507f\u8c03\u6574\u3002"))))}));t["default"]=e=>{var t=r.a.useContext(c["context"]),a=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:a})}}}]);