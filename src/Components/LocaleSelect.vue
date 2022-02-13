<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { i18n, SupportedLocale, SupportedLocales } from '../i18n';

const { locale: globalLocale } = useI18n({ useScope: 'global' })
const locale = ref(i18n.global.locale.value as SupportedLocale)
watchEffect(() => { globalLocale.value = locale.value })

const { t } = useI18n()
</script>

<template>
  <form>
    <label>
      {{ t('language') }}
      <select v-model="locale">
        <option v-for="locale of SupportedLocales" :key="locale" :value="locale">{{ t(locale) }}</option>
      </select>
    </label>
  </form>
</template>

<i18n lang="yaml">
ko:
  language: "언어"
  ko: "한국어"
  en: "English"
  ja: "日本語"
en: 
  language: "Language"
  ko: "한국어"
  en: "English"
  ja: "日本語"
ja:
  language: "言語"
  ko: "한국어"
  en: "English"
  ja: "日本語"
</i18n>