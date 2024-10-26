import { useState, ReactNode, useEffect } from "react";
import { loginRequest, signupRequest, verifyTokenRequest } from "../api/auth";
import AuthContext from "./AuthContext";
import { User, Login, AuthContextType } from "../context/Types";

import Cookies from "js-cookie";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signUp = async (user: User) => {
    try {
      const res = await signupRequest(user);

      if (res.status === 200) {
        setUser(res.data);
        setAuthenticated(true);
      }
    } catch (error) {
      const err = error as { response: { data: string[] } };
      setErrors(err.response.data);
    }
  };

  const login = async (user: Login) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setAuthenticated(true);
    } catch (error) {
      const err = error as { response: { data: string[] } };
      setErrors(err.response.data);
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookie = Cookies.get();

      if (!cookie.token) {
        setAuthenticated(false);
        setLoading(false);
        return;
      }
      try {
        const res = await verifyTokenRequest(cookie.token);
        if (!res.data) {
          setAuthenticated(false);
          return;
        }
        setUser(res.data);
        setAuthenticated(true);
      } catch (error) {
        console.log(error);
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={
        {
          user,
          signUp,
          login,
          isAuthenticated,
          errors,
          loading,
        } as AuthContextType
      }
    >
      {children}
    </AuthContext.Provider>
  );
};
