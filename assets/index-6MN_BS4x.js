(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function vS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Zd={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function ES(){if(u_)return Nl;u_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var g in l)g!=="key"&&(c[g]=l[g])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:d,ref:l!==void 0?l:null,props:c}}return Nl.Fragment=t,Nl.jsx=i,Nl.jsxs=i,Nl}var c_;function TS(){return c_||(c_=1,Zd.exports=ES()),Zd.exports}var ht=TS(),Jd={exports:{}},Tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function SS(){if(h_)return Tt;h_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),x=Symbol.iterator;function q(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,X={};function rt(D,G,et){this.props=D,this.context=G,this.refs=X,this.updater=et||$}rt.prototype.isReactComponent={},rt.prototype.setState=function(D,G){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,G,"setState")},rt.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ut(){}ut.prototype=rt.prototype;function nt(D,G,et){this.props=D,this.context=G,this.refs=X,this.updater=et||$}var lt=nt.prototype=new ut;lt.constructor=nt,Z(lt,rt.prototype),lt.isPureReactComponent=!0;var yt=Array.isArray;function at(){}var A={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function C(D,G,et){var it=et.ref;return{$$typeof:r,type:D,key:G,ref:it!==void 0?it:null,props:et}}function M(D,G){return C(D.type,G,D.props)}function O(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function U(D){var G={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(et){return G[et]})}var R=/\/+/g;function ne(D,G){return typeof D=="object"&&D!==null&&D.key!=null?U(""+D.key):G.toString(36)}function de(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(at,at):(D.status="pending",D.then(function(G){D.status==="pending"&&(D.status="fulfilled",D.value=G)},function(G){D.status==="pending"&&(D.status="rejected",D.reason=G)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function H(D,G,et,it,mt){var vt=typeof D;(vt==="undefined"||vt==="boolean")&&(D=null);var Nt=!1;if(D===null)Nt=!0;else switch(vt){case"bigint":case"string":case"number":Nt=!0;break;case"object":switch(D.$$typeof){case r:case t:Nt=!0;break;case S:return Nt=D._init,H(Nt(D._payload),G,et,it,mt)}}if(Nt)return mt=mt(D),Nt=it===""?"."+ne(D,0):it,yt(mt)?(et="",Nt!=null&&(et=Nt.replace(R,"$&/")+"/"),H(mt,G,et,"",function(qn){return qn})):mt!=null&&(O(mt)&&(mt=M(mt,et+(mt.key==null||D&&D.key===mt.key?"":(""+mt.key).replace(R,"$&/")+"/")+Nt)),G.push(mt)),1;Nt=0;var ie=it===""?".":it+":";if(yt(D))for(var qt=0;qt<D.length;qt++)it=D[qt],vt=ie+ne(it,qt),Nt+=H(it,G,et,vt,mt);else if(qt=q(D),typeof qt=="function")for(D=qt.call(D),qt=0;!(it=D.next()).done;)it=it.value,vt=ie+ne(it,qt++),Nt+=H(it,G,et,vt,mt);else if(vt==="object"){if(typeof D.then=="function")return H(de(D),G,et,it,mt);throw G=String(D),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return Nt}function tt(D,G,et){if(D==null)return D;var it=[],mt=0;return H(D,it,"","",function(vt){return G.call(et,vt,mt++)}),it}function ft(D){if(D._status===-1){var G=D._result;G=G(),G.then(function(et){(D._status===0||D._status===-1)&&(D._status=1,D._result=et)},function(et){(D._status===0||D._status===-1)&&(D._status=2,D._result=et)}),D._status===-1&&(D._status=0,D._result=G)}if(D._status===1)return D._result.default;throw D._result}var At=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},Pt={map:tt,forEach:function(D,G,et){tt(D,function(){G.apply(this,arguments)},et)},count:function(D){var G=0;return tt(D,function(){G++}),G},toArray:function(D){return tt(D,function(G){return G})||[]},only:function(D){if(!O(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return Tt.Activity=b,Tt.Children=Pt,Tt.Component=rt,Tt.Fragment=i,Tt.Profiler=l,Tt.PureComponent=nt,Tt.StrictMode=a,Tt.Suspense=y,Tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,Tt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return A.H.useMemoCache(D)}},Tt.cache=function(D){return function(){return D.apply(null,arguments)}},Tt.cacheSignal=function(){return null},Tt.cloneElement=function(D,G,et){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var it=Z({},D.props),mt=D.key;if(G!=null)for(vt in G.key!==void 0&&(mt=""+G.key),G)!w.call(G,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&G.ref===void 0||(it[vt]=G[vt]);var vt=arguments.length-2;if(vt===1)it.children=et;else if(1<vt){for(var Nt=Array(vt),ie=0;ie<vt;ie++)Nt[ie]=arguments[ie+2];it.children=Nt}return C(D.type,mt,it)},Tt.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},Tt.createElement=function(D,G,et){var it,mt={},vt=null;if(G!=null)for(it in G.key!==void 0&&(vt=""+G.key),G)w.call(G,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(mt[it]=G[it]);var Nt=arguments.length-2;if(Nt===1)mt.children=et;else if(1<Nt){for(var ie=Array(Nt),qt=0;qt<Nt;qt++)ie[qt]=arguments[qt+2];mt.children=ie}if(D&&D.defaultProps)for(it in Nt=D.defaultProps,Nt)mt[it]===void 0&&(mt[it]=Nt[it]);return C(D,vt,mt)},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(D){return{$$typeof:g,render:D}},Tt.isValidElement=O,Tt.lazy=function(D){return{$$typeof:S,_payload:{_status:-1,_result:D},_init:ft}},Tt.memo=function(D,G){return{$$typeof:v,type:D,compare:G===void 0?null:G}},Tt.startTransition=function(D){var G=A.T,et={};A.T=et;try{var it=D(),mt=A.S;mt!==null&&mt(et,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(at,At)}catch(vt){At(vt)}finally{G!==null&&et.types!==null&&(G.types=et.types),A.T=G}},Tt.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},Tt.use=function(D){return A.H.use(D)},Tt.useActionState=function(D,G,et){return A.H.useActionState(D,G,et)},Tt.useCallback=function(D,G){return A.H.useCallback(D,G)},Tt.useContext=function(D){return A.H.useContext(D)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(D,G){return A.H.useDeferredValue(D,G)},Tt.useEffect=function(D,G){return A.H.useEffect(D,G)},Tt.useEffectEvent=function(D){return A.H.useEffectEvent(D)},Tt.useId=function(){return A.H.useId()},Tt.useImperativeHandle=function(D,G,et){return A.H.useImperativeHandle(D,G,et)},Tt.useInsertionEffect=function(D,G){return A.H.useInsertionEffect(D,G)},Tt.useLayoutEffect=function(D,G){return A.H.useLayoutEffect(D,G)},Tt.useMemo=function(D,G){return A.H.useMemo(D,G)},Tt.useOptimistic=function(D,G){return A.H.useOptimistic(D,G)},Tt.useReducer=function(D,G,et){return A.H.useReducer(D,G,et)},Tt.useRef=function(D){return A.H.useRef(D)},Tt.useState=function(D){return A.H.useState(D)},Tt.useSyncExternalStore=function(D,G,et){return A.H.useSyncExternalStore(D,G,et)},Tt.useTransition=function(){return A.H.useTransition()},Tt.version="19.2.0",Tt}var f_;function im(){return f_||(f_=1,Jd.exports=SS()),Jd.exports}var Bn=im();const Hl=vS(Bn);var Wd={exports:{}},Ol={},tp={exports:{}},ep={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function AS(){return d_||(d_=1,(function(r){function t(H,tt){var ft=H.length;H.push(tt);t:for(;0<ft;){var At=ft-1>>>1,Pt=H[At];if(0<l(Pt,tt))H[At]=tt,H[ft]=Pt,ft=At;else break t}}function i(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var tt=H[0],ft=H.pop();if(ft!==tt){H[0]=ft;t:for(var At=0,Pt=H.length,D=Pt>>>1;At<D;){var G=2*(At+1)-1,et=H[G],it=G+1,mt=H[it];if(0>l(et,ft))it<Pt&&0>l(mt,et)?(H[At]=mt,H[it]=ft,At=it):(H[At]=et,H[G]=ft,At=G);else if(it<Pt&&0>l(mt,ft))H[At]=mt,H[it]=ft,At=it;else break t}}return tt}function l(H,tt){var ft=H.sortIndex-tt.sortIndex;return ft!==0?ft:H.id-tt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();r.unstable_now=function(){return d.now()-g}}var y=[],v=[],S=1,b=null,x=3,q=!1,$=!1,Z=!1,X=!1,rt=typeof setTimeout=="function"?setTimeout:null,ut=typeof clearTimeout=="function"?clearTimeout:null,nt=typeof setImmediate<"u"?setImmediate:null;function lt(H){for(var tt=i(v);tt!==null;){if(tt.callback===null)a(v);else if(tt.startTime<=H)a(v),tt.sortIndex=tt.expirationTime,t(y,tt);else break;tt=i(v)}}function yt(H){if(Z=!1,lt(H),!$)if(i(y)!==null)$=!0,at||(at=!0,U());else{var tt=i(v);tt!==null&&de(yt,tt.startTime-H)}}var at=!1,A=-1,w=5,C=-1;function M(){return X?!0:!(r.unstable_now()-C<w)}function O(){if(X=!1,at){var H=r.unstable_now();C=H;var tt=!0;try{t:{$=!1,Z&&(Z=!1,ut(A),A=-1),q=!0;var ft=x;try{e:{for(lt(H),b=i(y);b!==null&&!(b.expirationTime>H&&M());){var At=b.callback;if(typeof At=="function"){b.callback=null,x=b.priorityLevel;var Pt=At(b.expirationTime<=H);if(H=r.unstable_now(),typeof Pt=="function"){b.callback=Pt,lt(H),tt=!0;break e}b===i(y)&&a(y),lt(H)}else a(y);b=i(y)}if(b!==null)tt=!0;else{var D=i(v);D!==null&&de(yt,D.startTime-H),tt=!1}}break t}finally{b=null,x=ft,q=!1}tt=void 0}}finally{tt?U():at=!1}}}var U;if(typeof nt=="function")U=function(){nt(O)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,ne=R.port2;R.port1.onmessage=O,U=function(){ne.postMessage(null)}}else U=function(){rt(O,0)};function de(H,tt){A=rt(function(){H(r.unstable_now())},tt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(H){switch(x){case 1:case 2:case 3:var tt=3;break;default:tt=x}var ft=x;x=tt;try{return H()}finally{x=ft}},r.unstable_requestPaint=function(){X=!0},r.unstable_runWithPriority=function(H,tt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ft=x;x=H;try{return tt()}finally{x=ft}},r.unstable_scheduleCallback=function(H,tt,ft){var At=r.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?At+ft:At):ft=At,H){case 1:var Pt=-1;break;case 2:Pt=250;break;case 5:Pt=1073741823;break;case 4:Pt=1e4;break;default:Pt=5e3}return Pt=ft+Pt,H={id:S++,callback:tt,priorityLevel:H,startTime:ft,expirationTime:Pt,sortIndex:-1},ft>At?(H.sortIndex=ft,t(v,H),i(y)===null&&H===i(v)&&(Z?(ut(A),A=-1):Z=!0,de(yt,ft-At))):(H.sortIndex=Pt,t(y,H),$||q||($=!0,at||(at=!0,U()))),H},r.unstable_shouldYield=M,r.unstable_wrapCallback=function(H){var tt=x;return function(){var ft=x;x=tt;try{return H.apply(this,arguments)}finally{x=ft}}}})(ep)),ep}var p_;function bS(){return p_||(p_=1,tp.exports=AS()),tp.exports}var np={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function wS(){if(m_)return $e;m_=1;var r=im();function t(y){var v="https://react.dev/errors/"+y;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)v+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+y+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(y,v,S){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:y,containerInfo:v,implementation:S}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,v){if(y==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,$e.createPortal=function(y,v){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return c(y,v,null,S)},$e.flushSync=function(y){var v=d.T,S=a.p;try{if(d.T=null,a.p=2,y)return y()}finally{d.T=v,a.p=S,a.d.f()}},$e.preconnect=function(y,v){typeof y=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,a.d.C(y,v))},$e.prefetchDNS=function(y){typeof y=="string"&&a.d.D(y)},$e.preinit=function(y,v){if(typeof y=="string"&&v&&typeof v.as=="string"){var S=v.as,b=g(S,v.crossOrigin),x=typeof v.integrity=="string"?v.integrity:void 0,q=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;S==="style"?a.d.S(y,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:q}):S==="script"&&a.d.X(y,{crossOrigin:b,integrity:x,fetchPriority:q,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},$e.preinitModule=function(y,v){if(typeof y=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var S=g(v.as,v.crossOrigin);a.d.M(y,{crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&a.d.M(y)},$e.preload=function(y,v){if(typeof y=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var S=v.as,b=g(S,v.crossOrigin);a.d.L(y,S,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},$e.preloadModule=function(y,v){if(typeof y=="string")if(v){var S=g(v.as,v.crossOrigin);a.d.m(y,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else a.d.m(y)},$e.requestFormReset=function(y){a.d.r(y)},$e.unstable_batchedUpdates=function(y,v){return y(v)},$e.useFormState=function(y,v,S){return d.H.useFormState(y,v,S)},$e.useFormStatus=function(){return d.H.useHostTransitionStatus()},$e.version="19.2.0",$e}var g_;function RS(){if(g_)return np.exports;g_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),np.exports=wS(),np.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function CS(){if(y_)return Ol;y_=1;var r=bS(),t=im(),i=RS();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(c(e)!==e)throw Error(a(188))}function v(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var s=e,o=n;;){var h=s.return;if(h===null)break;var f=h.alternate;if(f===null){if(o=h.return,o!==null){s=o;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===s)return y(h),e;if(f===o)return y(h),n;f=f.sibling}throw Error(a(188))}if(s.return!==o.return)s=h,o=f;else{for(var m=!1,E=h.child;E;){if(E===s){m=!0,s=h,o=f;break}if(E===o){m=!0,o=h,s=f;break}E=E.sibling}if(!m){for(E=f.child;E;){if(E===s){m=!0,s=f,o=h;break}if(E===o){m=!0,o=f,s=h;break}E=E.sibling}if(!m)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),ut=Symbol.for("react.consumer"),nt=Symbol.for("react.context"),lt=Symbol.for("react.forward_ref"),yt=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case rt:return"Profiler";case X:return"StrictMode";case yt:return"Suspense";case at:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case $:return"Portal";case nt:return e.displayName||"Context";case ut:return(e._context.displayName||"Context")+".Consumer";case lt:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case A:return n=e.displayName||null,n!==null?n:ne(e.type)||"Memo";case w:n=e._payload,e=e._init;try{return ne(e(n))}catch{}}return null}var de=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},At=[],Pt=-1;function D(e){return{current:e}}function G(e){0>Pt||(e.current=At[Pt],At[Pt]=null,Pt--)}function et(e,n){Pt++,At[Pt]=e.current,e.current=n}var it=D(null),mt=D(null),vt=D(null),Nt=D(null);function ie(e,n){switch(et(vt,n),et(mt,e),et(it,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?xy(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=xy(n),e=My(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(it),et(it,e)}function qt(){G(it),G(mt),G(vt)}function qn(e){e.memoizedState!==null&&et(Nt,e);var n=it.current,s=My(n,e.type);n!==s&&(et(mt,e),et(it,s))}function Hn(e){mt.current===e&&(G(it),G(mt)),Nt.current===e&&(G(Nt),Rl._currentValue=ft)}var en,ra;function ai(e){if(en===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",ra=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+e+ra}var Ro=!1;function ds(e,n){if(!e||Ro)return"";Ro=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(j){var z=j}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(j){z=j}e.call(Y.prototype)}}else{try{throw Error()}catch(j){z=j}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),m=f[0],E=f[1];if(m&&E){var I=m.split(`
`),P=E.split(`
`);for(h=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;h<P.length&&!P[h].includes("DetermineComponentFrameRoot");)h++;if(o===I.length||h===P.length)for(o=I.length-1,h=P.length-1;1<=o&&0<=h&&I[o]!==P[h];)h--;for(;1<=o&&0<=h;o--,h--)if(I[o]!==P[h]){if(o!==1||h!==1)do if(o--,h--,0>h||I[o]!==P[h]){var F=`
`+I[o].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=o&&0<=h);break}}}finally{Ro=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ai(s):""}function Co(e,n){switch(e.tag){case 26:case 27:case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return e.child!==n&&n!==null?ai("Suspense Fallback"):ai("Suspense");case 19:return ai("SuspenseList");case 0:case 15:return ds(e.type,!1);case 11:return ds(e.type.render,!1);case 1:return ds(e.type,!0);case 31:return ai("Activity");default:return""}}function Io(e){try{var n="",s=null;do n+=Co(e,s),s=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ee=Object.prototype.hasOwnProperty,Me=r.unstable_scheduleCallback,dr=r.unstable_cancelCallback,Jh=r.unstable_shouldYield,cu=r.unstable_requestPaint,nn=r.unstable_now,ps=r.unstable_getCurrentPriorityLevel,Do=r.unstable_ImmediatePriority,No=r.unstable_UserBlockingPriority,pr=r.unstable_NormalPriority,Wh=r.unstable_LowPriority,hu=r.unstable_IdlePriority,fu=r.log,du=r.unstable_setDisableYieldValue,Fn=null,qe=null;function Rn(e){if(typeof fu=="function"&&du(e),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(Fn,e)}catch{}}var pe=Math.clz32?Math.clz32:mu,pu=Math.log,sa=Math.LN2;function mu(e){return e>>>=0,e===0?32:31-(pu(e)/sa|0)|0}var oi=256,ms=262144,Te=4194304;function li(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ui(e,n,s){var o=e.pendingLanes;if(o===0)return 0;var h=0,f=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?h=li(o):(m&=E,m!==0?h=li(m):s||(s=E&~e,s!==0&&(h=li(s))))):(E=o&~f,E!==0?h=li(E):m!==0?h=li(m):s||(s=o&~e,s!==0&&(h=li(s)))),h===0?0:n!==0&&n!==h&&(n&f)===0&&(f=h&-h,s=n&-n,f>=s||f===32&&(s&4194048)!==0)?n:h}function Gn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function tf(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gu(){var e=Te;return Te<<=1,(Te&62914560)===0&&(Te=4194304),e}function ci(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function gs(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ef(e,n,s,o,h,f){var m=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var E=e.entanglements,I=e.expirationTimes,P=e.hiddenUpdates;for(s=m&~s;0<s;){var F=31-pe(s),Y=1<<F;E[F]=0,I[F]=-1;var z=P[F];if(z!==null)for(P[F]=null,F=0;F<z.length;F++){var j=z[F];j!==null&&(j.lane&=-536870913)}s&=~Y}o!==0&&ys(e,o,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(m&~n))}function ys(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-pe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function Oo(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var o=31-pe(s),h=1<<o;h&n|e[o]&n&&(e[o]|=n),s&=~h}}function xo(e,n){var s=n&-n;return s=(s&42)!==0?1:_s(s),(s&(e.suspendedLanes|n))!==0?0:s}function _s(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ji(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yu(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:n_(e.type))}function Kn(e,n){var s=tt.p;try{return tt.p=e,n()}finally{tt.p=s}}var Yn=Math.random().toString(36).slice(2),Se="__reactFiber$"+Yn,ke="__reactProps$"+Yn,hi="__reactContainer$"+Yn,aa="__reactEvents$"+Yn,nf="__reactListeners$"+Yn,_u="__reactHandles$"+Yn,vu="__reactResources$"+Yn,fi="__reactMarker$"+Yn;function oa(e){delete e[Se],delete e[ke],delete e[aa],delete e[nf],delete e[_u]}function di(e){var n=e[Se];if(n)return n;for(var s=e.parentNode;s;){if(n=s[hi]||s[Se]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=By(e);e!==null;){if(s=e[Se])return s;e=By(e)}return n}e=s,s=e.parentNode}return null}function Cn(e){if(e=e[Se]||e[hi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function gn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function pi(e){var n=e[vu];return n||(n=e[vu]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ae(e){e[fi]=!0}var Mo=new Set,Vo={};function mi(e,n){gi(e,n),gi(e+"Capture",n)}function gi(e,n){for(Vo[e]=n,e=0;e<n.length;e++)Mo.add(n[e])}var Uo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lo={},ko={};function Eu(e){return Ee.call(ko,e)?!0:Ee.call(Lo,e)?!1:Uo.test(e)?ko[e]=!0:(Lo[e]=!0,!1)}function la(e,n,s){if(Eu(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function yn(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function be(e,n,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+o)}}function Pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Po(e,n,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return h.call(this)},set:function(m){s=""+m,f.call(this,m)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(m){s=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qt(e){if(!e._valueTracker){var n=mr(e)?"checked":"value";e._valueTracker=Po(e,n,""+e[n])}}function vs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return e&&(o=mr(e)?e.checked?"true":"false":e.value),e=o,e!==s?(n.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Es=/[\n"\\]/g;function on(e){return e.replace(Es,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ua(e,n,s,o,h,f,m,E){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Pe(n)):e.value!==""+Pe(n)&&(e.value=""+Pe(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?zo(e,m,Pe(n)):s!=null?zo(e,m,Pe(s)):o!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Pe(E):e.removeAttribute("name")}function Tu(e,n,s,o,h,f,m,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Qt(e);return}s=s!=null?""+Pe(s):"",n=n!=null?""+Pe(n):s,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Qt(e)}function zo(e,n,s){n==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function gr(e,n,s,o){if(e=e.options,n){n={};for(var h=0;h<s.length;h++)n["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=n.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Pe(s),n=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}n!==null||e[h].disabled||(n=e[h])}n!==null&&(n.selected=!0)}}function Su(e,n,s){if(n!=null&&(n=""+Pe(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+Pe(s):""}function yr(e,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if(de(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=Pe(n),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),Qt(e)}function ln(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var Au=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bo(e,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,s):typeof s!="number"||s===0||Au.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function jo(e,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in n)o=n[h],n.hasOwnProperty(h)&&s[h]!==o&&Bo(e,h,o)}else for(var f in n)n.hasOwnProperty(f)&&Bo(e,f,n[f])}function ca(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_r=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ha(e){return _r.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qn(){}var qo=null;function In(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vr=null,_i=null;function Ts(e){var n=Cn(e);if(n&&(e=n.stateNode)){var s=e[ke]||null;t:switch(e=n.stateNode,n.type){case"input":if(ua(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+on(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==e&&o.form===e.form){var h=o[ke]||null;if(!h)throw Error(a(90));ua(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===e.form&&vs(o)}break t;case"textarea":Su(e,s.value,s.defaultValue);break t;case"select":n=s.value,n!=null&&gr(e,!!s.multiple,n,!1)}}}var fa=!1;function Er(e,n,s){if(fa)return e(n,s);fa=!0;try{var o=e(n);return o}finally{if(fa=!1,(vr!==null||_i!==null)&&(yc(),vr&&(n=vr,e=_i,_i=vr=null,Ts(n),e)))for(n=0;n<e.length;n++)Ts(e[n])}}function Xn(e,n){var s=e.stateNode;if(s===null)return null;var o=s[ke]||null;if(o===null)return null;s=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ss=!1;if(Dn)try{var Zt={};Object.defineProperty(Zt,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{Ss=!1}var vi=null,Ho=null,As=null;function Fo(){if(As)return As;var e,n=Ho,s=n.length,o,h="value"in vi?vi.value:vi.textContent,f=h.length;for(e=0;e<s&&n[e]===h[e];e++);var m=s-e;for(o=1;o<=m&&n[s-o]===h[f-o];o++);return As=h.slice(e,1<o?1-o:void 0)}function bs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function $n(){return!1}function He(e){function n(s,o,h,f,m){this._reactName=s,this._targetInst=h,this.type=o,this.nativeEvent=f,this.target=m,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(s=e[E],this[E]=s?s(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qi:$n,this.isPropagationStopped=$n,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),n}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ei=He(Hi),Tr=b({},Hi,{view:0,detail:0}),Go=He(Tr),Sr,da,Ti,pa=b({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ar,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ti&&(Ti&&e.type==="mousemove"?(Sr=e.screenX-Ti.screenX,da=e.screenY-Ti.screenY):da=Sr=0,Ti=e),Sr)},movementY:function(e){return"movementY"in e?e.movementY:da}}),Ko=He(pa),ws=b({},pa,{dataTransfer:0}),wu=He(ws),Ru=b({},Tr,{relatedTarget:0}),Rs=He(Ru),Yo=b({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),Cu=He(Yo),ma=b({},Hi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Iu=He(ma),Du=b({},Hi,{data:0}),Si=He(Du),Nu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ou={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xu[e])?!!n[e]:!1}function Ar(){return Mu}var rn=b({},Tr,{key:function(e){if(e.key){var n=Nu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=bs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ou[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ar,charCode:function(e){return e.type==="keypress"?bs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vu=He(rn),Uu=b({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fi=He(Uu),u=b({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ar}),p=He(u),_=b({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),T=He(_),L=b({},pa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B=He(L),J=b({},Hi,{newState:0,oldState:0}),wt=He(J),me=[9,13,27,32],Gt=Dn&&"CompositionEvent"in window,oe=null;Dn&&"documentMode"in document&&(oe=document.documentMode);var Nn=Dn&&"TextEvent"in window&&!oe,Ai=Dn&&(!Gt||oe&&8<oe&&11>=oe),Zn=" ",Jn=!1;function Cs(e,n){switch(e){case"keyup":return me.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ga(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ya=!1;function HE(e,n){switch(e){case"compositionend":return ga(n);case"keypress":return n.which!==32?null:(Jn=!0,Zn);case"textInput":return e=n.data,e===Zn&&Jn?null:e;default:return null}}function FE(e,n){if(ya)return e==="compositionend"||!Gt&&Cs(e,n)?(e=Fo(),As=Ho=vi=null,ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ai&&n.locale!=="ko"?null:n.data;default:return null}}var GE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!GE[e.type]:n==="textarea"}function Fm(e,n,s,o){vr?_i?_i.push(o):_i=[o]:vr=o,n=bc(n,"onChange"),0<n.length&&(s=new Ei("onChange","change",null,s,o),e.push({event:s,listeners:n}))}var Qo=null,Xo=null;function KE(e){Ry(e,0)}function Lu(e){var n=gn(e);if(vs(n))return e}function Gm(e,n){if(e==="change")return n}var Km=!1;if(Dn){var rf;if(Dn){var sf="oninput"in document;if(!sf){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),sf=typeof Ym.oninput=="function"}rf=sf}else rf=!1;Km=rf&&(!document.documentMode||9<document.documentMode)}function Qm(){Qo&&(Qo.detachEvent("onpropertychange",Xm),Xo=Qo=null)}function Xm(e){if(e.propertyName==="value"&&Lu(Xo)){var n=[];Fm(n,Xo,e,In(e)),Er(KE,n)}}function YE(e,n,s){e==="focusin"?(Qm(),Qo=n,Xo=s,Qo.attachEvent("onpropertychange",Xm)):e==="focusout"&&Qm()}function QE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lu(Xo)}function XE(e,n){if(e==="click")return Lu(n)}function $E(e,n){if(e==="input"||e==="change")return Lu(n)}function ZE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _n=typeof Object.is=="function"?Object.is:ZE;function $o(e,n){if(_n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var h=s[o];if(!Ee.call(n,h)||!_n(e[h],n[h]))return!1}return!0}function $m(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zm(e,n){var s=$m(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=n&&o>=n)return{node:s,offset:n-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=$m(s)}}function Jm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Jm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yi(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=yi(e.document)}return n}function af(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var JE=Dn&&"documentMode"in document&&11>=document.documentMode,_a=null,of=null,Zo=null,lf=!1;function tg(e,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;lf||_a==null||_a!==yi(o)||(o=_a,"selectionStart"in o&&af(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zo&&$o(Zo,o)||(Zo=o,o=bc(of,"onSelect"),0<o.length&&(n=new Ei("onSelect","select",null,n,s),e.push({event:n,listeners:o}),n.target=_a)))}function Is(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var va={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionrun:Is("Transition","TransitionRun"),transitionstart:Is("Transition","TransitionStart"),transitioncancel:Is("Transition","TransitionCancel"),transitionend:Is("Transition","TransitionEnd")},uf={},eg={};Dn&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function Ds(e){if(uf[e])return uf[e];if(!va[e])return e;var n=va[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in eg)return uf[e]=n[s];return e}var ng=Ds("animationend"),ig=Ds("animationiteration"),rg=Ds("animationstart"),WE=Ds("transitionrun"),tT=Ds("transitionstart"),eT=Ds("transitioncancel"),sg=Ds("transitionend"),ag=new Map,cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cf.push("scrollEnd");function Wn(e,n){ag.set(e,n),mi(n,[e])}var ku=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},On=[],Ea=0,hf=0;function Pu(){for(var e=Ea,n=hf=Ea=0;n<e;){var s=On[n];On[n++]=null;var o=On[n];On[n++]=null;var h=On[n];On[n++]=null;var f=On[n];if(On[n++]=null,o!==null&&h!==null){var m=o.pending;m===null?h.next=h:(h.next=m.next,m.next=h),o.pending=h}f!==0&&og(s,h,f)}}function zu(e,n,s,o){On[Ea++]=e,On[Ea++]=n,On[Ea++]=s,On[Ea++]=o,hf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ff(e,n,s,o){return zu(e,n,s,o),Bu(e)}function Ns(e,n){return zu(e,null,null,n),Bu(e)}function og(e,n,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var h=!1,f=e.return;f!==null;)f.childLanes|=s,o=f.alternate,o!==null&&(o.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&n!==null&&(h=31-pe(s),e=f.hiddenUpdates,o=e[h],o===null?e[h]=[n]:o.push(n),n.lane=s|536870912),f):null}function Bu(e){if(50<vl)throw vl=0,Td=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ta={};function nT(e,n,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(e,n,s,o){return new nT(e,n,s,o)}function df(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var s=e.alternate;return s===null?(s=vn(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function lg(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ju(e,n,s,o,h,f){var m=0;if(o=e,typeof e=="function")df(e)&&(m=1);else if(typeof e=="string")m=oS(e,s,it.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=vn(31,s,n,h),e.elementType=C,e.lanes=f,e;case Z:return Os(s.children,h,f,n);case X:m=8,h|=24;break;case rt:return e=vn(12,s,n,h|2),e.elementType=rt,e.lanes=f,e;case yt:return e=vn(13,s,n,h),e.elementType=yt,e.lanes=f,e;case at:return e=vn(19,s,n,h),e.elementType=at,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nt:m=10;break t;case ut:m=9;break t;case lt:m=11;break t;case A:m=14;break t;case w:m=16,o=null;break t}m=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=vn(m,s,n,h),n.elementType=e,n.type=o,n.lanes=f,n}function Os(e,n,s,o){return e=vn(7,e,o,n),e.lanes=s,e}function pf(e,n,s){return e=vn(6,e,null,n),e.lanes=s,e}function ug(e){var n=vn(18,null,null,0);return n.stateNode=e,n}function mf(e,n,s){return n=vn(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var cg=new WeakMap;function xn(e,n){if(typeof e=="object"&&e!==null){var s=cg.get(e);return s!==void 0?s:(n={value:e,source:n,stack:Io(n)},cg.set(e,n),n)}return{value:e,source:n,stack:Io(n)}}var Sa=[],Aa=0,qu=null,Jo=0,Mn=[],Vn=0,br=null,bi=1,wi="";function Ki(e,n){Sa[Aa++]=Jo,Sa[Aa++]=qu,qu=e,Jo=n}function hg(e,n,s){Mn[Vn++]=bi,Mn[Vn++]=wi,Mn[Vn++]=br,br=e;var o=bi;e=wi;var h=32-pe(o)-1;o&=~(1<<h),s+=1;var f=32-pe(n)+h;if(30<f){var m=h-h%5;f=(o&(1<<m)-1).toString(32),o>>=m,h-=m,bi=1<<32-pe(n)+h|s<<h|o,wi=f+e}else bi=1<<f|s<<h|o,wi=e}function gf(e){e.return!==null&&(Ki(e,1),hg(e,1,0))}function yf(e){for(;e===qu;)qu=Sa[--Aa],Sa[Aa]=null,Jo=Sa[--Aa],Sa[Aa]=null;for(;e===br;)br=Mn[--Vn],Mn[Vn]=null,wi=Mn[--Vn],Mn[Vn]=null,bi=Mn[--Vn],Mn[Vn]=null}function fg(e,n){Mn[Vn++]=bi,Mn[Vn++]=wi,Mn[Vn++]=br,bi=n.id,wi=n.overflow,br=e}var Fe=null,re=null,Lt=!1,wr=null,Un=!1,_f=Error(a(519));function Rr(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wo(xn(n,e)),_f}function dg(e){var n=e.stateNode,s=e.type,o=e.memoizedProps;switch(n[Se]=e,n[ke]=o,s){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(s=0;s<Tl.length;s++)xt(Tl[s],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),Tu(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),yr(n,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||Ny(n.textContent,s)?(o.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),o.onScroll!=null&&xt("scroll",n),o.onScrollEnd!=null&&xt("scrollend",n),o.onClick!=null&&(n.onclick=Qn),n=!0):n=!1,n||Rr(e,!0)}function pg(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:Un=!1;return;case 27:case 3:Un=!0;return;default:Fe=Fe.return}}function ba(e){if(e!==Fe)return!1;if(!Lt)return pg(e),Lt=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Ld(e.type,e.memoizedProps)),s=!s),s&&re&&Rr(e),pg(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));re=zy(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));re=zy(e)}else n===27?(n=re,Br(e.type)?(e=jd,jd=null,re=e):re=n):re=Fe?kn(e.stateNode.nextSibling):null;return!0}function xs(){re=Fe=null,Lt=!1}function vf(){var e=wr;return e!==null&&(fn===null?fn=e:fn.push.apply(fn,e),wr=null),e}function Wo(e){wr===null?wr=[e]:wr.push(e)}var Ef=D(null),Ms=null,Yi=null;function Cr(e,n,s){et(Ef,n._currentValue),n._currentValue=s}function Qi(e){e._currentValue=Ef.current,G(Ef)}function Tf(e,n,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===s)break;e=e.return}}function Sf(e,n,s,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var m=h.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=h;for(var I=0;I<n.length;I++)if(E.context===n[I]){f.lanes|=s,E=f.alternate,E!==null&&(E.lanes|=s),Tf(f.return,s,e),o||(m=null);break t}f=E.next}}else if(h.tag===18){if(m=h.return,m===null)throw Error(a(341));m.lanes|=s,f=m.alternate,f!==null&&(f.lanes|=s),Tf(m,s,e),m=null}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===e){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}}function wa(e,n,s,o){e=null;for(var h=n,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var m=h.alternate;if(m===null)throw Error(a(387));if(m=m.memoizedProps,m!==null){var E=h.type;_n(h.pendingProps.value,m.value)||(e!==null?e.push(E):e=[E])}}else if(h===Nt.current){if(m=h.alternate,m===null)throw Error(a(387));m.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Rl):e=[Rl])}h=h.return}e!==null&&Sf(n,e,s,o),n.flags|=262144}function Hu(e){for(e=e.firstContext;e!==null;){if(!_n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vs(e){Ms=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return mg(Ms,e)}function Fu(e,n){return Ms===null&&Vs(e),mg(e,n)}function mg(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Yi===null){if(e===null)throw Error(a(308));Yi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Yi=Yi.next=n;return s}var iT=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},rT=r.unstable_scheduleCallback,sT=r.unstable_NormalPriority,we={$$typeof:nt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Af(){return{controller:new iT,data:new Map,refCount:0}}function tl(e){e.refCount--,e.refCount===0&&rT(sT,function(){e.controller.abort()})}var el=null,bf=0,Ra=0,Ca=null;function aT(e,n){if(el===null){var s=el=[];bf=0,Ra=Cd(),Ca={status:"pending",value:void 0,then:function(o){s.push(o)}}}return bf++,n.then(gg,gg),n}function gg(){if(--bf===0&&el!==null){Ca!==null&&(Ca.status="fulfilled");var e=el;el=null,Ra=0,Ca=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function oT(e,n){var s=[],o={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var h=0;h<s.length;h++)(0,s[h])(n)},function(h){for(o.status="rejected",o.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),o}var yg=H.S;H.S=function(e,n){ty=nn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&aT(e,n),yg!==null&&yg(e,n)};var Us=D(null);function wf(){var e=Us.current;return e!==null?e:ee.pooledCache}function Gu(e,n){n===null?et(Us,Us.current):et(Us,n.pool)}function _g(){var e=wf();return e===null?null:{parent:we._currentValue,pool:e}}var Ia=Error(a(460)),Rf=Error(a(474)),Ku=Error(a(542)),Yu={then:function(){}};function vg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Eg(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(Qn,Qn),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Sg(e),e;default:if(typeof n.status=="string")n.then(Qn,Qn);else{if(e=ee,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=o}},function(o){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Sg(e),e}throw ks=n,Ia}}function Ls(e){try{var n=e._init;return n(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ks=s,Ia):s}}var ks=null;function Tg(){if(ks===null)throw Error(a(459));var e=ks;return ks=null,e}function Sg(e){if(e===Ia||e===Ku)throw Error(a(483))}var Da=null,nl=0;function Qu(e){var n=nl;return nl+=1,Da===null&&(Da=[]),Eg(Da,e,n)}function il(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Xu(e,n){throw n.$$typeof===x?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ag(e){function n(V,N){if(e){var k=V.deletions;k===null?(V.deletions=[N],V.flags|=16):k.push(N)}}function s(V,N){if(!e)return null;for(;N!==null;)n(V,N),N=N.sibling;return null}function o(V){for(var N=new Map;V!==null;)V.key!==null?N.set(V.key,V):N.set(V.index,V),V=V.sibling;return N}function h(V,N){return V=Gi(V,N),V.index=0,V.sibling=null,V}function f(V,N,k){return V.index=k,e?(k=V.alternate,k!==null?(k=k.index,k<N?(V.flags|=67108866,N):k):(V.flags|=67108866,N)):(V.flags|=1048576,N)}function m(V){return e&&V.alternate===null&&(V.flags|=67108866),V}function E(V,N,k,K){return N===null||N.tag!==6?(N=pf(k,V.mode,K),N.return=V,N):(N=h(N,k),N.return=V,N)}function I(V,N,k,K){var dt=k.type;return dt===Z?F(V,N,k.props.children,K,k.key):N!==null&&(N.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===w&&Ls(dt)===N.type)?(N=h(N,k.props),il(N,k),N.return=V,N):(N=ju(k.type,k.key,k.props,null,V.mode,K),il(N,k),N.return=V,N)}function P(V,N,k,K){return N===null||N.tag!==4||N.stateNode.containerInfo!==k.containerInfo||N.stateNode.implementation!==k.implementation?(N=mf(k,V.mode,K),N.return=V,N):(N=h(N,k.children||[]),N.return=V,N)}function F(V,N,k,K,dt){return N===null||N.tag!==7?(N=Os(k,V.mode,K,dt),N.return=V,N):(N=h(N,k),N.return=V,N)}function Y(V,N,k){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=pf(""+N,V.mode,k),N.return=V,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case q:return k=ju(N.type,N.key,N.props,null,V.mode,k),il(k,N),k.return=V,k;case $:return N=mf(N,V.mode,k),N.return=V,N;case w:return N=Ls(N),Y(V,N,k)}if(de(N)||U(N))return N=Os(N,V.mode,k,null),N.return=V,N;if(typeof N.then=="function")return Y(V,Qu(N),k);if(N.$$typeof===nt)return Y(V,Fu(V,N),k);Xu(V,N)}return null}function z(V,N,k,K){var dt=N!==null?N.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return dt!==null?null:E(V,N,""+k,K);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case q:return k.key===dt?I(V,N,k,K):null;case $:return k.key===dt?P(V,N,k,K):null;case w:return k=Ls(k),z(V,N,k,K)}if(de(k)||U(k))return dt!==null?null:F(V,N,k,K,null);if(typeof k.then=="function")return z(V,N,Qu(k),K);if(k.$$typeof===nt)return z(V,N,Fu(V,k),K);Xu(V,k)}return null}function j(V,N,k,K,dt){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return V=V.get(k)||null,E(N,V,""+K,dt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case q:return V=V.get(K.key===null?k:K.key)||null,I(N,V,K,dt);case $:return V=V.get(K.key===null?k:K.key)||null,P(N,V,K,dt);case w:return K=Ls(K),j(V,N,k,K,dt)}if(de(K)||U(K))return V=V.get(k)||null,F(N,V,K,dt,null);if(typeof K.then=="function")return j(V,N,k,Qu(K),dt);if(K.$$typeof===nt)return j(V,N,k,Fu(N,K),dt);Xu(N,K)}return null}function ot(V,N,k,K){for(var dt=null,Ht=null,ct=N,It=N=0,Vt=null;ct!==null&&It<k.length;It++){ct.index>It?(Vt=ct,ct=null):Vt=ct.sibling;var Ft=z(V,ct,k[It],K);if(Ft===null){ct===null&&(ct=Vt);break}e&&ct&&Ft.alternate===null&&n(V,ct),N=f(Ft,N,It),Ht===null?dt=Ft:Ht.sibling=Ft,Ht=Ft,ct=Vt}if(It===k.length)return s(V,ct),Lt&&Ki(V,It),dt;if(ct===null){for(;It<k.length;It++)ct=Y(V,k[It],K),ct!==null&&(N=f(ct,N,It),Ht===null?dt=ct:Ht.sibling=ct,Ht=ct);return Lt&&Ki(V,It),dt}for(ct=o(ct);It<k.length;It++)Vt=j(ct,V,It,k[It],K),Vt!==null&&(e&&Vt.alternate!==null&&ct.delete(Vt.key===null?It:Vt.key),N=f(Vt,N,It),Ht===null?dt=Vt:Ht.sibling=Vt,Ht=Vt);return e&&ct.forEach(function(Gr){return n(V,Gr)}),Lt&&Ki(V,It),dt}function gt(V,N,k,K){if(k==null)throw Error(a(151));for(var dt=null,Ht=null,ct=N,It=N=0,Vt=null,Ft=k.next();ct!==null&&!Ft.done;It++,Ft=k.next()){ct.index>It?(Vt=ct,ct=null):Vt=ct.sibling;var Gr=z(V,ct,Ft.value,K);if(Gr===null){ct===null&&(ct=Vt);break}e&&ct&&Gr.alternate===null&&n(V,ct),N=f(Gr,N,It),Ht===null?dt=Gr:Ht.sibling=Gr,Ht=Gr,ct=Vt}if(Ft.done)return s(V,ct),Lt&&Ki(V,It),dt;if(ct===null){for(;!Ft.done;It++,Ft=k.next())Ft=Y(V,Ft.value,K),Ft!==null&&(N=f(Ft,N,It),Ht===null?dt=Ft:Ht.sibling=Ft,Ht=Ft);return Lt&&Ki(V,It),dt}for(ct=o(ct);!Ft.done;It++,Ft=k.next())Ft=j(ct,V,It,Ft.value,K),Ft!==null&&(e&&Ft.alternate!==null&&ct.delete(Ft.key===null?It:Ft.key),N=f(Ft,N,It),Ht===null?dt=Ft:Ht.sibling=Ft,Ht=Ft);return e&&ct.forEach(function(_S){return n(V,_S)}),Lt&&Ki(V,It),dt}function te(V,N,k,K){if(typeof k=="object"&&k!==null&&k.type===Z&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case q:t:{for(var dt=k.key;N!==null;){if(N.key===dt){if(dt=k.type,dt===Z){if(N.tag===7){s(V,N.sibling),K=h(N,k.props.children),K.return=V,V=K;break t}}else if(N.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===w&&Ls(dt)===N.type){s(V,N.sibling),K=h(N,k.props),il(K,k),K.return=V,V=K;break t}s(V,N);break}else n(V,N);N=N.sibling}k.type===Z?(K=Os(k.props.children,V.mode,K,k.key),K.return=V,V=K):(K=ju(k.type,k.key,k.props,null,V.mode,K),il(K,k),K.return=V,V=K)}return m(V);case $:t:{for(dt=k.key;N!==null;){if(N.key===dt)if(N.tag===4&&N.stateNode.containerInfo===k.containerInfo&&N.stateNode.implementation===k.implementation){s(V,N.sibling),K=h(N,k.children||[]),K.return=V,V=K;break t}else{s(V,N);break}else n(V,N);N=N.sibling}K=mf(k,V.mode,K),K.return=V,V=K}return m(V);case w:return k=Ls(k),te(V,N,k,K)}if(de(k))return ot(V,N,k,K);if(U(k)){if(dt=U(k),typeof dt!="function")throw Error(a(150));return k=dt.call(k),gt(V,N,k,K)}if(typeof k.then=="function")return te(V,N,Qu(k),K);if(k.$$typeof===nt)return te(V,N,Fu(V,k),K);Xu(V,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,N!==null&&N.tag===6?(s(V,N.sibling),K=h(N,k),K.return=V,V=K):(s(V,N),K=pf(k,V.mode,K),K.return=V,V=K),m(V)):s(V,N)}return function(V,N,k,K){try{nl=0;var dt=te(V,N,k,K);return Da=null,dt}catch(ct){if(ct===Ia||ct===Ku)throw ct;var Ht=vn(29,ct,null,V.mode);return Ht.lanes=K,Ht.return=V,Ht}finally{}}}var Ps=Ag(!0),bg=Ag(!1),Ir=!1;function Cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function If(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Dr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(e,n,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Kt&2)!==0){var h=o.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),o.pending=n,n=Bu(e),og(e,null,s),n}return zu(e,o,n,s),Bu(e)}function rl(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,Oo(e,s)}}function Df(e,n){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var h=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var m={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?h=f=m:f=f.next=m,s=s.next}while(s!==null);f===null?h=f=n:f=f.next=n}else h=f=n;s={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var Nf=!1;function sl(){if(Nf){var e=Ca;if(e!==null)throw e}}function al(e,n,s,o){Nf=!1;var h=e.updateQueue;Ir=!1;var f=h.firstBaseUpdate,m=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var I=E,P=I.next;I.next=null,m===null?f=P:m.next=P,m=I;var F=e.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==m&&(E===null?F.firstBaseUpdate=P:E.next=P,F.lastBaseUpdate=I))}if(f!==null){var Y=h.baseState;m=0,F=P=I=null,E=f;do{var z=E.lane&-536870913,j=z!==E.lane;if(j?(Mt&z)===z:(o&z)===z){z!==0&&z===Ra&&(Nf=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var ot=e,gt=E;z=n;var te=s;switch(gt.tag){case 1:if(ot=gt.payload,typeof ot=="function"){Y=ot.call(te,Y,z);break t}Y=ot;break t;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=gt.payload,z=typeof ot=="function"?ot.call(te,Y,z):ot,z==null)break t;Y=b({},Y,z);break t;case 2:Ir=!0}}z=E.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[z]:j.push(z))}else j={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(P=F=j,I=Y):F=F.next=j,m|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;j=E,E=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);F===null&&(I=Y),h.baseState=I,h.firstBaseUpdate=P,h.lastBaseUpdate=F,f===null&&(h.shared.lanes=0),Ur|=m,e.lanes=m,e.memoizedState=Y}}function wg(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Rg(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)wg(s[e],n)}var Na=D(null),$u=D(0);function Cg(e,n){e=ir,et($u,e),et(Na,n),ir=e|n.baseLanes}function Of(){et($u,ir),et(Na,Na.current)}function xf(){ir=$u.current,G(Na),G($u)}var En=D(null),Ln=null;function Or(e){var n=e.alternate;et(ge,ge.current&1),et(En,e),Ln===null&&(n===null||Na.current!==null||n.memoizedState!==null)&&(Ln=e)}function Mf(e){et(ge,ge.current),et(En,e),Ln===null&&(Ln=e)}function Ig(e){e.tag===22?(et(ge,ge.current),et(En,e),Ln===null&&(Ln=e)):xr()}function xr(){et(ge,ge.current),et(En,En.current)}function Tn(e){G(En),Ln===e&&(Ln=null),G(ge)}var ge=D(0);function Zu(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||zd(s)||Bd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xi=0,Rt=null,Jt=null,Re=null,Ju=!1,Oa=!1,zs=!1,Wu=0,ol=0,xa=null,lT=0;function he(){throw Error(a(321))}function Vf(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!_n(e[s],n[s]))return!1;return!0}function Uf(e,n,s,o,h,f){return Xi=f,Rt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?h0:$f,zs=!1,f=s(o,h),zs=!1,Oa&&(f=Ng(n,s,o,h)),Dg(e),f}function Dg(e){H.H=cl;var n=Jt!==null&&Jt.next!==null;if(Xi=0,Re=Jt=Rt=null,Ju=!1,ol=0,xa=null,n)throw Error(a(300));e===null||Ce||(e=e.dependencies,e!==null&&Hu(e)&&(Ce=!0))}function Ng(e,n,s,o){Rt=e;var h=0;do{if(Oa&&(xa=null),ol=0,Oa=!1,25<=h)throw Error(a(301));if(h+=1,Re=Jt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=f0,f=n(s,o)}while(Oa);return f}function uT(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?ll(n):n,e=e.useState()[0],(Jt!==null?Jt.memoizedState:null)!==e&&(Rt.flags|=1024),n}function Lf(){var e=Wu!==0;return Wu=0,e}function kf(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function Pf(e){if(Ju){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ju=!1}Xi=0,Re=Jt=Rt=null,Oa=!1,ol=Wu=0,xa=null}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Rt.memoizedState=Re=e:Re=Re.next=e,Re}function ye(){if(Jt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Jt.next;var n=Re===null?Rt.memoizedState:Re.next;if(n!==null)Re=n,Jt=e;else{if(e===null)throw Rt.alternate===null?Error(a(467)):Error(a(310));Jt=e,e={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},Re===null?Rt.memoizedState=Re=e:Re=Re.next=e}return Re}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(e){var n=ol;return ol+=1,xa===null&&(xa=[]),e=Eg(xa,e,n),n=Rt,(Re===null?n.memoizedState:Re.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?h0:$f),e}function ec(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ll(e);if(e.$$typeof===nt)return Ge(e)}throw Error(a(438,String(e)))}function zf(e){var n=null,s=Rt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=Rt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=tc(),Rt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),o=0;o<e;o++)s[o]=M;return n.index++,s}function $i(e,n){return typeof n=="function"?n(e):n}function nc(e){var n=ye();return Bf(n,Jt,e)}function Bf(e,n,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var h=e.baseQueue,f=o.pending;if(f!==null){if(h!==null){var m=h.next;h.next=f.next,f.next=m}n.baseQueue=h=f,o.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{n=h.next;var E=m=null,I=null,P=n,F=!1;do{var Y=P.lane&-536870913;if(Y!==P.lane?(Mt&Y)===Y:(Xi&Y)===Y){var z=P.revertLane;if(z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),Y===Ra&&(F=!0);else if((Xi&z)===z){P=P.next,z===Ra&&(F=!0);continue}else Y={lane:0,revertLane:P.revertLane,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},I===null?(E=I=Y,m=f):I=I.next=Y,Rt.lanes|=z,Ur|=z;Y=P.action,zs&&s(f,Y),f=P.hasEagerState?P.eagerState:s(f,Y)}else z={lane:Y,revertLane:P.revertLane,gesture:P.gesture,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},I===null?(E=I=z,m=f):I=I.next=z,Rt.lanes|=Y,Ur|=Y;P=P.next}while(P!==null&&P!==n);if(I===null?m=f:I.next=E,!_n(f,e.memoizedState)&&(Ce=!0,F&&(s=Ca,s!==null)))throw s;e.memoizedState=f,e.baseState=m,e.baseQueue=I,o.lastRenderedState=f}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function jf(e){var n=ye(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,h=s.pending,f=n.memoizedState;if(h!==null){s.pending=null;var m=h=h.next;do f=e(f,m.action),m=m.next;while(m!==h);_n(f,n.memoizedState)||(Ce=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),s.lastRenderedState=f}return[f,o]}function Og(e,n,s){var o=Rt,h=ye(),f=Lt;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=n();var m=!_n((Jt||h).memoizedState,s);if(m&&(h.memoizedState=s,Ce=!0),h=h.queue,Ff(Vg.bind(null,o,h,e),[e]),h.getSnapshot!==n||m||Re!==null&&Re.memoizedState.tag&1){if(o.flags|=2048,Ma(9,{destroy:void 0},Mg.bind(null,o,h,s,n),null),ee===null)throw Error(a(349));f||(Xi&127)!==0||xg(o,n,s)}return s}function xg(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=Rt.updateQueue,n===null?(n=tc(),Rt.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function Mg(e,n,s,o){n.value=s,n.getSnapshot=o,Ug(n)&&Lg(e)}function Vg(e,n,s){return s(function(){Ug(n)&&Lg(e)})}function Ug(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!_n(e,s)}catch{return!0}}function Lg(e){var n=Ns(e,2);n!==null&&dn(n,e,2)}function qf(e){var n=sn();if(typeof e=="function"){var s=e;if(e=s(),zs){Rn(!0);try{s()}finally{Rn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},n}function kg(e,n,s,o){return e.baseState=s,Bf(e,Jt,typeof o=="function"?o:$i)}function cT(e,n,s,o,h){if(sc(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){f.listeners.push(m)}};H.T!==null?s(!0):f.isTransition=!1,o(f),s=n.pending,s===null?(f.next=n.pending=f,Pg(n,f)):(f.next=s.next,n.pending=s.next=f)}}function Pg(e,n){var s=n.action,o=n.payload,h=e.state;if(n.isTransition){var f=H.T,m={};H.T=m;try{var E=s(h,o),I=H.S;I!==null&&I(m,E),zg(e,n,E)}catch(P){Hf(e,n,P)}finally{f!==null&&m.types!==null&&(f.types=m.types),H.T=f}}else try{f=s(h,o),zg(e,n,f)}catch(P){Hf(e,n,P)}}function zg(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Bg(e,n,o)},function(o){return Hf(e,n,o)}):Bg(e,n,s)}function Bg(e,n,s){n.status="fulfilled",n.value=s,jg(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,Pg(e,s)))}function Hf(e,n,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,jg(n),n=n.next;while(n!==o)}e.action=null}function jg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function qg(e,n){return n}function Hg(e,n){if(Lt){var s=ee.formState;if(s!==null){t:{var o=Rt;if(Lt){if(re){e:{for(var h=re,f=Un;h.nodeType!==8;){if(!f){h=null;break e}if(h=kn(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){re=kn(h.nextSibling),o=h.data==="F!";break t}}Rr(o)}o=!1}o&&(n=s[0])}}return s=sn(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qg,lastRenderedState:n},s.queue=o,s=l0.bind(null,Rt,o),o.dispatch=s,o=qf(!1),f=Xf.bind(null,Rt,!1,o.queue),o=sn(),h={state:n,dispatch:null,action:e,pending:null},o.queue=h,s=cT.bind(null,Rt,h,f,s),h.dispatch=s,o.memoizedState=e,[n,s,!1]}function Fg(e){var n=ye();return Gg(n,Jt,e)}function Gg(e,n,s){if(n=Bf(e,n,qg)[0],e=nc($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ll(n)}catch(m){throw m===Ia?Ku:m}else o=n;n=ye();var h=n.queue,f=h.dispatch;return s!==n.memoizedState&&(Rt.flags|=2048,Ma(9,{destroy:void 0},hT.bind(null,h,s),null)),[o,f,e]}function hT(e,n){e.action=n}function Kg(e){var n=ye(),s=Jt;if(s!==null)return Gg(n,s,e);ye(),n=n.memoizedState,s=ye();var o=s.queue.dispatch;return s.memoizedState=e,[n,o,!1]}function Ma(e,n,s,o){return e={tag:e,create:s,deps:o,inst:n,next:null},n=Rt.updateQueue,n===null&&(n=tc(),Rt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,n.lastEffect=e),e}function Yg(){return ye().memoizedState}function ic(e,n,s,o){var h=sn();Rt.flags|=e,h.memoizedState=Ma(1|n,{destroy:void 0},s,o===void 0?null:o)}function rc(e,n,s,o){var h=ye();o=o===void 0?null:o;var f=h.memoizedState.inst;Jt!==null&&o!==null&&Vf(o,Jt.memoizedState.deps)?h.memoizedState=Ma(n,f,s,o):(Rt.flags|=e,h.memoizedState=Ma(1|n,f,s,o))}function Qg(e,n){ic(8390656,8,e,n)}function Ff(e,n){rc(2048,8,e,n)}function fT(e){Rt.flags|=4;var n=Rt.updateQueue;if(n===null)n=tc(),Rt.updateQueue=n,n.events=[e];else{var s=n.events;s===null?n.events=[e]:s.push(e)}}function Xg(e){var n=ye().memoizedState;return fT({ref:n,nextImpl:e}),function(){if((Kt&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function $g(e,n){return rc(4,2,e,n)}function Zg(e,n){return rc(4,4,e,n)}function Jg(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wg(e,n,s){s=s!=null?s.concat([e]):null,rc(4,4,Jg.bind(null,n,e),s)}function Gf(){}function t0(e,n){var s=ye();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&Vf(n,o[1])?o[0]:(s.memoizedState=[e,n],e)}function e0(e,n){var s=ye();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&Vf(n,o[1]))return o[0];if(o=e(),zs){Rn(!0);try{e()}finally{Rn(!1)}}return s.memoizedState=[o,n],o}function Kf(e,n,s){return s===void 0||(Xi&1073741824)!==0&&(Mt&261930)===0?e.memoizedState=n:(e.memoizedState=s,e=ny(),Rt.lanes|=e,Ur|=e,s)}function n0(e,n,s,o){return _n(s,n)?s:Na.current!==null?(e=Kf(e,s,o),_n(e,n)||(Ce=!0),e):(Xi&42)===0||(Xi&1073741824)!==0&&(Mt&261930)===0?(Ce=!0,e.memoizedState=s):(e=ny(),Rt.lanes|=e,Ur|=e,n)}function i0(e,n,s,o,h){var f=tt.p;tt.p=f!==0&&8>f?f:8;var m=H.T,E={};H.T=E,Xf(e,!1,n,s);try{var I=h(),P=H.S;if(P!==null&&P(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var F=oT(I,o);ul(e,n,F,bn(e))}else ul(e,n,o,bn(e))}catch(Y){ul(e,n,{then:function(){},status:"rejected",reason:Y},bn())}finally{tt.p=f,m!==null&&E.types!==null&&(m.types=E.types),H.T=m}}function dT(){}function Yf(e,n,s,o){if(e.tag!==5)throw Error(a(476));var h=r0(e).queue;i0(e,h,n,ft,s===null?dT:function(){return s0(e),s(o)})}function r0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:ft},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function s0(e){var n=r0(e);n.next===null&&(n=e.alternate.memoizedState),ul(e,n.next.queue,{},bn())}function Qf(){return Ge(Rl)}function a0(){return ye().memoizedState}function o0(){return ye().memoizedState}function pT(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=bn();e=Dr(s);var o=Nr(n,e,s);o!==null&&(dn(o,n,s),rl(o,n,s)),n={cache:Af()},e.payload=n;return}n=n.return}}function mT(e,n,s){var o=bn();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},sc(e)?u0(n,s):(s=ff(e,n,s,o),s!==null&&(dn(s,e,o),c0(s,n,o)))}function l0(e,n,s){var o=bn();ul(e,n,s,o)}function ul(e,n,s,o){var h={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(sc(e))u0(n,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var m=n.lastRenderedState,E=f(m,s);if(h.hasEagerState=!0,h.eagerState=E,_n(E,m))return zu(e,n,h,0),ee===null&&Pu(),!1}catch{}finally{}if(s=ff(e,n,h,o),s!==null)return dn(s,e,o),c0(s,n,o),!0}return!1}function Xf(e,n,s,o){if(o={lane:2,revertLane:Cd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},sc(e)){if(n)throw Error(a(479))}else n=ff(e,s,o,2),n!==null&&dn(n,e,2)}function sc(e){var n=e.alternate;return e===Rt||n!==null&&n===Rt}function u0(e,n){Oa=Ju=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function c0(e,n,s){if((s&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,Oo(e,s)}}var cl={readContext:Ge,use:ec,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he,useHostTransitionStatus:he,useFormState:he,useActionState:he,useOptimistic:he,useMemoCache:he,useCacheRefresh:he};cl.useEffectEvent=he;var h0={readContext:Ge,use:ec,useCallback:function(e,n){return sn().memoizedState=[e,n===void 0?null:n],e},useContext:Ge,useEffect:Qg,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,ic(4194308,4,Jg.bind(null,n,e),s)},useLayoutEffect:function(e,n){return ic(4194308,4,e,n)},useInsertionEffect:function(e,n){ic(4,2,e,n)},useMemo:function(e,n){var s=sn();n=n===void 0?null:n;var o=e();if(zs){Rn(!0);try{e()}finally{Rn(!1)}}return s.memoizedState=[o,n],o},useReducer:function(e,n,s){var o=sn();if(s!==void 0){var h=s(n);if(zs){Rn(!0);try{s(n)}finally{Rn(!1)}}}else h=n;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=mT.bind(null,Rt,e),[o.memoizedState,e]},useRef:function(e){var n=sn();return e={current:e},n.memoizedState=e},useState:function(e){e=qf(e);var n=e.queue,s=l0.bind(null,Rt,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:Gf,useDeferredValue:function(e,n){var s=sn();return Kf(s,e,n)},useTransition:function(){var e=qf(!1);return e=i0.bind(null,Rt,e.queue,!0,!1),sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var o=Rt,h=sn();if(Lt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),ee===null)throw Error(a(349));(Mt&127)!==0||xg(o,n,s)}h.memoizedState=s;var f={value:s,getSnapshot:n};return h.queue=f,Qg(Vg.bind(null,o,f,e),[e]),o.flags|=2048,Ma(9,{destroy:void 0},Mg.bind(null,o,f,s,n),null),s},useId:function(){var e=sn(),n=ee.identifierPrefix;if(Lt){var s=wi,o=bi;s=(o&~(1<<32-pe(o)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Wu++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=lT++,n="_"+n+"r_"+s.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Qf,useFormState:Hg,useActionState:Hg,useOptimistic:function(e){var n=sn();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Xf.bind(null,Rt,!0,s),s.dispatch=n,[e,n]},useMemoCache:zf,useCacheRefresh:function(){return sn().memoizedState=pT.bind(null,Rt)},useEffectEvent:function(e){var n=sn(),s={impl:e};return n.memoizedState=s,function(){if((Kt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},$f={readContext:Ge,use:ec,useCallback:t0,useContext:Ge,useEffect:Ff,useImperativeHandle:Wg,useInsertionEffect:$g,useLayoutEffect:Zg,useMemo:e0,useReducer:nc,useRef:Yg,useState:function(){return nc($i)},useDebugValue:Gf,useDeferredValue:function(e,n){var s=ye();return n0(s,Jt.memoizedState,e,n)},useTransition:function(){var e=nc($i)[0],n=ye().memoizedState;return[typeof e=="boolean"?e:ll(e),n]},useSyncExternalStore:Og,useId:a0,useHostTransitionStatus:Qf,useFormState:Fg,useActionState:Fg,useOptimistic:function(e,n){var s=ye();return kg(s,Jt,e,n)},useMemoCache:zf,useCacheRefresh:o0};$f.useEffectEvent=Xg;var f0={readContext:Ge,use:ec,useCallback:t0,useContext:Ge,useEffect:Ff,useImperativeHandle:Wg,useInsertionEffect:$g,useLayoutEffect:Zg,useMemo:e0,useReducer:jf,useRef:Yg,useState:function(){return jf($i)},useDebugValue:Gf,useDeferredValue:function(e,n){var s=ye();return Jt===null?Kf(s,e,n):n0(s,Jt.memoizedState,e,n)},useTransition:function(){var e=jf($i)[0],n=ye().memoizedState;return[typeof e=="boolean"?e:ll(e),n]},useSyncExternalStore:Og,useId:a0,useHostTransitionStatus:Qf,useFormState:Kg,useActionState:Kg,useOptimistic:function(e,n){var s=ye();return Jt!==null?kg(s,Jt,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:zf,useCacheRefresh:o0};f0.useEffectEvent=Xg;function Zf(e,n,s,o){n=e.memoizedState,s=s(o,n),s=s==null?n:b({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Jf={enqueueSetState:function(e,n,s){e=e._reactInternals;var o=bn(),h=Dr(o);h.payload=n,s!=null&&(h.callback=s),n=Nr(e,h,o),n!==null&&(dn(n,e,o),rl(n,e,o))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var o=bn(),h=Dr(o);h.tag=1,h.payload=n,s!=null&&(h.callback=s),n=Nr(e,h,o),n!==null&&(dn(n,e,o),rl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=bn(),o=Dr(s);o.tag=2,n!=null&&(o.callback=n),n=Nr(e,o,s),n!==null&&(dn(n,e,s),rl(n,e,s))}};function d0(e,n,s,o,h,f,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,m):n.prototype&&n.prototype.isPureReactComponent?!$o(s,o)||!$o(h,f):!0}function p0(e,n,s,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==e&&Jf.enqueueReplaceState(n,n.state,null)}function Bs(e,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(e=e.defaultProps){s===n&&(s=b({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}function m0(e){ku(e)}function g0(e){console.error(e)}function y0(e){ku(e)}function ac(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function _0(e,n,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Wf(e,n,s){return s=Dr(s),s.tag=3,s.payload={element:null},s.callback=function(){ac(e,n)},s}function v0(e){return e=Dr(e),e.tag=3,e}function E0(e,n,s,o){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=o.value;e.payload=function(){return h(f)},e.callback=function(){_0(n,s,o)}}var m=s.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){_0(n,s,o),typeof h!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function gT(e,n,s,o,h){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&wa(n,s,h,!0),s=En.current,s!==null){switch(s.tag){case 31:case 13:return Ln===null?_c():s.alternate===null&&fe===0&&(fe=3),s.flags&=-257,s.flags|=65536,s.lanes=h,o===Yu?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),bd(e,o,h)),!1;case 22:return s.flags|=65536,o===Yu?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),bd(e,o,h)),!1}throw Error(a(435,s.tag))}return bd(e,o,h),_c(),!1}if(Lt)return n=En.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,o!==_f&&(e=Error(a(422),{cause:o}),Wo(xn(e,s)))):(o!==_f&&(n=Error(a(423),{cause:o}),Wo(xn(n,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=xn(o,s),h=Wf(e.stateNode,o,h),Df(e,h),fe!==4&&(fe=2)),!1;var f=Error(a(520),{cause:o});if(f=xn(f,s),_l===null?_l=[f]:_l.push(f),fe!==4&&(fe=2),n===null)return!0;o=xn(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=Wf(s.stateNode,o,e),Df(s,e),!1;case 1:if(n=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Lr===null||!Lr.has(f))))return s.flags|=65536,h&=-h,s.lanes|=h,h=v0(h),E0(h,e,s,o),Df(s,h),!1}s=s.return}while(s!==null);return!1}var td=Error(a(461)),Ce=!1;function Ke(e,n,s,o){n.child=e===null?bg(n,null,s,o):Ps(n,e.child,s,o)}function T0(e,n,s,o,h){s=s.render;var f=n.ref;if("ref"in o){var m={};for(var E in o)E!=="ref"&&(m[E]=o[E])}else m=o;return Vs(n),o=Uf(e,n,s,m,f,h),E=Lf(),e!==null&&!Ce?(kf(e,n,h),Zi(e,n,h)):(Lt&&E&&gf(n),n.flags|=1,Ke(e,n,o,h),n.child)}function S0(e,n,s,o,h){if(e===null){var f=s.type;return typeof f=="function"&&!df(f)&&f.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=f,A0(e,n,f,o,h)):(e=ju(s.type,null,o,n,n.mode,h),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ld(e,h)){var m=f.memoizedProps;if(s=s.compare,s=s!==null?s:$o,s(m,o)&&e.ref===n.ref)return Zi(e,n,h)}return n.flags|=1,e=Gi(f,o),e.ref=n.ref,e.return=n,n.child=e}function A0(e,n,s,o,h){if(e!==null){var f=e.memoizedProps;if($o(f,o)&&e.ref===n.ref)if(Ce=!1,n.pendingProps=o=f,ld(e,h))(e.flags&131072)!==0&&(Ce=!0);else return n.lanes=e.lanes,Zi(e,n,h)}return ed(e,n,s,o,h)}function b0(e,n,s,o){var h=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|s:s,e!==null){for(o=n.child=e.child,h=0;o!==null;)h=h|o.lanes|o.childLanes,o=o.sibling;o=h&~f}else o=0,n.child=null;return w0(e,n,f,s,o)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gu(n,f!==null?f.cachePool:null),f!==null?Cg(n,f):Of(),Ig(n);else return o=n.lanes=536870912,w0(e,n,f!==null?f.baseLanes|s:s,s,o)}else f!==null?(Gu(n,f.cachePool),Cg(n,f),xr(),n.memoizedState=null):(e!==null&&Gu(n,null),Of(),xr());return Ke(e,n,h,s),n.child}function hl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function w0(e,n,s,o,h){var f=wf();return f=f===null?null:{parent:we._currentValue,pool:f},n.memoizedState={baseLanes:s,cachePool:f},e!==null&&Gu(n,null),Of(),Ig(n),e!==null&&wa(e,n,o,!0),n.childLanes=h,null}function oc(e,n){return n=uc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function R0(e,n,s){return Ps(n,e.child,null,s),e=oc(n,n.pendingProps),e.flags|=2,Tn(n),n.memoizedState=null,e}function yT(e,n,s){var o=n.pendingProps,h=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Lt){if(o.mode==="hidden")return e=oc(n,o),n.lanes=536870912,hl(null,e);if(Mf(n),(e=re)?(e=Py(e,Un),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:br!==null?{id:bi,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},s=ug(e),s.return=n,n.child=s,Fe=n,re=null)):e=null,e===null)throw Rr(n);return n.lanes=536870912,null}return oc(n,o)}var f=e.memoizedState;if(f!==null){var m=f.dehydrated;if(Mf(n),h)if(n.flags&256)n.flags&=-257,n=R0(e,n,s);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(Ce||wa(e,n,s,!1),h=(s&e.childLanes)!==0,Ce||h){if(o=ee,o!==null&&(m=xo(o,s),m!==0&&m!==f.retryLane))throw f.retryLane=m,Ns(e,m),dn(o,e,m),td;_c(),n=R0(e,n,s)}else e=f.treeContext,re=kn(m.nextSibling),Fe=n,Lt=!0,wr=null,Un=!1,e!==null&&fg(n,e),n=oc(n,o),n.flags|=4096;return n}return e=Gi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function lc(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function ed(e,n,s,o,h){return Vs(n),s=Uf(e,n,s,o,void 0,h),o=Lf(),e!==null&&!Ce?(kf(e,n,h),Zi(e,n,h)):(Lt&&o&&gf(n),n.flags|=1,Ke(e,n,s,h),n.child)}function C0(e,n,s,o,h,f){return Vs(n),n.updateQueue=null,s=Ng(n,o,s,h),Dg(e),o=Lf(),e!==null&&!Ce?(kf(e,n,f),Zi(e,n,f)):(Lt&&o&&gf(n),n.flags|=1,Ke(e,n,s,f),n.child)}function I0(e,n,s,o,h){if(Vs(n),n.stateNode===null){var f=Ta,m=s.contextType;typeof m=="object"&&m!==null&&(f=Ge(m)),f=new s(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Jf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Cf(n),m=s.contextType,f.context=typeof m=="object"&&m!==null?Ge(m):Ta,f.state=n.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Zf(n,s,m,o),f.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(m=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),m!==f.state&&Jf.enqueueReplaceState(f,f.state,null),al(n,o,f,h),sl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,I=Bs(s,E);f.props=I;var P=f.context,F=s.contextType;m=Ta,typeof F=="object"&&F!==null&&(m=Ge(F));var Y=s.getDerivedStateFromProps;F=typeof Y=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,F||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||P!==m)&&p0(n,f,o,m),Ir=!1;var z=n.memoizedState;f.state=z,al(n,o,f,h),sl(),P=n.memoizedState,E||z!==P||Ir?(typeof Y=="function"&&(Zf(n,s,Y,o),P=n.memoizedState),(I=Ir||d0(n,s,I,o,z,P,m))?(F||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=P),f.props=o,f.state=P,f.context=m,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,If(e,n),m=n.memoizedProps,F=Bs(s,m),f.props=F,Y=n.pendingProps,z=f.context,P=s.contextType,I=Ta,typeof P=="object"&&P!==null&&(I=Ge(P)),E=s.getDerivedStateFromProps,(P=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==Y||z!==I)&&p0(n,f,o,I),Ir=!1,z=n.memoizedState,f.state=z,al(n,o,f,h),sl();var j=n.memoizedState;m!==Y||z!==j||Ir||e!==null&&e.dependencies!==null&&Hu(e.dependencies)?(typeof E=="function"&&(Zf(n,s,E,o),j=n.memoizedState),(F=Ir||d0(n,s,F,o,z,j,I)||e!==null&&e.dependencies!==null&&Hu(e.dependencies))?(P||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,j,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,j,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=j),f.props=o,f.state=j,f.context=I,o=F):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,lc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ps(n,e.child,null,h),n.child=Ps(n,null,s,h)):Ke(e,n,s,h),n.memoizedState=f.state,e=n.child):e=Zi(e,n,h),e}function D0(e,n,s,o){return xs(),n.flags|=256,Ke(e,n,s,o),n.child}var nd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function id(e){return{baseLanes:e,cachePool:_g()}}function rd(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=An),e}function N0(e,n,s){var o=n.pendingProps,h=!1,f=(n.flags&128)!==0,m;if((m=f)||(m=e!==null&&e.memoizedState===null?!1:(ge.current&2)!==0),m&&(h=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(Lt){if(h?Or(n):xr(),(e=re)?(e=Py(e,Un),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:br!==null?{id:bi,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},s=ug(e),s.return=n,n.child=s,Fe=n,re=null)):e=null,e===null)throw Rr(n);return Bd(e)?n.lanes=32:n.lanes=536870912,null}var E=o.children;return o=o.fallback,h?(xr(),h=n.mode,E=uc({mode:"hidden",children:E},h),o=Os(o,h,s,null),E.return=n,o.return=n,E.sibling=o,n.child=E,o=n.child,o.memoizedState=id(s),o.childLanes=rd(e,m,s),n.memoizedState=nd,hl(null,o)):(Or(n),sd(n,E))}var I=e.memoizedState;if(I!==null&&(E=I.dehydrated,E!==null)){if(f)n.flags&256?(Or(n),n.flags&=-257,n=ad(e,n,s)):n.memoizedState!==null?(xr(),n.child=e.child,n.flags|=128,n=null):(xr(),E=o.fallback,h=n.mode,o=uc({mode:"visible",children:o.children},h),E=Os(E,h,s,null),E.flags|=2,o.return=n,E.return=n,o.sibling=E,n.child=o,Ps(n,e.child,null,s),o=n.child,o.memoizedState=id(s),o.childLanes=rd(e,m,s),n.memoizedState=nd,n=hl(null,o));else if(Or(n),Bd(E)){if(m=E.nextSibling&&E.nextSibling.dataset,m)var P=m.dgst;m=P,o=Error(a(419)),o.stack="",o.digest=m,Wo({value:o,source:null,stack:null}),n=ad(e,n,s)}else if(Ce||wa(e,n,s,!1),m=(s&e.childLanes)!==0,Ce||m){if(m=ee,m!==null&&(o=xo(m,s),o!==0&&o!==I.retryLane))throw I.retryLane=o,Ns(e,o),dn(m,e,o),td;zd(E)||_c(),n=ad(e,n,s)}else zd(E)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,re=kn(E.nextSibling),Fe=n,Lt=!0,wr=null,Un=!1,e!==null&&fg(n,e),n=sd(n,o.children),n.flags|=4096);return n}return h?(xr(),E=o.fallback,h=n.mode,I=e.child,P=I.sibling,o=Gi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,P!==null?E=Gi(P,E):(E=Os(E,h,s,null),E.flags|=2),E.return=n,o.return=n,o.sibling=E,n.child=o,hl(null,o),o=n.child,E=e.child.memoizedState,E===null?E=id(s):(h=E.cachePool,h!==null?(I=we._currentValue,h=h.parent!==I?{parent:I,pool:I}:h):h=_g(),E={baseLanes:E.baseLanes|s,cachePool:h}),o.memoizedState=E,o.childLanes=rd(e,m,s),n.memoizedState=nd,hl(e.child,o)):(Or(n),s=e.child,e=s.sibling,s=Gi(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=s,n.memoizedState=null,s)}function sd(e,n){return n=uc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function uc(e,n){return e=vn(22,e,null,n),e.lanes=0,e}function ad(e,n,s){return Ps(n,e.child,null,s),e=sd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function O0(e,n,s){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Tf(e.return,n,s)}function od(e,n,s,o,h,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:h,treeForkCount:f}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=s,m.tailMode=h,m.treeForkCount=f)}function x0(e,n,s){var o=n.pendingProps,h=o.revealOrder,f=o.tail;o=o.children;var m=ge.current,E=(m&2)!==0;if(E?(m=m&1|2,n.flags|=128):m&=1,et(ge,m),Ke(e,n,o,s),o=Lt?Jo:0,!E&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&O0(e,s,n);else if(e.tag===19)O0(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(s=n.child,h=null;s!==null;)e=s.alternate,e!==null&&Zu(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=n.child,n.child=null):(h=s.sibling,s.sibling=null),od(n,!1,h,s,f,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=n.child,n.child=null;h!==null;){if(e=h.alternate,e!==null&&Zu(e)===null){n.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}od(n,!0,s,null,f,o);break;case"together":od(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Zi(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Ur|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(wa(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,s=Gi(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=Gi(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function ld(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Hu(e)))}function _T(e,n,s){switch(n.tag){case 3:ie(n,n.stateNode.containerInfo),Cr(n,we,e.memoizedState.cache),xs();break;case 27:case 5:qn(n);break;case 4:ie(n,n.stateNode.containerInfo);break;case 10:Cr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Or(n),n.flags|=128,null):(s&n.child.childLanes)!==0?N0(e,n,s):(Or(n),e=Zi(e,n,s),e!==null?e.sibling:null);Or(n);break;case 19:var h=(e.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(wa(e,n,s,!1),o=(s&n.childLanes)!==0),h){if(o)return x0(e,n,s);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),et(ge,ge.current),o)break;return null;case 22:return n.lanes=0,b0(e,n,s,n.pendingProps);case 24:Cr(n,we,e.memoizedState.cache)}return Zi(e,n,s)}function M0(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ce=!0;else{if(!ld(e,s)&&(n.flags&128)===0)return Ce=!1,_T(e,n,s);Ce=(e.flags&131072)!==0}else Ce=!1,Lt&&(n.flags&1048576)!==0&&hg(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ls(n.elementType),n.type=e,typeof e=="function")df(e)?(o=Bs(e,o),n.tag=1,n=I0(null,n,e,o,s)):(n.tag=0,n=ed(null,n,e,o,s));else{if(e!=null){var h=e.$$typeof;if(h===lt){n.tag=11,n=T0(null,n,e,o,s);break t}else if(h===A){n.tag=14,n=S0(null,n,e,o,s);break t}}throw n=ne(e)||e,Error(a(306,n,""))}}return n;case 0:return ed(e,n,n.type,n.pendingProps,s);case 1:return o=n.type,h=Bs(o,n.pendingProps),I0(e,n,o,h,s);case 3:t:{if(ie(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var f=n.memoizedState;h=f.element,If(e,n),al(n,o,null,s);var m=n.memoizedState;if(o=m.cache,Cr(n,we,o),o!==f.cache&&Sf(n,[we],s,!0),sl(),o=m.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=D0(e,n,o,s);break t}else if(o!==h){h=xn(Error(a(424)),n),Wo(h),n=D0(e,n,o,s);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(re=kn(e.firstChild),Fe=n,Lt=!0,wr=null,Un=!0,s=bg(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(xs(),o===h){n=Zi(e,n,s);break t}Ke(e,n,o,s)}n=n.child}return n;case 26:return lc(e,n),e===null?(s=Fy(n.type,null,n.pendingProps,null))?n.memoizedState=s:Lt||(s=n.type,e=n.pendingProps,o=wc(vt.current).createElement(s),o[Se]=n,o[ke]=e,Ye(o,s,e),Ae(o),n.stateNode=o):n.memoizedState=Fy(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qn(n),e===null&&Lt&&(o=n.stateNode=jy(n.type,n.pendingProps,vt.current),Fe=n,Un=!0,h=re,Br(n.type)?(jd=h,re=kn(o.firstChild)):re=h),Ke(e,n,n.pendingProps.children,s),lc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Lt&&((h=o=re)&&(o=QT(o,n.type,n.pendingProps,Un),o!==null?(n.stateNode=o,Fe=n,re=kn(o.firstChild),Un=!1,h=!0):h=!1),h||Rr(n)),qn(n),h=n.type,f=n.pendingProps,m=e!==null?e.memoizedProps:null,o=f.children,Ld(h,f)?o=null:m!==null&&Ld(h,m)&&(n.flags|=32),n.memoizedState!==null&&(h=Uf(e,n,uT,null,null,s),Rl._currentValue=h),lc(e,n),Ke(e,n,o,s),n.child;case 6:return e===null&&Lt&&((e=s=re)&&(s=XT(s,n.pendingProps,Un),s!==null?(n.stateNode=s,Fe=n,re=null,e=!0):e=!1),e||Rr(n)),null;case 13:return N0(e,n,s);case 4:return ie(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ps(n,null,o,s):Ke(e,n,o,s),n.child;case 11:return T0(e,n,n.type,n.pendingProps,s);case 7:return Ke(e,n,n.pendingProps,s),n.child;case 8:return Ke(e,n,n.pendingProps.children,s),n.child;case 12:return Ke(e,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,Cr(n,n.type,o.value),Ke(e,n,o.children,s),n.child;case 9:return h=n.type._context,o=n.pendingProps.children,Vs(n),h=Ge(h),o=o(h),n.flags|=1,Ke(e,n,o,s),n.child;case 14:return S0(e,n,n.type,n.pendingProps,s);case 15:return A0(e,n,n.type,n.pendingProps,s);case 19:return x0(e,n,s);case 31:return yT(e,n,s);case 22:return b0(e,n,s,n.pendingProps);case 24:return Vs(n),o=Ge(we),e===null?(h=wf(),h===null&&(h=ee,f=Af(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=s),h=f),n.memoizedState={parent:o,cache:h},Cf(n),Cr(n,we,h)):((e.lanes&s)!==0&&(If(e,n),al(n,null,null,s),sl()),h=e.memoizedState,f=n.memoizedState,h.parent!==o?(h={parent:o,cache:o},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),Cr(n,we,o)):(o=f.cache,Cr(n,we,o),o!==h.cache&&Sf(n,[we],s,!0))),Ke(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Ji(e){e.flags|=4}function ud(e,n,s,o,h){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(ay())e.flags|=8192;else throw ks=Yu,Rf}else e.flags&=-16777217}function V0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Xy(n))if(ay())e.flags|=8192;else throw ks=Yu,Rf}function cc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?gu():536870912,e.lanes|=n,ka|=n)}function fl(e,n){if(!Lt)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(n)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=s,n}function vT(e,n,s){var o=n.pendingProps;switch(yf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return se(n),null;case 3:return s=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qi(we),qt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ba(n)?Ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vf())),se(n),null;case 26:var h=n.type,f=n.memoizedState;return e===null?(Ji(n),f!==null?(se(n),V0(n,f)):(se(n),ud(n,h,null,o,s))):f?f!==e.memoizedState?(Ji(n),se(n),V0(n,f)):(se(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ji(n),se(n),ud(n,h,e,o,s)),null;case 27:if(Hn(n),s=vt.current,h=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return se(n),null}e=it.current,ba(n)?dg(n):(e=jy(h,o,s),n.stateNode=e,Ji(n))}return se(n),null;case 5:if(Hn(n),h=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return se(n),null}if(f=it.current,ba(n))dg(n);else{var m=wc(vt.current);switch(f){case 1:f=m.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:f=m.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":f=m.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":f=m.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":f=m.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?m.createElement("select",{is:o.is}):m.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?m.createElement(h,{is:o.is}):m.createElement(h)}}f[Se]=n,f[ke]=o;t:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)f.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break t;for(;m.sibling===null;){if(m.return===null||m.return===n)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=f;t:switch(Ye(f,h,o),h){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ji(n)}}return se(n),ud(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,s),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=vt.current,ba(n)){if(e=n.stateNode,s=n.memoizedProps,o=null,h=Fe,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[Se]=n,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Ny(e.nodeValue,s)),e||Rr(n,!0)}else e=wc(e).createTextNode(o),e[Se]=n,n.stateNode=e}return se(n),null;case 31:if(s=n.memoizedState,e===null||e.memoizedState!==null){if(o=ba(n),s!==null){if(e===null){if(!o)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Se]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;se(n),e=!1}else s=vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return n.flags&256?(Tn(n),n):(Tn(n),null);if((n.flags&128)!==0)throw Error(a(558))}return se(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=ba(n),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Se]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;se(n),h=!1}else h=vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return n.flags&256?(Tn(n),n):(Tn(n),null)}return Tn(n),(n.flags&128)!==0?(n.lanes=s,n):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=n.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==h&&(o.flags|=2048)),s!==e&&s&&(n.child.flags|=8192),cc(n,n.updateQueue),se(n),null);case 4:return qt(),e===null&&Od(n.stateNode.containerInfo),se(n),null;case 10:return Qi(n.type),se(n),null;case 19:if(G(ge),o=n.memoizedState,o===null)return se(n),null;if(h=(n.flags&128)!==0,f=o.rendering,f===null)if(h)fl(o,!1);else{if(fe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Zu(e),f!==null){for(n.flags|=128,fl(o,!1),e=f.updateQueue,n.updateQueue=e,cc(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)lg(s,e),s=s.sibling;return et(ge,ge.current&1|2),Lt&&Ki(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&nn()>mc&&(n.flags|=128,h=!0,fl(o,!1),n.lanes=4194304)}else{if(!h)if(e=Zu(f),e!==null){if(n.flags|=128,h=!0,e=e.updateQueue,n.updateQueue=e,cc(n,e),fl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Lt)return se(n),null}else 2*nn()-o.renderingStartTime>mc&&s!==536870912&&(n.flags|=128,h=!0,fl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=nn(),e.sibling=null,s=ge.current,et(ge,h?s&1|2:s&1),Lt&&Ki(n,o.treeForkCount),e):(se(n),null);case 22:case 23:return Tn(n),xf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),s=n.updateQueue,s!==null&&cc(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),e!==null&&G(Us),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Qi(we),se(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function ET(e,n){switch(yf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qi(we),qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Hn(n),null;case 31:if(n.memoizedState!==null){if(Tn(n),n.alternate===null)throw Error(a(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Tn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(ge),null;case 4:return qt(),null;case 10:return Qi(n.type),null;case 22:case 23:return Tn(n),xf(),e!==null&&G(Us),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Qi(we),null;case 25:return null;default:return null}}function U0(e,n){switch(yf(n),n.tag){case 3:Qi(we),qt();break;case 26:case 27:case 5:Hn(n);break;case 4:qt();break;case 31:n.memoizedState!==null&&Tn(n);break;case 13:Tn(n);break;case 19:G(ge);break;case 10:Qi(n.type);break;case 22:case 23:Tn(n),xf(),e!==null&&G(Us);break;case 24:Qi(we)}}function dl(e,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var h=o.next;s=h;do{if((s.tag&e)===e){o=void 0;var f=s.create,m=s.inst;o=f(),m.destroy=o}s=s.next}while(s!==h)}}catch(E){$t(n,n.return,E)}}function Mr(e,n,s){try{var o=n.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var f=h.next;o=f;do{if((o.tag&e)===e){var m=o.inst,E=m.destroy;if(E!==void 0){m.destroy=void 0,h=n;var I=s,P=E;try{P()}catch(F){$t(h,I,F)}}}o=o.next}while(o!==f)}}catch(F){$t(n,n.return,F)}}function L0(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{Rg(n,s)}catch(o){$t(e,e.return,o)}}}function k0(e,n,s){s.props=Bs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){$t(e,n,o)}}function pl(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(h){$t(e,n,h)}}function Ri(e,n){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(h){$t(e,n,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){$t(e,n,h)}else s.current=null}function P0(e){var n=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(h){$t(e,e.return,h)}}function cd(e,n,s){try{var o=e.stateNode;qT(o,e.type,s,n),o[ke]=n}catch(h){$t(e,e.return,h)}}function z0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Br(e.type)||e.tag===4}function hd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Br(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fd(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Qn));else if(o!==4&&(o===27&&Br(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(fd(e,n,s),e=e.sibling;e!==null;)fd(e,n,s),e=e.sibling}function hc(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(o!==4&&(o===27&&Br(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(hc(e,n,s),e=e.sibling;e!==null;)hc(e,n,s),e=e.sibling}function B0(e){var n=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,h=n.attributes;h.length;)n.removeAttributeNode(h[0]);Ye(n,o,s),n[Se]=e,n[ke]=s}catch(f){$t(e,e.return,f)}}var Wi=!1,Ie=!1,dd=!1,j0=typeof WeakSet=="function"?WeakSet:Set,ze=null;function TT(e,n){if(e=e.containerInfo,Vd=xc,e=Wm(e),af(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var h=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var m=0,E=-1,I=-1,P=0,F=0,Y=e,z=null;e:for(;;){for(var j;Y!==s||h!==0&&Y.nodeType!==3||(E=m+h),Y!==f||o!==0&&Y.nodeType!==3||(I=m+o),Y.nodeType===3&&(m+=Y.nodeValue.length),(j=Y.firstChild)!==null;)z=Y,Y=j;for(;;){if(Y===e)break e;if(z===s&&++P===h&&(E=m),z===f&&++F===o&&(I=m),(j=Y.nextSibling)!==null)break;Y=z,z=Y.parentNode}Y=j}s=E===-1||I===-1?null:{start:E,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ud={focusedElem:e,selectionRange:s},xc=!1,ze=n;ze!==null;)if(n=ze,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ze=e;else for(;ze!==null;){switch(n=ze,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)h=e[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=n,h=f.memoizedProps,f=f.memoizedState,o=s.stateNode;try{var ot=Bs(s.type,h);e=o.getSnapshotBeforeUpdate(ot,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(gt){$t(s,s.return,gt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)Pd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,ze=e;break}ze=n.return}}function q0(e,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:er(e,s),o&4&&dl(5,s);break;case 1:if(er(e,s),o&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(m){$t(s,s.return,m)}else{var h=Bs(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(h,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){$t(s,s.return,m)}}o&64&&L0(s),o&512&&pl(s,s.return);break;case 3:if(er(e,s),o&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Rg(e,n)}catch(m){$t(s,s.return,m)}}break;case 27:n===null&&o&4&&B0(s);case 26:case 5:er(e,s),n===null&&o&4&&P0(s),o&512&&pl(s,s.return);break;case 12:er(e,s);break;case 31:er(e,s),o&4&&G0(e,s);break;case 13:er(e,s),o&4&&K0(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=NT.bind(null,s),$T(e,s))));break;case 22:if(o=s.memoizedState!==null||Wi,!o){n=n!==null&&n.memoizedState!==null||Ie,h=Wi;var f=Ie;Wi=o,(Ie=n)&&!f?nr(e,s,(s.subtreeFlags&8772)!==0):er(e,s),Wi=h,Ie=f}break;case 30:break;default:er(e,s)}}function H0(e){var n=e.alternate;n!==null&&(e.alternate=null,H0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&oa(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var le=null,un=!1;function tr(e,n,s){for(s=s.child;s!==null;)F0(e,n,s),s=s.sibling}function F0(e,n,s){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Fn,s)}catch{}switch(s.tag){case 26:Ie||Ri(s,n),tr(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ie||Ri(s,n);var o=le,h=un;Br(s.type)&&(le=s.stateNode,un=!1),tr(e,n,s),Al(s.stateNode),le=o,un=h;break;case 5:Ie||Ri(s,n);case 6:if(o=le,h=un,le=null,tr(e,n,s),le=o,un=h,le!==null)if(un)try{(le.nodeType===9?le.body:le.nodeName==="HTML"?le.ownerDocument.body:le).removeChild(s.stateNode)}catch(f){$t(s,n,f)}else try{le.removeChild(s.stateNode)}catch(f){$t(s,n,f)}break;case 18:le!==null&&(un?(e=le,Ly(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ga(e)):Ly(le,s.stateNode));break;case 4:o=le,h=un,le=s.stateNode.containerInfo,un=!0,tr(e,n,s),le=o,un=h;break;case 0:case 11:case 14:case 15:Mr(2,s,n),Ie||Mr(4,s,n),tr(e,n,s);break;case 1:Ie||(Ri(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&k0(s,n,o)),tr(e,n,s);break;case 21:tr(e,n,s);break;case 22:Ie=(o=Ie)||s.memoizedState!==null,tr(e,n,s),Ie=o;break;default:tr(e,n,s)}}function G0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ga(e)}catch(s){$t(n,n.return,s)}}}function K0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ga(e)}catch(s){$t(n,n.return,s)}}function ST(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new j0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new j0),n;default:throw Error(a(435,e.tag))}}function fc(e,n){var s=ST(e);n.forEach(function(o){if(!s.has(o)){s.add(o);var h=OT.bind(null,e,o);o.then(h,h)}})}function cn(e,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var h=s[o],f=e,m=n,E=m;t:for(;E!==null;){switch(E.tag){case 27:if(Br(E.type)){le=E.stateNode,un=!1;break t}break;case 5:le=E.stateNode,un=!1;break t;case 3:case 4:le=E.stateNode.containerInfo,un=!0;break t}E=E.return}if(le===null)throw Error(a(160));F0(f,m,h),le=null,un=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Y0(n,e),n=n.sibling}var ti=null;function Y0(e,n){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:cn(n,e),hn(e),o&4&&(Mr(3,e,e.return),dl(3,e),Mr(5,e,e.return));break;case 1:cn(n,e),hn(e),o&512&&(Ie||s===null||Ri(s,s.return)),o&64&&Wi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var h=ti;if(cn(n,e),hn(e),o&512&&(Ie||s===null||Ri(s,s.return)),o&4){var f=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":f=h.getElementsByTagName("title")[0],(!f||f[fi]||f[Se]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(o),h.head.insertBefore(f,h.querySelector("head > title"))),Ye(f,o,s),f[Se]=e,Ae(f),o=f;break t;case"link":var m=Yy("link","href",h).get(o+(s.href||""));if(m){for(var E=0;E<m.length;E++)if(f=m[E],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){m.splice(E,1);break e}}f=h.createElement(o),Ye(f,o,s),h.head.appendChild(f);break;case"meta":if(m=Yy("meta","content",h).get(o+(s.content||""))){for(E=0;E<m.length;E++)if(f=m[E],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){m.splice(E,1);break e}}f=h.createElement(o),Ye(f,o,s),h.head.appendChild(f);break;default:throw Error(a(468,o))}f[Se]=e,Ae(f),o=f}e.stateNode=o}else Qy(h,e.type,e.stateNode);else e.stateNode=Ky(h,o,e.memoizedProps);else f!==o?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,o===null?Qy(h,e.type,e.stateNode):Ky(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&cd(e,e.memoizedProps,s.memoizedProps)}break;case 27:cn(n,e),hn(e),o&512&&(Ie||s===null||Ri(s,s.return)),s!==null&&o&4&&cd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(cn(n,e),hn(e),o&512&&(Ie||s===null||Ri(s,s.return)),e.flags&32){h=e.stateNode;try{ln(h,"")}catch(ot){$t(e,e.return,ot)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,cd(e,h,s!==null?s.memoizedProps:h)),o&1024&&(dd=!0);break;case 6:if(cn(n,e),hn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(ot){$t(e,e.return,ot)}}break;case 3:if(Ic=null,h=ti,ti=Rc(n.containerInfo),cn(n,e),ti=h,hn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Ga(n.containerInfo)}catch(ot){$t(e,e.return,ot)}dd&&(dd=!1,Q0(e));break;case 4:o=ti,ti=Rc(e.stateNode.containerInfo),cn(n,e),hn(e),ti=o;break;case 12:cn(n,e),hn(e);break;case 31:cn(n,e),hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,fc(e,o)));break;case 13:cn(n,e),hn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(pc=nn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,fc(e,o)));break;case 22:h=e.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,P=Wi,F=Ie;if(Wi=P||h,Ie=F||I,cn(n,e),Ie=F,Wi=P,hn(e),o&8192)t:for(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,h&&(s===null||I||Wi||Ie||js(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){I=s=n;try{if(f=I.stateNode,h)m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{E=I.stateNode;var Y=I.memoizedProps.style,z=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(ot){$t(I,I.return,ot)}}}else if(n.tag===6){if(s===null){I=n;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(ot){$t(I,I.return,ot)}}}else if(n.tag===18){if(s===null){I=n;try{var j=I.stateNode;h?ky(j,!0):ky(I.stateNode,!1)}catch(ot){$t(I,I.return,ot)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,fc(e,s))));break;case 19:cn(n,e),hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,fc(e,o)));break;case 30:break;case 21:break;default:cn(n,e),hn(e)}}function hn(e){var n=e.flags;if(n&2){try{for(var s,o=e.return;o!==null;){if(z0(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,f=hd(e);hc(e,f,h);break;case 5:var m=s.stateNode;s.flags&32&&(ln(m,""),s.flags&=-33);var E=hd(e);hc(e,E,m);break;case 3:case 4:var I=s.stateNode.containerInfo,P=hd(e);fd(e,P,I);break;default:throw Error(a(161))}}catch(F){$t(e,e.return,F)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Q0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Q0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function er(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)q0(e,n.alternate,n),n=n.sibling}function js(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Mr(4,n,n.return),js(n);break;case 1:Ri(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&k0(n,n.return,s),js(n);break;case 27:Al(n.stateNode);case 26:case 5:Ri(n,n.return),js(n);break;case 22:n.memoizedState===null&&js(n);break;case 30:js(n);break;default:js(n)}e=e.sibling}}function nr(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,h=e,f=n,m=f.flags;switch(f.tag){case 0:case 11:case 15:nr(h,f,s),dl(4,f);break;case 1:if(nr(h,f,s),o=f,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(P){$t(o,o.return,P)}if(o=f,h=o.updateQueue,h!==null){var E=o.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)wg(I[h],E)}catch(P){$t(o,o.return,P)}}s&&m&64&&L0(f),pl(f,f.return);break;case 27:B0(f);case 26:case 5:nr(h,f,s),s&&o===null&&m&4&&P0(f),pl(f,f.return);break;case 12:nr(h,f,s);break;case 31:nr(h,f,s),s&&m&4&&G0(h,f);break;case 13:nr(h,f,s),s&&m&4&&K0(h,f);break;case 22:f.memoizedState===null&&nr(h,f,s),pl(f,f.return);break;case 30:break;default:nr(h,f,s)}n=n.sibling}}function pd(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&tl(s))}function md(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&tl(e))}function ei(e,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)X0(e,n,s,o),n=n.sibling}function X0(e,n,s,o){var h=n.flags;switch(n.tag){case 0:case 11:case 15:ei(e,n,s,o),h&2048&&dl(9,n);break;case 1:ei(e,n,s,o);break;case 3:ei(e,n,s,o),h&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&tl(e)));break;case 12:if(h&2048){ei(e,n,s,o),e=n.stateNode;try{var f=n.memoizedProps,m=f.id,E=f.onPostCommit;typeof E=="function"&&E(m,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){$t(n,n.return,I)}}else ei(e,n,s,o);break;case 31:ei(e,n,s,o);break;case 13:ei(e,n,s,o);break;case 23:break;case 22:f=n.stateNode,m=n.alternate,n.memoizedState!==null?f._visibility&2?ei(e,n,s,o):ml(e,n):f._visibility&2?ei(e,n,s,o):(f._visibility|=2,Va(e,n,s,o,(n.subtreeFlags&10256)!==0||!1)),h&2048&&pd(m,n);break;case 24:ei(e,n,s,o),h&2048&&md(n.alternate,n);break;default:ei(e,n,s,o)}}function Va(e,n,s,o,h){for(h=h&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,m=n,E=s,I=o,P=m.flags;switch(m.tag){case 0:case 11:case 15:Va(f,m,E,I,h),dl(8,m);break;case 23:break;case 22:var F=m.stateNode;m.memoizedState!==null?F._visibility&2?Va(f,m,E,I,h):ml(f,m):(F._visibility|=2,Va(f,m,E,I,h)),h&&P&2048&&pd(m.alternate,m);break;case 24:Va(f,m,E,I,h),h&&P&2048&&md(m.alternate,m);break;default:Va(f,m,E,I,h)}n=n.sibling}}function ml(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,o=n,h=o.flags;switch(o.tag){case 22:ml(s,o),h&2048&&pd(o.alternate,o);break;case 24:ml(s,o),h&2048&&md(o.alternate,o);break;default:ml(s,o)}n=n.sibling}}var gl=8192;function Ua(e,n,s){if(e.subtreeFlags&gl)for(e=e.child;e!==null;)$0(e,n,s),e=e.sibling}function $0(e,n,s){switch(e.tag){case 26:Ua(e,n,s),e.flags&gl&&e.memoizedState!==null&&lS(s,ti,e.memoizedState,e.memoizedProps);break;case 5:Ua(e,n,s);break;case 3:case 4:var o=ti;ti=Rc(e.stateNode.containerInfo),Ua(e,n,s),ti=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=gl,gl=16777216,Ua(e,n,s),gl=o):Ua(e,n,s));break;default:Ua(e,n,s)}}function Z0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];ze=o,W0(o,e)}Z0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)J0(e),e=e.sibling}function J0(e){switch(e.tag){case 0:case 11:case 15:yl(e),e.flags&2048&&Mr(9,e,e.return);break;case 3:yl(e);break;case 12:yl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,dc(e)):yl(e);break;default:yl(e)}}function dc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];ze=o,W0(o,e)}Z0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Mr(8,n,n.return),dc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,dc(n));break;default:dc(n)}e=e.sibling}}function W0(e,n){for(;ze!==null;){var s=ze;switch(s.tag){case 0:case 11:case 15:Mr(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:tl(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,ze=o;else t:for(s=e;ze!==null;){o=ze;var h=o.sibling,f=o.return;if(H0(o),o===s){ze=null;break t}if(h!==null){h.return=f,ze=h;break t}ze=f}}}var AT={getCacheForType:function(e){var n=Ge(we),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s},cacheSignal:function(){return Ge(we).controller.signal}},bT=typeof WeakMap=="function"?WeakMap:Map,Kt=0,ee=null,Ot=null,Mt=0,Xt=0,Sn=null,Vr=!1,La=!1,gd=!1,ir=0,fe=0,Ur=0,qs=0,yd=0,An=0,ka=0,_l=null,fn=null,_d=!1,pc=0,ty=0,mc=1/0,gc=null,Lr=null,Ve=0,kr=null,Pa=null,rr=0,vd=0,Ed=null,ey=null,vl=0,Td=null;function bn(){return(Kt&2)!==0&&Mt!==0?Mt&-Mt:H.T!==null?Cd():yu()}function ny(){if(An===0)if((Mt&536870912)===0||Lt){var e=ms;ms<<=1,(ms&3932160)===0&&(ms=262144),An=e}else An=536870912;return e=En.current,e!==null&&(e.flags|=32),An}function dn(e,n,s){(e===ee&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(za(e,0),Pr(e,Mt,An,!1)),gs(e,s),((Kt&2)===0||e!==ee)&&(e===ee&&((Kt&2)===0&&(qs|=s),fe===4&&Pr(e,Mt,An,!1)),Ci(e))}function iy(e,n,s){if((Kt&6)!==0)throw Error(a(327));var o=!s&&(n&127)===0&&(n&e.expiredLanes)===0||Gn(e,n),h=o?CT(e,n):Ad(e,n,!0),f=o;do{if(h===0){La&&!o&&Pr(e,n,0,!1);break}else{if(s=e.current.alternate,f&&!wT(s)){h=Ad(e,n,!1),f=!1;continue}if(h===2){if(f=n,e.errorRecoveryDisabledLanes&f)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;t:{var E=e;h=_l;var I=E.current.memoizedState.isDehydrated;if(I&&(za(E,m).flags|=256),m=Ad(E,m,!1),m!==2){if(gd&&!I){E.errorRecoveryDisabledLanes|=f,qs|=f,h=4;break t}f=fn,fn=h,f!==null&&(fn===null?fn=f:fn.push.apply(fn,f))}h=m}if(f=!1,h!==2)continue}}if(h===1){za(e,0),Pr(e,n,0,!0);break}t:{switch(o=e,f=h,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Pr(o,n,An,!Vr);break t;case 2:fn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(h=pc+300-nn(),10<h)){if(Pr(o,n,An,!Vr),ui(o,0,!0)!==0)break t;rr=n,o.timeoutHandle=Vy(ry.bind(null,o,s,fn,gc,_d,n,An,qs,ka,Vr,f,"Throttled",-0,0),h);break t}ry(o,s,fn,gc,_d,n,An,qs,ka,Vr,f,null,-0,0)}}break}while(!0);Ci(e)}function ry(e,n,s,o,h,f,m,E,I,P,F,Y,z,j){if(e.timeoutHandle=-1,Y=n.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qn},$0(n,f,Y);var ot=(f&62914560)===f?pc-nn():(f&4194048)===f?ty-nn():0;if(ot=uS(Y,ot),ot!==null){rr=f,e.cancelPendingCommit=ot(fy.bind(null,e,n,f,s,o,h,m,E,I,F,Y,null,z,j)),Pr(e,f,m,!P);return}}fy(e,n,f,s,o,h,m,E,I)}function wT(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var h=s[o],f=h.getSnapshot;h=h.value;try{if(!_n(f(),h))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pr(e,n,s,o){n&=~yd,n&=~qs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var h=n;0<h;){var f=31-pe(h),m=1<<f;o[f]=-1,h&=~m}s!==0&&ys(e,s,n)}function yc(){return(Kt&6)===0?(El(0),!1):!0}function Sd(){if(Ot!==null){if(Xt===0)var e=Ot.return;else e=Ot,Yi=Ms=null,Pf(e),Da=null,nl=0,e=Ot;for(;e!==null;)U0(e.alternate,e),e=e.return;Ot=null}}function za(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,GT(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),rr=0,Sd(),ee=e,Ot=s=Gi(e.current,null),Mt=n,Xt=0,Sn=null,Vr=!1,La=Gn(e,n),gd=!1,ka=An=yd=qs=Ur=fe=0,fn=_l=null,_d=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var h=31-pe(o),f=1<<h;n|=e[h],o&=~f}return ir=n,Pu(),s}function sy(e,n){Rt=null,H.H=cl,n===Ia||n===Ku?(n=Tg(),Xt=3):n===Rf?(n=Tg(),Xt=4):Xt=n===td?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Sn=n,Ot===null&&(fe=1,ac(e,xn(n,e.current)))}function ay(){var e=En.current;return e===null?!0:(Mt&4194048)===Mt?Ln===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?e===Ln:!1}function oy(){var e=H.H;return H.H=cl,e===null?cl:e}function ly(){var e=H.A;return H.A=AT,e}function _c(){fe=4,Vr||(Mt&4194048)!==Mt&&En.current!==null||(La=!0),(Ur&134217727)===0&&(qs&134217727)===0||ee===null||Pr(ee,Mt,An,!1)}function Ad(e,n,s){var o=Kt;Kt|=2;var h=oy(),f=ly();(ee!==e||Mt!==n)&&(gc=null,za(e,n)),n=!1;var m=fe;t:do try{if(Xt!==0&&Ot!==null){var E=Ot,I=Sn;switch(Xt){case 8:Sd(),m=6;break t;case 3:case 2:case 9:case 6:En.current===null&&(n=!0);var P=Xt;if(Xt=0,Sn=null,Ba(e,E,I,P),s&&La){m=0;break t}break;default:P=Xt,Xt=0,Sn=null,Ba(e,E,I,P)}}RT(),m=fe;break}catch(F){sy(e,F)}while(!0);return n&&e.shellSuspendCounter++,Yi=Ms=null,Kt=o,H.H=h,H.A=f,Ot===null&&(ee=null,Mt=0,Pu()),m}function RT(){for(;Ot!==null;)uy(Ot)}function CT(e,n){var s=Kt;Kt|=2;var o=oy(),h=ly();ee!==e||Mt!==n?(gc=null,mc=nn()+500,za(e,n)):La=Gn(e,n);t:do try{if(Xt!==0&&Ot!==null){n=Ot;var f=Sn;e:switch(Xt){case 1:Xt=0,Sn=null,Ba(e,n,f,1);break;case 2:case 9:if(vg(f)){Xt=0,Sn=null,cy(n);break}n=function(){Xt!==2&&Xt!==9||ee!==e||(Xt=7),Ci(e)},f.then(n,n);break t;case 3:Xt=7;break t;case 4:Xt=5;break t;case 7:vg(f)?(Xt=0,Sn=null,cy(n)):(Xt=0,Sn=null,Ba(e,n,f,7));break;case 5:var m=null;switch(Ot.tag){case 26:m=Ot.memoizedState;case 5:case 27:var E=Ot;if(m?Xy(m):E.stateNode.complete){Xt=0,Sn=null;var I=E.sibling;if(I!==null)Ot=I;else{var P=E.return;P!==null?(Ot=P,vc(P)):Ot=null}break e}}Xt=0,Sn=null,Ba(e,n,f,5);break;case 6:Xt=0,Sn=null,Ba(e,n,f,6);break;case 8:Sd(),fe=6;break t;default:throw Error(a(462))}}IT();break}catch(F){sy(e,F)}while(!0);return Yi=Ms=null,H.H=o,H.A=h,Kt=s,Ot!==null?0:(ee=null,Mt=0,Pu(),fe)}function IT(){for(;Ot!==null&&!Jh();)uy(Ot)}function uy(e){var n=M0(e.alternate,e,ir);e.memoizedProps=e.pendingProps,n===null?vc(e):Ot=n}function cy(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=C0(s,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=C0(s,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:Pf(n);default:U0(s,n),n=Ot=lg(n,ir),n=M0(s,n,ir)}e.memoizedProps=e.pendingProps,n===null?vc(e):Ot=n}function Ba(e,n,s,o){Yi=Ms=null,Pf(n),Da=null,nl=0;var h=n.return;try{if(gT(e,h,n,s,Mt)){fe=1,ac(e,xn(s,e.current)),Ot=null;return}}catch(f){if(h!==null)throw Ot=h,f;fe=1,ac(e,xn(s,e.current)),Ot=null;return}n.flags&32768?(Lt||o===1?e=!0:La||(Mt&536870912)!==0?e=!1:(Vr=e=!0,(o===2||o===9||o===3||o===6)&&(o=En.current,o!==null&&o.tag===13&&(o.flags|=16384))),hy(n,e)):vc(n)}function vc(e){var n=e;do{if((n.flags&32768)!==0){hy(n,Vr);return}e=n.return;var s=vT(n.alternate,n,ir);if(s!==null){Ot=s;return}if(n=n.sibling,n!==null){Ot=n;return}Ot=n=e}while(n!==null);fe===0&&(fe=5)}function hy(e,n){do{var s=ET(e.alternate,e);if(s!==null){s.flags&=32767,Ot=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=s}while(e!==null);fe=6,Ot=null}function fy(e,n,s,o,h,f,m,E,I){e.cancelPendingCommit=null;do Ec();while(Ve!==0);if((Kt&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=hf,ef(e,s,f,m,E,I),e===ee&&(Ot=ee=null,Mt=0),Pa=n,kr=e,rr=s,vd=f,Ed=h,ey=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xT(pr,function(){return yy(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,h=tt.p,tt.p=2,m=Kt,Kt|=4;try{TT(e,n,s)}finally{Kt=m,tt.p=h,H.T=o}}Ve=1,dy(),py(),my()}}function dy(){if(Ve===1){Ve=0;var e=kr,n=Pa,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var o=tt.p;tt.p=2;var h=Kt;Kt|=4;try{Y0(n,e);var f=Ud,m=Wm(e.containerInfo),E=f.focusedElem,I=f.selectionRange;if(m!==E&&E&&E.ownerDocument&&Jm(E.ownerDocument.documentElement,E)){if(I!==null&&af(E)){var P=I.start,F=I.end;if(F===void 0&&(F=P),"selectionStart"in E)E.selectionStart=P,E.selectionEnd=Math.min(F,E.value.length);else{var Y=E.ownerDocument||document,z=Y&&Y.defaultView||window;if(z.getSelection){var j=z.getSelection(),ot=E.textContent.length,gt=Math.min(I.start,ot),te=I.end===void 0?gt:Math.min(I.end,ot);!j.extend&&gt>te&&(m=te,te=gt,gt=m);var V=Zm(E,gt),N=Zm(E,te);if(V&&N&&(j.rangeCount!==1||j.anchorNode!==V.node||j.anchorOffset!==V.offset||j.focusNode!==N.node||j.focusOffset!==N.offset)){var k=Y.createRange();k.setStart(V.node,V.offset),j.removeAllRanges(),gt>te?(j.addRange(k),j.extend(N.node,N.offset)):(k.setEnd(N.node,N.offset),j.addRange(k))}}}}for(Y=[],j=E;j=j.parentNode;)j.nodeType===1&&Y.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Y.length;E++){var K=Y[E];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}xc=!!Vd,Ud=Vd=null}finally{Kt=h,tt.p=o,H.T=s}}e.current=n,Ve=2}}function py(){if(Ve===2){Ve=0;var e=kr,n=Pa,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var o=tt.p;tt.p=2;var h=Kt;Kt|=4;try{q0(e,n.alternate,n)}finally{Kt=h,tt.p=o,H.T=s}}Ve=3}}function my(){if(Ve===4||Ve===3){Ve=0,cu();var e=kr,n=Pa,s=rr,o=ey;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ve=5:(Ve=0,Pa=kr=null,gy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Lr=null),ji(s),n=n.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Fn,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=H.T,h=tt.p,tt.p=2,H.T=null;try{for(var f=e.onRecoverableError,m=0;m<o.length;m++){var E=o[m];f(E.value,{componentStack:E.stack})}}finally{H.T=n,tt.p=h}}(rr&3)!==0&&Ec(),Ci(e),h=e.pendingLanes,(s&261930)!==0&&(h&42)!==0?e===Td?vl++:(vl=0,Td=e):vl=0,El(0)}}function gy(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,tl(n)))}function Ec(){return dy(),py(),my(),yy()}function yy(){if(Ve!==5)return!1;var e=kr,n=vd;vd=0;var s=ji(rr),o=H.T,h=tt.p;try{tt.p=32>s?32:s,H.T=null,s=Ed,Ed=null;var f=kr,m=rr;if(Ve=0,Pa=kr=null,rr=0,(Kt&6)!==0)throw Error(a(331));var E=Kt;if(Kt|=4,J0(f.current),X0(f,f.current,m,s),Kt=E,El(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Fn,f)}catch{}return!0}finally{tt.p=h,H.T=o,gy(e,n)}}function _y(e,n,s){n=xn(s,n),n=Wf(e.stateNode,n,2),e=Nr(e,n,2),e!==null&&(gs(e,2),Ci(e))}function $t(e,n,s){if(e.tag===3)_y(e,e,s);else for(;n!==null;){if(n.tag===3){_y(n,e,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Lr===null||!Lr.has(o))){e=xn(s,e),s=v0(2),o=Nr(n,s,2),o!==null&&(E0(s,o,n,e),gs(o,2),Ci(o));break}}n=n.return}}function bd(e,n,s){var o=e.pingCache;if(o===null){o=e.pingCache=new bT;var h=new Set;o.set(n,h)}else h=o.get(n),h===void 0&&(h=new Set,o.set(n,h));h.has(s)||(gd=!0,h.add(s),e=DT.bind(null,e,n,s),n.then(e,e))}function DT(e,n,s){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,ee===e&&(Mt&s)===s&&(fe===4||fe===3&&(Mt&62914560)===Mt&&300>nn()-pc?(Kt&2)===0&&za(e,0):yd|=s,ka===Mt&&(ka=0)),Ci(e)}function vy(e,n){n===0&&(n=gu()),e=Ns(e,n),e!==null&&(gs(e,n),Ci(e))}function NT(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),vy(e,s)}function OT(e,n){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),vy(e,s)}function xT(e,n){return Me(e,n)}var Tc=null,ja=null,wd=!1,Sc=!1,Rd=!1,zr=0;function Ci(e){e!==ja&&e.next===null&&(ja===null?Tc=ja=e:ja=ja.next=e),Sc=!0,wd||(wd=!0,VT())}function El(e,n){if(!Rd&&Sc){Rd=!0;do for(var s=!1,o=Tc;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var f=0;else{var m=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-pe(42|e)+1)-1,f&=h&~(m&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,Ay(o,f))}else f=Mt,f=ui(o,o===ee?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Gn(o,f)||(s=!0,Ay(o,f));o=o.next}while(s);Rd=!1}}function MT(){Ey()}function Ey(){Sc=wd=!1;var e=0;zr!==0&&FT()&&(e=zr);for(var n=nn(),s=null,o=Tc;o!==null;){var h=o.next,f=Ty(o,n);f===0?(o.next=null,s===null?Tc=h:s.next=h,h===null&&(ja=s)):(s=o,(e!==0||(f&3)!==0)&&(Sc=!0)),o=h}Ve!==0&&Ve!==5||El(e),zr!==0&&(zr=0)}function Ty(e,n){for(var s=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var m=31-pe(f),E=1<<m,I=h[m];I===-1?((E&s)===0||(E&o)!==0)&&(h[m]=tf(E,n)):I<=n&&(e.expiredLanes|=E),f&=~E}if(n=ee,s=Mt,s=ui(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===n&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&dr(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Gn(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(o!==null&&dr(o),ji(s)){case 2:case 8:s=No;break;case 32:s=pr;break;case 268435456:s=hu;break;default:s=pr}return o=Sy.bind(null,e),s=Me(s,o),e.callbackPriority=n,e.callbackNode=s,n}return o!==null&&o!==null&&dr(o),e.callbackPriority=2,e.callbackNode=null,2}function Sy(e,n){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Ec()&&e.callbackNode!==s)return null;var o=Mt;return o=ui(e,e===ee?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(iy(e,o,n),Ty(e,nn()),e.callbackNode!=null&&e.callbackNode===s?Sy.bind(null,e):null)}function Ay(e,n){if(Ec())return null;iy(e,n,!0)}function VT(){KT(function(){(Kt&6)!==0?Me(Do,MT):Ey()})}function Cd(){if(zr===0){var e=Ra;e===0&&(e=oi,oi<<=1,(oi&261888)===0&&(oi=256)),zr=e}return zr}function by(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ha(""+e)}function wy(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function UT(e,n,s,o,h){if(n==="submit"&&s&&s.stateNode===h){var f=by((h[ke]||null).action),m=o.submitter;m&&(n=(n=m[ke]||null)?by(n.formAction):m.getAttribute("formAction"),n!==null&&(f=n,m=null));var E=new Ei("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(zr!==0){var I=m?wy(h,m):new FormData(h);Yf(s,{pending:!0,data:I,method:h.method,action:f},null,I)}}else typeof f=="function"&&(E.preventDefault(),I=m?wy(h,m):new FormData(h),Yf(s,{pending:!0,data:I,method:h.method,action:f},f,I))},currentTarget:h}]})}}for(var Id=0;Id<cf.length;Id++){var Dd=cf[Id],LT=Dd.toLowerCase(),kT=Dd[0].toUpperCase()+Dd.slice(1);Wn(LT,"on"+kT)}Wn(ng,"onAnimationEnd"),Wn(ig,"onAnimationIteration"),Wn(rg,"onAnimationStart"),Wn("dblclick","onDoubleClick"),Wn("focusin","onFocus"),Wn("focusout","onBlur"),Wn(WE,"onTransitionRun"),Wn(tT,"onTransitionStart"),Wn(eT,"onTransitionCancel"),Wn(sg,"onTransitionEnd"),gi("onMouseEnter",["mouseout","mouseover"]),gi("onMouseLeave",["mouseout","mouseover"]),gi("onPointerEnter",["pointerout","pointerover"]),gi("onPointerLeave",["pointerout","pointerover"]),mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mi("onBeforeInput",["compositionend","keypress","textInput","paste"]),mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function Ry(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],h=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var m=o.length-1;0<=m;m--){var E=o[m],I=E.instance,P=E.currentTarget;if(E=E.listener,I!==f&&h.isPropagationStopped())break t;f=E,h.currentTarget=P;try{f(h)}catch(F){ku(F)}h.currentTarget=null,f=I}else for(m=0;m<o.length;m++){if(E=o[m],I=E.instance,P=E.currentTarget,E=E.listener,I!==f&&h.isPropagationStopped())break t;f=E,h.currentTarget=P;try{f(h)}catch(F){ku(F)}h.currentTarget=null,f=I}}}}function xt(e,n){var s=n[aa];s===void 0&&(s=n[aa]=new Set);var o=e+"__bubble";s.has(o)||(Cy(n,e,2,!1),s.add(o))}function Nd(e,n,s){var o=0;n&&(o|=4),Cy(s,e,o,n)}var Ac="_reactListening"+Math.random().toString(36).slice(2);function Od(e){if(!e[Ac]){e[Ac]=!0,Mo.forEach(function(s){s!=="selectionchange"&&(PT.has(s)||Nd(s,!1,e),Nd(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ac]||(n[Ac]=!0,Nd("selectionchange",!1,n))}}function Cy(e,n,s,o){switch(n_(n)){case 2:var h=fS;break;case 8:h=dS;break;default:h=Kd}s=h.bind(null,n,s,e),h=void 0,!Ss||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(n,s,{capture:!0,passive:h}):e.addEventListener(n,s,!0):h!==void 0?e.addEventListener(n,s,{passive:h}):e.addEventListener(n,s,!1)}function xd(e,n,s,o,h){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var E=o.stateNode.containerInfo;if(E===h)break;if(m===4)for(m=o.return;m!==null;){var I=m.tag;if((I===3||I===4)&&m.stateNode.containerInfo===h)return;m=m.return}for(;E!==null;){if(m=di(E),m===null)return;if(I=m.tag,I===5||I===6||I===26||I===27){o=f=m;continue t}E=E.parentNode}}o=o.return}Er(function(){var P=f,F=In(s),Y=[];t:{var z=ag.get(e);if(z!==void 0){var j=Ei,ot=e;switch(e){case"keypress":if(bs(s)===0)break t;case"keydown":case"keyup":j=Vu;break;case"focusin":ot="focus",j=Rs;break;case"focusout":ot="blur",j=Rs;break;case"beforeblur":case"afterblur":j=Rs;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=wu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=p;break;case ng:case ig:case rg:j=Cu;break;case sg:j=T;break;case"scroll":case"scrollend":j=Go;break;case"wheel":j=B;break;case"copy":case"cut":case"paste":j=Iu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Fi;break;case"toggle":case"beforetoggle":j=wt}var gt=(n&4)!==0,te=!gt&&(e==="scroll"||e==="scrollend"),V=gt?z!==null?z+"Capture":null:z;gt=[];for(var N=P,k;N!==null;){var K=N;if(k=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||k===null||V===null||(K=Xn(N,V),K!=null&&gt.push(Sl(N,K,k))),te)break;N=N.return}0<gt.length&&(z=new j(z,ot,null,s,F),Y.push({event:z,listeners:gt}))}}if((n&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&s!==qo&&(ot=s.relatedTarget||s.fromElement)&&(di(ot)||ot[hi]))break t;if((j||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,j?(ot=s.relatedTarget||s.toElement,j=P,ot=ot?di(ot):null,ot!==null&&(te=c(ot),gt=ot.tag,ot!==te||gt!==5&&gt!==27&&gt!==6)&&(ot=null)):(j=null,ot=P),j!==ot)){if(gt=Ko,K="onMouseLeave",V="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(gt=Fi,K="onPointerLeave",V="onPointerEnter",N="pointer"),te=j==null?z:gn(j),k=ot==null?z:gn(ot),z=new gt(K,N+"leave",j,s,F),z.target=te,z.relatedTarget=k,K=null,di(F)===P&&(gt=new gt(V,N+"enter",ot,s,F),gt.target=k,gt.relatedTarget=te,K=gt),te=K,j&&ot)e:{for(gt=zT,V=j,N=ot,k=0,K=V;K;K=gt(K))k++;K=0;for(var dt=N;dt;dt=gt(dt))K++;for(;0<k-K;)V=gt(V),k--;for(;0<K-k;)N=gt(N),K--;for(;k--;){if(V===N||N!==null&&V===N.alternate){gt=V;break e}V=gt(V),N=gt(N)}gt=null}else gt=null;j!==null&&Iy(Y,z,j,gt,!1),ot!==null&&te!==null&&Iy(Y,te,ot,gt,!0)}}t:{if(z=P?gn(P):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var Ht=Gm;else if(Hm(z))if(Km)Ht=$E;else{Ht=QE;var ct=YE}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?P&&ca(P.elementType)&&(Ht=Gm):Ht=XE;if(Ht&&(Ht=Ht(e,P))){Fm(Y,Ht,s,F);break t}ct&&ct(e,z,P),e==="focusout"&&P&&z.type==="number"&&P.memoizedProps.value!=null&&zo(z,"number",z.value)}switch(ct=P?gn(P):window,e){case"focusin":(Hm(ct)||ct.contentEditable==="true")&&(_a=ct,of=P,Zo=null);break;case"focusout":Zo=of=_a=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,tg(Y,s,F);break;case"selectionchange":if(JE)break;case"keydown":case"keyup":tg(Y,s,F)}var It;if(Gt)t:{switch(e){case"compositionstart":var Vt="onCompositionStart";break t;case"compositionend":Vt="onCompositionEnd";break t;case"compositionupdate":Vt="onCompositionUpdate";break t}Vt=void 0}else ya?Cs(e,s)&&(Vt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Vt="onCompositionStart");Vt&&(Ai&&s.locale!=="ko"&&(ya||Vt!=="onCompositionStart"?Vt==="onCompositionEnd"&&ya&&(It=Fo()):(vi=F,Ho="value"in vi?vi.value:vi.textContent,ya=!0)),ct=bc(P,Vt),0<ct.length&&(Vt=new Si(Vt,e,null,s,F),Y.push({event:Vt,listeners:ct}),It?Vt.data=It:(It=ga(s),It!==null&&(Vt.data=It)))),(It=Nn?HE(e,s):FE(e,s))&&(Vt=bc(P,"onBeforeInput"),0<Vt.length&&(ct=new Si("onBeforeInput","beforeinput",null,s,F),Y.push({event:ct,listeners:Vt}),ct.data=It)),UT(Y,e,P,s,F)}Ry(Y,n)})}function Sl(e,n,s){return{instance:e,listener:n,currentTarget:s}}function bc(e,n){for(var s=n+"Capture",o=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=Xn(e,s),h!=null&&o.unshift(Sl(e,h,f)),h=Xn(e,n),h!=null&&o.push(Sl(e,h,f))),e.tag===3)return o;e=e.return}return[]}function zT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Iy(e,n,s,o,h){for(var f=n._reactName,m=[];s!==null&&s!==o;){var E=s,I=E.alternate,P=E.stateNode;if(E=E.tag,I!==null&&I===o)break;E!==5&&E!==26&&E!==27||P===null||(I=P,h?(P=Xn(s,f),P!=null&&m.unshift(Sl(s,P,I))):h||(P=Xn(s,f),P!=null&&m.push(Sl(s,P,I)))),s=s.return}m.length!==0&&e.push({event:n,listeners:m})}var BT=/\r\n?/g,jT=/\u0000|\uFFFD/g;function Dy(e){return(typeof e=="string"?e:""+e).replace(BT,`
`).replace(jT,"")}function Ny(e,n){return n=Dy(n),Dy(e)===n}function Wt(e,n,s,o,h,f){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ln(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ln(e,""+o);break;case"className":yn(e,"class",o);break;case"tabIndex":yn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":yn(e,s,o);break;case"style":jo(e,o,f);break;case"data":if(n!=="object"){yn(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ha(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(n!=="input"&&Wt(e,n,"name",h.name,h,null),Wt(e,n,"formEncType",h.formEncType,h,null),Wt(e,n,"formMethod",h.formMethod,h,null),Wt(e,n,"formTarget",h.formTarget,h,null)):(Wt(e,n,"encType",h.encType,h,null),Wt(e,n,"method",h.method,h,null),Wt(e,n,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ha(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=Qn);break;case"onScroll":o!=null&&xt("scroll",e);break;case"onScrollEnd":o!=null&&xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=ha(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":xt("beforetoggle",e),xt("toggle",e),la(e,"popover",o);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":la(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=bu.get(s)||s,la(e,s,o))}}function Md(e,n,s,o,h,f){switch(s){case"style":jo(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?ln(e,o):(typeof o=="number"||typeof o=="bigint")&&ln(e,""+o);break;case"onScroll":o!=null&&xt("scroll",e);break;case"onScrollEnd":o!=null&&xt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vo.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),n=s.slice(2,h?s.length-7:void 0),f=e[ke]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(n,f,h),typeof o=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,o,h);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):la(e,s,o)}}}function Ye(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",e),xt("load",e);var o=!1,h=!1,f;for(f in s)if(s.hasOwnProperty(f)){var m=s[f];if(m!=null)switch(f){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Wt(e,n,f,m,s,null)}}h&&Wt(e,n,"srcSet",s.srcSet,s,null),o&&Wt(e,n,"src",s.src,s,null);return;case"input":xt("invalid",e);var E=f=m=h=null,I=null,P=null;for(o in s)if(s.hasOwnProperty(o)){var F=s[o];if(F!=null)switch(o){case"name":h=F;break;case"type":m=F;break;case"checked":I=F;break;case"defaultChecked":P=F;break;case"value":f=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(a(137,n));break;default:Wt(e,n,o,F,s,null)}}Tu(e,f,E,I,P,m,h,!1);return;case"select":xt("invalid",e),o=m=f=null;for(h in s)if(s.hasOwnProperty(h)&&(E=s[h],E!=null))switch(h){case"value":f=E;break;case"defaultValue":m=E;break;case"multiple":o=E;default:Wt(e,n,h,E,s,null)}n=f,s=m,e.multiple=!!o,n!=null?gr(e,!!o,n,!1):s!=null&&gr(e,!!o,s,!0);return;case"textarea":xt("invalid",e),f=h=o=null;for(m in s)if(s.hasOwnProperty(m)&&(E=s[m],E!=null))switch(m){case"value":o=E;break;case"defaultValue":h=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Wt(e,n,m,E,s,null)}yr(e,o,h,f);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(o=s[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(e,n,I,o,s,null)}return;case"dialog":xt("beforetoggle",e),xt("toggle",e),xt("cancel",e),xt("close",e);break;case"iframe":case"object":xt("load",e);break;case"video":case"audio":for(o=0;o<Tl.length;o++)xt(Tl[o],e);break;case"image":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"embed":case"source":case"link":xt("error",e),xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in s)if(s.hasOwnProperty(P)&&(o=s[P],o!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Wt(e,n,P,o,s,null)}return;default:if(ca(n)){for(F in s)s.hasOwnProperty(F)&&(o=s[F],o!==void 0&&Md(e,n,F,o,s,void 0));return}}for(E in s)s.hasOwnProperty(E)&&(o=s[E],o!=null&&Wt(e,n,E,o,s,null))}function qT(e,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,m=null,E=null,I=null,P=null,F=null;for(j in s){var Y=s[j];if(s.hasOwnProperty(j)&&Y!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":I=Y;default:o.hasOwnProperty(j)||Wt(e,n,j,null,o,Y)}}for(var z in o){var j=o[z];if(Y=s[z],o.hasOwnProperty(z)&&(j!=null||Y!=null))switch(z){case"type":f=j;break;case"name":h=j;break;case"checked":P=j;break;case"defaultChecked":F=j;break;case"value":m=j;break;case"defaultValue":E=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(a(137,n));break;default:j!==Y&&Wt(e,n,z,j,o,Y)}}ua(e,m,E,I,P,F,f,h);return;case"select":j=m=E=z=null;for(f in s)if(I=s[f],s.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":j=I;default:o.hasOwnProperty(f)||Wt(e,n,f,null,o,I)}for(h in o)if(f=o[h],I=s[h],o.hasOwnProperty(h)&&(f!=null||I!=null))switch(h){case"value":z=f;break;case"defaultValue":E=f;break;case"multiple":m=f;default:f!==I&&Wt(e,n,h,f,o,I)}n=E,s=m,o=j,z!=null?gr(e,!!s,z,!1):!!o!=!!s&&(n!=null?gr(e,!!s,n,!0):gr(e,!!s,s?[]:"",!1));return;case"textarea":j=z=null;for(E in s)if(h=s[E],s.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Wt(e,n,E,null,o,h)}for(m in o)if(h=o[m],f=s[m],o.hasOwnProperty(m)&&(h!=null||f!=null))switch(m){case"value":z=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==f&&Wt(e,n,m,h,o,f)}Su(e,z,j);return;case"option":for(var ot in s)if(z=s[ot],s.hasOwnProperty(ot)&&z!=null&&!o.hasOwnProperty(ot))switch(ot){case"selected":e.selected=!1;break;default:Wt(e,n,ot,null,o,z)}for(I in o)if(z=o[I],j=s[I],o.hasOwnProperty(I)&&z!==j&&(z!=null||j!=null))switch(I){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Wt(e,n,I,z,o,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in s)z=s[gt],s.hasOwnProperty(gt)&&z!=null&&!o.hasOwnProperty(gt)&&Wt(e,n,gt,null,o,z);for(P in o)if(z=o[P],j=s[P],o.hasOwnProperty(P)&&z!==j&&(z!=null||j!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(a(137,n));break;default:Wt(e,n,P,z,o,j)}return;default:if(ca(n)){for(var te in s)z=s[te],s.hasOwnProperty(te)&&z!==void 0&&!o.hasOwnProperty(te)&&Md(e,n,te,void 0,o,z);for(F in o)z=o[F],j=s[F],!o.hasOwnProperty(F)||z===j||z===void 0&&j===void 0||Md(e,n,F,z,o,j);return}}for(var V in s)z=s[V],s.hasOwnProperty(V)&&z!=null&&!o.hasOwnProperty(V)&&Wt(e,n,V,null,o,z);for(Y in o)z=o[Y],j=s[Y],!o.hasOwnProperty(Y)||z===j||z==null&&j==null||Wt(e,n,Y,z,o,j)}function Oy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function HT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var h=s[o],f=h.transferSize,m=h.initiatorType,E=h.duration;if(f&&E&&Oy(m)){for(m=0,E=h.responseEnd,o+=1;o<s.length;o++){var I=s[o],P=I.startTime;if(P>E)break;var F=I.transferSize,Y=I.initiatorType;F&&Oy(Y)&&(I=I.responseEnd,m+=F*(I<E?1:(E-P)/(I-P)))}if(--o,n+=8*(f+m)/(h.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vd=null,Ud=null;function wc(e){return e.nodeType===9?e:e.ownerDocument}function xy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function My(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ld(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kd=null;function FT(){var e=window.event;return e&&e.type==="popstate"?e===kd?!1:(kd=e,!0):(kd=null,!1)}var Vy=typeof setTimeout=="function"?setTimeout:void 0,GT=typeof clearTimeout=="function"?clearTimeout:void 0,Uy=typeof Promise=="function"?Promise:void 0,KT=typeof queueMicrotask=="function"?queueMicrotask:typeof Uy<"u"?function(e){return Uy.resolve(null).then(e).catch(YT)}:Vy;function YT(e){setTimeout(function(){throw e})}function Br(e){return e==="head"}function Ly(e,n){var s=n,o=0;do{var h=s.nextSibling;if(e.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(h),Ga(n);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")Al(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Al(s);for(var f=s.firstChild;f;){var m=f.nextSibling,E=f.nodeName;f[fi]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||s.removeChild(f),f=m}}else s==="body"&&Al(e.ownerDocument.body);s=h}while(s);Ga(n)}function ky(e,n){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function Pd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Pd(s),oa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function QT(e,n,s,o){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=kn(e.nextSibling),e===null)break}return null}function XT(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=kn(e.nextSibling),e===null))return null;return e}function Py(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=kn(e.nextSibling),e===null))return null;return e}function zd(e){return e.data==="$?"||e.data==="$~"}function Bd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $T(e,n){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||s.readyState!=="loading")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function kn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var jd=null;function zy(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(n===0)return kn(e.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}e=e.nextSibling}return null}function By(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return e;n--}else s!=="/$"&&s!=="/&"||n++}e=e.previousSibling}return null}function jy(e,n,s){switch(n=wc(s),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Al(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);oa(e)}var Pn=new Map,qy=new Set;function Rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sr=tt.d;tt.d={f:ZT,r:JT,D:WT,C:tS,L:eS,m:nS,X:rS,S:iS,M:sS};function ZT(){var e=sr.f(),n=yc();return e||n}function JT(e){var n=Cn(e);n!==null&&n.tag===5&&n.type==="form"?s0(n):sr.r(e)}var qa=typeof document>"u"?null:document;function Hy(e,n,s){var o=qa;if(o&&typeof n=="string"&&n){var h=on(n);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),qy.has(h)||(qy.add(h),e={rel:e,crossOrigin:s,href:n},o.querySelector(h)===null&&(n=o.createElement("link"),Ye(n,"link",e),Ae(n),o.head.appendChild(n)))}}function WT(e){sr.D(e),Hy("dns-prefetch",e,null)}function tS(e,n){sr.C(e,n),Hy("preconnect",e,n)}function eS(e,n,s){sr.L(e,n,s);var o=qa;if(o&&e&&n){var h='link[rel="preload"][as="'+on(n)+'"]';n==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+on(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+on(s.imageSizes)+'"]')):h+='[href="'+on(e)+'"]';var f=h;switch(n){case"style":f=Ha(e);break;case"script":f=Fa(e)}Pn.has(f)||(e=b({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Pn.set(f,e),o.querySelector(h)!==null||n==="style"&&o.querySelector(bl(f))||n==="script"&&o.querySelector(wl(f))||(n=o.createElement("link"),Ye(n,"link",e),Ae(n),o.head.appendChild(n)))}}function nS(e,n){sr.m(e,n);var s=qa;if(s&&e){var o=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+on(o)+'"][href="'+on(e)+'"]',f=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Fa(e)}if(!Pn.has(f)&&(e=b({rel:"modulepreload",href:e},n),Pn.set(f,e),s.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(wl(f)))return}o=s.createElement("link"),Ye(o,"link",e),Ae(o),s.head.appendChild(o)}}}function iS(e,n,s){sr.S(e,n,s);var o=qa;if(o&&e){var h=pi(o).hoistableStyles,f=Ha(e);n=n||"default";var m=h.get(f);if(!m){var E={loading:0,preload:null};if(m=o.querySelector(bl(f)))E.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Pn.get(f))&&qd(e,s);var I=m=o.createElement("link");Ae(I),Ye(I,"link",e),I._p=new Promise(function(P,F){I.onload=P,I.onerror=F}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Cc(m,n,o)}m={type:"stylesheet",instance:m,count:1,state:E},h.set(f,m)}}}function rS(e,n){sr.X(e,n);var s=qa;if(s&&e){var o=pi(s).hoistableScripts,h=Fa(e),f=o.get(h);f||(f=s.querySelector(wl(h)),f||(e=b({src:e,async:!0},n),(n=Pn.get(h))&&Hd(e,n),f=s.createElement("script"),Ae(f),Ye(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function sS(e,n){sr.M(e,n);var s=qa;if(s&&e){var o=pi(s).hoistableScripts,h=Fa(e),f=o.get(h);f||(f=s.querySelector(wl(h)),f||(e=b({src:e,async:!0,type:"module"},n),(n=Pn.get(h))&&Hd(e,n),f=s.createElement("script"),Ae(f),Ye(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function Fy(e,n,s,o){var h=(h=vt.current)?Rc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Ha(s.href),s=pi(h).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ha(s.href);var f=pi(h).hoistableStyles,m=f.get(e);if(m||(h=h.ownerDocument||h,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,m),(f=h.querySelector(bl(e)))&&!f._p&&(m.instance=f,m.state.loading=5),Pn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Pn.set(e,s),f||aS(h,e,s,m.state))),n&&o===null)throw Error(a(528,""));return m}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Fa(s),s=pi(h).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Ha(e){return'href="'+on(e)+'"'}function bl(e){return'link[rel="stylesheet"]['+e+"]"}function Gy(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function aS(e,n,s,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ye(n,"link",s),Ae(n),e.head.appendChild(n))}function Fa(e){return'[src="'+on(e)+'"]'}function wl(e){return"script[async]"+e}function Ky(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+on(s.href)+'"]');if(o)return n.instance=o,Ae(o),o;var h=b({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ae(o),Ye(o,"style",h),Cc(o,s.precedence,e),n.instance=o;case"stylesheet":h=Ha(s.href);var f=e.querySelector(bl(h));if(f)return n.state.loading|=4,n.instance=f,Ae(f),f;o=Gy(s),(h=Pn.get(h))&&qd(o,h),f=(e.ownerDocument||e).createElement("link"),Ae(f);var m=f;return m._p=new Promise(function(E,I){m.onload=E,m.onerror=I}),Ye(f,"link",o),n.state.loading|=4,Cc(f,s.precedence,e),n.instance=f;case"script":return f=Fa(s.src),(h=e.querySelector(wl(f)))?(n.instance=h,Ae(h),h):(o=s,(h=Pn.get(f))&&(o=b({},s),Hd(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),Ae(h),Ye(h,"link",o),e.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Cc(o,s.precedence,e));return n.instance}function Cc(e,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,f=h,m=0;m<o.length;m++){var E=o[m];if(E.dataset.precedence===n)f=E;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Hd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ic=null;function Yy(e,n,s){if(Ic===null){var o=new Map,h=Ic=new Map;h.set(s,o)}else h=Ic,o=h.get(s),o||(o=new Map,h.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var f=s[h];if(!(f[fi]||f[Se]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var m=f.getAttribute(n)||"";m=e+m;var E=o.get(m);E?E.push(f):o.set(m,[f])}}return o}function Qy(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function oS(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Xy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lS(e,n,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=Ha(o.href),f=n.querySelector(bl(h));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Dc.bind(e),n.then(e,e)),s.state.loading|=4,s.instance=f,Ae(f);return}f=n.ownerDocument||n,o=Gy(o),(h=Pn.get(h))&&qd(o,h),f=f.createElement("link"),Ae(f);var m=f;m._p=new Promise(function(E,I){m.onload=E,m.onerror=I}),Ye(f,"link",o),s.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Dc.bind(e),n.addEventListener("load",s),n.addEventListener("error",s))}}var Fd=0;function uS(e,n){return e.stylesheets&&e.count===0&&Oc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&Oc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Fd===0&&(Fd=62500*HT());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Oc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Fd?50:800)+n);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(h)}}:null}function Dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nc=null;function Oc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nc=new Map,n.forEach(cS,e),Nc=null,Dc.call(e))}function cS(e,n){if(!(n.state.loading&4)){var s=Nc.get(e);if(s)var o=s.get(null);else{s=new Map,Nc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var m=h[f];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(s.set(m.dataset.precedence,m),o=m)}o&&s.set(null,o)}h=n.instance,m=h.getAttribute("data-precedence"),f=s.get(m)||o,f===o&&s.set(null,h),s.set(m,h),this.count++,o=Dc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),n.state.loading|=4}}var Rl={$$typeof:nt,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function hS(e,n,s,o,h,f,m,E,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ci(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ci(0),this.hiddenUpdates=ci(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function $y(e,n,s,o,h,f,m,E,I,P,F,Y){return e=new hS(e,n,s,m,I,P,F,Y,E),n=1,f===!0&&(n|=24),f=vn(3,null,null,n),e.current=f,f.stateNode=e,n=Af(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:s,cache:n},Cf(f),e}function Zy(e){return e?(e=Ta,e):Ta}function Jy(e,n,s,o,h,f){h=Zy(h),o.context===null?o.context=h:o.pendingContext=h,o=Dr(n),o.payload={element:s},f=f===void 0?null:f,f!==null&&(o.callback=f),s=Nr(e,o,n),s!==null&&(dn(s,e,n),rl(s,e,n))}function Wy(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function Gd(e,n){Wy(e,n),(e=e.alternate)&&Wy(e,n)}function t_(e){if(e.tag===13||e.tag===31){var n=Ns(e,67108864);n!==null&&dn(n,e,67108864),Gd(e,67108864)}}function e_(e){if(e.tag===13||e.tag===31){var n=bn();n=_s(n);var s=Ns(e,n);s!==null&&dn(s,e,n),Gd(e,n)}}var xc=!0;function fS(e,n,s,o){var h=H.T;H.T=null;var f=tt.p;try{tt.p=2,Kd(e,n,s,o)}finally{tt.p=f,H.T=h}}function dS(e,n,s,o){var h=H.T;H.T=null;var f=tt.p;try{tt.p=8,Kd(e,n,s,o)}finally{tt.p=f,H.T=h}}function Kd(e,n,s,o){if(xc){var h=Yd(o);if(h===null)xd(e,n,o,Mc,s),i_(e,o);else if(mS(h,e,n,s,o))o.stopPropagation();else if(i_(e,o),n&4&&-1<pS.indexOf(e)){for(;h!==null;){var f=Cn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var m=li(f.pendingLanes);if(m!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;m;){var I=1<<31-pe(m);E.entanglements[1]|=I,m&=~I}Ci(f),(Kt&6)===0&&(mc=nn()+500,El(0))}}break;case 31:case 13:E=Ns(f,2),E!==null&&dn(E,f,2),yc(),Gd(f,2)}if(f=Yd(o),f===null&&xd(e,n,o,Mc,s),f===h)break;h=f}h!==null&&o.stopPropagation()}else xd(e,n,o,null,s)}}function Yd(e){return e=In(e),Qd(e)}var Mc=null;function Qd(e){if(Mc=null,e=di(e),e!==null){var n=c(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=d(n),e!==null)return e;e=null}else if(s===31){if(e=g(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Mc=e,null}function n_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ps()){case Do:return 2;case No:return 8;case pr:case Wh:return 32;case hu:return 268435456;default:return 32}default:return 32}}var Xd=!1,jr=null,qr=null,Hr=null,Cl=new Map,Il=new Map,Fr=[],pS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i_(e,n){switch(e){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(n.pointerId)}}function Dl(e,n,s,o,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:f,targetContainers:[h]},n!==null&&(n=Cn(n),n!==null&&t_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),e)}function mS(e,n,s,o,h){switch(n){case"focusin":return jr=Dl(jr,e,n,s,o,h),!0;case"dragenter":return qr=Dl(qr,e,n,s,o,h),!0;case"mouseover":return Hr=Dl(Hr,e,n,s,o,h),!0;case"pointerover":var f=h.pointerId;return Cl.set(f,Dl(Cl.get(f)||null,e,n,s,o,h)),!0;case"gotpointercapture":return f=h.pointerId,Il.set(f,Dl(Il.get(f)||null,e,n,s,o,h)),!0}return!1}function r_(e){var n=di(e.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=d(s),n!==null){e.blockedOn=n,Kn(e.priority,function(){e_(s)});return}}else if(n===31){if(n=g(s),n!==null){e.blockedOn=n,Kn(e.priority,function(){e_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Yd(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);qo=o,s.target.dispatchEvent(o),qo=null}else return n=Cn(s),n!==null&&t_(n),e.blockedOn=s,!1;n.shift()}return!0}function s_(e,n,s){Vc(e)&&s.delete(n)}function gS(){Xd=!1,jr!==null&&Vc(jr)&&(jr=null),qr!==null&&Vc(qr)&&(qr=null),Hr!==null&&Vc(Hr)&&(Hr=null),Cl.forEach(s_),Il.forEach(s_)}function Uc(e,n){e.blockedOn===n&&(e.blockedOn=null,Xd||(Xd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gS)))}var Lc=null;function a_(e){Lc!==e&&(Lc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Lc===e&&(Lc=null);for(var n=0;n<e.length;n+=3){var s=e[n],o=e[n+1],h=e[n+2];if(typeof o!="function"){if(Qd(o||s)===null)continue;break}var f=Cn(s);f!==null&&(e.splice(n,3),n-=3,Yf(f,{pending:!0,data:h,method:s.method,action:o},o,h))}}))}function Ga(e){function n(I){return Uc(I,e)}jr!==null&&Uc(jr,e),qr!==null&&Uc(qr,e),Hr!==null&&Uc(Hr,e),Cl.forEach(n),Il.forEach(n);for(var s=0;s<Fr.length;s++){var o=Fr[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Fr.length&&(s=Fr[0],s.blockedOn===null);)r_(s),s.blockedOn===null&&Fr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var h=s[o],f=s[o+1],m=h[ke]||null;if(typeof f=="function")m||a_(s);else if(m){var E=null;if(f&&f.hasAttribute("formAction")){if(h=f,m=f[ke]||null)E=m.formAction;else if(Qd(h)!==null)continue}else E=m.action;typeof E=="function"?s[o+1]=E:(s.splice(o,3),o-=3),a_(s)}}}function o_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(m){return h=m})},focusReset:"manual",scroll:"manual"})}function n(){h!==null&&(h(),h=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),h!==null&&(h(),h=null)}}}function $d(e){this._internalRoot=e}kc.prototype.render=$d.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=bn();Jy(s,o,e,n,null,null)},kc.prototype.unmount=$d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jy(e.current,2,null,e,null,null),yc(),n[hi]=null}};function kc(e){this._internalRoot=e}kc.prototype.unstable_scheduleHydration=function(e){if(e){var n=yu();e={blockedOn:null,target:e,priority:n};for(var s=0;s<Fr.length&&n!==0&&n<Fr[s].priority;s++);Fr.splice(s,0,e),s===0&&r_(e)}};var l_=t.version;if(l_!=="19.2.0")throw Error(a(527,l_,"19.2.0"));tt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=v(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var yS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{Fn=Pc.inject(yS),qe=Pc}catch{}}return Ol.createRoot=function(e,n){if(!l(e))throw Error(a(299));var s=!1,o="",h=m0,f=g0,m=y0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=$y(e,1,!1,null,null,s,o,null,h,f,m,o_),e[hi]=n.current,Od(e),new $d(n)},Ol.hydrateRoot=function(e,n,s){if(!l(e))throw Error(a(299));var o=!1,h="",f=m0,m=g0,E=y0,I=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.formState!==void 0&&(I=s.formState)),n=$y(e,1,!0,n,s??null,o,h,I,f,m,E,o_),n.context=Zy(null),s=n.current,o=bn(),o=_s(o),h=Dr(o),h.callback=null,Nr(s,h,o),s=o,n.current.lanes=s,gs(n,s),Ci(n),e[hi]=n.current,Od(e),new kc(n)},Ol.version="19.2.0",Ol}var __;function IS(){if(__)return Wd.exports;__=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Wd.exports=CS(),Wd.exports}var DS=IS();const NS=()=>{};var v_={};/**
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
 */const u1=function(r){const t=[];let i=0;for(let a=0;a<r.length;a++){let l=r.charCodeAt(a);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++a)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},OS=function(r){const t=[];let i=0,a=0;for(;i<r.length;){const l=r[i++];if(l<128)t[a++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[i++];t[a++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[i++],d=r[i++],g=r[i++],y=((l&7)<<18|(c&63)<<12|(d&63)<<6|g&63)-65536;t[a++]=String.fromCharCode(55296+(y>>10)),t[a++]=String.fromCharCode(56320+(y&1023))}else{const c=r[i++],d=r[i++];t[a++]=String.fromCharCode((l&15)<<12|(c&63)<<6|d&63)}}return t.join("")},c1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<r.length;l+=3){const c=r[l],d=l+1<r.length,g=d?r[l+1]:0,y=l+2<r.length,v=y?r[l+2]:0,S=c>>2,b=(c&3)<<4|g>>4;let x=(g&15)<<2|v>>6,q=v&63;y||(q=64,d||(x=64)),a.push(i[S],i[b],i[x],i[q])}return a.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(u1(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):OS(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<r.length;){const c=i[r.charAt(l++)],g=l<r.length?i[r.charAt(l)]:0;++l;const v=l<r.length?i[r.charAt(l)]:64;++l;const b=l<r.length?i[r.charAt(l)]:64;if(++l,c==null||g==null||v==null||b==null)throw new xS;const x=c<<2|g>>4;if(a.push(x),v!==64){const q=g<<4&240|v>>2;if(a.push(q),b!==64){const $=v<<6&192|b;a.push($)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class xS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MS=function(r){const t=u1(r);return c1.encodeByteArray(t,!0)},uh=function(r){return MS(r).replace(/\./g,"")},h1=function(r){try{return c1.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function VS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const US=()=>VS().__FIREBASE_DEFAULTS__,LS=()=>{if(typeof process>"u"||typeof v_>"u")return;const r=v_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},kS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&h1(r[1]);return t&&JSON.parse(t)},Ih=()=>{try{return NS()||US()||LS()||kS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},f1=r=>Ih()?.emulatorHosts?.[r],d1=r=>{const t=f1(r);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},p1=()=>Ih()?.config,m1=r=>Ih()?.[`_${r}`];/**
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
 */class PS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
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
 */function ea(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rm(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function g1(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[uh(JSON.stringify(i)),uh(JSON.stringify(d)),""].join(".")}const Ll={};function zS(){const r={prod:[],emulator:[]};for(const t of Object.keys(Ll))Ll[t]?r.emulator.push(t):r.prod.push(t);return r}function BS(r){let t=document.getElementById(r),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),i=!0),{created:i,element:t}}let E_=!1;function sm(r,t){if(typeof window>"u"||typeof document>"u"||!ea(window.location.host)||Ll[r]===t||Ll[r]||E_)return;Ll[r]=t;function i(x){return`__firebase__banner__${x}`}const a="__firebase__banner",c=zS().prod.length>0;function d(){const x=document.getElementById(a);x&&x.remove()}function g(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function y(x,q){x.setAttribute("width","24"),x.setAttribute("id",q),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function v(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{E_=!0,d()},x}function S(x,q){x.setAttribute("id",q),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function b(){const x=BS(a),q=i("text"),$=document.getElementById(q)||document.createElement("span"),Z=i("learnmore"),X=document.getElementById(Z)||document.createElement("a"),rt=i("preprendIcon"),ut=document.getElementById(rt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const nt=x.element;g(nt),S(X,Z);const lt=v();y(ut,rt),nt.append(ut,$,X,lt),document.body.appendChild(nt)}c?($.innerText="Preview backend disconnected.",ut.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ut.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function tn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tn())}function qS(){const r=Ih()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function FS(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function GS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KS(){const r=tn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function YS(){return!qS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QS(){try{return typeof indexedDB=="object"}catch{return!1}}function XS(){return new Promise((r,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(i){t(i)}})}/**
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
 */const $S="FirebaseError";class zi extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=$S,Object.setPrototypeOf(this,zi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wl.prototype.create)}}class Wl{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},l=`${this.service}/${t}`,c=this.errors[t],d=c?ZS(c,a):"Error",g=`${this.serviceName}: ${d} (${l}).`;return new zi(l,g,a)}}function ZS(r,t){return r.replace(JS,(i,a)=>{const l=t[a];return l!=null?String(l):`<${a}?>`})}const JS=/\{\$([^}]+)}/g;function WS(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Zs(r,t){if(r===t)return!0;const i=Object.keys(r),a=Object.keys(t);for(const l of i){if(!a.includes(l))return!1;const c=r[l],d=t[l];if(T_(c)&&T_(d)){if(!Zs(c,d))return!1}else if(c!==d)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function T_(r){return r!==null&&typeof r=="object"}/**
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
 */function tu(r){const t=[];for(const[i,a]of Object.entries(r))Array.isArray(a)?a.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function tA(r,t){const i=new eA(r,t);return i.subscribe.bind(i)}class eA{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let l;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");nA(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:a},l.next===void 0&&(l.next=ip),l.error===void 0&&(l.error=ip),l.complete===void 0&&(l.complete=ip);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nA(r,t){if(typeof r!="object"||r===null)return!1;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}function ip(){}/**
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
 */function fs(r){return r&&r._delegate?r._delegate:r}class ss{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Hs="[DEFAULT]";/**
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
 */class iA{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new PS;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sA(t))try{this.getOrInitializeService({instanceIdentifier:Hs})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch{}}}}clearInstance(t=Hs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Hs){return this.instances.has(t)}getOptions(t=Hs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[c,d]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);a===g&&d.resolve(l)}return l}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(a)??new Set;l.add(t),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&t(c,a),()=>{l.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:rA(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Hs){return this.component?this.component.multipleInstances?t:Hs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rA(r){return r===Hs?void 0:r}function sA(r){return r.instantiationMode==="EAGER"}/**
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
 */class aA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new iA(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ut;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ut||(Ut={}));const oA={debug:Ut.DEBUG,verbose:Ut.VERBOSE,info:Ut.INFO,warn:Ut.WARN,error:Ut.ERROR,silent:Ut.SILENT},lA=Ut.INFO,uA={[Ut.DEBUG]:"log",[Ut.VERBOSE]:"log",[Ut.INFO]:"info",[Ut.WARN]:"warn",[Ut.ERROR]:"error"},cA=(r,t,...i)=>{if(t<r.logLevel)return;const a=new Date().toISOString(),l=uA[t];if(l)console[l](`[${a}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class am{constructor(t){this.name=t,this._logLevel=lA,this._logHandler=cA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ut))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?oA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ut.DEBUG,...t),this._logHandler(this,Ut.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ut.VERBOSE,...t),this._logHandler(this,Ut.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ut.INFO,...t),this._logHandler(this,Ut.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ut.WARN,...t),this._logHandler(this,Ut.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ut.ERROR,...t),this._logHandler(this,Ut.ERROR,...t)}}const hA=(r,t)=>t.some(i=>r instanceof i);let S_,A_;function fA(){return S_||(S_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dA(){return A_||(A_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const y1=new WeakMap,Sp=new WeakMap,_1=new WeakMap,rp=new WeakMap,om=new WeakMap;function pA(r){const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{i(ts(r.result)),l()},d=()=>{a(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&y1.set(i,r)}).catch(()=>{}),om.set(t,r),t}function mA(r){if(Sp.has(r))return;const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{i(),l()},d=()=>{a(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});Sp.set(r,t)}let Ap={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return Sp.get(r);if(t==="objectStoreNames")return r.objectStoreNames||_1.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return ts(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function gA(r){Ap=r(Ap)}function yA(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=r.call(sp(this),t,...i);return _1.set(a,t.sort?t.sort():[t]),ts(a)}:dA().includes(r)?function(...t){return r.apply(sp(this),t),ts(y1.get(this))}:function(...t){return ts(r.apply(sp(this),t))}}function _A(r){return typeof r=="function"?yA(r):(r instanceof IDBTransaction&&mA(r),hA(r,fA())?new Proxy(r,Ap):r)}function ts(r){if(r instanceof IDBRequest)return pA(r);if(rp.has(r))return rp.get(r);const t=_A(r);return t!==r&&(rp.set(r,t),om.set(t,r)),t}const sp=r=>om.get(r);function vA(r,t,{blocked:i,upgrade:a,blocking:l,terminated:c}={}){const d=indexedDB.open(r,t),g=ts(d);return a&&d.addEventListener("upgradeneeded",y=>{a(ts(d.result),y.oldVersion,y.newVersion,ts(d.transaction),y)}),i&&d.addEventListener("blocked",y=>i(y.oldVersion,y.newVersion,y)),g.then(y=>{c&&y.addEventListener("close",()=>c()),l&&y.addEventListener("versionchange",v=>l(v.oldVersion,v.newVersion,v))}).catch(()=>{}),g}const EA=["get","getKey","getAll","getAllKeys","count"],TA=["put","add","delete","clear"],ap=new Map;function b_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(ap.get(t))return ap.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,l=TA.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||EA.includes(i)))return;const c=async function(d,...g){const y=this.transaction(d,l?"readwrite":"readonly");let v=y.store;return a&&(v=v.index(g.shift())),(await Promise.all([v[i](...g),l&&y.done]))[0]};return ap.set(t,c),c}gA(r=>({...r,get:(t,i,a)=>b_(t,i)||r.get(t,i,a),has:(t,i)=>!!b_(t,i)||r.has(t,i)}));/**
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
 */class SA{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(AA(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function AA(r){return r.getComponent()?.type==="VERSION"}const bp="@firebase/app",w_="0.14.4";/**
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
 */const ur=new am("@firebase/app"),bA="@firebase/app-compat",wA="@firebase/analytics-compat",RA="@firebase/analytics",CA="@firebase/app-check-compat",IA="@firebase/app-check",DA="@firebase/auth",NA="@firebase/auth-compat",OA="@firebase/database",xA="@firebase/data-connect",MA="@firebase/database-compat",VA="@firebase/functions",UA="@firebase/functions-compat",LA="@firebase/installations",kA="@firebase/installations-compat",PA="@firebase/messaging",zA="@firebase/messaging-compat",BA="@firebase/performance",jA="@firebase/performance-compat",qA="@firebase/remote-config",HA="@firebase/remote-config-compat",FA="@firebase/storage",GA="@firebase/storage-compat",KA="@firebase/firestore",YA="@firebase/ai",QA="@firebase/firestore-compat",XA="firebase",$A="12.4.0";/**
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
 */const wp="[DEFAULT]",ZA={[bp]:"fire-core",[bA]:"fire-core-compat",[RA]:"fire-analytics",[wA]:"fire-analytics-compat",[IA]:"fire-app-check",[CA]:"fire-app-check-compat",[DA]:"fire-auth",[NA]:"fire-auth-compat",[OA]:"fire-rtdb",[xA]:"fire-data-connect",[MA]:"fire-rtdb-compat",[VA]:"fire-fn",[UA]:"fire-fn-compat",[LA]:"fire-iid",[kA]:"fire-iid-compat",[PA]:"fire-fcm",[zA]:"fire-fcm-compat",[BA]:"fire-perf",[jA]:"fire-perf-compat",[qA]:"fire-rc",[HA]:"fire-rc-compat",[FA]:"fire-gcs",[GA]:"fire-gcs-compat",[KA]:"fire-fst",[QA]:"fire-fst-compat",[YA]:"fire-vertex","fire-js":"fire-js",[XA]:"fire-js-all"};/**
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
 */const Fl=new Map,JA=new Map,Rp=new Map;function R_(r,t){try{r.container.addComponent(t)}catch(i){ur.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function Js(r){const t=r.name;if(Rp.has(t))return ur.debug(`There were multiple attempts to register component ${t}.`),!1;Rp.set(t,r);for(const i of Fl.values())R_(i,r);for(const i of JA.values())R_(i,r);return!0}function Dh(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function ni(r){return r==null?!1:r.settings!==void 0}/**
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
 */const WA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},es=new Wl("app","Firebase",WA);/**
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
 */class tb{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}}/**
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
 */const na=$A;function v1(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const a={name:wp,automaticDataCollectionEnabled:!0,...t},l=a.name;if(typeof l!="string"||!l)throw es.create("bad-app-name",{appName:String(l)});if(i||(i=p1()),!i)throw es.create("no-options");const c=Fl.get(l);if(c){if(Zs(i,c.options)&&Zs(a,c.config))return c;throw es.create("duplicate-app",{appName:l})}const d=new aA(l);for(const y of Rp.values())d.addComponent(y);const g=new tb(i,a,d);return Fl.set(l,g),g}function Nh(r=wp){const t=Fl.get(r);if(!t&&r===wp&&p1())return v1();if(!t)throw es.create("no-app",{appName:r});return t}function eb(){return Array.from(Fl.values())}function xi(r,t,i){let a=ZA[r]??r;i&&(a+=`-${i}`);const l=a.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${t}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ur.warn(d.join(" "));return}Js(new ss(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const nb="firebase-heartbeat-database",ib=1,Gl="firebase-heartbeat-store";let op=null;function E1(){return op||(op=vA(nb,ib,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Gl)}catch(i){console.warn(i)}}}}).catch(r=>{throw es.create("idb-open",{originalErrorMessage:r.message})})),op}async function rb(r){try{const i=(await E1()).transaction(Gl),a=await i.objectStore(Gl).get(T1(r));return await i.done,a}catch(t){if(t instanceof zi)ur.warn(t.message);else{const i=es.create("idb-get",{originalErrorMessage:t?.message});ur.warn(i.message)}}}async function C_(r,t){try{const a=(await E1()).transaction(Gl,"readwrite");await a.objectStore(Gl).put(t,T1(r)),await a.done}catch(i){if(i instanceof zi)ur.warn(i.message);else{const a=es.create("idb-set",{originalErrorMessage:i?.message});ur.warn(a.message)}}}function T1(r){return`${r.name}!${r.options.appId}`}/**
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
 */const sb=1024,ab=30;class ob{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new ub(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=I_();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>ab){const l=cb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){ur.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=I_(),{heartbeatsToSend:i,unsentEntries:a}=lb(this._heartbeatsCache.heartbeats),l=uh(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return ur.warn(t),""}}}function I_(){return new Date().toISOString().substring(0,10)}function lb(r,t=sb){const i=[];let a=r.slice();for(const l of r){const c=i.find(d=>d.agent===l.agent);if(c){if(c.dates.push(l.date),D_(i)>t){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),D_(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class ub{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QS()?XS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await rb(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return C_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return C_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function D_(r){return uh(JSON.stringify({version:2,heartbeats:r})).length}function cb(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let a=1;a<r.length;a++)r[a].date<i&&(i=r[a].date,t=a);return t}/**
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
 */function hb(r){Js(new ss("platform-logger",t=>new SA(t),"PRIVATE")),Js(new ss("heartbeat",t=>new ob(t),"PRIVATE")),xi(bp,w_,r),xi(bp,w_,"esm2020"),xi("fire-js","")}hb("");var fb="firebase",db="12.4.0";/**
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
 */xi(fb,db,"app");var N_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ns,S1;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(A,w){function C(){}C.prototype=w.prototype,A.F=w.prototype,A.prototype=new C,A.prototype.constructor=A,A.D=function(M,O,U){for(var R=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)R[ne-2]=arguments[ne];return w.prototype[O].apply(M,R)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(A,w,C){C||(C=0);const M=Array(16);if(typeof w=="string")for(var O=0;O<16;++O)M[O]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(O=0;O<16;++O)M[O]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=A.g[0],C=A.g[1],O=A.g[2];let U=A.g[3],R;R=w+(U^C&(O^U))+M[0]+3614090360&4294967295,w=C+(R<<7&4294967295|R>>>25),R=U+(O^w&(C^O))+M[1]+3905402710&4294967295,U=w+(R<<12&4294967295|R>>>20),R=O+(C^U&(w^C))+M[2]+606105819&4294967295,O=U+(R<<17&4294967295|R>>>15),R=C+(w^O&(U^w))+M[3]+3250441966&4294967295,C=O+(R<<22&4294967295|R>>>10),R=w+(U^C&(O^U))+M[4]+4118548399&4294967295,w=C+(R<<7&4294967295|R>>>25),R=U+(O^w&(C^O))+M[5]+1200080426&4294967295,U=w+(R<<12&4294967295|R>>>20),R=O+(C^U&(w^C))+M[6]+2821735955&4294967295,O=U+(R<<17&4294967295|R>>>15),R=C+(w^O&(U^w))+M[7]+4249261313&4294967295,C=O+(R<<22&4294967295|R>>>10),R=w+(U^C&(O^U))+M[8]+1770035416&4294967295,w=C+(R<<7&4294967295|R>>>25),R=U+(O^w&(C^O))+M[9]+2336552879&4294967295,U=w+(R<<12&4294967295|R>>>20),R=O+(C^U&(w^C))+M[10]+4294925233&4294967295,O=U+(R<<17&4294967295|R>>>15),R=C+(w^O&(U^w))+M[11]+2304563134&4294967295,C=O+(R<<22&4294967295|R>>>10),R=w+(U^C&(O^U))+M[12]+1804603682&4294967295,w=C+(R<<7&4294967295|R>>>25),R=U+(O^w&(C^O))+M[13]+4254626195&4294967295,U=w+(R<<12&4294967295|R>>>20),R=O+(C^U&(w^C))+M[14]+2792965006&4294967295,O=U+(R<<17&4294967295|R>>>15),R=C+(w^O&(U^w))+M[15]+1236535329&4294967295,C=O+(R<<22&4294967295|R>>>10),R=w+(O^U&(C^O))+M[1]+4129170786&4294967295,w=C+(R<<5&4294967295|R>>>27),R=U+(C^O&(w^C))+M[6]+3225465664&4294967295,U=w+(R<<9&4294967295|R>>>23),R=O+(w^C&(U^w))+M[11]+643717713&4294967295,O=U+(R<<14&4294967295|R>>>18),R=C+(U^w&(O^U))+M[0]+3921069994&4294967295,C=O+(R<<20&4294967295|R>>>12),R=w+(O^U&(C^O))+M[5]+3593408605&4294967295,w=C+(R<<5&4294967295|R>>>27),R=U+(C^O&(w^C))+M[10]+38016083&4294967295,U=w+(R<<9&4294967295|R>>>23),R=O+(w^C&(U^w))+M[15]+3634488961&4294967295,O=U+(R<<14&4294967295|R>>>18),R=C+(U^w&(O^U))+M[4]+3889429448&4294967295,C=O+(R<<20&4294967295|R>>>12),R=w+(O^U&(C^O))+M[9]+568446438&4294967295,w=C+(R<<5&4294967295|R>>>27),R=U+(C^O&(w^C))+M[14]+3275163606&4294967295,U=w+(R<<9&4294967295|R>>>23),R=O+(w^C&(U^w))+M[3]+4107603335&4294967295,O=U+(R<<14&4294967295|R>>>18),R=C+(U^w&(O^U))+M[8]+1163531501&4294967295,C=O+(R<<20&4294967295|R>>>12),R=w+(O^U&(C^O))+M[13]+2850285829&4294967295,w=C+(R<<5&4294967295|R>>>27),R=U+(C^O&(w^C))+M[2]+4243563512&4294967295,U=w+(R<<9&4294967295|R>>>23),R=O+(w^C&(U^w))+M[7]+1735328473&4294967295,O=U+(R<<14&4294967295|R>>>18),R=C+(U^w&(O^U))+M[12]+2368359562&4294967295,C=O+(R<<20&4294967295|R>>>12),R=w+(C^O^U)+M[5]+4294588738&4294967295,w=C+(R<<4&4294967295|R>>>28),R=U+(w^C^O)+M[8]+2272392833&4294967295,U=w+(R<<11&4294967295|R>>>21),R=O+(U^w^C)+M[11]+1839030562&4294967295,O=U+(R<<16&4294967295|R>>>16),R=C+(O^U^w)+M[14]+4259657740&4294967295,C=O+(R<<23&4294967295|R>>>9),R=w+(C^O^U)+M[1]+2763975236&4294967295,w=C+(R<<4&4294967295|R>>>28),R=U+(w^C^O)+M[4]+1272893353&4294967295,U=w+(R<<11&4294967295|R>>>21),R=O+(U^w^C)+M[7]+4139469664&4294967295,O=U+(R<<16&4294967295|R>>>16),R=C+(O^U^w)+M[10]+3200236656&4294967295,C=O+(R<<23&4294967295|R>>>9),R=w+(C^O^U)+M[13]+681279174&4294967295,w=C+(R<<4&4294967295|R>>>28),R=U+(w^C^O)+M[0]+3936430074&4294967295,U=w+(R<<11&4294967295|R>>>21),R=O+(U^w^C)+M[3]+3572445317&4294967295,O=U+(R<<16&4294967295|R>>>16),R=C+(O^U^w)+M[6]+76029189&4294967295,C=O+(R<<23&4294967295|R>>>9),R=w+(C^O^U)+M[9]+3654602809&4294967295,w=C+(R<<4&4294967295|R>>>28),R=U+(w^C^O)+M[12]+3873151461&4294967295,U=w+(R<<11&4294967295|R>>>21),R=O+(U^w^C)+M[15]+530742520&4294967295,O=U+(R<<16&4294967295|R>>>16),R=C+(O^U^w)+M[2]+3299628645&4294967295,C=O+(R<<23&4294967295|R>>>9),R=w+(O^(C|~U))+M[0]+4096336452&4294967295,w=C+(R<<6&4294967295|R>>>26),R=U+(C^(w|~O))+M[7]+1126891415&4294967295,U=w+(R<<10&4294967295|R>>>22),R=O+(w^(U|~C))+M[14]+2878612391&4294967295,O=U+(R<<15&4294967295|R>>>17),R=C+(U^(O|~w))+M[5]+4237533241&4294967295,C=O+(R<<21&4294967295|R>>>11),R=w+(O^(C|~U))+M[12]+1700485571&4294967295,w=C+(R<<6&4294967295|R>>>26),R=U+(C^(w|~O))+M[3]+2399980690&4294967295,U=w+(R<<10&4294967295|R>>>22),R=O+(w^(U|~C))+M[10]+4293915773&4294967295,O=U+(R<<15&4294967295|R>>>17),R=C+(U^(O|~w))+M[1]+2240044497&4294967295,C=O+(R<<21&4294967295|R>>>11),R=w+(O^(C|~U))+M[8]+1873313359&4294967295,w=C+(R<<6&4294967295|R>>>26),R=U+(C^(w|~O))+M[15]+4264355552&4294967295,U=w+(R<<10&4294967295|R>>>22),R=O+(w^(U|~C))+M[6]+2734768916&4294967295,O=U+(R<<15&4294967295|R>>>17),R=C+(U^(O|~w))+M[13]+1309151649&4294967295,C=O+(R<<21&4294967295|R>>>11),R=w+(O^(C|~U))+M[4]+4149444226&4294967295,w=C+(R<<6&4294967295|R>>>26),R=U+(C^(w|~O))+M[11]+3174756917&4294967295,U=w+(R<<10&4294967295|R>>>22),R=O+(w^(U|~C))+M[2]+718787259&4294967295,O=U+(R<<15&4294967295|R>>>17),R=C+(U^(O|~w))+M[9]+3951481745&4294967295,A.g[0]=A.g[0]+w&4294967295,A.g[1]=A.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,A.g[2]=A.g[2]+O&4294967295,A.g[3]=A.g[3]+U&4294967295}a.prototype.v=function(A,w){w===void 0&&(w=A.length);const C=w-this.blockSize,M=this.C;let O=this.h,U=0;for(;U<w;){if(O==0)for(;U<=C;)l(this,A,U),U+=this.blockSize;if(typeof A=="string"){for(;U<w;)if(M[O++]=A.charCodeAt(U++),O==this.blockSize){l(this,M),O=0;break}}else for(;U<w;)if(M[O++]=A[U++],O==this.blockSize){l(this,M),O=0;break}}this.h=O,this.o+=w},a.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var w=1;w<A.length-8;++w)A[w]=0;w=this.o*8;for(var C=A.length-8;C<A.length;++C)A[C]=w&255,w/=256;for(this.v(A),A=Array(16),w=0,C=0;C<4;++C)for(let M=0;M<32;M+=8)A[w++]=this.g[C]>>>M&255;return A};function c(A,w){var C=g;return Object.prototype.hasOwnProperty.call(C,A)?C[A]:C[A]=w(A)}function d(A,w){this.h=w;const C=[];let M=!0;for(let O=A.length-1;O>=0;O--){const U=A[O]|0;M&&U==w||(C[O]=U,M=!1)}this.g=C}var g={};function y(A){return-128<=A&&A<128?c(A,function(w){return new d([w|0],w<0?-1:0)}):new d([A|0],A<0?-1:0)}function v(A){if(isNaN(A)||!isFinite(A))return b;if(A<0)return X(v(-A));const w=[];let C=1;for(let M=0;A>=C;M++)w[M]=A/C|0,C*=4294967296;return new d(w,0)}function S(A,w){if(A.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(A.charAt(0)=="-")return X(S(A.substring(1),w));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=v(Math.pow(w,8));let M=b;for(let U=0;U<A.length;U+=8){var O=Math.min(8,A.length-U);const R=parseInt(A.substring(U,U+O),w);O<8?(O=v(Math.pow(w,O)),M=M.j(O).add(v(R))):(M=M.j(C),M=M.add(v(R)))}return M}var b=y(0),x=y(1),q=y(16777216);r=d.prototype,r.m=function(){if(Z(this))return-X(this).m();let A=0,w=1;for(let C=0;C<this.g.length;C++){const M=this.i(C);A+=(M>=0?M:4294967296+M)*w,w*=4294967296}return A},r.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if($(this))return"0";if(Z(this))return"-"+X(this).toString(A);const w=v(Math.pow(A,6));var C=this;let M="";for(;;){const O=lt(C,w).g;C=rt(C,O.j(w));let U=((C.g.length>0?C.g[0]:C.h)>>>0).toString(A);if(C=O,$(C))return U+M;for(;U.length<6;)U="0"+U;M=U+M}},r.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function $(A){if(A.h!=0)return!1;for(let w=0;w<A.g.length;w++)if(A.g[w]!=0)return!1;return!0}function Z(A){return A.h==-1}r.l=function(A){return A=rt(this,A),Z(A)?-1:$(A)?0:1};function X(A){const w=A.g.length,C=[];for(let M=0;M<w;M++)C[M]=~A.g[M];return new d(C,~A.h).add(x)}r.abs=function(){return Z(this)?X(this):this},r.add=function(A){const w=Math.max(this.g.length,A.g.length),C=[];let M=0;for(let O=0;O<=w;O++){let U=M+(this.i(O)&65535)+(A.i(O)&65535),R=(U>>>16)+(this.i(O)>>>16)+(A.i(O)>>>16);M=R>>>16,U&=65535,R&=65535,C[O]=R<<16|U}return new d(C,C[C.length-1]&-2147483648?-1:0)};function rt(A,w){return A.add(X(w))}r.j=function(A){if($(this)||$(A))return b;if(Z(this))return Z(A)?X(this).j(X(A)):X(X(this).j(A));if(Z(A))return X(this.j(X(A)));if(this.l(q)<0&&A.l(q)<0)return v(this.m()*A.m());const w=this.g.length+A.g.length,C=[];for(var M=0;M<2*w;M++)C[M]=0;for(M=0;M<this.g.length;M++)for(let O=0;O<A.g.length;O++){const U=this.i(M)>>>16,R=this.i(M)&65535,ne=A.i(O)>>>16,de=A.i(O)&65535;C[2*M+2*O]+=R*de,ut(C,2*M+2*O),C[2*M+2*O+1]+=U*de,ut(C,2*M+2*O+1),C[2*M+2*O+1]+=R*ne,ut(C,2*M+2*O+1),C[2*M+2*O+2]+=U*ne,ut(C,2*M+2*O+2)}for(A=0;A<w;A++)C[A]=C[2*A+1]<<16|C[2*A];for(A=w;A<2*w;A++)C[A]=0;return new d(C,0)};function ut(A,w){for(;(A[w]&65535)!=A[w];)A[w+1]+=A[w]>>>16,A[w]&=65535,w++}function nt(A,w){this.g=A,this.h=w}function lt(A,w){if($(w))throw Error("division by zero");if($(A))return new nt(b,b);if(Z(A))return w=lt(X(A),w),new nt(X(w.g),X(w.h));if(Z(w))return w=lt(A,X(w)),new nt(X(w.g),w.h);if(A.g.length>30){if(Z(A)||Z(w))throw Error("slowDivide_ only works with positive integers.");for(var C=x,M=w;M.l(A)<=0;)C=yt(C),M=yt(M);var O=at(C,1),U=at(M,1);for(M=at(M,2),C=at(C,2);!$(M);){var R=U.add(M);R.l(A)<=0&&(O=O.add(C),U=R),M=at(M,1),C=at(C,1)}return w=rt(A,O.j(w)),new nt(O,w)}for(O=b;A.l(w)>=0;){for(C=Math.max(1,Math.floor(A.m()/w.m())),M=Math.ceil(Math.log(C)/Math.LN2),M=M<=48?1:Math.pow(2,M-48),U=v(C),R=U.j(w);Z(R)||R.l(A)>0;)C-=M,U=v(C),R=U.j(w);$(U)&&(U=x),O=O.add(U),A=rt(A,R)}return new nt(O,A)}r.B=function(A){return lt(this,A).h},r.and=function(A){const w=Math.max(this.g.length,A.g.length),C=[];for(let M=0;M<w;M++)C[M]=this.i(M)&A.i(M);return new d(C,this.h&A.h)},r.or=function(A){const w=Math.max(this.g.length,A.g.length),C=[];for(let M=0;M<w;M++)C[M]=this.i(M)|A.i(M);return new d(C,this.h|A.h)},r.xor=function(A){const w=Math.max(this.g.length,A.g.length),C=[];for(let M=0;M<w;M++)C[M]=this.i(M)^A.i(M);return new d(C,this.h^A.h)};function yt(A){const w=A.g.length+1,C=[];for(let M=0;M<w;M++)C[M]=A.i(M)<<1|A.i(M-1)>>>31;return new d(C,A.h)}function at(A,w){const C=w>>5;w%=32;const M=A.g.length-C,O=[];for(let U=0;U<M;U++)O[U]=w>0?A.i(U+C)>>>w|A.i(U+C+1)<<32-w:A.i(U+C);return new d(O,A.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,S1=a,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=v,d.fromString=S,ns=d}).apply(typeof N_<"u"?N_:typeof self<"u"?self:typeof window<"u"?window:{});var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var A1,xl,b1,Xc,Cp,w1,R1,C1;(function(){var r,t=Object.defineProperty;function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof zc=="object"&&zc];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var a=i(this);function l(u,p){if(p)t:{var _=a;u=u.split(".");for(var T=0;T<u.length-1;T++){var L=u[T];if(!(L in _))break t;_=_[L]}u=u[u.length-1],T=_[u],p=p(T),p!=T&&p!=null&&t(_,u,{configurable:!0,writable:!0,value:p})}}l("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(u){return u||function(p){var _=[],T;for(T in p)Object.prototype.hasOwnProperty.call(p,T)&&_.push([T,p[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function g(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function y(u,p,_){return u.call.apply(u.bind,arguments)}function v(u,p,_){return v=y,v.apply(null,arguments)}function S(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function b(u,p){function _(){}_.prototype=p.prototype,u.Z=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(T,L,B){for(var J=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)J[wt-2]=arguments[wt];return p.prototype[L].apply(T,J)}}var x=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function q(u){const p=u.length;if(p>0){const _=Array(p);for(let T=0;T<p;T++)_[T]=u[T];return _}return[]}function $(u,p){for(let T=1;T<arguments.length;T++){const L=arguments[T];var _=typeof L;if(_=_!="object"?_:L?Array.isArray(L)?"array":_:"null",_=="array"||_=="object"&&typeof L.length=="number"){_=u.length||0;const B=L.length||0;u.length=_+B;for(let J=0;J<B;J++)u[_+J]=L[J]}else u.push(L)}}class Z{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function X(u){d.setTimeout(()=>{throw u},0)}function rt(){var u=A;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class ut{constructor(){this.h=this.g=null}add(p,_){const T=nt.get();T.set(p,_),this.h?this.h.next=T:this.g=T,this.h=T}}var nt=new Z(()=>new lt,u=>u.reset());class lt{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let yt,at=!1,A=new ut,w=()=>{const u=Promise.resolve(void 0);yt=()=>{u.then(C)}};function C(){for(var u;u=rt();){try{u.h.call(u.g)}catch(_){X(_)}var p=nt;p.j(u),p.h<100&&(p.h++,u.next=p.g,p.g=u)}at=!1}function M(){this.u=this.u,this.C=this.C}M.prototype.u=!1,M.prototype.dispose=function(){this.u||(this.u=!0,this.N())},M.prototype[Symbol.dispose]=function(){this.dispose()},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var U=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,p),d.removeEventListener("test",_,p)}catch{}return u})();function R(u){return/^[\s\xa0]*$/.test(u)}function ne(u,p){O.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,p)}b(ne,O),ne.prototype.init=function(u,p){const _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget,p||(_=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement)),this.relatedTarget=p,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&ne.Z.h.call(this)},ne.prototype.h=function(){ne.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var de="closure_listenable_"+(Math.random()*1e6|0),H=0;function tt(u,p,_,T,L){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!T,this.ha=L,this.key=++H,this.da=this.fa=!1}function ft(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function At(u,p,_){for(const T in u)p.call(_,u[T],T,u)}function Pt(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function D(u){const p={};for(const _ in u)p[_]=u[_];return p}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function et(u,p){let _,T;for(let L=1;L<arguments.length;L++){T=arguments[L];for(_ in T)u[_]=T[_];for(let B=0;B<G.length;B++)_=G[B],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function it(u){this.src=u,this.g={},this.h=0}it.prototype.add=function(u,p,_,T,L){const B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);const J=vt(u,p,T,L);return J>-1?(p=u[J],_||(p.fa=!1)):(p=new tt(p,this.src,B,!!T,L),p.fa=_,u.push(p)),p};function mt(u,p){const _=p.type;if(_ in u.g){var T=u.g[_],L=Array.prototype.indexOf.call(T,p,void 0),B;(B=L>=0)&&Array.prototype.splice.call(T,L,1),B&&(ft(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function vt(u,p,_,T){for(let L=0;L<u.length;++L){const B=u[L];if(!B.da&&B.listener==p&&B.capture==!!_&&B.ha==T)return L}return-1}var Nt="closure_lm_"+(Math.random()*1e6|0),ie={};function qt(u,p,_,T,L){if(Array.isArray(p)){for(let B=0;B<p.length;B++)qt(u,p[B],_,T,L);return null}return _=Io(_),u&&u[de]?u.J(p,_,g(T)?!!T.capture:!1,L):qn(u,p,_,!1,T,L)}function qn(u,p,_,T,L,B){if(!p)throw Error("Invalid event type");const J=g(L)?!!L.capture:!!L;let wt=ds(u);if(wt||(u[Nt]=wt=new it(u)),_=wt.add(p,_,T,J,B),_.proxy)return _;if(T=Hn(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)U||(L=J),L===void 0&&(L=!1),u.addEventListener(p.toString(),T,L);else if(u.attachEvent)u.attachEvent(ai(p.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Hn(){function u(_){return p.call(u.src,u.listener,_)}const p=Ro;return u}function en(u,p,_,T,L){if(Array.isArray(p))for(var B=0;B<p.length;B++)en(u,p[B],_,T,L);else T=g(T)?!!T.capture:!!T,_=Io(_),u&&u[de]?(u=u.i,B=String(p).toString(),B in u.g&&(p=u.g[B],_=vt(p,_,T,L),_>-1&&(ft(p[_]),Array.prototype.splice.call(p,_,1),p.length==0&&(delete u.g[B],u.h--)))):u&&(u=ds(u))&&(p=u.g[p.toString()],u=-1,p&&(u=vt(p,_,T,L)),(_=u>-1?p[u]:null)&&ra(_))}function ra(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[de])mt(p.i,u);else{var _=u.type,T=u.proxy;p.removeEventListener?p.removeEventListener(_,T,u.capture):p.detachEvent?p.detachEvent(ai(_),T):p.addListener&&p.removeListener&&p.removeListener(T),(_=ds(p))?(mt(_,u),_.h==0&&(_.src=null,p[Nt]=null)):ft(u)}}}function ai(u){return u in ie?ie[u]:ie[u]="on"+u}function Ro(u,p){if(u.da)u=!0;else{p=new ne(p,this);const _=u.listener,T=u.ha||u.src;u.fa&&ra(u),u=_.call(T,p)}return u}function ds(u){return u=u[Nt],u instanceof it?u:null}var Co="__closure_events_fn_"+(Math.random()*1e9>>>0);function Io(u){return typeof u=="function"?u:(u[Co]||(u[Co]=function(p){return u.handleEvent(p)}),u[Co])}function Ee(){M.call(this),this.i=new it(this),this.M=this,this.G=null}b(Ee,M),Ee.prototype[de]=!0,Ee.prototype.removeEventListener=function(u,p,_,T){en(this,u,p,_,T)};function Me(u,p){var _,T=u.G;if(T)for(_=[];T;T=T.G)_.push(T);if(u=u.M,T=p.type||p,typeof p=="string")p=new O(p,u);else if(p instanceof O)p.target=p.target||u;else{var L=p;p=new O(T,u),et(p,L)}L=!0;let B,J;if(_)for(J=_.length-1;J>=0;J--)B=p.g=_[J],L=dr(B,T,!0,p)&&L;if(B=p.g=u,L=dr(B,T,!0,p)&&L,L=dr(B,T,!1,p)&&L,_)for(J=0;J<_.length;J++)B=p.g=_[J],L=dr(B,T,!1,p)&&L}Ee.prototype.N=function(){if(Ee.Z.N.call(this),this.i){var u=this.i;for(const p in u.g){const _=u.g[p];for(let T=0;T<_.length;T++)ft(_[T]);delete u.g[p],u.h--}}this.G=null},Ee.prototype.J=function(u,p,_,T){return this.i.add(String(u),p,!1,_,T)},Ee.prototype.K=function(u,p,_,T){return this.i.add(String(u),p,!0,_,T)};function dr(u,p,_,T){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let B=0;B<p.length;++B){const J=p[B];if(J&&!J.da&&J.capture==_){const wt=J.listener,me=J.ha||J.src;J.fa&&mt(u.i,J),L=wt.call(me,T)!==!1&&L}}return L&&!T.defaultPrevented}function Jh(u,p){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=v(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:d.setTimeout(u,p||0)}function cu(u){u.g=Jh(()=>{u.g=null,u.i&&(u.i=!1,cu(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class nn extends M{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:cu(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ps(u){M.call(this),this.h=u,this.g={}}b(ps,M);var Do=[];function No(u){At(u.g,function(p,_){this.g.hasOwnProperty(_)&&ra(p)},u),u.g={}}ps.prototype.N=function(){ps.Z.N.call(this),No(this)},ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pr=d.JSON.stringify,Wh=d.JSON.parse,hu=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function fu(){}function du(){}var Fn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qe(){O.call(this,"d")}b(qe,O);function Rn(){O.call(this,"c")}b(Rn,O);var pe={},pu=null;function sa(){return pu=pu||new Ee}pe.Ia="serverreachability";function mu(u){O.call(this,pe.Ia,u)}b(mu,O);function oi(u){const p=sa();Me(p,new mu(p))}pe.STAT_EVENT="statevent";function ms(u,p){O.call(this,pe.STAT_EVENT,u),this.stat=p}b(ms,O);function Te(u){const p=sa();Me(p,new ms(p,u))}pe.Ja="timingevent";function li(u,p){O.call(this,pe.Ja,u),this.size=p}b(li,O);function ui(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},p)}function Gn(){this.g=!0}Gn.prototype.ua=function(){this.g=!1};function tf(u,p,_,T,L,B){u.info(function(){if(u.g)if(B){var J="",wt=B.split("&");for(let Gt=0;Gt<wt.length;Gt++){var me=wt[Gt].split("=");if(me.length>1){const oe=me[0];me=me[1];const Nn=oe.split("_");J=Nn.length>=2&&Nn[1]=="type"?J+(oe+"="+me+"&"):J+(oe+"=redacted&")}}}else J=null;else J=B;return"XMLHTTP REQ ("+T+") [attempt "+L+"]: "+p+`
`+_+`
`+J})}function gu(u,p,_,T,L,B,J){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+L+"]: "+p+`
`+_+`
`+B+" "+J})}function ci(u,p,_,T){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+ef(u,_)+(T?" "+T:"")})}function gs(u,p){u.info(function(){return"TIMEOUT: "+p})}Gn.prototype.info=function(){};function ef(u,p){if(!u.g)return p;if(!p)return null;try{const B=JSON.parse(p);if(B){for(u=0;u<B.length;u++)if(Array.isArray(B[u])){var _=B[u];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var L=T[0];if(L!="noop"&&L!="stop"&&L!="close")for(let J=1;J<T.length;J++)T[J]=""}}}}return pr(B)}catch{return p}}var ys={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Oo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},xo;function _s(){}b(_s,fu),_s.prototype.g=function(){return new XMLHttpRequest},xo=new _s;function ji(u){return encodeURIComponent(String(u))}function yu(u){var p=1;u=u.split(":");const _=[];for(;p>0&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function Kn(u,p,_,T){this.j=u,this.i=p,this.l=_,this.S=T||1,this.V=new ps(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Yn}function Yn(){this.i=null,this.g="",this.h=!1}var Se={},ke={};function hi(u,p,_){u.M=1,u.A=vs(be(p)),u.u=_,u.R=!0,aa(u,null)}function aa(u,p){u.F=Date.now(),fi(u),u.B=be(u.A);var _=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),ca(_.i,"t",T),u.C=0,_=u.j.L,u.h=new Yn,u.g=xu(u.j,_?p:null,!u.u),u.P>0&&(u.O=new nn(v(u.Y,u,u.g),u.P)),p=u.V,_=u.g,T=u.ba;var L="readystatechange";Array.isArray(L)||(L&&(Do[0]=L.toString()),L=Do);for(let B=0;B<L.length;B++){const J=qt(_,L[B],T||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=u.J?D(u.J):{},u.u?(u.v||(u.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,p)):(u.v="GET",u.g.ea(u.B,u.v,null,p)),oi(),tf(u.i,u.v,u.B,u.l,u.S,u.u)}Kn.prototype.ba=function(u){u=u.target;const p=this.O;p&&$n(u)==3?p.j():this.Y(u)},Kn.prototype.Y=function(u){try{if(u==this.g)t:{const wt=$n(this.g),me=this.g.ya(),Gt=this.g.ca();if(!(wt<3)&&(wt!=3||this.g&&(this.h.h||this.g.la()||He(this.g)))){this.K||wt!=4||me==7||(me==8||Gt<=0?oi(3):oi(2)),di(this);var p=this.g.ca();this.X=p;var _=nf(this);if(this.o=p==200,gu(this.i,this.v,this.B,this.l,this.S,wt,p),this.o){if(this.U&&!this.L){e:{if(this.g){var T,L=this.g;if((T=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(T)){var B=T;break e}}B=null}if(u=B)ci(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,pi(this,u);else{this.o=!1,this.m=3,Te(12),gn(this),Cn(this);break t}}if(this.R){u=!0;let oe;for(;!this.K&&this.C<_.length;)if(oe=vu(this,_),oe==ke){wt==4&&(this.m=4,Te(14),u=!1),ci(this.i,this.l,null,"[Incomplete Response]");break}else if(oe==Se){this.m=4,Te(15),ci(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else ci(this.i,this.l,oe,null),pi(this,oe);if(_u(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||_.length!=0||this.h.h||(this.m=1,Te(16),u=!1),this.o=this.o&&u,!u)ci(this.i,this.l,_,"[Invalid Chunked Response]"),gn(this),Cn(this);else if(_.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Yo(J),J.P=!0,Te(11))}}else ci(this.i,this.l,_,null),pi(this,_);wt==4&&gn(this),this.o&&!this.K&&(wt==4?Iu(this.j,this):(this.o=!1,fi(this)))}else Hi(this.g),p==400&&_.indexOf("Unknown SID")>0?(this.m=3,Te(12)):(this.m=0,Te(13)),gn(this),Cn(this)}}}catch{}finally{}};function nf(u){if(!_u(u))return u.g.la();const p=He(u.g);if(p==="")return"";let _="";const T=p.length,L=$n(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return gn(u),Cn(u),"";u.h.i=new d.TextDecoder}for(let B=0;B<T;B++)u.h.h=!0,_+=u.h.i.decode(p[B],{stream:!(L&&B==T-1)});return p.length=0,u.h.g+=_,u.C=0,u.h.g}function _u(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function vu(u,p){var _=u.C,T=p.indexOf(`
`,_);return T==-1?ke:(_=Number(p.substring(_,T)),isNaN(_)?Se:(T+=1,T+_>p.length?ke:(p=p.slice(T,T+_),u.C=T+_,p)))}Kn.prototype.cancel=function(){this.K=!0,gn(this)};function fi(u){u.T=Date.now()+u.H,oa(u,u.H)}function oa(u,p){if(u.D!=null)throw Error("WatchDog timer not null");u.D=ui(v(u.aa,u),p)}function di(u){u.D&&(d.clearTimeout(u.D),u.D=null)}Kn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(gs(this.i,this.B),this.M!=2&&(oi(),Te(17)),gn(this),this.m=2,Cn(this)):oa(this,this.T-u)};function Cn(u){u.j.I==0||u.K||Iu(u.j,u)}function gn(u){di(u);var p=u.O;p&&typeof p.dispose=="function"&&p.dispose(),u.O=null,No(u.V),u.g&&(p=u.g,u.g=null,p.abort(),p.dispose())}function pi(u,p){try{var _=u.j;if(_.I!=0&&(_.g==u||gi(_.h,u))){if(!u.L&&gi(_.h,u)&&_.I==3){try{var T=_.Ba.g.parse(p)}catch{T=null}if(Array.isArray(T)&&T.length==3){var L=T;if(L[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)ma(_),Sr(_);else break t;Rs(_),Te(18)}}else _.xa=L[1],0<_.xa-_.K&&L[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=ui(v(_.Va,_),6e3));mi(_.h)<=1&&_.ta&&(_.ta=void 0)}else Si(_,11)}else if((u.L||_.g==u)&&ma(_),!R(p))for(L=_.Ba.g.parse(p),p=0;p<L.length;p++){let Gt=L[p];const oe=Gt[0];if(!(oe<=_.K))if(_.K=oe,Gt=Gt[1],_.I==2)if(Gt[0]=="c"){_.M=Gt[1],_.ba=Gt[2];const Nn=Gt[3];Nn!=null&&(_.ka=Nn,_.j.info("VER="+_.ka));const Ai=Gt[4];Ai!=null&&(_.za=Ai,_.j.info("SVER="+_.za));const Zn=Gt[5];Zn!=null&&typeof Zn=="number"&&Zn>0&&(T=1.5*Zn,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Jn=u.g;if(Jn){const Cs=Jn.g?Jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cs){var B=T.h;B.g||Cs.indexOf("spdy")==-1&&Cs.indexOf("quic")==-1&&Cs.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Uo(B,B.h),B.h=null))}if(T.G){const ga=Jn.g?Jn.g.getResponseHeader("X-HTTP-Session-Id"):null;ga&&(T.wa=ga,Qt(T.J,T.G,ga))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var J=u;if(T.na=Ou(T,T.L?T.ba:null,T.W),J.L){Lo(T.h,J);var wt=J,me=T.O;me&&(wt.H=me),wt.D&&(di(wt),fi(wt)),T.g=J}else Ru(T);_.i.length>0&&Ti(_)}else Gt[0]!="stop"&&Gt[0]!="close"||Si(_,7);else _.I==3&&(Gt[0]=="stop"||Gt[0]=="close"?Gt[0]=="stop"?Si(_,7):Go(_):Gt[0]!="noop"&&_.l&&_.l.qa(Gt),_.A=0)}}oi(4)}catch{}}var Ae=class{constructor(u,p){this.g=u,this.map=p}};function Mo(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Vo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function mi(u){return u.h?1:u.g?u.g.size:0}function gi(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Uo(u,p){u.g?u.g.add(p):u.h=p}function Lo(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Mo.prototype.cancel=function(){if(this.i=ko(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ko(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.G);return p}return q(u.i)}var Eu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function la(u,p){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const T=u[_].indexOf("=");let L,B=null;T>=0?(L=u[_].substring(0,T),B=u[_].substring(T+1)):L=u[_],p(L,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function yn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;u instanceof yn?(this.l=u.l,Pe(this,u.j),this.o=u.o,this.g=u.g,mr(this,u.u),this.h=u.h,Po(this,bu(u.i)),this.m=u.m):u&&(p=String(u).match(Eu))?(this.l=!1,Pe(this,p[1]||"",!0),this.o=yi(p[2]||""),this.g=yi(p[3]||"",!0),mr(this,p[4]),this.h=yi(p[5]||"",!0),Po(this,p[6]||"",!0),this.m=yi(p[7]||"")):(this.l=!1,this.i=new yr(null,this.l))}yn.prototype.toString=function(){const u=[];var p=this.j;p&&u.push(Es(p,ua,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Es(p,ua,!0),"@"),u.push(ji(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Es(_,_.charAt(0)=="/"?zo:Tu,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Es(_,Su)),u.join("")},yn.prototype.resolve=function(u){const p=be(this);let _=!!u.j;_?Pe(p,u.j):_=!!u.o,_?p.o=u.o:_=!!u.g,_?p.g=u.g:_=u.u!=null;var T=u.h;if(_)mr(p,u.u);else if(_=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var L=p.h.lastIndexOf("/");L!=-1&&(T=p.h.slice(0,L+1)+T)}if(L=T,L==".."||L==".")T="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){T=L.lastIndexOf("/",0)==0,L=L.split("/");const B=[];for(let J=0;J<L.length;){const wt=L[J++];wt=="."?T&&J==L.length&&B.push(""):wt==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),T&&J==L.length&&B.push("")):(B.push(wt),T=!0)}T=B.join("/")}else T=L}return _?p.h=T:_=u.i.toString()!=="",_?Po(p,bu(u.i)):_=!!u.m,_&&(p.m=u.m),p};function be(u){return new yn(u)}function Pe(u,p,_){u.j=_?yi(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function mr(u,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);u.u=p}else u.u=null}function Po(u,p,_){p instanceof yr?(u.i=p,ha(u.i,u.l)):(_||(p=Es(p,gr)),u.i=new yr(p,u.l))}function Qt(u,p,_){u.i.set(p,_)}function vs(u){return Qt(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function yi(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Es(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,on),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function on(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ua=/[#\/\?@]/g,Tu=/[#\?:]/g,zo=/[#\?]/g,gr=/[#\?@]/g,Su=/#/g;function yr(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function ln(u){u.g||(u.g=new Map,u.h=0,u.i&&la(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}r=yr.prototype,r.add=function(u,p){ln(this),this.i=null,u=_r(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function Au(u,p){ln(u),p=_r(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Bo(u,p){return ln(u),p=_r(u,p),u.g.has(p)}r.forEach=function(u,p){ln(this),this.g.forEach(function(_,T){_.forEach(function(L){u.call(p,L,T,this)},this)},this)};function jo(u,p){ln(u);let _=[];if(typeof p=="string")Bo(u,p)&&(_=_.concat(u.g.get(_r(u,p))));else for(u=Array.from(u.g.values()),p=0;p<u.length;p++)_=_.concat(u[p]);return _}r.set=function(u,p){return ln(this),this.i=null,u=_r(this,u),Bo(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=jo(this,u),u.length>0?String(u[0]):p):p};function ca(u,p,_){Au(u,p),_.length>0&&(u.i=null,u.g.set(_r(u,p),q(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(let T=0;T<p.length;T++){var _=p[T];const L=ji(_);_=jo(this,_);for(let B=0;B<_.length;B++){let J=L;_[B]!==""&&(J+="="+ji(_[B])),u.push(J)}}return this.i=u.join("&")};function bu(u){const p=new yr;return p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),p}function _r(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function ha(u,p){p&&!u.j&&(ln(u),u.i=null,u.g.forEach(function(_,T){const L=T.toLowerCase();T!=L&&(Au(this,T),ca(this,L,_))},u)),u.j=p}function Qn(u,p){const _=new Gn;if(d.Image){const T=new Image;T.onload=S(In,_,"TestLoadImage: loaded",!0,p,T),T.onerror=S(In,_,"TestLoadImage: error",!1,p,T),T.onabort=S(In,_,"TestLoadImage: abort",!1,p,T),T.ontimeout=S(In,_,"TestLoadImage: timeout",!1,p,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else p(!1)}function qo(u,p){const _=new Gn,T=new AbortController,L=setTimeout(()=>{T.abort(),In(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:T.signal}).then(B=>{clearTimeout(L),B.ok?In(_,"TestPingServer: ok",!0,p):In(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),In(_,"TestPingServer: error",!1,p)})}function In(u,p,_,T,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),T(_)}catch{}}function vr(){this.g=new hu}function _i(u){this.i=u.Sb||null,this.h=u.ab||!1}b(_i,fu),_i.prototype.g=function(){return new Ts(this.i,this.h)};function Ts(u,p){Ee.call(this),this.H=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(Ts,Ee),r=Ts.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=p,this.readyState=1,Xn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(p.body=u),(this.H||d).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Er(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fa(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function fa(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Er(this):Xn(this),this.readyState==3&&fa(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,Er(this))},r.Na=function(u){this.g&&(this.response=u,Er(this))},r.ga=function(){this.g&&Er(this)};function Er(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Xn(u)}r.setRequestHeader=function(u,p){this.A.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function Xn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Dn(u){let p="";return At(u,function(_,T){p+=T,p+=":",p+=_,p+=`\r
`}),p}function Ss(u,p,_){t:{for(T in _){var T=!1;break t}T=!0}T||(_=Dn(_),typeof u=="string"?_!=null&&ji(_):Qt(u,p,_))}function Zt(u){Ee.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(Zt,Ee);var vi=/^https?$/i,Ho=["POST","PUT"];r=Zt.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,p,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():xo.g(),this.g.onreadystatechange=x(v(this.Ca,this));try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){As(this,B);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var L in T)_.set(L,T[L]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())_.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),L=d.FormData&&u instanceof d.FormData,!(Array.prototype.indexOf.call(Ho,p,void 0)>=0)||T||L||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,J]of _)this.g.setRequestHeader(B,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(B){As(this,B)}};function As(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.o=5,Fo(u),qi(u)}function Fo(u){u.A||(u.A=!0,Me(u,"complete"),Me(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,Me(this,"complete"),Me(this,"abort"),qi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),Zt.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?bs(this):this.Xa())},r.Xa=function(){bs(this)};function bs(u){if(u.h&&typeof c<"u"){if(u.v&&$n(u)==4)setTimeout(u.Ca.bind(u),0);else if(Me(u,"readystatechange"),$n(u)==4){u.h=!1;try{const B=u.ca();t:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var _;if(!(_=p)){var T;if(T=B===0){let J=String(u.D).match(Eu)[1]||null;!J&&d.self&&d.self.location&&(J=d.self.location.protocol.slice(0,-1)),T=!vi.test(J?J.toLowerCase():"")}_=T}if(_)Me(u,"complete"),Me(u,"success");else{u.o=6;try{var L=$n(u)>2?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.ca()+"]",Fo(u)}}finally{qi(u)}}}}function qi(u,p){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,p||Me(u,"ready");try{_.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function $n(u){return u.g?u.g.readyState:0}r.ca=function(){try{return $n(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Wh(p)}};function He(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Hi(u){const p={};u=(u.g&&$n(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(R(u[T]))continue;var _=yu(u[T]);const L=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=p[L]||[];p[L]=B,B.push(_)}Pt(p,function(T){return T.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function Tr(u){this.za=0,this.i=[],this.j=new Gn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ei("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ei("baseRetryDelayMs",5e3,u),this.Za=Ei("retryDelaySeedMs",1e4,u),this.Ta=Ei("forwardChannelMaxRetries",2,u),this.va=Ei("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Mo(u&&u.concurrentRequestLimit),this.Ba=new vr,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Tr.prototype,r.ka=8,r.I=1,r.connect=function(u,p,_,T){Te(0),this.W=u,this.H=p||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=Ou(this,null,this.W),Ti(this)};function Go(u){if(da(u),u.I==3){var p=u.V++,_=be(u.J);if(Qt(_,"SID",u.M),Qt(_,"RID",p),Qt(_,"TYPE","terminate"),ws(u,_),p=new Kn(u,u.j,p),p.M=2,p.A=vs(be(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(p.A.toString(),"")}catch{}!_&&d.Image&&(new Image().src=p.A,_=!0),_||(p.g=xu(p.j,null),p.g.ea(p.A)),p.F=Date.now(),fi(p)}Nu(u)}function Sr(u){u.g&&(Yo(u),u.g.cancel(),u.g=null)}function da(u){Sr(u),u.v&&(d.clearTimeout(u.v),u.v=null),ma(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&d.clearTimeout(u.m),u.m=null)}function Ti(u){if(!Vo(u.h)&&!u.m){u.m=!0;var p=u.Ea;yt||w(),at||(yt(),at=!0),A.add(p,u),u.D=0}}function pa(u,p){return mi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=p.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=ui(v(u.Ea,u,p),Du(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const L=new Kn(this,this.j,u);let B=this.o;if(this.U&&(B?(B=D(B),et(B,this.U)):B=this.U),this.u!==null||this.R||(L.J=B,B=null),this.S)t:{for(var p=0,_=0;_<this.i.length;_++){e:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(p+=T,p>4096){p=_;break t}if(p===4096||_===this.i.length-1){p=_+1;break t}}p=1e3}else p=1e3;p=wu(this,L,p),_=be(this.J),Qt(_,"RID",u),Qt(_,"CVER",22),this.G&&Qt(_,"X-HTTP-Session-Id",this.G),ws(this,_),B&&(this.R?p="headers="+ji(Dn(B))+"&"+p:this.u&&Ss(_,this.u,B)),Uo(this.h,L),this.Ra&&Qt(_,"TYPE","init"),this.S?(Qt(_,"$req",p),Qt(_,"SID","null"),L.U=!0,hi(L,_,null)):hi(L,_,p),this.I=2}}else this.I==3&&(u?Ko(this,u):this.i.length==0||Vo(this.h)||Ko(this))};function Ko(u,p){var _;p?_=p.l:_=u.V++;const T=be(u.J);Qt(T,"SID",u.M),Qt(T,"RID",_),Qt(T,"AID",u.K),ws(u,T),u.u&&u.o&&Ss(T,u.u,u.o),_=new Kn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),p&&(u.i=p.G.concat(u.i)),p=wu(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Uo(u.h,_),hi(_,T,p)}function ws(u,p){u.H&&At(u.H,function(_,T){Qt(p,T,_)}),u.l&&At({},function(_,T){Qt(p,T,_)})}function wu(u,p,_){_=Math.min(u.i.length,_);const T=u.l?v(u.l.Ka,u.l,u):null;t:{var L=u.i;let wt=-1;for(;;){const me=["count="+_];wt==-1?_>0?(wt=L[0].g,me.push("ofs="+wt)):wt=0:me.push("ofs="+wt);let Gt=!0;for(let oe=0;oe<_;oe++){var B=L[oe].g;const Nn=L[oe].map;if(B-=wt,B<0)wt=Math.max(0,L[oe].g-100),Gt=!1;else try{B="req"+B+"_"||"";try{var J=Nn instanceof Map?Nn:Object.entries(Nn);for(const[Ai,Zn]of J){let Jn=Zn;g(Zn)&&(Jn=pr(Zn)),me.push(B+Ai+"="+encodeURIComponent(Jn))}}catch(Ai){throw me.push(B+"type="+encodeURIComponent("_badmap")),Ai}}catch{T&&T(Nn)}}if(Gt){J=me.join("&");break t}}J=void 0}return u=u.i.splice(0,_),p.G=u,J}function Ru(u){if(!u.g&&!u.v){u.Y=1;var p=u.Da;yt||w(),at||(yt(),at=!0),A.add(p,u),u.A=0}}function Rs(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=ui(v(u.Da,u),Du(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,Cu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=ui(v(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Te(10),Sr(this),Cu(this))};function Yo(u){u.B!=null&&(d.clearTimeout(u.B),u.B=null)}function Cu(u){u.g=new Kn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var p=be(u.na);Qt(p,"RID","rpc"),Qt(p,"SID",u.M),Qt(p,"AID",u.K),Qt(p,"CI",u.F?"0":"1"),!u.F&&u.ia&&Qt(p,"TO",u.ia),Qt(p,"TYPE","xmlhttp"),ws(u,p),u.u&&u.o&&Ss(p,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=vs(be(p)),_.u=null,_.R=!0,aa(_,u)}r.Va=function(){this.C!=null&&(this.C=null,Sr(this),Rs(this),Te(19))};function ma(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function Iu(u,p){var _=null;if(u.g==p){ma(u),Yo(u),u.g=null;var T=2}else if(gi(u.h,p))_=p.G,Lo(u.h,p),T=1;else return;if(u.I!=0){if(p.o)if(T==1){_=p.u?p.u.length:0,p=Date.now()-p.F;var L=u.D;T=sa(),Me(T,new li(T,_)),Ti(u)}else Ru(u);else if(L=p.m,L==3||L==0&&p.X>0||!(T==1&&pa(u,p)||T==2&&Rs(u)))switch(_&&_.length>0&&(p=u.h,p.i=p.i.concat(_)),L){case 1:Si(u,5);break;case 4:Si(u,10);break;case 3:Si(u,6);break;default:Si(u,2)}}}function Du(u,p){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*p}function Si(u,p){if(u.j.info("Error code "+p),p==2){var _=v(u.bb,u),T=u.Ua;const L=!T;T=new yn(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Pe(T,"https"),vs(T),L?Qn(T.toString(),_):qo(T.toString(),_)}else Te(2);u.I=0,u.l&&u.l.pa(p),Nu(u),da(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function Nu(u){if(u.I=0,u.ja=[],u.l){const p=ko(u.h);(p.length!=0||u.i.length!=0)&&($(u.ja,p),$(u.ja,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.oa()}}function Ou(u,p,_){var T=_ instanceof yn?be(_):new yn(_);if(T.g!="")p&&(T.g=p+"."+T.g),mr(T,T.u);else{var L=d.location;T=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const B=new yn(null);T&&Pe(B,T),p&&(B.g=p),L&&mr(B,L),_&&(B.h=_),T=B}return _=u.G,p=u.wa,_&&p&&Qt(T,_,p),Qt(T,"VER",u.ka),ws(u,T),T}function xu(u,p,_){if(p&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Aa&&!u.ma?new Zt(new _i({ab:_})):new Zt(u.ma),p.Fa(u.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}r=Mu.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Ar(){}Ar.prototype.g=function(u,p){return new rn(u,p)};function rn(u,p){Ee.call(this),this.g=new Tr(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(u?u["X-WebChannel-Client-Profile"]=p.sa:u={"X-WebChannel-Client-Profile":p.sa}),this.g.U=u,(u=p&&p.Qb)&&!R(u)&&(this.g.u=u),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!R(p)&&(this.g.G=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Fi(this)}b(rn,Ee),rn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){Go(this.g)},rn.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=pr(u),u=_);p.i.push(new Ae(p.Ya++,u)),p.I==3&&Ti(p)},rn.prototype.N=function(){this.g.l=null,delete this.j,Go(this.g),delete this.g,rn.Z.N.call(this)};function Vu(u){qe.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const _ in p){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}b(Vu,qe);function Uu(){Rn.call(this),this.status=1}b(Uu,Rn);function Fi(u){this.g=u}b(Fi,Mu),Fi.prototype.ra=function(){Me(this.g,"a")},Fi.prototype.qa=function(u){Me(this.g,new Vu(u))},Fi.prototype.pa=function(u){Me(this.g,new Uu)},Fi.prototype.oa=function(){Me(this.g,"b")},Ar.prototype.createWebChannel=Ar.prototype.g,rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,C1=function(){return new Ar},R1=function(){return sa()},w1=pe,Cp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ys.NO_ERROR=0,ys.TIMEOUT=8,ys.HTTP_ERROR=6,Xc=ys,Oo.COMPLETE="complete",b1=Oo,du.EventType=Fn,Fn.OPEN="a",Fn.CLOSE="b",Fn.ERROR="c",Fn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.J,xl=du,Zt.prototype.listenOnce=Zt.prototype.K,Zt.prototype.getLastError=Zt.prototype.Ha,Zt.prototype.getLastErrorCode=Zt.prototype.ya,Zt.prototype.getStatus=Zt.prototype.ca,Zt.prototype.getResponseJson=Zt.prototype.La,Zt.prototype.getResponseText=Zt.prototype.la,Zt.prototype.send=Zt.prototype.ea,Zt.prototype.setWithCredentials=Zt.prototype.Fa,A1=Zt}).apply(typeof zc<"u"?zc:typeof self<"u"?self:typeof window<"u"?window:{});const O_="@firebase/firestore",x_="4.9.2";/**
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
 */class Je{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let To="12.3.0";/**
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
 */const Ws=new am("@firebase/firestore");function Ya(){return Ws.logLevel}function st(r,...t){if(Ws.logLevel<=Ut.DEBUG){const i=t.map(lm);Ws.debug(`Firestore (${To}): ${r}`,...i)}}function cr(r,...t){if(Ws.logLevel<=Ut.ERROR){const i=t.map(lm);Ws.error(`Firestore (${To}): ${r}`,...i)}}function oo(r,...t){if(Ws.logLevel<=Ut.WARN){const i=t.map(lm);Ws.warn(`Firestore (${To}): ${r}`,...i)}}function lm(r){if(typeof r=="string")return r;try{/**
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
*/return(function(i){return JSON.stringify(i)})(r)}catch{return r}}/**
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
 */function bt(r,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,I1(r,a,i)}function I1(r,t,i){let a=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw cr(a),new Error(a)}function ce(r,t,i,a){let l="Unexpected state";typeof i=="string"?l=i:a=i,r||I1(t,l,a)}function Bt(r,t){return r}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pt extends zi{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ks{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}}/**
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
 */class D1{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable((()=>i(Je.UNAUTHENTICATED)))}shutdown(){}}class mb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class gb{constructor(t){this.t=t,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){ce(this.o===void 0,42304);let a=this.i;const l=y=>this.i!==a?(a=this.i,i(y)):Promise.resolve();let c=new Ks;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ks,t.enqueueRetryable((()=>l(this.currentUser)))};const d=()=>{const y=c;t.enqueueRetryable((async()=>{await y.promise,await l(this.currentUser)}))},g=y=>{st("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((y=>g(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?g(y):(st("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ks)}}),0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==t?(st("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(ce(typeof a.accessToken=="string",31837,{l:a}),new D1(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ce(t===null||typeof t=="string",2055,{h:t}),new Je(t)}}class yb{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _b{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new yb(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable((()=>i(Je.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class M_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vb{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ni(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){ce(this.o===void 0,3512);const a=c=>{c.error!=null&&st("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,st("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable((()=>a(c)))};const l=c=>{st("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>l(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):st("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new M_(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((i=>i?(ce(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new M_(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Eb(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<r;a++)i[a]=Math.floor(256*Math.random());return i}/**
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
 */class N1{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=Eb(40);for(let c=0;c<l.length;++c)a.length<20&&l[c]<i&&(a+=t.charAt(l[c]%62))}return a}}function kt(r,t){return r<t?-1:r>t?1:0}function Ip(r,t){const i=Math.min(r.length,t.length);for(let a=0;a<i;a++){const l=r.charAt(a),c=t.charAt(a);if(l!==c)return lp(l)===lp(c)?kt(l,c):lp(l)?1:-1}return kt(r.length,t.length)}const Tb=55296,Sb=57343;function lp(r){const t=r.charCodeAt(0);return t>=Tb&&t<=Sb}function lo(r,t,i){return r.length===t.length&&r.every(((a,l)=>i(a,t[l])))}/**
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
 */const V_="__name__";class Ii{constructor(t,i,a){i===void 0?i=0:i>t.length&&bt(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&bt(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return Ii.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof Ii?t.forEach((a=>{i.push(a)})):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let l=0;l<a;l++){const c=Ii.compareSegments(t.get(l),i.get(l));if(c!==0)return c}return kt(t.length,i.length)}static compareSegments(t,i){const a=Ii.isNumericId(t),l=Ii.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?Ii.extractNumericId(t).compare(Ii.extractNumericId(i)):Ip(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ns.fromString(t.substring(4,t.length-2))}}class ue extends Ii{construct(t,i,a){return new ue(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new pt(W.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((l=>l.length>0)))}return new ue(i)}static emptyPath(){return new ue([])}}const Ab=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class an extends Ii{construct(t,i,a){return new an(t,i,a)}static isValidIdentifier(t){return Ab.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),an.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===V_}static keyField(){return new an([V_])}static fromServerFormat(t){const i=[];let a="",l=0;const c=()=>{if(a.length===0)throw new pt(W.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;l<t.length;){const g=t[l];if(g==="\\"){if(l+1===t.length)throw new pt(W.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[l+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new pt(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=y,l+=2}else g==="`"?(d=!d,l++):g!=="."||d?(a+=g,l++):(c(),l++)}if(c(),d)throw new pt(W.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new an(i)}static emptyPath(){return new an([])}}/**
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
 */class _t{constructor(t){this.path=t}static fromPath(t){return new _t(ue.fromString(t))}static fromName(t){return new _t(ue.fromString(t).popFirst(5))}static empty(){return new _t(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ue.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return ue.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _t(new ue(t.slice()))}}function bb(r,t,i,a){if(t===!0&&a===!0)throw new pt(W.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function U_(r){if(_t.isDocumentKey(r))throw new pt(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function wb(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Rb(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":bt(12329,{type:typeof r})}function Dp(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new pt(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Rb(r);throw new pt(W.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return r}/**
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
 */function xe(r,t){const i={typeString:r};return t&&(i.value=t),i}function eu(r,t){if(!wb(r))throw new pt(W.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const l=t[a].typeString,c="value"in t[a]?{value:t[a].value}:void 0;if(!(a in r)){i=`JSON missing required field: '${a}'`;break}const d=r[a];if(l&&typeof d!==l){i=`JSON field '${a}' must be a ${l}.`;break}if(c!==void 0&&d!==c.value){i=`Expected '${a}' field to equal '${c.value}'`;break}}if(i)throw new pt(W.INVALID_ARGUMENT,i);return!0}/**
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
 */const L_=-62135596800,k_=1e6;class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(t){return Ne.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*k_);return new Ne(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new pt(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new pt(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<L_)throw new pt(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new pt(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/k_}_compareTo(t){return this.seconds===t.seconds?kt(this.nanoseconds,t.nanoseconds):kt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(eu(t,Ne._jsonSchema))return new Ne(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-L_;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ne._jsonSchemaVersion="firestore/timestamp/1.0",Ne._jsonSchema={type:xe("string",Ne._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};/**
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
 */class St{static fromTimestamp(t){return new St(t)}static min(){return new St(new Ne(0,0))}static max(){return new St(new Ne(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Kl=-1;function Cb(r,t){const i=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,l=St.fromTimestamp(a===1e9?new Ne(i+1,0):new Ne(i,a));return new as(l,_t.empty(),t)}function Ib(r){return new as(r.readTime,r.key,Kl)}class as{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new as(St.min(),_t.empty(),Kl)}static max(){return new as(St.max(),_t.empty(),Kl)}}function Db(r,t){let i=r.readTime.compareTo(t.readTime);return i!==0?i:(i=_t.comparator(r.documentKey,t.documentKey),i!==0?i:kt(r.largestBatchId,t.largestBatchId))}/**
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
 */const Nb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ob{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Oh(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==Nb)throw r;st("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&bt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new Q(((a,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(a,l)},this.catchCallback=c=>{this.wrapFailure(i,c).next(a,l)}}))}toPromise(){return new Promise(((t,i)=>{this.next(t,i)}))}wrapUserFunction(t){try{const i=t();return i instanceof Q?i:Q.resolve(i)}catch(i){return Q.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction((()=>t(i))):Q.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction((()=>t(i))):Q.reject(i)}static resolve(t){return new Q(((i,a)=>{i(t)}))}static reject(t){return new Q(((i,a)=>{a(t)}))}static waitFor(t){return new Q(((i,a)=>{let l=0,c=0,d=!1;t.forEach((g=>{++l,g.next((()=>{++c,d&&c===l&&i()}),(y=>a(y)))})),d=!0,c===l&&i()}))}static or(t){let i=Q.resolve(!1);for(const a of t)i=i.next((l=>l?Q.resolve(l):a()));return i}static forEach(t,i){const a=[];return t.forEach(((l,c)=>{a.push(i.call(this,l,c))})),this.waitFor(a)}static mapArray(t,i){return new Q(((a,l)=>{const c=t.length,d=new Array(c);let g=0;for(let y=0;y<c;y++){const v=y;i(t[v]).next((S=>{d[v]=S,++g,g===c&&a(d)}),(S=>l(S)))}}))}static doWhile(t,i){return new Q(((a,l)=>{const c=()=>{t()===!0?i().next((()=>{c()}),l):a()};c()}))}}function xb(r){const t=r.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function So(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class xh{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}xh.ce=-1;/**
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
 */const Mb=-1;function Mh(r){return r==null}function Np(r){return r===0&&1/r==-1/0}/**
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
 */const O1="";function Vb(r){let t="";for(let i=0;i<r.length;i++)t.length>0&&(t=P_(t)),t=Ub(r.get(i),t);return P_(t)}function Ub(r,t){let i=t;const a=r.length;for(let l=0;l<a;l++){const c=r.charAt(l);switch(c){case"\0":i+="";break;case O1:i+="";break;default:i+=c}}return i}function P_(r){return r+O1+""}/**
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
 */function z_(r){let t=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t++;return t}function nu(r,t){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(i,r[i])}function Lb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ve{constructor(t,i){this.comparator=t,this.root=i||Qe.EMPTY}insert(t,i){return new ve(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(t){return new ve(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(t,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((i,a)=>(t(i,a),!1)))}toString(){const t=[];return this.inorderTraversal(((i,a)=>(t.push(`${i}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bc(this.root,t,this.comparator,!0)}}class Bc{constructor(t,i,a,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=i?a(t.key,i):1,i&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qe{constructor(t,i,a,l,c){this.key=t,this.value=i,this.color=a??Qe.RED,this.left=l??Qe.EMPTY,this.right=c??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,l,c){return new Qe(t??this.key,i??this.value,a??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let l=this;const c=a(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,i,a),null):c===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return Qe.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw bt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw bt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw bt(27949);return t+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw bt(57766)}get value(){throw bt(16141)}get color(){throw bt(16727)}get left(){throw bt(29726)}get right(){throw bt(36894)}copy(t,i,a,l,c){return this}insert(t,i,a){return new Qe(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(t){this.comparator=t,this.data=new ve(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((i,a)=>(t(i),!1)))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new B_(this.data.getIterator())}getIteratorFrom(t){return new B_(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach((a=>{i=i.add(a)})),i}isEqual(t){if(!(t instanceof Le)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=a.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((i=>{t.push(i)})),t}toString(){const t=[];return this.forEach((i=>t.push(i))),"SortedSet("+t.toString()+")"}copy(t){const i=new Le(this.comparator);return i.data=t,i}}class B_{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jr{constructor(t){this.fields=t,t.sort(an.comparator)}static empty(){return new Jr([])}unionWith(t){let i=new Le(an.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new Jr(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return lo(this.fields,t.fields,((i,a)=>i.isEqual(a)))}}/**
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
 */class x1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(t){this.binaryString=t}static fromBase64String(t){const i=(function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new x1("Invalid base64 string: "+c):c}})(t);return new Xe(i)}static fromUint8Array(t){const i=(function(l){let c="";for(let d=0;d<l.length;++d)c+=String.fromCharCode(l[d]);return c})(t);return new Xe(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return kt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function os(r){if(ce(!!r,39018),typeof r=="string"){let t=0;const i=kb.exec(r);if(ce(!!i,46558,{timestamp:r}),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:_e(r.seconds),nanos:_e(r.nanos)}}function _e(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ls(r){return typeof r=="string"?Xe.fromBase64String(r):Xe.fromUint8Array(r)}/**
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
 */const M1="server_timestamp",V1="__type__",U1="__previous_value__",L1="__local_write_time__";function um(r){return(r?.mapValue?.fields||{})[V1]?.stringValue===M1}function Vh(r){const t=r.mapValue.fields[U1];return um(t)?Vh(t):t}function Yl(r){const t=os(r.mapValue.fields[L1].timestampValue);return new Ne(t.seconds,t.nanos)}/**
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
 */class Pb{constructor(t,i,a,l,c,d,g,y,v,S){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=g,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=S}}const ch="(default)";class Ql{constructor(t,i){this.projectId=t,this.database=i||ch}static empty(){return new Ql("","")}get isDefaultDatabase(){return this.database===ch}isEqual(t){return t instanceof Ql&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const zb="__type__",Bb="__max__",jc={mapValue:{}},jb="__vector__",Op="value";function us(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?um(r)?4:Hb(r)?9007199254740991:qb(r)?10:11:bt(28295,{value:r})}function Li(r,t){if(r===t)return!0;const i=us(r);if(i!==us(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Yl(r).isEqual(Yl(t));case 3:return(function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const d=os(l.timestampValue),g=os(c.timestampValue);return d.seconds===g.seconds&&d.nanos===g.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(l,c){return ls(l.bytesValue).isEqual(ls(c.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(l,c){return _e(l.geoPointValue.latitude)===_e(c.geoPointValue.latitude)&&_e(l.geoPointValue.longitude)===_e(c.geoPointValue.longitude)})(r,t);case 2:return(function(l,c){if("integerValue"in l&&"integerValue"in c)return _e(l.integerValue)===_e(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const d=_e(l.doubleValue),g=_e(c.doubleValue);return d===g?Np(d)===Np(g):isNaN(d)&&isNaN(g)}return!1})(r,t);case 9:return lo(r.arrayValue.values||[],t.arrayValue.values||[],Li);case 10:case 11:return(function(l,c){const d=l.mapValue.fields||{},g=c.mapValue.fields||{};if(z_(d)!==z_(g))return!1;for(const y in d)if(d.hasOwnProperty(y)&&(g[y]===void 0||!Li(d[y],g[y])))return!1;return!0})(r,t);default:return bt(52216,{left:r})}}function Xl(r,t){return(r.values||[]).find((i=>Li(i,t)))!==void 0}function uo(r,t){if(r===t)return 0;const i=us(r),a=us(t);if(i!==a)return kt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return kt(r.booleanValue,t.booleanValue);case 2:return(function(c,d){const g=_e(c.integerValue||c.doubleValue),y=_e(d.integerValue||d.doubleValue);return g<y?-1:g>y?1:g===y?0:isNaN(g)?isNaN(y)?0:-1:1})(r,t);case 3:return j_(r.timestampValue,t.timestampValue);case 4:return j_(Yl(r),Yl(t));case 5:return Ip(r.stringValue,t.stringValue);case 6:return(function(c,d){const g=ls(c),y=ls(d);return g.compareTo(y)})(r.bytesValue,t.bytesValue);case 7:return(function(c,d){const g=c.split("/"),y=d.split("/");for(let v=0;v<g.length&&v<y.length;v++){const S=kt(g[v],y[v]);if(S!==0)return S}return kt(g.length,y.length)})(r.referenceValue,t.referenceValue);case 8:return(function(c,d){const g=kt(_e(c.latitude),_e(d.latitude));return g!==0?g:kt(_e(c.longitude),_e(d.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return q_(r.arrayValue,t.arrayValue);case 10:return(function(c,d){const g=c.fields||{},y=d.fields||{},v=g[Op]?.arrayValue,S=y[Op]?.arrayValue,b=kt(v?.values?.length||0,S?.values?.length||0);return b!==0?b:q_(v,S)})(r.mapValue,t.mapValue);case 11:return(function(c,d){if(c===jc.mapValue&&d===jc.mapValue)return 0;if(c===jc.mapValue)return 1;if(d===jc.mapValue)return-1;const g=c.fields||{},y=Object.keys(g),v=d.fields||{},S=Object.keys(v);y.sort(),S.sort();for(let b=0;b<y.length&&b<S.length;++b){const x=Ip(y[b],S[b]);if(x!==0)return x;const q=uo(g[y[b]],v[S[b]]);if(q!==0)return q}return kt(y.length,S.length)})(r.mapValue,t.mapValue);default:throw bt(23264,{he:i})}}function j_(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return kt(r,t);const i=os(r),a=os(t),l=kt(i.seconds,a.seconds);return l!==0?l:kt(i.nanos,a.nanos)}function q_(r,t){const i=r.values||[],a=t.values||[];for(let l=0;l<i.length&&l<a.length;++l){const c=uo(i[l],a[l]);if(c)return c}return kt(i.length,a.length)}function co(r){return xp(r)}function xp(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(i){const a=os(i);return`time(${a.seconds},${a.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(i){return ls(i).toBase64()})(r.bytesValue):"referenceValue"in r?(function(i){return _t.fromName(i).toString()})(r.referenceValue):"geoPointValue"in r?(function(i){return`geo(${i.latitude},${i.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(i){let a="[",l=!0;for(const c of i.values||[])l?l=!1:a+=",",a+=xp(c);return a+"]"})(r.arrayValue):"mapValue"in r?(function(i){const a=Object.keys(i.fields||{}).sort();let l="{",c=!0;for(const d of a)c?c=!1:l+=",",l+=`${d}:${xp(i.fields[d])}`;return l+"}"})(r.mapValue):bt(61005,{value:r})}function $c(r){switch(us(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Vh(r);return t?16+$c(t):16;case 5:return 2*r.stringValue.length;case 6:return ls(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((l,c)=>l+$c(c)),0)})(r.arrayValue);case 10:case 11:return(function(a){let l=0;return nu(a.fields,((c,d)=>{l+=c.length+$c(d)})),l})(r.mapValue);default:throw bt(13486,{value:r})}}function Mp(r){return!!r&&"integerValue"in r}function cm(r){return!!r&&"arrayValue"in r}function H_(r){return!!r&&"nullValue"in r}function F_(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function up(r){return!!r&&"mapValue"in r}function qb(r){return(r?.mapValue?.fields||{})[zb]?.stringValue===jb}function kl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return nu(r.mapValue.fields,((i,a)=>t.mapValue.fields[i]=kl(a))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=kl(r.arrayValue.values[i]);return t}return{...r}}function Hb(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Bb}/**
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
 */class Ni{constructor(t){this.value=t}static empty(){return new Ni({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!up(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=kl(i)}setAll(t){let i=an.emptyPath(),a={},l=[];t.forEach(((d,g)=>{if(!i.isImmediateParentOf(g)){const y=this.getFieldsMap(i);this.applyChanges(y,a,l),a={},l=[],i=g.popLast()}d?a[g.lastSegment()]=kl(d):l.push(g.lastSegment())}));const c=this.getFieldsMap(i);this.applyChanges(c,a,l)}delete(t){const i=this.field(t.popLast());up(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return Li(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let l=i.mapValue.fields[t.get(a)];up(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,a){nu(i,((l,c)=>t[l]=c));for(const l of a)delete t[l]}clone(){return new Ni(kl(this.value))}}/**
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
 */class We{constructor(t,i,a,l,c,d,g){this.key=t,this.documentType=i,this.version=a,this.readTime=l,this.createTime=c,this.data=d,this.documentState=g}static newInvalidDocument(t){return new We(t,0,St.min(),St.min(),St.min(),Ni.empty(),0)}static newFoundDocument(t,i,a,l){return new We(t,1,i,St.min(),a,l,0)}static newNoDocument(t,i){return new We(t,2,i,St.min(),St.min(),Ni.empty(),0)}static newUnknownDocument(t,i){return new We(t,3,i,St.min(),St.min(),Ni.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(St.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ni.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ni.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=St.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof We&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hh{constructor(t,i){this.position=t,this.inclusive=i}}function G_(r,t,i){let a=0;for(let l=0;l<r.position.length;l++){const c=t[l],d=r.position[l];if(c.field.isKeyField()?a=_t.comparator(_t.fromName(d.referenceValue),i.key):a=uo(d,i.data.field(c.field)),c.dir==="desc"&&(a*=-1),a!==0)break}return a}function K_(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!Li(r.position[i],t.position[i]))return!1;return!0}/**
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
 */class fh{constructor(t,i="asc"){this.field=t,this.dir=i}}function Fb(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class k1{}class Ue extends k1{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new Kb(t,i,a):i==="array-contains"?new Xb(t,a):i==="in"?new $b(t,a):i==="not-in"?new Zb(t,a):i==="array-contains-any"?new Jb(t,a):new Ue(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new Yb(t,a):new Qb(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(uo(i,this.value)):i!==null&&us(this.value)===us(i)&&this.matchesComparison(uo(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return bt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ki extends k1{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new ki(t,i)}matches(t){return P1(this)?this.filters.find((i=>!i.matches(t)))===void 0:this.filters.find((i=>i.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,i)=>t.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function P1(r){return r.op==="and"}function z1(r){return Gb(r)&&P1(r)}function Gb(r){for(const t of r.filters)if(t instanceof ki)return!1;return!0}function Vp(r){if(r instanceof Ue)return r.field.canonicalString()+r.op.toString()+co(r.value);if(z1(r))return r.filters.map((t=>Vp(t))).join(",");{const t=r.filters.map((i=>Vp(i))).join(",");return`${r.op}(${t})`}}function B1(r,t){return r instanceof Ue?(function(a,l){return l instanceof Ue&&a.op===l.op&&a.field.isEqual(l.field)&&Li(a.value,l.value)})(r,t):r instanceof ki?(function(a,l){return l instanceof ki&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce(((c,d,g)=>c&&B1(d,l.filters[g])),!0):!1})(r,t):void bt(19439)}function j1(r){return r instanceof Ue?(function(i){return`${i.field.canonicalString()} ${i.op} ${co(i.value)}`})(r):r instanceof ki?(function(i){return i.op.toString()+" {"+i.getFilters().map(j1).join(" ,")+"}"})(r):"Filter"}class Kb extends Ue{constructor(t,i,a){super(t,i,a),this.key=_t.fromName(a.referenceValue)}matches(t){const i=_t.comparator(t.key,this.key);return this.matchesComparison(i)}}class Yb extends Ue{constructor(t,i){super(t,"in",i),this.keys=q1("in",i)}matches(t){return this.keys.some((i=>i.isEqual(t.key)))}}class Qb extends Ue{constructor(t,i){super(t,"not-in",i),this.keys=q1("not-in",i)}matches(t){return!this.keys.some((i=>i.isEqual(t.key)))}}function q1(r,t){return(t.arrayValue?.values||[]).map((i=>_t.fromName(i.referenceValue)))}class Xb extends Ue{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return cm(i)&&Xl(i.arrayValue,this.value)}}class $b extends Ue{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&Xl(this.value.arrayValue,i)}}class Zb extends Ue{constructor(t,i){super(t,"not-in",i)}matches(t){if(Xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!Xl(this.value.arrayValue,i)}}class Jb extends Ue{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!cm(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>Xl(this.value.arrayValue,a)))}}/**
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
 */class Wb{constructor(t,i=null,a=[],l=[],c=null,d=null,g=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=c,this.startAt=d,this.endAt=g,this.Te=null}}function Y_(r,t=null,i=[],a=[],l=null,c=null,d=null){return new Wb(r,t,i,a,l,c,d)}function hm(r){const t=Bt(r);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map((a=>Vp(a))).join(","),i+="|ob:",i+=t.orderBy.map((a=>(function(c){return c.field.canonicalString()+c.dir})(a))).join(","),Mh(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>co(a))).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>co(a))).join(",")),t.Te=i}return t.Te}function fm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!Fb(r.orderBy[i],t.orderBy[i]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!B1(r.filters[i],t.filters[i]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!K_(r.startAt,t.startAt)&&K_(r.endAt,t.endAt)}function Up(r){return _t.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Uh{constructor(t,i=null,a=[],l=[],c=null,d="F",g=null,y=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=c,this.limitType=d,this.startAt=g,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function tw(r,t,i,a,l,c,d,g){return new Uh(r,t,i,a,l,c,d,g)}function H1(r){return new Uh(r)}function Q_(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ew(r){return r.collectionGroup!==null}function Pl(r){const t=Bt(r);if(t.Ie===null){t.Ie=[];const i=new Set;for(const c of t.explicitOrderBy)t.Ie.push(c),i.add(c.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let g=new Le(an.comparator);return d.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(g=g.add(v.field))}))})),g})(t).forEach((c=>{i.has(c.canonicalString())||c.isKeyField()||t.Ie.push(new fh(c,a))})),i.has(an.keyField().canonicalString())||t.Ie.push(new fh(an.keyField(),a))}return t.Ie}function Mi(r){const t=Bt(r);return t.Ee||(t.Ee=nw(t,Pl(r))),t.Ee}function nw(r,t){if(r.limitType==="F")return Y_(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((l=>{const c=l.dir==="desc"?"asc":"desc";return new fh(l.field,c)}));const i=r.endAt?new hh(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new hh(r.startAt.position,r.startAt.inclusive):null;return Y_(r.path,r.collectionGroup,t,r.filters,r.limit,i,a)}}function Lp(r,t,i){return new Uh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,i,r.startAt,r.endAt)}function Lh(r,t){return fm(Mi(r),Mi(t))&&r.limitType===t.limitType}function F1(r){return`${hm(Mi(r))}|lt:${r.limitType}`}function Qa(r){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((l=>j1(l))).join(", ")}]`),Mh(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((l=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(l))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((l=>co(l))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((l=>co(l))).join(",")),`Target(${a})`})(Mi(r))}; limitType=${r.limitType})`}function kh(r,t){return t.isFoundDocument()&&(function(a,l){const c=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):_t.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)})(r,t)&&(function(a,l){for(const c of Pl(a))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0})(r,t)&&(function(a,l){for(const c of a.filters)if(!c.matches(l))return!1;return!0})(r,t)&&(function(a,l){return!(a.startAt&&!(function(d,g,y){const v=G_(d,g,y);return d.inclusive?v<=0:v<0})(a.startAt,Pl(a),l)||a.endAt&&!(function(d,g,y){const v=G_(d,g,y);return d.inclusive?v>=0:v>0})(a.endAt,Pl(a),l))})(r,t)}function iw(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function G1(r){return(t,i)=>{let a=!1;for(const l of Pl(r)){const c=rw(l,t,i);if(c!==0)return c;a=a||l.field.isKeyField()}return 0}}function rw(r,t,i){const a=r.field.isKeyField()?_t.comparator(t.key,i.key):(function(c,d,g){const y=d.data.field(c),v=g.data.field(c);return y!==null&&v!==null?uo(y,v):bt(42886)})(r.field,t,i);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return bt(19790,{direction:r.dir})}}/**
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
 */class ia{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[l,c]of a)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),l=this.inner[a];if(l===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(t){nu(this.inner,((i,a)=>{for(const[l,c]of a)t(l,c)}))}isEmpty(){return Lb(this.inner)}size(){return this.innerSize}}/**
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
 */const sw=new ve(_t.comparator);function cs(){return sw}const K1=new ve(_t.comparator);function Ml(...r){let t=K1;for(const i of r)t=t.insert(i.key,i);return t}function aw(r){let t=K1;return r.forEach(((i,a)=>t=t.insert(i,a.overlayedDocument))),t}function Fs(){return zl()}function Y1(){return zl()}function zl(){return new ia((r=>r.toString()),((r,t)=>r.isEqual(t)))}const ow=new Le(_t.comparator);function jt(...r){let t=ow;for(const i of r)t=t.add(i);return t}const lw=new Le(kt);function uw(){return lw}/**
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
 */function cw(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Np(t)?"-0":t}}function hw(r){return{integerValue:""+r}}/**
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
 */class Ph{constructor(){this._=void 0}}function fw(r,t,i){return r instanceof kp?(function(l,c){const d={fields:{[V1]:{stringValue:M1},[L1]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&um(c)&&(c=Vh(c)),c&&(d.fields[U1]=c),{mapValue:d}})(i,t):r instanceof dh?Q1(r,t):r instanceof ph?X1(r,t):(function(l,c){const d=pw(l,c),g=X_(d)+X_(l.Ae);return Mp(d)&&Mp(l.Ae)?hw(g):cw(l.serializer,g)})(r,t)}function dw(r,t,i){return r instanceof dh?Q1(r,t):r instanceof ph?X1(r,t):i}function pw(r,t){return r instanceof Pp?(function(a){return Mp(a)||(function(c){return!!c&&"doubleValue"in c})(a)})(t)?t:{integerValue:0}:null}class kp extends Ph{}class dh extends Ph{constructor(t){super(),this.elements=t}}function Q1(r,t){const i=$1(t);for(const a of r.elements)i.some((l=>Li(l,a)))||i.push(a);return{arrayValue:{values:i}}}class ph extends Ph{constructor(t){super(),this.elements=t}}function X1(r,t){let i=$1(t);for(const a of r.elements)i=i.filter((l=>!Li(l,a)));return{arrayValue:{values:i}}}class Pp extends Ph{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function X_(r){return _e(r.integerValue||r.doubleValue)}function $1(r){return cm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function mw(r,t){return r.field.isEqual(t.field)&&(function(a,l){return a instanceof dh&&l instanceof dh||a instanceof ph&&l instanceof ph?lo(a.elements,l.elements,Li):a instanceof Pp&&l instanceof Pp?Li(a.Ae,l.Ae):a instanceof kp&&l instanceof kp})(r.transform,t.transform)}class Ys{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Ys}static exists(t){return new Ys(void 0,t)}static updateTime(t){return new Ys(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Zc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class dm{}function Z1(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new yw(r.key,Ys.none()):new pm(r.key,r.data,Ys.none());{const i=r.data,a=Ni.empty();let l=new Le(an.comparator);for(let c of t.fields)if(!l.has(c)){let d=i.field(c);d===null&&c.length>1&&(c=c.popLast(),d=i.field(c)),d===null?a.delete(c):a.set(c,d),l=l.add(c)}return new zh(r.key,a,new Jr(l.toArray()),Ys.none())}}function gw(r,t,i){r instanceof pm?(function(l,c,d){const g=l.value.clone(),y=Z_(l.fieldTransforms,c,d.transformResults);g.setAll(y),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()})(r,t,i):r instanceof zh?(function(l,c,d){if(!Zc(l.precondition,c))return void c.convertToUnknownDocument(d.version);const g=Z_(l.fieldTransforms,c,d.transformResults),y=c.data;y.setAll(J1(l)),y.setAll(g),c.convertToFoundDocument(d.version,y).setHasCommittedMutations()})(r,t,i):(function(l,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,i)}function Bl(r,t,i,a){return r instanceof pm?(function(c,d,g,y){if(!Zc(c.precondition,d))return g;const v=c.value.clone(),S=J_(c.fieldTransforms,y,d);return v.setAll(S),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),null})(r,t,i,a):r instanceof zh?(function(c,d,g,y){if(!Zc(c.precondition,d))return g;const v=J_(c.fieldTransforms,y,d),S=d.data;return S.setAll(J1(c)),S.setAll(v),d.convertToFoundDocument(d.version,S).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((b=>b.field)))})(r,t,i,a):(function(c,d,g){return Zc(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):g})(r,t,i)}function $_(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&lo(a,l,((c,d)=>mw(c,d)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class pm extends dm{constructor(t,i,a,l=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class zh extends dm{constructor(t,i,a,l,c=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function J1(r){const t=new Map;return r.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=r.data.field(i);t.set(i,a)}})),t}function Z_(r,t,i){const a=new Map;ce(r.length===i.length,32656,{Re:i.length,Ve:r.length});for(let l=0;l<i.length;l++){const c=r[l],d=c.transform,g=t.data.field(c.field);a.set(c.field,dw(d,g,i[l]))}return a}function J_(r,t,i){const a=new Map;for(const l of r){const c=l.transform,d=i.data.field(l.field);a.set(l.field,fw(c,d,t))}return a}class yw extends dm{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _w{constructor(t,i,a,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&gw(c,t,a[l])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=Bl(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=Bl(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=Y1();return this.mutations.forEach((l=>{const c=t.get(l.key),d=c.overlayedDocument;let g=this.applyToLocalView(d,c.mutatedFields);g=i.has(l.key)?null:g;const y=Z1(d,g);y!==null&&a.set(l.key,y),d.isValidDocument()||d.convertToNoDocument(St.min())})),a}keys(){return this.mutations.reduce(((t,i)=>t.add(i.key)),jt())}isEqual(t){return this.batchId===t.batchId&&lo(this.mutations,t.mutations,((i,a)=>$_(i,a)))&&lo(this.baseMutations,t.baseMutations,((i,a)=>$_(i,a)))}}/**
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
 */class vw{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ew{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
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
 */var De,zt;function W1(r){if(r===void 0)return cr("GRPC error has no .code"),W.UNKNOWN;switch(r){case De.OK:return W.OK;case De.CANCELLED:return W.CANCELLED;case De.UNKNOWN:return W.UNKNOWN;case De.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case De.INTERNAL:return W.INTERNAL;case De.UNAVAILABLE:return W.UNAVAILABLE;case De.UNAUTHENTICATED:return W.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case De.NOT_FOUND:return W.NOT_FOUND;case De.ALREADY_EXISTS:return W.ALREADY_EXISTS;case De.PERMISSION_DENIED:return W.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case De.ABORTED:return W.ABORTED;case De.OUT_OF_RANGE:return W.OUT_OF_RANGE;case De.UNIMPLEMENTED:return W.UNIMPLEMENTED;case De.DATA_LOSS:return W.DATA_LOSS;default:return bt(39323,{code:r})}}(zt=De||(De={}))[zt.OK=0]="OK",zt[zt.CANCELLED=1]="CANCELLED",zt[zt.UNKNOWN=2]="UNKNOWN",zt[zt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",zt[zt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",zt[zt.NOT_FOUND=5]="NOT_FOUND",zt[zt.ALREADY_EXISTS=6]="ALREADY_EXISTS",zt[zt.PERMISSION_DENIED=7]="PERMISSION_DENIED",zt[zt.UNAUTHENTICATED=16]="UNAUTHENTICATED",zt[zt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",zt[zt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",zt[zt.ABORTED=10]="ABORTED",zt[zt.OUT_OF_RANGE=11]="OUT_OF_RANGE",zt[zt.UNIMPLEMENTED=12]="UNIMPLEMENTED",zt[zt.INTERNAL=13]="INTERNAL",zt[zt.UNAVAILABLE=14]="UNAVAILABLE",zt[zt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Tw(){return new TextEncoder}/**
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
 */const Sw=new ns([4294967295,4294967295],0);function W_(r){const t=Tw().encode(r),i=new S1;return i.update(t),new Uint8Array(i.digest())}function tv(r){const t=new DataView(r.buffer),i=t.getUint32(0,!0),a=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new ns([i,a],0),new ns([l,c],0)]}class mm{constructor(t,i,a){if(this.bitmap=t,this.padding=i,this.hashCount=a,i<0||i>=8)throw new Vl(`Invalid padding: ${i}`);if(a<0)throw new Vl(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new Vl(`Invalid hash count: ${a}`);if(t.length===0&&i!==0)throw new Vl(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*t.length-i,this.pe=ns.fromNumber(this.ge)}ye(t,i,a){let l=t.add(i.multiply(ns.fromNumber(a)));return l.compare(Sw)===1&&(l=new ns([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const i=W_(t),[a,l]=tv(i);for(let c=0;c<this.hashCount;c++){const d=this.ye(a,l,c);if(!this.we(d))return!1}return!0}static create(t,i,a){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),d=new mm(c,l,i);return a.forEach((g=>d.insert(g))),d}insert(t){if(this.ge===0)return;const i=W_(t),[a,l]=tv(i);for(let c=0;c<this.hashCount;c++){const d=this.ye(a,l,c);this.Se(d)}}Se(t){const i=Math.floor(t/8),a=t%8;this.bitmap[i]|=1<<a}}class Vl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bh{constructor(t,i,a,l,c){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=a,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,i,a){const l=new Map;return l.set(t,iu.createSynthesizedTargetChangeForCurrentChange(t,i,a)),new Bh(St.min(),l,new ve(kt),cs(),jt())}}class iu{constructor(t,i,a,l,c){this.resumeToken=t,this.current=i,this.addedDocuments=a,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,i,a){return new iu(a,i,jt(),jt(),jt())}}/**
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
 */class Jc{constructor(t,i,a,l){this.be=t,this.removedTargetIds=i,this.key=a,this.De=l}}class t2{constructor(t,i){this.targetId=t,this.Ce=i}}class e2{constructor(t,i,a=Xe.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=i,this.resumeToken=a,this.cause=l}}class ev{constructor(){this.ve=0,this.Fe=nv(),this.Me=Xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=jt(),i=jt(),a=jt();return this.Fe.forEach(((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:i=i.add(l);break;case 1:a=a.add(l);break;default:bt(38017,{changeType:c})}})),new iu(this.Me,this.xe,t,i,a)}qe(){this.Oe=!1,this.Fe=nv()}Qe(t,i){this.Oe=!0,this.Fe=this.Fe.insert(t,i)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Aw{constructor(t){this.Ge=t,this.ze=new Map,this.je=cs(),this.Je=qc(),this.He=qc(),this.Ye=new ve(kt)}Ze(t){for(const i of t.be)t.De&&t.De.isFoundDocument()?this.Xe(i,t.De):this.et(i,t.key,t.De);for(const i of t.removedTargetIds)this.et(i,t.key,t.De)}tt(t){this.forEachTarget(t,(i=>{const a=this.nt(i);switch(t.state){case 0:this.rt(i)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(i)&&(this.it(i),a.Le(t.resumeToken));break;default:bt(56790,{state:t.state})}}))}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.ze.forEach(((a,l)=>{this.rt(l)&&i(l)}))}st(t){const i=t.targetId,a=t.Ce.count,l=this.ot(i);if(l){const c=l.target;if(Up(c))if(a===0){const d=new _t(c.path);this.et(i,d,We.newNoDocument(d,St.min()))}else ce(a===1,20013,{expectedCount:a});else{const d=this._t(i);if(d!==a){const g=this.ut(t),y=g?this.ct(g,t,d):1;if(y!==0){this.it(i);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,v)}}}}}ut(t){const i=t.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:a="",padding:l=0},hashCount:c=0}=i;let d,g;try{d=ls(a).toUint8Array()}catch(y){if(y instanceof x1)return oo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{g=new mm(d,l,c)}catch(y){return oo(y instanceof Vl?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return g.ge===0?null:g}ct(t,i,a){return i.Ce.count===a-this.Pt(t,i.targetId)?0:2}Pt(t,i){const a=this.Ge.getRemoteKeysForTarget(i);let l=0;return a.forEach((c=>{const d=this.Ge.ht(),g=`projects/${d.projectId}/databases/${d.database}/documents/${c.path.canonicalString()}`;t.mightContain(g)||(this.et(i,c,null),l++)})),l}Tt(t){const i=new Map;this.ze.forEach(((c,d)=>{const g=this.ot(d);if(g){if(c.current&&Up(g.target)){const y=new _t(g.target.path);this.It(y).has(d)||this.Et(d,y)||this.et(d,y,We.newNoDocument(y,t))}c.Be&&(i.set(d,c.ke()),c.qe())}}));let a=jt();this.He.forEach(((c,d)=>{let g=!0;d.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)})),g&&(a=a.add(c))})),this.je.forEach(((c,d)=>d.setReadTime(t)));const l=new Bh(t,i,this.Ye,this.je,a);return this.je=cs(),this.Je=qc(),this.He=qc(),this.Ye=new ve(kt),l}Xe(t,i){if(!this.rt(t))return;const a=this.Et(t,i.key)?2:0;this.nt(t).Qe(i.key,a),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(t)),this.He=this.He.insert(i.key,this.dt(i.key).add(t))}et(t,i,a){if(!this.rt(t))return;const l=this.nt(t);this.Et(t,i)?l.Qe(i,1):l.$e(i),this.He=this.He.insert(i,this.dt(i).delete(t)),this.He=this.He.insert(i,this.dt(i).add(t)),a&&(this.je=this.je.insert(i,a))}removeTarget(t){this.ze.delete(t)}_t(t){const i=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let i=this.ze.get(t);return i||(i=new ev,this.ze.set(t,i)),i}dt(t){let i=this.He.get(t);return i||(i=new Le(kt),this.He=this.He.insert(t,i)),i}It(t){let i=this.Je.get(t);return i||(i=new Le(kt),this.Je=this.Je.insert(t,i)),i}rt(t){const i=this.ot(t)!==null;return i||st("WatchChangeAggregator","Detected inactive target",t),i}ot(t){const i=this.ze.get(t);return i&&i.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ev),this.Ge.getRemoteKeysForTarget(t).forEach((i=>{this.et(t,i,null)}))}Et(t,i){return this.Ge.getRemoteKeysForTarget(t).has(i)}}function qc(){return new ve(_t.comparator)}function nv(){return new ve(_t.comparator)}const bw={asc:"ASCENDING",desc:"DESCENDING"},ww={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Rw={and:"AND",or:"OR"};class Cw{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function zp(r,t){return r.useProto3Json||Mh(t)?t:{value:t}}function Iw(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Dw(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Wa(r){return ce(!!r,49232),St.fromTimestamp((function(i){const a=os(i);return new Ne(a.seconds,a.nanos)})(r))}function Nw(r,t){return Bp(r,t).canonicalString()}function Bp(r,t){const i=(function(l){return new ue(["projects",l.projectId,"databases",l.database])})(r).child("documents");return t===void 0?i:i.child(t)}function n2(r){const t=ue.fromString(r);return ce(o2(t),10190,{key:t.toString()}),t}function cp(r,t){const i=n2(t);if(i.get(1)!==r.databaseId.projectId)throw new pt(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+r.databaseId.projectId);if(i.get(3)!==r.databaseId.database)throw new pt(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+r.databaseId.database);return new _t(r2(i))}function i2(r,t){return Nw(r.databaseId,t)}function Ow(r){const t=n2(r);return t.length===4?ue.emptyPath():r2(t)}function iv(r){return new ue(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function r2(r){return ce(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function xw(r,t){let i;if("targetChange"in t){t.targetChange;const a=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:bt(39313,{state:v})})(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=(function(v,S){return v.useProto3Json?(ce(S===void 0||typeof S=="string",58123),Xe.fromBase64String(S||"")):(ce(S===void 0||S instanceof Buffer||S instanceof Uint8Array,16193),Xe.fromUint8Array(S||new Uint8Array))})(r,t.targetChange.resumeToken),d=t.targetChange.cause,g=d&&(function(v){const S=v.code===void 0?W.UNKNOWN:W1(v.code);return new pt(S,v.message||"")})(d);i=new e2(a,l,c,g||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const l=cp(r,a.document.name),c=Wa(a.document.updateTime),d=a.document.createTime?Wa(a.document.createTime):St.min(),g=new Ni({mapValue:{fields:a.document.fields}}),y=We.newFoundDocument(l,c,d,g),v=a.targetIds||[],S=a.removedTargetIds||[];i=new Jc(v,S,y.key,y)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const l=cp(r,a.document),c=a.readTime?Wa(a.readTime):St.min(),d=We.newNoDocument(l,c),g=a.removedTargetIds||[];i=new Jc([],g,d.key,d)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const l=cp(r,a.document),c=a.removedTargetIds||[];i=new Jc([],c,l,null)}else{if(!("filter"in t))return bt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:l=0,unchangedNames:c}=a,d=new Ew(l,c),g=a.targetId;i=new t2(g,d)}}return i}function Mw(r,t){return{documents:[i2(r,t.path)]}}function Vw(r,t){const i={structuredQuery:{}},a=t.path;let l;t.collectionGroup!==null?(l=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=i2(r,l);const c=(function(v){if(v.length!==0)return a2(ki.create(v,"and"))})(t.filters);c&&(i.structuredQuery.where=c);const d=(function(v){if(v.length!==0)return v.map((S=>(function(x){return{field:Xa(x.field),direction:kw(x.dir)}})(S)))})(t.orderBy);d&&(i.structuredQuery.orderBy=d);const g=zp(r,t.limit);return g!==null&&(i.structuredQuery.limit=g),t.startAt&&(i.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(t.startAt)),t.endAt&&(i.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(t.endAt)),{ft:i,parent:l}}function Uw(r){let t=Ow(r.parent);const i=r.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){ce(a===1,65062);const S=i.from[0];S.allDescendants?l=S.collectionId:t=t.child(S.collectionId)}let c=[];i.where&&(c=(function(b){const x=s2(b);return x instanceof ki&&z1(x)?x.getFilters():[x]})(i.where));let d=[];i.orderBy&&(d=(function(b){return b.map((x=>(function($){return new fh($a($.field),(function(X){switch(X){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(x)))})(i.orderBy));let g=null;i.limit&&(g=(function(b){let x;return x=typeof b=="object"?b.value:b,Mh(x)?null:x})(i.limit));let y=null;i.startAt&&(y=(function(b){const x=!!b.before,q=b.values||[];return new hh(q,x)})(i.startAt));let v=null;return i.endAt&&(v=(function(b){const x=!b.before,q=b.values||[];return new hh(q,x)})(i.endAt)),tw(t,l,d,c,g,"F",y,v)}function Lw(r,t){const i=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return bt(28987,{purpose:l})}})(t.purpose);return i==null?null:{"goog-listen-tags":i}}function s2(r){return r.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=$a(i.unaryFilter.field);return Ue.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=$a(i.unaryFilter.field);return Ue.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=$a(i.unaryFilter.field);return Ue.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=$a(i.unaryFilter.field);return Ue.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return bt(61313);default:return bt(60726)}})(r):r.fieldFilter!==void 0?(function(i){return Ue.create($a(i.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return bt(58110);default:return bt(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(i){return ki.create(i.compositeFilter.filters.map((a=>s2(a))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return bt(1026)}})(i.compositeFilter.op))})(r):bt(30097,{filter:r})}function kw(r){return bw[r]}function Pw(r){return ww[r]}function zw(r){return Rw[r]}function Xa(r){return{fieldPath:r.canonicalString()}}function $a(r){return an.fromServerFormat(r.fieldPath)}function a2(r){return r instanceof Ue?(function(i){if(i.op==="=="){if(F_(i.value))return{unaryFilter:{field:Xa(i.field),op:"IS_NAN"}};if(H_(i.value))return{unaryFilter:{field:Xa(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(F_(i.value))return{unaryFilter:{field:Xa(i.field),op:"IS_NOT_NAN"}};if(H_(i.value))return{unaryFilter:{field:Xa(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xa(i.field),op:Pw(i.op),value:i.value}}})(r):r instanceof ki?(function(i){const a=i.getFilters().map((l=>a2(l)));return a.length===1?a[0]:{compositeFilter:{op:zw(i.op),filters:a}}})(r):bt(54877,{filter:r})}function o2(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Wr{constructor(t,i,a,l,c=St.min(),d=St.min(),g=Xe.EMPTY_BYTE_STRING,y=null){this.target=t,this.targetId=i,this.purpose=a,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=g,this.expectedCount=y}withSequenceNumber(t){return new Wr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Bw{constructor(t){this.yt=t}}function jw(r){const t=Uw({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Lp(t,t.limit,"L"):t}/**
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
 */class qw{constructor(){this.Cn=new Hw}addToCollectionParentIndex(t,i){return this.Cn.add(i),Q.resolve()}getCollectionParents(t,i){return Q.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return Q.resolve()}deleteFieldIndex(t,i){return Q.resolve()}deleteAllFieldIndexes(t){return Q.resolve()}createTargetIndexes(t,i){return Q.resolve()}getDocumentsMatchingTarget(t,i){return Q.resolve(null)}getIndexType(t,i){return Q.resolve(0)}getFieldIndexes(t,i){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,i){return Q.resolve(as.min())}getMinOffsetFromCollectionGroup(t,i){return Q.resolve(as.min())}updateCollectionGroup(t,i,a){return Q.resolve()}updateIndexEntries(t,i){return Q.resolve()}}class Hw{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i]||new Le(ue.comparator),c=!l.has(a);return this.index[i]=l.add(a),c}has(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(t){return(this.index[t]||new Le(ue.comparator)).toArray()}}/**
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
 */const rv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},l2=41943040;class pn{static withCacheSize(t){return new pn(t,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
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
 */pn.DEFAULT_COLLECTION_PERCENTILE=10,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pn.DEFAULT=new pn(l2,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pn.DISABLED=new pn(-1,0,0);/**
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
 */class ho{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new ho(0)}static cr(){return new ho(-1)}}/**
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
 */const sv="LruGarbageCollector",Fw=1048576;function av([r,t],[i,a]){const l=kt(r,i);return l===0?kt(t,a):l}class Gw{constructor(t){this.Ir=t,this.buffer=new Le(av),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();av(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class Kw{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){st(sv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){So(i)?st(sv,"Ignoring IndexedDB error during garbage collection: ",i):await Oh(i)}await this.Vr(3e5)}))}}class Yw{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(t,i){if(i===0)return Q.resolve(xh.ce);const a=new Gw(i);return this.mr.forEachTarget(t,(l=>a.Ar(l.sequenceNumber))).next((()=>this.mr.pr(t,(l=>a.Ar(l))))).next((()=>a.maxValue))}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(st("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(rv)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(st("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rv):this.yr(t,i)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,l,c,d,g,y,v;const S=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(st("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),l=this.params.maximumSequenceNumbersToCollect):l=b,d=Date.now(),this.nthSequenceNumber(t,l)))).next((b=>(a=b,g=Date.now(),this.removeTargets(t,a,i)))).next((b=>(c=b,y=Date.now(),this.removeOrphanedDocuments(t,a)))).next((b=>(v=Date.now(),Ya()<=Ut.DEBUG&&st("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-S}ms
	Determined least recently used ${l} in `+(g-d)+`ms
	Removed ${c} targets in `+(y-g)+`ms
	Removed ${b} documents in `+(v-y)+`ms
Total Duration: ${v-S}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:b}))))}}function Qw(r,t){return new Yw(r,t)}/**
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
 */class Xw{constructor(){this.changes=new ia((t=>t.toString()),((t,i)=>t.isEqual(i))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,We.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?Q.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class $w{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
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
 */class Zw{constructor(t,i,a,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next((l=>(a=l,this.remoteDocumentCache.getEntry(t,i)))).next((l=>(a!==null&&Bl(a.mutation,l,Jr.empty(),Ne.now()),l)))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.getLocalViewOfDocuments(t,a,jt()).next((()=>a))))}getLocalViewOfDocuments(t,i,a=jt()){const l=Fs();return this.populateOverlays(t,l,i).next((()=>this.computeViews(t,i,l,a).next((c=>{let d=Ml();return c.forEach(((g,y)=>{d=d.insert(g,y.overlayedDocument)})),d}))))}getOverlayedDocuments(t,i){const a=Fs();return this.populateOverlays(t,a,i).next((()=>this.computeViews(t,i,a,jt())))}populateOverlays(t,i,a){const l=[];return a.forEach((c=>{i.has(c)||l.push(c)})),this.documentOverlayCache.getOverlays(t,l).next((c=>{c.forEach(((d,g)=>{i.set(d,g)}))}))}computeViews(t,i,a,l){let c=cs();const d=zl(),g=(function(){return zl()})();return i.forEach(((y,v)=>{const S=a.get(v.key);l.has(v.key)&&(S===void 0||S.mutation instanceof zh)?c=c.insert(v.key,v):S!==void 0?(d.set(v.key,S.mutation.getFieldMask()),Bl(S.mutation,v,S.mutation.getFieldMask(),Ne.now())):d.set(v.key,Jr.empty())})),this.recalculateAndSaveOverlays(t,c).next((y=>(y.forEach(((v,S)=>d.set(v,S))),i.forEach(((v,S)=>g.set(v,new $w(S,d.get(v)??null)))),g)))}recalculateAndSaveOverlays(t,i){const a=zl();let l=new ve(((d,g)=>d-g)),c=jt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next((d=>{for(const g of d)g.keys().forEach((y=>{const v=i.get(y);if(v===null)return;let S=a.get(y)||Jr.empty();S=g.applyToLocalView(v,S),a.set(y,S);const b=(l.get(g.batchId)||jt()).add(y);l=l.insert(g.batchId,b)}))})).next((()=>{const d=[],g=l.getReverseIterator();for(;g.hasNext();){const y=g.getNext(),v=y.key,S=y.value,b=Y1();S.forEach((x=>{if(!c.has(x)){const q=Z1(i.get(x),a.get(x));q!==null&&b.set(x,q),c=c.add(x)}})),d.push(this.documentOverlayCache.saveOverlays(t,v,b))}return Q.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,i,a,l){return(function(d){return _t.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):ew(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,l):this.getDocumentsMatchingCollectionQuery(t,i,a,l)}getNextDocuments(t,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,l).next((c=>{const d=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,l-c.size):Q.resolve(Fs());let g=Kl,y=c;return d.next((v=>Q.forEach(v,((S,b)=>(g<b.largestBatchId&&(g=b.largestBatchId),c.get(S)?Q.resolve():this.remoteDocumentCache.getEntry(t,S).next((x=>{y=y.insert(S,x)}))))).next((()=>this.populateOverlays(t,v,c))).next((()=>this.computeViews(t,y,v,jt()))).next((S=>({batchId:g,changes:aw(S)})))))}))}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new _t(i)).next((a=>{let l=Ml();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l}))}getDocumentsMatchingCollectionGroupQuery(t,i,a,l){const c=i.collectionGroup;let d=Ml();return this.indexManager.getCollectionParents(t,c).next((g=>Q.forEach(g,(y=>{const v=(function(b,x){return new Uh(x,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(i,y.child(c));return this.getDocumentsMatchingCollectionQuery(t,v,a,l).next((S=>{S.forEach(((b,x)=>{d=d.insert(b,x)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,i,a,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next((d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,c,l)))).next((d=>{c.forEach(((y,v)=>{const S=v.getKey();d.get(S)===null&&(d=d.insert(S,We.newInvalidDocument(S)))}));let g=Ml();return d.forEach(((y,v)=>{const S=c.get(y);S!==void 0&&Bl(S.mutation,v,Jr.empty(),Ne.now()),kh(i,v)&&(g=g.insert(y,v))})),g}))}}/**
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
 */class Jw{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return Q.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,(function(l){return{id:l.id,version:l.version,createTime:Wa(l.createTime)}})(i)),Q.resolve()}getNamedQuery(t,i){return Q.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,(function(l){return{name:l.name,query:jw(l.bundledQuery),readTime:Wa(l.readTime)}})(i)),Q.resolve()}}/**
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
 */class Ww{constructor(){this.overlays=new ve(_t.comparator),this.qr=new Map}getOverlay(t,i){return Q.resolve(this.overlays.get(i))}getOverlays(t,i){const a=Fs();return Q.forEach(i,(l=>this.getOverlay(t,l).next((c=>{c!==null&&a.set(l,c)})))).next((()=>a))}saveOverlays(t,i,a){return a.forEach(((l,c)=>{this.St(t,i,c)})),Q.resolve()}removeOverlaysForBatchId(t,i,a){const l=this.qr.get(a);return l!==void 0&&(l.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(a)),Q.resolve()}getOverlaysForCollection(t,i,a){const l=Fs(),c=i.length+1,d=new _t(i.child("")),g=this.overlays.getIteratorFrom(d);for(;g.hasNext();){const y=g.getNext().value,v=y.getKey();if(!i.isPrefixOf(v.path))break;v.path.length===c&&y.largestBatchId>a&&l.set(y.getKey(),y)}return Q.resolve(l)}getOverlaysForCollectionGroup(t,i,a,l){let c=new ve(((v,S)=>v-S));const d=this.overlays.getIterator();for(;d.hasNext();){const v=d.getNext().value;if(v.getKey().getCollectionGroup()===i&&v.largestBatchId>a){let S=c.get(v.largestBatchId);S===null&&(S=Fs(),c=c.insert(v.largestBatchId,S)),S.set(v.getKey(),v)}}const g=Fs(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,S)=>g.set(v,S))),!(g.size()>=l)););return Q.resolve(g)}St(t,i,a){const l=this.overlays.get(a.key);if(l!==null){const d=this.qr.get(l.largestBatchId).delete(a.key);this.qr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new vw(i,a));let c=this.qr.get(i);c===void 0&&(c=jt(),this.qr.set(i,c)),this.qr.set(i,c.add(a.key))}}/**
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
 */class tR{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(t){return Q.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,Q.resolve()}}/**
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
 */class gm{constructor(){this.Qr=new Le(Be.$r),this.Ur=new Le(Be.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new Be(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach((a=>this.addReference(a,i)))}removeReference(t,i){this.Gr(new Be(t,i))}zr(t,i){t.forEach((a=>this.removeReference(a,i)))}jr(t){const i=new _t(new ue([])),a=new Be(i,t),l=new Be(i,t+1),c=[];return this.Ur.forEachInRange([a,l],(d=>{this.Gr(d),c.push(d.key)})),c}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new _t(new ue([])),a=new Be(i,t),l=new Be(i,t+1);let c=jt();return this.Ur.forEachInRange([a,l],(d=>{c=c.add(d.key)})),c}containsKey(t){const i=new Be(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class Be{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return _t.comparator(t.key,i.key)||kt(t.Yr,i.Yr)}static Kr(t,i){return kt(t.Yr,i.Yr)||_t.comparator(t.key,i.key)}}/**
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
 */class eR{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Le(Be.$r)}checkEmpty(t){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,l){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new _w(c,i,a,l);this.mutationQueue.push(d);for(const g of l)this.Zr=this.Zr.add(new Be(g.key,c)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return Q.resolve(d)}lookupMutationBatch(t,i){return Q.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,l=this.ei(a),c=l<0?0:l;return Q.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?Mb:this.tr-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new Be(i,0),l=new Be(i,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([a,l],(d=>{const g=this.Xr(d.Yr);c.push(g)})),Q.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Le(kt);return i.forEach((l=>{const c=new Be(l,0),d=new Be(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,d],(g=>{a=a.add(g.Yr)}))})),Q.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,l=a.length+1;let c=a;_t.isDocumentKey(c)||(c=c.child(""));const d=new Be(new _t(c),0);let g=new Le(kt);return this.Zr.forEachWhile((y=>{const v=y.key.path;return!!a.isPrefixOf(v)&&(v.length===l&&(g=g.add(y.Yr)),!0)}),d),Q.resolve(this.ti(g))}ti(t){const i=[];return t.forEach((a=>{const l=this.Xr(a);l!==null&&i.push(l)})),i}removeMutationBatch(t,i){ce(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return Q.forEach(i.mutations,(l=>{const c=new Be(l.key,i.batchId);return a=a.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,i){const a=new Be(i,0),l=this.Zr.firstAfterOrEqual(a);return Q.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
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
 */class nR{constructor(t){this.ri=t,this.docs=(function(){return new ve(_t.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,l=this.docs.get(a),c=l?l.size:0,d=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return Q.resolve(a?a.document.mutableCopy():We.newInvalidDocument(i))}getEntries(t,i){let a=cs();return i.forEach((l=>{const c=this.docs.get(l);a=a.insert(l,c?c.document.mutableCopy():We.newInvalidDocument(l))})),Q.resolve(a)}getDocumentsMatchingQuery(t,i,a,l){let c=cs();const d=i.path,g=new _t(d.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(g);for(;y.hasNext();){const{key:v,value:{document:S}}=y.getNext();if(!d.isPrefixOf(v.path))break;v.path.length>d.length+1||Db(Ib(S),a)<=0||(l.has(S.key)||kh(i,S))&&(c=c.insert(S.key,S.mutableCopy()))}return Q.resolve(c)}getAllFromCollectionGroup(t,i,a,l){bt(9500)}ii(t,i){return Q.forEach(this.docs,(a=>i(a)))}newChangeBuffer(t){return new iR(this)}getSize(t){return Q.resolve(this.size)}}class iR extends Xw{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach(((a,l)=>{l.isValidDocument()?i.push(this.Nr.addEntry(t,l)):this.Nr.removeEntry(a)})),Q.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
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
 */class rR{constructor(t){this.persistence=t,this.si=new ia((i=>hm(i)),fm),this.lastRemoteSnapshotVersion=St.min(),this.highestTargetId=0,this.oi=0,this._i=new gm,this.targetCount=0,this.ai=ho.ur()}forEachTarget(t,i){return this.si.forEach(((a,l)=>i(l))),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),Q.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new ho(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,Q.resolve()}updateTargetData(t,i){return this.Pr(i),Q.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,i,a){let l=0;const c=[];return this.si.forEach(((d,g)=>{g.sequenceNumber<=i&&a.get(g.targetId)===null&&(this.si.delete(d),c.push(this.removeMatchingKeysForTargetId(t,g.targetId)),l++)})),Q.waitFor(c).next((()=>l))}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return Q.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),Q.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const l=this.persistence.referenceDelegate,c=[];return l&&i.forEach((d=>{c.push(l.markPotentiallyOrphaned(t,d))})),Q.waitFor(c)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),Q.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return Q.resolve(a)}containsKey(t,i){return Q.resolve(this._i.containsKey(i))}}/**
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
 */class u2{constructor(t,i){this.ui={},this.overlays={},this.ci=new xh(0),this.li=!1,this.li=!0,this.hi=new tR,this.referenceDelegate=t(this),this.Pi=new rR(this),this.indexManager=new qw,this.remoteDocumentCache=(function(l){return new nR(l)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new Bw(i),this.Ii=new Jw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new Ww,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new eR(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){st("MemoryPersistence","Starting transaction:",t);const l=new sR(this.ci.next());return this.referenceDelegate.Ei(),a(l).next((c=>this.referenceDelegate.di(l).next((()=>c)))).toPromise().then((c=>(l.raiseOnCommittedEvent(),c)))}Ai(t,i){return Q.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,i))))}}class sR extends Ob{constructor(t){super(),this.currentSequenceNumber=t}}class ym{constructor(t){this.persistence=t,this.Ri=new gm,this.Vi=null}static mi(t){return new ym(t)}get fi(){if(this.Vi)return this.Vi;throw bt(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),Q.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),Q.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),Q.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach((l=>this.fi.add(l.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next((l=>{l.forEach((c=>this.fi.add(c.toString())))})).next((()=>a.removeTargetData(t,i)))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.fi,(a=>{const l=_t.fromPath(a);return this.gi(t,l).next((c=>{c||i.removeEntry(l,St.min())}))})).next((()=>(this.Vi=null,i.apply(t))))}updateLimboDocument(t,i){return this.gi(t,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(t){return 0}gi(t,i){return Q.or([()=>Q.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class mh{constructor(t,i){this.persistence=t,this.pi=new ia((a=>Vb(a.path)),((a,l)=>a.isEqual(l))),this.garbageCollector=Qw(this,i)}static mi(t,i){return new mh(t,i)}Ei(){}di(t){return Q.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>i.next((l=>a+l))))}wr(t){let i=0;return this.pr(t,(a=>{i++})).next((()=>i))}pr(t,i){return Q.forEach(this.pi,((a,l)=>this.br(t,a,l).next((c=>c?Q.resolve():i(l)))))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.ii(t,(d=>this.br(t,d,i).next((g=>{g||(a++,c.removeEntry(d,St.min()))})))).next((()=>c.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),Q.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),Q.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),Q.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),Q.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=$c(t.data.value)),i}br(t,i,a){return Q.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.pi.get(i);return Q.resolve(l!==void 0&&l>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class _m{constructor(t,i,a,l){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=l}static As(t,i){let a=jt(),l=jt();for(const c of i.docChanges)switch(c.type){case 0:a=a.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new _m(t,i.fromCache,a,l)}}/**
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
 */class aR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class oR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return YS()?8:xb(tn())>0?6:4})()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,l){const c={result:null};return this.ys(t,i).next((d=>{c.result=d})).next((()=>{if(!c.result)return this.ws(t,i,l,a).next((d=>{c.result=d}))})).next((()=>{if(c.result)return;const d=new aR;return this.Ss(t,i,d).next((g=>{if(c.result=g,this.Vs)return this.bs(t,i,d,g.size)}))})).next((()=>c.result))}bs(t,i,a,l){return a.documentReadCount<this.fs?(Ya()<=Ut.DEBUG&&st("QueryEngine","SDK will not create cache indexes for query:",Qa(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Q.resolve()):(Ya()<=Ut.DEBUG&&st("QueryEngine","Query:",Qa(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.gs*l?(Ya()<=Ut.DEBUG&&st("QueryEngine","The SDK decides to create cache indexes for query:",Qa(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mi(i))):Q.resolve())}ys(t,i){if(Q_(i))return Q.resolve(null);let a=Mi(i);return this.indexManager.getIndexType(t,a).next((l=>l===0?null:(i.limit!==null&&l===1&&(i=Lp(i,null,"F"),a=Mi(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next((c=>{const d=jt(...c);return this.ps.getDocuments(t,d).next((g=>this.indexManager.getMinOffset(t,a).next((y=>{const v=this.Ds(i,g);return this.Cs(i,v,d,y.readTime)?this.ys(t,Lp(i,null,"F")):this.vs(t,v,i,y)}))))})))))}ws(t,i,a,l){return Q_(i)||l.isEqual(St.min())?Q.resolve(null):this.ps.getDocuments(t,a).next((c=>{const d=this.Ds(i,c);return this.Cs(i,d,a,l)?Q.resolve(null):(Ya()<=Ut.DEBUG&&st("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Qa(i)),this.vs(t,d,i,Cb(l,Kl)).next((g=>g)))}))}Ds(t,i){let a=new Le(G1(t));return i.forEach(((l,c)=>{kh(t,c)&&(a=a.add(c))})),a}Cs(t,i,a,l){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const c=t.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}Ss(t,i,a){return Ya()<=Ut.DEBUG&&st("QueryEngine","Using full collection scan to execute query:",Qa(i)),this.ps.getDocumentsMatchingQuery(t,i,as.min(),a)}vs(t,i,a,l){return this.ps.getDocumentsMatchingQuery(t,a,l).next((c=>(i.forEach((d=>{c=c.insert(d.key,d)})),c)))}}/**
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
 */const vm="LocalStore",lR=3e8;class uR{constructor(t,i,a,l){this.persistence=t,this.Fs=i,this.serializer=l,this.Ms=new ve(kt),this.xs=new ia((c=>hm(c)),fm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Zw(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>t.collect(i,this.Ms)))}}function cR(r,t,i,a){return new uR(r,t,i,a)}async function c2(r,t){const i=Bt(r);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next((c=>(l=c,i.Bs(t),i.mutationQueue.getAllMutationBatches(a)))).next((c=>{const d=[],g=[];let y=jt();for(const v of l){d.push(v.batchId);for(const S of v.mutations)y=y.add(S.key)}for(const v of c){g.push(v.batchId);for(const S of v.mutations)y=y.add(S.key)}return i.localDocuments.getDocuments(a,y).next((v=>({Ls:v,removedBatchIds:d,addedBatchIds:g})))}))}))}function h2(r){const t=Bt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>t.Pi.getLastRemoteSnapshotVersion(i)))}function hR(r,t){const i=Bt(r),a=t.snapshotVersion;let l=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const d=i.Ns.newChangeBuffer({trackRemovals:!0});l=i.Ms;const g=[];t.targetChanges.forEach(((S,b)=>{const x=l.get(b);if(!x)return;g.push(i.Pi.removeMatchingKeys(c,S.removedDocuments,b).next((()=>i.Pi.addMatchingKeys(c,S.addedDocuments,b))));let q=x.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(b)!==null?q=q.withResumeToken(Xe.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):S.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(S.resumeToken,a)),l=l.insert(b,q),(function(Z,X,rt){return Z.resumeToken.approximateByteSize()===0||X.snapshotVersion.toMicroseconds()-Z.snapshotVersion.toMicroseconds()>=lR?!0:rt.addedDocuments.size+rt.modifiedDocuments.size+rt.removedDocuments.size>0})(x,q,S)&&g.push(i.Pi.updateTargetData(c,q))}));let y=cs(),v=jt();if(t.documentUpdates.forEach((S=>{t.resolvedLimboDocuments.has(S)&&g.push(i.persistence.referenceDelegate.updateLimboDocument(c,S))})),g.push(fR(c,d,t.documentUpdates).next((S=>{y=S.ks,v=S.qs}))),!a.isEqual(St.min())){const S=i.Pi.getLastRemoteSnapshotVersion(c).next((b=>i.Pi.setTargetsMetadata(c,c.currentSequenceNumber,a)));g.push(S)}return Q.waitFor(g).next((()=>d.apply(c))).next((()=>i.localDocuments.getLocalViewOfDocuments(c,y,v))).next((()=>y))})).then((c=>(i.Ms=l,c)))}function fR(r,t,i){let a=jt(),l=jt();return i.forEach((c=>a=a.add(c))),t.getEntries(r,a).next((c=>{let d=cs();return i.forEach(((g,y)=>{const v=c.get(g);y.isFoundDocument()!==v.isFoundDocument()&&(l=l.add(g)),y.isNoDocument()&&y.version.isEqual(St.min())?(t.removeEntry(g,y.readTime),d=d.insert(g,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(t.addEntry(y),d=d.insert(g,y)):st(vm,"Ignoring outdated watch update for ",g,". Current version:",v.version," Watch version:",y.version)})),{ks:d,qs:l}}))}function dR(r,t){const i=Bt(r);return i.persistence.runTransaction("Allocate target","readwrite",(a=>{let l;return i.Pi.getTargetData(a,t).next((c=>c?(l=c,Q.resolve(l)):i.Pi.allocateTargetId(a).next((d=>(l=new Wr(t,d,"TargetPurposeListen",a.currentSequenceNumber),i.Pi.addTargetData(a,l).next((()=>l)))))))})).then((a=>{const l=i.Ms.get(a.targetId);return(l===null||a.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(a.targetId,a),i.xs.set(t,a.targetId)),a}))}async function jp(r,t,i){const a=Bt(r),l=a.Ms.get(t),c=i?"readwrite":"readwrite-primary";try{i||await a.persistence.runTransaction("Release target",c,(d=>a.persistence.referenceDelegate.removeTarget(d,l)))}catch(d){if(!So(d))throw d;st(vm,`Failed to update sequence numbers for target ${t}: ${d}`)}a.Ms=a.Ms.remove(t),a.xs.delete(l.target)}function ov(r,t,i){const a=Bt(r);let l=St.min(),c=jt();return a.persistence.runTransaction("Execute query","readwrite",(d=>(function(y,v,S){const b=Bt(y),x=b.xs.get(S);return x!==void 0?Q.resolve(b.Ms.get(x)):b.Pi.getTargetData(v,S)})(a,d,Mi(t)).next((g=>{if(g)return l=g.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(d,g.targetId).next((y=>{c=y}))})).next((()=>a.Fs.getDocumentsMatchingQuery(d,t,i?l:St.min(),i?c:jt()))).next((g=>(pR(a,iw(t),g),{documents:g,Qs:c})))))}function pR(r,t,i){let a=r.Os.get(t)||St.min();i.forEach(((l,c)=>{c.readTime.compareTo(a)>0&&(a=c.readTime)})),r.Os.set(t,a)}class lv{constructor(){this.activeTargetIds=uw()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mR{constructor(){this.Mo=new lv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new lv,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class gR{Oo(t){}shutdown(){}}/**
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
 */const uv="ConnectivityMonitor";class cv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){st(uv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){st(uv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hc=null;function qp(){return Hc===null?Hc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hc++,"0x"+Hc.toString(16)}/**
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
 */const hp="RestConnection",yR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _R{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${l}`,this.Wo=this.databaseId.database===ch?`project_id=${a}`:`project_id=${a}&database_id=${l}`}Go(t,i,a,l,c){const d=qp(),g=this.zo(t,i.toUriEncodedString());st(hp,`Sending RPC '${t}' ${d}:`,g,a);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,l,c);const{host:v}=new URL(g),S=ea(v);return this.Jo(t,g,y,a,S).then((b=>(st(hp,`Received RPC '${t}' ${d}: `,b),b)),(b=>{throw oo(hp,`RPC '${t}' ${d} failed with error: `,b,"url: ",g,"request:",a),b}))}Ho(t,i,a,l,c,d){return this.Go(t,i,a,l,c)}jo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+To})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,c)=>t[c]=l)),a&&a.headers.forEach(((l,c)=>t[c]=l))}zo(t,i){const a=yR[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
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
 */class vR{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const Ze="WebChannelConnection";class ER extends _R{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,l,c){const d=qp();return new Promise(((g,y)=>{const v=new A1;v.setWithCredentials(!0),v.listenOnce(b1.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Xc.NO_ERROR:const b=v.getResponseJson();st(Ze,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(b)),g(b);break;case Xc.TIMEOUT:st(Ze,`RPC '${t}' ${d} timed out`),y(new pt(W.DEADLINE_EXCEEDED,"Request time out"));break;case Xc.HTTP_ERROR:const x=v.getStatus();if(st(Ze,`RPC '${t}' ${d} failed with status:`,x,"response text:",v.getResponseText()),x>0){let q=v.getResponseJson();Array.isArray(q)&&(q=q[0]);const $=q?.error;if($&&$.status&&$.message){const Z=(function(rt){const ut=rt.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ut)>=0?ut:W.UNKNOWN})($.status);y(new pt(Z,$.message))}else y(new pt(W.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new pt(W.UNAVAILABLE,"Connection failed."));break;default:bt(9055,{l_:t,streamId:d,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{st(Ze,`RPC '${t}' ${d} completed.`)}}));const S=JSON.stringify(l);st(Ze,`RPC '${t}' ${d} sending request:`,l),v.send(i,"POST",S,a,15)}))}T_(t,i,a){const l=qp(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=C1(),g=R1(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,i,a),y.encodeInitMessageHeaders=!0;const S=c.join("");st(Ze,`Creating RPC '${t}' stream ${l}: ${S}`,y);const b=d.createWebChannel(S,y);this.I_(b);let x=!1,q=!1;const $=new vR({Yo:X=>{q?st(Ze,`Not sending because RPC '${t}' stream ${l} is closed:`,X):(x||(st(Ze,`Opening RPC '${t}' stream ${l} transport.`),b.open(),x=!0),st(Ze,`RPC '${t}' stream ${l} sending:`,X),b.send(X))},Zo:()=>b.close()}),Z=(X,rt,ut)=>{X.listen(rt,(nt=>{try{ut(nt)}catch(lt){setTimeout((()=>{throw lt}),0)}}))};return Z(b,xl.EventType.OPEN,(()=>{q||(st(Ze,`RPC '${t}' stream ${l} transport opened.`),$.o_())})),Z(b,xl.EventType.CLOSE,(()=>{q||(q=!0,st(Ze,`RPC '${t}' stream ${l} transport closed`),$.a_(),this.E_(b))})),Z(b,xl.EventType.ERROR,(X=>{q||(q=!0,oo(Ze,`RPC '${t}' stream ${l} transport errored. Name:`,X.name,"Message:",X.message),$.a_(new pt(W.UNAVAILABLE,"The operation could not be completed")))})),Z(b,xl.EventType.MESSAGE,(X=>{if(!q){const rt=X.data[0];ce(!!rt,16349);const ut=rt,nt=ut?.error||ut[0]?.error;if(nt){st(Ze,`RPC '${t}' stream ${l} received error:`,nt);const lt=nt.status;let yt=(function(w){const C=De[w];if(C!==void 0)return W1(C)})(lt),at=nt.message;yt===void 0&&(yt=W.INTERNAL,at="Unknown error status: "+lt+" with message "+nt.message),q=!0,$.a_(new pt(yt,at)),b.close()}else st(Ze,`RPC '${t}' stream ${l} received:`,rt),$.u_(rt)}})),Z(g,w1.STAT_EVENT,(X=>{X.stat===Cp.PROXY?st(Ze,`RPC '${t}' stream ${l} detected buffering proxy`):X.stat===Cp.NOPROXY&&st(Ze,`RPC '${t}' stream ${l} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((i=>i===t))}}function fp(){return typeof document<"u"?document:null}/**
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
 */function f2(r){return new Cw(r,!0)}/**
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
 */class d2{constructor(t,i,a=1e3,l=1.5,c=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=l,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),l=Math.max(0,i-a);l>0&&st("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const hv="PersistentStream";class TR{constructor(t,i,a,l,c,d,g,y){this.Mi=t,this.S_=a,this.b_=l,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=g,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new d2(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===W.RESOURCE_EXHAUSTED?(cr(i.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,l])=>{this.D_===i&&this.G_(a,l)}),(a=>{t((()=>{const l=new pt(W.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(l)}))}))}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((l=>{a((()=>this.z_(l)))})),this.stream.onMessage((l=>{a((()=>++this.F_==1?this.J_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return st(hv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget((()=>this.D_===t?i():(st(hv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class SR extends TR{constructor(t,i,a,l,c,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,l,d),this.serializer=c}j_(t,i){return this.connection.T_("Listen",t,i)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const i=xw(this.serializer,t),a=(function(c){if(!("targetChange"in c))return St.min();const d=c.targetChange;return d.targetIds&&d.targetIds.length?St.min():d.readTime?Wa(d.readTime):St.min()})(t);return this.listener.H_(i,a)}Y_(t){const i={};i.database=iv(this.serializer),i.addTarget=(function(c,d){let g;const y=d.target;if(g=Up(y)?{documents:Mw(c,y)}:{query:Vw(c,y).ft},g.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){g.resumeToken=Dw(c,d.resumeToken);const v=zp(c,d.expectedCount);v!==null&&(g.expectedCount=v)}else if(d.snapshotVersion.compareTo(St.min())>0){g.readTime=Iw(c,d.snapshotVersion.toTimestamp());const v=zp(c,d.expectedCount);v!==null&&(g.expectedCount=v)}return g})(this.serializer,t);const a=Lw(this.serializer,t);a&&(i.labels=a),this.q_(i)}Z_(t){const i={};i.database=iv(this.serializer),i.removeTarget=t,this.q_(i)}}/**
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
 */class AR{}class bR extends AR{constructor(t,i,a,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new pt(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Go(t,Bp(i,a),l,c,d))).catch((c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new pt(W.UNKNOWN,c.toString())}))}Ho(t,i,a,l,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,g])=>this.connection.Ho(t,Bp(i,a),l,d,g,c))).catch((d=>{throw d.name==="FirebaseError"?(d.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new pt(W.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class wR{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(cr(i),this.aa=!1):st("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const fo="RemoteStore";class RR{constructor(t,i,a,l,c){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{su(this)&&(st(fo,"Restarting streams for network reachability change."),await(async function(y){const v=Bt(y);v.Ea.add(4),await ru(v),v.Ra.set("Unknown"),v.Ea.delete(4),await jh(v)})(this))}))})),this.Ra=new wR(a,l)}}async function jh(r){if(su(r))for(const t of r.da)await t(!0)}async function ru(r){for(const t of r.da)await t(!1)}function p2(r,t){const i=Bt(r);i.Ia.has(t.targetId)||(i.Ia.set(t.targetId,t),Am(i)?Sm(i):Ao(i).O_()&&Tm(i,t))}function Em(r,t){const i=Bt(r),a=Ao(i);i.Ia.delete(t),a.O_()&&m2(i,t),i.Ia.size===0&&(a.O_()?a.L_():su(i)&&i.Ra.set("Unknown"))}function Tm(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const i=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}Ao(r).Y_(t)}function m2(r,t){r.Va.Ue(t),Ao(r).Z_(t)}function Sm(r){r.Va=new Aw({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),Ao(r).start(),r.Ra.ua()}function Am(r){return su(r)&&!Ao(r).x_()&&r.Ia.size>0}function su(r){return Bt(r).Ea.size===0}function g2(r){r.Va=void 0}async function CR(r){r.Ra.set("Online")}async function IR(r){r.Ia.forEach(((t,i)=>{Tm(r,t)}))}async function DR(r,t){g2(r),Am(r)?(r.Ra.ha(t),Sm(r)):r.Ra.set("Unknown")}async function NR(r,t,i){if(r.Ra.set("Online"),t instanceof e2&&t.state===2&&t.cause)try{await(async function(l,c){const d=c.cause;for(const g of c.targetIds)l.Ia.has(g)&&(await l.remoteSyncer.rejectListen(g,d),l.Ia.delete(g),l.Va.removeTarget(g))})(r,t)}catch(a){st(fo,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await fv(r,a)}else if(t instanceof Jc?r.Va.Ze(t):t instanceof t2?r.Va.st(t):r.Va.tt(t),!i.isEqual(St.min()))try{const a=await h2(r.localStore);i.compareTo(a)>=0&&await(function(c,d){const g=c.Va.Tt(d);return g.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const S=c.Ia.get(v);S&&c.Ia.set(v,S.withResumeToken(y.resumeToken,d))}})),g.targetMismatches.forEach(((y,v)=>{const S=c.Ia.get(y);if(!S)return;c.Ia.set(y,S.withResumeToken(Xe.EMPTY_BYTE_STRING,S.snapshotVersion)),m2(c,y);const b=new Wr(S.target,y,v,S.sequenceNumber);Tm(c,b)})),c.remoteSyncer.applyRemoteEvent(g)})(r,i)}catch(a){st(fo,"Failed to raise snapshot:",a),await fv(r,a)}}async function fv(r,t,i){if(!So(t))throw t;r.Ea.add(1),await ru(r),r.Ra.set("Offline"),i||(i=()=>h2(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{st(fo,"Retrying IndexedDB access"),await i(),r.Ea.delete(1),await jh(r)}))}async function dv(r,t){const i=Bt(r);i.asyncQueue.verifyOperationInProgress(),st(fo,"RemoteStore received new credentials");const a=su(i);i.Ea.add(3),await ru(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await jh(i)}async function OR(r,t){const i=Bt(r);t?(i.Ea.delete(2),await jh(i)):t||(i.Ea.add(2),await ru(i),i.Ra.set("Unknown"))}function Ao(r){return r.ma||(r.ma=(function(i,a,l){const c=Bt(i);return c.sa(),new SR(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(r.datastore,r.asyncQueue,{Xo:CR.bind(null,r),t_:IR.bind(null,r),r_:DR.bind(null,r),H_:NR.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),Am(r)?Sm(r):r.Ra.set("Unknown")):(await r.ma.stop(),g2(r))}))),r.ma}/**
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
 */class bm{constructor(t,i,a,l,c){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=c,this.deferred=new Ks,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,l,c){const d=Date.now()+a,g=new bm(t,i,d,l,c);return g.start(a),g}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pt(W.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function y2(r,t){if(cr("AsyncQueue",`${t}: ${r}`),So(r))return new pt(W.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class to{static emptySet(t){return new to(t.comparator)}constructor(t){this.comparator=t?(i,a)=>t(i,a)||_t.comparator(i.key,a.key):(i,a)=>_t.comparator(i.key,a.key),this.keyedMap=Ml(),this.sortedSet=new ve(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((i,a)=>(t(i),!1)))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof to)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=a.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach((i=>{t.push(i.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const a=new to;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=i,a}}/**
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
 */class pv{constructor(){this.ga=new ve(_t.comparator)}track(t){const i=t.doc.key,a=this.ga.get(i);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(i,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(i,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(i,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(i):t.type===1&&a.type===2?this.ga=this.ga.insert(i,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):bt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(i,t)}ya(){const t=[];return this.ga.inorderTraversal(((i,a)=>{t.push(a)})),t}}class po{constructor(t,i,a,l,c,d,g,y,v){this.query=t,this.docs=i,this.oldDocs=a,this.docChanges=l,this.mutatedKeys=c,this.fromCache=d,this.syncStateChanged=g,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(t,i,a,l,c){const d=[];return i.forEach((g=>{d.push({type:0,doc:g})})),new po(t,i,to.emptySet(i),d,a,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Lh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,a=t.docChanges;if(i.length!==a.length)return!1;for(let l=0;l<i.length;l++)if(i[l].type!==a[l].type||!i[l].doc.isEqual(a[l].doc))return!1;return!0}}/**
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
 */class xR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class MR{constructor(){this.queries=mv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const l=Bt(i),c=l.queries;l.queries=mv(),c.forEach(((d,g)=>{for(const y of g.Sa)y.onError(a)}))})(this,new pt(W.ABORTED,"Firestore shutting down"))}}function mv(){return new ia((r=>F1(r)),Lh)}async function VR(r,t){const i=Bt(r);let a=3;const l=t.query;let c=i.queries.get(l);c?!c.ba()&&t.Da()&&(a=2):(c=new xR,a=t.Da()?0:1);try{switch(a){case 0:c.wa=await i.onListen(l,!0);break;case 1:c.wa=await i.onListen(l,!1);break;case 2:await i.onFirstRemoteStoreListen(l)}}catch(d){const g=y2(d,`Initialization of query '${Qa(t.query)}' failed`);return void t.onError(g)}i.queries.set(l,c),c.Sa.push(t),t.va(i.onlineState),c.wa&&t.Fa(c.wa)&&wm(i)}async function UR(r,t){const i=Bt(r),a=t.query;let l=3;const c=i.queries.get(a);if(c){const d=c.Sa.indexOf(t);d>=0&&(c.Sa.splice(d,1),c.Sa.length===0?l=t.Da()?0:1:!c.ba()&&t.Da()&&(l=2))}switch(l){case 0:return i.queries.delete(a),i.onUnlisten(a,!0);case 1:return i.queries.delete(a),i.onUnlisten(a,!1);case 2:return i.onLastRemoteStoreUnlisten(a);default:return}}function LR(r,t){const i=Bt(r);let a=!1;for(const l of t){const c=l.query,d=i.queries.get(c);if(d){for(const g of d.Sa)g.Fa(l)&&(a=!0);d.wa=l}}a&&wm(i)}function kR(r,t,i){const a=Bt(r),l=a.queries.get(t);if(l)for(const c of l.Sa)c.onError(i);a.queries.delete(t)}function wm(r){r.Ca.forEach((t=>{t.next()}))}var Hp,gv;(gv=Hp||(Hp={})).Ma="default",gv.Cache="cache";class PR{constructor(t,i,a){this.query=t,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const l of t.docChanges)l.type!==3&&a.push(l);t=new po(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),i=!0):this.La(t,this.onlineState)&&(this.ka(t),i=!0),this.Na=t,i}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),i=!0),i}La(t,i){if(!t.fromCache||!this.Da())return!0;const a=i!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(t){t=po.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Hp.Cache}}/**
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
 */class _2{constructor(t){this.key=t}}class v2{constructor(t){this.key=t}}class zR{constructor(t,i){this.query=t,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=jt(),this.mutatedKeys=jt(),this.eu=G1(t),this.tu=new to(this.eu)}get nu(){return this.Ya}ru(t,i){const a=i?i.iu:new pv,l=i?i.tu:this.tu;let c=i?i.mutatedKeys:this.mutatedKeys,d=l,g=!1;const y=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,v=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal(((S,b)=>{const x=l.get(S),q=kh(this.query,b)?b:null,$=!!x&&this.mutatedKeys.has(x.key),Z=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let X=!1;x&&q?x.data.isEqual(q.data)?$!==Z&&(a.track({type:3,doc:q}),X=!0):this.su(x,q)||(a.track({type:2,doc:q}),X=!0,(y&&this.eu(q,y)>0||v&&this.eu(q,v)<0)&&(g=!0)):!x&&q?(a.track({type:0,doc:q}),X=!0):x&&!q&&(a.track({type:1,doc:x}),X=!0,(y||v)&&(g=!0)),X&&(q?(d=d.add(q),c=Z?c.add(S):c.delete(S)):(d=d.delete(S),c=c.delete(S)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const S=this.query.limitType==="F"?d.last():d.first();d=d.delete(S.key),c=c.delete(S.key),a.track({type:1,doc:S})}return{tu:d,iu:a,Cs:g,mutatedKeys:c}}su(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,a,l){const c=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const d=t.iu.ya();d.sort(((S,b)=>(function(q,$){const Z=X=>{switch(X){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return bt(20277,{Rt:X})}};return Z(q)-Z($)})(S.type,b.type)||this.eu(S.doc,b.doc))),this.ou(a),l=l??!1;const g=i&&!l?this._u():[],y=this.Xa.size===0&&this.current&&!l?1:0,v=y!==this.Za;return this.Za=y,d.length!==0||v?{snapshot:new po(this.query,t.tu,c,d,t.mutatedKeys,y===0,v,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:g}:{au:g}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new pv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((i=>this.Ya=this.Ya.add(i))),t.modifiedDocuments.forEach((i=>{})),t.removedDocuments.forEach((i=>this.Ya=this.Ya.delete(i))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=jt(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const i=[];return t.forEach((a=>{this.Xa.has(a)||i.push(new v2(a))})),this.Xa.forEach((a=>{t.has(a)||i.push(new _2(a))})),i}cu(t){this.Ya=t.Qs,this.Xa=jt();const i=this.ru(t.documents);return this.applyChanges(i,!0)}lu(){return po.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Rm="SyncEngine";class BR{constructor(t,i,a){this.query=t,this.targetId=i,this.view=a}}class jR{constructor(t){this.key=t,this.hu=!1}}class qR{constructor(t,i,a,l,c,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new ia((g=>F1(g)),Lh),this.Iu=new Map,this.Eu=new Set,this.du=new ve(_t.comparator),this.Au=new Map,this.Ru=new gm,this.Vu={},this.mu=new Map,this.fu=ho.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function HR(r,t,i=!0){const a=b2(r);let l;const c=a.Tu.get(t);return c?(a.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.lu()):l=await E2(a,t,i,!0),l}async function FR(r,t){const i=b2(r);await E2(i,t,!0,!1)}async function E2(r,t,i,a){const l=await dR(r.localStore,Mi(t)),c=l.targetId,d=r.sharedClientState.addLocalQueryTarget(c,i);let g;return a&&(g=await GR(r,t,c,d==="current",l.resumeToken)),r.isPrimaryClient&&i&&p2(r.remoteStore,l),g}async function GR(r,t,i,a,l){r.pu=(b,x,q)=>(async function(Z,X,rt,ut){let nt=X.view.ru(rt);nt.Cs&&(nt=await ov(Z.localStore,X.query,!1).then((({documents:A})=>X.view.ru(A,nt))));const lt=ut&&ut.targetChanges.get(X.targetId),yt=ut&&ut.targetMismatches.get(X.targetId)!=null,at=X.view.applyChanges(nt,Z.isPrimaryClient,lt,yt);return _v(Z,X.targetId,at.au),at.snapshot})(r,b,x,q);const c=await ov(r.localStore,t,!0),d=new zR(t,c.Qs),g=d.ru(c.documents),y=iu.createSynthesizedTargetChangeForCurrentChange(i,a&&r.onlineState!=="Offline",l),v=d.applyChanges(g,r.isPrimaryClient,y);_v(r,i,v.au);const S=new BR(t,i,d);return r.Tu.set(t,S),r.Iu.has(i)?r.Iu.get(i).push(t):r.Iu.set(i,[t]),v.snapshot}async function KR(r,t,i){const a=Bt(r),l=a.Tu.get(t),c=a.Iu.get(l.targetId);if(c.length>1)return a.Iu.set(l.targetId,c.filter((d=>!Lh(d,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(l.targetId),a.sharedClientState.isActiveQueryTarget(l.targetId)||await jp(a.localStore,l.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(l.targetId),i&&Em(a.remoteStore,l.targetId),Fp(a,l.targetId)})).catch(Oh)):(Fp(a,l.targetId),await jp(a.localStore,l.targetId,!0))}async function YR(r,t){const i=Bt(r),a=i.Tu.get(t),l=i.Iu.get(a.targetId);i.isPrimaryClient&&l.length===1&&(i.sharedClientState.removeLocalQueryTarget(a.targetId),Em(i.remoteStore,a.targetId))}async function T2(r,t){const i=Bt(r);try{const a=await hR(i.localStore,t);t.targetChanges.forEach(((l,c)=>{const d=i.Au.get(c);d&&(ce(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?d.hu=!0:l.modifiedDocuments.size>0?ce(d.hu,14607):l.removedDocuments.size>0&&(ce(d.hu,42227),d.hu=!1))})),await A2(i,a,t)}catch(a){await Oh(a)}}function yv(r,t,i){const a=Bt(r);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.Tu.forEach(((c,d)=>{const g=d.view.va(t);g.snapshot&&l.push(g.snapshot)})),(function(d,g){const y=Bt(d);y.onlineState=g;let v=!1;y.queries.forEach(((S,b)=>{for(const x of b.Sa)x.va(g)&&(v=!0)})),v&&wm(y)})(a.eventManager,t),l.length&&a.Pu.H_(l),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function QR(r,t,i){const a=Bt(r);a.sharedClientState.updateQueryState(t,"rejected",i);const l=a.Au.get(t),c=l&&l.key;if(c){let d=new ve(_t.comparator);d=d.insert(c,We.newNoDocument(c,St.min()));const g=jt().add(c),y=new Bh(St.min(),new Map,new ve(kt),d,g);await T2(a,y),a.du=a.du.remove(c),a.Au.delete(t),Cm(a)}else await jp(a.localStore,t,!1).then((()=>Fp(a,t,i))).catch(Oh)}function Fp(r,t,i=null){r.sharedClientState.removeLocalQueryTarget(t);for(const a of r.Iu.get(t))r.Tu.delete(a),i&&r.Pu.yu(a,i);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((a=>{r.Ru.containsKey(a)||S2(r,a)}))}function S2(r,t){r.Eu.delete(t.path.canonicalString());const i=r.du.get(t);i!==null&&(Em(r.remoteStore,i),r.du=r.du.remove(t),r.Au.delete(i),Cm(r))}function _v(r,t,i){for(const a of i)a instanceof _2?(r.Ru.addReference(a.key,t),XR(r,a)):a instanceof v2?(st(Rm,"Document no longer in limbo: "+a.key),r.Ru.removeReference(a.key,t),r.Ru.containsKey(a.key)||S2(r,a.key)):bt(19791,{wu:a})}function XR(r,t){const i=t.key,a=i.path.canonicalString();r.du.get(i)||r.Eu.has(a)||(st(Rm,"New document in limbo: "+i),r.Eu.add(a),Cm(r))}function Cm(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const i=new _t(ue.fromString(t)),a=r.fu.next();r.Au.set(a,new jR(i)),r.du=r.du.insert(i,a),p2(r.remoteStore,new Wr(Mi(H1(i.path)),a,"TargetPurposeLimboResolution",xh.ce))}}async function A2(r,t,i){const a=Bt(r),l=[],c=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((g,y)=>{d.push(a.pu(y,t,i).then((v=>{if((v||i)&&a.isPrimaryClient){const S=v?!v.fromCache:i?.targetChanges.get(y.targetId)?.current;a.sharedClientState.updateQueryState(y.targetId,S?"current":"not-current")}if(v){l.push(v);const S=_m.As(y.targetId,v);c.push(S)}})))})),await Promise.all(d),a.Pu.H_(l),await(async function(y,v){const S=Bt(y);try{await S.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>Q.forEach(v,(x=>Q.forEach(x.Es,(q=>S.persistence.referenceDelegate.addReference(b,x.targetId,q))).next((()=>Q.forEach(x.ds,(q=>S.persistence.referenceDelegate.removeReference(b,x.targetId,q)))))))))}catch(b){if(!So(b))throw b;st(vm,"Failed to update sequence numbers: "+b)}for(const b of v){const x=b.targetId;if(!b.fromCache){const q=S.Ms.get(x),$=q.snapshotVersion,Z=q.withLastLimboFreeSnapshotVersion($);S.Ms=S.Ms.insert(x,Z)}}})(a.localStore,c))}async function $R(r,t){const i=Bt(r);if(!i.currentUser.isEqual(t)){st(Rm,"User change. New user:",t.toKey());const a=await c2(i.localStore,t);i.currentUser=t,(function(c,d){c.mu.forEach((g=>{g.forEach((y=>{y.reject(new pt(W.CANCELLED,d))}))})),c.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await A2(i,a.Ls)}}function ZR(r,t){const i=Bt(r),a=i.Au.get(t);if(a&&a.hu)return jt().add(a.key);{let l=jt();const c=i.Iu.get(t);if(!c)return l;for(const d of c){const g=i.Tu.get(d);l=l.unionWith(g.view.nu)}return l}}function b2(r){const t=Bt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=T2.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZR.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=QR.bind(null,t),t.Pu.H_=LR.bind(null,t.eventManager),t.Pu.yu=kR.bind(null,t.eventManager),t}class gh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=f2(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return cR(this.persistence,new oR,t.initialUser,this.serializer)}Cu(t){return new u2(ym.mi,this.serializer)}Du(t){return new mR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gh.provider={build:()=>new gh};class JR extends gh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){ce(this.persistence.referenceDelegate instanceof mh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new Kw(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?pn.withCacheSize(this.cacheSizeBytes):pn.DEFAULT;return new u2((a=>mh.mi(a,i)),this.serializer)}}class Gp{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>yv(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=$R.bind(null,this.syncEngine),await OR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new MR})()}createDatastore(t){const i=f2(t.databaseInfo.databaseId),a=(function(c){return new ER(c)})(t.databaseInfo);return(function(c,d,g,y){return new bR(c,d,g,y)})(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return(function(a,l,c,d,g){return new RR(a,l,c,d,g)})(this.localStore,this.datastore,t.asyncQueue,(i=>yv(this.syncEngine,i,0)),(function(){return cv.v()?new cv:new gR})())}createSyncEngine(t,i){return(function(l,c,d,g,y,v,S){const b=new qR(l,c,d,g,y,v);return S&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const a=Bt(i);st(fo,"RemoteStore shutting down."),a.Ea.add(5),await ru(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Gp.provider={build:()=>new Gp};/**
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
 */class WR{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):cr("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,i){setTimeout((()=>{this.muted||t(i)}),0)}}/**
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
 */const hs="FirestoreClient";class tC{constructor(t,i,a,l,c){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=Je.UNAUTHENTICATED,this.clientId=N1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(a,(async d=>{st(hs,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(st(hs,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ks;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=y2(i,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function dp(r,t){r.asyncQueue.verifyOperationInProgress(),st(hs,"Initializing OfflineComponentProvider");const i=r.configuration;await t.initialize(i);let a=i.initialUser;r.setCredentialChangeListener((async l=>{a.isEqual(l)||(await c2(t.localStore,l),a=l)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function vv(r,t){r.asyncQueue.verifyOperationInProgress();const i=await eC(r);st(hs,"Initializing OnlineComponentProvider"),await t.initialize(i,r.configuration),r.setCredentialChangeListener((a=>dv(t.remoteStore,a))),r.setAppCheckTokenChangeListener(((a,l)=>dv(t.remoteStore,l))),r._onlineComponents=t}async function eC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){st(hs,"Using user provided OfflineComponentProvider");try{await dp(r,r._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!(function(l){return l.name==="FirebaseError"?l.code===W.FAILED_PRECONDITION||l.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(i))throw i;oo("Error using user provided cache. Falling back to memory cache: "+i),await dp(r,new gh)}}else st(hs,"Using default OfflineComponentProvider"),await dp(r,new JR(void 0));return r._offlineComponents}async function nC(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(st(hs,"Using user provided OnlineComponentProvider"),await vv(r,r._uninitializedComponentsProvider._online)):(st(hs,"Using default OnlineComponentProvider"),await vv(r,new Gp))),r._onlineComponents}async function iC(r){const t=await nC(r),i=t.eventManager;return i.onListen=HR.bind(null,t.syncEngine),i.onUnlisten=KR.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=FR.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=YR.bind(null,t.syncEngine),i}function rC(r,t,i={}){const a=new Ks;return r.asyncQueue.enqueueAndForget((async()=>(function(c,d,g,y,v){const S=new WR({next:x=>{S.Nu(),d.enqueueAndForget((()=>UR(c,b))),x.fromCache&&y.source==="server"?v.reject(new pt(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(x)},error:x=>v.reject(x)}),b=new PR(g,S,{includeMetadataChanges:!0,qa:!0});return VR(c,b)})(await iC(r),r.asyncQueue,t,i,a))),a.promise}/**
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
 */function w2(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const Ev=new Map;/**
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
 */const R2="firestore.googleapis.com",Tv=!0;class Sv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new pt(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=R2,this.ssl=Tv}else this.host=t.host,this.ssl=t.ssl??Tv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=l2;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Fw)throw new pt(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=w2(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new pt(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new pt(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new pt(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,l){return a.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Im{constructor(t,i,a,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pt(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new pt(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new pb;switch(a.type){case"firstParty":return new _b(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new pt(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=Ev.get(i);a&&(st("ComponentProvider","Removing Datastore"),Ev.delete(i),a.terminate())})(this),Promise.resolve()}}function sC(r,t,i,a={}){r=Dp(r,Im);const l=ea(t),c=r._getSettings(),d={...c,emulatorOptions:r._getEmulatorOptions()},g=`${t}:${i}`;l&&(rm(`https://${g}`),sm("Firestore",!0)),c.host!==R2&&c.host!==g&&oo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...c,host:g,ssl:l,emulatorOptions:a};if(!Zs(y,d)&&(r._setSettings(y),a.mockUserToken)){let v,S;if(typeof a.mockUserToken=="string")v=a.mockUserToken,S=Je.MOCK_USER;else{v=g1(a.mockUserToken,r._app?.options.projectId);const b=a.mockUserToken.sub||a.mockUserToken.user_id;if(!b)throw new pt(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Je(b)}r._authCredentials=new mb(new D1(v,S))}}/**
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
 */class qh{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new qh(this.firestore,t,this._query)}}class zn{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new eo(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zn(this.firestore,t,this._key)}toJSON(){return{type:zn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(eu(i,zn._jsonSchema))return new zn(t,a||null,new _t(ue.fromString(i.referencePath)))}}zn._jsonSchemaVersion="firestore/documentReference/1.0",zn._jsonSchema={type:xe("string",zn._jsonSchemaVersion),referencePath:xe("string")};class eo extends qh{constructor(t,i,a){super(t,i,H1(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zn(this.firestore,null,new _t(t))}withConverter(t){return new eo(this.firestore,t,this._path)}}function aC(r,t,...i){if(r=fs(r),r instanceof Im){const a=ue.fromString(t,...i);return U_(a),new eo(r,null,a)}{if(!(r instanceof zn||r instanceof eo))throw new pt(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(ue.fromString(t,...i));return U_(a),new eo(r.firestore,null,a)}}/**
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
 */const Av="AsyncQueue";class bv{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new d2(this,"async_queue_retry"),this._c=()=>{const a=fp();a&&st(Av,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=fp();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=fp();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new Ks;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!So(t))throw t;st(Av,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const i=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,cr("INTERNAL UNHANDLED ERROR: ",wv(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const l=bm.createAndSchedule(this,t,i,a,(c=>this.hc(c)));return this.tc.push(l),l}uc(){this.nc&&bt(47125,{Pc:wv(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function wv(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class C2 extends Im{constructor(t,i,a,l){super(t,i,a,l),this.type="firestore",this._queue=new bv,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new bv(t),this._firestoreClient=void 0,await t}}}function oC(r,t){const i=typeof r=="object"?r:Nh(),a=typeof r=="string"?r:ch,l=Dh(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const c=d1("firestore");c&&sC(l,...c)}return l}function lC(r){if(r._terminated)throw new pt(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||uC(r),r._firestoreClient}function uC(r){const t=r._freezeSettings(),i=(function(l,c,d,g){return new Pb(l,c,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,w2(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new tC(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}})(r._componentsProvider))}/**
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
 */class Oi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Oi(Xe.fromBase64String(t))}catch(i){throw new pt(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new Oi(Xe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Oi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(eu(t,Oi._jsonSchema))return Oi.fromBase64String(t.bytes)}}Oi._jsonSchemaVersion="firestore/bytes/1.0",Oi._jsonSchema={type:xe("string",Oi._jsonSchemaVersion),bytes:xe("string")};/**
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
 */class I2{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new pt(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new an(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class is{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new pt(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new pt(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return kt(this._lat,t._lat)||kt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:is._jsonSchemaVersion}}static fromJSON(t){if(eu(t,is._jsonSchema))return new is(t.latitude,t.longitude)}}is._jsonSchemaVersion="firestore/geoPoint/1.0",is._jsonSchema={type:xe("string",is._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};/**
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
 */class rs{constructor(t){this._values=(t||[]).map((i=>i))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,l){if(a.length!==l.length)return!1;for(let c=0;c<a.length;++c)if(a[c]!==l[c])return!1;return!0})(this._values,t._values)}toJSON(){return{type:rs._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(eu(t,rs._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((i=>typeof i=="number")))return new rs(t.vectorValues);throw new pt(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rs._jsonSchemaVersion="firestore/vectorValue/1.0",rs._jsonSchema={type:xe("string",rs._jsonSchemaVersion),vectorValues:xe("object")};const cC=new RegExp("[~\\*/\\[\\]]");function hC(r,t,i){if(t.search(cC)>=0)throw Rv(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new I2(...t.split("."))._internalPath}catch{throw Rv(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function Rv(r,t,i,a,l){let c=`Function ${t}() called with invalid data`;c+=". ";let d="";return new pt(W.INVALID_ARGUMENT,c+r+d)}/**
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
 */class D2{constructor(t,i,a,l,c){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new zn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new fC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(N2("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class fC extends D2{data(){return super.data()}}function N2(r,t){return typeof t=="string"?hC(r,t):t instanceof I2?t._internalPath:t._delegate._internalPath}/**
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
 */function dC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new pt(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pC{convertValue(t,i="none"){switch(us(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _e(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(ls(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw bt(62114,{value:t})}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const a={};return nu(t,((l,c)=>{a[l]=this.convertValue(c,i)})),a}convertVectorValue(t){const i=t.fields?.[Op].arrayValue?.values?.map((a=>_e(a.doubleValue)));return new rs(i)}convertGeoPoint(t){return new is(_e(t.latitude),_e(t.longitude))}convertArray(t,i){return(t.values||[]).map((a=>this.convertValue(a,i)))}convertServerTimestamp(t,i){switch(i){case"previous":const a=Vh(t);return a==null?null:this.convertValue(a,i);case"estimate":return this.convertTimestamp(Yl(t));default:return null}}convertTimestamp(t){const i=os(t);return new Ne(i.seconds,i.nanos)}convertDocumentKey(t,i){const a=ue.fromString(t);ce(o2(a),9688,{name:t});const l=new Ql(a.get(1),a.get(3)),c=new _t(a.popFirst(5));return l.isEqual(i)||cr(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}class Fc{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class no extends D2{constructor(t,i,a,l,c,d){super(t,i,a,l,d),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new Wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field(N2("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new pt(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=no._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}no._jsonSchemaVersion="firestore/documentSnapshot/1.0",no._jsonSchema={type:xe("string",no._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class Wc extends no{data(t={}){return super.data(t)}}class io{constructor(t,i,a,l){this._firestore=t,this._userDataWriter=i,this._snapshot=l,this.metadata=new Fc(l.hasPendingWrites,l.fromCache),this.query=a}get docs(){const t=[];return this.forEach((i=>t.push(i))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach((a=>{t.call(i,new Wc(this._firestore,this._userDataWriter,a.key,a,new Fc(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new pt(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(l,c){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map((g=>{const y=new Wc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new Fc(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);return g.doc,{type:"added",doc:y,oldIndex:-1,newIndex:d++}}))}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((g=>c||g.type!==3)).map((g=>{const y=new Wc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new Fc(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);let v=-1,S=-1;return g.type!==0&&(v=d.indexOf(g.doc.key),d=d.delete(g.doc.key)),g.type!==1&&(d=d.add(g.doc),S=d.indexOf(g.doc.key)),{type:mC(g.type),doc:y,oldIndex:v,newIndex:S}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new pt(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=io._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=N1.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],l=[];return this.docs.forEach((c=>{c._document!==null&&(i.push(c._document),a.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function mC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return bt(61501,{type:r})}}io._jsonSchemaVersion="firestore/querySnapshot/1.0",io._jsonSchema={type:xe("string",io._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};class gC extends pC{constructor(t){super(),this.firestore=t}convertBytes(t){return new Oi(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new zn(this.firestore,null,i)}}function yC(r){r=Dp(r,qh);const t=Dp(r.firestore,C2),i=lC(t),a=new gC(t);return dC(r._query),rC(i,r._query).then((l=>new io(t,a,r,l)))}(function(t,i=!0){(function(l){To=l})(na),Js(new ss("firestore",((a,{instanceIdentifier:l,options:c})=>{const d=a.getProvider("app").getImmediate(),g=new C2(new gb(a.getProvider("auth-internal")),new vb(d,a.getProvider("app-check-internal")),(function(v,S){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new pt(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ql(v.options.projectId,S)})(d,l),d);return c={useFetchStreams:i,...c},g._setSettings(c),g}),"PUBLIC").setMultipleInstances(!0)),xi(O_,x_,t),xi(O_,x_,"esm2020")})();function O2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _C=O2,x2=new Wl("auth","Firebase",O2());/**
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
 */const yh=new am("@firebase/auth");function vC(r,...t){yh.logLevel<=Ut.WARN&&yh.warn(`Auth (${na}): ${r}`,...t)}function th(r,...t){yh.logLevel<=Ut.ERROR&&yh.error(`Auth (${na}): ${r}`,...t)}/**
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
 */function hr(r,...t){throw Dm(r,...t)}function Vi(r,...t){return Dm(r,...t)}function M2(r,t,i){const a={..._C(),[t]:i};return new Wl("auth","Firebase",a).create(t,{appName:r.name})}function Qs(r){return M2(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dm(r,...t){if(typeof r!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(i,...a)}return x2.create(r,...t)}function Et(r,t,...i){if(!r)throw Dm(t,...i)}function or(r){const t="INTERNAL ASSERTION FAILED: "+r;throw th(t),new Error(t)}function fr(r,t){r||or(t)}/**
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
 */function Kp(){return typeof self<"u"&&self.location?.href||""}function EC(){return Cv()==="http:"||Cv()==="https:"}function Cv(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function TC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EC()||FS()||"connection"in navigator)?navigator.onLine:!0}function SC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class au{constructor(t,i){this.shortDelay=t,this.longDelay=i,fr(i>t,"Short delay should be less than long delay!"),this.isMobile=jS()||GS()}get(){return TC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nm(r,t){fr(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class V2{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wC=new au(3e4,6e4);function Om(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function bo(r,t,i,a,l={}){return U2(r,l,async()=>{let c={},d={};a&&(t==="GET"?d=a:c={body:JSON.stringify(a)});const g=tu({key:r.config.apiKey,...d}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const v={method:t,headers:y,...c};return HS()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&ea(r.emulatorConfig.host)&&(v.credentials="include"),V2.fetch()(await L2(r,r.config.apiHost,i,g),v)})}async function U2(r,t,i){r._canInitEmulator=!1;const a={...AC,...t};try{const l=new CC(r),c=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Gc(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const g=c.ok?d.errorMessage:d.error.message,[y,v]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gc(r,"credential-already-in-use",d);if(y==="EMAIL_EXISTS")throw Gc(r,"email-already-in-use",d);if(y==="USER_DISABLED")throw Gc(r,"user-disabled",d);const S=a[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw M2(r,S,v);hr(r,S)}}catch(l){if(l instanceof zi)throw l;hr(r,"network-request-failed",{message:String(l)})}}async function RC(r,t,i,a,l={}){const c=await bo(r,t,i,a,l);return"mfaPendingCredential"in c&&hr(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function L2(r,t,i,a){const l=`${t}${i}?${a}`,c=r,d=c.config.emulator?Nm(r.config,l):`${r.config.apiScheme}://${l}`;return bC.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}class CC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(Vi(this.auth,"network-request-failed")),wC.get())})}}function Gc(r,t,i){const a={appName:r.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const l=Vi(r,t,a);return l.customData._tokenResponse=i,l}/**
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
 */async function IC(r,t){return bo(r,"POST","/v1/accounts:delete",t)}async function _h(r,t){return bo(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function jl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function DC(r,t=!1){const i=fs(r),a=await i.getIdToken(t),l=xm(a);Et(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,d=c?.sign_in_provider;return{claims:l,token:a,authTime:jl(pp(l.auth_time)),issuedAtTime:jl(pp(l.iat)),expirationTime:jl(pp(l.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function pp(r){return Number(r)*1e3}function xm(r){const[t,i,a]=r.split(".");if(t===void 0||i===void 0||a===void 0)return th("JWT malformed, contained fewer than 3 sections"),null;try{const l=h1(i);return l?JSON.parse(l):(th("Failed to decode base64 JWT payload"),null)}catch(l){return th("Caught error parsing JWT payload as JSON",l?.toString()),null}}function Iv(r){const t=xm(r);return Et(t,"internal-error"),Et(typeof t.exp<"u","internal-error"),Et(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function $l(r,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof zi&&NC(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function NC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class OC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yp{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=jl(this.lastLoginAt),this.creationTime=jl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vh(r){const t=r.auth,i=await r.getIdToken(),a=await $l(r,_h(t,{idToken:i}));Et(a?.users.length,t,"internal-error");const l=a.users[0];r._notifyReloadListener(l);const c=l.providerUserInfo?.length?k2(l.providerUserInfo):[],d=MC(r.providerData,c),g=r.isAnonymous,y=!(r.email&&l.passwordHash)&&!d?.length,v=g?y:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Yp(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(r,S)}async function xC(r){const t=fs(r);await vh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function MC(r,t){return[...r.filter(a=>!t.some(l=>l.providerId===a.providerId)),...t]}function k2(r){return r.map(({providerId:t,...i})=>({providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function VC(r,t){const i=await U2(r,{},async()=>{const a=tu({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,d=await L2(r,l,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:g,body:a};return r.emulatorConfig&&ea(r.emulatorConfig.host)&&(y.credentials="include"),V2.fetch()(d,y)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function UC(r,t){return bo(r,"POST","/v2/accounts:revokeToken",Om(r,t))}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Et(t.idToken,"internal-error"),Et(typeof t.idToken<"u","internal-error"),Et(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Iv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){Et(t.length!==0,"internal-error");const i=Iv(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(Et(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:l,expiresIn:c}=await VC(t,i);this.updateTokensAndExpiration(a,l,Number(c))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:l,expirationTime:c}=i,d=new ro;return a&&(Et(typeof a=="string","internal-error",{appName:t}),d.refreshToken=a),l&&(Et(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),c&&(Et(typeof c=="number","internal-error",{appName:t}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return or("not implemented")}}/**
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
 */function Kr(r,t){Et(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class ii{constructor({uid:t,auth:i,stsTokenManager:a,...l}){this.providerId="firebase",this.proactiveRefresh=new OC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Yp(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const i=await $l(this,this.stsTokenManager.getToken(this.auth,t));return Et(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return DC(this,t)}reload(){return xC(this)}_assign(t){this!==t&&(Et(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>({...i})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new ii({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(t){Et(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await vh(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ni(this.auth.app))return Promise.reject(Qs(this.auth));const t=await this.getIdToken();return await $l(this,IC(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){const a=i.displayName??void 0,l=i.email??void 0,c=i.phoneNumber??void 0,d=i.photoURL??void 0,g=i.tenantId??void 0,y=i._redirectEventId??void 0,v=i.createdAt??void 0,S=i.lastLoginAt??void 0,{uid:b,emailVerified:x,isAnonymous:q,providerData:$,stsTokenManager:Z}=i;Et(b&&Z,t,"internal-error");const X=ro.fromJSON(this.name,Z);Et(typeof b=="string",t,"internal-error"),Kr(a,t.name),Kr(l,t.name),Et(typeof x=="boolean",t,"internal-error"),Et(typeof q=="boolean",t,"internal-error"),Kr(c,t.name),Kr(d,t.name),Kr(g,t.name),Kr(y,t.name),Kr(v,t.name),Kr(S,t.name);const rt=new ii({uid:b,auth:t,email:l,emailVerified:x,displayName:a,isAnonymous:q,photoURL:d,phoneNumber:c,tenantId:g,stsTokenManager:X,createdAt:v,lastLoginAt:S});return $&&Array.isArray($)&&(rt.providerData=$.map(ut=>({...ut}))),y&&(rt._redirectEventId=y),rt}static async _fromIdTokenResponse(t,i,a=!1){const l=new ro;l.updateFromServerResponse(i);const c=new ii({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a});return await vh(c),c}static async _fromGetAccountInfoResponse(t,i,a){const l=i.users[0];Et(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?k2(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!c?.length,g=new ro;g.updateFromIdToken(a);const y=new ii({uid:l.localId,auth:t,stsTokenManager:g,isAnonymous:d}),v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Yp(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(y,v),y}}/**
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
 */const Dv=new Map;function lr(r){fr(r instanceof Function,"Expected a class definition");let t=Dv.get(r);return t?(fr(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,Dv.set(r,t),t)}/**
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
 */class P2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}P2.type="NONE";const Nv=P2;/**
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
 */function eh(r,t,i){return`firebase:${r}:${t}:${i}`}class so{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:l,name:c}=this.auth;this.fullUserKey=eh(this.userKey,l.apiKey,c),this.fullPersistenceKey=eh("persistence",l.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await _h(this.auth,{idToken:t}).catch(()=>{});return i?ii._fromGetAccountInfoResponse(this.auth,i,t):null}return ii._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new so(lr(Nv),t,a);const l=(await Promise.all(i.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let c=l[0]||lr(Nv);const d=eh(a,t.config.apiKey,t.name);let g=null;for(const v of i)try{const S=await v._get(d);if(S){let b;if(typeof S=="string"){const x=await _h(t,{idToken:S}).catch(()=>{});if(!x)break;b=await ii._fromGetAccountInfoResponse(t,x,S)}else b=ii._fromJSON(t,S);v!==c&&(g=b),c=v;break}}catch{}const y=l.filter(v=>v._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new so(c,t,a):(c=y[0],g&&await c._set(d,g.toJSON()),await Promise.all(i.map(async v=>{if(v!==c)try{await v._remove(d)}catch{}})),new so(c,t,a))}}/**
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
 */function Ov(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(q2(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(z2(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(F2(t))return"Blackberry";if(G2(t))return"Webos";if(B2(t))return"Safari";if((t.includes("chrome/")||j2(t))&&!t.includes("edge/"))return"Chrome";if(H2(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(i);if(a?.length===2)return a[1]}return"Other"}function z2(r=tn()){return/firefox\//i.test(r)}function B2(r=tn()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function j2(r=tn()){return/crios\//i.test(r)}function q2(r=tn()){return/iemobile/i.test(r)}function H2(r=tn()){return/android/i.test(r)}function F2(r=tn()){return/blackberry/i.test(r)}function G2(r=tn()){return/webos/i.test(r)}function Mm(r=tn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function LC(r=tn()){return Mm(r)&&!!window.navigator?.standalone}function kC(){return KS()&&document.documentMode===10}function K2(r=tn()){return Mm(r)||H2(r)||G2(r)||F2(r)||/windows phone/i.test(r)||q2(r)}/**
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
 */function Y2(r,t=[]){let i;switch(r){case"Browser":i=Ov(tn());break;case"Worker":i=`${Ov(tn())}-${r}`;break;default:i=r}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${na}/${a}`}/**
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
 */class PC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=c=>new Promise((d,g)=>{try{const y=t(c);d(y)}catch(y){g(y)}});a.onAbort=i,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
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
 */async function zC(r,t={}){return bo(r,"GET","/v2/passwordPolicy",Om(r,t))}/**
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
 */const BC=6;class jC{constructor(t){const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??BC,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,i),this.validatePasswordCharacterOptions(t,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let l=0;l<t.length;l++)a=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class qC{constructor(t,i,a,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xv(this),this.idTokenSubscription=new xv(this),this.beforeStateQueue=new PC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=lr(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await so.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await _h(this,{idToken:t}),a=await ii._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(ni(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,d=a?._redirectEventId,g=await this.tryRedirectSignIn(t);(!c||c===d)&&g?.user&&(a=g.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Et(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await vh(t)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=SC()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ni(this.app))return Promise.reject(Qs(this));const i=t?fs(t):null;return i&&Et(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&Et(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ni(this.app)?Promise.reject(Qs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ni(this.app)?Promise.reject(Qs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await zC(this),i=new jC(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Wl("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await UC(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&lr(t)||this._popupRedirectResolver;Et(i,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[lr(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,l){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let d=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(Et(g,this,"internal-error"),g.then(()=>{d||c(this.currentUser)}),typeof i=="function"){const y=t.addObserver(i,a,l);return()=>{d=!0,y()}}else{const y=t.addObserver(i);return()=>{d=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Et(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Y2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){if(ni(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&vC(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Vm(r){return fs(r)}class xv{constructor(t){this.auth=t,this.observer=null,this.addObserver=tA(i=>this.observer=i)}get next(){return Et(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Um={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HC(r){Um=r}function FC(r){return Um.loadJS(r)}function GC(){return Um.gapiScript}function KC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function YC(r,t){const i=Dh(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),c=i.getOptions();if(Zs(c,t??{}))return l;hr(l,"already-initialized")}return i.initialize({options:t})}function QC(r,t){const i=t?.persistence||[],a=(Array.isArray(i)?i:[i]).map(lr);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(a,t?.popupRedirectResolver)}function XC(r,t,i){const a=Vm(r);Et(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const l=!1,c=Q2(t),{host:d,port:g}=$C(t),y=g===null?"":`:${g}`,v={url:`${c}//${d}${y}/`},S=Object.freeze({host:d,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){Et(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),Et(Zs(v,a.config.emulator)&&Zs(S,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=v,a.emulatorConfig=S,a.settings.appVerificationDisabledForTesting=!0,ea(d)?(rm(`${c}//${d}${y}`),sm("Auth",!0)):ZC()}function Q2(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function $C(r){const t=Q2(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const c=l[1];return{host:c,port:Mv(a.substr(c.length+1))}}else{const[c,d]=a.split(":");return{host:c,port:Mv(d)}}}function Mv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function ZC(){function r(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class X2{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return or("not implemented")}_getIdTokenResponse(t){return or("not implemented")}_linkToIdToken(t,i){return or("not implemented")}_getReauthenticationResolver(t){return or("not implemented")}}/**
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
 */async function ao(r,t){return RC(r,"POST","/v1/accounts:signInWithIdp",Om(r,t))}/**
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
 */const JC="http://localhost";class ta extends X2{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new ta(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):hr("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:l,...c}=i;if(!a||!l)return null;const d=new ta(a,l);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(t){const i=this.buildRequest();return ao(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,ao(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,ao(t,i)}buildRequest(){const t={requestUri:JC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=tu(i)}return t}}/**
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
 */class $2{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ou extends $2{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qr extends ou{constructor(){super("facebook.com")}static credential(t){return ta._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qr.credentialFromTaggedObject(t)}static credentialFromError(t){return Qr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qr.credential(t.oauthAccessToken)}catch{return null}}}Qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qr.PROVIDER_ID="facebook.com";/**
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
 */class Xr extends ou{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return ta._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return Xr.credentialFromTaggedObject(t)}static credentialFromError(t){return Xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return Xr.credential(i,a)}catch{return null}}}Xr.GOOGLE_SIGN_IN_METHOD="google.com";Xr.PROVIDER_ID="google.com";/**
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
 */class $r extends ou{constructor(){super("github.com")}static credential(t){return ta._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $r.credentialFromTaggedObject(t)}static credentialFromError(t){return $r.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $r.credential(t.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
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
 */class Zr extends ou{constructor(){super("twitter.com")}static credential(t,i){return ta._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return Zr.credentialFromTaggedObject(t)}static credentialFromError(t){return Zr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return Zr.credential(i,a)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
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
 */class mo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,l=!1){const c=await ii._fromIdTokenResponse(t,a,l),d=Vv(a);return new mo({user:c,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const l=Vv(a);return new mo({user:t,providerId:l,_tokenResponse:a,operationType:i})}}function Vv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Eh extends zi{constructor(t,i,a,l){super(i.code,i.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,Eh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,l){return new Eh(t,i,a,l)}}function Z2(r,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Eh._fromErrorAndOperation(r,c,t,a):c})}async function WC(r,t,i=!1){const a=await $l(r,t._linkToIdToken(r.auth,await r.getIdToken()),i);return mo._forOperation(r,"link",a)}/**
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
 */async function tI(r,t,i=!1){const{auth:a}=r;if(ni(a.app))return Promise.reject(Qs(a));const l="reauthenticate";try{const c=await $l(r,Z2(a,l,t,r),i);Et(c.idToken,a,"internal-error");const d=xm(c.idToken);Et(d,a,"internal-error");const{sub:g}=d;return Et(r.uid===g,a,"user-mismatch"),mo._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&hr(a,"user-mismatch"),c}}/**
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
 */async function eI(r,t,i=!1){if(ni(r.app))return Promise.reject(Qs(r));const a="signIn",l=await Z2(r,a,t),c=await mo._fromIdTokenResponse(r,a,l);return i||await r._updateCurrentUser(c.user),c}function nI(r,t,i,a){return fs(r).onIdTokenChanged(t,i,a)}function iI(r,t,i){return fs(r).beforeAuthStateChanged(t,i)}const Th="__sak";/**
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
 */class J2{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Th,"1"),this.storage.removeItem(Th),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rI=1e3,sI=10;class W2 extends J2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=K2(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),l=this.localCache[i];a!==l&&t(i,l,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((d,g,y)=>{this.notifyListeners(d,y)});return}const a=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},c=this.storage.getItem(a);kC()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,sI):l()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}W2.type="LOCAL";const aI=W2;/**
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
 */class tE extends J2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}tE.type="SESSION";const eE=tE;/**
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
 */function oI(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Hh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const a=new Hh(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:l,data:c}=i.data,d=this.handlersMap[l];if(!d?.size)return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const g=Array.from(d).map(async v=>v(i.origin,c)),y=await oI(g);i.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:y})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hh.receivers=[];/**
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
 */function Lm(r="",t=10){let i="";for(let a=0;a<t;a++)i+=Math.floor(Math.random()*10);return r+i}/**
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
 */class lI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,d;return new Promise((g,y)=>{const v=Lm("",20);l.port1.start();const S=setTimeout(()=>{y(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(b){const x=b;if(x.data.eventId===v)switch(x.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(x.data.response);break;default:clearTimeout(S),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:v,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function Ui(){return window}function uI(r){Ui().location.href=r}/**
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
 */function nE(){return typeof Ui().WorkerGlobalScope<"u"&&typeof Ui().importScripts=="function"}async function cI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hI(){return navigator?.serviceWorker?.controller||null}function fI(){return nE()?self:null}/**
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
 */const iE="firebaseLocalStorageDb",dI=1,Sh="firebaseLocalStorage",rE="fbase_key";class lu{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Fh(r,t){return r.transaction([Sh],t?"readwrite":"readonly").objectStore(Sh)}function pI(){const r=indexedDB.deleteDatabase(iE);return new lu(r).toPromise()}function Qp(){const r=indexedDB.open(iE,dI);return new Promise((t,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(Sh,{keyPath:rE})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(Sh)?t(a):(a.close(),await pI(),t(await Qp()))})})}async function Uv(r,t,i){const a=Fh(r,!0).put({[rE]:t,value:i});return new lu(a).toPromise()}async function mI(r,t){const i=Fh(r,!1).get(t),a=await new lu(i).toPromise();return a===void 0?null:a.value}function Lv(r,t){const i=Fh(r,!0).delete(t);return new lu(i).toPromise()}const gI=800,yI=3;class sE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qp(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>yI)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hh._getInstance(fI()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await cI(),!this.activeServiceWorker)return;this.sender=new lI(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||hI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Qp();return await Uv(t,Th,"1"),await Lv(t,Th),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>Uv(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>mI(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Lv(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=Fh(l,!1).getAll();return new lu(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sE.type="LOCAL";const _I=sE;new au(3e4,6e4);/**
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
 */function vI(r,t){return t?lr(t):(Et(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class km extends X2{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ao(t,this._buildIdpRequest())}_linkToIdToken(t,i){return ao(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return ao(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function EI(r){return eI(r.auth,new km(r),r.bypassAuthState)}function TI(r){const{auth:t,user:i}=r;return Et(i,t,"internal-error"),tI(i,new km(r),r.bypassAuthState)}async function SI(r){const{auth:t,user:i}=r;return Et(i,t,"internal-error"),WC(i,new km(r),r.bypassAuthState)}/**
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
 */class aE{constructor(t,i,a,l,c=!1){this.auth=t,this.resolver=a,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:l,tenantId:c,error:d,type:g}=t;if(d){this.reject(d);return}const y={auth:this.auth,requestUri:i,sessionId:a,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(v){this.reject(v)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return EI;case"linkViaPopup":case"linkViaRedirect":return SI;case"reauthViaPopup":case"reauthViaRedirect":return TI;default:hr(this.auth,"internal-error")}}resolve(t){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AI=new au(2e3,1e4);class Za extends aE{constructor(t,i,a,l,c){super(t,i,l,c),this.provider=a,this.authWindow=null,this.pollId=null,Za.currentPopupAction&&Za.currentPopupAction.cancel(),Za.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Et(t,this.auth,"internal-error"),t}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const t=Lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Vi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Vi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Za.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,AI.get())};t()}}Za.currentPopupAction=null;/**
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
 */const bI="pendingRedirect",nh=new Map;class wI extends aE{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=nh.get(this.auth._key());if(!t){try{const a=await RI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}nh.set(this.auth._key(),t)}return this.bypassAuthState||nh.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RI(r,t){const i=DI(t),a=II(r);if(!await a._isAvailable())return!1;const l=await a._get(i)==="true";return await a._remove(i),l}function CI(r,t){nh.set(r._key(),t)}function II(r){return lr(r._redirectPersistence)}function DI(r){return eh(bI,r.config.apiKey,r.name)}async function NI(r,t,i=!1){if(ni(r.app))return Promise.reject(Qs(r));const a=Vm(r),l=vI(a,t),d=await new wI(a,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,t)),d}/**
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
 */const OI=600*1e3;class xI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!MI(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){if(t.error&&!oE(t)){const a=t.error.code?.split("auth/")[1]||"internal-error";i.onError(Vi(this.auth,a))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=OI&&this.cachedEventUids.clear(),this.cachedEventUids.has(kv(t))}saveEventToCache(t){this.cachedEventUids.add(kv(t)),this.lastProcessedEventTime=Date.now()}}function kv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function oE({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function MI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oE(r);default:return!1}}/**
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
 */async function VI(r,t={}){return bo(r,"GET","/v1/projects",t)}/**
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
 */const UI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LI=/^https?/;async function kI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await VI(r);for(const i of t)try{if(PI(i))return}catch{}hr(r,"unauthorized-domain")}function PI(r){const t=Kp(),{protocol:i,hostname:a}=new URL(t);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&a===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!LI.test(i))return!1;if(UI.test(r))return a===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
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
 */const zI=new au(3e4,6e4);function Pv(){const r=Ui().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function BI(r){return new Promise((t,i)=>{function a(){Pv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pv(),i(Vi(r,"network-request-failed"))},timeout:zI.get()})}if(Ui().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Ui().gapi?.load)a();else{const l=KC("iframefcb");return Ui()[l]=()=>{gapi.load?a():i(Vi(r,"network-request-failed"))},FC(`${GC()}?onload=${l}`).catch(c=>i(c))}}).catch(t=>{throw ih=null,t})}let ih=null;function jI(r){return ih=ih||BI(r),ih}/**
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
 */const qI=new au(5e3,15e3),HI="__/auth/iframe",FI="emulator/auth/iframe",GI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YI(r){const t=r.config;Et(t.authDomain,r,"auth-domain-config-required");const i=t.emulator?Nm(t,FI):`https://${r.config.authDomain}/${HI}`,a={apiKey:t.apiKey,appName:r.name,v:na},l=KI.get(r.config.apiHost);l&&(a.eid=l);const c=r._getFrameworks();return c.length&&(a.fw=c.join(",")),`${i}?${tu(a).slice(1)}`}async function QI(r){const t=await jI(r),i=Ui().gapi;return Et(i,r,"internal-error"),t.open({where:document.body,url:YI(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GI,dontclear:!0},a=>new Promise(async(l,c)=>{await a.restyle({setHideOnLeave:!1});const d=Vi(r,"network-request-failed"),g=Ui().setTimeout(()=>{c(d)},qI.get());function y(){Ui().clearTimeout(g),l(a)}a.ping(y).then(y,()=>{c(d)})}))}/**
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
 */const XI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$I=500,ZI=600,JI="_blank",WI="http://localhost";class zv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t3(r,t,i,a=$I,l=ZI){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let g="";const y={...XI,width:a.toString(),height:l.toString(),top:c,left:d},v=tn().toLowerCase();i&&(g=j2(v)?JI:i),z2(v)&&(t=t||WI,y.scrollbars="yes");const S=Object.entries(y).reduce((x,[q,$])=>`${x}${q}=${$},`,"");if(LC(v)&&g!=="_self")return e3(t||"",g),new zv(null);const b=window.open(t||"",g,S);Et(b,r,"popup-blocked");try{b.focus()}catch{}return new zv(b)}function e3(r,t){const i=document.createElement("a");i.href=r,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
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
 */const n3="__/auth/handler",i3="emulator/auth/handler",r3=encodeURIComponent("fac");async function Bv(r,t,i,a,l,c){Et(r.config.authDomain,r,"auth-domain-config-required"),Et(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:a,v:na,eventId:l};if(t instanceof $2){t.setDefaultLanguage(r.languageCode),d.providerId=t.providerId||"",WS(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[S,b]of Object.entries({}))d[S]=b}if(t instanceof ou){const S=t.getScopes().filter(b=>b!=="");S.length>0&&(d.scopes=S.join(","))}r.tenantId&&(d.tid=r.tenantId);const g=d;for(const S of Object.keys(g))g[S]===void 0&&delete g[S];const y=await r._getAppCheckToken(),v=y?`#${r3}=${encodeURIComponent(y)}`:"";return`${s3(r)}?${tu(g).slice(1)}${v}`}function s3({config:r}){return r.emulator?Nm(r,i3):`https://${r.authDomain}/${n3}`}/**
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
 */const mp="webStorageSupport";class a3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eE,this._completeRedirectFn=NI,this._overrideRedirectResult=CI}async _openPopup(t,i,a,l){fr(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Bv(t,i,a,Kp(),l);return t3(t,c,Lm())}async _openRedirect(t,i,a,l){await this._originValidation(t);const c=await Bv(t,i,a,Kp(),l);return uI(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:c}=this.eventManagers[i];return l?Promise.resolve(l):(fr(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await QI(t),a=new xI(t);return i.register("authEvent",l=>(Et(l?.authEvent,t,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(mp,{type:mp},l=>{const c=l?.[0]?.[mp];c!==void 0&&i(!!c),hr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=kI(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return K2()||B2()||Mm()}}const o3=a3;var jv="@firebase/auth",qv="1.11.0";/**
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
 */class l3{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){Et(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function u3(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function c3(r){Js(new ss("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:d,authDomain:g}=a.options;Et(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const y={apiKey:d,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y2(r)},v=new qC(a,l,c,y);return QC(v,i),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),Js(new ss("auth-internal",t=>{const i=Vm(t.getProvider("auth").getImmediate());return(a=>new l3(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),xi(jv,qv,u3(r)),xi(jv,qv,"esm2020")}/**
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
 */const h3=300,f3=m1("authIdTokenMaxAge")||h3;let Hv=null;const d3=r=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>f3)return;const l=i?.token;Hv!==l&&(Hv=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function p3(r=Nh()){const t=Dh(r,"auth");if(t.isInitialized())return t.getImmediate();const i=YC(r,{popupRedirectResolver:o3,persistence:[_I,aI,eE]}),a=m1("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(a,location.origin);if(location.origin===c.origin){const d=d3(c.toString());iI(i,d,()=>d(i.currentUser)),nI(i,g=>d(g))}}const l=f1("auth");return l&&XC(i,`http://${l}`),i}function m3(){return document.getElementsByTagName("head")?.[0]??document}HC({loadJS(r){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=t,a.onerror=l=>{const c=Vi("internal-error");c.customData=l,i(c)},a.type="text/javascript",a.charset="UTF-8",m3().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});c3("Browser");/**
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
 */const lE="firebasestorage.googleapis.com",g3="storageBucket",y3=120*1e3,_3=600*1e3;/**
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
 */class Bi extends zi{constructor(t,i,a=0){super(gp(t),`Firebase Storage: ${i} (${gp(t)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Bi.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return gp(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pi;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pi||(Pi={}));function gp(r){return"storage/"+r}function v3(){const r="An unknown error occurred, please check the error payload for server response.";return new Bi(Pi.UNKNOWN,r)}function E3(){return new Bi(Pi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function T3(){return new Bi(Pi.CANCELED,"User canceled the upload/download.")}function S3(r){return new Bi(Pi.INVALID_URL,"Invalid URL '"+r+"'.")}function A3(r){return new Bi(Pi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Fv(r){return new Bi(Pi.INVALID_ARGUMENT,r)}function uE(){return new Bi(Pi.APP_DELETED,"The Firebase app was deleted.")}function b3(r){return new Bi(Pi.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ri{constructor(t,i){this.bucket=t,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,i){let a;try{a=ri.makeFromUrl(t,i)}catch{return new ri(t,"")}if(a.path==="")return a;throw A3(t)}static makeFromUrl(t,i){let a=null;const l="([A-Za-z0-9.\\-_]+)";function c(lt){lt.path.charAt(lt.path.length-1)==="/"&&(lt.path_=lt.path_.slice(0,-1))}const d="(/(.*))?$",g=new RegExp("^gs://"+l+d,"i"),y={bucket:1,path:3};function v(lt){lt.path_=decodeURIComponent(lt.path)}const S="v[A-Za-z0-9_]+",b=i.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",q=new RegExp(`^https?://${b}/${S}/b/${l}/o${x}`,"i"),$={bucket:1,path:3},Z=i===lE?"(?:storage.googleapis.com|storage.cloud.google.com)":i,X="([^?#]*)",rt=new RegExp(`^https?://${Z}/${l}/${X}`,"i"),nt=[{regex:g,indices:y,postModify:c},{regex:q,indices:$,postModify:v},{regex:rt,indices:{bucket:1,path:2},postModify:v}];for(let lt=0;lt<nt.length;lt++){const yt=nt[lt],at=yt.regex.exec(t);if(at){const A=at[yt.indices.bucket];let w=at[yt.indices.path];w||(w=""),a=new ri(A,w),yt.postModify(a);break}}if(a==null)throw S3(t);return a}}class w3{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function R3(r,t,i){let a=1,l=null,c=null,d=!1,g=0;function y(){return g===2}let v=!1;function S(...X){v||(v=!0,t.apply(null,X))}function b(X){l=setTimeout(()=>{l=null,r(q,y())},X)}function x(){c&&clearTimeout(c)}function q(X,...rt){if(v){x();return}if(X){x(),S.call(null,X,...rt);return}if(y()||d){x(),S.call(null,X,...rt);return}a<64&&(a*=2);let nt;g===1?(g=2,nt=0):nt=(a+Math.random())*1e3,b(nt)}let $=!1;function Z(X){$||($=!0,x(),!v&&(l!==null?(X||(g=2),clearTimeout(l),b(0)):X||(g=1)))}return b(0),c=setTimeout(()=>{d=!0,Z(!0)},i),Z}function C3(r){r(!1)}/**
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
 */function I3(r){return r!==void 0}function Gv(r,t,i,a){if(a<t)throw Fv(`Invalid value for '${r}'. Expected ${t} or greater.`);if(a>i)throw Fv(`Invalid value for '${r}'. Expected ${i} or less.`)}function D3(r){const t=encodeURIComponent;let i="?";for(const a in r)if(r.hasOwnProperty(a)){const l=t(a)+"="+t(r[a]);i=i+l+"&"}return i=i.slice(0,-1),i}var Ah;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Ah||(Ah={}));/**
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
 */function N3(r,t){const i=r>=500&&r<600,l=[408,429].indexOf(r)!==-1,c=t.indexOf(r)!==-1;return i||l||c}/**
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
 */class O3{constructor(t,i,a,l,c,d,g,y,v,S,b,x=!0,q=!1){this.url_=t,this.method_=i,this.headers_=a,this.body_=l,this.successCodes_=c,this.additionalRetryCodes_=d,this.callback_=g,this.errorCallback_=y,this.timeout_=v,this.progressCallback_=S,this.connectionFactory_=b,this.retry=x,this.isUsingEmulator=q,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,Z)=>{this.resolve_=$,this.reject_=Z,this.start_()})}start_(){const t=(a,l)=>{if(l){a(!1,new Kc(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const d=g=>{const y=g.loaded,v=g.lengthComputable?g.total:-1;this.progressCallback_!==null&&this.progressCallback_(y,v)};this.progressCallback_!==null&&c.addUploadProgressListener(d),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(d),this.pendingConnection_=null;const g=c.getErrorCode()===Ah.NO_ERROR,y=c.getStatus();if(!g||N3(y,this.additionalRetryCodes_)&&this.retry){const S=c.getErrorCode()===Ah.ABORT;a(!1,new Kc(!1,null,S));return}const v=this.successCodes_.indexOf(y)!==-1;a(!0,new Kc(v,c))})},i=(a,l)=>{const c=this.resolve_,d=this.reject_,g=l.connection;if(l.wasSuccessCode)try{const y=this.callback_(g,g.getResponse());I3(y)?c(y):c()}catch(y){d(y)}else if(g!==null){const y=v3();y.serverResponse=g.getErrorText(),this.errorCallback_?d(this.errorCallback_(g,y)):d(y)}else if(l.canceled){const y=this.appDelete_?uE():T3();d(y)}else{const y=E3();d(y)}};this.canceled_?i(!1,new Kc(!1,null,!0)):this.backoffId_=R3(t,i,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&C3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kc{constructor(t,i,a){this.wasSuccessCode=t,this.connection=i,this.canceled=!!a}}function x3(r,t){t!==null&&t.length>0&&(r.Authorization="Firebase "+t)}function M3(r,t){r["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function V3(r,t){t&&(r["X-Firebase-GMPID"]=t)}function U3(r,t){t!==null&&(r["X-Firebase-AppCheck"]=t)}function L3(r,t,i,a,l,c,d=!0,g=!1){const y=D3(r.urlParams),v=r.url+y,S=Object.assign({},r.headers);return V3(S,t),x3(S,i),M3(S,c),U3(S,a),new O3(v,r.method,S,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,l,d,g)}/**
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
 */function k3(r){if(r.length===0)return null;const t=r.lastIndexOf("/");return t===-1?"":r.slice(0,t)}function P3(r){const t=r.lastIndexOf("/",r.length-2);return t===-1?r:r.slice(t+1)}/**
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
 */class bh{constructor(t,i){this._service=t,i instanceof ri?this._location=i:this._location=ri.makeFromUrl(i,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,i){return new bh(t,i)}get root(){const t=new ri(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return P3(this._location.path)}get storage(){return this._service}get parent(){const t=k3(this._location.path);if(t===null)return null;const i=new ri(this._location.bucket,t);return new bh(this._service,i)}_throwIfRoot(t){if(this._location.path==="")throw b3(t)}}function Kv(r,t){const i=t?.[g3];return i==null?null:ri.makeFromBucketSpec(i,r)}function z3(r,t,i,a={}){r.host=`${t}:${i}`;const l=ea(t);l&&(rm(`https://${r.host}/b`),sm("Storage",!0)),r._isUsingEmulator=!0,r._protocol=l?"https":"http";const{mockUserToken:c}=a;c&&(r._overrideAuthToken=typeof c=="string"?c:g1(c,r.app.options.projectId))}class B3{constructor(t,i,a,l,c,d=!1){this.app=t,this._authProvider=i,this._appCheckProvider=a,this._url=l,this._firebaseVersion=c,this._isUsingEmulator=d,this._bucket=null,this._host=lE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=y3,this._maxUploadRetryTime=_3,this._requests=new Set,l!=null?this._bucket=ri.makeFromBucketSpec(l,this._host):this._bucket=Kv(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ri.makeFromBucketSpec(this._url,t):this._bucket=Kv(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Gv("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Gv("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const i=await t.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){if(ni(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new bh(this,t)}_makeRequest(t,i,a,l,c=!0){if(this._deleted)return new w3(uE());{const d=L3(t,this._appId,a,l,i,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(d),d.getPromise().then(()=>this._requests.delete(d),()=>this._requests.delete(d)),d}}async makeRequestWithTokens(t,i){const[a,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,i,a,l).getPromise()}}const Yv="@firebase/storage",Qv="0.14.0";/**
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
 */const cE="storage";function j3(r=Nh(),t){r=fs(r);const a=Dh(r,cE).getImmediate({identifier:t}),l=d1("storage");return l&&q3(a,...l),a}function q3(r,t,i,a={}){z3(r,t,i,a)}function H3(r,{instanceIdentifier:t}){const i=r.getProvider("app").getImmediate(),a=r.getProvider("auth-internal"),l=r.getProvider("app-check-internal");return new B3(i,a,l,t,na)}function F3(){Js(new ss(cE,H3,"PUBLIC").setMultipleInstances(!0)),xi(Yv,Qv,""),xi(Yv,Qv,"esm2020")}F3();const G3={apiKey:"AIzaSyDkCmnE3tlZQ4-Yb-NCGFcN8_xFgjvj-7w",authDomain:"capstone-119c2.firebaseapp.com",projectId:"capstone-119c2",storageBucket:"capstone-119c2.appspot.com",messagingSenderId:"69255526866",appId:"1:69255526866:web:1ed76f51f53ab138c1300b"},Gh=eb().length?Nh():v1(G3),K3=oC(Gh);p3(Gh);j3(Gh);var mn=function(){return mn=Object.assign||function(t){for(var i,a=1,l=arguments.length;a<l;a++){i=arguments[a];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c])}return t},mn.apply(this,arguments)};function Zl(r,t,i){if(i||arguments.length===2)for(var a=0,l=t.length,c;a<l;a++)(c||!(a in t))&&(c||(c=Array.prototype.slice.call(t,0,a)),c[a]=t[a]);return r.concat(c||Array.prototype.slice.call(t))}var ae="-ms-",ql="-moz-",Yt="-webkit-",hE="comm",Kh="rule",Pm="decl",Y3="@import",fE="@keyframes",Q3="@layer",dE=Math.abs,zm=String.fromCharCode,Xp=Object.assign;function X3(r,t){return je(r,0)^45?(((t<<2^je(r,0))<<2^je(r,1))<<2^je(r,2))<<2^je(r,3):0}function pE(r){return r.trim()}function ar(r,t){return(r=t.exec(r))?r[0]:r}function Dt(r,t,i){return r.replace(t,i)}function rh(r,t,i){return r.indexOf(t,i)}function je(r,t){return r.charCodeAt(t)|0}function go(r,t,i){return r.slice(t,i)}function Di(r){return r.length}function mE(r){return r.length}function Ul(r,t){return t.push(r),r}function $3(r,t){return r.map(t).join("")}function Xv(r,t){return r.filter(function(i){return!ar(i,t)})}var Yh=1,yo=1,gE=0,jn=0,Oe=0,wo="";function Qh(r,t,i,a,l,c,d,g){return{value:r,root:t,parent:i,type:a,props:l,children:c,line:Yh,column:yo,length:d,return:"",siblings:g}}function Yr(r,t){return Xp(Qh("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},t)}function Ka(r){for(;r.root;)r=Yr(r.root,{children:[r]});Ul(r,r.siblings)}function Z3(){return Oe}function J3(){return Oe=jn>0?je(wo,--jn):0,yo--,Oe===10&&(yo=1,Yh--),Oe}function si(){return Oe=jn<gE?je(wo,jn++):0,yo++,Oe===10&&(yo=1,Yh++),Oe}function Xs(){return je(wo,jn)}function sh(){return jn}function Xh(r,t){return go(wo,r,t)}function $p(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W3(r){return Yh=yo=1,gE=Di(wo=r),jn=0,[]}function t4(r){return wo="",r}function yp(r){return pE(Xh(jn-1,Zp(r===91?r+2:r===40?r+1:r)))}function e4(r){for(;(Oe=Xs())&&Oe<33;)si();return $p(r)>2||$p(Oe)>3?"":" "}function n4(r,t){for(;--t&&si()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return Xh(r,sh()+(t<6&&Xs()==32&&si()==32))}function Zp(r){for(;si();)switch(Oe){case r:return jn;case 34:case 39:r!==34&&r!==39&&Zp(Oe);break;case 40:r===41&&Zp(r);break;case 92:si();break}return jn}function i4(r,t){for(;si()&&r+Oe!==57;)if(r+Oe===84&&Xs()===47)break;return"/*"+Xh(t,jn-1)+"*"+zm(r===47?r:si())}function r4(r){for(;!$p(Xs());)si();return Xh(r,jn)}function s4(r){return t4(ah("",null,null,null,[""],r=W3(r),0,[0],r))}function ah(r,t,i,a,l,c,d,g,y){for(var v=0,S=0,b=d,x=0,q=0,$=0,Z=1,X=1,rt=1,ut=0,nt="",lt=l,yt=c,at=a,A=nt;X;)switch($=ut,ut=si()){case 40:if($!=108&&je(A,b-1)==58){rh(A+=Dt(yp(ut),"&","&\f"),"&\f",dE(v?g[v-1]:0))!=-1&&(rt=-1);break}case 34:case 39:case 91:A+=yp(ut);break;case 9:case 10:case 13:case 32:A+=e4($);break;case 92:A+=n4(sh()-1,7);continue;case 47:switch(Xs()){case 42:case 47:Ul(a4(i4(si(),sh()),t,i,y),y);break;default:A+="/"}break;case 123*Z:g[v++]=Di(A)*rt;case 125*Z:case 59:case 0:switch(ut){case 0:case 125:X=0;case 59+S:rt==-1&&(A=Dt(A,/\f/g,"")),q>0&&Di(A)-b&&Ul(q>32?Zv(A+";",a,i,b-1,y):Zv(Dt(A," ","")+";",a,i,b-2,y),y);break;case 59:A+=";";default:if(Ul(at=$v(A,t,i,v,S,l,g,nt,lt=[],yt=[],b,c),c),ut===123)if(S===0)ah(A,t,at,at,lt,c,b,g,yt);else switch(x===99&&je(A,3)===110?100:x){case 100:case 108:case 109:case 115:ah(r,at,at,a&&Ul($v(r,at,at,0,0,l,g,nt,l,lt=[],b,yt),yt),l,yt,b,g,a?lt:yt);break;default:ah(A,at,at,at,[""],yt,0,g,yt)}}v=S=q=0,Z=rt=1,nt=A="",b=d;break;case 58:b=1+Di(A),q=$;default:if(Z<1){if(ut==123)--Z;else if(ut==125&&Z++==0&&J3()==125)continue}switch(A+=zm(ut),ut*Z){case 38:rt=S>0?1:(A+="\f",-1);break;case 44:g[v++]=(Di(A)-1)*rt,rt=1;break;case 64:Xs()===45&&(A+=yp(si())),x=Xs(),S=b=Di(nt=A+=r4(sh())),ut++;break;case 45:$===45&&Di(A)==2&&(Z=0)}}return c}function $v(r,t,i,a,l,c,d,g,y,v,S,b){for(var x=l-1,q=l===0?c:[""],$=mE(q),Z=0,X=0,rt=0;Z<a;++Z)for(var ut=0,nt=go(r,x+1,x=dE(X=d[Z])),lt=r;ut<$;++ut)(lt=pE(X>0?q[ut]+" "+nt:Dt(nt,/&\f/g,q[ut])))&&(y[rt++]=lt);return Qh(r,t,i,l===0?Kh:g,y,v,S,b)}function a4(r,t,i,a){return Qh(r,t,i,hE,zm(Z3()),go(r,2,-2),0,a)}function Zv(r,t,i,a,l){return Qh(r,t,i,Pm,go(r,0,a),go(r,a+1,-1),a,l)}function yE(r,t,i){switch(X3(r,t)){case 5103:return Yt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Yt+r+r;case 4789:return ql+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Yt+r+ql+r+ae+r+r;case 5936:switch(je(r,t+11)){case 114:return Yt+r+ae+Dt(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Yt+r+ae+Dt(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Yt+r+ae+Dt(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Yt+r+ae+r+r;case 6165:return Yt+r+ae+"flex-"+r+r;case 5187:return Yt+r+Dt(r,/(\w+).+(:[^]+)/,Yt+"box-$1$2"+ae+"flex-$1$2")+r;case 5443:return Yt+r+ae+"flex-item-"+Dt(r,/flex-|-self/g,"")+(ar(r,/flex-|baseline/)?"":ae+"grid-row-"+Dt(r,/flex-|-self/g,""))+r;case 4675:return Yt+r+ae+"flex-line-pack"+Dt(r,/align-content|flex-|-self/g,"")+r;case 5548:return Yt+r+ae+Dt(r,"shrink","negative")+r;case 5292:return Yt+r+ae+Dt(r,"basis","preferred-size")+r;case 6060:return Yt+"box-"+Dt(r,"-grow","")+Yt+r+ae+Dt(r,"grow","positive")+r;case 4554:return Yt+Dt(r,/([^-])(transform)/g,"$1"+Yt+"$2")+r;case 6187:return Dt(Dt(Dt(r,/(zoom-|grab)/,Yt+"$1"),/(image-set)/,Yt+"$1"),r,"")+r;case 5495:case 3959:return Dt(r,/(image-set\([^]*)/,Yt+"$1$`$1");case 4968:return Dt(Dt(r,/(.+:)(flex-)?(.*)/,Yt+"box-pack:$3"+ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Yt+r+r;case 4200:if(!ar(r,/flex-|baseline/))return ae+"grid-column-align"+go(r,t)+r;break;case 2592:case 3360:return ae+Dt(r,"template-","")+r;case 4384:case 3616:return i&&i.some(function(a,l){return t=l,ar(a.props,/grid-\w+-end/)})?~rh(r+(i=i[t].value),"span",0)?r:ae+Dt(r,"-start","")+r+ae+"grid-row-span:"+(~rh(i,"span",0)?ar(i,/\d+/):+ar(i,/\d+/)-+ar(r,/\d+/))+";":ae+Dt(r,"-start","")+r;case 4896:case 4128:return i&&i.some(function(a){return ar(a.props,/grid-\w+-start/)})?r:ae+Dt(Dt(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return Dt(r,/(.+)-inline(.+)/,Yt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Di(r)-1-t>6)switch(je(r,t+1)){case 109:if(je(r,t+4)!==45)break;case 102:return Dt(r,/(.+:)(.+)-([^]+)/,"$1"+Yt+"$2-$3$1"+ql+(je(r,t+3)==108?"$3":"$2-$3"))+r;case 115:return~rh(r,"stretch",0)?yE(Dt(r,"stretch","fill-available"),t,i)+r:r}break;case 5152:case 5920:return Dt(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,l,c,d,g,y,v){return ae+l+":"+c+v+(d?ae+l+"-span:"+(g?y:+y-+c)+v:"")+r});case 4949:if(je(r,t+6)===121)return Dt(r,":",":"+Yt)+r;break;case 6444:switch(je(r,je(r,14)===45?18:11)){case 120:return Dt(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Yt+(je(r,14)===45?"inline-":"")+"box$3$1"+Yt+"$2$3$1"+ae+"$2box$3")+r;case 100:return Dt(r,":",":"+ae)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Dt(r,"scroll-","scroll-snap-")+r}return r}function wh(r,t){for(var i="",a=0;a<r.length;a++)i+=t(r[a],a,r,t)||"";return i}function o4(r,t,i,a){switch(r.type){case Q3:if(r.children.length)break;case Y3:case Pm:return r.return=r.return||r.value;case hE:return"";case fE:return r.return=r.value+"{"+wh(r.children,a)+"}";case Kh:if(!Di(r.value=r.props.join(",")))return""}return Di(i=wh(r.children,a))?r.return=r.value+"{"+i+"}":""}function l4(r){var t=mE(r);return function(i,a,l,c){for(var d="",g=0;g<t;g++)d+=r[g](i,a,l,c)||"";return d}}function u4(r){return function(t){t.root||(t=t.return)&&r(t)}}function c4(r,t,i,a){if(r.length>-1&&!r.return)switch(r.type){case Pm:r.return=yE(r.value,r.length,i);return;case fE:return wh([Yr(r,{value:Dt(r.value,"@","@"+Yt)})],a);case Kh:if(r.length)return $3(i=r.props,function(l){switch(ar(l,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ka(Yr(r,{props:[Dt(l,/:(read-\w+)/,":"+ql+"$1")]})),Ka(Yr(r,{props:[l]})),Xp(r,{props:Xv(i,a)});break;case"::placeholder":Ka(Yr(r,{props:[Dt(l,/:(plac\w+)/,":"+Yt+"input-$1")]})),Ka(Yr(r,{props:[Dt(l,/:(plac\w+)/,":"+ql+"$1")]})),Ka(Yr(r,{props:[Dt(l,/:(plac\w+)/,ae+"input-$1")]})),Ka(Yr(r,{props:[l]})),Xp(r,{props:Xv(i,a)});break}return""})}}var h4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wn={},_o=typeof process<"u"&&wn!==void 0&&(wn.REACT_APP_SC_ATTR||wn.SC_ATTR)||"data-styled",_E="active",vE="data-styled-version",$h="6.1.19",Bm=`/*!sc*/
`,Rh=typeof window<"u"&&typeof document<"u",f4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&wn!==void 0&&wn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&wn.REACT_APP_SC_DISABLE_SPEEDY!==""?wn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&wn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&wn!==void 0&&wn.SC_DISABLE_SPEEDY!==void 0&&wn.SC_DISABLE_SPEEDY!==""&&wn.SC_DISABLE_SPEEDY!=="false"&&wn.SC_DISABLE_SPEEDY),Zh=Object.freeze([]),vo=Object.freeze({});function d4(r,t,i){return i===void 0&&(i=vo),r.theme!==i.theme&&r.theme||t||i.theme}var EE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),p4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,m4=/(^-|-$)/g;function Jv(r){return r.replace(p4,"-").replace(m4,"")}var g4=/(a)(d)/gi,Yc=52,Wv=function(r){return String.fromCharCode(r+(r>25?39:97))};function Jp(r){var t,i="";for(t=Math.abs(r);t>Yc;t=t/Yc|0)i=Wv(t%Yc)+i;return(Wv(t%Yc)+i).replace(g4,"$1-$2")}var _p,TE=5381,Ja=function(r,t){for(var i=t.length;i;)r=33*r^t.charCodeAt(--i);return r},SE=function(r){return Ja(TE,r)};function AE(r){return Jp(SE(r)>>>0)}function y4(r){return r.displayName||r.name||"Component"}function vp(r){return typeof r=="string"&&!0}var bE=typeof Symbol=="function"&&Symbol.for,wE=bE?Symbol.for("react.memo"):60115,_4=bE?Symbol.for("react.forward_ref"):60112,v4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},E4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},RE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T4=((_p={})[_4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_p[wE]=RE,_p);function t1(r){return("type"in(t=r)&&t.type.$$typeof)===wE?RE:"$$typeof"in r?T4[r.$$typeof]:v4;var t}var S4=Object.defineProperty,A4=Object.getOwnPropertyNames,e1=Object.getOwnPropertySymbols,b4=Object.getOwnPropertyDescriptor,w4=Object.getPrototypeOf,n1=Object.prototype;function CE(r,t,i){if(typeof t!="string"){if(n1){var a=w4(t);a&&a!==n1&&CE(r,a,i)}var l=A4(t);e1&&(l=l.concat(e1(t)));for(var c=t1(r),d=t1(t),g=0;g<l.length;++g){var y=l[g];if(!(y in E4||i&&i[y]||d&&y in d||c&&y in c)){var v=b4(t,y);try{S4(r,y,v)}catch{}}}}return r}function Eo(r){return typeof r=="function"}function jm(r){return typeof r=="object"&&"styledComponentId"in r}function Gs(r,t){return r&&t?"".concat(r," ").concat(t):r||t||""}function Wp(r,t){if(r.length===0)return"";for(var i=r[0],a=1;a<r.length;a++)i+=r[a];return i}function Jl(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function tm(r,t,i){if(i===void 0&&(i=!1),!i&&!Jl(r)&&!Array.isArray(r))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)r[a]=tm(r[a],t[a]);else if(Jl(t))for(var a in t)r[a]=tm(r[a],t[a]);return r}function qm(r,t){Object.defineProperty(r,"toString",{value:t})}function uu(r){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var R4=(function(){function r(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return r.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},r.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,l=a.length,c=l;t>=c;)if((c<<=1)<0)throw uu(16,"".concat(t));this.groupSizes=new Uint32Array(c),this.groupSizes.set(a),this.length=c;for(var d=l;d<c;d++)this.groupSizes[d]=0}for(var g=this.indexOfGroup(t+1),y=(d=0,i.length);d<y;d++)this.tag.insertRule(g,i[d])&&(this.groupSizes[t]++,g++)},r.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),l=a+i;this.groupSizes[t]=0;for(var c=a;c<l;c++)this.tag.deleteRule(a)}},r.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],l=this.indexOfGroup(t),c=l+a,d=l;d<c;d++)i+="".concat(this.tag.getRule(d)).concat(Bm);return i},r})(),oh=new Map,Ch=new Map,lh=1,Qc=function(r){if(oh.has(r))return oh.get(r);for(;Ch.has(lh);)lh++;var t=lh++;return oh.set(r,t),Ch.set(t,r),t},C4=function(r,t){lh=t+1,oh.set(r,t),Ch.set(t,r)},I4="style[".concat(_o,"][").concat(vE,'="').concat($h,'"]'),D4=new RegExp("^".concat(_o,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),N4=function(r,t,i){for(var a,l=i.split(","),c=0,d=l.length;c<d;c++)(a=l[c])&&r.registerName(t,a)},O4=function(r,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(Bm),l=[],c=0,d=a.length;c<d;c++){var g=a[c].trim();if(g){var y=g.match(D4);if(y){var v=0|parseInt(y[1],10),S=y[2];v!==0&&(C4(S,v),N4(r,S,y[3]),r.getTag().insertRules(v,l)),l.length=0}else l.push(g)}}},i1=function(r){for(var t=document.querySelectorAll(I4),i=0,a=t.length;i<a;i++){var l=t[i];l&&l.getAttribute(_o)!==_E&&(O4(r,l),l.parentNode&&l.parentNode.removeChild(l))}};function x4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var IE=function(r){var t=document.head,i=r||t,a=document.createElement("style"),l=(function(g){var y=Array.from(g.querySelectorAll("style[".concat(_o,"]")));return y[y.length-1]})(i),c=l!==void 0?l.nextSibling:null;a.setAttribute(_o,_E),a.setAttribute(vE,$h);var d=x4();return d&&a.setAttribute("nonce",d),i.insertBefore(a,c),a},M4=(function(){function r(t){this.element=IE(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,l=0,c=a.length;l<c;l++){var d=a[l];if(d.ownerNode===i)return d}throw uu(17)})(this.element),this.length=0}return r.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},r})(),V4=(function(){function r(t){this.element=IE(t),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},r})(),U4=(function(){function r(t){this.rules=[],this.length=0}return r.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},r.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},r})(),r1=Rh,L4={isServer:!Rh,useCSSOMInjection:!f4},DE=(function(){function r(t,i,a){t===void 0&&(t=vo),i===void 0&&(i={});var l=this;this.options=mn(mn({},L4),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&Rh&&r1&&(r1=!1,i1(this)),qm(this,function(){return(function(c){for(var d=c.getTag(),g=d.length,y="",v=function(b){var x=(function(rt){return Ch.get(rt)})(b);if(x===void 0)return"continue";var q=c.names.get(x),$=d.getGroup(b);if(q===void 0||!q.size||$.length===0)return"continue";var Z="".concat(_o,".g").concat(b,'[id="').concat(x,'"]'),X="";q!==void 0&&q.forEach(function(rt){rt.length>0&&(X+="".concat(rt,","))}),y+="".concat($).concat(Z,'{content:"').concat(X,'"}').concat(Bm)},S=0;S<g;S++)v(S);return y})(l)})}return r.registerId=function(t){return Qc(t)},r.prototype.rehydrate=function(){!this.server&&Rh&&i1(this)},r.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new r(mn(mn({},this.options),t),this.gs,i&&this.names||void 0)},r.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(i){var a=i.useCSSOMInjection,l=i.target;return i.isServer?new U4(l):a?new M4(l):new V4(l)})(this.options),new R4(t)));var t},r.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},r.prototype.registerName=function(t,i){if(Qc(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},r.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(Qc(t),a)},r.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.prototype.clearRules=function(t){this.getTag().clearGroup(Qc(t)),this.clearNames(t)},r.prototype.clearTag=function(){this.tag=void 0},r})(),k4=/&/g,P4=/^\s*\/\/.*$/gm;function NE(r,t){return r.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=NE(i.children,t)),i})}function z4(r){var t,i,a,l=vo,c=l.options,d=c===void 0?vo:c,g=l.plugins,y=g===void 0?Zh:g,v=function(x,q,$){return $.startsWith(i)&&$.endsWith(i)&&$.replaceAll(i,"").length>0?".".concat(t):x},S=y.slice();S.push(function(x){x.type===Kh&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(k4,i).replace(a,v))}),d.prefix&&S.push(c4),S.push(o4);var b=function(x,q,$,Z){q===void 0&&(q=""),$===void 0&&($=""),Z===void 0&&(Z="&"),t=Z,i=q,a=new RegExp("\\".concat(i,"\\b"),"g");var X=x.replace(P4,""),rt=s4($||q?"".concat($," ").concat(q," { ").concat(X," }"):X);d.namespace&&(rt=NE(rt,d.namespace));var ut=[];return wh(rt,l4(S.concat(u4(function(nt){return ut.push(nt)})))),ut};return b.hash=y.length?y.reduce(function(x,q){return q.name||uu(15),Ja(x,q.name)},TE).toString():"",b}var B4=new DE,em=z4(),OE=Hl.createContext({shouldForwardProp:void 0,styleSheet:B4,stylis:em});OE.Consumer;Hl.createContext(void 0);function s1(){return Bn.useContext(OE)}var xE=(function(){function r(t,i){var a=this;this.inject=function(l,c){c===void 0&&(c=em);var d=a.name+c.hash;l.hasNameForId(a.id,d)||l.insertRules(a.id,d,c(a.rules,d,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,qm(this,function(){throw uu(12,String(a.name))})}return r.prototype.getName=function(t){return t===void 0&&(t=em),this.name+t.hash},r})(),j4=function(r){return r>="A"&&r<="Z"};function a1(r){for(var t="",i=0;i<r.length;i++){var a=r[i];if(i===1&&a==="-"&&r[0]==="-")return r;j4(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var ME=function(r){return r==null||r===!1||r===""},VE=function(r){var t,i,a=[];for(var l in r){var c=r[l];r.hasOwnProperty(l)&&!ME(c)&&(Array.isArray(c)&&c.isCss||Eo(c)?a.push("".concat(a1(l),":"),c,";"):Jl(c)?a.push.apply(a,Zl(Zl(["".concat(l," {")],VE(c),!1),["}"],!1)):a.push("".concat(a1(l),": ").concat((t=l,(i=c)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in h4||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function $s(r,t,i,a){if(ME(r))return[];if(jm(r))return[".".concat(r.styledComponentId)];if(Eo(r)){if(!Eo(c=r)||c.prototype&&c.prototype.isReactComponent||!t)return[r];var l=r(t);return $s(l,t,i,a)}var c;return r instanceof xE?i?(r.inject(i,a),[r.getName(a)]):[r]:Jl(r)?VE(r):Array.isArray(r)?Array.prototype.concat.apply(Zh,r.map(function(d){return $s(d,t,i,a)})):[r.toString()]}function q4(r){for(var t=0;t<r.length;t+=1){var i=r[t];if(Eo(i)&&!jm(i))return!1}return!0}var H4=SE($h),F4=(function(){function r(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&q4(t),this.componentId=i,this.baseHash=Ja(H4,i),this.baseStyle=a,DE.registerId(i)}return r.prototype.generateAndInjectStyles=function(t,i,a){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))l=Gs(l,this.staticRulesId);else{var c=Wp($s(this.rules,t,i,a)),d=Jp(Ja(this.baseHash,c)>>>0);if(!i.hasNameForId(this.componentId,d)){var g=a(c,".".concat(d),void 0,this.componentId);i.insertRules(this.componentId,d,g)}l=Gs(l,d),this.staticRulesId=d}else{for(var y=Ja(this.baseHash,a.hash),v="",S=0;S<this.rules.length;S++){var b=this.rules[S];if(typeof b=="string")v+=b;else if(b){var x=Wp($s(b,t,i,a));y=Ja(y,x+S),v+=x}}if(v){var q=Jp(y>>>0);i.hasNameForId(this.componentId,q)||i.insertRules(this.componentId,q,a(v,".".concat(q),void 0,this.componentId)),l=Gs(l,q)}}return l},r})(),UE=Hl.createContext(void 0);UE.Consumer;var Ep={};function G4(r,t,i){var a=jm(r),l=r,c=!vp(r),d=t.attrs,g=d===void 0?Zh:d,y=t.componentId,v=y===void 0?(function(lt,yt){var at=typeof lt!="string"?"sc":Jv(lt);Ep[at]=(Ep[at]||0)+1;var A="".concat(at,"-").concat(AE($h+at+Ep[at]));return yt?"".concat(yt,"-").concat(A):A})(t.displayName,t.parentComponentId):y,S=t.displayName,b=S===void 0?(function(lt){return vp(lt)?"styled.".concat(lt):"Styled(".concat(y4(lt),")")})(r):S,x=t.displayName&&t.componentId?"".concat(Jv(t.displayName),"-").concat(t.componentId):t.componentId||v,q=a&&l.attrs?l.attrs.concat(g).filter(Boolean):g,$=t.shouldForwardProp;if(a&&l.shouldForwardProp){var Z=l.shouldForwardProp;if(t.shouldForwardProp){var X=t.shouldForwardProp;$=function(lt,yt){return Z(lt,yt)&&X(lt,yt)}}else $=Z}var rt=new F4(i,x,a?l.componentStyle:void 0);function ut(lt,yt){return(function(at,A,w){var C=at.attrs,M=at.componentStyle,O=at.defaultProps,U=at.foldedComponentIds,R=at.styledComponentId,ne=at.target,de=Hl.useContext(UE),H=s1(),tt=at.shouldForwardProp||H.shouldForwardProp,ft=d4(A,de,O)||vo,At=(function(mt,vt,Nt){for(var ie,qt=mn(mn({},vt),{className:void 0,theme:Nt}),qn=0;qn<mt.length;qn+=1){var Hn=Eo(ie=mt[qn])?ie(qt):ie;for(var en in Hn)qt[en]=en==="className"?Gs(qt[en],Hn[en]):en==="style"?mn(mn({},qt[en]),Hn[en]):Hn[en]}return vt.className&&(qt.className=Gs(qt.className,vt.className)),qt})(C,A,ft),Pt=At.as||ne,D={};for(var G in At)At[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&At.theme===ft||(G==="forwardedAs"?D.as=At.forwardedAs:tt&&!tt(G,Pt)||(D[G]=At[G]));var et=(function(mt,vt){var Nt=s1(),ie=mt.generateAndInjectStyles(vt,Nt.styleSheet,Nt.stylis);return ie})(M,At),it=Gs(U,R);return et&&(it+=" "+et),At.className&&(it+=" "+At.className),D[vp(Pt)&&!EE.has(Pt)?"class":"className"]=it,w&&(D.ref=w),Bn.createElement(Pt,D)})(nt,lt,yt)}ut.displayName=b;var nt=Hl.forwardRef(ut);return nt.attrs=q,nt.componentStyle=rt,nt.displayName=b,nt.shouldForwardProp=$,nt.foldedComponentIds=a?Gs(l.foldedComponentIds,l.styledComponentId):"",nt.styledComponentId=x,nt.target=a?l.target:r,Object.defineProperty(nt,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(lt){this._foldedDefaultProps=a?(function(yt){for(var at=[],A=1;A<arguments.length;A++)at[A-1]=arguments[A];for(var w=0,C=at;w<C.length;w++)tm(yt,C[w],!0);return yt})({},l.defaultProps,lt):lt}}),qm(nt,function(){return".".concat(nt.styledComponentId)}),c&&CE(nt,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),nt}function o1(r,t){for(var i=[r[0]],a=0,l=t.length;a<l;a+=1)i.push(t[a],r[a+1]);return i}var l1=function(r){return Object.assign(r,{isCss:!0})};function LE(r){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(Eo(r)||Jl(r))return l1($s(o1(Zh,Zl([r],t,!0))));var a=r;return t.length===0&&a.length===1&&typeof a[0]=="string"?$s(a):l1($s(o1(a,t)))}function nm(r,t,i){if(i===void 0&&(i=vo),!t)throw uu(1,t);var a=function(l){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];return r(t,i,LE.apply(void 0,Zl([l],c,!1)))};return a.attrs=function(l){return nm(r,t,mn(mn({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},a.withConfig=function(l){return nm(r,t,mn(mn({},i),l))},a}var kE=function(r){return nm(G4,r)},Ct=kE;EE.forEach(function(r){Ct[r]=kE(r)});function K4(r){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=Wp(LE.apply(void 0,Zl([r],t,!1))),l=AE(a);return new xE(l,a)}const Y4="/repo/assets/Coak-DECjXcFO.png",Q4={};function PE(r=void 0){const t=r??{},i=Number(t.distanceKm)||0,a=Number(t.areaKm2)||0,l=Number(t.gyroCombined)||0,c=i>=4?3:i>=2?2:1,d=a>=.7?3:a>=.2?2:1,g=l>=.02?3:l>=.01?2:1;return[{key:"distance",category:"거리",level:c},{key:"area",category:"면적",level:d},{key:"gyro",category:"자이로",level:g}]}function zE(r,t){const i=import.meta&&Q4?"/repo/":"/";return r==="distance"?`${i}Badge/Badge_Length_${t}.svg`:r==="area"?`${i}Badge/Badge_Width_${t}.svg`:r==="gyro"?`${i}Badge/Badge_Gyro_${t}.svg`:""}const BE="/repo/assets/Rank1-DcYBW496.svg",jE="/repo/assets/Rank2-CHwKJAFY.svg",qE="/repo/assets/Rank3-UZrXxSfg.svg",X4=Ct.div`
  position: relative;
  width: 280px;
  height: ${({$ranking:r})=>r===1?"167px":r===2?"134px":r===3?"130px":"123px"};
  background: ${({$ranking:r})=>r===1?"radial-gradient(60.22% 100% at 50% 0%, #FFF 70%, rgba(255, 241, 186, 0.40) 100%), #FFF;":r===2?"radial-gradient(60.22% 100% at 50% 0%, #FFF 70%, rgba(235, 235, 235, 0.80) 100%), #FFF;":r===3?"radial-gradient(60.22% 100% at 50% 0%, #FFF 70%, rgba(243, 228, 223, 0.60) 100%), #FFF;":"#fff"};
  color: ${({$ranking:r})=>r===1?"#222":r===2?"#333":r===3?"#444":"#000"};
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({$ranking:r})=>r===1?" 35px 24px 16px 24px":"20px 24px 16px 24px"};
  align-items: center;
  gap: ${({$ranking:r})=>r===1?"20px":"14px"};

  box-shadow: ${({$ranking:r})=>r===1?"2px 2px 2px 0 #FFF1BA inset, -2px -2px 1.6px 0 rgba(255, 255, 255, 0.80) inset, 0 0 20px 0 rgba(206, 208, 255, 0.60), -2px -2px 5px 0 rgba(255, 255, 255, 0.40), 2px 2px 5px 0 rgba(255, 255, 255, 0.40) inset;":r===2?"0 0 20px 0 rgba(206, 208, 255, 0.60), -2px -2px 5px 0 rgba(255, 255, 255, 0.40), 2px 2px 5px 0 rgba(255, 255, 255, 0.40), 2px 2px 2px 0 #EBEBEB inset, -2px -2px 1.6px 0 rgba(255, 255, 255, 0.80) inset;":r===3?"0 0 20px 0 rgba(206, 208, 255, 0.60), -2px -2px 5px 0 rgba(255, 255, 255, 0.40), 2px 2px 5px 0 rgba(255, 255, 255, 0.40), 2px 2px 2px 0 #F3E4DF inset, -2px -2px 1.6px 0 rgba(255, 255, 255, 0.80) inset":"0px 4px 16px rgba(0, 0, 0, 0.1);"};

  border: ${({$ranking:r})=>r===1?"2px solid #FFEFB0":r===2?"2px solid #E0E0E0":r===3?"2px solid #EEDDD3":"2px solid #eee"};

  z-index: 2;
`,$4=Ct.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`,Z4=Ct.p`
  font-family: Paperlogy;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.4px;
  color: ${({$ranking:r})=>r===1?" #F4B12A;":r===2?" #515457;":r===3?" #A05A42;":" #eee"};
  font-size: ${({$ranking:r})=>r===1?"28px":r===2?"20px":r===3?"18px":"20px"};
`,J4=Ct.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,W4=Ct.div`
  font-family: Paperlogy;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.48px;

  color: ${({$ranking:r})=>r===1?" #5C410B":r===2?" #0B0C0D":r===3?" #4C1E0F":" #eee"};

  font-size: ${({$ranking:r})=>r===1?"24px":r===2?"20px":r===3?"18px":"20px"};
`,t6=Ct.div`
  font-family: Paperlogy;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  letter-spacing: -0.32px;

  color: ${({$ranking:r})=>r===1?" #5C410B":r===2?" #0B0C0D":r===3?" #4C1E0F":" #eee"};

  font-size: ${({$ranking:r})=>r===1?"16px":"14px"};
`,e6=Ct.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 5px;
`;Ct.div`
  width: 48px;
  height: 48px;
  background: #222;
`;const n6=Ct.img`
  width: ${({$ranking:r})=>r===1?"60px":r===2?"40px":"36px"};
  height: ${({$ranking:r})=>r===1?"60px":r===2?"40px":"36px"};
  position: absolute;
  bottom: ${({$ranking:r})=>r===1?"140px":r===2?"118px":r===3?"112px":"111px"};
`;function i6({ranking:r,user:t}){const i=Bn.useMemo(()=>PE(t??{}),[t]),a=r===1?BE:r===2?jE:r===3?qE:null;return ht.jsxs(X4,{$ranking:r,children:[a&&ht.jsx(n6,{$ranking:r,src:a,alt:`Rank${r}`}),ht.jsxs($4,{children:[ht.jsx(Z4,{$ranking:r,children:(()=>{const l=t&&(t.nickname||t.userName||t.name)||"-";return l.length>6?l.slice(0,6)+"...":l})()}),ht.jsxs(J4,{children:[ht.jsx(W4,{$ranking:r,children:t&&typeof t.distanceKm=="number"?t.distanceKm.toFixed(2):t&&!isNaN(Number(t.distanceKm))?Number(t.distanceKm).toFixed(2):"-"}),ht.jsx(t6,{$ranking:r,children:"km"})]})]}),ht.jsx(e6,{children:i.map(l=>ht.jsx("img",{src:zE(l.key,l.level),alt:`${l.category} Lv.${l.level}`,style:{width:32,height:32}},l.key))})]})}const r6=Ct.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: center;
  padding: 0px 60px 0px 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  position: relative;
`,s6=Ct.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
`,a6=Ct.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  & > img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }

  & > p {
    color: #fff;
    font-family: Paperlogy;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 28px */
    letter-spacing: -0.56px;
  }
`;Ct.p`
  color: #f6f7fb;
  font-family: Paperlogy;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`;const o6=Ct.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 4px;
`,l6=Ct.div`
  position: absolute;
  bottom: -19px;

  width: 934px;
  height: 38px;
  flex-shrink: 0;

  border-radius: 934px;
  background: rgba(255, 255, 255, 0.18);

  filter: blur(10px);

  z-index: 1;
`,u6=Ct.div`
  position: absolute;
  bottom: -6px;

  width: 934px;
  height: 12px;
  flex-shrink: 0;

  border-radius: 934px;
  background: rgba(255, 255, 255, 0.18);

  filter: blur(3.4000000953674316px);

  z-index: 1;
`;function c6({userFields:r}){const t=[...r||[]].filter(l=>typeof l.distanceKm=="number").sort((l,c)=>c.distanceKm-l.distanceKm).slice(0,3),a=[1,0,2].map(l=>t[l]||null);return Bn.useEffect(()=>{console.log("[TopRanking] userFields:",r),console.log("[TopRanking] top3:",t),console.log("[TopRanking] top3Ordered:",a)},[r]),ht.jsxs(r6,{children:[ht.jsx(s6,{children:ht.jsx(a6,{children:ht.jsx("img",{src:"/repo/Top10.svg",alt:"오늘의 TOP3",style:{height:52,width:"auto"}})})}),ht.jsx(o6,{children:a.map((l,c)=>ht.jsx(i6,{ranking:c===0?2:c===1?1:3,user:l},l?l.id:c))}),ht.jsx(l6,{}),ht.jsx(u6,{})]})}const h6="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.4751%202.10742C16.5354%201.97119%2016.7256%201.96273%2016.7983%202.09277L20.4536%208.62988C20.5122%208.73497%2020.4537%208.86645%2020.3364%208.89355L13.0396%2010.5801C12.8945%2010.6136%2012.7735%2010.4672%2012.8335%2010.3311L13.9956%207.70508C13.1025%207.45743%2012.1567%207.4394%2011.2485%207.66016C10.1094%207.93715%209.08943%208.57385%208.34033%209.47559C7.59132%2010.3773%207.15279%2011.4965%207.08936%2012.667C7.02599%2013.8377%207.34132%2014.9982%207.98877%2015.9756C8.63619%2016.9529%209.5815%2017.6954%2010.6841%2018.0938C11.7868%2018.492%2012.9892%2018.5246%2014.1118%2018.1865C15.2342%2017.8484%2016.2182%2017.1577%2016.9175%2016.2168C17.542%2015.3764%2017.9094%2014.3763%2017.981%2013.3369C17.9951%2013.1306%2018.1619%2012.962%2018.3687%2012.9619H21.2017C21.4083%2012.9621%2021.5764%2013.1304%2021.5679%2013.3369C21.4928%2015.1465%2020.8753%2016.8952%2019.7915%2018.3535C18.6331%2019.9121%2017.0035%2021.0562%2015.144%2021.6162C13.2845%2022.1762%2011.2938%2022.1226%209.46729%2021.4629C7.64085%2020.8032%206.07586%2019.5721%205.00342%2017.9531C3.93097%2016.3341%203.40823%2014.4128%203.51318%2012.4736C3.61817%2010.5345%204.34452%208.6803%205.58545%207.18652C6.82639%205.69276%208.51582%204.63842%2010.4028%204.17969C12.0788%203.77228%2013.8316%203.85518%2015.4556%204.40918L16.4751%202.10742Z'%20fill='%235E66FF'/%3e%3c/svg%3e",f6=Ct.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;

  border-radius: 16px;
  border: ${({$highlight:r})=>r?"2px solid #5E66FF":"2px solid transparent"};

  background: ${({$ranking:r})=>r===1?"linear-gradient(90deg, #FFF 57.48%, #FFF1BA 100%);":r===2?"linear-gradient(90deg, #FFF 57.48%, #EBEBEB 100%);":r===3?"linear-gradient(90deg, #FFF 57.48%, #F3E4DF 100%);":"rgba(255, 255, 255, 0.25)"};

  box-shadow: ${({$ranking:r})=>r===1?"0 0 40px 0 #CED0FF, -2px -2px 10px 0 rgba(255, 255, 255, 0.80), 2px 2px 10px 0 rgba(255, 255, 255, 0.80), 2px 2px 2px 0 #FFF1BA inset, -2px -2px 1.6px 0 rgba(255, 255, 255, 0.80) inset;":r===2||r===3?"0 0 40px 0 #CED0FF, -2px -2px 10px 0 rgba(255, 255, 255, 0.80), 2px 2px 10px 0 rgba(255, 255, 255, 0.80), 2px 2px 2px 0 #EBEBEB inset, -2px -2px 1.6px 0 rgba(255, 255, 255, 0.80) inset;":"none"};
`,d6=Ct.div`
  width: 100px;
  display: flex;
  justify-content: center;
  padding: 12px 0px;
`,p6=Ct.div`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 8px;
  background: #f9f8ff;

  color: var(--Gray-Gray8, #2f3237);
  text-align: center;
  font-family: Paperlogy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
`,m6=Ct.div`
  width: 380px;
  padding: 12px 16px;

  color: ${({$ranking:r})=>r===1?" #F4B12A;":r===2?" #515457;":r===3?" #A05A42;":" #2f3237"};
  font-family: Paperlogy;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`,g6=Ct.div`
  width: 244px;
  padding: 12px 16px;
`,y6=Ct.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
`;Ct.div`
  width: 36px;
  height: 36px;
  background: #222;
`;const _6=Ct.div`
  width: 132px;
  padding: 12px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 2px;
`,v6=Ct.div`
  color: ${({$ranking:r})=>r===1?" #5C410B;":r===2?" #0B0C0D;":r===3?" #4C1E0F;":" #1f2125"};
  font-family: Paperlogy;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`,E6=Ct.div`
  color: ${({$ranking:r})=>r===1?" #5C410B;":r===2?" #0B0C0D;":r===3?" #4C1E0F;":" #1f2125"};
  font-family: Paperlogy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: -0.32px;
`;function T6({ranking:r,user:t,highlight:i,...a}){const l=Bn.useMemo(()=>PE(t??{}),[t]),c=r===1?BE:r===2?jE:r===3?qE:null;return ht.jsxs(f6,{$ranking:r,$highlight:i,...a,children:[ht.jsx(d6,{$ranking:r,children:c?ht.jsx("img",{src:c,alt:`Rank${r}`,style:{width:40,height:40}}):ht.jsx(p6,{children:r})}),ht.jsx(m6,{$ranking:r,children:t&&(t.nickname||t.userName||t.name)||"-"}),ht.jsx(g6,{children:ht.jsx(y6,{children:l.map(d=>ht.jsx("img",{src:zE(d.key,d.level),alt:`${d.category} Lv.${d.level}`,style:{width:28,height:28}},d.key))})}),ht.jsxs(_6,{$ranking:r,children:[ht.jsx(v6,{$ranking:r,children:t&&!isNaN(Number(t.distanceKm))?Number(t.distanceKm).toFixed(2):"-"}),ht.jsx(E6,{$ranking:r,children:"km"})]})]})}const S6=Ct.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 80px 60px;
`,A6=Ct.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 14px;
`,b6=Ct.div`
  width: 100%;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  border-radius: 24px;
  background: rgba(245, 246, 248, 0.66);
`,w6=Ct.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  & > p:nth-child(1) {
    color: var(--Gray-White, #fff);
    font-family: Paperlogy;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 28px */
  }

  & > p:nth-child(2) {
    color: var(--Gray-Gray1, #f6f7fb);
    font-family: Paperlogy;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 20px */
    letter-spacing: -0.4px;
  }
`,R6=Ct.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 14px 20px;

  border-radius: 100px;
  border: 2px solid #969cff;
  background: #f7fbff;

  & > p {
    color: var(--Primary-Primary, #5e66ff);
    font-family: Paperlogy;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 18px */
    letter-spacing: -0.36px;
  }
`,C6=Ct.div`
  width: 100%;
  display: flex;
  align-items: center;

  padding: 8px 0px;

  color: var(--Gray-Gray9, #1f2125);
  font-family: Paperlogy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  letter-spacing: -0.32px;
`,I6=Ct.div`
  width: 100px;
  display: flex;
  justify-content: center;
`,D6=Ct.div`
  width: 380px;
  padding-left: 16px;
`,N6=Ct.div`
  width: 244px;
  padding-left: 16px;
`,O6=Ct.div`
  width: 132px;
  padding-left: 16px;
`,x6=Ct.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;function M6({userFields:r}){const t=()=>{window.location.reload()},i=Bn.useMemo(()=>[...r||[]].filter(l=>!isNaN(Number(l.distanceKm))).sort((l,c)=>Number(c.distanceKm)-Number(l.distanceKm)),[r]),a=Bn.useMemo(()=>{if(!r||r.length===0)return null;const l=d=>{if(!d)return 0;if(typeof d=="number")return d;if(typeof d=="string"){const g=Date.parse(d);return isNaN(g)?0:g}return typeof d=="object"&&typeof d.seconds=="number"?d.seconds*1e3+(d.nanoseconds?d.nanoseconds/1e6:0):0};let c=r[0];for(const d of r)l(d.createdAt)>l(c.createdAt)&&(c=d);return c?.id||null},[r]);return Bn.useEffect(()=>{if(!a)return;const l=document.querySelector(`[data-user-id="${a}"]`);l&&l.scrollIntoView&&l.scrollIntoView({behavior:"smooth",block:"center"})},[a]),ht.jsxs(S6,{children:[ht.jsxs(A6,{children:[ht.jsx(w6,{children:ht.jsx("img",{src:"/repo/11.svg",alt:"전체 랭킹 안내",style:{height:48}})}),ht.jsxs(R6,{onClick:t,children:[ht.jsx("img",{src:h6}),ht.jsx("p",{children:"새로 고침"})]})]}),ht.jsxs(b6,{children:[ht.jsxs(C6,{children:[ht.jsx(I6,{children:"랭킹"}),ht.jsx(D6,{children:"닉네임"}),ht.jsx(N6,{children:"획득배지"}),ht.jsx(O6,{children:"거리"})]}),ht.jsx(x6,{children:i.map((l,c)=>ht.jsx(T6,{ranking:c+1,user:l,highlight:l.id===a,"data-user-id":l.id},l.id))})]})]})}const V6="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_ng_6310_8404)'%3e%3cpath%20d='M13.8558%200.883515C13.9906%200.519305%2014.5057%200.519304%2014.6405%200.883514L17.3222%208.13072C17.7459%209.27578%2018.6487%2010.1786%2019.7938%2010.6023L27.041%2013.284C27.4052%2013.4188%2027.4052%2013.9339%2027.041%2014.0687L19.7938%2016.7504C18.6487%2017.1741%2017.7459%2018.0769%2017.3222%2019.222L14.6405%2026.4692C14.5057%2026.8334%2013.9906%2026.8334%2013.8558%2026.4692L11.1741%2019.222C10.7504%2018.0769%209.84756%2017.1741%208.7025%2016.7504L1.45529%2014.0687C1.09108%2013.9339%201.09108%2013.4188%201.45529%2013.284L8.7025%2010.6023C9.84756%2010.1786%2010.7504%209.27578%2011.1741%208.13072L13.8558%200.883515Z'%20fill='white'%20fill-opacity='0.8'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_ng_6310_8404'%20x='0.763794'%20y='0.192017'%20width='26.9685'%20height='26.9685'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeTurbulence%20type='fractalNoise'%20baseFrequency='4.7808599472045898%204.7808599472045898'%20stitchTiles='stitch'%20numOctaves='3'%20result='noise'%20seed='9067'%20/%3e%3cfeColorMatrix%20in='noise'%20type='luminanceToAlpha'%20result='alphaNoise'%20/%3e%3cfeComponentTransfer%20in='alphaNoise'%20result='coloredNoise1'%3e%3cfeFuncA%20type='discrete'%20tableValues='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%201%201%201%201%201%201%201%201%201%201%201%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20'/%3e%3c/feComponentTransfer%3e%3cfeComposite%20operator='in'%20in2='shape'%20in='coloredNoise1'%20result='noise1Clipped'%20/%3e%3cfeFlood%20flood-color='%234081F9'%20result='color1Flood'%20/%3e%3cfeComposite%20operator='in'%20in2='noise1Clipped'%20in='color1Flood'%20result='color1'%20/%3e%3cfeMerge%20result='effect1_noise_6310_8404'%3e%3cfeMergeNode%20in='shape'%20/%3e%3cfeMergeNode%20in='color1'%20/%3e%3c/feMerge%3e%3cfeTurbulence%20type='fractalNoise'%20baseFrequency='2.3904299736022949%202.3904299736022949'%20numOctaves='3'%20seed='1637'%20/%3e%3cfeDisplacementMap%20in='effect1_noise_6310_8404'%20scale='0.83666956424713135'%20xChannelSelector='R'%20yChannelSelector='G'%20result='displacedImage'%20width='100%25'%20height='100%25'%20/%3e%3cfeMerge%20result='effect2_texture_6310_8404'%3e%3cfeMergeNode%20in='displacedImage'/%3e%3c/feMerge%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",U6="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_ng_6310_8405)'%3e%3cpath%20d='M8.36085%201.46066C8.49562%201.09645%209.01075%201.09645%209.14552%201.46066L10.3208%204.63683C10.7445%205.78189%2011.6473%206.6847%2012.7924%207.10841L15.9686%208.2837C16.3328%208.41847%2016.3328%208.9336%2015.9686%209.06837L12.7924%2010.2437C11.6473%2010.6674%2010.7445%2011.5702%2010.3208%2012.7152L9.14552%2015.8914C9.01075%2016.2556%208.49562%2016.2556%208.36085%2015.8914L7.18556%2012.7152C6.76185%2011.5702%205.85904%2010.6674%204.71397%2010.2437L1.53781%209.06837C1.1736%208.9336%201.1736%208.41847%201.53781%208.2837L4.71397%207.10841C5.85904%206.6847%206.76185%205.78189%207.18556%204.63683L8.36085%201.46066Z'%20fill='white'%20fill-opacity='0.85'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_ng_6310_8405'%20x='0.846314'%20y='0.769165'%20width='15.8137'%20height='15.8142'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeTurbulence%20type='fractalNoise'%20baseFrequency='4.7808599472045898%204.7808599472045898'%20stitchTiles='stitch'%20numOctaves='3'%20result='noise'%20seed='9067'%20/%3e%3cfeColorMatrix%20in='noise'%20type='luminanceToAlpha'%20result='alphaNoise'%20/%3e%3cfeComponentTransfer%20in='alphaNoise'%20result='coloredNoise1'%3e%3cfeFuncA%20type='discrete'%20tableValues='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%201%201%201%201%201%201%201%201%201%201%201%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20'/%3e%3c/feComponentTransfer%3e%3cfeComposite%20operator='in'%20in2='shape'%20in='coloredNoise1'%20result='noise1Clipped'%20/%3e%3cfeFlood%20flood-color='%234081F9'%20result='color1Flood'%20/%3e%3cfeComposite%20operator='in'%20in2='noise1Clipped'%20in='color1Flood'%20result='color1'%20/%3e%3cfeMerge%20result='effect1_noise_6310_8405'%3e%3cfeMergeNode%20in='shape'%20/%3e%3cfeMergeNode%20in='color1'%20/%3e%3c/feMerge%3e%3cfeTurbulence%20type='fractalNoise'%20baseFrequency='2.3904299736022949%202.3904299736022949'%20numOctaves='3'%20seed='1637'%20/%3e%3cfeDisplacementMap%20in='effect1_noise_6310_8405'%20scale='0.83666956424713135'%20xChannelSelector='R'%20yChannelSelector='G'%20result='displacedImage'%20width='100%25'%20height='100%25'%20/%3e%3cfeMerge%20result='effect2_texture_6310_8405'%3e%3cfeMergeNode%20in='displacedImage'/%3e%3c/feMerge%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",L6="data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_ng_6310_8406)'%3e%3cpath%20d='M9.95365%201.14035C10.0884%200.776139%2010.6036%200.77614%2010.7383%201.14035L12.5403%206.01015C12.964%207.15522%2013.8668%208.05803%2015.0119%208.48174L19.8817%2010.2837C20.2459%2010.4185%2020.2459%2010.9336%2019.8817%2011.0684L15.0119%2012.8704C13.8668%2013.2941%2012.964%2014.1969%2012.5403%2015.342L10.7383%2020.2118C10.6035%2020.576%2010.0884%2020.576%209.95365%2020.2118L8.15166%2015.342C7.72795%2014.1969%206.82514%2013.2941%205.68007%2012.8704L0.810271%2011.0684C0.446061%2010.9336%200.446062%2010.4185%200.810271%2010.2837L5.68007%208.48174C6.82514%208.05802%207.72795%207.15521%208.15166%206.01015L9.95365%201.14035Z'%20fill='white'%20fill-opacity='0.6'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_ng_6310_8406'%20x='0.118775'%20y='0.448853'%20width='20.4543'%20height='20.4548'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeTurbulence%20type='fractalNoise'%20baseFrequency='4.7808599472045898%204.7808599472045898'%20stitchTiles='stitch'%20numOctaves='3'%20result='noise'%20seed='9067'%20/%3e%3cfeColorMatrix%20in='noise'%20type='luminanceToAlpha'%20result='alphaNoise'%20/%3e%3cfeComponentTransfer%20in='alphaNoise'%20result='coloredNoise1'%3e%3cfeFuncA%20type='discrete'%20tableValues='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%201%201%201%201%201%201%201%201%201%201%201%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20'/%3e%3c/feComponentTransfer%3e%3cfeComposite%20operator='in'%20in2='shape'%20in='coloredNoise1'%20result='noise1Clipped'%20/%3e%3cfeFlood%20flood-color='%234081F9'%20result='color1Flood'%20/%3e%3cfeComposite%20operator='in'%20in2='noise1Clipped'%20in='color1Flood'%20result='color1'%20/%3e%3cfeMerge%20result='effect1_noise_6310_8406'%3e%3cfeMergeNode%20in='shape'%20/%3e%3cfeMergeNode%20in='color1'%20/%3e%3c/feMerge%3e%3cfeTurbulence%20type='fractalNoise'%20baseFrequency='2.3904299736022949%202.3904299736022949'%20numOctaves='3'%20seed='1637'%20/%3e%3cfeDisplacementMap%20in='effect1_noise_6310_8406'%20scale='0.83666956424713135'%20xChannelSelector='R'%20yChannelSelector='G'%20result='displacedImage'%20width='100%25'%20height='100%25'%20/%3e%3cfeMerge%20result='effect2_texture_6310_8406'%3e%3cfeMergeNode%20in='displacedImage'/%3e%3c/feMerge%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",k6=Ct.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #696eff 0%, #c9cbff 100%), #fff;
  /* 스크롤 가능하도록 auto로 변경 */
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,P6=Ct.div`
  width: 100%;

  padding-top: 88px;
  padding-bottom: 71px;
  display: flex;
  justify-content: center;
`,Tp=K4`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,z6=Ct.div`
  position: relative;
  & > p {
    color: var(--Gray-White, #fff);
    font-family: Jalnan;
    font-size: 64px;
    font-weight: 400; /* Jalnan 제공 가중치에 맞춰 faux-bold 방지 */
    letter-spacing: -1.28px;
  }

  /* 타이틀 SVG 이미지 사이즈 */
  & > img.title {
    display: block;
    height: 64px;
  }

  & > img:nth-child(1) {
    position: absolute;
    top: -16px;
    left: -36px;
    rotate: 6deg;
    animation: ${Tp} 2s infinite;
    animation-delay: 0s;
  }

  & > img:nth-child(2) {
    position: absolute;
    top: -16px;
    right: -16px;
    rotate: -6deg;
    animation: ${Tp} 2.5s infinite;
    animation-delay: 0.4s;
  }

  & > img:nth-child(3) {
    position: absolute;
    top: -4px;
    right: -36px;
    rotate: -14deg;
    animation: ${Tp} 3.2s infinite;
    animation-delay: 0.8s;
  }
`,B6=Ct.div`
  position: absolute;
  top: 60px;
  right: 60px;
  width: 60px;
  height: 60px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;function j6(){const[r,t]=Bn.useState([]);return Bn.useEffect(()=>{console.log("Firebase App Name:",Gh.name),(async()=>{try{const l=(await yC(aC(K3,"userFields"))).docs.map(c=>({id:c.id,...c.data()}));t(l),console.log("userFields 컬렉션 데이터:",l)}catch(a){console.error("userFields 데이터 불러오기 오류:",a)}})()},[]),ht.jsxs(k6,{children:[ht.jsxs(P6,{children:[ht.jsxs(z6,{children:[ht.jsx("img",{src:V6}),ht.jsx("img",{src:U6}),ht.jsx("img",{src:L6}),ht.jsx("img",{src:"/repo/Ranking.svg",alt:"Ranking",className:"title"})]}),ht.jsx(B6,{children:ht.jsx("img",{src:Y4,alt:"Ranking Logo"})})]}),ht.jsx(c6,{userFields:r}),ht.jsx(M6,{userFields:r})]})}function q6(){return ht.jsx(ht.Fragment,{children:ht.jsx(j6,{})})}DS.createRoot(document.getElementById("root")).render(ht.jsx(Bn.StrictMode,{children:ht.jsx(q6,{})}));
