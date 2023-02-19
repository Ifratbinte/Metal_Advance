import TOKEN from '#store/token';
import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { PortfolioResInterface } from 'interfaces/portfolio-interface';

export const portfolio = createApi({
  reducerPath: 'portfolio',
  tagTypes: ['portfolios', 'single-portfolio'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.binimoysecurities.com',
    prepareHeaders: (headers, { getState }) => {
      headers.set('authorization', `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPortfolios: builder.query<PortfolioResInterface, null>({
      query: () => ({
        url: '/v1/portfolios?populate=*',
        method: 'GET',
      }),
      providesTags: ['portfolios'],
    }),
    getPortfolio: builder.query({
      query: ({ id }) => ({
        url: `/v1/portfolios/${id}?populate=*`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [
        { type: 'single-portfolio', id },
      ],
    }),
    updatePortfolio: builder.mutation({
      query: ({ id, data }) => ({
        url: `/v1/portfolios/${id}?populate=*`,
        method: 'PUT',
        header: {
          'Content Type': 'application/json',
        },
        body: data,
      }),
      invalidatesTags: ['portfolios', 'single-portfolio'],
    }),
  }),
});

export const { useGetPortfoliosQuery } = portfolio;
