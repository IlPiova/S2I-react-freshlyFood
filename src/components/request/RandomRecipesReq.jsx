import { useContext, useEffect } from "react";
import axios from "axios";

import Cards from "../uiComponents/Cards";
import { RandomRecipesContext } from "../../stores/Contexts";

function RandomRecipesReq() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const baseUrl =
    "https://api.spoonacular.com/recipes/random?number=2&include-tags=vegetarian";

  const { randomRecipes, setRandomRecipes } = useContext(RandomRecipesContext);
  useEffect(() => {
    console.log("apikey", apiKey);

    axios
      .get(`${baseUrl}&apiKey=${apiKey}`)
      .then((response) => setRandomRecipes(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {randomRecipes && <h2 className="subtitle">GET INSPIRED</h2>}
      {randomRecipes && <Cards data={randomRecipes.recipes} />}
    </>
  );
}
export default RandomRecipesReq;
