import { createRouter, createWebHashHistory } from "vue-router";

const modules = import.meta.globEager("../views/**/*.vue");
const routes = [];
Object.keys(modules).map((key) => {
    const name = key.replace("../views/", "/").replace(".vue", "");
    routes.push({
        path: name,
        name: name.replaceAll("/", ""),
        // dynamic import component
        component: modules[key].default,
        // component: () => import(key),
    });
});

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/",
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
    if (to.name !== "Login" && !token) next({ name: "Login" });
    else next();
});

export default router;
