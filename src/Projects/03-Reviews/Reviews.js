import React from "react";
import Button from "../Button/Button";
import ButtonNext from "../Button/ButtonNext";
import ButtonPrevious from "../Button/ButtonPrevious";
import GridContainer from "../Generics/GridContainer";
import HomeTitle from "../Generics/HomeTitle";
import Underline from "../Generics/Underline";
import Review from "./Review";
import "./Reviews.scss";
const Reviews = () => {
  return (
    <>
      <GridContainer>
        <ButtonPrevious url="02-tours" />
        <main className="main-reviews">
          <Button name="Home" url="/" />
          <HomeTitle name="Our Reviews" />
          <Underline width="75px" />
          <Review />
        </main>
        <ButtonNext url="04-accordion"/>
      </GridContainer>
    </>
  );
};
export default Reviews;
