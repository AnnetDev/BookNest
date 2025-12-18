import './styles/main.scss';
import './scripts/header-menu.js';
import { getSaved, updateSavedCount, removeFromSaved } from './scripts/save.js';
import { addToCart, updateCartCount } from './scripts/cartService.js';
import './scripts/scrollToTop.js';
window.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    updateSavedCount();
});



document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("wishlist-container");

    const savedBooks = getSaved();
    updateSavedCount(); //shows saved count on page
    updateCartCount(); //shows cart count on page

    savedBooks.forEach (book => { //creates bookcard div and attaches the data inside
        const item = document.createElement("div");
        item.classList.add("bookcard");
        item.dataset.title = book.title;
        item.dataset.author = book.author;
        item.dataset.price = book.price;
        item.dataset.img = book.img;


        const img = document.createElement("img"); //book img
        img.src = book.img;
        img.alt = book.title;
        img.classList.add("wishlist-img");

        const info = document.createElement("div") 
        info.classList.add("book-info"); //create class so you can style in scss

        const title = document.createElement("h3");
        title.textContent = `${book.title}`;
        title.classList.add("book-title");

        const author = document.createElement("p");
        author.textContent = `${book.author}`;
        author.classList.add("book-author");

        const price = document.createElement("p");
        price.textContent = `${book.price} SEK`;
        price.classList.add("book-price");

        const availability = document.createElement("p");
        availability.textContent = "Available in store and online"; //dynamically add text to the page
        availability.classList.add("availability");


        //wishlist-add-button and its eventlistener
        const btn = document.createElement("button");
        btn.classList.add("wishlist-add-button");
        btn.textContent = 'Add to cart';

        btn.addEventListener("click", () => {
        addToCart(book);
        updateCartCount(); //updates cart count when you add to cart
        });

        
        //trash button and its eventlistener
        const trashBtn = document.createElement("button");
        trashBtn.classList.add("wishlist-trash-button");
        trashBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z"/></svg>';
    
        trashBtn.addEventListener("click", () => { //when you click trash icon, it gets removed 
        item.remove(); //removes from DOM, not local storage
        removeFromSaved(book.title); //removes from local storage
        updateSavedCount(); //updates the saved counter at the top
        });

    
        //div to style book-info
        const controls = document.createElement("div");
        controls.classList.add("wishlist-controls");
        controls.append(trashBtn, btn);
        info.append(title, author, price, availability);
        item.append(img,info, controls);
        container.appendChild(item);
        
    });
});
        //add-to-cart button and its eventlistener
        const addAllBtn = document.getElementById("add-all-to-cart");
        addAllBtn.addEventListener("click", () => {
        const cards = document.querySelectorAll(".bookcard");

        cards.forEach(card => {
         const book = {
         title: card.dataset.title,
         author: card.dataset.author,
        price: Number(card.dataset.price),
        img: card.dataset.img
         };

         addToCart(book);
         });

         updateCartCount();
        });



