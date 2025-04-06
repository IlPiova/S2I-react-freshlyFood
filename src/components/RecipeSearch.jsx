import { useContext } from "react";
import { RecipeSearchContext } from "../stores/Contexts";
import { Link } from "react-router-dom";

import "../style/searchBar.scss";

function RecipeSearch() {
  const { setRecipeName } = useContext(RecipeSearchContext);

  function handleSubmit(e) {
    e.preventDefault();
    const inputValue = document.querySelector("#newRecipe").value.trim();
    setRecipeName(inputValue);
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
          <Link className="search-link" to="/recipes">
            Cerca
          </Link>
        </button>
      </form>
    </div>
  );
}

export default RecipeSearch;
