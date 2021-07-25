import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    console.log("[PWA LOG] New update detected.");
  },
  onOfflineReady() {
    console.log("[PWA LOG] New content cached successfully.");
  },
});

updateSW();
