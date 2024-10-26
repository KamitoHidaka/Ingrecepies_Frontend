import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home.tsx";
import { LoginPage } from "./pages/login/Login.tsx";
import { SignUpPage } from "./pages/signUp/SignUp.tsx";
import { Profile } from "./pages/profile/Profile.tsx";
import { MyRecepies } from "./pages/myRecepies/MyRecepies.tsx";
import { RecepieCreator } from "./pages/recepieCreator/RecepieCreator.tsx";
import { RouteShield } from "./routes/RouteShield.tsx";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route element={<RouteShield />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-recepies" element={<MyRecepies />} />
          <Route path="/recepie-creator" element={<RecepieCreator />} />
          <Route path="/recepie/:id" element={<RecepieCreator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
