<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="img--wrapper">
      <img src="../assets/image/test.svg" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-image {
  position: absolute;
  z-index: 2;
}

.img--wrapper {
  padding: 5% 15%;
}

.container {
  height: 100vh;
  width: 100vw;
  background: rgb(250, 228, 35);
  min-height: 100%;
}

body {
}
</style>
