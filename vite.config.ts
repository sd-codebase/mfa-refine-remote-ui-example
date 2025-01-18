import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from 'path';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './UsersList': './src/pages/users/list',
      },
      shared: ['react', 'react-dom', 'antd'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
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
