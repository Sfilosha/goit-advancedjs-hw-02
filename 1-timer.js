/* empty css                      */import{f,i as d}from"./assets/vendor-BbSUbo7J.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function h(t){const o=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:n,minutes:l,seconds:m}}const c={userSelectedDate:null,intervalId:null,elements:{days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")},start(){this.intervalId=setInterval(()=>{const t=this.userSelectedDate.getTime()-Date.now();if(t<=0){this.stop();return}const{days:r,hours:i,minutes:s,seconds:e}=h(t);this.elements.days.textContent=this.addLeadingZero(r),this.elements.hours.textContent=this.addLeadingZero(i),this.elements.minutes.textContent=this.addLeadingZero(s),this.elements.seconds.textContent=this.addLeadingZero(e)},1e3)},stop(){clearInterval(this.intervalId)},addLeadingZero(t){return String(t).padStart(2,"0")}},u={enableTime:!0,time_24hr:!0,enableSeconds:!1,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0].getTime()-u.defaultDate.getTime()<=0){d.show({message:"Please choose a date in the future",backgroundColor:"red",messageColor:"white",position:"topRight",progressBar:!1,close:!1}),a.setAttribute("disabled","");return}a.removeAttribute("disabled"),d.destroy(),c.userSelectedDate=t[0]}};f("#datetime-picker",u);const a=document.querySelector("button[data-start]");a.addEventListener("click",t=>c.start());
//# sourceMappingURL=1-timer.js.map