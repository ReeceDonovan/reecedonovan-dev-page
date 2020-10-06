import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/reecedonovan-dev-page/" exact component={Home} />
            <Route
              path="/reecedonovan-dev-page/about"
              exact
              component={About}
            />
            <Route
              path="/reecedonovan-dev-page/projects"
              exact
              component={Projects}
            />
            {/*TODO: <Route path="/contact" exact component={} /> */}
            {/* TODO: Make transition slide exitBeforeEnter then redirect to githum */}
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
