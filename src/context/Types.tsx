export interface User {
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;
}

export interface Login{
    email: string;
    password: string;
  }
export interface AuthContextType {
    user: User | null;
    signUp: (userData: User) => Promise<void>;
    login: (userData: Login) => Promise<void>;
    isAuthenticated: boolean;
    errors: string[];

}