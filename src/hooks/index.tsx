import React from "react";

import { AuthProvider } from "./AuthContext";
import { ToastProvider } from "./ToastContext";
import { LoadingProvider } from "./LoadingContext";
import { SocketProvider } from "./SocketContext";
import { CrashGameProvider } from "./CrashGameContext";
import { DoubleGameProvider } from "./DoubleGameContext";
import { LocaleProvider } from "./LocaleContext";
import { BankProvider } from "./BankContext";
import { AlertProvider } from "./AlertContext";
import { PwaInstallHomeScreenProvider } from "./PwaInstallHomeScreen";
import { ClassRoomProvider } from "./ClassRoomContext";

interface AppProviderProps {
  children: any;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <PwaInstallHomeScreenProvider>
    <LocaleProvider>
      <AuthProvider>
        <ToastProvider>
          <LoadingProvider>
            <CrashGameProvider>
              <DoubleGameProvider>
                <SocketProvider>
                  <BankProvider>
                    <AlertProvider>
                      <ClassRoomProvider>{children}</ClassRoomProvider>
                    </AlertProvider>
                  </BankProvider>
                </SocketProvider>
              </DoubleGameProvider>
            </CrashGameProvider>
          </LoadingProvider>
        </ToastProvider>
      </AuthProvider>
    </LocaleProvider>
  </PwaInstallHomeScreenProvider>
);

export default AppProvider;
