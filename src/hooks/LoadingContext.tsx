import React, { createContext, useContext, useCallback, useState } from "react";

interface LoadingContextData {
  setLoadingVisible(status: boolean): void;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: JSX.Element;
}

export const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData
);

export const LoadingProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setLoadingVisible = useCallback((status: boolean) => {
    setIsLoading(status);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoadingVisible }}>
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }

  return context;
}
