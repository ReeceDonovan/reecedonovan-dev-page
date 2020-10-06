import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const pageTransition = {
  duration: 0.5,
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
