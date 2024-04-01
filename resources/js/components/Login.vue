<template>
<div class="container d-flex flex-column">
    <div class="row vh-100">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div class="d-table-cell align-middle">

                <div class="text-center mt-4">
                    <h1 class="h2">Welcome back!</h1>
                    <p class="lead">
                        Sign in to your account to continue
                    </p>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="m-sm-3">
                            <form @submit.prevent="handleLogin">
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" v-model="user.email" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input class="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" v-model="user.password">
                                </div>
                                <div>
                                    <div class="form-check align-items-center">
                                        <input id="customControlInline" type="checkbox" class="form-check-input" value="remember-me" name="remember-me" checked="">
                                        <label class="form-check-label text-small" for="customControlInline">Remember me</label>
                                    </div>
                                </div>
                                <div class="d-grid gap-2 mt-3">
                                    <!-- <a class="btn btn-lg btn-primary" href="/">Sign in</a> -->
                                    <button type="submit" class="btn btn-lg btn-dark">Iniciar session</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="text-center mb-3">
                    Don't have an account? <a href="/pages-sign-up">Sign up</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Lara10vue3Login',

    data() {
        return {
            user: {
                email: 'antoinette14@example.net',//'tiana.mayer@example.com',
                password: 'password'
            },
            loading: false

        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    created() {
        if (this.loggedIn) {
            this.$router.push("/home");
        }
    },

    // mounted() {

    // },

    methods: {
        handleLogin() {
            // alert('ejemplo');
            this.loading = true;
            // axios.post('http://localhost:8000/api/auth/login', this.user)
            //     .then(response => {
            //         console.log(response.data)
            //         if (response.data.accessToken) {
            //           localStorage.setItem('user', JSON.stringify(response.data));
            //         }
            //     });

            // this.$store.dispatch("auth/login", this.user);

            this.$store.dispatch("auth/login", this.user).then(
                () => {
                    this.$router.push("/home");// ingresa al dashboard
                    location.reload();

                },
                (error) => {

                    console.log(error)
                }
            );
        },

    },
};
</script>
