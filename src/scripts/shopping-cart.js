// src/scripts/shopping-cart.js
import { getCart, removeFromCart, updateCartCount, increaseCount, decreaseCount } from "./cartService.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("cart-items-container");
    const totalEl = document.getElementById("cart-total-amount");
    if (!container) return;

    function renderCart() {
    const books = getCart();
    let total = 0;

    container.innerHTML = ""; // clean container

    books.forEach((book, index) => {
        const item = document.createElement("div");
        item.classList.add("cart-item");
        
        item.innerHTML = `
        <img src="${book.img}" alt="${book.title}" style="width:90px;">
        <div class="book-info">
            <h3>${book.title}</h3>
            <p class="book-author">${book.author}</p>
            <p>Available in store and online</p>
            <p>Delivery info</p>
            <h3>${book.price} SEK</h3>
        </div>

        <div class="icons-column">
            <div class="trash-icon">
                <i class="fa-solid fa-trash-can"></i>
            </div>

            <div class="count-icons">
                <i class="fa-regular fa-square-minus"></i>
                <span>${book.count || 1}</span>
                <i class="fa-regular fa-square-plus"></i>
            </div>
        </div>`;

        const trashBtn = item.querySelector(".trash-icon");
        trashBtn.addEventListener("click", () => {
            removeFromCart(index);
            renderCart(); 
            updateCartCount(); 
        })

        const plusBtn = item.querySelector(".fa-square-plus");
        plusBtn.addEventListener("click", () => {
            increaseCount(index);
            renderCart();
            updateCartCount();
        });

        const minusBtn = item.querySelector(".fa-square-minus");
        minusBtn.addEventListener("click", () => {
            decreaseCount(index);
            renderCart();
            updateCartCount();
        });

        container.appendChild(item);

        const price = Number(book.price) || 0;
        const count = Number(book.count) || 1;
        total += price * count;
    });

    if (totalEl) {
        totalEl.textContent = total;
    }
    }
renderCart();
updateCartCount();
});

