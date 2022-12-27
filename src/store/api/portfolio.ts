import TOKEN from "#store/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portfolio = createApi({
  reducerPath: "portfolio",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.binimoysecurities.com",
    prepareHeaders: (headers, { getState }) => {
      headers.set("authorization", `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPortfolios: builder.query({
      query: () => ({
        url: "/v1/portfolios?populate=*",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPortfoliosQuery } = portfolio;
