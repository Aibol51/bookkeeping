<template>
  <div>
    <van-popup
      v-model:show="show"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <p id="keyTitle">支出 · 餐饮</p>
      <van-grid :border="false">
        <van-button
          v-for="(item, index) in inputSelect"
          :key="index"
          round
          :icon="item.icon"
          :icon-position="item.iconPosition"
          @click="item.click"
        >
          {{ item.text }}
        </van-button>
      </van-grid>
      <van-grid :border="false" id="inputList">
        <van-button round id="currency">￥</van-button>
        <van-field v-model="value" type="number" readonly="true" />
      </van-grid>
      <van-number-keyboard
        :show="true"
        v-model="value"
        theme="custom"
        extra-key="."
        close-button-text="完成"
      />
    </van-popup>
    <van-date-picker
      v-model="currentDate"
      title="选择日期"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/stores/globalStore.js";
import { ref } from "vue";
const globalStore = useGlobalStore();
const show = storeToRefs(globalStore).showKeyBoard;

const inputSelect = [
  { text: "选择账户", icon: "arrow-down", iconPosition: "right" },
  { text: "凭证" },
  { text: "报销" },
  { text: "···" },
  { text: "日期", icon: "arrow-down", iconPosition: "right", click: "" },
];
const value = ref();
</script>
<style lang="scss" scoped>
#keyTitle {
  font-size: 17px;
  margin-top: 10px;
  text-align: center;
  color: gray;
}
:deep(.van-popup__close-icon) {
  font-size: 17px;
  top: 13px;
}
.van-number-keyboard {
  padding-bottom: 0;
}
.van-button {
  margin-top: 10px;
  height: 25px;
  border: 0;
  border-radius: 15px;
  background: #f2f2f2;
  color: rgb(0, 0, 0);
  --van-button-icon-size: 10px;
  padding: 0 12px;
  font-size: small;
}
.van-grid {
  justify-content: space-around;
  flex-wrap: nowrap;
}
:deep(.van-field__control) {
  font-size: xx-large;
}
#inputList {
  align-items: center;
  margin-top: 10px;
  #currency {
    font-size: 20px;
    color: gray;
    background: none;
    margin-top: 0;
    font-size: xx-large;
  }
}
</style>
