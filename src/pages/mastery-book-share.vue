<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
import { MasteryBook } from '../Mastery/types';
import { getMasteryBook } from '../Mastery/utils';

const route = useRoute()
const code = computed({
    get: () => route.params.code as string,
    set: () => { }
})
const masteryBook = ref<MasteryBook | null>(null)

watchEffect(async () => {
    const response = await getMasteryBook(code.value)
    masteryBook.value = response
})
</script>

<template>
    <h1>특성판 공유</h1>

    <h2>{{ code }}</h2>

    <div>{{ masteryBook?.Job }}</div>
</template>

<style>
</style>