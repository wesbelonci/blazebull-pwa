import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import api from "../services/api";
import { ICrash } from "../types/ICrash";
import { IDailyResult } from "../types/IDailyResult";
import { ISocketGameCrash } from "../types/ISocketGameCrash";
import { useAuth } from "./AuthContext";
import { useLoading } from "./LoadingContext";

interface CrashGameContextData {
  entries: ICrash[] | null;
  daily: IDailyResult;
  messages: ISocketGameCrash[];
  updateCrashData(): void;
  updateCrashDataWithLoading(): void;
  listeningMessagesSocket(message: ISocketGameCrash): void;
}

interface AuthProviderProps {
  children: JSX.Element;
}

export const CrashGameContext = createContext<CrashGameContextData>(
  {} as CrashGameContextData
);

export const CrashGameProvider: React.FC<AuthProviderProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<ISocketGameCrash[]>(
    [] as ISocketGameCrash[]
  );
  const [entries, setEntries] = useState<ICrash[] | null>(null);
  const [daily, setDaily] = useState<IDailyResult>({ win: 0, loss: 0 });
  const { isLoading, setLoadingVisible } = useLoading();
  const { signOut, isAuthenticated } = useAuth();

  const getDailyWinAndLoss = useCallback(async (): Promise<void> => {
    try {
      const response = await api.get("/signals/daily?game=crash");
      setDaily(response.data);
    } catch (err) {
      signOut();
    }
  }, [signOut]);

  const getSignalsEntries = useCallback(async (): Promise<void> => {
    try {
      const response = await api.get("/signals/history?game=crash");
      setEntries(response.data);
    } catch (err) {
      signOut();
    }
  }, [signOut]);

  const updateCrashData = useCallback(async () => {
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
      setMessages([] as ISocketGameCrash[]);
    }, 10000);
  }, []);

  const listeningMessagesSocket = useCallback(
    (message: ISocketGameCrash) => {
      let data = message;

      if (data.type === "cancel-analyzing") {
        setMessages([] as ISocketGameCrash[]);
      } else {
        window.scrollTo(0, 0);

        const checkExistGale = messages.find(
          (message) => message.type === "gale"
        );

        if (!checkExistGale && data.type === "gale") {
          data.martingale_sequence = 1;
        }

        if (
          checkExistGale &&
          checkExistGale.martingale_sequence === 1 &&
          data.type === "gale"
        ) {
          data.martingale_sequence = 2;
        }

        setMessages((oldValue) => [...oldValue, data]);

        if (data.type === "loss" || data.type === "win") {
          removeCard();
          updateCrashData();
        }
      }
    },
    [messages, removeCard, updateCrashData]
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
      //   updateCrashData();
      // });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daily, entries, isAuthenticated, isLoading]);

  return (
    <CrashGameContext.Provider
      value={{
        entries,
        daily,
        updateCrashData,
        updateCrashDataWithLoading,
        listeningMessagesSocket,
        messages,
      }}
    >
      {children}
    </CrashGameContext.Provider>
  );
};

export function useCrashGame(): CrashGameContextData {
  const context = useContext(CrashGameContext);

  if (!context) {
    throw new Error("useCrashGame must be used within a CrashGameProvider");
  }

  return context;
}
