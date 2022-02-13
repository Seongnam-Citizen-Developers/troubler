<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
  <Header />
  <div class="p-5">
    <slot />
  </div>
  <Footer />
</template>