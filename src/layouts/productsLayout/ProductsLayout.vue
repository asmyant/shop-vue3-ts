<template>
  <ContainerGrid class="products-layout">
    <div class="products-layout__aside">
      <FilterPanel class="products-layout__filter"/>
    </div>
    <div class="products-layout__content">
      <ProductsList/>
    </div>
  </ContainerGrid>
</template>

<script setup lang="ts">
import FilterPanel from '@/components/filterPanel/FilterPanel.vue';
import ProductsList from '@/components/productsList/ProductsList.vue';
import ContainerGrid from '@/components/containerGrid/ContainerGrid.vue';
</script>

<style lang="scss" scoped>
@import "@/layouts/productsLayout/styles/productsLayout/component";
</style>
