(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let r;const c=function(e){return String(e).length<2?"0"+e:e};r=setInterval((()=>{let e=(()=>{let e=(new Date("24 february 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining<=0?clearInterval(r):(t.textContent=c(e.hours),n.textContent=c(e.minutes),o.textContent=c(e.seconds))}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),r=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",r),n.addEventListener("click",r),o.forEach((e=>e.addEventListener("click",r)))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-content"),o=t.querySelector(".popup-close");e.forEach((e=>e.addEventListener("click",(()=>{t.style.display="block",window.screen.width>=768&&(()=>{let e,t=-10;n.style.top="0",n.style.opacity="0";const o=()=>{t++,e=requestAnimationFrame(o),t>10?cancelAnimationFrame(e):(n.style.top=t+"%",n.style.opacity=.05*(t+10))};e=requestAnimationFrame(o)})()})))),o.addEventListener("click",(()=>{t.style.display="none"}))})(),[...document.querySelectorAll("menu>ul>li>a"),document.querySelector("main>a")].forEach((e=>{const t=e.attributes.href.value;e.addEventListener("click",(()=>{event.preventDefault(),document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))}))})();