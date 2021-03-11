import signin from "./components/main/index.vue";
import signup from "./components/signup/index.vue";

export const routes = [
    {
        path: '/', name: "/",component: signin
    },
    {
        path: '/signup',  component: signup
    }
]