import React, { useState } from "react";
import "./TourList.scss";
const TourList = ({ tour, removeTour }) => {
  const { id, name, image, info, price } = tour;
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image-container" />
      <div className="tour-info">
        <h4 className="tour-name">{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <div className="tour-details">
        <p>
          {readMore ? info : `${info.substring(0, 200)} ...`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
            className="tour-btn-read"
          >
            {readMore ? "Show Less" : "Show More"}
          </button>
        </p>
        <div className="tour-remove-container">
          <button
            className="tour-remove"
            onClick={() => {
              removeTour(id);
            }}
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};
export default TourList;
