import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Learn from "./pages/Learn";
import Tokenize from "./pages/Tokenize";
import Footer from "./components/footer/Footer";
import Course1 from "./components/courses/course1";
import Course2 from "./components/courses/course2";
import Course3 from "./components/courses/course3";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/tokenize" element={<Tokenize />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/course1" element={<Course1 />} />
        <Route path="/course2" element={<Course2 />} />
        <Route path="/course3" element={<Course3 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
