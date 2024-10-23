import { createContext, useState, ReactNode, useEffect } from "react";
import { loginRequest, signupRequest } from "../api/auth";
import { User, AuthContextType, Login } from "../context/Types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const signUp = async (userData: User) => {
    try {
      const res = await signupRequest(userData);
      console.log(res.data);
      setUser(res.data);
      setAuthenticated(true);
    } catch (error) {
      const err = error as { response: { data: string[] } };
      setErrors(err.response.data);
      console.log(err.response.data);
    }
  };

  const login = async (userData: Login) => {
    try {
      const res = await loginRequest(userData);
      console.log(res.data);
      
    }catch (error) {
      const err = error as { response: { data: string[] } };
      setErrors(err.response.data);
      console.log(err.response.data);
    }
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [errors]);

  const authContext: AuthContextType = {
    user,
    signUp,
    login,
    isAuthenticated,
    errors,
  }
  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
};
