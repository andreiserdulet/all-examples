import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import "./AccordionQuestion.scss";
const AccordionQuestion = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="accordion-question-card">
      <div className="accordion-question">
        <div className="accordion-question-title">
          <h1>{title}</h1>
        </div>
        {show && (
          <div className="accordion-question-info">
            <p>{info}</p>
          </div>
        )}
      </div>
      <button
        className="accordion-btn"
        onClick={() => {
          setShow(!show);
          console.log(show);
        }}
      >
        {show ? (
          <FontAwesomeIcon icon={faPlus} className="accordion-icon" />
        ) : (
          <FontAwesomeIcon icon={faMinus} className="accordion-icon" />
        )}
      </button>
    </div>
  );
};
export default AccordionQuestion;
