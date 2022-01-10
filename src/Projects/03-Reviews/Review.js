import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faQuoteRight,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import "./Review.scss";
import reviews from "./data-reviews";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, image, job, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    return setIndex(checkNumber(randomNumber));
  };
  return (
    <section className="reviews">
      <div className="review-card">
        <p>{id}</p>

        <img src={image} alt={name} className="image-review" />
        <span className="quote-icon-review">
          <FontAwesomeIcon icon={faQuoteRight} />
        </span>
        <h1 className="name-review">{name}</h1>
        <p className="job-review">{job}</p>
        <p className="text-review">{text}</p>
        <div className="change-btn-review">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="icon-review"
            onClick={prevPerson}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className="icon-review"
            onClick={nextPerson}
          />
        </div>
        <button className="btn-review" onClick={randomPerson}>
          Random
        </button>
      </div>
    </section>
  );
};
export default Review;
