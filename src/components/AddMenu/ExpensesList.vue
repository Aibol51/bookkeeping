<template>
  <div>
    <van-grid :gutter="10" :border="false">
      <van-grid-item v-for="(item, index) in expensesList" :key="index" @click="showPopup">
        <font-awesome-icon class="iconBack" :icon="item.icon" />
        <p class="listTitle">
          {{ item.text }}
        </p>
        <keyBoard></keyBoard>
      </van-grid-item>
    </van-grid>
    
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/stores/globalStore.js";
import keyBoard from "../AddMenu/keyBoard.vue";

const globalStore = useGlobalStore();

const showPopup = () => {
    globalStore.setShowKeyBoard(true);
};
const expensesList = [
  { icon: "fa-solid fa-burger", text: "餐饮" },
  { icon: "fa-solid fa-cart-shopping", text: "购物" },
  { icon: "fa-solid fa-car ", text: "交通" },
  { icon: "fa-solid fa-shirt", text: "服饰美容" },
  { icon: "fa-solid fa-champagne-glasses", text: "娱乐" },
  { icon: "fa-solid fa-dumbbell", text: "运动" },
  { icon: "fa-solid fa-phone-volume", text: "通讯" },
  { icon: "fa-solid fa-house", text: "住房" },
  { icon: "fa-solid fa-hand-holding-droplet", text: "生活服务" },
  { icon: "fa-solid fa-car", text: "汽车" },
  { icon: "fa-solid fa-baby-carriage", text: "育儿" },
  { icon: "fa-solid fa-paw", text: "宠物" },
  { icon: "fa-solid fa-briefcase-medical", text: "医疗" },
  { icon: "fa-solid fa-plane", text: "旅游" },
  { icon: "fa-solid fa-bed", text: "酒店" },
  { icon: "fa-solid fa-graduation-cap", text: "学习" },
  { icon: "fa-solid fa-gift", text: "人情" },
  { icon: "fa-solid fa-circle-dollar-to-slot", text: "其他" },
  { icon: "fa-solid fa-arrow-up-from-bracket", text: "借出" },
  { icon: "fa-solid fa-hand-holding-dollar", text: "还债" },
];
</script>

<style lang="scss" scoped>
.van-grid{
  .van-grid-item{
    :deep(.van-grid-item__content){
      gap: 5px;
    }
  }
}
.iconBack {
  background: #CCCCCC;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  vertical-align: middle;
  padding: 10px;
  :visited {
    background: #ff0000;
  }
}
.listTitle{
  font-size: 12px;
  text-align: center;
}
</style>
