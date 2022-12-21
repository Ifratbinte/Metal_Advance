import TOKEN from "#store/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const management = createApi({
  reducerPath: "management",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://157.245.56.86:1337",
    prepareHeaders: (headers, { getState }) => {
      headers.set("authorization", `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getManagement: builder.query({
      query: () => ({
        url: "/v1/teams?populate=*",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetManagementQuery } = management;
