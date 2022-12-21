import TOKEN from "#store/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const article = createApi({
  reducerPath: "article",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://157.245.56.86:1337",
    prepareHeaders: (headers, { getState }) => {
      headers.set("authorization", `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => ({
        url: "/v1/articles?populate=*",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetArticlesQuery } = article;
