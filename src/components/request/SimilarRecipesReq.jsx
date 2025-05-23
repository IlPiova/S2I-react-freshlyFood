import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { SimilarRecipesContext } from "../../stores/Contexts";
import Cards from "../Cards/Cards";

function SimilarRecipeReq({ recipeId }) {
  const { similarRecipes, setSimilarRecipes } = useContext(
    SimilarRecipesContext
  );

  const apiKey = import.meta.env.VITE_API_KEY;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const baseUrl = `https://api.spoonacular.com/recipes/${recipeId}/similar?`;

  useEffect(() => {
    setError("");
    setLoading(true);
    axios
      .get(
        `${baseUrl}number=10&include-tags=vegetarian&apiKey=${apiKey}&addRecipeInformation=true`
      )
      .then((response) => {
        if (response.data?.length) {
          setSimilarRecipes(response.data);
        } else {
          setSimilarRecipes([]);
          setError("No similar recipe found");
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [recipeId]);
  return (
    <>
      {error && !loading && <div className="error">{error}</div>}
      {loading && <div className="loader"></div>}
      {similarRecipes && !loading && (
        <h2 className="subtitle">Similar recipes</h2>
      )}
      {similarRecipes && !loading && <Cards data={similarRecipes} />}
    </>
  );
}
export default SimilarRecipeReq;
