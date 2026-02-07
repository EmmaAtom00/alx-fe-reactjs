// RecipeList component

import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const navigate = useNavigate();
  const viewRecipeDetails = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <div className="space-y-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border border-gray-200 rounded-2xl p-5 bg-gradient-to-r from-white to-blue-50 shadow-sm"
          onClick={() => viewRecipeDetails(recipe.id)}
        >
          <h3 className="text-lg font-semibold mb-2">
            Title:{" "}
            <span className="font-normal text-gray-700">{recipe.title}</span>
          </h3>
          <p className="text-gray-600">
            Description:{" "}
            <span className="text-gray-700">{recipe.description}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
