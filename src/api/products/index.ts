import { getRequest } from '@/api';
import type { Product } from '@/types/Product';

/**
 * Products list
 */
const getProductsList = async (): Promise<Product[]> => {
  const request = await getRequest<Product[]>('/products');

  return request.data ?? [];
};

/**
 * Product item
 * @param id - product id
 */
const getProductsItem = async (id: number | string): Promise<Partial<Product>> => {
  const request = await getRequest<Partial<Product>>(`/products/${id}`);

  return request.data ?? {} as Product;
};

export {
  getProductsItem,
  getProductsList,

};
