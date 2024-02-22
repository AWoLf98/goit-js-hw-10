var E=(o,t,s)=>{if(!t.has(o))throw TypeError("Cannot "+s)};var n=(o,t,s)=>(E(o,t,"read from private field"),s?s.call(o):t.get(o)),d=(o,t,s)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,s)},c=(o,t,s,i)=>(E(o,t,"write to private field"),i?i.call(o,s):t.set(o,s),s);var h=(o,t,s)=>(E(o,t,"access private method"),s);/* empty css                     */import{f as A,i as x}from"./assets/vendor-77e16229.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const k=document.querySelector("input#datetime-picker"),N=document.querySelector("button[data-start]");var p,f,l,y,b,L,O,D,P,m,g;const u=class u{constructor(t=new Date,s="input#datetime-picker",i=document.querySelector("button[data-start]"),e=1e3){d(this,L);d(this,p,void 0);d(this,f,void 0);d(this,l,void 0);d(this,y,void 0);d(this,b,void 0);c(this,f,null),c(this,l,0),c(this,p,t),c(this,y,e),c(this,b,i),this.disabledInput(),A(s,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:a=>{c(this,p,a[0])}})}startTimer(){if(this.disabledInput(),c(this,l,Date.parse(n(this,p))-Date.now()),n(this,l)<0){x.show({icon:"fa-regular fa-circle-xmark",close:!1,iconColor:"#fff",position:"topRight",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",messageColor:"#fff",message:"Please choose a date in the future"});return}n(this,f)&&clearInterval(n(this,f)),c(this,f,setInterval(h(this,L,O).bind(this),n(this,y)))}disabledInput(){n(this,b).setAttribute("disabled","disabled")}undisabledInput(){Date.parse(n(this,p))-Date.now()<0?n(this,b).removeAttribute("disabled"):this.disabledInput()}};p=new WeakMap,f=new WeakMap,l=new WeakMap,y=new WeakMap,b=new WeakMap,L=new WeakSet,O=function(){var S,w,B,M,T;if(c(this,l,n(this,l)-n(this,y)),n(this,l)<=0){clearInterval(n(this,f));return}const{days:t,hours:s,minutes:i,seconds:e}=h(S=u,D,P).call(S,n(this,l)),r=document.querySelector("span[data-seconds]"),a=document.querySelector("span[data-minutes]"),I=document.querySelector("span[data-hours]"),C=document.querySelector("span[data-days]");r||a||I||C?(r.textContent=h(w=u,m,g).call(w,e),a.textContent=h(B=u,m,g).call(B,i),I.textContent=h(M=u,m,g).call(M,s),C.textContent=h(T=u,m,g).call(T,t)):x.show({icon:"fa-regular fa-circle-xmark",close:!1,iconColor:"#fff",position:"topRight",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",messageColor:"#fff",message:"Error interface"})},D=new WeakSet,P=function(t){const a=Math.floor(t/864e5),I=Math.floor(t%864e5/36e5),C=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:I,minutes:C,seconds:S}},m=new WeakSet,g=function(t){return t.toString().padStart(2,"0")},d(u,D),d(u,m);let q=u;const v=new q;N.addEventListener("click",v.startTimer.bind(v));k.addEventListener("input",v.undisabledInput.bind(v));
//# sourceMappingURL=commonHelpers.js.map