<template>
  <router-view/>
  
</template>
<script setup>
import FooterTap from './components/FooterTap.vue'
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
input:-internal-autofill-previewed,
input:-internal-autofill-selected {
  transition: background-color 5000s ease-in-out 0s !important;
}

#app{
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  height: 100vh;
  width: 100%;
}
</style>
