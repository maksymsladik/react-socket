export const tickersMiddleware = (state) => (next) => (action) => {
  switch (action.type) {
    case "tickers/setTickers":
      action.payload = [...action.payload].reduce((ac, item) => {
        ac[item.ticker] = item.price;

        return ac;
      }, {});

      break;

    default:
      break;
  }

  next(action);
};
