/* router.js */
import { createRouter, createWebHistory } from "vue-router";

import Inicio from "./components/admin/Inicio.vue";
import Nosotros from "./components/admin/Nosotros.vue";
import Login from "./components/Login.vue";
import Register from "./components/admin/Register.vue";
import Perfiluser from "./components/admin/perfilusuario.vue";
import Config from "./components/admin/configuracionuser.vue";
import Usuarios from "./components/admin/Usuarios.vue";


import NotFound from "./components/admin/NotFound.vue";

const routes = [
  { path: "/", component: Inicio },
  { path: "/home", component: Inicio },
  { path: "/nosotros", component: Nosotros },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/profile", component: Perfiluser },
  { path: "/configuser", component: Config },
  { path: "/usuarios", component: Usuarios },

  { path: "/:pathMatch(.*)*", component: NotFound },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register','/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });



export default router;
