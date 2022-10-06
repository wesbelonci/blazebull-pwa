import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import api from "../services/api";
// import { useNavigate, useParams } from "react-router-dom";

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthContextData {
  user: UserProps | null;
  isAuthenticated: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: JSX.Element;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(() => {
    const token = localStorage.getItem("@blazebull:token");
    const user = localStorage.getItem("@blazebull:user");

    if (token) {
      api.defaults.headers.common = { Authorization: `Bearer ${token}` };
    }

    if (user) {
      return JSON.parse(user);
    }

    return null;
  });

  const isAuthenticated = !!user;

  useEffect(() => {
    if (isAuthenticated) {
      getUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post("/authentication", {
        email,
        password,
      });
      const { token, user } = response.data;

      localStorage.setItem("@blazebull:token", token);
      localStorage.setItem("@blazebull:user", JSON.stringify(user));

      api.defaults.headers.common = { Authorization: `bearer ${token}` };

      setUser(user);
    } catch (err) {
      throw new Error("Invalid E-mail or password");
    }
  }, []);

  const signOut = useCallback(() => {
    setUser(null);

    localStorage.removeItem("@blazebull:token");
    localStorage.removeItem("@blazebull:user");

    delete api.defaults.headers.common["Authorization"];
  }, []);

  const getUserData = useCallback(async () => {
    try {
      const response = await api.get("/user");
      setUser(response.data);
    } catch (err) {
      signOut();
    }
  }, [signOut]);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
