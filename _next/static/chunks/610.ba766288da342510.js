(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{1551:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=void 0;var i,a=(i=t(7294))&&i.__esModule?i:{default:i},u=t(1003),c=t(880),l=t(9246);var f={};function s(n,e,t,r){if(n&&u.isLocalURL(e)){n.prefetch(e,t,r).catch((function(n){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:n&&n.locale;f[e+"%"+t+(o?"%"+o:"")]=!0}}var d=function(n){var e,t=!1!==n.prefetch,r=c.useRouter(),i=a.default.useMemo((function(){var e=o(u.resolveHref(r,n.href,!0),2),t=e[0],i=e[1];return{href:t,as:n.as?u.resolveHref(r,n.as):i||t}}),[r,n.href,n.as]),d=i.href,p=i.as,h=n.children,v=n.replace,y=n.shallow,m=n.scroll,g=n.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=(e=a.default.Children.only(h))&&"object"===typeof e&&e.ref,x=o(l.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],C=a.default.useCallback((function(n){j(n),b&&("function"===typeof b?b(n):"object"===typeof b&&(b.current=n))}),[b,j]);a.default.useEffect((function(){var n=w&&t&&u.isLocalURL(d),e="undefined"!==typeof g?g:r&&r.locale,o=f[d+"%"+p+(e?"%"+e:"")];n&&!o&&s(r,d,p,{locale:e})}),[p,d,w,g,t,r]);var A={ref:C,onClick:function(n){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(n),n.defaultPrevented||function(n,e,t,r,o,i,a,c){("A"!==n.currentTarget.nodeName.toUpperCase()||!function(n){var e=n.currentTarget.target;return e&&"_self"!==e||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.nativeEvent&&2===n.nativeEvent.which}(n)&&u.isLocalURL(t))&&(n.preventDefault(),e[o?"replace":"push"](t,r,{shallow:i,locale:c,scroll:a}))}(n,r,d,p,v,y,m,g)},onMouseEnter:function(n){e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(n),u.isLocalURL(d)&&s(r,d,p,{priority:!0})}};if(n.passHref||"a"===e.type&&!("href"in e.props)){var I="undefined"!==typeof g?g:r&&r.locale,E=r&&r.isLocaleDomain&&u.getDomainLocale(p,I,r&&r.locales,r&&r.domainLocales);A.href=E||u.addBasePath(u.addLocale(p,I,r&&r.defaultLocale))}return a.default.cloneElement(e,A)};e.default=d},9246:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(n){var e=n.rootRef,t=n.rootMargin,r=n.disabled||!u,f=i.useRef(),s=o(i.useState(!1),2),d=s[0],p=s[1],h=o(i.useState(e?e.current:null),2),v=h[0],y=h[1],m=i.useCallback((function(n){f.current&&(f.current(),f.current=void 0),r||d||n&&n.tagName&&(f.current=function(n,e,t){var r=function(n){var e,t={root:n.root||null,margin:n.rootMargin||""},r=l.find((function(n){return n.root===t.root&&n.margin===t.margin}));r?e=c.get(r):(e=c.get(t),l.push(t));if(e)return e;var o=new Map,i=new IntersectionObserver((function(n){n.forEach((function(n){var e=o.get(n.target),t=n.isIntersecting||n.intersectionRatio>0;e&&t&&e(t)}))}),n);return c.set(t,e={id:t,observer:i,elements:o}),e}(t),o=r.id,i=r.observer,a=r.elements;return a.set(n,e),i.observe(n),function(){if(a.delete(n),i.unobserve(n),0===a.size){i.disconnect(),c.delete(o);var e=l.findIndex((function(n){return n.root===o.root&&n.margin===o.margin}));e>-1&&l.splice(e,1)}}}(n,(function(n){return n&&p(n)}),{root:v,rootMargin:t}))}),[r,v,t,d]);return i.useEffect((function(){if(!u&&!d){var n=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(n)}}}),[d]),i.useEffect((function(){e&&y(e.current)}),[e]),[m,d]};var i=t(7294),a=t(4686),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},3610:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return H}});var r=t(5893),o=t(7294),i=t(1664),a=t(2125),u=t(9583),c=t(5434),l=t(8193),f=t(471),s=t(4931);function d(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function p(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return d(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function v(){var n=h(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);return v=function(){return n},n}function y(){var n=h(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc(100% + 15px), 25%);\n  z-index: 5;\n  background: ",";\n  color: ",";\n  border-radius: 5px;\n  padding: 4px 8px;\n  opacity: ",";\n  transition: opacity 0.2s;\n  white-space: nowrap;\n  font-size: 16px;\n  user-select: none;\n  font-weight: 600;\n"]);return y=function(){return n},n}function m(){var n=h([""]);return m=function(){return n},n}var g=a.ZP.div.withConfig({componentId:"sc-a64c13e3-0"})(v()),b=a.ZP.div.withConfig({componentId:"sc-a64c13e3-1"})(y(),(function(n){return n.theme.SILVER_DARK}),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.visible?"1":"0"})),x=a.ZP.div.withConfig({componentId:"sc-a64c13e3-2"})(m()),j=function(n){var e=n.children,t=n.title,i=p(o.useState(!1),2),a=i[0],u=i[1];return(0,r.jsxs)(g,{children:[(0,r.jsx)(b,{visible:a,children:t}),(0,r.jsx)(x,{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},children:e})]})},w=t(5623),C=t(6827),A=t(1163);function I(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function E(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return I(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function S(){var n=O(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 42px;\n  background: ",";\n  padding: 8px;\n  border-right: 1px solid ",";\n"]);return S=function(){return n},n}function T(){var n=O(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 700;\n  width: 100%;\n  color: ",";\n  cursor: pointer;\n\n  &:hover :is(a, svg) {\n    color: ",";\n  }\n\n  svg {\n    padding: 8px 0;\n    vertical-align: middle;\n  }\n"]);return T=function(){return n},n}function R(){var n=O(["\n  color: ",";\n"]);return R=function(){return n},n}function L(){var n=O(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div:nth-child(n + 1) {\n    border-bottom: 1px solid ",";\n  }\n"]);return L=function(){return n},n}function _(){var n=O(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div,\n  a:nth-child(0) {\n    border-top: 1px solid ",";\n  }\n"]);return _=function(){return n},n}function k(){var n=O(["\n  color: ",";\n"]);return k=function(){return n},n}function M(){var n=O(['\n  cursor: pointer;\n\n  input[type="file"] {\n    display: none;\n  }\n']);return M=function(){return n},n}var P=a.ZP.div.withConfig({componentId:"sc-e5e58053-0"})(S(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.SILVER_DARK})),N=a.ZP.div.withConfig({componentId:"sc-e5e58053-1"})(T(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),U=a.ZP.span.withConfig({componentId:"sc-e5e58053-2"})(R(),(function(n){var e=n.theme;return n.secondary?e.FULL_WHITE:e.ORANGE})),Z=a.ZP.nav.withConfig({componentId:"sc-e5e58053-3"})(L(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),F=a.ZP.nav.withConfig({componentId:"sc-e5e58053-4"})(_(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),G=a.ZP.div.withConfig({componentId:"sc-e5e58053-5"})(k(),(function(n){return n.theme.FULL_WHITE})),D=a.ZP.label.withConfig({componentId:"sc-e5e58053-6"})(M());var K=function(){var n,e=(0,C.ZR)(),t=e.states.settings,a=e.dispatch,d=(0,A.useRouter)(),p=E(o.useState(null),2),h=p[0],v=p[1];return o.useEffect((function(){if(h){var n=new FileReader;n.readAsText(h,"UTF-8"),n.onload=function(n){var e;a({type:w.n.SET_JSON,payload:null===(e=n.target)||void 0===e?void 0:e.result})}}}),[h,a]),(0,r.jsxs)(P,{children:[(0,r.jsxs)(Z,{children:[(0,r.jsx)(i.default,{passHref:!0,href:"/",children:(0,r.jsx)(N,{onClick:function(){return d.push("/")},children:(0,r.jsxs)(G,{children:[(0,r.jsx)(U,{children:"J"}),(0,r.jsx)(U,{secondary:!0,children:"V"})]})})}),(0,r.jsx)(j,{title:"Home",children:(0,r.jsx)(N,{onClick:function(){return d.push("/")},children:(0,r.jsx)(l.V9Z,{})})}),(0,r.jsx)(j,{title:"Auto Format",children:(0,r.jsx)(N,{onClick:function(){a({type:w.n.TOGGLE_AUTOFORMAT}),(0,s.ZP)("Auto format has been ".concat(t.autoformat?"disabled.":"enabled."))},children:t.autoformat?(0,r.jsx)(c.kk0,{}):(0,r.jsx)(c.sGS,{})})}),(0,r.jsx)(j,{title:"Change Layout",children:(0,r.jsx)(N,{onClick:function(){return a({type:w.n.TOGGLE_LAYOUT})},children:(n=t.layout,"LEFT"===n?(0,r.jsx)(f.mtx,{}):"UP"===n?(0,r.jsx)(f.LkX,{}):"RIGHT"===n?(0,r.jsx)(f.glP,{}):(0,r.jsx)(f.uFB,{}))})}),(0,r.jsx)(j,{title:"Toggle Compact Nodes",children:(0,r.jsx)(N,{title:"Toggle Expand/Collapse",onClick:function(){a({type:w.n.TOGGLE_EXPAND}),(0,s.ZP)("".concat(t.expand?"Collapsed":"Expanded"," nodes."))},children:t.expand?(0,r.jsx)(c.bPX,{}):(0,r.jsx)(c.SPo,{})})}),(0,r.jsx)(j,{title:"Clear JSON",children:(0,r.jsx)(N,{onClick:function(){a({type:w.n.SET_JSON,payload:"[]"}),localStorage.removeItem("json"),s.ZP.success("Cleared JSON and removed from memory.")},children:(0,r.jsx)(l.YK6,{})})}),(0,r.jsx)(j,{title:"Import File",children:(0,r.jsx)(N,{children:(0,r.jsxs)(D,{children:[(0,r.jsx)("input",{onChange:function(n){var e;n.target.files&&v(null===(e=n.target.files)||void 0===e?void 0:e.item(0))},type:"file",accept:"application/JSON"},null===h||void 0===h?void 0:h.name),(0,r.jsx)(u.Xur,{})]})})})]}),(0,r.jsxs)(F,{children:[(0,r.jsx)(N,{children:(0,r.jsx)(i.default,{href:"https://twitter.com/aykutsarach",children:(0,r.jsx)("a",{rel:"me",target:"_blank",children:(0,r.jsx)(l.h3E,{})})})}),(0,r.jsx)(N,{children:(0,r.jsx)(i.default,{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,r.jsx)("a",{rel:"me",target:"_blank",children:(0,r.jsx)(l.RrF,{})})})})]})]})},H=o.memo(K)},1664:function(n,e,t){n.exports=t(1551)}}]);