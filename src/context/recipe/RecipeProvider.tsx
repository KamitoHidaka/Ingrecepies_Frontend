import { useState, useEffect, ReactNode } from "react";
import RecipeContext from "./RecipeContext";
import { Recipe, RecipeContextType } from "../types/Types";
import {
  getAllRecipesRequest,
  getMyRecipesRequest,
  getRecipeByNameRequest,
  getRecipeByIdRequest,
  createRecipeRequest,
  updateRecipeRequest,
  deleteRecipeRequest,
} from "../../api/recipe";

interface RecipeProviderProps {
  children: ReactNode;
}

export const RecipeProvider = ({ children }: RecipeProviderProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  const getAllRecipes = async () => {
    setLoading(true);
    try {
      const res = await getAllRecipesRequest();
      setRecipes(res.data);
    } catch (error) {
      const err = error as { response: { data: string[] } };
      setErrors(err.response.data);
      console.log(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  const getMyRecipes = async () => {
    setLoading(true);
    try {
      const res = await getMyRecipesRequest();
      setRecipes(res.data);
    } catch (error) {
      const err = error as { response: { data: string[] } };
      setErrors(err.response.data);
      console.log(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  const getRecipeById = async (id: string) => {
    setLoading(true);
    try {
      const res = await getRecipeByIdRequest(id);
      setRecipes([res.data]); // Asumiendo que res.data es la receta encontrada
    } catch (error) {
      const err = error as { response: { data: string[] } };
      setErrors(err.response.data);
      console.log(err.response.data);
    } finally {
      setLoading(false);
    }
  };
  const getRecipeByName = async (name: string) => {
    setLoading(true);
    try {
      const res = await getRecipeByNameRequest(name);
      setRecipes([res.data]); // Assuming it returns one recipe
    } catch (error) {
      const err = error as { response: { data: string[] } };
      setErrors(err.response.data);
      console.log(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  const createRecipe = async (recipe: Recipe) => {
    setLoading(true);
    try {
      const res = await createRecipeRequest(recipe);
      // Actualiza el estado de recetas aquí
      setRecipes((prevRecipes) => [...prevRecipes, res.data]); // Agrega la nueva receta
    } catch (error) {
      const err = error as { response: { data: string[] } };
      setErrors(err.response.data);
      console.log(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  const updateRecipe = async (id: string, recipe: Recipe) => {
    setLoading(true);
    try {
      const res = await updateRecipeRequest(id, recipe);
      setRecipes(recipes.map((r) => (r._id === id ? res.data : r)));
    } catch (error) {
      const err = error as { response: { data: string[] } };
      setErrors(err.response.data);
      console.log(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  const deleteRecipe = async (id: string) => {
    setLoading(true);
    try {
      await deleteRecipeRequest(id);
      setRecipes(recipes.filter((r) => r._id !== id));
    } catch (error) {
      const err = error as { response: { data: string[] } };
      setErrors(err.response.data);
      console.log(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RecipeContext.Provider
      value={
        {
          recipes,
          loading,
          errors,
          getAllRecipes,
          getMyRecipes,
          getRecipeById,
          getRecipeByName,
          createRecipe,
          updateRecipe,
          deleteRecipe,
        } as RecipeContextType
      }
    >
      {children}
    </RecipeContext.Provider>
  );
};
