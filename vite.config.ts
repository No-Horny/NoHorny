import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (e) => e.startsWith("ion-"),
        },
      },
    }),
    vueI18n({
      include: path.resolve(__dirname, "./src/i18n/locales/**"),
    }),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        theme_color: "#2D333B",
        background_color: "#F3F3F3",
        display: "standalone",
        scope: "/",
        start_url: "/",
        name: "No Horny",
        short_name: "No Horny",
        description: "The time to stop being horny is now!",
        icons: [
          {
            src: "images/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "images/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "images/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "images/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {},
    }),
  ],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
