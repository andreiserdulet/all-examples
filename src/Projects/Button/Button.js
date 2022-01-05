import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Button.scss";
const Button = ({ name, url }) => {
  return (
    <div className="home">
      <button type="button" className="u-button">
        <Link to={url}>{name}</Link>
      </button>
    </div>
  );
};
export default Button;
