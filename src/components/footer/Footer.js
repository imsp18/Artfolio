import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";
import mail from "./assets/mail.svg";



const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">Artfolio</div>
                <ul className="footer-menu">
                    <li><NavLink to="/" className="footer-navlink">Home</NavLink></li>
                    <li><NavLink to="/discover" className="footer-navlink">Discover</NavLink></li>
                    <li><NavLink to="/tokenize" className="footer-navlink">Tokenize</NavLink></li>
                    <li><NavLink to="/learn" className="footer-navlink">Learn</NavLink></li>
                </ul>
            </div>

            <div className="footer-socials">
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={mail} alt="" />
            </div>
            <div className="footer-terms">
                <p>Artfolio © 2023</p>
            </div>
        </footer>
    );
}

export default Footer;
