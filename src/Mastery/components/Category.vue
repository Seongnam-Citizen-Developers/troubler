<script setup lang="ts">
import { MasteriesInCategory } from '../types';
import MasteryBar from './MasteryBar.vue';

const props = defineProps<{
    masteriesInCategory: MasteriesInCategory
}>()
</script>

<template>
    <div class="border border-red-500">
        <div>{{ props.masteriesInCategory.Category }}</div>

        <div>
            <MasteryBar v-for="mastery in props.masteriesInCategory.Masteries" :mastery="mastery" />
        </div>
    </div>
</template>

<style scoped>
</style>
