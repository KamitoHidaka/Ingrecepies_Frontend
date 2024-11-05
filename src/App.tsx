import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import { Home } from "./pages/home/Home.tsx";
import { LoginPage } from "./pages/login/Login.tsx";
import { SignUpPage } from "./pages/signUp/SignUp.tsx";
import { Profile } from "./pages/profile/Profile.tsx";
import { MyRecipes } from "./pages/myRecipes/MyRecipes.tsx";
import { RecipeCreator } from "./pages/recipeCreator/RecipeCreator.tsx";
import { RecipePage } from "./pages/recipePage/RecipePage.tsx";

import { RouteShield } from "./routes/RouteShield.tsx";

import { Footer } from "./components/layout/footer/Footer.tsx";
import { Header } from "./components/layout/header/Header.tsx";

export default function App() {
  const location = useLocation();
  const hiddenPaths = ["/login", "/signup"];
  const showComponent = !hiddenPaths.includes(location.pathname);

  return (
    <>
      {showComponent && <Header />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route element={<RouteShield />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-recipes" element={<MyRecipes />} />
          <Route path="/recipe-creator" element={<RecipeCreator />} />
          <Route path="/recipe-studio/:id" element={<RecipeCreator />} />
        </Route>
      </Routes>
      {showComponent && <Footer />}
    </>
  );
}
