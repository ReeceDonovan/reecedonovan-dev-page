import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/reecedonovan-dev-page/" exact component={Home} />
          <Route path="/reecedonovan-dev-page/about" exact component={About} />
          <Route
            path="/reecedonovan-dev-page/projects"
            exact
            component={Projects}
          />
          <Route
            exact
            path="/github"
            render={() => (window.location = "https://github.com/ReeceDonovan")}
          />
          <Route
            exact
            path="/insta"
            render={() =>
              (window.location = "https://www.instagram.com/r_e_e_c_e_9_9/")
            }
          />
          <Route
            exact
            path="/email"
            render={() => (window.location = "mailto:reecedonovan99@gmail.com")}
          />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
