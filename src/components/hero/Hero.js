import React from "react";
import "./hero.css";
import image1 from "./assests/image-1.png";
import image2 from "./assests/image-2.png";
import image3 from "./assests/image-3.png";
import image4 from "./assests/image-4.png";
import image5 from "./assests/image-5.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Where
            <span>
              <br></br>Imagination Transcends
            </span>{" "}
            Traditional Canvases
          </h1>
        </div>
        <div className="discover">
          <div className="discover-rectangle">
            <div className="discover-text">
              <p>
                Explore a captivating world of art and uncover endless
                inspiration.
              </p>
            </div>
            <button className="discover-button">
              <NavLink to="/discover" className="navlink"><h1>Discover More</h1></NavLink>{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Iconsax/Linear/arrowright">
                  <path
                    id="Vector"
                    d="M14.43 6.30194L20.5 12.3719L14.43 18.4419M3.5 12.3719H20.33"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="stats">
            <div className="stats-1">
              <h1>30k+</h1>
              <p>Artworks</p>
            </div>
            <div className="stats-2">
              <h1>500+</h1>
              <p>Artists</p>
            </div>
            <div className="stats-3">
              <h1>10+</h1>
              <p>Quiz</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="row-1">
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
        </div>
        <div className="row-2">
          <img src={image4} alt="image4" />
          <img src={image5} alt="image5" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
