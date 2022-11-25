(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[167],{"/YBq":function(e,t,a){"use strict";a.r(t);var n=a("ahKI"),l=a.n(n),r=a("cRq1"),c=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX"),a("gKi5"),a("Bjia")),o=(a("0m3q"),a("MHCT")),i=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"css-variables"},l.a.createElement(r["AnchorLink"],{to:"#css-variables","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CSS Variables"),l.a.createElement("p",null,"Compared to the crude CSS style override (also known as the magic style), CSS Variables allow us to customize the style of the component more elegantly."),l.a.createElement("p",null,"Let's take a look at how we should use the CSS variables exposed by the component."),l.a.createElement("blockquote",null,l.a.createElement("p",null,"The premise of this article is that you have some basic understanding of ",l.a.createElement(r["Link"],{to:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables"))),l.a.createElement("p",null,'In the "CSS Variables" table of the component document, you can check which CSS variables are exposed by each component. Of course, you can also find it directly in the ts definition of the component.'),l.a.createElement("p",null,"Taking the Input component as an example, we can find a table similar to the following on its documentation:"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Global"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"--border-radius"),l.a.createElement("td",null,"Border radius of the button."),l.a.createElement("td",null,l.a.createElement("code",null,"4px")),l.a.createElement("td",null,l.a.createElement("code",null,"--adm-button-border-radius"))),l.a.createElement("tr",null,l.a.createElement("td",null,"--border-width"),l.a.createElement("td",null,"Border width of the button."),l.a.createElement("td",null,l.a.createElement("code",null,"1px")),l.a.createElement("td",null,l.a.createElement("code",null,"--adm-button-border-width"))))),l.a.createElement("p",null,"This means that it supports the ",l.a.createElement("code",null,"--border-radius")," and ",l.a.createElement("code",null,"--border-width")," variables."),l.a.createElement("p",null,"Next, we need to set the value of the CSS variable. There are two ways:"),l.a.createElement("h3",{id:"method-1-set-in-the-css-file"},l.a.createElement(r["AnchorLink"],{to:"#method-1-set-in-the-css-file","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Method 1: Set in the CSS file"),l.a.createElement("p",null,"Add a custom ",l.a.createElement("code",null,"className")," to the Input component:"),l.a.createElement(c["a"],{code:"<Button className='my-button'/>",lang:"jsx"}),l.a.createElement("p",null,"Then set CSS Variables in the CSS file"),l.a.createElement(c["a"],{code:".my-button {\n  --border-radius: 2px;\n}",lang:"css"}),l.a.createElement("h3",{id:"method-2-set-directly-through-the-style-attribute"},l.a.createElement(r["AnchorLink"],{to:"#method-2-set-directly-through-the-style-attribute","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Method 2: Set directly through the style attribute"),l.a.createElement("p",null,"Directly through the ",l.a.createElement("code",null,"style")," property of the component, it is simple and rude, suitable for small-scale adjustments:"),l.a.createElement(c["a"],{code:"<Button style={{\n  '--border-radius': '2px'\n}}/>",lang:"jsx"}),l.a.createElement("h3",{id:"method-3-use-the-global-variables"},l.a.createElement(r["AnchorLink"],{to:"#method-3-use-the-global-variables","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Method 3: Use the global variables"),l.a.createElement("p",null,'Let\'s assume you need to adjust the style of all the Buttons in your project. In this case, setting CSS variables for every Button is unrealistic. But you can use the "global" CSS variables (listed as the last column in the table above).'),l.a.createElement(c["a"],{code:":root:root {\n  --adm-button-border-radius: 2px;\n}",lang:"css"}),l.a.createElement("p",null,"In this way, all the Buttons in page will be affected."),l.a.createElement("p",null,"Of course, you can also adjust style for only part of the page. All you need to do is bind the global CSS variables to the root dom element of that area."),l.a.createElement("h2",{id:"css-variables-auto-fallback"},l.a.createElement(r["AnchorLink"],{to:"#css-variables-auto-fallback","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CSS Variables Auto Fallback"),l.a.createElement("p",null,"CSS variables are natively supported in iOS Safari ",l.a.createElement("code",null,">= 10")," and Chrome ",l.a.createElement("code",null,">= 49"),", which should be sufficient for your project in most cases. But if your project needs to be compatible with iOS 9, you need to use a special way to achieve compatibility."),l.a.createElement("p",null,"CSS variables are highly dynamic, and there is no reliable polyfill solution in the industry, so antd-mobile has officially provided a patch CSS since version ",l.a.createElement("code",null,"5.14.0"),":"),l.a.createElement(c["a"],{code:"import 'antd-mobile/bundle/css-vars-patch.css'",lang:"js"}),l.a.createElement("p",null,"You can include it in your project to ensure that component styles don't get messed up in iOS 9."),l.a.createElement("blockquote",null,l.a.createElement("p",null,"For ",l.a.createElement("code",null,"2x")," projects, please import the corresponding ",l.a.createElement("code",null,"antd-mobile/2x/bundle/css-vars-patch.css"))),l.a.createElement("p",null,"This patch CSS will automatically determine the current browser environment and will only take effect if the browser does not support CSS variables. So in most cases, it won't take effect, and it won't have a direct impact on your project. But when it takes effect, all features that depend on CSS variables will no longer take effect, such as: theme settings, component styling based on CSS variables, dark mode."),l.a.createElement("p",null,"Currently, only the following components support CSS variable degradation. We are still improving the CSS variable degradation capabilities of other components. Please pay attention to the subsequent releases:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Button"),l.a.createElement("li",null,"CenterPopup"),l.a.createElement("li",null,"ErrorBlock"),l.a.createElement("li",null,"Image"),l.a.createElement("li",null,"Mask"),l.a.createElement("li",null,"Modal"),l.a.createElement("li",null,"PageIndicator"),l.a.createElement("li",null,"Popover"),l.a.createElement("li",null,"PopoverMenu"),l.a.createElement("li",null,"ScrollMask"),l.a.createElement("li",null,"Space"),l.a.createElement("li",null,"SpinLoading"),l.a.createElement("li",null,"Swiper"),l.a.createElement("li",null,"Tabs"),l.a.createElement("li",null,"Toast"))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}},"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var n=a("mn0l"),l=a("iojd"),r=a("ahKI"),c=a.n(r),o=a("vumQ"),i=a("cRq1");a("Qf6j"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,r=e.showCopy,s=void 0===r||r,u=Object(i["useCopy"])(),m=Object(l["a"])(u,2),d=m[0],h=m[1];return c.a.createElement("div",{className:"__dumi-default-code-block"},c.a.createElement(o["a"],Object(n["a"])({},o["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,n=e.style,l=e.tokens,r=e.getLineProps,o=e.getTokenProps;return c.a.createElement("pre",{className:a,style:n},s&&c.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":h,onClick:()=>d(t)}),l.map(((e,t)=>c.a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>c.a.createElement("span",o({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("mn0l"),a("ahKI"),a("2Pr/")},MHCT:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),r=a("bIC1"),c=a.n(r);a("Z1dS");function o(e,t){return d(e)||m(e,t)||s(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function m(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw l}}return r}}function d(e){if(Array.isArray(e))return e}var h=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),i=o(r,2),s=i[0],u=i[1],m=Object(n["useState"])(!1),d=o(m,2),h=d[0],p=d[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){u(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":s||void 0,"data-right-folded":h||void 0},l.a.createElement("table",null,t)))};t["a"]=h},N0lm:function(e,t,a){"use strict";var n=a("mn0l"),l=a("ahKI"),r=a.n(l);a("tCeM");t["a"]=e=>r.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},Z1dS:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return k}));var n=a("ahKI"),l=a.n(n),r=a("iojd"),c=a("/7QA"),o=a("9kvl"),i=a("cRq1"),s=a("1KG/"),u=a.n(s),m="https://codesandbox.io/api/v1/sandboxes/define";function d(e){return u.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function h(e){var t=Boolean(e.sources._.tsx),a=t?".tsx":".jsx",n={},l={},c=Object.values(e.dependencies).filter((e=>e.css)),o="app".concat(a),i="index".concat(a);Object.entries(e.dependencies).forEach((e=>{var t=Object(r["a"])(e,2),a=t[0],n=t[1].version;l[a]=n})),l["react-dom"]||(l["react-dom"]=l.react||"latest"),n["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},n["index.html"]={content:'<div id="root"></div>'},n[i]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(c.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var s=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(r["a"])(e,2),a=t[0],l=t[1],c=l.tsx,i=l.jsx,u=l.content,m={content:c||i||u};n["_"===a?o:a]=m,s=s||m.content.includes("from 'demos'"),m.content=m.content.replace("from 'demos'","from './demos-util'")})),s&&(l["lorem-ipsum"]="^2.0.8",n["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),n["package.json"]={content:JSON.stringify({name:e.title,main:i,dependencies:l,devDependencies:t?{typescript:"^3"}:{}},null,2)},d({files:n})}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,a=Object(n["useState"])(),l=Object(r["a"])(a,2),c=l[0],o=l[1];return Object(n["useEffect"])((()=>{if(e){var a=document.createElement("form"),n=h(e);function l(e,t){var n=document.createElement("input");a.appendChild(n),n.name=e,n.value=t}return a.method="POST",a.target="_blank",a.style.display="none",a.action=t,l("parameters",n),l("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),a.setAttribute("data-demo",e.title||""),document.body.appendChild(a),o((()=>()=>a.submit())),()=>a.remove()}}),[e]),c}var v=a("Bjia");a("YWOM");function b(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var f=e=>{var t,a=Object(n["useRef"])(null),s=Object(n["useContext"])(i["context"]),u=s.locale,m=Object(i["useLocaleProps"])(u,e),d=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(m.identifier),h=1===Object.keys(m.sources).length,f=p(null!==(t=m.hideActions)&&void 0!==t&&t.includes("CSB")?null:m),E=Object(i["useMotions"])(m.motions||[],a.current),g=Object(r["a"])(E,2),y=g[0],S=g[1],w=Object(i["useCopy"])(),j=Object(r["a"])(w,2),k=j[0],x=j[1],C=Object(n["useState"])("_"),O=Object(r["a"])(C,2),_=O[0],N=O[1],M=Object(n["useState"])(b(_,m.sources[_])),I=Object(r["a"])(M,2),L=I[0],A=I[1],T=m.sources[_][L]||m.sources[_].content,V=Object(i["useTSPlaygroundUrl"])(u,T),Z=Object(i["usePrefersColor"])(),B=Object(r["a"])(Z,1);B[0];function P(e){N(e),A(b(e,m.sources[e]))}return l.a.createElement("div",{style:m.style,className:[m.className,"__dumi-default-previewer",d?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:m.identifier,"data-debug":m.debug||void 0},l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":m.title},m.title&&l.a.createElement(i["AnchorLink"],{to:"#".concat(m.identifier)},m.title),m.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:m.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},m.debug&&l.a.createElement("span",{className:"debug-badge"},"Debug Only"),f&&l.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:f}),m.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:S,onClick:()=>y()}),l.a.createElement("div",{className:"spacer"}),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:()=>k(T)}),"tsx"===L&&l.a.createElement(i["Link"],{target:"_blank",to:V},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&l.a.createElement(c["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:_,onChange:P},Object.keys(m.sources).map((e=>l.a.createElement(c["Tabs"].Tab,{title:"_"===e?"index.".concat(b(e,m.sources[e])):e,key:e})))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(v["a"],{code:T,lang:L,showCopy:!1}))))},E=f,g=(a("oeoJ"),a("NEWu")),y=(a("q9vG"),e=>{var t=e.url,a=Object(n["useState"])(Math.random()),o=Object(r["a"])(a,2),s=o[0],u=o[1],m=Object(i["usePrefersColor"])(),d=Object(r["a"])(m,1),h=d[0],p=Object(n["useContext"])(i["context"]),v=p.config.mode;return Object(n["useEffect"])((()=>{u(Math.random())}),[h]),l.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":v},l.a.createElement("iframe",{title:"dumi-previewer",src:t,key:s}),l.a.createElement("div",{className:"adm-doc-device-action"},l.a.createElement("a",{onClick:()=>u(Math.random())},S),l.a.createElement(c["Popover"],{content:l.a.createElement(g["a"],{value:t,size:96}),trigger:"click"},l.a.createElement("a",null,w)),l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},j)))}),S=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),w=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),j=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),k="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(i["useDemoUrl"])(e.identifier);return l.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},l.a.createElement("div",{className:"adm-doc-previewer-source"},l.a.createElement(E,e)),l.a.createElement("div",{className:"adm-doc-previewer-device"},l.a.createElement(y,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),r=a("eqKt"),c=a.n(r),o=e=>l.a.createElement("a",{className:c.a.card,href:e.link,target:"_blank"},e.image&&l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement("div",{className:c.a.content},l.a.createElement("div",{className:c.a.title},e.title),l.a.createElement("div",{className:c.a.description},e.description)));t["a"]=o},mVOg:function(e,t,a){"use strict";var n=a("iojd"),l=a("ahKI"),r=a.n(l),c=a("cRq1"),o=a("/7QA");t["a"]=()=>{var e=Object(l["useContext"])(c["context"]),t=e.locale,a=Object(l["useState"])(!1),i=Object(n["a"])(a,2),s=i[0],u=i[1];return r.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)},style:{verticalAlign:"-0.125em"}},r.a.createElement(o["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:s,mode:"dark"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){}}]);