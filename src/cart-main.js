// src/cart-main.js
import './styles/main.scss';
import './header-menu';

import './scripts/bestsellers.js';

import { updateCartCount } from './scripts/cartService.js';
import './scripts/shopping-cart.js';

window.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
