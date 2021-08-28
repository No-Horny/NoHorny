import Index from "./views/Index.vue";
import Article from "./views/Article.vue";

export default [
  {
    path: "/articles",
    name: "articles",
    title: "Articles",
    component: Index,
  },
  {
    path: "/article/:id",
    name: "article",
    title: "Article",
    component: Article,
  },
];
