<template>
  <ul class="filter-panel-list">
    <li
      v-for="(item, index) of items"
      :key="index"
    >
      <button>{{ item }}</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: string[],
}>();
</script>

<style scoped>

</style>
