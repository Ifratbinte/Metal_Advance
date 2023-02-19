import TOKEN from '#store/token';
import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { PortfolioCategoryResp } from 'interfaces/portfolio-category-interface';

export const portfolioCategory = createApi({
  reducerPath: 'portfolioCategory',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.binimoysecurities.com',
    prepareHeaders: (headers, { getState }) => {
      headers.set('authorization', `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPortfolioCategories: builder.query<
      PortfolioCategoryResp,
      null
    >({
      query: () => ({
        url: '/v1/portfolio-categories?populate=*',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPortfolioCategoriesQuery } = portfolioCategory;
