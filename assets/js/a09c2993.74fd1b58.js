"use strict";(self.webpackChunksecure_event_emitter_website=self.webpackChunksecure_event_emitter_website||[]).push([[128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,v=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},o="Introduction",s={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"secure-event-emitter is a tiny javascript package that uses restrict rules and mechanisms to build safer and protected event-driven architecture. It's similar to nodejs EventEmitter, but dictates stricter rules to prevent misuse.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/secure-event-emitter/docs/introduction",draft:!1,editUrl:"https://github.com/Ruben-Arushanyan/secure-event-emitter/edit/master/website/docs/introduction.md",tags:[],version:"current",lastUpdatedBy:"Ruben Arushanyan",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"SecureEventEmitter",permalink:"/secure-event-emitter/docs/SecureEventEmitter"}},c={},l=[{value:"The Main Features",id:"the-main-features",level:2},{value:"Installation",id:"installation",level:2},{value:"Simple Usage Example",id:"simple-usage-example",level:2}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"secure-event-emitter")," is a tiny javascript package that uses restrict rules and mechanisms to build safer and protected event-driven architecture. It's similar to nodejs ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/events.html"},"EventEmitter"),", but dictates stricter rules to prevent misuse."),(0,i.kt)("h2",{id:"the-main-features"},"The Main Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All event types that the emitter can use must be defined\u2024"),(0,i.kt)("li",{parentName:"ul"},"We can not emit events anywhere without emitterKey\u2024"),(0,i.kt)("li",{parentName:"ul"},"We can define a strict payload structure and emitter can only work with that structured data")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install secure-event-emitter\n")),(0,i.kt)("h2",{id:"simple-usage-example"},"Simple Usage Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {SecureEventEmitter} from 'secure-event-emitter'\n\n// create emitterKey\nconst emitterKey = Symbol()\n\n// create myEmitter instance\nconst myEmitter = new SecureEventEmitter(\n    ['event-1', 'event-2'], // all event types\n    emitterKey      // emitter key is an any Symbol or String type value\n)\n\n// add listeners\nmyEmitter.on('event-1', (a, b) => {\n    console.log(a, b)\n})\nmyEmitter.on('event-2', (x) => {\n    console.log(x)\n})\n\nmyEmitter.unlock(emitterKey).emit('event-1', 2021, 2022)\nmyEmitter.unlock(emitterKey).emit('event-2', 123)\n\n")))}m.isMDXComponent=!0}}]);