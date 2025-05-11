import { configureStore } from "@reduxjs/toolkit";
import bookLibReducer from "./bookLibStore";

export const store = configureStore({
  reducer: {
    bookLib: bookLibReducer,
  },
});
