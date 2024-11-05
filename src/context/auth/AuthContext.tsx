import { createContext } from "react";
import { AuthContextType } from "../types/Types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
