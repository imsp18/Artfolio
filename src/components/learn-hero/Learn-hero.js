import React from "react";
import "./learn-hero.css";
import { useState } from "react";

const LearnHero = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  // Perform search operation based on searchText
  console.log("Searching for:", searchText);

  return (
    <div className="learn-hero-container">
      <div className="learn-hero-text">
        <h1>
          <span>Lessons</span>
        </h1>
        <p>Unleash your creative potential with Artfolio's engaging courses.</p>
      </div>
      <div className="learn-hero-rectangle">
        <input
          className="learn-hero-button"
          type="text"
          placeholder="Search Lessons"
          value={searchText}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default LearnHero;
