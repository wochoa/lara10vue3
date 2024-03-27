/* router.js */
import { createRouter, createWebHistory } from "vue-router";

import Inicio from "./components/admin/Inicio.vue";
import Nosotros from "./components/admin/Nosotros.vue";
import Login from "./components/Login.vue";
import Register from "./components/admin/Register.vue";
import Perfiluser from "./components/admin/perfilusuario.vue";

import NotFound from "./components/admin/NotFound.vue";

const routes = [
  { path: "/", component: Inicio },
  { path: "/nosotros", component: Nosotros },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/profile", component: Perfiluser },

  { path: "/:pathMatch(.*)*", component: NotFound },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
