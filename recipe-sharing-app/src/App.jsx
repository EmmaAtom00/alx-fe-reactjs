import React from "react";
import { Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <div className="flex flex-col w-1/2 mx-auto gap-10 py-10">
      <Routes>
        {/* Home / Recipes page */}
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <div className="overflow-y-auto max-h-[70vh] scrollbar-hide">
                <RecipeList />
              </div>
            </>
          }
        />

        {/* Recipe details page */}
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default App;
