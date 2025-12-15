import{u as n,g as u,r as m,i as p,d as v,a as f}from"./save-BEH9Nby7.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("cart-items-container"),r=document.getElementById("cart-total-amount");if(!s)return;function a(){const o=u();let c=0;s.innerHTML="",o.forEach((t,i)=>{const e=document.createElement("div");e.classList.add("cart-item"),e.innerHTML=`
        <img src="${t.img}" alt="${t.title}" style="width:90px;">
        <div class="book-info">
            <h3>${t.title}</h3>
            <p class="book-author">${t.author}</p>
            <p>Available in store and online</p>
            <p>Delivery info</p>
            <h3>${t.price} SEK</h3>
        </div>

        <div class="icons-column">
            <div class="trash-icon">
                <i class="fa-solid fa-trash-can"></i>
            </div>

            <div class="count-icons">
                <i class="fa-regular fa-square-minus"></i>
                <span>${t.count||1}</span>
                <i class="fa-regular fa-square-plus"></i>
            </div>
        </div>`,e.querySelector(".trash-icon").addEventListener("click",()=>{m(i),a(),n()}),e.querySelector(".fa-square-plus").addEventListener("click",()=>{p(i),a(),n()}),e.querySelector(".fa-square-minus").addEventListener("click",()=>{v(i),a(),n()}),s.appendChild(e);const d=Number(t.price)||0,l=Number(t.count)||1;c+=d*l}),r&&(r.textContent=c)}a(),n()});window.addEventListener("DOMContentLoaded",()=>{n(),f()});
