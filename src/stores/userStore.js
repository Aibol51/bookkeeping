import { defineStore } from "pinia";
import { supabase } from "@/supabase";
import {
    showLoadingToast,
    showSuccessToast,
    showFailToast,
    allowMultipleToast,
} from "vant";
allowMultipleToast();

export const useUserStore = defineStore({
    id: "userStore",
    state: () => ({
        token: "",
        userInfo: {},
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

        async login(userInfo) {
            const loadingToast = showLoadingToast({
                message: "登录中...",
                forbidClick: true,
            });
            try {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: userInfo.email,
                    password: userInfo.password,
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
                }
            } finally {
                loadingToast.close();
            }
        },

        async register(userInfo) {},
    },
});