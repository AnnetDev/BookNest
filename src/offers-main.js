import './styles/main.scss';

import './header-menu';
import './scripts/offers-image-switcher.js';
import './scripts/offers-promocode.js';
import './scripts/scrollToTop.js';

import { updateCartCount } from './scripts/cartService.js';
import './scripts/shopping-cart.js';

window.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
