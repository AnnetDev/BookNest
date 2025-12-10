import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/BookNest/',  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        offers: resolve(__dirname, 'offers.html'),
      },
    },
  },
});
