import React from "react";
import "./disc-hero.css";
import { useState } from "react";

const DiscHero = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  // Perform search operation based on searchText
  console.log("Searching for:", searchText);

  return (
    <div className="disc-hero-container">
      <div className="disc-hero-text">
        <h1>
          Explore the <span>Artistic Landscape</span>, Discover Artists'{" "}
          <span>Visionary</span> Work{" "}
        </h1>
        <p>
          Explore a captivating world of art and uncover endless inspiration.
        </p>
      </div>
      <div className="disc-hero-rectangle">
        <input
          className="disc-hero-button"
          type="text"
          placeholder="Search your favourite design"
          value={searchText}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default DiscHero;
