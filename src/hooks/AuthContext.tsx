import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

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
  const [user, setUser] = useState<UserProps | null>(null);
  const navigate = useNavigate();

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "blazebull.token": token } = parseCookies();
    if (token) {
      getUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserData = useCallback(async () => {
    const response = await api.get("/user");
    console.log(response.data);
    setUser(response.data);
  }, []);

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const response = await api.post("/authentication", {
        email,
        password,
      });

      if (response.status !== 200) {
        throw new Error("Invalid E-mail or password");
      }

      const { token, user } = response.data;

      setCookie(undefined, "blazebull.token", token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      api.defaults.headers.common = { Authorization: `bearer ${token}` };

      setUser(user);

      navigate("/home");
    },
    [navigate]
  );

  const signOut = useCallback(() => {
    setUser(null);

    delete api.defaults.headers.common["Authorization"];
    destroyCookie(undefined, "blazebull.token");
    // Router.push("/sign-in");
  }, []);

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
