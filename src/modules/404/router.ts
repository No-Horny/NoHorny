import Index from "./views/Index.vue";

export default [
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    title: "Page 404",
    component: Index,
  },
];
