import React, { createContext, useContext, useCallback, useState } from "react";
import { useAuth } from "./AuthContext";

interface IBankProps {
  user_id: string;
  total: number;
  stop_win: number;
  stop_loss: number;
  entry: number;
}

interface BankContextData {
  bank: IBankProps | null;
  updateBank(value: number): void;
}

interface BankProviderProps {
  children: JSX.Element;
}

export const BankContext = createContext<BankContextData>(
  {} as BankContextData
);

export const BankProvider: React.FC<BankProviderProps> = ({ children }) => {
  const [data, setData] = useState<IBankProps | null>(() => {
    const bank = localStorage.getItem("@blazebull:bank");
    const user = localStorage.getItem("@blazebull:user");

    if (bank && user) {
      const localData = JSON.parse(bank) as IBankProps;
      const localUser = JSON.parse(user);

      if (localData.user_id === localUser?.id) {
        return localData;
      } else {
        return null;
      }
    }

    return null;
  });
  // const { isAuthenticated } = useAuth();
  const { user } = useAuth();

  const updateBank = useCallback(
    (value: number) => {
      const updateData = {
        user_id: user?.id as string,
        total: value,
        stop_loss: Number(value * 0.1),
        stop_win: Number(value * 0.15),
        entry: Number(value * 0.1) * 0.5,
      };

      setData(updateData);

      localStorage.setItem("@blazebull:bank", JSON.stringify(updateData));
    },
    [user?.id]
  );

  return (
    <BankContext.Provider value={{ bank: data, updateBank }}>
      {children}
    </BankContext.Provider>
  );
};

export function useBank(): BankContextData {
  const context = useContext(BankContext);

  if (!context) {
    throw new Error("useBank must be used within a BankProvider");
  }

  return context;
}
