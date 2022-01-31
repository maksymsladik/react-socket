import { SocketApi } from "../../services/socketApi";
import { setTickers } from "../reducers/tickersSlice";

export const getTickersAction = () => {
  return (dispatch) => {
    try {
      SocketApi.connect();

      SocketApi.getTickers((response) => {
        dispatch(setTickers(response));
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
