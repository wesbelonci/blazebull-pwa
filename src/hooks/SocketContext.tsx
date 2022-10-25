import React, { createContext, useContext, useEffect } from "react";
import io from "socket.io-client";
import { useCrashGame } from "./CrashGameContext";
import { useDoubleGame } from "./DoubleGameContext";
import { ISocketMessage } from "../types/ISocketMessage";
import { useAuth } from "./AuthContext";

interface SocketContextData {}

interface AuthProviderProps {
  children: JSX.Element;
}

export const SocketContext = createContext<SocketContextData>(
  {} as SocketContextData
);

export const SocketProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { isAuthenticated, token } = useAuth();

  const {
    listeningMessagesSocket: listeningCrash,
    clearMessages: clearMessagesCrash,
  } = useCrashGame();
  const {
    listeningMessagesSocket: listeningDouble,
    clearMessages: clearMessagesDouble,
  } = useDoubleGame();

  useEffect(() => {
    if (isAuthenticated && token) {
      const socket = io(process.env.REACT_APP_API_URL as string, {
        reconnectionDelayMax: 10000,
        reconnection: true,
        autoConnect: true,
        auth: {
          token: token,
        },
      });

      socket.on("connect", () => {
        clearMessagesCrash();
        clearMessagesDouble();
      });

      socket.on("message", (msg: ISocketMessage) => {
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
      });

      socket.on("reconnect", () => {
        clearMessagesCrash();
        clearMessagesDouble();
      });

      return () => {
        socket.off("connect");
        socket.off("message");
        socket.off("disconnect");
        socket.off("reconnect");
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
};

export function useSocket(): SocketContextData {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }

  return context;
}
