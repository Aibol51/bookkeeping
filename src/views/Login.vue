<template>
    <van-row justify="center">
        <van-cell-group inset id="loginLogo">
            <img class="logo" src="../assets/img/bookkeeping.png" alt="" />
        </van-cell-group>
    </van-row>
    <van-form @submit.stop="onSubmit" ref="formRef">
        <van-tabs v-model:active="active" @change="onClear">
            <van-tab title="登录">
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
            </van-tab>
            <van-tab title="注册">
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
            </van-tab>
        </van-tabs>

        <div style="margin: 16px">
            <van-button
                round
                block
                type="primary"
                native-type="submit"
                @click="register"
            >
                提交
            </van-button>
        </div>
    </van-form>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import {
    closeToast,
    showLoadingToast,
    showSuccessToast,
    showFailToast,
} from "vant";
import { supabase } from "@/supabase";
import {
    emailValidator,
    passwordValidator,
    confirmPasswordValidator,
} from "@/utils/validate.js";

const active = ref(0);
const formRef = ref(null);

const formData = reactive({
    email: "",
    password: "",
    confirmPassword: "",
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

const onSubmit = () => {
    if (active.value == 0) {
    }
    showLoadingToast("登录中...");
    setTimeout(() => {
        closeToast();
    }, 2000);
};

function onClear() {
    formRef.value.$el.reset();
}
async function signIn() {
    const { data, error } = await supabase.auth.signIn({
        email: formData.email,
        password: formData.password,
    });
    console.log(data);
    console.log(error);
    if (error) {
        console.log(error);
    }
}

async function register() {
    const { data: res } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
    });
}
</script>
<style lang="scss" scoped>
.van-row {
    padding-top: 15%;
    #loginLogo {
        width: 109px;
        height: 109px;
        background-image: linear-gradient(to top, #3e49ae 0%, #a6c1ee 100%);
        filter: drop-shadow(4px 5px 5px rgba(0, 0, 0, 0.25));
        border-radius: 30%;
        .logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 65px;
            height: 65px;
        }
    }
}
.van-tabs {
    padding-top: 10%;
    :deep(.van-tabs__nav) {
        background: none;
        margin: 0 15px 0 15px;
    }
    :deep(.van-tab__panel) {
        // width: 90%;
        text-align: -webkit-center;
    }
    :deep(.van-tabs__content--animated) {
        text-align: -webkit-center;
    }
}
.van-form {
    .van-cell-group--inset {
        margin-bottom: 5%;
    }
}
</style>
