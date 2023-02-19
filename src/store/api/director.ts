import TOKEN from "#store/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const director = createApi({
  reducerPath: "director",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.binimoysecurities.com",
    prepareHeaders: (headers, { getState }) => {
      headers.set("authorization", `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDirector: builder.query({
      query: (url: string = "/v1/teams?populate=*") => ({
        url,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDirectorQuery } = director;
