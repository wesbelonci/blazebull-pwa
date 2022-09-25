import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { socket } from "../services/socket";
import { ISocketMessage } from "../types/ISocketMessage";
import { useAuth } from "./AuthContext";
import { useCrashGame } from "./CrashGameContext";

interface SocketContextData {
  message: ISocketMessage | null;
}

interface AuthProviderProps {
  children: JSX.Element;
}

export const SocketContext = createContext<SocketContextData>(
  {} as SocketContextData
);

export const SocketProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [message, setMessage] = useState<ISocketMessage | null>(null);
  const { updateCrashData } = useCrashGame();
  const { isAuthenticated } = useAuth();

  const webSocket = useCallback(() => {
    socket.on("message", (msg: ISocketMessage) => {
      setMessage(msg);

      if (msg.type === "loss" || msg.type === "win") {
        updateCrashData();
      }
    });
  }, [updateCrashData]);

  useEffect(() => {
    if (message === null && isAuthenticated) {
      webSocket();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, message, isAuthenticated]);

  return (
    <SocketContext.Provider value={{ message }}>
      {children}
    </SocketContext.Provider>
  );
};

export function useSocket(): SocketContextData {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }

  return context;
}
