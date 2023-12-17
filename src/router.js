import { createRouter, createWebHistory } from "vue-router";

import MoviesView from "./views/moviesView.vue";
import HomeView from "./views/HomeView.vue";
import SeriesView from "./views/SeriesView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/movies", component: MoviesView },
  { path: "/series", component: SeriesView },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
