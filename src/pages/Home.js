import React from "react";
import Hero from "../components/hero/Hero";
import Tape from "../components/tape/Tape";
import About from "../components/about/About";
import Vision from "../components/vision/vision"; 
import Mission from "../components/mission/Mission";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Tape />
      <About />
      <Vision />
      <Mission />
    </div>
  );
};

export default App;