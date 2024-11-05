export interface User {
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  signUp: (userData: User) => Promise<void>;
  login: (userData: Login) => Promise<void>;
  isAuthenticated: boolean;
  errors: string[];
  loading: boolean;
  logout: () => void;
}

export interface Ingredient {
  ingredientName: string;
  quantity: string;
  unit: string;
}

export interface Step{
  step: string;
}

export interface Recipe {
  _id?: string;
  name: string;
  category: string;
  image: string;
  description?: string;
  ingredients: Ingredient[]; 
  steps: Step[]; 
  user: string;
}
export interface RecipeContextType {
  recipes: Recipe[];
  loading: boolean;
  errors: string[];
  getAllRecipes: () => Promise<void>;
  getMyRecipes: () => Promise<void>;
  getRecipeById: (id: string) => Promise<void>;
  getRecipeByName: (name: string) => Promise<void>;
  createRecipe: (recipe: Recipe) => Promise<void>;
  updateRecipe: (id: string, recipe: Recipe) => Promise<void>;
  deleteRecipe: (id: string) => Promise<void>;
}

export interface Category {
  _id?: string;
  name: string;
}

export interface CategoryContextType {
  categories: Category[];
  errors: string[];
  getAllCategories: () => Promise<void>;
}