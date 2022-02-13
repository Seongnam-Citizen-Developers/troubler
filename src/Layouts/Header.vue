<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import LocaleSelect from '../Components/LocaleSelect.vue';

const { t } = useI18n()
</script>

<template>
  <div class="bg-gray-400 p-5">
    <form>
      <label>{{ t('language') }}</label>
      <LocaleSelect />
    </form>
  </div>
</template>

<i18n lang="yaml">
ko:
  language: "언어"
en: 
  language: "Language"
ja:
  language: "言語"
</i18n>
