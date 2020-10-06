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
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            {/*TODO: <Route path="/contact" exact component={} /> */}
            {/* TODO: Make transition slide exitBeforeEnter then redirect to githum */}
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
