import React from "react";
import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/");
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-400 p-4 rounded-md text-white cursor-pointer hover:bg-red-500 transition"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
