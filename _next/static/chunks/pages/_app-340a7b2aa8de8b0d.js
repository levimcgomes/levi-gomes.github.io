(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2798)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,u=r(n(7294)),l=n(6273),f=n(2725),i=n(3462),c=n(1018),s=n(7190),p=n(1210),d=n(8684),v={};function h(e,t,n,o){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var y=u.default.forwardRef((function(e,t){var n,r=e.href,y=e.as,b=e.children,x=e.prefetch,m=e.passHref,g=e.replace,j=e.shallow,_=e.scroll,C=e.locale,O=e.onClick,M=e.onMouseEnter,P=e.onTouchStart,k=e.legacyBehavior,w=void 0===k?!0!==Boolean(!1):k,L=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,!w||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var E=!1!==x,R=u.default.useContext(i.RouterContext),T=u.default.useContext(c.AppRouterContext);T&&(R=T);var H,N=u.default.useMemo((function(){var e=o(l.resolveHref(R,r,!0),2),t=e[0],n=e[1];return{href:t,as:y?l.resolveHref(R,y):n||t}}),[R,r,y]),S=N.href,I=N.as,A=u.default.useRef(S),U=u.default.useRef(I);w&&(H=u.default.Children.only(n));var B=w?H&&"object"===typeof H&&H.ref:t,D=o(s.useIntersection({rootMargin:"200px"}),3),Z=D[0],z=D[1],K=D[2],G=u.default.useCallback((function(e){U.current===I&&A.current===S||(K(),U.current=I,A.current=S),Z(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[I,B,S,K,Z]);u.default.useEffect((function(){var e=z&&E&&l.isLocalURL(S),t="undefined"!==typeof C?C:R&&R.locale,n=v[S+"%"+I+(t?"%"+t:"")];e&&!n&&h(R,S,I,{locale:t})}),[I,S,z,C,E,R]);var X={ref:G,onClick:function(e){w||"function"!==typeof O||O(e),w&&H.props&&"function"===typeof H.props.onClick&&H.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,f,i,c,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var p=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:i,scroll:f}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!s})};c?u.default.startTransition(p):p()}}(e,R,S,I,g,j,_,C,Boolean(T),E)},onMouseEnter:function(e){w||"function"!==typeof M||M(e),w&&H.props&&"function"===typeof H.props.onMouseEnter&&H.props.onMouseEnter(e),!E&&T||l.isLocalURL(S)&&h(R,S,I,{priority:!0})},onTouchStart:function(e){w||"function"!==typeof P||P(e),w&&H.props&&"function"===typeof H.props.onTouchStart&&H.props.onTouchStart(e),!E&&T||l.isLocalURL(S)&&h(R,S,I,{priority:!0})}};if(!w||m||"a"===H.type&&!("href"in H.props)){var q="undefined"!==typeof C?C:R&&R.locale,F=R&&R.isLocaleDomain&&p.getDomainLocale(I,q,R.locales,R.domainLocales);X.href=F||d.addBasePath(f.addLocale(I,q,R&&R.defaultLocale))}return w?u.default.cloneElement(H,X):u.default.createElement("a",Object.assign({},L,X),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,i=e.disabled||!u,c=o(r.useState(!1),2),s=c[0],p=c[1],d=o(r.useState(null),2),v=d[0],h=d[1];r.useEffect((function(){if(u){if(i||s)return;if(v&&v.tagName){var e=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=f.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:r},f.push(n),l.set(n,t),t}(n),r=o.id,a=o.observer,u=o.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(r);var t=f.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&f.splice(t,1)}}}(v,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var o=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(o)}}}),[v,i,n,t,s]);var y=r.useCallback((function(){p(!1)}),[]);return[h,s,y]};var r=n(7294),a=n(9311),u="function"===typeof IntersectionObserver,l=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var a=o.default.createContext(null);t.LayoutRouterContext=a;var u=o.default.createContext(null);t.GlobalLayoutRouterContext=u;var l=o.default.createContext(null);t.TemplateContext=l},2798:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return s}});var a=n(5893),u=n(1664),l=n.n(u);function f(){return(0,a.jsxs)("div",{className:"header-container",children:[(0,a.jsx)(l(),{href:"/",passHref:!0,children:(0,a.jsx)("h2",{children:"How I Made A Game"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l(),{href:"/#about",passHref:!0,children:"About"}),(0,a.jsx)(l(),{href:"/archive",passHref:!0,children:"All Posts"}),(0,a.jsx)(l(),{href:"/",passHref:!0,children:"Home"})]})]})}var i=n(9008),c=n.n(i);n(906),n(7029);var s=function(e){var t=e.Component,n=e.pageProps;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c(),{children:[(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,a.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,a.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#000000"}),(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#2b5797"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),(0,a.jsx)(f,{}),(0,a.jsx)("main",{className:"page",children:(0,a.jsx)(t,r({},n))})]})}},7029:function(){},906:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(3837),t(387)}));var n=e.O();_N_E=n}]);