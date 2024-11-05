import { useContext } from "react";
import RecipeContext from "./RecipeContext";

// Hook personalizado para usar el contexto de autenticación
export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
