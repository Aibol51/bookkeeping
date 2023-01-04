import { createRouter, createWebHashHistory } from "vue-router";

const modules = import.meta.globEager("../views/**/*.vue");
const routes = [];
Object.keys(modules).map((key) => {
    const name = key.replace("../views/", "/").replace(".vue", "");
    routes.push({
        path: name,
        name: name.replace("/", "").replace("/", ":"),
        component: modules[key].default,
    });
});

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home/index",
        },
        ...routes,
        {
            path: "/:pathMatch(.*)*",
            redirect: "/404",
        },
    ],
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token");
    if (to.path !== "/login/index" && !token) next({ path: "/login/index" });
    else if (to.path === "/login/index" && token) next({ path: "/home/index" });
    else next();
});

export default router;
