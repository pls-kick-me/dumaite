import { createRouter, createWebHistory } from "vue-router";

import Feed from "@/front/pages/feed.vue";
import Profile from "@/front/pages/profile.vue";
import Recommendations from "@/front/pages/collections/recommendations.vue";
import New from "@/front/pages/collections/new.vue";
import Useful from "@/front/pages/collections/useful.vue";
import UsersFriends from "@/front/pages/users/friends.vue";
import UsersTrust from "@/front/pages/users/trust.vue";
import UsersOneminded from "@/front/pages/users/oneminded.vue";
import UsersSubscriptions from "@/front/pages/users/subscriptions.vue";
import UsersSubscribers from "@/front/pages/users/subscribers.vue";
import UsersShow from "@/front/pages/users/show.vue";
import Support from "@/front/pages/support/support.vue";
import SupportFaq from "@/front/pages/support/faq.vue";
import SupportCreate from "@/front/pages/support/create.vue";

import NothingFound from "@/front/pages/nothing-found.vue";

const routes = [
    {
        path: "/",
        name: "feed",
        component: Feed,
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile,
    },
    {
        path: "/collections",
        children: [
            {
                path: "/recommendations",
                name: "recommendations",
                component: Recommendations,
            },
            {
                path: "/new",
                name: "new",
                component: New,
            },
            {
                path: "/useful",
                name: "useful",
                component: Useful,
            },
        ],
    },
    {
        path: "/users",
        children: [
            {
                path: "friends",
                component: UsersFriends,
                name: "users_friends",
            },
            {
                path: "trust",
                name: "users_trust",
                component: UsersTrust,
            },
            {
                path: "oneminded",
                name: "users_oneminded",
                component: UsersOneminded,
            },
            {
                path: "subscriptions",
                name: "users_subscriptions",
                component: UsersSubscriptions,
            },
            {
                path: "subscribers",
                name: "users_subscribers",
                component: UsersSubscribers,
            },
            {
                path: ":id(\\d+)",
                name: "users_show",
                component: UsersShow,
            },
        ],
    },
    {
        path: "/support",
        children: [
            {
                path: "",
                name: "support",
                component: Support,
            },
            {
                path: "faq",
                name: "support_faq",
                component: SupportFaq,
            },
            {
                path: "create",
                name: "support_create",
                component: SupportCreate,
            },
        ],
    },
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
