import { useContext } from "react";
import { RecipeSearchContext } from "../stores/Contexts";
import { useNavigate } from "react-router-dom";

import "../style/searchBar.scss";

function RecipeSearch() {
  const { setRecipeName } = useContext(RecipeSearchContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const inputValue = document.querySelector("#newRecipe").value.trim();
    if (inputValue) {
      setRecipeName(inputValue);
      navigate("/recipes");
    }
  }

  return (
    <div className="search-bar">
      <form>
        <input
          className="search-input"
          type="text"
          placeholder="Search your recipe"
          id="newRecipe"
        />
        <button className="search-button" type="submit" onClick={handleSubmit}>
          Cerca
        </button>
      </form>
    </div>
  );
}

export default RecipeSearch;
