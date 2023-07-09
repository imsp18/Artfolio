import React from "react";
import "./About.css";
import globeimage from "./assets/Globe.svg";
import Star from "./assets/Star.svg";

function About() {
  return (
    <div className="title">
      ABOUT <span>US</span>
      <div className="about-container">
        <div className="imgtxt">
          <img
            src={globeimage}
            style={{ marginRight: "100px" }}
            alt="globeimage"
          />

          <div className="desc">
            Artfolio is a ground-breaking web3 platform dedicated to empowering
            artists and designers from around the world. We provide a seamless
            experience for artists to showcase their work as NFTs, allowing them
            to reach a global audience of art enthusiasts, collectors, and
            investors.
            <br />
            <img src={Star} style={{ marginLeft: "270px" }} alt="Star" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
