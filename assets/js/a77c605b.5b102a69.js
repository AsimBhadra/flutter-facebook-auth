"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2284],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8448:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={},s="Get the user information",l={unversionedId:"user-information",id:"version-4.x.x/user-information",isDocsHomePage:!1,title:"Get the user information",description:"To get the user information just call to getUserData method.",source:"@site/versioned_docs/version-4.x.x/user-information.md",sourceDirName:".",slug:"/user-information",permalink:"/docs/4.x.x/user-information",editUrl:"https://github.com/darwin-morocho/flutter-facebook-auth/tree/master/website/versioned_docs/version-4.x.x/user-information.md",tags:[],version:"4.x.x",frontMatter:{},sidebar:"version-4.x.x/tutorialSidebar",previous:{title:"App Tracking Transparency",permalink:"/docs/4.x.x/app-tracking-transparency"},next:{title:"Complete example",permalink:"/docs/4.x.x/example"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-the-user-information"},"Get the user information"),(0,o.kt)("p",null,"To get the user information just call to ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserData")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"final userData = await FacebookAuth.instance.getUserData();\n// or FacebookAuth.i.getUserData()\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only call ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserData")," method if you have an user Logged")),(0,o.kt)("p",null,"Expected response ",(0,o.kt)("inlineCode",{parentName:"p"},"Map<String,dynamic>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'{\n    "email" = "dsmr.apps@gmail.com",\n    "id" = 3003332493073668,\n    "name" = "Darwin Morocho",\n    "picture" = {\n        "data" = {\n            "height" = 50,\n            "is_silhouette" = 0,\n            "url" = "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3003332493073668",\n            "width" = 50,\n        },\n    }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"by default the ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserData")," method requests the ",(0,o.kt)("inlineCode",{parentName:"p"},"name, email and picture profile"),". If you want to get to other user info you need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," param.")),(0,o.kt)("p",null,"For example if you want to get the user birthday, friends, gender and link you need first make a login request with these permissions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"final result = await FacebookAuth.i.login(\n    permissions: ['email', 'public_profile', 'user_birthday', 'user_friends', 'user_gender', 'user_link'],\n);\nif (result.status == LoginStatus.success) {\n    final userData = await FacebookAuth.i.getUserData(\n        fields: \"name,email,picture.width(200),birthday,friends,gender,link\",\n    );\n}\n")))}m.isMDXComponent=!0}}]);