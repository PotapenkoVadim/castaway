!function(){"use strict";var e,t={5959:function(e,t,n){var r=n(7091),o=n.n(r),s=new URL(n(4508),n.b),i=new URL(n(3153),n.b),c=new URL(n(9770),n.b),a=new URL(n(7496),n.b),u=new URL(n(4322),n.b),l=new URL(n(5648),n.b);o()(s);o()(i),o()(c),o()(a),o()(u),o()(l);class d{constructor(){this.observers=[]}subscribe(e){this.observers.push(e)}unsubscribe(e){this.observers=this.observers.filter((t=>t!==e))}broadcast(e){this.observers.forEach((t=>t(e)))}}const b="header__navigation_open",f=document.getElementById("mobileMenu"),p=document.getElementById("mobileCloseIcon"),m=document.getElementById("mobileNavigation"),v=document.getElementById("mobileNavigationList");f.addEventListener("click",(()=>{m.classList.toggle(b)})),p.addEventListener("click",(()=>{m.classList.remove(b)})),[...v.children].map((e=>e.addEventListener("click",(()=>{[...m.classList].includes(b)&&m.classList.remove(b)}))));const g="form__label_active",h=new d,w=new d,y=document.getElementById("email"),E=document.getElementById("name"),L=document.getElementById("nameError"),x=document.getElementById("emailError"),O=["fuck","bitch","suck","asshole","motherfucker"],k={name:{node:L,text:""},email:{node:x,text:""}};function j(e){return t=>{t.target===e&&t.target.value.length>=1?e.nextElementSibling.classList.add(g):e.nextElementSibling.classList.remove(g)}}function I(e){return t=>{if(t.target===e){const n=O.some((e=>t.target.value.toLowerCase().includes(e.toLowerCase()))),r=e.getAttribute("id"),o=n?"please, do not use bad words!":" ";w.broadcast({id:r,text:o})}}}h.subscribe(j(y)),h.subscribe(I(y)),h.subscribe(j(E)),h.subscribe(I(E)),w.subscribe((function(e){let{id:t,text:n}=e;Object.prototype.hasOwnProperty.call(k,t)&&(k[t]=Object.assign(k[t],{text:n}),k[t].node.innerText=k[t].text)})),y.addEventListener("keyup",(e=>h.broadcast(e))),E.addEventListener("keyup",(e=>h.broadcast(e)))},4508:function(e,t,n){e.exports=n.p+"assets/3f8d5f72d5bdfdc993eb.svg"},3153:function(e,t,n){e.exports=n.p+"assets/c14fafa20c1ce7252b62.webp"},5648:function(e,t,n){e.exports=n.p+"assets/6ff53a513216be770f26.webp"},9770:function(e,t,n){e.exports=n.p+"assets/1ecf68d78178a5ae2860.webp"},4322:function(e,t,n){e.exports=n.p+"assets/3d065a89639cf7b316b1.webp"},7496:function(e,t,n){e.exports=n.p+"assets/87716277f11c4add020e.webp"}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,r),s.exports}r.m=t,e=[],r.O=function(t,n,o,s){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],s=e[l][2];for(var c=!0,a=0;a<n.length;a++)(!1&s||i>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(c=!1,s<i&&(i=s));if(c){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,o,s]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){r.b=document.baseURI||self.location.href;var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,i=n[0],c=n[1],a=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(a)var l=a(r)}for(t&&t(n);u<i.length;u++)s=i[u],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},n=self.webpackChunkcastaway_project=self.webpackChunkcastaway_project||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.O(void 0,[638],(function(){return r(6981)}));var o=r.O(void 0,[638],(function(){return r(5959)}));o=r.O(o)}();