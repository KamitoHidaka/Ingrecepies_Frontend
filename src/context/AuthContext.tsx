import { createContext } from "react";
import { AuthContextType } from "./Types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
