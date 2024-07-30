<template>
  <div class="products-list-item">
    <RouterLink
      :to="productPath"
      class="products-list-item__picture"
    >
      <img
        :src="`https://picsum.photos/600/600?random=${product.id}`"
        :alt="product.title"
        width="300"
        class="products-list-item__image"
      >
    </RouterLink>

    <RouterLink
      :to="productPath"
      class="products-list-item__title"
    >
      {{ product.title }}
    </RouterLink>

    <div class="products-list-item__footer">
      <div
        :class="productItemStockClasses"
        class="products-list-item__stock"
      >
        <template v-if="productItemInStock">
          IN STOCK
        </template>
        <template v-else>
          OUT STOCK
        </template>
      </div>

      <div class="products-list-item__price">
        $ {{ product.price }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Product } from '@/types/Product';
import { computed } from 'vue';

const props = defineProps<{ product: Product }>();

const productPath = {
  name: 'product',
  params: {
    id: props.product.id,
  },
};

const productItemInStock = props.product.rating.count !== 0;

const productItemStockClasses = computed(() => ({
  'products-list-item__stock--out': productItemInStock,
}));
</script>

<style lang="scss" scoped>
@import "@/components/productsList/styles/productsListItem/component";
</style>
