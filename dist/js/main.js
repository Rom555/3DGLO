(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let r;const m=function(e){return String(e).length<2?"0"+e:e};r=setInterval((()=>{let e=(()=>{let e=(new Date("24 february 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining<=0?clearInterval(r):(t.textContent=m(e.hours),n.textContent=m(e.minutes),o.textContent=m(e.seconds))}),1e3)})()})();