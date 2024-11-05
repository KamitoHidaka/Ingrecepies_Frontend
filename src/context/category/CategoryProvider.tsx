import { useState, useEffect, ReactNode } from "react";

import CategoryContext from "./CategoryContext";

import { Category, CategoryContextType } from "../../context/types/Types";

import { getAllCategoriesRequest } from "../../api/category";

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  const getAllCategories = async () => {
    try {
      const res = await getAllCategoriesRequest();
      setCategories(res.data);
    } catch (error) {
      const err = error as { response: { data: string[] } };
      setErrors(err.response.data);
      console.log(err.response.data);
    } 
  };

  return (
    <CategoryContext.Provider
      value={
        { categories, errors, getAllCategories } as CategoryContextType
      }
    >
      {children}
    </CategoryContext.Provider>
  );
};
