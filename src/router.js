import { createRouter, createWebHistory } from "vue-router";

import MoviesView from "./views/moviesView.vue";
import HomeView from "./views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/movies", component: MoviesView },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
