
export function showAddToCartPopup(bookTitle) {
    const overlay = document.getElementById("cart-popup-overlay");
    const titleEl = document.getElementById("cart-popup-title");

    titleEl.textContent = `"${bookTitle}" has been added to your cart.`;
    overlay.classList.add("visible");

    // Close when clicking Continue
    document.getElementById("continue-shopping").onclick = () => {
        overlay.classList.remove("visible");
    };

    // Go to cart page
    document.getElementById("view-cart").onclick = () => {
        window.location.href = "/cart.html";
    };
    setTimeout(() => {
        overlay.classList.remove("visible");
    }, 3000); // Auto close after 3 seconds
}
