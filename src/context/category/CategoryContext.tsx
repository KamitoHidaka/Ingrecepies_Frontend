import { createContext } from "react";
import { CategoryContextType } from "../types/Types";

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export default CategoryContext;