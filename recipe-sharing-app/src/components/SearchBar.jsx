import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      className="w-full p-3 border rounded-xl mb-4"
    />
  );
};

export default SearchBar;
