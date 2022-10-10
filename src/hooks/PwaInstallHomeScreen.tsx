import React, { createContext, useCallback, useContext } from "react";

interface PwaInstallHomeScreenContextData {
  promptable: IBeforeInstallPromptEvent | null;
  promptToInstall(): Promise<void>;
  isInstalled: boolean;
}

interface IBeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface PwaInstallHomeScreenProviderProps {
  children: JSX.Element;
}

export const PwaInstallHomeScreenContext =
  createContext<PwaInstallHomeScreenContextData>(
    {} as PwaInstallHomeScreenContextData
  );

export const PwaInstallHomeScreenProvider: React.FC<
  PwaInstallHomeScreenProviderProps
> = ({ children }) => {
  const [promptable, setPromptable] =
    React.useState<IBeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = React.useState<boolean>(false);

  const promptToInstall = useCallback(() => {
    if (promptable) {
      return promptable.prompt();
    }

    return Promise.reject(
      new Error(
        'Tried installing before browser sent "beforeinstallprompt" event'
      )
    );
  }, [promptable]);

  React.useEffect(() => {
    const ready = (e: IBeforeInstallPromptEvent) => {
      e.preventDefault();
      setPromptable(e);
    };

    window.addEventListener("beforeinstallprompt", ready as any);

    return () => {
      window.removeEventListener("beforeinstallprompt", ready as any);
    };
  }, []);

  React.useEffect(() => {
    const onInstall = () => {
      setIsInstalled(true);
    };

    window.addEventListener("appinstalled", onInstall as any);

    return () => {
      window.removeEventListener("appinstalled", onInstall as any);
    };
  }, []);

  return (
    <PwaInstallHomeScreenContext.Provider
      value={{ promptable, promptToInstall, isInstalled }}
    >
      {children}
    </PwaInstallHomeScreenContext.Provider>
  );
};

export function usePwaInstallHomeScreen(): PwaInstallHomeScreenContextData {
  const context = useContext(PwaInstallHomeScreenContext);

  if (!context) {
    throw new Error(
      "usePwaInstallHomeScreen must be used within a PwaInstallHomeScreenProvider"
    );
  }

  return context;
}
