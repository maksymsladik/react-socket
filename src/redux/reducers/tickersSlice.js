import { createSlice } from "@reduxjs/toolkit";

import { initialTickers } from "../../utils/constants";

const initialState = {
  tickers: initialTickers,
};

export const tickersSlice = createSlice({
  name: "tickers",
  initialState,
  reducers: {
    setTickers: (state, action) => {
      const prevState = [...state.tickers].slice(-9);
      state.tickers = [...prevState, action.payload];
    },
  },
});

export const { setTickers } = tickersSlice.actions;

export default tickersSlice.reducer;
