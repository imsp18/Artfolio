import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero section/Hero';
import Tape from './components/tape section/Tape';
import './components/navbar/navbar.css';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Tape />
    </div>

  );
};

export default App;
