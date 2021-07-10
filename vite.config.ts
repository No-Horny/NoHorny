import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

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
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        theme_color: "",
        background_color: "#f69435",
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
});
