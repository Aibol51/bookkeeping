<template>
  <div>
    <van-popup
      v-model:show="show"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <van-number-keyboard
        :show="true"
        theme="custom"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/stores/globalStore.js";
const globalStore = useGlobalStore();
const show = storeToRefs(globalStore).showKeyBoard;

const onInput = (value) => showToast(value);
const onDelete = () => showToast("删除");
</script>
<style lang="scss" scoped>

</style>
