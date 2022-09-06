import React from "react";

import { AuthProvider } from "./AuthContext";
import { ToastProvider } from "./ToastContext";

interface AppProviderProps {
  children: any;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
