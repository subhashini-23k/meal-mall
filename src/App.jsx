
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./componets/Layouts/Dashboard.jsx";
import LandingPage from "./tempages/LandingPage.jsx";
import { Mealcard } from "./tempages/MealCard.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/meal-list" element={<Mealcard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}




