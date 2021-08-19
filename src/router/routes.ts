import Home from "../modules/Home/views/Home.vue";
import Page404 from "../modules/404/views/Home.vue";
import Meditation from "../modules/Meditation/views/Home.vue";
import Communities from "../modules/Communities/views/Home.vue";
import Wallpapers from "../modules/Wallpapers/views/Home.vue";
import Phrases from "../modules/Phrases/views/Home.vue";
import Books from "../modules/Books/views/Home.vue";
import Diary from "../modules/Diary/views/Home.vue";
import StreakHistory from '../modules/StreakHistory/views/Home.vue';
import Happy from "../modules/Happy/views/Home.vue";
import Shibas from "../modules/Happy/views/Shibas.vue";

type Route = {
  path: string;
  name: string;
  title?: string;
  component: any;
}

export const routes: Route[] = [
  {
    path: "/",
    name: "home",
    title: "Home",
    component: Home,
  },
  {
    path: '/happy',
    name: 'happy',
    title: 'Happy',
    component: Happy
  },
  {
    path: '/shibas',
    name: 'shibas',
    title: 'Shibas',
    component: Shibas
  },
  {
    path: "/diary",
    name: "diary",
    title: "Diary",
    component: Diary,
  },
  {
    path: "/meditation",
    name: "meditation",
    title: "Meditation",
    component: Meditation,
  },
  {
    path: '/streak-history',
    name: 'streak-history',
    title: 'Streak History',
    component: StreakHistory,
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
