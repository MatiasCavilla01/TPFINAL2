import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root:'.tp2final',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html', // Asegúrate de que este archivo esté presente en la carpeta raíz
    },
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.PNG'],
});