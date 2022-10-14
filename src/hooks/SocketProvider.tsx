import React from "react";

import { SocketProvider } from "./SocketContext";
// import { CrashGameProvider } from "./CrashGameContext";
// import { DoubleGameProvider } from "./DoubleGameContext";

interface AppProviderProps {
  children: any;
}

const SocketIOProvider: React.FC<AppProviderProps> = ({ children }) => (
  <SocketProvider>{children}</SocketProvider>
);

export default SocketIOProvider;
