import React from "react";
import "../../App.css";
import { motion } from "framer";

import AboutSec from "../AboutSec.js";

function About() {
  let pageVariants = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "100%",
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
      <AboutSec />
    </motion.div>
  );
}
export default About;
