import { useProductsStore } from '@/store/products';
import { storeToRefs } from 'pinia';
import { PRODUCTS_ITEMS_PER_PAGE } from '@/constants';
import {
  onMounted,
  ref,
  unref,
  computed,
} from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const useProducts = () => {
  /* Products loading */
  const loading = ref(true);

  /* Store */
  const productsStore = useProductsStore();
  const { fetchProducts } = productsStore;
  const { products } = storeToRefs(productsStore);

  /* Items in one page */
  const itemsPerPage = ref(PRODUCTS_ITEMS_PER_PAGE);

  /* Active page - PROPS */
  const currentPage = ref(1);

  /* Pagination count */
  const pageCount = computed(() => (
    Math.ceil(unref(products).length / unref(itemsPerPage))
  ));

  /* Products paginated */
  const productsFiltered = computed(() => {
    const startIndex = (unref(currentPage) - 1) * unref(itemsPerPage);
    const endIndex = startIndex + unref((itemsPerPage));

    return unref(products).slice(startIndex, endIndex);
  });

  const changePage = (page: number) => {
    currentPage.value = page;
  };

  onMounted(async () => {
    await fetchProducts();

    loading.value = !loading.value;
  });

  return {
    products: productsFiltered,
    loading,
    pageCount,
    changePage,
  };
};
