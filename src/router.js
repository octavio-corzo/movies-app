import { createRouter, createWebHistory } from "vue-router";

import MoviesView from "./views/Movies/MoviesView.vue";
import MovieIdView from "./views/Movies/MovieIdView.vue";
import HomeView from "./views/HomeView.vue";
import SeriesView from "./views/Series/SeriesView.vue";
import SerieIdView from "./views/Series/SerieIdView.vue";
const routes = [
  { path: "/", component: HomeView },
  { path: "/movies", component: MoviesView },
  { path: "/series", component: SeriesView },
  { path: "/movie/:id", component: MovieIdView },
  { path: "/serie/:id", component: SerieIdView },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
