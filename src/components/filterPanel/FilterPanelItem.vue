<template>
  <div class="filter-panel-item">
    <button
      class="filter-panel-item__title"
      @click="filterPanelItemContentToggle  "
    >
      {{ title }}
    </button>

    <div v-if="filterPanelItemContentToggled">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const filterPanelItemContentToggled = ref(false);

const filterPanelItemContentToggle = () => {
  filterPanelItemContentToggled.value = !filterPanelItemContentToggled.value;
};

defineProps<{
  title: string
}>();
</script>

<style lang="scss" scoped>
@import "@/components/filterPanel/styles/filterPanelItem/component";
</style>
