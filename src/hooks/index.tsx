import React from "react";

import { AuthProvider } from "./AuthContext";
import { ToastProvider } from "./ToastContext";
import { LoadingProvider } from "./LoadingContext";
// import { SocketProvider } from "./SocketContext";
import { CrashGameProvider } from "./CrashGameContext";
import { DoubleGameProvider } from "./DoubleGameContext";
import { LocaleProvider } from "./LocaleContext";
import { BankProvider } from "./BankContext";
import { AlertProvider } from "./AlertContext";
import { PwaInstallHomeScreenProvider } from "./PwaInstallHomeScreen";
import { ClassRoomProvider } from "./ClassRoomContext";
import { SocketProvider } from "./SocketContext";
import { UserEntriesProvider } from "./UserEntriesContext";

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
                <BankProvider>
                  <AlertProvider>
                    <ClassRoomProvider>
                      <SocketProvider>
                        <UserEntriesProvider>{children}</UserEntriesProvider>
                      </SocketProvider>
                    </ClassRoomProvider>
                  </AlertProvider>
                </BankProvider>
              </DoubleGameProvider>
            </CrashGameProvider>
          </LoadingProvider>
        </ToastProvider>
      </AuthProvider>
    </LocaleProvider>
  </PwaInstallHomeScreenProvider>
);

export default AppProvider;
