import { getRequest } from '@/api';

/**
 * Products categories list
 */
const getProductsCategories = async (): Promise<string[]> => {
  const request = await getRequest<string[]>('/products/categories');

  return request.data ?? [];
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getProductsCategories,
};
