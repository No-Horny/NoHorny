import Page404 from './views/Home.vue';

export default [{
  path: '/:pathMatch(.*)*',
  name: '404',
  title: 'Page 404',
  component: Page404,
}]