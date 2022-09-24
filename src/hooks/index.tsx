import React from "react";

import { AuthProvider } from "./AuthContext";
import { ToastProvider } from "./ToastContext";
import { LoadingProvider } from "./LoadingContext";
import { SocketProvider } from "./SocketContext";
import { CrashGameProvider } from "./CrashGameContext";

interface AppProviderProps {
  children: any;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <LoadingProvider>
        <CrashGameProvider>
          <SocketProvider>{children}</SocketProvider>
        </CrashGameProvider>
      </LoadingProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
