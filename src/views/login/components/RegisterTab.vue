<template>
    <van-cell-group inset>
        <van-field
            v-model="formData.email"
            name="email"
            label="邮箱"
            placeholder="邮箱"
            :rules="registerRules.email"
            clearable
        />
        <van-field
            v-model="formData.password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="registerRules.password"
            clearable
        />
        <van-field
            v-model="formData.confirmPassword"
            type="password"
            name="confirmPassword"
            label="再次输入密码"
            placeholder="再次输入密码"
            :rules="registerRules.confirmPassword"
            clearable
        />
    </van-cell-group>
</template>

<script setup>
import { reactive } from "vue";
import {
    emailValidator,
    passwordValidator,
    confirmPasswordValidator,
} from "@/utils/validate.js";

const props = defineProps({
    formData: {
        type: Object,
        required: true,
    },
});

const registerRules = reactive({
    email: [
        {
            required: true,
            message: "请填写邮箱",
            validator: emailValidator,
        },
    ],
    password: [
        {
            required: true,
            message: "请填写密码",
            validator: passwordValidator,
        },
    ],
    confirmPassword: [
        {
            required: true,
            message: "请填写密码",
            validator: confirmPasswordValidator,
        },
    ],
});
</script>

<style lang="scss" scoped></style>
