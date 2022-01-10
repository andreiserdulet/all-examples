import React, { useState } from "react";
import "./Home.scss";
import HomeCard from "./Projects/Generics/HomeCard";
import HomeTitle from "./Projects/Generics/HomeTitle";
import Underline from "./Projects/Generics/Underline";
import { AnimatePresence, motion } from "framer-motion";

const Home = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="main-home">
        <HomeTitle name="Basic Projects" />
        <Underline width="50px" />
        <div className="container">
          <HomeCard project={project} />
        </div>
        <a
          href="https://github.com/andreiserdulet/all-examples"
          className="p-home"
        >
          A.S
        </a>
      </main>
    </motion.div>
  );
};
export default Home;
