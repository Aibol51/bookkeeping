<template>
  <van-row justify="center">
    <van-cell-group inset id="loginLogo">
      <img class="logo" src="../assets/img/bookkeeping.png" alt="" />
    </van-cell-group>
  </van-row>
  <van-tabs v-model:active="active" animated>
    <van-tab title="登录">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="loginForm.loginEmail"
            name="邮箱"
            label="邮箱"
            placeholder="请在此输入登录邮箱"
            :rules="formRules.email"
          />
        </van-cell-group>
        <van-cell-group inset>
          <van-field
            v-model="loginForm.loginPassword"
            type="password"
            name="密码"
            label="密码"
            placeholder="请在此输入登录密码"
            :rules="formRules.password"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </van-tab>
    <van-tab title="注册">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="registerForm.registerEmail"
            name="邮箱"
            label="注册邮箱"
            placeholder="请在此输入注册邮箱"
            :rules="formRules.email"
          />
        </van-cell-group>
        <van-cell-group inset>
          <van-field
            v-model="registerForm.registerPassword"
            type="password"
            name="密码"
            label="新密码"
            placeholder="请在此输入新密码"
            :rules="formRules.password"
          />
        </van-cell-group>
        <van-cell-group inset>
          <van-field
            v-model="registerForm.retryPassword"
            type="password"
            name="密码"
            label="再次输入密码"
            placeholder="再次输入新密码"
            :rules="formRules.confirmPassword"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>
    </van-tab>
  </van-tabs>
</template>
<script setup>
import { ref, reactive } from "vue";
import { closeToast, showLoadingToast } from "vant";

const loginForm = reactive({
  loginEmail: "",
  loginPassword: "",
});
const registerForm = reactive({
  registerEmail: "",
  registerPassword: "",
  retryPassword: "",
});

const formRules = ref({
  email: [
    { required: true, message: "请输入邮箱", trigger: "onBlur" },
    {
      pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
      message: "邮箱格式不正确",
      trigger: "onBlur",
    },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "onBlur" },
    {
      pattern: /^.{6,15}$/,
      message: "长度在 6 到 15 个字符",
      trigger: "onBlur",
    },
  ],
  confirmPassword: [
    { required: true, message: "请再次输入新密码", trigger: "onBlur" },
    {
      validator: validatePassword,
      message: "两次输入的密码不一致",
      trigger: "onBlur",
    },
  ],
});
function validatePassword(aaa, value, callback) {
  console.log(aaa, value, callback);
  console.log(validatePassword);
  if (value !== registerForm.registerPassword) {
    callback(new Error('两次输入的密码不一致'));
    console.log("123");
  } 
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
    width: 90%;
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
