import TOKEN from "#store/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const management = createApi({
  reducerPath: "management",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.binimoysecurities.com",
    prepareHeaders: (headers, { getState }) => {
      headers.set("authorization", `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getManagement: builder.query({
      query: (url: string = "/v1/teams?populate=*") => ({
        url,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetManagementQuery } = management;
