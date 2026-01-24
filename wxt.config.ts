import { defineConfig } from 'wxt';
import tailwind from '@tailwindcss/vite';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    permissions: ['storage'],
  },
  vite: () => ({
    plugins: [...tailwind()],
    resolve: {
      alias: {
        '@': '/src',
        '~': '/src'
      }
    }
  }),
  srcDir: 'src',
  webExt: {
    disabled: true
  }
});
