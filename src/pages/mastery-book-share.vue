<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const code = computed({
    get: () => route.params.code as string,
    set: () => { }
})


</script>

<template>
    <h1>특성판 공유</h1>

    <h2>{{ code }}</h2>
</template>

<style>
</style>