import { createRouter, createWebHistory } from "vue-router";

import NothingFound from "@/front/pages/nothing-found.vue";

const routes = [
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NothingFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
