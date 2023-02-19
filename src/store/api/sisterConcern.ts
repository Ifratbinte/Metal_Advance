import TOKEN from '#store/token';
import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const sisterConcern = createApi({
  reducerPath: 'sisterConcern',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.binimoysecurities.com',
    prepareHeaders: (headers, { getState }) => {
      headers.set('authorization', `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSisterConcern: builder.query({
      query: () => ({
        url: '/v1/sister-concerns?populate=*',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetSisterConcernQuery } = sisterConcern;
