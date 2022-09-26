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
  crash: ICrash[] | null;
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
  const [crash, setCrash] = useState<ICrash[] | null>(null);
  const [daily, setDaily] = useState<IDailyResult>({ win: 0, loss: 0 });
  const { setLoadingVisible, isLoading } = useLoading();
  const { signOut, isAuthenticated } = useAuth();

  const getDailyWinAndLoss = useCallback(async (): Promise<void> => {
    setLoadingVisible(true);
    const response = await api.get("/signals/daily?game=crash");

    if (response.status !== 200) {
      signOut();
    }

    setDaily(response.data);
  }, [setLoadingVisible, signOut]);

  const getSignalsHistory = useCallback(async (): Promise<void> => {
    const response = await api.get("/signals/history?game=crash");

    if (response.status !== 200) {
      signOut();
    }

    setCrash(response.data);
    setLoadingVisible(false);
  }, [setLoadingVisible, signOut]);

  const updateCrashData = useCallback(async () => {
    Promise.all([await getDailyWinAndLoss(), await getSignalsHistory()]);
  }, [getDailyWinAndLoss, getSignalsHistory]);

  useEffect(() => {
    if (
      daily.win === 0 &&
      crash === null &&
      isAuthenticated &&
      isLoading === false
    ) {
      updateCrashData();

      window.addEventListener("focus", () => {
        updateCrashData();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daily, crash, isAuthenticated, isLoading]);

  // useEffect(() => {
  //   window.addEventListener("focus", () => {
  //     updateCrashData();
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <CrashGameContext.Provider value={{ crash, daily, updateCrashData }}>
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
