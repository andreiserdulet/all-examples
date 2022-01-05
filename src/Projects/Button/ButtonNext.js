import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import "./ButtonNext.scss";
const ButtonNext = ({ url }) => {
  return (
    <div className="next">
      <Link to={url}>
        <FontAwesomeIcon icon={faHandPointRight} className="icon" />
      </Link>
    </div>
  );
};
export default ButtonNext;
