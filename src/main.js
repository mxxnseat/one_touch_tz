import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "./store";

import app from "./components/app/index.vue";

import {routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history"
})

new Vue({
    el: "#root",
    store,
    router,
    render: h => h(app)
})