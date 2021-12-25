"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[835],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return d}});var t=n(7294);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,c=function(e,r){if(null==e)return{};var n,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=t.createContext({}),f=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=f(e.components);return t.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=f(n),d=c,m=p["".concat(i,".").concat(d)]||p[d]||l[d]||o;return n?t.createElement(m,a(a({ref:r},u),{},{components:n})):t.createElement(m,a({ref:r},u))}));function d(e,r){var n=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:c,a[1]=s;for(var f=2;f<o;f++)a[f]=n[f];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5682:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return f},toc:function(){return u},default:function(){return p}});var t=n(2122),c=n(9756),o=(n(7294),n(3905)),a=["components"],s={},i="Theme",f={unversionedId:"css-library/customize/theme",id:"css-library/customize/theme",isDocsHomePage:!1,title:"Theme",description:"The colors can be customized by overriding the css variables. The default values are as follows.",source:"@site/docs/css-library/customize/theme.md",sourceDirName:"css-library/customize",slug:"/css-library/customize/theme",permalink:"/polygonmesh/docs/css-library/customize/theme",editUrl:"https://github.com/maticnetwork/polygonmesh/edit/docs/docs/css-library/customize/theme.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spacing",permalink:"/polygonmesh/docs/css-library/util/spacing"}},u=[],l={toc:u};function p(e){var r=e.components,n=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"theme"},"Theme"),(0,o.kt)("p",null,"The colors can be customized by overriding the css variables. The default values are as follows. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  --gray-900: #0a0b0d;\n  --gray-800: #1b1d22;\n  --gray-700: #292c34;\n  --gray-600: #52555d;\n  --gray-500: #b0b4bb;\n  --gray-400: #c0c3c9;\n  --gray-300: #dddfe0;\n  --gray-200: #f7f7f8;\n  --gray-100: #ffffff;\n\n  --primary-900: #2c1752;\n  --primary-800: #3c1f70;\n  --primary-700: #4e2892;\n  --primary-600: #6433b9;\n  --primary-500: #7b3fe4;\n  --primary-400: #aa84ed;\n  --primary-300: #d0baf5;\n  --primary-200: #eae0fb;\n  --primary-100: #faf7fe;\n\n  --secondary-900: #193d45;\n  --secondary-800: #22535e;\n  --secondary-700: #2b6d7b;\n  --secondary-600: #378a9c;\n  --secondary-500: #44aac0;\n  --secondary-400: #87c9d7;\n  --secondary-300: #bce0e8;\n  --secondary-200: #e1f1f5;\n  --secondary-100: #f8fcfc;\n\n  --success-900: #16443e;\n  --success-800: #1d5d55;\n  --success-700: #267a6f;\n  --success-600: #319a8d;\n  --success-500: #3cbeae;\n  --success-400: #82d5cb;\n  --success-300: #b9e8e2;\n  --success-200: #e0f5f2;\n  --success-100: #f7fcfc;\n\n  --warning-900: #593515;\n  --warning-800: #7a491d;\n  --warning-700: #9e5e25;\n  --warning-600: #c9782f;\n  --warning-500: #f8943a;\n  --warning-400: #faba81;\n  --warning-300: #fdd9b8;\n  --warning-200: #feeedf;\n  --warning-100: #fffbf7;\n\n  --error-900: #531919;\n  --error-800: #712222;\n  --error-700: #952c2c;\n  --error-600: #bc3838;\n  --error-500: #e84545;\n  --error-400: #f18888;\n  --error-300: #f7bcbc;\n  --error-200: #fbe1e1;\n  --error-100: #fef8f8;\n}\n")),(0,o.kt)("p",null,"The variables are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"_colors.scss")," file. To override the colors, you can either edit the color codes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"_colors.scss")," file (if you are using the scss source code) or override the variables in the custom css file. ",(0,o.kt)("em",{parentName:"p"},"Make sure the custom css file is imported after the Polygon Mesh files.")))}p.isMDXComponent=!0}}]);