<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Layout from '../Layouts/Layout.vue';

useI18n()
</script>

<template>
  <Layout>
    <h1 class="text-3xl font-bold underline">Troubler</h1>
    <p v-t="'message'" />
  </Layout>
</template>

<i18n lang="yaml">
ko:
  message: "트러블 슈터를 위한 커뮤니티 서비스"
  linkMessage: "특성판 공유"
en: 
  message: "Community Service for TROUBLESHOOTER"
  linkMessage: "Characteristics board."
ja:
  message: "TROUBLESHOOTERのためのコミュニティサービス"
  linkMessage: "特性版共有"
</i18n>
