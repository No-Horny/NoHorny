import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./styles/global.scss";

if (typeof window !== "undefined") {
  import("./pwa");
}

const app = createApp(App);
app.use(router);
app.mount("#app");
