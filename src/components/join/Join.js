import React from "react";
import "./join.css";
import { NavLink } from "react-router-dom";

function Join() {
    return (
        <div className="join-container">
            <div className="join-content">
                <h1>Elevate your NFT experience with Artfolio: Unleash the Power of Art Investment!</h1>
                <p>Where Art and Blockchain Converge, Redefining the Future of Investment.</p>
                <NavLink to="/discover" className="join-button">JOIN US NOW</NavLink>
            </div>
        </div>
    );
}

export default Join;