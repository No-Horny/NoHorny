import Home from "../pages/Home.vue";
import Page404 from "../pages/404.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    title: "Tela inicial",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Page404,
  },
];