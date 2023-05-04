import { useState } from "react";
//import icons
import { FaStar } from "react-icons/fa";

function StarRating({ rating }) {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleClick = (newRating) => {
    setSelectedRating(newRating);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`w-6 h-6 ${
            selectedRating >= index + 1 ? "text-yellow-400" : ""
          }`}
          onClick={() => handleClick(index + 1)}
        />
      ))}
    </div>
  );
}

export default StarRating;
