<script setup lang="ts">
import LocaleSelect from '../Components/LocaleSelect.vue';
import MainPanel from '../Components/MainPanel.vue';
import { useToggle } from '@vueuse/core'

const [isMainPanelShowing, toggleMainPanelShowing] = useToggle(false)
</script>

<template>
  <div class="bg-gray-400 p-5 flex flex-row justify-between">
    <button type="button" @click="toggleMainPanelShowing()">三</button>
    <form @submit.prevent>
      <LocaleSelect />
    </form>
  </div>
  <Teleport to="body">
    <Transition>
      <MainPanel v-model:isShowing="isMainPanelShowing" />
    </Transition>
  </Teleport>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-to,
.v-leave-from {
  transform: translateX(0px);
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>