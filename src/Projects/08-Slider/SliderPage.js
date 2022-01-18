import React from "react";
import Button from "../Button/Button";
import ButtonNext from "../Button/ButtonNext";
import ButtonPrevious from "../Button/ButtonPrevious";
import GridContainer from "../Generics/GridContainer";
import HomeTitle from "../Generics/HomeTitle";
import Underline from "../Generics/Underline";
import Slider from "./components/Slider";
import "./SliderPage.scss";
const SliderPage = () => {
  return (
    <GridContainer>
      <ButtonPrevious url="/06-tabs" />
      <main className="slider-main">
        <Button name="Home" url="/" />
        <HomeTitle name="Reviews" />
        <Underline width="75px" />
        <Slider />
      </main>
      <ButtonNext url="/" />
    </GridContainer>
  );
};
export default SliderPage;
