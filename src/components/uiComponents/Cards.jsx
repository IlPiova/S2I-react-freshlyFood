import { Link } from "react-router-dom";
import "../../style/cards.scss";

import servingsIcon from "../../assets/icons/servings-icon.svg";
import cookingTimeIcon from "../../assets/icons/timer-icon.svg";

function Cards({ data }) {
  return (
    <div className="cards-container">
      {data.map((recipe) => (
        <div
          key={recipe.id}
          id={recipe.id}
          className="card"
          style={{
            background: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 91%
    ), url('https://img.spoonacular.com/recipes/${recipe.id}-480x360.${recipe.imageType}') `,
            backgroundPosition: "60% 100%",
            backgroundSize: "cover",
          }}
        >
          <Link className="link" to={`/recipes/${recipe.id}`}>
            <div className="general-info-container">
              <div className="info-container">
                <img
                  src={servingsIcon}
                  alt="Servings icon"
                  className="info-icon"
                />
                <p className="info-number">{recipe.servings}</p>
              </div>

              <div className="info-container">
                <img
                  src={cookingTimeIcon}
                  alt="Cooking time icon"
                  className="info-icon"
                />
                <p className="info-number">{recipe.readyInMinutes}</p>
              </div>
            </div>
            <h3 className="recipe-title">{recipe.title}</h3>
            <button className="recipe-button">Recipe</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Cards;
