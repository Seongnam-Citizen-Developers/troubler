<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue';
const props = defineProps<{
    isShowing: boolean
}>()
const emit = defineEmits<{
    (event: 'update:isShowing', value: boolean): void
}>()

const container = ref<HTMLElement>()
onClickOutside(container, () => { if (props.isShowing) closePanel() })

function closePanel() {
    emit('update:isShowing', !props.isShowing)
}
</script>

<template>
    <nav
        ref="container"
        v-show="props.isShowing"
        class="absolute top-0 left-0 h-screen w-fit p-5 bg-slate-500"
    >
        <button type="button" @click="closePanel()">三</button>

        <ul class="pt-3">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/info">Info</router-link>
            </li>
            <li>
                <router-link to="/posts">Post</router-link>
            </li>
            <li>
                <details open>
                    <summary>Database</summary>
                    <ul class="pl-4">
                        <li>
                            <router-link to="/databases/mastery">Characters</router-link>
                        </li>
                        <li>
                            <router-link to="/databases/mastery">Masteries</router-link>
                        </li>
                        <li>
                            <router-link to="/databases/mastery">Modules</router-link>
                        </li>
                        <li>
                            <router-link to="/databases/mastery">Pets</router-link>
                        </li>
                        <li>
                            <router-link to="/databases/mastery">Items</router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/databases/masterybook">Mastery Books</router-link>
                        </li>-->
                    </ul>
                </details>
            </li>
        </ul>
    </nav>
</template>

<i18n lang="yaml">
</i18n>