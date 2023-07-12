import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Learn from "./pages/Learn";
import Tokenize from "./pages/Tokenize";
import Footer from "./components/footer/Footer";

import "./App.css";

function App (){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/tokenize" element={<Tokenize />} />
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;
