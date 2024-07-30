export interface ApiResponse<T> {
  statusText?: string;
  status?: number;
  data?: T;
}
