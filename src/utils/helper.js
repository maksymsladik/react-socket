export const pricesChanges = (tickers) => {
  const lastTwoTickers = tickers.slice(8, 10);

  return () => {
    const [penultimateValue, lastValue] = lastTwoTickers;

    return Object.keys(penultimateValue).reduce((ac, key) => {
      const diff = lastValue[key] - penultimateValue[key];
      ac[key] = diff.toFixed(2);

      return ac;
    }, {});
  };
};
