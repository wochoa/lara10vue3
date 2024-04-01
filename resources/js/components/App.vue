<template>
<Sidebar v-if="currentUser" />

<div class="main">

    <Header v-if="currentUser"/>
    <main :class="currentUser?'content':'form-signin'">
        <router-view></router-view>

    </main>

    <Footer v-if="currentUser"></Footer>
</div>
</template>

<script>
// const loggedIn = localStorage.getItem('user');
import Header from './admin/plantillaweb/header.vue';

import Sidebar from './admin/plantillaweb/Sidebar.vue';
import Footer from './admin/plantillaweb/footer.vue';

export default {

    data: () => ({}),

    components: {
        Header,
        Sidebar,
        Footer
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        loggedIn() {
      return this.$store.state.auth.status.loggedIn;
     }
    },

    mounted() {
    if (!this.loggedIn) {
      this.$router.push("/login");
    }
  },

};
</script>
