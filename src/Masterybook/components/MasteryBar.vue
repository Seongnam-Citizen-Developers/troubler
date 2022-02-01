<script setup lang="ts">
import { Mastery } from '../../Mastery/types';

const props = defineProps<{
    mastery: Mastery
}>()
</script>

<template>
    <div class="border border-blue-300 flex flex-row justify-between mt-2 pl-1">
        <!-- <img src=""/> -->
        <span class="font-bold">{{ props.mastery.Name }}</span>
        <span class="w-4">{{ props.mastery.Cost }}</span>
    </div>
</template>

<style scoped>
</style>
