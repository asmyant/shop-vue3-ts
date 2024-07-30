<template>
  <div class="products-list">
    <template  v-if="!loading">
      <div class="products-list__grid">
        <ProductsListItem
          v-for="product of products"
          :key="product.id"
          :product="product"
        />
      </div>

      <PaginationList
        :total="pageCount"
        class="products-list__pagination"
        @changePage="changePage"
      />
    </template>

    <ProductsListSkeleton v-else />
  </div>
</template>

<script setup lang="ts">
import ProductsListItem from '@/components/productsList/ProductsListItem.vue';
import ProductsListSkeleton from '@/components/productsList/ProductsListSkeleton.vue';
import { useProducts } from '@/composables/useProducts';
import PaginationList from '@/components/paginationList/PaginationList.vue';

const {
  products,
  loading,
  pageCount,
  changePage,
} = useProducts();
</script>

<style lang="scss" scoped>
@import "@/components/productsList/styles/productsList/component";
</style>
