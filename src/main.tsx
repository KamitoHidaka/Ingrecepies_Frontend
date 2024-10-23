import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import {Home} from "./pages/home/Home.tsx";
import {LoginPage} from "./pages/login/Login.tsx";
import {SignUpPage} from "./pages/signUp/SignUp.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

const router = createBrowserRouter ([

  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
      {
        path: "/signup",
        element: <SignUpPage/>
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>
);
