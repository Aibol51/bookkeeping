<template>
  <div>
    <van-popup v-model:show="show" position="top" :style="{ height: '100%' }">
      <van-cell-group>
        <van-cell
          title="支出"
          value="支出"
          icon="arrow"
          @click="show = false"
        ></van-cell>
        <van-cell
          title="收入"
          value="收入"
          icon="arrow"
          @click="show = false"
        ></van-cell>
      </van-cell-group>
    </van-popup>
  </div>
</template>
<script setup>
import { ref } from "vue";

const show = ref(false);
const showPopup = () => {
  show.value = true;
};
</script>
<style lang="scss" scoped></style>
