<template>
  <van-row justify="center">
    <van-cell-group inset id="loginLogo">
      <img class="logo" src="../assets/img/bookkeeping.png" alt="" />
    </van-cell-group>
  </van-row>
  <van-form @submit.stop="onSubmit">
    <van-tabs v-model:active="active" @change="onClear">
      <van-tab title="登录">
        <van-cell-group inset>
          <van-field
            v-model="formData.email"
            name="邮箱"
            label="邮箱"
            placeholder="邮箱"
            :rules="loginRules.email"
            clearable
          />
          <van-field
            v-model="formData.password"
            type="password"
            name="密码"
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
            name="邮箱"
            label="邮箱"
            placeholder="邮箱"
            :rules="registerRules.email"
            clearable
          />
          <van-field
            v-model="formData.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="registerRules.password"
            clearable
          />
          <van-field
            v-model="formData.confirmPassword"
            type="password"
            name="密码"
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
import { ref, reactive } from "vue";
import {
  closeToast,
  showLoadingToast,
  showSuccessToast,
  showFailToast,
} from "vant";
import { supabase } from "@/supabase";

console.log(supabase);

const active = ref(0);

const formData = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

const emailValidator = (value, callback) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!regex.test(value)) {
    return "请填写正确的邮箱地址";
  }
};

const passwordValidator = (value, callback) => {
  if (value.length < 6) {
    return "密码长度不能小于6位";
  }
};

const confirmPasswordValidator = (value, callback) => {
  console.log(value);
  if (value !== formData.password) {
    return "两次输入密码不一致";
  }
};

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

function onClear(active) {
  formData.email = "";
  formData.password = "";
  formData.confirmPassword = "";
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
