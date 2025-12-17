import './styles/main.scss';


import './scripts/all-books.js';
import './scripts/hero-slider.js';
import './header-menu';
import './scripts/bestsellers.js';
import './scripts/offers-image-switcher.js';
import './scripts/savePopup.js';


import { updateCartCount } from "./scripts/cartService.js";
import { updateSavedCount } from './scripts/save.js';

import './scripts/scrollToTop.js';

window.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    updateSavedCount();
});

