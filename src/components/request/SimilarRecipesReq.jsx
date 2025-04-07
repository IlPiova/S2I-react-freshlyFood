import axios from "axios";
import { useContext, useEffect } from "react";

import { SimilarRecipesContext } from "../../stores/Contexts";
import Cards from "../uiComponents/Cards";

function SimilarRecipeReq({ recipeId }) {
  const { similarRecipes, setSimilarRecipes } = useContext(
    SimilarRecipesContext
  );

  const apiKey = import.meta.env.VITE_API_KEY;

  const baseUrl = `https://api.spoonacular.com/recipes/${recipeId}/similar?`;

  useEffect(() => {
    axios
      .get(
        `${baseUrl}number=2&include-tags=vegetarian&apiKey=${apiKey}&addRecipeInformation=true`
      )
      .then((response) => {
        if (response.data) {
          setSimilarRecipes(response.data);
          console.log(response.data);
        } else {
          throw new Error("Errore caricamento");
        }
      });
  }, [recipeId]);
  return (
    <>
      {similarRecipes && <h2 className="subtitle">Similar recipes</h2>}
      {similarRecipes && <Cards data={similarRecipes} />}
    </>
  );
}
export default SimilarRecipeReq;
