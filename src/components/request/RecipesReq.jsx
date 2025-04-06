import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cards from "../uiComponents/Cards";
import Header from "../uiComponents/Home/Header";

import {
  RecipeSearchContext,
  RecipesContext,
  RandomRecipesContext,
} from "../../stores/Contexts";

function RecipesReq() {
  const { recipeName } = useContext(RecipeSearchContext);
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { randomRecipes } = useContext(RandomRecipesContext);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = "https://api.spoonacular.com/recipes/complexSearch?";

  useEffect(() => {
    setLoading(true);
    if (!recipeName) return;
    axios
      .get(
        `${baseUrl}apiKey=${apiKey}&query=${recipeName}&number=5&diet=vegetarian&addRecipeInformation=true `
      )
      .then((response) => {
        if (response.data) {
          setRecipes(response.data.results);
        } else {
          throw new Error("La richiesta non è andata a buon fine, riprovare");
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [recipeName]);

  return (
    <>
      <Header />
      {loading && <div className="loader"></div>}{" "}
      {recipes && <Cards data={recipes} />}
      {randomRecipes && <h1>GET INSPIRED</h1>}
      {randomRecipes && <Cards data={randomRecipes.recipes} />}
    </>
  );
}
export default RecipesReq;
