import React from "react";
import "./vision.css";
import Image from "./assets/Image.svg";
import Money from "./assets/Money.svg";

function Vision() {
    return (
        <div className="title">
            OUR <span>VISION</span>
            <div className="vision-container">
                <div className="imgtxt">
                    <div className="desc">
                        At Artfolio, we believe in the transformative power of art and design. Our vision is to create a vibrant ecosystem that enables artists to monetize their creations, while fostering creativity, collaboration, and education within the community.
                        <br />
                        <img src={Money} style={{ marginRight: "270px", height: "119px",transform: "rotate(-10.369deg)" }} alt="Money" />
                    </div>
                    <img src={Image} style={{ marginLeft: "100px" }} alt ="" />
                </div>
            </div>
        </div>
    );
}

export default Vision;
