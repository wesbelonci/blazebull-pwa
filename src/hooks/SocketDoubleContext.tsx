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

interface SocketDoubleContextData {
  message: ISocketMessage | null;
}

interface SocketProviderProps {
  children: JSX.Element;
}

export const SocketDoubleContext = createContext<SocketDoubleContextData>(
  {} as SocketDoubleContextData
);

export const SocketDoubleProvider: React.FC<SocketProviderProps> = ({
  children,
}) => {
  const [message, setMessage] = useState<ISocketMessage | null>(null);
  const { updateCrashData } = useCrashGame();
  const { isAuthenticated } = useAuth();

  const webSocket = useCallback(() => {
    socket.on("message", (msg: ISocketMessage) => {
      setMessage(msg);

      if (msg.game === "double") {
        if (msg.type === "loss" || msg.type === "win") {
          updateCrashData();
        }
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
    <SocketDoubleContext.Provider value={{ message }}>
      {children}
    </SocketDoubleContext.Provider>
  );
};

export function useSocketDouble(): SocketDoubleContextData {
  const context = useContext(SocketDoubleContext);

  if (!context) {
    throw new Error("useSocketDouble must be used within a SocketProvider");
  }

  return context;
}
