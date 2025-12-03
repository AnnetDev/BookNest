import './styles/main.scss';
import './scripts/all-books.js';
import './scripts/hero-slider.js';
import './header-menu';
import { clearCart, updateCartCount } from "./scripts/cartService.js";
   window.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    clearCart();
    
});


