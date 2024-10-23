import axios from "axios";
import { Login, User } from "../context/Types";

const API = "http://localhost:5000/api";

export const signupRequest = (user: User) => axios.post(`${API}/signup`, user);

export const loginRequest = (user: Login) => axios.post(`${API}/login`, user);