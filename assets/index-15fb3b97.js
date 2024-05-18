(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function zc(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ye={},Ds=[],Ft=()=>{},cv=()=>!1,uv=/^on[^a-z]/,aa=t=>uv.test(t),qc=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hv=Object.prototype.hasOwnProperty,te=(t,e)=>hv.call(t,e),j=Array.isArray,Os=t=>Cr(t)==="[object Map]",vp=t=>Cr(t)==="[object Set]",dv=t=>Cr(t)==="[object RegExp]",W=t=>typeof t=="function",Re=t=>typeof t=="string",Gc=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Ap=t=>Te(t)&&W(t.then)&&W(t.catch),Ep=Object.prototype.toString,Cr=t=>Ep.call(t),fv=t=>Cr(t).slice(8,-1),wp=t=>Cr(t)==="[object Object]",Qc=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yo=zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),la=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pv=/-(\w)/g,qs=la(t=>t.replace(pv,(e,n)=>n?n.toUpperCase():"")),gv=/\B([A-Z])/g,ri=la(t=>t.replace(gv,"-$1").toLowerCase()),Tp=la(t=>t.charAt(0).toUpperCase()+t.slice(1)),Za=la(t=>t?`on${Tp(t)}`:""),er=(t,e)=>!Object.is(t,e),Vi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Co=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},mv=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uh;const Pl=()=>Uh||(Uh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sr(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Re(s)?Av(s):Sr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Re(t))return t;if(Te(t))return t}}const _v=/;(?![^(]*\))/g,yv=/:([^]+)/,vv=/\/\*[^]*?\*\//g;function Av(t){const e={};return t.replace(vv,"").split(_v).forEach(n=>{if(n){const s=n.split(yv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function oi(t){let e="";if(Re(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=oi(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function wi(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Re(e)&&(t.class=oi(e)),n&&(t.style=Sr(n)),t}const Ev="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wv=zc(Ev);function Ip(t){return!!t||t===""}const st=t=>Re(t)?t:t==null?"":j(t)||Te(t)&&(t.toString===Ep||!W(t.toString))?JSON.stringify(t,Cp,2):String(t),Cp=(t,e)=>e&&e.__v_isRef?Cp(t,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:vp(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!j(e)&&!wp(e)?String(e):e;let xt;class Tv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Iv(t,e=xt){e&&e.active&&e.effects.push(t)}function Cv(){return xt}const Yc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sp=t=>(t.w&xn)>0,bp=t=>(t.n&xn)>0,Sv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=xn},bv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Sp(i)&&!bp(i)?i.delete(t):e[n++]=i,i.w&=~xn,i.n&=~xn}e.length=n}},So=new WeakMap;let xi=0,xn=1;const Ml=30;let Dt;const es=Symbol(""),Ll=Symbol("");class Xc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Iv(this,s)}run(){if(!this.active)return this.fn();let e=Dt,n=Sn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,Sn=!0,xn=1<<++xi,xi<=Ml?Sv(this):Bh(this),this.fn()}finally{xi<=Ml&&bv(this),xn=1<<--xi,Dt=this.parent,Sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(Bh(this),this.onStop&&this.onStop(),this.active=!1)}}function Bh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Sn=!0;const Np=[];function ai(){Np.push(Sn),Sn=!1}function li(){const t=Np.pop();Sn=t===void 0?!0:t}function mt(t,e,n){if(Sn&&Dt){let s=So.get(t);s||So.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Yc()),Rp(i)}}function Rp(t,e){let n=!1;xi<=Ml?bp(t)||(t.n|=xn,n=!Sp(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function pn(t,e,n,s,i,r){const o=So.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?Qc(n)&&a.push(o.get("length")):(a.push(o.get(es)),Os(t)&&a.push(o.get(Ll)));break;case"delete":j(t)||(a.push(o.get(es)),Os(t)&&a.push(o.get(Ll)));break;case"set":Os(t)&&a.push(o.get(es));break}if(a.length===1)a[0]&&Fl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Fl(Yc(l))}}function Fl(t,e){const n=j(t)?t:[...t];for(const s of n)s.computed&&Vh(s);for(const s of n)s.computed||Vh(s)}function Vh(t,e){(t!==Dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Nv(t,e){var n;return(n=So.get(t))==null?void 0:n.get(e)}const Rv=zc("__proto__,__v_isRef,__isVue"),kp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gc)),kv=Jc(),xv=Jc(!1,!0),Dv=Jc(!0),$h=Ov();function Ov(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let r=0,o=this.length;r<o;r++)mt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ai();const s=ie(this)[e].apply(this,n);return li(),s}}),t}function Pv(t){const e=ie(this);return mt(e,"has",t),e.hasOwnProperty(t)}function Jc(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Yv:Mp:e?Pp:Op).get(s))return s;const o=j(s);if(!t){if(o&&te($h,i))return Reflect.get($h,i,r);if(i==="hasOwnProperty")return Pv}const a=Reflect.get(s,i,r);return(Gc(i)?kp.has(i):Rv(i))||(t||mt(s,"get",i),e)?a:Ge(a)?o&&Qc(i)?a:a.value:Te(a)?t?tu(a):ua(a):a}}const Mv=xp(),Lv=xp(!0);function xp(t=!1){return function(n,s,i,r){let o=n[s];if(Ws(o)&&Ge(o)&&!Ge(i))return!1;if(!t&&(!bo(i)&&!Ws(i)&&(o=ie(o),i=ie(i)),!j(n)&&Ge(o)&&!Ge(i)))return o.value=i,!0;const a=j(n)&&Qc(s)?Number(s)<n.length:te(n,s),l=Reflect.set(n,s,i,r);return n===ie(r)&&(a?er(i,o)&&pn(n,"set",s,i):pn(n,"add",s,i)),l}}function Fv(t,e){const n=te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&pn(t,"delete",e,void 0),s}function Uv(t,e){const n=Reflect.has(t,e);return(!Gc(e)||!kp.has(e))&&mt(t,"has",e),n}function Bv(t){return mt(t,"iterate",j(t)?"length":es),Reflect.ownKeys(t)}const Dp={get:kv,set:Mv,deleteProperty:Fv,has:Uv,ownKeys:Bv},Vv={get:Dv,set(t,e){return!0},deleteProperty(t,e){return!0}},$v=Ye({},Dp,{get:xv,set:Lv}),Zc=t=>t,ca=t=>Reflect.getPrototypeOf(t);function Xr(t,e,n=!1,s=!1){t=t.__v_raw;const i=ie(t),r=ie(e);n||(e!==r&&mt(i,"get",e),mt(i,"get",r));const{has:o}=ca(i),a=s?Zc:n?su:tr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Jr(t,e=!1){const n=this.__v_raw,s=ie(n),i=ie(t);return e||(t!==i&&mt(s,"has",t),mt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Zr(t,e=!1){return t=t.__v_raw,!e&&mt(ie(t),"iterate",es),Reflect.get(t,"size",t)}function jh(t){t=ie(t);const e=ie(this);return ca(e).has.call(e,t)||(e.add(t),pn(e,"add",t,t)),this}function Hh(t,e){e=ie(e);const n=ie(this),{has:s,get:i}=ca(n);let r=s.call(n,t);r||(t=ie(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?er(e,o)&&pn(n,"set",t,e):pn(n,"add",t,e),this}function Kh(t){const e=ie(this),{has:n,get:s}=ca(e);let i=n.call(e,t);i||(t=ie(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&pn(e,"delete",t,void 0),r}function zh(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&pn(t,"clear",void 0,void 0),n}function eo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ie(o),l=e?Zc:t?su:tr;return!t&&mt(a,"iterate",es),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function to(t,e,n){return function(...s){const i=this.__v_raw,r=ie(i),o=Os(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Zc:e?su:tr;return!e&&mt(r,"iterate",l?Ll:es),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function En(t){return function(...e){return t==="delete"?!1:this}}function jv(){const t={get(r){return Xr(this,r)},get size(){return Zr(this)},has:Jr,add:jh,set:Hh,delete:Kh,clear:zh,forEach:eo(!1,!1)},e={get(r){return Xr(this,r,!1,!0)},get size(){return Zr(this)},has:Jr,add:jh,set:Hh,delete:Kh,clear:zh,forEach:eo(!1,!0)},n={get(r){return Xr(this,r,!0)},get size(){return Zr(this,!0)},has(r){return Jr.call(this,r,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:eo(!0,!1)},s={get(r){return Xr(this,r,!0,!0)},get size(){return Zr(this,!0)},has(r){return Jr.call(this,r,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=to(r,!1,!1),n[r]=to(r,!0,!1),e[r]=to(r,!1,!0),s[r]=to(r,!0,!0)}),[t,n,e,s]}const[Hv,Kv,zv,qv]=jv();function eu(t,e){const n=e?t?qv:zv:t?Kv:Hv;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const Wv={get:eu(!1,!1)},Gv={get:eu(!1,!0)},Qv={get:eu(!0,!1)},Op=new WeakMap,Pp=new WeakMap,Mp=new WeakMap,Yv=new WeakMap;function Xv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jv(t){return t.__v_skip||!Object.isExtensible(t)?0:Xv(fv(t))}function ua(t){return Ws(t)?t:nu(t,!1,Dp,Wv,Op)}function Zv(t){return nu(t,!1,$v,Gv,Pp)}function tu(t){return nu(t,!0,Vv,Qv,Mp)}function nu(t,e,n,s,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Jv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Ps(t){return Ws(t)?Ps(t.__v_raw):!!(t&&t.__v_isReactive)}function Ws(t){return!!(t&&t.__v_isReadonly)}function bo(t){return!!(t&&t.__v_isShallow)}function Lp(t){return Ps(t)||Ws(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Fp(t){return Co(t,"__v_skip",!0),t}const tr=t=>Te(t)?ua(t):t,su=t=>Te(t)?tu(t):t;function Up(t){Sn&&Dt&&(t=ie(t),Rp(t.dep||(t.dep=Yc())))}function Bp(t,e){t=ie(t);const n=t.dep;n&&Fl(n)}function Ge(t){return!!(t&&t.__v_isRef===!0)}function Ti(t){return eA(t,!1)}function eA(t,e){return Ge(t)?t:new tA(t,e)}class tA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:tr(e)}get value(){return Up(this),this._value}set value(e){const n=this.__v_isShallow||bo(e)||Ws(e);e=n?e:ie(e),er(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:tr(e),Bp(this))}}function pe(t){return Ge(t)?t.value:t}const nA={get:(t,e,n)=>pe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ge(i)&&!Ge(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Vp(t){return Ps(t)?t:new Proxy(t,nA)}function sA(t){const e=j(t)?new Array(t.length):{};for(const n in t)e[n]=rA(t,n);return e}class iA{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Nv(ie(this._object),this._key)}}function rA(t,e,n){const s=t[e];return Ge(s)?s:new iA(t,e,n)}class oA{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Xc(e,()=>{this._dirty||(this._dirty=!0,Bp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ie(this);return Up(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function aA(t,e,n=!1){let s,i;const r=W(t);return r?(s=t,i=Ft):(s=t.get,i=t.set),new oA(s,i,r||!i,n)}function bn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ha(r,e,n)}return i}function Ut(t,e,n,s){if(W(t)){const r=bn(t,e,n,s);return r&&Ap(r)&&r.catch(o=>{ha(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ut(t[r],e,n,s));return i}function ha(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){bn(l,null,10,[t,o,a]);return}}lA(t,n,i,s)}function lA(t,e,n,s=!0){console.error(t)}let nr=!1,Ul=!1;const nt=[];let Wt=0;const Ms=[];let ln=null,qn=0;const $p=Promise.resolve();let iu=null;function No(t){const e=iu||$p;return t?e.then(this?t.bind(this):t):e}function cA(t){let e=Wt+1,n=nt.length;for(;e<n;){const s=e+n>>>1;sr(nt[s])<t?e=s+1:n=s}return e}function ru(t){(!nt.length||!nt.includes(t,nr&&t.allowRecurse?Wt+1:Wt))&&(t.id==null?nt.push(t):nt.splice(cA(t.id),0,t),jp())}function jp(){!nr&&!Ul&&(Ul=!0,iu=$p.then(Kp))}function uA(t){const e=nt.indexOf(t);e>Wt&&nt.splice(e,1)}function hA(t){j(t)?Ms.push(...t):(!ln||!ln.includes(t,t.allowRecurse?qn+1:qn))&&Ms.push(t),jp()}function qh(t,e=nr?Wt+1:0){for(;e<nt.length;e++){const n=nt[e];n&&n.pre&&(nt.splice(e,1),e--,n())}}function Hp(t){if(Ms.length){const e=[...new Set(Ms)];if(Ms.length=0,ln){ln.push(...e);return}for(ln=e,ln.sort((n,s)=>sr(n)-sr(s)),qn=0;qn<ln.length;qn++)ln[qn]();ln=null,qn=0}}const sr=t=>t.id==null?1/0:t.id,dA=(t,e)=>{const n=sr(t)-sr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Kp(t){Ul=!1,nr=!0,nt.sort(dA);const e=Ft;try{for(Wt=0;Wt<nt.length;Wt++){const n=nt[Wt];n&&n.active!==!1&&bn(n,null,14)}}finally{Wt=0,nt.length=0,Hp(),nr=!1,iu=null,(nt.length||Ms.length)&&Kp()}}function fA(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ye;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ye;d&&(i=n.map(g=>Re(g)?g.trim():g)),h&&(i=n.map(mv))}let a,l=s[a=Za(e)]||s[a=Za(qs(e))];!l&&r&&(l=s[a=Za(ri(e))]),l&&Ut(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ut(c,t,6,i)}}function zp(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!W(t)){const l=c=>{const u=zp(c,e,!0);u&&(a=!0,Ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Te(t)&&s.set(t,null),null):(j(r)?r.forEach(l=>o[l]=null):Ye(o,r),Te(t)&&s.set(t,o),o)}function da(t,e){return!t||!aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,ri(e))||te(t,e))}let bt=null,fa=null;function Ro(t){const e=bt;return bt=t,fa=t&&t.type.__scopeId||null,e}function pA(t){fa=t}function gA(){fa=null}function mA(t,e=bt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&nd(-1);const r=Ro(e);let o;try{o=t(...i)}finally{Ro(r),s._d&&nd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function el(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:_,inheritAttrs:T}=t;let I,K;const b=Ro(t);try{if(n.shapeFlag&4){const A=i||s;I=qt(u.call(A,A,h,r,g,d,_)),K=l}else{const A=e;I=qt(A.length>1?A(r,{attrs:l,slots:a,emit:c}):A(r,null)),K=e.props?l:_A(l)}}catch(A){Hi.length=0,ha(A,t,1),I=Et(as)}let R=I;if(K&&T!==!1){const A=Object.keys(K),{shapeFlag:X}=R;A.length&&X&7&&(o&&A.some(qc)&&(K=yA(K,o)),R=ls(R,K))}return n.dirs&&(R=ls(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),I=R,Ro(b),I}const _A=t=>{let e;for(const n in t)(n==="class"||n==="style"||aa(n))&&((e||(e={}))[n]=t[n]);return e},yA=(t,e)=>{const n={};for(const s in t)(!qc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function vA(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Wh(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!da(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Wh(s,o,c):!0:!!o;return!1}function Wh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!da(n,r))return!0}return!1}function AA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const qp=t=>t.__isSuspense;function EA(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):hA(t)}function wA(t,e){return ou(t,null,{flush:"post"})}const no={};function Ls(t,e,n){return ou(t,e,n)}function ou(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ye){var a;const l=Cv()===((a=qe)==null?void 0:a.scope)?qe:null;let c,u=!1,h=!1;if(Ge(t)?(c=()=>t.value,u=bo(t)):Ps(t)?(c=()=>t,s=!0):j(t)?(h=!0,u=t.some(A=>Ps(A)||bo(A)),c=()=>t.map(A=>{if(Ge(A))return A.value;if(Ps(A))return Gn(A);if(W(A))return bn(A,l,2)})):W(t)?e?c=()=>bn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Ut(t,l,3,[g])}:c=Ft,e&&s){const A=c;c=()=>Gn(A())}let d,g=A=>{d=b.onStop=()=>{bn(A,l,4)}},_;if(rr)if(g=Ft,e?n&&Ut(e,l,3,[c(),h?[]:void 0,g]):c(),i==="sync"){const A=fE();_=A.__watcherHandles||(A.__watcherHandles=[])}else return Ft;let T=h?new Array(t.length).fill(no):no;const I=()=>{if(b.active)if(e){const A=b.run();(s||u||(h?A.some((X,fe)=>er(X,T[fe])):er(A,T)))&&(d&&d(),Ut(e,l,3,[A,T===no?void 0:h&&T[0]===no?[]:T,g]),T=A)}else b.run()};I.allowRecurse=!!e;let K;i==="sync"?K=I:i==="post"?K=()=>He(I,l&&l.suspense):(I.pre=!0,l&&(I.id=l.uid),K=()=>ru(I));const b=new Xc(c,K);e?n?I():T=b.run():i==="post"?He(b.run.bind(b),l&&l.suspense):b.run();const R=()=>{b.stop(),l&&l.scope&&Wc(l.scope.effects,b)};return _&&_.push(R),R}function TA(t,e,n){const s=this.proxy,i=Re(t)?t.includes(".")?Wp(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=qe;Gs(this);const a=ou(i,r.bind(s),n);return o?Gs(o):ts(),a}function Wp(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Gn(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))Gn(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)Gn(t[n],e);else if(vp(t)||Os(t))t.forEach(n=>{Gn(n,e)});else if(wp(t))for(const n in t)Gn(t[n],e);return t}function IA(t,e){const n=bt;if(n===null)return t;const s=ya(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ye]=e[r];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&Gn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function jn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ai(),Ut(l,n,8,[t.el,a,t,e]),li())}}function Gp(t,e){t.shapeFlag&6&&t.component?Gp(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}const $i=t=>!!t.type.__asyncLoader,Qp=t=>t.type.__isKeepAlive,CA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=hg(),s=n.ctx;if(!s.renderer)return()=>{const b=e.default&&e.default();return b&&b.length===1?b[0]:b};const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=s,d=h("div");s.activate=(b,R,A,X,fe)=>{const Ie=b.component;c(b,R,A,0,a),l(Ie.vnode,b,R,A,Ie,a,X,b.slotScopeIds,fe),He(()=>{Ie.isDeactivated=!1,Ie.a&&Vi(Ie.a);const Ne=b.props&&b.props.onVnodeMounted;Ne&&Ct(Ne,Ie.parent,b)},a)},s.deactivate=b=>{const R=b.component;c(b,d,null,1,a),He(()=>{R.da&&Vi(R.da);const A=b.props&&b.props.onVnodeUnmounted;A&&Ct(A,R.parent,b),R.isDeactivated=!0},a)};function g(b){tl(b),u(b,n,a,!0)}function _(b){i.forEach((R,A)=>{const X=od(R.type);X&&(!b||!b(X))&&T(A)})}function T(b){const R=i.get(b);!o||!Cs(R,o)?g(R):o&&tl(o),i.delete(b),r.delete(b)}Ls(()=>[t.include,t.exclude],([b,R])=>{b&&_(A=>Di(b,A)),R&&_(A=>!Di(R,A))},{flush:"post",deep:!0});let I=null;const K=()=>{I!=null&&i.set(I,nl(n.subTree))};return ga(K),Xp(K),Jp(()=>{i.forEach(b=>{const{subTree:R,suspense:A}=n,X=nl(R);if(b.type===X.type&&b.key===X.key){tl(X);const fe=X.component.da;fe&&He(fe,A);return}g(b)})}),()=>{if(I=null,!e.default)return null;const b=e.default(),R=b[0];if(b.length>1)return o=null,b;if(!lg(R)||!(R.shapeFlag&4)&&!(R.shapeFlag&128))return o=null,R;let A=nl(R);const X=A.type,fe=od($i(A)?A.type.__asyncResolved||{}:X),{include:Ie,exclude:Ne,max:yt}=t;if(Ie&&(!fe||!Di(Ie,fe))||Ne&&fe&&Di(Ne,fe))return o=A,R;const ct=A.key==null?X:A.key,on=i.get(ct);return A.el&&(A=ls(A),R.shapeFlag&128&&(R.ssContent=A)),I=ct,on?(A.el=on.el,A.component=on.component,A.transition&&Gp(A,A.transition),A.shapeFlag|=512,r.delete(ct),r.add(ct)):(r.add(ct),yt&&r.size>parseInt(yt,10)&&T(r.values().next().value)),A.shapeFlag|=256,o=A,qp(R.type)?R:A}}},SA=CA;function Di(t,e){return j(t)?t.some(n=>Di(n,e)):Re(t)?t.split(",").includes(e):dv(t)?t.test(e):!1}function bA(t,e){Yp(t,"a",e)}function NA(t,e){Yp(t,"da",e)}function Yp(t,e,n=qe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(pa(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Qp(i.parent.vnode)&&RA(s,e,n,i),i=i.parent}}function RA(t,e,n,s){const i=pa(e,t,s,!0);au(()=>{Wc(s[e],i)},n)}function tl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function nl(t){return t.shapeFlag&128?t.ssContent:t}function pa(t,e,n=qe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ai(),Gs(n);const a=Ut(e,n,t,o);return ts(),li(),a});return s?i.unshift(r):i.push(r),r}}const yn=t=>(e,n=qe)=>(!rr||t==="sp")&&pa(t,(...s)=>e(...s),n),kA=yn("bm"),ga=yn("m"),xA=yn("bu"),Xp=yn("u"),Jp=yn("bum"),au=yn("um"),DA=yn("sp"),OA=yn("rtg"),PA=yn("rtc");function MA(t,e=qe){pa("ec",t,e)}const LA=Symbol.for("v-ndc");function Dn(t,e,n,s){let i;const r=n&&n[s];if(j(t)||Re(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Te(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Bl=t=>t?dg(t)?ya(t)||t.proxy:Bl(t.parent):null,ji=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bl(t.parent),$root:t=>Bl(t.root),$emit:t=>t.emit,$options:t=>lu(t),$forceUpdate:t=>t.f||(t.f=()=>ru(t.update)),$nextTick:t=>t.n||(t.n=No.bind(t.proxy)),$watch:t=>TA.bind(t)}),sl=(t,e)=>t!==ye&&!t.__isScriptSetup&&te(t,e),FA={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(sl(s,e))return o[e]=1,s[e];if(i!==ye&&te(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&te(c,e))return o[e]=3,r[e];if(n!==ye&&te(n,e))return o[e]=4,n[e];Vl&&(o[e]=0)}}const u=ji[e];let h,d;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ye&&te(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,te(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return sl(i,e)?(i[e]=n,!0):s!==ye&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ye&&te(t,o)||sl(e,o)||(a=r[0])&&te(a,o)||te(s,o)||te(ji,o)||te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gh(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vl=!0;function UA(t){const e=lu(t),n=t.proxy,s=t.ctx;Vl=!1,e.beforeCreate&&Qh(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:_,activated:T,deactivated:I,beforeDestroy:K,beforeUnmount:b,destroyed:R,unmounted:A,render:X,renderTracked:fe,renderTriggered:Ie,errorCaptured:Ne,serverPrefetch:yt,expose:ct,inheritAttrs:on,components:Wr,directives:Gr,filters:Ya}=e;if(c&&BA(c,s,null),o)for(const Ce in o){const ge=o[Ce];W(ge)&&(s[Ce]=ge.bind(n))}if(i){const Ce=i.call(n,n);Te(Ce)&&(t.data=ua(Ce))}if(Vl=!0,r)for(const Ce in r){const ge=r[Ce],Vn=W(ge)?ge.bind(n,n):W(ge.get)?ge.get.bind(n,n):Ft,Qr=!W(ge)&&W(ge.set)?ge.set.bind(n):Ft,$n=Fn({get:Vn,set:Qr});Object.defineProperty(s,Ce,{enumerable:!0,configurable:!0,get:()=>$n.value,set:Kt=>$n.value=Kt})}if(a)for(const Ce in a)Zp(a[Ce],s,n,Ce);if(l){const Ce=W(l)?l.call(n):l;Reflect.ownKeys(Ce).forEach(ge=>{zA(ge,Ce[ge])})}u&&Qh(u,t,"c");function ut(Ce,ge){j(ge)?ge.forEach(Vn=>Ce(Vn.bind(n))):ge&&Ce(ge.bind(n))}if(ut(kA,h),ut(ga,d),ut(xA,g),ut(Xp,_),ut(bA,T),ut(NA,I),ut(MA,Ne),ut(PA,fe),ut(OA,Ie),ut(Jp,b),ut(au,A),ut(DA,yt),j(ct))if(ct.length){const Ce=t.exposed||(t.exposed={});ct.forEach(ge=>{Object.defineProperty(Ce,ge,{get:()=>n[ge],set:Vn=>n[ge]=Vn})})}else t.exposed||(t.exposed={});X&&t.render===Ft&&(t.render=X),on!=null&&(t.inheritAttrs=on),Wr&&(t.components=Wr),Gr&&(t.directives=Gr)}function BA(t,e,n=Ft){j(t)&&(t=$l(t));for(const s in t){const i=t[s];let r;Te(i)?"default"in i?r=vo(i.from||s,i.default,!0):r=vo(i.from||s):r=vo(i),Ge(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Qh(t,e,n){Ut(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zp(t,e,n,s){const i=s.includes(".")?Wp(n,s):()=>n[s];if(Re(t)){const r=e[t];W(r)&&Ls(i,r)}else if(W(t))Ls(i,t.bind(n));else if(Te(t))if(j(t))t.forEach(r=>Zp(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&Ls(i,r,t)}}function lu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>ko(l,c,o,!0)),ko(l,e,o)),Te(e)&&r.set(e,l),l}function ko(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ko(t,r,n,!0),i&&i.forEach(o=>ko(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=VA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const VA={data:Yh,props:Xh,emits:Xh,methods:Oi,computed:Oi,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Oi,directives:Oi,watch:jA,provide:Yh,inject:$A};function Yh(t,e){return e?t?function(){return Ye(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function $A(t,e){return Oi($l(t),$l(e))}function $l(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Oi(t,e){return t?Ye(Object.create(null),t,e):e}function Xh(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:Ye(Object.create(null),Gh(t),Gh(e??{})):e}function jA(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const s in e)n[s]=ht(t[s],e[s]);return n}function eg(){return{app:null,config:{isNativeTag:cv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let HA=0;function KA(t,e){return function(s,i=null){W(s)||(s=Ye({},s)),i!=null&&!Te(i)&&(i=null);const r=eg(),o=new Set;let a=!1;const l=r.app={_uid:HA++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:pE,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(l,...u)):W(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Et(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ya(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){xo=l;try{return c()}finally{xo=null}}};return l}}let xo=null;function zA(t,e){if(qe){let n=qe.provides;const s=qe.parent&&qe.parent.provides;s===n&&(n=qe.provides=Object.create(s)),n[t]=e}}function vo(t,e,n=!1){const s=qe||bt;if(s||xo){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:xo._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s&&s.proxy):e}}function qA(t,e,n,s=!1){const i={},r={};Co(r,_a,1),t.propsDefaults=Object.create(null),tg(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Zv(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function WA(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ie(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(da(t.emitsOptions,d))continue;const g=e[d];if(l)if(te(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const _=qs(d);i[_]=jl(l,a,_,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{tg(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!te(e,h)&&((u=ri(h))===h||!te(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=jl(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!te(e,h))&&(delete r[h],c=!0)}c&&pn(t,"set","$attrs")}function tg(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(yo(l))continue;const c=e[l];let u;i&&te(i,u=qs(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:da(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ie(n),c=a||ye;for(let u=0;u<r.length;u++){const h=r[u];n[h]=jl(i,l,h,c[h],t,!te(c,h))}}return o}function jl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&W(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Gs(i),s=c[n]=l.call(null,e),ts())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ri(n))&&(s=!0))}return s}function ng(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!W(t)){const u=h=>{l=!0;const[d,g]=ng(h,e,!0);Ye(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Te(t)&&s.set(t,Ds),Ds;if(j(r))for(let u=0;u<r.length;u++){const h=qs(r[u]);Jh(h)&&(o[h]=ye)}else if(r)for(const u in r){const h=qs(u);if(Jh(h)){const d=r[u],g=o[h]=j(d)||W(d)?{type:d}:Ye({},d);if(g){const _=td(Boolean,g.type),T=td(String,g.type);g[0]=_>-1,g[1]=T<0||_<T,(_>-1||te(g,"default"))&&a.push(h)}}}const c=[o,a];return Te(t)&&s.set(t,c),c}function Jh(t){return t[0]!=="$"}function Zh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ed(t,e){return Zh(t)===Zh(e)}function td(t,e){return j(e)?e.findIndex(n=>ed(n,t)):W(e)&&ed(e,t)?0:-1}const sg=t=>t[0]==="_"||t==="$stable",cu=t=>j(t)?t.map(qt):[qt(t)],GA=(t,e,n)=>{if(e._n)return e;const s=mA((...i)=>cu(e(...i)),n);return s._c=!1,s},ig=(t,e,n)=>{const s=t._ctx;for(const i in t){if(sg(i))continue;const r=t[i];if(W(r))e[i]=GA(i,r,s);else if(r!=null){const o=cu(r);e[i]=()=>o}}},rg=(t,e)=>{const n=cu(e);t.slots.default=()=>n},QA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Co(e,"_",n)):ig(e,t.slots={})}else t.slots={},e&&rg(t,e);Co(t.slots,_a,1)},YA=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ye;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ye(i,e),!n&&a===1&&delete i._):(r=!e.$stable,ig(e,i)),o=e}else e&&(rg(t,e),o={default:1});if(r)for(const a in i)!sg(a)&&!(a in o)&&delete i[a]};function Hl(t,e,n,s,i=!1){if(j(t)){t.forEach((d,g)=>Hl(d,e&&(j(e)?e[g]:e),n,s,i));return}if($i(s)&&!i)return;const r=s.shapeFlag&4?ya(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,te(h,c)&&(h[c]=null)):Ge(c)&&(c.value=null)),W(l))bn(l,a,12,[o,u]);else{const d=Re(l),g=Ge(l);if(d||g){const _=()=>{if(t.f){const T=d?te(h,l)?h[l]:u[l]:l.value;i?j(T)&&Wc(T,r):j(T)?T.includes(r)||T.push(r):d?(u[l]=[r],te(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,te(h,l)&&(h[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,He(_,n)):_()}}}const He=EA;function XA(t){return JA(t)}function JA(t,e){const n=Pl();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Ft,insertStaticContent:_}=t,T=(f,p,m,v=null,y=null,S=null,O=!1,C=null,N=!!p.dynamicChildren)=>{if(f===p)return;f&&!Cs(f,p)&&(v=Yr(f),Kt(f,y,S,!0),f=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:E,ref:F,shapeFlag:P}=p;switch(E){case ma:I(f,p,m,v);break;case as:K(f,p,m,v);break;case Ao:f==null&&b(p,m,v,O);break;case Be:Wr(f,p,m,v,y,S,O,C,N);break;default:P&1?X(f,p,m,v,y,S,O,C,N):P&6?Gr(f,p,m,v,y,S,O,C,N):(P&64||P&128)&&E.process(f,p,m,v,y,S,O,C,N,As)}F!=null&&y&&Hl(F,f&&f.ref,S,p||f,!p)},I=(f,p,m,v)=>{if(f==null)s(p.el=a(p.children),m,v);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},K=(f,p,m,v)=>{f==null?s(p.el=l(p.children||""),m,v):p.el=f.el},b=(f,p,m,v)=>{[f.el,f.anchor]=_(f.children,p,m,v,f.el,f.anchor)},R=({el:f,anchor:p},m,v)=>{let y;for(;f&&f!==p;)y=d(f),s(f,m,v),f=y;s(p,m,v)},A=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),i(f),f=m;i(p)},X=(f,p,m,v,y,S,O,C,N)=>{O=O||p.type==="svg",f==null?fe(p,m,v,y,S,O,C,N):yt(f,p,y,S,O,C,N)},fe=(f,p,m,v,y,S,O,C)=>{let N,E;const{type:F,props:P,shapeFlag:U,transition:z,dirs:Q}=f;if(N=f.el=o(f.type,S,P&&P.is,P),U&8?u(N,f.children):U&16&&Ne(f.children,N,null,v,y,S&&F!=="foreignObject",O,C),Q&&jn(f,null,v,"created"),Ie(N,f,f.scopeId,O,v),P){for(const he in P)he!=="value"&&!yo(he)&&r(N,he,null,P[he],S,f.children,v,y,an);"value"in P&&r(N,"value",null,P.value),(E=P.onVnodeBeforeMount)&&Ct(E,v,f)}Q&&jn(f,null,v,"beforeMount");const me=(!y||y&&!y.pendingBranch)&&z&&!z.persisted;me&&z.beforeEnter(N),s(N,p,m),((E=P&&P.onVnodeMounted)||me||Q)&&He(()=>{E&&Ct(E,v,f),me&&z.enter(N),Q&&jn(f,null,v,"mounted")},y)},Ie=(f,p,m,v,y)=>{if(m&&g(f,m),v)for(let S=0;S<v.length;S++)g(f,v[S]);if(y){let S=y.subTree;if(p===S){const O=y.vnode;Ie(f,O,O.scopeId,O.slotScopeIds,y.parent)}}},Ne=(f,p,m,v,y,S,O,C,N=0)=>{for(let E=N;E<f.length;E++){const F=f[E]=C?Tn(f[E]):qt(f[E]);T(null,F,p,m,v,y,S,O,C)}},yt=(f,p,m,v,y,S,O)=>{const C=p.el=f.el;let{patchFlag:N,dynamicChildren:E,dirs:F}=p;N|=f.patchFlag&16;const P=f.props||ye,U=p.props||ye;let z;m&&Hn(m,!1),(z=U.onVnodeBeforeUpdate)&&Ct(z,m,p,f),F&&jn(p,f,m,"beforeUpdate"),m&&Hn(m,!0);const Q=y&&p.type!=="foreignObject";if(E?ct(f.dynamicChildren,E,C,m,v,Q,S):O||ge(f,p,C,null,m,v,Q,S,!1),N>0){if(N&16)on(C,p,P,U,m,v,y);else if(N&2&&P.class!==U.class&&r(C,"class",null,U.class,y),N&4&&r(C,"style",P.style,U.style,y),N&8){const me=p.dynamicProps;for(let he=0;he<me.length;he++){const xe=me[he],kt=P[xe],Es=U[xe];(Es!==kt||xe==="value")&&r(C,xe,kt,Es,y,f.children,m,v,an)}}N&1&&f.children!==p.children&&u(C,p.children)}else!O&&E==null&&on(C,p,P,U,m,v,y);((z=U.onVnodeUpdated)||F)&&He(()=>{z&&Ct(z,m,p,f),F&&jn(p,f,m,"updated")},v)},ct=(f,p,m,v,y,S,O)=>{for(let C=0;C<p.length;C++){const N=f[C],E=p[C],F=N.el&&(N.type===Be||!Cs(N,E)||N.shapeFlag&70)?h(N.el):m;T(N,E,F,null,v,y,S,O,!0)}},on=(f,p,m,v,y,S,O)=>{if(m!==v){if(m!==ye)for(const C in m)!yo(C)&&!(C in v)&&r(f,C,m[C],null,O,p.children,y,S,an);for(const C in v){if(yo(C))continue;const N=v[C],E=m[C];N!==E&&C!=="value"&&r(f,C,E,N,O,p.children,y,S,an)}"value"in v&&r(f,"value",m.value,v.value)}},Wr=(f,p,m,v,y,S,O,C,N)=>{const E=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:U,slotScopeIds:z}=p;z&&(C=C?C.concat(z):z),f==null?(s(E,m,v),s(F,m,v),Ne(p.children,m,F,y,S,O,C,N)):P>0&&P&64&&U&&f.dynamicChildren?(ct(f.dynamicChildren,U,m,y,S,O,C),(p.key!=null||y&&p===y.subTree)&&og(f,p,!0)):ge(f,p,m,F,y,S,O,C,N)},Gr=(f,p,m,v,y,S,O,C,N)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?y.ctx.activate(p,m,v,O,N):Ya(p,m,v,y,S,O,N):Dh(f,p,N)},Ya=(f,p,m,v,y,S,O)=>{const C=f.component=oE(f,v,y);if(Qp(f)&&(C.ctx.renderer=As),aE(C),C.asyncDep){if(y&&y.registerDep(C,ut),!f.el){const N=C.subTree=Et(as);K(null,N,p,m)}return}ut(C,f,p,m,y,S,O)},Dh=(f,p,m)=>{const v=p.component=f.component;if(vA(f,p,m))if(v.asyncDep&&!v.asyncResolved){Ce(v,p,m);return}else v.next=p,uA(v.update),v.update();else p.el=f.el,v.vnode=p},ut=(f,p,m,v,y,S,O)=>{const C=()=>{if(f.isMounted){let{next:F,bu:P,u:U,parent:z,vnode:Q}=f,me=F,he;Hn(f,!1),F?(F.el=Q.el,Ce(f,F,O)):F=Q,P&&Vi(P),(he=F.props&&F.props.onVnodeBeforeUpdate)&&Ct(he,z,F,Q),Hn(f,!0);const xe=el(f),kt=f.subTree;f.subTree=xe,T(kt,xe,h(kt.el),Yr(kt),f,y,S),F.el=xe.el,me===null&&AA(f,xe.el),U&&He(U,y),(he=F.props&&F.props.onVnodeUpdated)&&He(()=>Ct(he,z,F,Q),y)}else{let F;const{el:P,props:U}=p,{bm:z,m:Q,parent:me}=f,he=$i(p);if(Hn(f,!1),z&&Vi(z),!he&&(F=U&&U.onVnodeBeforeMount)&&Ct(F,me,p),Hn(f,!0),P&&Ja){const xe=()=>{f.subTree=el(f),Ja(P,f.subTree,f,y,null)};he?p.type.__asyncLoader().then(()=>!f.isUnmounted&&xe()):xe()}else{const xe=f.subTree=el(f);T(null,xe,m,v,f,y,S),p.el=xe.el}if(Q&&He(Q,y),!he&&(F=U&&U.onVnodeMounted)){const xe=p;He(()=>Ct(F,me,xe),y)}(p.shapeFlag&256||me&&$i(me.vnode)&&me.vnode.shapeFlag&256)&&f.a&&He(f.a,y),f.isMounted=!0,p=m=v=null}},N=f.effect=new Xc(C,()=>ru(E),f.scope),E=f.update=()=>N.run();E.id=f.uid,Hn(f,!0),E()},Ce=(f,p,m)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,WA(f,p.props,v,m),YA(f,p.children,m),ai(),qh(),li()},ge=(f,p,m,v,y,S,O,C,N=!1)=>{const E=f&&f.children,F=f?f.shapeFlag:0,P=p.children,{patchFlag:U,shapeFlag:z}=p;if(U>0){if(U&128){Qr(E,P,m,v,y,S,O,C,N);return}else if(U&256){Vn(E,P,m,v,y,S,O,C,N);return}}z&8?(F&16&&an(E,y,S),P!==E&&u(m,P)):F&16?z&16?Qr(E,P,m,v,y,S,O,C,N):an(E,y,S,!0):(F&8&&u(m,""),z&16&&Ne(P,m,v,y,S,O,C,N))},Vn=(f,p,m,v,y,S,O,C,N)=>{f=f||Ds,p=p||Ds;const E=f.length,F=p.length,P=Math.min(E,F);let U;for(U=0;U<P;U++){const z=p[U]=N?Tn(p[U]):qt(p[U]);T(f[U],z,m,null,y,S,O,C,N)}E>F?an(f,y,S,!0,!1,P):Ne(p,m,v,y,S,O,C,N,P)},Qr=(f,p,m,v,y,S,O,C,N)=>{let E=0;const F=p.length;let P=f.length-1,U=F-1;for(;E<=P&&E<=U;){const z=f[E],Q=p[E]=N?Tn(p[E]):qt(p[E]);if(Cs(z,Q))T(z,Q,m,null,y,S,O,C,N);else break;E++}for(;E<=P&&E<=U;){const z=f[P],Q=p[U]=N?Tn(p[U]):qt(p[U]);if(Cs(z,Q))T(z,Q,m,null,y,S,O,C,N);else break;P--,U--}if(E>P){if(E<=U){const z=U+1,Q=z<F?p[z].el:v;for(;E<=U;)T(null,p[E]=N?Tn(p[E]):qt(p[E]),m,Q,y,S,O,C,N),E++}}else if(E>U)for(;E<=P;)Kt(f[E],y,S,!0),E++;else{const z=E,Q=E,me=new Map;for(E=Q;E<=U;E++){const vt=p[E]=N?Tn(p[E]):qt(p[E]);vt.key!=null&&me.set(vt.key,E)}let he,xe=0;const kt=U-Q+1;let Es=!1,Mh=0;const Ei=new Array(kt);for(E=0;E<kt;E++)Ei[E]=0;for(E=z;E<=P;E++){const vt=f[E];if(xe>=kt){Kt(vt,y,S,!0);continue}let zt;if(vt.key!=null)zt=me.get(vt.key);else for(he=Q;he<=U;he++)if(Ei[he-Q]===0&&Cs(vt,p[he])){zt=he;break}zt===void 0?Kt(vt,y,S,!0):(Ei[zt-Q]=E+1,zt>=Mh?Mh=zt:Es=!0,T(vt,p[zt],m,null,y,S,O,C,N),xe++)}const Lh=Es?ZA(Ei):Ds;for(he=Lh.length-1,E=kt-1;E>=0;E--){const vt=Q+E,zt=p[vt],Fh=vt+1<F?p[vt+1].el:v;Ei[E]===0?T(null,zt,m,Fh,y,S,O,C,N):Es&&(he<0||E!==Lh[he]?$n(zt,m,Fh,2):he--)}}},$n=(f,p,m,v,y=null)=>{const{el:S,type:O,transition:C,children:N,shapeFlag:E}=f;if(E&6){$n(f.component.subTree,p,m,v);return}if(E&128){f.suspense.move(p,m,v);return}if(E&64){O.move(f,p,m,As);return}if(O===Be){s(S,p,m);for(let P=0;P<N.length;P++)$n(N[P],p,m,v);s(f.anchor,p,m);return}if(O===Ao){R(f,p,m);return}if(v!==2&&E&1&&C)if(v===0)C.beforeEnter(S),s(S,p,m),He(()=>C.enter(S),y);else{const{leave:P,delayLeave:U,afterLeave:z}=C,Q=()=>s(S,p,m),me=()=>{P(S,()=>{Q(),z&&z()})};U?U(S,Q,me):me()}else s(S,p,m)},Kt=(f,p,m,v=!1,y=!1)=>{const{type:S,props:O,ref:C,children:N,dynamicChildren:E,shapeFlag:F,patchFlag:P,dirs:U}=f;if(C!=null&&Hl(C,null,m,f,!0),F&256){p.ctx.deactivate(f);return}const z=F&1&&U,Q=!$i(f);let me;if(Q&&(me=O&&O.onVnodeBeforeUnmount)&&Ct(me,p,f),F&6)lv(f.component,m,v);else{if(F&128){f.suspense.unmount(m,v);return}z&&jn(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,m,y,As,v):E&&(S!==Be||P>0&&P&64)?an(E,p,m,!1,!0):(S===Be&&P&384||!y&&F&16)&&an(N,p,m),v&&Oh(f)}(Q&&(me=O&&O.onVnodeUnmounted)||z)&&He(()=>{me&&Ct(me,p,f),z&&jn(f,null,p,"unmounted")},m)},Oh=f=>{const{type:p,el:m,anchor:v,transition:y}=f;if(p===Be){av(m,v);return}if(p===Ao){A(f);return}const S=()=>{i(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:O,delayLeave:C}=y,N=()=>O(m,S);C?C(f.el,S,N):N()}else S()},av=(f,p)=>{let m;for(;f!==p;)m=d(f),i(f),f=m;i(p)},lv=(f,p,m)=>{const{bum:v,scope:y,update:S,subTree:O,um:C}=f;v&&Vi(v),y.stop(),S&&(S.active=!1,Kt(O,f,p,m)),C&&He(C,p),He(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},an=(f,p,m,v=!1,y=!1,S=0)=>{for(let O=S;O<f.length;O++)Kt(f[O],p,m,v,y)},Yr=f=>f.shapeFlag&6?Yr(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),Ph=(f,p,m)=>{f==null?p._vnode&&Kt(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,m),qh(),Hp(),p._vnode=f},As={p:T,um:Kt,m:$n,r:Oh,mt:Ya,mc:Ne,pc:ge,pbc:ct,n:Yr,o:t};let Xa,Ja;return e&&([Xa,Ja]=e(As)),{render:Ph,hydrate:Xa,createApp:KA(Ph,Xa)}}function Hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function og(t,e,n=!1){const s=t.children,i=e.children;if(j(s)&&j(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Tn(i[r]),a.el=o.el),n||og(o,a)),a.type===ma&&(a.el=o.el)}}function ZA(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const eE=t=>t.__isTeleport,Be=Symbol.for("v-fgt"),ma=Symbol.for("v-txt"),as=Symbol.for("v-cmt"),Ao=Symbol.for("v-stc"),Hi=[];let Pt=null;function L(t=!1){Hi.push(Pt=t?null:[])}function tE(){Hi.pop(),Pt=Hi[Hi.length-1]||null}let ir=1;function nd(t){ir+=t}function ag(t){return t.dynamicChildren=ir>0?Pt||Ds:null,tE(),ir>0&&Pt&&Pt.push(t),t}function $(t,e,n,s,i,r){return ag(_t(t,e,n,s,i,r,!0))}function cn(t,e,n,s,i){return ag(Et(t,e,n,s,i,!0))}function lg(t){return t?t.__v_isVNode===!0:!1}function Cs(t,e){return t.type===e.type&&t.key===e.key}const _a="__vInternal",cg=({key:t})=>t??null,Eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||Ge(t)||W(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function _t(t,e=null,n=null,s=0,i=null,r=t===Be?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cg(e),ref:e&&Eo(e),scopeId:fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:bt};return a?(uu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Re(n)?8:16),ir>0&&!o&&Pt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Pt.push(l),l}const Et=nE;function nE(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===LA)&&(t=as),lg(t)){const a=ls(t,e,!0);return n&&uu(a,n),ir>0&&!r&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(hE(t)&&(t=t.__vccOpts),e){e=sE(e);let{class:a,style:l}=e;a&&!Re(a)&&(e.class=oi(a)),Te(l)&&(Lp(l)&&!j(l)&&(l=Ye({},l)),e.style=Sr(l))}const o=Re(t)?1:qp(t)?128:eE(t)?64:Te(t)?4:W(t)?2:0;return _t(t,e,n,s,i,o,r,!0)}function sE(t){return t?Lp(t)||_a in t?Ye({},t):t:null}function ls(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Ss(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&cg(a),ref:e&&e.ref?n&&i?j(i)?i.concat(Eo(e)):[i,Eo(e)]:Eo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ls(t.ssContent),ssFallback:t.ssFallback&&ls(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ug(t=" ",e=0){return Et(ma,null,t,e)}function we(t="",e=!1){return e?(L(),cn(as,null,t)):Et(as,null,t)}function qt(t){return t==null||typeof t=="boolean"?Et(as):j(t)?Et(Be,null,t.slice()):typeof t=="object"?Tn(t):Et(ma,null,String(t))}function Tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ls(t)}function uu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),uu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(_a in e)?e._ctx=bt:i===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),s&64?(n=16,e=[ug(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ss(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=oi([e.class,s.class]));else if(i==="style")e.style=Sr([e.style,s.style]);else if(aa(i)){const r=e[i],o=s[i];o&&r!==o&&!(j(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ct(t,e,n,s=null){Ut(t,e,7,[n,s])}const iE=eg();let rE=0;function oE(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||iE,r={uid:rE++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ng(s,i),emitsOptions:zp(s,i),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:s.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fA.bind(null,r),t.ce&&t.ce(r),r}let qe=null;const hg=()=>qe||bt;let hu,ws,sd="__VUE_INSTANCE_SETTERS__";(ws=Pl()[sd])||(ws=Pl()[sd]=[]),ws.push(t=>qe=t),hu=t=>{ws.length>1?ws.forEach(e=>e(t)):ws[0](t)};const Gs=t=>{hu(t),t.scope.on()},ts=()=>{qe&&qe.scope.off(),hu(null)};function dg(t){return t.vnode.shapeFlag&4}let rr=!1;function aE(t,e=!1){rr=e;const{props:n,children:s}=t.vnode,i=dg(t);qA(t,n,i,e),QA(t,s);const r=i?lE(t,e):void 0;return rr=!1,r}function lE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fp(new Proxy(t.ctx,FA));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?uE(t):null;Gs(t),ai();const r=bn(s,t,0,[t.props,i]);if(li(),ts(),Ap(r)){if(r.then(ts,ts),e)return r.then(o=>{id(t,o,e)}).catch(o=>{ha(o,t,0)});t.asyncDep=r}else id(t,r,e)}else fg(t,e)}function id(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=Vp(e)),fg(t,n)}let rd;function fg(t,e,n){const s=t.type;if(!t.render){if(!e&&rd&&!s.render){const i=s.template||lu(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ye(Ye({isCustomElement:r,delimiters:a},o),l);s.render=rd(i,c)}}t.render=s.render||Ft}Gs(t),ai(),UA(t),li(),ts()}function cE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function uE(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return cE(t)},slots:t.slots,emit:t.emit,expose:e}}function ya(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vp(Fp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ji)return ji[n](t)},has(e,n){return n in e||n in ji}}))}function od(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function hE(t){return W(t)&&"__vccOpts"in t}const Fn=(t,e)=>aA(t,e,rr),dE=Symbol.for("v-scx"),fE=()=>vo(dE),pE="3.3.4",gE="http://www.w3.org/2000/svg",Wn=typeof document<"u"?document:null,ad=Wn&&Wn.createElement("template"),mE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Wn.createElementNS(gE,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ad.innerHTML=s?`<svg>${t}</svg>`:t;const a=ad.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function _E(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function yE(t,e,n){const s=t.style,i=Re(n);if(n&&!i){if(e&&!Re(e))for(const r in e)n[r]==null&&Kl(s,r,"");for(const r in n)Kl(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const ld=/\s*!important$/;function Kl(t,e,n){if(j(n))n.forEach(s=>Kl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=vE(t,e);ld.test(n)?t.setProperty(ri(s),n.replace(ld,""),"important"):t[s]=n}}const cd=["Webkit","Moz","ms"],il={};function vE(t,e){const n=il[e];if(n)return n;let s=qs(e);if(s!=="filter"&&s in t)return il[e]=s;s=Tp(s);for(let i=0;i<cd.length;i++){const r=cd[i]+s;if(r in t)return il[e]=r}return e}const ud="http://www.w3.org/1999/xlink";function AE(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ud,e.slice(6,e.length)):t.setAttributeNS(ud,e,n);else{const r=wv(e);n==null||r&&!Ip(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function EE(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ip(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function wE(t,e,n,s){t.addEventListener(e,n,s)}function TE(t,e,n,s){t.removeEventListener(e,n,s)}function IE(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=CE(e);if(s){const c=r[e]=NE(s,i);wE(t,a,c,l)}else o&&(TE(t,a,o,l),r[e]=void 0)}}const hd=/(?:Once|Passive|Capture)$/;function CE(t){let e;if(hd.test(t)){e={};let s;for(;s=t.match(hd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ri(t.slice(2)),e]}let rl=0;const SE=Promise.resolve(),bE=()=>rl||(SE.then(()=>rl=0),rl=Date.now());function NE(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ut(RE(s,n.value),e,5,[s])};return n.value=t,n.attached=bE(),n}function RE(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const dd=/^on[a-z]/,kE=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?_E(t,s,i):e==="style"?yE(t,n,s):aa(e)?qc(e)||IE(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xE(t,e,s,i))?EE(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),AE(t,e,s,i))};function xE(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&dd.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dd.test(e)&&Re(n)?!1:e in t}function DE(t){const e=hg();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>ql(r,i))},s=()=>{const i=t(e.proxy);zl(e.subTree,i),n(i)};wA(s),ga(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),au(()=>i.disconnect())})}function zl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{zl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ql(t.el,e);else if(t.type===Be)t.children.forEach(n=>zl(n,e));else if(t.type===Ao){let{el:n,anchor:s}=t;for(;n&&(ql(n,e),n!==s);)n=n.nextSibling}}function ql(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const OE={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ii(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ii(t,!0),s.enter(t)):s.leave(t,()=>{Ii(t,!1)}):Ii(t,e))},beforeUnmount(t,{value:e}){Ii(t,e)}};function Ii(t,e){t.style.display=e?t._vod:"none"}const PE=Ye({patchProp:kE},mE);let fd;function ME(){return fd||(fd=XA(PE))}const LE=(...t)=>{const e=ME().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=FE(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function FE(t){return Re(t)?document.querySelector(t):t}/**
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
 */const pg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw ci(e)},ci=function(t){return new Error("Firebase Database ("+pg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const gg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},UE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},va={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new BE;const d=r<<2|a>>4;if(s.push(d),c!==64){const g=a<<4&240|c>>2;if(s.push(g),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mg=function(t){const e=gg(t);return va.encodeByteArray(e,!0)},Do=function(t){return mg(t).replace(/\./g,"")},Oo=function(t){try{return va.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function VE(t){return _g(void 0,t)}function _g(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$E(n)||(t[n]=_g(t[n],e[n]));return t}function $E(t){return t!=="__proto__"}/**
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
 */function jE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HE=()=>jE().__FIREBASE_DEFAULTS__,KE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oo(t[1]);return e&&JSON.parse(e)},du=()=>{try{return HE()||KE()||zE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qE=t=>{var e,n;return(n=(e=du())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},WE=t=>{const e=qE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},yg=()=>{var t;return(t=du())===null||t===void 0?void 0:t.config},GE=t=>{var e;return(e=du())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class or{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function QE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Do(JSON.stringify(n)),Do(JSON.stringify(o)),a].join(".")}/**
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
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function YE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ag(){return pg.NODE_ADMIN===!0}function Eg(){try{return typeof indexedDB=="object"}catch{return!1}}function XE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const JE="FirebaseError";class vn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=JE,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ZE(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vn(i,a,s)}}function ZE(t,e){return t.replace(ew,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ew=/\{\$([^}]+)}/g;/**
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
 */function ar(t){return JSON.parse(t)}function We(t){return JSON.stringify(t)}/**
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
 */const wg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ar(Oo(r[0])||""),n=ar(Oo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},tw=function(t){const e=wg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},nw=function(t){const e=wg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function An(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Qs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Po(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Wl(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(gd(r)&&gd(o)){if(!Wl(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function gd(t){return t!==null&&typeof t=="object"}/**
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
 */function pu(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class sw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function iw(t,e){const n=new rw(t,e);return n.subscribe.bind(n)}class rw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ow(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ol),i.error===void 0&&(i.error=ol),i.complete===void 0&&(i.complete=ol);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ow(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ol(){}function aw(t,e){return`${t} failed: ${e} argument `}/**
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
 */const lw=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Aa=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function hi(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kn="[DEFAULT]";/**
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
 */class cw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new or;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hw(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uw(t){return t===Kn?void 0:t}function hw(t){return t.instantiationMode==="EAGER"}/**
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
 */class dw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const fw={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},pw=ne.INFO,gw={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},mw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=gw[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class br{constructor(e){this.name=e,this._logLevel=pw,this._logHandler=mw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const _w=(t,e)=>e.some(n=>t instanceof n);let md,_d;function yw(){return md||(md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vw(){return _d||(_d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tg=new WeakMap,Gl=new WeakMap,Ig=new WeakMap,al=new WeakMap,gu=new WeakMap;function Aw(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tg.set(n,t)}).catch(()=>{}),gu.set(e,t),e}function Ew(t){if(Gl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Gl.set(t,e)}let Ql={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ig.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ww(t){Ql=t(Ql)}function Tw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ll(this),e,...n);return Ig.set(s,e.sort?e.sort():[e]),Nn(s)}:vw().includes(t)?function(...e){return t.apply(ll(this),e),Nn(Tg.get(this))}:function(...e){return Nn(t.apply(ll(this),e))}}function Iw(t){return typeof t=="function"?Tw(t):(t instanceof IDBTransaction&&Ew(t),_w(t,yw())?new Proxy(t,Ql):t)}function Nn(t){if(t instanceof IDBRequest)return Aw(t);if(al.has(t))return al.get(t);const e=Iw(t);return e!==t&&(al.set(t,e),gu.set(e,t)),e}const ll=t=>gu.get(t);function Cw(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Nn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Nn(o.result),l.oldVersion,l.newVersion,Nn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Sw=["get","getKey","getAll","getAllKeys","count"],bw=["put","add","delete","clear"],cl=new Map;function yd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cl.get(e))return cl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=bw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Sw.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return cl.set(e,r),r}ww(t=>({...t,get:(e,n,s)=>yd(e,n)||t.get(e,n,s),has:(e,n)=>!!yd(e,n)||t.has(e,n)}));/**
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
 */class Nw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yl="@firebase/app",vd="0.9.13";/**
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
 */const cs=new br("@firebase/app"),kw="@firebase/app-compat",xw="@firebase/analytics-compat",Dw="@firebase/analytics",Ow="@firebase/app-check-compat",Pw="@firebase/app-check",Mw="@firebase/auth",Lw="@firebase/auth-compat",Fw="@firebase/database",Uw="@firebase/database-compat",Bw="@firebase/functions",Vw="@firebase/functions-compat",$w="@firebase/installations",jw="@firebase/installations-compat",Hw="@firebase/messaging",Kw="@firebase/messaging-compat",zw="@firebase/performance",qw="@firebase/performance-compat",Ww="@firebase/remote-config",Gw="@firebase/remote-config-compat",Qw="@firebase/storage",Yw="@firebase/storage-compat",Xw="@firebase/firestore",Jw="@firebase/firestore-compat",Zw="firebase",e0="9.23.0";/**
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
 */const Xl="[DEFAULT]",t0={[Yl]:"fire-core",[kw]:"fire-core-compat",[Dw]:"fire-analytics",[xw]:"fire-analytics-compat",[Pw]:"fire-app-check",[Ow]:"fire-app-check-compat",[Mw]:"fire-auth",[Lw]:"fire-auth-compat",[Fw]:"fire-rtdb",[Uw]:"fire-rtdb-compat",[Bw]:"fire-fn",[Vw]:"fire-fn-compat",[$w]:"fire-iid",[jw]:"fire-iid-compat",[Hw]:"fire-fcm",[Kw]:"fire-fcm-compat",[zw]:"fire-perf",[qw]:"fire-perf-compat",[Ww]:"fire-rc",[Gw]:"fire-rc-compat",[Qw]:"fire-gcs",[Yw]:"fire-gcs-compat",[Xw]:"fire-fst",[Jw]:"fire-fst-compat","fire-js":"fire-js",[Zw]:"fire-js-all"};/**
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
 */const Mo=new Map,Jl=new Map;function n0(t,e){try{t.container.addComponent(e)}catch(n){cs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function en(t){const e=t.name;if(Jl.has(e))return cs.debug(`There were multiple attempts to register component ${e}.`),!1;Jl.set(e,t);for(const n of Mo.values())n0(n,t);return!0}function s0(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const i0={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rn=new ui("app","Firebase",i0);/**
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
 */class r0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}/**
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
 */const di=e0;function Cg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Rn.create("bad-app-name",{appName:String(i)});if(n||(n=yg()),!n)throw Rn.create("no-options");const r=Mo.get(i);if(r){if(Wl(n,r.options)&&Wl(s,r.config))return r;throw Rn.create("duplicate-app",{appName:i})}const o=new dw(i);for(const l of Jl.values())o.addComponent(l);const a=new r0(n,s,o);return Mo.set(i,a),a}function o0(t=Xl){const e=Mo.get(t);if(!e&&t===Xl&&yg())return Cg();if(!e)throw Rn.create("no-app",{appName:t});return e}function wt(t,e,n){var s;let i=(s=t0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cs.warn(a.join(" "));return}en(new Vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const a0="firebase-heartbeat-database",l0=1,lr="firebase-heartbeat-store";let ul=null;function Sg(){return ul||(ul=Cw(a0,l0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lr)}}}).catch(t=>{throw Rn.create("idb-open",{originalErrorMessage:t.message})})),ul}async function c0(t){try{return await(await Sg()).transaction(lr).objectStore(lr).get(bg(t))}catch(e){if(e instanceof vn)cs.warn(e.message);else{const n=Rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cs.warn(n.message)}}}async function Ad(t,e){try{const s=(await Sg()).transaction(lr,"readwrite");await s.objectStore(lr).put(e,bg(t)),await s.done}catch(n){if(n instanceof vn)cs.warn(n.message);else{const s=Rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cs.warn(s.message)}}}function bg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const u0=1024,h0=30*24*60*60*1e3;class d0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new p0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ed();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=h0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ed(),{heartbeatsToSend:n,unsentEntries:s}=f0(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ed(){return new Date().toISOString().substring(0,10)}function f0(t,e=u0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),wd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class p0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eg()?XE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await c0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ad(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ad(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wd(t){return Do(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function g0(t){en(new Vt("platform-logger",e=>new Nw(e),"PRIVATE")),en(new Vt("heartbeat",e=>new d0(e),"PRIVATE")),wt(Yl,vd,t),wt(Yl,vd,"esm2017"),wt("fire-js","")}g0("");function Ng(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Rg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m0=Rg,kg=new ui("auth","Firebase",Rg());/**
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
 */const Lo=new br("@firebase/auth");function _0(t,...e){Lo.logLevel<=ne.WARN&&Lo.warn(`Auth (${di}): ${t}`,...e)}function wo(t,...e){Lo.logLevel<=ne.ERROR&&Lo.error(`Auth (${di}): ${t}`,...e)}/**
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
 */function Td(t,...e){throw _u(t,...e)}function mu(t,...e){return _u(t,...e)}function y0(t,e,n){const s=Object.assign(Object.assign({},m0()),{[e]:n});return new ui("auth","Firebase",s).create(e,{appName:t.name})}function _u(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return kg.create(t,...e)}function le(t,e,...n){if(!t)throw _u(e,...n)}function Ki(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wo(e),new Error(e)}function Fo(t,e){t||Ki(e)}function v0(){return Id()==="http:"||Id()==="https:"}function Id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function A0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(v0()||YE()||"connection"in navigator)?navigator.onLine:!0}function E0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fo(n>e,"Short delay should be less than long delay!"),this.isMobile=fu()||vg()}get(){return A0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function w0(t,e){Fo(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ki("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ki("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ki("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const T0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const I0=new Nr(3e4,6e4);function C0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yu(t,e,n,s,i={}){return Dg(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=pu(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),xg.fetch()(Og(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Dg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},T0),e);try{const i=new S0(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw so(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw so(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw so(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw y0(t,u,c);Td(t,u)}}catch(i){if(i instanceof vn)throw i;Td(t,"network-request-failed",{message:String(i)})}}function Og(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?w0(t.config,i):`${t.config.apiScheme}://${i}`}class S0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(mu(this.auth,"network-request-failed")),I0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function so(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=mu(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function b0(t,e){return yu(t,"POST","/v1/accounts:delete",e)}async function N0(t,e){return yu(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R0(t,e=!1){const n=hi(t),s=await n.getIdToken(e),i=Pg(s);le(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:zi(hl(i.auth_time)),issuedAtTime:zi(hl(i.iat)),expirationTime:zi(hl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function hl(t){return Number(t)*1e3}function Pg(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return wo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Oo(n);return i?JSON.parse(i):(wo("Failed to decode base64 JWT payload"),null)}catch(i){return wo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function k0(t){const e=Pg(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zl(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof vn&&x0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function x0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class D0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Uo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Zl(t,N0(n,{idToken:s}));le(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?M0(r.providerUserInfo):[],a=P0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Mg(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function O0(t){const e=hi(t);await Uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function P0(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function M0(t){return t.map(e=>{var{providerId:n}=e,s=Ng(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function L0(t,e){const n=await Dg(t,{},async()=>{const s=pu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Og(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):k0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return le(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await L0(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new cr;return s&&(le(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(le(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(le(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return Ki("not implemented")}}/**
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
 */function wn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ng(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new D0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Mg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Zl(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return R0(this,e)}reload(){return O0(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Uo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zl(this,b0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,K=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:A,isAnonymous:X,providerData:fe,stsTokenManager:Ie}=n;le(R&&Ie,e,"internal-error");const Ne=cr.fromJSON(this.name,Ie);le(typeof R=="string",e,"internal-error"),wn(h,e.name),wn(d,e.name),le(typeof A=="boolean",e,"internal-error"),le(typeof X=="boolean",e,"internal-error"),wn(g,e.name),wn(_,e.name),wn(T,e.name),wn(I,e.name),wn(K,e.name),wn(b,e.name);const yt=new Fs({uid:R,auth:e,email:d,emailVerified:A,displayName:h,isAnonymous:X,photoURL:_,phoneNumber:g,tenantId:T,stsTokenManager:Ne,createdAt:K,lastLoginAt:b});return fe&&Array.isArray(fe)&&(yt.providerData=fe.map(ct=>Object.assign({},ct))),I&&(yt._redirectEventId=I),yt}static async _fromIdTokenResponse(e,n,s=!1){const i=new cr;i.updateFromServerResponse(n);const r=new Fs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Uo(r),r}}/**
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
 */const Cd=new Map;function Qn(t){Fo(t instanceof Function,"Expected a class definition");let e=Cd.get(t);return e?(Fo(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cd.set(t,e),e)}/**
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
 */class Lg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lg.type="NONE";const Sd=Lg;/**
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
 */function dl(t,e,n){return`firebase:${t}:${e}:${n}`}class Us{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=dl(this.userKey,i.apiKey,r),this.fullPersistenceKey=dl("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Us(Qn(Sd),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Qn(Sd);const o=dl(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Fs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Us(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Us(r,e,s))}}/**
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
 */function bd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(V0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(F0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(j0(e))return"Blackberry";if(H0(e))return"Webos";if(U0(e))return"Safari";if((e.includes("chrome/")||B0(e))&&!e.includes("edge/"))return"Chrome";if($0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function F0(t=Zt()){return/firefox\//i.test(t)}function U0(t=Zt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function B0(t=Zt()){return/crios\//i.test(t)}function V0(t=Zt()){return/iemobile/i.test(t)}function $0(t=Zt()){return/android/i.test(t)}function j0(t=Zt()){return/blackberry/i.test(t)}function H0(t=Zt()){return/webos/i.test(t)}/**
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
 */function Fg(t,e=[]){let n;switch(t){case"Browser":n=bd(Zt());break;case"Worker":n=`${bd(Zt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${di}/${s}`}async function Ug(t,e){return yu(t,"GET","/v2/recaptchaConfig",C0(t,e))}function Nd(t){return t!==void 0&&t.enterprise!==void 0}class Bg{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function K0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function z0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=mu("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",K0().appendChild(s)})}const q0="https://www.google.com/recaptcha/enterprise.js?render=",W0="recaptcha-enterprise",G0="NO_RECAPTCHA";class Q0{constructor(e){this.type=W0,this.auth=Vg(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ug(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Bg(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Nd(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(G0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Nd(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}z0(q0+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Y0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class X0{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rd(this),this.idTokenSubscription=new Rd(this),this.beforeStateQueue=new Y0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Us.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?hi(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}async initializeRecaptchaConfig(){const e=await Ug(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Bg(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Q0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return le(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vg(t){return hi(t)}class Rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=iw(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function J0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Nr(3e4,6e4);/**
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
 */new Nr(2e3,1e4);/**
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
 */new Nr(3e4,6e4);/**
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
 */new Nr(5e3,15e3);var kd="@firebase/auth",xd="0.23.2";/**
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
 */class Z0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tT(t){en(new Vt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fg(t)},c=new X0(s,i,r,l);return J0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),en(new Vt("auth-internal",e=>{const n=Vg(e.getProvider("auth").getImmediate());return(s=>new Z0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(kd,xd,eT(t)),wt(kd,xd,"esm2017")}/**
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
 */const nT=5*60;GE("authIdTokenMaxAge");tT("Browser");/**
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
 */const sT=new Map,iT={activated:!1,tokenObservers:[]};function $t(t){return sT.get(t)||Object.assign({},iT)}const Dd={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class rT{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new or,await oT(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new or,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function oT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const aT={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Bo=new ui("appCheck","AppCheck",aT);function $g(t){if(!$t(t).activated)throw Bo.create("use-before-activation",{appName:t.name})}/**
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
 */const lT="firebase-app-check-database",cT=1,ec="firebase-app-check-store";let io=null;function uT(){return io||(io=new Promise((t,e)=>{try{const n=indexedDB.open(lT,cT);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Bo.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(ec,{keyPath:"compositeKey"})}}}catch(n){e(Bo.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),io)}function hT(t,e){return dT(fT(t),e)}async function dT(t,e){const s=(await uT()).transaction(ec,"readwrite"),r=s.objectStore(ec).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Bo.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function fT(t){return`${t.options.appId}-${t.name}`}/**
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
 */const tc=new br("@firebase/app-check");function Od(t,e){return Eg()?hT(t,e).catch(n=>{tc.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const pT={error:"UNKNOWN_ERROR"};function gT(t){return va.encodeString(JSON.stringify(t),!1)}async function nc(t,e=!1){const n=t.app;$g(n);const s=$t(n);let i=s.token,r;if(i&&!Pi(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Pi(l)?i=l:await Od(n,void 0))}if(!e&&i&&Pi(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await $t(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?tc.warn(l.message):tc.error(l),r=l}let a;return i?r?Pi(i)?a={token:i.token,internalError:r}:a=Md(r):(a={token:i.token},s.token=i,await Od(n,i)):a=Md(r),o&&vT(n,a),a}async function mT(t){const e=t.app;$g(e);const{provider:n}=$t(e);{const{token:s}=await n.getToken();return{token:s}}}function _T(t,e,n,s){const{app:i}=t,r=$t(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Pi(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Pd(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Pd(t))}function jg(t,e){const n=$t(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Pd(t){const{app:e}=t,n=$t(e);let s=n.tokenRefresher;s||(s=yT(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function yT(t){const{app:e}=t;return new rT(async()=>{const n=$t(e);let s;if(n.token?s=await nc(t,!0):s=await nc(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=$t(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Dd.RETRIAL_MIN_WAIT,Dd.RETRIAL_MAX_WAIT)}function vT(t,e){const n=$t(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Pi(t){return t.expireTimeMillis-Date.now()>0}function Md(t){return{token:gT(pT),error:t}}/**
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
 */class AT{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=$t(this.app);for(const n of e)jg(this.app,n.next);return Promise.resolve()}}function ET(t,e){return new AT(t,e)}function wT(t){return{getToken:e=>nc(t,e),getLimitedUseToken:()=>mT(t),addTokenListener:e=>_T(t,"INTERNAL",e),removeTokenListener:e=>jg(t.app,e)}}const TT="@firebase/app-check",IT="0.8.0",CT="app-check",Ld="app-check-internal";function ST(){en(new Vt(CT,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return ET(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Ld).initialize()})),en(new Vt(Ld,t=>{const e=t.getProvider("app-check").getImmediate();return wT(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),wt(TT,IT)}ST();var bT="firebase",NT="9.23.0";/**
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
 */wt(bT,NT,"app");const RT=Symbol("firebaseApp"),Fd="@firebase/database",Ud="0.14.4";/**
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
 */let Hg="";function kT(t){Hg=t}/**
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
 */class xT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ar(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class DT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return An(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Kg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xT(e)}}catch{}return new DT},Yn=Kg("localStorage"),sc=Kg("sessionStorage");/**
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
 */const Bs=new br("@firebase/database"),OT=function(){let t=1;return function(){return t++}}(),zg=function(t){const e=lw(t),n=new sw;n.update(e);const s=n.digest();return va.encodeByteArray(s)},Rr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Rr.apply(null,s):typeof s=="object"?e+=We(s):e+=s,e+=" "}return e};let ns=null,Bd=!0;const PT=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Bs.logLevel=ne.VERBOSE,ns=Bs.log.bind(Bs),e&&sc.set("logging_enabled",!0)):typeof t=="function"?ns=t:(ns=null,sc.remove("logging_enabled"))},Ze=function(...t){if(Bd===!0&&(Bd=!1,ns===null&&sc.get("logging_enabled")===!0&&PT(!0)),ns){const e=Rr.apply(null,t);ns(e)}},kr=function(t){return function(...e){Ze(t,...e)}},ic=function(...t){const e="FIREBASE INTERNAL ERROR: "+Rr(...t);Bs.error(e)},us=function(...t){const e=`FIREBASE FATAL ERROR: ${Rr(...t)}`;throw Bs.error(e),new Error(e)},Tt=function(...t){const e="FIREBASE WARNING: "+Rr(...t);Bs.warn(e)},MT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},LT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ys="[MIN_NAME]",hs="[MAX_NAME]",fi=function(t,e){if(t===e)return 0;if(t===Ys||e===hs)return-1;if(e===Ys||t===hs)return 1;{const n=Vd(t),s=Vd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},FT=function(t,e){return t===e?0:t<e?-1:1},Ci=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+We(e))},vu=function(t){if(typeof t!="object"||t===null)return We(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=We(e[s]),n+=":",n+=vu(t[e[s]]);return n+="}",n},Wg=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gg=function(t){x(!qg(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},UT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},BT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},VT=new RegExp("^-?(0*)\\d{1,10}$"),$T=-2147483648,jT=2147483647,Vd=function(t){if(VT.test(t)){const e=Number(t);if(e>=$T&&e<=jT)return e}return null},xr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},HT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class KT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Tt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class zT{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tt(e)}}class rc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rc.OWNER="owner";/**
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
 */const Au="5",Qg="v",Yg="s",Xg="r",Jg="f",Zg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,em="ls",tm="p",oc="ac",nm="websocket",sm="long_polling";/**
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
 */class qT{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function WT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function im(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===nm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sm)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);WT(t)&&(n.ns=t.namespace);const i=[];return Rt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class GT{constructor(){this.counters_={}}incrementCounter(e,n=1){An(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return VE(this.counters_)}}/**
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
 */const fl={},pl={};function Eu(t){const e=t.toString();return fl[e]||(fl[e]=new GT),fl[e]}function QT(t,e){const n=t.toString();return pl[n]||(pl[n]=e()),pl[n]}/**
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
 */class YT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&xr(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const $d="start",XT="close",JT="pLPCommand",ZT="pRTLPCB",rm="id",om="pw",am="ser",eI="cb",tI="seg",nI="ts",sI="d",iI="dframe",lm=1870,cm=30,rI=lm-cm,oI=25e3,aI=3e4;class Rs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=kr(e),this.stats_=Eu(n),this.urlFn=l=>(this.appCheckToken&&(l[oc]=this.appCheckToken),im(n,sm,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new YT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(aI)),LT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wu((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$d)this.id=a,this.password=l;else if(o===XT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[$d]="t",s[am]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[eI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Qg]=Au,this.transportSessionId&&(s[Yg]=this.transportSessionId),this.lastSessionId&&(s[em]=this.lastSessionId),this.applicationId&&(s[tm]=this.applicationId),this.appCheckToken&&(s[oc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zg.test(location.hostname)&&(s[Xg]=Jg);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rs.forceAllow_=!0}static forceDisallow(){Rs.forceDisallow_=!0}static isAvailable(){return Rs.forceAllow_?!0:!Rs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!UT()&&!BT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=mg(n),i=Wg(s,rI);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[iI]="t",s[rm]=e,s[om]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=We(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wu{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=OT(),window[JT+this.uniqueCallbackIdentifier]=e,window[ZT+this.uniqueCallbackIdentifier]=n,this.myIFrame=wu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ze("frame writing exception"),a.stack&&Ze(a.stack),Ze(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[rm]=this.myID,e[om]=this.myPW,e[am]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cm+s.length<=lm;){const o=this.pendingSegs.shift();s=s+"&"+tI+i+"="+o.seg+"&"+nI+i+"="+o.ts+"&"+sI+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(oI)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const lI=16384,cI=45e3;let Vo=null;typeof MozWebSocket<"u"?Vo=MozWebSocket:typeof WebSocket<"u"&&(Vo=WebSocket);class Ot{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=kr(this.connId),this.stats_=Eu(n),this.connURL=Ot.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Qg]=Au,typeof location<"u"&&location.hostname&&Zg.test(location.hostname)&&(o[Xg]=Jg),n&&(o[Yg]=n),s&&(o[em]=s),i&&(o[oc]=i),r&&(o[tm]=r),im(e,nm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yn.set("previous_websocket_failure",!0);try{let s;Ag(),this.mySock=new Vo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Vo!==null&&!Ot.forceDisallow_}static previouslyFailed(){return Yn.isInMemoryStorage||Yn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ar(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wg(n,lI);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ot.responsesRequiredToBeHealthy=2;Ot.healthyTimeout=3e4;/**
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
 */class ur{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rs,Ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ot&&Ot.isAvailable();let s=n&&!Ot.previouslyFailed();if(e.webSocketOnly&&(n||Tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ot];else{const i=this.transports_=[];for(const r of ur.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ur.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ur.globalTransportInitialized_=!1;/**
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
 */const uI=6e4,hI=5e3,dI=10*1024,fI=100*1024,gl="t",jd="d",pI="s",Hd="r",gI="e",Kd="o",zd="a",qd="n",Wd="p",mI="h";class _I{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=kr("c:"+this.id+":"),this.transportManager_=new ur(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=qi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gl in e){const n=e[gl];n===zd?this.upgradeIfSecondaryHealthy_():n===Hd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ci("t",e),s=Ci("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ci("t",e),s=Ci("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ci(gl,e);if(jd in e){const s=e[jd];if(n===mI){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===qd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===pI?this.onConnectionShutdown_(s):n===Hd?this.onReset_(s):n===gI?ic("Server Error: "+s):n===Kd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ic("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Au!==s&&Tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),qi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class um{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class hm{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class $o extends hm{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $o}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Gd=32,Qd=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new Ee("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function On(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function dm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function yI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function pm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function Ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ee(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function Nt(t,e){const n=Z(t),s=Z(e);if(n===null)return e;if(n===s)return Nt(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gm(t,e){if(On(t)!==On(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Mt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(On(t)>On(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class vI{constructor(e,n){this.errorPrefix_=n,this.parts_=fm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Aa(this.parts_[s]);mm(this)}}function AI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Aa(e),mm(t)}function EI(t){const e=t.parts_.pop();t.byteLength_-=Aa(e),t.parts_.length>0&&(t.byteLength_-=1)}function mm(t){if(t.byteLength_>Qd)throw new Error(t.errorPrefix_+"has a key path longer than "+Qd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Gd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gd+") or object contains a cycle "+zn(t))}function zn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Tu extends hm{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Tu}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Si=1e3,wI=60*5*1e3,Yd=30*1e3,TI=1.3,II=3e4,CI="server_kill",Xd=3;class dn extends um{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dn.nextPersistentConnectionId_++,this.log_=kr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Si,this.maxReconnectDelay_=wI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ag())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Tu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$o.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(We(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new or,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;dn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&An(e,"w")){const s=Qs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=tw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ic("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>II&&(this.reconnectDelay_=Si),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*TI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new _I(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Tt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(CI)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Tt(h),l())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pd(this.interruptReasons_)&&(this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>vu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xd&&(this.reconnectDelay_=Yd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Hg.replace(/\./g,"-")]=1,fu()?e["framework.cordova"]=1:vg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$o.getInstance().currentlyOnline();return pd(this.interruptReasons_)&&e}}dn.nextPersistentConnectionId_=0;dn.nextConnectionId_=0;/**
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
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
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
 */class Ea{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(Ys,e),i=new ee(Ys,n);return this.compare(s,i)!==0}minPost(){return ee.MIN}}/**
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
 */let ro;class _m extends Ea{static get __EMPTY_NODE(){return ro}static set __EMPTY_NODE(e){ro=e}compare(e,n){return fi(e.name,n.name)}isDefinedOn(e){throw ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(hs,ro)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,ro)}toString(){return".key"}}const Vs=new _m;/**
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
 */class oo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ue.RED,this.left=i??pt.EMPTY_NODE,this.right=r??pt.EMPTY_NODE}copy(e,n,s,i,r){return new Ue(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class SI{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pt{constructor(e,n=pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new oo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new oo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new oo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new oo(this.root_,null,this.comparator_,!0,e)}}pt.EMPTY_NODE=new SI;/**
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
 */function bI(t,e){return fi(t.name,e.name)}function Iu(t,e){return fi(t,e)}/**
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
 */let ac;function NI(t){ac=t}const ym=function(t){return typeof t=="number"?"number:"+Gg(t):"string:"+t},vm=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&An(e,".sv"),"Priority must be a string or number.")}else x(t===ac||t.isEmpty(),"priority of unexpected type.");x(t===ac||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Jd;class Le{constructor(e,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vm(this.priorityNode_)}static set __childrenNodeConstructor(e){Jd=e}static get __childrenNodeConstructor(){return Jd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:Z(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||On(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ym(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gg(this.value_):e+=this.value_,this.lazyHash_=zg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),r=Le.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Am,Em;function RI(t){Am=t}function kI(t){Em=t}class xI extends Ea{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?fi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(hs,new Le("[PRIORITY-POST]",Em))}makePost(e,n){const s=Am(e);return new ee(n,new Le("[PRIORITY-POST]",s))}toString(){return".priority"}}const it=new xI;/**
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
 */const DI=Math.log(2);class OI{constructor(e){const n=r=>parseInt(Math.log(r)/DI,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jo=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ue(d,h.node,Ue.BLACK,null,null);{const g=parseInt(u/2,10)+l,_=i(l,g),T=i(g+1,c);return h=t[g],d=n?n(h):h,new Ue(d,h.node,Ue.BLACK,_,T)}},r=function(l){let c=null,u=null,h=t.length;const d=function(_,T){const I=h-_,K=h;h-=_;const b=i(I+1,K),R=t[I],A=n?n(R):R;g(new Ue(A,R.node,T,null,b))},g=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const T=l.nextBitIsOne(),I=Math.pow(2,l.count-(_+1));T?d(I,Ue.BLACK):(d(I,Ue.BLACK),d(I,Ue.RED))}return u},o=new OI(t.length),a=r(o);return new pt(s||e,a)};/**
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
 */let ml;const Ts={};class un{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Ts&&it,"ChildrenNode.ts has not been loaded"),ml=ml||new un({".priority":Ts},{".priority":it}),ml}get(e){const n=Qs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pt?n:null}hasIndex(e){return An(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Vs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=jo(s,e.getCompare()):a=Ts;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new un(u,c)}addToIndexes(e,n){const s=Po(this.indexes_,(i,r)=>{const o=Qs(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===Ts)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),jo(a,o.getCompare())}else return Ts;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new un(s,this.indexSet_)}removeFromIndexes(e,n){const s=Po(this.indexes_,i=>{if(i===Ts)return i;{const r=n.get(e.name);return r?i.remove(new ee(e.name,r)):i}});return new un(s,this.indexSet_)}}/**
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
 */let bi;class ae{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&vm(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return bi||(bi=new ae(new pt(Iu),null,un.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bi}updatePriority(e){return this.children_.isEmpty()?this:new ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?bi:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?bi:this.priorityNode_;return new ae(i,o,r)}}updateChild(e,n){const s=Z(e);if(s===null)return n;{x(Z(e)!==".priority"||On(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(it,(o,a)=>{n[o]=a.val(e),s++,r&&ae.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ym(this.getPriority().val())+":"),this.forEachChild(it,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":zg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dr?-1:0}withIndex(e){if(e===Vs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(it),i=n.getIterator(it);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vs?null:this.indexMap_.get(e.toString())}}ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PI extends ae{constructor(){super(new pt(Iu),ae.EMPTY_NODE,un.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ae.EMPTY_NODE}isEmpty(){return!1}}const Dr=new PI;Object.defineProperties(ee,{MIN:{value:new ee(Ys,ae.EMPTY_NODE)},MAX:{value:new ee(hs,Dr)}});_m.__EMPTY_NODE=ae.EMPTY_NODE;Le.__childrenNodeConstructor=ae;NI(Dr);kI(Dr);/**
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
 */const MI=!0;function et(t,e=null){if(t===null)return ae.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Le(n,et(e))}if(!(t instanceof Array)&&MI){const n=[];let s=!1;if(Rt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=et(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return ae.EMPTY_NODE;const r=jo(n,bI,o=>o.name,Iu);if(s){const o=jo(n,it.getCompare());return new ae(r,et(e),new un({".priority":o},{".priority":it}))}else return new ae(r,et(e),un.Default)}else{let n=ae.EMPTY_NODE;return Rt(t,(s,i)=>{if(An(t,s)&&s.substring(0,1)!=="."){const r=et(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(et(e))}}RI(et);/**
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
 */class LI extends Ea{constructor(e){super(),this.indexPath_=e,x(!Y(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?fi(e.name,n.name):r}makePost(e,n){const s=et(e),i=ae.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,i)}maxPost(){const e=ae.EMPTY_NODE.updateChild(this.indexPath_,Dr);return new ee(hs,e)}toString(){return fm(this.indexPath_,0).join("/")}}/**
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
 */class FI extends Ea{compare(e,n){const s=e.node.compareTo(n.node);return s===0?fi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=et(e);return new ee(n,s)}toString(){return".value"}}const UI=new FI;/**
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
 */function BI(t){return{type:"value",snapshotNode:t}}function VI(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $I(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zd(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Cu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=it}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ys}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===it}copy(){const e=new Cu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ef(t){const e={};if(t.isDefault())return e;let n;if(t.index_===it?n="$priority":t.index_===UI?n="$value":t.index_===Vs?n="$key":(x(t.index_ instanceof LI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=We(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=We(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+We(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=We(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+We(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function tf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==it&&(e.i=t.index_.toString()),e}/**
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
 */class Ho extends um{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=kr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ho.getListenId_(e,s),a={};this.listens_[o]=a;const l=ef(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Qs(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ho.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ef(e._queryParams),s=e._path.toString(),i=new or;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pu(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ar(a.responseText)}catch{Tt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Tt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class HI{constructor(){this.rootNode_=ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ko(){return{value:null,children:new Map}}function wm(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Z(e);t.children.has(s)||t.children.set(s,Ko());const i=t.children.get(s);e=ve(e),wm(i,e,n)}}function lc(t,e,n){t.value!==null?n(e,t.value):KI(t,(s,i)=>{const r=new Ee(e.toString()+"/"+s);lc(i,r,n)})}function KI(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class zI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Rt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const nf=10*1e3,qI=30*1e3,WI=5*60*1e3;class GI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zI(e);const s=nf+(qI-nf)*Math.random();qi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Rt(e,(i,r)=>{r>0&&An(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),qi(this.reportStats_.bind(this),Math.floor(Math.random()*2*WI))}}/**
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
 */var Yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yt||(Yt={}));function Tm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Im(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Cm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class zo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Yt.ACK_USER_WRITE,this.source=Tm()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new zo(de(),n,this.revert)}}else return x(Z(this.path)===e,"operationForChild called for unrelated child."),new zo(ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class ds{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Yt.OVERWRITE}operationForChild(e){return Y(this.path)?new ds(this.source,de(),this.snap.getImmediateChild(e)):new ds(this.source,ve(this.path),this.snap)}}/**
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
 */class hr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Yt.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new ds(this.source,de(),n.value):new hr(this.source,de(),n)}else return x(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hr(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Su{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function QI(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(jI(o.childName,o.snapshotNode))}),Ni(t,i,"child_removed",e,s,n),Ni(t,i,"child_added",e,s,n),Ni(t,i,"child_moved",r,s,n),Ni(t,i,"child_changed",e,s,n),Ni(t,i,"value",e,s,n),i}function Ni(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>XI(t,a,l)),o.forEach(a=>{const l=YI(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function YI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function XI(t,e,n){if(e.childName==null||n.childName==null)throw ci("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Sm(t,e){return{eventCache:t,serverCache:e}}function Wi(t,e,n,s){return Sm(new Su(e,n,s),t.serverCache)}function bm(t,e,n,s){return Sm(t.eventCache,new Su(e,n,s))}function cc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function fs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let _l;const JI=()=>(_l||(_l=new pt(FT)),_l);class _e{constructor(e,n=JI()){this.value=e,this.children=n}static fromObject(e){let n=new _e(null);return Rt(e,(s,i)=>{n=n.set(new Ee(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(Y(e))return null;{const s=Z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ve(e),n);return r!=null?{path:Ve(new Ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=Z(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new _e(null)}}set(e,n){if(Y(e))return new _e(n,this.children);{const s=Z(e),r=(this.children.get(s)||new _e(null)).set(ve(e),n),o=this.children.insert(s,r);return new _e(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=Z(e),s=this.children.get(n);if(s){const i=s.remove(ve(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new _e(null):new _e(this.value,r)}else return this}}get(e){if(Y(e))return this.value;{const n=Z(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(Y(e))return n;{const s=Z(e),r=(this.children.get(s)||new _e(null)).setTree(ve(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new _e(this.value,o)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Y(e))return null;{const r=Z(e),o=this.children.get(r);return o?o.findOnPath_(ve(e),Ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,s){if(Y(e))return this;{this.value&&s(n,this.value);const i=Z(e),r=this.children.get(i);return r?r.foreachOnPath_(ve(e),Ve(n,i),s):new _e(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new _e(null))}}function Gi(t,e,n){if(Y(e))return new Bt(new _e(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Nt(i,e);return r=r.updateChild(o,n),new Bt(t.writeTree_.set(i,r))}else{const i=new _e(n),r=t.writeTree_.setTree(e,i);return new Bt(r)}}}function sf(t,e,n){let s=t;return Rt(n,(i,r)=>{s=Gi(s,Ve(e,i),r)}),s}function rf(t,e){if(Y(e))return Bt.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new Bt(n)}}function uc(t,e){return _s(t,e)!=null}function _s(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Nt(n.path,e)):null}function of(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(it,(s,i)=>{e.push(new ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ee(s,i.value))}),e}function kn(t,e){if(Y(e))return t;{const n=_s(t,e);return n!=null?new Bt(new _e(n)):new Bt(t.writeTree_.subtree(e))}}function hc(t){return t.writeTree_.isEmpty()}function Xs(t,e){return Nm(de(),t.writeTree_,e)}function Nm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Nm(Ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ve(t,".priority"),s)),n}}/**
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
 */function Rm(t,e){return Pm(e,t)}function ZI(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Gi(t.visibleWrites,e,n)),t.lastWriteId=s}function eC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function tC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&nC(a,s.path)?i=!1:Mt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return sC(t),!0;if(s.snap)t.visibleWrites=rf(t.visibleWrites,s.path);else{const a=s.children;Rt(a,l=>{t.visibleWrites=rf(t.visibleWrites,Ve(s.path,l))})}return!0}else return!1}function nC(t,e){if(t.snap)return Mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Mt(Ve(t.path,n),e))return!0;return!1}function sC(t){t.visibleWrites=km(t.allWrites,iC,de()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function iC(t){return t.visible}function km(t,e,n){let s=Bt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Mt(n,o)?(a=Nt(n,o),s=Gi(s,a,r.snap)):Mt(o,n)&&(a=Nt(o,n),s=Gi(s,de(),r.snap.getChild(a)));else if(r.children){if(Mt(n,o))a=Nt(n,o),s=sf(s,a,r.children);else if(Mt(o,n))if(a=Nt(o,n),Y(a))s=sf(s,de(),r.children);else{const l=Qs(r.children,Z(a));if(l){const c=l.getChild(ve(a));s=Gi(s,de(),c)}}}else throw ci("WriteRecord should have .snap or .children")}}return s}function xm(t,e,n,s,i){if(!s&&!i){const r=_s(t.visibleWrites,e);if(r!=null)return r;{const o=kn(t.visibleWrites,e);if(hc(o))return n;if(n==null&&!uc(o,de()))return null;{const a=n||ae.EMPTY_NODE;return Xs(o,a)}}}else{const r=kn(t.visibleWrites,e);if(!i&&hc(r))return n;if(!i&&n==null&&!uc(r,de()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Mt(c.path,e)||Mt(e,c.path))},a=km(t.allWrites,o,e),l=n||ae.EMPTY_NODE;return Xs(a,l)}}}function rC(t,e,n){let s=ae.EMPTY_NODE;const i=_s(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(it,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=kn(t.visibleWrites,e);return n.forEachChild(it,(o,a)=>{const l=Xs(kn(r,new Ee(o)),a);s=s.updateImmediateChild(o,l)}),of(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=kn(t.visibleWrites,e);return of(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function oC(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ve(e,n);if(uc(t.visibleWrites,r))return null;{const o=kn(t.visibleWrites,r);return hc(o)?i.getChild(n):Xs(o,i.getChild(n))}}function aC(t,e,n,s){const i=Ve(e,n),r=_s(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=kn(t.visibleWrites,i);return Xs(o,s.getNode().getImmediateChild(n))}else return null}function lC(t,e){return _s(t.visibleWrites,e)}function cC(t,e,n,s,i,r,o){let a;const l=kn(t.visibleWrites,e),c=_s(l,de());if(c!=null)a=c;else if(n!=null)a=Xs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function uC(){return{visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1}}function dc(t,e,n,s){return xm(t.writeTree,t.treePath,e,n,s)}function Dm(t,e){return rC(t.writeTree,t.treePath,e)}function af(t,e,n,s){return oC(t.writeTree,t.treePath,e,n,s)}function qo(t,e){return lC(t.writeTree,Ve(t.treePath,e))}function hC(t,e,n,s,i,r){return cC(t.writeTree,t.treePath,e,n,s,i,r)}function bu(t,e,n){return aC(t.writeTree,t.treePath,e,n)}function Om(t,e){return Pm(Ve(t.treePath,e),t.writeTree)}function Pm(t,e){return{treePath:t,writeTree:e}}/**
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
 */class dC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Zd(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,$I(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,VI(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Zd(s,e.snapshotNode,i.oldSnap));else throw ci("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class fC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Mm=new fC;class Nu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Su(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fs(this.viewCache_),r=hC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function pC(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gC(t,e,n,s,i){const r=new dC;let o,a;if(n.type===Yt.OVERWRITE){const c=n;c.source.fromUser?o=fc(t,e,c.path,c.snap,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Y(c.path),o=Wo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Yt.MERGE){const c=n;c.source.fromUser?o=_C(t,e,c.path,c.children,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=pc(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Yt.ACK_USER_WRITE){const c=n;c.revert?o=AC(t,e,c.path,s,i,r):o=yC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Yt.LISTEN_COMPLETE)o=vC(t,e,n.path,s,r);else throw ci("Unknown operation type: "+n.type);const l=r.getChanges();return mC(e,o,l),{viewCache:o,changes:l}}function mC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=cc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(BI(cc(e)))}}function Lm(t,e,n,s,i,r){const o=e.eventCache;if(qo(s,n)!=null)return e;{let a,l;if(Y(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=fs(e),u=c instanceof ae?c:ae.EMPTY_NODE,h=Dm(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=dc(s,fs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Z(n);if(c===".priority"){x(On(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=af(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ve(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=af(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=bu(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Wi(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function Wo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Y(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=Z(n);if(!l.isCompleteForPath(n)&&On(n)>1)return e;const _=ve(n),I=l.getNode().getImmediateChild(g).updateChild(_,s);g===".priority"?c=u.updatePriority(l.getNode(),I):c=u.updateChild(l.getNode(),g,I,_,Mm,null)}const h=bm(e,c,l.isFullyInitialized()||Y(n),u.filtersNodes()),d=new Nu(i,h,r);return Lm(t,h,n,i,d,a)}function fc(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Nu(i,e,r);if(Y(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Wi(e,c,!0,t.filter.filtersNodes());else{const h=Z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Wi(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ve(n),g=a.getNode().getImmediateChild(h);let _;if(Y(d))_=s;else{const T=u.getCompleteChild(h);T!=null?dm(d)===".priority"&&T.getChild(pm(d)).isEmpty()?_=T:_=T.updateChild(d,s):_=ae.EMPTY_NODE}if(g.equals(_))l=e;else{const T=t.filter.updateChild(a.getNode(),h,_,d,u,o);l=Wi(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function lf(t,e){return t.eventCache.isCompleteForChild(e)}function _C(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ve(n,l);lf(e,Z(u))&&(a=fc(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ve(n,l);lf(e,Z(u))||(a=fc(t,a,u,c,i,r,o))}),a}function cf(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function pc(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Y(n)?c=s:c=new _e(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),_=cf(t,g,d);l=Wo(t,l,new Ee(h),_,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const _=e.serverCache.getNode().getImmediateChild(h),T=cf(t,_,d);l=Wo(t,l,new Ee(h),T,i,r,o,a)}}),l}function yC(t,e,n,s,i,r,o){if(qo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Wo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Y(n)){let c=new _e(null);return l.getNode().forEachChild(Vs,(u,h)=>{c=c.set(new Ee(u),h)}),pc(t,e,n,c,i,r,a,o)}else return e}else{let c=new _e(null);return s.foreach((u,h)=>{const d=Ve(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),pc(t,e,n,c,i,r,a,o)}}function vC(t,e,n,s,i){const r=e.serverCache,o=bm(e,r.getNode(),r.isFullyInitialized()||Y(n),r.isFiltered());return Lm(t,o,n,s,Mm,i)}function AC(t,e,n,s,i,r){let o;if(qo(s,n)!=null)return e;{const a=new Nu(s,e,i),l=e.eventCache.getNode();let c;if(Y(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=dc(s,fs(e));else{const h=e.serverCache.getNode();x(h instanceof ae,"serverChildren would be complete if leaf node"),u=Dm(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Z(n);let h=bu(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ve(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ae.EMPTY_NODE,ve(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=dc(s,fs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||qo(s,de())!=null,Wi(e,c,o,t.filter.filtersNodes())}}function EC(t,e){const n=fs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function uf(t,e,n,s){e.type===Yt.MERGE&&e.source.queryId!==null&&(x(fs(t.viewCache_),"We should always have a full cache before handling merges"),x(cc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=gC(t.processor_,i,e,n,s);return pC(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,wC(t,r.changes,r.viewCache.eventCache.getNode(),null)}function wC(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return QI(t.eventGenerator_,e,n,i)}/**
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
 */let hf;function TC(t){x(!hf,"__referenceConstructor has already been defined"),hf=t}function Ru(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),uf(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(uf(o,e,n,s));return r}}function ku(t,e){let n=null;for(const s of t.views.values())n=n||EC(s,e);return n}/**
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
 */let df;function IC(t){x(!df,"__referenceConstructor has already been defined"),df=t}class ff{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=uC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function CC(t,e,n,s,i){return ZI(t.pendingWriteTree_,e,n,s,i),i?Ta(t,new ds(Tm(),e,n)):[]}function ks(t,e,n=!1){const s=eC(t.pendingWriteTree_,e);if(tC(t.pendingWriteTree_,e)){let r=new _e(null);return s.snap!=null?r=r.set(de(),!0):Rt(s.children,o=>{r=r.set(new Ee(o),!0)}),Ta(t,new zo(s.path,r,n))}else return[]}function wa(t,e,n){return Ta(t,new ds(Im(),e,n))}function SC(t,e,n){const s=_e.fromObject(n);return Ta(t,new hr(Im(),e,s))}function bC(t,e,n,s){const i=Vm(t,s);if(i!=null){const r=$m(i),o=r.path,a=r.queryId,l=Nt(o,e),c=new ds(Cm(a),l,n);return jm(t,o,c)}else return[]}function NC(t,e,n,s){const i=Vm(t,s);if(i){const r=$m(i),o=r.path,a=r.queryId,l=Nt(o,e),c=_e.fromObject(n),u=new hr(Cm(a),l,c);return jm(t,o,u)}else return[]}function Fm(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Nt(o,e),c=ku(a,l);if(c)return c});return xm(i,e,r,n,!0)}function Ta(t,e){return Um(e,t.syncPointTree_,null,Rm(t.pendingWriteTree_,de()))}function Um(t,e,n,s){if(Y(t.path))return Bm(t,e,n,s);{const i=e.get(de());n==null&&i!=null&&(n=ku(i,de()));let r=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Om(s,o);r=r.concat(Um(a,l,c,u))}return i&&(r=r.concat(Ru(i,t,s,n))),r}}function Bm(t,e,n,s){const i=e.get(de());n==null&&i!=null&&(n=ku(i,de()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Om(s,o),u=t.operationForChild(o);u&&(r=r.concat(Bm(u,a,l,c)))}),i&&(r=r.concat(Ru(i,t,s,n))),r}function Vm(t,e){return t.tagToQueryMap.get(e)}function $m(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function jm(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=Rm(t.pendingWriteTree_,e);return Ru(s,n,i,null)}/**
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
 */class xu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xu(n)}node(){return this.node_}}class Du{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new Du(this.syncTree_,n)}node(){return Fm(this.syncTree_,this.path_)}}const RC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},pf=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return kC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xC(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},kC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},xC=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},DC=function(t,e,n,s){return Ou(e,new Du(n,t),s)},OC=function(t,e,n){return Ou(t,new xu(e),n)};function Ou(t,e,n){const s=t.getPriority().val(),i=pf(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=pf(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Le(a,et(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Le(i))),o.forEachChild(it,(a,l)=>{const c=Ou(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Pu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Mu(t,e){let n=e instanceof Ee?e:new Ee(e),s=t,i=Z(n);for(;i!==null;){const r=Qs(s.node.children,i)||{children:{},childCount:0};s=new Pu(i,s,r),n=ve(n),i=Z(n)}return s}function pi(t){return t.node.value}function Hm(t,e){t.node.value=e,gc(t)}function Km(t){return t.node.childCount>0}function PC(t){return pi(t)===void 0&&!Km(t)}function Ia(t,e){Rt(t.node.children,(n,s)=>{e(new Pu(n,t,s))})}function zm(t,e,n,s){n&&!s&&e(t),Ia(t,i=>{zm(i,e,!0,s)}),n&&s&&e(t)}function MC(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Or(t){return new Ee(t.parent===null?t.name:Or(t.parent)+"/"+t.name)}function gc(t){t.parent!==null&&LC(t.parent,t.name,t)}function LC(t,e,n){const s=PC(n),i=An(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,gc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gc(t))}/**
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
 */const FC=/[\[\].#$\/\u0000-\u001F\u007F]/,UC=/[\[\].#$\u0000-\u001F\u007F]/,yl=10*1024*1024,qm=function(t){return typeof t=="string"&&t.length!==0&&!FC.test(t)},BC=function(t){return typeof t=="string"&&t.length!==0&&!UC.test(t)},VC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),BC(t)},Wm=function(t,e,n){const s=n instanceof Ee?new vI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zn(s));if(typeof e=="function")throw new Error(t+"contains a function "+zn(s)+" with contents = "+e.toString());if(qg(e))throw new Error(t+"contains "+e.toString()+" "+zn(s));if(typeof e=="string"&&e.length>yl/3&&Aa(e)>yl)throw new Error(t+"contains a string greater than "+yl+" utf8 bytes "+zn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Rt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!qm(o)))throw new Error(t+" contains an invalid key ("+o+") "+zn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);AI(s,o),Wm(t,a,s),EI(s)}),i&&r)throw new Error(t+' contains ".value" child '+zn(s)+" in addition to actual children.")}},$C=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VC(n))throw new Error(aw(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class jC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function HC(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!gm(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ys(t,e,n){HC(t,n),KC(t,s=>Mt(s,e)||Mt(e,s))}function KC(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(zC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ns&&Ze("event: "+n.toString()),xr(s)}}}/**
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
 */const qC="repo_interrupt",WC=25;class GC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ko(),this.transactionQueueTree_=new Pu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QC(t,e,n){if(t.stats_=Eu(t.repoInfo_),t.forceRestClient_||HT())t.server_=new Ho(t.repoInfo_,(s,i,r,o)=>{gf(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>mf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new dn(t.repoInfo_,e,(s,i,r,o)=>{gf(t,s,i,r,o)},s=>{mf(t,s)},s=>{XC(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=QT(t.repoInfo_,()=>new GI(t.stats_,t.server_)),t.infoData_=new HI,t.infoSyncTree_=new ff({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=wa(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Lu(t,"connected",!1),t.serverSyncTree_=new ff({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ys(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function YC(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gm(t){return RC({timestamp:YC(t)})}function gf(t,e,n,s,i){t.dataUpdateCount++;const r=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Po(n,c=>et(c));o=NC(t.serverSyncTree_,r,l,i)}else{const l=et(n);o=bC(t.serverSyncTree_,r,l,i)}else if(s){const l=Po(n,c=>et(c));o=SC(t.serverSyncTree_,r,l)}else{const l=et(n);o=wa(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Uu(t,r)),ys(t.eventQueue_,a,o)}function mf(t,e){Lu(t,"connected",e),e===!1&&ZC(t)}function XC(t,e){Rt(e,(n,s)=>{Lu(t,n,s)})}function Lu(t,e,n){const s=new Ee("/.info/"+e),i=et(n);t.infoData_.updateSnapshot(s,i);const r=wa(t.infoSyncTree_,s,i);ys(t.eventQueue_,s,r)}function JC(t){return t.nextWriteId_++}function ZC(t){Qm(t,"onDisconnectEvents");const e=Gm(t),n=Ko();lc(t.onDisconnect_,de(),(i,r)=>{const o=DC(i,r,t.serverSyncTree_,e);wm(n,i,o)});let s=[];lc(n,de(),(i,r)=>{s=s.concat(wa(t.serverSyncTree_,i,r));const o=sS(t,i);Uu(t,o)}),t.onDisconnect_=Ko(),ys(t.eventQueue_,de(),s)}function eS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qC)}function Qm(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ze(n,...e)}function Ym(t,e,n){return Fm(t.serverSyncTree_,e,n)||ae.EMPTY_NODE}function Fu(t,e=t.transactionQueueTree_){if(e||Ca(t,e),pi(e)){const n=Jm(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&tS(t,Or(e),n)}else Km(e)&&Ia(e,n=>{Fu(t,n)})}function tS(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ym(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Nt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Qm(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ks(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ca(t,Mu(t.transactionQueueTree_,e)),Fu(t,t.transactionQueueTree_),ys(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)xr(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Tt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Uu(t,e)}},o)}function Uu(t,e){const n=Xm(t,e),s=Or(n),i=Jm(t,n);return nS(t,i,s),s}function nS(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Nt(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(ks(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=WC)u=!0,h="maxretry",i=i.concat(ks(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Ym(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){Wm("transaction failed: Data returned ",g,l.path);let _=et(g);typeof g=="object"&&g!=null&&An(g,".priority")||(_=_.updatePriority(d.getPriority()));const I=l.currentWriteId,K=Gm(t),b=OC(_,d,K);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=b,l.currentWriteId=JC(t),o.splice(o.indexOf(I),1),i=i.concat(CC(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(ks(t.serverSyncTree_,I,!0))}else u=!0,h="nodata",i=i.concat(ks(t.serverSyncTree_,l.currentWriteId,!0))}ys(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ca(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)xr(s[a]);Fu(t,t.transactionQueueTree_)}function Xm(t,e){let n,s=t.transactionQueueTree_;for(n=Z(e);n!==null&&pi(s)===void 0;)s=Mu(s,n),e=ve(e),n=Z(e);return s}function Jm(t,e){const n=[];return Zm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Zm(t,e,n){const s=pi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ia(e,i=>{Zm(t,i,n)})}function Ca(t,e){const n=pi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Hm(e,n.length>0?n:void 0)}Ia(e,s=>{Ca(t,s)})}function sS(t,e){const n=Or(Xm(t,e)),s=Mu(t.transactionQueueTree_,e);return MC(s,i=>{vl(t,i)}),vl(t,s),zm(s,i=>{vl(t,i)}),n}function vl(t,e){const n=pi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ks(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Hm(e,void 0):n.length=r+1,ys(t.eventQueue_,Or(e),i);for(let o=0;o<s.length;o++)xr(s[o])}}/**
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
 */function iS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function rS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const _f=function(t,e){const n=oS(t),s=n.namespace;n.domain==="firebase.com"&&us(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&us("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||MT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qT(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ee(n.pathString)}},oS=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=iS(t.substring(u,h)));const d=rS(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Bu{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Y(this._path)?null:dm(this._path)}get ref(){return new gi(this._repo,this._path)}get _queryIdentifier(){const e=tf(this._queryParams),n=vu(e);return n==="{}"?"default":n}get _queryObject(){return tf(this._queryParams)}isEqual(e){if(e=hi(e),!(e instanceof Bu))return!1;const n=this._repo===e._repo,s=gm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+yI(this._path)}}class gi extends Bu{constructor(e,n){super(e,n,new Cu,!1)}get parent(){const e=pm(this._path);return e===null?null:new gi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}TC(gi);IC(gi);/**
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
 */const aS="FIREBASE_DATABASE_EMULATOR_HOST",mc={};let lS=!1;function cS(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||us("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=_f(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[aS]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=_f(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new rc(rc.OWNER):new zT(t.name,t.options,e);$C("Invalid Firebase Database URL",o),Y(o.path)||us("Database URL must point to the root of a Firebase Database (not including a child path).");const h=hS(a,t,u,new KT(t.name,n));return new dS(h,t)}function uS(t,e){const n=mc[e];(!n||n[t.key]!==t)&&us(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eS(t),delete n[t.key]}function hS(t,e,n,s){let i=mc[e.name];i||(i={},mc[e.name]=i);let r=i[t.toURLString()];return r&&us("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new GC(t,lS,n,s),i[t.toURLString()]=r,r}class dS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gi(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&us("Cannot call "+e+" on a deleted database.")}}/**
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
 */function fS(t){kT(di),en(new Vt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return cS(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),wt(Fd,Ud,t),wt(Fd,Ud,"esm2017")}dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fS();var pS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Vu=Vu||{},H=pS||self;function Sa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Pr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gS(t){return Object.prototype.hasOwnProperty.call(t,Al)&&t[Al]||(t[Al]=++mS)}var Al="closure_uid_"+(1e9*Math.random()>>>0),mS=0;function _S(t,e,n){return t.call.apply(t.bind,arguments)}function yS(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=_S:rt=yS,rt.apply(null,arguments)}function ao(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Un(){this.s=this.s,this.o=this.o}var vS=0;Un.prototype.s=!1;Un.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vS!=0)&&gS(this)};Un.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const e_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $u(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function yf(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Sa(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var AS=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",()=>{},e),H.removeEventListener("test",()=>{},e)}catch{}return t}();function dr(t){return/^[\s\xa0]*$/.test(t)}function ba(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function Gt(t){return ba().indexOf(t)!=-1}function ju(t){return ju[" "](t),t}ju[" "]=function(){};function ES(t,e){var n=fb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var wS=Gt("Opera"),Js=Gt("Trident")||Gt("MSIE"),t_=Gt("Edge"),_c=t_||Js,n_=Gt("Gecko")&&!(ba().toLowerCase().indexOf("webkit")!=-1&&!Gt("Edge"))&&!(Gt("Trident")||Gt("MSIE"))&&!Gt("Edge"),TS=ba().toLowerCase().indexOf("webkit")!=-1&&!Gt("Edge");function s_(){var t=H.document;return t?t.documentMode:void 0}var yc;e:{var El="",wl=function(){var t=ba();if(n_)return/rv:([^\);]+)(\)|;)/.exec(t);if(t_)return/Edge\/([\d\.]+)/.exec(t);if(Js)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(TS)return/WebKit\/(\S+)/.exec(t);if(wS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(wl&&(El=wl?wl[1]:""),Js){var Tl=s_();if(Tl!=null&&Tl>parseFloat(El)){yc=String(Tl);break e}}yc=El}var vc;if(H.document&&Js){var vf=s_();vc=vf||parseInt(yc,10)||void 0}else vc=void 0;var IS=vc;function fr(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(n_){e:{try{ju(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fr.$.h.call(this)}}je(fr,ot);var CS={2:"touch",3:"pen",4:"mouse"};fr.prototype.h=function(){fr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Mr="closure_listenable_"+(1e6*Math.random()|0),SS=0;function bS(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++SS,this.fa=this.ia=!1}function Na(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Hu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function NS(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function i_(t){const e={};for(const n in t)e[n]=t[n];return e}const Af="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function r_(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Af.length;r++)n=Af[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ra(t){this.src=t,this.g={},this.h=0}Ra.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ec(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new bS(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Ac(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=e_(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Na(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ec(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Ku="closure_lm_"+(1e6*Math.random()|0),Il={};function o_(t,e,n,s,i){if(s&&s.once)return l_(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)o_(t,e[r],n,s,i);return null}return n=Wu(n),t&&t[Mr]?t.O(e,n,Pr(s)?!!s.capture:!!s,i):a_(t,e,n,!1,s,i)}function a_(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Pr(i)?!!i.capture:!!i,a=qu(t);if(a||(t[Ku]=a=new Ra(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=RS(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)AS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(u_(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function RS(){function t(n){return e.call(t.src,t.listener,n)}const e=kS;return t}function l_(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)l_(t,e[r],n,s,i);return null}return n=Wu(n),t&&t[Mr]?t.P(e,n,Pr(s)?!!s.capture:!!s,i):a_(t,e,n,!0,s,i)}function c_(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)c_(t,e[r],n,s,i);else s=Pr(s)?!!s.capture:!!s,n=Wu(n),t&&t[Mr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ec(r,n,s,i),-1<n&&(Na(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=qu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ec(e,n,s,i)),(n=-1<t?e[t]:null)&&zu(n))}function zu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Mr])Ac(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(u_(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=qu(e))?(Ac(n,t),n.h==0&&(n.src=null,e[Ku]=null)):Na(t)}}}function u_(t){return t in Il?Il[t]:Il[t]="on"+t}function kS(t,e){if(t.fa)t=!0;else{e=new fr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&zu(t),t=n.call(s,e)}return t}function qu(t){return t=t[Ku],t instanceof Ra?t:null}var Cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wu(t){return typeof t=="function"?t:(t[Cl]||(t[Cl]=function(e){return t.handleEvent(e)}),t[Cl])}function $e(){Un.call(this),this.i=new Ra(this),this.S=this,this.J=null}je($e,Un);$e.prototype[Mr]=!0;$e.prototype.removeEventListener=function(t,e,n,s){c_(this,t,e,n,s)};function Qe(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(s,t),r_(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=lo(o,s,!0,e)&&i}if(o=e.g=t,i=lo(o,s,!0,e)&&i,i=lo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=lo(o,s,!1,e)&&i}$e.prototype.N=function(){if($e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Na(n[s]);delete t.g[e],t.h--}}this.J=null};$e.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};$e.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function lo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ac(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Gu=H.JSON.stringify;class xS{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function DS(){var t=Qu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class OS{constructor(){this.h=this.g=null}add(e,n){const s=h_.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var h_=new xS(()=>new PS,t=>t.reset());class PS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MS(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function LS(t){H.setTimeout(()=>{throw t},0)}let pr,gr=!1,Qu=new OS,d_=()=>{const t=H.Promise.resolve(void 0);pr=()=>{t.then(FS)}};var FS=()=>{for(var t;t=DS();){try{t.h.call(t.g)}catch(n){LS(n)}var e=h_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gr=!1};function ka(t,e){$e.call(this),this.h=t||1,this.g=e||H,this.j=rt(this.qb,this),this.l=Date.now()}je(ka,$e);D=ka.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&(Yu(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){ka.$.N.call(this),Yu(this),delete this.g};function Xu(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function f_(t){t.g=Xu(()=>{t.g=null,t.i&&(t.i=!1,f_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class US extends Un{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:f_(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(t){Un.call(this),this.h=t,this.g={}}je(mr,Un);var Ef=[];function p_(t,e,n,s){Array.isArray(n)||(n&&(Ef[0]=n.toString()),n=Ef);for(var i=0;i<n.length;i++){var r=o_(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function g_(t){Hu(t.g,function(e,n){this.g.hasOwnProperty(n)&&zu(e)},t),t.g={}}mr.prototype.N=function(){mr.$.N.call(this),g_(this)};mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xa(){this.g=!0}xa.prototype.Ea=function(){this.g=!1};function BS(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function VS(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function xs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+jS(t,n)+(s?" "+s:"")})}function $S(t,e){t.info(function(){return"TIMEOUT: "+e})}xa.prototype.info=function(){};function jS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Gu(n)}catch{return e}}var vs={},wf=null;function Da(){return wf=wf||new $e}vs.Ta="serverreachability";function m_(t){ot.call(this,vs.Ta,t)}je(m_,ot);function _r(t){const e=Da();Qe(e,new m_(e))}vs.STAT_EVENT="statevent";function __(t,e){ot.call(this,vs.STAT_EVENT,t),this.stat=e}je(__,ot);function dt(t){const e=Da();Qe(e,new __(e,t))}vs.Ua="timingevent";function y_(t,e){ot.call(this,vs.Ua,t),this.size=e}je(y_,ot);function Lr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var Oa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},v_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ju(){}Ju.prototype.h=null;function Tf(t){return t.h||(t.h=t.i())}function A_(){}var Fr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Zu(){ot.call(this,"d")}je(Zu,ot);function eh(){ot.call(this,"c")}je(eh,ot);var wc;function Pa(){}je(Pa,Ju);Pa.prototype.g=function(){return new XMLHttpRequest};Pa.prototype.i=function(){return{}};wc=new Pa;function Ur(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new mr(this),this.P=HS,t=_c?125:void 0,this.V=new ka(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new E_}function E_(){this.i=null,this.g="",this.h=!1}var HS=45e3,Tc={},Go={};D=Ur.prototype;D.setTimeout=function(t){this.P=t};function Ic(t,e,n){t.L=1,t.v=La(gn(e)),t.s=n,t.S=!0,w_(t,null)}function w_(t,e){t.G=Date.now(),Br(t),t.A=gn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),k_(n.i,"t",s),t.C=0,n=t.l.J,t.h=new E_,t.g=X_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new US(rt(t.Pa,t,t.g),t.O)),p_(t.U,t.g,"readystatechange",t.nb),e=t.I?i_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),_r(),BS(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&Xt(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=Xt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||_c||this.g&&(this.h.h||this.g.ja()||bf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?_r(3):_r(2)),Ma(this);var n=this.g.da();this.ca=n;t:if(T_(this)){var s=bf(this.g);t="";var i=s.length,r=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),Qi(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,VS(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dr(a)){var c=a;break t}}c=null}if(n=c)xs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cc(this,n);else{this.i=!1,this.o=3,dt(12),Xn(this),Qi(this);break e}}this.S?(I_(this,u,o),_c&&this.i&&u==3&&(p_(this.U,this.V,"tick",this.mb),this.V.start())):(xs(this.j,this.m,o,null),Cc(this,o)),u==4&&Xn(this),this.i&&!this.J&&(u==4?W_(this.l,this):(this.i=!1,Br(this)))}else ub(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),Xn(this),Qi(this)}}}catch{}finally{}};function T_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function I_(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=KS(t,n),i==Go){e==4&&(t.o=4,dt(14),s=!1),xs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Tc){t.o=4,dt(15),xs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else xs(t.j,t.m,i,null),Cc(t,i);T_(t)&&i!=Go&&i!=Tc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),oh(e),e.M=!0,dt(11))):(xs(t.j,t.m,n,"[Invalid Chunked Response]"),Xn(t),Qi(t))}D.mb=function(){if(this.g){var t=Xt(this.g),e=this.g.ja();this.C<e.length&&(Ma(this),I_(this,t,e),this.i&&t!=4&&Br(this))}};function KS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Go:(n=Number(e.substring(n,s)),isNaN(n)?Tc:(s+=1,s+n>e.length?Go:(e=e.slice(s,s+n),t.C=s+n,e)))}D.cancel=function(){this.J=!0,Xn(this)};function Br(t){t.Y=Date.now()+t.P,C_(t,t.P)}function C_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Lr(rt(t.lb,t),e)}function Ma(t){t.B&&(H.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?($S(this.j,this.A),this.L!=2&&(_r(),dt(17)),Xn(this),this.o=2,Qi(this)):C_(this,this.Y-t)};function Qi(t){t.l.H==0||t.J||W_(t.l,t)}function Xn(t){Ma(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Yu(t.V),g_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Cc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Sc(n.i,t))){if(!t.K&&Sc(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Xo(n),Ba(n);else break e;rh(n),dt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Lr(rt(n.ib,n),6e3));if(1>=O_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Jn(n,11)}else if((t.K||n.g==t)&&Xo(n),!dr(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.i;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(th(r,r.h),r.h=null))}if(s.F){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.Da=T,Ae(s.I,s.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Y_(s,s.J?s.pa:null,s.Y),o.K){P_(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Ma(a),Br(a)),s.g=o}else z_(s);0<n.j.length&&Va(n)}else c[0]!="stop"&&c[0]!="close"||Jn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Jn(n,7):ih(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}_r(4)}catch{}}function zS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Sa(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function qS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Sa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function S_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Sa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=qS(t),s=zS(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var b_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ss(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ss){this.h=t.h,Qo(this,t.j),this.s=t.s,this.g=t.g,Yo(this,t.m),this.l=t.l;var e=t.i,n=new yr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),If(this,n),this.o=t.o}else t&&(e=String(t).match(b_))?(this.h=!1,Qo(this,e[1]||"",!0),this.s=Mi(e[2]||""),this.g=Mi(e[3]||"",!0),Yo(this,e[4]),this.l=Mi(e[5]||"",!0),If(this,e[6]||"",!0),this.o=Mi(e[7]||"")):(this.h=!1,this.i=new yr(null,this.h))}ss.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Li(e,Cf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Li(e,Cf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Li(n,n.charAt(0)=="/"?YS:QS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Li(n,JS)),t.join("")};function gn(t){return new ss(t)}function Qo(t,e,n){t.j=n?Mi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function If(t,e,n){e instanceof yr?(t.i=e,ZS(t.i,t.h)):(n||(e=Li(e,XS)),t.i=new yr(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function La(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Mi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Li(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cf=/[#\/\?@]/g,QS=/[#\?:]/g,YS=/[#\?]/g,XS=/[#\?@]/g,JS=/#/g;function yr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Bn(t){t.g||(t.g=new Map,t.h=0,t.i&&WS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=yr.prototype;D.add=function(t,e){Bn(this),this.i=null,t=mi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function N_(t,e){Bn(t),e=mi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function R_(t,e){return Bn(t),e=mi(t,e),t.g.has(e)}D.forEach=function(t,e){Bn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};D.ta=function(){Bn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};D.Z=function(t){Bn(this);let e=[];if(typeof t=="string")R_(this,t)&&(e=e.concat(this.g.get(mi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Bn(this),this.i=null,t=mi(this,t),R_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function k_(t,e,n){N_(t,e),0<n.length&&(t.i=null,t.g.set(mi(t,e),$u(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function mi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZS(t,e){e&&!t.j&&(Bn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(N_(this,s),k_(this,i,n))},t)),t.j=e}var eb=class{constructor(t,e){this.g=t,this.map=e}};function x_(t){this.l=t||tb,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tb=10;function D_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function O_(t){return t.h?1:t.g?t.g.size:0}function Sc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function th(t,e){t.g?t.g.add(e):t.h=e}function P_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}x_.prototype.cancel=function(){if(this.i=M_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function M_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $u(t.i)}var nb=class{stringify(t){return H.JSON.stringify(t,void 0)}parse(t){return H.JSON.parse(t,void 0)}};function sb(){this.g=new nb}function ib(t,e,n){const s=n||"";try{S_(t,function(i,r){let o=i;Pr(i)&&(o=Gu(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function rb(t,e){const n=new xa;if(H.Image){const s=new Image;s.onload=ao(co,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ao(co,n,s,"TestLoadImage: error",!1,e),s.onabort=ao(co,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ao(co,n,s,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function co(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Vr(t){this.l=t.fc||null,this.j=t.ob||!1}je(Vr,Ju);Vr.prototype.g=function(){return new Fa(this.l,this.j)};Vr.prototype.i=function(t){return function(){return t}}({});function Fa(t,e){$e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=nh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(Fa,$e);var nh=0;D=Fa.prototype;D.open=function(t,e){if(this.readyState!=nh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vr(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$r(this)),this.readyState=nh};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;L_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function L_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$r(this):vr(this),this.readyState==3&&L_(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,$r(this))};D.Ya=function(t){this.g&&(this.response=t,$r(this))};D.ka=function(){this.g&&$r(this)};function $r(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vr(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ob=H.JSON.parse;function be(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=F_,this.L=this.M=!1}je(be,$e);var F_="",ab=/^https?$/i,lb=["POST","PUT"];D=be.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():wc.g(),this.C=this.u?Tf(this.u):Tf(wc),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Sf(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=e_(lb,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{V_(this),0<this.B&&((this.L=cb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=Xu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Sf(this,r)}};function cb(t){return Js&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Vu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function Sf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,U_(t),Ua(t)}function U_(t){t.F||(t.F=!0,Qe(t,"complete"),Qe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Ua(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ua(this,!0)),be.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?B_(this):this.kb())};D.kb=function(){B_(this)};function B_(t){if(t.h&&typeof Vu<"u"&&(!t.C[1]||Xt(t)!=4||t.da()!=2)){if(t.v&&Xt(t)==4)Xu(t.La,0,t);else if(Qe(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(b_)[1]||null;!i&&H.self&&H.self.location&&(i=H.self.location.protocol.slice(0,-1)),s=!ab.test(i?i.toLowerCase():"")}n=s}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var r=2<Xt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",U_(t)}}finally{Ua(t)}}}}function Ua(t,e){if(t.g){V_(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function V_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function Xt(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ob(e)}};function bf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case F_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ub(t){const e={};t=(t.g&&2<=Xt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(dr(t[s]))continue;var n=MS(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}NS(e,function(s){return s.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $_(t){let e="";return Hu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function sh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=$_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function Ri(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function j_(t){this.Ga=0,this.j=[],this.l=new xa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ri("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ri("baseRetryDelayMs",5e3,t),this.hb=Ri("retryDelaySeedMs",1e4,t),this.eb=Ri("forwardChannelMaxRetries",2,t),this.xa=Ri("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new x_(t&&t.concurrentRequestLimit),this.Ja=new sb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=j_.prototype;D.ra=8;D.H=1;function ih(t){if(H_(t),t.H==3){var e=t.W++,n=gn(t.I);if(Ae(n,"SID",t.K),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),jr(t,n),e=new Ur(t,t.l,e),e.L=2,e.v=La(gn(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=X_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Br(e)}Q_(t)}function Ba(t){t.g&&(oh(t),t.g.cancel(),t.g=null)}function H_(t){Ba(t),t.u&&(H.clearTimeout(t.u),t.u=null),Xo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Va(t){if(!D_(t.i)&&!t.m){t.m=!0;var e=t.Na;pr||d_(),gr||(pr(),gr=!0),Qu.add(e,t),t.C=0}}function hb(t,e){return O_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Lr(rt(t.Na,t,e),G_(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ur(this,this.l,t);let r=this.s;if(this.U&&(r?(r=i_(r),r_(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=K_(this,i,e),n=gn(this.I),Ae(n,"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),jr(this,n),r&&(this.O?e="headers="+encodeURIComponent(String($_(r)))+"&"+e:this.o&&sh(n,this.o,r)),th(this.i,i),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),i.aa=!0,Ic(i,n,null)):Ic(i,n,e),this.H=2}}else this.H==3&&(t?Nf(this,t):this.j.length==0||D_(this.i)||Nf(this))};function Nf(t,e){var n;e?n=e.m:n=t.W++;const s=gn(t.I);Ae(s,"SID",t.K),Ae(s,"RID",n),Ae(s,"AID",t.V),jr(t,s),t.o&&t.s&&sh(s,t.o,t.s),n=new Ur(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=K_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),th(t.i,n),Ic(n,s,e)}function jr(t,e){t.na&&Hu(t.na,function(n,s){Ae(e,s,n)}),t.h&&S_({},function(n,s){Ae(e,s,n)})}function K_(t,e,n){n=Math.min(t.j.length,n);var s=t.h?rt(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{ib(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function z_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;pr||d_(),gr||(pr(),gr=!0),Qu.add(e,t),t.A=0}}function rh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Lr(rt(t.Ma,t),G_(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,q_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Lr(rt(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,dt(10),Ba(this),q_(this))};function oh(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function q_(t){t.g=new Ur(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=gn(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.K),Ae(e,"AID",t.V),Ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ae(e,"TO",t.qa),Ae(e,"TYPE","xmlhttp"),jr(t,e),t.o&&t.s&&sh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=La(gn(e)),n.s=null,n.S=!0,w_(n,t)}D.ib=function(){this.v!=null&&(this.v=null,Ba(this),rh(this),dt(19))};function Xo(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function W_(t,e){var n=null;if(t.g==e){Xo(t),oh(t),t.g=null;var s=2}else if(Sc(t.i,e))n=e.F,P_(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=Da(),Qe(s,new y_(s,n)),Va(t)}else z_(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&hb(t,e)||s==2&&rh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Jn(t,5);break;case 4:Jn(t,10);break;case 3:Jn(t,6);break;default:Jn(t,2)}}}function G_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Jn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=rt(t.pb,t);n||(n=new ss("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Qo(n,"https"),La(n)),rb(n.toString(),s)}else dt(2);t.H=0,t.h&&t.h.za(e),Q_(t),H_(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),dt(2)):(this.l.info("Failed to ping google.com"),dt(1))};function Q_(t){if(t.H=0,t.ma=[],t.h){const e=M_(t.i);(e.length!=0||t.j.length!=0)&&(yf(t.ma,e),yf(t.ma,t.j),t.i.i.length=0,$u(t.j),t.j.length=0),t.h.ya()}}function Y_(t,e,n){var s=n instanceof ss?gn(n):new ss(n);if(s.g!="")e&&(s.g=e+"."+s.g),Yo(s,s.m);else{var i=H.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ss(null);s&&Qo(r,s),e&&(r.g=e),i&&Yo(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Ae(s,n,e),Ae(s,"VER",t.ra),jr(t,s),s}function X_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new be(new Vr({ob:!0})):new be(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function J_(){}D=J_.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Jo(){if(Js&&!(10<=Number(IS)))throw Error("Environmental error: no available transport.")}Jo.prototype.g=function(t,e){return new It(t,e)};function It(t,e){$e.call(this),this.g=new j_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!dr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!dr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _i(this)}je(It,$e);It.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Y_(t,null,t.Y),Va(t)};It.prototype.close=function(){ih(this.g)};It.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Gu(t),t=n);e.j.push(new eb(e.fb++,t)),e.H==3&&Va(e)};It.prototype.N=function(){this.g.h=null,delete this.j,ih(this.g),delete this.g,It.$.N.call(this)};function Z_(t){Zu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(Z_,Zu);function ey(){eh.call(this),this.status=1}je(ey,eh);function _i(t){this.g=t}je(_i,J_);_i.prototype.Ba=function(){Qe(this.g,"a")};_i.prototype.Aa=function(t){Qe(this.g,new Z_(t))};_i.prototype.za=function(t){Qe(this.g,new ey)};_i.prototype.ya=function(){Qe(this.g,"b")};function db(){this.blockSize=-1}function jt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}je(jt,db);jt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sl(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}jt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Sl(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Sl(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Sl(this,s),i=0;break}}this.h=i,this.i+=e};jt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ue(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var fb={};function ah(t){return-128<=t&&128>t?ES(t,function(e){return new ue([e|0],0>e?-1:0)}):new ue([t|0],0>t?-1:0)}function Jt(t){if(isNaN(t)||!isFinite(t))return $s;if(0>t)return ze(Jt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=bc;return new ue(e,0)}function ty(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ze(ty(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jt(Math.pow(e,8)),s=$s,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=Jt(Math.pow(e,r)),s=s.R(r).add(Jt(o))):(s=s.R(n),s=s.add(Jt(o)))}return s}var bc=4294967296,$s=ah(0),Nc=ah(1),Rf=ah(16777216);D=ue.prototype;D.ea=function(){if(St(this))return-ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:bc+s)*e,e*=bc}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(hn(this))return"0";if(St(this))return"-"+ze(this).toString(t);for(var e=Jt(Math.pow(t,6)),n=this,s="";;){var i=ea(n,e).g;n=Zo(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,hn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function hn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function St(t){return t.h==-1}D.X=function(t){return t=Zo(this,t),St(t)?-1:hn(t)?0:1};function ze(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ue(n,~t.h).add(Nc)}D.abs=function(){return St(this)?ze(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new ue(n,n[n.length-1]&-2147483648?-1:0)};function Zo(t,e){return t.add(ze(e))}D.R=function(t){if(hn(this)||hn(t))return $s;if(St(this))return St(t)?ze(this).R(ze(t)):ze(ze(this).R(t));if(St(t))return ze(this.R(ze(t)));if(0>this.X(Rf)&&0>t.X(Rf))return Jt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,uo(n,2*s+2*i),n[2*s+2*i+1]+=r*l,uo(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,uo(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,uo(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ue(n,0)};function uo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ki(t,e){this.g=t,this.h=e}function ea(t,e){if(hn(e))throw Error("division by zero");if(hn(t))return new ki($s,$s);if(St(t))return e=ea(ze(t),e),new ki(ze(e.g),ze(e.h));if(St(e))return e=ea(t,ze(e)),new ki(ze(e.g),e.h);if(30<t.g.length){if(St(t)||St(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Nc,s=e;0>=s.X(t);)n=kf(n),s=kf(s);var i=Is(n,1),r=Is(s,1);for(s=Is(s,2),n=Is(n,2);!hn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Is(s,1),n=Is(n,1)}return e=Zo(t,i.R(e)),new ki(i,e)}for(i=$s;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Jt(n),o=r.R(e);St(o)||0<o.X(t);)n-=s,r=Jt(n),o=r.R(e);hn(r)&&(r=Nc),i=i.add(r),t=Zo(t,o)}return new ki(i,t)}D.gb=function(t){return ea(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ue(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ue(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ue(n,this.h^t.h)};function kf(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ue(n,t.h)}function Is(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ue(i,t.h)}Jo.prototype.createWebChannel=Jo.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;Oa.NO_ERROR=0;Oa.TIMEOUT=8;Oa.HTTP_ERROR=6;v_.COMPLETE="complete";A_.EventType=Fr;Fr.OPEN="a";Fr.CLOSE="b";Fr.ERROR="c";Fr.MESSAGE="d";$e.prototype.listen=$e.prototype.O;be.prototype.listenOnce=be.prototype.P;be.prototype.getLastError=be.prototype.Sa;be.prototype.getLastErrorCode=be.prototype.Ia;be.prototype.getStatus=be.prototype.da;be.prototype.getResponseJson=be.prototype.Wa;be.prototype.getResponseText=be.prototype.ja;be.prototype.send=be.prototype.ha;be.prototype.setWithCredentials=be.prototype.Oa;jt.prototype.digest=jt.prototype.l;jt.prototype.reset=jt.prototype.reset;jt.prototype.update=jt.prototype.j;ue.prototype.add=ue.prototype.add;ue.prototype.multiply=ue.prototype.R;ue.prototype.modulo=ue.prototype.gb;ue.prototype.compare=ue.prototype.X;ue.prototype.toNumber=ue.prototype.ea;ue.prototype.toString=ue.prototype.toString;ue.prototype.getBits=ue.prototype.D;ue.fromNumber=Jt;ue.fromString=ty;var pb=function(){return new Jo},gb=function(){return Da()},bl=Oa,mb=v_,_b=vs,xf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yb=Vr,ho=A_,vb=be,Ab=jt,js=ue;const Df="@firebase/firestore";/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let yi="9.23.0";/**
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
 */const ps=new br("@firebase/firestore");function Of(){return ps.logLevel}function M(t,...e){if(ps.logLevel<=ne.DEBUG){const n=e.map(lh);ps.debug(`Firestore (${yi}): ${t}`,...n)}}function mn(t,...e){if(ps.logLevel<=ne.ERROR){const n=e.map(lh);ps.error(`Firestore (${yi}): ${t}`,...n)}}function Zs(t,...e){if(ps.logLevel<=ne.WARN){const n=e.map(lh);ps.warn(`Firestore (${yi}): ${t}`,...n)}}function lh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${yi}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function Me(t,e){t||G()}function re(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class is{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ny{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Eb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class wb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Tb{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new is;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new is,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new is)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string"),new ny(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Je(e)}}class Ib{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Cb{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Ib(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.T=n.token,new Sb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Nb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class sy{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Nb(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function oe(t,e){return t<e?-1:t>e?1:0}function ei(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class gt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new gt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new gt(0,0))}static max(){return new q(new gt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ar{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ar.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ar?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Ar{construct(e,n,s){return new Se(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(k.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const Rb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Ar{construct(e,n,s){return new ft(e,n,s)}static isValidIdentifier(e){return Rb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new V(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new V(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Se.fromString(e))}static fromName(e){return new B(Se.fromString(e).popFirst(5))}static empty(){return new B(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Se(e.slice()))}}function kb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(s===1e9?new gt(n+1,0):new gt(n,s));return new Pn(i,B.empty(),e)}function xb(t){return new Pn(t.readTime,t.key,-1)}class Pn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Pn(q.min(),B.empty(),-1)}static max(){return new Pn(q.max(),B.empty(),-1)}}function Db(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ob="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ch(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==Ob)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,s)=>{n(e)})}static reject(e){return new w((n,s)=>{s(e)})}static waitFor(e){return new w((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=w.resolve(!1);for(const s of e)n=n.next(i=>i?w.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new w((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new w((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Hr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}uh.ct=-1;function $a(t){return t==null}function Rc(t){return t===0&&1/t==-1/0}/**
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
 */function Pf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ja(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fo(this.root,e,this.comparator,!0)}}class fo{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ke.RED,this.left=i??Ke.EMPTY,this.right=r??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ke(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mf(this.data.getIterator())}getIteratorFrom(e){return new Mf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Mf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class In{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new In([])}unionWith(e){let n=new at(ft.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new In(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ei(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class iy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new iy("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Lb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(t){if(Me(!!t),typeof t=="string"){let e=0;const n=Lb.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gs(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */function hh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dh(t){const e=t.mapValue.fields.__previous_value__;return hh(e)?dh(e):e}function Er(t){const e=Mn(t.mapValue.fields.__local_write_time__.timestampValue);return new gt(e.seconds,e.nanos)}/**
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
 */class Fb{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class wr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hh(t)?4:Ub(t)?9007199254740991:10:G()}function tn(t,e){if(t===e)return!0;const n=ms(t);if(n!==ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Er(t).isEqual(Er(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Mn(s.timestampValue),o=Mn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gs(s.bytesValue).isEqual(gs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Oe(s.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Oe(s.integerValue)===Oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Oe(s.doubleValue),o=Oe(i.doubleValue);return r===o?Rc(r)===Rc(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Pf(r)!==Pf(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!tn(r[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Tr(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=ms(t),s=ms(e);if(n!==s)return oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Oe(i.integerValue||i.doubleValue),a=Oe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Lf(t.timestampValue,e.timestampValue);case 4:return Lf(Er(t),Er(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,r){const o=gs(i),a=gs(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=oe(o[l],a[l]);if(c!==0)return c}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=oe(Oe(i.latitude),Oe(r.latitude));return o!==0?o:oe(Oe(i.longitude),Oe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ti(o[l],a[l]);if(c)return c}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===po.mapValue&&r===po.mapValue)return 0;if(i===po.mapValue)return 1;if(r===po.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=oe(a[u],c[u]);if(h!==0)return h;const d=ti(o[a[u]],l[c[u]]);if(d!==0)return d}return oe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw G()}}function Lf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Mn(t),s=Mn(e),i=oe(n.seconds,s.seconds);return i!==0?i:oe(n.nanos,s.nanos)}function ni(t){return kc(t)}function kc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Mn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=kc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${kc(s.fields[a])}`;return r+"}"}(t.mapValue):G();var e,n}function xc(t){return!!t&&"integerValue"in t}function fh(t){return!!t&&"arrayValue"in t}function Ff(t){return!!t&&"nullValue"in t}function Uf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nl(t){return!!t&&"mapValue"in t}function Yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ja(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Yi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ub(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yi(n)}setAll(e){let n=ft.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Yi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Nl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ja(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Qt(Yi(this.value))}}/**
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
 */class tt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,q.min(),q.min(),q.min(),Qt.empty(),0)}static newFoundDocument(e,n,s,i){return new tt(e,1,n,q.min(),s,i,0)}static newNoDocument(e,n){return new tt(e,2,n,q.min(),q.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,q.min(),q.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ta{constructor(e,n){this.position=e,this.inclusive=n}}function Bf(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),n.key):s=ti(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ry{}class Pe extends ry{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new $b(e,n,s):n==="array-contains"?new Kb(e,s):n==="in"?new zb(e,s):n==="not-in"?new qb(e,s):n==="array-contains-any"?new Wb(e,s):new Pe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new jb(e,s):new Hb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ti(n,this.value)):n!==null&&ms(this.value)===ms(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class nn extends ry{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new nn(e,n)}matches(e){return oy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function oy(t){return t.op==="and"}function ay(t){return Vb(t)&&oy(t)}function Vb(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Dc(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+ni(t.value);if(ay(t))return t.filters.map(e=>Dc(e)).join(",");{const e=t.filters.map(n=>Dc(n)).join(",");return`${t.op}(${e})`}}function ly(t,e){return t instanceof Pe?function(n,s){return s instanceof Pe&&n.op===s.op&&n.field.isEqual(s.field)&&tn(n.value,s.value)}(t,e):t instanceof nn?function(n,s){return s instanceof nn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ly(r,s.filters[o]),!0):!1}(t,e):void G()}function cy(t){return t instanceof Pe?function(e){return`${e.field.canonicalString()} ${e.op} ${ni(e.value)}`}(t):t instanceof nn?function(e){return e.op.toString()+" {"+e.getFilters().map(cy).join(" ,")+"}"}(t):"Filter"}class $b extends Pe{constructor(e,n,s){super(e,n,s),this.key=B.fromName(s.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class jb extends Pe{constructor(e,n){super(e,"in",n),this.keys=uy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Hb extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=uy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function uy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>B.fromName(s.referenceValue))}class Kb extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fh(n)&&Tr(n.arrayValue,this.value)}}class zb extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tr(this.value.arrayValue,n)}}class qb extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tr(this.value.arrayValue,n)}}class Wb extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Tr(this.value.arrayValue,s))}}/**
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
 */class Gb{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function $f(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Gb(t,e,n,s,i,r,o)}function ph(t){const e=re(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Dc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),$a(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ni(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ni(s)).join(",")),e.dt=n}return e.dt}function gh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ly(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vf(t.startAt,e.startAt)&&Vf(t.endAt,e.endAt)}function Oc(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ha{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function Qb(t,e,n,s,i,r,o,a){return new Ha(t,e,n,s,i,r,o,a)}function mh(t){return new Ha(t)}function jf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Xb(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Jb(t){return t.collectionGroup!==null}function Hs(t){const e=re(t);if(e.wt===null){e.wt=[];const n=Xb(e),s=Yb(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Xi(n)),e.wt.push(new Xi(ft.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Xi(ft.keyField(),r))}}}return e.wt}function _n(t){const e=re(t);if(!e._t)if(e.limitType==="F")e._t=$f(e.path,e.collectionGroup,Hs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Hs(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Xi(r.field,o))}const s=e.endAt?new ta(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ta(e.startAt.position,e.startAt.inclusive):null;e._t=$f(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function Pc(t,e,n){return new Ha(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ka(t,e){return gh(_n(t),_n(e))&&t.limitType===e.limitType}function hy(t){return`${ph(_n(t))}|lt:${t.limitType}`}function Mc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>cy(s)).join(", ")}]`),$a(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ni(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ni(s)).join(",")),`Target(${n})`}(_n(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Hs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Bf(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Hs(n),s)||n.endAt&&!function(i,r,o){const a=Bf(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Hs(n),s))}(t,e)}function Zb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dy(t){return(e,n)=>{let s=!1;for(const i of Hs(t)){const r=eN(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function eN(t,e,n){const s=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ti(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
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
 */class vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ja(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Mb(this.inner)}size(){return this.innerSize}}/**
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
 */const tN=new ke(B.comparator);function Ln(){return tN}const fy=new ke(B.comparator);function Fi(...t){let e=fy;for(const n of t)e=e.insert(n.key,n);return e}function nN(t){let e=fy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Zn(){return Ji()}function py(){return Ji()}function Ji(){return new vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const sN=new at(B.comparator);function se(...t){let e=sN;for(const n of t)e=e.add(n);return e}const iN=new at(oe);function rN(){return iN}/**
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
 */function oN(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rc(e)?"-0":e}}function aN(t){return{integerValue:""+t}}/**
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
 */class qa{constructor(){this._=void 0}}function lN(t,e,n){return t instanceof Lc?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hh(i)&&(i=dh(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof na?gy(t,e):t instanceof sa?my(t,e):function(s,i){const r=uN(s,i),o=Hf(r)+Hf(s.gt);return xc(r)&&xc(s.gt)?aN(o):oN(s.serializer,o)}(t,e)}function cN(t,e,n){return t instanceof na?gy(t,e):t instanceof sa?my(t,e):n}function uN(t,e){return t instanceof Fc?xc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Lc extends qa{}class na extends qa{constructor(e){super(),this.elements=e}}function gy(t,e){const n=_y(e);for(const s of t.elements)n.some(i=>tn(i,s))||n.push(s);return{arrayValue:{values:n}}}class sa extends qa{constructor(e){super(),this.elements=e}}function my(t,e){let n=_y(e);for(const s of t.elements)n=n.filter(i=>!tn(i,s));return{arrayValue:{values:n}}}class Fc extends qa{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Hf(t){return Oe(t.integerValue||t.doubleValue)}function _y(t){return fh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hN(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof na&&s instanceof na||n instanceof sa&&s instanceof sa?ei(n.elements,s.elements,tn):n instanceof Fc&&s instanceof Fc?tn(n.gt,s.gt):n instanceof Lc&&s instanceof Lc}(t.transform,e.transform)}class rs{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rs}static exists(e){return new rs(void 0,e)}static updateTime(e){return new rs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function To(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _h{}function yy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fN(t.key,rs.none()):new yh(t.key,t.data,rs.none());{const n=t.data,s=Qt.empty();let i=new at(ft.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Wa(t.key,s,new In(i.toArray()),rs.none())}}function dN(t,e,n){t instanceof yh?function(s,i,r){const o=s.value.clone(),a=zf(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Wa?function(s,i,r){if(!To(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=zf(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(vy(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Zi(t,e,n,s){return t instanceof yh?function(i,r,o,a){if(!To(i.precondition,r))return o;const l=i.value.clone(),c=qf(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Wa?function(i,r,o,a){if(!To(i.precondition,r))return o;const l=qf(i.fieldTransforms,a,r),c=r.data;return c.setAll(vy(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return To(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Kf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ei(n,s,(i,r)=>hN(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yh extends _h{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wa extends _h{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function vy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function zf(t,e,n){const s=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,cN(o,a,n[i]))}return s}function qf(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,lN(r,o,e))}return s}class fN extends _h{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pN{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&dN(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Zi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Zi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=py();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=yy(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&ei(this.mutations,e.mutations,(n,s)=>Kf(n,s))&&ei(this.baseMutations,e.baseMutations,(n,s)=>Kf(n,s))}}/**
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
 */class gN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,J;function Ay(t){if(t===void 0)return mn("GRPC error has no .code"),k.UNKNOWN;switch(t){case De.OK:return k.OK;case De.CANCELLED:return k.CANCELLED;case De.UNKNOWN:return k.UNKNOWN;case De.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case De.INTERNAL:return k.INTERNAL;case De.UNAVAILABLE:return k.UNAVAILABLE;case De.UNAUTHENTICATED:return k.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case De.NOT_FOUND:return k.NOT_FOUND;case De.ALREADY_EXISTS:return k.ALREADY_EXISTS;case De.PERMISSION_DENIED:return k.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case De.ABORTED:return k.ABORTED;case De.OUT_OF_RANGE:return k.OUT_OF_RANGE;case De.UNIMPLEMENTED:return k.UNIMPLEMENTED;case De.DATA_LOSS:return k.DATA_LOSS;default:return G()}}(J=De||(De={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class vh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return go}static getOrCreateInstance(){return go===null&&(go=new vh),go}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let go=null;/**
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
 */function _N(){return new TextEncoder}/**
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
 */const yN=new js([4294967295,4294967295],0);function Wf(t){const e=_N().encode(t),n=new Ab;return n.update(e),new Uint8Array(n.digest())}function Gf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new js([n,s],0),new js([i,r],0)]}class Ah{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ui(`Invalid padding: ${n}`);if(s<0)throw new Ui(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ui(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ui(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=js.fromNumber(this.It)}Et(e,n,s){let i=e.add(n.multiply(js.fromNumber(s)));return i.compare(yN)===1&&(i=new js([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Wf(e),[s,i]=Gf(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Ah(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Wf(e),[s,i]=Gf(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ui extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ga{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Kr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ga(q.min(),i,new ke(oe),Ln(),se())}}class Kr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Kr(s,n,se(),se(),se())}}/**
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
 */class Io{constructor(e,n,s,i){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=i}}class Ey{constructor(e,n){this.targetId=e,this.Vt=n}}class wy{constructor(e,n,s=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Qf{constructor(){this.St=0,this.Dt=Xf(),this.Ct=lt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=se(),n=se(),s=se();return this.Dt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:G()}}),new Kr(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=Xf()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class vN{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ln(),this.zt=Yf(),this.Wt=new ke(oe)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,i)=>{this.te(i)&&n(i)})}ne(e){var n;const s=e.targetId,i=e.Vt.count,r=this.se(s);if(r){const o=r.target;if(Oc(o))if(i===0){const a=new B(o.path);this.Yt(s,a,tt.newNoDocument(a,q.min()))}else Me(i===1);else{const a=this.ie(s);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(s);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(n=vh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,h){var d,g,_,T,I,K;const b={localCacheCount:u,existenceFilterCount:h.count},R=h.unchangedNames;return R&&(b.bloomFilter={applied:c===0,hashCount:(d=R==null?void 0:R.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(T=(_=(g=R==null?void 0:R.bits)===null||g===void 0?void 0:g.bitmap)===null||_===void 0?void 0:_.length)!==null&&T!==void 0?T:0,padding:(K=(I=R==null?void 0:R.bits)===null||I===void 0?void 0:I.padding)!==null&&K!==void 0?K:0}),b}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:i}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=gs(r).toUint8Array()}catch(u){if(u instanceof iy)return Zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new Ah(l,o,a)}catch(u){return Zs(u instanceof Ui?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.It===0?1:i!==n-this.oe(e.targetId,c)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(e,r,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&Oc(a.target)){const l=new B(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,tt.newNoDocument(l,e))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let s=se();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const i=new Ga(e,n,this.Wt,this.jt,s);return this.jt=Ln(),this.zt=Yf(),this.Wt=new ke(oe),i}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Qf,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new at(oe),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Qf),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Yf(){return new ke(B.comparator)}function Xf(){return new ke(B.comparator)}const AN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),EN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),wN=(()=>({and:"AND",or:"OR"}))();class TN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uc(t,e){return t.useProto3Json||$a(e)?e:{value:e}}function IN(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function CN(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ks(t){return Me(!!t),q.fromTimestamp(function(e){const n=Mn(e);return new gt(n.seconds,n.nanos)}(t))}function SN(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ty(t){const e=Se.fromString(t);return Me(by(e)),e}function Rl(t,e){const n=Ty(e);if(n.get(1)!==t.databaseId.projectId)throw new V(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Iy(n))}function Bc(t,e){return SN(t.databaseId,e)}function bN(t){const e=Ty(t);return e.length===4?Se.emptyPath():Iy(e)}function Jf(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Iy(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function NN(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(Me(c===void 0||typeof c=="string"),lt.fromBase64String(c||"")):(Me(c===void 0||c instanceof Uint8Array),lt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?k.UNKNOWN:Ay(l.code);return new V(c,l.message||"")}(o);n=new wy(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Rl(t,s.document.name),r=Ks(s.document.updateTime),o=s.document.createTime?Ks(s.document.createTime):q.min(),a=new Qt({mapValue:{fields:s.document.fields}}),l=tt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Io(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Rl(t,s.document),r=s.readTime?Ks(s.readTime):q.min(),o=tt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Io([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Rl(t,s.document),r=s.removedTargetIds||[];n=new Io([],r,i,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new mN(i,r),a=s.targetId;n=new Ey(a,o)}}return n}function RN(t,e){return{documents:[Bc(t,e.path)]}}function kN(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Bc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Bc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Sy(nn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:bs(u.field),direction:ON(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Uc(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function xN(t){let e=bN(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Me(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Cy(u);return h instanceof nn&&ay(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Xi(Ns(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,$a(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new ta(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new ta(d,h)}(n.endAt)),Qb(e,i,o,r,a,"F",l,c)}function DN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cy(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ns(e.unaryFilter.field);return Pe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ns(e.unaryFilter.field);return Pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ns(e.unaryFilter.field);return Pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ns(e.unaryFilter.field);return Pe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return Pe.create(Ns(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return nn.create(e.compositeFilter.filters.map(n=>Cy(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function ON(t){return AN[t]}function PN(t){return EN[t]}function MN(t){return wN[t]}function bs(t){return{fieldPath:t.canonicalString()}}function Ns(t){return ft.fromServerFormat(t.fieldPath)}function Sy(t){return t instanceof Pe?function(e){if(e.op==="=="){if(Uf(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NAN"}};if(Ff(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Uf(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NOT_NAN"}};if(Ff(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(e.field),op:PN(e.op),value:e.value}}}(t):t instanceof nn?function(e){const n=e.getFilters().map(s=>Sy(s));return n.length===1?n[0]:{compositeFilter:{op:MN(e.op),filters:n}}}(t):G()}function by(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Cn{constructor(e,n,s,i,r=q.min(),o=q.min(),a=lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class LN{constructor(e){this.fe=e}}function FN(t){const e=xN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pc(e,e.limit,"L"):e}/**
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
 */class UN{constructor(){this.rn=new BN}addToCollectionParentIndex(e,n){return this.rn.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Pn.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Pn.min())}updateCollectionGroup(e,n,s){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class BN{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new at(Se.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new at(Se.comparator)).toArray()}}/**
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
 */class si{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new si(0)}static Mn(){return new si(-1)}}/**
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
 */class VN{constructor(){this.changes=new vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?w.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $N{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jN{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Zi(s.mutation,i,In.empty(),gt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const i=Zn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Fi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Zn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Ln();const o=Ji(),a=Ji();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Wa)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Zi(u.mutation,c,u.mutation.getFieldMask(),gt.now())):o.set(c.key,In.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new $N(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ji();let i=new ke((o,a)=>o-a),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||In.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||se()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=py();u.forEach(d=>{if(!r.has(d)){const g=yy(n.get(d),s.get(d));g!==null&&h.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return w.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return B.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Jb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):w.resolve(Zn());let a=-1,l=r;return o.next(c=>w.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?w.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,se())).next(u=>({batchId:a,changes:nN(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(s=>{let i=Fi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Fi();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const l=function(c,u){return new Ha(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,tt.newInvalidDocument(c)))});let o=Fi();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Zi(c.mutation,l,In.empty(),gt.now()),za(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class HN{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return w.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Ks(s.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:FN(s.bundledQuery),readTime:Ks(s.readTime)}}(n)),w.resolve()}}/**
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
 */class KN{constructor(){this.overlays=new ke(B.comparator),this.ls=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Zn();return w.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.we(e,n,r)}),w.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),w.resolve()}getOverlaysForCollection(e,n,s){const i=Zn(),r=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ke((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Zn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Zn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return w.resolve(a)}we(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new gN(n,s));let r=this.ls.get(n);r===void 0&&(r=se(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
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
 */class Eh{constructor(){this.fs=new at(Fe.ds),this.ws=new at(Fe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Fe(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Fe(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new B(new Se([])),s=new Fe(n,e),i=new Fe(n,e+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new B(new Se([])),s=new Fe(n,e),i=new Fe(n,e+1);let r=se();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Fe(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Fe{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return B.comparator(e.key,n.key)||oe(e.As,n.As)}static _s(e,n){return oe(e.As,n.As)||B.comparator(e.key,n.key)}}/**
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
 */class zN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new at(Fe.ds)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pN(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Fe(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return w.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),w.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new at(oe);return n.forEach(i=>{const r=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),w.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;B.isDocumentKey(r)||(r=r.child(""));const o=new Fe(new B(r),0);let a=new at(oe);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.As)),!0)},o),w.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return w.forEach(n.mutations,i=>{const r=new Fe(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Fe(n,0),i=this.Rs.firstAfterOrEqual(s);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class qN{constructor(e){this.Ds=e,this.docs=new ke(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return w.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let s=Ln();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tt.newInvalidDocument(i))}),w.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Ln();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Db(xb(u),s)<=0||(i.has(u.key)||za(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return w.resolve(r)}getAllFromCollectionGroup(e,n,s,i){G()}Cs(e,n){return w.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new WN(this)}getSize(e){return w.resolve(this.size)}}class WN extends VN{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(s)}),w.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class GN{constructor(e){this.persistence=e,this.xs=new vi(n=>ph(n),gh),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Eh,this.targetCount=0,this.Ms=si.kn()}forEachTarget(e,n){return this.xs.forEach((s,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),w.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new si(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Fn(n),w.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(r).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return w.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),w.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),w.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return w.resolve(s)}containsKey(e,n){return w.resolve(this.ks.containsKey(n))}}/**
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
 */class QN{constructor(e,n){this.$s={},this.overlays={},this.Os=new uh(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new GN(this),this.indexManager=new UN,this.remoteDocumentCache=function(s){return new qN(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new LN(n),this.qs=new HN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new zN(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){M("MemoryPersistence","Starting transaction:",e);const i=new YN(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(e,n){return w.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class YN extends Pb{constructor(e){super(),this.currentSequenceNumber=e}}class wh{constructor(e){this.persistence=e,this.Qs=new Eh,this.js=null}static zs(e){return new wh(e)}get Ws(){if(this.js)return this.js;throw G()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),w.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),w.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ws,s=>{const i=B.fromPath(s);return this.Hs(e,i).next(r=>{r||n.removeEntry(i,q.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return w.or([()=>w.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Th{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(e,n){let s=se(),i=se();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Th(e,n.fromCache,s,i)}}/**
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
 */class XN{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ki(e,n).next(r=>r||this.Gi(e,n,i,s)).next(r=>r||this.Qi(e,n))}Ki(e,n){if(jf(n))return w.resolve(null);let s=_n(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pc(n,null,"F"),s=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=se(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,Pc(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,s,i){return jf(n)||i.isEqual(q.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(e,n):(Of()<=ne.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mc(n)),this.Wi(e,o,n,kb(i,-1)))})}ji(e,n){let s=new at(dy(e));return n.forEach((i,r)=>{za(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(e,n){return Of()<=ne.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Mc(n)),this.Ui.getDocumentsMatchingQuery(e,n,Pn.min())}Wi(e,n,s,i){return this.Ui.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class JN{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ke(oe),this.Yi=new vi(r=>ph(r),gh),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jN(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function ZN(t,e,n,s){return new JN(t,e,n,s)}async function Ny(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=se();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function Ry(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function eR(t,e){const n=re(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(r,u.addedDocuments,h)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(lt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),i=i.insert(h,g),function(_,T,I){return _.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,g,u)&&a.push(n.Bs.updateTargetData(r,g))});let l=Ln(),c=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(tR(r,o,e.documentUpdates).next(u=>{l=u.nr,c=u.sr})),!s.isEqual(q.min())){const u=n.Bs.getLastRemoteSnapshotVersion(r).next(h=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return w.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=i,r))}function tR(t,e,n){let s=se(),i=se();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Ln();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{nr:o,sr:i}})}function nR(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Bs.getTargetData(s,e).next(r=>r?(i=r,w.resolve(i)):n.Bs.allocateTargetId(s).next(o=>(i=new Cn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Vc(t,e,n){const s=re(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Hr(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function Zf(t,e,n){const s=re(t);let i=q.min(),r=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=re(a),h=u.Yi.get(c);return h!==void 0?w.resolve(u.Ji.get(h)):u.Bs.getTargetData(l,c)}(s,o,_n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?r:se())).next(a=>(sR(s,Zb(e),a),{documents:a,ir:r})))}function sR(t,e,n){let s=t.Xi.get(e)||q.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Xi.set(e,s)}class ep{constructor(){this.activeTargetIds=rN()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iR{constructor(){this.Hr=new ep,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new ep,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rR{Yr(e){}shutdown(){}}/**
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
 */class tp{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mo=null;function kl(){return mo===null?mo=268435456+Math.round(2147483648*Math.random()):mo++,"0x"+mo.toString(16)}/**
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
 */const oR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class aR{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Xe="WebChannelConnection";class lR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,i,r){const o=kl(),a=this.To(e,n);M("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.Eo(l,i,r),this.Ao(e,a,l,s).then(c=>(M("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Zs("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(e,n,s,i,r,o){return this.Io(e,n,s,i,r)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+yi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}To(e,n){const s=oR[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,i){const r=kl();return new Promise((o,a)=>{const l=new vb;l.setWithCredentials(!0),l.listenOnce(mb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case bl.NO_ERROR:const u=l.getResponseJson();M(Xe,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case bl.TIMEOUT:M(Xe,`RPC '${e}' ${r} timed out`),a(new V(k.DEADLINE_EXCEEDED,"Request time out"));break;case bl.HTTP_ERROR:const h=l.getStatus();if(M(Xe,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const _=function(T){const I=T.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(I)>=0?I:k.UNKNOWN}(g.status);a(new V(_,g.message))}else a(new V(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(k.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{M(Xe,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);M(Xe,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}Ro(e,n,s){const i=kl(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pb(),a=gb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new yb({})),this.Eo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");M(Xe,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,g=!1;const _=new aR({ro:I=>{g?M(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(d||(M(Xe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),M(Xe,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},oo:()=>h.close()}),T=(I,K,b)=>{I.listen(K,R=>{try{b(R)}catch(A){setTimeout(()=>{throw A},0)}})};return T(h,ho.EventType.OPEN,()=>{g||M(Xe,`RPC '${e}' stream ${i} transport opened.`)}),T(h,ho.EventType.CLOSE,()=>{g||(g=!0,M(Xe,`RPC '${e}' stream ${i} transport closed`),_.wo())}),T(h,ho.EventType.ERROR,I=>{g||(g=!0,Zs(Xe,`RPC '${e}' stream ${i} transport errored:`,I),_.wo(new V(k.UNAVAILABLE,"The operation could not be completed")))}),T(h,ho.EventType.MESSAGE,I=>{var K;if(!g){const b=I.data[0];Me(!!b);const R=b,A=R.error||((K=R[0])===null||K===void 0?void 0:K.error);if(A){M(Xe,`RPC '${e}' stream ${i} received error:`,A);const X=A.status;let fe=function(Ne){const yt=De[Ne];if(yt!==void 0)return Ay(yt)}(X),Ie=A.message;fe===void 0&&(fe=k.INTERNAL,Ie="Unknown error status: "+X+" with message "+A.message),g=!0,_.wo(new V(fe,Ie)),h.close()}else M(Xe,`RPC '${e}' stream ${i} received:`,b),_._o(b)}}),T(a,_b.STAT_EVENT,I=>{I.stat===xf.PROXY?M(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===xf.NOPROXY&&M(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.fo()},0),_}}function xl(){return typeof document<"u"?document:null}/**
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
 */function ky(t){return new TN(t,!0)}/**
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
 */class xy{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class cR{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new xy(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{e(()=>{const i=new V(k.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uR extends cR{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=NN(this.serializer,e),s=function(i){if(!("targetChange"in i))return q.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?q.min():r.readTime?Ks(r.readTime):q.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Jf(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=Oc(a)?{documents:RN(i,a)}:{query:kN(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=CN(i,r.resumeToken);const l=Uc(i,r.expectedCount);l!==null&&(o.expectedCount=l)}else if(r.snapshotVersion.compareTo(q.min())>0){o.readTime=IN(i,r.snapshotVersion.toTimestamp());const l=Uc(i,r.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const s=DN(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Jf(this.serializer),n.removeTarget=e,this.Wo(n)}}/**
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
 */class hR extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new V(k.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(k.UNKNOWN,i.toString())})}vo(e,n,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(k.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class dR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(mn(n),this.mu=!1):M("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class fR{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{qr(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=re(a);l.vu.add(4),await zr(l),l.bu.set("Unknown"),l.vu.delete(4),await Qa(l)}(this))})}),this.bu=new dR(s,i)}}async function Qa(t){if(qr(t))for(const e of t.Ru)await e(!0)}async function zr(t){for(const e of t.Ru)await e(!1)}function Dy(t,e){const n=re(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Sh(n)?Ch(n):Ai(n).Ko()&&Ih(n,e))}function Oy(t,e){const n=re(t),s=Ai(n);n.Au.delete(e),s.Ko()&&Py(n,e),n.Au.size===0&&(s.Ko()?s.jo():qr(n)&&n.bu.set("Unknown"))}function Ih(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ai(t).su(e)}function Py(t,e){t.Vu.qt(e),Ai(t).iu(e)}function Ch(t){t.Vu=new vN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Ai(t).start(),t.bu.gu()}function Sh(t){return qr(t)&&!Ai(t).Uo()&&t.Au.size>0}function qr(t){return re(t).vu.size===0}function My(t){t.Vu=void 0}async function pR(t){t.Au.forEach((e,n)=>{Ih(t,e)})}async function gR(t,e){My(t),Sh(t)?(t.bu.Iu(e),Ch(t)):t.bu.set("Unknown")}async function mR(t,e,n){if(t.bu.set("Online"),e instanceof wy&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await np(t,s)}else if(e instanceof Io?t.Vu.Ht(e):e instanceof Ey?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(q.min()))try{const s=await Ry(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Au.get(l);c&&i.Au.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,l)=>{const c=i.Au.get(a);if(!c)return;i.Au.set(a,c.withResumeToken(lt.EMPTY_BYTE_STRING,c.snapshotVersion)),Py(i,a);const u=new Cn(c.target,a,l,c.sequenceNumber);Ih(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){M("RemoteStore","Failed to raise snapshot:",s),await np(t,s)}}async function np(t,e,n){if(!Hr(e))throw e;t.vu.add(1),await zr(t),t.bu.set("Offline"),n||(n=()=>Ry(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Qa(t)})}async function sp(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const s=qr(n);n.vu.add(3),await zr(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Qa(n)}async function _R(t,e){const n=re(t);e?(n.vu.delete(2),await Qa(n)):e||(n.vu.add(2),await zr(n),n.bu.set("Unknown"))}function Ai(t){return t.Su||(t.Su=function(e,n,s){const i=re(e);return i.fu(),new uR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:pR.bind(null,t),ao:gR.bind(null,t),nu:mR.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Sh(t)?Ch(t):t.bu.set("Unknown")):(await t.Su.stop(),My(t))})),t.Su}/**
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
 */class bh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new bh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ly(t,e){if(mn("AsyncQueue",`${e}: ${t}`),Hr(t))return new V(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class zs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||B.comparator(n.key,s.key):(n,s)=>B.comparator(n.key,s.key),this.keyedMap=Fi(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new zs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ip{constructor(){this.Cu=new ke(B.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):G():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ii{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ii(e,n,zs.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ka(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class yR{constructor(){this.Nu=void 0,this.listeners=[]}}class vR{constructor(){this.queries=new vi(e=>hy(e),Ka),this.onlineState="Unknown",this.ku=new Set}}async function AR(t,e){const n=re(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new yR),i)try{r.Nu=await n.onListen(s)}catch(o){const a=Ly(o,`Initialization of query '${Mc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&Nh(n)}async function ER(t,e){const n=re(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function wR(t,e){const n=re(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&Nh(n)}function TR(t,e,n){const s=re(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Nh(t){t.ku.forEach(e=>{e.next()})}class IR{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ii(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=ii.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class Fy{constructor(e){this.key=e}}class Uy{constructor(e){this.key=e}}class CR{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=se(),this.mutatedKeys=se(),this.tc=dy(e),this.ec=new zs(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new ip,i=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),g=za(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;d&&g?d.data.isEqual(g.data)?_!==T&&(s.track({type:3,doc:g}),I=!0):this.rc(d,g)||(s.track({type:2,doc:g}),I=!0,(l&&this.tc(g,l)>0||c&&this.tc(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),I=!0):d&&!g&&(s.track({type:1,doc:d}),I=!0,(l||c)&&(a=!0)),I&&(g?(o=o.add(g),r=T?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((c,u)=>function(h,d){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(d)}(c.type,u.type)||this.tc(c.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,r.length!==0||l?{snapshot:new ii(this.query,e.ec,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ip,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=se(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new Uy(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new Fy(s))}),n}hc(e){this.Yu=e.ir,this.Zu=se();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return ii.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class SR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class bR{constructor(e){this.key=e,this.fc=!1}}class NR{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new vi(a=>hy(a),Ka),this._c=new Map,this.mc=new Set,this.gc=new ke(B.comparator),this.yc=new Map,this.Ic=new Eh,this.Tc={},this.Ec=new Map,this.Ac=si.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function RR(t,e){const n=LR(t);let s,i;const r=n.wc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await nR(n.localStore,_n(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await kR(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Dy(n.remoteStore,o)}return i}async function kR(t,e,n,s,i){t.Rc=(h,d,g)=>async function(_,T,I,K){let b=T.view.sc(I);b.zi&&(b=await Zf(_.localStore,T.query,!1).then(({documents:X})=>T.view.sc(X,b)));const R=K&&K.targetChanges.get(T.targetId),A=T.view.applyChanges(b,_.isPrimaryClient,R);return op(_,T.targetId,A.cc),A.snapshot}(t,h,d,g);const r=await Zf(t.localStore,e,!0),o=new CR(e,r.ir),a=o.sc(r.documents),l=Kr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);op(t,n,c.cc);const u=new SR(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function xR(t,e){const n=re(t),s=n.wc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!Ka(r,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Vc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Oy(n.remoteStore,s.targetId),$c(n,s.targetId)}).catch(ch)):($c(n,s.targetId),await Vc(n.localStore,s.targetId,!0))}async function By(t,e){const n=re(t);try{const s=await eR(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.yc.get(r);o&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?Me(o.fc):i.removedDocuments.size>0&&(Me(o.fc),o.fc=!1))}),await $y(n,s,e)}catch(s){await ch(s)}}function rp(t,e,n){const s=re(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=re(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Mu(o)&&(l=!0)}),l&&Nh(a)}(s.eventManager,e),i.length&&s.dc.nu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function DR(t,e,n){const s=re(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.yc.get(e),r=i&&i.key;if(r){let o=new ke(B.comparator);o=o.insert(r,tt.newNoDocument(r,q.min()));const a=se().add(r),l=new Ga(q.min(),new Map,new ke(oe),o,a);await By(s,l),s.gc=s.gc.remove(r),s.yc.delete(e),Rh(s)}else await Vc(s.localStore,e,!1).then(()=>$c(s,e,n)).catch(ch)}function $c(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||Vy(t,s)})}function Vy(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Oy(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Rh(t))}function op(t,e,n){for(const s of n)s instanceof Fy?(t.Ic.addReference(s.key,e),OR(t,s)):s instanceof Uy?(M("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||Vy(t,s.key)):G()}function OR(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(M("SyncEngine","New document in limbo: "+n),t.mc.add(s),Rh(t))}function Rh(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new B(Se.fromString(e)),s=t.Ac.next();t.yc.set(s,new bR(n)),t.gc=t.gc.insert(n,s),Dy(t.remoteStore,new Cn(_n(mh(n.path)),s,"TargetPurposeLimboResolution",uh.ct))}}async function $y(t,e,n){const s=re(t),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,l)=>{o.push(s.Rc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Th.Li(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,l){const c=re(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>w.forEach(l,h=>w.forEach(h.Fi,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>w.forEach(h.Bi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Hr(u))throw u;M("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ji.get(h),g=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(g);c.Ji=c.Ji.insert(h,_)}}}(s.localStore,r))}async function PR(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const s=await Ny(n.localStore,e);n.currentUser=e,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new V(k.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $y(n,s.er)}}function MR(t,e){const n=re(t),s=n.yc.get(e);if(s&&s.fc)return se().add(s.key);{let i=se();const r=n._c.get(e);if(!r)return i;for(const o of r){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function LR(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=By.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DR.bind(null,e),e.dc.nu=wR.bind(null,e.eventManager),e.dc.Pc=TR.bind(null,e.eventManager),e}class ap{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ky(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ZN(this.persistence,new XN,e.initialUser,this.serializer)}createPersistence(e){return new QN(wh.zs,this.serializer)}createSharedClientState(e){return new iR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>rp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=PR.bind(null,this.syncEngine),await _R(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new vR}createDatastore(e){const n=ky(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new lR(i));var i;return function(r,o,a,l){return new hR(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>rp(this.syncEngine,a,0),o=tp.D()?new tp:new rR,new fR(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new NR(s,i,r,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=re(e);M("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await zr(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class UR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):mn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class BR{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=sy.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{M("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(M("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ly(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Dl(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ny(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function lp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $R(t);M("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>sp(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>sp(e.remoteStore,r)),t._onlineComponents=e}function VR(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function $R(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!VR(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await Dl(t,new ap)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Dl(t,new ap);return t._offlineComponents}async function jR(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await lp(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await lp(t,new FR))),t._onlineComponents}async function HR(t){const e=await jR(t),n=e.eventManager;return n.onListen=RR.bind(null,e.syncEngine),n.onUnlisten=xR.bind(null,e.syncEngine),n}function KR(t,e,n={}){const s=new is;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new UR({next:h=>{r.enqueueAndForget(()=>ER(i,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new V(k.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new V(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new IR(mh(o.path),c,{includeMetadataChanges:!0,Ku:!0});return AR(i,u)}(await HR(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function jy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const cp=new Map;/**
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
 */function zR(t,e,n){if(!n)throw new V(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qR(t,e,n,s){if(e===!0&&s===!0)throw new V(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function up(t){if(!B.isDocumentKey(t))throw new V(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function WR(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function jc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=WR(t);throw new V(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class hp{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new V(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class kh{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Eb;switch(n.type){case"firstParty":return new Cb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=cp.get(e);n&&(M("ComponentProvider","Removing Datastore"),cp.delete(e),n.terminate())}(this),Promise.resolve()}}function GR(t,e,n,s={}){var i;const r=(t=jc(t,kh))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=Je.MOCK_USER;else{a=QE(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new V(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Je(c)}t._authCredentials=new wb(new ny(a,l))}}/**
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
 */class fn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class xh{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xh(this.firestore,e,this._query)}}class Ir extends xh{constructor(e,n,s){super(e,n,mh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new B(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function Hy(t,e,...n){if(t=hi(t),arguments.length===1&&(e=sy.A()),zR("doc","path",e),t instanceof kh){const s=Se.fromString(e,...n);return up(s),new fn(t,null,new B(s))}{if(!(t instanceof fn||t instanceof Ir))throw new V(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return up(s),new fn(t.firestore,t instanceof Ir?t.converter:null,new B(s))}}/**
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
 */class QR{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new xy(this,"async_queue_retry"),this.Xc=()=>{const n=xl();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=xl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=xl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new is;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Hr(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw mn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=bh.createAndSchedule(this,e,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&G()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Ky extends kh{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new QR,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zy(this),this._firestoreClient.terminate()}}function YR(t,e){const n=typeof t=="object"?t:o0(),s=typeof t=="string"?t:e||"(default)",i=s0(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=WE("firestore");r&&GR(i,...r)}return i}function XR(t){return t._firestoreClient||zy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zy(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new Fb(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,jy(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new BR(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class ia{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ia(lt.fromBase64String(e))}catch(n){throw new V(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ia(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class qy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class JR{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}const ZR=new RegExp("[~\\*/\\[\\]]");function ek(t,e,n){if(e.search(ZR)>=0)throw dp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qy(...e.split("."))._internalPath}catch{throw dp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dp(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new V(k.INVALID_ARGUMENT,a+t+l)}/**
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
 */class Wy{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tk extends Wy{data(){return super.data()}}function Gy(t,e){return typeof e=="string"?ek(t,e):e instanceof qy?e._internalPath:e._delegate._internalPath}class nk{convertValue(e,n="none"){switch(ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ja(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new JR(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=dh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Er(e));default:return null}}convertTimestamp(e){const n=Mn(e);return new gt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Se.fromString(e);Me(by(s));const i=new wr(s.get(1),s.get(3)),r=new B(s.popFirst(5));return i.isEqual(n)||mn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class sk{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qy extends Wy{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ik(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Gy("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ik extends Qy{data(e={}){return super.data(e)}}/**
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
 */function Yy(t){t=jc(t,fn);const e=jc(t.firestore,Ky);return KR(XR(e),t._key).then(n=>ok(e,t,n))}class rk extends nk{constructor(e){super(),this.firestore=e}convertBytes(e){return new ia(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new fn(this.firestore,null,n)}}function ok(t,e,n){const s=n.docs.get(e._key),i=new rk(t);return new Qy(t,i,e._key,s,new sk(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){yi=n})(di),en(new Vt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Ky(new Tb(n.getProvider("auth-internal")),new bb(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new V(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),wt(Df,"3.13.0",t),wt(Df,"3.13.0","esm2017")})();/**
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
 */const Xy="firebasestorage.googleapis.com",ak="storageBucket",lk=2*60*1e3,ck=10*60*1e3;/**
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
 */class rn extends vn{constructor(e,n,s=0){super(Ol(e),`Firebase Storage: ${n} (${Ol(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ol(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sn||(sn={}));function Ol(t){return"storage/"+t}function uk(){const t="An unknown error occurred, please check the error payload for server response.";return new rn(sn.UNKNOWN,t)}function hk(){return new rn(sn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dk(){return new rn(sn.CANCELED,"User canceled the upload/download.")}function fk(t){return new rn(sn.INVALID_URL,"Invalid URL '"+t+"'.")}function pk(t){return new rn(sn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function fp(t){return new rn(sn.INVALID_ARGUMENT,t)}function Jy(){return new rn(sn.APP_DELETED,"The Firebase app was deleted.")}function gk(t){return new rn(sn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Lt.makeFromUrl(e,n)}catch{return new Lt(e,"")}if(s.path==="")return s;throw pk(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(A){A.path_=decodeURIComponent(A.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},T=n===Xy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",K=new RegExp(`^https?://${T}/${i}/${I}`,"i"),R=[{regex:a,indices:l,postModify:r},{regex:g,indices:_,postModify:c},{regex:K,indices:{bucket:1,path:2},postModify:c}];for(let A=0;A<R.length;A++){const X=R[A],fe=X.regex.exec(e);if(fe){const Ie=fe[X.indices.bucket];let Ne=fe[X.indices.path];Ne||(Ne=""),s=new Lt(Ie,Ne),X.postModify(s);break}}if(s==null)throw fk(e);return s}}class mk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function _k(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...I){c||(c=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(g,l())},I)}function d(){r&&clearTimeout(r)}function g(I,...K){if(c){d();return}if(I){d(),u.call(null,I,...K);return}if(l()||o){d(),u.call(null,I,...K);return}s<64&&(s*=2);let R;a===1?(a=2,R=0):R=(s+Math.random())*1e3,h(R)}let _=!1;function T(I){_||(_=!0,d(),!c&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,T(!0)},n),T}function yk(t){t(!1)}/**
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
 */function vk(t){return t!==void 0}function pp(t,e,n,s){if(s<e)throw fp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw fp(`Invalid value for '${t}'. Expected ${n} or less.`)}function Ak(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ra;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ra||(ra={}));/**
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
 */function Ek(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class wk{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new _o(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ra.NO_ERROR,l=r.getStatus();if(!a||Ek(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ra.ABORT;s(!1,new _o(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new _o(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());vk(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=uk();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Jy():dk();o(l)}else{const l=hk();o(l)}};this.canceled_?n(!1,new _o(!1,null,!0)):this.backoffId_=_k(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&yk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _o{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Tk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ik(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ck(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Sk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bk(t,e,n,s,i,r,o=!0){const a=Ak(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return Ck(c,e),Tk(c,n),Ik(c,r),Sk(c,s),new wk(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Nk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Rk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class oa{constructor(e,n){this._service=e,n instanceof Lt?this._location=n:this._location=Lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new oa(e,n)}get root(){const e=new Lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rk(this._location.path)}get storage(){return this._service}get parent(){const e=Nk(this._location.path);if(e===null)return null;const n=new Lt(this._location.bucket,e);return new oa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw gk(e)}}function gp(t,e){const n=e==null?void 0:e[ak];return n==null?null:Lt.makeFromBucketSpec(n,t)}class kk{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Xy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lk,this._maxUploadRetryTime=ck,this._requests=new Set,i!=null?this._bucket=Lt.makeFromBucketSpec(i,this._host):this._bucket=gp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Lt.makeFromBucketSpec(this._url,e):this._bucket=gp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new oa(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new mk(Jy());{const o=bk(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const mp="@firebase/storage",_p="0.11.2";/**
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
 */const xk="storage";function Dk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new kk(n,s,i,e,di)}function Ok(){en(new Vt(xk,Dk,"PUBLIC").setMultipleInstances(!0)),wt(mp,_p,""),wt(mp,_p,"esm2017")}Ok();function Pk(t,{firebaseApp:e,modules:n=[]}){t.provide(RT,e);for(const s of n)t.use(s.bind(null,e))}const Zy=Cg({apiKey:"AIzaSyC-f-6yHwuDduN6RGymA_0L2oOgsIJf7Ks",authDomain:"stories-img-base.firebaseapp.com",projectId:"stories-img-base",storageBucket:"stories-img-base.appspot.com",messagingSenderId:"966838828662",appId:"1:966838828662:web:675f0f071604f858956957",measurementId:"G-8LC1GVK66H"}),ev=YR(Zy);const tv="stories",Mk="storyIdList";async function Lk(){const t=Hy(ev,tv,Mk);try{const e=await Yy(t);if(!e.exists())throw new Error("No Such StoryIdList");return e.data()}catch(e){console.error(e)}}async function Fk(t){const e=Hy(ev,tv,t);try{const n=await Yy(e);if(!n.exists())throw new Error("No Such StoryIdList");return n.data()}catch(n){console.error(n)}}const ce=ua({storyIdList:[],stories:[],index:-1,isLoading:!0,isCurrentStoryReady:!1,isDisplaying:!0}),Bi=tu(ce),At=Fn(()=>ce.stories[ce.index]||{}),Uk=Fn(()=>ce.isDisplaying),nv=Fn(()=>ce.isCurrentStoryReady),Bk=async()=>{if(!(Array.isArray(ce.storyIdList)&&ce.storyIdList.length)){ce.isLoading=!0;try{const t=await Lk(),{idList:e}=t;e&&(ce.storyIdList=e)}catch(t){console.error(t)}finally{ce.isLoading=!1}}};async function Vk(){if(!(Array.isArray(ce.storyIdList)&&ce.storyIdList.length===0)){for(let t=0;t<ce.storyIdList.length;t++)try{const e=ce.storyIdList[t],n=await Fk(e);if(!n)throw new Error(`No Such ${e} Story`);ce.stories[t]=n}catch(e){console.error(e)}ce.index=0}}const $k=t=>ce.stories[ce.index].imageUrl===ce.stories[ce.index+t].imageUrl,Hc=()=>{ce.index+=1,ce.index===ce.storyIdList.length?(os(!1),setTimeout(()=>{ce.index=0})):sv(-1)},yp=()=>{ce.index-=1,ce.index===-1?(os(!1),setTimeout(()=>{ce.index=0})):sv(1)};function Kc(t){ce.isDisplaying=t}async function sv(t){os(!1),await No(()=>{$k(t)&&(console.log("isStoryImageSameAsPrev",t),os(!1),No(()=>{os(!0)}))})}const os=t=>{ce.isCurrentStoryReady=t},iv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA+vAAAPrwHWpCJtAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAZVQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxy7YmgAAAIZ0Uk5TAAECAwQFBwgJDQ4PEBMUFxwdISIjJScoKywtLi8yMzQ1Njc6PUFERkdISktMTk9TVFVbXV9hYmRlZmdobHN0d3l6e31+gYWIiY+Qk5WWmpudpKWnqKusrq+wsrO0trq+wMHEx8jKy8zNz9LV19nb3N3e3+Dj5ujt7u/w8fLz9PX5+vv8/f4JeH4OAAAHR0lEQVR42u3deVOVBRjGYZUotTI3stJcALfEXCs1Sy1DlDC3LLc8SYWKZlGKaKGiPp+7/x1HOTMNI+993R/h+V3DgcPhZc6cV2bvfXJo8Psrtx78c/PnM8cO7Fo6x3L2+qbBsXpmowO9HS6TsM7d5ybruRs/udV5mr55O2/VCzay0Ykava3X6yVr9bhSY7d+uKaxCytdqplf/Y/U9PZon2M1cAsv1rQ31OleTVvXjWpjrUUu1qxtmqi2NuYbgUZt7+Nqc5N9rtacbWi7f9VD7wo1ZsvvVhGQuwWjVQTkbu75KgKC119FQPB6qghIXqsIiH4HqIqA5O8AR4qA5G2rIiB4HTeKgOTtqCIgeaeKgOhXgPEiIHm9VQQkb6AIiN5oEZC8ZVUEJG97ERC9/UVA9PqLgOidKAKid6kIiN61IiB6t4uA6I0VAdEbLgKi90MREL2hIiB6XxcB0dtTBETvoyIgem9OEZC9y0VA9L4oAqL3bhGQvd8JyN7RIiB63UVA9i4SkL1VTwnI3ukiIHpdUwRk73gREL3F9wnIXt8TArJ3sAjwkwABwZt/lYDsLblDQPbW3iMge90EEEAAAQQQQEDs1hFAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBAwS+eZogQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAY0WMEEAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEBAc7eGAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIImJVbTQABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEBAkoC7BBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEENGcfEkAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEDA/yhgi0NnC/j3fYfOFvDn2w6dLeDyaw6dLWDQncMFfObO2QIernDnbAFnnTlcwBpnzhbwkyuHC1jvytkCfnHkcAGbHTlbwHdunC3g9lw3zhaw2omzBRx24WwBvzpwtoCn7zhwtoCP3TdbwOfOmy3gG9fNFnDccbMFnHfbbAG/OW22gL9dFgDzEmC+CTQ/Bpo3giyrv7eCw/v7ZVB4f78Ozu7vAyHh/X0kLLy/D4WG9/ex8Oz+/jAkvL8/DQvv749Ds/v78/Dw/h4Qkd3fI2LC+3tIVHZ/j4nL7u9BkeH9PSo2u7+HRWf397j47P7+YUR2f/8yJry/fxqlv+lv+pv+pr/pb/qb/qa/6W/6m/42U1utv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7662+vZv8J/fXXX3/99ddff/31119//fXXX3/99ddff/2buDX666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//qa/6W/6m/6mv+lv+pv+pr/pb/rbjG2t/vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//rOz/z399ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/9Z+PW6a+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vqb/qa/6W/6m/6mv+lv+pv+pr/N6Lr1119//fXXX/+4ef5n9pbc0T9586/qH73T+kfvoP7R63uif/IW39c/esf1j17XlP5+AtA/dque6h+9i/pHr1v/7B3TP3u39I/eCv2z96X+2WvpH723pvSP3hb9s7dH/+wd1j97Q/pn70f9szesf/bG9M/ebf2zd03/7F3SP3sn9M9ev/7Z269/9rbrn71l+odvVP/sDeifvV79s9cxrn/2TumfvR36h78G3NA/e9v0z97cEf2zt0n/8LX0z16P/uHr1z/8+8Dz+mdvwaj+2Vt+V//sbXisf/b2ti1gss/VGvV+0ER7/cdWulmz1tXWr4Vai1ysaVvYxlNjhzrdq3mbd2Sa+R/tc6xmbv20Hhhwwct/c7f1+ktf/XtcqdGvAztf+PjgkY1O1PR17j43+fz64ye995OxNzZ/+9ez9UcHejtcJmgffPrV4Nkrfzy4f7N15uiBXUtdZCb2HyDq9i+SDCuqAAAAAElFTkSuQmCC";function jk(t){const{currentDisplayIndex:e,duration:n,isCurrentStoryReady:s,storyIndex:i}=sA(t),r=Ti(-1),o=Ti(0),a=Ti(0),l=Ti(0),c=Ti(0),u=Fn(()=>e.value===i.value);function h(){a.value||(a.value=new Date);const g=new Date-a.value-c.value;o.value=g/n.value*100,o.value<100?r.value=requestAnimationFrame(h):(d(),o.value=100,Hc())}function d(){cancelAnimationFrame(r.value),r.value=-1}return Ls(s,g=>{o.value=0,a.value=0,l.value=0,c.value=0,g&&u.value?(Kc(!0),r.value=requestAnimationFrame(h)):d()}),Ls(Uk,g=>{console.log("watch isDisplaying"),!g&&u.value?(console.log("pause"),d(),l.value=new Date):g&&u.value&&(console.log("continue"),c.value+=new Date-l.value,r.value=requestAnimationFrame(h))}),{isCurrentStoryIndex:u,progress:o,pauseProgress:d}}const Ht=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Hk={__name:"ProgressItem",props:{currentDisplayIndex:{type:Number},duration:{type:Number},isCurrentStoryReady:{type:Boolean,default:!1},storyIndex:{type:Number}},setup(t){const e=t,{isCurrentStoryIndex:n,progress:s}=jk(e);return(i,r)=>(L(),$("div",null,[_t("div",{class:oi(["progress-item",pe(n)&&"active"]),style:Sr({width:`${pe(s)}%`})},null,6)]))}},Kk=Ht(Hk,[["__scopeId","data-v-c9d435d5"]]);const zk={class:"story-progress"},qk={__name:"StoryProgress",setup(t){DE(n=>({"1c71f39e":`repeat(${e.value}, 1fr)`}));const e=Fn(()=>Bi.stories.length);return(n,s)=>(L(),$("div",zk,[(L(!0),$(Be,null,Dn(pe(Bi).stories,(i,r)=>(L(),cn(Kk,{key:i.id,"current-display-index":pe(Bi).index,duration:i.duration,"is-current-story-ready":pe(nv),"story-index":r,class:oi(["story-progress__item",pe(Bi).index>r&&"story-progress__item--displayed"])},null,8,["current-display-index","duration","is-current-story-ready","story-index","class"]))),128))]))}},Wk=Ht(qk,[["__scopeId","data-v-7dbc3bef"]]),Gk="/stories-base/avatar.png";const Qk={},Yk={src:Gk,alt:"avatar",class:"avatar"};function Xk(t,e){return L(),$("img",Yk)}const Jk=Ht(Qk,[["render",Xk],["__scopeId","data-v-29e7a8a0"]]);const Zk={class:"about-story"},e1={key:0,class:"about-story__title"},t1={key:1,class:"about-story__subtitle"},n1={key:2,class:"about-story__info-wrap"},s1={__name:"AboutStory",props:{title:{type:String,default:""},infos:{type:Array,default:()=>[]},subTitle:{type:String,default:""}},setup(t){const e=t;return(n,s)=>(L(),$("div",Zk,[e.title?(L(),$("h1",e1,st(e.title),1)):we("",!0),e.subTitle?(L(),$("h2",t1,st(e.subTitle),1)):we("",!0),e.infos.length?(L(),$("div",n1,[(L(!0),$(Be,null,Dn(e.infos,(i,r)=>(L(),$("li",{key:r,class:"about-story__info-item"},st(i),1))),128))])):we("",!0)]))}},i1=Ht(s1,[["__scopeId","data-v-5f64f499"]]),r1="/stories-base/assets/email-10aa3ad7.png",rv="/stories-base/assets/github-746a99c7.png",o1="/stories-base/assets/linkedin-d2335ed0.png";const a1={class:"cover-story"},l1={key:0,class:"cover-story__title"},c1={key:1,class:"cover-story__subtitle"},u1={key:2,class:"cover-story__info-wrap"},h1=["href"],d1=["alt"],f1=["alt"],p1=["alt"],g1={key:3,class:"cover-story__intro-wrap"},m1={__name:"CoverStory",props:{title:{type:String,default:""},infos:{type:Array,default:()=>[]},intros:{type:Array,default:()=>[]},subTitle:{type:String,default:""}},setup(t){const e=t;function n(s){return s.icon==="email"?"mailto: ":""}return(s,i)=>(L(),$("div",a1,[e.title?(L(),$("h1",l1,st(e.title),1)):we("",!0),e.subTitle?(L(),$("h2",c1,st(e.subTitle),1)):we("",!0),t.infos.length?(L(),$("div",u1,[(L(!0),$(Be,null,Dn(e.infos,(r,o)=>(L(),$("div",{key:o,class:"cover-story__info-item"},[_t("a",{href:`${n(r)}${r.url}`,role:"button",target:"_blank"},[r.icon==="email"?(L(),$("img",{key:0,src:r1,alt:`contact-${r.icon}-icon`,class:"cover-story__icon"},null,8,d1)):r.icon==="github"?(L(),$("img",{key:1,src:rv,alt:`contact-${r.icon}-icon`,class:"cover-story__icon"},null,8,f1)):r.icon==="linkedin"?(L(),$("img",{key:2,src:o1,alt:`contact-${r.icon}-icon`,class:"cover-story__icon"},null,8,p1)):we("",!0)],8,h1)]))),128))])):we("",!0),t.intros.length?(L(),$("div",g1,[(L(!0),$(Be,null,Dn(e.intros,(r,o)=>(L(),$("li",{key:o,class:"cover-story__intro-item"},st(r),1))),128))])):we("",!0)]))}},_1=Ht(m1,[["__scopeId","data-v-ab86a03b"]]);const y1={class:"cover-story"},v1={key:0,class:"cover-story__title"},A1={key:1,class:"cover-story__subtitle"},E1={__name:"ContactStory",props:{title:{type:String,default:""},subTitle:{type:String,default:""}},setup(t){const e=t;return(n,s)=>(L(),$("div",y1,[e.title?(L(),$("h1",v1,st(e.title),1)):we("",!0),e.subTitle?(L(),$("h2",A1,st(e.subTitle),1)):we("",!0)]))}},w1=Ht(E1,[["__scopeId","data-v-fa77695e"]]);const T1={},I1={class:"loading"};function C1(t,e){return L(),$("div",I1)}const S1=Ht(T1,[["render",C1],["__scopeId","data-v-41436e07"]]);const b1={class:"skill-story"},N1={key:0,class:"skill-story__title"},R1={key:1,class:"skill-story__subtitle"},k1={key:2,class:"skill-story__info-wrap"},x1={class:"skill-story__info-title"},D1={__name:"SkillStory",props:{title:{type:String,default:""},infos:{type:Array,default:()=>[]},subTitle:{type:String,default:""}},setup(t){const e=t,n=Fn(()=>e.infos.filter(s=>s.skills.length));return(s,i)=>(L(),$("div",b1,[e.title?(L(),$("h1",N1,st(e.title),1)):we("",!0),e.subTitle?(L(),$("h2",R1,st(e.subTitle),1)):we("",!0),t.infos.length?(L(),$("div",k1,[(L(!0),$(Be,null,Dn(n.value,(r,o)=>(L(),$("div",{key:o,class:"skill-story__info-item"},[_t("h2",x1,st(r.title),1),_t("ul",null,[(L(!0),$(Be,null,Dn(r.skills,(a,l)=>(L(),$("li",{key:l,class:"skill-story__info-skill"},st(a),1))),128))])]))),128))])):we("",!0)]))}},O1=Ht(D1,[["__scopeId","data-v-65de4327"]]);const P1=t=>(pA("data-v-af80b6e0"),t=t(),gA(),t),M1={class:"project-story"},L1={key:0,class:"project-story__title"},F1={key:1,class:"project-story__subtitle"},U1={key:2,class:"project-story__info-wrap"},B1={class:"project-story__info-title"},V1=["href"],$1=P1(()=>_t("img",{src:rv,class:"project-story__icon"},null,-1)),j1=[$1],H1={__name:"ProjectStory",props:{title:{type:String,default:""},infos:{type:Array,default:()=>[]},subTitle:{type:String,default:""}},setup(t){const e=t;return(n,s)=>(L(),$("div",M1,[e.title?(L(),$("h1",L1,st(e.title),1)):we("",!0),e.subTitle?(L(),$("h2",F1,st(e.subTitle),1)):we("",!0),t.infos.length?(L(),$("div",U1,[(L(!0),$(Be,null,Dn(t.infos,(i,r)=>(L(),$("div",{key:r,class:"project-story__info-item"},[_t("h2",B1,[ug(st(i.name)+" ",1),i.link?(L(),$("a",{key:0,href:i.link,role:"button",target:"_blank",class:"project-story__link"},j1,8,V1)):we("",!0)]),_t("ul",null,[(L(!0),$(Be,null,Dn(i.techs,(o,a)=>(L(),$("li",{key:a,class:"project-story__info-project"},st(o),1))),128))])]))),128))])):we("",!0)]))}},K1=Ht(H1,[["__scopeId","data-v-af80b6e0"]]);const z1=["src"],q1={key:5,class:"loading-container"},W1={__name:"StoryImage",setup(t){function e(){console.log("imageLoaded"),os(!1),No(()=>{os(!0)})}return(n,s)=>(L(),$("div",{onMousedown:s[0]||(s[0]=i=>pe(Kc)(!1)),onMouseup:s[1]||(s[1]=i=>pe(Kc)(!0)),class:"story-image"},[Et(Jk),pe(At).component==="CoverStory"?(L(),cn(_1,wi(Ss({key:0},pe(At))),null,16)):we("",!0),pe(At).component==="AboutStory"?(L(),cn(i1,wi(Ss({key:1},pe(At))),null,16)):we("",!0),pe(At).component==="SkillStory"?(L(),cn(O1,wi(Ss({key:2},pe(At))),null,16)):we("",!0),pe(At).component==="ProjectStory"?(L(),cn(K1,wi(Ss({key:3},pe(At))),null,16)):we("",!0),pe(At).component==="ContactStory"?(L(),cn(w1,wi(Ss({key:4},pe(At))),null,16)):we("",!0),(L(),cn(SA,null,[IA(_t("img",{src:pe(At).imageUrl,alt:"story_image",class:"story-image__img",onLoad:e},null,40,z1),[[OE,pe(At).imageUrl]])],1024)),pe(nv)?we("",!0):(L(),$("div",q1,[Et(S1)]))],32))}},G1=Ht(W1,[["__scopeId","data-v-6bf13aa8"]]);const Q1={class:"story-container"},Y1=_t("img",{src:iv,alt:"prev-arrow",class:"prev-icon"},null,-1),X1=[Y1],J1=_t("img",{src:iv,alt:"next-arrow",class:"next-icon"},null,-1),Z1=[J1],ex={__name:"StoryContainer",setup(t){const e=Fn(()=>Object.keys(At).length>0);return(n,s)=>(L(),$("div",Q1,[_t("button",{class:"story-btn prev-btn",onClick:s[0]||(s[0]=(...i)=>pe(yp)&&pe(yp)(...i))},X1),!pe(Bi).isLoading&&e.value?(L(),cn(G1,{key:0,class:"story-image"})):we("",!0),_t("button",{class:"story-btn next-btn",onClick:s[1]||(s[1]=(...i)=>pe(Hc)&&pe(Hc)(...i))},Z1),Et(Wk)]))}};const tx={__name:"App",setup(t){return ga(async()=>{await Bk(),await Vk()}),(e,n)=>(L(),$("div",null,[Et(ex)]))}},nx=Ht(tx,[["__scopeId","data-v-2de36890"]]),ov=LE(nx);ov.use(Pk,{firebaseApp:Zy});ov.mount("#app");
