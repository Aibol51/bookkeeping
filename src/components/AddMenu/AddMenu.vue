<template>
  <div>
    <van-popup
      v-model:show="show"
      position="right"
      :style="{ width: '100%', height: '100%' }"
      closeable
      close-icon="arrow-left"
      close-icon-position="top-left"
    >
      <div class="topBack"></div>
      <van-tabs v-model:active="active" type="card">
        <van-tab title="支出">
          <ExpensesList />
        </van-tab>
        <van-tab title="收入">收入</van-tab>
      </van-tabs>
    </van-popup>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/stores/globalStore.js";
import ExpensesList from '../AddMenu/ExpensesList.vue'
const globalStore = useGlobalStore();

const show = storeToRefs(globalStore).showAddMenu;
</script>
<style lang="scss" scoped>
.van-popup {
    .topBack{
        height: 8%;
        width: 100%;
        background: deepskyblue;
    }
  .van-tabs {
    margin-top: 10%;
    :deep(.van-tab--card){
        border: none;
    }
    :deep(.van-tabs__nav--card){
        border-radius: 15px;
    }
    :deep(.van-tab--card.van-tab--active){
        border-radius: 15px;
    }
  }
}
</style>
