import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import projects from "./projects.js";
import Home from "./Home.js";
import BirthdayReminder from "./Projects/01-Birthday-Reminder/BirthdayReminder.js";
import Tours from "./Projects/02-Tours/Tours.js";
import Reviews from "./Projects/03-Reviews/Reviews.js";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  const [project, setProject] = useState(projects);
  const location = useLocation();
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/">
            <Home project={project} />
          </Route>
          <Route path="/01-birthday-reminder">
            <BirthdayReminder />
          </Route>
          <Route path="/02-tours">
            <Tours />
          </Route>
          <Route path="/03-reviews">
            <Reviews />
          </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
