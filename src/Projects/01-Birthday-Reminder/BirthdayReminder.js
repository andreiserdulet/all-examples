import React, { useState } from "react";
import Button from "../Button/Button";
import "./BirthdayReminder.scss";
import { data } from "./data-birthday";
import ListBirthday from "./ListBirthday";
import GridContainer from "../Generics/GridContainer";
import ButtonPrevious from "../Button/ButtonPrevious";
import ButtonNext from "../Button/ButtonNext";
import { AnimatePresence, motion } from "framer-motion";
const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);
  const clearHandler = () => {
    setPeople([]);
    if (people.length === 0) {
      setPeople(data);
    }
  };

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GridContainer>
        <ButtonPrevious url="/" />
        <main className="main-birthday">
          <Button name="Home" url="/" />
          <div className="card-birthday">
            <h1 className="title-birthday">{people.length} Birthdays Today</h1>
            <ListBirthday people={people} />
            <button className="button-birthday" onClick={clearHandler}>
              {people.length === 0 ? "Reset" : "clear data"}
            </button>
          </div>
        </main>
        <ButtonNext url="/02-tours" />
      </GridContainer>
    </motion.div>
  );
};

export default BirthdayReminder;
