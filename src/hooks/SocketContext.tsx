import React, { createContext, useContext, useEffect } from "react";
import io from "socket.io-client";
// import { socket } from "../services/socket";
// import { useAuth } from "./AuthContext";
import { useCrashGame } from "./CrashGameContext";
import { useDoubleGame } from "./DoubleGameContext";
import { ISocketMessage } from "../types/ISocketMessage";
import { useAuth } from "./AuthContext";
// import { useLoading } from "./LoadingContext";

interface SocketContextData {
  // message: ISocketMessage | null;
}

interface AuthProviderProps {
  children: JSX.Element;
}

export const SocketContext = createContext<SocketContextData>(
  {} as SocketContextData
);

export const SocketProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const {
    listeningMessagesSocket: listeningCrash,
    clearMessages: clearMessagesCrash,
  } = useCrashGame();
  const {
    listeningMessagesSocket: listeningDouble,
    clearMessages: clearMessagesDouble,
  } = useDoubleGame();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      const socket = io(process.env.REACT_APP_API_URL as string, {
        reconnectionDelayMax: 10000,
        reconnection: true,
        autoConnect: true,
      });

      socket.on("connect", () => {
        clearMessagesCrash();
        clearMessagesDouble();
        // console.log("connect");
      });

      socket.on("message", (msg: ISocketMessage) => {
        // console.log(msg);
        if (msg.game === "crash") {
          listeningCrash(msg);
        }

        if (msg.game === "double") {
          listeningDouble(msg);
        }
      });

      socket.on("disconnect", () => {
        clearMessagesCrash();
        clearMessagesDouble();
        // socket.connect();
      });

      socket.on("reconnect", () => {
        clearMessagesCrash();
        clearMessagesDouble();
        // socket.connect();
      });

      return () => {
        socket.off("connect");
        socket.off("message");
        socket.off("disconnect");
        socket.off("reconnect");
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
};

export function useSocket(): SocketContextData {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }

  return context;
}
