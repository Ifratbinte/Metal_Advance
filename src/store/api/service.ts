import TOKEN from "#store/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const service = createApi({
  reducerPath: "service",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://157.245.56.86:1337",
    prepareHeaders: (headers, { getState }) => {
      headers.set("authorization", `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => ({
        url: "/v1/services?populate=*",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetServicesQuery } = service;
