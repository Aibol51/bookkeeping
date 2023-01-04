import { useUserStore } from "@/stores/userStore";

export const emailValidator = (value, callback) => {
    const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!regex.test(value)) {
        return "请填写正确的邮箱地址";
    }
};

export const passwordValidator = (value, callback) => {
    if (value.length < 6) {
        return "密码长度不能小于6位";
    }
};

export const confirmPasswordValidator = () => {
    const userStore = useUserStore();
    const userInfo = userStore.getUserInfo;
    if (userInfo.confirmPassword !== userInfo.password) {
        return "两次输入密码不一致";
    }
};
