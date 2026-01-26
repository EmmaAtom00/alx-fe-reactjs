import { create } from "zustand";

const useRecipeStore = create((set)=>({
    recipes: [],
    addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
    setRecipes: (recipes) => set({ recipes }),
    removeRecipe: (id) => set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) })),
}))

export default useRecipeStore;