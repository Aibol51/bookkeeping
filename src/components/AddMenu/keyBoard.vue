<template>
  <div>
    <van-popup
      v-model:show="show"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '30%' }"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/stores/globalStore.js";
const globalStore = useGlobalStore();

const show = storeToRefs(globalStore).showKeyBoard;
</script>
<style lang="scss" scoped></style>
