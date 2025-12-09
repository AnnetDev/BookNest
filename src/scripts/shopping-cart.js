import { getCart } from "./cartService";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("cart-items-container");
    if (!container) return;

    const books = getCart();
    console.log("Books from cart:", books);

    books.forEach(book => {
        const item = document.createElement("div");
        item.classList.add("cart-item");
        
        item.innerHTML = `<img src="${book.img}" alt="${book.title}" style="width:90px;">
        <div class="book-info">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
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
                <span> 1 </span>
                <i class="fa-regular fa-square-plus"></i>
            </div>
        </div>`;
        
        container.appendChild(item);
    });
  
});