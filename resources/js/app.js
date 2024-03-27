import './bootstrap';

// import { createApp } from 'vue';
// import { createApp } from 'vue/dist/vue.esm-bundler.js'

import { createApp } from 'vue/dist/vue.esm-bundler.js' // This works
// import { createApp } from 'vue' // This doesn't work

import Login  from './components/Login.vue';
import Inicio from './components/App.vue';

import router from "./router";
import store from "./store";






const app = createApp({
    components: {
        Inicio,
        Login
    }
})
app.use(router);
app.use(store);
app.mount('#app')
