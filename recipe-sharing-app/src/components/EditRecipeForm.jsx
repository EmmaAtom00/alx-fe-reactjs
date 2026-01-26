import React from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = React.useState(recipe.title);
  const [description, setDescription] = React.useState(recipe.description);

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  React.useEffect(() => {
    setTitle(recipe.title);
    setDescription(recipe.description);
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({
      id: recipe.id,
      title,
      description,
    });
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
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border focus:outline-none border-gray-300 rounded p-3"
      />

      <button
        type="submit"
        className="bg-green-400 p-4 rounded-md text-white hover:bg-green-500 transition"
      >
        Update Recipe
      </button>
    </form>
  );
};

export default EditRecipeForm;
