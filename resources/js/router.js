/* router.js */
import { createRouter, createWebHistory } from "vue-router";

import Inicio from "./components/admin/Inicio.vue";
import Nosotros from "./components/admin/Nosotros.vue";
import NotFound from "./components/admin/NotFound.vue";

const routes = [
  { path: "/", component: Inicio },
  { path: "/nosotros", component: Nosotros },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
