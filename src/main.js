import './styles/main.scss';

import './scripts/all-books.js';
import './scripts/hero-slider.js';
import './header-menu';
import './scripts/bestsellers.js';

import { updateCartCount } from './scripts/cartService.js';

import './scripts/scrollToTop.js';
import './scripts/offers-image-switcher.js';

window.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
