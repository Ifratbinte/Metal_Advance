import { configureStore } from "@reduxjs/toolkit";
import { article } from "./api/article";
import { management } from "./api/management";
import { portfolio } from "./api/portfolio";
import { portfolioCategory } from "./api/portfolioCategory";
import { service } from "./api/service";
import { testimonial } from "./api/testimonial";

export const store = configureStore({
  reducer: {
    [article.reducerPath]: article.reducer,
    [testimonial.reducerPath]: testimonial.reducer,
    [management.reducerPath]: management.reducer,
    [service.reducerPath]: service.reducer,
    [portfolio.reducerPath]: portfolio.reducer,
    [portfolioCategory.reducerPath]: portfolioCategory.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      article.middleware,
      testimonial.middleware,
      management.middleware,
      service.middleware,
      portfolio.middleware,
      portfolioCategory.middleware,
    ]),
});
