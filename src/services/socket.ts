import { io } from "socket.io-client";

const socket = io("http://localhost:4000", {
  reconnectionDelayMax: 10000,
});

export { socket };
