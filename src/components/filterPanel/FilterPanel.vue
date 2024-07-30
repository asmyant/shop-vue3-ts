<template>
  <div class="filter-panel">
    <FilterPanelItem
      class="filter-panel__item"
      title="Categories"
    >
      <FilterPanelList :items="categories" />
    </FilterPanelItem>
  </div>
</template>

<script setup lang="ts">
import FilterPanelItem from '@/components/filterPanel/FilterPanelItem.vue';
import FilterPanelList from '@/components/filterPanel/FilterPanelList.vue';
import { useProductsCategories } from '@/composables/useProductsCategories';

const { categories } = useProductsCategories();
</script>

<style lang="scss" scoped>
@import "@/components/filterPanel/styles/filterPanel/component";
</style>
