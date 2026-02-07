import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: Date.now() }],
    })),

  setRecipes: (recipes) => set({ recipes }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== Number(id)),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === Number(updatedRecipe.id)
          ? { ...recipe, ...updatedRecipe }
          : recipe,
      ),
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()),
      ),
    })),
}));

export default useRecipeStore;
