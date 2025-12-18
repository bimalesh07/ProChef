import React, { useActionState, useCallback, useState } from "react";
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

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

const App = () => {
  const [searchResult, setsearchResult] = useState([]);
  const [searchLoading, setsearchLoading] = useState(false);

  const handleSearch = useCallback(async (query) => {
    setsearchResult([]);
    setsearchLoading(true);
    try {
      const res = await fetch(`${API_URL}search.php?s=${query}`);

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const result = await res.json();
      setsearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setsearchLoading(false); // ✅ FIXED
    }
  }, []);

  const filterRecipe = useCallback(async (query, filterType) => {
    setsearchLoading(true);

    try {
      // ✅ FIX 1: Correct query parameter format
      const res = await fetch(`${API_URL}filter.php?${filterType}=${query}`);

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const result = await res.json();
      setsearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setsearchLoading(false);
    }
  }, []);
  // filter by category
  const filterByCategory = useCallback(
    (category) => {
      filterRecipe(category, "c");
    },
    [filterRecipe]
  );

  // filterby area
  const filterByArea = useCallback(
    (area) => {
      filterRecipe(area, "a");
    },
    [filterRecipe]
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
        {/* Navbar is outside Routes */}
        <Navbar handleSearch={handleSearch} />
        <Cuisine filterByArea={filterByArea} />
        <Routes>
          <Route
            path="/"
            element={<Homeview filterByCategory={filterByCategory} />}
          />
          <Route
            path="/search/:query"
            element={
              <Searchview meals={searchResult} loading={searchLoading} />
            }
          />
          <Route path="/recipe/:id" element={<RecipeDeatilsview />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
