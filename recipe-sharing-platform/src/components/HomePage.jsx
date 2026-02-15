import React, { useEffect, useState } from "react";
import DATA from "../data.json";

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DATA);
  }, []);
  console.log(data);

  return (
    <div className="container mx-auto px-4 py-8 grid-cols-1">
      <h1 className="text-3xl font-bold mb-8 text-center">Delicious Recipes</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
