import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg">Recipe not found.</p>
        <Link to="/" className="text-blue-500 underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe?.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700">
              {recipe.instructions.map((step, idx) => (
                <li key={idx} className="mb-2">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
