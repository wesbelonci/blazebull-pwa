import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { socket } from "../services/socket";
import { ISocketMessage } from "../types/ISocketMessage";
import { useAuth } from "./AuthContext";
import { useCrashGame } from "./CrashGameContext";
import { useDoubleGame } from "./DoubleGameContext";
import { useLoading } from "./LoadingContext";

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
  const { listeningMessagesSocket: listeningCrash } = useCrashGame();
  const { listeningMessagesSocket: listeningDouble } = useDoubleGame();
  const { isLoading } = useLoading();
  const { isAuthenticated } = useAuth();

  const webSocket = useCallback(() => {
    if (socket.connected) {
      socket.on("message", (msg: ISocketMessage) => {
        if (msg.game === "crash") {
          // console.log("crash", msg);
          listeningCrash(msg);
        }

        if (msg.game === "double") {
          // console.log("double", msg);
          listeningDouble(msg);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, socket.connected]);

  useEffect(() => {
    if (isAuthenticated) {
      webSocket();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, socket.connected]);

  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
};

export function useSocket(): SocketContextData {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }

  return context;
}
