<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
import { MasteryBook } from '../Mastery/types';
import { getMasteryBook } from '../Mastery/utils';
import Book from '../Mastery/components/Book.vue';

const route = useRoute()
const code = computed({
    get: () => route.params.code as string,
    set: () => { }
})
const masteryBook = ref<MasteryBook | null>(null)

watchEffect(() => {
    getMasteryBook(code.value).then(value => { masteryBook.value = value })
})


const copied = ref(false)
function addCodeToClipboard() {
    navigator.clipboard.writeText(code.value)
    copied.value = true
    setTimeout(() => {
        copied.value = false
    }, 3000);
}
</script>

<template>
    <h1>특성판 공유</h1>

    <div v-if="masteryBook">
        <div>
            <pre>{{ code }}</pre>
            <button
                class="bg-slate-300 border-slate-900"
                type="button"
                :disabled="copied"
                @click="addCodeToClipboard"
            >
                <span v-if="copied">Copied!</span>
                <span v-else>Copy</span>
            </button>
        </div>

        <Book :mastery-book="masteryBook" />
    </div>
    <div v-else>Decoding Code fail</div>
</template>

<style>
</style>