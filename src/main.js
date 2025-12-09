import './styles/main.scss';
import './scripts/all-books.js';
import './scripts/hero-slider.js';
import './header-menu';
import './scripts/bestsellers.js';
import { clearCart, updateCartCount } from "./scripts/cartService.js";
import { updateSavedCount } from './scripts/save.js';
   window.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    updateSavedCount();
    clearCart();
    
});

