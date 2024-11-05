import { createContext } from "react";
import { RecipeContextType } from "../types/Types";

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export default RecipeContext;
