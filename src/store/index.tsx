import { configureStore } from "@reduxjs/toolkit";
import { article } from "./api/article";

export const store = configureStore({
  reducer: {
    [article.reducerPath]: article.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([article.middleware]),
});
