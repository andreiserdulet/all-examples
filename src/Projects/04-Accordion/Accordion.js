import React from "react";
import ButtonNext from "../Button/ButtonNext";
import ButtonPrevious from "../Button/ButtonPrevious";
import GridContainer from "../Generics/GridContainer";
import HomeTitle from "../Generics/HomeTitle";
import Underline from "../Generics/Underline";
import AccordionCard from "./AccordionCard";
import "./Accordion.scss";
import Button from "../Button/Button";
const Accordion = () => {
  return (
    <>
      <GridContainer>
        <ButtonPrevious url="03-reviews" />
        <main className="accordion-main">
          <Button name="Home" url="/" />
          <HomeTitle name="Accordion Project" />
          <Underline width="100px" />
          <AccordionCard />
        </main>
        <ButtonNext url="/05-menu" />
      </GridContainer>
    </>
  );
};
export default Accordion;
