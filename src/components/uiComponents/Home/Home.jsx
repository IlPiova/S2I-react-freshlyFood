import RecipeSearch from "../../RecipeSearch";
import RandomRecipesReq from "../../request/RandomRecipesReq";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <RandomRecipesReq />
    </>
  );
}
export default Home;
