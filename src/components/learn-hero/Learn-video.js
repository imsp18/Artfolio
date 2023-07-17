import React from "react";
import "./learn-hero.css";
import Image from "./assets/Image.svg";
import Image1 from "./assets/Image1.svg";
import Image2 from "./assets/Image2.svg";
import ReactPlayer from "react-player";

function LearnVideo() {
  return (
    <div className="learn-container">
      <div className="learn-content">
        <div className="learn-1">
          <div className="learn-desc">
            <div className="learn-img1">
              <img src={Image} alt="figma" />
            </div>
            <h1
              style={{ color: "#02B377", fontWeight: "bold", fontSize: "24px" }}
            >
              FIGMA BASICS
            </h1>
            <p>
              Dive into fundamentals of Figma and elevate your design skills
              with our comprehensive course.
            </p>
          </div>

          {/* <NavLink to="/discover" className="button">Discover <img src={Arrow} alt="Arrow" /></NavLink>
           */}
          {/* onClick={{ src: "https://youtu.be/OdSgDir6XKs" }} */}
          <button className="learn-button">Click here</button>
        </div>
        <div className="learn-2">
          <div className="learn-desc">
            <div className="learn-img2">
              <img src={Image2} alt="figma" />
            </div>
            <h1
              style={{ color: "#02B377", fontWeight: "bold", fontSize: "24px" }}
            >
              UX RESEARCH
            </h1>
            <p>
              Explore the world of UX research and unlock valuable insights with
              our concise course preview.
            </p>
          </div>
          {/* <div className="feature-button2">
                    <NavLink to="/learn" className="button">Learn <img src={Arrow} alt="Arrow" /></NavLink>
                </div> */}
          <button className="learn-button">Click here</button>
        </div>
        <div className="learn-3">
          <div className="learn-desc">
            <div className="learn-img3">
              <img src={Image1} alt="figma" />
            </div>
            <h1
              style={{ color: "#02B377", fontWeight: "bold", fontSize: "24px" }}
            >
              COLOR THEORY
            </h1>
            <p>
              Explore the world of color theory and elevate your design
              aesthetics with our captivating course preview.
            </p>
          </div>

          {/* <div className="feature-button3">
                    <NavLink to="/learn" className="button">Quiz <img src={Arrow} alt="Arrow" /></NavLink>
                </div> */}
          <button className="learn-button">Click here</button>
        </div>
      </div>
    </div>
  );
}

export default LearnVideo;
