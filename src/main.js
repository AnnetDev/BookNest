import './styles/main.scss';
import './scripts/all-books.js';
import './scripts/hero-slider.js';
import './header-menu';
<<<<<<< HEAD

import './scripts/bestsellers.js';
import './scripts/scrollToTop.js';
=======
import './scripts/bestsellers.js';
import { clearCart, updateCartCount } from "./scripts/cartService.js";
   window.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    clearCart();
    
});
>>>>>>> origin/main
