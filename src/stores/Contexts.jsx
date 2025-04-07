import { useState, createContext } from "react";

//Creazione contesto gestione stato input ricerca
export const RecipeSearchContext = createContext({});

export const RecSearchProvider = ({ children }) => {
  const [recipeName, setRecipeName] = useState("");

  return (
    <RecipeSearchContext.Provider value={{ recipeName, setRecipeName }}>
      {children}
    </RecipeSearchContext.Provider>
  );
};

// Creazine contesto gestione stato ricette randomiche
export const RandomRecipesContext = createContext({});

export const RandomRecipesProvider = ({ children }) => {
  const [randomRecipes, setRandomRecipes] = useState(null);
  return (
    <RandomRecipesContext.Provider value={{ randomRecipes, setRandomRecipes }}>
      {children}
    </RandomRecipesContext.Provider>
  );
};

// Creazione contesto gestione stato ricerca ricetta
export const RecipesContext = createContext({});

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(null);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};

// Creazione contesto gestione stato singola ricetta
export const SingleRecipeContext = createContext({});

export const SingleRecipeProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState(null);

  return (
    <SingleRecipeContext.Provider value={{ recipeData, setRecipeData }}>
      {children}
    </SingleRecipeContext.Provider>
  );
};

export const ImageCardContext = createContext({});

export const ImageCardProvider = ({ children }) => {
  const [imageCard, setImageCard] = useState(null);
  return (
    <ImageCardContext.Provider value={{ imageCard, setImageCard }}>
      {children}
    </ImageCardContext.Provider>
  );
};

export const SimilarRecipesContext = createContext({});

export const SimilarRecipesProvider = ({ children }) => {
  const [similarRecipes, setSimilarRecipes] = useState(null);
  return (
    <SimilarRecipesContext.Provider
      value={{ similarRecipes, setSimilarRecipes }}
    >
      {children}
    </SimilarRecipesContext.Provider>
  );
};
