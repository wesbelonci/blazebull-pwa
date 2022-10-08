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
import { useAuth } from "./AuthContext";
import { useLoading } from "./LoadingContext";

interface DoubleGameContextData {
  entries: IDouble[] | null;
  daily: IDailyResult;
  updateDoubleData(): void;
  updateCrashDataWithLoading(): void
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
      setEntries(response.data);
    } catch (err) {
      signOut();
    }
  }, [signOut]);

  const updateDoubleData = useCallback(async () => {
    Promise.all([await getDailyWinAndLoss(), await getSignalsEntries()]);
    
  }, [getDailyWinAndLoss, getSignalsEntries]);

  const updateCrashDataWithLoading = useCallback(async () => {
    Promise.all([setLoadingVisible(true), await getDailyWinAndLoss(), await getSignalsEntries(), setLoadingVisible(false)]);
  }, [getDailyWinAndLoss, getSignalsEntries, setLoadingVisible]);

  useEffect(() => {
    if (
      daily.win === 0 &&
      entries === null &&
      isAuthenticated &&
      isLoading === false
    ) {
      updateDoubleData();

      // window.addEventListener("focus", () => {
      //   updateDoubleData();
      // });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daily, entries, isAuthenticated, isLoading]);

  return (
    <DoubleGameContext.Provider value={{ entries, daily, updateDoubleData, updateCrashDataWithLoading }}>
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
