import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import { useEffect, useState } from "react";
import logout from "./assets/log-out.svg";

fcl
  .config()
  .put("accessNode.api", "https://access-testnet.onflow.org")
  .put("discovery.wallet", "https://flow-wallet-testnet.blocto.app/authn");

const Navbar = () => {
  const [user, setUser] = useState();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
  }, []);

  const handleWalletToggle = () => {
    if (isConnected) {
      fcl.unauthenticate();
      setIsConnected(false);
    } else {
      fcl.authenticate();
      setIsConnected(true);
    }
  };
  return (
    <nav>
      <div className="logo">Artfolio</div>
      <ul className="menu">
        <li>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/discover" className="navlink">
            Discover
          </NavLink>
        </li>
        <li>
          <NavLink to="/tokenize" className="navlink">
            Tokenize
          </NavLink>
        </li>
        <li>
          <NavLink to="/learn" className="navlink">
            Learn
          </NavLink>
        </li>
      </ul>
      <button className="wallet-button" onClick={handleWalletToggle}>
        {isConnected ? `${user?.addr}` : "Connect Wallet"}
        {isConnected && (
          <img onClick={handleWalletToggle} src={logout} alt="Log out" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
