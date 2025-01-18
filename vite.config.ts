import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  server: {
    port: 5001,
  },
  resolve: {
    alias: {
      '@remote': path.resolve(__dirname, './src'),
      '@remote/components': path.resolve(__dirname, './src/components'),
      '@remote/pages': path.resolve(__dirname, './src/pages'),
      '@remote/styles': path.resolve(__dirname, './src/styles'),
      '@remote/types': path.resolve(__dirname, './src/types'),
    },
  },
});
