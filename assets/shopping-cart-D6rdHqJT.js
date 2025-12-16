import{c as a,d,r as m,i as p,e as v}from"./scrollToTop-z7LA5Z2K.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("cart-items-container"),r=document.getElementById("cart-total-amount");if(!s)return;function n(){const o=d();let c=0;s.innerHTML="",o.forEach((t,i)=>{const e=document.createElement("div");e.classList.add("cart-item"),e.innerHTML=`
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
        </div>`,e.querySelector(".trash-icon").addEventListener("click",()=>{m(i),n(),a()}),e.querySelector(".fa-square-plus").addEventListener("click",()=>{p(i),n(),a()}),e.querySelector(".fa-square-minus").addEventListener("click",()=>{v(i),n(),a()}),s.appendChild(e);const l=Number(t.price)||0,u=Number(t.count)||1;c+=l*u}),r&&(r.textContent=c)}n(),a()});
