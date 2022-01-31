import { configureStore } from "@reduxjs/toolkit";

import tickersSliceReducer from "./reducers/tickersSlice";
import { tickersMiddleware } from "./middlewares/tickersMiddleware";

export const store = configureStore({
  reducer: {
    tickersSlice: tickersSliceReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    tickersMiddleware,
  ],
});
