import TOKEN from "#store/token";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { createApi } from "@reduxjs/toolkit/query/react";
export const testimonial = createApi({
  reducerPath: "testimonial",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://157.245.56.86:1337",
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
