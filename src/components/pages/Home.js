import "../../App.css";
import ContentSection from "../ContentSection";
import React from "react";
import Cards from "../Cards";
import About from "../About";

function Home() {
  return (
    <>
      <ContentSection />
      <About />
      <Cards />
    </>
  );
}

export default Home;
