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

interface SocketCrashContextData {
  message: ISocketMessage | null;
}

interface SocketProviderProps {
  children: JSX.Element;
}

export const SocketCrashContext = createContext<SocketCrashContextData>(
  {} as SocketCrashContextData
);

export const SocketCrashProvider: React.FC<SocketProviderProps> = ({
  children,
}) => {
  const [message, setMessage] = useState<ISocketMessage | null>(null);
  const { updateCrashData } = useCrashGame();
  const { isAuthenticated } = useAuth();

  const webSocket = useCallback(() => {
    socket.on("message", (msg: ISocketMessage) => {
      setMessage(msg);
      if (msg.game === "crash") {
        console.log(msg);
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
    <SocketCrashContext.Provider value={{ message }}>
      {children}
    </SocketCrashContext.Provider>
  );
};

export function useSocketCrash(): SocketCrashContextData {
  const context = useContext(SocketCrashContext);

  if (!context) {
    throw new Error("useSocketCrash must be used within a SocketCrashProvider");
  }

  return context;
}
