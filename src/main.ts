import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import i18n from "@/i18n";
import "@/styles/global.scss";

if (typeof window !== "undefined") {
  import("./pwa");
}

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
