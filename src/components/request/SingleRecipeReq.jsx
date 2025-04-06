import axios from "axios";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Cards from "../uiComponents/Cards";
import SingleRecipeComponent from "../uiComponents/singleRecipeComponent";
import { SingleRecipeContext } from "../../stores/Contexts";
import SimilarRecipeReq from "./SimilarRecipesReq";

function SingleRecipeReq() {
  const recipeId = useParams().recipeId;
  const { recipeData, setRecipeData } = useContext(SingleRecipeContext);
  const apiKey = import.meta.env.VITE_API_KEY;

  const baseUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?`;
  console.log(recipeId);

  useEffect(() => {
    axios
      .get(`${baseUrl}&apiKey=${apiKey}`)
      .then((response) => {
        if (response.data && response.data !== undefined) {
          console.log(response.data);
          setRecipeData(response.data);
        } else {
          throw new Error("Errore caricamento dati, riprova");
        }
      })
      .catch((e) => console.log(e));
  }, [recipeId]);
  return (
    <>
      {recipeData && <SingleRecipeComponent />}
      {recipeData && <SimilarRecipeReq recipeId={recipeId} />}
    </>
  );
}
export default SingleRecipeReq;
