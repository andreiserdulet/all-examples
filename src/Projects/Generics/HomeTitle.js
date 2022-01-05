import React from "react";
import "./HomeTitle.scss";
const HomeTitle = ({ name }) => {
  return (
    <>
      <h1 className="h1-home">{name}</h1>
    </>
  );
};
export default HomeTitle;
