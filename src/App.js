import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Footer from "./components/footer/Footer";

import "./App.css";

function App (){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;
