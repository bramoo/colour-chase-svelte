var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function l(t){t.forEach(o)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),a=u?t=>requestAnimationFrame(t):t;const d=new Set;function p(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&a(p)}function h(t){let e;return 0===d.size&&a(p),{promise:new Promise(n=>{d.add(e={c:t,f:n})}),abort(){d.delete(e)}}}function g(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function w(){return b(" ")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){(null!=e||t.value)&&(t.value=e)}const C=new Set;let S,E=0;function M(t,e,n,o,r,l,c,s=0){const i=16.666/o;let u="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*l(t);u+=100*t+`%{${c(o,1-o)}}\n`}const f=u+`100% {${c(n,1-n)}}\n}`,a=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(f)}_${s}`,d=t.ownerDocument;C.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(y("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[a]||(h[a]=!0,p.insertRule(`@keyframes ${a} ${f}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${o}ms linear ${r}ms 1 both`,E+=1,a}function O(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),E-=r,E||a(()=>{E||(C.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),C.clear())}))}function R(n,o,r,l){if(!o)return t;const c=n.getBoundingClientRect();if(o.left===c.left&&o.right===c.right&&o.top===c.top&&o.bottom===c.bottom)return t;const{delay:s=0,duration:i=300,easing:u=e,start:a=f()+s,end:d=a+i,tick:p=t,css:g}=r(n,{from:o,to:c},l);let m,$=!0,y=!1;function v(){g&&O(n,m),$=!1}return h(t=>{if(!y&&t>=a&&(y=!0),y&&t>=d&&(p(1,0),v()),!$)return!1;if(y){const e=0+1*u((t-a)/i);p(e,1-e)}return!0}),g&&(m=M(n,0,1,i,s,u,g)),s||(y=!0),p(0,1),v}function B(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,j(t,r)}}function j(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}function A(t){S=t}const P=[],q=[],z=[],D=[],N=Promise.resolve();let G=!1;function F(t){z.push(t)}function I(t){D.push(t)}let L=!1;const H=new Set;function T(){if(!L){L=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];A(e),W(e.$$)}for(P.length=0;q.length;)q.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];H.has(e)||(H.add(e),e())}z.length=0}while(P.length);for(;D.length;)D.pop()();G=!1,L=!1,H.clear()}}function W(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}let J;function K(){return J||(J=Promise.resolve(),J.then(()=>{J=null})),J}function Q(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const U=new Set;let V;function X(){V={r:0,c:[],p:V}}function Y(){V.r||l(V.c),V=V.p}function Z(t,e){t&&t.i&&(U.delete(t),t.i(e))}function tt(t,e,n,o){if(t&&t.o){if(U.has(t))return;U.add(t),V.c.push(()=>{U.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const et={duration:0};function nt(n,o,r){let l,s,i=o(n,r),u=!1,a=0;function d(){l&&O(n,l)}function p(){const{delay:o=0,duration:r=300,easing:c=e,tick:p=t,css:g}=i||et;g&&(l=M(n,0,1,r,o,c,g,a++)),p(0,1);const m=f()+o,$=m+r;s&&s.abort(),u=!0,F(()=>Q(n,!0,"start")),s=h(t=>{if(u){if(t>=$)return p(1,0),Q(n,!0,"end"),d(),u=!1;if(t>=m){const e=c((t-m)/r);p(e,1-e)}}return u})}let g=!1;return{start(){g||(O(n),c(i)?(i=i(),K().then(p)):p())},invalidate(){g=!1},end(){u&&(d(),u=!1)}}}function ot(n,o,r){let s,i=o(n,r),u=!0;const a=V;function d(){const{delay:o=0,duration:r=300,easing:c=e,tick:d=t,css:p}=i||et;p&&(s=M(n,1,0,r,o,c,p));const g=f()+o,m=g+r;F(()=>Q(n,!1,"start")),h(t=>{if(u){if(t>=m)return d(0,1),Q(n,!1,"end"),--a.r||l(a.c),!1;if(t>=g){const e=c((t-g)/r);d(1-e,e)}}return u})}return a.r+=1,c(i)?K().then(()=>{i=i(),d()}):d(),{end(t){t&&i.tick&&i.tick(1,0),u&&(s&&O(n,s),u=!1)}}}function rt(t,e){tt(t,1,1,()=>{e.delete(t.key)})}function lt(t,e){t.f(),rt(t,e)}function ct(t,e,n,o,r,l,c,s,i,u,f,a){let d=t.length,p=l.length,h=d;const g={};for(;h--;)g[t[h].key]=h;const m=[],$=new Map,y=new Map;for(h=p;h--;){const t=a(r,l,h),s=n(t);let i=c.get(s);i?o&&i.p(t,e):(i=u(s,t),i.c()),$.set(s,m[h]=i),s in g&&y.set(s,Math.abs(h-g[s]))}const v=new Set,b=new Set;function w(t){Z(t,1),t.m(s,f,c.has(t.key)),c.set(t.key,t),f=t.first,p--}for(;d&&p;){const e=m[p-1],n=t[d-1],o=e.key,r=n.key;e===n?(f=e.first,d--,p--):$.has(r)?!c.has(o)||v.has(o)?w(e):b.has(r)?d--:y.get(o)>y.get(r)?(b.add(o),w(e)):(v.add(r),d--):(i(n,c),d--)}for(;d--;){const e=t[d];$.has(e.key)||i(e,c)}for(;p;)w(m[p-1]);return m}function st(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function it(t){t&&t.c()}function ut(t,e,n){const{fragment:r,on_mount:s,on_destroy:i,after_update:u}=t.$$;r&&r.m(e,n),F(()=>{const e=s.map(o).filter(c);i?i.push(...e):l(e),t.$$.on_mount=[]}),u.forEach(F)}function ft(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){-1===t.$$.dirty[0]&&(P.push(t),G||(G=!0,N.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function dt(e,n,o,c,s,i,u=[-1]){const f=S;A(e);const a=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:u};let p=!1;if(d.ctx=o?o(e,a,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&at(e,t)),n}):[],d.update(),p=!0,l(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();n.intro&&Z(e.$$.fragment),ut(e,n.target,n.anchor),T()}A(f)}class pt{$destroy(){ft(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function ht(t){const e=t-1;return e*e*e+1}function gt(t){return-.5*(Math.cos(Math.PI*t)-1)}function mt(t,e,n){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform,l=e.from.width/t.clientWidth,s=e.from.height/t.clientHeight,i=(e.from.left-e.to.left)/l,u=(e.from.top-e.to.top)/s,f=Math.sqrt(i*i+u*u),{delay:a=0,duration:d=(t=>120*Math.sqrt(t)),easing:p=ht}=n;return{delay:a,duration:c(d)?d(f):d,easing:p,css:(t,e)=>`transform: ${r} translate(${e*i}px, ${e*u}px);`}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function $t(t){var{fallback:e}=t,o=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(t,["fallback"]);const r=new Map,l=new Map;function s(t,r,l){return(s,i)=>(t.set(i.key,{rect:s.getBoundingClientRect()}),()=>{if(r.has(i.key)){const{rect:t}=r.get(i.key);return r.delete(i.key),function(t,e,r){const{delay:l=0,duration:s=(t=>30*Math.sqrt(t)),easing:i=ht}=n(n({},o),r),u=e.getBoundingClientRect(),f=t.left-u.left,a=t.top-u.top,d=t.width/u.width,p=t.height/u.height,h=Math.sqrt(f*f+a*a),g=getComputedStyle(e),m="none"===g.transform?"":g.transform,$=+g.opacity;return{delay:l,duration:c(s)?s(h):s,easing:i,css:(t,e)=>`\n\t\t\t\topacity: ${t*$};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${m} translate(${e*f}px,${e*a}px) scale(${t+(1-t)*d}, ${t+(1-t)*p});\n\t\t\t`}}(t,s,i)}return t.delete(i.key),e&&e(s,i,l)})}return[s(l,r,!1),s(r,l,!0)]}function yt(e){let n,o,r,l,c,s,i,u,f,a,d,p,h;return{c(){n=v("svg"),o=v("defs"),r=v("filter"),l=v("feFlood"),c=v("feComposite"),s=v("feGaussianBlur"),i=v("feOffset"),u=v("feComposite"),f=v("g"),a=v("circle"),d=v("path"),p=v("path"),x(l,"flood-color","rgb(0,0,0)"),x(l,"flood-opacity","0.75"),x(l,"result","flood"),x(c,"in","flood"),x(c,"in2","SourceGraphic"),x(c,"operator","out"),x(c,"result","composite1"),x(s,"in","composite1"),x(s,"result","blur"),x(s,"stdDeviation","10"),x(i,"dy","-12.5"),x(i,"result","offset"),x(u,"in","offset"),x(u,"in2","SourceGraphic"),x(u,"operator","atop"),x(r,"id","f"),x(r,"x","0"),x(r,"y","0"),x(r,"width","1"),x(r,"height","1.125"),x(a,"cx","60"),x(a,"cy","60"),x(a,"r","50"),x(a,"fill",e[1]),x(a,"filter","url(#f)"),x(d,"d","m63.82 35.85c-0.26-9.26-0.79-14.91-9.19-21.61 3.32-0.49 6.08-0.42\r\n      8.71-0.21 5.73 3.55 7.42 11.05 7.51 21.88z"),x(d,"fill","#fff"),x(p,"d","m51.09 37.80c-2.36-7.09-9.26-14.97-12.54-17.53 2.44-1.71 4.73-2.81\r\n      7.01-3.83 5.53 4.14 9.32 8.95 11.98 19.19-1.70 0.85-3.53 1.66-6.44 2.17z"),x(p,"fill","#fff"),x(f,"class","svelte-shn8fg"),x(n,"width","120px"),x(n,"height","120px")},m(t,$,y){m(t,n,$),g(n,o),g(o,r),g(r,l),g(r,c),g(r,s),g(r,i),g(r,u),g(n,f),g(f,a),g(f,d),g(f,p),y&&h(),h=_(f,"click",e[2])},p(t,[e]){2&e&&x(a,"fill",t[1])},i:t,o:t,d(t){t&&$(n),h()}}}function vt(t,e,n){let{colour:o="#be0000"}=e,{potted:r=!1}=e;return t.$set=t=>{"colour"in t&&n(1,o=t.colour),"potted"in t&&n(0,r=t.potted)},[r,o,()=>{n(0,r=!r)}]}class bt extends pt{constructor(t){super(),dt(this,t,vt,yt,s,{colour:1,potted:0})}}function wt(e){let n,o,r,l,c;return{c(){n=y("li"),o=b(e[0]),r=w(),l=y("span"),x(l,"class",c=i(e[1])+" svelte-e5a34p")},m(t,e){m(t,n,e),g(n,o),g(n,r),g(n,l)},p(t,[e]){1&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(o,t[0]),2&e&&c!==(c=i(t[1])+" svelte-e5a34p")&&x(l,"class",c)},i:t,o:t,d(t){t&&$(n)}}}function _t(t,e,n){let{name:o}=e,{colour:r}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"colour"in t&&n(1,r=t.colour)},[o,r]}class xt extends pt{constructor(t){super(),dt(this,t,_t,wt,s,{name:0,colour:1})}}function kt(t,e,n){const o=t.slice();return o[4]=e[n].name,o}function Ct(t,e){let n,o;const r=new xt({props:{name:e[4]}});return{key:t,first:null,c(){n=b(""),it(r.$$.fragment),this.first=n},m(t,e){m(t,n,e),ut(r,t,e),o=!0},p(t,e){const n={};1&e&&(n.name=t[4]),r.$set(n)},i(t){o||(Z(r.$$.fragment,t),o=!0)},o(t){tt(r.$$.fragment,t),o=!1},d(t){t&&$(n),ft(r,t)}}}function St(t){let e,n,o,r,c,s,i,u,f,a=[],d=new Map,p=t[0];const h=t=>t[4];for(let e=0;e<p.length;e+=1){let n=kt(t,p,e),o=h(n);d.set(o,a[e]=Ct(o,n))}return{c(){e=y("div"),n=y("form"),o=y("input"),r=w(),c=y("input"),s=w(),i=y("ul");for(let t=0;t<a.length;t+=1)a[t].c();x(o,"type","text"),x(o,"placeholder","player name"),x(c,"type","submit"),c.value="Add"},m(d,p,h){m(d,e,p),g(e,n),g(n,o),k(o,t[1]),g(n,r),g(n,c),g(e,s),g(e,i);for(let t=0;t<a.length;t+=1)a[t].m(i,null);var $;u=!0,h&&l(f),f=[_(o,"input",t[3]),_(n,"submit",($=t[2],function(t){return t.preventDefault(),$.call(this,t)}))]},p(t,[e]){if(2&e&&o.value!==t[1]&&k(o,t[1]),1&e){const n=t[0];X(),a=ct(a,e,h,1,t,n,d,i,rt,Ct,null,kt),Y()}},i(t){if(!u){for(let t=0;t<p.length;t+=1)Z(a[t]);u=!0}},o(t){for(let t=0;t<a.length;t+=1)tt(a[t]);u=!1},d(t){t&&$(e);for(let t=0;t<a.length;t+=1)a[t].d();l(f)}}}function Et(t,e,n){let o,r=[{name:"bob"}];return[r,o,function(t){o&&n(0,r=[...r,{name:o}])},function(){o=this.value,n(1,o)}]}class Mt extends pt{constructor(t){super(),dt(this,t,Et,St,s,{})}}function Ot(t,e,n){const o=t.slice();return o[6]=e[n],o[7]=e,o[8]=n,o}function Rt(t,e,n){const o=t.slice();return o[6]=e[n],o[9]=e,o[10]=n,o}function Bt(e,n){let o,r,l,c,s,i,u,f=t;function a(t){n[4].call(null,t,n[6])}let d={colour:n[6].colour};void 0!==n[6].potted&&(d.potted=n[6].potted);const p=new bt({props:d});return q.push(()=>st(p,"potted",a)),{key:e,first:null,c(){o=y("div"),it(p.$$.fragment),l=w(),this.first=o},m(t,e){m(t,o,e),ut(p,o,null),g(o,l),u=!0},p(t,e){n=t;const o={};1&e&&(o.colour=n[6].colour),!r&&1&e&&(r=!0,o.potted=n[6].potted,I(()=>r=!1)),p.$set(o)},r(){i=o.getBoundingClientRect()},f(){B(o),f(),j(o,i)},a(){f(),f=R(o,i,mt,n[1])},i(t){u||(Z(p.$$.fragment,t),F(()=>{s&&s.end(1),c||(c=nt(o,n[3],{key:n[6].colour})),c.start()}),u=!0)},o(t){tt(p.$$.fragment,t),c&&c.invalidate(),s=ot(o,n[2],{key:n[6].colour}),u=!1},d(t){t&&$(o),ft(p),t&&s&&s.end()}}}function jt(e,n){let o,r,l,c,s,i,u,f=t;function a(t){n[5].call(null,t,n[6])}let d={colour:n[6].colour};void 0!==n[6].potted&&(d.potted=n[6].potted);const p=new bt({props:d});return q.push(()=>st(p,"potted",a)),{key:e,first:null,c(){o=y("div"),it(p.$$.fragment),l=w(),this.first=o},m(t,e){m(t,o,e),ut(p,o,null),g(o,l),u=!0},p(t,e){n=t;const o={};1&e&&(o.colour=n[6].colour),!r&&1&e&&(r=!0,o.potted=n[6].potted,I(()=>r=!1)),p.$set(o)},r(){i=o.getBoundingClientRect()},f(){B(o),f(),j(o,i)},a(){f(),f=R(o,i,mt,n[1])},i(t){u||(Z(p.$$.fragment,t),F(()=>{s&&s.end(1),c||(c=nt(o,n[3],{key:n[6].colour})),c.start()}),u=!0)},o(t){tt(p.$$.fragment,t),c&&c.invalidate(),s=ot(o,n[2],{key:n[6].colour}),u=!1},d(t){t&&$(o),ft(p),t&&s&&s.end()}}}function At(t){let e,n,o,r,l,c,s,i,u=[],f=new Map,a=[],d=new Map,p=t[0].filter(Pt);const h=t=>t[6].colour;for(let e=0;e<p.length;e+=1){let n=Rt(t,p,e),o=h(n);f.set(o,u[e]=Bt(o,n))}let v=t[0].filter(qt);const b=t=>t[6].colour;for(let e=0;e<v.length;e+=1){let n=Ot(t,v,e),o=b(n);d.set(o,a[e]=jt(o,n))}const _=new Mt({});return{c(){e=y("main"),n=y("h1"),n.textContent="Colour Chase",o=w(),r=y("div");for(let t=0;t<u.length;t+=1)u[t].c();l=w(),c=y("div");for(let t=0;t<a.length;t+=1)a[t].c();s=w(),it(_.$$.fragment),x(n,"class","svelte-19ep50"),x(r,"class","balls table svelte-19ep50"),x(c,"class","balls rail svelte-19ep50"),x(e,"class","svelte-19ep50")},m(t,f){m(t,e,f),g(e,n),g(e,o),g(e,r);for(let t=0;t<u.length;t+=1)u[t].m(r,null);g(e,l),g(e,c);for(let t=0;t<a.length;t+=1)a[t].m(c,null);g(e,s),ut(_,e,null),i=!0},p(t,[e]){if(1&e){const n=t[0].filter(Pt);X();for(let t=0;t<u.length;t+=1)u[t].r();u=ct(u,e,h,1,t,n,f,r,lt,Bt,null,Rt);for(let t=0;t<u.length;t+=1)u[t].a();Y()}if(1&e){const n=t[0].filter(qt);X();for(let t=0;t<a.length;t+=1)a[t].r();a=ct(a,e,b,1,t,n,d,c,lt,jt,null,Ot);for(let t=0;t<a.length;t+=1)a[t].a();Y()}},i(t){if(!i){for(let t=0;t<p.length;t+=1)Z(u[t]);for(let t=0;t<v.length;t+=1)Z(a[t]);Z(_.$$.fragment,t),i=!0}},o(t){for(let t=0;t<u.length;t+=1)tt(u[t]);for(let t=0;t<a.length;t+=1)tt(a[t]);tt(_.$$.fragment,t),i=!1},d(t){t&&$(e);for(let t=0;t<u.length;t+=1)u[t].d();for(let t=0;t<a.length;t+=1)a[t].d();ft(_)}}}const Pt=t=>!t.potted,qt=t=>t.potted;function zt(t,e,n){const o=[{potted:!1,colour:"#ffe900"},{potted:!1,colour:"#03ab70"},{potted:!1,colour:"#cc731a"},{potted:!1,colour:"#009cda"},{potted:!1,colour:"#febfa1"},{potted:!1,colour:"#151d1f"}],r={duration:100,easing:gt},[l,c]=$t({...r,fallback(t,e){const n=getComputedStyle(t),o="none"===n.transform?"":n.transform;return{...r,css:t=>`\n                transform: ${o} scale(${t});\n                opacity: ${t}\n              `}}});return[o,r,l,c,function(t,e){e.potted=t,n(0,o)},function(t,e){e.potted=t,n(0,o)}]}return new class extends pt{constructor(t){super(),dt(this,t,zt,At,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
