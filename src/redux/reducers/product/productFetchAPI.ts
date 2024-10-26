import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { allProductsResponse, product } from '../../../types/types'
import { BASE_URI, PRODUCT_QUERY } from '../../../constants/apiBaseURI'
import { initiateQuantity } from './productQuantitySlice';

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getAllProduct: builder.query<allProductsResponse, void>({
      query: () => `${PRODUCT_QUERY}`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const ids: number[] = data.map((product) => product.id);
          dispatch(initiateQuantity(ids));
        } catch (error) {
          console.error('Query failed:', error);
        }
      },
    }),
    getProductById: builder.query<product, number>({
      query: (id) => `${PRODUCT_QUERY}/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductQuery, useGetProductByIdQuery } = productApi