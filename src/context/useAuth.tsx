import { useContext } from "react";
import { AuthContext} from "./AuthContext";
import { AuthContextType } from "./Types";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("El useAuth se debe llamar dentro de un AuthProvider");
  }
  return context;
};
