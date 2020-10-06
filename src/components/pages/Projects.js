import React from "react";
import "../../App.css";
import { motion } from "framer";
import Cards from "../Cards.js";

function Projects() {
  let pageVariants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "100%",
    },
  };

  const pageTransition = {
    duration: 0.35,
    ease: "ease",
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariants}
    >
      <Cards />
    </motion.div>
  );
}
export default Projects;
