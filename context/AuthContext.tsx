import { loginRequest } from "@/services/auth.service";
import { deleteToken, getToken, saveToken } from "@/utils/storage";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      const token = await getToken();
      if (token) {
        setUser(token);
      }
      setLoading(false);
    };

    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { token, user } = await loginRequest(email, password);
      await saveToken(token);
      setUser(user);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await deleteToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;
