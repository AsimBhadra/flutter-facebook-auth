"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[849],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7416:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s=void 0,u={unversionedId:"intro",id:"version-3.x.x/intro",isDocsHomePage:!1,title:"intro",description:"A plugin that easily adds Facebook authentication into you Flutter app. Feature includes getting user information, profile picture and more. This plugin also supports Web.",source:"@site/versioned_docs/version-3.x.x/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/3.x.x/intro",editUrl:"https://github.com/darwin-morocho/flutter-facebook-auth/tree/master/website/versioned_docs/version-3.x.x/intro.md",tags:[],version:"3.x.x",frontMatter:{},sidebar:"version-3.x.x/tutorialSidebar",next:{title:"Android configuration",permalink:"/docs/3.x.x/android"}},c=[{value:"Features",id:"features",children:[],level:2},{value:"Install",id:"install",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("a",{href:"https://pub.dev/packages/flutter_facebook_auth"},(0,a.kt)("img",{alt:"pub version",src:"https://img.shields.io/pub/v/flutter_facebook_auth?color=%2300b0ff&label=flutter_facebook_auth&style=flat-square"})),(0,a.kt)("img",{alt:"last commit",src:"https://img.shields.io/github/last-commit/the-meedu-app/flutter-facebook-auth?color=%23ffa000&style=flat-square"}),(0,a.kt)("a",{href:"https://codecov.io/gh/darwin-morocho/flutter-facebook-auth"},(0,a.kt)("img",{src:"https://codecov.io/gh/darwin-morocho/flutter-facebook-auth/branch/master/graph/badge.svg?token=XEXUNVP0UK"})),(0,a.kt)("img",{alt:"license",src:"https://img.shields.io/github/license/the-meedu-app/flutter-facebook-auth?style=flat-square"}),(0,a.kt)("img",{alt:"stars",src:"https://img.shields.io/github/stars/the-meedu-app/flutter-facebook-auth?style=social"})),(0,a.kt)("p",null,"A plugin that easily adds Facebook authentication into you Flutter app. Feature includes getting user information, profile picture and more. This plugin also supports Web."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Login on iOS, Android and Web."),(0,a.kt)("li",{parentName:"ul"},"Express login on Android."),(0,a.kt)("li",{parentName:"ul"},"Granted and declined permissions."),(0,a.kt)("li",{parentName:"ul"},"User information, picture profile and more."),(0,a.kt)("li",{parentName:"ul"},"Provide an access token to make request to the Graph API.")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Add the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  flutter_facebook_auth: ^3.5.7\n")),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"IMPORTANT")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Upon installation of this plugin, configuration is needed on Android before running the project again. If this is not done, an error of ",(0,a.kt)("strong",{parentName:"p"},"No implementation found")," would show because the Facebook SDK on Android would throw an Exception error if the configuration is not yet defined. This error also locks the other plugins in your project, so if the plugin is not yet needed, either remove it or comment it out from the pubspec.yaml file."))))}d.isMDXComponent=!0}}]);