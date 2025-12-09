import { getCart } from "./cartService";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("cart-items-container");
    const totalEl = document.getElementById("cart-total-amount");
    if (!container) return;

    const books = getCart();
    let total = 0;

    books.forEach(book => {
        const item = document.createElement("div");
        item.classList.add("cart-item");
        
        item.innerHTML = `<img src="${book.img}" alt="${book.title}" style="width:90px;">
        <div class="book-info">
            <h3>${book.title}</h3>
            <p class="book-author">${book.author}</p>
            <p>Available in store and online</p>
            <p>Delivery info</p>
            <h3>${book.price} SEK</h3>
        </div>

        <div class="icons-column">
            <div class="cart-icons">
                <i class="fa-regular fa-heart"></i> <span>
                <i class="fa-solid fa-trash-can"></i>
            </div>

            <div class="count-icons">
                <i class="fa-regular fa-square-minus"></i>
                <span> ${book.count || 1} </span>
                <i class="fa-regular fa-square-plus"></i>
            </div>
        </div>`;
        
        container.appendChild(item);

        // Add book price to total
        const price = book.price || 0;
        const count = book.count || 1;
        total += price * count;
    });
    // Display total in the totalEl
    if (totalEl) {
        totalEl.textContent = total; 
    }
});