import { io } from "socket.io-client";

import { socketUrl } from "../utils/constants";

export class SocketApi {
  constructor() {
    this.socket = null;
  }
  static connect = () => {
    this.socket = io.connect(socketUrl);
    this.socket?.emit("start");
  };

  static disconnect = () => {
    this.socket?.disconnect();
    this.socket = null;
  };

  static getTickers = (callback) => {
    this.socket?.on("ticker", (response) => {
      callback(response);
    });
  };
}
