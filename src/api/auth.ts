import axios from "./axios";
import { Login, User } from "../context/types/Types";

export const signupRequest = async (user: User) => axios.post(`/signup`, user);

export const loginRequest = async(user: Login) => axios.post(`/login`, user);

export const verifyTokenRequest = async(token: string) => axios.get(`/verify`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});