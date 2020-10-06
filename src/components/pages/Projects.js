import React from "react";
import "../../App.css";
import { motion } from "framer-motion";
import Cards from "../Cards.js";
const pageVariants = {
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
  duration: 0.5,
  transition: "ease",
};
function Projects() {
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
