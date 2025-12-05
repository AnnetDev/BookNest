import { addToCart, updateCartCount } from "./cartService.js";


const body = document.querySelector('body');

export function bookPopup() {
    const clickedBooks = document.querySelectorAll('.clickable-book');

    if (!clickedBooks.length) return;

    clickedBooks.forEach(book => {
        book.addEventListener('click', () => {

            body.classList.add('overlay-active', 'overlay-no-scroll');

            const popupContainer = document.createElement('div');
            popupContainer.classList.add('popup-container');
            popupContainer.classList.add("visible");
            body.appendChild(popupContainer);

            setTimeout(() => {
                document.addEventListener('click', handleOutsideClick);
            }, 0);
            const popupHeader = document.createElement('div');
            popupHeader.classList.add('popup-header');
            popupContainer.appendChild(popupHeader);

            const closeButton = document.createElement('button');
            closeButton.classList.add('popup-close-button', 'button');
            closeButton.innerHTML = `
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L21 21M1 21L21 1" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`;
            popupHeader.appendChild(closeButton);

            const buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('save-cart-buttons');

            buttonsDiv.innerHTML = `<button class="save-btn">
                <span>Save</span>
                <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6066 9.53553L10.9497 15.1924C10.1687 15.9734 8.90237 15.9734 8.12132 15.1924L2.46447 9.53553C0.511845 7.58291 0.511845 4.41709 2.46447 2.46447C4.41709 0.511845 7.58291 0.511845 9.53553 2.46447C11.4882 0.511845 14.654 0.511845 16.6066 2.46447C18.5592 4.41709 18.5592 7.58291 16.6066 9.53553Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                        
                </button>
                <button class="add-cart-btn">
                <span>Add to cart</span>
                <svg  viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 16.6667C4.54167 16.6667 4.14931 16.5035 3.82292 16.1771C3.49653 15.8507 3.33333 15.4583 3.33333 15C3.33333 14.5417 3.49653 14.1493 3.82292 13.8229C4.14931 13.4965 4.54167 13.3333 5 13.3333C5.45833 13.3333 5.85069 13.4965 6.17708 13.8229C6.50347 14.1493 6.66667 14.5417 6.66667 15C6.66667 15.4583 6.50347 15.8507 6.17708 16.1771C5.85069 16.5035 5.45833 16.6667 5 16.6667ZM13.3333 16.6667C12.875 16.6667 12.4826 16.5035 12.1562 16.1771C11.8299 15.8507 11.6667 15.4583 11.6667 15C11.6667 14.5417 11.8299 14.1493 12.1562 13.8229C12.4826 13.4965 12.875 13.3333 13.3333 13.3333C13.7917 13.3333 14.184 13.4965 14.5104 13.8229C14.8368 14.1493 15 14.5417 15 15C15 15.4583 14.8368 15.8507 14.5104 16.1771C14.184 16.5035 13.7917 16.6667 13.3333 16.6667ZM4.29167 3.33333L6.29167 7.5H12.125L14.4167 3.33333H4.29167ZM3.5 1.66667H15.7917C16.1111 1.66667 16.3542 1.80903 16.5208 2.09375C16.6875 2.37847 16.6944 2.66667 16.5417 2.95833L13.5833 8.29167C13.4306 8.56944 13.2257 8.78472 12.9688 8.9375C12.7118 9.09028 12.4306 9.16667 12.125 9.16667H5.91667L5 10.8333H15V12.5H5C4.375 12.5 3.90278 12.2257 3.58333 11.6771C3.26389 11.1285 3.25 10.5833 3.54167 10.0417L4.66667 8L1.66667 1.66667H0V0H2.70833L3.5 1.66667Z" fill="white"/>
                </svg>
                </button>`;

            // content
            const popupContent = document.createElement('div');
            popupContent.classList.add('popup-content');
            popupContainer.appendChild(popupContent);
            popupContainer.appendChild(buttonsDiv);

            const popupContentVisual = document.createElement('div');
            popupContentVisual.classList.add('popup-content-visual');
            popupContent.appendChild(popupContentVisual);

            const popupContentText = document.createElement('div');
            popupContentText.classList.add('popup-content-text');
            popupContent.appendChild(popupContentText);

            popupContentVisual.innerHTML = `
            <h2 class="popup-title">${book.querySelector('h3').textContent}</h2>
            ${book.querySelector('img').outerHTML}`;


            // close
            closeButton.addEventListener('click', closePopup);

            function closePopup() {
                // popupContainer.remove();
                popupContainer.classList.add("fade-out");
                popupContainer.addEventListener("transitionend", () => popupContainer.remove());
                body.classList.remove('overlay-active', 'overlay-no-scroll');
                document.removeEventListener('click', handleOutsideClick);
            }

            function handleOutsideClick(e) {
                if (!document.body.contains(popupContainer)) return;
                if (popupContainer.contains(e.target)) return;
                closePopup();
            }
       

       const addCartBtn = buttonsDiv.querySelector(".add-cart-btn");
       addCartBtn.addEventListener("click", () => {
       const bookData = {
        title: book.querySelector("h3").textContent,
        img: book.querySelector("img").src,
        author: book.querySelector("p")?.textContent || "Unknown author"
    };

        addToCart(bookData);
        updateCartCount();

         alert("Book added to cart!");
     });
    
    
    });


});
}