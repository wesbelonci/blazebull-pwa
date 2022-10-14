import { io } from "socket.io-client";
// import { WebSocketEvent } from "../event/WebSocketEvent";
// import { ISocketMessage } from "../types/ISocketMessage";

const socket = io(process.env.REACT_APP_API_URL as string);

// socket.on("connect", () => {
//   console.log("connect");
// });

// socket.on("message", (msg) => {
//   console.log(msg);
// });

export { socket };
