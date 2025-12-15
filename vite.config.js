import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/BookNest/',  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        offers: resolve(__dirname, 'offers.html'),
        cart: resolve(__dirname, 'cart.html'),
        wishlist: resolve(__dirname, 'wishlist.html'),
        profile404: resolve(__dirname, '404.html'),
      },
    },
  },
});
