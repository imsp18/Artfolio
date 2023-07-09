import React from 'react';
import "./feature.css";
import img1 from "./assets/img1.svg";
import img2 from "./assets/img2.svg";
import img3 from "./assets/img3.svg";
import Arrow from "./assets/Arrow.svg";
import { NavLink } from "react-router-dom";


function Feature() {
    return (
        <div className="feature-container">
            <div className="feature-title">
                <h1>Problem Encountered?</h1>
                <h2>Artfolio brings forth a diverse range of solutions to fuel your creative journey!</h2>
                <p>Revolutionize your artistic journey with no bounds!</p>
            </div>
            <div className="feature-content">
                <div className="feature-1">
                    <div className="feature-img">
                        <img src={img1} alt="img1" />
                    </div>
                    <div className="feature-desc">
                        <h1>TOKENIZE YOUR ART</h1>
                        <p>Artfolio allows you to tokenize your artwork as unique digital assets. By minting your art as NFTs, you gain the ability to prove ownership, track provenance, and sell your artwork directly to collectors worldwide. Join us on Artfolio and showcase your art in a new digital dimension.</p>
                    </div>
                    <div className="feature-button1">
                        <NavLink to="/discover" className="button">Discover <img src={Arrow} alt="Arrow" /></NavLink>

                    </div>
                </div>
                <div className="feature-2">
                    <div className="feature-img">
                        <img src={img2} alt="img2" />
                    </div>
                    <div className="feature-desc">
                        <h1>Learn and Earn:</h1>
                        <p>Artfolio is not just a platform for showcasing art; it's also a place to learn and grow as a designer. Our platform offers a range of short, interactive content focused on design principles, techniques, and best practices. Dive into our engaging tutorials and enrich your skills in a fun and interactive manner.</p>
                    </div>
                    <div className="feature-button2">
                        <NavLink to="/learn" className="button">Learn <img src={Arrow} alt="Arrow" /></NavLink>
                    </div>
                </div>
                <div className="feature-3">
                    <div className="feature-img">
                        <img src={img3} alt="img3" />
                    </div>
                    <div className="feature-desc">
                        <h1>Challenge Yourself </h1>
                        <p>Test your design knowledge with our interactive quizzes in the Quiz Section. Answer questions related to design theory, famous artworks, and emerging trends. Each correct answer brings you closer to unlocking exclusive rewards, including limited-edition digital collectibles and access to premium features.</p>
                    </div>
                    <div className="feature-button3">
                        <NavLink to="/learn" className="button">Quiz <img src={Arrow} alt="Arrow" /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature; 