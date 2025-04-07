import axios from "axios";
import { useState, useEffect, useContext } from "react";

import { ImageCardContext } from "../../stores/Contexts";

function ImageCard({ id }) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = `https://api.spoonacular.com/recipes/${id}/card`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { imageCard, setImageCard } = useContext(ImageCardContext);

  useEffect(() => {
    if (!id) {
      setError(true);
      return;
    }

    axios
      .get(`${baseUrl}?apiKey=${apiKey}&backgroundImage=background2`)
      .then((response) => {
        setImageCard(response.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <>
      {imageCard && <img src={imageCard.url} alt="" className="recipe-image" />}
    </>
  );
}

export default ImageCard;
