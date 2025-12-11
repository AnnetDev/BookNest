import{u as c,x as g,y as h,z as E,A as B}from"./offers-image-switcher-BlD0ZBQi.js";const a=document.getElementById("offers-seasonal-generate-btn"),r=document.getElementById("offers-seasonal-code-box"),u=document.getElementById("offers-seasonal-code-value"),m="booknest-seasonal-promo";function L(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let o=0;o<8;o++)e+=t[Math.floor(Math.random()*t.length)];return"BN-"+e}function p(t){navigator.clipboard.writeText(t).then(()=>{const e=document.getElementById("promo-copy-btn");e.textContent="Copied!",e.classList.add("copied"),setTimeout(()=>{e.textContent="Copy Code",e.classList.remove("copied")},1500)})}function f(){a.disabled=!0,a.textContent="Code Generated",a.classList.add("disabled")}function b(t){u.textContent=t,r.classList.remove("hidden")}const d=localStorage.getItem(m);d&&(b(d),f(),setTimeout(()=>{const t=document.getElementById("promo-copy-btn");t&&(t.onclick=()=>p(d))},50));a&&a.addEventListener("click",()=>{if(a.disabled)return;const t=L();if(localStorage.setItem(m,t),u.textContent=t,r.classList.remove("hidden"),f(),!document.getElementById("promo-copy-btn")){const e=document.createElement("button");e.id="promo-copy-btn",e.classList.add("offers-seasonal__copy-btn"),e.textContent="Copy Code",r.appendChild(e),e.addEventListener("click",()=>p(t))}});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("cart-items-container"),e=document.getElementById("cart-total-amount");if(!t)return;function o(){const C=g();let l=0;t.innerHTML="",C.forEach((n,i)=>{const s=document.createElement("div");s.classList.add("cart-item"),s.innerHTML=`
        <img src="${n.img}" alt="${n.title}" style="width:90px;">
        <div class="book-info">
            <h3>${n.title}</h3>
            <p class="book-author">${n.author}</p>
            <p>Available in store and online</p>
            <p>Delivery info</p>
            <h3>${n.price} SEK</h3>
        </div>

        <div class="icons-column">
            <div class="trash-icon">
                <i class="fa-solid fa-trash-can"></i>
            </div>

            <div class="count-icons">
                <i class="fa-regular fa-square-minus"></i>
                <span>${n.count||1}</span>
                <i class="fa-regular fa-square-plus"></i>
            </div>
        </div>`,s.querySelector(".trash-icon").addEventListener("click",()=>{h(i),o(),c()}),s.querySelector(".fa-square-plus").addEventListener("click",()=>{E(i),o(),c()}),s.querySelector(".fa-square-minus").addEventListener("click",()=>{B(i),o(),c()}),t.appendChild(s);const y=Number(n.price)||0,v=Number(n.count)||1;l+=y*v}),e&&(e.textContent=l)}o(),c()});window.addEventListener("DOMContentLoaded",()=>{c()});
