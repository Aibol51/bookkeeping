<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
    <van-button icon="plus" type="primary" />
    <van-tabbar-item icon="friends-o">个人</van-tabbar-item>
  </van-tabbar>
</template>
<script setup>

import { ref } from 'vue';
const active = ref(0);
</script>

<style lang="sass" scoped>
.van-button--normal
  border-radius: 35%
  align-self: center
</style>