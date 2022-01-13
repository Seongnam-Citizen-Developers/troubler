<template>
  <metainfo>
    <!-- v-slot 뭔지 더 공부하기-->
    <template v-slot:title="{ content }">{{
      content ? `${content}` : `쓰레기`
    }}</template>
  </metainfo>
  <router-view></router-view>
</template>

<style></style>

<script lang="ts" setup>
import { useMeta } from 'vue-meta'

// 테스트용으로 아무말 대잔치
useMeta({
  title: '뒤틀린 황천의 프로젝트',
  //이렇게 string Array로 하면 여러개의 meta 태그를 받ㄱ을수 있긴 한데,...이거 doc 보고 공부가 더 필요한건 사실임

  description: ['주부습진이 돌아오다', '매콤살벌한 로제떡볶이'],
})
</script>
