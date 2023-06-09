"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={},u=void 0,s={unversionedId:"intro",id:"intro",title:"intro",description:"A plugin that easily adds Facebook authentication into you Flutter app. Feature includes getting user information, profile picture and more. This plugin also supports Web.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/5.x.x/intro",draft:!1,editUrl:"https://github.com/darwin-morocho/flutter-facebook-auth/tree/master/website/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Android configuration",permalink:"/docs/5.x.x/android"}},c={},p=[{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("a",{href:"https://pub.dev/packages/flutter_facebook_auth"},(0,a.kt)("img",{alt:"pub version",src:"https://img.shields.io/pub/v/flutter_facebook_auth?color=%2300b0ff&label=flutter_facebook_auth&style=flat-square"})),(0,a.kt)("img",{alt:"last commit",src:"https://img.shields.io/github/last-commit/the-meedu-app/flutter-facebook-auth?color=%23ffa000&style=flat-square"}),(0,a.kt)("a",{href:"https://codecov.io/gh/darwin-morocho/flutter-facebook-auth"},(0,a.kt)("img",{src:"https://codecov.io/gh/darwin-morocho/flutter-facebook-auth/branch/master/graph/badge.svg?token=XEXUNVP0UK"})),(0,a.kt)("img",{alt:"license",src:"https://img.shields.io/github/license/the-meedu-app/flutter-facebook-auth?style=flat-square"}),(0,a.kt)("img",{alt:"stars",src:"https://img.shields.io/github/stars/the-meedu-app/flutter-facebook-auth?style=social"})),(0,a.kt)("p",null,"A plugin that easily adds Facebook authentication into you Flutter app. Feature includes getting user information, profile picture and more. This plugin also supports Web."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Login on iOS, Android, Web and macOS."),(0,a.kt)("li",{parentName:"ul"},"Express login on Android."),(0,a.kt)("li",{parentName:"ul"},"Granted and declined permissions."),(0,a.kt)("li",{parentName:"ul"},"User information, picture profile and more."),(0,a.kt)("li",{parentName:"ul"},"Provide an access token to make request to the Graph API.")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Add the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  flutter_facebook_auth: ^6.0.0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BREAKING CHANGE"),"  since 6.x version your project must use dart 3.x or or higher.\nIn your ",(0,a.kt)("inlineCode",{parentName:"li"},"pubspec.yaml")," make sure that you are using dart 3.x or or higher.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'environment:\n sdk: ">=3.0.0 <4.0.0"\n')))),(0,a.kt)("admonition",{title:"IMPORTANT",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Upon installation of this plugin, configuration is needed on Android before running the project again. If this is not done, an error of ",(0,a.kt)("strong",{parentName:"p"},"No implementation found")," would show because the Facebook SDK on Android would throw an Exception error if the configuration is not yet defined. This error also locks the other plugins in your project, so if the plugin is not yet needed, either remove it or comment it out from the pubspec.yaml file.")))}d.isMDXComponent=!0}}]);