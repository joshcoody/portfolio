import { defineConfig, mergeConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import viteConfig from './vite.config';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      mkcert({
        hosts: ['local.joshcoody.com'],
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 443,
      strictPort: true,
      hmr: {
        host: 'local.joshcoody.com',
        port: 443,
        protocol: 'wss',
      },
    },
  })
);
