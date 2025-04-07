import "./style/home.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ImageCardProvider,
  RandomRecipesProvider,
  RecipesProvider,
  RecSearchProvider,
  SimilarRecipesProvider,
  SingleRecipeProvider,
} from "./stores/Contexts";

import RecipesReq from "./components/request/RecipesReq";
import SingleRecipeReq from "./components/request/SingleRecipeReq";
import Home from "./components/uiComponents/Home/Home";

function App() {
  return (
    <>
      <RecSearchProvider>
        <RandomRecipesProvider>
          <RecipesProvider>
            <ImageCardProvider>
              <SingleRecipeProvider>
                <SimilarRecipesProvider>
                  <Router>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="recipes" element={<RecipesReq />} />
                      <Route
                        path="recipes/:recipeId"
                        element={<SingleRecipeReq />}
                      />
                    </Routes>
                  </Router>
                </SimilarRecipesProvider>
              </SingleRecipeProvider>
            </ImageCardProvider>
          </RecipesProvider>
        </RandomRecipesProvider>
      </RecSearchProvider>
    </>
  );
}

export default App;
