import React, { createContext, useContext, useMemo, useState } from "react";
import { loginUser } from "../api/auth";

type AuthUser = {
  username: string;
  // add fields later if your BE returns them (e.g., roles, email, id)
};

type AuthContextShape = {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextShape>({} as any);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // Persist username separately since /auth/login returns only {token}
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("sb_token"));
  const [user, setUser] = useState<AuthUser | null>(() => {
    const raw = localStorage.getItem("sb_user");
    return raw ? JSON.parse(raw) : null;
  });

  const value = useMemo<AuthContextShape>(() => ({
    user,
    token,
    isAuthenticated: !!token,

    async login(username: string, password: string) {
      const { token } = await loginUser(username, password);
      // store token + our minimal user object (since BE doesn’t return user)
      localStorage.setItem("sb_token", token);
      localStorage.setItem("sb_user", JSON.stringify({ username }));
      setToken(token);
      setUser({ username });
    },

    logout() {
      localStorage.removeItem("sb_token");
      localStorage.removeItem("sb_user");
      setToken(null);
      setUser(null);
    },
  }), [token, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
