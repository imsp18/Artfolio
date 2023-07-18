import React from "react";
import LearnHero from "../components/learn-hero/Learn-hero";
import Line from "../components/line-separator/Line";
import Courses from "../components/learn-hero/Learn-video";

const App = () => {
  return (
    <div className="App">
      <LearnHero />
      <Line />
      <Courses />
    </div>
  );
};

export default App;
