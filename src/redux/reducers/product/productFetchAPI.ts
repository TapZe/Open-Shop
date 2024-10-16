import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { allProductsResponse, product } from '../../../types/types'
import { BASE_URI, PRODUCT_QUERY } from '../../../constants/apiBaseURI'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
    refetchOnReconnect: true,
  endpoints: (builder) => ({
    getAllProduct: builder.query<allProductsResponse, null>({
      query: () => `${PRODUCT_QUERY}`,
    }),
      getProductById: builder.query<product, number>({
      query: (id) => `${PRODUCT_QUERY}/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductQuery, useGetProductByIdQuery } = productApi