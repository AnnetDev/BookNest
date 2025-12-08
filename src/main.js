import './styles/main.scss';
import './scripts/all-books.js';
import './scripts/hero-slider.js';
import './header-menu';
import './scripts/bestsellers.js';
import { clearCart, updateCartCount } from "./scripts/cartService.js";
   window.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    clearCart();
    
});

import './scripts/scrollToTop.js';