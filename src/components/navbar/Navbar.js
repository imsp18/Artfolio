import React from 'react';

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
