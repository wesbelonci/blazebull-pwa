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
  const { setLoadingVisible } = useLoading();

  const getDailyWinAndLoss = useCallback(async (): Promise<void> => {
    setLoadingVisible(true);
    const response = await api.get("/signals/daily?game=crash");

    setDaily(response.data);
  }, [setLoadingVisible]);

  const getSignalsHistory = useCallback(async (): Promise<void> => {
    const response = await api.get("/signals/history?game=crash");

    setCrash(response.data);
    setLoadingVisible(false);
  }, [setLoadingVisible]);

  const updateCrashData = useCallback(async () => {
    Promise.all([await getDailyWinAndLoss(), await getSignalsHistory()]);
  }, [getDailyWinAndLoss, getSignalsHistory]);

  useEffect(() => {
    if (daily.win === 0 && crash === null) {
      updateCrashData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daily, crash]);

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
