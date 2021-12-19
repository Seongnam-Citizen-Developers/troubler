<script setup lang="ts">
import { MasteryBook } from '../types';
import Category from './Category.vue';

const props = defineProps<{
    masteryBook: MasteryBook
}>()
</script>

<template>
    <div class="border border-black">
        <div>트러블슈터: {{ props.masteryBook.RosterKey }}</div>
        <div>클래스: {{ props.masteryBook.Job }}</div>
        <div>레벨: {{ props.masteryBook.RosterLevel }}</div>
        <!-- <div>{{ props.masteryBook.RosterType }}</div> -->
        <!-- <div>{{ props.masteryBook.Version }}</div> -->

        <div class="grid grid-cols-1 lg:grid-cols-3">
            <Category
                v-for="masteriesInCategory in props.masteryBook.Mastery"
                :masteries-in-category="masteriesInCategory"
            />
        </div>
    </div>
</template>

<style scoped>
</style>
