import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import useRecipeStore from "./components/recipeStore";

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  useEffect(() => {
    const initialRecipes = [
      { id: 1, title: "Pasta", description: "Creamy pasta" },
      { id: 2, title: "Pizza", description: "Cheesy goodness" },
    ];

    setRecipes(initialRecipes);
    filterRecipes(); // initialize filtered list
  }, []);
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
