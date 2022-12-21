import { configureStore } from "@reduxjs/toolkit";
import { article } from "./api/article";
import { testimonial } from "./api/testimonial";

export const store = configureStore({
  reducer: {
    [article.reducerPath]: article.reducer,
    [testimonial.reducerPath]: testimonial.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([article.middleware, testimonial.middleware]),
});
