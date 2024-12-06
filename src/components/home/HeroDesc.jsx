import { useState } from "react";
import { TfiTimer } from "react-icons/tfi";
import { Rating } from "react-simple-star-rating";

const HeroDesc = ({ title, duration, description }) => {
  const [rating, setRating] = useState(4);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };

  return (
    <div className="text-accent flex flex-col items-center">
      <h2 className="text-accent text-2xl md:text-3xl font-semibold">
        {title}
      </h2>
      <div className="flex justify-center items-center gap-x-5 mt-2">
        <Rating
          onClick={handleRating}
          initialValue={rating}
          SVGstyle={{ display: "inline" }}
          size={28}
        />
        <div className="flex items-center gap-x-2">
          <TfiTimer className="text-xl text-accent" />
          <p className="text-lg ">{duration} min</p>
        </div>
      </div>

      <div className="w-[25rem] hidden sm:block">
        <p className="text-lg text-accent mt-4 line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

export default HeroDesc;
