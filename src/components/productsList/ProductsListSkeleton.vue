<template>
  <div class="products-list-skeleton">
    <div
      v-for="item of 10"
      :key="item"
      class="products-list-skeleton__item products-list-skeleton-item"
    >
      <div class="products-list-skeleton-item__image"></div>
      <div class="products-list-skeleton-item__title"></div>
      <div class="products-list-skeleton-item__footer">
        <div class="products-list-skeleton-item__badge"></div>
        <div class="products-list-skeleton-item__price"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/components/productsList/styles/productsListSkeleton/component";
</style>
