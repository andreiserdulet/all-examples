import React from "react";
import { useState } from "react/cjs/react.development";
import "./AccordionCard.scss";
import AccordionQuestion from "./AccordionQuestion";
import questions from "./data-accordion";
const AccordionCard = () => {
  const [question, setQuestions] = useState(questions);
  return (
    <div className="accordion-card">
      <header className="accordion-column-1">
        <h1 className="accordion-title-column-1">
          questions and answers about login
        </h1>
      </header>
      <section className="accordion-column-2">
        {question.map((questions) => {
          const { id, title, info } = questions;
          return <AccordionQuestion key={id} {...questions} />;
        })}
      </section>
    </div>
  );
};
export default AccordionCard;
