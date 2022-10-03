import { io } from "socket.io-client";

const socket = io(process.env.REACT_APP_API_URL as string, {
  reconnectionDelayMax: 10000,
});

export { socket };
