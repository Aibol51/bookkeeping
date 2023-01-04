import { defineStore } from "pinia";
import { supabase } from "@/supabase";
import {
    showLoadingToast,
    showSuccessToast,
    showFailToast,
    allowMultipleToast,
} from "vant";
import { useStorage } from "@vueuse/core";

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
                    switch (error.status) {
                        case 400:
                            showFailToast("请求参数错误，用户不存在");
                            break;
                        case 401:
                            showFailToast("用户名或密码错误");
                            break;
                        case 404:
                            showFailToast("请求错误");
                            break;
                        default:
                            showFailToast(error.message);
                            break;
                    }
                } else {
                    showSuccessToast("登录成功");
                    const { session } = await data;
                    this.setToken(session.access_token);
                    this.router.push({
                        name: "Home",
                    });
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
                    switch (error.status) {
                        case 400:
                            showFailToast("请求参数错误，用户已存在");
                            break;
                        case 404:
                            showFailToast("请求错误");
                            break;
                        case 429:
                            showFailToast("请求次数过多");
                        default:
                            showFailToast(error.message);
                            break;
                    }
                } else {
                    showSuccessToast("注册成功");
                    const { access_token } = await data;
                    this.setToken(access_token);
                    this.router.push({
                        name: "Home",
                    });
                }
            } finally {
                loadingToast.close();
            }
        },
    },
});
