import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import ButtonNext from "../Button/ButtonNext";
import ButtonPrevious from "../Button/ButtonPrevious";
import GridContainer from "../Generics/GridContainer";
import HomeTitle from "../Generics/HomeTitle";
import Underline from "../Generics/Underline";
import Tour from "./components/Tour";
import { URL } from "./data-tours";
import { AnimatePresence, motion } from "framer-motion";

const Tours = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <GridContainer>
        <ButtonPrevious url="01-birthday-reminder" />
        <main className="main-tours">
          <Button name="Home" url="/" />
          <HomeTitle name="Our Tours" />
          <Underline width="75px" />
          <Tour url={URL} />
        </main>
        <ButtonNext url="03-reviews" />
      </GridContainer>
    </motion.div>
  );
};
export default Tours;
