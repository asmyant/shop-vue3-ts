import { useProductsStore } from '@/store/products';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useProductsCategories = () => {
  const loading = ref(true);

  const productsStore = useProductsStore();
  const { fetchCategories } = productsStore;
  const { categories } = storeToRefs(productsStore);

  onMounted(async () => {
    await fetchCategories();

    loading.value = !loading.value;
  });

  return {
    categories,
    loading,
  };
};
