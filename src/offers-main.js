import './styles/main.scss';

import './header-menu';
import './scripts/offers-image-switcher.js';
import './scripts/offers-promocode.js';
import './scripts/scrollToTop.js';
import './scripts/shopping-cart.js';
import { updateCartCount } from "./scripts/cartService.js";
import { updateSavedCount } from './scripts/save.js';

import './scripts/scrollToTop.js';

window.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    updateSavedCount();
});