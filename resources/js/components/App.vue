<template>

<Sidebar/>

<div class="main">

    <Header />
    <main class="content">
        <router-view></router-view>
    </main>

    <Footer></Footer>
</div>

</template>

<script>
import Header from './admin/plantillaweb/header.vue';


import Sidebar from './admin/plantillaweb/Sidebar.vue';
import Footer from './admin/plantillaweb/footer.vue'
export default {
    props:{
        // ruta:APP_URL

    },
    data: () => ({}),
    components: {
        Header,
        Sidebar,
        Footer
    }
};
</script>
