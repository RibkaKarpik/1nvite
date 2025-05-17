import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/1nvite/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
});
