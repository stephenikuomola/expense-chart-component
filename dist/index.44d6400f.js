function e(e){return e&&e.__esModule?e.default:e}var t={};t=JSON.parse('[{"day":"mon","amount":17.45},{"day":"tue","amount":34.91},{"day":"wed","amount":52.36},{"day":"thu","amount":31.07},{"day":"fri","amount":23.39},{"day":"sat","amount":43.28},{"day":"sun","amount":25.48}]');const a=document.querySelector('button[class="btn-refresh"]'),r=document.querySelector('div[class~="failure"]'),s=document.querySelector('div[class~="success"]'),o=document.querySelector(".expense-chart-component__balance"),c=document.querySelectorAll("tr td"),n=document.querySelectorAll('tr span[aria-hidden="true"]'),u=document.querySelectorAll("tbody tr");function d(e){u[e].style.setProperty("--cyan","hsl(186, 34%, 60%);"),u[e].style.backgroundColor="var(--cyan)"}function l(){u.forEach(function(e,t){e.classList.add("day"),c[t].classList.remove("hide")})}!function i(){try{if(!Array.isArray(/*@__PURE__*/e(t)))throw Error("Oops! You are lost");switch(/*@__PURE__*/e(t).forEach(function(e,t){c[t].textContent=`$${e.amount}`,n[t].textContent=e.day}),r?.classList.add("hide"),s?.classList.remove("hide"),o?.classList.remove("failure"),setTimeout(l,1e3),new Date().getDay()){case 0:d(6);break;case 1:d(0);break;case 2:d(1);break;case 3:d(2);break;case 4:d(3);break;case 5:d(4);break;case 6:d(5);break;default:u.forEach(function(e){e.style.setProperty("--soft-red","hsl(10, 79%, 65%)"),e.style.backgroundColor="var(--soft-red)"})}}catch(n){let[e,t]=n.message.split("!"),c=document.querySelector(".failure__message");if(document.querySelector(".failure__message strong").textContent=`${e}!`,!c.innerHTML.includes(t.trim())){let e=document.createTextNode(t.trim());c.appendChild(e)}r?.classList.remove("hide"),s?.classList.add("hide"),o?.classList.add("failure"),a.addEventListener("click",function(){i()})}}();
//# sourceMappingURL=index.44d6400f.js.map
