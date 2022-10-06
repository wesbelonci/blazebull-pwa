import React from "react";

import { AuthProvider } from "./AuthContext";
import { ToastProvider } from "./ToastContext";
import { LoadingProvider } from "./LoadingContext";
import { SocketProvider } from "./SocketContext";
import { CrashGameProvider } from "./CrashGameContext";
import { DoubleGameProvider } from "./DoubleGameContext";
import { LocaleProvider } from "./LocaleContext";
import { BankProvider } from "./BankContext";

interface AppProviderProps {
  children: any;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <LocaleProvider>
    <AuthProvider>
      <ToastProvider>
        <LoadingProvider>
          <CrashGameProvider>
            <DoubleGameProvider>
              <SocketProvider>
                <BankProvider>{children}</BankProvider>
              </SocketProvider>
            </DoubleGameProvider>
          </CrashGameProvider>
        </LoadingProvider>
      </ToastProvider>
    </AuthProvider>
  </LocaleProvider>
);

export default AppProvider;
