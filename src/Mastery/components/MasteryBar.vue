<script setup lang="ts">
import { Mastery } from '../types';

const props = defineProps<{
    mastery: Mastery
}>()
</script>

<template>
    <div class="border border-blue-300 flex flex-row justify-between">
        <!-- <img src=""/> -->
        <span>{{ props.mastery.Name }}</span>
        <span class="w-8">{{ props.mastery.Cost }}</span>
    </div>
</template>

<style scoped>
</style>
