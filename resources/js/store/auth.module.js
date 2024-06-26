import AuthService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));


const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,


    actions: {

        login({ commit }, user) {
            // -> dispatch('auth/login')

            return AuthService.login(user).then(
                (user) => {
                    commit("loginSuccess", user);
                    // return Promise.resolve(user);
                },
                (error) => {
                    commit("loginFailure");
                    // return Promise.reject(error);
                }
            );
            // axios
            //     .post('http://localhost:8081/api/auth/login', user)
            //     .then((response) => {
            //         console.log(response.data);
            //         commit("loginSuccess", response.data);
            //         if (response.data.access_token) {
            //             localStorage.setItem(
            //                 "user",
            //                 JSON.stringify(response.data)
            //             );

            //         }
            //     });
        },
        logout(
            { commit } // -> dispatch('auth/logout')
        ) {
            AuthService.logout();
            commit("logout");
        },
        register({ commit }, user) {
            return AuthService.register(user).then(
                (response) => {
                    commit("registerSuccess");
                    return Promise.resolve(response.data);
                },
                (error) => {
                    commit("registerFailure");
                    return Promise.reject(error);
                }
            );
        },
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        },
    },
};
