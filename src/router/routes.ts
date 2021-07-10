import Home from "../pages/Home.vue";
import Page404 from "../pages/404.vue";
import Memes from '../pages/Memes.vue'

export const routes = [
  {
    path: "/",
    name: "home",
    title: "Home",
    component: Home,
  },
  {
    path: '/memes',
    name: 'memes',
    title: "Memes",
    component: Memes
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Page404,
  },
];