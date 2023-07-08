import React from "react";
import DiscHero from "../components/disc-hero/Disc-hero";
import Line from "../components/line-separator/Line";
import Art from "../components/art/Art";
import Footer from "../components/footer/Footer";


const App = () => {
  return (
    <div className="App">
      <DiscHero />
      <Line />
      <Art />
      <Footer />
    </div>
  );
};

export default App;