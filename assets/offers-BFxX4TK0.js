import{x as C,u as g}from"./offers-image-switcher-D_IGkF-K.js";const o=document.getElementById("offers-seasonal-generate-btn"),i=document.getElementById("offers-seasonal-code-box"),r=document.getElementById("offers-seasonal-code-value"),l="booknest-seasonal-promo";function y(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let s=0;s<8;s++)e+=t[Math.floor(Math.random()*t.length)];return"BN-"+e}function m(t){navigator.clipboard.writeText(t).then(()=>{const e=document.getElementById("promo-copy-btn");e.textContent="Copied!",e.classList.add("copied"),setTimeout(()=>{e.textContent="Copy Code",e.classList.remove("copied")},1500)})}function u(){o.disabled=!0,o.textContent="Code Generated",o.classList.add("disabled")}function h(t){r.textContent=t,i.classList.remove("hidden")}const c=localStorage.getItem(l);c&&(h(c),u(),setTimeout(()=>{const t=document.getElementById("promo-copy-btn");t&&(t.onclick=()=>m(c))},50));o&&o.addEventListener("click",()=>{if(o.disabled)return;const t=y();if(localStorage.setItem(l,t),r.textContent=t,i.classList.remove("hidden"),u(),!document.getElementById("promo-copy-btn")){const e=document.createElement("button");e.id="promo-copy-btn",e.classList.add("offers-seasonal__copy-btn"),e.textContent="Copy Code",i.appendChild(e),e.addEventListener("click",()=>m(t))}});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("cart-items-container"),e=document.getElementById("cart-total-amount");if(!t)return;const s=C();let d=0;s.forEach(n=>{const a=document.createElement("div");a.classList.add("cart-item"),a.innerHTML=`
        <img src="${n.img}" alt="${n.title}" style="width:90px;">
        <div class="book-info">
            <h3>${n.title}</h3>
            <p class="book-author">${n.author}</p>
            <p>Available in store and online</p>
            <p>Delivery info</p>
            <h3>${n.price} SEK</h3>
        </div>

        <div class="icons-column">
            <div class="cart-icons">
                <i class="fa-regular fa-heart"></i>
                <span></span>
                <i class="fa-solid fa-trash-can"></i>
            </div>

            <div class="count-icons">
                <i class="fa-regular fa-square-minus"></i>
                <span>${n.count||1}</span>
                <i class="fa-regular fa-square-plus"></i>
            </div>
        </div>`,t.appendChild(a);const p=Number(n.price)||0,f=Number(n.count)||1;d+=p*f}),e&&(e.textContent=d)});window.addEventListener("DOMContentLoaded",()=>{g()});
