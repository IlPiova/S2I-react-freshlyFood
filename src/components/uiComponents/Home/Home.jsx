import RecipeSearch from "../../RecipeSearch";
import RandomRecipesReq from "../../request/RandomRecipesReq";
import Navbar from "../Navbar";
import Header from "./Header";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <RandomRecipesReq />
    </>
  );
}
export default Home;
