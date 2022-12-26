import TOKEN from "#store/token";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { createApi } from "@reduxjs/toolkit/query/react";
export const testimonial = createApi({
  reducerPath: "testimonial",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.binimoysecurities.com",
    prepareHeaders: (headers, { getState }) => {
      headers.set("authorization", `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTestimonial: builder.query({
      query: () => ({
        url: "/v1/testimonials?populate=*",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetTestimonialQuery } = testimonial;
