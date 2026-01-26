import { useParams } from "react-router-dom";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";
import useRecipeStore from "./recipeStore";

const RecipeDetails = () => {
  const { recipeId } = useParams();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId)),
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{recipe.title}</h1>
      <p className="text-gray-600">{recipe.description}</p>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
