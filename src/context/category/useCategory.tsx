import { useContext } from "react";
import CategoryContext from "./CategoryContext";

// Hook personalizado para usar el contexto de autenticación
export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
