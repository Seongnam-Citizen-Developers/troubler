<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n({
  inheritLocale: true,
})
</script>

<template>
  <form>
    <label>{{ t('language') }}</label>
    <select v-model="locale">
      <option value="kr">한국어</option>
      <option value="en">English</option>
      <option value="ja">日本語</option>
    </select>
  </form>
  <h1 class="text-3xl font-bold underline">Troubler</h1>
  <p>{{ t('message') }}</p>
  <router-link :to="{ name: 'masteryBookShare' }">{{
    t('linkMessage')
  }}</router-link>
</template>

<i18n>
{
  "kr":{
    "language": "언어",
    "message": "트러블 슈터를 위한 커뮤니티 서비스",
    "linkMessage":'특성판 공유'
  },
  "en": {
    "language": "Language",
    "message": "Community Service for TROUBLESHOOTER",
    "linkMessage":'Characteristics board.'
  },
  "ja": {
    "language": "言語",
    "message": "TROUBLESHOOTERのためのコミュニティサービス",
    "linkMessage":'特性版共有'
  },
}
</i18n>
