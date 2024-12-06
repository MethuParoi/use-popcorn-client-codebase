import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };

  return (
    <div className="flex justify-center">
      <Rating
        onClick={handleRating}
        initialValue={rating}
        SVGstyle={{ display: "inline" }}
        size={36}
      />
    </div>
  );
};

export default StarRating;
