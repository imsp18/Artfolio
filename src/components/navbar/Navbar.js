import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Artfolio</div>
      <ul className="menu">
        <li><NavLink to="/" className="navlink">Home</NavLink></li>
        <li><NavLink to="/discover" className="navlink">Discover</NavLink></li>
        <li><NavLink to="/tokenize" className="navlink">Tokenize</NavLink></li>
        <li><NavLink to="/learn" className="navlink">Learn</NavLink></li>
      </ul>
      <button className="wallet-button"> Connect Wallet</button>
    </nav>
  );
};

export default Navbar;
