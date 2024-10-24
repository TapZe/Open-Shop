import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { allProductsResponse, categoryResponse } from '../../../types/types'
import { BASE_URI, PRODUCT_CAT_QUERY } from '../../../constants/apiBaseURI'

// Define a service using a base URL and expected endpoints
export const productCategoryApi = createApi({
  reducerPath: 'productCategoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
    refetchOnReconnect: true,
  endpoints: (builder) => ({
    getAllCategory: builder.query<categoryResponse, void>({
      query: () => `${PRODUCT_CAT_QUERY}`,
    }),
      getProductByCategory: builder.query<allProductsResponse, string>({
      query: (category) => `${PRODUCT_CAT_QUERY}/${category}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCategoryQuery, useGetProductByCategoryQuery } = productCategoryApi