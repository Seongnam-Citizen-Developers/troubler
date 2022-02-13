<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="bg-gray-400 p-5">
    <form>
      <label v-t="'language'" />
      <select v-model="locale">
        <option
          v-for="locale in ['ko', 'en', 'ja']"
          :key="`locale-${locale}`"
          :value="locale"
        >{{ locale }}</option>
      </select>
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
