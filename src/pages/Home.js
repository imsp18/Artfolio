import React from "react";
import Hero from "../components/hero/Hero";
import Tape from "../components/tape/Tape";
import About from "../components/about/About";
import Vision from "../components/Vision/vision";
import Mission from "../components/mission/Mission";
import Feature from "../components/feature/Feature";
import Join from "../components/join/Join";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Tape />
      <About />
      <Vision />
      <Mission />
      <Feature />
      <Join />
    </div>
  );
};

export default App;
