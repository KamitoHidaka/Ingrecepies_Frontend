import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { AuthProvider } from "./context/auth/AuthProvider.tsx";
import { RecipeProvider } from "./context/recipe/RecipeProvider.tsx";
import { CategoryProvider } from "./context/category/CategoryProvider.tsx";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RecipeProvider>
        <CategoryProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CategoryProvider>
      </RecipeProvider>
    </AuthProvider>
  </React.StrictMode>
);
