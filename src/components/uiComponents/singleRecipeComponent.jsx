import { useContext } from "react";
import { SingleRecipeContext, ImageCardContext } from "../../stores/Contexts";

import glutenFree from "../../assets/images/gluten-free.png";
import dairyFree from "../../assets/images/dairy-free.png";
import vegan from "../../assets/images/vegan.png";

import "../../style/singleRecipe.scss";
import Navbar from "./Navbar";
import ImageCard from "./IngredientsWidget";

function arrReader(data) {
  return (
    <div className="item-container">
      {data.map((item, i) => (
        <p key={i} className="item">
          {item}
        </p>
      ))}
    </div>
  );
}

function extendIngredints(ingredients) {
  return (
    <ul className="ingredients-list">
      {ingredients.map((ingredient) => (
        <li key={ingredient.id} className="recipe-html">
          {ingredient.measures.metric.amount}{" "}
          {ingredient.measures.metric.unitLong} {ingredient.name}
        </li>
      ))}
    </ul>
  );
}
/*id
:
1052050
aisle
:
"Baking"
image
:
"vanilla.jpg"
consistency
:
"SOLID"
name
:
"vanilla"
nameClean
:
"vanilla"
original
:
"1 teaspoon Vanilla"
originalName
:
"Vanilla"
amount
:
1
unit
:
"teaspoon"
meta
:
[]

measures
:
{metric: {…}, us: {…}}

us
:
{amount: 1, unitLong: "teaspoon", unitShort: "tsp"}

metric
:
{amount: 1, unitLong: "teaspoon", unitShort: "tsp"}
amount
:
1
unitShort
:
"tsp"
unitLong
:
"teaspoon" */

function SingleRecipeComponent() {
  const { recipeData } = useContext(SingleRecipeContext);
  return (
    <>
      <Navbar />
      <div className="single-recipe-container">
        <h1 className="title">{recipeData.title}</h1>
        {/* <img src={recipeData.image}  /> */}
        <ImageCard id={recipeData.id} />

        <div className="info-container">
          <p>
            <span className="inter-medium">Ready minutes</span>:{" "}
            {recipeData.readyInMinutes}
          </p>
          <p>
            <span className="inter-medium">Servings</span>:{" "}
            {recipeData.servings}
          </p>
          <div className="tags-container">
            <p>
              <span className="inter-medium">Tags</span>:
            </p>
            {recipeData.dishTypes && arrReader(recipeData.dishTypes)}

            {recipeData.cuisines && arrReader(recipeData.cuisines)}

            {recipeData.diets && arrReader(recipeData.diets)}

            {recipeData.occasions && arrReader(recipeData.occasions)}
          </div>
        </div>
        <div className="symbols-container">
          {recipeData.vegan && (
            <img src={vegan} alt="vegan symbol" className="symbol" />
          )}
          {recipeData.glutenFree && (
            <img src={glutenFree} alt="gluten free symbol" className="symbol" />
          )}
          {recipeData.dairyFree && (
            <img src={dairyFree} alt="dairy free symbol" className="symbol" />
          )}
        </div>

        <div className="summary-container">
          <h2 className="subtitle">About this recipe:</h2>
          <p
            dangerouslySetInnerHTML={{ __html: recipeData.summary }}
            className="recipe-html"
          ></p>
        </div>

        <div className="summary-container">
          <h2 className="subtitle">Ingredients</h2>
          <div>
            {recipeData.extendedIngredients &&
              extendIngredints(recipeData.extendedIngredients)}
          </div>
        </div>

        <div className="summary-container">
          <h2 className="subtitle">Instruction</h2>
          <p
            dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
            className="recipe-html"
          ></p>
        </div>
      </div>
    </>
  );
}
export default SingleRecipeComponent;
