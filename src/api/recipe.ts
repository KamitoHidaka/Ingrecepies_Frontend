import axios from "./axios";

import { Recipe } from "../context/types/Types";

export const getAllRecipesRequest = async() => axios.get<Recipe[]>(`/home`);

export const getRecipeByNameRequest = async(name: string) => axios.get<Recipe>(`/recipe/name/${name}`);

export const getMyRecipesRequest = async() => axios.get<Recipe[]>(`/my-recipes`);

export const getRecipeByIdRequest = async(id: string) => axios.get<Recipe>(`/recipe/${id}`);

export const createRecipeRequest = async(recipe: Recipe) => axios.post(`/recipe-creator`, recipe);

export const updateRecipeRequest = async(id: string, recipe: Recipe) => axios.put(`/recipe-studio/${id}`, recipe);

export const deleteRecipeRequest = async(id: string) => axios.delete(`/recipe/${id}`);
