import axios from "axios";
import { useState, useEffect, useContext } from "react";

import { ImageCardContext } from "../stores/Contexts";

function ImageCard({ id }) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = `https://api.spoonacular.com/recipes/${id}/card`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { imageCard, setImageCard } = useContext(ImageCardContext);

  useEffect(() => {
    setError("");
    setLoading(true);
    if (!id) {
      throw new Error("This recipe doesn't exixst");
    }

    axios
      .get(`${baseUrl}?apiKey=${apiKey}`)
      .then((response) => {
        setImageCard(response.data);
      })
      .catch((e) => setError("Request failed"))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {error && <div className="error">{error}</div>}
      {loading && <div className="loader"></div>}
      {imageCard && <img src={imageCard.url} alt="" className="recipe-image" />}
    </>
  );
}

export default ImageCard;
