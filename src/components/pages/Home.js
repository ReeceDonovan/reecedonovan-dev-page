import "../../App.css";
import ContentSection from "../ContentSection";
import React from "react";
import { motion } from "framer";

let pageVariants = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100%",
  },
};

const pageTransition = {
  duration: 0.35,
  ease: "ease",
};

function Home() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariants}
    >
      <ContentSection />
    </motion.div>
  );
}

export default Home;
