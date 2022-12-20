import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TOKEN = `776717f8f058355b9a4bf35a216b188bba373c981ea982dd036b82b6b4dbdcb1f57200ed28b54a1e8a0b63e51cc74c2b01c058b6da002e6e503e244e367a792977685c850a8f19333b40e46fef34d4a0ac04c54bd3466b5071f555fe0817ad3ce77535c46d5bf8897cdcbcf5f9692b0a246a330b85092afea6d65d46f41cb5b2`;

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
        url: "/api/articles?populate=*",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetArticlesQuery } = article;
