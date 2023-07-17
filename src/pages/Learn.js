import React from "react";
import LearnHero from "../components/learn-hero/Learn-hero";
import Line from "../components/line-separator/Line";
import LearnVideo from "../components/learn-hero/Learn-video";

const App = () => {
  return (
    <div className="App">
      <LearnHero />
      <Line />
      <LearnVideo />
    </div>
  );
};

export default App;
