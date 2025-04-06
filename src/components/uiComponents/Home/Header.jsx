import RecipeSearch from "../../RecipeSearch";

function Header() {
  return (
    <>
      <div className="header">
        <div>
          <h1 className="title">FRESHLY FOOD</h1>
          <h2 className="slogan">
            Deliciously Vegetarian, Wholesome Flavors from Nature!
          </h2>
        </div>
        <RecipeSearch />
      </div>
    </>
  );
}

export default Header;
