import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Cards from "../uiComponents/Cards";
import { RandomRecipesContext } from "../../stores/Contexts";

function RandomRecipesReq() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const baseUrl =
    "https://api.spoonacular.com/recipes/random?number=2&include-tags=vegetarian";

  const { randomRecipes, setRandomRecipes } = useContext(RandomRecipesContext);
  useEffect(() => {
    setError("");
    setLoading(true);

    if (randomRecipes?.recipes?.length) {
      setLoading(false);
      return;
    }

    axios
      .get(`${baseUrl}&apiKey=${apiKey}`)
      .then((response) => {
        if (response.data?.recipes?.length) {
          setRandomRecipes(response.data);
        } else {
          throw new Error("Recipe not found");
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {error && !loading && <div className="error">{error}</div>}
      {loading && <div className="loader"></div>}
      {randomRecipes && <h2 className="subtitle">GET INSPIRED</h2>}
      {randomRecipes && <Cards data={randomRecipes.recipes} />}
    </>
  );
}
export default RandomRecipesReq;
