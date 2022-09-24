import { io } from "socket.io-client";

const socket = io("https://api.blazebulls.app", {
  reconnectionDelayMax: 10000,
});

export { socket };
