// AddRecipeForm component
import { useState } from "react";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-100 shadow-md p-7 flex flex-col w-full gap-4 rounded"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border focus:outline-none border-gray-300 rounded p-3"
      />
      <textarea
        className="border focus:outline-none border-gray-300 rounded p-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button
        type="submit"
        className="bg-green-400 p-4 rounded-md text-white cursor-pointer hover:bg-green-500 transition"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
