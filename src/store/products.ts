import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';
import type { Product } from '@/types/Product';
import { getProductsItem, getProductsList } from '@/api/products';
import { getProductsCategories } from '@/api/productsCategories';

const useProductsStore = defineStore('products', () => {
  const products: Ref<Product[]> = ref([]);
  const product: Ref<Partial<Product>> = ref({});
  const categories: Ref<string[]> = ref([]);

  const fetchProducts = async () => {
    products.value = await getProductsList();
  };

  const fetchProduct = async (id: number) => {
    product.value = await getProductsItem(id);
  };

  const fetchCategories = async () => {
    categories.value = await getProductsCategories();
  };

  return {
    products,
    product,
    categories,
    fetchProduct,
    fetchProducts,
    fetchCategories,
  };
});

export {
  // eslint-disable-next-line import/prefer-default-export
  useProductsStore,
};
