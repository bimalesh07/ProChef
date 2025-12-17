import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchview from "./components/Searchview";
import CategorySelcted from "./components/CategorySelcted";
import Cuisine from "./components/Cuisine";
import Homeview from "./components/Homeview";
import RecepiesSlider from "./components/RecepiesSlider";
import RecipeCard from "./components/RecipeCard";
import RecipeDeatilsview from "./components/RecipeDeatilsview";
import Treanding from "./components/Treanding";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
        {/* Navbar is outside Routes */}
        <Navbar />
        <Cuisine/>
        <Routes>
          <Route path="/" element={<Homeview />} />
          <Route path="/search" element={<Searchview />} />
          <Route path="/category" element={<CategorySelcted />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/recipe/:id" element={<RecipeDeatilsview />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
