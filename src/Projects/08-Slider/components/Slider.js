import React, { useState } from "react";
import "./Slider.scss";
import people from "./data-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Slider = () => {
  const [peopleSlider, setPeopleSlider] = useState(people);
  const [indexSlider, setIndexSlider] = useState(0);
  return (
    <section className="slider-section-container">
      {peopleSlider.map((item, index) => {
        const { id, name, title, image, quote } = item;
        return (
          <article className="slider-article" key={id}>
            <img src={image} alt={name} className="slider-image" />
            <h4 className="slider-name">{name}</h4>
          </article>
        );
      })}
    </section>
  );
};
export default Slider;
