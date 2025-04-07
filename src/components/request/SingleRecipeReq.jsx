import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import SingleRecipeComponent from "../uiComponents/singleRecipeComponent";
import { SingleRecipeContext } from "../../stores/Contexts";
import SimilarRecipeReq from "./SimilarRecipesReq";

function SingleRecipeReq() {
  const recipeId = useParams().recipeId;
  const { recipeData, setRecipeData } = useContext(SingleRecipeContext);
  const apiKey = import.meta.env.VITE_API_KEY;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const baseUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?`;

  useEffect(() => {
    setError("");
    setLoading(true);

    if (recipeData?.id === parseInt(recipeId)) {
      setLoading(false);
      return;
    }

    axios
      .get(`${baseUrl}&apiKey=${apiKey}`)
      .then((response) => {
        if (data?.id) {
          setRecipeData(response);
        } else {
          throw new Error("Recipe not available, try another recipe");
        }
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, [recipeId]);
  return (
    <>
      {error && <div className="error">{error}</div>}
      {loading && <div className="loader"></div>}
      {recipeData && <SingleRecipeComponent />}
      {recipeData && <SimilarRecipeReq recipeId={recipeId} />}
    </>
  );
}
export default SingleRecipeReq;
