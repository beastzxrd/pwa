import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/pwa/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      scope: '/pwa/',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'My PWA App',
        short_name: 'PWA',
        description: 'My Progressive Web App',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/pwa/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/pwa/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'offlineCache',
              expiration: {
                maxEntries: 200
              }
            }
          }
        ]
      }
    })
  ]
})
