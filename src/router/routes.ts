import Home from "../pages/Home.vue";
import Page404 from "../pages/404.vue";
import Happy from "../pages/Happy.vue";
import Meditation from "../pages/Meditation.vue";
import Communities from "../pages/Communities.vue";
import Wallpapers from "../pages/Wallpapers.vue";
import Phrases from "../pages/Phrases.vue";
import Books from "../pages/Books.vue";
import Shibas from "../pages/Shibas.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    title: "Home",
    component: Home,
  },
  {
    path: "/happy",
    name: "happy",
    title: "Happy",
    component: Happy,
  },
  {
    path: "/happy/shibas",
    name: "shibas",
    title: "Shibas",
    component: Shibas,
  },
  {
    path: "/meditation",
    name: "meditation",
    title: "Meditation",
    component: Meditation,
  },
  {
    path: "/communities",
    name: "communities",
    title: "Communities",
    component: Communities,
  },
  {
    path: "/phrases",
    name: "phrases",
    title: "Phrases",
    component: Phrases,
  },
  {
    path: "/books",
    name: "books",
    title: "Books",
    component: Books,
  },
  {
    path: "/wallpapers",
    name: "wallpapers",
    title: "Wallpapers",
    component: Wallpapers,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Page404,
  },
];
