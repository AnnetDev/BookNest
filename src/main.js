import './styles/main.scss';
import './header-menu';
import './scripts/hero-slider.js';
import './scripts/bestsellers.js';
import './scripts/all-books.js';
import './scripts/shopping-cart.js';
import { clearCart, updateCartCount } from "./scripts/cartService.js";
   window.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    clearCart();   
});

import './scripts/scrollToTop.js';