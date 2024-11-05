import axios from "./axios";

import { Category } from "../context/types/Types";

export const getAllCategoriesRequest = async() => axios.get<Category[]>(`/categories`);