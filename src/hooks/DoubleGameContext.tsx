import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import api from "../services/api";
import { IDailyResult } from "../types/IDailyResult";
import { IDouble } from "../types/IDouble";
import { ISocketGameDouble } from "../types/ISocketGameDouble";
import { useAuth } from "./AuthContext";
import { useLoading } from "./LoadingContext";

interface DoubleGameContextData {
  entries: IDouble[] | null;
  daily: IDailyResult;
  messages: ISocketGameDouble[];
  updateDoubleData(): void;
  updateCrashDataWithLoading(): void;
  listeningMessagesSocket(message: ISocketGameDouble): void;
  clearMessages(): void;
}

interface SocketProviderProps {
  children: JSX.Element;
}

export const DoubleGameContext = createContext<DoubleGameContextData>(
  {} as DoubleGameContextData
);

export const DoubleGameProvider: React.FC<SocketProviderProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<ISocketGameDouble[]>(
    [] as ISocketGameDouble[]
  );
  const [entries, setEntries] = useState<IDouble[] | null>(null);
  const [daily, setDaily] = useState<IDailyResult>({ win: 0, loss: 0 });
  const { isLoading, setLoadingVisible } = useLoading();
  const { signOut, isAuthenticated } = useAuth();

  const getDailyWinAndLoss = useCallback(async (): Promise<void> => {
    try {
      const response = await api.get("/signals/daily?game=double");
      setDaily(response.data);
    } catch (err) {
      signOut();
    }
  }, [signOut]);

  const getSignalsEntries = useCallback(async (): Promise<void> => {
    try {
      const response = await api.get("/signals/history?game=double");

      const data = response.data as IDouble[];
      setEntries(
        data.filter(
          (item) => item?.win_loss !== undefined && item?.win_loss !== null
        )
      );
    } catch (err) {
      signOut();
    }
  }, [signOut]);

  const updateDoubleData = useCallback(async () => {
    Promise.all([await getDailyWinAndLoss(), await getSignalsEntries()]);
  }, [getDailyWinAndLoss, getSignalsEntries]);

  const updateCrashDataWithLoading = useCallback(async () => {
    Promise.all([
      setLoadingVisible(true),
      await getDailyWinAndLoss(),
      await getSignalsEntries(),
      setLoadingVisible(false),
    ]);
  }, [getDailyWinAndLoss, getSignalsEntries, setLoadingVisible]);

  const removeCard = useCallback(() => {
    setTimeout(() => {
      setMessages([] as ISocketGameDouble[]);
    }, 15000);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([] as ISocketGameDouble[]);
  }, []);

  const listeningMessagesSocket = useCallback(
    (message: ISocketGameDouble) => {
      let data = message;

      if (data.type === "cancel-analyzing") {
        setMessages([] as ISocketGameDouble[]);
      } else {
        // window.scrollTo(0, 0);

        setMessages((oldValue) => {
          if (data.type === "gale") {
            const checkExistGale = oldValue.find(
              (message) => message.martingale_sequence === 1
            );

            data.martingale_sequence = !checkExistGale ? 1 : 2;

            return [...oldValue, data];
          } else {
            return [...oldValue, data];
          }
        });

        if (data.type === "loss" || data.type === "win") {
          removeCard();
          updateDoubleData();
        }
      }
    },
    [removeCard, updateDoubleData]
  );

  useEffect(() => {
    if (
      daily.win === 0 &&
      entries === null &&
      isAuthenticated &&
      isLoading === false
    ) {
      updateCrashDataWithLoading();

      // window.addEventListener("focus", () => {
      //   updateDoubleData();
      // });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daily, entries, isAuthenticated, isLoading]);

  return (
    <DoubleGameContext.Provider
      value={{
        entries,
        daily,
        updateDoubleData,
        updateCrashDataWithLoading,
        listeningMessagesSocket,
        messages,
        clearMessages,
      }}
    >
      {children}
    </DoubleGameContext.Provider>
  );
};

export function useDoubleGame(): DoubleGameContextData {
  const context = useContext(DoubleGameContext);

  if (!context) {
    throw new Error("useDoubleGame must be used within a CrashDoubleProvider");
  }

  return context;
}
