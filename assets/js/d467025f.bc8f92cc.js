"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[183],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),d=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=d(e.components);return t.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?t.createElement(f,l(l({ref:r},c),{},{components:n})):t.createElement(f,l({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},804:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var t=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],s={},i="Corners",d={unversionedId:"css-library/util/corners",id:"css-library/util/corners",isDocsHomePage:!1,title:"Corners",description:"The corner (.rounded) classes allows you to easily add rounded corners to any element. The syntax for the .rounded class is as follows:",source:"@site/docs/css-library/util/corners.md",sourceDirName:"css-library/util",slug:"/css-library/util/corners",permalink:"/polygonmesh/docs/css-library/util/corners",editUrl:"https://github.com/maticnetwork/polygonmesh/edit/docs/docs/css-library/util/corners.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Background",permalink:"/polygonmesh/docs/css-library/util/background"},next:{title:"Shadows",permalink:"/polygonmesh/docs/css-library/util/shadows"}},c=[{value:"scss",id:"scss",children:[]}],u={toc:c};function p(e){var r=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"corners"},"Corners"),(0,o.kt)("p",null,"The corner (",(0,o.kt)("inlineCode",{parentName:"p"},".rounded"),") classes allows you to easily add rounded corners to any element. The syntax for the ",(0,o.kt)("inlineCode",{parentName:"p"},".rounded")," class is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},".rounded \x3c!-- for regular: 8px--\x3e\n.rounded-{$base}\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("strong",{parentName:"p"},"$base")," is one of the following: ",(0,o.kt)("span",{class:"var"},"sm"),", ",(0,o.kt)("span",{class:"var"},"md"),", ",(0,o.kt)("span",{class:"var"},"lg"),", ",(0,o.kt)("span",{class:"var"},"xl"),", ",(0,o.kt)("span",{class:"var"},"2xl")," and ",(0,o.kt)("span",{class:"var"},"full")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="rounded-sm p-4 bg-primary-500">Rounded Small</div>\n<div class="rounded p-4 bg-primary-500">Rounded Regular</div>\n<div class="rounded-md p-4 bg-primary-500">Rounded Medium</div>\n<div class="rounded-lg p-4 bg-primary-500">Rounded Large</div>\n<div class="rounded-xl p-4 bg-primary-500">Rounded xl</div>\n<div class="rounded-2xl p-4 bg-primary-500">Rounded 2xl</div>\n<div class="rounded-full p-4 bg-primary-500">Rounded Full</div>\n')),(0,o.kt)("div",{class:"demo-element-container flex"},(0,o.kt)("div",{class:"rounded-sm p-4 bg-primary-500"},"Rounded Small"),(0,o.kt)("div",{class:"rounded p-4 bg-primary-500"},"Rounded Regular"),(0,o.kt)("div",{class:"rounded-md p-4 bg-primary-500"},"Rounded Medium"),(0,o.kt)("div",{class:"rounded-lg p-4 bg-primary-500"},"Rounded Large"),(0,o.kt)("div",{class:"rounded-xl p-4 bg-primary-500"},"Rounded xl"),(0,o.kt)("div",{class:"rounded-2xl p-4 bg-primary-500"},"Rounded 2xl"),(0,o.kt)("div",{class:"rounded-full p-4 bg-primary-500"},"Rounded Full")),(0,o.kt)("h2",{id:"scss"},"scss"),(0,o.kt)("p",null,"The corner mixin is availabe in the ",(0,o.kt)("inlineCode",{parentName:"p"},"_variables.scss")," file. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},'.block {\n    @include corner("md");\n}\n')),(0,o.kt)("p",null,"The above code will generate the following CSS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".block {\n    border-radius: 12px;\n}\n")),(0,o.kt)("p",null,"The following are the default values for the corners and can be overridden by passing new values. The map is available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"_variables.scss")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},'$corners: (\n  "sm": 4px,\n  "rg": 8px,\n  "md": 12px,\n  "lg": 16px,\n  "xl": 20px,\n  "2xl": 24px,\n  "full": 9999px,\n);\n')))}p.isMDXComponent=!0}}]);