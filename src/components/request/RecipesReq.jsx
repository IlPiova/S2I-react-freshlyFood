import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Cards/Cards";
import Header from "../Header";
import Navbar from "../Navbar/Navbar";
import {
  RecipeSearchContext,
  RecipesContext,
  RandomRecipesContext,
} from "../../stores/Contexts";

function RecipesReq() {
  const { recipeName } = useContext(RecipeSearchContext);
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { randomRecipes } = useContext(RandomRecipesContext);

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = "https://api.spoonacular.com/recipes/complexSearch?";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setError("");
    setLoading(true);
    if (!recipeName) return;
    axios
      .get(
        `${baseUrl}apiKey=${apiKey}&query=${recipeName}&number=30&diet=vegetarian&addRecipeInformation=true `
      )
      .then((response) => {
        if (response.data?.results?.length) {
          setRecipes(response.data.results);
        } else {
          setRecipes([]);
          setError("No recipe found");
        }
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, [recipeName]);

  return (
    <>
      <Navbar />
      <Header />
      {error && !loading && <div className="error">{error}</div>}
      {loading && <div className="loader"></div>}{" "}
      {recipes && !loading && <Cards data={recipes} />}
      {randomRecipes && !loading && <h2 className="subtitle">GET INSPIRED</h2>}
      {randomRecipes && !loading && <Cards data={randomRecipes.recipes} />}
    </>
  );
}
export default RecipesReq;
