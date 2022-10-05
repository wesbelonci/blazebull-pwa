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
import { useAuth } from "./AuthContext";
import { useLoading } from "./LoadingContext";

interface CrashGameContextData {
  entries: ICrash[] | null;
  daily: IDailyResult;
  updateCrashData(): void;
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
  const [entries, setEntries] = useState<ICrash[] | null>(null);
  const [daily, setDaily] = useState<IDailyResult>({ win: 0, loss: 0 });
  const { isLoading, setLoadingVisible } = useLoading();
  const { signOut, isAuthenticated } = useAuth();

  const getDailyWinAndLoss = useCallback(async (): Promise<void> => {
    const response = await api.get("/signals/daily?game=crash");

    if (!response.data) {
      signOut();
    }

    setDaily(response.data);
  }, [signOut]);

  const getSignalsEntries = useCallback(async (): Promise<void> => {
    const response = await api.get("/signals/history?game=crash");

    if (!response.data) {
      signOut();
    }

    setEntries(response.data);
  }, [signOut]);

  const updateCrashData = useCallback(async () => {
    setLoadingVisible(true);
    Promise.all([await getDailyWinAndLoss(), await getSignalsEntries()]);
    setLoadingVisible(false);
  }, [getDailyWinAndLoss, getSignalsEntries, setLoadingVisible]);

  useEffect(() => {
    if (
      daily.win === 0 &&
      entries === null &&
      isAuthenticated &&
      isLoading === false
    ) {
      updateCrashData();

      // window.addEventListener("focus", () => {
      //   updateCrashData();
      // });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daily, entries, isAuthenticated, isLoading]);

  return (
    <CrashGameContext.Provider value={{ entries, daily, updateCrashData }}>
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
