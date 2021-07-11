import Home from "../pages/Home.vue";
import Page404 from "../pages/404.vue";
import Memes from '../pages/Memes.vue'
import Meditation from '../pages/Meditation.vue'
import Communities from '../pages/Communities.vue'
import Phrases from '../pages/Phrases.vue'

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
    path: '/meditation',
    name: 'meditation',
    title: 'Meditation',
    component: Meditation
  },
  {
    path: '/communities',
    name: 'communities',
    title: 'Communities',
    component: Communities
  },
  {
    path: '/phrases',
    name: 'phrases',
    title: 'Phrases',
    component: Phrases
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Page404,
  },
];