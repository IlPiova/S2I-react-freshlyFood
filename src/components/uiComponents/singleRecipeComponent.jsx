import { useContext } from "react";
import { SingleRecipeContext } from "../../stores/Contexts";

import glutenFree from "../../assets/images/gluten-free.png";
import dairyFree from "../../assets/images/dairy-free.png";
import vegan from "../../assets/images/vegan.png";

import "../../style/singleRecipe.scss";

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

function SingleRecipeComponent() {
  const { recipeData } = useContext(SingleRecipeContext);
  return (
    <>
      <div className="single-recipe-container">
        <h1 className="recipe-title">{recipeData.title}</h1>
        <img src={recipeData.image} className="recipe-image" />

        <div className="info-container">
          <p>Ready minutes: {recipeData.readyInMinutes}</p>
          <p>Servings: {recipeData.servings}</p>
          <div className="tags-container">
            <p>Tags:</p>
            {recipeData.dishTypes && arrReader(recipeData.dishTypes)}

            {recipeData.cuisines && arrReader(recipeData.cuisines)}

            {recipeData.diets && arrReader(recipeData.diets)}

            {recipeData.occasions && arrReader(recipeData.occasions)}
          </div>
        </div>
        <div className="symbols-container">
          <img src="" alt="" />
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
          <h2 className="recipe-subtitle">About this recipe:</h2>
          <p
            dangerouslySetInnerHTML={{ __html: recipeData.summary }}
            className="recipe-html"
          ></p>
        </div>
        <h2 className="recipe-subtitle">Instruction</h2>
        <p
          dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
          className="recipe-html"
        ></p>
      </div>
    </>
  );
}
export default SingleRecipeComponent;
