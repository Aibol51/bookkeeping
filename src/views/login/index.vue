<template>
    <van-row justify="center">
        <van-cell-group inset id="loginLogo">
            <img class="logo" src="../../assets/img/bookkeeping.png" />
        </van-cell-group>
    </van-row>
    <van-form @submit="onSubmit" ref="formRef">
        <van-tabs v-model:active="active" @change="onClear">
            <van-tab title="登录">
                <LoginTab v-model:formData="formData" />
            </van-tab>
            <van-tab title="注册">
                <RegisterTab v-model:formData="formData" />
            </van-tab>
        </van-tabs>
        <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</template>
<script setup>
import LoginTab from "./components/LoginTab.vue";
import RegisterTab from "./components/RegisterTab.vue";

import { ref, reactive, watch } from "vue";
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();

const active = ref(0);
const formRef = ref(null);
const formData = reactive({
    email: "",
    password: "",
    confirmPassword: "",
});

watch(formData, (val) => {
    userStore.setUserInfo(val);
});

const onClear = () => {
    formRef.value.resetValidation();
    formRef.value.$el.reset();
};

const onSubmit = (formData) => {
    if (active.value === 0) {
        userStore.login(formData);
    } else {
        userStore.register(formData);
    }
};
</script>
<style lang="scss" scoped>
@import "components/style.scss";
</style>
