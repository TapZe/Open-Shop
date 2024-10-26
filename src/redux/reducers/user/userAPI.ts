import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, UsersResponse } from "../../../types/types";
import { BASE_URI, USER_QUERY } from "../../../constants/apiBaseURI";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
  endpoints: (builder) => ({
    getAllUser: builder.query<UsersResponse, void>({
      query: () => ({
        url: USER_QUERY,
      }),
    }),
    getUserDetail: builder.query<User, number>({
      query: (id) => ({
        url: `${USER_QUERY}/${id}`,
      }),
    }),
  }),
});

export const { useGetAllUserQuery, useGetUserDetailQuery } = userApi;
