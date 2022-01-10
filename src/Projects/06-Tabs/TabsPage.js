import React from "react";
import Button from "../Button/Button";
import ButtonNext from "../Button/ButtonNext";
import ButtonPrevious from "../Button/ButtonPrevious";
import GridContainer from "../Generics/GridContainer";
import HomeTitle from "../Generics/HomeTitle";
import Underline from "../Generics/Underline";
import Tabs from "./Tabs";
import "./TabsPage.scss";
const TabsPage = () => {
  return (
    <GridContainer>
      <ButtonPrevious url="/05-menu" />
      <main className="tabs-main">
        <Button name="Home" url="/" />
        <HomeTitle name="Expierence" />
        <Underline width="70px" color="hsl(185, 84%, 25%)" />
        <Tabs />
      </main>
      <ButtonNext url="/" />
    </GridContainer>
  );
};
export default TabsPage;
