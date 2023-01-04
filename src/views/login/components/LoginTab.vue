<template>
    <van-cell-group inset>
        <van-field
            v-model="formData.email"
            name="email"
            label="邮箱"
            placeholder="邮箱"
            :rules="loginRules.email"
            clearable
        />
        <van-field
            v-model="formData.password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="loginRules.password"
            clearable
        />
    </van-cell-group>
</template>

<script setup>
import { reactive } from "vue";
import { emailValidator, passwordValidator } from "@/utils/validate.js";

const props = defineProps({
    formData: {
        type: Object,
        required: true,
    },
});

const loginRules = reactive({
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
});
</script>

<style lang="scss" scoped></style>
