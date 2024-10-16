import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginCredentials, LoginResponse } from "../../../types";
import { saveCurrentToken } from "./userSlice";
import { BASE_URI, LOGIN_QUERY } from "../../../constants/apiBaseURI";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URI,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: LOGIN_QUERY,
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(saveCurrentToken(data.token));
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),
  }),
});

export const { useLoginUserMutation } = userApi;
