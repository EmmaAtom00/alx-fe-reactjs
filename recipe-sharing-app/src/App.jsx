import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

const App = () => {
  return (
    <div className="flex flex-col w-1/2 mx-auto gap-10 py-10">
      <AddRecipeForm />
      <div className="overflow-y-auto max-h-[70vh]">
        <RecipeList />
      </div>
    </div>
  );
};

export default App;
