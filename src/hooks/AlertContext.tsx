import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";

interface AlertContextData {
  playAudio(): void;
}

interface AuthProviderProps {
  children: JSX.Element;
}

export const AlertContext = createContext<AlertContextData>(
  {} as AlertContextData
);

export const AlertProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [alert, setAlert] = useState<HTMLAudioElement | null>(null);

  const playAudio = useCallback(() => {
    if (alert) {
      alert.muted = false;
      alert.play();
    }
  }, [alert]);

  useEffect(() => {
    if (alert === null) {
      const sound = new Audio(`${process.env.REACT_APP_ALERT_SOUND}`);
      sound.muted = true;
      sound.autoplay = true;

      setAlert(sound);
    }
  }, [alert]);

  return (
    <AlertContext.Provider value={{ playAudio }}>
      {children}
    </AlertContext.Provider>
  );
};

export function useAlert(): AlertContextData {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("useAlert must be used within a AlertProvider");
  }

  return context;
}
