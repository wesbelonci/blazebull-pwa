import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Socket, io } from "socket.io-client";
// import { socket } from "../services/socket";
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

  const [socket, setSocket] = useState<Socket | null>(null);

  const webSocket = useCallback(() => {
    if (socket) {
      socket.on("message", (msg: ISocketMessage) => {
        if (msg.game === "crash") {
          listeningCrash(msg);
        }

        if (msg.game === "double") {
          listeningDouble(msg);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isAuthenticated) {
      if (!socket) {
        const connection = io(process.env.REACT_APP_API_URL as string, {
          reconnectionDelayMax: 10000,
          autoConnect: false,
        });

        setSocket(connection);
      }
      if (socket && !socket.active) {
        socket.connect();
      }
    } else {
      socket?.disconnect();
    }
  }, [isAuthenticated, socket]);

  useEffect(() => {
    if (socket && socket.active) {
      socket.on("connect", () => {
        webSocket();
      });

      socket.on("disconnect", () => {
        setSocket(null);
      });

      return () => {
        socket.off("connect");
        socket.off("disconnect");
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webSocket, socket]);

  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
};

export function useSocket(): SocketContextData {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }

  return context;
}
