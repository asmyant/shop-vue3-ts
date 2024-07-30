import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from '@/constants';
import type { ApiResponse } from '@/types/ApiResponse';

const apiInstance = axios.create({
  baseURL: API_URL,
});

/**
 * Get request
 * @param requestURL - Request URL
 * @param options - Options Axios
 */
const getRequest = async <T>(
  requestURL: string,
  options?: AxiosRequestConfig,
): Promise<ApiResponse<T>> => {
  try {
    const {
      data,
      status,
      statusText,
    }: AxiosResponse<T> = await apiInstance.get<T>(requestURL, options);

    return {
      status,
      statusText,
      data: data as T,
    };
  } catch ({ message, code }) {
    console.log(message);

    return {
      statusText: message as string,
      status: code as number,
    };
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getRequest,
};
