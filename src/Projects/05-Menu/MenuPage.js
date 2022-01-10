import React from "react";
import ButtonNext from "../Button/ButtonNext";
import ButtonPrevious from "../Button/ButtonPrevious";
import GridContainer from "../Generics/GridContainer";
import Button from "../Button/Button";
import HomeTitle from "../Generics/HomeTitle";
import Underline from "../Generics/Underline";
import "./MenuPage.scss";
import Menu from "./components/Menu";

const MenuPage = () => {
  return (
    <GridContainer>
      <ButtonPrevious url="/04-accordion" />
      <main className="menu-main">
        <Button name="Home" url="/" />
        <HomeTitle name="Our Menu" />
        <Underline width="50px" color="#c59d5f" />
        <Menu />
      </main>
      <ButtonNext url="/06-tabs" />
    </GridContainer>
  );
};
export default MenuPage;
