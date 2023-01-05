import { defineStore } from "pinia";
import { supabase } from "@/supabase";
import { useStorage } from "@vueuse/core";
import { errorStatus } from "../utils/tools";
import { showLoadingToast, showSuccessToast, allowMultipleToast } from "vant";
allowMultipleToast();

export const useUserStore = defineStore({
    id: "userStore",
    state: () => ({
        token: useStorage("token", ""),
        userInfo: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    }),
    getters: {
        getToken() {
            return this.token;
        },
        getUserInfo() {
            return this.userInfo;
        },
    },
    actions: {
        setToken(token) {
            this.token = token;
        },
        setUserInfo(userInfo) {
            this.userInfo = userInfo;
        },
        pushToHome() {
            this.router.push({
                name: "home:index",
            });
        },
        async login() {
            const loadingToast = showLoadingToast({
                message: "登录中...",
                forbidClick: true,
            });
            try {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: this.userInfo.email,
                    password: this.userInfo.password,
                });
                if (error) {
                    errorStatus(error);
                } else {
                    showSuccessToast("登录成功");
                    const { session } = await data;
                    this.setToken(session.access_token);
                    this.pushToHome();
                }
            } finally {
                loadingToast.close();
            }
        },

        async register() {
            const loadingToast = showLoadingToast({
                message: "注册中...",
                forbidClick: true,
            });
            try {
                const { data, error } = await supabase.auth.signUp({
                    email: this.userInfo.email,
                    password: this.userInfo.password,
                });
                if (error) {
                    errorStatus(error);
                } else {
                    showSuccessToast("注册成功");
                    const { access_token } = await data;
                    this.setToken(access_token);
                    this.pushToHome();
                }
            } finally {
                loadingToast.close();
            }
        },
    },
});
