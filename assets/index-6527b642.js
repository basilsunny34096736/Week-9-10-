(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ue={},gr=[],rn=()=>{},Cp=()=>!1,Fa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zc=t=>t.startsWith("onUpdate:"),ht=Object.assign,Qc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gy=Object.prototype.hasOwnProperty,Ve=(t,e)=>Gy.call(t,e),he=Array.isArray,_r=t=>Ji(t)==="[object Map]",Br=t=>Ji(t)==="[object Set]",nd=t=>Ji(t)==="[object Date]",_e=t=>typeof t=="function",nt=t=>typeof t=="string",Cn=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Pp=t=>(Be(t)||_e(t))&&_e(t.then)&&_e(t.catch),kp=Object.prototype.toString,Ji=t=>kp.call(t),Ky=t=>Ji(t).slice(8,-1),Np=t=>Ji(t)==="[object Object]",Yc=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ei=Kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ua=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zy=/-\w/g,Xt=Ua(t=>t.replace(zy,e=>e.slice(1).toUpperCase())),Qy=/\B([A-Z])/g,Ps=Ua(t=>t.replace(Qy,"-$1").toLowerCase()),Ba=Ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vl=Ua(t=>t?`on${Ba(t)}`:""),ps=(t,e)=>!Object.is(t,e),jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vp=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ra=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let sd;const $a=()=>sd||(sd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jc(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=nt(s)?Zy(s):Jc(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(nt(t)||Be(t))return t}const Yy=/;(?![^(]*\))/g,Jy=/:([^]+)/,Xy=/\/\*[^]*?\*\//g;function Zy(t){const e={};return t.replace(Xy,"").split(Yy).forEach(n=>{if(n){const s=n.split(Jy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ln(t){let e="";if(nt(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const s=ln(t[n]);s&&(e+=s+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ev="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tv=Kc(ev);function Dp(t){return!!t||t===""}function nv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Xi(t[s],e[s]);return n}function Xi(t,e){if(t===e)return!0;let n=nd(t),s=nd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Cn(t),s=Cn(e),n||s)return t===e;if(n=he(t),s=he(e),n||s)return n&&s?nv(t,e):!1;if(n=Be(t),s=Be(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Xi(t[o],e[o]))return!1}}return String(t)===String(e)}function Xc(t,e){return t.findIndex(n=>Xi(n,e))}const Op=t=>!!(t&&t.__v_isRef===!0),$=t=>nt(t)?t:t==null?"":he(t)||Be(t)&&(t.toString===kp||!_e(t.toString))?Op(t)?$(t.value):JSON.stringify(t,xp,2):String(t),xp=(t,e)=>Op(e)?xp(t,e.value):_r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Dl(s,i)+" =>"]=r,n),{})}:Br(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Dl(n))}:Cn(e)?Dl(e):Be(e)&&!he(e)&&!Np(e)?String(e):e,Dl=(t,e="")=>{var n;return Cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class sv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){++this._on===1&&(this.prevScope=Ft,Ft=this)}off(){this._on>0&&--this._on===0&&(Ft=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function rv(){return Ft}let $e;const Ol=new WeakSet;class Lp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ol.has(this)&&(Ol.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rd(this),Up(this);const e=$e,n=on;$e=this,on=!0;try{return this.fn()}finally{Bp(this),$e=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)tu(e);this.deps=this.depsTail=void 0,rd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ol.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rc(this)&&this.run()}get dirty(){return rc(this)}}let Mp=0,wi,bi;function Fp(t,e=!1){if(t.flags|=8,e){t.next=bi,bi=t;return}t.next=wi,wi=t}function Zc(){Mp++}function eu(){if(--Mp>0)return;if(bi){let e=bi;for(bi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;wi;){let e=wi;for(wi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Up(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bp(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),tu(s),iv(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function rc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($p(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $p(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===xi)||(t.globalVersion=xi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!rc(t))))return;t.flags|=2;const e=t.dep,n=$e,s=on;$e=t,on=!0;try{Up(t);const r=t.fn(t._value);(e.version===0||ps(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{$e=n,on=s,Bp(t),t.flags&=-3}}function tu(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)tu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function iv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const jp=[];function jn(){jp.push(on),on=!1}function qn(){const t=jp.pop();on=t===void 0?!0:t}function rd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let xi=0;class ov{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!$e||!on||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new ov($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,qp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=s)}return n}trigger(e){this.version++,xi++,this.notify(e)}notify(e){Zc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{eu()}}}function qp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)qp(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ic=new WeakMap,Gs=Symbol(""),oc=Symbol(""),Li=Symbol("");function It(t,e,n){if(on&&$e){let s=ic.get(t);s||ic.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new nu),r.map=s,r.key=n),r.track()}}function Ln(t,e,n,s,r,i){const o=ic.get(t);if(!o){xi++;return}const l=c=>{c&&c.trigger()};if(Zc(),e==="clear")o.forEach(l);else{const c=he(t),u=c&&Yc(n);if(c&&n==="length"){const f=Number(s);o.forEach((p,g)=>{(g==="length"||g===Li||!Cn(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Li)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Gs)),_r(t)&&l(o.get(oc)));break;case"delete":c||(l(o.get(Gs)),_r(t)&&l(o.get(oc)));break;case"set":_r(t)&&l(o.get(Gs));break}}eu()}function lr(t){const e=Ne(t);return e===t?e:(It(e,"iterate",Li),Jt(t)?e:e.map(mt))}function ja(t){return It(t=Ne(t),"iterate",Li),t}const av={__proto__:null,[Symbol.iterator](){return xl(this,Symbol.iterator,mt)},concat(...t){return lr(this).concat(...t.map(e=>he(e)?lr(e):e))},entries(){return xl(this,"entries",t=>(t[1]=mt(t[1]),t))},every(t,e){return Dn(this,"every",t,e,void 0,arguments)},filter(t,e){return Dn(this,"filter",t,e,n=>n.map(mt),arguments)},find(t,e){return Dn(this,"find",t,e,mt,arguments)},findIndex(t,e){return Dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Dn(this,"findLast",t,e,mt,arguments)},findLastIndex(t,e){return Dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ll(this,"includes",t)},indexOf(...t){return Ll(this,"indexOf",t)},join(t){return lr(this).join(t)},lastIndexOf(...t){return Ll(this,"lastIndexOf",t)},map(t,e){return Dn(this,"map",t,e,void 0,arguments)},pop(){return ui(this,"pop")},push(...t){return ui(this,"push",t)},reduce(t,...e){return id(this,"reduce",t,e)},reduceRight(t,...e){return id(this,"reduceRight",t,e)},shift(){return ui(this,"shift")},some(t,e){return Dn(this,"some",t,e,void 0,arguments)},splice(...t){return ui(this,"splice",t)},toReversed(){return lr(this).toReversed()},toSorted(t){return lr(this).toSorted(t)},toSpliced(...t){return lr(this).toSpliced(...t)},unshift(...t){return ui(this,"unshift",t)},values(){return xl(this,"values",mt)}};function xl(t,e,n){const s=ja(t),r=s[e]();return s!==t&&!Jt(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const lv=Array.prototype;function Dn(t,e,n,s,r,i){const o=ja(t),l=o!==t&&!Jt(t),c=o[e];if(c!==lv[e]){const p=c.apply(t,i);return l?mt(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,mt(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,u,s);return l&&r?r(f):f}function id(t,e,n,s){const r=ja(t);let i=n;return r!==t&&(Jt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,mt(l),c,t)}),r[e](i,...s)}function Ll(t,e,n){const s=Ne(t);It(s,"iterate",Li);const r=s[e](...n);return(r===-1||r===!1)&&iu(n[0])?(n[0]=Ne(n[0]),s[e](...n)):r}function ui(t,e,n=[]){jn(),Zc();const s=Ne(t)[e].apply(t,n);return eu(),qn(),s}const cv=Kc("__proto__,__v_isRef,__isVue"),Hp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn));function uv(t){Cn(t)||(t=String(t));const e=Ne(this);return It(e,"has",t),e.hasOwnProperty(t)}class Wp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Ev:Qp:i?zp:Kp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=he(e);if(!r){let c;if(o&&(c=av[n]))return c;if(n==="hasOwnProperty")return uv}const l=Reflect.get(e,n,St(e)?e:s);if((Cn(n)?Hp.has(n):cv(n))||(r||It(e,"get",n),i))return l;if(St(l)){const c=o&&Yc(n)?l:l.value;return r&&Be(c)?lc(c):c}return Be(l)?r?lc(l):Zi(l):l}}class Gp extends Wp{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Es(i);if(!Jt(s)&&!Es(s)&&(i=Ne(i),s=Ne(s)),!he(e)&&St(i)&&!St(s))return c||(i.value=s),!0}const o=he(e)&&Yc(n)?Number(n)<e.length:Ve(e,n),l=Reflect.set(e,n,s,St(e)?e:r);return e===Ne(r)&&(o?ps(s,i)&&Ln(e,"set",n,s):Ln(e,"add",n,s)),l}deleteProperty(e,n){const s=Ve(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Ln(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Cn(n)||!Hp.has(n))&&It(e,"has",n),s}ownKeys(e){return It(e,"iterate",he(e)?"length":Gs),Reflect.ownKeys(e)}}class hv extends Wp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const dv=new Gp,fv=new hv,pv=new Gp(!0);const ac=t=>t,ko=t=>Reflect.getPrototypeOf(t);function mv(t,e,n){return function(...s){const r=this.__v_raw,i=Ne(r),o=_r(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),f=n?ac:e?ia:mt;return!e&&It(i,"iterate",c?oc:Gs),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function No(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function gv(t,e){const n={get(r){const i=this.__v_raw,o=Ne(i),l=Ne(r);t||(ps(r,l)&&It(o,"get",r),It(o,"get",l));const{has:c}=ko(o),u=e?ac:t?ia:mt;if(c.call(o,r))return u(i.get(r));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&It(Ne(r),"iterate",Gs),r.size},has(r){const i=this.__v_raw,o=Ne(i),l=Ne(r);return t||(ps(r,l)&&It(o,"has",r),It(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=Ne(l),u=e?ac:t?ia:mt;return!t&&It(c,"iterate",Gs),l.forEach((f,p)=>r.call(i,u(f),u(p),o))}};return ht(n,t?{add:No("add"),set:No("set"),delete:No("delete"),clear:No("clear")}:{add(r){!e&&!Jt(r)&&!Es(r)&&(r=Ne(r));const i=Ne(this);return ko(i).has.call(i,r)||(i.add(r),Ln(i,"add",r,r)),this},set(r,i){!e&&!Jt(i)&&!Es(i)&&(i=Ne(i));const o=Ne(this),{has:l,get:c}=ko(o);let u=l.call(o,r);u||(r=Ne(r),u=l.call(o,r));const f=c.call(o,r);return o.set(r,i),u?ps(i,f)&&Ln(o,"set",r,i):Ln(o,"add",r,i),this},delete(r){const i=Ne(this),{has:o,get:l}=ko(i);let c=o.call(i,r);c||(r=Ne(r),c=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&Ln(i,"delete",r,void 0),u},clear(){const r=Ne(this),i=r.size!==0,o=r.clear();return i&&Ln(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=mv(r,t,e)}),n}function su(t,e){const n=gv(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ve(n,r)&&r in s?n:s,r,i)}const _v={get:su(!1,!1)},yv={get:su(!1,!0)},vv={get:su(!0,!1)};const Kp=new WeakMap,zp=new WeakMap,Qp=new WeakMap,Ev=new WeakMap;function wv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bv(t){return t.__v_skip||!Object.isExtensible(t)?0:wv(Ky(t))}function Zi(t){return Es(t)?t:ru(t,!1,dv,_v,Kp)}function Yp(t){return ru(t,!1,pv,yv,zp)}function lc(t){return ru(t,!0,fv,vv,Qp)}function ru(t,e,n,s,r){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=bv(t);if(i===0)return t;const o=r.get(t);if(o)return o;const l=new Proxy(t,i===2?s:n);return r.set(t,l),l}function yr(t){return Es(t)?yr(t.__v_raw):!!(t&&t.__v_isReactive)}function Es(t){return!!(t&&t.__v_isReadonly)}function Jt(t){return!!(t&&t.__v_isShallow)}function iu(t){return t?!!t.__v_raw:!1}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function Tv(t){return!Ve(t,"__v_skip")&&Object.isExtensible(t)&&Vp(t,"__v_skip",!0),t}const mt=t=>Be(t)?Zi(t):t,ia=t=>Be(t)?lc(t):t;function St(t){return t?t.__v_isRef===!0:!1}function Ae(t){return Jp(t,!1)}function Iv(t){return Jp(t,!0)}function Jp(t,e){return St(t)?t:new Av(t,e)}class Av{constructor(e,n){this.dep=new nu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ne(e),this._value=n?e:mt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Jt(e)||Es(e);e=s?e:Ne(e),ps(e,n)&&(this._rawValue=e,this._value=s?e:mt(e),this.dep.trigger())}}function Ke(t){return St(t)?t.value:t}const Rv={get:(t,e,n)=>e==="__v_raw"?t:Ke(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return St(r)&&!St(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Xp(t){return yr(t)?t:new Proxy(t,Rv)}class Sv{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new nu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Fp(this,!0),!0}get value(){const e=this.dep.track();return $p(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cv(t,e,n=!1){let s,r;return _e(t)?s=t:(s=t.get,r=t.set),new Sv(s,r,n)}const Vo={},oa=new WeakMap;let js;function Pv(t,e=!1,n=js){if(n){let s=oa.get(n);s||oa.set(n,s=[]),s.push(t)}}function kv(t,e,n=Ue){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,u=X=>r?X:Jt(X)||r===!1||r===0?Mn(X,1):Mn(X);let f,p,g,y,k=!1,V=!1;if(St(t)?(p=()=>t.value,k=Jt(t)):yr(t)?(p=()=>u(t),k=!0):he(t)?(V=!0,k=t.some(X=>yr(X)||Jt(X)),p=()=>t.map(X=>{if(St(X))return X.value;if(yr(X))return u(X);if(_e(X))return c?c(X,2):X()})):_e(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){jn();try{g()}finally{qn()}}const X=js;js=f;try{return c?c(t,3,[y]):t(y)}finally{js=X}}:p=rn,e&&r){const X=p,G=r===!0?1/0:r;p=()=>Mn(X(),G)}const O=rv(),K=()=>{f.stop(),O&&O.active&&Qc(O.effects,f)};if(i&&e){const X=e;e=(...G)=>{X(...G),K()}}let H=V?new Array(t.length).fill(Vo):Vo;const z=X=>{if(!(!(f.flags&1)||!f.dirty&&!X))if(e){const G=f.run();if(r||k||(V?G.some((U,w)=>ps(U,H[w])):ps(G,H))){g&&g();const U=js;js=f;try{const w=[G,H===Vo?void 0:V&&H[0]===Vo?[]:H,y];H=G,c?c(e,3,w):e(...w)}finally{js=U}}}else f.run()};return l&&l(z),f=new Lp(p),f.scheduler=o?()=>o(z,!1):z,y=X=>Pv(X,!1,f),g=f.onStop=()=>{const X=oa.get(f);if(X){if(c)c(X,4);else for(const G of X)G();oa.delete(f)}},e?s?z(!0):H=f.run():o?o(z.bind(null,!0),!0):f.run(),K.pause=f.pause.bind(f),K.resume=f.resume.bind(f),K.stop=K,K}function Mn(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,St(t))Mn(t.value,e,n);else if(he(t))for(let s=0;s<t.length;s++)Mn(t[s],e,n);else if(Br(t)||_r(t))t.forEach(s=>{Mn(s,e,n)});else if(Np(t)){for(const s in t)Mn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Mn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eo(t,e,n,s){try{return s?t(...s):t()}catch(r){qa(r,e,n)}}function Pn(t,e,n,s){if(_e(t)){const r=eo(t,e,n,s);return r&&Pp(r)&&r.catch(i=>{qa(i,e,n)}),r}if(he(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Pn(t[i],e,n,s));return r}}function qa(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ue;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){jn(),eo(i,null,10,[t,c,u]),qn();return}}Nv(t,n,r,s,o)}function Nv(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Dt=[];let gn=-1;const vr=[];let is=null,cr=0;const Zp=Promise.resolve();let aa=null;function ou(t){const e=aa||Zp;return t?e.then(this?t.bind(this):t):e}function Vv(t){let e=gn+1,n=Dt.length;for(;e<n;){const s=e+n>>>1,r=Dt[s],i=Mi(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function au(t){if(!(t.flags&1)){const e=Mi(t),n=Dt[Dt.length-1];!n||!(t.flags&2)&&e>=Mi(n)?Dt.push(t):Dt.splice(Vv(e),0,t),t.flags|=1,em()}}function em(){aa||(aa=Zp.then(nm))}function Dv(t){he(t)?vr.push(...t):is&&t.id===-1?is.splice(cr+1,0,t):t.flags&1||(vr.push(t),t.flags|=1),em()}function od(t,e,n=gn+1){for(;n<Dt.length;n++){const s=Dt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Dt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function tm(t){if(vr.length){const e=[...new Set(vr)].sort((n,s)=>Mi(n)-Mi(s));if(vr.length=0,is){is.push(...e);return}for(is=e,cr=0;cr<is.length;cr++){const n=is[cr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}is=null,cr=0}}const Mi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function nm(t){const e=rn;try{for(gn=0;gn<Dt.length;gn++){const n=Dt[gn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),eo(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;gn<Dt.length;gn++){const n=Dt[gn];n&&(n.flags&=-2)}gn=-1,Dt.length=0,tm(),aa=null,(Dt.length||vr.length)&&nm()}}let Kt=null,sm=null;function la(t){const e=Kt;return Kt=t,sm=t&&t.type.__scopeId||null,e}function bt(t,e=Kt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ha(-1);const i=la(e);let o;try{o=t(...r)}finally{la(i),s._d&&ha(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ce(t,e){if(Kt===null)return t;const n=Ka(Kt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=Ue]=e[r];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&Mn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Bs(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(jn(),Pn(c,n,8,[t.el,l,t,e]),qn())}}const Ov=Symbol("_vte"),xv=t=>t.__isTeleport,Lv=Symbol("_leaveCb");function lu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function rm(t,e){return _e(t)?(()=>ht({name:t.name},e,{setup:t}))():t}function im(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ca=new WeakMap;function Ti(t,e,n,s,r=!1){if(he(t)){t.forEach((k,V)=>Ti(k,e&&(he(e)?e[V]:e),n,s,r));return}if(Ii(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ti(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Ka(s.component):s.el,o=r?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ue?l.refs={}:l.refs,p=l.setupState,g=Ne(p),y=p===Ue?Cp:k=>Ve(g,k);if(u!=null&&u!==c){if(ad(e),nt(u))f[u]=null,y(u)&&(p[u]=null);else if(St(u)){u.value=null;const k=e;k.k&&(f[k.k]=null)}}if(_e(c))eo(c,l,12,[o,f]);else{const k=nt(c),V=St(c);if(k||V){const O=()=>{if(t.f){const K=k?y(c)?p[c]:f[c]:c.value;if(r)he(K)&&Qc(K,i);else if(he(K))K.includes(i)||K.push(i);else if(k)f[c]=[i],y(c)&&(p[c]=f[c]);else{const H=[i];c.value=H,t.k&&(f[t.k]=H)}}else k?(f[c]=o,y(c)&&(p[c]=o)):V&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const K=()=>{O(),ca.delete(t)};K.id=-1,ca.set(t,K),Wt(K,n)}else ad(t),O()}}}function ad(t){const e=ca.get(t);e&&(e.flags|=8,ca.delete(t))}$a().requestIdleCallback;$a().cancelIdleCallback;const Ii=t=>!!t.type.__asyncLoader,om=t=>t.type.__isKeepAlive;function Mv(t,e){am(t,"a",e)}function Fv(t,e){am(t,"da",e)}function am(t,e,n=Rt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ha(e,s,n),n){let r=n.parent;for(;r&&r.parent;)om(r.parent.vnode)&&Uv(s,e,n,r),r=r.parent}}function Uv(t,e,n,s){const r=Ha(e,t,s,!0);no(()=>{Qc(s[e],r)},n)}function Ha(t,e,n=Rt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{jn();const l=so(n),c=Pn(e,n,t,o);return l(),qn(),c});return s?r.unshift(i):r.push(i),i}}const zn=t=>(e,n=Rt)=>{(!Ui||t==="sp")&&Ha(t,(...s)=>e(...s),n)},Bv=zn("bm"),to=zn("m"),$v=zn("bu"),jv=zn("u"),qv=zn("bum"),no=zn("um"),Hv=zn("sp"),Wv=zn("rtg"),Gv=zn("rtc");function Kv(t,e=Rt){Ha("ec",t,e)}const lm="components";function cu(t,e){return Qv(lm,t,!0,e)||t}const zv=Symbol.for("v-ndc");function Qv(t,e,n=!0,s=!1){const r=Kt||Rt;if(r){const i=r.type;if(t===lm){const l=FE(i,!1);if(l&&(l===e||l===Xt(e)||l===Ba(Xt(e))))return i}const o=ld(r[t]||i[t],e)||ld(r.appContext[t],e);return!o&&s?i:o}}function ld(t,e){return t&&(t[e]||t[Xt(e)]||t[Ba(Xt(e))])}function Sr(t,e,n,s){let r;const i=n&&n[s],o=he(t);if(o||nt(t)){const l=o&&yr(t);let c=!1,u=!1;l&&(c=!Jt(t),u=Es(t),t=ja(t)),r=new Array(t.length);for(let f=0,p=t.length;f<p;f++)r[f]=e(c?u?ia(mt(t[f])):mt(t[f]):t[f],f,void 0,i&&i[f])}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i&&i[l])}else if(Be(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i&&i[c]));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];r[c]=e(t[f],f,c,i&&i[c])}}else r=[];return n&&(n[s]=r),r}const cc=t=>t?Sm(t)?Ka(t):cc(t.parent):null,Ai=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cc(t.parent),$root:t=>cc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>uu(t),$forceUpdate:t=>t.f||(t.f=()=>{au(t.update)}),$nextTick:t=>t.n||(t.n=ou.bind(t.proxy)),$watch:t=>gE.bind(t)}),Ml=(t,e)=>t!==Ue&&!t.__isScriptSetup&&Ve(t,e),Yv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ml(s,e))return o[e]=1,s[e];if(r!==Ue&&Ve(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Ve(u,e))return o[e]=3,i[e];if(n!==Ue&&Ve(n,e))return o[e]=4,n[e];uc&&(o[e]=0)}}const f=Ai[e];let p,g;if(f)return e==="$attrs"&&It(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ue&&Ve(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Ve(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ml(r,e)?(r[e]=n,!0):s!==Ue&&Ve(s,e)?(s[e]=n,!0):Ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:o}},l){let c,u;return!!(n[l]||t!==Ue&&l[0]!=="$"&&Ve(t,l)||Ml(e,l)||(c=i[0])&&Ve(c,l)||Ve(s,l)||Ve(Ai,l)||Ve(r.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cd(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let uc=!0;function Jv(t){const e=uu(t),n=t.proxy,s=t.ctx;uc=!1,e.beforeCreate&&ud(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:y,updated:k,activated:V,deactivated:O,beforeDestroy:K,beforeUnmount:H,destroyed:z,unmounted:X,render:G,renderTracked:U,renderTriggered:w,errorCaptured:E,serverPrefetch:I,expose:R,inheritAttrs:A,components:C,directives:b,filters:Je}=e;if(u&&Xv(u,s,null),o)for(const Pe in o){const Ie=o[Pe];_e(Ie)&&(s[Pe]=Ie.bind(n))}if(r){const Pe=r.call(n,n);Be(Pe)&&(t.data=Zi(Pe))}if(uc=!0,i)for(const Pe in i){const Ie=i[Pe],Lt=_e(Ie)?Ie.bind(n,n):_e(Ie.get)?Ie.get.bind(n,n):rn,dn=!_e(Ie)&&_e(Ie.set)?Ie.set.bind(n):rn,jt=xt({get:Lt,set:dn});Object.defineProperty(s,Pe,{enumerable:!0,configurable:!0,get:()=>jt.value,set:dt=>jt.value=dt})}if(l)for(const Pe in l)cm(l[Pe],s,n,Pe);if(c){const Pe=_e(c)?c.call(n):c;Reflect.ownKeys(Pe).forEach(Ie=>{qo(Ie,Pe[Ie])})}f&&ud(f,t,"c");function Xe(Pe,Ie){he(Ie)?Ie.forEach(Lt=>Pe(Lt.bind(n))):Ie&&Pe(Ie.bind(n))}if(Xe(Bv,p),Xe(to,g),Xe($v,y),Xe(jv,k),Xe(Mv,V),Xe(Fv,O),Xe(Kv,E),Xe(Gv,U),Xe(Wv,w),Xe(qv,H),Xe(no,X),Xe(Hv,I),he(R))if(R.length){const Pe=t.exposed||(t.exposed={});R.forEach(Ie=>{Object.defineProperty(Pe,Ie,{get:()=>n[Ie],set:Lt=>n[Ie]=Lt,enumerable:!0})})}else t.exposed||(t.exposed={});G&&t.render===rn&&(t.render=G),A!=null&&(t.inheritAttrs=A),C&&(t.components=C),b&&(t.directives=b),I&&im(t)}function Xv(t,e,n=rn){he(t)&&(t=hc(t));for(const s in t){const r=t[s];let i;Be(r)?"default"in r?i=En(r.from||s,r.default,!0):i=En(r.from||s):i=En(r),St(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function ud(t,e,n){Pn(he(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function cm(t,e,n,s){let r=s.includes(".")?bm(n,s):()=>n[s];if(nt(t)){const i=e[t];_e(i)&&Ho(r,i)}else if(_e(t))Ho(r,t.bind(n));else if(Be(t))if(he(t))t.forEach(i=>cm(i,e,n,s));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&Ho(r,i,t)}}function uu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>ua(c,u,o,!0)),ua(c,e,o)),Be(e)&&i.set(e,c),c}function ua(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ua(t,i,n,!0),r&&r.forEach(o=>ua(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Zv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Zv={data:hd,props:dd,emits:dd,methods:pi,computed:pi,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:pi,directives:pi,watch:tE,provide:hd,inject:eE};function hd(t,e){return e?t?function(){return ht(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function eE(t,e){return pi(hc(t),hc(e))}function hc(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Nt(t,e){return t?[...new Set([].concat(t,e))]:e}function pi(t,e){return t?ht(Object.create(null),t,e):e}function dd(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:ht(Object.create(null),cd(t),cd(e??{})):e}function tE(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const s in e)n[s]=Nt(t[s],e[s]);return n}function um(){return{app:null,config:{isNativeTag:Cp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nE=0;function sE(t,e){return function(s,r=null){_e(s)||(s=ht({},s)),r!=null&&!Be(r)&&(r=null);const i=um(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:nE++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:BE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&_e(f.install)?(o.add(f),f.install(u,...p)):_e(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!c){const y=u._ceVNode||De(s,r);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(y,f):t(y,f,g),c=!0,u._container=f,f.__vue_app__=u,Ka(y.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Pn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Er;Er=u;try{return f()}finally{Er=p}}};return u}}let Er=null;function qo(t,e){if(Rt){let n=Rt.provides;const s=Rt.parent&&Rt.parent.provides;s===n&&(n=Rt.provides=Object.create(s)),n[t]=e}}function En(t,e,n=!1){const s=DE();if(s||Er){let r=Er?Er._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&_e(e)?e.call(s&&s.proxy):e}}const hm={},dm=()=>Object.create(hm),fm=t=>Object.getPrototypeOf(t)===hm;function rE(t,e,n,s=!1){const r={},i=dm();t.propsDefaults=Object.create(null),pm(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Yp(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function iE(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Ne(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Wa(t.emitsOptions,g))continue;const y=e[g];if(c)if(Ve(i,g))y!==i[g]&&(i[g]=y,u=!0);else{const k=Xt(g);r[k]=dc(c,l,k,y,t,!1)}else y!==i[g]&&(i[g]=y,u=!0)}}}else{pm(t,e,r,i)&&(u=!0);let f;for(const p in l)(!e||!Ve(e,p)&&((f=Ps(p))===p||!Ve(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(r[p]=dc(c,l,p,void 0,t,!0)):delete r[p]);if(i!==l)for(const p in i)(!e||!Ve(e,p))&&(delete i[p],u=!0)}u&&Ln(t.attrs,"set","")}function pm(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ei(c))continue;const u=e[c];let f;r&&Ve(r,f=Xt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Wa(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Ne(n),u=l||Ue;for(let f=0;f<i.length;f++){const p=i[f];n[p]=dc(r,c,p,u[p],t,!Ve(u,p))}}return o}function dc(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=Ve(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const f=so(r);s=u[n]=c.call(null,e),f()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Ps(n))&&(s=!0))}return s}const oE=new WeakMap;function mm(t,e,n=!1){const s=n?oE:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const f=p=>{c=!0;const[g,y]=mm(p,e,!0);ht(o,g),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Be(t)&&s.set(t,gr),gr;if(he(i))for(let f=0;f<i.length;f++){const p=Xt(i[f]);fd(p)&&(o[p]=Ue)}else if(i)for(const f in i){const p=Xt(f);if(fd(p)){const g=i[f],y=o[p]=he(g)||_e(g)?{type:g}:ht({},g),k=y.type;let V=!1,O=!0;if(he(k))for(let K=0;K<k.length;++K){const H=k[K],z=_e(H)&&H.name;if(z==="Boolean"){V=!0;break}else z==="String"&&(O=!1)}else V=_e(k)&&k.name==="Boolean";y[0]=V,y[1]=O,(V||Ve(y,"default"))&&l.push(p)}}const u=[o,l];return Be(t)&&s.set(t,u),u}function fd(t){return t[0]!=="$"&&!Ei(t)}const hu=t=>t==="_"||t==="_ctx"||t==="$stable",du=t=>he(t)?t.map(yn):[yn(t)],aE=(t,e,n)=>{if(e._n)return e;const s=bt((...r)=>du(e(...r)),n);return s._c=!1,s},gm=(t,e,n)=>{const s=t._ctx;for(const r in t){if(hu(r))continue;const i=t[r];if(_e(i))e[r]=aE(r,i,s);else if(i!=null){const o=du(i);e[r]=()=>o}}},_m=(t,e)=>{const n=du(e);t.slots.default=()=>n},ym=(t,e,n)=>{for(const s in e)(n||!hu(s))&&(t[s]=e[s])},lE=(t,e,n)=>{const s=t.slots=dm();if(t.vnode.shapeFlag&32){const r=e._;r?(ym(s,e,n),n&&Vp(s,"_",r,!0)):gm(e,s)}else e&&_m(t,e)},cE=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ue;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:ym(r,e,n):(i=!e.$stable,gm(e,r)),o=e}else e&&(_m(t,e),o={default:1});if(i)for(const l in r)!hu(l)&&o[l]==null&&delete r[l]},Wt=IE;function uE(t){return hE(t)}function hE(t,e){const n=$a();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:y=rn,insertStaticContent:k}=t,V=(v,T,P,B=null,D=null,F=null,Y=void 0,W=null,j=!!T.dynamicChildren)=>{if(v===T)return;v&&!hi(v,T)&&(B=L(v),dt(v,D,F,!0),v=null),T.patchFlag===-2&&(j=!1,T.dynamicChildren=null);const{type:q,ref:ce,shapeFlag:te}=T;switch(q){case Ga:O(v,T,P,B);break;case ws:K(v,T,P,B);break;case Wo:v==null&&H(T,P,B,Y);break;case Ot:C(v,T,P,B,D,F,Y,W,j);break;default:te&1?G(v,T,P,B,D,F,Y,W,j):te&6?b(v,T,P,B,D,F,Y,W,j):(te&64||te&128)&&q.process(v,T,P,B,D,F,Y,W,j,oe)}ce!=null&&D?Ti(ce,v&&v.ref,F,T||v,!T):ce==null&&v&&v.ref!=null&&Ti(v.ref,null,F,v,!0)},O=(v,T,P,B)=>{if(v==null)s(T.el=l(T.children),P,B);else{const D=T.el=v.el;T.children!==v.children&&u(D,T.children)}},K=(v,T,P,B)=>{v==null?s(T.el=c(T.children||""),P,B):T.el=v.el},H=(v,T,P,B)=>{[v.el,v.anchor]=k(v.children,T,P,B,v.el,v.anchor)},z=({el:v,anchor:T},P,B)=>{let D;for(;v&&v!==T;)D=g(v),s(v,P,B),v=D;s(T,P,B)},X=({el:v,anchor:T})=>{let P;for(;v&&v!==T;)P=g(v),r(v),v=P;r(T)},G=(v,T,P,B,D,F,Y,W,j)=>{T.type==="svg"?Y="svg":T.type==="math"&&(Y="mathml"),v==null?U(T,P,B,D,F,Y,W,j):I(v,T,D,F,Y,W,j)},U=(v,T,P,B,D,F,Y,W)=>{let j,q;const{props:ce,shapeFlag:te,transition:ae,dirs:ue}=v;if(j=v.el=o(v.type,F,ce&&ce.is,ce),te&8?f(j,v.children):te&16&&E(v.children,j,null,B,D,Fl(v,F),Y,W),ue&&Bs(v,null,B,"created"),w(j,v,v.scopeId,Y,B),ce){for(const xe in ce)xe!=="value"&&!Ei(xe)&&i(j,xe,null,ce[xe],F,B);"value"in ce&&i(j,"value",null,ce.value,F),(q=ce.onVnodeBeforeMount)&&mn(q,B,v)}ue&&Bs(v,null,B,"beforeMount");const Ee=dE(D,ae);Ee&&ae.beforeEnter(j),s(j,T,P),((q=ce&&ce.onVnodeMounted)||Ee||ue)&&Wt(()=>{q&&mn(q,B,v),Ee&&ae.enter(j),ue&&Bs(v,null,B,"mounted")},D)},w=(v,T,P,B,D)=>{if(P&&y(v,P),B)for(let F=0;F<B.length;F++)y(v,B[F]);if(D){let F=D.subTree;if(T===F||Im(F.type)&&(F.ssContent===T||F.ssFallback===T)){const Y=D.vnode;w(v,Y,Y.scopeId,Y.slotScopeIds,D.parent)}}},E=(v,T,P,B,D,F,Y,W,j=0)=>{for(let q=j;q<v.length;q++){const ce=v[q]=W?os(v[q]):yn(v[q]);V(null,ce,T,P,B,D,F,Y,W)}},I=(v,T,P,B,D,F,Y)=>{const W=T.el=v.el;let{patchFlag:j,dynamicChildren:q,dirs:ce}=T;j|=v.patchFlag&16;const te=v.props||Ue,ae=T.props||Ue;let ue;if(P&&$s(P,!1),(ue=ae.onVnodeBeforeUpdate)&&mn(ue,P,T,v),ce&&Bs(T,v,P,"beforeUpdate"),P&&$s(P,!0),(te.innerHTML&&ae.innerHTML==null||te.textContent&&ae.textContent==null)&&f(W,""),q?R(v.dynamicChildren,q,W,P,B,Fl(T,D),F):Y||Ie(v,T,W,null,P,B,Fl(T,D),F,!1),j>0){if(j&16)A(W,te,ae,P,D);else if(j&2&&te.class!==ae.class&&i(W,"class",null,ae.class,D),j&4&&i(W,"style",te.style,ae.style,D),j&8){const Ee=T.dynamicProps;for(let xe=0;xe<Ee.length;xe++){const Se=Ee[xe],vt=te[Se],at=ae[Se];(at!==vt||Se==="value")&&i(W,Se,vt,at,D,P)}}j&1&&v.children!==T.children&&f(W,T.children)}else!Y&&q==null&&A(W,te,ae,P,D);((ue=ae.onVnodeUpdated)||ce)&&Wt(()=>{ue&&mn(ue,P,T,v),ce&&Bs(T,v,P,"updated")},B)},R=(v,T,P,B,D,F,Y)=>{for(let W=0;W<T.length;W++){const j=v[W],q=T[W],ce=j.el&&(j.type===Ot||!hi(j,q)||j.shapeFlag&198)?p(j.el):P;V(j,q,ce,null,B,D,F,Y,!0)}},A=(v,T,P,B,D)=>{if(T!==P){if(T!==Ue)for(const F in T)!Ei(F)&&!(F in P)&&i(v,F,T[F],null,D,B);for(const F in P){if(Ei(F))continue;const Y=P[F],W=T[F];Y!==W&&F!=="value"&&i(v,F,W,Y,D,B)}"value"in P&&i(v,"value",T.value,P.value,D)}},C=(v,T,P,B,D,F,Y,W,j)=>{const q=T.el=v?v.el:l(""),ce=T.anchor=v?v.anchor:l("");let{patchFlag:te,dynamicChildren:ae,slotScopeIds:ue}=T;ue&&(W=W?W.concat(ue):ue),v==null?(s(q,P,B),s(ce,P,B),E(T.children||[],P,ce,D,F,Y,W,j)):te>0&&te&64&&ae&&v.dynamicChildren?(R(v.dynamicChildren,ae,P,D,F,Y,W),(T.key!=null||D&&T===D.subTree)&&vm(v,T,!0)):Ie(v,T,P,ce,D,F,Y,W,j)},b=(v,T,P,B,D,F,Y,W,j)=>{T.slotScopeIds=W,v==null?T.shapeFlag&512?D.ctx.activate(T,P,B,Y,j):Je(T,P,B,D,F,Y,j):Pt(v,T,j)},Je=(v,T,P,B,D,F,Y)=>{const W=v.component=VE(v,B,D);if(om(v)&&(W.ctx.renderer=oe),OE(W,!1,Y),W.asyncDep){if(D&&D.registerDep(W,Xe,Y),!v.el){const j=W.subTree=De(ws);K(null,j,T,P),v.placeholder=j.el}}else Xe(W,v,T,P,D,F,Y)},Pt=(v,T,P)=>{const B=T.component=v.component;if(bE(v,T,P))if(B.asyncDep&&!B.asyncResolved){Pe(B,T,P);return}else B.next=T,B.update();else T.el=v.el,B.vnode=T},Xe=(v,T,P,B,D,F,Y)=>{const W=()=>{if(v.isMounted){let{next:te,bu:ae,u:ue,parent:Ee,vnode:xe}=v;{const Et=Em(v);if(Et){te&&(te.el=xe.el,Pe(v,te,Y)),Et.asyncDep.then(()=>{v.isUnmounted||W()});return}}let Se=te,vt;$s(v,!1),te?(te.el=xe.el,Pe(v,te,Y)):te=xe,ae&&jo(ae),(vt=te.props&&te.props.onVnodeBeforeUpdate)&&mn(vt,Ee,te,xe),$s(v,!0);const at=Ul(v),Mt=v.subTree;v.subTree=at,V(Mt,at,p(Mt.el),L(Mt),v,D,F),te.el=at.el,Se===null&&TE(v,at.el),ue&&Wt(ue,D),(vt=te.props&&te.props.onVnodeUpdated)&&Wt(()=>mn(vt,Ee,te,xe),D)}else{let te;const{el:ae,props:ue}=T,{bm:Ee,m:xe,parent:Se,root:vt,type:at}=v,Mt=Ii(T);if($s(v,!1),Ee&&jo(Ee),!Mt&&(te=ue&&ue.onVnodeBeforeMount)&&mn(te,Se,T),$s(v,!0),ae&&Le){const Et=()=>{v.subTree=Ul(v),Le(ae,v.subTree,v,D,null)};Mt&&at.__asyncHydrate?at.__asyncHydrate(ae,v,Et):Et()}else{vt.ce&&vt.ce._def.shadowRoot!==!1&&vt.ce._injectChildStyle(at);const Et=v.subTree=Ul(v);V(null,Et,P,B,v,D,F),T.el=Et.el}if(xe&&Wt(xe,D),!Mt&&(te=ue&&ue.onVnodeMounted)){const Et=T;Wt(()=>mn(te,Se,Et),D)}(T.shapeFlag&256||Se&&Ii(Se.vnode)&&Se.vnode.shapeFlag&256)&&v.a&&Wt(v.a,D),v.isMounted=!0,T=P=B=null}};v.scope.on();const j=v.effect=new Lp(W);v.scope.off();const q=v.update=j.run.bind(j),ce=v.job=j.runIfDirty.bind(j);ce.i=v,ce.id=v.uid,j.scheduler=()=>au(ce),$s(v,!0),q()},Pe=(v,T,P)=>{T.component=v;const B=v.vnode.props;v.vnode=T,v.next=null,iE(v,T.props,B,P),cE(v,T.children,P),jn(),od(v),qn()},Ie=(v,T,P,B,D,F,Y,W,j=!1)=>{const q=v&&v.children,ce=v?v.shapeFlag:0,te=T.children,{patchFlag:ae,shapeFlag:ue}=T;if(ae>0){if(ae&128){dn(q,te,P,B,D,F,Y,W,j);return}else if(ae&256){Lt(q,te,P,B,D,F,Y,W,j);return}}ue&8?(ce&16&&yt(q,D,F),te!==q&&f(P,te)):ce&16?ue&16?dn(q,te,P,B,D,F,Y,W,j):yt(q,D,F,!0):(ce&8&&f(P,""),ue&16&&E(te,P,B,D,F,Y,W,j))},Lt=(v,T,P,B,D,F,Y,W,j)=>{v=v||gr,T=T||gr;const q=v.length,ce=T.length,te=Math.min(q,ce);let ae;for(ae=0;ae<te;ae++){const ue=T[ae]=j?os(T[ae]):yn(T[ae]);V(v[ae],ue,P,null,D,F,Y,W,j)}q>ce?yt(v,D,F,!0,!1,te):E(T,P,B,D,F,Y,W,j,te)},dn=(v,T,P,B,D,F,Y,W,j)=>{let q=0;const ce=T.length;let te=v.length-1,ae=ce-1;for(;q<=te&&q<=ae;){const ue=v[q],Ee=T[q]=j?os(T[q]):yn(T[q]);if(hi(ue,Ee))V(ue,Ee,P,null,D,F,Y,W,j);else break;q++}for(;q<=te&&q<=ae;){const ue=v[te],Ee=T[ae]=j?os(T[ae]):yn(T[ae]);if(hi(ue,Ee))V(ue,Ee,P,null,D,F,Y,W,j);else break;te--,ae--}if(q>te){if(q<=ae){const ue=ae+1,Ee=ue<ce?T[ue].el:B;for(;q<=ae;)V(null,T[q]=j?os(T[q]):yn(T[q]),P,Ee,D,F,Y,W,j),q++}}else if(q>ae)for(;q<=te;)dt(v[q],D,F,!0),q++;else{const ue=q,Ee=q,xe=new Map;for(q=Ee;q<=ae;q++){const ft=T[q]=j?os(T[q]):yn(T[q]);ft.key!=null&&xe.set(ft.key,q)}let Se,vt=0;const at=ae-Ee+1;let Mt=!1,Et=0;const nn=new Array(at);for(q=0;q<at;q++)nn[q]=0;for(q=ue;q<=te;q++){const ft=v[q];if(vt>=at){dt(ft,D,F,!0);continue}let lt;if(ft.key!=null)lt=xe.get(ft.key);else for(Se=Ee;Se<=ae;Se++)if(nn[Se-Ee]===0&&hi(ft,T[Se])){lt=Se;break}lt===void 0?dt(ft,D,F,!0):(nn[lt-Ee]=q+1,lt>=Et?Et=lt:Mt=!0,V(ft,T[lt],P,null,D,F,Y,W,j),vt++)}const rr=Mt?fE(nn):gr;for(Se=rr.length-1,q=at-1;q>=0;q--){const ft=Ee+q,lt=T[ft],Qr=T[ft+1],xs=ft+1<ce?Qr.el||Qr.placeholder:B;nn[q]===0?V(null,lt,P,xs,D,F,Y,W,j):Mt&&(Se<0||q!==rr[Se]?jt(lt,P,xs,2):Se--)}}},jt=(v,T,P,B,D=null)=>{const{el:F,type:Y,transition:W,children:j,shapeFlag:q}=v;if(q&6){jt(v.component.subTree,T,P,B);return}if(q&128){v.suspense.move(T,P,B);return}if(q&64){Y.move(v,T,P,oe);return}if(Y===Ot){s(F,T,P);for(let te=0;te<j.length;te++)jt(j[te],T,P,B);s(v.anchor,T,P);return}if(Y===Wo){z(v,T,P);return}if(B!==2&&q&1&&W)if(B===0)W.beforeEnter(F),s(F,T,P),Wt(()=>W.enter(F),D);else{const{leave:te,delayLeave:ae,afterLeave:ue}=W,Ee=()=>{v.ctx.isUnmounted?r(F):s(F,T,P)},xe=()=>{F._isLeaving&&F[Lv](!0),te(F,()=>{Ee(),ue&&ue()})};ae?ae(F,Ee,xe):xe()}else s(F,T,P)},dt=(v,T,P,B=!1,D=!1)=>{const{type:F,props:Y,ref:W,children:j,dynamicChildren:q,shapeFlag:ce,patchFlag:te,dirs:ae,cacheIndex:ue}=v;if(te===-2&&(D=!1),W!=null&&(jn(),Ti(W,null,P,v,!0),qn()),ue!=null&&(T.renderCache[ue]=void 0),ce&256){T.ctx.deactivate(v);return}const Ee=ce&1&&ae,xe=!Ii(v);let Se;if(xe&&(Se=Y&&Y.onVnodeBeforeUnmount)&&mn(Se,T,v),ce&6)tn(v.component,P,B);else{if(ce&128){v.suspense.unmount(P,B);return}Ee&&Bs(v,null,T,"beforeUnmount"),ce&64?v.type.remove(v,T,P,oe,B):q&&!q.hasOnce&&(F!==Ot||te>0&&te&64)?yt(q,T,P,!1,!0):(F===Ot&&te&384||!D&&ce&16)&&yt(j,T,P),B&&Vn(v)}(xe&&(Se=Y&&Y.onVnodeUnmounted)||Ee)&&Wt(()=>{Se&&mn(Se,T,v),Ee&&Bs(v,null,T,"unmounted")},P)},Vn=v=>{const{type:T,el:P,anchor:B,transition:D}=v;if(T===Ot){en(P,B);return}if(T===Wo){X(v);return}const F=()=>{r(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(v.shapeFlag&1&&D&&!D.persisted){const{leave:Y,delayLeave:W}=D,j=()=>Y(P,F);W?W(v.el,F,j):j()}else F()},en=(v,T)=>{let P;for(;v!==T;)P=g(v),r(v),v=P;r(T)},tn=(v,T,P)=>{const{bum:B,scope:D,job:F,subTree:Y,um:W,m:j,a:q}=v;pd(j),pd(q),B&&jo(B),D.stop(),F&&(F.flags|=8,dt(Y,v,T,P)),W&&Wt(W,T),Wt(()=>{v.isUnmounted=!0},T)},yt=(v,T,P,B=!1,D=!1,F=0)=>{for(let Y=F;Y<v.length;Y++)dt(v[Y],T,P,B,D)},L=v=>{if(v.shapeFlag&6)return L(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=g(v.anchor||v.el),P=T&&T[Ov];return P?g(P):T};let re=!1;const ee=(v,T,P)=>{v==null?T._vnode&&dt(T._vnode,null,null,!0):V(T._vnode||null,v,T,null,null,null,P),T._vnode=v,re||(re=!0,od(),tm(),re=!1)},oe={p:V,um:dt,m:jt,r:Vn,mt:Je,mc:E,pc:Ie,pbc:R,n:L,o:t};let ve,Le;return e&&([ve,Le]=e(oe)),{render:ee,hydrate:ve,createApp:sE(ee,ve)}}function Fl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $s({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function dE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vm(t,e,n=!1){const s=t.children,r=e.children;if(he(s)&&he(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=os(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&vm(o,l)),l.type===Ga&&l.patchFlag!==-1&&(l.el=o.el),l.type===ws&&!l.el&&(l.el=o.el)}}function fE(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Em(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Em(e)}function pd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const pE=Symbol.for("v-scx"),mE=()=>En(pE);function Ho(t,e,n){return wm(t,e,n)}function wm(t,e,n=Ue){const{immediate:s,deep:r,flush:i,once:o}=n,l=ht({},n),c=e&&s||!e&&i!=="post";let u;if(Ui){if(i==="sync"){const y=mE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=rn,y.resume=rn,y.pause=rn,y}}const f=Rt;l.call=(y,k,V)=>Pn(y,f,k,V);let p=!1;i==="post"?l.scheduler=y=>{Wt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,k)=>{k?y():au(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const g=kv(t,e,l);return Ui&&(u?u.push(g):c&&g()),g}function gE(t,e,n){const s=this.proxy,r=nt(t)?t.includes(".")?bm(s,t):()=>s[t]:t.bind(s,s);let i;_e(e)?i=e:(i=e.handler,n=e);const o=so(this),l=wm(r,i.bind(s),n);return o(),l}function bm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const _E=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Xt(e)}Modifiers`]||t[`${Ps(e)}Modifiers`];function yE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ue;let r=n;const i=e.startsWith("update:"),o=i&&_E(s,e.slice(7));o&&(o.trim&&(r=n.map(f=>nt(f)?f.trim():f)),o.number&&(r=n.map(ra)));let l,c=s[l=Vl(e)]||s[l=Vl(Xt(e))];!c&&i&&(c=s[l=Vl(Ps(e))]),c&&Pn(c,t,6,r);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Pn(u,t,6,r)}}const vE=new WeakMap;function Tm(t,e,n=!1){const s=n?vE:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=u=>{const f=Tm(u,e,!0);f&&(l=!0,ht(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Be(t)&&s.set(t,null),null):(he(i)?i.forEach(c=>o[c]=null):ht(o,i),Be(t)&&s.set(t,o),o)}function Wa(t,e){return!t||!Fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(t,e[0].toLowerCase()+e.slice(1))||Ve(t,Ps(e))||Ve(t,e))}function Ul(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:g,setupState:y,ctx:k,inheritAttrs:V}=t,O=la(t);let K,H;try{if(n.shapeFlag&4){const X=r||s,G=X;K=yn(u.call(G,X,f,p,y,g,k)),H=l}else{const X=e;K=yn(X.length>1?X(p,{attrs:l,slots:o,emit:c}):X(p,null)),H=e.props?l:EE(l)}}catch(X){Ri.length=0,qa(X,t,1),K=De(ws)}let z=K;if(H&&V!==!1){const X=Object.keys(H),{shapeFlag:G}=z;X.length&&G&7&&(i&&X.some(zc)&&(H=wE(H,i)),z=Cr(z,H,!1,!0))}return n.dirs&&(z=Cr(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&lu(z,n.transition),K=z,la(O),K}const EE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fa(n))&&((e||(e={}))[n]=t[n]);return e},wE=(t,e)=>{const n={};for(const s in t)(!zc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function bE(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?md(s,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==s[g]&&!Wa(u,g))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?md(s,o,u):!0:!!o;return!1}function md(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Wa(n,i))return!0}return!1}function TE({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Im=t=>t.__isSuspense;function IE(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):Dv(t)}const Ot=Symbol.for("v-fgt"),Ga=Symbol.for("v-txt"),ws=Symbol.for("v-cmt"),Wo=Symbol.for("v-stc"),Ri=[];let zt=null;function J(t=!1){Ri.push(zt=t?null:[])}function AE(){Ri.pop(),zt=Ri[Ri.length-1]||null}let Fi=1;function ha(t,e=!1){Fi+=t,t<0&&zt&&e&&(zt.hasOnce=!0)}function Am(t){return t.dynamicChildren=Fi>0?zt||gr:null,AE(),Fi>0&&zt&&zt.push(t),t}function Z(t,e,n,s,r,i){return Am(d(t,e,n,s,r,i,!0))}function RE(t,e,n,s,r){return Am(De(t,e,n,s,r,!0))}function da(t){return t?t.__v_isVNode===!0:!1}function hi(t,e){return t.type===e.type&&t.key===e.key}const Rm=({key:t})=>t??null,Go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||St(t)||_e(t)?{i:Kt,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,s=0,r=null,i=t===Ot?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rm(e),ref:e&&Go(e),scopeId:sm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Kt};return l?(fu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=nt(n)?8:16),Fi>0&&!o&&zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zt.push(c),c}const De=SE;function SE(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===zv)&&(t=ws),da(t)){const l=Cr(t,e,!0);return n&&fu(l,n),Fi>0&&!i&&zt&&(l.shapeFlag&6?zt[zt.indexOf(t)]=l:zt.push(l)),l.patchFlag=-2,l}if(UE(t)&&(t=t.__vccOpts),e){e=CE(e);let{class:l,style:c}=e;l&&!nt(l)&&(e.class=ln(l)),Be(c)&&(iu(c)&&!he(c)&&(c=ht({},c)),e.style=Jc(c))}const o=nt(t)?1:Im(t)?128:xv(t)?64:Be(t)?4:_e(t)?2:0;return d(t,e,n,s,r,o,i,!0)}function CE(t){return t?iu(t)||fm(t)?ht({},t):t:null}function Cr(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?PE(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Rm(u),ref:e&&e.ref?n&&i?he(i)?i.concat(Go(e)):[i,Go(e)]:Go(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cr(t.ssContent),ssFallback:t.ssFallback&&Cr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&lu(f,c.clone(f)),f}function se(t=" ",e=0){return De(Ga,null,t,e)}function fc(t,e){const n=De(Wo,null,t);return n.staticCount=e,n}function ge(t="",e=!1){return e?(J(),RE(ws,null,t)):De(ws,null,t)}function yn(t){return t==null||typeof t=="boolean"?De(ws):he(t)?De(Ot,null,t.slice()):da(t)?os(t):De(Ga,null,String(t))}function os(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cr(t)}function fu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),fu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!fm(e)?e._ctx=Kt:r===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:Kt},n=32):(e=String(e),s&64?(n=16,e=[se(e)]):n=8);t.children=e,t.shapeFlag|=n}function PE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ln([e.class,s.class]));else if(r==="style")e.style=Jc([e.style,s.style]);else if(Fa(r)){const i=e[r],o=s[r];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function mn(t,e,n,s=null){Pn(t,e,7,[n,s])}const kE=um();let NE=0;function VE(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||kE,i={uid:NE++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mm(s,r),emitsOptions:Tm(s,r),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:s.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yE.bind(null,i),t.ce&&t.ce(i),i}let Rt=null;const DE=()=>Rt||Kt;let fa,pc;{const t=$a(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};fa=e("__VUE_INSTANCE_SETTERS__",n=>Rt=n),pc=e("__VUE_SSR_SETTERS__",n=>Ui=n)}const so=t=>{const e=Rt;return fa(t),t.scope.on(),()=>{t.scope.off(),fa(e)}},gd=()=>{Rt&&Rt.scope.off(),fa(null)};function Sm(t){return t.vnode.shapeFlag&4}let Ui=!1;function OE(t,e=!1,n=!1){e&&pc(e);const{props:s,children:r}=t.vnode,i=Sm(t);rE(t,s,i,e),lE(t,r,n||e);const o=i?xE(t,e):void 0;return e&&pc(!1),o}function xE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Yv);const{setup:s}=n;if(s){jn();const r=t.setupContext=s.length>1?ME(t):null,i=so(t),o=eo(s,t,0,[t.props,r]),l=Pp(o);if(qn(),i(),(l||t.sp)&&!Ii(t)&&im(t),l){if(o.then(gd,gd),e)return o.then(c=>{_d(t,c,e)}).catch(c=>{qa(c,t,0)});t.asyncDep=o}else _d(t,o,e)}else Cm(t,e)}function _d(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=Xp(e)),Cm(t,n)}let yd;function Cm(t,e,n){const s=t.type;if(!t.render){if(!e&&yd&&!s.render){const r=s.template||uu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,u=ht(ht({isCustomElement:i,delimiters:l},o),c);s.render=yd(r,u)}}t.render=s.render||rn}{const r=so(t);jn();try{Jv(t)}finally{qn(),r()}}}const LE={get(t,e){return It(t,"get",""),t[e]}};function ME(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,LE),slots:t.slots,emit:t.emit,expose:e}}function Ka(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Xp(Tv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ai)return Ai[n](t)},has(e,n){return n in e||n in Ai}})):t.proxy}function FE(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function UE(t){return _e(t)&&"__vccOpts"in t}const xt=(t,e)=>Cv(t,e,Ui);function Pm(t,e,n){try{ha(-1);const s=arguments.length;return s===2?Be(e)&&!he(e)?da(e)?De(t,null,[e]):De(t,e):De(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&da(n)&&(n=[n]),De(t,e,n))}finally{ha(1)}}const BE="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mc;const vd=typeof window<"u"&&window.trustedTypes;if(vd)try{mc=vd.createPolicy("vue",{createHTML:t=>t})}catch{}const km=mc?t=>mc.createHTML(t):t=>t,$E="http://www.w3.org/2000/svg",jE="http://www.w3.org/1998/Math/MathML",xn=typeof document<"u"?document:null,Ed=xn&&xn.createElement("template"),qE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?xn.createElementNS($E,t):e==="mathml"?xn.createElementNS(jE,t):n?xn.createElement(t,{is:n}):xn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>xn.createTextNode(t),createComment:t=>xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ed.innerHTML=km(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Ed.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},HE=Symbol("_vtc");function WE(t,e,n){const s=t[HE];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wd=Symbol("_vod"),GE=Symbol("_vsh"),KE=Symbol(""),zE=/(?:^|;)\s*display\s*:/;function QE(t,e,n){const s=t.style,r=nt(n);let i=!1;if(n&&!r){if(e)if(nt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ko(s,l,"")}else for(const o in e)n[o]==null&&Ko(s,o,"");for(const o in n)o==="display"&&(i=!0),Ko(s,o,n[o])}else if(r){if(e!==n){const o=s[KE];o&&(n+=";"+o),s.cssText=n,i=zE.test(n)}}else e&&t.removeAttribute("style");wd in t&&(t[wd]=i?s.display:"",t[GE]&&(s.display="none"))}const bd=/\s*!important$/;function Ko(t,e,n){if(he(n))n.forEach(s=>Ko(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=YE(t,e);bd.test(n)?t.setProperty(Ps(s),n.replace(bd,""),"important"):t[s]=n}}const Td=["Webkit","Moz","ms"],Bl={};function YE(t,e){const n=Bl[e];if(n)return n;let s=Xt(e);if(s!=="filter"&&s in t)return Bl[e]=s;s=Ba(s);for(let r=0;r<Td.length;r++){const i=Td[r]+s;if(i in t)return Bl[e]=i}return e}const Id="http://www.w3.org/1999/xlink";function Ad(t,e,n,s,r,i=tv(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Id,e.slice(6,e.length)):t.setAttributeNS(Id,e,n):n==null||i&&!Dp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Cn(n)?String(n):n)}function Rd(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?km(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Dp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function ls(t,e,n,s){t.addEventListener(e,n,s)}function JE(t,e,n,s){t.removeEventListener(e,n,s)}const Sd=Symbol("_vei");function XE(t,e,n,s,r=null){const i=t[Sd]||(t[Sd]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=ZE(e);if(s){const u=i[e]=nw(s,r);ls(t,l,u,c)}else o&&(JE(t,l,o,c),i[e]=void 0)}}const Cd=/(?:Once|Passive|Capture)$/;function ZE(t){let e;if(Cd.test(t)){e={};let s;for(;s=t.match(Cd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ps(t.slice(2)),e]}let $l=0;const ew=Promise.resolve(),tw=()=>$l||(ew.then(()=>$l=0),$l=Date.now());function nw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Pn(sw(s,n.value),e,5,[s])};return n.value=t,n.attached=tw(),n}function sw(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Pd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rw=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?WE(t,s,o):e==="style"?QE(t,n,s):Fa(e)?zc(e)||XE(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):iw(t,e,s,o))?(Rd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ad(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!nt(s))?Rd(t,Xt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ad(t,e,s,o))};function iw(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pd(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Pd(e)&&nt(n)?!1:e in t}const Pr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>jo(e,n):e};function ow(t){t.target.composing=!0}function kd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Bn=Symbol("_assign"),Fe={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Bn]=Pr(r);const i=s||r.props&&r.props.type==="number";ls(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ra(l)),t[Bn](l)}),n&&ls(t,"change",()=>{t.value=t.value.trim()}),e||(ls(t,"compositionstart",ow),ls(t,"compositionend",kd),ls(t,"change",kd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Bn]=Pr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ra(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},aw={deep:!0,created(t,e,n){t[Bn]=Pr(n),ls(t,"change",()=>{const s=t._modelValue,r=Bi(t),i=t.checked,o=t[Bn];if(he(s)){const l=Xc(s,r),c=l!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(l,1),o(u)}}else if(Br(s)){const l=new Set(s);i?l.add(r):l.delete(r),o(l)}else o(Nm(t,i))})},mounted:Nd,beforeUpdate(t,e,n){t[Bn]=Pr(n),Nd(t,e,n)}};function Nd(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(he(e))r=Xc(e,s.props.value)>-1;else if(Br(e))r=e.has(s.props.value);else{if(e===n)return;r=Xi(e,Nm(t,!0))}t.checked!==r&&(t.checked=r)}const pa={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Br(e);ls(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ra(Bi(o)):Bi(o));t[Bn](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,ou(()=>{t._assigning=!1})}),t[Bn]=Pr(s)},mounted(t,{value:e}){Vd(t,e)},beforeUpdate(t,e,n){t[Bn]=Pr(n)},updated(t,{value:e}){t._assigning||Vd(t,e)}};function Vd(t,e){const n=t.multiple,s=he(e);if(!(n&&!s&&!Br(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],l=Bi(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Xc(e,l)>-1}else o.selected=e.has(l);else if(Xi(Bi(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Bi(t){return"_value"in t?t._value:t.value}function Nm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const lw=["ctrl","shift","alt","meta"],cw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>lw.some(n=>t[`${n}Key`]&&!e.includes(n))},ro=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const l=cw[e[o]];if(l&&l(r,e))return}return t(r,...i)})},uw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},hw=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=Ps(r.key);if(e.some(o=>o===i||uw[o]===i))return t(r)})},dw=ht({patchProp:rw},qE);let Dd;function fw(){return Dd||(Dd=uE(dw))}const pw=(...t)=>{const e=fw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=gw(s);if(!r)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,mw(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function mw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function gw(t){return nt(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ur=typeof document<"u";function Vm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _w(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Vm(t.default)}const ke=Object.assign;function jl(t,e){const n={};for(const s in e){const r=e[s];n[s]=cn(r)?r.map(t):t(r)}return n}const Si=()=>{},cn=Array.isArray;function Od(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const Dm=/#/g,yw=/&/g,vw=/\//g,Ew=/=/g,ww=/\?/g,Om=/\+/g,bw=/%5B/g,Tw=/%5D/g,xm=/%5E/g,Iw=/%60/g,Lm=/%7B/g,Aw=/%7C/g,Mm=/%7D/g,Rw=/%20/g;function pu(t){return t==null?"":encodeURI(""+t).replace(Aw,"|").replace(bw,"[").replace(Tw,"]")}function Sw(t){return pu(t).replace(Lm,"{").replace(Mm,"}").replace(xm,"^")}function gc(t){return pu(t).replace(Om,"%2B").replace(Rw,"+").replace(Dm,"%23").replace(yw,"%26").replace(Iw,"`").replace(Lm,"{").replace(Mm,"}").replace(xm,"^")}function Cw(t){return gc(t).replace(Ew,"%3D")}function Pw(t){return pu(t).replace(Dm,"%23").replace(ww,"%3F")}function kw(t){return Pw(t).replace(vw,"%2F")}function $i(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Nw=/\/$/,Vw=t=>t.replace(Nw,"");function ql(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(s=e.slice(0,c),i=e.slice(c,l>0?l:e.length),r=t(i.slice(1))),l>=0&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Lw(s??e,n),{fullPath:s+i+o,path:s,query:r,hash:$i(o)}}function Dw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ow(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&kr(e.matched[s],n.matched[r])&&Fm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function kr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!xw(t[n],e[n]))return!1;return!0}function xw(t,e){return cn(t)?Ld(t,e):cn(e)?Ld(e,t):t===e}function Ld(t,e){return cn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Lw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const ss={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let _c=function(t){return t.pop="pop",t.push="push",t}({}),Hl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function Mw(t){if(!t)if(ur){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Vw(t)}const Fw=/^[^#]+#/;function Uw(t,e){return t.replace(Fw,"#")+e}function Bw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const za=()=>({left:window.scrollX,top:window.scrollY});function $w(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Bw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Md(t,e){return(history.state?history.state.position-e:-1)+t}const yc=new Map;function jw(t,e){yc.set(t,e)}function qw(t){const e=yc.get(t);return yc.delete(t),e}function Hw(t){return typeof t=="string"||t&&typeof t=="object"}function Um(t){return typeof t=="string"||typeof t=="symbol"}let ze=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Bm=Symbol("");ze.MATCHER_NOT_FOUND+"",ze.NAVIGATION_GUARD_REDIRECT+"",ze.NAVIGATION_ABORTED+"",ze.NAVIGATION_CANCELLED+"",ze.NAVIGATION_DUPLICATED+"";function Nr(t,e){return ke(new Error,{type:t,[Bm]:!0},e)}function On(t,e){return t instanceof Error&&Bm in t&&(e==null||!!(t.type&e))}const Ww=["params","query","hash"];function Gw(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Ww)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Kw(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Om," "),i=r.indexOf("="),o=$i(i<0?r:r.slice(0,i)),l=i<0?null:$i(r.slice(i+1));if(o in e){let c=e[o];cn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Fd(t){let e="";for(let n in t){const s=t[n];if(n=Cw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(cn(s)?s.map(r=>r&&gc(r)):[s&&gc(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function zw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=cn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Qw=Symbol(""),Ud=Symbol(""),Qa=Symbol(""),$m=Symbol(""),vc=Symbol("");function di(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function as(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Nr(ze.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?c(g):Hw(g)?c(Nr(ze.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&s.enterCallbacks[r]===o&&typeof g=="function"&&o.push(g),l())},f=i(()=>t.call(s&&s.instances[r],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Wl(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Vm(c)){const u=(c.__vccOpts||c)[e];u&&i.push(as(u,n,s,o,l,r))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=_w(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const g=(p.__vccOpts||p)[e];return g&&as(g,n,s,o,l,r)()}))}}return i}function Yw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>kr(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>kr(u,c))||r.push(c))}return[n,s,r]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Jw=()=>location.protocol+"//"+location.host;function jm(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let o=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),xd(l,"")}return xd(n,t)+s+r}function Xw(t,e,n,s){let r=[],i=[],o=null;const l=({state:g})=>{const y=jm(t,location),k=n.value,V=e.value;let O=0;if(g){if(n.value=y,e.value=g,o&&o===k){o=null;return}O=V?g.position-V.position:0}else s(y);r.forEach(K=>{K(n.value,k,{delta:O,type:_c.pop,direction:O?O>0?Hl.forward:Hl.back:Hl.unknown})})};function c(){o=n.value}function u(g){r.push(g);const y=()=>{const k=r.indexOf(g);k>-1&&r.splice(k,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(ke({},g.state,{scroll:za()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:p}}function Bd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?za():null}}function Zw(t){const{history:e,location:n}=window,s={value:jm(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Jw()+t+c;try{e[f?"replaceState":"pushState"](u,"",g),r.value=u}catch(y){console.error(y),n[f?"replace":"assign"](g)}}function o(c,u){i(c,ke({},e.state,Bd(r.value.back,c,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=c}function l(c,u){const f=ke({},r.value,e.state,{forward:c,scroll:za()});i(f.current,f,!0),i(c,ke({},Bd(s.value,c,null),{position:f.position+1},u),!1),s.value=c}return{location:s,state:r,push:l,replace:o}}function eb(t){t=Mw(t);const e=Zw(t),n=Xw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ke({location:"",base:t,go:s,createHref:Uw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Hs=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var rt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(rt||{});const tb={type:Hs.Static,value:""},nb=/[a-zA-Z0-9_]/;function sb(t){if(!t)return[[]];if(t==="/")return[[tb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=rt.Static,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===rt.Static?i.push({type:Hs.Static,value:u}):n===rt.Param||n===rt.ParamRegExp||n===rt.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Hs.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==rt.ParamRegExp){s=n,n=rt.EscapeNext;continue}switch(n){case rt.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=rt.Param):g();break;case rt.EscapeNext:g(),n=s;break;case rt.Param:c==="("?n=rt.ParamRegExp:nb.test(c)?g():(p(),n=rt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case rt.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=rt.ParamRegExpEnd:f+=c;break;case rt.ParamRegExpEnd:p(),n=rt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===rt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),r}const $d="[^/]+?",rb={sensitive:!1,strict:!1,start:!0,end:!0};var Vt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Vt||{});const ib=/[.+*?^${}()[\]/\\]/g;function ob(t,e){const n=ke({},rb,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Vt.Root];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const g=u[p];let y=Vt.Segment+(n.sensitive?Vt.BonusCaseSensitive:0);if(g.type===Hs.Static)p||(r+="/"),r+=g.value.replace(ib,"\\$&"),y+=Vt.Static;else if(g.type===Hs.Param){const{value:k,repeatable:V,optional:O,regexp:K}=g;i.push({name:k,repeatable:V,optional:O});const H=K||$d;if(H!==$d){y+=Vt.BonusCustomRegExp;try{`${H}`}catch(X){throw new Error(`Invalid custom RegExp for param "${k}" (${H}): `+X.message)}}let z=V?`((?:${H})(?:/(?:${H}))*)`:`(${H})`;p||(z=O&&u.length<2?`(?:/${z})`:"/"+z),O&&(z+="?"),r+=z,y+=Vt.Dynamic,O&&(y+=Vt.BonusOptional),V&&(y+=Vt.BonusRepeatable),H===".*"&&(y+=Vt.BonusWildcard)}f.push(y)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Vt.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",k=i[g-1];p[k.name]=y&&k.repeatable?y.split("/"):y}return p}function c(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of g)if(y.type===Hs.Static)f+=y.value;else if(y.type===Hs.Param){const{value:k,repeatable:V,optional:O}=y,K=k in u?u[k]:"";if(cn(K)&&!V)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const H=cn(K)?K.join("/"):K;if(!H)if(O)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);f+=H}}return f||"/"}return{re:o,score:s,keys:i,parse:l,stringify:c}}function ab(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===Vt.Static+Vt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Vt.Static+Vt.Segment?1:-1:0}function qm(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=ab(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(jd(s))return 1;if(jd(r))return-1}return r.length-s.length}function jd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lb={strict:!1,end:!0,sensitive:!1};function cb(t,e,n){const s=ob(sb(t.path),n),r=ke(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ub(t,e){const n=[],s=new Map;e=Od(lb,e);function r(p){return s.get(p)}function i(p,g,y){const k=!y,V=Hd(p);V.aliasOf=y&&y.record;const O=Od(e,p),K=[V];if("alias"in p){const X=typeof p.alias=="string"?[p.alias]:p.alias;for(const G of X)K.push(Hd(ke({},V,{components:y?y.record.components:V.components,path:G,aliasOf:y?y.record:V})))}let H,z;for(const X of K){const{path:G}=X;if(g&&G[0]!=="/"){const U=g.record.path,w=U[U.length-1]==="/"?"":"/";X.path=g.record.path+(G&&w+G)}if(H=cb(X,g,O),y?y.alias.push(H):(z=z||H,z!==H&&z.alias.push(H),k&&p.name&&!Wd(H)&&o(p.name)),Hm(H)&&c(H),V.children){const U=V.children;for(let w=0;w<U.length;w++)i(U[w],H,y&&y.children[w])}y=y||H}return z?()=>{o(z)}:Si}function o(p){if(Um(p)){const g=s.get(p);g&&(s.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=fb(p,n);n.splice(g,0,p),p.record.name&&!Wd(p)&&s.set(p.record.name,p)}function u(p,g){let y,k={},V,O;if("name"in p&&p.name){if(y=s.get(p.name),!y)throw Nr(ze.MATCHER_NOT_FOUND,{location:p});O=y.record.name,k=ke(qd(g.params,y.keys.filter(z=>!z.optional).concat(y.parent?y.parent.keys.filter(z=>z.optional):[]).map(z=>z.name)),p.params&&qd(p.params,y.keys.map(z=>z.name))),V=y.stringify(k)}else if(p.path!=null)V=p.path,y=n.find(z=>z.re.test(V)),y&&(k=y.parse(V),O=y.record.name);else{if(y=g.name?s.get(g.name):n.find(z=>z.re.test(g.path)),!y)throw Nr(ze.MATCHER_NOT_FOUND,{location:p,currentLocation:g});O=y.record.name,k=ke({},g.params,p.params),V=y.stringify(k)}const K=[];let H=y;for(;H;)K.unshift(H.record),H=H.parent;return{name:O,path:V,params:k,matched:K,meta:db(K)}}t.forEach(p=>i(p));function f(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:r}}function qd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Hd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:hb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function hb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Wd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function db(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function fb(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;qm(t,e[i])<0?s=i:n=i+1}const r=pb(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function pb(t){let e=t;for(;e=e.parent;)if(Hm(e)&&qm(t,e)===0)return e}function Hm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Gd(t){const e=En(Qa),n=En($m),s=xt(()=>{const c=Ke(t.to);return e.resolve(c)}),r=xt(()=>{const{matched:c}=s.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(kr.bind(null,f));if(g>-1)return g;const y=Kd(c[u-2]);return u>1&&Kd(f)===y&&p[p.length-1].path!==y?p.findIndex(kr.bind(null,c[u-2])):g}),i=xt(()=>r.value>-1&&yb(n.params,s.value.params)),o=xt(()=>r.value>-1&&r.value===n.matched.length-1&&Fm(n.params,s.value.params));function l(c={}){if(_b(c)){const u=e[Ke(t.replace)?"replace":"push"](Ke(t.to)).catch(Si);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:xt(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function mb(t){return t.length===1?t[0]:t}const gb=rm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Gd,setup(t,{slots:e}){const n=Zi(Gd(t)),{options:s}=En(Qa),r=xt(()=>({[zd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[zd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&mb(e.default(n));return t.custom?i:Pm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Ht=gb;function _b(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yb(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!cn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Kd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zd=(t,e,n)=>t??e??n,vb=rm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=En(vc),r=xt(()=>t.route||s.value),i=En(Ud,0),o=xt(()=>{let u=Ke(i);const{matched:f}=r.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=xt(()=>r.value.matched[o.value]);qo(Ud,xt(()=>o.value+1)),qo(Qw,l),qo(vc,r);const c=Ae();return Ho(()=>[c.value,l.value,t.name],([u,f,p],[g,y,k])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!kr(f,y)||!g)&&(f.enterCallbacks[p]||[]).forEach(V=>V(u))},{flush:"post"}),()=>{const u=r.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return Qd(n.default,{Component:g,route:u});const y=p.props[f],k=y?y===!0?u.params:typeof y=="function"?y(u):y:null,O=Pm(g,ke({},k,e,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Qd(n.default,{Component:O,route:u})||O}}});function Qd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Wm=vb;function Eb(t){const e=ub(t.routes,t),n=t.parseQuery||Kw,s=t.stringifyQuery||Fd,r=t.history,i=di(),o=di(),l=di(),c=Iv(ss);let u=ss;ur&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=jl.bind(null,L=>""+L),p=jl.bind(null,kw),g=jl.bind(null,$i);function y(L,re){let ee,oe;return Um(L)?(ee=e.getRecordMatcher(L),oe=re):oe=L,e.addRoute(oe,ee)}function k(L){const re=e.getRecordMatcher(L);re&&e.removeRoute(re)}function V(){return e.getRoutes().map(L=>L.record)}function O(L){return!!e.getRecordMatcher(L)}function K(L,re){if(re=ke({},re||c.value),typeof L=="string"){const T=ql(n,L,re.path),P=e.resolve({path:T.path},re),B=r.createHref(T.fullPath);return ke(T,P,{params:g(P.params),hash:$i(T.hash),redirectedFrom:void 0,href:B})}let ee;if(L.path!=null)ee=ke({},L,{path:ql(n,L.path,re.path).path});else{const T=ke({},L.params);for(const P in T)T[P]==null&&delete T[P];ee=ke({},L,{params:p(T)}),re.params=p(re.params)}const oe=e.resolve(ee,re),ve=L.hash||"";oe.params=f(g(oe.params));const Le=Dw(s,ke({},L,{hash:Sw(ve),path:oe.path})),v=r.createHref(Le);return ke({fullPath:Le,hash:ve,query:s===Fd?zw(L.query):L.query||{}},oe,{redirectedFrom:void 0,href:v})}function H(L){return typeof L=="string"?ql(n,L,c.value.path):ke({},L)}function z(L,re){if(u!==L)return Nr(ze.NAVIGATION_CANCELLED,{from:re,to:L})}function X(L){return w(L)}function G(L){return X(ke(H(L),{replace:!0}))}function U(L,re){const ee=L.matched[L.matched.length-1];if(ee&&ee.redirect){const{redirect:oe}=ee;let ve=typeof oe=="function"?oe(L,re):oe;return typeof ve=="string"&&(ve=ve.includes("?")||ve.includes("#")?ve=H(ve):{path:ve},ve.params={}),ke({query:L.query,hash:L.hash,params:ve.path!=null?{}:L.params},ve)}}function w(L,re){const ee=u=K(L),oe=c.value,ve=L.state,Le=L.force,v=L.replace===!0,T=U(ee,oe);if(T)return w(ke(H(T),{state:typeof T=="object"?ke({},ve,T.state):ve,force:Le,replace:v}),re||ee);const P=ee;P.redirectedFrom=re;let B;return!Le&&Ow(s,oe,ee)&&(B=Nr(ze.NAVIGATION_DUPLICATED,{to:P,from:oe}),jt(oe,oe,!0,!1)),(B?Promise.resolve(B):R(P,oe)).catch(D=>On(D)?On(D,ze.NAVIGATION_GUARD_REDIRECT)?D:dn(D):Ie(D,P,oe)).then(D=>{if(D){if(On(D,ze.NAVIGATION_GUARD_REDIRECT))return w(ke({replace:v},H(D.to),{state:typeof D.to=="object"?ke({},ve,D.to.state):ve,force:Le}),re||P)}else D=C(P,oe,!0,v,ve);return A(P,oe,D),D})}function E(L,re){const ee=z(L,re);return ee?Promise.reject(ee):Promise.resolve()}function I(L){const re=en.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(L):L()}function R(L,re){let ee;const[oe,ve,Le]=Yw(L,re);ee=Wl(oe.reverse(),"beforeRouteLeave",L,re);for(const T of oe)T.leaveGuards.forEach(P=>{ee.push(as(P,L,re))});const v=E.bind(null,L,re);return ee.push(v),yt(ee).then(()=>{ee=[];for(const T of i.list())ee.push(as(T,L,re));return ee.push(v),yt(ee)}).then(()=>{ee=Wl(ve,"beforeRouteUpdate",L,re);for(const T of ve)T.updateGuards.forEach(P=>{ee.push(as(P,L,re))});return ee.push(v),yt(ee)}).then(()=>{ee=[];for(const T of Le)if(T.beforeEnter)if(cn(T.beforeEnter))for(const P of T.beforeEnter)ee.push(as(P,L,re));else ee.push(as(T.beforeEnter,L,re));return ee.push(v),yt(ee)}).then(()=>(L.matched.forEach(T=>T.enterCallbacks={}),ee=Wl(Le,"beforeRouteEnter",L,re,I),ee.push(v),yt(ee))).then(()=>{ee=[];for(const T of o.list())ee.push(as(T,L,re));return ee.push(v),yt(ee)}).catch(T=>On(T,ze.NAVIGATION_CANCELLED)?T:Promise.reject(T))}function A(L,re,ee){l.list().forEach(oe=>I(()=>oe(L,re,ee)))}function C(L,re,ee,oe,ve){const Le=z(L,re);if(Le)return Le;const v=re===ss,T=ur?history.state:{};ee&&(oe||v?r.replace(L.fullPath,ke({scroll:v&&T&&T.scroll},ve)):r.push(L.fullPath,ve)),c.value=L,jt(L,re,ee,v),dn()}let b;function Je(){b||(b=r.listen((L,re,ee)=>{if(!tn.listening)return;const oe=K(L),ve=U(oe,tn.currentRoute.value);if(ve){w(ke(ve,{replace:!0,force:!0}),oe).catch(Si);return}u=oe;const Le=c.value;ur&&jw(Md(Le.fullPath,ee.delta),za()),R(oe,Le).catch(v=>On(v,ze.NAVIGATION_ABORTED|ze.NAVIGATION_CANCELLED)?v:On(v,ze.NAVIGATION_GUARD_REDIRECT)?(w(ke(H(v.to),{force:!0}),oe).then(T=>{On(T,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&!ee.delta&&ee.type===_c.pop&&r.go(-1,!1)}).catch(Si),Promise.reject()):(ee.delta&&r.go(-ee.delta,!1),Ie(v,oe,Le))).then(v=>{v=v||C(oe,Le,!1),v&&(ee.delta&&!On(v,ze.NAVIGATION_CANCELLED)?r.go(-ee.delta,!1):ee.type===_c.pop&&On(v,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),A(oe,Le,v)}).catch(Si)}))}let Pt=di(),Xe=di(),Pe;function Ie(L,re,ee){dn(L);const oe=Xe.list();return oe.length?oe.forEach(ve=>ve(L,re,ee)):console.error(L),Promise.reject(L)}function Lt(){return Pe&&c.value!==ss?Promise.resolve():new Promise((L,re)=>{Pt.add([L,re])})}function dn(L){return Pe||(Pe=!L,Je(),Pt.list().forEach(([re,ee])=>L?ee(L):re()),Pt.reset()),L}function jt(L,re,ee,oe){const{scrollBehavior:ve}=t;if(!ur||!ve)return Promise.resolve();const Le=!ee&&qw(Md(L.fullPath,0))||(oe||!ee)&&history.state&&history.state.scroll||null;return ou().then(()=>ve(L,re,Le)).then(v=>v&&$w(v)).catch(v=>Ie(v,L,re))}const dt=L=>r.go(L);let Vn;const en=new Set,tn={currentRoute:c,listening:!0,addRoute:y,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:V,resolve:K,options:t,push:X,replace:G,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Xe.add,isReady:Lt,install(L){L.component("RouterLink",Ht),L.component("RouterView",Wm),L.config.globalProperties.$router=tn,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Ke(c)}),ur&&!Vn&&c.value===ss&&(Vn=!0,X(r.location).catch(oe=>{}));const re={};for(const oe in ss)Object.defineProperty(re,oe,{get:()=>c.value[oe],enumerable:!0});L.provide(Qa,tn),L.provide($m,Yp(re)),L.provide(vc,c);const ee=L.unmount;en.add(L),L.unmount=function(){en.delete(L),en.size<1&&(u=ss,b&&b(),b=null,c.value=ss,Vn=!1,Pe=!1),ee()}}};function yt(L){return L.reduce((re,ee)=>re.then(()=>I(ee)),Promise.resolve())}return tn}function Gm(){return En(Qa)}const Zt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},wb={class:"min-h-screen d-flex flex-column"},bb={class:"navbar navbar-expand navbar-light bg-light px-3"},Tb={class:"navbar-nav"},Ib={class:"container py-4 flex-fill"},Ab={class:"text-center text-muted py-3 border-top small"},Rb={__name:"App",setup(t){return(e,n)=>(J(),Z("div",wb,[d("nav",bb,[De(Ke(Ht),{class:"navbar-brand fw-bold me-3",to:{name:"Home"}},{default:bt(()=>[...n[0]||(n[0]=[se(" Library App ",-1)])]),_:1}),d("div",Tb,[De(Ke(Ht),{class:"nav-link",to:{name:"Home"}},{default:bt(()=>[...n[1]||(n[1]=[se("Home",-1)])]),_:1}),De(Ke(Ht),{class:"nav-link",to:{name:"About"}},{default:bt(()=>[...n[2]||(n[2]=[se("About",-1)])]),_:1}),De(Ke(Ht),{class:"nav-link",to:{name:"Register"}},{default:bt(()=>[...n[3]||(n[3]=[se("Firebase Register",-1)])]),_:1}),De(Ke(Ht),{class:"nav-link",to:{name:"Auth"}},{default:bt(()=>[...n[4]||(n[4]=[se("Firebase Sign In",-1)])]),_:1}),De(Ke(Ht),{class:"nav-link",to:{name:"Dashboard"}},{default:bt(()=>[...n[5]||(n[5]=[se("Dashboard",-1)])]),_:1}),De(Ke(Ht),{class:"nav-link",to:{name:"AddBook"}},{default:bt(()=>[...n[6]||(n[6]=[se("Add Book",-1)])]),_:1}),De(Ke(Ht),{class:"nav-link",to:{name:"BookManagement"}},{default:bt(()=>[...n[7]||(n[7]=[se("Book Management",-1)])]),_:1}),De(Ke(Ht),{class:"nav-link",to:{name:"FirebaseFunctions"}},{default:bt(()=>[...n[8]||(n[8]=[se("Firebase Functions",-1)])]),_:1}),De(Ke(Ht),{class:"nav-link",to:{name:"Weather"}},{default:bt(()=>[...n[9]||(n[9]=[se("Weather API",-1)])]),_:1}),De(Ke(Ht),{class:"nav-link",to:{name:"Api"}},{default:bt(()=>[...n[10]||(n[10]=[se("API Counters",-1)])]),_:1}),De(Ke(Ht),{class:"nav-link",to:{name:"GetAllBookApi"}},{default:bt(()=>[...n[11]||(n[11]=[se("GetAllBookAPI",-1)])]),_:1})])]),d("main",Ib,[De(Ke(Wm))]),d("footer",Ab," © "+$(new Date().getFullYear())+" Library App ",1)]))}},Sb=Zt(Rb,[["__scopeId","data-v-6ae1b6e6"]]),Cb="modulepreload",Pb=function(t){return"/"+t},Yd={},kb=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Pb(i),i in Yd)return;Yd[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const p=r[f];if(p.href===i&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Cb,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Ci=Zi({libraryRecords:[],addRecord(t){this.libraryRecords.push({...t,id:Date.now(),createdAt:new Date().toISOString()}),console.log("Record added to store:",t)},getRecords(){return this.libraryRecords},clearRecords(){this.libraryRecords=[],console.log("All records cleared")},getRecordCount(){return this.libraryRecords.length}});const Nb={class:"container mt-2"},Vb={class:"row g-3 mb-3"},Db={class:"col-md-6"},Ob=["aria-invalid"],xb={key:0,id:"usernameHelp",class:"text-danger","data-testid":"username-error"},Lb={class:"col-md-6"},Mb={class:"row g-3 mb-3"},Fb={class:"col-md-6"},Ub=["aria-invalid"],Bb={key:0,id:"passwordHelp",class:"text-danger","data-testid":"password-error"},$b={class:"col-md-6"},jb=["aria-invalid"],qb={key:0,id:"confirmPasswordHelp",class:"text-danger","data-testid":"confirm-password-error"},Hb={class:"form-check mb-3"},Wb={class:"mb-3"},Gb=["aria-invalid"],Kb={key:0,id:"reasonHelp",class:"text-danger","data-testid":"reason-error"},zb={key:1,class:"text-success"},Qb={class:"mb-3"},Yb={class:"row mt-4"},Jb={class:"table-responsive"},Xb={class:"table"},Zb={key:0},eT={key:0,class:"row mt-4"},tT={class:"d-flex flex-wrap justify-content-start"},nT={class:"list-group list-group-flush"},sT={class:"list-group-item"},rT={class:"list-group-item"},iT={class:"list-group-item"},oT={class:"list-group-item"},aT={class:"list-group-item"},lT=Object.assign({name:"LibraryFormW5"},{__name:"HomeView",setup(t){const e=Ae({username:"",gender:"",password:"",confirm:"",australianResident:!1,reason:"",suburb:"Clayton"}),n=Ae({username:null,password:null,confirm:null,reason:null}),s=xt(()=>Ci.getRecords()),r=xt(()=>e.value.reason.toLowerCase().includes("friend")?"Great to have you my friend":""),i=p=>{n.value.username=!e.value.username.trim()&&p?"Username is required.":null},o=p=>{n.value.password=!e.value.password&&p?"Password is required.":null,l(p)},l=p=>{!e.value.confirm&&p?n.value.confirm="Please confirm your password.":e.value.password!==e.value.confirm?n.value.confirm=p?"Passwords do not match.":null:n.value.confirm=null},c=p=>{n.value.reason=e.value.reason.trim().length<10&&p?"Reason must be at least 10 characters":null},u=()=>{if(i(!0),o(!0),l(!0),c(!0),!n.value.username&&!n.value.password&&!n.value.confirm&&!n.value.reason){const p="•".repeat(Math.min(e.value.password.length,12)),g={username:e.value.username,password:p,resident:e.value.australianResident,gender:e.value.gender,reason:e.value.reason,suburb:e.value.suburb};Ci.addRecord(g),f()}},f=()=>{e.value={username:"",gender:"",password:"",confirm:"",australianResident:!1,reason:"",suburb:"Clayton"},n.value={username:null,password:null,confirm:null,reason:null}};return(p,g)=>(J(),Z("div",Nb,[g[28]||(g[28]=d("h2",{class:"text-center fw-bold"},"W5. Library Registration Form",-1)),g[29]||(g[29]=d("p",{class:"text-center text-muted mb-4"},"Let’s build some more advanced features into our form.",-1)),d("form",{onSubmit:ro(u,["prevent"]),class:"mb-3"},[d("div",Vb,[d("div",Db,[g[15]||(g[15]=d("label",{for:"username",class:"form-label"},"Username",-1)),Ce(d("input",{id:"username",type:"text",class:"form-control","onUpdate:modelValue":g[0]||(g[0]=y=>e.value.username=y),onBlur:g[1]||(g[1]=()=>i(!0)),onInput:g[2]||(g[2]=()=>i(!1)),"data-testid":"username-input","aria-invalid":!!n.value.username,"aria-describedby":"usernameHelp"},null,40,Ob),[[Fe,e.value.username]]),n.value.username?(J(),Z("div",xb,$(n.value.username),1)):ge("",!0)]),d("div",Lb,[g[17]||(g[17]=d("label",{for:"gender",class:"form-label"},"Gender",-1)),Ce(d("select",{id:"gender",class:"form-select","onUpdate:modelValue":g[3]||(g[3]=y=>e.value.gender=y),required:"","data-testid":"gender-select"},[...g[16]||(g[16]=[d("option",{disabled:"",value:""},"Select…",-1),d("option",{value:"male"},"male",-1),d("option",{value:"female"},"female",-1),d("option",{value:"other"},"other",-1)])],512),[[pa,e.value.gender]])])]),d("div",Mb,[d("div",Fb,[g[18]||(g[18]=d("label",{for:"password",class:"form-label"},"Password",-1)),Ce(d("input",{id:"password",type:"password",class:"form-control","onUpdate:modelValue":g[4]||(g[4]=y=>e.value.password=y),onBlur:g[5]||(g[5]=()=>o(!0)),onInput:g[6]||(g[6]=()=>o(!1)),"data-testid":"password-input","aria-invalid":!!n.value.password,"aria-describedby":"passwordHelp",autocomplete:"new-password"},null,40,Ub),[[Fe,e.value.password]]),n.value.password?(J(),Z("div",Bb,$(n.value.password),1)):ge("",!0)]),d("div",$b,[g[19]||(g[19]=d("label",{for:"confirm",class:"form-label"},"Confirm Password",-1)),Ce(d("input",{id:"confirm",type:"password",class:"form-control","onUpdate:modelValue":g[7]||(g[7]=y=>e.value.confirm=y),onBlur:g[8]||(g[8]=()=>l(!0)),onInput:g[9]||(g[9]=()=>l(!1)),"data-testid":"confirm-password-input","aria-invalid":!!n.value.confirm,"aria-describedby":"confirmPasswordHelp",autocomplete:"new-password"},null,40,jb),[[Fe,e.value.confirm]]),n.value.confirm?(J(),Z("div",qb,$(n.value.confirm),1)):ge("",!0)])]),d("div",Hb,[Ce(d("input",{class:"form-check-input",type:"checkbox",id:"resident","onUpdate:modelValue":g[10]||(g[10]=y=>e.value.australianResident=y),"data-testid":"resident-checkbox"},null,512),[[aw,e.value.australianResident]]),g[20]||(g[20]=d("label",{class:"form-check-label",for:"resident"},"Australian Resident?",-1))]),d("div",Wb,[g[21]||(g[21]=d("label",{for:"reason",class:"form-label"},"Reason for joining",-1)),Ce(d("textarea",{id:"reason",class:"form-control",rows:"3","onUpdate:modelValue":g[11]||(g[11]=y=>e.value.reason=y),onBlur:g[12]||(g[12]=()=>c(!0)),onInput:g[13]||(g[13]=()=>c(!1)),placeholder:"e.g., I heard about this from my friend","data-testid":"reason-textarea","aria-invalid":!!n.value.reason,"aria-describedby":"reasonHelp"},null,40,Gb),[[Fe,e.value.reason]]),n.value.reason?(J(),Z("div",Kb,$(n.value.reason),1)):r.value?(J(),Z("small",zb,$(r.value),1)):ge("",!0)]),d("div",Qb,[g[22]||(g[22]=d("label",{for:"suburb",class:"form-label"},"Suburb",-1)),Ce(d("input",{id:"suburb",class:"form-control","onUpdate:modelValue":g[14]||(g[14]=y=>e.value.suburb=y),"data-testid":"suburb-input"},null,512),[[Fe,e.value.suburb]])]),d("div",{class:"text-center"},[g[23]||(g[23]=d("button",{type:"submit",class:"btn btn-primary me-2","data-testid":"submit-button"},"Submit",-1)),d("button",{type:"button",class:"btn btn-secondary",onClick:f,"data-testid":"clear-button"},"Clear")])],32),d("div",Yb,[g[26]||(g[26]=d("h5",null,"This is a Datatable.",-1)),d("div",Jb,[d("table",Xb,[g[25]||(g[25]=d("thead",null,[d("tr",null,[d("th",null,"Username"),d("th",null,"Password"),d("th",null,"Australian Resident"),d("th",null,"Gender"),d("th",null,"Reason")])],-1)),d("tbody",null,[(J(!0),Z(Ot,null,Sr(s.value,(y,k)=>(J(),Z("tr",{key:k},[d("td",null,$(y.username),1),d("td",null,$(y.password),1),d("td",null,$(y.resident?"Yes":"No"),1),d("td",null,$(y.gender||"-"),1),d("td",null,$(y.reason),1)]))),128)),s.value.length?ge("",!0):(J(),Z("tr",Zb,[...g[24]||(g[24]=[d("td",{colspan:"5",class:"text-muted"},"No rows yet. Submit the form to add one.",-1)])]))])])])]),s.value.length?(J(),Z("div",eT,[d("div",tT,[(J(!0),Z(Ot,null,Sr(s.value,(y,k)=>(J(),Z("div",{key:k,class:"card m-2",style:{width:"18rem"}},[g[27]||(g[27]=d("div",{class:"card-header bg-primary text-white"},"User Information",-1)),d("ul",nT,[d("li",sT,"Username: "+$(y.username),1),d("li",rT,"Password: "+$(y.password),1),d("li",iT,"Resident: "+$(y.resident?"Yes":"No"),1),d("li",oT,"Gender: "+$(y.gender||"-"),1),d("li",aT,"Reason: "+$(y.reason),1)])]))),128))])])):ge("",!0)]))}}),cT=Zt(lT,[["__scopeId","data-v-0abc9ab3"]]);const uT={};function hT(t,e){return J(),Z("section",null,[...e[0]||(e[0]=[d("h2",null,"About Our Library",-1),d("p",null,"Welcome to our digital library! We’re dedicated to providing a vast collection of books and resources to our community.",-1),d("hr",null,null,-1)])])}const dT=Zt(uT,[["render",hT],["__scopeId","data-v-9c26e2ed"]]),fT=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},pT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},zm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(g=64)),s.push(n[f],n[p],n[g],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Km(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||p==null)throw new mT;const g=i<<2|l>>4;if(s.push(g),u!==64){const y=l<<4&240|u>>2;if(s.push(y),p!==64){const k=u<<6&192|p;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gT=function(t){const e=Km(t);return zm.encodeByteArray(e,!0)},ma=function(t){return gT(t).replace(/\./g,"")},Qm=function(t){try{return zm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=()=>_T().__FIREBASE_DEFAULTS__,vT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ET=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qm(t[1]);return e&&JSON.parse(e)},Ya=()=>{try{return fT()||yT()||vT()||ET()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ym=t=>Ya()?.emulatorHosts?.[t],Jm=t=>{const e=Ym(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Xm=()=>Ya()?.config,Zm=t=>Ya()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mu(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[ma(JSON.stringify(n)),ma(JSON.stringify(o)),l].join(".")}const Pi={};function TT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Pi))Pi[e]?t.emulator.push(e):t.prod.push(e);return t}function IT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Jd=!1;function gu(t,e){if(typeof window>"u"||typeof document>"u"||!ks(window.location.host)||Pi[t]===e||Pi[t]||Jd)return;Pi[t]=e;function n(g){return`__firebase__banner__${g}`}const s="__firebase__banner",i=TT().prod.length>0;function o(){const g=document.getElementById(s);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,y){g.setAttribute("width","24"),g.setAttribute("id",y),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Jd=!0,o()},g}function f(g,y){g.setAttribute("id",y),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=IT(s),y=n("text"),k=document.getElementById(y)||document.createElement("span"),V=n("learnmore"),O=document.getElementById(V)||document.createElement("a"),K=n("preprendIcon"),H=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const z=g.element;l(z),f(O,V);const X=u();c(H,K),z.append(H,k,O,X),document.body.appendChild(z)}i?(k.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function RT(){const t=Ya()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ST(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kT(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NT(){return!RT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VT(){try{return typeof indexedDB=="object"}catch{return!1}}function DT(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="FirebaseError";class Nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=OT,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?xT(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Nn(r,l,s)}}function xT(t,e){return t.replace(LT,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const LT=/\{\$([^}]+)}/g;function MT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ks(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Xd(i)&&Xd(o)){if(!Ks(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Xd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function mi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function gi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function FT(t,e){const n=new UT(t,e);return n.subscribe.bind(n)}class UT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");BT(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Gl),r.error===void 0&&(r.error=Gl),r.complete===void 0&&(r.complete=Gl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}class bs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new wT;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qT(e))try{this.getOrInitializeService({instanceIdentifier:qs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=qs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qs){return this.instances.has(e)}getOptions(e=qs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jT(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qs){return this.component?this.component.multipleInstances?e:qs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jT(t){return t===qs?void 0:t}function qT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $T(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const WT={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},GT=we.INFO,KT={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},zT=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=KT[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=GT,this._logHandler=zT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const QT=(t,e)=>e.some(n=>t instanceof n);let Zd,ef;function YT(){return Zd||(Zd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JT(){return ef||(ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eg=new WeakMap,Ec=new WeakMap,tg=new WeakMap,Kl=new WeakMap,yu=new WeakMap;function XT(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ms(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eg.set(n,t)}).catch(()=>{}),yu.set(e,t),e}function ZT(t){if(Ec.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ec.set(t,e)}let wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ms(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eI(t){wc=t(wc)}function tI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(zl(this),e,...n);return tg.set(s,e.sort?e.sort():[e]),ms(s)}:JT().includes(t)?function(...e){return t.apply(zl(this),e),ms(eg.get(this))}:function(...e){return ms(t.apply(zl(this),e))}}function nI(t){return typeof t=="function"?tI(t):(t instanceof IDBTransaction&&ZT(t),QT(t,YT())?new Proxy(t,wc):t)}function ms(t){if(t instanceof IDBRequest)return XT(t);if(Kl.has(t))return Kl.get(t);const e=nI(t);return e!==t&&(Kl.set(t,e),yu.set(e,t)),e}const zl=t=>yu.get(t);function sI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=ms(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ms(o.result),c.oldVersion,c.newVersion,ms(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const rI=["get","getKey","getAll","getAllKeys","count"],iI=["put","add","delete","clear"],Ql=new Map;function tf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ql.get(e))return Ql.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=iI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||rI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return Ql.set(e,i),i}eI(t=>({...t,get:(e,n,s)=>tf(e,n)||t.get(e,n,s),has:(e,n)=>!!tf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function aI(t){return t.getComponent()?.type==="VERSION"}const bc="@firebase/app",nf="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new _u("@firebase/app"),lI="@firebase/app-compat",cI="@firebase/analytics-compat",uI="@firebase/analytics",hI="@firebase/app-check-compat",dI="@firebase/app-check",fI="@firebase/auth",pI="@firebase/auth-compat",mI="@firebase/database",gI="@firebase/data-connect",_I="@firebase/database-compat",yI="@firebase/functions",vI="@firebase/functions-compat",EI="@firebase/installations",wI="@firebase/installations-compat",bI="@firebase/messaging",TI="@firebase/messaging-compat",II="@firebase/performance",AI="@firebase/performance-compat",RI="@firebase/remote-config",SI="@firebase/remote-config-compat",CI="@firebase/storage",PI="@firebase/storage-compat",kI="@firebase/firestore",NI="@firebase/ai",VI="@firebase/firestore-compat",DI="firebase",OI="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="[DEFAULT]",xI={[bc]:"fire-core",[lI]:"fire-core-compat",[uI]:"fire-analytics",[cI]:"fire-analytics-compat",[dI]:"fire-app-check",[hI]:"fire-app-check-compat",[fI]:"fire-auth",[pI]:"fire-auth-compat",[mI]:"fire-rtdb",[gI]:"fire-data-connect",[_I]:"fire-rtdb-compat",[yI]:"fire-fn",[vI]:"fire-fn-compat",[EI]:"fire-iid",[wI]:"fire-iid-compat",[bI]:"fire-fcm",[TI]:"fire-fcm-compat",[II]:"fire-perf",[AI]:"fire-perf-compat",[RI]:"fire-rc",[SI]:"fire-rc-compat",[CI]:"fire-gcs",[PI]:"fire-gcs-compat",[kI]:"fire-fst",[VI]:"fire-fst-compat",[NI]:"fire-vertex","fire-js":"fire-js",[DI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Map,LI=new Map,Ic=new Map;function sf(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(Ic.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;Ic.set(e,t);for(const n of ga.values())sf(n,t);for(const n of LI.values())sf(n,t);return!0}function Ja(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gs=new io("app","Firebase",MI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=OI;function ng(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Tc,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw gs.create("bad-app-name",{appName:String(r)});if(n||(n=Xm()),!n)throw gs.create("no-options");const i=ga.get(r);if(i){if(Ks(n,i.options)&&Ks(s,i.config))return i;throw gs.create("duplicate-app",{appName:r})}const o=new HT(r);for(const c of Ic.values())o.addComponent(c);const l=new FI(n,s,o);return ga.set(r,l),l}function vu(t=Tc){const e=ga.get(t);if(!e&&t===Tc&&Xm())return ng();if(!e)throw gs.create("no-app",{appName:t});return e}function wn(t,e,n){let s=xI[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(o.join(" "));return}zs(new bs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="firebase-heartbeat-database",BI=1,ji="firebase-heartbeat-store";let Yl=null;function sg(){return Yl||(Yl=sI(UI,BI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw gs.create("idb-open",{originalErrorMessage:t.message})})),Yl}async function $I(t){try{const n=(await sg()).transaction(ji),s=await n.objectStore(ji).get(rg(t));return await n.done,s}catch(e){if(e instanceof Nn)Hn.warn(e.message);else{const n=gs.create("idb-get",{originalErrorMessage:e?.message});Hn.warn(n.message)}}}async function rf(t,e){try{const s=(await sg()).transaction(ji,"readwrite");await s.objectStore(ji).put(e,rg(t)),await s.done}catch(n){if(n instanceof Nn)Hn.warn(n.message);else{const s=gs.create("idb-set",{originalErrorMessage:n?.message});Hn.warn(s.message)}}}function rg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=1024,qI=30;class HI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=of();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>qI){const r=KI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Hn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=of(),{heartbeatsToSend:n,unsentEntries:s}=WI(this._heartbeatsCache.heartbeats),r=ma(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Hn.warn(e),""}}}function of(){return new Date().toISOString().substring(0,10)}function WI(t,e=jI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),af(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),af(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class GI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VT()?DT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $I(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return rf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return rf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function af(t){return ma(JSON.stringify({version:2,heartbeats:t})).length}function KI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t){zs(new bs("platform-logger",e=>new oI(e),"PRIVATE")),zs(new bs("heartbeat",e=>new HI(e),"PRIVATE")),wn(bc,nf,t),wn(bc,nf,"esm2020"),wn("fire-js","")}zI("");function ig(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QI=ig,og=new io("auth","Firebase",ig());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new _u("@firebase/auth");function YI(t,...e){_a.logLevel<=we.WARN&&_a.warn(`Auth (${$r}): ${t}`,...e)}function zo(t,...e){_a.logLevel<=we.ERROR&&_a.error(`Auth (${$r}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw Eu(t,...e)}function bn(t,...e){return Eu(t,...e)}function ag(t,e,n){const s={...QI(),[e]:n};return new io("auth","Firebase",s).create(e,{appName:t.name})}function $n(t){return ag(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return og.create(t,...e)}function de(t,e,...n){if(!t)throw Eu(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zo(e),new Error(e)}function Wn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){return typeof self<"u"&&self.location?.href||""}function JI(){return lf()==="http:"||lf()==="https:"}function lf(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JI()||CT()||"connection"in navigator)?navigator.onLine:!0}function ZI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=AT()||PT()}get(){return XI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nA=new ao(3e4,6e4);function Ns(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Qn(t,e,n,s,r={}){return cg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=oo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return ST()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ks(t.emulatorConfig.host)&&(u.credentials="include"),lg.fetch()(await ug(t,t.config.apiHost,n,l),u)})}async function cg(t,e,n){t._canInitEmulator=!1;const s={...eA,...e};try{const r=new rA(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Do(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Do(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Do(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Do(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ag(t,f,u);un(t,f)}}catch(r){if(r instanceof Nn)throw r;un(t,"network-request-failed",{message:String(r)})}}async function lo(t,e,n,s,r={}){const i=await Qn(t,e,n,s,r);return"mfaPendingCredential"in i&&un(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ug(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?wu(t.config,r):`${t.config.apiScheme}://${r}`;return tA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function sA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(bn(this.auth,"network-request-failed")),nA.get())})}}function Do(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=bn(t,e,s);return r.customData._tokenResponse=n,r}function cf(t){return t!==void 0&&t.enterprise!==void 0}class iA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function oA(t,e){return Qn(t,"GET","/v2/recaptchaConfig",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e){return Qn(t,"POST","/v1/accounts:delete",e)}async function ya(t,e){return Qn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lA(t,e=!1){const n=Qe(t),s=await n.getIdToken(e),r=bu(s);de(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:ki(Jl(r.auth_time)),issuedAtTime:ki(Jl(r.iat)),expirationTime:ki(Jl(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Jl(t){return Number(t)*1e3}function bu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Qm(n);return r?JSON.parse(r):(zo("Failed to decode base64 JWT payload"),null)}catch(r){return zo("Caught error parsing JWT payload as JSON",r?.toString()),null}}function uf(t){const e=bu(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Nn&&cA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function cA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(t){const e=t.auth,n=await t.getIdToken(),s=await Vr(t,ya(e,{idToken:n}));de(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?hg(r.providerUserInfo):[],o=dA(t.providerData,i),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!o?.length,u=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Rc(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function hA(t){const e=Qe(t);await va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dA(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function hg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(t,e){const n=await cg(t,{},async()=>{const s=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await ug(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return t.emulatorConfig&&ks(t.emulatorConfig.host)&&(c.credentials="include"),lg.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pA(t,e){return Qn(t,"POST","/v2/accounts:revokeToken",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=uf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await fA(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new wr;return s&&(de(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(de(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wr,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new uA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Rc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lA(this,e)}reload(){return hA(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await va(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await Vr(this,aA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:y,providerData:k,stsTokenManager:V}=n;de(p&&V,e,"internal-error");const O=wr.fromJSON(this.name,V);de(typeof p=="string",e,"internal-error"),rs(s,e.name),rs(r,e.name),de(typeof g=="boolean",e,"internal-error"),de(typeof y=="boolean",e,"internal-error"),rs(i,e.name),rs(o,e.name),rs(l,e.name),rs(c,e.name),rs(u,e.name),rs(f,e.name);const K=new sn({uid:p,auth:e,email:r,emailVerified:g,displayName:s,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:O,createdAt:u,lastLoginAt:f});return k&&Array.isArray(k)&&(K.providerData=k.map(H=>({...H}))),c&&(K._redirectEventId=c),K}static async _fromIdTokenResponse(e,n,s=!1){const r=new wr;r.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await va(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];de(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?hg(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,l=new wr;l.updateFromIdToken(s);const c=new sn({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Rc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;function Un(t){Wn(t instanceof Function,"Expected a class definition");let e=hf.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dg.type="NONE";const df=dg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t,e,n){return`firebase:${t}:${e}:${n}`}class br{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Qo(this.userKey,r.apiKey,i),this.fullPersistenceKey=Qo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ya(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new br(Un(df),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Un(df);const o=Qo(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const g=await ya(e,{idToken:f}).catch(()=>{});if(!g)break;p=await sn._fromGetAccountInfoResponse(e,g,f)}else p=sn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new br(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new br(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yg(e))return"Blackberry";if(vg(e))return"Webos";if(pg(e))return"Safari";if((e.includes("chrome/")||mg(e))&&!e.includes("edge/"))return"Chrome";if(_g(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function fg(t=Ct()){return/firefox\//i.test(t)}function pg(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mg(t=Ct()){return/crios\//i.test(t)}function gg(t=Ct()){return/iemobile/i.test(t)}function _g(t=Ct()){return/android/i.test(t)}function yg(t=Ct()){return/blackberry/i.test(t)}function vg(t=Ct()){return/webos/i.test(t)}function Tu(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mA(t=Ct()){return Tu(t)&&!!window.navigator?.standalone}function gA(){return kT()&&document.documentMode===10}function Eg(t=Ct()){return Tu(t)||_g(t)||vg(t)||yg(t)||/windows phone/i.test(t)||gg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t,e=[]){let n;switch(t){case"Browser":n=ff(Ct());break;case"Worker":n=`${ff(Ct())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e={}){return Qn(t,"GET","/v2/passwordPolicy",Ns(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=6;class EA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??vA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pf(this),this.idTokenSubscription=new pf(this),this.beforeStateQueue=new _A(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=og,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await br.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ya(this,{idToken:e}),s=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Gt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await va(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject($n(this));const n=e?Qe(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yA(this),n=new EA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await pA(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&YI(`Error while retrieving App Check token: ${e.error}`),e?.token}}function er(t){return Qe(t)}class pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=FT(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bA(t){Xa=t}function bg(t){return Xa.loadJS(t)}function TA(){return Xa.recaptchaEnterpriseScript}function IA(){return Xa.gapiScript}function AA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class RA{constructor(){this.enterprise=new SA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class SA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const CA="recaptcha-enterprise",Tg="NO_RECAPTCHA";class PA{constructor(e){this.type=CA,this.auth=er(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{oA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new iA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function r(i,o,l){const c=window.grecaptcha;cf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Tg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new RA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(l=>{if(!n&&cf(window.grecaptcha))r(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=TA();c.length!==0&&(c+=l),bg(c).then(()=>{r(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function fi(t,e,n,s=!1,r=!1){const i=new PA(t);let o;if(r)o=Tg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Sc(t,e,n,s,r){if(r==="EMAIL_PASSWORD_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await fi(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fi(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)});else if(r==="PHONE_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await fi(t,e,n);return s(t,i).catch(async o=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const l=await fi(t,e,n,!1,!0);return s(t,l)}return Promise.reject(o)})}else{const i=await fi(t,e,n,!1,!0);return s(t,i)}else return Promise.reject(r+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t,e){const n=Ja(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ks(i,e??{}))return r;un(r,"already-initialized")}return n.initialize({options:e})}function NA(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Un);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function VA(t,e,n){const s=er(t);de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!n?.disableWarnings,i=Ig(e),{host:o,port:l}=DA(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){de(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),de(Ks(u,s.config.emulator)&&Ks(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,ks(o)?(mu(`${i}//${o}${c}`),gu("Auth",!0)):r||OA()}function Ig(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DA(t){const e=Ig(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:mf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:mf(o)}}}function mf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function xA(t,e){return Qn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e){return lo(t,"POST","/v1/accounts:signInWithPassword",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(t,e){return lo(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}async function FA(t,e){return lo(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Iu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new qi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new qi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sc(e,n,"signInWithPassword",LA,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return MA(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sc(e,s,"signUpPassword",xA,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return FA(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t,e){return lo(t,"POST","/v1/accounts:signInWithIdp",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="http://localhost";class Qs extends Iu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new Qs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Tr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}buildRequest(){const e={requestUri:UA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $A(t){const e=mi(gi(t)).link,n=e?mi(gi(e)).deep_link_id:null,s=mi(gi(t)).deep_link_id;return(s?mi(gi(s)).link:null)||s||n||e||t}class Au{constructor(e){const n=mi(gi(e)),s=n.apiKey??null,r=n.oobCode??null,i=BA(n.mode??null);de(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=$A(e);try{return new Au(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.providerId=jr.PROVIDER_ID}static credential(e,n){return qi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Au.parseLink(n);return de(s,"argument-error"),qi._fromEmailAndCode(e,s.code,s.tenantId)}}jr.PROVIDER_ID="password";jr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends Ag{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends co{constructor(){super("facebook.com")}static credential(e){return Qs._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cs.credential(e.oauthAccessToken)}catch{return null}}}cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";cs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qs._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return us.credential(n,s)}catch{return null}}}us.GOOGLE_SIGN_IN_METHOD="google.com";us.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends co{constructor(){super("github.com")}static credential(e){return Qs._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com";hs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends co{constructor(){super("twitter.com")}static credential(e,n){return Qs._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ds.credential(n,s)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,e){return lo(t,"POST","/v1/accounts:signUp",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await sn._fromIdTokenResponse(e,s,r),o=gf(s);return new Ys({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=gf(s);return new Ys({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function gf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends Nn{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ea.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ea(e,n,s,r)}}function Rg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ea._fromErrorAndOperation(t,i,e,s):i})}async function qA(t,e,n=!1){const s=await Vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ys._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(t,e,n=!1){const{auth:s}=t;if(Gt(s.app))return Promise.reject($n(s));const r="reauthenticate";try{const i=await Vr(t,Rg(s,r,e,t),n);de(i.idToken,s,"internal-error");const o=bu(i.idToken);de(o,s,"internal-error");const{sub:l}=o;return de(t.uid===l,s,"user-mismatch"),Ys._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&un(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(t,e,n=!1){if(Gt(t.app))return Promise.reject($n(t));const s="signIn",r=await Rg(t,s,e),i=await Ys._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function WA(t,e){return Sg(er(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(t){const e=er(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GA(t,e,n){if(Gt(t.app))return Promise.reject($n(t));const s=er(t),o=await Sc(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jA,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Cg(t),c}),l=await Ys._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function KA(t,e,n){return Gt(t.app)?Promise.reject($n(t)):WA(Qe(t),jr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Cg(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(t,e){return Qn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Qe(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Vr(s,zA(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const l=s.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function YA(t,e,n,s){return Qe(t).onIdTokenChanged(e,n,s)}function JA(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function XA(t,e,n,s){return Qe(t).onAuthStateChanged(e,n,s)}function ZA(t){return Qe(t).signOut()}const wa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wa,"1"),this.storage.removeItem(wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=1e3,t1=10;class kg extends Pg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);gA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,t1):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},e1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kg.type="LOCAL";const n1=kg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng extends Pg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ng.type="SESSION";const Vg=Ng;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Za(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await s1(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Za.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Ru("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function i1(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function o1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a1(){return navigator?.serviceWorker?.controller||null}function l1(){return Dg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="firebaseLocalStorageDb",c1=1,ba="firebaseLocalStorage",xg="fbase_key";class uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function el(t,e){return t.transaction([ba],e?"readwrite":"readonly").objectStore(ba)}function u1(){const t=indexedDB.deleteDatabase(Og);return new uo(t).toPromise()}function Cc(){const t=indexedDB.open(Og,c1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ba,{keyPath:xg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ba)?e(s):(s.close(),await u1(),e(await Cc()))})})}async function _f(t,e,n){const s=el(t,!0).put({[xg]:e,value:n});return new uo(s).toPromise()}async function h1(t,e){const n=el(t,!1).get(e),s=await new uo(n).toPromise();return s===void 0?null:s.value}function yf(t,e){const n=el(t,!0).delete(e);return new uo(n).toPromise()}const d1=800,f1=3;class Lg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>f1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Za._getInstance(l1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await o1(),!this.activeServiceWorker)return;this.sender=new r1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||a1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cc();return await _f(e,wa,"1"),await yf(e,wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_f(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>h1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=el(r,!1).getAll();return new uo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lg.type="LOCAL";const p1=Lg;new ao(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t,e){return e?Un(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends Iu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function g1(t){return Sg(t.auth,new Su(t),t.bypassAuthState)}function _1(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),HA(n,new Su(t),t.bypassAuthState)}async function y1(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),qA(n,new Su(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return g1;case"linkViaPopup":case"linkViaRedirect":return y1;case"reauthViaPopup":case"reauthViaRedirect":return _1;default:un(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=new ao(2e3,1e4);class mr extends Mg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,v1.get())};e()}}mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="pendingRedirect",Yo=new Map;class w1 extends Mg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const s=await b1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function b1(t,e){const n=A1(e),s=I1(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function T1(t,e){Yo.set(t._key(),e)}function I1(t){return Un(t._redirectPersistence)}function A1(t){return Qo(E1,t.config.apiKey,t.name)}async function R1(t,e,n=!1){if(Gt(t.app))return Promise.reject($n(t));const s=er(t),r=m1(s,e),o=await new w1(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=10*60*1e3;class C1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!P1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Fg(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(bn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S1&&this.cachedEventUids.clear(),this.cachedEventUids.has(vf(e))}saveEventToCache(e){this.cachedEventUids.add(vf(e)),this.lastProcessedEventTime=Date.now()}}function vf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fg({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function P1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(t,e={}){return Qn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V1=/^https?/;async function D1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await k1(t);for(const n of e)try{if(O1(n))return}catch{}un(t,"unauthorized-domain")}function O1(t){const e=Ac(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!V1.test(n))return!1;if(N1.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new ao(3e4,6e4);function Ef(){const t=Tn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function L1(t){return new Promise((e,n)=>{function s(){Ef(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ef(),n(bn(t,"network-request-failed"))},timeout:x1.get()})}if(Tn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Tn().gapi?.load)s();else{const r=AA("iframefcb");return Tn()[r]=()=>{gapi.load?s():n(bn(t,"network-request-failed"))},bg(`${IA()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw Jo=null,e})}let Jo=null;function M1(t){return Jo=Jo||L1(t),Jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=new ao(5e3,15e3),U1="__/auth/iframe",B1="emulator/auth/iframe",$1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},j1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function q1(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wu(e,B1):`https://${t.config.authDomain}/${U1}`,s={apiKey:e.apiKey,appName:t.name,v:$r},r=j1.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${oo(s).slice(1)}`}async function H1(t){const e=await M1(t),n=Tn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:q1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$1,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),l=Tn().setTimeout(()=>{i(o)},F1.get());function c(){Tn().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},G1=500,K1=600,z1="_blank",Q1="http://localhost";class wf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Y1(t,e,n,s=G1,r=K1){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...W1,width:s.toString(),height:r.toString(),top:i,left:o},u=Ct().toLowerCase();n&&(l=mg(u)?z1:n),fg(u)&&(e=e||Q1,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[y,k])=>`${g}${y}=${k},`,"");if(mA(u)&&l!=="_self")return J1(e||"",l),new wf(null);const p=window.open(e||"",l,f);de(p,t,"popup-blocked");try{p.focus()}catch{}return new wf(p)}function J1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="__/auth/handler",Z1="emulator/auth/handler",eR=encodeURIComponent("fac");async function bf(t,e,n,s,r,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:$r,eventId:r};if(e instanceof Ag){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(i||{}))o[f]=p}if(e instanceof co){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${eR}=${encodeURIComponent(c)}`:"";return`${tR(t)}?${oo(l).slice(1)}${u}`}function tR({config:t}){return t.emulator?wu(t,Z1):`https://${t.authDomain}/${X1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="webStorageSupport";class nR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vg,this._completeRedirectFn=R1,this._overrideRedirectResult=T1}async _openPopup(e,n,s,r){Wn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await bf(e,n,s,Ac(),r);return Y1(e,i,Ru())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await bf(e,n,s,Ac(),r);return i1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Wn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await H1(e),s=new C1(e);return n.register("authEvent",r=>(de(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xl,{type:Xl},r=>{const i=r?.[0]?.[Xl];i!==void 0&&n(!!i),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Eg()||pg()||Tu()}}const sR=nR;var Tf="@firebase/auth",If="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oR(t){zs(new bs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wg(t)},u=new wA(s,r,i,c);return NA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),zs(new bs("auth-internal",e=>{const n=er(e.getProvider("auth").getImmediate());return(s=>new rR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Tf,If,iR(t)),wn(Tf,If,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=5*60,lR=Zm("authIdTokenMaxAge")||aR;let Af=null;const cR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>lR)return;const r=n?.token;Af!==r&&(Af=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function uR(t=vu()){const e=Ja(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kA(t,{popupRedirectResolver:sR,persistence:[p1,n1,Vg]}),s=Zm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=cR(i.toString());JA(n,o,()=>o(n.currentUser)),YA(n,l=>o(l))}}const r=Ym("auth");return r&&VA(n,`http://${r}`),n}function hR(){return document.getElementsByTagName("head")?.[0]??document}bA({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=bn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",hR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oR("Browser");var dR="firebase",fR="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(dR,fR,"app");var Rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _s,Ug;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,E){function I(){}I.prototype=E.prototype,w.F=E.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(R,A,C){for(var b=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)b[Je-2]=arguments[Je];return E.prototype[A].apply(R,b)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,E,I){I||(I=0);const R=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)R[A]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(A=0;A<16;++A)R[A]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=w.g[0],I=w.g[1],A=w.g[2];let C=w.g[3],b;b=E+(C^I&(A^C))+R[0]+3614090360&4294967295,E=I+(b<<7&4294967295|b>>>25),b=C+(A^E&(I^A))+R[1]+3905402710&4294967295,C=E+(b<<12&4294967295|b>>>20),b=A+(I^C&(E^I))+R[2]+606105819&4294967295,A=C+(b<<17&4294967295|b>>>15),b=I+(E^A&(C^E))+R[3]+3250441966&4294967295,I=A+(b<<22&4294967295|b>>>10),b=E+(C^I&(A^C))+R[4]+4118548399&4294967295,E=I+(b<<7&4294967295|b>>>25),b=C+(A^E&(I^A))+R[5]+1200080426&4294967295,C=E+(b<<12&4294967295|b>>>20),b=A+(I^C&(E^I))+R[6]+2821735955&4294967295,A=C+(b<<17&4294967295|b>>>15),b=I+(E^A&(C^E))+R[7]+4249261313&4294967295,I=A+(b<<22&4294967295|b>>>10),b=E+(C^I&(A^C))+R[8]+1770035416&4294967295,E=I+(b<<7&4294967295|b>>>25),b=C+(A^E&(I^A))+R[9]+2336552879&4294967295,C=E+(b<<12&4294967295|b>>>20),b=A+(I^C&(E^I))+R[10]+4294925233&4294967295,A=C+(b<<17&4294967295|b>>>15),b=I+(E^A&(C^E))+R[11]+2304563134&4294967295,I=A+(b<<22&4294967295|b>>>10),b=E+(C^I&(A^C))+R[12]+1804603682&4294967295,E=I+(b<<7&4294967295|b>>>25),b=C+(A^E&(I^A))+R[13]+4254626195&4294967295,C=E+(b<<12&4294967295|b>>>20),b=A+(I^C&(E^I))+R[14]+2792965006&4294967295,A=C+(b<<17&4294967295|b>>>15),b=I+(E^A&(C^E))+R[15]+1236535329&4294967295,I=A+(b<<22&4294967295|b>>>10),b=E+(A^C&(I^A))+R[1]+4129170786&4294967295,E=I+(b<<5&4294967295|b>>>27),b=C+(I^A&(E^I))+R[6]+3225465664&4294967295,C=E+(b<<9&4294967295|b>>>23),b=A+(E^I&(C^E))+R[11]+643717713&4294967295,A=C+(b<<14&4294967295|b>>>18),b=I+(C^E&(A^C))+R[0]+3921069994&4294967295,I=A+(b<<20&4294967295|b>>>12),b=E+(A^C&(I^A))+R[5]+3593408605&4294967295,E=I+(b<<5&4294967295|b>>>27),b=C+(I^A&(E^I))+R[10]+38016083&4294967295,C=E+(b<<9&4294967295|b>>>23),b=A+(E^I&(C^E))+R[15]+3634488961&4294967295,A=C+(b<<14&4294967295|b>>>18),b=I+(C^E&(A^C))+R[4]+3889429448&4294967295,I=A+(b<<20&4294967295|b>>>12),b=E+(A^C&(I^A))+R[9]+568446438&4294967295,E=I+(b<<5&4294967295|b>>>27),b=C+(I^A&(E^I))+R[14]+3275163606&4294967295,C=E+(b<<9&4294967295|b>>>23),b=A+(E^I&(C^E))+R[3]+4107603335&4294967295,A=C+(b<<14&4294967295|b>>>18),b=I+(C^E&(A^C))+R[8]+1163531501&4294967295,I=A+(b<<20&4294967295|b>>>12),b=E+(A^C&(I^A))+R[13]+2850285829&4294967295,E=I+(b<<5&4294967295|b>>>27),b=C+(I^A&(E^I))+R[2]+4243563512&4294967295,C=E+(b<<9&4294967295|b>>>23),b=A+(E^I&(C^E))+R[7]+1735328473&4294967295,A=C+(b<<14&4294967295|b>>>18),b=I+(C^E&(A^C))+R[12]+2368359562&4294967295,I=A+(b<<20&4294967295|b>>>12),b=E+(I^A^C)+R[5]+4294588738&4294967295,E=I+(b<<4&4294967295|b>>>28),b=C+(E^I^A)+R[8]+2272392833&4294967295,C=E+(b<<11&4294967295|b>>>21),b=A+(C^E^I)+R[11]+1839030562&4294967295,A=C+(b<<16&4294967295|b>>>16),b=I+(A^C^E)+R[14]+4259657740&4294967295,I=A+(b<<23&4294967295|b>>>9),b=E+(I^A^C)+R[1]+2763975236&4294967295,E=I+(b<<4&4294967295|b>>>28),b=C+(E^I^A)+R[4]+1272893353&4294967295,C=E+(b<<11&4294967295|b>>>21),b=A+(C^E^I)+R[7]+4139469664&4294967295,A=C+(b<<16&4294967295|b>>>16),b=I+(A^C^E)+R[10]+3200236656&4294967295,I=A+(b<<23&4294967295|b>>>9),b=E+(I^A^C)+R[13]+681279174&4294967295,E=I+(b<<4&4294967295|b>>>28),b=C+(E^I^A)+R[0]+3936430074&4294967295,C=E+(b<<11&4294967295|b>>>21),b=A+(C^E^I)+R[3]+3572445317&4294967295,A=C+(b<<16&4294967295|b>>>16),b=I+(A^C^E)+R[6]+76029189&4294967295,I=A+(b<<23&4294967295|b>>>9),b=E+(I^A^C)+R[9]+3654602809&4294967295,E=I+(b<<4&4294967295|b>>>28),b=C+(E^I^A)+R[12]+3873151461&4294967295,C=E+(b<<11&4294967295|b>>>21),b=A+(C^E^I)+R[15]+530742520&4294967295,A=C+(b<<16&4294967295|b>>>16),b=I+(A^C^E)+R[2]+3299628645&4294967295,I=A+(b<<23&4294967295|b>>>9),b=E+(A^(I|~C))+R[0]+4096336452&4294967295,E=I+(b<<6&4294967295|b>>>26),b=C+(I^(E|~A))+R[7]+1126891415&4294967295,C=E+(b<<10&4294967295|b>>>22),b=A+(E^(C|~I))+R[14]+2878612391&4294967295,A=C+(b<<15&4294967295|b>>>17),b=I+(C^(A|~E))+R[5]+4237533241&4294967295,I=A+(b<<21&4294967295|b>>>11),b=E+(A^(I|~C))+R[12]+1700485571&4294967295,E=I+(b<<6&4294967295|b>>>26),b=C+(I^(E|~A))+R[3]+2399980690&4294967295,C=E+(b<<10&4294967295|b>>>22),b=A+(E^(C|~I))+R[10]+4293915773&4294967295,A=C+(b<<15&4294967295|b>>>17),b=I+(C^(A|~E))+R[1]+2240044497&4294967295,I=A+(b<<21&4294967295|b>>>11),b=E+(A^(I|~C))+R[8]+1873313359&4294967295,E=I+(b<<6&4294967295|b>>>26),b=C+(I^(E|~A))+R[15]+4264355552&4294967295,C=E+(b<<10&4294967295|b>>>22),b=A+(E^(C|~I))+R[6]+2734768916&4294967295,A=C+(b<<15&4294967295|b>>>17),b=I+(C^(A|~E))+R[13]+1309151649&4294967295,I=A+(b<<21&4294967295|b>>>11),b=E+(A^(I|~C))+R[4]+4149444226&4294967295,E=I+(b<<6&4294967295|b>>>26),b=C+(I^(E|~A))+R[11]+3174756917&4294967295,C=E+(b<<10&4294967295|b>>>22),b=A+(E^(C|~I))+R[2]+718787259&4294967295,A=C+(b<<15&4294967295|b>>>17),b=I+(C^(A|~E))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+E&4294967295,w.g[1]=w.g[1]+(A+(b<<21&4294967295|b>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+C&4294967295}s.prototype.v=function(w,E){E===void 0&&(E=w.length);const I=E-this.blockSize,R=this.C;let A=this.h,C=0;for(;C<E;){if(A==0)for(;C<=I;)r(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<E;)if(R[A++]=w.charCodeAt(C++),A==this.blockSize){r(this,R),A=0;break}}else for(;C<E;)if(R[A++]=w[C++],A==this.blockSize){r(this,R),A=0;break}}this.h=A,this.o+=E},s.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var E=1;E<w.length-8;++E)w[E]=0;E=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=E&255,E/=256;for(this.v(w),w=Array(16),E=0,I=0;I<4;++I)for(let R=0;R<32;R+=8)w[E++]=this.g[I]>>>R&255;return w};function i(w,E){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=E(w)}function o(w,E){this.h=E;const I=[];let R=!0;for(let A=w.length-1;A>=0;A--){const C=w[A]|0;R&&C==E||(I[A]=C,R=!1)}this.g=I}var l={};function c(w){return-128<=w&&w<128?i(w,function(E){return new o([E|0],E<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return O(u(-w));const E=[];let I=1;for(let R=0;w>=I;R++)E[R]=w/I|0,I*=4294967296;return new o(E,0)}function f(w,E){if(w.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(w.charAt(0)=="-")return O(f(w.substring(1),E));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=u(Math.pow(E,8));let R=p;for(let C=0;C<w.length;C+=8){var A=Math.min(8,w.length-C);const b=parseInt(w.substring(C,C+A),E);A<8?(A=u(Math.pow(E,A)),R=R.j(A).add(u(b))):(R=R.j(I),R=R.add(u(b)))}return R}var p=c(0),g=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(V(this))return-O(this).m();let w=0,E=1;for(let I=0;I<this.g.length;I++){const R=this.i(I);w+=(R>=0?R:4294967296+R)*E,E*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(V(this))return"-"+O(this).toString(w);const E=u(Math.pow(w,6));var I=this;let R="";for(;;){const A=X(I,E).g;I=K(I,A.j(E));let C=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=A,k(I))return C+R;for(;C.length<6;)C="0"+C;R=C+R}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(let E=0;E<w.g.length;E++)if(w.g[E]!=0)return!1;return!0}function V(w){return w.h==-1}t.l=function(w){return w=K(this,w),V(w)?-1:k(w)?0:1};function O(w){const E=w.g.length,I=[];for(let R=0;R<E;R++)I[R]=~w.g[R];return new o(I,~w.h).add(g)}t.abs=function(){return V(this)?O(this):this},t.add=function(w){const E=Math.max(this.g.length,w.g.length),I=[];let R=0;for(let A=0;A<=E;A++){let C=R+(this.i(A)&65535)+(w.i(A)&65535),b=(C>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);R=b>>>16,C&=65535,b&=65535,I[A]=b<<16|C}return new o(I,I[I.length-1]&-2147483648?-1:0)};function K(w,E){return w.add(O(E))}t.j=function(w){if(k(this)||k(w))return p;if(V(this))return V(w)?O(this).j(O(w)):O(O(this).j(w));if(V(w))return O(this.j(O(w)));if(this.l(y)<0&&w.l(y)<0)return u(this.m()*w.m());const E=this.g.length+w.g.length,I=[];for(var R=0;R<2*E;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(let A=0;A<w.g.length;A++){const C=this.i(R)>>>16,b=this.i(R)&65535,Je=w.i(A)>>>16,Pt=w.i(A)&65535;I[2*R+2*A]+=b*Pt,H(I,2*R+2*A),I[2*R+2*A+1]+=C*Pt,H(I,2*R+2*A+1),I[2*R+2*A+1]+=b*Je,H(I,2*R+2*A+1),I[2*R+2*A+2]+=C*Je,H(I,2*R+2*A+2)}for(w=0;w<E;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=E;w<2*E;w++)I[w]=0;return new o(I,0)};function H(w,E){for(;(w[E]&65535)!=w[E];)w[E+1]+=w[E]>>>16,w[E]&=65535,E++}function z(w,E){this.g=w,this.h=E}function X(w,E){if(k(E))throw Error("division by zero");if(k(w))return new z(p,p);if(V(w))return E=X(O(w),E),new z(O(E.g),O(E.h));if(V(E))return E=X(w,O(E)),new z(O(E.g),E.h);if(w.g.length>30){if(V(w)||V(E))throw Error("slowDivide_ only works with positive integers.");for(var I=g,R=E;R.l(w)<=0;)I=G(I),R=G(R);var A=U(I,1),C=U(R,1);for(R=U(R,2),I=U(I,2);!k(R);){var b=C.add(R);b.l(w)<=0&&(A=A.add(I),C=b),R=U(R,1),I=U(I,1)}return E=K(w,A.j(E)),new z(A,E)}for(A=p;w.l(E)>=0;){for(I=Math.max(1,Math.floor(w.m()/E.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),C=u(I),b=C.j(E);V(b)||b.l(w)>0;)I-=R,C=u(I),b=C.j(E);k(C)&&(C=g),A=A.add(C),w=K(w,b)}return new z(A,w)}t.B=function(w){return X(this,w).h},t.and=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)&w.i(R);return new o(I,this.h&w.h)},t.or=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)|w.i(R);return new o(I,this.h|w.h)},t.xor=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)^w.i(R);return new o(I,this.h^w.h)};function G(w){const E=w.g.length+1,I=[];for(let R=0;R<E;R++)I[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(I,w.h)}function U(w,E){const I=E>>5;E%=32;const R=w.g.length-I,A=[];for(let C=0;C<R;C++)A[C]=E>0?w.i(C+I)>>>E|w.i(C+I+1)<<32-E:w.i(C+I);return new o(A,w.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Ug=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,_s=o}).apply(typeof Rf<"u"?Rf:typeof self<"u"?self:typeof window<"u"?window:{});var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bg,_i,$g,Xo,Pc,jg,qg,Hg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oo=="object"&&Oo];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=n(this);function r(a,h){if(h)e:{var m=s;a=a.split(".");for(var _=0;_<a.length-1;_++){var S=a[_];if(!(S in m))break e;m=m[S]}a=a[a.length-1],_=m[a],h=h(_),h!=_&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(h){var m=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&m.push([_,h[_]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,m){return a.call.apply(a.bind,arguments)}function u(a,h,m){return u=c,u.apply(null,arguments)}function f(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function p(a,h){function m(){}m.prototype=h.prototype,a.Z=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Ob=function(_,S,N){for(var Q=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)Q[ye-2]=arguments[ye];return h.prototype[S].apply(_,Q)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const m=Array(h);for(let _=0;_<h;_++)m[_]=a[_];return m}return[]}function k(a,h){for(let _=1;_<arguments.length;_++){const S=arguments[_];var m=typeof S;if(m=m!="object"?m:S?Array.isArray(S)?"array":m:"null",m=="array"||m=="object"&&typeof S.length=="number"){m=a.length||0;const N=S.length||0;a.length=m+N;for(let Q=0;Q<N;Q++)a[m+Q]=S[Q]}else a.push(S)}}class V{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){o.setTimeout(()=>{throw a},0)}function K(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class H{constructor(){this.h=this.g=null}add(h,m){const _=z.get();_.set(h,m),this.h?this.h.next=_:this.g=_,this.h=_}}var z=new V(()=>new X,a=>a.reset());class X{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let G,U=!1,w=new H,E=()=>{const a=Promise.resolve(void 0);G=()=>{a.then(I)}};function I(){for(var a;a=K();){try{a.h.call(a.g)}catch(m){O(m)}var h=z;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};o.addEventListener("test",m,h),o.removeEventListener("test",m,h)}catch{}return a}();function b(a){return/^[\s\xa0]*$/.test(a)}function Je(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Je,A),Je.prototype.init=function(a,h){const m=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Je.Z.h.call(this)},Je.prototype.h=function(){Je.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Pt="closure_listenable_"+(Math.random()*1e6|0),Xe=0;function Pe(a,h,m,_,S){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!_,this.ha=S,this.key=++Xe,this.da=this.fa=!1}function Ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Lt(a,h,m){for(const _ in a)h.call(m,a[_],_,a)}function dn(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function jt(a){const h={};for(const m in a)h[m]=a[m];return h}const dt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vn(a,h){let m,_;for(let S=1;S<arguments.length;S++){_=arguments[S];for(m in _)a[m]=_[m];for(let N=0;N<dt.length;N++)m=dt[N],Object.prototype.hasOwnProperty.call(_,m)&&(a[m]=_[m])}}function en(a){this.src=a,this.g={},this.h=0}en.prototype.add=function(a,h,m,_,S){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const Q=yt(a,h,_,S);return Q>-1?(h=a[Q],m||(h.fa=!1)):(h=new Pe(h,this.src,N,!!_,S),h.fa=m,a.push(h)),h};function tn(a,h){const m=h.type;if(m in a.g){var _=a.g[m],S=Array.prototype.indexOf.call(_,h,void 0),N;(N=S>=0)&&Array.prototype.splice.call(_,S,1),N&&(Ie(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function yt(a,h,m,_){for(let S=0;S<a.length;++S){const N=a[S];if(!N.da&&N.listener==h&&N.capture==!!m&&N.ha==_)return S}return-1}var L="closure_lm_"+(Math.random()*1e6|0),re={};function ee(a,h,m,_,S){if(_&&_.once)return Le(a,h,m,_,S);if(Array.isArray(h)){for(let N=0;N<h.length;N++)ee(a,h[N],m,_,S);return null}return m=Y(m),a&&a[Pt]?a.J(h,m,l(_)?!!_.capture:!!_,S):oe(a,h,m,!1,_,S)}function oe(a,h,m,_,S,N){if(!h)throw Error("Invalid event type");const Q=l(S)?!!S.capture:!!S;let ye=D(a);if(ye||(a[L]=ye=new en(a)),m=ye.add(h,m,_,Q,N),m.proxy)return m;if(_=ve(),m.proxy=_,_.src=a,_.listener=m,a.addEventListener)C||(S=Q),S===void 0&&(S=!1),a.addEventListener(h.toString(),_,S);else if(a.attachEvent)a.attachEvent(P(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ve(){function a(m){return h.call(a.src,a.listener,m)}const h=B;return a}function Le(a,h,m,_,S){if(Array.isArray(h)){for(let N=0;N<h.length;N++)Le(a,h[N],m,_,S);return null}return m=Y(m),a&&a[Pt]?a.K(h,m,l(_)?!!_.capture:!!_,S):oe(a,h,m,!0,_,S)}function v(a,h,m,_,S){if(Array.isArray(h))for(var N=0;N<h.length;N++)v(a,h[N],m,_,S);else _=l(_)?!!_.capture:!!_,m=Y(m),a&&a[Pt]?(a=a.i,N=String(h).toString(),N in a.g&&(h=a.g[N],m=yt(h,m,_,S),m>-1&&(Ie(h[m]),Array.prototype.splice.call(h,m,1),h.length==0&&(delete a.g[N],a.h--)))):a&&(a=D(a))&&(h=a.g[h.toString()],a=-1,h&&(a=yt(h,m,_,S)),(m=a>-1?h[a]:null)&&T(m))}function T(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Pt])tn(h.i,a);else{var m=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(m,_,a.capture):h.detachEvent?h.detachEvent(P(m),_):h.addListener&&h.removeListener&&h.removeListener(_),(m=D(h))?(tn(m,a),m.h==0&&(m.src=null,h[L]=null)):Ie(a)}}}function P(a){return a in re?re[a]:re[a]="on"+a}function B(a,h){if(a.da)a=!0;else{h=new Je(h,this);const m=a.listener,_=a.ha||a.src;a.fa&&T(a),a=m.call(_,h)}return a}function D(a){return a=a[L],a instanceof en?a:null}var F="__closure_events_fn_"+(Math.random()*1e9>>>0);function Y(a){return typeof a=="function"?a:(a[F]||(a[F]=function(h){return a.handleEvent(h)}),a[F])}function W(){R.call(this),this.i=new en(this),this.M=this,this.G=null}p(W,R),W.prototype[Pt]=!0,W.prototype.removeEventListener=function(a,h,m,_){v(this,a,h,m,_)};function j(a,h){var m,_=a.G;if(_)for(m=[];_;_=_.G)m.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var S=h;h=new A(_,a),Vn(h,S)}S=!0;let N,Q;if(m)for(Q=m.length-1;Q>=0;Q--)N=h.g=m[Q],S=q(N,_,!0,h)&&S;if(N=h.g=a,S=q(N,_,!0,h)&&S,S=q(N,_,!1,h)&&S,m)for(Q=0;Q<m.length;Q++)N=h.g=m[Q],S=q(N,_,!1,h)&&S}W.prototype.N=function(){if(W.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const m=a.g[h];for(let _=0;_<m.length;_++)Ie(m[_]);delete a.g[h],a.h--}}this.G=null},W.prototype.J=function(a,h,m,_){return this.i.add(String(a),h,!1,m,_)},W.prototype.K=function(a,h,m,_){return this.i.add(String(a),h,!0,m,_)};function q(a,h,m,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let S=!0;for(let N=0;N<h.length;++N){const Q=h[N];if(Q&&!Q.da&&Q.capture==m){const ye=Q.listener,st=Q.ha||Q.src;Q.fa&&tn(a.i,Q),S=ye.call(st,_)!==!1&&S}}return S&&!_.defaultPrevented}function ce(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function te(a){a.g=ce(()=>{a.g=null,a.i&&(a.i=!1,te(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ae extends R{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:te(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ue(a){R.call(this),this.h=a,this.g={}}p(ue,R);var Ee=[];function xe(a){Lt(a.g,function(h,m){this.g.hasOwnProperty(m)&&T(h)},a),a.g={}}ue.prototype.N=function(){ue.Z.N.call(this),xe(this)},ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Se=o.JSON.stringify,vt=o.JSON.parse,at=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Mt(){}function Et(){}var nn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function rr(){A.call(this,"d")}p(rr,A);function ft(){A.call(this,"c")}p(ft,A);var lt={},Qr=null;function xs(){return Qr=Qr||new W}lt.Ia="serverreachability";function ph(a){A.call(this,lt.Ia,a)}p(ph,A);function Yr(a){const h=xs();j(h,new ph(h))}lt.STAT_EVENT="statevent";function mh(a,h){A.call(this,lt.STAT_EVENT,a),this.stat=h}p(mh,A);function kt(a){const h=xs();j(h,new mh(h,a))}lt.Ja="timingevent";function gh(a,h){A.call(this,lt.Ja,a),this.size=h}p(gh,A);function Jr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Xr(){this.g=!0}Xr.prototype.ua=function(){this.g=!1};function Iy(a,h,m,_,S,N){a.info(function(){if(a.g)if(N){var Q="",ye=N.split("&");for(let Me=0;Me<ye.length;Me++){var st=ye[Me].split("=");if(st.length>1){const ct=st[0];st=st[1];const pn=ct.split("_");Q=pn.length>=2&&pn[1]=="type"?Q+(ct+"="+st+"&"):Q+(ct+"=redacted&")}}}else Q=null;else Q=N;return"XMLHTTP REQ ("+_+") [attempt "+S+"]: "+h+`
`+m+`
`+Q})}function Ay(a,h,m,_,S,N,Q){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+S+"]: "+h+`
`+m+`
`+N+" "+Q})}function ir(a,h,m,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Sy(a,m)+(_?" "+_:"")})}function Ry(a,h){a.info(function(){return"TIMEOUT: "+h})}Xr.prototype.info=function(){};function Sy(a,h){if(!a.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var m=N[a];if(!(m.length<2)){var _=m[1];if(Array.isArray(_)&&!(_.length<1)){var S=_[0];if(S!="noop"&&S!="stop"&&S!="close")for(let Q=1;Q<_.length;Q++)_[Q]=""}}}}return Se(N)}catch{return h}}var Eo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},_h={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},yh;function yl(){}p(yl,Mt),yl.prototype.g=function(){return new XMLHttpRequest},yh=new yl;function Zr(a){return encodeURIComponent(String(a))}function Cy(a){var h=1;a=a.split(":");const m=[];for(;h>0&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function Jn(a,h,m,_){this.j=a,this.i=h,this.l=m,this.S=_||1,this.V=new ue(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new vh}function vh(){this.i=null,this.g="",this.h=!1}var Eh={},vl={};function El(a,h,m){a.M=1,a.A=bo(fn(h)),a.u=m,a.R=!0,wh(a,null)}function wh(a,h){a.F=Date.now(),wo(a),a.B=fn(a.A);var m=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),Oh(m.i,"t",_),a.C=0,m=a.j.L,a.h=new vh,a.g=Xh(a.j,m?h:null,!a.u),a.P>0&&(a.O=new ae(u(a.Y,a,a.g),a.P)),h=a.V,m=a.g,_=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(Ee[0]=S.toString()),S=Ee);for(let N=0;N<S.length;N++){const Q=ee(m,S[N],_||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.J?jt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Yr(),Iy(a.i,a.v,a.B,a.l,a.S,a.u)}Jn.prototype.ba=function(a){a=a.target;const h=this.O;h&&es(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const ye=es(this.g),st=this.g.ya(),Me=this.g.ca();if(!(ye<3)&&(ye!=3||this.g&&(this.h.h||this.g.la()||$h(this.g)))){this.K||ye!=4||st==7||(st==8||Me<=0?Yr(3):Yr(2)),wl(this);var h=this.g.ca();this.X=h;var m=Py(this);if(this.o=h==200,Ay(this.i,this.v,this.B,this.l,this.S,ye,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,S=this.g;if((_=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(_)){var N=_;break t}}N=null}if(a=N)ir(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bl(this,a);else{this.o=!1,this.m=3,kt(12),Ls(this),ei(this);break e}}if(this.R){a=!0;let ct;for(;!this.K&&this.C<m.length;)if(ct=ky(this,m),ct==vl){ye==4&&(this.m=4,kt(14),a=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Eh){this.m=4,kt(15),ir(this.i,this.l,m,"[Invalid Chunk]"),a=!1;break}else ir(this.i,this.l,ct,null),bl(this,ct);if(bh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ye!=4||m.length!=0||this.h.h||(this.m=1,kt(16),a=!1),this.o=this.o&&a,!a)ir(this.i,this.l,m,"[Invalid Chunked Response]"),Ls(this),ei(this);else if(m.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),kl(Q),Q.P=!0,kt(11))}}else ir(this.i,this.l,m,null),bl(this,m);ye==4&&Ls(this),this.o&&!this.K&&(ye==4?zh(this.j,this):(this.o=!1,wo(this)))}else Hy(this.g),h==400&&m.indexOf("Unknown SID")>0?(this.m=3,kt(12)):(this.m=0,kt(13)),Ls(this),ei(this)}}}catch{}finally{}};function Py(a){if(!bh(a))return a.g.la();const h=$h(a.g);if(h==="")return"";let m="";const _=h.length,S=es(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ls(a),ei(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<_;N++)a.h.h=!0,m+=a.h.i.decode(h[N],{stream:!(S&&N==_-1)});return h.length=0,a.h.g+=m,a.C=0,a.h.g}function bh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ky(a,h){var m=a.C,_=h.indexOf(`
`,m);return _==-1?vl:(m=Number(h.substring(m,_)),isNaN(m)?Eh:(_+=1,_+m>h.length?vl:(h=h.slice(_,_+m),a.C=_+m,h)))}Jn.prototype.cancel=function(){this.K=!0,Ls(this)};function wo(a){a.T=Date.now()+a.H,Th(a,a.H)}function Th(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Jr(u(a.aa,a),h)}function wl(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Jn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ry(this.i,this.B),this.M!=2&&(Yr(),kt(17)),Ls(this),this.m=2,ei(this)):Th(this,this.T-a)};function ei(a){a.j.I==0||a.K||zh(a.j,a)}function Ls(a){wl(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,xe(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function bl(a,h){try{var m=a.j;if(m.I!=0&&(m.g==a||Tl(m.h,a))){if(!a.L&&Tl(m.h,a)&&m.I==3){try{var _=m.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var S=_;if(S[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<a.F)So(m),Ao(m);else break e;Pl(m),kt(18)}}else m.xa=S[1],0<m.xa-m.K&&S[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=Jr(u(m.Va,m),6e3));Rh(m.h)<=1&&m.ta&&(m.ta=void 0)}else Fs(m,11)}else if((a.L||m.g==a)&&So(m),!b(h))for(S=m.Ba.g.parse(h),h=0;h<S.length;h++){let Me=S[h];const ct=Me[0];if(!(ct<=m.K))if(m.K=ct,Me=Me[1],m.I==2)if(Me[0]=="c"){m.M=Me[1],m.ba=Me[2];const pn=Me[3];pn!=null&&(m.ka=pn,m.j.info("VER="+m.ka));const Us=Me[4];Us!=null&&(m.za=Us,m.j.info("SVER="+m.za));const ts=Me[5];ts!=null&&typeof ts=="number"&&ts>0&&(_=1.5*ts,m.O=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const ns=a.g;if(ns){const Po=ns.g?ns.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Po){var N=_.h;N.g||Po.indexOf("spdy")==-1&&Po.indexOf("quic")==-1&&Po.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Il(N,N.h),N.h=null))}if(_.G){const Nl=ns.g?ns.g.getResponseHeader("X-HTTP-Session-Id"):null;Nl&&(_.wa=Nl,qe(_.J,_.G,Nl))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-a.F,m.j.info("Handshake RTT: "+m.T+"ms")),_=m;var Q=a;if(_.na=Jh(_,_.L?_.ba:null,_.W),Q.L){Sh(_.h,Q);var ye=Q,st=_.O;st&&(ye.H=st),ye.D&&(wl(ye),wo(ye)),_.g=Q}else Gh(_);m.i.length>0&&Ro(m)}else Me[0]!="stop"&&Me[0]!="close"||Fs(m,7);else m.I==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Fs(m,7):Cl(m):Me[0]!="noop"&&m.l&&m.l.qa(Me),m.A=0)}}Yr(4)}catch{}}var Ny=class{constructor(a,h){this.g=a,this.map=h}};function Ih(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ah(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Rh(a){return a.h?1:a.g?a.g.size:0}function Tl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Il(a,h){a.g?a.g.add(h):a.h=h}function Sh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ih.prototype.cancel=function(){if(this.i=Ch(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ch(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.G);return h}return y(a.i)}var Ph=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vy(a,h){if(a){a=a.split("&");for(let m=0;m<a.length;m++){const _=a[m].indexOf("=");let S,N=null;_>=0?(S=a[m].substring(0,_),N=a[m].substring(_+1)):S=a[m],h(S,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Xn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Xn?(this.l=a.l,ti(this,a.j),this.o=a.o,this.g=a.g,ni(this,a.u),this.h=a.h,Al(this,xh(a.i)),this.m=a.m):a&&(h=String(a).match(Ph))?(this.l=!1,ti(this,h[1]||"",!0),this.o=si(h[2]||""),this.g=si(h[3]||"",!0),ni(this,h[4]),this.h=si(h[5]||"",!0),Al(this,h[6]||"",!0),this.m=si(h[7]||"")):(this.l=!1,this.i=new ii(null,this.l))}Xn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ri(h,kh,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ri(h,kh,!0),"@"),a.push(Zr(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&a.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(ri(m,m.charAt(0)=="/"?xy:Oy,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",ri(m,My)),a.join("")},Xn.prototype.resolve=function(a){const h=fn(this);let m=!!a.j;m?ti(h,a.j):m=!!a.o,m?h.o=a.o:m=!!a.g,m?h.g=a.g:m=a.u!=null;var _=a.h;if(m)ni(h,a.u);else if(m=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var S=h.h.lastIndexOf("/");S!=-1&&(_=h.h.slice(0,S+1)+_)}if(S=_,S==".."||S==".")_="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){_=S.lastIndexOf("/",0)==0,S=S.split("/");const N=[];for(let Q=0;Q<S.length;){const ye=S[Q++];ye=="."?_&&Q==S.length&&N.push(""):ye==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),_&&Q==S.length&&N.push("")):(N.push(ye),_=!0)}_=N.join("/")}else _=S}return m?h.h=_:m=a.i.toString()!=="",m?Al(h,xh(a.i)):m=!!a.m,m&&(h.m=a.m),h};function fn(a){return new Xn(a)}function ti(a,h,m){a.j=m?si(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ni(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Al(a,h,m){h instanceof ii?(a.i=h,Fy(a.i,a.l)):(m||(h=ri(h,Ly)),a.i=new ii(h,a.l))}function qe(a,h,m){a.i.set(h,m)}function bo(a){return qe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function si(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ri(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,Dy),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Dy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var kh=/[#\/\?@]/g,Oy=/[#\?:]/g,xy=/[#\?]/g,Ly=/[#\?@]/g,My=/#/g;function ii(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ms(a){a.g||(a.g=new Map,a.h=0,a.i&&Vy(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=ii.prototype,t.add=function(a,h){Ms(this),this.i=null,a=or(this,a);let m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function Nh(a,h){Ms(a),h=or(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Vh(a,h){return Ms(a),h=or(a,h),a.g.has(h)}t.forEach=function(a,h){Ms(this),this.g.forEach(function(m,_){m.forEach(function(S){a.call(h,S,_,this)},this)},this)};function Dh(a,h){Ms(a);let m=[];if(typeof h=="string")Vh(a,h)&&(m=m.concat(a.g.get(or(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)m=m.concat(a[h]);return m}t.set=function(a,h){return Ms(this),this.i=null,a=or(this,a),Vh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Dh(this,a),a.length>0?String(a[0]):h):h};function Oh(a,h,m){Nh(a,h),m.length>0&&(a.i=null,a.g.set(or(a,h),y(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var m=h[_];const S=Zr(m);m=Dh(this,m);for(let N=0;N<m.length;N++){let Q=S;m[N]!==""&&(Q+="="+Zr(m[N])),a.push(Q)}}return this.i=a.join("&")};function xh(a){const h=new ii;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function or(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Fy(a,h){h&&!a.j&&(Ms(a),a.i=null,a.g.forEach(function(m,_){const S=_.toLowerCase();_!=S&&(Nh(this,_),Oh(this,S,m))},a)),a.j=h}function Uy(a,h){const m=new Xr;if(o.Image){const _=new Image;_.onload=f(Zn,m,"TestLoadImage: loaded",!0,h,_),_.onerror=f(Zn,m,"TestLoadImage: error",!1,h,_),_.onabort=f(Zn,m,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(Zn,m,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function By(a,h){const m=new Xr,_=new AbortController,S=setTimeout(()=>{_.abort(),Zn(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(N=>{clearTimeout(S),N.ok?Zn(m,"TestPingServer: ok",!0,h):Zn(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),Zn(m,"TestPingServer: error",!1,h)})}function Zn(a,h,m,_,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),_(m)}catch{}}function $y(){this.g=new at}function Rl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Rl,Mt),Rl.prototype.g=function(){return new To(this.i,this.h)};function To(a,h){W.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(To,W),t=To.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ai(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,oi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Lh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Lh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?oi(this):ai(this),this.readyState==3&&Lh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,oi(this))},t.Na=function(a){this.g&&(this.response=a,oi(this))},t.ga=function(){this.g&&oi(this)};function oi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ai(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function ai(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(To.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mh(a){let h="";return Lt(a,function(m,_){h+=_,h+=":",h+=m,h+=`\r
`}),h}function Sl(a,h,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=Mh(m),typeof a=="string"?m!=null&&Zr(m):qe(a,h,m))}function Ge(a){W.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ge,W);var jy=/^https?$/i,qy=["POST","PUT"];t=Ge.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yh.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Fh(this,N);return}if(a=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var S in _)m.set(S,_[S]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const N of _.keys())m.set(N,_.get(N));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(N=>N.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(qy,h,void 0)>=0)||_||S||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,Q]of m)this.g.setRequestHeader(N,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){Fh(this,N)}};function Fh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Uh(a),Io(a)}function Uh(a){a.A||(a.A=!0,j(a,"complete"),j(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,j(this,"complete"),j(this,"abort"),Io(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Io(this,!0)),Ge.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Bh(this):this.Xa())},t.Xa=function(){Bh(this)};function Bh(a){if(a.h&&typeof i<"u"){if(a.v&&es(a)==4)setTimeout(a.Ca.bind(a),0);else if(j(a,"readystatechange"),es(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var _;if(_=N===0){let Q=String(a.D).match(Ph)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),_=!jy.test(Q?Q.toLowerCase():"")}m=_}if(m)j(a,"complete"),j(a,"success");else{a.o=6;try{var S=es(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",Uh(a)}}finally{Io(a)}}}}function Io(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const m=a.g;a.g=null,h||j(a,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function es(a){return a.g?a.g.readyState:0}t.ca=function(){try{return es(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),vt(h)}};function $h(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Hy(a){const h={};a=(a.g&&es(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(b(a[_]))continue;var m=Cy(a[_]);const S=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const N=h[S]||[];h[S]=N,N.push(m)}dn(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function li(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function jh(a){this.za=0,this.i=[],this.j=new Xr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=li("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=li("baseRetryDelayMs",5e3,a),this.Za=li("retryDelaySeedMs",1e4,a),this.Ta=li("forwardChannelMaxRetries",2,a),this.va=li("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ih(a&&a.concurrentRequestLimit),this.Ba=new $y,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=jh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,m,_){kt(0),this.W=a,this.H=h||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.J=Jh(this,null,this.W),Ro(this)};function Cl(a){if(qh(a),a.I==3){var h=a.V++,m=fn(a.J);if(qe(m,"SID",a.M),qe(m,"RID",h),qe(m,"TYPE","terminate"),ci(a,m),h=new Jn(a,a.j,h),h.M=2,h.A=bo(fn(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=h.A,m=!0),m||(h.g=Xh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),wo(h)}Yh(a)}function Ao(a){a.g&&(kl(a),a.g.cancel(),a.g=null)}function qh(a){Ao(a),a.v&&(o.clearTimeout(a.v),a.v=null),So(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ro(a){if(!Ah(a.h)&&!a.m){a.m=!0;var h=a.Ea;G||E(),U||(G(),U=!0),w.add(h,a),a.D=0}}function Wy(a,h){return Rh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Jr(u(a.Ea,a,h),Qh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new Jn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=jt(N),Vn(N,this.U)):N=this.U),this.u!==null||this.R||(S.J=N,N=null),this.S)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Wh(this,S,h),m=fn(this.J),qe(m,"RID",a),qe(m,"CVER",22),this.G&&qe(m,"X-HTTP-Session-Id",this.G),ci(this,m),N&&(this.R?h="headers="+Zr(Mh(N))+"&"+h:this.u&&Sl(m,this.u,N)),Il(this.h,S),this.Ra&&qe(m,"TYPE","init"),this.S?(qe(m,"$req",h),qe(m,"SID","null"),S.U=!0,El(S,m,null)):El(S,m,h),this.I=2}}else this.I==3&&(a?Hh(this,a):this.i.length==0||Ah(this.h)||Hh(this))};function Hh(a,h){var m;h?m=h.l:m=a.V++;const _=fn(a.J);qe(_,"SID",a.M),qe(_,"RID",m),qe(_,"AID",a.K),ci(a,_),a.u&&a.o&&Sl(_,a.u,a.o),m=new Jn(a,a.j,m,a.D+1),a.u===null&&(m.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Wh(a,m,1e3),m.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Il(a.h,m),El(m,_,h)}function ci(a,h){a.H&&Lt(a.H,function(m,_){qe(h,_,m)}),a.l&&Lt({},function(m,_){qe(h,_,m)})}function Wh(a,h,m){m=Math.min(a.i.length,m);const _=a.l?u(a.l.Ka,a.l,a):null;e:{var S=a.i;let ye=-1;for(;;){const st=["count="+m];ye==-1?m>0?(ye=S[0].g,st.push("ofs="+ye)):ye=0:st.push("ofs="+ye);let Me=!0;for(let ct=0;ct<m;ct++){var N=S[ct].g;const pn=S[ct].map;if(N-=ye,N<0)ye=Math.max(0,S[ct].g-100),Me=!1;else try{N="req"+N+"_"||"";try{var Q=pn instanceof Map?pn:Object.entries(pn);for(const[Us,ts]of Q){let ns=ts;l(ts)&&(ns=Se(ts)),st.push(N+Us+"="+encodeURIComponent(ns))}}catch(Us){throw st.push(N+"type="+encodeURIComponent("_badmap")),Us}}catch{_&&_(pn)}}if(Me){Q=st.join("&");break e}}Q=void 0}return a=a.i.splice(0,m),h.G=a,Q}function Gh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;G||E(),U||(G(),U=!0),w.add(h,a),a.A=0}}function Pl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Jr(u(a.Da,a),Qh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Kh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Jr(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,kt(10),Ao(this),Kh(this))};function kl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Kh(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=fn(a.na);qe(h,"RID","rpc"),qe(h,"SID",a.M),qe(h,"AID",a.K),qe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&qe(h,"TO",a.ia),qe(h,"TYPE","xmlhttp"),ci(a,h),a.u&&a.o&&Sl(h,a.u,a.o),a.O&&(a.g.H=a.O);var m=a.g;a=a.ba,m.M=1,m.A=bo(fn(h)),m.u=null,m.R=!0,wh(m,a)}t.Va=function(){this.C!=null&&(this.C=null,Ao(this),Pl(this),kt(19))};function So(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function zh(a,h){var m=null;if(a.g==h){So(a),kl(a),a.g=null;var _=2}else if(Tl(a.h,h))m=h.G,Sh(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){m=h.u?h.u.length:0,h=Date.now()-h.F;var S=a.D;_=xs(),j(_,new gh(_,m)),Ro(a)}else Gh(a);else if(S=h.m,S==3||S==0&&h.X>0||!(_==1&&Wy(a,h)||_==2&&Pl(a)))switch(m&&m.length>0&&(h=a.h,h.i=h.i.concat(m)),S){case 1:Fs(a,5);break;case 4:Fs(a,10);break;case 3:Fs(a,6);break;default:Fs(a,2)}}}function Qh(a,h){let m=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(m*=2),m*h}function Fs(a,h){if(a.j.info("Error code "+h),h==2){var m=u(a.bb,a),_=a.Ua;const S=!_;_=new Xn(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ti(_,"https"),bo(_),S?Uy(_.toString(),m):By(_.toString(),m)}else kt(2);a.I=0,a.l&&a.l.pa(h),Yh(a),qh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Yh(a){if(a.I=0,a.ja=[],a.l){const h=Ch(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function Jh(a,h,m){var _=m instanceof Xn?fn(m):new Xn(m);if(_.g!="")h&&(_.g=h+"."+_.g),ni(_,_.u);else{var S=o.location;_=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;const N=new Xn(null);_&&ti(N,_),h&&(N.g=h),S&&ni(N,S),m&&(N.h=m),_=N}return m=a.G,h=a.wa,m&&h&&qe(_,m,h),qe(_,"VER",a.ka),ci(a,_),_}function Xh(a,h,m){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ge(new Rl({ab:m})):new Ge(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zh(){}t=Zh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Co(){}Co.prototype.g=function(a,h){return new qt(a,h)};function qt(a,h){W.call(this),this.g=new jh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!b(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!b(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ar(this)}p(qt,W),qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Cl(this.g)},qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.v&&(m={},m.__data__=Se(a),a=m);h.i.push(new Ny(h.Ya++,a)),h.I==3&&Ro(h)},qt.prototype.N=function(){this.g.l=null,delete this.j,Cl(this.g),delete this.g,qt.Z.N.call(this)};function ed(a){rr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(ed,rr);function td(){ft.call(this),this.status=1}p(td,ft);function ar(a){this.g=a}p(ar,Zh),ar.prototype.ra=function(){j(this.g,"a")},ar.prototype.qa=function(a){j(this.g,new ed(a))},ar.prototype.pa=function(a){j(this.g,new td)},ar.prototype.oa=function(){j(this.g,"b")},Co.prototype.createWebChannel=Co.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Hg=function(){return new Co},qg=function(){return xs()},jg=lt,Pc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Eo.NO_ERROR=0,Eo.TIMEOUT=8,Eo.HTTP_ERROR=6,Xo=Eo,_h.COMPLETE="complete",$g=_h,Et.EventType=nn,nn.OPEN="a",nn.CLOSE="b",nn.ERROR="c",nn.MESSAGE="d",W.prototype.listen=W.prototype.J,_i=Et,Ge.prototype.listenOnce=Ge.prototype.K,Ge.prototype.getLastError=Ge.prototype.Ha,Ge.prototype.getLastErrorCode=Ge.prototype.ya,Ge.prototype.getStatus=Ge.prototype.ca,Ge.prototype.getResponseJson=Ge.prototype.La,Ge.prototype.getResponseText=Ge.prototype.la,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Fa,Bg=Ge}).apply(typeof Oo<"u"?Oo:typeof self<"u"?self:typeof window<"u"?window:{});const Sf="@firebase/firestore",Cf="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new _u("@firebase/firestore");function hr(){return Js.logLevel}function ie(t,...e){if(Js.logLevel<=we.DEBUG){const n=e.map(Cu);Js.debug(`Firestore (${qr}): ${t}`,...n)}}function Gn(t,...e){if(Js.logLevel<=we.ERROR){const n=e.map(Cu);Js.error(`Firestore (${qr}): ${t}`,...n)}}function Dr(t,...e){if(Js.logLevel<=we.WARN){const n=e.map(Cu);Js.warn(`Firestore (${qr}): ${t}`,...n)}}function Cu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Wg(t,s,n)}function Wg(t,e,n){let s=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Gn(s),new Error(s)}function Oe(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||Wg(e,r,s)}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class mR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gR{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Oe(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new ys;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ys,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ys)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Oe(typeof s.accessToken=="string",31837,{l:s}),new Gg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string",2055,{h:e}),new Tt(e)}}class _R{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yR{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new _R(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Oe(this.o===void 0,3512);const s=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Pf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Pf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=ER(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function be(t,e){return t<e?-1:t>e?1:0}function kc(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),i=e.charAt(s);if(r!==i)return Zl(r)===Zl(i)?be(r,i):Zl(r)?1:-1}return be(t.length,e.length)}const wR=55296,bR=57343;function Zl(t){const e=t.charCodeAt(0);return e>=wR&&e<=bR}function Or(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="__name__";class _n{constructor(e,n,s){n===void 0?n=0:n>e.length&&fe(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&fe(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=_n.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return be(e.length,n.length)}static compareSegments(e,n){const s=_n.isNumericId(e),r=_n.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?_n.extractNumericId(e).compare(_n.extractNumericId(n)):kc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _s.fromString(e.substring(4,e.length-2))}}class je extends _n{construct(e,n,s){return new je(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ne(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new je(n)}static emptyPath(){return new je([])}}const TR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends _n{construct(e,n,s){return new gt(e,n,s)}static isValidIdentifier(e){return TR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kf}static keyField(){return new gt([kf])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new ne(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new ne(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new ne(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(je.fromString(e))}static fromName(e){return new le(je.fromString(e).popFirst(5))}static empty(){return new le(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new je(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t,e,n){if(!n)throw new ne(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IR(t,e,n,s){if(e===!0&&s===!0)throw new ne(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nf(t){if(!le.isDocumentKey(t))throw new ne(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vf(t){if(le.isDocumentKey(t))throw new ne(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function tl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe(12329,{type:typeof t})}function Xs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tl(t);throw new ne(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function AR(t,e){if(e<=0)throw new ne(x.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,e){const n={typeString:t};return e&&(n.value=e),n}function ho(t,e){if(!zg(t))throw new ne(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new ne(x.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=-62135596800,Of=1e6;class He{static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Of);return new He(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Df)throw new ne(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Of}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:He._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ho(e,He._jsonSchema))return new He(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Df;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}He._jsonSchemaVersion="firestore/timestamp/1.0",He._jsonSchema={type:tt("string",He._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new He(0,0))}static max(){return new pe(new He(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=-1;function RR(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=pe.fromTimestamp(s===1e9?new He(n+1,0):new He(n,s));return new Ts(r,le.empty(),e)}function SR(t){return new Ts(t.readTime,t.key,Hi)}class Ts{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ts(pe.min(),le.empty(),Hi)}static max(){return new Ts(pe.max(),le.empty(),Hi)}}function CR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==PR)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,s)=>{n(e)})}static reject(e){return new M((n,s)=>{s(e)})}static waitFor(e){return new M((n,s)=>{let r=0,i=0,o=!1;e.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=M.resolve(!1);for(const s of e)n=n.next(r=>r?M.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new M((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&s(o)},f=>r(f))}})}static doWhile(e,n){return new M((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function NR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}nl.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=-1;function sl(t){return t==null}function Ta(t){return t===0&&1/t==-1/0}function VR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ta(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="";function DR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=xf(e)),e=OR(t.get(n),e);return xf(e)}function OR(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case Qg:n+="";break;default:n+=i}}return n}function xf(t){return t+Qg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??pt.RED,this.left=r??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new pt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return pt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mf(this.data.getIterator())}getIteratorFrom(e){return new Mf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class Mf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new ot(gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Or(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Jg("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const xR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Is(t){if(Oe(!!t,39018),typeof t=="string"){let e=0;const n=xR.exec(t);if(Oe(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function As(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="server_timestamp",Zg="__type__",e_="__previous_value__",t_="__local_write_time__";function Nu(t){return(t?.mapValue?.fields||{})[Zg]?.stringValue===Xg}function rl(t){const e=t.mapValue.fields[e_];return Nu(e)?rl(e):e}function Wi(t){const e=Is(t.mapValue.fields[t_].timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n,s,r,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const Ia="(default)";class Gi{constructor(e,n){this.projectId=e,this.database=n||Ia}static empty(){return new Gi("","")}get isDefaultDatabase(){return this.database===Ia}isEqual(e){return e instanceof Gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="__type__",s_="__max__",Lo={mapValue:{fields:{__type__:{stringValue:s_}}}},r_="__vector__",Aa="value";function Rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nu(t)?4:FR(t)?9007199254740991:MR(t)?10:11:fe(28295,{value:t})}function kn(t,e){if(t===e)return!0;const n=Rs(t);if(n!==Rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wi(t).isEqual(Wi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Is(r.timestampValue),l=Is(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return As(r.bytesValue).isEqual(As(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ye(r.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(r.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ye(r.integerValue)===Ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ye(r.doubleValue),l=Ye(i.doubleValue);return o===l?Ta(o)===Ta(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Or(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Lf(o)!==Lf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!kn(o[c],l[c])))return!1;return!0}(t,e);default:return fe(52216,{left:t})}}function Ki(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function xr(t,e){if(t===e)return 0;const n=Rs(t),s=Rs(e);if(n!==s)return be(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Ff(t.timestampValue,e.timestampValue);case 4:return Ff(Wi(t),Wi(e));case 5:return kc(t.stringValue,e.stringValue);case 6:return function(i,o){const l=As(i),c=As(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=be(l[u],c[u]);if(f!==0)return f}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=be(Ye(i.latitude),Ye(o.latitude));return l!==0?l:be(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Uf(t.arrayValue,e.arrayValue);case 10:return function(i,o){const l=i.fields||{},c=o.fields||{},u=l[Aa]?.arrayValue,f=c[Aa]?.arrayValue,p=be(u?.values?.length||0,f?.values?.length||0);return p!==0?p:Uf(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Lo.mapValue&&o===Lo.mapValue)return 0;if(i===Lo.mapValue)return 1;if(o===Lo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=kc(c[p],f[p]);if(g!==0)return g;const y=xr(l[c[p]],u[f[p]]);if(y!==0)return y}return be(c.length,f.length)}(t.mapValue,e.mapValue);default:throw fe(23264,{he:n})}}function Ff(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Is(t),s=Is(e),r=be(n.seconds,s.seconds);return r!==0?r:be(n.nanos,s.nanos)}function Uf(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=xr(n[r],s[r]);if(i)return i}return be(n.length,s.length)}function Lr(t){return Nc(t)}function Nc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Is(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return As(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Nc(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Nc(n.fields[o])}`;return r+"}"}(t.mapValue):fe(61005,{value:t})}function Zo(t){switch(Rs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=rl(t);return e?16+Zo(e):16;case 5:return 2*t.stringValue.length;case 6:return As(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+Zo(i),0)}(t.arrayValue);case 10:case 11:return function(s){let r=0;return Vs(s.fields,(i,o)=>{r+=i.length+Zo(o)}),r}(t.mapValue);default:throw fe(13486,{value:t})}}function Bf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vc(t){return!!t&&"integerValue"in t}function Vu(t){return!!t&&"arrayValue"in t}function $f(t){return!!t&&"nullValue"in t}function jf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ea(t){return!!t&&"mapValue"in t}function MR(t){return(t?.mapValue?.fields||{})[n_]?.stringValue===r_}function Ni(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Vs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ni(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ni(t.arrayValue.values[n]);return e}return{...t}}function FR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===s_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ni(n)}setAll(e){let n=gt.emptyPath(),s={},r=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=Ni(o):r.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ea(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Vs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Bt(Ni(this.value))}}function i_(t){const e=[];return Vs(t.fields,(n,s)=>{const r=new gt([n]);if(ea(s)){const i=i_(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new At(e,0,pe.min(),pe.min(),pe.min(),Bt.empty(),0)}static newFoundDocument(e,n,s,r){return new At(e,1,n,pe.min(),s,r,0)}static newNoDocument(e,n){return new At(e,2,n,pe.min(),pe.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,pe.min(),pe.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this.position=e,this.inclusive=n}}function qf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=le.comparator(le.fromName(o.referenceValue),n.key):s=xr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function UR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{}class et extends o_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new $R(e,n,s):n==="array-contains"?new HR(e,s):n==="in"?new WR(e,s):n==="not-in"?new GR(e,s):n==="array-contains-any"?new KR(e,s):new et(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new jR(e,s):new qR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(xr(n,this.value)):n!==null&&Rs(this.value)===Rs(n)&&this.matchesComparison(xr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends o_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new hn(e,n)}matches(e){return a_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function a_(t){return t.op==="and"}function l_(t){return BR(t)&&a_(t)}function BR(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function Dc(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Lr(t.value);if(l_(t))return t.filters.map(e=>Dc(e)).join(",");{const e=t.filters.map(n=>Dc(n)).join(",");return`${t.op}(${e})`}}function c_(t,e){return t instanceof et?function(s,r){return r instanceof et&&s.op===r.op&&s.field.isEqual(r.field)&&kn(s.value,r.value)}(t,e):t instanceof hn?function(s,r){return r instanceof hn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,l)=>i&&c_(o,r.filters[l]),!0):!1}(t,e):void fe(19439)}function u_(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Lr(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(u_).join(" ,")+"}"}(t):"Filter"}class $R extends et{constructor(e,n,s){super(e,n,s),this.key=le.fromName(s.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class jR extends et{constructor(e,n){super(e,"in",n),this.keys=h_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qR extends et{constructor(e,n){super(e,"not-in",n),this.keys=h_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function h_(t,e){return(e.arrayValue?.values||[]).map(n=>le.fromName(n.referenceValue))}class HR extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vu(n)&&Ki(n.arrayValue,this.value)}}class WR extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ki(this.value.arrayValue,n)}}class GR extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ki(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ki(this.value.arrayValue,n)}}class KR extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ki(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Wf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new zR(t,e,n,s,r,i,o)}function Du(t){const e=me(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Dc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),sl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Lr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Lr(s)).join(",")),e.Te=n}return e.Te}function Ou(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!c_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hf(t.startAt,e.startAt)&&Hf(t.endAt,e.endAt)}function Oc(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function QR(t,e,n,s,r,i,o,l){return new Gr(t,e,n,s,r,i,o,l)}function d_(t){return new Gr(t)}function Gf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function f_(t){return t.collectionGroup!==null}function Vi(t){const e=me(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ot(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new zi(i,s))}),n.has(gt.keyField().canonicalString())||e.Ie.push(new zi(gt.keyField(),s))}return e.Ie}function In(t){const e=me(t);return e.Ee||(e.Ee=YR(e,Vi(t))),e.Ee}function YR(t,e){if(t.limitType==="F")return Wf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new zi(r.field,i)});const n=t.endAt?new Ra(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Ra(t.startAt.position,t.startAt.inclusive):null;return Wf(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function xc(t,e){const n=t.filters.concat([e]);return new Gr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sa(t,e,n){return new Gr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function il(t,e){return Ou(In(t),In(e))&&t.limitType===e.limitType}function p_(t){return`${Du(In(t))}|lt:${t.limitType}`}function dr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>u_(r)).join(", ")}]`),sl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Lr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Lr(r)).join(",")),`Target(${s})`}(In(t))}; limitType=${t.limitType})`}function ol(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):le.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Vi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,l,c){const u=qf(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,Vi(s),r)||s.endAt&&!function(o,l,c){const u=qf(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,Vi(s),r))}(t,e)}function JR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function m_(t){return(e,n)=>{let s=!1;for(const r of Vi(t)){const i=XR(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function XR(t,e,n){const s=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?xr(c,u):fe(42886)}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return fe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Yg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=new We(le.comparator);function Kn(){return ZR}const g_=new We(le.comparator);function yi(...t){let e=g_;for(const n of t)e=e.insert(n.key,n);return e}function __(t){let e=g_;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ws(){return Di()}function y_(){return Di()}function Di(){return new tr(t=>t.toString(),(t,e)=>t.isEqual(e))}const e0=new We(le.comparator),t0=new ot(le.comparator);function Te(...t){let e=t0;for(const n of t)e=e.add(n);return e}const n0=new ot(be);function s0(){return n0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ta(e)?"-0":e}}function v_(t){return{integerValue:""+t}}function r0(t,e){return VR(e)?v_(e):xu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this._=void 0}}function i0(t,e,n){return t instanceof Ca?function(r,i){const o={fields:{[Zg]:{stringValue:Xg},[t_]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Nu(i)&&(i=rl(i)),i&&(o.fields[e_]=i),{mapValue:o}}(n,e):t instanceof Qi?w_(t,e):t instanceof Yi?b_(t,e):function(r,i){const o=E_(r,i),l=Kf(o)+Kf(r.Ae);return Vc(o)&&Vc(r.Ae)?v_(l):xu(r.serializer,l)}(t,e)}function o0(t,e,n){return t instanceof Qi?w_(t,e):t instanceof Yi?b_(t,e):n}function E_(t,e){return t instanceof Pa?function(s){return Vc(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Ca extends al{}class Qi extends al{constructor(e){super(),this.elements=e}}function w_(t,e){const n=T_(e);for(const s of t.elements)n.some(r=>kn(r,s))||n.push(s);return{arrayValue:{values:n}}}class Yi extends al{constructor(e){super(),this.elements=e}}function b_(t,e){let n=T_(e);for(const s of t.elements)n=n.filter(r=>!kn(r,s));return{arrayValue:{values:n}}}class Pa extends al{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Kf(t){return Ye(t.integerValue||t.doubleValue)}function T_(t){return Vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function a0(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Qi&&r instanceof Qi||s instanceof Yi&&r instanceof Yi?Or(s.elements,r.elements,kn):s instanceof Pa&&r instanceof Pa?kn(s.Ae,r.Ae):s instanceof Ca&&r instanceof Ca}(t.transform,e.transform)}class l0{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ta(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ll{}function I_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lu(t.key,an.none()):new fo(t.key,t.data,an.none());{const n=t.data,s=Bt.empty();let r=new ot(gt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ds(t.key,s,new Qt(r.toArray()),an.none())}}function c0(t,e,n){t instanceof fo?function(r,i,o){const l=r.value.clone(),c=Qf(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ds?function(r,i,o){if(!ta(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Qf(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(A_(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oi(t,e,n,s){return t instanceof fo?function(i,o,l,c){if(!ta(i.precondition,o))return l;const u=i.value.clone(),f=Yf(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ds?function(i,o,l,c){if(!ta(i.precondition,o))return l;const u=Yf(i.fieldTransforms,c,o),f=o.data;return f.setAll(A_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,s):function(i,o,l){return ta(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function u0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=E_(s.transform,r||null);i!=null&&(n===null&&(n=Bt.empty()),n.set(s.field,i))}return n||null}function zf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Or(s,r,(i,o)=>a0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fo extends ll{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ds extends ll{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function A_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Qf(t,e,n){const s=new Map;Oe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,o0(o,l,n[r]))}return s}function Yf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,i0(i,o,e))}return s}class Lu extends ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h0 extends ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&c0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Oi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Oi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=y_();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=I_(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Or(this.mutations,e.mutations,(n,s)=>zf(n,s))&&Or(this.baseMutations,e.baseMutations,(n,s)=>zf(n,s))}}class Mu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Oe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=function(){return e0}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Mu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,Re;function m0(t){switch(t){case x.OK:return fe(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return fe(15467,{code:t})}}function R_(t){if(t===void 0)return Gn("GRPC error has no .code"),x.UNKNOWN;switch(t){case Ze.OK:return x.OK;case Ze.CANCELLED:return x.CANCELLED;case Ze.UNKNOWN:return x.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return x.INTERNAL;case Ze.UNAVAILABLE:return x.UNAVAILABLE;case Ze.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ze.NOT_FOUND:return x.NOT_FOUND;case Ze.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ze.ABORTED:return x.ABORTED;case Ze.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ze.DATA_LOSS:return x.DATA_LOSS;default:return fe(39323,{code:t})}}(Re=Ze||(Ze={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=new _s([4294967295,4294967295],0);function Jf(t){const e=g0().encode(t),n=new Ug;return n.update(e),new Uint8Array(n.digest())}function Xf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _s([n,s],0),new _s([r,i],0)]}class Fu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new vi(`Invalid padding: ${n}`);if(s<0)throw new vi(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new vi(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new vi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=_s.fromNumber(this.ge)}ye(e,n,s){let r=e.add(n.multiply(_s.fromNumber(s)));return r.compare(_0)===1&&(r=new _s([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Jf(e),[s,r]=Xf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Fu(i,r,n);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Jf(e),[s,r]=Xf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,po.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new cl(pe.min(),r,new We(be),Kn(),Te())}}class po{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new po(s,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,s,r){this.be=e,this.removedTargetIds=n,this.key=s,this.De=r}}class S_{constructor(e,n){this.targetId=e,this.Ce=n}}class C_{constructor(e,n,s=_t.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Zf{constructor(){this.ve=0,this.Fe=ep(),this.Me=_t.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),s=Te();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:fe(38017,{changeType:i})}}),new po(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=ep()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Oe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class y0{constructor(e){this.Ge=e,this.ze=new Map,this.je=Kn(),this.Je=Mo(),this.He=Mo(),this.Ye=new We(be)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((s,r)=>{this.rt(r)&&n(r)})}st(e){const n=e.targetId,s=e.Ce.count,r=this.ot(n);if(r){const i=r.target;if(Oc(i))if(s===0){const o=new le(i.path);this.et(n,o,At.newNoDocument(o,pe.min()))}else Oe(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=As(s).toUint8Array()}catch(c){if(c instanceof Jg)return Dr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Fu(o,r,i)}catch(c){return Dr(c instanceof vi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),r++)}),r}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Oc(l.target)){const c=new le(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,At.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let s=Te();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const r=new cl(e,n,this.Ye,this.je,s);return this.je=Kn(),this.Je=Mo(),this.He=Mo(),this.Ye=new We(be),r}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,n)?r.Qe(n,1):r.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Zf,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ot(be),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ot(be),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zf),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Mo(){return new We(le.comparator)}function ep(){return new We(le.comparator)}const v0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),E0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),w0=(()=>({and:"AND",or:"OR"}))();class b0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Lc(t,e){return t.useProto3Json||sl(e)?e:{value:e}}function ka(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function P_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function T0(t,e){return ka(t,e.toTimestamp())}function An(t){return Oe(!!t,49232),pe.fromTimestamp(function(n){const s=Is(n);return new He(s.seconds,s.nanos)}(t))}function Uu(t,e){return Mc(t,e).canonicalString()}function Mc(t,e){const n=function(r){return new je(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function k_(t){const e=je.fromString(t);return Oe(x_(e),10190,{key:e.toString()}),e}function Fc(t,e){return Uu(t.databaseId,e.path)}function ec(t,e){const n=k_(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(V_(n))}function N_(t,e){return Uu(t.databaseId,e)}function I0(t){const e=k_(t);return e.length===4?je.emptyPath():V_(e)}function Uc(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function V_(t){return Oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function tp(t,e,n){return{name:Fc(t,e),fields:n.value.mapValue.fields}}function A0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Oe(f===void 0||typeof f=="string",58123),_t.fromBase64String(f||"")):(Oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),_t.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?x.UNKNOWN:R_(u.code);return new ne(f,u.message||"")}(o);n=new C_(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ec(t,s.document.name),i=An(s.document.updateTime),o=s.document.createTime?An(s.document.createTime):pe.min(),l=new Bt({mapValue:{fields:s.document.fields}}),c=At.newFoundDocument(r,i,o,l),u=s.targetIds||[],f=s.removedTargetIds||[];n=new na(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ec(t,s.document),i=s.readTime?An(s.readTime):pe.min(),o=At.newNoDocument(r,i),l=s.removedTargetIds||[];n=new na([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ec(t,s.document),i=s.removedTargetIds||[];n=new na([],i,r,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new p0(r,i),l=s.targetId;n=new S_(l,o)}}return n}function R0(t,e){let n;if(e instanceof fo)n={update:tp(t,e.key,e.value)};else if(e instanceof Lu)n={delete:Fc(t,e.key)};else if(e instanceof Ds)n={update:tp(t,e.key,e.data),updateMask:x0(e.fieldMask)};else{if(!(e instanceof h0))return fe(16599,{Vt:e.type});n={verify:Fc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const l=o.transform;if(l instanceof Ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pa)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw fe(20930,{transform:o.transform})}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:T0(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe(27497)}(t,e.precondition)),n}function S0(t,e){return t&&t.length>0?(Oe(e!==void 0,14353),t.map(n=>function(r,i){let o=r.updateTime?An(r.updateTime):An(i);return o.isEqual(pe.min())&&(o=An(i)),new l0(o,r.transformResults||[])}(n,e))):[]}function C0(t,e){return{documents:[N_(t,e.path)]}}function P0(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=N_(t,r);const i=function(u){if(u.length!==0)return O_(hn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:fr(g.field),direction:V0(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Lc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:r}}function k0(t){let e=I0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Oe(s===1,65062);const f=n.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=D_(p);return g instanceof hn&&l_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(k){return new zi(pr(k.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,sl(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,y=p.values||[];return new Ra(y,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,y=p.values||[];return new Ra(y,g)}(n.endAt)),QR(e,r,o,i,l,"F",c,u)}function N0(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:r})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function D_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=pr(n.unaryFilter.field);return et.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=pr(n.unaryFilter.field);return et.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=pr(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pr(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}}(t):t.fieldFilter!==void 0?function(n){return et.create(pr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(s=>D_(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return fe(1026)}}(n.compositeFilter.op))}(t):fe(30097,{filter:t})}function V0(t){return v0[t]}function D0(t){return E0[t]}function O0(t){return w0[t]}function fr(t){return{fieldPath:t.canonicalString()}}function pr(t){return gt.fromServerFormat(t.fieldPath)}function O_(t){return t instanceof et?function(n){if(n.op==="=="){if(jf(n.value))return{unaryFilter:{field:fr(n.field),op:"IS_NAN"}};if($f(n.value))return{unaryFilter:{field:fr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jf(n.value))return{unaryFilter:{field:fr(n.field),op:"IS_NOT_NAN"}};if($f(n.value))return{unaryFilter:{field:fr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fr(n.field),op:D0(n.op),value:n.value}}}(t):t instanceof hn?function(n){const s=n.getFilters().map(r=>O_(r));return s.length===1?s[0]:{compositeFilter:{op:O0(n.op),filters:s}}}(t):fe(54877,{filter:t})}function x0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,s,r,i=pe.min(),o=pe.min(),l=_t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new fs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.yt=e}}function M0(t){const e=k0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(){this.Cn=new U0}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Ts.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Ts.min())}updateCollectionGroup(e,n,s){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class U0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ot(je.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ot(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},L_=41943040;class Ut{static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(L_,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Mr(0)}static cr(){return new Mr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="LruGarbageCollector",B0=1048576;function rp([t,e],[n,s]){const r=be(t,n);return r===0?be(e,s):r}class $0{constructor(e){this.Ir=e,this.buffer=new ot(rp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();rp(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class j0{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(sp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Wr(n)?ie(sp,"Ignoring IndexedDB error during garbage collection: ",n):await Hr(n)}await this.Vr(3e5)})}}class q0{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return M.resolve(nl.ce);const s=new $0(n);return this.mr.forEachTarget(e,r=>s.Ar(r.sequenceNumber)).next(()=>this.mr.pr(e,r=>s.Ar(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(np)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),np):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,r,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,o=Date.now(),this.nthSequenceNumber(e,r))).next(p=>(s=p,l=Date.now(),this.removeTargets(e,s,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(p=>(u=Date.now(),hr()<=we.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p})))}}function H0(t,e){return new q0(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.changes=new tr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?M.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Oi(s.mutation,r,Qt.empty(),He.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Te()){const r=Ws();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=yi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ws();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,s,r){let i=Kn();const o=Di(),l=function(){return Di()}();return n.forEach((c,u)=>{const f=s.get(u.key);r.has(u.key)&&(f===void 0||f.mutation instanceof Ds)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Oi(f.mutation,u,f.mutation.getFieldMask(),He.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>l.set(u,new G0(f,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const s=Di();let r=new We((o,l)=>o-l),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=s.get(c)||Qt.empty();f=l.applyToLocalView(u,f),s.set(c,f);const p=(r.get(l.batchId)||Te()).add(c);r=r.insert(l.batchId,p)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=y_();f.forEach(g=>{if(!i.has(g)){const y=I_(n.get(g),s.get(g));y!==null&&p.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):f_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):M.resolve(Ws());let l=Hi,c=i;return o.next(u=>M.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(f=>({batchId:l,changes:__(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(s=>{let r=yi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=yi();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const u=function(p,g){return new Gr(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,At.newInvalidDocument(f)))});let l=yi();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Oi(f.mutation,u,Qt.empty(),He.now()),ol(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:An(r.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(r){return{name:r.name,query:M0(r.bundledQuery),readTime:An(r.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(){this.overlays=new We(le.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ws();return M.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(s)),M.resolve()}getOverlaysForCollection(e,n,s){const r=Ws(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return M.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new We((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let f=i.get(u.largestBatchId);f===null&&(f=Ws(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Ws(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=r)););return M.resolve(l)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new f0(n,s));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(){this.Qr=new ot(ut.$r),this.Ur=new ot(ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new ut(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Gr(new ut(e,n))}zr(e,n){e.forEach(s=>this.removeReference(s,n))}jr(e){const n=new le(new je([])),s=new ut(n,e),r=new ut(n,e+1),i=[];return this.Ur.forEachInRange([s,r],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new le(new je([])),s=new ut(n,e),r=new ut(n,e+1);let i=Te();return this.Ur.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ut{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return le.comparator(e.key,n.key)||be(e.Yr,n.Yr)}static Kr(e,n){return be(e.Yr,n.Yr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ot(ut.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new d0(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.Zr=this.Zr.add(new ut(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ei(s),i=r<0?0:r;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?ku:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ut(n,0),r=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],o=>{const l=this.Xr(o.Yr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ot(be);return n.forEach(r=>{const i=new ut(r,0),o=new ut(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{s=s.add(l.Yr)})}),M.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;le.isDocumentKey(i)||(i=i.child(""));const o=new ut(new le(i),0);let l=new ot(be);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.Yr)),!0)},o),M.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(s=>{const r=this.Xr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Oe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return M.forEach(n.mutations,r=>{const i=new ut(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,n){const s=new ut(n,0),r=this.Zr.firstAfterOrEqual(s);return M.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.ri=e,this.docs=function(){return new We(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return M.resolve(s?s.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let s=Kn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():At.newInvalidDocument(r))}),M.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Kn();const o=n.path,l=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||CR(SR(f),s)<=0||(r.has(f.key)||ol(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,s,r){fe(9500)}ii(e,n){return M.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Z0(this)}getSize(e){return M.resolve(this.size)}}class Z0 extends W0{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)}),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.persistence=e,this.si=new tr(n=>Du(n),Ou),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Bu,this.targetCount=0,this.ai=Mr.ur()}forEachTarget(e,n){return this.si.forEach((s,r)=>n(r)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Mr(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),M.waitFor(i).next(()=>r)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return M.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),M.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return M.resolve(s)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n){this.ui={},this.overlays={},this.ci=new nl(0),this.li=!1,this.li=!0,this.hi=new Y0,this.referenceDelegate=e(this),this.Pi=new eS(this),this.indexManager=new F0,this.remoteDocumentCache=function(r){return new X0(r)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new L0(n),this.Ii=new z0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Q0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new J0(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){ie("MemoryPersistence","Starting transaction:",e);const r=new tS(this.ci.next());return this.referenceDelegate.Ei(),s(r).next(i=>this.referenceDelegate.di(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ai(e,n){return M.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,n)))}}class tS extends kR{constructor(e){super(),this.currentSequenceNumber=e}}class $u{constructor(e){this.persistence=e,this.Ri=new Bu,this.Vi=null}static mi(e){return new $u(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),M.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(r=>this.fi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.fi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,s=>{const r=le.fromPath(s);return this.gi(e,r).next(i=>{i||n.removeEntry(r,pe.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Na{constructor(e,n){this.persistence=e,this.pi=new tr(s=>DR(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=H0(this,n)}static mi(e,n){return new Na(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}wr(e){let n=0;return this.pr(e,s=>{n++}).next(()=>n)}pr(e,n){return M.forEach(this.pi,(s,r)=>this.br(e,s,r).next(i=>i?M.resolve():n(r)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,o=>this.br(e,o,n).next(l=>{l||(s++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),M.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Zo(e.data.value)),n}br(e,n,s){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.pi.get(n);return M.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=r}static As(e,n){let s=Te(),r=Te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ju(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return NT()?8:NR(Ct())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new nS;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,s,r){return s.documentReadCount<this.fs?(hr()<=we.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",dr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(hr()<=we.DEBUG&&ie("QueryEngine","Query:",dr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(hr()<=we.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",dr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):M.resolve())}ys(e,n){if(Gf(n))return M.resolve(null);let s=In(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Sa(n,null,"F"),s=In(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Sa(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,s,r){return Gf(n)||r.isEqual(pe.min())?M.resolve(null):this.ps.getDocuments(e,s).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,s,r)?M.resolve(null):(hr()<=we.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),dr(n)),this.vs(e,o,n,RR(r,Hi)).next(l=>l))})}Ds(e,n){let s=new ot(m_(e));return n.forEach((r,i)=>{ol(e,i)&&(s=s.add(i))}),s}Cs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,n,s){return hr()<=we.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",dr(n)),this.ps.getDocumentsMatchingQuery(e,n,Ts.min(),s)}vs(e,n,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="LocalStore",rS=3e8;class iS{constructor(e,n,s,r){this.persistence=e,this.Fs=n,this.serializer=r,this.Ms=new We(be),this.xs=new tr(i=>Du(i),Ou),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function oS(t,e,n,s){return new iS(t,e,n,s)}async function F_(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],l=[];let c=Te();for(const u of r){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:l}))})})}function aS(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,g=p.keys();let y=M.resolve();return g.forEach(k=>{y=y.next(()=>f.getEntry(c,k)).next(V=>{const O=u.docVersions.get(k);Oe(O!==null,48541),V.version.compareTo(O)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),f.addEntry(V)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=Te();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function U_(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function lS(t,e){const n=me(t),s=e.snapshotVersion;let r=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});r=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const g=r.get(p);if(!g)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(_t.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,s)),r=r.insert(p,y),function(V,O,K){return V.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=rS?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(g,y,f)&&l.push(n.Pi.updateTargetData(i,y))});let c=Kn(),u=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(cS(i,o,e.documentUpdates).next(f=>{c=f.ks,u=f.qs})),!s.isEqual(pe.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ms=r,i))}function cS(t,e,n){let s=Te(),r=Te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Kn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ie(qu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:r}})}function uS(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=ku),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function hS(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Pi.getTargetData(s,e).next(i=>i?(r=i,M.resolve(r)):n.Pi.allocateTargetId(s).next(o=>(r=new fs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s})}async function Bc(t,e,n){const s=me(t),r=s.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Wr(o))throw o;ie(qu,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function ip(t,e,n){const s=me(t);let r=pe.min(),i=Te();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=me(c),g=p.xs.get(f);return g!==void 0?M.resolve(p.Ms.get(g)):p.Pi.getTargetData(u,f)}(s,o,In(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>s.Fs.getDocumentsMatchingQuery(o,e,n?r:pe.min(),n?i:Te())).next(l=>(dS(s,JR(e),l),{documents:l,Qs:i})))}function dS(t,e,n){let s=t.Os.get(e)||pe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Os.set(e,s)}class op{constructor(){this.activeTargetIds=s0()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fS{constructor(){this.Mo=new op,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new op,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="ConnectivityMonitor";class lp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(ap,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(ap,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo=null;function $c(){return Fo===null?Fo=function(){return 268435456+Math.round(2147483648*Math.random())}():Fo++,"0x"+Fo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="RestConnection",mS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class gS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===Ia?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,n,s,r,i){const o=$c(),l=this.zo(e,n.toUriEncodedString());ie(tc,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,r,i);const{host:u}=new URL(l),f=ks(u);return this.Jo(e,l,c,s,f).then(p=>(ie(tc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Dr(tc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",s),p})}Ho(e,n,s,r,i,o){return this.Go(e,n,s,r,i)}jo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}zo(e,n){const s=mS[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class yS extends gS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,r,i){const o=$c();return new Promise((l,c)=>{const u=new Bg;u.setWithCredentials(!0),u.listenOnce($g.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Xo.NO_ERROR:const p=u.getResponseJson();ie(wt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Xo.TIMEOUT:ie(wt,`RPC '${e}' ${o} timed out`),c(new ne(x.DEADLINE_EXCEEDED,"Request time out"));break;case Xo.HTTP_ERROR:const g=u.getStatus();if(ie(wt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const k=y?.error;if(k&&k.status&&k.message){const V=function(K){const H=K.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(H)>=0?H:x.UNKNOWN}(k.status);c(new ne(V,k.message))}else c(new ne(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ne(x.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ie(wt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(r);ie(wt,`RPC '${e}' ${o} sending request:`,r),u.send(n,"POST",f,s,15)})}T_(e,n,s){const r=$c(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Hg(),l=qg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const f=i.join("");ie(wt,`Creating RPC '${e}' stream ${r}: ${f}`,c);const p=o.createWebChannel(f,c);this.I_(p);let g=!1,y=!1;const k=new _S({Yo:O=>{y?ie(wt,`Not sending because RPC '${e}' stream ${r} is closed:`,O):(g||(ie(wt,`Opening RPC '${e}' stream ${r} transport.`),p.open(),g=!0),ie(wt,`RPC '${e}' stream ${r} sending:`,O),p.send(O))},Zo:()=>p.close()}),V=(O,K,H)=>{O.listen(K,z=>{try{H(z)}catch(X){setTimeout(()=>{throw X},0)}})};return V(p,_i.EventType.OPEN,()=>{y||(ie(wt,`RPC '${e}' stream ${r} transport opened.`),k.o_())}),V(p,_i.EventType.CLOSE,()=>{y||(y=!0,ie(wt,`RPC '${e}' stream ${r} transport closed`),k.a_(),this.E_(p))}),V(p,_i.EventType.ERROR,O=>{y||(y=!0,Dr(wt,`RPC '${e}' stream ${r} transport errored. Name:`,O.name,"Message:",O.message),k.a_(new ne(x.UNAVAILABLE,"The operation could not be completed")))}),V(p,_i.EventType.MESSAGE,O=>{if(!y){const K=O.data[0];Oe(!!K,16349);const H=K,z=H?.error||H[0]?.error;if(z){ie(wt,`RPC '${e}' stream ${r} received error:`,z);const X=z.status;let G=function(E){const I=Ze[E];if(I!==void 0)return R_(I)}(X),U=z.message;G===void 0&&(G=x.INTERNAL,U="Unknown error status: "+X+" with message "+z.message),y=!0,k.a_(new ne(G,U)),p.close()}else ie(wt,`RPC '${e}' stream ${r} received:`,K),k.u_(K)}}),V(l,jg.STAT_EVENT,O=>{O.stat===Pc.PROXY?ie(wt,`RPC '${e}' stream ${r} detected buffering proxy`):O.stat===Pc.NOPROXY&&ie(wt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function nc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t){return new b0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&ie("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="PersistentStream";class $_{constructor(e,n,s,r,i,o,l,c){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new B_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===n&&this.G_(s,r)},s=>{e(()=>{const r=new ne(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.J_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ie(cp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ie(cp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vS extends $_{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=A0(this.serializer,e),s=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?An(o.readTime):pe.min()}(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Uc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Oc(c)?{documents:C0(i,c)}:{query:P0(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=P_(i,o.resumeToken);const u=Lc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=ka(i,o.snapshotVersion.toTimestamp());const u=Lc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const s=N0(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Uc(this.serializer),n.removeTarget=e,this.q_(n)}}class ES extends $_{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=S0(e.writeResults,e.commitTime),s=An(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Uc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>R0(this.serializer,s))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{}class bS extends wS{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new ne(x.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Mc(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(x.UNKNOWN,i.toString())})}Ho(e,n,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Mc(n,s),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(x.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class TS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gn(n),this.aa=!1):ie("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="RemoteStore";class IS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{s.enqueueAndForget(async()=>{nr(this)&&(ie(Zs,"Restarting streams for network reachability change."),await async function(c){const u=me(c);u.Ea.add(4),await mo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await hl(u)}(this))})}),this.Ra=new TS(s,r)}}async function hl(t){if(nr(t))for(const e of t.da)await e(!0)}async function mo(t){for(const e of t.da)await e(!1)}function j_(t,e){const n=me(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Ku(n)?Gu(n):Kr(n).O_()&&Wu(n,e))}function Hu(t,e){const n=me(t),s=Kr(n);n.Ia.delete(e),s.O_()&&q_(n,e),n.Ia.size===0&&(s.O_()?s.L_():nr(n)&&n.Ra.set("Unknown"))}function Wu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Kr(t).Y_(e)}function q_(t,e){t.Va.Ue(e),Kr(t).Z_(e)}function Gu(t){t.Va=new y0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Kr(t).start(),t.Ra.ua()}function Ku(t){return nr(t)&&!Kr(t).x_()&&t.Ia.size>0}function nr(t){return me(t).Ea.size===0}function H_(t){t.Va=void 0}async function AS(t){t.Ra.set("Online")}async function RS(t){t.Ia.forEach((e,n)=>{Wu(t,e)})}async function SS(t,e){H_(t),Ku(t)?(t.Ra.ha(e),Gu(t)):t.Ra.set("Unknown")}async function CS(t,e,n){if(t.Ra.set("Online"),e instanceof C_&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ia.delete(l),r.Va.removeTarget(l))}(t,e)}catch(s){ie(Zs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Va(t,s)}else if(e instanceof na?t.Va.Ze(e):e instanceof S_?t.Va.st(e):t.Va.tt(e),!n.isEqual(pe.min()))try{const s=await U_(t.localStore);n.compareTo(s)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(_t.EMPTY_BYTE_STRING,f.snapshotVersion)),q_(i,c);const p=new fs(f.target,c,u,f.sequenceNumber);Wu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(s){ie(Zs,"Failed to raise snapshot:",s),await Va(t,s)}}async function Va(t,e,n){if(!Wr(e))throw e;t.Ea.add(1),await mo(t),t.Ra.set("Offline"),n||(n=()=>U_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie(Zs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await hl(t)})}function W_(t,e){return e().catch(n=>Va(t,n,e))}async function dl(t){const e=me(t),n=Ss(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ku;for(;PS(e);)try{const r=await uS(e.localStore,s);if(r===null){e.Ta.length===0&&n.L_();break}s=r.batchId,kS(e,r)}catch(r){await Va(e,r)}G_(e)&&K_(e)}function PS(t){return nr(t)&&t.Ta.length<10}function kS(t,e){t.Ta.push(e);const n=Ss(t);n.O_()&&n.X_&&n.ea(e.mutations)}function G_(t){return nr(t)&&!Ss(t).x_()&&t.Ta.length>0}function K_(t){Ss(t).start()}async function NS(t){Ss(t).ra()}async function VS(t){const e=Ss(t);for(const n of t.Ta)e.ea(n.mutations)}async function DS(t,e,n){const s=t.Ta.shift(),r=Mu.from(s,e,n);await W_(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await dl(t)}async function OS(t,e){e&&Ss(t).X_&&await async function(s,r){if(function(o){return m0(o)&&o!==x.ABORTED}(r.code)){const i=s.Ta.shift();Ss(s).B_(),await W_(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await dl(s)}}(t,e),G_(t)&&K_(t)}async function up(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),ie(Zs,"RemoteStore received new credentials");const s=nr(n);n.Ea.add(3),await mo(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await hl(n)}async function xS(t,e){const n=me(t);e?(n.Ea.delete(2),await hl(n)):e||(n.Ea.add(2),await mo(n),n.Ra.set("Unknown"))}function Kr(t){return t.ma||(t.ma=function(n,s,r){const i=me(n);return i.sa(),new vS(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Xo:AS.bind(null,t),t_:RS.bind(null,t),r_:SS.bind(null,t),H_:CS.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Ku(t)?Gu(t):t.Ra.set("Unknown")):(await t.ma.stop(),H_(t))})),t.ma}function Ss(t){return t.fa||(t.fa=function(n,s,r){const i=me(n);return i.sa(),new ES(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:NS.bind(null,t),r_:OS.bind(null,t),ta:VS.bind(null,t),na:DS.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await dl(t)):(await t.fa.stop(),t.Ta.length>0&&(ie(Zs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new zu(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qu(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),Wr(t))return new ne(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{static emptySet(e){return new Ir(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||le.comparator(n.key,s.key):(n,s)=>le.comparator(n.key,s.key),this.keyedMap=yi(),this.sortedSet=new We(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ir)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ir;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(){this.ga=new We(le.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,s)=>{e.push(s)}),e}}class Fr{constructor(e,n,s,r,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Fr(e,n,Ir.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&il(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class MS{constructor(){this.queries=dp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const r=me(n),i=r.queries;r.queries=dp(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(s)})})(this,new ne(x.ABORTED,"Firestore shutting down"))}}function dp(){return new tr(t=>p_(t),il)}async function FS(t,e){const n=me(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new LS,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await n.onListen(r,!0);break;case 1:i.wa=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=Qu(o,`Initialization of query '${dr(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Yu(n)}async function US(t,e){const n=me(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function BS(t,e){const n=me(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(r)&&(s=!0);o.wa=r}}s&&Yu(n)}function $S(t,e,n){const s=me(t),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(n);s.queries.delete(e)}function Yu(t){t.Ca.forEach(e=>{e.next()})}var jc,fp;(fp=jc||(jc={})).Ma="default",fp.Cache="cache";class jS{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Fr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Fr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==jc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.key=e}}class Q_{constructor(e){this.key=e}}class qS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=m_(e),this.tu=new Ir(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new hp,r=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,p)=>{const g=r.get(f),y=ol(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),V=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let O=!1;g&&y?g.data.isEqual(y.data)?k!==V&&(s.track({type:3,doc:y}),O=!0):this.su(g,y)||(s.track({type:2,doc:y}),O=!0,(c&&this.eu(y,c)>0||u&&this.eu(y,u)<0)&&(l=!0)):!g&&y?(s.track({type:0,doc:y}),O=!0):g&&!y&&(s.track({type:1,doc:g}),O=!0,(c||u)&&(l=!0)),O&&(y?(o=o.add(y),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{tu:o,iu:s,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(y,k){const V=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:O})}};return V(y)-V(k)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(s),r=r??!1;const l=n&&!r?this._u():[],c=this.Xa.size===0&&this.current&&!r?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Fr(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new hp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const n=[];return e.forEach(s=>{this.Xa.has(s)||n.push(new Q_(s))}),this.Xa.forEach(s=>{e.has(s)||n.push(new z_(s))}),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Fr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ju="SyncEngine";class HS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class WS{constructor(e){this.key=e,this.hu=!1}}class GS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new tr(l=>p_(l),il),this.Iu=new Map,this.Eu=new Set,this.du=new We(le.comparator),this.Au=new Map,this.Ru=new Bu,this.Vu={},this.mu=new Map,this.fu=Mr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function KS(t,e,n=!0){const s=ty(t);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Y_(s,e,n,!0),r}async function zS(t,e){const n=ty(t);await Y_(n,e,!0,!1)}async function Y_(t,e,n,s){const r=await hS(t.localStore,In(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await QS(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&j_(t.remoteStore,r),l}async function QS(t,e,n,s,r){t.pu=(p,g,y)=>async function(V,O,K,H){let z=O.view.ru(K);z.Cs&&(z=await ip(V.localStore,O.query,!1).then(({documents:w})=>O.view.ru(w,z)));const X=H&&H.targetChanges.get(O.targetId),G=H&&H.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(z,V.isPrimaryClient,X,G);return mp(V,O.targetId,U.au),U.snapshot}(t,p,g,y);const i=await ip(t.localStore,e,!0),o=new qS(e,i.Qs),l=o.ru(i.documents),c=po.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(l,t.isPrimaryClient,c);mp(t,n,u.au);const f=new HS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function YS(t,e,n){const s=me(t),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter(o=>!il(o,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Bc(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Hu(s.remoteStore,r.targetId),qc(s,r.targetId)}).catch(Hr)):(qc(s,r.targetId),await Bc(s.localStore,r.targetId,!0))}async function JS(t,e){const n=me(t),s=n.Tu.get(e),r=n.Iu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Hu(n.remoteStore,s.targetId))}async function XS(t,e,n){const s=iC(t);try{const r=await function(o,l){const c=me(o),u=He.now(),f=l.reduce((y,k)=>y.add(k.key),Te());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let k=Kn(),V=Te();return c.Ns.getEntries(y,f).next(O=>{k=O,k.forEach((K,H)=>{H.isValidDocument()||(V=V.add(K))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,k)).next(O=>{p=O;const K=[];for(const H of l){const z=u0(H,p.get(H.key).overlayedDocument);z!=null&&K.push(new Ds(H.key,z,i_(z.value.mapValue),an.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,K,l)}).next(O=>{g=O;const K=O.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(y,O.batchId,K)})}).then(()=>({batchId:g.batchId,changes:__(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new We(be)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u}(s,r.batchId,n),await go(s,r.changes),await dl(s.remoteStore)}catch(r){const i=Qu(r,"Failed to persist write");n.reject(i)}}async function J_(t,e){const n=me(t);try{const s=await lS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Au.get(i);o&&(Oe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?Oe(o.hu,14607):r.removedDocuments.size>0&&(Oe(o.hu,42227),o.hu=!1))}),await go(n,s,e)}catch(s){await Hr(s)}}function pp(t,e,n){const s=me(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=me(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(l)&&(u=!0)}),u&&Yu(c)}(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ZS(t,e,n){const s=me(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new We(le.comparator);o=o.insert(i,At.newNoDocument(i,pe.min()));const l=Te().add(i),c=new cl(pe.min(),new Map,new We(be),o,l);await J_(s,c),s.du=s.du.remove(i),s.Au.delete(e),Xu(s)}else await Bc(s.localStore,e,!1).then(()=>qc(s,e,n)).catch(Hr)}async function eC(t,e){const n=me(t),s=e.batch.batchId;try{const r=await aS(n.localStore,e);Z_(n,s,null),X_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await go(n,r)}catch(r){await Hr(r)}}async function tC(t,e,n){const s=me(t);try{const r=await function(o,l){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Oe(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(s.localStore,e);Z_(s,e,n),X_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await go(s,r)}catch(r){await Hr(r)}}function X_(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Z_(t,e,n){const s=me(t);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function qc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(s=>{t.Ru.containsKey(s)||ey(t,s)})}function ey(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Hu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Xu(t))}function mp(t,e,n){for(const s of n)s instanceof z_?(t.Ru.addReference(s.key,e),nC(t,s)):s instanceof Q_?(ie(Ju,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||ey(t,s.key)):fe(19791,{wu:s})}function nC(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(ie(Ju,"New document in limbo: "+n),t.Eu.add(s),Xu(t))}function Xu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new le(je.fromString(e)),s=t.fu.next();t.Au.set(s,new WS(n)),t.du=t.du.insert(n,s),j_(t.remoteStore,new fs(In(d_(n.path)),s,"TargetPurposeLimboResolution",nl.ce))}}async function go(t,e,n){const s=me(t),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach((l,c)=>{o.push(s.pu(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=ju.As(c.targetId,u);i.push(f)}}))}),await Promise.all(o),s.Pu.H_(r),await async function(c,u){const f=me(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(u,g=>M.forEach(g.Es,y=>f.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>M.forEach(g.ds,y=>f.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!Wr(p))throw p;ie(qu,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const y=f.Ms.get(g),k=y.snapshotVersion,V=y.withLastLimboFreeSnapshotVersion(k);f.Ms=f.Ms.insert(g,V)}}}(s.localStore,i))}async function sC(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){ie(Ju,"User change. New user:",e.toKey());const s=await F_(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new ne(x.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await go(n,s.Ls)}}function rC(t,e){const n=me(t),s=n.Au.get(e);if(s&&s.hu)return Te().add(s.key);{let r=Te();const i=n.Iu.get(e);if(!i)return r;for(const o of i){const l=n.Tu.get(o);r=r.unionWith(l.view.nu)}return r}}function ty(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=J_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZS.bind(null,e),e.Pu.H_=BS.bind(null,e.eventManager),e.Pu.yu=$S.bind(null,e.eventManager),e}function iC(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tC.bind(null,e),e}class Da{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ul(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return oS(this.persistence,new sS,e.initialUser,this.serializer)}Cu(e){return new M_($u.mi,this.serializer)}Du(e){return new fS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Da.provider={build:()=>new Da};class oC extends Da{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Oe(this.persistence.referenceDelegate instanceof Na,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new j0(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new M_(s=>Na.mi(s,n),this.serializer)}}class Hc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>pp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sC.bind(null,this.syncEngine),await xS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MS}()}createDatastore(e){const n=ul(e.databaseInfo.databaseId),s=function(i){return new yS(i)}(e.databaseInfo);return function(i,o,l,c){return new bS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,l){return new IS(s,r,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>pp(this.syncEngine,n,0),function(){return lp.v()?new lp:new pS}())}createSyncEngine(e,n){return function(r,i,o,l,c,u,f){const p=new GS(r,i,o,l,c,u);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const s=me(n);ie(Zs,"RemoteStore shutting down."),s.Ea.add(5),await mo(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Hc.provider={build:()=>new Hc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="FirestoreClient";class lC{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Tt.UNAUTHENTICATED,this.clientId=Pu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{ie(Cs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(ie(Cs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Qu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function sc(t,e){t.asyncQueue.verifyOperationInProgress(),ie(Cs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await F_(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cC(t);ie(Cs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>up(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>up(e.remoteStore,r)),t._onlineComponents=e}async function cC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(Cs,"Using user provided OfflineComponentProvider");try{await sc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===x.FAILED_PRECONDITION||r.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Dr("Error using user provided cache. Falling back to memory cache: "+n),await sc(t,new Da)}}else ie(Cs,"Using default OfflineComponentProvider"),await sc(t,new oC(void 0));return t._offlineComponents}async function ny(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(Cs,"Using user provided OnlineComponentProvider"),await gp(t,t._uninitializedComponentsProvider._online)):(ie(Cs,"Using default OnlineComponentProvider"),await gp(t,new Hc))),t._onlineComponents}function uC(t){return ny(t).then(e=>e.syncEngine)}async function hC(t){const e=await ny(t),n=e.eventManager;return n.onListen=KS.bind(null,e.syncEngine),n.onUnlisten=YS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=JS.bind(null,e.syncEngine),n}function dC(t,e,n={}){const s=new ys;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new aC({next:g=>{f.Nu(),o.enqueueAndForget(()=>US(i,p)),g.fromCache&&c.source==="server"?u.reject(new ne(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new jS(l,f,{includeMetadataChanges:!0,qa:!0});return FS(i,p)}(await hC(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="firestore.googleapis.com",yp=!0;class vp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ry,this.ssl=yp}else this.host=e.host,this.ssl=e.ssl??yp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=L_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<B0)throw new ne(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sy(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ne(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ne(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ne(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new pR;switch(s.type){case"firstParty":return new yR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ne(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=_p.get(n);s&&(ie("ComponentProvider","Removing Datastore"),_p.delete(n),s.terminate())}(this),Promise.resolve()}}function fC(t,e,n,s={}){t=Xs(t,fl);const r=ks(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;r&&(mu(`https://${l}`),gu("Firestore",!0)),i.host!==ry&&i.host!==l&&Dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:r,emulatorOptions:s};if(!Ks(c,o)&&(t._setSettings(c),s.mockUserToken)){let u,f;if(typeof s.mockUserToken=="string")u=s.mockUserToken,f=Tt.MOCK_USER;else{u=bT(s.mockUserToken,t._app?.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new ne(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Tt(p)}t._authCredentials=new mR(new Gg(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Os(this.firestore,e,this._query)}}class it{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(ho(n,it._jsonSchema))return new it(e,s||null,new le(je.fromString(n.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:tt("string",it._jsonSchemaVersion),referencePath:tt("string")};class vs extends Os{constructor(e,n,s){super(e,n,d_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new le(e))}withConverter(e){return new vs(this.firestore,e,this._path)}}function sr(t,e,...n){if(t=Qe(t),Kg("collection","path",e),t instanceof fl){const s=je.fromString(e,...n);return Vf(s),new vs(t,null,s)}{if(!(t instanceof it||t instanceof vs))throw new ne(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(je.fromString(e,...n));return Vf(s),new vs(t.firestore,null,s)}}function Zu(t,e,...n){if(t=Qe(t),arguments.length===1&&(e=Pu.newId()),Kg("doc","path",e),t instanceof fl){const s=je.fromString(e,...n);return Nf(s),new it(t,null,new le(s))}{if(!(t instanceof it||t instanceof vs))throw new ne(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(je.fromString(e,...n));return Nf(s),new it(t.firestore,t instanceof vs?t.converter:null,new le(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="AsyncQueue";class wp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new B_(this,"async_queue_retry"),this._c=()=>{const s=nc();s&&ie(Ep,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=nc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ys;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Wr(e))throw e;ie(Ep,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Gn("INTERNAL UNHANDLED ERROR: ",bp(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=zu.createAndSchedule(this,e,n,s,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&fe(47125,{Pc:bp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function bp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class _o extends fl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new wp,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wp(e),this._firestoreClient=void 0,await e}}}function pC(t,e){const n=typeof t=="object"?t:vu(),s=typeof t=="string"?t:e||Ia,r=Ja(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Jm("firestore");i&&fC(r,...i)}return r}function iy(t){if(t._terminated)throw new ne(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||mC(t),t._firestoreClient}function mC(t){const e=t._freezeSettings(),n=function(r,i,o,l){return new LR(r,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,sy(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new lC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(_t.fromBase64String(e))}catch(n){throw new ne(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yt(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ho(e,Yt._jsonSchema))return Yt.fromBase64String(e.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:tt("string",Yt._jsonSchemaVersion),bytes:tt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rn._jsonSchemaVersion}}static fromJSON(e){if(ho(e,Rn._jsonSchema))return new Rn(e.latitude,e.longitude)}}Rn._jsonSchemaVersion="firestore/geoPoint/1.0",Rn._jsonSchema={type:tt("string",Rn._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ho(e,Sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Sn(e.vectorValues);throw new ne(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Sn._jsonSchemaVersion="firestore/vectorValue/1.0",Sn._jsonSchema={type:tt("string",Sn._jsonSchemaVersion),vectorValues:tt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=/^__.*__$/;class _C{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new fo(e,this.data,n,this.fieldTransforms)}}class oy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ay(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ac:t})}}class th{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new th({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Oa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ay(this.Ac)&&gC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class yC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ul(e)}Cc(e,n,s,r=!1){return new th({Ac:e,methodName:n,Dc:s,path:gt.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nh(t){const e=t._freezeSettings(),n=ul(t._databaseId);return new yC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vC(t,e,n,s,r,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,r);sh("Data must be an object, but it was:",o,s);const l=ly(s,o);let c,u;if(i.merge)c=new Qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Wc(e,p,n);if(!o.contains(g))throw new ne(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);uy(f,g)||f.push(g)}c=new Qt(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new _C(new Bt(l),c,u)}class ml extends eh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ml}}function EC(t,e,n,s){const r=t.Cc(1,e,n);sh("Data must be an object, but it was:",r,s);const i=[],o=Bt.empty();Vs(s,(c,u)=>{const f=rh(e,c,n);u=Qe(u);const p=r.yc(f);if(u instanceof ml)i.push(f);else{const g=yo(u,p);g!=null&&(i.push(f),o.set(f,g))}});const l=new Qt(i);return new oy(o,l,r.fieldTransforms)}function wC(t,e,n,s,r,i){const o=t.Cc(1,e,n),l=[Wc(e,s,n)],c=[r];if(i.length%2!=0)throw new ne(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Wc(e,i[g])),c.push(i[g+1]);const u=[],f=Bt.empty();for(let g=l.length-1;g>=0;--g)if(!uy(u,l[g])){const y=l[g];let k=c[g];k=Qe(k);const V=o.yc(y);if(k instanceof ml)u.push(y);else{const O=yo(k,V);O!=null&&(u.push(y),f.set(y,O))}}const p=new Qt(u);return new oy(f,p,o.fieldTransforms)}function bC(t,e,n,s=!1){return yo(n,t.Cc(s?4:3,e))}function yo(t,e){if(cy(t=Qe(t)))return sh("Unsupported field value:",e,t),ly(t,e);if(t instanceof eh)return function(s,r){if(!ay(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const l of s){let c=yo(l,r.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Qe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return r0(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=He.fromDate(s);return{timestampValue:ka(r.serializer,i)}}if(s instanceof He){const i=new He(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ka(r.serializer,i)}}if(s instanceof Rn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Yt)return{bytesValue:P_(r.serializer,s._byteString)};if(s instanceof it){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Uu(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Sn)return function(o,l){return{mapValue:{fields:{[n_]:{stringValue:r_},[Aa]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return xu(l.serializer,u)})}}}}}}(s,r);throw r.Sc(`Unsupported field value: ${tl(s)}`)}(t,e)}function ly(t,e){const n={};return Yg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vs(t,(s,r)=>{const i=yo(r,e.mc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function cy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Rn||t instanceof Yt||t instanceof it||t instanceof eh||t instanceof Sn)}function sh(t,e,n){if(!cy(n)||!zg(n)){const s=tl(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function Wc(t,e,n){if((e=Qe(e))instanceof pl)return e._internalPath;if(typeof e=="string")return rh(t,e);throw Oa("Field path arguments must be of type string or ",t,!1,void 0,n)}const TC=new RegExp("[~\\*/\\[\\]]");function rh(t,e,n){if(e.search(TC)>=0)throw Oa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pl(...e.split("."))._internalPath}catch{throw Oa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oa(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new ne(x.INVALID_ARGUMENT,l+t+c)}function uy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IC extends hy{data(){return super.data()}}function gl(t,e){return typeof e=="string"?rh(t,e):e instanceof pl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ih{}class oh extends ih{}function vo(t,e,...n){let s=[];e instanceof ih&&s.push(e),s=s.concat(n),function(i){const o=i.filter(c=>c instanceof ah).length,l=i.filter(c=>c instanceof _l).length;if(o>1||o>0&&l>0)throw new ne(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class _l extends oh{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new _l(e,n,s)}_apply(e){const n=this._parse(e);return py(e._query,n),new Os(e.firestore,e.converter,xc(e._query,n))}_parse(e){const n=nh(e.firestore);return function(i,o,l,c,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new ne(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ip(p,f);const k=[];for(const V of p)k.push(Tp(c,i,V));g={arrayValue:{values:k}}}else g=Tp(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ip(p,f),g=bC(l,o,p,f==="in"||f==="not-in");return et.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xa(t,e,n){const s=e,r=gl("where",t);return _l._create(r,s,n)}class ah extends ih{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ah(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const l=i.getFlattenedFilters();for(const c of l)py(o,c),o=xc(o,c)}(e._query,n),new Os(e.firestore,e.converter,xc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lh extends oh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new lh(e,n)}_apply(e){const n=function(r,i,o){if(r.startAt!==null)throw new ne(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new ne(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zi(i,o)}(e._query,this._field,this._direction);return new Os(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Gr(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function dy(t,e="asc"){const n=e,s=gl("orderBy",t);return lh._create(s,n)}class ch extends oh{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new ch(e,n,s)}_apply(e){return new Os(e.firestore,e.converter,Sa(e._query,this._limit,this._limitType))}}function fy(t){return AR("limit",t),ch._create("limit",t,"F")}function Tp(t,e,n){if(typeof(n=Qe(n))=="string"){if(n==="")throw new ne(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!f_(e)&&n.indexOf("/")!==-1)throw new ne(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(je.fromString(n));if(!le.isDocumentKey(s))throw new ne(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Bf(t,new le(s))}if(n instanceof it)return Bf(t,n._key);throw new ne(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tl(n)}.`)}function Ip(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function py(t,e){const n=function(r,i){for(const o of r)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class RC{convertValue(e,n="none"){switch(Rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Vs(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){const n=e.fields?.[Aa].arrayValue?.values?.map(s=>Ye(s.doubleValue));return new Sn(n)}convertGeoPoint(e){return new Rn(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=rl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Wi(e));default:return null}}convertTimestamp(e){const n=Is(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=je.fromString(e);Oe(x_(s),9688,{name:e});const r=new Gi(s.get(1),s.get(3)),i=new le(s.popFirst(5));return r.isEqual(n)||Gn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ar extends hy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(gl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ar._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ar._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ar._jsonSchema={type:tt("string",Ar._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class sa extends Ar{data(e={}){return super.data(e)}}class Rr{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Uo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new sa(this._firestore,this._userDataWriter,s.key,s,new Uo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new sa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Uo(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new sa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Uo(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:CC(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}Rr._jsonSchemaVersion="firestore/querySnapshot/1.0",Rr._jsonSchema={type:tt("string",Rr._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};class PC extends RC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function zr(t){t=Xs(t,Os);const e=Xs(t.firestore,_o),n=iy(e),s=new PC(e);return AC(t._query),dC(n,t._query).then(r=>new Rr(e,s,t,r))}function kC(t,e,n,...s){t=Xs(t,it);const r=Xs(t.firestore,_o),i=nh(r);let o;return o=typeof(e=Qe(e))=="string"||e instanceof pl?wC(i,"updateDoc",t._key,e,n,s):EC(i,"updateDoc",t._key,e),uh(r,[o.toMutation(t._key,an.exists(!0))])}function NC(t){return uh(Xs(t.firestore,_o),[new Lu(t._key,an.none())])}function VC(t,e){const n=Xs(t.firestore,_o),s=Zu(t),r=SC(t.converter,e);return uh(n,[vC(nh(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,an.exists(!1))]).then(()=>s)}function uh(t,e){return function(s,r){const i=new ys;return s.asyncQueue.enqueueAndForget(async()=>XS(await uC(s),r,i)),i.promise}(iy(t),e)}(function(e,n=!0){(function(r){qr=r})($r),zs(new bs("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new _o(new gR(s.getProvider("auth-internal")),new vR(o,s.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(u.options.projectId,f)}(o,r),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),wn(Sf,Cf,e),wn(Sf,Cf,"esm2020")})();const DC={apiKey:"AIzaSyB4uQYB3FBgdJb3RVZ65uPq9k4RuU0OD0Y",authDomain:"fit5032---week-7.firebaseapp.com",projectId:"fit5032---week-7",storageBucket:"fit5032---week-7.firebasestorage.app",messagingSenderId:"634374754025",appId:"1:634374754025:web:aac4b9f850883d70826a78"},hh=ng(DC),Bo=uR(hh),Yn=pC(hh),$o={ADMIN:"admin",USER:"user",MODERATOR:"moderator"};class OC{constructor(){this.currentUser=null,this.userRole=null,this.listeners=[],XA(Bo,e=>{this.currentUser=e,this.userRole=e?$o.USER:null,this.listeners.forEach(n=>n(e,this.userRole))})}async register(e,n,s,r=$o.USER){try{const o=(await GA(Bo,e,n)).user;return await QA(o,{displayName:s}),{success:!0,user:o}}catch(i){return console.error("Registration error:",i),{success:!1,error:i.message}}}async signIn(e,n){try{return{success:!0,user:(await KA(Bo,e,n)).user}}catch(s){return console.error("Sign in error:",s),{success:!1,error:s.message}}}async signOut(){try{return await ZA(Bo),{success:!0}}catch(e){return console.error("Sign out error:",e),{success:!1,error:e.message}}}getCurrentUser(){return this.currentUser}getCurrentUserRole(){return this.userRole}hasRole(e){return this.userRole===e}isAdmin(){return this.hasRole($o.ADMIN)}isModerator(){return this.hasRole($o.MODERATOR)||this.isAdmin()}onAuthStateChange(e){return this.listeners.push(e),()=>{const n=this.listeners.indexOf(e);n>-1&&this.listeners.splice(n,1)}}}const vn=new OC;const xC={class:"container mt-5"},LC={class:"row justify-content-center"},MC={class:"col-md-6"},FC={class:"card"},UC={class:"card-body"},BC={class:"tab-content"},$C={class:"alert alert-info"},jC={class:"mb-3"},qC={class:"mb-3"},HC=["disabled"],WC={key:0,class:"spinner-border spinner-border-sm me-2"},GC={key:1,class:"mt-4 p-3 bg-light rounded"},KC={__name:"FirebaseSigninView",setup(t){const e=Ae(!1),n=Ae(""),s=Ae(""),r=Ae(null),i=Ae(null),o=Ae({email:"",password:""});let l=null;to(()=>{l=vn.onAuthStateChange((f,p)=>{r.value=f,i.value=p})}),no(()=>{l&&l()});const c=async()=>{e.value=!0,n.value="";try{const f=await vn.signIn(o.value.email,o.value.password);f.success?(n.value="Login successful!",s.value="alert-success"):(n.value=`Login failed: ${f.error}`,s.value="alert-danger")}catch(f){n.value=`Login error: ${f.message}`,s.value="alert-danger"}finally{e.value=!1}},u=async()=>{e.value=!0;try{const f=await vn.signOut();f.success?(n.value="Logged out successfully!",s.value="alert-info"):(n.value=`Logout failed: ${f.error}`,s.value="alert-danger")}catch(f){n.value=`Logout error: ${f.message}`,s.value="alert-danger"}finally{e.value=!1}};return(f,p)=>{const g=cu("router-link");return J(),Z("div",xC,[d("div",LC,[d("div",MC,[d("div",FC,[p[14]||(p[14]=d("div",{class:"card-header"},[d("h4",{class:"mb-0"},"Firebase Sign In")],-1)),d("div",UC,[d("div",BC,[p[8]||(p[8]=d("h5",{class:"card-title"},"Sign In",-1)),d("div",$C,[p[3]||(p[3]=d("strong",null,"Note:",-1)),p[4]||(p[4]=se(" You must register first before you can sign in. ",-1)),De(g,{to:"/register",class:"alert-link"},{default:bt(()=>[...p[2]||(p[2]=[se("Click here to register",-1)])]),_:1})]),d("form",{onSubmit:ro(c,["prevent"])},[d("div",jC,[p[5]||(p[5]=d("label",{for:"loginEmail",class:"form-label"},"Email address",-1)),Ce(d("input",{type:"email",class:"form-control",id:"loginEmail","onUpdate:modelValue":p[0]||(p[0]=y=>o.value.email=y),required:""},null,512),[[Fe,o.value.email]])]),d("div",qC,[p[6]||(p[6]=d("label",{for:"loginPassword",class:"form-label"},"Password",-1)),Ce(d("input",{type:"password",class:"form-control",id:"loginPassword","onUpdate:modelValue":p[1]||(p[1]=y=>o.value.password=y),required:""},null,512),[[Fe,o.value.password]])]),d("button",{type:"submit",class:"btn btn-primary",disabled:e.value},[e.value?(J(),Z("span",WC)):ge("",!0),p[7]||(p[7]=se(" Sign In ",-1))],8,HC)],32)]),n.value?(J(),Z("div",{key:0,class:ln(["alert mt-3",s.value])},$(n.value),3)):ge("",!0),r.value?(J(),Z("div",GC,[p[13]||(p[13]=d("h6",null,"Current User:",-1)),d("p",null,[p[9]||(p[9]=d("strong",null,"Name:",-1)),se(" "+$(r.value.displayName||"N/A"),1)]),d("p",null,[p[10]||(p[10]=d("strong",null,"Email:",-1)),se(" "+$(r.value.email),1)]),d("p",null,[p[11]||(p[11]=d("strong",null,"Role:",-1)),se(" "+$(i.value||"N/A"),1)]),d("p",null,[p[12]||(p[12]=d("strong",null,"UID:",-1)),se(" "+$(r.value.uid),1)]),d("button",{onClick:u,class:"btn btn-danger btn-sm"}," Logout ")])):ge("",!0)])])])])])}}},zC=Zt(KC,[["__scopeId","data-v-9c84ec6b"]]);const QC={class:"container mt-5"},YC={class:"row justify-content-center"},JC={class:"col-md-6"},XC={class:"card"},ZC={class:"card-body"},eP={class:"mb-3"},tP={class:"mb-3"},nP={class:"mb-3"},sP=["disabled"],rP={key:0,class:"spinner-border spinner-border-sm me-2"},iP={key:1,class:"mt-4 p-3 bg-light rounded"},oP={__name:"FirebaseRegisterView",setup(t){const e=Gm(),n=Ae(!1),s=Ae(""),r=Ae(""),i=Ae(null),o=Ae(null),l=Ae({displayName:"",email:"",password:""});let c=null;to(()=>{c=vn.onAuthStateChange((p,g)=>{i.value=p,o.value=g})}),no(()=>{c&&c()});const u=async()=>{n.value=!0,s.value="";try{const p=await vn.register(l.value.email,l.value.password,l.value.displayName,"user");p.success?(s.value="Registration successful! Redirecting to signin page...",r.value="alert-success",l.value={displayName:"",email:"",password:""},await vn.signOut(),setTimeout(()=>{e.push("/auth")},2e3)):(s.value=`Registration failed: ${p.error}`,r.value="alert-danger")}catch(p){s.value=`Registration error: ${p.message}`,r.value="alert-danger"}finally{n.value=!1}},f=async()=>{n.value=!0;try{const p=await vn.signOut();p.success?(s.value="Logged out successfully!",r.value="alert-info"):(s.value=`Logout failed: ${p.error}`,r.value="alert-danger")}catch(p){s.value=`Logout error: ${p.message}`,r.value="alert-danger"}finally{n.value=!1}};return(p,g)=>(J(),Z("div",QC,[d("div",YC,[d("div",JC,[d("div",XC,[g[12]||(g[12]=d("div",{class:"card-header"},[d("h4",{class:"mb-0"},"Firebase Registration")],-1)),d("div",ZC,[d("form",{onSubmit:ro(u,["prevent"])},[d("div",eP,[g[3]||(g[3]=d("label",{for:"displayName",class:"form-label"},"Full Name",-1)),Ce(d("input",{type:"text",class:"form-control",id:"displayName","onUpdate:modelValue":g[0]||(g[0]=y=>l.value.displayName=y),required:"",placeholder:"Enter your full name"},null,512),[[Fe,l.value.displayName]])]),d("div",tP,[g[4]||(g[4]=d("label",{for:"email",class:"form-label"},"Email address",-1)),Ce(d("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":g[1]||(g[1]=y=>l.value.email=y),required:"",placeholder:"Enter your email"},null,512),[[Fe,l.value.email]])]),d("div",nP,[g[5]||(g[5]=d("label",{for:"password",class:"form-label"},"Password",-1)),Ce(d("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":g[2]||(g[2]=y=>l.value.password=y),required:"",minlength:"6",placeholder:"Enter your password (min 6 characters)"},null,512),[[Fe,l.value.password]])]),d("button",{type:"submit",class:"btn btn-success w-100",disabled:n.value},[n.value?(J(),Z("span",rP)):ge("",!0),g[6]||(g[6]=se(" Create Account ",-1))],8,sP)],32),s.value?(J(),Z("div",{key:0,class:ln(["alert mt-3",r.value])},$(s.value),3)):ge("",!0),i.value?(J(),Z("div",iP,[g[11]||(g[11]=d("h6",null,"Registration Successful!",-1)),d("p",null,[g[7]||(g[7]=d("strong",null,"Name:",-1)),se(" "+$(i.value.displayName||"N/A"),1)]),d("p",null,[g[8]||(g[8]=d("strong",null,"Email:",-1)),se(" "+$(i.value.email),1)]),d("p",null,[g[9]||(g[9]=d("strong",null,"Role:",-1)),se(" "+$(o.value||"N/A"),1)]),d("p",null,[g[10]||(g[10]=d("strong",null,"UID:",-1)),se(" "+$(i.value.uid),1)]),d("button",{onClick:f,class:"btn btn-danger btn-sm"}," Logout ")])):ge("",!0)])])])])]))}},aP=Zt(oP,[["__scopeId","data-v-3bab1300"]]);const lP={class:"container mt-4"},cP={class:"row"},uP={class:"col-12"},hP={class:"card"},dP={class:"card-header d-flex justify-content-between align-items-center"},fP={class:"badge bg-primary me-2"},pP={class:"card-body"},mP={class:"row"},gP={key:0,class:"col-12 mb-4"},_P={key:1,class:"col-12 mb-4"},yP={class:"mt-4"},vP={class:"text-muted"},EP={key:0,class:"table-responsive"},wP={class:"table table-striped"},bP={key:1,class:"alert alert-info"},TP={__name:"DashboardView",setup(t){const e=Gm(),n=Ae(null),s=Ae("user"),r=xt(()=>s.value==="admin"),i=xt(()=>s.value==="moderator"||s.value==="admin");let o=null;to(()=>{o=vn.onAuthStateChange((c,u)=>{n.value=c,s.value=u||"user"})}),no(()=>{o&&o()});const l=async()=>{try{await vn.signOut(),e.push("/auth")}catch{}};return(c,u)=>{const f=cu("router-link");return J(),Z("div",lP,[d("div",cP,[d("div",uP,[d("div",hP,[d("div",dP,[u[0]||(u[0]=d("h4",null,"User Dashboard",-1)),d("div",null,[d("span",fP,$(s.value),1),d("button",{onClick:l,class:"btn btn-outline-danger btn-sm"}," Logout ")])]),d("div",pP,[d("div",mP,[r.value?(J(),Z("div",gP,[...u[1]||(u[1]=[d("div",{class:"alert alert-danger"},[d("h5",null,"🔒 Admin Panel"),d("p",null,"You have full administrative access to the system."),d("button",{class:"btn btn-danger"},"Delete All Data"),d("button",{class:"btn btn-warning ms-2"},"Manage Users")],-1)])])):ge("",!0),i.value?(J(),Z("div",_P,[...u[2]||(u[2]=[d("div",{class:"alert alert-warning"},[d("h5",null,"🛡️ Moderator Panel"),d("p",null,"You have moderation privileges."),d("button",{class:"btn btn-warning"},"Moderate Content"),d("button",{class:"btn btn-info ms-2"},"View Reports")],-1)])])):ge("",!0),u[3]||(u[3]=d("div",{class:"col-12"},[d("div",{class:"alert alert-info"},[d("h5",null,"👤 User Panel"),d("p",null,"Welcome to your dashboard!"),d("button",{class:"btn btn-primary"},"View Profile"),d("button",{class:"btn btn-secondary ms-2"},"Settings")])],-1))]),d("div",yP,[u[9]||(u[9]=d("h6",null,"Library Registration Data",-1)),d("p",vP,"Total registrations: "+$(Ke(Ci).getRecordCount()),1),Ke(Ci).getRecords().length>0?(J(),Z("div",EP,[d("table",wP,[u[4]||(u[4]=d("thead",null,[d("tr",null,[d("th",null,"Username"),d("th",null,"Gender"),d("th",null,"Australian Resident"),d("th",null,"Suburb"),d("th",null,"Reason"),d("th",null,"Registered")])],-1)),d("tbody",null,[(J(!0),Z(Ot,null,Sr(Ke(Ci).getRecords(),p=>(J(),Z("tr",{key:p.id},[d("td",null,$(p.username),1),d("td",null,$(p.gender||"-"),1),d("td",null,[d("span",{class:ln(["badge",p.resident?"bg-success":"bg-secondary"])},$(p.resident?"Yes":"No"),3)]),d("td",null,$(p.suburb),1),d("td",null,$(p.reason),1),d("td",null,$(new Date(p.createdAt).toLocaleDateString()),1)]))),128))])])])):(J(),Z("div",bP,[u[8]||(u[8]=d("h6",null,"No registrations yet",-1)),d("p",null,[u[6]||(u[6]=se("Go to the ",-1)),De(f,{to:"/"},{default:bt(()=>[...u[5]||(u[5]=[se("Home page",-1)])]),_:1}),u[7]||(u[7]=se(" to submit the library registration form.",-1))])]))])])])])])])}}},IP=Zt(TP,[["__scopeId","data-v-a5dacc88"]]),AP=async t=>{try{return{success:!0,bookId:(await VC(sr(Yn,"books"),t)).id}}catch(e){return console.error("Error adding book:",e),{success:!1,error:e.message}}},dh=async()=>{try{const t=await zr(sr(Yn,"books")),e=[];return t.forEach(n=>{e.push({id:n.id,...n.data()})}),{success:!0,books:e}}catch(t){return console.error("Error getting books:",t),{success:!1,error:t.message}}},RP=async(t,e)=>{try{const n=Zu(Yn,"books",t),s={...e,updatedAt:new Date};return await kC(n,s),{success:!0}}catch(n){return console.error("Error updating book:",n),{success:!1,error:n.message}}},SP=async t=>{try{const e=Zu(Yn,"books",t);return await NC(e),{success:!0}}catch(e){return console.error("Error deleting book:",e),{success:!1,error:e.message}}},CP=async t=>{try{const e=vo(sr(Yn,"books"),xa("category","==",t)),n=await zr(e),s=[];return n.forEach(r=>{s.push({id:r.id,...r.data()})}),{success:!0,books:s}}catch(e){return console.error("Error getting books by category:",e),{success:!1,error:e.message}}},PP=async t=>{try{const e=vo(sr(Yn,"books"),xa("author","==",t)),n=await zr(e),s=[];return n.forEach(r=>{s.push({id:r.id,...r.data()})}),{success:!0,books:s}}catch(e){return console.error("Error getting books by author:",e),{success:!1,error:e.message}}},kP=async(t,e)=>{try{const n=vo(sr(Yn,"books"),xa("price",">=",t),xa("price","<=",e)),s=await zr(n),r=[];return s.forEach(i=>{r.push({id:i.id,...i.data()})}),{success:!0,books:r}}catch(n){return console.error("Error getting books by price range:",n),{success:!1,error:n.message}}},NP=async(t=10)=>{try{const e=vo(sr(Yn,"books"),dy("title"),fy(t)),n=await zr(e),s=[];return n.forEach(r=>{s.push({id:r.id,...r.data()})}),{success:!0,books:s}}catch(e){return console.error("Error getting books ordered by title:",e),{success:!1,error:e.message}}},VP=async(t=10)=>{try{const e=vo(sr(Yn,"books"),dy("publicationYear","desc"),fy(t)),n=await zr(e),s=[];return n.forEach(r=>{s.push({id:r.id,...r.data()})}),{success:!0,books:s}}catch(e){return console.error("Error getting books ordered by year:",e),{success:!1,error:e.message}}};const DP={class:"container mt-4"},OP={class:"row"},xP={class:"col-12"},LP={class:"card"},MP={class:"card-body"},FP={class:"row"},UP={class:"col-md-6"},BP={class:"mb-3"},$P={class:"col-md-6"},jP={class:"mb-3"},qP={class:"row"},HP={class:"col-md-6"},WP={class:"mb-3"},GP={class:"col-md-6"},KP={class:"mb-3"},zP={class:"row"},QP={class:"col-md-6"},YP={class:"mb-3"},JP={class:"col-md-6"},XP={class:"mb-3"},ZP={class:"mb-3"},ek={class:"mb-3"},tk={class:"d-flex gap-2"},nk=["disabled"],sk={key:0,class:"spinner-border spinner-border-sm me-2"},rk={key:1,class:"alert alert-success mt-3"},ik={__name:"AddBookView",setup(t){const e=Ae(!1),n=Ae(""),s=Ae(""),r=Ae(null),i=Ae({title:"",author:"",isbn:"",category:"",price:"",pages:"",description:"",publicationYear:""}),o=async()=>{e.value=!0,n.value="",r.value=null;try{if(!i.value.title||!i.value.author||!i.value.category){n.value="Please fill in all required fields (Title, Author, Category)",s.value="alert-danger";return}const c={title:i.value.title,author:i.value.author,isbn:i.value.isbn||null,category:i.value.category,price:i.value.price?parseFloat(i.value.price):null,pages:i.value.pages?parseInt(i.value.pages):null,description:i.value.description||null,publicationYear:i.value.publicationYear?parseInt(i.value.publicationYear):null,createdAt:new Date,updatedAt:new Date},u=await AP(c);u.success?(r.value={bookId:u.bookId,title:c.title,author:c.author},n.value="Book added successfully to Firestore!",s.value="alert-success",l()):(n.value=`Error adding book: ${u.error}`,s.value="alert-danger")}catch(c){n.value=`Error: ${c.message}`,s.value="alert-danger"}finally{e.value=!1}},l=()=>{i.value={title:"",author:"",isbn:"",category:"",price:"",pages:"",description:"",publicationYear:""},n.value="",r.value=null};return(c,u)=>(J(),Z("div",DP,[d("div",OP,[d("div",xP,[d("div",LP,[u[22]||(u[22]=d("div",{class:"card-header"},[d("h4",null,"Add New Book")],-1)),d("div",MP,[d("form",{onSubmit:ro(o,["prevent"])},[d("div",FP,[d("div",UP,[d("div",BP,[u[8]||(u[8]=d("label",{for:"title",class:"form-label"},"Book Title *",-1)),Ce(d("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":u[0]||(u[0]=f=>i.value.title=f),required:"",placeholder:"Enter book title"},null,512),[[Fe,i.value.title]])])]),d("div",$P,[d("div",jP,[u[9]||(u[9]=d("label",{for:"author",class:"form-label"},"Author *",-1)),Ce(d("input",{type:"text",class:"form-control",id:"author","onUpdate:modelValue":u[1]||(u[1]=f=>i.value.author=f),required:"",placeholder:"Enter author name"},null,512),[[Fe,i.value.author]])])])]),d("div",qP,[d("div",HP,[d("div",WP,[u[10]||(u[10]=d("label",{for:"isbn",class:"form-label"},"ISBN",-1)),Ce(d("input",{type:"text",class:"form-control",id:"isbn","onUpdate:modelValue":u[2]||(u[2]=f=>i.value.isbn=f),placeholder:"Enter ISBN (optional)"},null,512),[[Fe,i.value.isbn]])])]),d("div",GP,[d("div",KP,[u[12]||(u[12]=d("label",{for:"category",class:"form-label"},"Category *",-1)),Ce(d("select",{class:"form-select",id:"category","onUpdate:modelValue":u[3]||(u[3]=f=>i.value.category=f),required:""},[...u[11]||(u[11]=[fc('<option value="" data-v-b099f6af>Select category</option><option value="Fiction" data-v-b099f6af>Fiction</option><option value="Non-Fiction" data-v-b099f6af>Non-Fiction</option><option value="Science" data-v-b099f6af>Science</option><option value="Technology" data-v-b099f6af>Technology</option><option value="History" data-v-b099f6af>History</option><option value="Biography" data-v-b099f6af>Biography</option><option value="Education" data-v-b099f6af>Education</option><option value="Other" data-v-b099f6af>Other</option>',9)])],512),[[pa,i.value.category]])])])]),d("div",zP,[d("div",QP,[d("div",YP,[u[13]||(u[13]=d("label",{for:"price",class:"form-label"},"Price ($)",-1)),Ce(d("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":u[4]||(u[4]=f=>i.value.price=f),step:"0.01",min:"0",placeholder:"Enter price"},null,512),[[Fe,i.value.price]])])]),d("div",JP,[d("div",XP,[u[14]||(u[14]=d("label",{for:"pages",class:"form-label"},"Number of Pages",-1)),Ce(d("input",{type:"number",class:"form-control",id:"pages","onUpdate:modelValue":u[5]||(u[5]=f=>i.value.pages=f),min:"1",placeholder:"Enter number of pages"},null,512),[[Fe,i.value.pages]])])])]),d("div",ZP,[u[15]||(u[15]=d("label",{for:"description",class:"form-label"},"Description",-1)),Ce(d("textarea",{class:"form-control",id:"description","onUpdate:modelValue":u[6]||(u[6]=f=>i.value.description=f),rows:"3",placeholder:"Enter book description"},null,512),[[Fe,i.value.description]])]),d("div",ek,[u[16]||(u[16]=d("label",{for:"publicationYear",class:"form-label"},"Publication Year",-1)),Ce(d("input",{type:"number",class:"form-control",id:"publicationYear","onUpdate:modelValue":u[7]||(u[7]=f=>i.value.publicationYear=f),min:"1000",max:"2024",placeholder:"Enter publication year"},null,512),[[Fe,i.value.publicationYear]])]),d("div",tk,[d("button",{type:"submit",class:"btn btn-primary",disabled:e.value},[e.value?(J(),Z("span",sk)):ge("",!0),u[17]||(u[17]=se(" Add Book ",-1))],8,nk),d("button",{type:"button",class:"btn btn-secondary",onClick:l}," Reset Form ")])],32),n.value?(J(),Z("div",{key:0,class:ln(["alert mt-3",s.value])},$(n.value),3)):ge("",!0),r.value?(J(),Z("div",rk,[u[21]||(u[21]=d("h6",null,"Book Added Successfully!",-1)),d("p",null,[u[18]||(u[18]=d("strong",null,"Book ID:",-1)),se(" "+$(r.value.bookId),1)]),d("p",null,[u[19]||(u[19]=d("strong",null,"Title:",-1)),se(" "+$(r.value.title),1)]),d("p",null,[u[20]||(u[20]=d("strong",null,"Author:",-1)),se(" "+$(r.value.author),1)])])):ge("",!0)])])])])]))}},ok=Zt(ik,[["__scopeId","data-v-b099f6af"]]);const ak={class:"container mt-4"},lk={class:"row"},ck={class:"col-12"},uk={class:"card"},hk={class:"card-body"},dk={class:"mb-4"},fk={class:"row"},pk={class:"col-md-6"},mk={class:"mb-3"},gk={class:"input-group"},_k={class:"col-md-6"},yk={class:"mb-3"},vk={class:"input-group"},Ek={class:"row"},wk={class:"col-md-4"},bk={class:"mb-3"},Tk={class:"input-group"},Ik={class:"col-md-4"},Ak={class:"mb-3"},Rk={class:"input-group"},Sk={class:"col-md-4"},Ck={class:"mb-3"},Pk={class:"input-group"},kk={class:"table-responsive"},Nk={class:"table table-striped"},Vk={class:"badge bg-secondary"},Dk=["onClick"],Ok=["onClick"],xk={key:0,class:"modal show d-block",tabindex:"-1"},Lk={class:"modal-dialog"},Mk={class:"modal-content"},Fk={class:"modal-body"},Uk={class:"mb-3"},Bk={class:"mb-3"},$k={class:"mb-3"},jk={class:"mb-3"},qk={class:"mb-3"},Hk={class:"modal-footer"},Wk=["disabled"],Gk={key:0,class:"spinner-border spinner-border-sm me-2"},Kk={key:2,class:"text-center mt-3"},zk={__name:"BookManagementView",setup(t){const e=Ae([]),n=Ae(!1),s=Ae(""),r=Ae(""),i=Ae(null),o=Ae(""),l=Ae(""),c=Ae(10),u=Ae(""),f=Ae("");to(async()=>{await p()});const p=async()=>{n.value=!0;try{const G=await dh();G.success?e.value=G.books:(s.value=`Error loading books: ${G.error}`,r.value="alert-danger")}catch(G){s.value=`Error: ${G.message}`,r.value="alert-danger"}finally{n.value=!1}},g=async()=>{if(o.value){n.value=!0;try{const G=await CP(o.value);G.success?(e.value=G.books,s.value=`Found ${G.books.length} books in category: ${o.value}`,r.value="alert-info"):(s.value=`Error: ${G.error}`,r.value="alert-danger")}catch(G){s.value=`Error: ${G.message}`,r.value="alert-danger"}finally{n.value=!1}}},y=async()=>{if(l.value){n.value=!0;try{const G=await PP(l.value);G.success?(e.value=G.books,s.value=`Found ${G.books.length} books by author: ${l.value}`,r.value="alert-info"):(s.value=`Error: ${G.error}`,r.value="alert-danger")}catch(G){s.value=`Error: ${G.message}`,r.value="alert-danger"}finally{n.value=!1}}},k=async()=>{n.value=!0;try{const G=await NP(c.value||10);G.success?(e.value=G.books,s.value=`Found ${G.books.length} books ordered by title`,r.value="alert-info"):(s.value=`Error: ${G.error}`,r.value="alert-danger")}catch(G){s.value=`Error: ${G.message}`,r.value="alert-danger"}finally{n.value=!1}},V=async()=>{n.value=!0;try{const G=await VP(c.value||10);G.success?(e.value=G.books,s.value=`Found ${G.books.length} books ordered by year (newest first)`,r.value="alert-info"):(s.value=`Error: ${G.error}`,r.value="alert-danger")}catch(G){s.value=`Error: ${G.message}`,r.value="alert-danger"}finally{n.value=!1}},O=async()=>{if(!(!u.value||!f.value)){n.value=!0;try{const G=await kP(parseFloat(u.value),parseFloat(f.value));G.success?(e.value=G.books,s.value=`Found ${G.books.length} books in price range $${u.value} - $${f.value}`,r.value="alert-info"):(s.value=`Error: ${G.error}`,r.value="alert-danger")}catch(G){s.value=`Error: ${G.message}`,r.value="alert-danger"}finally{n.value=!1}}},K=G=>{i.value={...G}},H=()=>{i.value=null},z=async()=>{if(i.value){n.value=!0;try{const G=await RP(i.value.id,{title:i.value.title,author:i.value.author,category:i.value.category,price:i.value.price?parseFloat(i.value.price):null,publicationYear:i.value.publicationYear?parseInt(i.value.publicationYear):null});G.success?(s.value="Book updated successfully!",r.value="alert-success",i.value=null,await p()):(s.value=`Error updating book: ${G.error}`,r.value="alert-danger")}catch(G){s.value=`Error: ${G.message}`,r.value="alert-danger"}finally{n.value=!1}}},X=async G=>{if(confirm("Are you sure you want to delete this book?")){n.value=!0;try{const U=await SP(G);U.success?(s.value="Book deleted successfully!",r.value="alert-success",await p()):(s.value=`Error deleting book: ${U.error}`,r.value="alert-danger")}catch(U){s.value=`Error: ${U.message}`,r.value="alert-danger"}finally{n.value=!1}}};return(G,U)=>(J(),Z("div",ak,[d("div",lk,[d("div",ck,[d("div",uk,[U[28]||(U[28]=d("div",{class:"card-header"},[d("h4",null,"Book Management - Firestore Operations")],-1)),d("div",hk,[d("div",dk,[U[17]||(U[17]=d("h5",null,"Firestore Queries (Task 8.2)",-1)),d("div",fk,[d("div",pk,[d("div",mk,[U[12]||(U[12]=d("label",{class:"form-label"},"Query by Category",-1)),d("div",gk,[Ce(d("select",{class:"form-select","onUpdate:modelValue":U[0]||(U[0]=w=>o.value=w)},[...U[11]||(U[11]=[fc('<option value="" data-v-62cefe83>Select category</option><option value="Fiction" data-v-62cefe83>Fiction</option><option value="Non-Fiction" data-v-62cefe83>Non-Fiction</option><option value="Science" data-v-62cefe83>Science</option><option value="Technology" data-v-62cefe83>Technology</option><option value="History" data-v-62cefe83>History</option><option value="Biography" data-v-62cefe83>Biography</option><option value="Education" data-v-62cefe83>Education</option>',8)])],512),[[pa,o.value]]),d("button",{class:"btn btn-outline-primary",onClick:g}," Query ")])])]),d("div",_k,[d("div",yk,[U[13]||(U[13]=d("label",{class:"form-label"},"Query by Author",-1)),d("div",vk,[Ce(d("input",{type:"text",class:"form-control","onUpdate:modelValue":U[1]||(U[1]=w=>l.value=w),placeholder:"Enter author name"},null,512),[[Fe,l.value]]),d("button",{class:"btn btn-outline-primary",onClick:y}," Query ")])])])]),d("div",Ek,[d("div",wk,[d("div",bk,[U[14]||(U[14]=d("label",{class:"form-label"},"Order by Title",-1)),d("div",Tk,[Ce(d("input",{type:"number",class:"form-control","onUpdate:modelValue":U[2]||(U[2]=w=>c.value=w),placeholder:"Limit",min:"1",max:"50"},null,512),[[Fe,c.value]]),d("button",{class:"btn btn-outline-primary",onClick:k}," Query ")])])]),d("div",Ik,[d("div",Ak,[U[15]||(U[15]=d("label",{class:"form-label"},"Order by Year (Newest)",-1)),d("div",Rk,[Ce(d("input",{type:"number",class:"form-control","onUpdate:modelValue":U[3]||(U[3]=w=>c.value=w),placeholder:"Limit",min:"1",max:"50"},null,512),[[Fe,c.value]]),d("button",{class:"btn btn-outline-primary",onClick:V}," Query ")])])]),d("div",Sk,[d("div",Ck,[U[16]||(U[16]=d("label",{class:"form-label"},"Price Range",-1)),d("div",Pk,[Ce(d("input",{type:"number",class:"form-control","onUpdate:modelValue":U[4]||(U[4]=w=>u.value=w),placeholder:"Min",step:"0.01"},null,512),[[Fe,u.value]]),Ce(d("input",{type:"number",class:"form-control","onUpdate:modelValue":U[5]||(U[5]=w=>f.value=w),placeholder:"Max",step:"0.01"},null,512),[[Fe,f.value]]),d("button",{class:"btn btn-outline-primary",onClick:O}," Query ")])])])])]),d("div",kk,[d("table",Nk,[U[18]||(U[18]=d("thead",null,[d("tr",null,[d("th",null,"Title"),d("th",null,"Author"),d("th",null,"Category"),d("th",null,"Price"),d("th",null,"Year"),d("th",null,"Actions")])],-1)),d("tbody",null,[(J(!0),Z(Ot,null,Sr(e.value,w=>(J(),Z("tr",{key:w.id},[d("td",null,$(w.title),1),d("td",null,$(w.author),1),d("td",null,[d("span",Vk,$(w.category),1)]),d("td",null,"$"+$(w.price||"N/A"),1),d("td",null,$(w.publicationYear||"N/A"),1),d("td",null,[d("button",{class:"btn btn-sm btn-warning me-1",onClick:E=>K(w)}," Edit ",8,Dk),d("button",{class:"btn btn-sm btn-danger",onClick:E=>X(w.id)}," Delete ",8,Ok)])]))),128))])])]),i.value?(J(),Z("div",xk,[d("div",Lk,[d("div",Mk,[d("div",{class:"modal-header"},[U[19]||(U[19]=d("h5",{class:"modal-title"},"Edit Book",-1)),d("button",{type:"button",class:"btn-close",onClick:H})]),d("div",Fk,[d("form",{onSubmit:ro(z,["prevent"])},[d("div",Uk,[U[20]||(U[20]=d("label",{class:"form-label"},"Title",-1)),Ce(d("input",{type:"text",class:"form-control","onUpdate:modelValue":U[6]||(U[6]=w=>i.value.title=w),required:""},null,512),[[Fe,i.value.title]])]),d("div",Bk,[U[21]||(U[21]=d("label",{class:"form-label"},"Author",-1)),Ce(d("input",{type:"text",class:"form-control","onUpdate:modelValue":U[7]||(U[7]=w=>i.value.author=w),required:""},null,512),[[Fe,i.value.author]])]),d("div",$k,[U[23]||(U[23]=d("label",{class:"form-label"},"Category",-1)),Ce(d("select",{class:"form-select","onUpdate:modelValue":U[8]||(U[8]=w=>i.value.category=w),required:""},[...U[22]||(U[22]=[fc('<option value="Fiction" data-v-62cefe83>Fiction</option><option value="Non-Fiction" data-v-62cefe83>Non-Fiction</option><option value="Science" data-v-62cefe83>Science</option><option value="Technology" data-v-62cefe83>Technology</option><option value="History" data-v-62cefe83>History</option><option value="Biography" data-v-62cefe83>Biography</option><option value="Education" data-v-62cefe83>Education</option><option value="Other" data-v-62cefe83>Other</option>',8)])],512),[[pa,i.value.category]])]),d("div",jk,[U[24]||(U[24]=d("label",{class:"form-label"},"Price ($)",-1)),Ce(d("input",{type:"number",class:"form-control","onUpdate:modelValue":U[9]||(U[9]=w=>i.value.price=w),step:"0.01"},null,512),[[Fe,i.value.price]])]),d("div",qk,[U[25]||(U[25]=d("label",{class:"form-label"},"Publication Year",-1)),Ce(d("input",{type:"number",class:"form-control","onUpdate:modelValue":U[10]||(U[10]=w=>i.value.publicationYear=w)},null,512),[[Fe,i.value.publicationYear]])])],32)]),d("div",Hk,[d("button",{type:"button",class:"btn btn-secondary",onClick:H},"Cancel"),d("button",{type:"button",class:"btn btn-primary",onClick:z,disabled:n.value},[n.value?(J(),Z("span",Gk)):ge("",!0),U[26]||(U[26]=se(" Update Book ",-1))],8,Wk)])])])])):ge("",!0),s.value?(J(),Z("div",{key:1,class:ln(["alert mt-3",r.value])},$(s.value),3)):ge("",!0),n.value?(J(),Z("div",Kk,[...U[27]||(U[27]=[d("div",{class:"spinner-border",role:"status"},[d("span",{class:"visually-hidden"},"Loading...")],-1)])])):ge("",!0)])])])])]))}},Qk=Zt(zk,[["__scopeId","data-v-62cefe83"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk="type.googleapis.com/google.protobuf.Int64Value",Jk="type.googleapis.com/google.protobuf.UInt64Value";function my(t,e){const n={};for(const s in t)t.hasOwnProperty(s)&&(n[s]=e(t[s]));return n}function La(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>La(e));if(typeof t=="function"||typeof t=="object")return my(t,e=>La(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Ur(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Yk:case Jk:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Ur(e)):typeof t=="function"||typeof t=="object"?my(t,e=>Ur(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $t extends Nn{constructor(e,n,s){super(`${fh}/${e}`,n||""),this.details=s,Object.setPrototypeOf(this,$t.prototype)}}function Xk(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ma(t,e){let n=Xk(t),s=n,r;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!Ap[o])return new $t("internal","internal");n=Ap[o],s=o}const l=i.message;typeof l=="string"&&(s=l),r=i.details,r!==void 0&&(r=Ur(r))}}catch{}return n==="ok"?null:new $t(n,s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,s,r){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Gt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||s.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r?.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),s=await this.getMessagingToken(),r=await this.getAppCheckToken(e);return{authToken:n,messagingToken:s,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="us-central1",eN=/^data: (.*?)(?:\n|$)/;function tN(t){let e=null;return{promise:new Promise((n,s)=>{e=setTimeout(()=>{s(new $t("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class nN{constructor(e,n,s,r,i=Gc,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Zk(e,n,s,r),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=Gc}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function sN(t,e,n){const s=ks(e);t.emulatorOrigin=`http${s?"s":""}://${e}:${n}`,s&&(mu(t.emulatorOrigin+"/backends"),gu("Functions",!0))}function rN(t,e,n){const s=r=>oN(t,e,r,n||{});return s.stream=(r,i)=>lN(t,e,r,i),s}function gy(t){return t.emulatorOrigin&&ks(t.emulatorOrigin)?"include":void 0}async function iN(t,e,n,s,r){n["Content-Type"]="application/json";let i;try{i=await s(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:gy(r)})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}async function _y(t,e){const n={},s=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return s.authToken&&(n.Authorization="Bearer "+s.authToken),s.messagingToken&&(n["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=s.appCheckToken),n}function oN(t,e,n,s){const r=t._url(e);return aN(t,r,n,s)}async function aN(t,e,n,s){n=La(n);const r={data:n},i=await _y(t,s),o=s.timeout||7e4,l=tN(o),c=await Promise.race([iN(e,r,i,t.fetchImpl,t),l.promise,t.cancelAllRequests]);if(l.cancel(),!c)throw new $t("cancelled","Firebase Functions instance was deleted.");const u=Ma(c.status,c.json);if(u)throw u;if(!c.json)throw new $t("internal","Response is not valid JSON object.");let f=c.json.data;if(typeof f>"u"&&(f=c.json.result),typeof f>"u")throw new $t("internal","Response is missing data field.");return{data:Ur(f)}}function lN(t,e,n,s){const r=t._url(e);return cN(t,r,n,s||{})}async function cN(t,e,n,s){n=La(n);const r={data:n},i=await _y(t,s);i["Content-Type"]="application/json",i.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(r),headers:i,signal:s?.signal,credentials:gy(t)})}catch(g){if(g instanceof Error&&g.name==="AbortError"){const k=new $t("cancelled","Request was cancelled.");return{data:Promise.reject(k),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(k)}}}}}}const y=Ma(0,null);return{data:Promise.reject(y),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(y)}}}}}}let l,c;const u=new Promise((g,y)=>{l=g,c=y});s?.signal?.addEventListener("abort",()=>{const g=new $t("cancelled","Request was cancelled.");c(g)});const f=o.body.getReader(),p=uN(f,l,c,s?.signal);return{stream:{[Symbol.asyncIterator](){const g=p.getReader();return{async next(){const{value:y,done:k}=await g.read();return{value:y,done:k}},async return(){return await g.cancel(),{done:!0,value:void 0}}}}},data:u}}function uN(t,e,n,s){const r=(o,l)=>{const c=o.match(eN);if(!c)return;const u=c[1];try{const f=JSON.parse(u);if("result"in f){e(Ur(f.result));return}if("message"in f){l.enqueue(Ur(f.message));return}if("error"in f){const p=Ma(0,f);l.error(p),n(p);return}}catch(f){if(f instanceof $t){l.error(f),n(f);return}}},i=new TextDecoder;return new ReadableStream({start(o){let l="";return c();async function c(){if(s?.aborted){const u=new $t("cancelled","Request was cancelled");return o.error(u),n(u),Promise.resolve()}try{const{value:u,done:f}=await t.read();if(f){l.trim()&&r(l.trim(),o),o.close();return}if(s?.aborted){const g=new $t("cancelled","Request was cancelled");o.error(g),n(g),await t.cancel();return}l+=i.decode(u,{stream:!0});const p=l.split(`
`);l=p.pop()||"";for(const g of p)g.trim()&&r(g.trim(),o);return c()}catch(u){const f=u instanceof $t?u:Ma(0,null);o.error(f),n(f)}}},cancel(){return t.cancel()}})}const Rp="@firebase/functions",Sp="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN="auth-internal",dN="app-check-internal",fN="messaging-internal";function pN(t){const e=(n,{instanceIdentifier:s})=>{const r=n.getProvider("app").getImmediate(),i=n.getProvider(hN),o=n.getProvider(fN),l=n.getProvider(dN);return new nN(r,i,o,l,s)};zs(new bs(fh,e,"PUBLIC").setMultipleInstances(!0)),wn(Rp,Sp,t),wn(Rp,Sp,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t=vu(),e=Gc){const s=Ja(Qe(t),fh).getImmediate({identifier:e}),r=Jm("functions");return r&&gN(s,...r),s}function gN(t,e,n){sN(Qe(t),e,n)}function yy(t,e,n){return rN(Qe(t),e,n)}pN();const vy=mN(hh),Ey=async()=>{try{return(await yy(vy,"getBookCount")()).data}catch(t){return console.error("Error calling getBookCount function:",t),{success:!1,error:t.message}}},_N=async()=>{try{return(await yy(vy,"getBookStatistics")()).data}catch(t){return console.error("Error calling getBookStatistics function:",t),{success:!1,error:t.message}}};const yN={class:"container mt-4"},vN={class:"row"},EN={class:"col-12"},wN={class:"card"},bN={class:"card-body"},TN={class:"mb-4"},IN={class:"row"},AN={class:"col-md-4"},RN=["disabled"],SN={key:0,class:"spinner-border spinner-border-sm me-2"},CN={key:0,class:"mt-3"},PN={key:0},kN={key:1},NN={class:"mb-4"},VN={class:"row"},DN={class:"col-md-4"},ON=["disabled"],xN={key:0,class:"spinner-border spinner-border-sm me-2"},LN={key:0,class:"mt-3"},MN={key:0},FN={class:"row"},UN={class:"col-md-6"},BN={class:"col-md-6"},$N={class:"list-unstyled"},jN={key:1},qN={key:0,class:"text-center mt-3"},HN={__name:"FirebaseFunctionsView",setup(t){const e=Ae(!1),n=Ae(null),s=Ae(null),r=async()=>{e.value=!0,n.value=null;try{const o=await Ey();n.value=o}catch(o){n.value={success:!1,error:o.message}}finally{e.value=!1}},i=async()=>{e.value=!0,s.value=null;try{const o=await _N();s.value=o}catch(o){s.value={success:!1,error:o.message}}finally{e.value=!1}};return(o,l)=>(J(),Z("div",yN,[d("div",vN,[d("div",EN,[d("div",wN,[l[17]||(l[17]=d("div",{class:"card-header"},[d("h4",null,"Firebase Functions Dashboard")],-1)),d("div",bN,[d("div",TN,[l[6]||(l[6]=d("h5",null,"Book Count Function",-1)),d("div",IN,[l[1]||(l[1]=d("div",{class:"col-md-8"},[d("div",{class:"alert alert-info"},[d("strong",null,"Function:"),se(" getBookCount"),d("br"),d("strong",null,"Purpose:"),se(" Get total number of books in Firestore"),d("br"),d("strong",null,"Type:"),se(" HTTPS Callable Function ")])],-1)),d("div",AN,[d("button",{class:"btn btn-primary w-100",onClick:r,disabled:e.value},[e.value?(J(),Z("span",SN)):ge("",!0),l[0]||(l[0]=se(" Get Book Count ",-1))],8,RN)])]),n.value?(J(),Z("div",CN,[d("div",{class:ln(["alert",n.value.success?"alert-success":"alert-danger"])},[d("h6",null,$(n.value.success?"Success!":"Error!"),1),n.value.success?(J(),Z("p",PN,[l[2]||(l[2]=d("strong",null,"Total Books:",-1)),se(" "+$(n.value.bookCount),1),l[3]||(l[3]=d("br",null,null,-1)),l[4]||(l[4]=d("strong",null,"Message:",-1)),se(" "+$(n.value.message),1)])):(J(),Z("p",kN,[l[5]||(l[5]=d("strong",null,"Error:",-1)),se(" "+$(n.value.error),1)]))],2)])):ge("",!0)]),d("div",NN,[l[15]||(l[15]=d("h5",null,"Book Statistics Function",-1)),d("div",VN,[l[8]||(l[8]=d("div",{class:"col-md-8"},[d("div",{class:"alert alert-info"},[d("strong",null,"Function:"),se(" getBookStatistics"),d("br"),d("strong",null,"Purpose:"),se(" Get detailed statistics about books"),d("br"),d("strong",null,"Type:"),se(" HTTPS Callable Function ")])],-1)),d("div",DN,[d("button",{class:"btn btn-success w-100",onClick:i,disabled:e.value},[e.value?(J(),Z("span",xN)):ge("",!0),l[7]||(l[7]=se(" Get Statistics ",-1))],8,ON)])]),s.value?(J(),Z("div",LN,[d("div",{class:ln(["alert",s.value.success?"alert-success":"alert-danger"])},[d("h6",null,$(s.value.success?"Statistics Retrieved!":"Error!"),1),s.value.success&&s.value.statistics?(J(),Z("div",MN,[d("div",FN,[d("div",UN,[l[12]||(l[12]=d("h6",null,"Basic Stats:",-1)),d("p",null,[l[9]||(l[9]=d("strong",null,"Total Books:",-1)),se(" "+$(s.value.statistics.totalBooks),1)]),d("p",null,[l[10]||(l[10]=d("strong",null,"Total Value:",-1)),se(" $"+$(s.value.statistics.totalValue),1)]),d("p",null,[l[11]||(l[11]=d("strong",null,"Average Value:",-1)),se(" $"+$(s.value.statistics.averageValue),1)])]),d("div",BN,[l[13]||(l[13]=d("h6",null,"Categories:",-1)),d("ul",$N,[(J(!0),Z(Ot,null,Sr(s.value.statistics.categories,(c,u)=>(J(),Z("li",{key:u},[d("strong",null,$(u)+":",1),se(" "+$(c)+" books ",1)]))),128))])])])])):(J(),Z("p",jN,[l[14]||(l[14]=d("strong",null,"Error:",-1)),se(" "+$(s.value.error),1)]))],2)])):ge("",!0)]),e.value?(J(),Z("div",qN,[...l[16]||(l[16]=[d("div",{class:"spinner-border",role:"status"},[d("span",{class:"visually-hidden"},"Loading...")],-1),d("p",{class:"mt-2"},"Calling Firebase Function...",-1)])])):ge("",!0)])])])])]))}},WN=Zt(HN,[["__scopeId","data-v-6ab30dcb"]]),GN="fc9646ceb1132d90794544f0fc185f81",KN="https://api.openweathermap.org/data/2.5";class zN{constructor(){this.apiKey=GN,this.baseUrl=KN}async getCurrentLocationWeather(e,n){try{const s=await fetch(`${this.baseUrl}/weather?lat=${e}&lon=${n}&appid=${this.apiKey}&units=metric`);if(!s.ok)throw new Error(`Weather API error: ${s.status}`);const r=await s.json();return{success:!0,data:{city:r.name,country:r.sys.country,temperature:Math.round(r.main.temp),description:r.weather[0].description,icon:r.weather[0].icon,humidity:r.main.humidity,windSpeed:r.wind.speed,pressure:r.main.pressure,feelsLike:Math.round(r.main.feels_like)}}}catch(s){return console.error("Error fetching current location weather:",s),{success:!1,error:s.message}}}async getWeatherByCity(e){try{const n=await fetch(`${this.baseUrl}/weather?q=${encodeURIComponent(e)}&appid=${this.apiKey}&units=metric`);if(!n.ok)throw new Error(`Weather API error: ${n.status}`);const s=await n.json();return{success:!0,data:{city:s.name,country:s.sys.country,temperature:Math.round(s.main.temp),description:s.weather[0].description,icon:s.weather[0].icon,humidity:s.main.humidity,windSpeed:s.wind.speed,pressure:s.main.pressure,feelsLike:Math.round(s.main.feels_like)}}}catch(n){return console.error("Error fetching weather by city:",n),{success:!1,error:n.message}}}getCurrentLocation(){return new Promise((e,n)=>{if(!navigator.geolocation){n(new Error("Geolocation is not supported by this browser."));return}navigator.geolocation.getCurrentPosition(s=>{console.log("Location obtained:",s.coords),e({lat:s.coords.latitude,lon:s.coords.longitude})},s=>{console.error("Geolocation error details:",s);let r="Unable to get your location.";switch(s.code){case s.PERMISSION_DENIED:r="Location access denied by user. Please allow location access in your browser settings.";break;case s.POSITION_UNAVAILABLE:r="Location information is unavailable.";break;case s.TIMEOUT:r="Location request timed out. Please try again.";break;default:r=`Geolocation error: ${s.message}`;break}n(new Error(r))},{enableHighAccuracy:!0,timeout:15e3,maximumAge:3e5})})}getWeatherIconUrl(e){return`https://openweathermap.org/img/wn/${e}@2x.png`}}const wy=new zN;const QN={name:"WeatherView",data(){return{weatherService:wy,loading:!1,error:null,currentWeather:null,searchedWeather:null,citySearch:"",coordinates:{lat:null,lon:null}}},methods:{async getCurrentLocationWeather(){this.loading=!0,this.error=null;try{if(!navigator.geolocation)throw new Error("Geolocation is not supported by this browser.");const t=await this.weatherService.getCurrentLocation();this.coordinates=t;const e=await this.weatherService.getCurrentLocationWeather(t.lat,t.lon);e.success?this.currentWeather=e.data:this.error=e.error}catch(t){console.error("Geolocation error:",t),this.error=`Geolocation error: ${t.message}. Please try searching by city instead, or allow location access in your browser settings.`,setTimeout(()=>{this.error.includes("Geolocation error")&&(this.error+=" You can also search for weather by city name using the search box below.")},2e3)}finally{this.loading=!1}},async getMelbourneWeather(){this.loading=!0,this.error=null;try{this.coordinates={lat:-37.8136,lon:144.9631};const t=await this.weatherService.getCurrentLocationWeather(-37.8136,144.9631);t.success?this.currentWeather=t.data:this.error=t.error}catch(t){this.error=t.message}finally{this.loading=!1}},async searchWeatherByCity(){if(this.citySearch.trim()){this.loading=!0,this.error=null;try{const t=await this.weatherService.getWeatherByCity(this.citySearch);t.success?this.searchedWeather=t.data:this.error=t.error}catch(t){this.error=t.message}finally{this.loading=!1}}}}},YN={class:"container mt-4"},JN={class:"row"},XN={class:"col-12"},ZN={class:"card"},eV={class:"card-body"},tV={class:"row mb-4"},nV={class:"col-12"},sV={class:"btn-group",role:"group"},rV=["disabled"],iV={key:0,class:"spinner-border spinner-border-sm me-2"},oV=["disabled"],aV={key:0,class:"spinner-border spinner-border-sm me-2"},lV={key:0,class:"mt-3"},cV={class:"card"},uV={class:"card-body"},hV={class:"row align-items-center"},dV={class:"col-md-8"},fV={class:"d-flex align-items-center"},pV=["src","alt"],mV={class:"mb-0"},gV={class:"mb-0 text-capitalize"},_V={class:"text-muted"},yV={class:"col-md-4"},vV={class:"row text-center"},EV={class:"col-6 mb-2"},wV={class:"border rounded p-2"},bV={class:"fw-bold"},TV={class:"col-6 mb-2"},IV={class:"border rounded p-2"},AV={class:"fw-bold"},RV={class:"col-6"},SV={class:"border rounded p-2"},CV={class:"fw-bold"},PV={class:"col-6"},kV={class:"border rounded p-2"},NV={class:"fw-bold small"},VV={class:"row mb-4"},DV={class:"col-12"},OV={class:"input-group mb-3"},xV=["disabled"],LV={key:0,class:"spinner-border spinner-border-sm me-2"},MV={key:0,class:"mt-3"},FV={class:"card"},UV={class:"card-body"},BV={class:"row align-items-center"},$V={class:"col-md-8"},jV={class:"d-flex align-items-center"},qV=["src","alt"],HV={class:"mb-0"},WV={class:"mb-0 text-capitalize"},GV={class:"text-muted"},KV={class:"col-md-4"},zV={class:"row text-center"},QV={class:"col-6 mb-2"},YV={class:"border rounded p-2"},JV={class:"fw-bold"},XV={class:"col-6 mb-2"},ZV={class:"border rounded p-2"},eD={class:"fw-bold"},tD={class:"col-6"},nD={class:"border rounded p-2"},sD={class:"fw-bold"},rD={class:"col-6"},iD={class:"border rounded p-2"},oD={class:"fw-bold small"},aD={key:0,class:"alert alert-danger"},lD={key:1,class:"text-center"};function cD(t,e,n,s,r,i){return J(),Z("div",YN,[d("div",JN,[d("div",XN,[d("div",ZN,[e[21]||(e[21]=d("div",{class:"card-header"},[d("h4",{class:"mb-0"},"Weather API - EFOLIO Task 10")],-1)),d("div",eV,[d("div",tV,[d("div",nV,[e[11]||(e[11]=d("h5",null,"Current Location Weather",-1)),e[12]||(e[12]=d("div",{class:"alert alert-info mb-3"},[d("strong",null,"Note:"),se(" This feature requires location access. If prompted, please allow location access in your browser. If location access is denied, you can still search for weather by city name below. ")],-1)),d("div",sV,[d("button",{onClick:e[0]||(e[0]=(...o)=>i.getCurrentLocationWeather&&i.getCurrentLocationWeather(...o)),class:"btn btn-primary",disabled:r.loading},[r.loading?(J(),Z("span",iV)):ge("",!0),e[5]||(e[5]=se(" Get Current Location Weather ",-1))],8,rV),d("button",{onClick:e[1]||(e[1]=(...o)=>i.getMelbourneWeather&&i.getMelbourneWeather(...o)),class:"btn btn-outline-primary",disabled:r.loading},[r.loading?(J(),Z("span",aV)):ge("",!0),e[6]||(e[6]=se(" Use Melbourne as Default ",-1))],8,oV)]),r.currentWeather?(J(),Z("div",lV,[d("div",cV,[d("div",uV,[d("div",hV,[d("div",dV,[d("h3",null,$(r.currentWeather.city)+", "+$(r.currentWeather.country),1),d("div",fV,[d("img",{src:r.weatherService.getWeatherIconUrl(r.currentWeather.icon),alt:r.currentWeather.description,class:"me-3",style:{width:"80px",height:"80px"}},null,8,pV),d("div",null,[d("h2",mV,$(r.currentWeather.temperature)+"°C",1),d("p",gV,$(r.currentWeather.description),1),d("small",_V,"Feels like "+$(r.currentWeather.feelsLike)+"°C",1)])])]),d("div",yV,[d("div",vV,[d("div",EV,[d("div",wV,[e[7]||(e[7]=d("small",{class:"text-muted"},"Humidity",-1)),d("div",bV,$(r.currentWeather.humidity)+"%",1)])]),d("div",TV,[d("div",IV,[e[8]||(e[8]=d("small",{class:"text-muted"},"Wind Speed",-1)),d("div",AV,$(r.currentWeather.windSpeed)+" m/s",1)])]),d("div",RV,[d("div",SV,[e[9]||(e[9]=d("small",{class:"text-muted"},"Pressure",-1)),d("div",CV,$(r.currentWeather.pressure)+" hPa",1)])]),d("div",PV,[d("div",kV,[e[10]||(e[10]=d("small",{class:"text-muted"},"Coordinates",-1)),d("div",NV,$(r.coordinates.lat)+", "+$(r.coordinates.lon),1)])])])])])])])])):ge("",!0)])]),d("div",VV,[d("div",DV,[e[18]||(e[18]=d("h5",null,"Search Weather by City",-1)),d("div",OV,[Ce(d("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=o=>r.citySearch=o),placeholder:"Enter city name (e.g., Clayton, AU)",onKeyup:e[3]||(e[3]=hw((...o)=>i.searchWeatherByCity&&i.searchWeatherByCity(...o),["enter"]))},null,544),[[Fe,r.citySearch]]),d("button",{onClick:e[4]||(e[4]=(...o)=>i.searchWeatherByCity&&i.searchWeatherByCity(...o)),class:"btn btn-success",disabled:r.loading||!r.citySearch.trim()},[r.loading?(J(),Z("span",LV)):ge("",!0),e[13]||(e[13]=se(" Search Weather ",-1))],8,xV)]),r.searchedWeather?(J(),Z("div",MV,[d("div",FV,[d("div",UV,[d("div",BV,[d("div",$V,[d("h3",null,$(r.searchedWeather.city)+", "+$(r.searchedWeather.country),1),d("div",jV,[d("img",{src:r.weatherService.getWeatherIconUrl(r.searchedWeather.icon),alt:r.searchedWeather.description,class:"me-3",style:{width:"80px",height:"80px"}},null,8,qV),d("div",null,[d("h2",HV,$(r.searchedWeather.temperature)+"°C",1),d("p",WV,$(r.searchedWeather.description),1),d("small",GV,"Feels like "+$(r.searchedWeather.feelsLike)+"°C",1)])])]),d("div",KV,[d("div",zV,[d("div",QV,[d("div",YV,[e[14]||(e[14]=d("small",{class:"text-muted"},"Humidity",-1)),d("div",JV,$(r.searchedWeather.humidity)+"%",1)])]),d("div",XV,[d("div",ZV,[e[15]||(e[15]=d("small",{class:"text-muted"},"Wind Speed",-1)),d("div",eD,$(r.searchedWeather.windSpeed)+" m/s",1)])]),d("div",tD,[d("div",nD,[e[16]||(e[16]=d("small",{class:"text-muted"},"Pressure",-1)),d("div",sD,$(r.searchedWeather.pressure)+" hPa",1)])]),d("div",rD,[d("div",iD,[e[17]||(e[17]=d("small",{class:"text-muted"},"Search Term",-1)),d("div",oD,$(r.citySearch),1)])])])])])])])])):ge("",!0)])]),r.error?(J(),Z("div",aD,[e[19]||(e[19]=d("strong",null,"Error:",-1)),se(" "+$(r.error),1)])):ge("",!0),r.loading?(J(),Z("div",lD,[...e[20]||(e[20]=[d("div",{class:"spinner-border",role:"status"},[d("span",{class:"visually-hidden"},"Loading...")],-1),d("p",{class:"mt-2"},"Fetching weather data...",-1)])])):ge("",!0)])])])])])}const uD=Zt(QN,[["render",cD],["__scopeId","data-v-bfbddaec"]]);const hD={name:"ApiView",data(){return{counters:{weatherRequests:0,bookRequests:0,totalRequests:0,successfulRequests:0},apiStatus:{weather:{lastCalled:null,responseTime:null,successRate:0},book:{lastCalled:null,responseTime:null,successRate:0},firebase:{lastCalled:null,responseTime:null,successRate:0}},testResults:[],testing:!1}},methods:{async testWeatherAPI(){this.testing=!0;const t=Date.now();try{const e=await wy.getWeatherByCity("Melbourne, AU"),n=Date.now()-t;this.updateCounter("weather",!0),this.updateApiStatus("weather",n,!0),this.testResults.unshift({api:"Weather API",message:e.success?"Weather data retrieved successfully":e.error,success:e.success,timestamp:new Date().toLocaleTimeString()})}catch(e){this.updateCounter("weather",!1),this.updateApiStatus("weather",Date.now()-t,!1),this.testResults.unshift({api:"Weather API",message:e.message,success:!1,timestamp:new Date().toLocaleTimeString()})}finally{this.testing=!1}},async testBookAPI(){this.testing=!0;const t=Date.now();try{const e=await dh(),n=Date.now()-t;this.updateCounter("book",!0),this.updateApiStatus("book",n,!0),this.testResults.unshift({api:"Book API",message:`Retrieved ${e.length} books successfully`,success:!0,timestamp:new Date().toLocaleTimeString()})}catch(e){this.updateCounter("book",!1),this.updateApiStatus("book",Date.now()-t,!1),this.testResults.unshift({api:"Book API",message:e.message,success:!1,timestamp:new Date().toLocaleTimeString()})}finally{this.testing=!1}},async testFirebaseFunctions(){this.testing=!0;const t=Date.now();try{const e=await Ey(),n=Date.now()-t;this.updateCounter("firebase",!0),this.updateApiStatus("firebase",n,!0),this.testResults.unshift({api:"Firebase Functions",message:e.success?`Book count: ${e.bookCount}`:e.error,success:e.success,timestamp:new Date().toLocaleTimeString()})}catch(e){this.updateCounter("firebase",!1),this.updateApiStatus("firebase",Date.now()-t,!1),this.testResults.unshift({api:"Firebase Functions",message:e.message,success:!1,timestamp:new Date().toLocaleTimeString()})}finally{this.testing=!1}},updateCounter(t,e){this.counters.totalRequests++,e&&this.counters.successfulRequests++,t==="weather"?this.counters.weatherRequests++:t==="book"&&this.counters.bookRequests++},updateApiStatus(t,e,n){this.apiStatus[t].lastCalled=new Date().toLocaleTimeString(),this.apiStatus[t].responseTime=e,n?this.apiStatus[t].successRate=Math.min(100,(this.apiStatus[t].successRate||0)+10):this.apiStatus[t].successRate=Math.max(0,(this.apiStatus[t].successRate||0)-5)},resetCounters(){this.counters={weatherRequests:0,bookRequests:0,totalRequests:0,successfulRequests:0},this.testResults=[]}},mounted(){this.counters.weatherRequests=0,this.counters.bookRequests=0,this.counters.totalRequests=0,this.counters.successfulRequests=0}},dD={class:"container mt-4"},fD={class:"row"},pD={class:"col-12"},mD={class:"card"},gD={class:"card-body"},_D={class:"row"},yD={class:"col-md-3 mb-3"},vD={class:"card text-center bg-primary text-white"},ED={class:"card-body"},wD={class:"card-title"},bD={class:"col-md-3 mb-3"},TD={class:"card text-center bg-success text-white"},ID={class:"card-body"},AD={class:"card-title"},RD={class:"col-md-3 mb-3"},SD={class:"card text-center bg-warning text-dark"},CD={class:"card-body"},PD={class:"card-title"},kD={class:"col-md-3 mb-3"},ND={class:"card text-center bg-info text-white"},VD={class:"card-body"},DD={class:"card-title"},OD={class:"row mt-4"},xD={class:"col-12"},LD={class:"table-responsive"},MD={class:"table table-striped"},FD={class:"row mt-4"},UD={class:"col-12"},BD={class:"btn-group",role:"group"},$D=["disabled"],jD={key:0,class:"spinner-border spinner-border-sm me-2"},qD=["disabled"],HD={key:0,class:"spinner-border spinner-border-sm me-2"},WD=["disabled"],GD={key:0,class:"spinner-border spinner-border-sm me-2"},KD={key:0,class:"row mt-4"},zD={class:"col-12"},QD={class:"list-group"},YD={class:"text-muted"};function JD(t,e,n,s,r,i){return J(),Z("div",dD,[d("div",fD,[d("div",pD,[d("div",mD,[e[22]||(e[22]=d("div",{class:"card-header"},[d("h4",{class:"mb-0"},"API Counters - EFOLIO Task 10.1")],-1)),d("div",gD,[d("div",_D,[d("div",yD,[d("div",vD,[d("div",ED,[d("h3",wD,$(r.counters.weatherRequests),1),e[4]||(e[4]=d("p",{class:"card-text"},"Weather API Calls",-1))])])]),d("div",bD,[d("div",TD,[d("div",ID,[d("h3",AD,$(r.counters.bookRequests),1),e[5]||(e[5]=d("p",{class:"card-text"},"Book API Calls",-1))])])]),d("div",RD,[d("div",SD,[d("div",CD,[d("h3",PD,$(r.counters.totalRequests),1),e[6]||(e[6]=d("p",{class:"card-text"},"Total API Calls",-1))])])]),d("div",kD,[d("div",ND,[d("div",VD,[d("h3",DD,$(r.counters.successfulRequests),1),e[7]||(e[7]=d("p",{class:"card-text"},"Successful Calls",-1))])])])]),d("div",OD,[d("div",xD,[e[15]||(e[15]=d("h5",null,"API Status",-1)),d("div",LD,[d("table",MD,[e[14]||(e[14]=d("thead",null,[d("tr",null,[d("th",null,"API Endpoint"),d("th",null,"Status"),d("th",null,"Last Called"),d("th",null,"Response Time"),d("th",null,"Success Rate")])],-1)),d("tbody",null,[d("tr",null,[e[8]||(e[8]=d("td",null,"Weather API",-1)),e[9]||(e[9]=d("td",null,[d("span",{class:"badge bg-success"},"Online")],-1)),d("td",null,$(r.apiStatus.weather.lastCalled||"Never"),1),d("td",null,$(r.apiStatus.weather.responseTime||"N/A")+"ms",1),d("td",null,$(r.apiStatus.weather.successRate||"0")+"%",1)]),d("tr",null,[e[10]||(e[10]=d("td",null,"Book API",-1)),e[11]||(e[11]=d("td",null,[d("span",{class:"badge bg-success"},"Online")],-1)),d("td",null,$(r.apiStatus.book.lastCalled||"Never"),1),d("td",null,$(r.apiStatus.book.responseTime||"N/A")+"ms",1),d("td",null,$(r.apiStatus.book.successRate||"0")+"%",1)]),d("tr",null,[e[12]||(e[12]=d("td",null,"Firebase Functions",-1)),e[13]||(e[13]=d("td",null,[d("span",{class:"badge bg-success"},"Online")],-1)),d("td",null,$(r.apiStatus.firebase.lastCalled||"Never"),1),d("td",null,$(r.apiStatus.firebase.responseTime||"N/A")+"ms",1),d("td",null,$(r.apiStatus.firebase.successRate||"0")+"%",1)])])])])])]),d("div",FD,[d("div",UD,[e[19]||(e[19]=d("h5",null,"Test API Endpoints",-1)),d("div",BD,[d("button",{onClick:e[0]||(e[0]=(...o)=>i.testWeatherAPI&&i.testWeatherAPI(...o)),class:"btn btn-outline-primary",disabled:r.testing},[r.testing?(J(),Z("span",jD)):ge("",!0),e[16]||(e[16]=se(" Test Weather API ",-1))],8,$D),d("button",{onClick:e[1]||(e[1]=(...o)=>i.testBookAPI&&i.testBookAPI(...o)),class:"btn btn-outline-success",disabled:r.testing},[r.testing?(J(),Z("span",HD)):ge("",!0),e[17]||(e[17]=se(" Test Book API ",-1))],8,qD),d("button",{onClick:e[2]||(e[2]=(...o)=>i.testFirebaseFunctions&&i.testFirebaseFunctions(...o)),class:"btn btn-outline-warning",disabled:r.testing},[r.testing?(J(),Z("span",GD)):ge("",!0),e[18]||(e[18]=se(" Test Firebase Functions ",-1))],8,WD),d("button",{onClick:e[3]||(e[3]=(...o)=>i.resetCounters&&i.resetCounters(...o)),class:"btn btn-outline-danger"}," Reset Counters ")])])]),r.testResults.length>0?(J(),Z("div",KD,[d("div",zD,[e[21]||(e[21]=d("h5",null,"Test Results",-1)),d("div",QD,[(J(!0),Z(Ot,null,Sr(r.testResults,(o,l)=>(J(),Z("div",{key:l,class:"list-group-item d-flex justify-content-between align-items-center"},[d("div",null,[d("strong",null,$(o.api),1),se(" - "+$(o.message)+" ",1),e[20]||(e[20]=d("br",null,null,-1)),d("small",YD,$(o.timestamp),1)]),d("span",{class:ln(["badge",o.success?"bg-success":"bg-danger"])},$(o.success?"Success":"Failed"),3)]))),128))])])])):ge("",!0)])])])])])}const XD=Zt(hD,[["render",JD],["__scopeId","data-v-ee7857e1"]]);const ZD={name:"GetAllBookApiView",data(){return{books:[],loading:!1,error:null,lastUpdated:null}},computed:{formattedJson(){return JSON.stringify(this.books,null,2)},rawJson(){return JSON.stringify(this.books)}},methods:{async refreshBooks(){this.loading=!0,this.error=null;try{const t=await dh();this.books=t,this.lastUpdated=new Date().toLocaleString()}catch(t){this.error=t.message,console.error("Error loading books:",t)}finally{this.loading=!1}},async copyToClipboard(){try{await navigator.clipboard.writeText(this.formattedJson),alert("JSON copied to clipboard!")}catch(t){console.error("Failed to copy to clipboard:",t),alert("Failed to copy to clipboard. Please try again.")}},downloadJson(){const t="data:text/json;charset=utf-8,"+encodeURIComponent(this.formattedJson),e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download","books.json"),document.body.appendChild(e),e.click(),e.remove()},viewRawJson(){new bootstrap.Modal(document.getElementById("rawJsonModal")).show()}},async mounted(){await this.refreshBooks()}},eO={class:"container mt-4"},tO={class:"row"},nO={class:"col-12"},sO={class:"card"},rO={class:"card-header d-flex justify-content-between align-items-center"},iO=["disabled"],oO={key:0,class:"spinner-border spinner-border-sm me-2"},aO={class:"card-body"},lO={class:"row mb-4"},cO={class:"col-md-6"},uO={class:"alert alert-info"},hO={class:"mb-0"},dO={class:"col-md-6"},fO={class:"alert alert-success"},pO={class:"mb-0"},mO={key:0,class:"row"},gO={class:"col-12"},_O={class:"position-relative"},yO={class:"bg-light p-3 rounded",style:{"max-height":"500px","overflow-y":"auto"}},vO={class:"position-absolute top-0 end-0 p-2"},EO={class:"badge bg-secondary"},wO={key:1,class:"text-center py-5"},bO={key:2,class:"text-center py-5"},TO={key:3,class:"alert alert-danger"},IO={class:"mb-0"},AO={key:4,class:"row mt-4"},RO={class:"col-12"},SO={class:"btn-group",role:"group"},CO={class:"modal fade",id:"rawJsonModal",tabindex:"-1"},PO={class:"modal-dialog modal-xl"},kO={class:"modal-content"},NO={class:"modal-body"},VO={class:"bg-light p-3 rounded",style:{"max-height":"400px","overflow-y":"auto"}},DO={class:"modal-footer"};function OO(t,e,n,s,r,i){const o=cu("router-link");return J(),Z("div",eO,[d("div",tO,[d("div",nO,[d("div",sO,[d("div",rO,[e[8]||(e[8]=d("h4",{class:"mb-0"},"GetAllBookAPI - EFOLIO Task 10.2",-1)),d("div",null,[d("button",{onClick:e[0]||(e[0]=(...l)=>i.refreshBooks&&i.refreshBooks(...l)),class:"btn btn-primary btn-sm",disabled:r.loading},[r.loading?(J(),Z("span",oO)):ge("",!0),e[7]||(e[7]=se(" Refresh ",-1))],8,iO),r.books.length>0?(J(),Z("button",{key:0,onClick:e[1]||(e[1]=(...l)=>i.copyToClipboard&&i.copyToClipboard(...l)),class:"btn btn-success btn-sm ms-2"}," Copy JSON ")):ge("",!0)])]),d("div",aO,[d("div",lO,[d("div",cO,[d("div",uO,[e[15]||(e[15]=d("h6",{class:"alert-heading"},"API Status",-1)),d("p",hO,[e[9]||(e[9]=d("strong",null,"Total Books:",-1)),se(" "+$(r.books.length),1),e[10]||(e[10]=d("br",null,null,-1)),e[11]||(e[11]=d("strong",null,"Last Updated:",-1)),se(" "+$(r.lastUpdated||"Never"),1),e[12]||(e[12]=d("br",null,null,-1)),e[13]||(e[13]=d("strong",null,"API Endpoint:",-1)),e[14]||(e[14]=se(" /api/books ",-1))])])]),d("div",dO,[d("div",fO,[e[23]||(e[23]=d("h6",{class:"alert-heading"},"JSON Format",-1)),d("p",pO,[e[16]||(e[16]=d("strong",null,"Content-Type:",-1)),e[17]||(e[17]=se(" application/json",-1)),e[18]||(e[18]=d("br",null,null,-1)),e[19]||(e[19]=d("strong",null,"Encoding:",-1)),e[20]||(e[20]=se(" UTF-8",-1)),e[21]||(e[21]=d("br",null,null,-1)),e[22]||(e[22]=d("strong",null,"Status:",-1)),se(" "+$(r.loading?"Loading...":"Ready"),1)])])])]),r.books.length>0?(J(),Z("div",mO,[d("div",gO,[e[24]||(e[24]=d("h5",null,"Books Data (JSON Format)",-1)),d("div",_O,[d("pre",yO,[d("code",null,$(i.formattedJson),1)]),d("div",vO,[d("span",EO,$(r.books.length)+" books",1)])])])])):r.loading?ge("",!0):(J(),Z("div",wO,[e[26]||(e[26]=d("div",{class:"mb-4"},[d("i",{class:"fas fa-book fa-3x text-muted"})],-1)),e[27]||(e[27]=d("h5",{class:"text-muted"},"No Books Found",-1)),e[28]||(e[28]=d("p",{class:"text-muted"},"Add some books to see them in JSON format here.",-1)),De(o,{to:"/add-book",class:"btn btn-primary"},{default:bt(()=>[...e[25]||(e[25]=[se(" Add Your First Book ",-1)])]),_:1})])),r.loading?(J(),Z("div",bO,[...e[29]||(e[29]=[d("div",{class:"spinner-border text-primary",role:"status"},[d("span",{class:"visually-hidden"},"Loading...")],-1),d("p",{class:"mt-3"},"Loading books data...",-1)])])):ge("",!0),r.error?(J(),Z("div",TO,[e[30]||(e[30]=d("h6",{class:"alert-heading"},"Error Loading Books",-1)),d("p",IO,$(r.error),1),d("button",{onClick:e[2]||(e[2]=(...l)=>i.refreshBooks&&i.refreshBooks(...l)),class:"btn btn-outline-danger btn-sm mt-2"}," Try Again ")])):ge("",!0),r.books.length>0?(J(),Z("div",AO,[d("div",RO,[e[34]||(e[34]=d("h5",null,"Export Options",-1)),d("div",SO,[d("button",{onClick:e[3]||(e[3]=(...l)=>i.downloadJson&&i.downloadJson(...l)),class:"btn btn-outline-primary"},[...e[31]||(e[31]=[d("i",{class:"fas fa-download me-2"},null,-1),se("Download JSON ",-1)])]),d("button",{onClick:e[4]||(e[4]=(...l)=>i.viewRawJson&&i.viewRawJson(...l)),class:"btn btn-outline-secondary"},[...e[32]||(e[32]=[d("i",{class:"fas fa-code me-2"},null,-1),se("View Raw JSON ",-1)])]),d("button",{onClick:e[5]||(e[5]=(...l)=>i.copyToClipboard&&i.copyToClipboard(...l)),class:"btn btn-outline-success"},[...e[33]||(e[33]=[d("i",{class:"fas fa-copy me-2"},null,-1),se("Copy to Clipboard ",-1)])])])])])):ge("",!0),d("div",CO,[d("div",PO,[d("div",kO,[e[36]||(e[36]=d("div",{class:"modal-header"},[d("h5",{class:"modal-title"},"Raw JSON Data"),d("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"})],-1)),d("div",NO,[d("pre",VO,[d("code",null,$(i.rawJson),1)])]),d("div",DO,[e[35]||(e[35]=d("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1)),d("button",{onClick:e[6]||(e[6]=(...l)=>i.copyToClipboard&&i.copyToClipboard(...l)),class:"btn btn-primary"},"Copy to Clipboard")])])])])])])])])])}const xO=Zt(ZD,[["render",OO],["__scopeId","data-v-34bac394"]]),LO=()=>!!vn.getCurrentUser(),MO=[{path:"/",name:"Home",component:cT,meta:{title:"Home"}},{path:"/about",name:"About",component:dT,meta:{title:"About"}},{path:"/register",name:"Register",component:aP,meta:{title:"Firebase Registration"}},{path:"/auth",name:"Auth",component:zC,meta:{title:"Authentication"}},{path:"/dashboard",name:"Dashboard",component:IP,meta:{title:"Dashboard"}},{path:"/add-book",name:"AddBook",component:ok,meta:{title:"Add Book"}},{path:"/book-management",name:"BookManagement",component:Qk,meta:{title:"Book Management"}},{path:"/firebase-functions",name:"FirebaseFunctions",component:WN,meta:{title:"Firebase Functions"}},{path:"/weather",name:"Weather",component:uD,meta:{title:"Weather API"}},{path:"/api",name:"Api",component:XD,meta:{title:"API Counters"}},{path:"/get-all-book-api",name:"GetAllBookApi",component:xO,meta:{title:"GetAllBookAPI"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>kb(()=>import("./NotFoundView-cd2ec99e.js"),["assets/NotFoundView-cd2ec99e.js","assets/NotFoundView-6f90339f.css"]),meta:{title:"Not Found"}}],by=Eb({history:eb({}.BASE_URL),routes:MO});by.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!LO()?n({name:"Home",query:{denied:"auth",redirect:t.fullPath}}):n()});const Ty=pw(Sb);Ty.use(by);Ty.mount("#app");export{Zt as _,d as a,De as b,Z as c,se as d,J as o,cu as r,bt as w};
