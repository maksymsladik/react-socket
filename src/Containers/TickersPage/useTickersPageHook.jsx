import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { tickersSelector } from "../../redux/selector";
import { getTickersAction } from "../../redux/actions/tickersAction";
import { pricesChanges } from "../../utils/helper";

export const useTickersPageHook = () => {
  const dispatch = useDispatch();
  const { tickers } = useSelector(tickersSelector);

  const [changes, setChanges] = useState({});

  useEffect(() => {
    dispatch(getTickersAction());
  }, [dispatch]);

  useEffect(() => {
    const changes = pricesChanges(tickers);
    setChanges(changes());
  }, [tickers]);

  return {
    tickers,
    changes,
  };
};
