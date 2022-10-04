import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { getLocale } from "../language";

interface LocaleContextData {
  locale: string;
  updateLocale?: (lang: "es" | "pt" | "es") => void;
}

interface AuthProviderProps {
  children: JSX.Element;
}

export const LocaleContext = createContext<LocaleContextData>(
  {} as LocaleContextData
);

export const LocaleProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<string>(() => {
    const language = getLocale();

    if (language) {
      return language;
    }

    return "en";
  });

  const updateLocale = useCallback(async (lang?: "es" | "pt" | "es") => {
    if (lang) {
      localStorage.setItem("@blazebull:locale", lang);
      setLocale(lang);
    }
  }, []);

  useEffect(() => {
    if (!locale) {
      updateLocale();
    }
  });

  return (
    <LocaleContext.Provider value={{ locale, updateLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export function useLocale(): LocaleContextData {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
}
