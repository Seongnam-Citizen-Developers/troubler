<script setup lang="ts">
import { readonly, Ref, ref, toRef, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
import { MasteryBook } from '../../../Masterybook/types';
import { getMasteryBook } from '../../../Masterybook/utils';
import Book from '../../../Masterybook/components/Book.vue';

const route = useRoute()
const code = readonly(toRef(route.params, 'code') as Ref<string>)
const masteryBook = ref<MasteryBook | null>(null)

watchEffect(() => {
    getMasteryBook(code.value).then(value => { masteryBook.value = value })
})


const codeCopied = ref(false)
function addCodeToClipboard() {
    navigator.clipboard.writeText(code.value)
    codeCopied.value = true
    setTimeout(() => {
        codeCopied.value = false
    }, 3000);
}

const iframeCopied = ref(false)
function addIframeToClipboard() {
    const iframe = `<iframe title="troubler masterybook sharing" width="1080px" height="780px" src='https://troubler.juho.kim/mastery/book/share/${code.value}'> </iframe>`
    navigator.clipboard.writeText(iframe)
    iframeCopied.value = true
    setTimeout(() => {
        iframeCopied.value = false
    }, 3000);
}

const embedCopied = ref(false)
function addEmbedToClipboard() {
    const embed = `<embed title="troubler masterybook sharing" width="100" src='https://troubler.juho.kim/mastery/book/share/${code.value}'> </embed>`
    navigator.clipboard.writeText(embed)
    embedCopied.value = true
    setTimeout(() => {
        embedCopied.value = false
    }, 3000);
}

</script>

<template>
    <h1 class>MasteryBook Sharing</h1>

    <div v-if="masteryBook">
        <div class="flex flex-row">
            <pre>{{ code }}</pre>
            <button
                class="bg-slate-300 border-slate-900 ml-2 p-1"
                type="button"
                :disabled="codeCopied"
                @click="addCodeToClipboard()"
            >
                <span v-if="codeCopied">Code Copied!</span>
                <span v-else>Code Copy</span>
            </button>
            <button
                class="bg-slate-300 border-slate-900 ml-2 p-1"
                type="button"
                :disabled="iframeCopied"
                @click="addIframeToClipboard()"
            >
                <span v-if="iframeCopied">iframe Copied!</span>
                <span v-else>iframe Copy</span>
            </button>
            <button
                class="bg-slate-300 border-slate-900 ml-2 p-1"
                type="button"
                :disabled="embedCopied"
                @click="addEmbedToClipboard()"
            >
                <span v-if="embedCopied">embed Copied!</span>
                <span v-else>embed Copy</span>
            </button>
        </div>

        <Book :mastery-book="masteryBook" />
    </div>
    <div v-else>Decoding Code fail</div>
</template>

<style>
</style>