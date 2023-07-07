import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Tape from "./components/tape/Tape";
import About from "./components/about/About";

// import "./components/navbar/navbar.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Tape />
      <About />
    </div>
  );
};

export default App;
