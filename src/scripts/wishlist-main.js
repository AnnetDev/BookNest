
import '../styles/main.scss';
import '/src/header-menu.js';
import { updateCartCount } from "./cartService.js";
import { updateSavedCount } from './save.js';

import './scrollToTop.js';

window.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    updateSavedCount();
});