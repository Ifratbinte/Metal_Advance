import { configureStore } from '@reduxjs/toolkit';
import { article } from './api/article';
import { management } from './api/management';
import { director } from './api/director';
import { portfolio } from './api/portfolio';
import { portfolioCategory } from './api/portfolioCategory';
import { service } from './api/service';
import { sisterConcern } from './api/sisterConcern';
import { testimonial } from './api/testimonial';

export const store = configureStore({
  reducer: {
    [article.reducerPath]: article.reducer,
    [testimonial.reducerPath]: testimonial.reducer,
    [management.reducerPath]: management.reducer,
    [director.reducerPath]: director.reducer,
    [service.reducerPath]: service.reducer,
    [portfolio.reducerPath]: portfolio.reducer,
    [portfolioCategory.reducerPath]: portfolioCategory.reducer,
    [sisterConcern.reducerPath]: sisterConcern.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      article.middleware,
      testimonial.middleware,
      management.middleware,
      director.middleware,
      service.middleware,
      portfolio.middleware,
      portfolioCategory.middleware,
      sisterConcern.middleware,
    ]),
});
