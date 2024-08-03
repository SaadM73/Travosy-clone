import React from "react";
import "./starRating.css";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="star full">
          &#9733;
        </span>
      ))}
      {halfStar && <span className="star half">&#9733;</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="star empty">
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
