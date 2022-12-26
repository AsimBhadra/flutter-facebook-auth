"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3870],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1054:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],d={},l="Android configuration",p={unversionedId:"android",id:"version-4.x.x/android",isDocsHomePage:!1,title:"Android configuration",description:"Upon installation of this plugin, configuration is needed on Android before running the project again. If this is not done, an error of No implementation found would show because the Facebook SDK on Android would throw an Exception error if the configuration is not yet defined. This error also locks the other plugins in your project, so if the plugin is not yet needed, either remove it or comment it out from the pubspec.yaml file.",source:"@site/versioned_docs/version-4.x.x/android.md",sourceDirName:".",slug:"/android",permalink:"/docs/4.x.x/android",editUrl:"https://github.com/darwin-morocho/flutter-facebook-auth/tree/master/website/versioned_docs/version-4.x.x/android.md",tags:[],version:"4.x.x",frontMatter:{},sidebar:"version-4.x.x/tutorialSidebar",previous:{title:"intro",permalink:"/docs/4.x.x/intro"},next:{title:"iOS configuration",permalink:"/docs/4.x.x/ios"}},s=[],c={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"android-configuration"},"Android configuration"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Upon installation of this plugin, configuration is needed on Android before running the project again. If this is not done, an error of ",(0,r.kt)("strong",{parentName:"p"},"No implementation found")," would show because the Facebook SDK on Android would throw an Exception error if the configuration is not yet defined. This error also locks the other plugins in your project, so if the plugin is not yet needed, either remove it or comment it out from the pubspec.yaml file."))),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/facebook-login/android/?locale=en"},"Facebook Login for Android - Quickstart")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select an App or Create a New App")),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/98711287-cedfdc80-2352-11eb-9eb3-761f43ba4f7e.png"}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Skip the step 2 (Download the Facebook App)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Skip the step 3 (Integrate the Facebook SDK)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("strong",{parentName:"p"},"Your Resources and Manifest")," add this config in your android project"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open your ",(0,r.kt)("inlineCode",{parentName:"p"},"/android/app/src/main/res/values/strings.xml")," file, or create one if it doesn't exists.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the following (replace ",(0,r.kt)("inlineCode",{parentName:"p"},"{your-app-id}")," with your facebook app Id) and with your client token:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <string name="facebook_app_id">{your-app-id}</string>\n    <string name="facebook_client_token">YOUR_CLIENT_TOKEN</string>\n')),(0,r.kt)("p",{parentName:"li"}," Here one example of ",(0,r.kt)("inlineCode",{parentName:"p"},"strings.xml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <string name="facebook_app_id">1365719610250300</string>\n    <string name="facebook_client_token">YOUR_CLIENT_TOKEN</string>\n</resources>\n')),(0,r.kt)("p",{parentName:"li"}," You can find the ",(0,r.kt)("strong",{parentName:"p"},"client token")," in your facebook developers console"),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/144253037-f1750fbd-62ac-42fb-88a6-2f7ed8113f3e.png"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"/android/app/src/main/AndroidManifest.xml")," file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the following uses-permission element after the application element"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.INTERNET"/>\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the following meta-data element, an activity for Facebook, and an activity and intent filter for Chrome Custom Tabs inside your application element"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>\n<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>\n')),(0,r.kt)("p",{parentName:"li"},"Here one example of ",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="app.meedu.flutter_facebook_auth_example">\n    <uses-permission android:name="android.permission.INTERNET" />\n    <application\n       android:name="${applicationName}"\n       android:icon="@mipmap/ic_launcher"\n       android:label="facebook auth">\n\n       <meta-data\n           android:name="com.facebook.sdk.ApplicationId"\n           android:value="@string/facebook_app_id" />\n       <meta-data \n           android:name="com.facebook.sdk.ClientToken" \n           android:value="@string/facebook_client_token"/>\n\n        <activity\n           android:name=".MainActivity"\n           android:configChanges="orientation|keyboardHidden|keyboard|screenSize|smallestScreenSize|locale|layoutDirection|fontScale|screenLayout|density|uiMode"\n           android:hardwareAccelerated="true"\n           android:launchMode="singleTop"\n           android:theme="@style/LaunchTheme"\n           android:exported="true"\n           android:windowSoftInputMode="adjustResize">\n           <meta-data\n               android:name="io.flutter.embedding.android.NormalTheme"\n               android:resource="@style/NormalTheme" />\n           <meta-data\n               android:name="io.flutter.embedding.android.SplashScreenDrawable"\n               android:resource="@drawable/launch_background" />\n           <intent-filter>\n               <action android:name="android.intent.action.MAIN" />\n               <category android:name="android.intent.category.LAUNCHER" />\n           </intent-filter>\n       </activity>\n       <meta-data\n           android:name="flutterEmbedding"\n           android:value="2" />\n    </application>\n</manifest>\n')))))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Associate Your Package Name and Default Class with Your App"),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/98712455-54b05780-2354-11eb-9509-aa2846af1a2d.png"}),(0,r.kt)("ol",{parentName:"li",start:6},(0,r.kt)("li",{parentName:"ol"},"Provide the Development and Release Key Hashes for Your App")),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/98712555-73aee980-2354-11eb-9c25-c1ef3760fce1.png"}),(0,r.kt)("p",{parentName:"li"},"To find info to how to generate you key hash go to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/facebook-login/android?locale=en_US#6--provide-the-development-and-release-key-hashes-for-your-app"},"https://developers.facebook.com/docs/facebook-login/android?locale=en_US#6--provide-the-development-and-release-key-hashes-for-your-app")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: if your application uses ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/googleplay/android-developer/answer/9842756?visit_id=637406280862877202-1623101210&rd=1"},"Google Play App Signing")," then you should get certificate SHA-1 fingerprint from Google Play Console and convert it to base64")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You should add key hashes for every build variants like release, debug, CI/CD, etc.")))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Queries\nApps that target Android API 30+ (Android 11+) cannot call Facebook native apps unless the package visibility needs are declared. Please follow ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/android/troubleshooting/#faq_267321845055988"},"https://developers.facebook.com/docs/android/troubleshooting/#faq_267321845055988")," to make the declaration. To solve it you have to add in the AndroidManifest.xml file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<manifest package="com.example.app">\n    <queries>\n        <provider android:authorities="com.facebook.katana.provider.PlatformProvider" />\n    </queries>\n    ...\n</manifest>\n')))}m.isMDXComponent=!0}}]);