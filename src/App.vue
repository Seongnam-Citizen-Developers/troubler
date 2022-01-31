<template>
  <metainfo>
    <!-- v-slot 뭔지 더 공부하기-->
    <template v-slot:title="{ content }">
      {{
        content ? `${content}` : `쓰레기`
      }}
    </template>
  </metainfo>
  <router-view></router-view>
</template>

<style></style>

<script lang="ts" setup>
</script>
