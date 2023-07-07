import React from "react";
// import About from "../about/About";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">Artfolio</div>
      <ul className="menu">
        <li>About</li>

        <li>Discover</li>
        <li>Tokenize</li>
        <li>Learn</li>
      </ul>
      <button className="wallet-button"> Connect Wallet</button>
    </nav>
  );
};

export default Navbar;
