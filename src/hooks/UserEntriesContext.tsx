import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import api from "../services/api";
// import { ICrash } from "../types/ICrash";
// import { IDailyResult } from "../types/IDailyResult";
// import { ISocketGameCrash } from "../types/ISocketGameCrash";
import { IUserEntries } from "../types/IUserEntries";
import { useAuth } from "./AuthContext";
import { useLoading } from "./LoadingContext";

interface UserEntriesContextData {
  crash: IUserEntries | null;
  double: IUserEntries | null;
}

interface UserEntriesProviderProps {
  children: JSX.Element;
}

export const UserEntriesContext = createContext<UserEntriesContextData>(
  {} as UserEntriesContextData
);

export const UserEntriesProvider: React.FC<UserEntriesProviderProps> = ({
  children,
}) => {
  const [crashEntries, setCrashEntries] = useState<IUserEntries | null>(null);
  const [doubleEntries, setDoubleEntries] = useState<IUserEntries | null>(null);
  const { signOut, isAuthenticated } = useAuth();
  const { setLoadingVisible } = useLoading();

  const getCrashEntries = useCallback(async () => {
    try {
      const response = await api.get("/entries?game=crash");

      setCrashEntries(response.data);
    } catch (err) {
      signOut();
    }
  }, [signOut]);

  const getDoubleEntries = useCallback(async () => {
    try {
      const response = await api.get("/entries?game=double");

      setDoubleEntries(response.data);
    } catch (err) {
      signOut();
    }
  }, [signOut]);

  const updateUserEntries = useCallback(async () => {
    Promise.all([
      setLoadingVisible(true),
      await getDoubleEntries(),
      await getCrashEntries(),
      setLoadingVisible(false),
    ]);
  }, [getCrashEntries, getDoubleEntries, setLoadingVisible]);

  useEffect(() => {
    if (isAuthenticated) {
      updateUserEntries();
    }
  }, [isAuthenticated, updateUserEntries]);

  return (
    <UserEntriesContext.Provider
      value={{
        crash: crashEntries,
        double: doubleEntries,
      }}
    >
      {children}
    </UserEntriesContext.Provider>
  );
};

export function useUserEntries(): UserEntriesContextData {
  const context = useContext(UserEntriesContext);

  if (!context) {
    throw new Error("useUserEntries must be used within a UserEntriesProvider");
  }

  return context;
}
