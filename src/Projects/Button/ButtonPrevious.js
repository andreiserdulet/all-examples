import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import "./ButtonPrevious.scss";
const ButtonPrevious = ({ url }) => {
  return (
    <div className="previous">
      <Link to={url}>
        <FontAwesomeIcon icon={faHandPointLeft} className="icon" />
      </Link>
    </div>
  );
};
export default ButtonPrevious;
